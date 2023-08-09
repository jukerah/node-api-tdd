import { IMessage } from "../../interfaces/providers/mail-provider"

class MailProvider {
	constructor(private nodemailer: any) {}

	async sendMail({ from, to, subject, body }: IMessage): Promise<boolean> {
		const transporter = this.nodemailer.createTransport({ 
			service: "gmail", 
			auth: { 
				user: process.env.EMAIL, 
				pass: process.env.EMAIL_PASSWORD 
			} 
		})

		const mailOptions = {
			from: from,
			to: to,
			subject: subject,
			html: body
		}

		transporter.sendMail(mailOptions, () => {
			transporter.close()
		})

		return true
	}
}

export { MailProvider}