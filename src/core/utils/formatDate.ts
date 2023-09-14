import { format as formatDateFNS, parseISO } from 'date-fns'
import ptbrLocale from 'date-fns/locale/pt-BR'

export const formatDate = (date: Date | number | string, format?: string) => {
  return formatDateFNS(parseISO(String(date)), format ?? 'dd/MM/yyyy', {
    locale: ptbrLocale
  })
}
