import React from 'react';
import { StyleSheet, Dimensions, ScrollView, Linking } from 'react-native';
import { Block, theme, Text } from 'galio-framework';
import Slideshow from 'react-native-image-slider-show';
import { Card, Icon, Button } from '../components';
import { argonTheme, tabs, Images } from "../constants";
import Accordion from 'react-native-collapsible/Accordion';
import StarRating from 'react-native-star-rating';
const { width } = Dimensions.get('screen');
const { height } = Dimensions.get('screen');

const SECTIONS = [
  {
    title: 'Thứ Hai',
    content: [
      'Sân 5 người: 08:00 - 17:30: 150.000VNĐ/h',
      'Sân 5 người: 17:30 - 24:00: 300.000VNĐ/h',
      'Sân 7 người: 19:00 - 21:00: 1.000.000VNĐ/h',
    ]
  },
  {
    title: 'Thứ Ba',
    content: [
      'Sân 5 người: 08:00 - 17:30: 150.000VNĐ/h',
      'Sân 5 người: 17:30 - 24:00: 300.000VNĐ/h',
      'Sân 7 người: 19:00 - 21:00: 1.000.000VNĐ/h',
    ]
  },
  {
    title: 'Thứ Tư',
    content: [
      'Sân 5 người: 08:00 - 17:30: 150.000VNĐ/h',
      'Sân 5 người: 17:30 - 24:00: 300.000VNĐ/h',
      'Sân 7 người: 19:00 - 21:00: 1.000.000VNĐ/h',
    ]
  },
  {
    title: 'Thứ Năm',
    content: [
      'Sân 5 người: 08:00 - 17:30: 150.000VNĐ/h',
      'Sân 5 người: 17:30 - 24:00: 300.000VNĐ/h',
      'Sân 7 người: 19:00 - 21:00: 1.000.000VNĐ/h',
    ]
  },
  {
    title: 'Thứ Sáu',
    content: [
      'Sân 5 người: 08:00 - 17:30: 150.000VNĐ/h',
      'Sân 5 người: 17:30 - 24:00: 300.000VNĐ/h',
      'Sân 7 người: 19:00 - 21:00: 1.000.000VNĐ/h',
    ]
  },
  {
    title: 'Thứ Bảy',
    content: [
      'Sân 5 người: 08:00 - 17:30: 220.000VNĐ/h',
      'Sân 5 người: 17:30 - 24:00: 350.000VNĐ/h',
      'Sân 7 người: 19:00 - 21:00: 1.200.000VNĐ/h',
    ]
  },
  {
    title: 'Chủ Nhật',
    content: [
      'Sân 5 người: 08:00 - 17:30: 220.000VNĐ/h',
      'Sân 5 người: 17:30 - 24:00: 350.000VNĐ/h',
      'Sân 7 người: 19:00 - 21:00: 1.200.000VNĐ/h',
    ]
  },
];

class Stadium extends React.Component {
  state = {
    position: 0,
    interval: null,
    dataSource: [
      { 'url': 'https://media.discordapp.net/attachments/682134033739808891/697193794621145178/1.jpg?width=500&height=333' },
      { 'url': 'https://media.discordapp.net/attachments/682134033739808891/697195735912808468/4.jpeg ' },
    ],
    activeSections: [],
  }

  _renderHeader = section => {
    return (
      <Block row style={styles.weekDay}>
        <Text style={styles.headerText}>{section.title}</Text>
        <Icon name="keyboard-arrow-down" family="material" style={{ paddingLeft: 8 }} color={argonTheme.COLORS.PRIMARY} />
      </Block>
    );
  };

  _renderContent = section => {
    return (
      <Block center>
        {section.content.map((key, value) => <Text style={{ marginBottom: 10 }}>{key}</Text>)}
      </Block>
    );
  };

  _updateSections = activeSections => {
    this.setState({ activeSections });
  };

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
        <Block flex>
          <Block style={[styles.header, styles.shadow]}>
            <Block center styles={styles.left}>
              <Text
                size={14}
                style={{ marginVertical: theme.SIZES.BASE / 2 }}
                color={argonTheme.COLORS.PRIMARY}
              >
                ĐỐI TÁC CỦA SOCFI
              </Text>
              <Text
                h4
                bold
                style={{ marginBottom: theme.SIZES.BASE / 2 }}
                color={argonTheme.COLORS.DEFAULT}
              >
                Sân SCSC Chảo Lửa
              </Text>
              <StarRating
                disabled={true}
                maxStars={5}
                rating={5}
                starSize={18}
                fullStarColor={argonTheme.COLORS.STAR}
              />
            </Block>
          </Block>

          <Block flex style={{marginTop: theme.SIZES.BASE * 2}}>
            <Text h4 bold color={argonTheme.COLORS.DEFAULT}>Thông tin sân</Text>
            <Block left style={styles.line}></Block>

