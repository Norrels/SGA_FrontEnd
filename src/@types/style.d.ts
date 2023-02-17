import 'styled-components'
import { defaultTheme } from '../styles/themes/default'

type ThemeType = typeof defaultTheme

// Config necessaria para utilizar o styled-components com typescript
declare module 'styled-components' {
    export interface DefaultTheme extends ThemeType{}
}