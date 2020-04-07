import React from 'react';
import { StyleSheet, Dimensions, ScrollView, Linking } from 'react-native';
import { Block, theme, Text } from 'galio-framework';
import Slideshow from 'react-native-image-slider-show';
import { Card, Icon, Button } from '../components';
import articles from '../constants/articles';
import { argonTheme, tabs, Images } from "../constants";
import { TouchableOpacity } from 'react-native-gesture-handler';
const { width } = Dimensions.get('screen');
const { height } = Dimensions.get('screen');

class Stadium extends React.Component {
  state = {
    position: 0,
    interval: null,
    dataSource: [
      { 'url': 'https://media.discordapp.net/attachments/682134033739808891/697193794621145178/1.jpg?width=500&height=333' },
      { 'url': 'https://media.discordapp.net/attachments/682134033739808891/697195735912808468/4.jpeg ' },
      // { 'url': 'http://placeimg.com/640/483/any' },
      // { 'url': 'http://placeimg.com/640/484/any' },
      // { 'url': 'http://placeimg.com/640/485/any' }
    ]
  }

  // componentWillMount() {
  //   this.setState({
  //     interval: setInterval(() => {
  //       this.setState({
  //         position: this.state.position === this.state.dataSource.length ? 0 : this.state.position + 1
  //       });
  //     }, 3000)
  //   });
  // }

  // componentWillUnmount() {
  //   clearInterval(this.state.interval);
  // }

  renderArticles = () => {
    const { navigation } = this.props;
    return (
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.articles}>
        <Block center>
          <Slideshow
            dataSource={this.state.dataSource}
            position={this.state.position}
            onPositionChanged={position => this.setState({ position })}
          />
        </Block>
        {/* line breaker */}
        {/* <Block style={{ marginVertical: 10, borderColor: "rgba(0,0,0,0.2)", width: '100%', borderWidth: StyleSheet.hairlineWidth }} /> */}

        <Block flex>
          <Block style={styles.header}>
            <Block left styles={styles.left}>
              <Text
                h5
                bold
                style={{ marginBottom: theme.SIZES.BASE / 2 }}
                color={argonTheme.COLORS.PRIMARY}
              >
                Sân bóng đá SCSC Chảo Lửa
              </Text>
            </Block>
          </Block>
          <Block style={{ marginVertical: 10, borderColor: "rgba(0,0,0,0.2)", width: '100%', borderWidth: StyleSheet.hairlineWidth }} />

          <Block row center style={styles.options}>
            <Button shadowless style={styles.tab} onPress={() => navigation.navigate('Booking')}>
              <TouchableOpacity>
                <Block row middle>
                  <Icon name="date-range" family="material" style={{ paddingRight: 8 }} color={argonTheme.COLORS.PRIMARY} />
                  <Text size={16} style={styles.tabTitle}>{'ĐẶT SÂN'}</Text>
                </Block>
              </TouchableOpacity>
            </Button>
            <TouchableOpacity>
              <Button style={styles.tab} onPress={() => Linking.openURL('google.navigation:q=San chao lua scsc')}>
                <Block row middle>
                  <Icon size={16} name="directions" family="material" style={{ paddingRight: 8 }} color={argonTheme.COLORS.PRIMARY} />
                  <Text size={16} style={styles.tabTitle}>{'CHỈ ĐƯỜNG'}</Text>
                </Block>
              </Button>
            </TouchableOpacity>
          </Block>

          <Block style={{ borderColor: "rgba(0,0,0,0.2)", width: '100%', borderWidth: StyleSheet.hairlineWidth }} />

          <Block left style={{ marginVertical: 20 }}>
            <Block row style={{ marginBottom: 20 }}>
              <Icon
                name="location-on"
                family="material"
                size={20}
                color={argonTheme.COLORS.PRIMARY}
                style={{ marginRight: 5 }}
              />
              <Text size={16}>Địa chỉ: 35 Phan Thúc Duyện, Quận Tân Bình</Text>
            </Block>

            <Block row style={{ marginBottom: 20 }}>
              <Icon
                name="phone"
                family="material"
                size={20}
                color={argonTheme.COLORS.PRIMARY}
                style={{ marginRight: 5 }}
              />
              <Text size={16}>SĐT liên hệ: 0969982324</Text>
            </Block>

            <Block row style={{ marginBottom: 20 }}>
              <Icon
                name="clockcircle"
                family="AntDesign"
                size={20}
                color={argonTheme.COLORS.PRIMARY}
                style={{ marginRight: 5 }}
              />
              <Text size={16}>Giờ mở cửa: 08:00 - 24:00</Text>
            </Block>

            <Block row style={{ marginBottom: 20 }}>
              <Icon
                name="attach-money"
                family="material"
                size={20}
                color={argonTheme.COLORS.PRIMARY}
                style={{ marginRight: 5 }}
              />
              <Text size={16}>Mức giá: 150k - 350k/giờ</Text>
            </Block>

          </Block>
        </Block>
        {/* <Block center> */}

        {/* </Block> */}

      </ScrollView>
    )
  }

  render() {
    const { navigation } = this.props;
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
    justifyContent: 'space-evenly',
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
  tab: {
    backgroundColor: theme.COLORS.TRANSPARENT,
    width: width * 0.4,
    borderRadius: 0,
    borderWidth: 0,
    height: 30,
    elevation: 0,
    // borderRightWidth: 0.3,
    // borderRightColor: theme.COLORS.ICON,
    // borderLeftWidth: 0.3,
    // borderLeftColor: theme.COLORS.ICON,
  },
  options: {
    marginBottom: 24,
    marginTop: 10,
    elevation: 4,
  },
  tabTitle: {
    lineHeight: 19,
    fontWeight: '400',
    color: argonTheme.COLORS.PRIMARY
  },
  divider: {
    borderRightWidth: 0.3,
    borderRightColor: theme.COLORS.ICON,
  },
});

export default Stadium;
