import { TextInput as NativeTextInput, StyleSheet, View } from 'react-native'
import Text from './Text'
import theme from '../../theme'

const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignSelf: 'stretch',
  },
  textInput: {
    padding: 15,
    marginTop: 10,
    marginBottom: 5,
    borderWidth: 1,
    borderColor: theme.colors.textSecondary,
    borderRadius: 5,
    fontSize: theme.fontSizes.subheading,
  },
})

interface TextInputProps {
  label?: string
  placeholder?: string
  value: string
  onChange: (text: string) => void
}

const TextInput = ({ label, placeholder, value, onChange }: TextInputProps) => {
  return (
    <View style={styles.container}>
      {label && (
        <Text color="textPrimary" fontSize="subheading">
          {label}
        </Text>
      )}
      <NativeTextInput
        style={styles.textInput}
        placeholder={placeholder}
        value={value}
        autoComplete="off"
        onChangeText={onChange}
      />
    </View>
  )
}

export default TextInput
