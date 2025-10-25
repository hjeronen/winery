import { Pressable, StyleSheet } from 'react-native'
import Text from './Text'
import theme from '../../theme'

const styles = StyleSheet.create({
  button: {
    backgroundColor: theme.colors.primary,
    padding: 15,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
  },
  buttonPressed: {
    opacity: 0.8,
    transform: [{ scale: 0.995 }],
  },
})

const Button = ({ onPress, label }) => {
  return (
    <Pressable
      style={({ pressed }) => [styles.button, pressed && styles.buttonPressed]}
      onPress={onPress}
    >
      <Text color="secondary" fontWeight="bold" fontSize="subheading">
        {label}
      </Text>
    </Pressable>
  )
}

export default Button
