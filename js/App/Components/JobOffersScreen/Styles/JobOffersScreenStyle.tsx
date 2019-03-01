import { StyleSheet } from 'react-native'
import { Metrics } from '../../../Themes/'

export default StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Metrics.navBarHeight,
    height: Metrics.screenHeight,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  logoWrapper: {
    height: 20,
    top: -35,
    alignItems: 'center'
  }
})
