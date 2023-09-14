import {
  isValidCEP,
  isValidCNPJ,
  isValidCPF,
  isValidLandlinePhone,
  isValidPhone
} from '@brazilian-utils/brazilian-utils'
import * as yup from 'yup'

import { removeFormatTelephoneOrCellphone } from './formats'

const login = yup
  .string()
  .required('Login obrigatório')
  .min(4, 'Minímo de 4 caracteres para o Login')
  .max(24, 'Máximo de 24 caracteres para o Login')

const password = yup
  .string()
  .required('Senha obrigatória')
  .min(4, 'Minímo de 4 caracteres para a Senha')
  .max(24, 'Máximo de 24 caracteres para o Login')

const cpf = yup
  .string()
  .required('Informe o CPF')
  .test({
    message: 'CPF incorreto',
    test: val => (val ? isValidCPF(val) : true)
  })

const cnpj = yup
  .string()
  .required('Informe o CNPJ')
  .test({
    message: 'CNPJ incorreto',
    test: val => (val ? isValidCNPJ(val) : true)
  })

const cep = yup
  .string()
  .required('Informe o CEP')
  .test({
    message: 'CEP incorreto',
    test: val => (val ? isValidCEP(val) : true)
  })

const email = yup.string().required('Informe o email').email('Email inválido')

const telephone = yup
  .string()
  .required('Informe o telefone')
  .test({
    message: 'Número de telefone inválido',
    test: (value?: string) => {
      if (!value) return true
      return isValidLandlinePhone(removeFormatTelephoneOrCellphone(value))
    }
  })

const cellphone = yup
  .string()
  .required('Informe o celular')
  .test({
    message: 'Número de celular inválido',
    test: (value?: string) => {
      if (!value) return true
      return isValidPhone(removeFormatTelephoneOrCellphone(value))
    }
  })

export const yupTests = {
  login,
  password,
  email,
  cpf,
  cnpj,
  cep,
  telephone,
  cellphone
}
