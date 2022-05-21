import { StyleSheet, Text, View } from 'react-native'

// Redux
import { Provider } from 'react-redux'
import { store } from './store'

// Screens
import HomeScreen from './screens/HomeScreen.jsx'

// react native elements
import { SafeAreaProvider } from 'react-native-safe-area-context'

export default function App() {
    return (
        <Provider store={store}>
            <SafeAreaProvider>
                <HomeScreen />
            </SafeAreaProvider>
        </Provider>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
})
