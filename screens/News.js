import React from 'react';
import { StyleSheet, Dimensions, ScrollView } from 'react-native';
import { Block, theme, Text } from 'galio-framework';
import articles from '../constants/articles';
import CardBorderless from '../components/CardBorderless';
const { width } = Dimensions.get('screen');

class News extends React.Component {
  
  render() {
    return (
      <Block flex center style={styles.home}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.articles}>
          <Block>
              <CardBorderless item={articles.promotion[0]}/>
              <CardBorderless item={articles.promotion[1]}/>
              <CardBorderless item={articles.promotion[2]}/>
              <CardBorderless item={articles.promotion[0]}/>
              <CardBorderless item={articles.promotion[2]}/>
              <CardBorderless item={articles.promotion[1]}/>
              <CardBorderless item={articles.promotion[2]}/>
              <CardBorderless item={articles.promotion[0]}/>
              <CardBorderless item={articles.promotion[2]}/>
              <CardBorderless item={articles.promotion[1]}/>
          </Block>

        </ScrollView>
      </Block>
    );
  }
}

const styles = StyleSheet.create({
  home: {
    width: width,
    paddingHorizontal: theme.SIZES.BASE / 2
  },
  articles: {
    width: width - theme.SIZES.BASE * 2,
    paddingVertical: theme.SIZES.BASE,
  },
});

export default News;
