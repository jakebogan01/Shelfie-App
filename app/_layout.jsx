import { StyleSheet, useColorScheme } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import { Stack } from 'expo-router'
import { Colors } from '../constants/Colors'

const RootLayout = () => {
	const colorScheme = useColorScheme()
	const theme = Colors[colorScheme] ?? Colors.light

	return (
		<>
			<StatusBar value="auto" />
			<Stack screenOptions={{
				headerStyle: { backgroundColor: theme.navBackground },
				headerTintColor: theme.title
			}}>
				{/* Groups */}
				<Stack.Screen name="(auth)" options={{ headerShown: false }} />

				{/* Individual Screens */}
				<Stack.Screen name="index" options={{ title: "Home" }} />
			</Stack>
		</>
	)
}

export default RootLayout;

const styles = StyleSheet.create({})