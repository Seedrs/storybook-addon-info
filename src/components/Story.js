import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import StoryHeader from './ui/header';
import StoryRender from './ui/story';
import StoryDocumentation from './ui/documentation';
import StoryPanel from './ui/panel';
import StorySource from './ui/source';
import StoryProps from './ui/props';
import {
  StoryViewWrapper
} from './style';

class Story extends Component {
  constructor (props) {
    super(props);
  }

  _renderInline () {
    const {
      children,
      context: {
        kind,
        story
      },
      propTypes,
      beforeDocumentation,
      afterDocumentation
    } = this.props;

    return (
      <Fragment>
        <StoryViewWrapper noPaddingTop>
          <StoryHeader kind={kind} story={story} />
          { beforeDocumentation && <StoryDocumentation documentation={beforeDocumentation} /> }
        </StoryViewWrapper>
        <StoryRender>{children}</StoryRender>
        <StoryViewWrapper>
          <StoryPanel isClosed={false} heading="Story">
            <StorySource>{children}</StorySource>
          </StoryPanel>
          <StoryPanel heading="Props">
            <StoryProps components={propTypes}>{children}</StoryProps>
          </StoryPanel>
          { afterDocumentation && <StoryDocumentation documentation={afterDocumentation} /> }
        </StoryViewWrapper>
      </Fragment>
    );
  }

  render () {
    return this._renderInline();
  }
}

Story.defaultProps = {
  propTypes: []
};

Story.propTypes = {
  children: PropTypes.node,
  context: PropTypes.object,
  propTypes: PropTypes.array,
  beforeDocumentation: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object
  ]),
  afterDocumentation: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object
  ])
};

export default Story;
