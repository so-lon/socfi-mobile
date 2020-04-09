import React from 'react';
import { StyleSheet, Dimensions, ScrollView, View, ToastAndroid } from 'react-native';
import { Block, theme, Text } from 'galio-framework';
import { Card, Icon, Button, Select } from '../components';
import { argonTheme, tabs, Images } from "../constants";
const { width } = Dimensions.get('screen');
const { height } = Dimensions.get('screen');

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
  }

  showToastWithGravity = () => {
    ToastAndroid.showWithGravity(
      "Bạn đã đặt sân thành công!",
      ToastAndroid.SHORT,
      ToastAndroid.CENTER
    );
  };

  render() {
    return (
      <ScrollView style={{ marginBottom: 20 }}>
        <Block center style={styles.home}>
          <Block flex style={styles.articles}>
          <Text h4 bold color={argonTheme.COLORS.DEFAULT}>Đặt sân</Text>
          <Block left style={styles.line}></Block>

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
                />  Sân 1 (loại sân 5):
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
                />  Sân 4 (loại sân 7):
                </Text>
              <Text style={{ marginLeft: 20, marginBottom: 5 }}>● 19h00 - 21h00</Text>
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
              options={["Sân 1", "Sân 2", "Sân 3", "Sân 4"]}
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
          <Button onPress={() => this.showToastWithGravity()}>XÁC NHẬN ĐẶT</Button>
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
    marginVertical: theme.SIZES.BASE,
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
  line: {
    width: width * 0.3,
    height: 10,
    backgroundColor: argonTheme.COLORS.PRIMARY,
    marginVertical: '2%',
    marginBottom: theme.SIZES.BASE,
  },
});

export default Booking;
