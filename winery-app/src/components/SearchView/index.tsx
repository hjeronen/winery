import { useFormik } from 'formik'
import TextInput from '../common/TextInput'
import Button from '../common/Button'
import FlexBox from '../common/FlexBox'
import theme from '../../theme'

const SearchForm = ({ onSubmit }) => {
  const formik = useFormik({
    initialValues: { searchString: '' },
    onSubmit,
  })

  return (
    <FlexBox
      style={{
        flexDirection: 'column',
        flex: 1,
        padding: 10,
        width: '100%',
        rowGap: 10,
        backgroundColor: theme.colors.backgroundSecondary,
      }}
    >
      <TextInput
        label="Search wine by name:"
        placeholder="Search"
        value={formik.values.searchString}
        onChange={formik.handleChange('searchString')}
      />
      <Button onPress={formik.handleSubmit} label="Search" />
    </FlexBox>
  )
}

const SearchView = () => {
  const onSubmit = (values) => {
    console.log(values)
  }

  return <SearchForm onSubmit={onSubmit} />
}

export default SearchView
