import React from 'react';
import { StyleSheet, Dimensions, ScrollView } from 'react-native';
import { Block, theme, Text } from 'galio-framework';
import Slideshow from 'react-native-image-slider-show';
import { Book, Icon } from '../components';
import articles from '../constants/articles';
import { argonTheme, tabs, Images } from "../constants/";
const { width } = Dimensions.get('screen');
const { height } = Dimensions.get('screen');

class News extends React.Component {
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
                TIN TỨC - KHUYẾN MÃI
              </Text>
            </Block>
          </Block>
        </Block>
        <Block left style={{ marginRight: 10 }}>
          <Block row style={styles.label}>
            <Icon
              name="whatshot"
              family="material"
              size={20}
              color={argonTheme.COLORS.ERROR}
              style={{ marginRight: 5 }}
            />
            <Text size={16}>WEEKDAY20: giảm giá 20k/1h trước 16h các ngày từ thứ Hai đến thứ Sáu</Text>
          </Block>
          <Block style={styles.label}>
            <Text size={16}>Áp dụng cho các sân: Sân SCSC Chảo Lửa, Q. Tân Bình</Text>
          </Block>

        </Block>
        <Block left style={{ marginRight: 10, marginTop: 10 }}>
          <Block row style={styles.label}>
            <Icon
              name="whatshot"
              family="material"
              size={20}
              color={argonTheme.COLORS.ERROR}
              style={{ marginRight: 5 }}
            />
            <Text size={16}>WEEKDAY30: giảm giá 30k/1h trước 16h các ngày từ thứ Hai đến thứ Sáu</Text>
          </Block>
          <Block style={styles.label}>
            <Text size={16}>Áp dụng cho các sân: Sân Thăng Long, Q.Tân Bình</Text>
          </Block>

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

export default News;
