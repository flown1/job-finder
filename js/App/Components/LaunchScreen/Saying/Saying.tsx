import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import * as Themes from "../../../Themes";

interface IProps {
  text: string
}
interface IState {
}
class Saying extends Component<IProps, IState> {
  render() {
    const { text } = this.props;
    return (
      <View style={styles.container}>
        <Text style={styles.saying}>{text}</Text>
        <View style={styles.line}/>
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
  saying: {
    color: Themes.Colors.black,
    fontSize: Themes.Fonts.size.h6,
    textAlign: 'center',
    lineHeight: 28,
  },
  line: {
    borderBottomColor: Themes.Colors.grey,
    width: 200,
    borderBottomWidth: 1,
    top: -29
  }
});
export default Saying;
