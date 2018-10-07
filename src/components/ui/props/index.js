import React from 'react';
import PropTable from './prop-table';
import getPropDefinitions from '../../utils/get-prop-definitions';
import {
  StoryPropsWrapper,
  Heading
} from './style';

const getName = type => type.displayName || type.name;

const StoryProps = ({ components, children }) => {
  const types = new Map();

  if (components.length > 0) {
    components.forEach(type => types.set(type, true));
  } else {
    // depth-first traverse and collect types
    const extract = (children) => {
      if (!children) {
        return;
      }

      if (Array.isArray(children)) {
        children.forEach(extract);
        return;
      }

      if (children.props && children.props.children) {
        extract(children.props.children);
      }

      if (children.type && !types.has(children.type)) {
        types.set(children.type, true);
      }
    };

    // extract components from children
    extract(children);
  }

  const array = Array.from(types.keys());
  array.sort((a, b) => getName(a) > getName(b));

  return array.map(((type, idx) => (
    <StoryPropsWrapper key={idx}>
      <Heading>{getName(type)}</Heading>
      <PropTable propDefinitions={getPropDefinitions(type)} type={type} />
    </StoryPropsWrapper>
  )));
};

export default StoryProps;
