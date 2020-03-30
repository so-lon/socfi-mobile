import React from 'react';
import { StyleSheet, Dimensions, ScrollView } from 'react-native';
import { Block, theme, Text } from 'galio-framework';

import { Card } from '../components';
import articles from '../constants/articles';
import { argonTheme, tabs } from "../constants/";
const { width } = Dimensions.get('screen');

class Home extends React.Component {
  renderArticles = () => {
    return (
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.articles}>
        <Block flex>
          <Text
            h5
            bold
            style={{ marginBottom: theme.SIZES.BASE / 2 }}
            color={argonTheme.COLORS.PRIMARY}
          >
            SÂN BÓNG NỔI BẬT
          </Text>
          <ScrollView showsHorizontalScrollIndicator={false} horizontal>
            {/* <Card item={articles[0]} horizontal />
          <Block flex row>
            <Card item={articles[1]} style={{ marginRight: theme.SIZES.BASE }} />
            <Card item={articles[2]} />
          </Block> */}
            {/* <Card item={articles[3]} horizontal /> */}
            <Card item={articles[4]} full />
            <Card item={articles[4]} full />
            <Card item={articles[4]} full />
            <Card item={articles[4]} full />
            <Card item={articles[4]} full />
          </ScrollView>
        </Block>
        <Block style={{ marginVertical: 10, borderColor: "rgba(0,0,0,0.2)", width: '100%', borderWidth: StyleSheet.hairlineWidth }} />
        <Block flex>
          <Text
            h5
            bold
            style={{ marginBottom: theme.SIZES.BASE / 2 }}
            color={argonTheme.COLORS.PRIMARY}
          >
            SÂN BÓNG GIẢM GIÁ
          </Text>
          <ScrollView horizontal>
            <Card item={articles[4]} full />
            <Card item={articles[4]} full />
            <Card item={articles[4]} full />
            <Card item={articles[4]} full />
            <Card item={articles[4]} full />
          </ScrollView>
        </Block>
        <Block style={{ marginVertical: 10, borderColor: "rgba(0,0,0,0.2)", width: '100%', borderWidth: StyleSheet.hairlineWidth }} />
        <Block flex>
          <Text
            h5
            bold
            style={{ marginBottom: theme.SIZES.BASE / 2 }}
            color={argonTheme.COLORS.PRIMARY}
          >
            SÂN BÓNG XUNG QUANH
          </Text>
          <ScrollView horizontal>
            <Card item={articles[4]} full />
            <Card item={articles[4]} full />
            <Card item={articles[4]} full />
            <Card item={articles[4]} full />
            <Card item={articles[4]} full />
          </ScrollView>
        </Block>
      </ScrollView>
    )
  }

  render() {
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
});

export default Home;
