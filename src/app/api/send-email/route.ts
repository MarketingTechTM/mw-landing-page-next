import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  const data = await req.json();
  const { email, firstname, lastname, jobTitle, budget, referral } = data;

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER, // your Gmail
      pass: process.env.EMAIL_PASSWORD, // your Gmail app password
    },
  });

  const mailOptions = {
    from: `"Website Contact" <${process.env.EMAIL_USER}>`,
    to: process.env.EMAIL_USER, // 👈 your personal/business email
    replyTo: email, // so you can reply directly to user
    subject: "📩 New Booking Inquiry",
    html: `
  <div style="font-family: 'Segoe UI', sans-serif; max-width: 600px; margin: auto; padding: 24px; background-color: #ffffff; border-radius: 10px; border: 1px solid #e0e0e0; box-shadow: 0 2px 8px rgba(0,0,0,0.05); color: #333;">
    
    <!-- Logo (optional) -->
    <div style="text-align: center; margin-bottom: 20px;">
      <img src="https://prod.d2z8r22t5ylzub.amplifyapp.com/logo.png" alt="Your Brand Logo" style="height: 50px;" />
    </div>

    <h2 style="color: #2d2d2d; margin-bottom: 20px; text-align: center; border-bottom: 2px solid #4caf50; padding-bottom: 10px;">
      📩 New Booking Request
    </h2>

    <table style="width: 100%; font-size: 16px; line-height: 1.6;">
      <tr>
        <td style="padding: 8px 0;"><strong>👤 Name:</strong></td>
        <td>${firstname} ${lastname}</td>
      </tr>
      <tr>
        <td style="padding: 8px 0;"><strong>📧 Email:</strong></td>
        <td><a href="mailto:${email}" style="color: #4caf50;">${email}</a></td>
      </tr>
      <tr>
        <td style="padding: 8px 0;"><strong>💼 Job Title:</strong></td>
        <td>${jobTitle}</td>
      </tr>
      <tr>
        <td style="padding: 8px 0;"><strong>💰 Budget:</strong></td>
        <td>₹${budget} Lakhs</td>
      </tr>
      <tr>
        <td style="padding: 8px 0;"><strong>📣 Referral:</strong></td>
        <td>${referral}</td>
      </tr>
    </table>

    <!-- Call-to-action -->
    <div style="text-align: center; margin-top: 30px;">
      <a href="mailto:${email}" style="display: inline-block; background-color: #4caf50; color: #fff; padding: 12px 20px; border-radius: 6px; text-decoration: none; font-weight: 500;">
        📤 Reply to this Inquiry
      </a>
    </div>

    <p style="margin-top: 30px; font-size: 13px; color: #888; text-align: center;">
      ⏱ Received on ${new Date().toLocaleString("en-IN", {
        dateStyle: "medium",
        timeStyle: "short",
      })}
    </p>
  </div>
`,
  };

  try {
    await transporter.sendMail(mailOptions);
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Failed to send email:", error);
    return NextResponse.json(
      { success: false, error: error instanceof Error ? error.message : "Unknown error" },
      { status: 500 }
    );
  }
}
