import { useState } from 'react'

import { useToast } from './useToast'

type Copied = boolean | null
type CopyFn = (text: string) => void

export function useCopyToClipboard(): [Copied, CopyFn] {
  const [copied, setCopied] = useState<Copied>(false)

  const toast = useToast()

  const copy: CopyFn = async text => {
    if (copied) return

    if (!navigator?.clipboard) {
      console.warn('Clipboard not supported')
      return false
    }

    try {
      await navigator.clipboard.writeText(text)
      toast({ title: 'Valor copiado com sucesso', status: 'success' })
      setCopied(true)

      setTimeout(() => setCopied(false), 3000)
    } catch (error) {
      console.warn('Copy failed', error)
      setCopied(false)
    }
  }

  return [copied, copy]
}
