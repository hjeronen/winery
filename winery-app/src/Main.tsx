import Constants from 'expo-constants'
import { StyleSheet } from 'react-native'
import WineList from './components/WineList'
import FlexBox from './components/common/FlexBox'
import Header from './components/Header'

const styles = StyleSheet.create({
  container: {
    marginTop: Constants.statusBarHeight,
    flexGrow: 1,
    flexShrink: 1,
  },
})

const Main = () => {
  return (
    <FlexBox style={styles.container}>
      <Header />
      <FlexBox
        flexDirection="column"
        justifyContent="flex-start"
        alignItems="stretch"
        rowGap={0}
      >
        <WineList />
      </FlexBox>
    </FlexBox>
  )
}

export default Main
