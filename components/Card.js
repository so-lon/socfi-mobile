import React from 'react';
import { withNavigation } from '@react-navigation/compat';
import PropTypes from 'prop-types';
import { StyleSheet, Dimensions, Image, TouchableWithoutFeedback } from 'react-native';
import { Block, Text, theme } from 'galio-framework';
import StarRating from 'react-native-star-rating';
import { argonTheme } from '../constants';

const { width } = Dimensions.get('screen');
class Card extends React.Component {
  render() {
    const { navigation, item, horizontal, full, style, ctaColor, imageStyle } = this.props;
    
    const imageStyles = [
      full ? styles.fullImage : styles.horizontalImage,
      imageStyle
    ];
    const cardContainer = [horizontal ? styles.cardHorizontal : styles.card, styles.shadow, style];
    const imgContainer = [styles.imageContainer,
      horizontal ? styles.horizontalStyles : styles.verticalStyles,
      styles.shadow
    ];

    return (
      <Block row={horizontal} card flex style={cardContainer}>
        <TouchableWithoutFeedback onPress={() => navigation.navigate('Pro')}>
          <Block flex style={imgContainer}>
            <Image source={{uri: item.image}} style={imageStyles} />
          </Block>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback onPress={() => navigation.navigate('Pro')}>
          <Block left flex space="between" style={styles.cardDescription}>
            <Text bold size={14} style={styles.cardTitle}>{item.title}</Text>
            {/* <Text size={12} style={styles.cardTitle}>Địa chỉ: Phan Thúc Duyện, Q.Tân Bình</Text>
            <Text size={12} style={styles.cardTitle}>Giá: 200k ~ 450k</Text>
            <StarRating
              disabled={true}
              maxStars={5}
              rating={5}
              starSize={16}
              fullStarColor={argonTheme.COLORS.PRIMARY}
              
            /> */}
            {/* <Text size={12} muted={!ctaColor} color={ctaColor || argonTheme.COLORS.ACTIVE} bold>{item.cta}</Text> */}
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
    width: 200,
    backgroundColor: theme.COLORS.WHITE,
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
  // shadow: {
  //   shadowColor: theme.COLORS.BLACK,
  //   shadowOffset: { width: 0, height: 2 },
  //   shadowRadius: 4,
  //   shadowOpacity: 0.1,
  //   elevation: 2,
  // },
});

export default withNavigation(Card);