import fs from "fs"
import {
  pdfMake,
  type Content
} from "@/libs/pdfmake"
import {
  type IFile,
  type IOutputCreatePdf,
  type IOutputCreateFile
} from "../interfaces/helpers"

export const file: IFile = {
  createBufferPdf: async (template: Content): Promise<IOutputCreatePdf> => {
    try {
      const docDefinition: any = {
        content: [template],
        pageSize: "A4",
        pageMargins: [20, 20, 20, 20]
      }

      const pdfDocGenerator = pdfMake.createPdf(docDefinition)

      const buffer = await new Promise<Buffer>((resolve, reject) => {
        pdfDocGenerator.getBuffer((buffer) => {
          resolve(buffer)
        })
      })

      return Buffer.from(buffer as any, "binary")
    } catch (error: any) {
      return {
        message: error.message
      }
    }
  },

  createFile: async (buffer: Buffer, fileName: string, path: string): Promise<IOutputCreateFile> => {
    try {
      const currentDate = new Date()
      const day = currentDate.getDate().toString().padStart(2, "0")
      const month = (currentDate.getMonth() + 1).toString().padStart(2, "0")
      const year = currentDate.getFullYear().toString()
      const hours = currentDate.getHours().toString().padStart(2, "0")
      const minutes = currentDate.getMinutes().toString().padStart(2, "0")
      const seconds = currentDate.getSeconds().toString().padStart(2, "0")

      const formattedDate = `${day}-${month}-${year}-${hours}-${minutes}-${seconds}`

      const fullPath = `${path}/${fileName}-${formattedDate}.pdf`

      await fs.promises.writeFile(fullPath, buffer)

      return {
        message: "Arquivo criado com sucesso!",
        filePath: fullPath
      }
    } catch (error: any) {
      return {
        message: error.message
      }
    }
  },

  deleteFile: (filePath: string): string => {
    try {
      fs.unlinkSync(filePath)

      return "Arquivo deletado com sucesso!"
    } catch (error: any) {
      return error.message
    }
  }
}
