import { validate } from "@/application/factories/helpers"
import { file } from "@/application/helpers"
import { templatePdf } from "@/application/templates/pdf/template-pdf"
import dotenv from "@/libs/dotenv"
dotenv.config({ path: ".env.test" })

describe("File", () => {
  let filePath = ""

  it("should be able to create pdf", async () => {
    const fileName = "fileName"
    const path = "src/tmp/pdf"

    const sut = await file.createPdf(fileName, path, templatePdf())

    filePath = sut.filePath as string

    expect(sut.message).toEqual("Pdf criado com sucesso!")
    expect(validate.stringType(filePath)).toBeTruthy()
  })

  it("should be able to delete pdf", () => {
    const sut = file.deletePdf(filePath)

    expect(sut).toEqual("Pdf deletado com sucesso!")
  })
})