            <Block row>
              <Text size={14} style={{marginVertical: theme.SIZES.BASE / 2}}>
                <Icon
                  name="location-on"
                  family="material"
                  size={14}
                  color={argonTheme.COLORS.PRIMARY}
                />
              </Text>
              <Text size={14} style={{marginVertical: theme.SIZES.BASE / 2, marginLeft: theme.SIZES.BASE / 2}}>
                35 Phan Thúc Duyện, Quận Tân Bình
              </Text>
            </Block>

            <Block row>
              <Text size={14} style={{marginVertical: theme.SIZES.BASE / 2}}>
                <Icon
                  name="phone"
                  family="material"
                  size={14}
                  color={argonTheme.COLORS.PRIMARY}
                />
              </Text>
              <Text size={14} style={{marginVertical: theme.SIZES.BASE / 2, marginLeft: theme.SIZES.BASE / 2}}>
                0969 982 324
              </Text>
            </Block>

            <Block row>
              <Text size={14} style={{marginVertical: theme.SIZES.BASE / 2}}>
                <Icon
                  name="clockcircle"
                  family="AntDesign"
                  size={14}
                  color={argonTheme.COLORS.PRIMARY}
                />
              </Text>
              <Text size={14} style={{marginVertical: theme.SIZES.BASE / 2, marginLeft: theme.SIZES.BASE / 2}}>
                08:00 - 24:00
              </Text>
            </Block>

            <Block row>
                <Text size={14} style={{marginVertical: theme.SIZES.BASE / 2}}>
                  <Icon
                    name="attach-money"
                    family="material"
                    size={14}
                    color={argonTheme.COLORS.PRIMARY}
                  />
                </Text>
                <Text size={14} style={{marginVertical: theme.SIZES.BASE / 2, marginLeft: theme.SIZES.BASE / 2}}>
                  150K - 350K 
                </Text>
              </Block>

          <Block flex style={styles.articles}>
            <Text h4 bold color={argonTheme.COLORS.DEFAULT}>Khuyến mãi hiện có</Text>
            <Block left style={styles.line}></Block>

            <Block row>
              <Text size={14} style={{marginVertical: theme.SIZES.BASE / 2}}>
                <Icon
                  name="whatshot"
                  family="material"
                  size={14}
                  color={argonTheme.COLORS.ERROR}
                />
              </Text>
              <Text size={14} style={{marginVertical: theme.SIZES.BASE / 2, marginLeft: theme.SIZES.BASE / 2}}>
                WEEKDAY20: giảm giá 20k/1h trước 16h các ngày từ thứ Hai đến thứ Sáu
              </Text>
            </Block>

            <Block row>
              <Text size={14} style={{marginVertical: theme.SIZES.BASE / 2}}>
                <Icon
                  name="whatshot"
                  family="material"
                  size={14}
                  color={argonTheme.COLORS.ERROR}
                />
              </Text>
              <Text size={14} style={{marginVertical: theme.SIZES.BASE / 2, marginLeft: theme.SIZES.BASE / 2}}>
                COVID19: giảm giá 99% từ 15h đến 17h
              </Text>
            </Block>
          </Block>

          <Block flex style={{marginTop: theme.SIZES.BASE / 2}}>
            <Text h4 bold color={argonTheme.COLORS.DEFAULT}>Giá sân theo ngày</Text>
            <Block left style={styles.line}></Block>

            <Block row style={{ marginVertical: theme.SIZES.BASE / 2 }}>
              <Accordion
                sections={SECTIONS}
                activeSections={this.state.activeSections}
                renderHeader={this._renderHeader}
                renderContent={this._renderContent}
                onChange={this._updateSections}
                underlayColor={theme.COLORS.ACTIVE}
              />
            </Block>
          </Block>

          <Button color='default' onPress={() => this.props.navigation.navigate('Booking')} style={{marginBottom: theme.SIZES.BASE / 2}}>
            <Block row middle>
              <Icon size={16} name="date-range" family="material" style={{ paddingRight: 8 }} color={argonTheme.COLORS.WHITE} />
              <Text size={16} bold color={argonTheme.COLORS.WHITE} >ĐẶT SÂN</Text>
            </Block>
          </Button>
        
          <Button color='info' onPress={() => Linking.openURL('google.navigation:q=San chao lua scsc')}>
            <Block row middle>
              <Icon size={16} name="directions" family="material" style={{ paddingRight: 8 }} color={argonTheme.COLORS.WHITE} />
              <Text size={16} bold color={argonTheme.COLORS.WHITE} >CHỈ ĐƯỜNG</Text>
            </Block>
          </Button>
          </Block>
        </Block>
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
    height: theme.SIZES.BASE * 7,
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
  divider: {
    borderRightWidth: 0.3,
    borderRightColor: theme.COLORS.ICON,
  },
  shadow: {
    shadowColor: theme.COLORS.BLACK,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    shadowOpacity: 0.1,
    elevation: 2,
  },
  line: {
    width: width * 0.3,
    height: 10,
    backgroundColor: argonTheme.COLORS.PRIMARY,
    marginVertical: '2%',
  },
  weekDay: {
    width: width - theme.SIZES.BASE * 2,
    height: theme.SIZES.BASE * 3,
    flexDirection: 'row',
  },
});

export default Stadium;
