import { Resend } from 'resend';
import { NextResponse } from 'next/server';
const resend = new Resend(process.env.RESEND_API_KEY);
export async function POST(req: Request) {
  const { name, email, message } = await req.json();
  await resend.emails.send({
    from: 'Contact Form <noreply@maroteagency.com>',
    to: 'administration@maroteagency.com',
    subject: `New contact from ${name}`,
    html: `<p><b>Name:</b> ${name}</p><p><b>Email:</b> ${email}</p><p><b>Message:</b> ${message}</p>`
  });
  return NextResponse.json({ success: true });
}
