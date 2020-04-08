import React from 'react';
import { StyleSheet, Dimensions, ScrollView } from 'react-native';
import { Block, theme, Text, Card as GalioCard } from 'galio-framework';
import Slideshow from 'react-native-image-slider-show';
import { Card, Button } from '../components';
import articles from '../constants/articles';
import { argonTheme, tabs, Images } from "../constants/";
import { TouchableOpacity } from 'react-native-gesture-handler';
import CardBorderless from '../components/CardBorderless';
const { width } = Dimensions.get('screen');
const { height } = Dimensions.get('screen');

class Home extends React.Component {
  state = {
    position: 0,
    interval: null,
    dataSource: [
      { 'url': 'https://cdn.discordapp.com/attachments/682134033739808891/696765994885971998/5.jpg' },

      { 'url': 'https://cdn.discordapp.com/attachments/682134033739808891/696766019641016341/2_2.jpg' },
      { 'url': 'https://cdn.discordapp.com/attachments/682134033739808891/696765989559336960/5_1.jpg' },
    ]
  }

  componentWillMount() {
    this.setState({
      interval: setInterval(() => {
        this.setState({
          position: this.state.position === this.state.dataSource.length ? 0 : this.state.position + 1
        });
      }, 1500)
    });
  }

  componentWillUnmount() {
    clearInterval(this.state.interval);
  }

  renderArticles = () => {
    return (
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.articles}>
        <Block center>
          <Slideshow
            // height={230}
            dataSource={this.state.dataSource}
            position={this.state.position}
            onPositionChanged={position => this.setState({ position })}
          />
        </Block>

        <Block flex>
          <Block style={styles.header}>
            <Block left styles={styles.left}>
              <Text
                h4
                bold
                color={argonTheme.COLORS.DEFAULT}
              >
                Sân bóng nổi bật
              </Text>
              <Block left style={styles.line}></Block>
            </Block>
          </Block>
          <ScrollView horizontal>
            <Card item={articles.home[0]}/>
            <Card item={articles.home[1]}/>
            <Card item={articles.home[2]}/>
            <Card item={articles.home[3]}/>
          </ScrollView>
        </Block>

        <Block flex>
          <Block style={styles.header}>
            <Block left styles={styles.left}>
              <Text
                h4
                bold
                color={argonTheme.COLORS.DEFAULT}
              >
                Mã khuyến mãi
              </Text>
              <Block left style={styles.line}></Block>
            </Block>
          </Block>
          <ScrollView horizontal>
            <Block style={[styles.promotion, {backgroundColor: argonTheme.COLORS.INFO}]}>
              <Text bold color='white'>Nhập BUOITRUA</Text>
              <Text bold color='white'>30% Off | 10h - 14h</Text>
            </Block>
            <Block style={[styles.promotion, {backgroundColor: argonTheme.COLORS.WARNING}]}>
              <Text bold color='white'>Nhập COVID19</Text>
              <Text bold color='white'>99% Off | 15h - 17h</Text>
            </Block>
            <Block style={[styles.promotion, {backgroundColor: argonTheme.COLORS.DEFAULT}]}>
              <Text bold color='white'>Nhập KHUYA</Text>
              <Text bold color='white'>20% Off | 0h - 4h</Text>
            </Block>
          </ScrollView>
        </Block>

        <Block flex>
          <Block style={styles.header}>
            <Block left styles={styles.left}>
              <Text
                h4
                bold
                color={argonTheme.COLORS.DEFAULT}
              >
                Các khuyến mãi HOT!
              </Text>
              <Block left style={styles.line}></Block>
            </Block>
          </Block>
          <ScrollView horizontal>
            <CardBorderless item={articles.promotion[0]}/>
            <CardBorderless item={articles.promotion[1]}/>
            <CardBorderless item={articles.promotion[2]}/>
          </ScrollView>
        </Block>

      </ScrollView>
    )
  }

  render() {
    return (
      <Block flex center style={styles.home}>
        {this.renderArticles()}
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
    // height: theme.SIZES.BASE * 4.125,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    // backgroundColor: theme.COLORS.WHITE,
    paddingVertical: theme.SIZES.BASE,
    marginTop: '10%',
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
  line: {
    width: width * 0.3,
    height: 10,
    backgroundColor: argonTheme.COLORS.PRIMARY,
    marginVertical: '2%',
  },
  promotion: {
    width: width * 0.5,
    height: height * 0.1,
    justifyContent: 'center',
    padding: 25,
    marginTop: height * 0.03,
    marginRight: 20,
    borderRadius: 40,
  }
});

export default Home;
