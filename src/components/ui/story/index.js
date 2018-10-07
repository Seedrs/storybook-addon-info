import React from 'react';
import PropTypes from 'prop-types';
import {
  StoryPreview
} from './style';

const StoryRender = ({ children }) => (
  <StoryPreview>
    {children}
  </StoryPreview>
);

StoryRender.propTypes = {
  children: PropTypes.node
};

export default StoryRender;
