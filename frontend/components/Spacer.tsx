import React from "react"
import { View, ViewProps } from "react-native"

export interface SpacerProps extends ViewProps {
	height?: number
	width?: number
	color?: string
}

export default ({
	style,
	height,
	width,
	color: backgroundColor,
	...otherProps
}: SpacerProps) => (
	<View style={[{ height, width, backgroundColor }, style]} {...otherProps} />
)
