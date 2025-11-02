import { View } from 'react-native'
import Text from '../common/Text'
import { StyleSheet } from 'react-native'
import theme from '../../theme'

export interface Wine {
  id: number
  name: string
  region?: string
  appellation?: string
  grape: string
  vintage?: number
  country: string
  rating?: number
}

interface WineListItemProps {
  wine: Wine
}

const styles = StyleSheet.create({
  listItem: {
    padding: 20,
    backgroundColor: theme.colors.backgroundSecondary,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    flexBasis: '100%',
  },
})

const WineListItem = ({ wine }: WineListItemProps) => {
  return (
    <View style={styles.listItem}>
      <Text fontWeight="bold" fontSize="subheading">
        {wine.name} ({wine.vintage})
      </Text>
    </View>
  )
}

export default WineListItem
