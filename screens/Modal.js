import React from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'
import useFetch from '../hooks/useFetch'
import generalStyles from '../styles/generalStyles'

export default ({ navigation }) => {

	const id = navigation.getParam('_id')
	const { loading, data } = useFetch(`https://serverless-dawichi.vercel.app/api/meals/${id}`)
	
	return (
		<View style={styles.container}>
			{loading ? <Text>loading...</Text> :
				<>
				<Text>{data._id}</Text>
				<Text>{data.name}</Text>
				<Text>{data.desc}</Text>
				<Button title='Cancel' onPress={() => navigation.navigate('Meals')} />
				<Button title='Accept' onPress={() => {
					fetch('https://serverless-dawichi.vercel.app/api/orders', {
						method: 'POST',
						headers: {
							'Content-Type': 'application/json'
						},
						body: JSON.stringify({
							meal_id: id,
							user_id: 'test',
						})
					}).then(() => {
						alert('The order was generated successfully')
						navigation.navigate('Meals')
					})
				}} />
				</>
			}
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center'
	}
})