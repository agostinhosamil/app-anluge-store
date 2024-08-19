import { noEmpty } from '.'
import { getCookie, setCookie } from './cookies/client'

const themes = {
  light: {
    key: 'light',
    attributes: {}
  },

  dark: {
    key: 'dark',
    attributes: {}
  },

  system: {
    key: 'system',
    attributes: {}
  }
}

export type Themes = typeof themes

export type ThemeKey = keyof Themes

export const switchTheme = () => {
  const currentTheme = getTheme()

  setTheme(currentTheme === 'dark' ? 'light' : 'dark')
}

export const setTheme = (themeName: ThemeKey) => {
  const themeData = themes[themeName]

  if (typeof themeData === typeof undefined) {
    return null
  }

  const themeClassName = themeData.key.toLowerCase()

  Object.keys(themes)
    .filter(() => Boolean(global.document))
    .forEach(themeName => {
      global.document.documentElement.classList.remove(themeName)
    })

  if (global.document && global.document.documentElement) {
    global.document.documentElement.classList.add(themeClassName)

    setCookie('theme', themeName, {
      'Max-Age': '5y'
    })
  }
}

export const getTheme = (): ThemeKey => {
  const currentTheme = getCookie('theme') as ThemeKey

  if (
    noEmpty(currentTheme) &&
    typeof themes[currentTheme] !== typeof undefined
  ) {
    return currentTheme
  }

  return 'system'
}

export const getThemeData = (themeName: ThemeKey): Themes[ThemeKey] | null => {
  const themeData = themes[themeName]

  if (typeof themeData === typeof undefined) {
    return null
  }

  return themeData
}
