import { Dimensions, StyleSheet } from 'react-native'

const { width, height } = Dimensions.get('window')

const white = '#f4f1de'
const red = '#e07a5f'
const blue = '#3d405b'
const green = '#81b29a'
const yellow = '#f2cc8f'

const generalStyles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'white',
		alignItems: 'center',
		justifyContent: 'center',
		padding: 15,
	},
	containerList: {
		flex: 1,
		backgroundColor: 'white',
		alignItems: 'flex-start',
		justifyContent: 'flex-start',
		padding: 15,
	},
	list: {
		alignSelf: 'stretch',
	},
	input: {
		height: 40,
		borderColor: '#ccc',
		borderWidth: 1,
		alignSelf: 'stretch',
		borderRadius: 10,
		marginBottom: 15,
		marginHorizontal: 20,
		paddingHorizontal: 15,
		backgroundColor: 'white',
		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 1,
		},
		shadowOpacity: 0.15,
		shadowRadius: 3.84,
		elevation: 2,
	},
	button_group: {
		flexDirection: 'row',
		justifyContent: 'center',
	},
	button: {
		backgroundColor: red,
		borderRadius: 8,
		padding: 10,
	},
	button_text: {
		color: 'white',
		marginHorizontal: 10,
	},
	title: {
		color: green,
		fontSize: 25,
		textAlign: 'center',
	},
	separator: {
		marginVertical: 8,
		width: width - 50,
		borderBottomColor: green,
		borderBottomWidth: StyleSheet.hairlineWidth + 2,
	},

})


export default generalStyles
