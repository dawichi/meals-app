import React from "react"
import { Text, TouchableOpacity, View } from "react-native"
import generalStyles from "../styles/general"

export default ({ onPress, children }) => {
	return (
		<TouchableOpacity
			onPress={onPress}
		>
			<View style={generalStyles.button}>
				<Text style={generalStyles.button_text}>{children}</Text>
			</View>
		</TouchableOpacity>
	)
}