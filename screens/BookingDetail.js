import React from 'react';
import { StyleSheet, Dimensions, ScrollView } from 'react-native';
import { Block, theme, Text } from 'galio-framework';
import Slideshow from 'react-native-image-slider-show';
import { Book } from '../components';
import articles from '../constants/articles';
import { argonTheme, tabs, Images } from "../constants";
const { width } = Dimensions.get('screen');
const { height } = Dimensions.get('screen');

class BookingDetail extends React.Component {



  render() {
    return (
      <Block flex center style={styles.home}>
        
      </Block>
    );
  }
}

const styles = StyleSheet.create({
  home: {
    width: width,
  },
  articles: {
    width: width - theme.SIZES.BASE * 2,
    paddingVertical: theme.SIZES.BASE,
  },
  header: {
    width: 'auto',
    height: theme.SIZES.BASE * 4.125,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: theme.COLORS.WHITE,
    paddingVertical: theme.SIZES.BASE,
  },
  left: {
    paddingVertical: 12,
    flex: 0.2,
    flex: 0.5,
    height: height * 0.07,
    justifyContent: 'center',
    marginLeft: theme.SIZES.BASE,
  },
  right: {
    flex: 1,
    height: height * 0.07,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 42,
    // marginRight: theme.SIZES.BASE,
  },
});

export default BookingDetail;
