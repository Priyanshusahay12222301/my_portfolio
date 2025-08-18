import nodemailer from 'nodemailer';

export default async function sendEmail(name, email, message){
  const { EMAIL_USER, EMAIL_PASS } = process.env;
  if(!EMAIL_USER || !EMAIL_PASS){
    throw new Error('Email credentials not configured');
  }
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: { user: EMAIL_USER, pass: EMAIL_PASS }
  });

  const mailOptions = {
    from: `Portfolio Contact <${EMAIL_USER}>`,
    to: EMAIL_USER,
    replyTo: email,
    subject: 'New Portfolio Contact Submission',
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    html: `<h2>New Contact Message</h2><p><strong>Name:</strong> ${name}</p><p><strong>Email:</strong> ${email}</p><p><strong>Message:</strong><br/>${message.replace(/\n/g,'<br/>')}</p>`
  };

  await transporter.sendMail(mailOptions);
}
