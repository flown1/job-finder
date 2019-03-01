import React, {Component} from 'react';
import {Linking, StyleSheet, Text, View} from 'react-native';
import Slide from "./Slide";
import Loader from "../../Utils/Loader/Loader";
import PrimaryButton from "../../Utils/Buttons/PrimaryButton/PrimaryButton";
import * as Themes from '../../../Themes';

interface IProps {
  offers: Array<JobOffer>
}
interface IState {
  openingURL: boolean
}
class OffersSlider extends Component<IProps, IState> {
  constructor(props){
    super(props);

    this.state = {
      openingURL: false
    }
  }

  _openLink = (url) => {
    this.setState({openingURL: true});
    Linking.canOpenURL(url).then(supported => {
      if (supported) {
        Linking.openURL(url);
        this.setState({openingURL: false});
      } else {
        console.log("Don't know how to open URI: " + url);
      }
    });
  };

  _onSwipeRight = (idx : number) : void => {
    const { offers } = this.props;
    const offer = offers[idx];

    console.log('Swiped right:', offer.position);
    this._openLink(offer.link);
  };

  _onSwipeLeft = (idx : number) : void => {
    const { offers } = this.props;
    const offer = offers[idx];

    console.log('Swiped left:', offer.position);
  };

  _handleOnResetPress = () => {
    console.warn("No such functionality yet :/");
  };

  render() {
    const { offers } = this.props;
    const { openingURL } = this.state;

    const offersRender = offers ?
      <View style={styles.container}>
        <View>
          <Text style={styles.noMoreText}>No more job offers</Text>
          <PrimaryButton onPress={this._handleOnResetPress} text={"Reset deck"}/>
        </View>
        {offers.map((offer, idx) => {
          return <Slide key={idx} index={idx} offer={offer} onSwipedLeft={this._onSwipeLeft} onSwipedRight={this._onSwipeRight}/>
        })}
      </View>
      :
      <Text>Loading...</Text>;

    const loader = openingURL?
      <Loader text={"Opening link"}/>
      :
      null;

    return (
      <>
        {offersRender}
        {loader}
      </>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  noMoreText: {
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    fontSize: Themes.Fonts.size.regular
  }
});
export default OffersSlider;
