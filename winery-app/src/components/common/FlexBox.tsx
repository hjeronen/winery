import React from 'react'
import type { ReactNode } from 'react'
import { View, StyleSheet, type ViewStyle, type StyleProp } from 'react-native'
import theme from '../../theme'

interface FlexBoxProps {
  children?: ReactNode
  style?: StyleProp<ViewStyle>
  flexDirection?: 'row' | 'column'
  flexWrap?: ViewStyle['flexWrap']
  alignItems?: ViewStyle['alignItems']
  justifyContent?: ViewStyle['justifyContent']
  rowGap?: number
}

const styles = StyleSheet.create({
  container: {
    // base container styles (empty by default)
    backgroundColor: theme.colors.secondary,
  },
})

const FlexBox: React.FC<FlexBoxProps> = ({
  children,
  style,
  flexDirection = 'column',
  flexWrap = 'wrap',
  alignItems,
  justifyContent,
}) => {
  const composedStyle: StyleProp<ViewStyle> = [
    styles.container,
    {
      flexDirection,
      flexWrap,
      alignItems,
      justifyContent,
    },
    style,
  ]

  return <View style={composedStyle}>{children}</View>
}

export default FlexBox
