"use server";

import { createServerSupabaseClient } from "@/lib/supabase-server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function submitJobApplication(formData: FormData) {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const phone = formData.get("phone") as string;
  const position = formData.get("position") as string;
  const message = formData.get("message") as string;
  const file = formData.get("resume") as File;

  const supabase = createServerSupabaseClient();

  try {
    let resumeUrl: string | null = null;

    // Upload resume to Supabase Storage if provided
    if (file && file.size > 0) {
      const fileExt = file.name.split(".").pop();
      const fileName = `${Date.now()}-${name.replace(/\s+/g, "-")}.${fileExt}`;
      const filePath = `resumes/${fileName}`;

      const { error: uploadError } = await supabase.storage
        .from("job-applications")
        .upload(filePath, file, { contentType: file.type });

      if (!uploadError) {
        const { data: urlData } = supabase.storage
          .from("job-applications")
          .getPublicUrl(filePath);
        resumeUrl = urlData.publicUrl;
      }
    }

    // Save application to Supabase database
    const { error: dbError } = await supabase.from("job_applications").insert({
      applicant_name: name,
      email,
      phone,
      applied_for: position,
      cover_letter: message,
      resume_url: resumeUrl,
      status: "new",
    });

    if (dbError) {
      console.error("DB insert error:", dbError);
      return { success: false, error: "Failed to save application. Please try again." };
    }

    // Send email notification via Resend
    if (process.env.RESEND_API_KEY) {
      await resend.emails.send({
        from: "San Marina Careers <onboarding@resend.dev>",
        to: "info@sanmarina.edu.np",
        subject: `New Job Application: ${name} (${position})`,
        html: `
          <h1>New Job Application Received</h1>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>Position:</strong> ${position}</p>
          <p><strong>Cover Letter:</strong> ${message}</p>
          ${resumeUrl ? `<p><strong>Resume:</strong> <a href="${resumeUrl}">Download Resume</a></p>` : ""}
        `,
      });
    }

    return { success: true };
  } catch (error) {
    console.error("Application submission error:", error);
    return {
      success: false,
      error: "Failed to submit application. Please try again or email info@sanmarina.edu.np",
    };
  }
}
