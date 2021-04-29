import React from 'react'
import { View, FlatList, Text } from 'react-native'
import ListItem from '../components/ListItem'
import useFetch from '../hooks/useFetch'
import generalStyles from '../styles/generalStyles'

const Meals = ({ navigation }) => {

	const { loading, data: meals } = useFetch('https://serverless-dawichi.vercel.app/api/meals')

	return (
		<View style={generalStyles.constainer}>
			{loading ? <Text>Loading....</Text> :
			<FlatList
				style={generalStyles.list}
				data={meals}
				keyExtractor={x => x._id}
				renderItem={({ item }) =>
					<ListItem
						name={item.name}
						onPress={() => navigation.navigate('Modal', { _id: item._id })}
					/>
				}
			/>}
		</View>
	)
}

Meals.navigationOptions = ({
	title: 'Meals available',
})

export default Meals
