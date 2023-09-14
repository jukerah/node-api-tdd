import pdfMake from "pdfmake/build/pdfmake"
import pdfFonts from "pdfmake/build/vfs_fonts"
import { type Content } from "pdfmake/interfaces"

pdfMake.vfs = pdfFonts.pdfMake.vfs

export { pdfMake, pdfFonts, type Content }
