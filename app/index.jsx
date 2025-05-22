import { StyleSheet, Text, View, Image } from 'react-native'
import { Link } from 'expo-router'
import Logo from '../assets/img/logo_light.png'

const Home = () => {
	return (
		<View style={styles.container}>
			<Image source={Logo} style={styles.image} />
			<Text style={[styles.title, {color: 'purple'}]}>Home</Text>
			<Text style={{marginTop: 10, marginBottom: 30}}>Another line</Text>
			<Link href="/about" style={styles.link}>About page</Link>
			<Link href="/contact" style={styles.link}>Contact page</Link>
		</View>
	)
}

export default Home;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center'
	},
	image: {
		marginVertical: 20
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