import { validate } from "@/application/factories/helpers"
import { file } from "@/application/helpers"
import { templatePdf } from "@/application/templates/pdf/template-pdf"
import dotenv from "@/libs/dotenv"
dotenv.config({ path: ".env.test" })

describe("File", () => {
  let bufferPdf: Buffer
  let filePath = ""

  it("should be able to create buffer pdf", async () => {
    const sut = await file.createBufferPdf(templatePdf())

    bufferPdf = sut
    expect(sut.byteLength).toEqual(11072)
  })

  it("should be able to create pdf file", async () => {
    const fileName = "file-name"
    const path = "src/tmp/pdf"

    const sut = await file.createFile(bufferPdf, fileName, path)

    filePath = sut.filePath as string

    expect(sut.message).toEqual("Arquivo criado com sucesso!")
    expect(validate.stringType(filePath)).toBeTruthy()
  })

  it("should be able to create pdf file", async () => {
    const buffer: any = {}
    const fileName = "file-name"
    const path = "src/tmp/pdf"

    const sut = await file.createFile(buffer, fileName, path)

    // eslint-disable-next-line max-len
    expect(sut.message).toBe("The \"data\" argument must be of type string or an instance of Buffer, TypedArray, or DataView. Received an instance of Object")
  })

  it("should be able to delete pdf", () => {
    const sut = file.deleteFile(filePath)

    expect(sut).toEqual("Arquivo deletado com sucesso!")
  })
})
