import React from 'react';
import { StyleSheet, Dimensions, ScrollView, View } from 'react-native';
import { Block, theme, Text } from 'galio-framework';
import Slideshow from 'react-native-image-slider-show';
import { Card, Icon, Button, Select } from '../components';
import { Collapsible } from '../components/Collapsible'
import articles from '../constants/articles';
import { argonTheme, tabs, Images } from "../constants";
const { width } = Dimensions.get('screen');
const { height } = Dimensions.get('screen');
import Accordion from 'react-native-collapsible/Accordion';
const SECTIONS = [
  {
    title: 'Thứ Hai',
    content: [
      'Sân 5 người: 08:00 - 17:30: 150.000VNĐ/h',
      'Sân 5 người: 17:30 - 24:00: 300.000VNĐ/h',
    ]
  },
  {
    title: 'Thứ Ba',
    content: [
      'Sân 5 người: 08:00 - 17:30: 150.000VNĐ/h',
      'Sân 5 người: 17:30 - 24:00: 300.000VNĐ/h',
    ]
  },
  {
    title: 'Thứ Tư',
    content: [
      'Sân 5 người: 08:00 - 17:30: 150.000VNĐ/h',
      'Sân 5 người: 17:30 - 24:00: 300.000VNĐ/h',
    ]
  },
  {
    title: 'Thứ Năm',
    content: [
      'Sân 5 người: 08:00 - 17:30: 150.000VNĐ/h',
      'Sân 5 người: 17:30 - 24:00: 300.000VNĐ/h',
    ]
  },
  {
    title: 'Thứ Sáu',
    content: [
      'Sân 5 người: 08:00 - 17:30: 150.000VNĐ/h',
      'Sân 5 người: 17:30 - 24:00: 300.000VNĐ/h',
    ]
  },
  {
    title: 'Thứ Bảy',
    content: [
      'Sân 5 người: 08:00 - 17:30: 220.000VNĐ/h',
      'Sân 5 người: 17:30 - 24:00: 350.000VNĐ/h',
    ]
  },
  {
    title: 'Chủ Nhật',
    content: [
      'Sân 5 người: 08:00 - 17:30: 220.000VNĐ/h',
      'Sân 5 người: 17:30 - 24:00: 350.000VNĐ/h',
    ]
  },
];
class Booking extends React.Component {
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
    ],
    activeSections: [],
  }

  // _renderSectionTitle = section => {
  //   return (
  //     <Block style={styles.content}>
  //       <Text>{section.content}</Text>
  //     </Block>
  //   );
  // };

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

  renderCollapsible = () => {
    return (
      <Block row style={{ marginBottom: 20 }}>
        <Accordion
          sections={SECTIONS}
          activeSections={this.state.activeSections}
          // renderSectionTitle={this._renderSectionTitle}
          renderHeader={this._renderHeader}
          renderContent={this._renderContent}
          onChange={this._updateSections}
          underlayColor={theme.COLORS.ACTIVE}
        />
      </Block>
    );
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
        {/* <Block center>
          <Slideshow
            dataSource={this.state.dataSource}
            position={this.state.position}
            onPositionChanged={position => this.setState({ position })}
          />
        </Block> */}
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

          <Block left style={{ marginVertical: 20 }}>
            <Text h5
              bold
              style={{ marginBottom: theme.SIZES.BASE / 2 }}
              color={argonTheme.COLORS.PRIMARY}>GIÁ SÂN</Text>
            {this.renderCollapsible()}
          </Block>
        </Block>
        {/* <Block center> */}

        {/* </Block> */}

      </ScrollView>
    )
  }

  renderPromotion = () => {
    return (
      <Block flex style={styles.articles}>
        <Block style={{ marginVertical: 10, borderColor: "rgba(0,0,0,0.2)", width: '100%', borderWidth: StyleSheet.hairlineWidth }} />
        <Text h5
          bold
          style={{ marginBottom: theme.SIZES.BASE / 2 }}
          color={argonTheme.COLORS.PRIMARY}>KHUYẾN MẠI ĐANG CÓ</Text>
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
        {/* <Text>WEEKDAY20: giảm giá 20k/1h trước 16h các ngày từ thứ Hai đến thứ Sáu</Text> */}
      </Block>
    );
  }

  renderSchedule = () => {
    return (
      <ScrollView contentContainerStyle={styles.articles} style={{ marginVertical: 20 }}>
        <Block flex>
          <Block style={{ marginVertical: 10, borderColor: "rgba(0,0,0,0.2)", width: '100%', borderWidth: StyleSheet.hairlineWidth }} />
          <Text h5
            bold
            style={{ marginBottom: theme.SIZES.BASE / 2 }}
            color={argonTheme.COLORS.PRIMARY}>ĐẶT SÂN</Text>
          <Block row style={styles.label}>
            <Icon
              name="date-range"
              family="material"
              size={20}
              color={argonTheme.COLORS.PRIMARY}
              style={{ marginRight: 5 }}
            />
            <Text size={16}>Chọn ngày</Text>
          </Block>
          <Select
            style={{ marginBottom: 10, marginLeft: 30 }}
            value="Ngày mai"
            defaultIndex={0}
            options={["Thứ Hai 06-04", "Thứ Ba 07-04", "Thứ Tư 08-04", "Thứ Năm 09-04", "Thứ Sáu 10-04", "Thứ Bảy 11-04", "Chủ Nhật 12-04"]}
          />

          <Block row style={styles.label}>
            <Icon
              name="clockcircle"
              family="AntDesign"
              size={20}
              color={argonTheme.COLORS.PRIMARY}
              style={{ marginRight: 5 }}
            />
            <Text size={16}>Khoảng giờ còn sân trống</Text>
          </Block>
          <Block style={{ marginLeft: 30 }}>
            <Text style={{ marginVertical: 10 }}>
              <Icon
                name="soccer-field"
                family="material-community"
                size={20}
                color={argonTheme.COLORS.PRIMARY}
                style={{ marginRight: 5 }}
              />  Sân 2 (loại sân 5):
              </Text>
            <Text style={{ marginLeft: 20, marginBottom: 5 }}>● 08h00 - 17h00</Text>
            <Text style={{ marginLeft: 20, marginBottom: 5 }}>● 21h00 - 24h00</Text>
          </Block>
          <Block style={{ marginLeft: 30 }}>
            <Text style={{ marginVertical: 10 }}>
              <Icon
                name="soccer-field"
                family="material-community"
                size={20}
                color={argonTheme.COLORS.PRIMARY}
                style={{ marginRight: 5 }}
              />  Sân 3 (loại sân 5):
              </Text>
            <Text style={{ marginLeft: 20, marginBottom: 5 }}>● 08h00 - 17h00</Text>
            <Text style={{ marginLeft: 20, marginBottom: 5 }}>● 21h00 - 24h00</Text>
          </Block>
          <Block style={{ marginLeft: 30 }}>
            <Text style={{ marginVertical: 10 }}>
              <Icon
                name="soccer-field"
                family="material-community"
                size={20}
                color={argonTheme.COLORS.PRIMARY}
                style={{ marginRight: 5 }}
              />  Sân 1 (loại sân 5):
              </Text>
            <Text style={{ marginLeft: 20, marginBottom: 5 }}>● 08h00 - 17h00</Text>
            <Text style={{ marginLeft: 20, marginBottom: 5 }}>● 21h00 - 24h00</Text>
          </Block>

          <Block row style={styles.label}>
            <Icon
              name="soccer-field"
              family="material-community"
              size={20}
              color={argonTheme.COLORS.PRIMARY}
              style={{ marginRight: 5 }}
            />
            <Text size={16}>Chọn sân</Text>
          </Block>
          <Select
            dropDownHeight={120}
            style={{ marginBottom: 10, marginLeft: 30 }}
            value="Sân 1"
            defaultIndex={0}
            options={["Sân 1", "Sân 2", "Sân 3"]}
          />

          <Block row style={styles.label}>
            <Icon
              name="calendar-clock"
              family="material-community"
              size={20}
              color={argonTheme.COLORS.PRIMARY}
              style={{ marginRight: 5 }}
            />
            <Text size={16}>Chọn giờ đặt</Text>
          </Block>
          <Select
            style={{ marginBottom: 10, marginLeft: 30 }}
            value="17:30"
            defaultIndex={12}
            options={["08:00", "08:30", "09:00", "09:30", "10:00", "10:30", "11:00", "11:30", "12:00", "12:30", "13:00",
              "13:30", "14:00", "14:30", "15:00", "15:30", "16:00", "16:30", "17:00", "17:30", "18:00", "18:30", "19:00",
              "19:30", "20:00", "20:30", "21:00", "21:30", "22:00", "22:30", "23:00"]}
          />

          <Block row style={styles.label}>
            <Icon
              name="clock-end"
              family="material-community"
              size={20}
              color={argonTheme.COLORS.PRIMARY}
              style={{ marginRight: 5 }}
            />
            <Text size={16}>Thời lượng</Text>
          </Block>
          <Select
            dropDownHeight={120}
            style={{ marginBottom: 10, marginLeft: 30 }}
            value="1.5 giờ"
            defaultIndex={12}
            options={["1 giờ", "1.5 giờ", "2 giờ"]}
          />
          <Block left>
            <Text bold size={18}>Thông tin đặt sân </Text>
            <Text size={16}>Sân SCSC Chảo Lửa - Sân 1 (loại sân 5) </Text>
            <Text size={16}>Thời gian: 08/04/2020, 17:30 - 19:00 </Text>
            <Text size={16}>Thời lượng: 1:30 </Text>
            <Text size={16}>Giá sân: 300.000 VNĐ/h </Text>
            <Text size={16}>Giảm giá: 0 VNĐ</Text>
            <Text size={16}>Thành tiền: 450.000 VNĐ, thanh toán tại sân</Text>
          </Block>
        </Block>
      </ScrollView>
    );
  }

  renderBooking = () => {
    return (
      <ScrollView contentContainerStyle={styles.articles} style={{ marginVertical: 20 }}>
        <Block flex>
          <Text h5
            bold
            style={{ marginBottom: theme.SIZES.BASE / 2 }}
            color={argonTheme.COLORS.PRIMARY}>ĐẶT SÂN</Text>
          <Block row style={styles.label}>
            <Icon
              name="date-range"
              family="material"
              size={20}
              color={argonTheme.COLORS.PRIMARY}
              style={{ marginRight: 5 }}
            />
            <Text size={16}>Chọn ngày</Text>
          </Block>
          <Select
            style={{ marginBottom: 10, marginLeft: 30 }}
            value="Ngày mai"
            defaultIndex={0}
            options={["Thứ Hai 06-04", "Thứ Ba 07-04", "Thứ Tư 08-04", "Thứ Năm 09-04", "Thứ Sáu 10-04", "Thứ Bảy 11-04", "Chủ Nhật 12-04"]}
          />

          <Block row style={styles.label}>
            <Icon
              name="clockcircle"
              family="AntDesign"
              size={20}
              color={argonTheme.COLORS.PRIMARY}
              style={{ marginRight: 5 }}
            />
            <Text size={16}>Khoảng giờ còn sân trống</Text>
          </Block>
          <Block style={{ marginLeft: 30 }}>
            <Text style={{ marginVertical: 10 }}>
              <Icon
                name="soccer-field"
                family="material-community"
                size={20}
                color={argonTheme.COLORS.PRIMARY}
                style={{ marginRight: 5 }}
              />  Sân 2 (loại sân 5):
              </Text>
            <Text style={{ marginLeft: 20, marginBottom: 5 }}>● 08h00 - 17h00</Text>
            <Text style={{ marginLeft: 20, marginBottom: 5 }}>● 21h00 - 24h00</Text>
          </Block>
          <Block style={{ marginLeft: 30 }}>
            <Text style={{ marginVertical: 10 }}>
              <Icon
                name="soccer-field"
                family="material-community"
                size={20}
                color={argonTheme.COLORS.PRIMARY}
                style={{ marginRight: 5 }}
              />  Sân 3 (loại sân 5):
              </Text>
            <Text style={{ marginLeft: 20, marginBottom: 5 }}>● 08h00 - 17h00</Text>
            <Text style={{ marginLeft: 20, marginBottom: 5 }}>● 21h00 - 24h00</Text>
          </Block>
          <Block style={{ marginLeft: 30 }}>
            <Text style={{ marginVertical: 10 }}>
              <Icon
                name="soccer-field"
                family="material-community"
                size={20}
                color={argonTheme.COLORS.PRIMARY}
                style={{ marginRight: 5 }}
              />  Sân 1 (loại sân 5):
              </Text>
            <Text style={{ marginLeft: 20, marginBottom: 5 }}>● 08h00 - 17h00</Text>
            <Text style={{ marginLeft: 20, marginBottom: 5 }}>● 21h00 - 24h00</Text>
          </Block>
        </Block>
      </ScrollView>
    )
  }

  render() {
    const { navigation } = this.props;
    return (
      <ScrollView style={{ marginBottom: 20 }}>
        <Block center style={styles.home}>
          {this.renderArticles()}
          {this.renderPromotion()}
          {this.renderSchedule()}
          {/* {this.renderBooking()} */}
          <Button>XÁC NHẬN ĐẶT</Button>
        </Block>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  home: {
    width: width,
  },
  articles: {
    width: width - theme.SIZES.BASE * 2,
    marginBottom: theme.SIZES.BASE,
  },
  header: {
    width: width - theme.SIZES.BASE * 2,
    height: theme.SIZES.BASE * 4.125,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    backgroundColor: theme.COLORS.WHITE,
    paddingVertical: theme.SIZES.BASE,
  },
  weekDay: {
    width: width - theme.SIZES.BASE * 2,
    height: theme.SIZES.BASE * 3,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: theme.COLORS.WHITE,
    // marginBottom: 5,
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
  label: {
    marginBottom: 10,
    justifyContent: 'flex-start',
    marginRight: 20
  }
});

export default Booking;
