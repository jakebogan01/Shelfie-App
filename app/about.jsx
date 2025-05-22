import { StyleSheet, Text, useColorScheme, View } from 'react-native'
import { Colors } from '../constants/Colors'

const About = () => {
	const colorScheme = useColorScheme()
	const theme = Colors[colorScheme] ?? Colors.light

	return (
		<View style={[styles.container, {backgroundColor: theme.background}]}>
			<Text style={styles.title}>About Page</Text>
		</View>
	)
}

export default About;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center'
	},
	title: {
		fontWeight: 'bold',
		fontSize: 18
	},
	link: {
		marginVertical: 10,
		borderBottomWidth: 1
	}
})