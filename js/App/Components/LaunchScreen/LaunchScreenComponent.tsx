import * as React from 'react'
import {Text, View} from 'react-native';

// Styles
import styles from './Styles/LaunchScreenStyles'
import {NavigationActions} from "react-navigation";
import PrimaryButton from "../Utils/Buttons/PrimaryButton/PrimaryButton";
import AppLogo from "../Utils/AppLogo/AppLogo";
import Saying from "./Saying/Saying";

interface LaunchScreenComponentProps {
  navigation: any
}
interface LaunchScreenComponentState {
  coolSayings: Array<string>,
  pickedSaying: string
}

export default class LaunchScreen extends React.Component <LaunchScreenComponentProps, LaunchScreenComponentState> {

  constructor(props) {
    super(props);

    this.state = {
      coolSayings: [
        "Matching you with your\ndream job",
        "Looking for a job?\nYes. Yes, you are...",
      ],
      pickedSaying: ''
    };
  }

  _goToJobOffers = () : void => {

    const navOptions = NavigationActions.navigate({
      routeName: 'JobOffersScreen',
      params: {}
    });
    this.props.navigation.dispatch(navOptions);
  };

  _randCoolSaying = () => {
    const {coolSayings} = this.state;
    const rand = Math.floor(Math.random() * coolSayings.length);

    const pickedSaying = coolSayings[rand];

    this.setState({pickedSaying: pickedSaying});
  };

  componentDidMount(): void {
    this._randCoolSaying()
  }

  render () {
    const { pickedSaying } = this.state;
    return (
      <View style={styles.mainContainer}>
        <View style={styles.container}>
          <View style={styles.logoContainer}>
            <AppLogo size={"normal"}/>
            {pickedSaying
              ?
              <Saying text={pickedSaying}/>
              :
              <></>
            }
          </View>
          <PrimaryButton onPress={this._goToJobOffers} text={"Find a job"}/>
          <Text style={styles.copyright}>{"Created by Pabich Corp.\nVisit: pabich.cc"}</Text>
        </View>
      </View>
    )
  }

}
