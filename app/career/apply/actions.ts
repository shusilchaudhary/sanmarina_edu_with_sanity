"use server";

import { createClient } from "@sanity/client";
import { Resend } from "resend";

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: "2024-03-07",
  token: process.env.SANITY_API_WRITE_TOKEN, // Needs to be added to .env.local
  useCdn: false,
});

const resend = new Resend(process.env.RESEND_API_KEY);

export async function submitJobApplication(formData: FormData) {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const phone = formData.get("phone") as string;
  const position = formData.get("position") as string;
  const message = formData.get("message") as string;
  const file = formData.get("resume") as File;

  try {
    let resumeAssetId = null;

    if (file && file.size > 0) {
      // 1. Upload resume to Sanity Assets
      const asset = await client.assets.upload("file", file, {
        filename: file.name,
      });
      resumeAssetId = asset._id;
    }

    // 2. Create Job Application document in Sanity
    await client.create({
      _type: "jobApplication",
      applicantName: name,
      email,
      phone,
      appliedFor: {
        _type: "reference",
        _ref: "placeholder-job-id", // Optional: link to actual job ID if available
      },
      resume: resumeAssetId
        ? {
            _type: "file",
            asset: {
              _type: "reference",
              _ref: resumeAssetId,
            },
          }
        : undefined,
      coverLetter: message,
      status: "new",
    });

    // 3. Send Email Notification via Resend
    if (process.env.RESEND_API_KEY) {
      await resend.emails.send({
        from: "San Marina Careers <onboarding@resend.dev>", // Update with verified domain later
        to: "info@sanmarina.edu.np",
        subject: `New Job Application: ${name} (${position})`,
        html: `
          <h1>New Job Application Received</h1>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>Position:</strong> ${position}</p>
          <p><strong>Message:</strong> ${message}</p>
          <p><em>Resume has been uploaded to Sanity CMS.</em></p>
        `,
      });
    }

    return { success: true };
  } catch (error) {
    console.error("Application submission error:", error);
    return {
      success: false,
      error:
        "Failed to submit application. Please try again or email info@sanmarina.edu.np",
    };
  }
}
