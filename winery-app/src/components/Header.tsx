import { View } from 'react-native'
import { StyleSheet } from 'react-native'
import Text from './common/Text'
import theme from '../theme'
import FlexBox from './common/FlexBox'

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
    <FlexBox style={{ flexDirection: 'row' }}>
      <View style={styles.header}>
        <Text fontSize="heading" fontWeight="bold" color="secondary">
          Winery Application
        </Text>
      </View>
    </FlexBox>
  )
}

export default Header
