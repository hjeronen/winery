import React from 'react'
import type { ReactNode } from 'react'
import { View, StyleSheet, type ViewStyle } from 'react-native'
import theme from '../../theme'

interface FlexBoxProps {
  children?: ReactNode
  style?: ViewStyle
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
  flexDirection = 'row',
  flexWrap = 'wrap',
  alignItems = 'flex-start',
  justifyContent = 'space-around',
  rowGap = 20,
}) => {
  const composedStyle = [
    styles.container,
    {
      flexDirection,
      flexWrap,
      alignItems,
      justifyContent,
      rowGap,
    },
    style,
  ]

  return <View style={composedStyle}>{children}</View>
}

export default FlexBox
