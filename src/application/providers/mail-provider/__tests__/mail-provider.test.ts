import { MailProvider } from "@/application/providers/mail-provider"
import { nodeMailerMock } from "@/libs/__mocks__/nodemailer"

describe("Mail provider", () => {
  let mailProvider: MailProvider

  beforeAll(async () => {
    mailProvider = new MailProvider(nodeMailerMock)
  })

  it("should be able to send mail", async () => {
    const data = {
      from: "email-from@email.com",
      to: "email-to@email.com",
      subject: "Subject",
      body: "Body"
    }

    const sut = await mailProvider.sendMail(data)

    expect(sut).toBeTruthy()
  })
})
