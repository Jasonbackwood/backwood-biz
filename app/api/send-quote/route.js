import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const form = await req.formData();

    const name = form.get("name");
    const email = form.get("email");
    const phone = form.get("phone");
    const projectType = form.get("projectType");
    const details = form.get("details");
    const file = form.get("file");

    let attachment = null;

    if (file && typeof file === "object") {
      const bytes = await file.arrayBuffer();
      attachment = {
        filename: file.name,
        content: Buffer.from(bytes),
      };
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: `"Backwood Illuminated" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_TO,
      subject: "New Custom Quote Request",
      html: `
        <h2>New Quote Request</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Project Type:</strong> ${projectType}</p>
        <p><strong>Details:</strong><br>${details}</p>
      `,
      attachments: attachment ? [attachment] : [],
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("EMAIL SEND ERROR:", err);
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
  }
}
