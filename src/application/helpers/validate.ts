import { customError } from "@/utils/errors/custom-error"

type ReturnType = "RETURN_ERROR"

export class Validate {
  required (value: unknown, valueName?: string, returnType?: ReturnType): boolean | Error {
    const isEmpty = !value || value === undefined
    if (typeof value === "boolean") {
      return true
    } else if (isEmpty && !returnType) {
      return false
    } else if (isEmpty && returnType === "RETURN_ERROR") {
      customError(`${valueName} é obrigatório!`)
    }
    return true
  }

  requiredMoreThanOneWord (
    value: string,
    valueName?: string,
    returnType?: ReturnType
  ): boolean | Error {
    const notHasMoreThanOneWord =
      !value || value.split(" ").length === 1 || value.split(" ").includes("")
    if (notHasMoreThanOneWord && !returnType) {
      return false
    } else if (notHasMoreThanOneWord && returnType === "RETURN_ERROR") {
      customError(`${valueName} é obrigatório!`)
    }
    return true
  }

  emailFormat (email: string, returnType?: ReturnType): boolean | Error {
    const regEmail =
      /^[a-zA-Z0-9_.+-]+(?<!^[0-9]*)@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/
    const emailFormatIsInvalid = !regEmail.test(String(email))
    if (emailFormatIsInvalid && !returnType) {
      return false
    } else if (emailFormatIsInvalid && returnType === "RETURN_ERROR") {
      customError("Formato do e-mail é inválido!")
    }
    return true
  }

  maxLength (
    value: any,
    maxLength: number,
    valueName?: string,
    returnType?: ReturnType
  ): boolean | Error {
    const exceededLimit = String(value).length > maxLength
    if (exceededLimit && !returnType) {
      return true
    } else if (exceededLimit && returnType === "RETURN_ERROR") {
      customError(`${valueName} pode ter no máximo ${maxLength} caracteres!`)
    }
    return false
  }

  minLength (
    value: any,
    minLength: number,
    valueName?: string,
    returnType?: ReturnType
  ): boolean | Error {
    const exceededLimit = String(value).length < minLength
    if (exceededLimit && !returnType) {
      return true
    } else if (exceededLimit && returnType === "RETURN_ERROR") {
      customError(`${valueName} deve ter no mínimo ${minLength} caracteres!`)
    }
    return false
  }

  stringType (value: string, valueName?: string, returnType?: ReturnType): boolean | Error {
    const notStringType = typeof value !== "string"
    if (notStringType && !returnType) {
      return false
    } else if (notStringType && returnType === "RETURN_ERROR") {
      customError(`${valueName} deve ser do tipo string!`)
    }
    return true
  }

  numberType (value: number, valueName?: string, returnType?: ReturnType): boolean | Error {
    const notNumberType = typeof value !== "number"
    if (notNumberType && !returnType) {
      return false
    } else if (notNumberType && returnType === "RETURN_ERROR") {
      customError(`${valueName} deve ser do tipo número!`)
    }
    return true
  }

  price (value: number, valueName?: string, returnType?: ReturnType): boolean | Error {
    const regex = /^\d+(\.\d{1,2})?$/
    const notPrice = !regex.test(String(value))
    if (notPrice && !returnType) {
      return false
    } else if (notPrice && returnType === "RETURN_ERROR") {
      customError(`${valueName} deve possuir no máximo duas casas decimais!`)
    }
    return true
  }

  booleanType (value: boolean, valueName?: string, returnType?: ReturnType): boolean | Error {
    const notBooleanType = typeof value !== "boolean"
    if (notBooleanType && !returnType) {
      return false
    } else if (notBooleanType && returnType === "RETURN_ERROR") {
      customError(`${valueName} deve ser do tipo boolean!`)
    }
    return true
  }

  shortDateType (value: string, valueName?: string, returnType?: ReturnType): boolean | Error {
    const regDate = /^[0-9]{2}\/[0-9]{2}\/[0-9]{4}$/
    const notShortDateType = !regDate.test(value) || value.length !== 10
    if (notShortDateType && !returnType) {
      return false
    }
    if ((notShortDateType && !returnType) || returnType === "RETURN_ERROR") {
      customError(`${valueName} deve estar no formato DD/MM/YYYY!`)
    }
    return true
  }

  longDateType (value: Date, valueName?: string, returnType?: ReturnType): boolean | Error {
    const isDate = value instanceof Date

    if (!isDate && !returnType) {
      return false
    } else if (!isDate && returnType === "RETURN_ERROR") {
      customError(`${valueName} deve estar formato de data!`)
    }
    return true
  }

  dateGreaterThan (
    validateDate: Date,
    dateToCompare: Date,
    validateDateName?: string,
    returnType?: ReturnType
  ): boolean | Error {
    const day = dateToCompare.getDate()
    const month = dateToCompare.getMonth() + 1
    const year = dateToCompare.getFullYear()
    const deadlineExceeded = new Date(validateDate) < dateToCompare
    if (deadlineExceeded && !returnType) {
      return false
    } else if (deadlineExceeded && returnType === "RETURN_ERROR") {
      customError(
        `${validateDateName} deve ser maior que ${day}/${month}/${year}!`
      )
    }
    return true
  }

  dateLessThan (
    validateDate: Date,
    dateToCompare: Date,
    validateDateName?: string,
    returnType?: ReturnType
  ): boolean | Error {
    const day = dateToCompare.getDate()
    const month = dateToCompare.getMonth() + 1
    const year = dateToCompare.getFullYear()
    const deadlineExceeded = new Date(validateDate) > dateToCompare
    if (deadlineExceeded && !returnType) {
      return false
    } else if (deadlineExceeded && returnType === "RETURN_ERROR") {
      customError(
        `${validateDateName} deve ser maior que ${day}/${month}/${year}!`
      )
    }
    return true
  }

  timeType (value: string, valueName?: string, returnType?: ReturnType): boolean | Error {
    const regTime = /^[0-9]{2}:[0-9]{2}$/
    const notTimeType =
      !regTime.test(String(value)) || String(value).length !== 5
    if (notTimeType && !returnType) {
      return false
    } else if (notTimeType && returnType === "RETURN_ERROR") {
      customError(`${valueName} deve estar no formato HH/MM!`)
    }
    return true
  }

  uuidType (uuid: string, uuidName?: string, returnType?: ReturnType): boolean | Error {
    const uuidRegex =
      /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i
    const notUuidType = !uuidRegex.test(uuid)
    if (notUuidType && !returnType) {
      return false
    } else if (notUuidType && returnType === "RETURN_ERROR") {
      customError(`${uuidName} deve ser do tipo uuid!`)
    }
    return true
  }

  percent (value: number, valueName?: string, returnType?: ReturnType): boolean | Error {
    const invalidPercentage = value > 100 || value < 0
    if (invalidPercentage && !returnType) {
      return false
    } else if (invalidPercentage && returnType === "RETURN_ERROR") {
      customError(`${valueName} deve estar entre 0 a 100%!`)
    }
    return true
  }
}
