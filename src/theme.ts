import {extendTheme, type ThemeConfig} from '@chakra-ui/react'
import '@fontsource/raleway/400.css'

const config: ThemeConfig = {
	initialColorMode: 'light',
	useSystemColorMode: false,
}

const fonts = {
	heading: `'Open Sans', sans-serif`,
	body: `'Raleway', sans-serif`
}

const theme = extendTheme({config, fonts})

export default theme
//