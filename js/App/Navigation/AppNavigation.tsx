import { createSwitchNavigator, createStackNavigator, createAppContainer } from "react-navigation";
import JobOffersScreen from '../Containers/JobOffersScreen'
import styles from "./Styles/NavigationStyles";
import LaunchScreen from "../Containers/LaunchScreen";


export const MainNav = createStackNavigator({
  LaunchScreen: { screen: LaunchScreen }
}, {
  // Default config for all screens
  headerMode: "none",
  initialRouteName: "LaunchScreen",
  navigationOptions: {
    headerStyle: styles.header
  }
});

// Manifest of possible screens
const PrimaryNav = createSwitchNavigator({
  LaunchScreen: { screen: createAppContainer(MainNav) },
  JobOffersScreen: {
    screen: JobOffersScreen,
    navigationOptions: {
      headerTitle: 'Job Offers',
    },
  }
}, {
  // Default config for all screens
  initialRouteName: "LaunchScreen",
  navigationOptions: {
    headerStyle: styles.header
  }
});



export default createAppContainer(PrimaryNav);
