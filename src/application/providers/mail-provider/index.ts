import {
  type IMailProvider,
  type IMessage
} from "@/application/interfaces/providers/mail-provider"

class MailProvider implements IMailProvider {
  constructor (private readonly nodemailer: any) {}

  async sendMail (input: IMessage): Promise<boolean> {
    const transporter = this.nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL,
        pass: process.env.EMAIL_PASSWORD
      }
    })

    const mailOptions = {
      from: input.from,
      to: input.to,
      subject: input.subject,
      html: input.body
    }

    transporter.sendMail(mailOptions, () => {
      transporter.close()
    })

    return true
  }
}

export { MailProvider }
