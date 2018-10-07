import React from 'react';
import PropTypes from 'prop-types';
import {
  H1,
  H2,
  Header
} from './style';

const StoryHeader = ({ kind, story }) => (
  <Header>
    <H1>{kind}</H1>
    <H2>{story}</H2>
  </Header>
);

StoryHeader.propTypes = {
  kind: PropTypes.string,
  story: PropTypes.string
};

export default StoryHeader;
