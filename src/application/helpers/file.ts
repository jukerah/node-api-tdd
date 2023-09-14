import fs from "fs"
import {
  pdfMake,
  type Content
} from "@/libs/pdfmake"

interface IOutputCreatePdf {
  message: string
  filePath?: string
}

interface IFile {
  createPdf: (fileName: string, path: string, template: Content) => Promise<IOutputCreatePdf>
  deletePdf: (filePath: string) => string
}

export const file: IFile = {
  createPdf: async (fileName: string, path: string, template: Content): Promise<IOutputCreatePdf> => {
    try {
      const docDefinition: any = {
        content: [template],
        pageSize: "A4",
        pageMargins: [20, 20, 20, 20]
      }

      const pdfDocGenerator = pdfMake.createPdf(docDefinition)

      const currentDate = new Date()
      const day = currentDate.getDate().toString().padStart(2, "0")
      const month = (currentDate.getMonth() + 1).toString().padStart(2, "0")
      const year = currentDate.getFullYear().toString()
      const hours = currentDate.getHours().toString().padStart(2, "0")
      const minutes = currentDate.getMinutes().toString().padStart(2, "0")
      const seconds = currentDate.getSeconds().toString().padStart(2, "0")

      const formattedDate = `${day}-${month}-${year}-${hours}-${minutes}-${seconds}`

      const fullPath = `${path}/${fileName}-${formattedDate}.pdf`

      const buffer = await new Promise<Buffer>((resolve, reject) => {
        pdfDocGenerator.getBuffer((buffer) => {
          resolve(buffer)
        })
      })

      await fs.promises.writeFile(fullPath, buffer)

      return {
        message: "Pdf criado com sucesso!",
        filePath: fullPath
      }
    } catch (error: any) {
      return {
        message: error.message
      }
    }
  },

  deletePdf: (filePath: string): string => {
    try {
      fs.unlinkSync(filePath)

      return "Pdf deletado com sucesso!"
    } catch (error: any) {
      return error.message
    }
  }
}
