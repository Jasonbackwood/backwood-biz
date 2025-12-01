import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export const config = {
  api: {
    bodyParser: false,
  },
};

export async function POST(req) {
  try {
    const formData = await req.formData();

    const name = formData.get("name");
    const email = formData.get("email");
    const phone = formData.get("phone");
    const details = formData.get("details");

    const receivedFiles = formData.getAll("files");

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS,
      },
    });

    const mailOptions = {
      from: `"Backwood Website" <${process.env.GMAIL_USER}>`,
      to: process.env.SEND_TO,
      subject: `New Project Submission from ${name}`,
      text: `
Name: ${name}
Email: ${email}
Phone: ${phone}

Project Details:
${details}
      `,
      attachments: [],
    };

    // Add every file to email
    for (const file of receivedFiles) {
      if (file && file.name) {
        const buffer = Buffer.from(await file.arrayBuffer());

        mailOptions.attachments.push({
          filename: file.name,
          content: buffer,
        });
      }
    }

    await transporter.sendMail(mailOptions);
    return NextResponse.json({ success: true }, { status: 200 });
  } catch (err) {
    console.error("QUOTE ERROR:", err);
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
