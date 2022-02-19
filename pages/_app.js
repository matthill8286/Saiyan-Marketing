import { ThemeProvider } from 'styled-components'
import { saiyanTheme } from '@matthill8286/atomic-ui'
import { SiteLayout } from '@/layout'
import { ChakraProvider, theme } from '@chakra-ui/react'
import { DefaultSeo } from 'next-seo'
import { defaultSeo } from '../next-seo.config'
import { customTheme } from '../styles/sc-vars-custom'

function App({ Component, pageProps }) {
  const getLayout =
    Component.getLayout || ((page) => <SiteLayout>{page}</SiteLayout>)

  return (
    <ChakraProvider theme={theme}>
      <ThemeProvider theme={customTheme}>
        <DefaultSeo {...defaultSeo} />
        {getLayout(<Component {...pageProps} />)}
      </ThemeProvider>
    </ChakraProvider>
  )
}

export default App
