import Constants from 'expo-constants'
import { StyleSheet } from 'react-native'
import WineList from './components/WineList'
import FlexBox from './components/common/FlexBox'
import Header from './components/Header'
import { Route, Routes, Navigate } from 'react-router-native'
import SearchView from './components/SearchView'
import LinkBar from './components/LinkBar'

const styles = StyleSheet.create({
  container: {
    marginTop: Constants.statusBarHeight,
    flexDirection: 'column',
    flexGrow: 1,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
})

const Main = () => {
  return (
    <FlexBox style={styles.container}>
      <Header />
      <LinkBar />
      <Routes>
        <Route path="/" element={<WineList />} />
        <Route path="/search" element={<SearchView />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </FlexBox>
  )
}

export default Main
