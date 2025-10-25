type FontWeight =
  | 'normal'
  | 'bold'
  | '400'
  | '700'
  | '100'
  | '200'
  | '300'
  | '500'
  | '600'
  | '800'
  | '900'

interface Theme {
  colors: {
    textPrimary: string
    textSecondary: string
    primary: string
    secondary: string
    tertiary: string
    rating: string
    effects: string
    backgroundSecondary: string
  }
  fontSizes: {
    body: number
    subheading: number
    heading: number
  }
  fonts: {
    main: string
    headings: string
    secondary: string
  }
  fontWeights: {
    normal: FontWeight
    bold: FontWeight
  }
}

const theme: Theme = {
  colors: {
    textPrimary: '#24292e',
    textSecondary: '#586069',
    primary: '#102E50',
    secondary: '#e7eaefff',
    tertiary: '#84253E',
    rating: '#F5C45E',
    effects: '#c1d0dbff',
    backgroundSecondary: '#fafafaff',
  },
  fontSizes: {
    body: 14,
    subheading: 16,
    heading: 20,
  },
  fonts: {
    main: 'System',
    headings: '',
    secondary: '',
  },
  fontWeights: {
    normal: '400',
    bold: '700',
  },
}

export default theme
