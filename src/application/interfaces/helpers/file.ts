export type IOutputCreatePdf = BinaryData

export interface IOutputCreateFile {
  message: string
  filePath?: string
}

export interface IFile {
  createBufferPdf: (template: any[]) => Promise<IOutputCreatePdf>
  createFile: (buffer: Buffer, fileName: string, path: string) => Promise<IOutputCreateFile>
  deleteFile: (filePath: string) => string
}
