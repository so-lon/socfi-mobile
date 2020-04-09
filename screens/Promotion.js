import React from 'react';
import { StyleSheet, Dimensions, ScrollView, Linking, Image } from 'react-native';
import { Block, theme, Text } from 'galio-framework';
import { Icon, Button } from '../components';
import { argonTheme } from "../constants";
import articles from '../constants/articles';
const { width } = Dimensions.get('screen');
const { height } = Dimensions.get('screen');


class Stadium extends React.Component {
  state = {
    position: 0,
    interval: null,
  }

  renderArticles = () => {
    const { navigation } = this.props;
    return (
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.articles}>
        <Block flex>
          <Image source={{uri: 'https://cdn.discordapp.com/attachments/682134033739808891/696765994885971998/5.jpg'}} style={{height: 130}} />
        </Block>
        <Block flex>
          <Block style={[styles.header, styles.shadow]}>
            <Block left styles={styles.left}>
              <Text
                h4
                bold
                style={{ marginBottom: theme.SIZES.BASE / 2 }}
                color={argonTheme.COLORS.DEFAULT}
              >
                {articles.promotion[0].title}
              </Text>
              <Text
                style={{ marginBottom: theme.SIZES.BASE / 2 }}
                color={argonTheme.COLORS.DEFAULT}
              >
                SOCFISYSTEM 08/04/2020 14:50
              </Text>
              <Block left style={styles.line}></Block>

              <Text>
              Cao cấp hơn, một số chủ sân sẵn sàng tặng bóng cho khách đặt trước chỗ cho 2 trận trong khung giờ muộn (sau 20h30). Với các sân bóng có thêm phòng tắm và cửa hàng giải khát, khách hàng có thể được tắm nóng lạnh miễn phí và nhận phiếu giảm giá bia ngay sau các trận đấu. Riêng vào các khung giờ thấp điểm, giá sân vốn chỉ bằng 30% so với giá giờ cao điểm nhưng vẫn được chủ sân chiết khấu mạnh tay, từ 10 đến 30% tùy số trận đặt trước.
              </Text>
            </Block>
            <Block center style={styles.articles}>
              <Button color='default' onPress={() => this.props.navigation.navigate('Booking')} size={2}>
                <Block row middle>
                  <Icon size={16} name="date-range" family="material" style={{ paddingRight: 8 }} color={argonTheme.COLORS.WHITE} />
                  <Text size={16} bold color={argonTheme.COLORS.WHITE} >ĐẶT SÂN</Text>
                </Block>
              </Button>
            </Block>
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
    height: 'auto',
    flexDirection: 'column',
    backgroundColor: theme.COLORS.WHITE,
    padding: theme.SIZES.BASE,
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
  shadow: {
    shadowColor: theme.COLORS.BLACK,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    shadowOpacity: 0.1,
    elevation: 2,
  },
  line: {
    width: '100%',
    height: 1,
    backgroundColor: argonTheme.COLORS.DEFAULT,
    marginVertical: '5%',
  },
});

export default Stadium;
