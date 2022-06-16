import nodemailer from 'nodemailer';
import { MailAdapter, SendMailData } from "../mail-adapter";

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "8e3320564df055",
    pass: "9610561bd23857"
  }
});

export class NodemailerMailAdapter implements MailAdapter {
  async sendMail({ subject,body }: SendMailData) {
    await transport.sendMail({
      from: 'Equipe Feedget <oi@feedget.com>',
      to: 'Marcelo Galli <marcelolemesgalli@hotmail.com>',
      subject,
      html: body,
    });
  }
}

// [
//   `<div style="font-family: sans-serif; font-size: 16px; color: #111;">`,
//   `<p>Tipo do feedback: ${type}</p>`,
//   `<p>Comentário: ${comment}</p>`,
//   `</div>`,
// ].join('\n')