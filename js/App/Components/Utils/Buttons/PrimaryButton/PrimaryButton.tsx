import React, {Component} from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import {Colors, Fonts} from "../../../../Themes";

interface IProps {
  onPress: () => void
  text: string
}
interface IState {
}
class PrimaryButton extends Component<IProps, IState> {
  _handleOnPress = () => {
    const { onPress } = this.props;

    onPress();
  };

  render() {
    const { text } = this.props;

    return (
      <TouchableOpacity style={styles.container} onPress={this._handleOnPress}>
        <Text style={styles.text}>{text}</Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.blue,

    height: 40,
    width: 200,
    borderRadius: 10,
    shadowColor: '#333',
    shadowOpacity: 0.2,
    shadowOffset: {width: 0, height: 3},
    elevation: 1
  },
  text: {
    fontSize: Fonts.size.h4,
    color: Colors.boneWhite
  }
});
export default PrimaryButton;
