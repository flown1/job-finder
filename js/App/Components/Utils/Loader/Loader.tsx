import React, {Component} from 'react';
import {ActivityIndicator, StyleSheet, Text, View} from 'react-native';
import {Metrics} from "../../../Themes";

interface IProps {
  text?: string
}
interface IState {
}
class Loader extends Component<IProps, IState> {
  render() {
    const {text} = this.props;
    return (
      <View style={styles.wrapper}>
        <View style={styles.container}>
          <Text>{text || "Loading"}</Text>
          <ActivityIndicator/>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.2)',
    height: Metrics.screenHeight,
    width: Metrics.screenWidth
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 100,
    width: 100,

    backgroundColor: 'white',
    shadowColor: '#333',
    shadowOpacity: 0.2,
    elevation: 1,
  }
});
export default Loader;
