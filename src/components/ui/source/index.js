import React, { Children } from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import PropTypes from 'prop-types';
import Markdown from '../../utils/markdown';
import Node from './node';

const htmlDecode = (input) => {
  const e = document.createElement('div');
  e.innerHTML = input;
  return e.childNodes.length === 0 ? '' : e.childNodes[0].nodeValue;
};

const StorySource = (props) => {
  const source = Children.map(props.children, (root, idx) => (
    <Node
      key={idx}
      node={root}
      depth={0}
      maxPropsIntoLine={8}
      maxPropArrayLength={8}
    />
  )); 

  const jsx = htmlDecode(renderToStaticMarkup(source));

  return (
    <Markdown source={
      `\`\`\`jsx
${jsx}
      \`\`\``}/>
  );
};

StorySource.propTypes = {
  children: PropTypes.node
};

export default StorySource;
