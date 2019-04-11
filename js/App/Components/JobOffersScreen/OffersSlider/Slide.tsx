import React, {Component} from 'react';
import {Image, PanResponder, Text, View, Animated, TouchableWithoutFeedback} from 'react-native';
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
  descCollapsed: boolean;

  fadeAnim: Animated.Value;
}

class Slide extends Component<IProps, IState> {
  private PanResponder;
  private animation = {
    position: null,
    rotate: null,
    rotateAndTranslate: null,
    likeOpacity: null,
    dislikeOpacity: null,
    x: null,
    y: null
  };

  constructor(props) {
    super(props);

    this.state = {
      descCollapsed: true,

      fadeAnim: new Animated.Value(0)
    };

    this._setUpAnimation();
  }

  componentDidMount(): void {
    Animated.timing(                  // Animate over time
      this.state.fadeAnim,            // The animated value to drive
      {
        toValue: 1,                   // Animate to opacity: 1 (opaque)
        duration: 10000,              // Make it take a while
      }
    ).start();
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

    animation.likeOpacity = animation.position.x.interpolate({
      inputRange: [-SCREEN_WIDTH / 2, 0, SCREEN_WIDTH / 2],
      outputRange: [0, 0, 1],
      extrapolate: 'clamp'
    });

    animation.dislikeOpacity = animation.position.x.interpolate({
      inputRange: [-SCREEN_WIDTH / 2, 0, SCREEN_WIDTH / 2],
      outputRange: [1, 0, 0],
      extrapolate: 'clamp'
    });
  };
  _handleSlidePress = () : void => {
    this.setState({descCollapsed: !this.state.descCollapsed})
  };
  render() {
    const {offer, index} = this.props;
    const {descCollapsed} = this.state;
    const animation = this.animation;
    const slideBckg = Themes.Images.slideBckg;

    const AnimatedView = Animated.createAnimatedComponent(View);

    const slideRender = this.PanResponder?

      <AnimatedView
        {...this.PanResponder.panHandlers}
        key={index}
        style={[styles.container, animation.rotateAndTranslate]}>
        <View style={styles.contentBox}>
          <Animated.View style={{ opacity: animation.likeOpacity, transform: [{ rotate: '-30deg' }], position: 'absolute', top: 50, left: 40, zIndex: 1000 }}>
          <Text style={{ borderWidth: 1, borderColor: 'green', color: 'green', fontSize: 32, fontWeight: '800', padding: 10 }}>APPLY</Text>
        </Animated.View>

          <Animated.View style={{ opacity: animation.dislikeOpacity, transform: [{ rotate: '30deg' }], position: 'absolute', top: 50, right: 40, zIndex: 1000 }}>
            <Text style={{ borderWidth: 1, borderColor: 'red', color: 'red', fontSize: 32, fontWeight: '800', padding: 10 }}>DENY</Text>
          </Animated.View>
          <Image resizeMode="cover" source={ slideBckg } style={ styles.bckgImage }/>
          <View style={[styles.top, descCollapsed ? null : styles.hidden]}>
            <Text style={styles.positionLabel}>{ offer.position }</Text>
            <Text style={styles.salaryLabel}>{ Formatter.salaryRange(offer.salaryMin, offer.salaryMax, offer.currency) }</Text>
            <Text style={styles.locationLabel}> { offer.location }</Text>
          </View>
          <TouchableWithoutFeedback onPress={this._handleSlidePress}>
            <View style={styles.middle}>
              <Text style={styles.companyNameLabel}>{ offer.company }</Text>
              <Text style={styles.description}>{ descCollapsed ? Formatter.trimDesc(offer.desc) : offer.desc }</Text>
            </View>
          </TouchableWithoutFeedback>
          <View style={styles.bottom}>
            <Text style={styles.readMoreIncent}>{ descCollapsed ? "Tap to read more" : "Tap to close" }</Text>
          </View>
        </View>
      </AnimatedView>

    : <></>;

    return (slideRender);
  }
}

export default Slide;
