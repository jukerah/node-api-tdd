import {
  type InputSendMailNewUser,
  type IMessage
} from "@/application/interfaces/providers/mail-provider"

export const mailOptionsNewUser = (input: InputSendMailNewUser): IMessage => {
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
