import Main from './src/Main'
import { NativeRouter } from 'react-router-native'
import { StatusBar } from 'expo-status-bar'

const App = () => {
  return (
    <>
      <NativeRouter
        future={{ v7_startTransition: true, v7_relativeSplatPath: true }}
      >
        <Main />
      </NativeRouter>
      <StatusBar style="auto" />
    </>
  )
}

export default App
