import {StyleSheet} from "react-native";
import {Metrics} from "../../../../Themes";
import * as Themes from "../../../../Themes";
import colors from "../../../../Themes/Colors";

const slideHeight = Metrics.screenHeight - 100;
const slideWidth = Metrics.screenWidth - 20;

export default StyleSheet.create({
  container: {
    flex: 1,
    position: 'absolute',
    height: slideHeight,
    width: slideWidth,
    borderRadius: 25,

    backgroundColor: 'white',
    color: Themes.Colors.boneWhite,

    /* shadow */
    shadowColor: '#333',
    shadowOpacity: 0.2,
    elevation: 1,
  },
  bckgImage: {
    position: 'absolute',
    height: slideHeight,
    width: slideWidth,
    borderRadius: 25,
  },
  contentBox: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },
  applyLabelContainer: {
    position: 'absolute',
    zIndex: 999,
    top: 15,
    textAlign: 'center'
  },
  denyLabelContainer: {
    position: 'absolute',
    zIndex: 999,
    top: 15,
    textAlign: 'center'
  },
  applyLabel: {
    color: colors.green,
    fontWeight: '800',
    borderColor: colors.green,
    borderWidth: 1,
    left: 15
  },
  denyLabel: {
    color: colors.red,
    fontWeight: '800',
    borderColor: colors.red,
    borderWidth: 1,
    left: slideWidth - 50
  },
  flexBox: {
    flex: 1,
    position: 'absolute'
  },
  top: {
    borderBottomColor: Themes.Colors.boneWhite,
    borderBottomWidth: 1,
    width: slideWidth - 50
  },
  middle: {
    paddingLeft: 20,
    paddingRight: 20
  },
  bottom: {

  },
  positionLabel: {
    fontSize: Themes.Fonts.size.h4,
    color: Themes.Colors.boneWhite,
    textAlign: 'center',
    marginBottom: 7
  },
  locationLabel: {
    fontSize: Themes.Fonts.size.h4,
    color: Themes.Colors.boneWhite,
    textAlign: 'center',
    marginBottom: 12
  },
  salaryLabel: {
    fontSize: Themes.Fonts.size.h4,
    color: Themes.Colors.boneWhite,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 12
  },
  companyNameLabel: {
    fontSize: Themes.Fonts.size.h4,
    color: Themes.Colors.boneWhite,
    textAlign: 'center'
  },
  description: {
    fontSize: Themes.Fonts.size.regular,
    color: Themes.Colors.boneWhite,
  },
  readMoreIncent: {
    fontSize: Themes.Fonts.size.h6,
    color: Themes.Colors.boneWhite,
    textAlign: 'center',
  },
  hidden: {
    display: 'none'
  }
});
