export interface IMailProvider {
  sendMail: (request: IMessage) => Promise<boolean>
}

interface InputSendMailNewUser {
  from: string
  to: string
  username: string
}

interface IMessage {
  from: string
  to: string
  subject: string
  body: string
}

export type { InputSendMailNewUser, IMessage }
