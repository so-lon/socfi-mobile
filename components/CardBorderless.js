import React from 'react';
import { withNavigation } from '@react-navigation/compat';
import PropTypes from 'prop-types';
import { StyleSheet, Dimensions, Image, TouchableWithoutFeedback } from 'react-native';
import { Block, Text, theme } from 'galio-framework';
import StarRating from 'react-native-star-rating';
import { argonTheme } from '../constants';
import { Icon } from '../components';
const { width } = Dimensions.get('screen');
class Card extends React.Component {
  render() {
    const { navigation, item, horizontal, full, style, ctaColor, imageStyle } = this.props;
    
    const imageStyles = [
      full ? styles.fullImage : styles.horizontalImage,
      imageStyle
    ];
    const cardContainer = [horizontal ? styles.cardHorizontal : styles.card, style];
    const imgContainer = [styles.imageContainer,
      horizontal ? styles.horizontalStyles : styles.verticalStyles,
    ];

    return (
      <Block row={horizontal} flex style={cardContainer}>
        <TouchableWithoutFeedback onPress={() => navigation.navigate('Stadium')}>
          <Block flex style={imgContainer}>
            <Image source={{uri: item.image}} style={imageStyles} />
          </Block>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback onPress={() => navigation.navigate('Stadium')}>
          <Block left flex space="between" style={styles.cardDescription}>
            <Text bold size={18} color={argonTheme.COLORS.WARNING} style={styles.cardTitle}>
              <Icon
                name="local-offer"
                family="material"
                size={14}
                color={argonTheme.COLORS.WARNING}
                style={{ marginVertical: '1%' }}
              />
              {item.value}
            </Text>
            <Text bold size={18} style={styles.cardTitle}>{item.title}</Text>
            <Text size={12} style={styles.cardTitle}>
              <Icon
                name="location-on"
                family="material"
                size={12}
                color={argonTheme.COLORS.ACTIVE}
                style={{ marginVertical: '1%' }}
              />
              {item.address}
            </Text>
            <Block flex style={{flexDirection: 'row'}}>
              <StarRating
                disabled={true}
                maxStars={5}
                rating={item.star}
                starSize={12}
                fullStarColor={argonTheme.COLORS.STAR}
              />
              <Text size={12} style={[styles.cardTitle]}> / {item.booking} lượt đặt</Text>
            </Block>
          </Block>
        </TouchableWithoutFeedback>
      </Block>
    );
  }
}

Card.propTypes = {
  item: PropTypes.object,
  horizontal: PropTypes.bool,
  full: PropTypes.bool,
  ctaColor: PropTypes.string,
  imageStyle: PropTypes.any,
}

const styles = StyleSheet.create({
  card: {
    width: width * 0.7,
    // backgroundColor: theme.COLORS.WHITE,
    marginVertical: theme.SIZES.BASE,
    marginRight: theme.SIZES.BASE,
    borderWidth: 0,
    minHeight: 114,
    marginBottom: 16
  },
  cardHorizontal: {
    width: width - theme.SIZES.BASE * 2,
    backgroundColor: theme.COLORS.WHITE,
    marginVertical: theme.SIZES.BASE,
    marginRight: theme.SIZES.BASE,
    borderWidth: 0,
    minHeight: 114,
    marginBottom: 16
  },
  cardTitle: {
    flex: 1,
    flexWrap: 'wrap',
    paddingBottom: 6
  },
  cardDescription: {
    padding: theme.SIZES.BASE / 2
  },
  imageContainer: {
    borderRadius: 3,
    elevation: 1,
    overflow: 'hidden',
  },
  image: {
    // borderRadius: 3,
  },
  horizontalImage: {
    height: 122,
    width: 'auto',
  },
  horizontalStyles: {
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
  },
  verticalStyles: {
    borderBottomRightRadius: 0,
    borderBottomLeftRadius: 0
  },
  fullImage: {
    height: 130
  },
});

export default withNavigation(Card);