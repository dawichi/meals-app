import AsyncStorage from '@react-native-async-storage/async-storage'
import React from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'
import useFetch from '../hooks/useFetch'
import generalStyles from '../styles/general'

export default ({ navigation }) => {

	const id = navigation.getParam('_id')
	const { loading, data } = useFetch(`https://serverless-dawichi.vercel.app/api/meals/${id}`)

	return (
		<View style={generalStyles.container}>
			{loading ? <Text>loading...</Text> :
				<>
					<Text>{data._id}</Text>
					<Text>{data.name}</Text>
					<Text>{data.desc}</Text>
					<Button title='Cancel' onPress={() => navigation.navigate('Meals')} />
					<Button title='Accept' onPress={() => {
						AsyncStorage.getItem('token')
							.then(x => {
								if (x) {
									fetch('https://serverless-dawichi.vercel.app/api/orders', {
										method: 'POST',
										headers: {
											'Content-Type': 'application/json',
											authorization: x,
										},
										body: JSON.stringify({
											meal_id: id,
										})
									})
										.then(x => {
											if (x.status !== 201) {
												return alert('The order could not be generated')
											}
											alert('The order was generated successfully')
											navigation.navigate('Meals')
										})
								}
							})
					}} />
				</>
			}
		</View>
	)
}