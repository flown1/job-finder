import React, {Component} from 'react';
import {Image, StyleSheet, View} from 'react-native';
import * as Themes from '../../../Themes';

interface IProps {
  size: string
}
interface IState {
}

class AppLogo extends Component<IProps, IState> {
  render() {
    let logo;
    this.props.size === "small"
      ?
      logo = Themes.Images.logo_small
      :
      logo = Themes.Images.logo;

    return (
      <View style={[styles.container]}>
        <Image source={logo || null}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
});
export default AppLogo;
