import { createAppContainer, createSwitchNavigator } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import { MealsScreen, LoginScreen, RegisterScreen, ModalScreen, AuthLoading } from './screens'

const OnBoardingNavigator = createStackNavigator({
	Login: LoginScreen,
	Register: RegisterScreen,
}, {
	initialRouteName: 'Login'
})

const AppNavigator = createStackNavigator({
	Meals: {
		screen: MealsScreen,
		navigationOptions: {
			title: 'Meals available',
		}
	}
}, {
	initialRouteName: 'Meals'
})

const RootStack = createStackNavigator({
	Main: AppNavigator,
	Modal: ModalScreen,
}, {
	mode: 'modal',
	headerMode: 'none',
})

const BaseStack = createSwitchNavigator({
	AuthLoading,
	OnBoarding: OnBoardingNavigator,
	Root: RootStack,
}, {
	initialRouteName: 'AuthLoading'
})
export default createAppContainer(BaseStack)