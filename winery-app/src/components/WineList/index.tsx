import { FlatList, View, StyleSheet } from 'react-native'
import WineListItem, { type Wine } from './WineListItem'
import FlexBox from '../common/FlexBox'

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
})

const wines: Wine[] = [
  {
    id: 1,
    name: 'Chateau Maucamps',
    region: 'Bordeaux',
    appellation: 'A.C. Haut-Médoc',
    grape: 'Cru Bourgeois',
    vintage: 2010,
    country: 'France',
    rating: 5,
  },
  {
    id: 2,
    name: 'Domaine Maire Grand Minéral',
    region: 'Jura',
    appellation: 'A.C. Côtes du Jura',
    grape: 'Pinot Noir',
    vintage: 2022,
    country: 'France',
  },
]

const ItemSeparator = () => <View style={styles.separator} />

const WineList = () => {
  return (
    <FlexBox
      flexDirection="row"
      justifyContent="flex-start"
      alignItems="stretch"
    >
      <FlatList
        data={wines}
        ItemSeparatorComponent={ItemSeparator}
        renderItem={({ item, index, separators }) => (
          <WineListItem wine={item} />
        )}
      />
    </FlexBox>
  )
}

export default WineList
