const nodemailer = require('nodemailer');

class MailSender {
  constructor() {
    this._transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      secure: true,
      auth: {
        user: process.env.MAIL_ADDRESS,
        pass: process.env.MAIL_PASSWORD,
      },
    });
  }

  sendMail(targetEmail, content) {
    const message = {
      from: 'Music App',
      to: targetEmail,
      subject: 'Ekspor lagu dalam playlist',
      text: 'Terlampir hasil dari ekspor lagu dalam playlist',
      attachments: [
        {
          filename: 'SongFromPlaylist.json',
          content,
        },
      ],
    };

    return this._transporter.sendMail(message);
  }
}

module.exports = MailSender;
