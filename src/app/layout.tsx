import '../../public/fonts/index.css'

import { LayoutProps } from '~/core/types/layoutTypings'

import { ClientProviders } from './clientProviders'

export default function RootLayout(props: LayoutProps) {
  return (
    <html lang='pt' suppressHydrationWarning>
      <body>
        <ClientProviders>{props.children}</ClientProviders>
      </body>
    </html>
  )
}
