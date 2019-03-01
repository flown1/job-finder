import React, {Component} from 'react';
import {Image, PanResponder, Text, View, Animated} from 'react-native';
import {Metrics} from "../../../Themes";
import styles from "./Styles/SlideStyles";
import * as Themes from '../../../Themes';
import {Formatter} from "../../../Utils/Formatter";

interface IProps {
  offer: JobOffer
  index?: number,
  onSwipedRight: (idx: number) => void,
  onSwipedLeft: (idx: number) => void
}
interface IState {
}

class Slide extends Component<IProps, IState> {
  private PanResponder;
  private animation = {
    position: null,
    rotate: null,
    rotateAndTranslate: null,
    x: null,
    y: null
  };

  constructor(props) {
    super(props);

    this._setUpAnimation();
  }
  _slideSwipedRight = () : void => {
    const { index } = this.props;
    this.props.onSwipedRight(index);
  };
  _slideSwipedLeft = () : void => {
    const { index } = this.props;
    this.props.onSwipedLeft(index);
  };
  _setUpAnimation = () : void => {
    const SCREEN_WIDTH = Metrics.screenWidth;
    const animation = this.animation;

    this.animation.position = new Animated.ValueXY();
    this.PanResponder = PanResponder.create({

      onStartShouldSetPanResponder: () => true,
      onPanResponderMove: (evt, gestureState) => {

        animation.position.setValue({ x: gestureState.dx, y: gestureState.dy });
      },
      onPanResponderRelease: (evt, gestureState) => {
        if (gestureState.dx > 120) {
          Animated.spring(animation.position, {
            toValue: { x: SCREEN_WIDTH + 100, y: gestureState.dy}
          }).start(() => {
            this._slideSwipedRight();
          });
        } else if (gestureState.dx < -120) {
          Animated.spring(animation.position, {
            toValue: { x: -SCREEN_WIDTH - 100, y: gestureState.dy}
          }).start(() => {
            this._slideSwipedLeft();
          });
        } else {
          Animated.spring(animation.position, {
            toValue: { x: 0, y: 0 },
            friction: 4
          }).start()
        }
      }
    });

    animation.rotate = animation.position.x.interpolate({
      inputRange: [-SCREEN_WIDTH / 2, 0, SCREEN_WIDTH / 2],
      outputRange: ['-10deg', '0deg', '10deg'],
      extrapolate: 'clamp'
    });

    animation.rotateAndTranslate = {
      transform: [{
        rotate: animation.rotate
      },
        ...animation.position.getTranslateTransform()
      ]
    };
  };

  render() {
    const {offer, index} = this.props;
    const animation = this.animation;
    const slideBckg = Themes.Images.slideBckg;

    const toRender = this.PanResponder?
      <Animated.View
        {...this.PanResponder.panHandlers}
        key={index}
        style={[styles.container, animation.rotateAndTranslate]}>
        <Image resizeMode="cover" source={slideBckg} style={styles.bckgImage}/>
        <View style={styles.contentBox}>
          <View style={styles.top}>
            <Text style={styles.positionLabel}>{offer.position}</Text>
            <Text style={styles.salaryLabel}>{Formatter.salaryRange(offer.salaryMin, offer.salaryMax, offer.currency)}</Text>
            <Text style={styles.locationLabel}>{offer.location}</Text>
          </View>
          <View style={styles.middle}>
            <Text style={styles.companyNameLabel}>{offer.company}</Text>
            <Text style={styles.description}>{offer.desc}</Text>
          </View>
          <View style={styles.bottom}>
            {/*<Text style={styles.readMoreIncent}>Tap to read more</Text>*/}
          </View>
        </View>
      </Animated.View>
    : <></>;

    return (toRender);
  }
}

export default Slide;
