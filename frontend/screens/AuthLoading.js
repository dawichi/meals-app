import React, { useEffect } from 'react'
import { ActivityIndicator, AsyncStorage, Text, View } from 'react-native'
import Spacer from '../components/Spacer'
import generalStyles from '../styles/general'

export default ({ navigation }) => {

	useEffect(() => {
		AsyncStorage.getItem('token')
			.then(x => {
				navigation.navigate(x ? 'Root' : 'OnBoarding')
			})
	}, [])
	
	return (
		<View style={generalStyles.container}>
			<Text>Loading...</Text>
			<Spacer height={20} />
			<ActivityIndicator size='large' color='#81b29a' />
		</View>
	)
}
