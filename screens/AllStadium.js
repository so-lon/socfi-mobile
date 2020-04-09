import React from 'react';
import { StyleSheet, Dimensions, ScrollView } from 'react-native';
import { Block, theme } from 'galio-framework';
import { Card } from '../components';
import articles from '../constants/articles';
const { width } = Dimensions.get('screen');

class AllStadium extends React.Component {
  render() {
    return (
      <Block flex center style={styles.home}>
        <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.articles}>
        <Block>
            <Card item={articles.home[0]}/>
            <Card item={articles.home[1]}/>
            <Card item={articles.home[2]}/>
            <Card item={articles.home[3]}/>
            <Card item={articles.home[2]}/>
            <Card item={articles.home[1]}/>
            <Card item={articles.home[2]}/>
            <Card item={articles.home[0]}/>
            <Card item={articles.home[2]}/>
            <Card item={articles.home[3]}/>
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

export default AllStadium;
