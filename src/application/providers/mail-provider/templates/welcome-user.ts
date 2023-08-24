import { InputSendMailNewUser } from "../../../interfaces/providers/mail-provider"

const mailOptionsNewUser = (input: InputSendMailNewUser) => {
  return {
    from: input.from,
    to: input.to,
    subject: "Seja bem vindo",
    body: `
			<h1>Seja bem vindo</h1>
			<br>
			<p>Caro ${input.username}, seja bem vindo ao sistema.</p>
			<br>
			<a href="${process.env.WEB_URL}">${process.env.WEB_URL}</a>
    `
  }
}

export default mailOptionsNewUser
