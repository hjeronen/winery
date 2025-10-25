import { View } from 'react-native'
import Constants from 'expo-constants'
import { StyleSheet } from 'react-native'
import Text from './common/Text'
import theme from '../theme'

const styles = StyleSheet.create({
  header: {
    padding: 20,
    backgroundColor: theme.colors.primary,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    flexBasis: '100%',
  },
})

const Header = () => {
  return (
    <View style={styles.header}>
      <Text fontSize="heading" fontWeight="bold" color="secondary">
        Winery Application
      </Text>
    </View>
  )
}

export default Header
