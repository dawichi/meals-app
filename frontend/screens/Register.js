import React from 'react'
import { Alert, Text, TextInput, View } from 'react-native'
import generalStyles from '../styles/general'
import CustomButton from '../components/CustomButton'
import Spacer from '../components/Spacer'
import useForm from '../hooks/useForm'


export default ({ navigation }) => {

	const initialState = {
		email: '',
		password: '',
	}

	const onSubmit = values => {
		fetch('https://serverless-dawichi.vercel.app/api/auth/register', {
			method: 'POST',
			headers: {
				'Content-Type': 'Application/json',
			},
			body: JSON.stringify(values),
		})
			.then(x => x.text())
			.then(x => {
				if (x === 'User created successfully') {
					return Alert.alert(
						'Success',
						x,
						[{
							text: 'Go to Home',
							onPress: () => navigation.navigate('Login')
						}]
					)
				}
				Alert.alert(
					'Error',
					x,
				)
			})
	}

	const { subscribe, inputs, handleSubmit } = useForm(initialState, onSubmit)
	
	return (
		<View style={generalStyles.container}>
			<Text style={generalStyles.title}>Create an account</Text>
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
				<CustomButton onPress={() => navigation.goBack()}>
					Back
				</CustomButton>
				<Spacer width={20} />
				<CustomButton onPress={handleSubmit}>
					Create
				</CustomButton>
			</View>
		</View>
	)
}
