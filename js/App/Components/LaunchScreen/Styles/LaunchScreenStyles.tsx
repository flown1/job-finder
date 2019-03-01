import { StyleSheet } from "react-native";
import { Metrics, ApplicationStyles } from "../../../Themes/index";
import * as Themes from '../../../Themes';

/** @type {{search: React.CSSProperties}} */
export default StyleSheet.create({
  ...ApplicationStyles.screen,
  container: {
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: Metrics.baseMargin,
    height: Metrics.screenHeight
  },
  logoContainer: {
    top: 220,
    height: 150
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  copyright: {
    textAlign: 'center',
    bottom: 10,
    color: Themes.Colors.grey,
    fontSize: Themes.Fonts.size.small
  }
});
