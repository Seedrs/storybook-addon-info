import React from 'react';
import Story from './components/Story';

export { default as Markdown } from './components/utils/markdown';

const defaultOptions = {
  // Add default options here
  showPropTypes: false,
  beforeDocumentation: false,
  afterDocumentation: false
};

const addInfo = (storyFn, context, infoOptions) => {
  let props;

  if (typeof infoOptions !== 'string') {
    const options = {
      ...defaultOptions,
      ...infoOptions
    };

    props = {
      ...options,
      context
    };
  } else {
    props = {
      beforeDocumentation: infoOptions,
      context
    };
  }

  return (
    <Story { ...props }>{storyFn(context)}</Story>
  );
};

export const withInfo = options => (
  storyFn => context => addInfo(storyFn, context, options)
);

export default {};
