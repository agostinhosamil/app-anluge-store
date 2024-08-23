import { PathInternal } from 'Types/eager'

import { dark } from './dark'
import { light } from './light'

export type Theme = typeof light

export type ThemeKey = PathInternal<Theme>

export const themes = {
  light,
  dark
}

export const defaultTheme = 'light'

export type ThemeName = keyof typeof themes
