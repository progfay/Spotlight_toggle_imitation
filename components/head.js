import NextHead from 'next/head'
import { string } from 'prop-types'

const Head = () => (
  <NextHead>
    <meta charSet='UTF-8' />
    <title>Spotlight</title>
    <meta name='description' content='' />
    <meta name='viewport' content='width=device-width, initial-scale=1' />
    <link rel='icon' sizes='192x192' href='/static/touch-icon.png' />
    <link rel='apple-touch-icon' href='/static/touch-icon.png' />
    <link rel='mask-icon' href='/static/favicon-mask.svg' color='#49B882' />
    <link rel='icon' href='/static/favicon.ico' />
  </NextHead>
)

Head.propTypes = {
  title: string,
  description: string,
  url: string,
  ogImage: string
}

export default Head
