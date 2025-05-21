import { StyleSheet, Text, View, Image } from 'react-native'
import Logo from '../assets/img/logo_light.png'

const Home = () => {
	return (
		<View style={styles.container}>
			<Image source={Logo} style={styles.image} />
			<Text style={[styles.title, {color: 'purple'}]}>Home</Text>
			<Text style={{marginTop: 10, marginBottom: 30}}>Another line</Text>
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
	}
})