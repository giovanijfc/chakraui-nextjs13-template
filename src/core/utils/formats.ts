import {
  formatCNPJ,
  formatCPF,
  onlyNumbers
} from '@brazilian-utils/brazilian-utils'

export const formatCPFOrCNPJ = (value?: string) => {
  if (!value) return ''

  let newValue = ''

  if (removeFormat(value).length <= 11) {
    newValue = formatCPF(value)
  } else {
    newValue = formatCNPJ(value)
  }

  return newValue
}

export const removeFormatMobilePhoneWithDDI = (value: string) => {
  return removeFormat(removeSpecialCharacters(value)).replaceAll(/\s/g, '')
}

export const formatMobilePhoneWithDDI = (value: string) => {
  const format = '+XX (XX) XXXXX-XXXX'

  const cleanValue = removeFormatMobilePhoneWithDDI(value)

  let newValue = cleanValue

  if (value.length > format.length) {
    newValue = cleanValue.slice(0, cleanValue.length - 1)
  }

  return newValue.replace(
    /([1-9]{2})([1-9]{2})([0-9]{5})([0-9]{4})/g,
    '+$1 ($2) $3-$4'
  )
}

export const removeFormatTelephoneOrCellphone = (value: string) => {
  return removeFormat(removeSpecialCharacters(value)).replace(/\s/, '')
}

export const removeSpecialCharacters = (value: string) => {
  if (!value) return ''

  return value.replace(/[^\w\s]/gi, '')
}

export const removeFormat = (value: string) => {
  // eslint-disable-next-line no-useless-escape
  return value.replace(/(\.|\/|\-)/g, '')
}

export const removeFormatCurrency = (value?: string) => {
  if (!value) return ''

  return (
    value
      .replaceAll('.', '')
      .replace(',', '.')
      .replace('R$ ', '')
      .replace(' ', '') ?? '0'
  )
}

export const removeMaskCurrency = (value?: string) => {
  if (!value) return ''

  return value
    .replaceAll('.', '')
    .replace(',', '.')
    .replace('R$', '')
    .replace(' ', '')
}

export const formatBirthday = (value: string) => {
  if (!value) return ''

  if (value.length > 10) return value.slice(0, 10)

  const newValue = onlyNumbers(value)

  return newValue.replace(/([0-9]{2})([0-9]{2})([0-9]{4})/g, '$1/$2/$3')
}

export const formatCreditCardNumber = (value: string) => {
  if (!value) return ''

  const matches = onlyNumbers(value).match(/\d{1,4}/g)

  if (!matches) return ''

  return matches.slice(0, 4).join(' ')
}

export const formatExpirationDate = (value: string) => {
  if (!value) return ''

  const onlyDigits = onlyNumbers(value)

  const month = onlyDigits.slice(0, 2)
  const year = onlyDigits.slice(2, 6)

  const parts = [month, year].filter(part => !!part)

  return parts.join('/')
}

export const formatLandLine = (value?: string) => {
  if (!value) return ''
  if (value?.length >= 14) return value?.slice(0, 14)
  return onlyNumbers(value).replace(
    /([1-9]{2})([0-9]{4})([0-9]{4})/g,
    '($1) $2-$3'
  )
}

export const formatCellPhone = (value?: string) => {
  if (!value) return ''
  if (value?.length >= 16) return value?.slice(0, 15)
  return value.replace(/([1-9]{2})([0-9]{5})([0-9]{4})/g, '($1) $2-$3')
}
