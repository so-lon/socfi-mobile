import React from 'react';
import { StyleSheet, Dimensions, ScrollView } from 'react-native';
import { Block, theme, Text } from 'galio-framework';
import Slideshow from 'react-native-image-slider-show';
import { Book, Icon, Button } from '../components';
import articles from '../constants/articles';
import { argonTheme, tabs, Images } from "../constants";
import StarRating from 'react-native-star-rating';
const { width } = Dimensions.get('screen');
const { height } = Dimensions.get('screen');

class Feedback extends React.Component {
  state = {
    position: 0,
    interval: null,
    dataSource: [
      { 'url': 'http://placeimg.com/640/480/any' },
      { 'url': 'http://placeimg.com/640/481/any' },
      { 'url': 'http://placeimg.com/640/482/any' },
      { 'url': 'http://placeimg.com/640/483/any' },
      { 'url': 'http://placeimg.com/640/484/any' },
      { 'url': 'http://placeimg.com/640/485/any' }
    ]
  }

  componentWillMount() {
    this.setState({
      interval: setInterval(() => {
        this.setState({
          position: this.state.position === this.state.dataSource.length ? 0 : this.state.position + 1
        });
      }, 3000)
    });
  }

  componentWillUnmount() {
    clearInterval(this.state.interval);
  }

  renderNews = () => {
    return (
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.articles}>

        <Block flex style={{ backgroundColor: argonTheme.COLORS.WHITE }}>
          <Block style={styles.header}>
            <Block left styles={styles.left}>
              <Text
                h5
                bold
                style={{ marginBottom: theme.SIZES.BASE / 2 }}
                color={argonTheme.COLORS.PRIMARY}
              >
                ĐÁNH GIÁ
              </Text>
            </Block>
          </Block>
        </Block>
        <Block center style={{ marginRight: 10 }}>
        <StarRating
              disabled={false}
              maxStars={5}
              starSize={40}
              fullStarColor={argonTheme.COLORS.PRIMARY}
            />

        </Block>
        <Block center style={{ marginVertical: 40 }}>
            <Button color='info'>Lưu đánh giá</Button>
          </Block>
      </ScrollView>
    )
  }



  render() {
    return (
      <Block flex center style={styles.home}>
        {this.renderNews()}
      </Block>
    );
  }
}

const styles = StyleSheet.create({
  home: {
    width: width,
    paddingHorizontal: theme.SIZES.BASE / 2
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

export default Feedback;
