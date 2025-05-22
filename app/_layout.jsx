import { StyleSheet, Text, View } from 'react-native'
import { Stack } from 'expo-router'

const RootLayout = () => {
	return (
		<Stack screenOptions={{
			headerStyle: { backgroundColor: '#ddd' },
			headerTintColor: '#333'
		}}>
			<Stack.Screen name="index" options={{ title: 'Home', headerShown: true }} />
			<Stack.Screen name="about" options={{ title: 'About' }} />
			<Stack.Screen name="contact" options={{ title: 'Contact' }} />
		</Stack>
	)
}

export default RootLayout;

const styles = StyleSheet.create({})