import { useApp } from '@components/ApplicationContext'
import { getTheme, switchTheme } from '@utils/themes'

import { ThemeName, themes } from '~/config/themes'

export const useTheme = () => {
  const { config, setConfig } = useApp()

  if (!config) {
    throw new Error(
      'useTheme hook should only be used inside the ApplicationContext'
    )
  }

  return {
    name: config.theme.name,
    theme: config.theme.props,

    switchTheme: () => {
      switchTheme()

      const name = getTheme() as ThemeName

      setConfig({
        theme: {
          name,
          props: themes[name]
        }
      })
    }
  }
}
