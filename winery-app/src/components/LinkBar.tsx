import { Link, useLocation } from 'react-router-native'
import FlexBox from './common/FlexBox'
import Text from './common/Text'
import { StyleSheet } from 'react-native'
import theme from '../theme'

const styles = StyleSheet.create({
  linkBar: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: theme.colors.effects,
    overflow: 'hidden',
    backgroundColor: theme.colors.secondary,
  },
  link: {
    padding: 10,
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderLeftWidth: 1,
    borderColor: theme.colors.textSecondary,
  },
  linkActive: {
    backgroundColor: theme.colors.primary,
    color: theme.colors.secondary,
  },
})

const LinkBar = () => {
  const location = useLocation()
  const isRoot = location.pathname === '/'
  const isSearch = location.pathname === '/search'

  const getActiveColor = (isActive: boolean) =>
    isActive ? 'secondary' : 'primary'

  return (
    <FlexBox style={styles.linkBar}>
      <Link style={[styles.link, isRoot && styles.linkActive]} to="/">
        <Text
          color={getActiveColor(isRoot)}
          fontWeight="bold"
          fontSize="subheading"
        >
          Wine List
        </Text>
      </Link>
      <Link style={[styles.link, isSearch && styles.linkActive]} to="/search">
        <Text
          color={getActiveColor(isSearch)}
          fontWeight="bold"
          fontSize="subheading"
        >
          Search
        </Text>
      </Link>
    </FlexBox>
  )
}

export default LinkBar
