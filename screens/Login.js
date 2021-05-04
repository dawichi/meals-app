import React from 'react'
import { Alert, Text, TextInput, View, AsyncStorage } from 'react-native'
import useForm from '../hooks/useForm'
import generalStyles from '../styles/general'
import CustomButton from '../components/CustomButton'
import Spacer from '../components/Spacer'

export default ({ navigation }) => {

	const initialState = {
		email: '',
		password: '',
	}

	const onSubmit = values => {
		fetch('https://serverless-dawichi.vercel.app/api/auth/login', {
			method: 'POST',
			headers: {
				'Content-Type': 'Application/json',
			},
			body: JSON.stringify(values),
		})
			.then(x => x.text())
			.then(x => {
				try {
					return JSON.parse(x)
				} catch {
					throw x
				}
			})
			.then(x => {
				AsyncStorage.setItem('token', x.token)
				navigation.navigate('Meals')
			})
			.catch(e => Alert.alert('Error', String(e)))
	}

	const { subscribe, inputs, handleSubmit } = useForm(initialState, onSubmit)
	
	return (
		<View style={generalStyles.container}>
			<Text style={generalStyles.title}>Access to your account</Text>
			<View style={generalStyles.separator}></View>
			<Spacer height={20}/>

			<TextInput
				value={inputs.email}
				onChangeText={subscribe('email')}
				style={generalStyles.input}
				placeholder='Email'
			/>
			<TextInput
				value={inputs.password}
				onChangeText={subscribe('password')}
				style={generalStyles.input}
				placeholder='Password'
				secureTextEntry={true}
			/>

			<View style={generalStyles.button_group}>
				<CustomButton onPress={handleSubmit}>
					Login
				</CustomButton>
				<Spacer width={20} />
				<CustomButton onPress={() => navigation.navigate('Register')}>
					Register
				</CustomButton>
			</View>
		</View>
	)
}
