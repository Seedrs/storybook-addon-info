import React from 'react';
import PropTypes from 'prop-types';
import Markdown from '../../utils/markdown';
import StoryPanel from '../panel';
import {
  DocsWrapper
} from './style';


const StoryDocumentation = ({ documentation }) => {
  const isDefault = typeof documentation === 'string';

  let isClosed = true;
  if (typeof documentation === 'object') {
    /* eslint-disable-next-line prefer-destructuring */
    isClosed = documentation.isClosed;
  }

  return (
    <DocsWrapper>
      <StoryPanel
        heading={( isDefault ? 'Getting started' : documentation.heading )}
        isClosed={isClosed}>
        <Markdown source={( isDefault ? documentation : documentation.documentation )} />
      </StoryPanel>
    </DocsWrapper>
  );
};

StoryDocumentation.propTypes = {
  documentation: PropTypes.object
};

export default StoryDocumentation;
