import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    // Parse form data from request
    const formData = await req.formData();

    const name = formData.get("name");
    const email = formData.get("email");
    const phone = formData.get("phone");
    const details = formData.get("details");

    const uploadedFiles = formData.getAll("files"); // multiple file support

    // Email setup
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

    // Attach all files
    for (const file of uploadedFiles) {
      if (!file || !file.name) continue;

      const buffer = Buffer.from(await file.arrayBuffer());

      mailOptions.attachments.push({
        filename: file.name,
        content: buffer,
      });
    }

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (err) {
    console.error("SEND QUOTE ERROR →", err);
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
