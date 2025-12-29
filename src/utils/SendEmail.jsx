import emailjs from "emailjs-com";

export async function sendEmail(formData) {
  try {
    emailjs.send(
      "service_d68foc6",
      "template_ch92v7g",
      {
        from_email: formData.email,
        message: formData.message,
      },
      "gaz7InjeZVvwuQpKh"
    );
    return { success: true, message: "Message sent successfully!" };
  } catch (error) {
    console.error("Email send failed:", error);
    return { success: false, message: "Failed to send email." };
  }
}
