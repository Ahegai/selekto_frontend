/**
 * plugins/vuetify.ts
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

// Composables
import { createVuetify, type ThemeDefinition } from 'vuetify'

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides

const customLight: ThemeDefinition = {
  dark: false,
  colors: {
    'white': '#ffffff',
    'primary-text': '#000000D9',
    'secondary-text': '#00000073',
    'danger-text': '#FF4D4F',
    'disabled-text': '#00000040',
    'warning-text': '#FAAD14',
    'mark-text': '#000000',
    'primary': '#1B6A52',
    'primary-hovered': '#40826E',
    'primary-pressed': '#175945',
    'primary-disabled': '#649A8A',
    'secondary': '#D9B665',
    'secondary-hovered': '#DDC07C',
    'secondary-pressed': '#B99C58',
    'gray-700': '#212121',
    'gray-600': '#262626',
    'gray-500': '#2a2a2a',
    'gray-400': '#373737',
    'gray-300': '#575757',
    'gray-200': '#878787',
    'gray-100': '#B8B8B8',
    'gray-50': '#E0E0E0'
  }
}

export default createVuetify({
  theme: {
    defaultTheme: 'customLight',
    themes: {
      customLight
    }
  },
})
