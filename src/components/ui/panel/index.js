import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  PanelWrapper,
  PanelHeader,
  PanelHeading,
  PanelIcon,
  PanelContent
} from './style';

class StoryPanel extends Component {
  constructor (props) {
    super(props);

    const {
      isClosed
    } = this.props;

    this.state = {
      isClosed
    };

    this.onHandleClick = this.onHandleClick.bind(this);
  }

  onHandleClick () {
    this.setState({
      isClosed: !this.state.isClosed
    });
  }

  render () {
    const {
      isClosed
    } = this.state;

    const {
      heading,
      children
    } = this.props;

    return (
      <PanelWrapper>
        <PanelHeader isClosed={isClosed} onClick={this.onHandleClick}>
          <PanelHeading isClosed={isClosed}>{heading}</PanelHeading>
          <PanelIcon isClosed={isClosed}>
            { !isClosed && <span>🐵</span> }
            { isClosed && <span>🙈</span> }
          </PanelIcon>
        </PanelHeader>
        <PanelContent isClosed={isClosed}>{children}</PanelContent>
      </PanelWrapper>
    );
  }
}

StoryPanel.defaultProps = {
  heading: 'Info',
  isClosed: true
};

StoryPanel.propTypes = {
  children: PropTypes.node,
  heading: PropTypes.string,
  isClosed: PropTypes.bool
};

export default StoryPanel;
