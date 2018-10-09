import React from 'react';
import PropTypes from 'prop-types';
import StoryPanel from '../panel';

const StoryDemo = ({ isClosed = false, heading, content }) => (
  <StoryPanel
    heading={( heading ? heading : 'Preview' )}
    isClosed={isClosed}>
    {content}
  </StoryPanel>
);

StoryDemo.propTypes = {
  isClosed: PropTypes.bool,
  heading: PropTypes.string,
  content: PropTypes.any
};

export default StoryDemo;
