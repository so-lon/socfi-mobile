import React from 'react';
import { StyleSheet, Dimensions, ScrollView } from 'react-native';
import { Block, theme, Text } from 'galio-framework';
import Slideshow from 'react-native-image-slider-show';
import { Card } from '../components';
import articles from '../constants/articles';
import { argonTheme, tabs, Images } from "../constants/";
import { TouchableOpacity } from 'react-native-gesture-handler';
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
      // { 'url': 'http://placeimg.com/640/483/any' },
      // { 'url': 'http://placeimg.com/640/484/any' },
      // { 'url': 'http://placeimg.com/640/485/any' }
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
                h5
                bold
                style={{ marginBottom: theme.SIZES.BASE / 2 }}
                color={argonTheme.COLORS.PRIMARY}
              >
                SÂN BÓNG GẦN ĐÂY
              </Text>
            </Block>
            <Block right style={styles.right}>
              <TouchableOpacity onPress={() => this.props.navigation.navigate('NearbyStadium')}>
                <Text color={argonTheme.COLORS.PRIMARY} italic>Xem thêm...</Text>
              </TouchableOpacity>
            </Block>
          </Block>
          <ScrollView horizontal>
            <Card item={articles.home[0]}  />
            <Card item={articles.home[0]}  />
            <Card item={articles.home[0]}  />
            <Card item={articles.home[0]}  />
            <Card item={articles.home[0]}  />
          </ScrollView>
        </Block>

        
        <Block style={{ marginVertical: 10, borderColor: "rgba(0,0,0,0.2)", width: '100%', borderWidth: StyleSheet.hairlineWidth }} />
        <Block flex>
          <Block style={styles.header}>
            <Block left styles={styles.left}>
              <Text
                h5
                bold
                style={{ marginBottom: theme.SIZES.BASE / 2 }}
                color={argonTheme.COLORS.PRIMARY}
              >
                SÂN BÓNG GIẢM GIÁ
              </Text>
            </Block>
            <Block right style={styles.right}>
              {/* <Text color={argonTheme.COLORS.PRIMARY} italic>Xem thêm...</Text> */}
            </Block>
          </Block>
          <ScrollView horizontal>
            <Card item={articles.home[0]} full />
            <Card item={articles.home[0]} full />
            <Card item={articles.home[0]} full />
            <Card item={articles.home[0]} full />
            <Card item={articles.home[0]} full />
          </ScrollView>
        </Block>
        <Block style={{ marginVertical: 10, borderColor: "rgba(0,0,0,0.2)", width: '100%', borderWidth: StyleSheet.hairlineWidth }} />
        <Block flex style={{ backgroundColor: argonTheme.COLORS.WHITE }}>
          <Block style={styles.header}>
            <Block left styles={styles.left}>
              <Text
                h5
                bold
                style={{ marginBottom: theme.SIZES.BASE / 2 }}
                color={argonTheme.COLORS.PRIMARY}
              >
                SÂN BÓNG NỔI BẬT
              </Text>
              {/* <Text>Xem thêm...</Text> */}
            </Block>
            <Block right style={styles.right}>
              {/* <Text color={argonTheme.COLORS.PRIMARY} italic>Xem thêm...</Text> */}
            </Block>
          </Block>
          <ScrollView showsHorizontalScrollIndicator={false} horizontal>
            {/* <Card item={articles[0]} horizontal />
          <Block flex row>
            <Card item={articles[1]} style={{ marginRight: theme.SIZES.BASE }} />
            <Card item={articles[2]} />
          </Block> */}
            {/* <Card item={articles[3]} horizontal /> */}
            <Card item={articles.home[0]} full />
            <Card item={articles.home[0]} full />
            <Card item={articles.home[0]} full />
            <Card item={articles.home[0]} full />
            <Card item={articles.home[0]} full />
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

export default Home;
