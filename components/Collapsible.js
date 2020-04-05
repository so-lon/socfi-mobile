import React, { Component } from 'react';
import { Block, theme, Text } from 'galio-framework';
import Accordion from 'react-native-collapsible/Accordion';

const SECTIONS = [
  {
    title: 'First',
    content: 'Lorem ipsum...',
  },
  {
    title: 'Second',
    content: 'Lorem ipsum...',
  },
];

class Collapsible extends Component {
  state = {
    activeSections: [],
  };

  _renderSectionTitle = section => {
    return (
      <Block style={styles.content}>
        <Text>{section.content}</Text>
      </Block>
    );
  };

  _renderHeader = section => {
    return (
      <Block style={styles.header}>
        <Text style={styles.headerText}>{section.title}</Text>
      </Block>
    );
  };

  _renderContent = section => {
    return (
      <Block style={styles.content}>
        <Text>{section.content}</Text>
      </Block>
    );
  };

  _updateSections = activeSections => {
    this.setState({ activeSections });
  };

  render() {
    return (
      <Accordion
        sections={SECTIONS}
        activeSections={this.state.activeSections}
        renderSectionTitle={this._renderSectionTitle}
        renderHeader={this._renderHeader}
        renderContent={this._renderContent}
        onChange={this._updateSections}
      />
    );
  }
}
export default Collapsible;