<?php
// Prevent CORS issues
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type");

// Handle preflight request
if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
    http_response_code(200);
    exit();
}

$recipient_email = "info@sanmarina.edu.np"; // Update this to your email
$subject_prefix = "[Website Submission] ";

$response = ["status" => "error", "message" => "Invalid request"];

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    
    // Check if it's a file upload (Job Application) or JSON (Contact Form)
    $is_file_upload = !empty($_FILES);
    $data = [];

    if ($is_file_upload) {
        $data = $_POST;
    } else {
        $json = file_get_contents("php://input");
        $data = json_decode($json, true);
    }

    if ($data) {
        // Construct Email Content
        $type = isset($data['formType']) ? $data['formType'] : 'Contact Form';
        $subject = $subject_prefix . $type;
        
        $body = "<h2>New Submission: " . htmlspecialchars($type) . "</h2>";
        $body .= "<table border='1' cellpadding='10'>";
        
        foreach ($data as $key => $value) {
            if ($key != 'formType' && $key != 'file') {
                $body .= "<tr><td><strong>" . htmlspecialchars(ucfirst($key)) . "</strong></td><td>" . htmlspecialchars($value) . "</td></tr>";
            }
        }
        $body .= "</table>";

        // Headers
        $headers = "MIME-Version: 1.0" . "\r\n";
        $headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
        $headers .= "From: Website <no-reply@sanmarina.edu.np>" . "\r\n"; // Update sender if needed

        // File Attachment Logic (for Job Application)
        if ($is_file_upload && isset($_FILES['resume']) && $_FILES['resume']['error'] == UPLOAD_ERR_OK) {
            $file_tmp_name = $_FILES['resume']['tmp_name'];
            $file_name = $_FILES['resume']['name'];
            $file_size = $_FILES['resume']['size'];
            $file_type = $_FILES['resume']['type'];
            
            $handle = fopen($file_tmp_name, "r");
            $content = fread($handle, $file_size);
            fclose($handle);
            $encoded_content = chunk_split(base64_encode($content));

            $boundary = md5("sanmarina");
            
            // Rewrite headers for attachment
            $headers = "MIME-Version: 1.0\r\n";
            $headers .= "From: Website <no-reply@sanmarina.edu.np>\r\n";
            $headers .= "Content-Type: multipart/mixed; boundary = $boundary\r\n\r\n";
            
            // Plain text body
            $message = "--$boundary\r\n";
            $message .= "Content-Type: text/html; charset=UTF-8\r\n";
            $message .= "Content-Transfer-Encoding: 7bit\r\n\r\n";
            $message .= $body . "\r\n";
            
            // Attachment
            $message .= "--$boundary\r\n";
            $message .= "Content-Type: $file_type; name=\"$file_name\"\r\n";
            $message .= "Content-Disposition: attachment; filename=\"$file_name\"\r\n";
            $message .= "Content-Transfer-Encoding: base64\r\n\r\n";
            $message .= $encoded_content . "\r\n";
            $message .= "--$boundary--";
            
            if (mail($recipient_email, $subject, $message, $headers)) {
                $response = ["status" => "success", "message" => "Application sent successfully!"];
            } else {
                $response = ["status" => "error", "message" => "Failed to send email."];
            }

        } else {
            // Standard Email (Contact Form)
            if (mail($recipient_email, $subject, $body, $headers)) {
                $response = ["status" => "success", "message" => "Message sent successfully!"];
            } else {
                $response = ["status" => "error", "message" => "Failed to send email."];
            }
        }
    }
}

echo json_encode($response);
?>