// ARQUIVO PARA DECLARAR OS ESTILOS GLOBAIS/THEME.TS

import 'styled-components'
import theme from './theme'

declare module 'styled-components'{
    type ThemeType = typeof theme

    export interface DefaultTheme extends ThemeType {}
}