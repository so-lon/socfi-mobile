import React from 'react';
import { StyleSheet, Dimensions, ScrollView, Linking } from 'react-native';
import { Block, theme, Text } from 'galio-framework';
import Slideshow from 'react-native-image-slider-show';
import { Card, Icon, Button } from '../components';
import articles from '../constants/articles';
import { argonTheme, tabs, Images } from "../constants";
import MapView, { Marker } from 'react-native-maps';
const { width } = Dimensions.get('screen');
const { height } = Dimensions.get('screen');
const markers = [
  {
    latlng: {
      latitude: 10.8039322,
      longitude: 106.6598593,
    },
    title: 'Sân SCSC Chảo Lửa',
    description: 'Sân Bóng đá mini SCSC Chảo Lửa'
  },
  {
    latlng: {
      latitude: 10.8139322,
      longitude: 106.6698593,
    },
    title: 'Sân K34',
    description: 'Sân Bóng đá mini K34'
  },
  {
    latlng: {
      latitude: 10.8039322,
      longitude: 106.6698593,
    },
    title: 'Sân Quân đội 917',
    description: 'Sân Bóng đá mini Quân đội 917'
  },
  {
    latlng: {
      latitude: 10.8009322,
      longitude: 106.6668593,
    },
    title: 'Sân Thăng Long',
    description: 'Sân Bóng đá mini Thăng Long'
  },
  {
    latlng: {
      latitude: 10.7929322,
      longitude: 106.6668593,
    },
    title: 'Sân Thăng Long',
    description: 'Sân Bóng đá mini Thăng Long'
  },
];
class NearbyStadium extends React.Component {


  render() {
    const { navigation } = this.props;
    return (
      // <Block flex center style={styles.home}>
      <MapView
        initialRegion={{
          latitude: 10.8039322,
          longitude: 106.6598593,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        style={{ width: width, height: height }}
      >
        {markers.map(marker => (
          <Marker
            coordinate={marker.latlng}
            title={marker.title}
            description={marker.description}
          />
        ))}
      </MapView>
      // </Block>
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

export default NearbyStadium;
