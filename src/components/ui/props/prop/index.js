import PropTypes from 'prop-types';
import React from 'react';

import Shape from './types/Shape';
import OneOfType from './types/OneOfType';
import ArrayOf from './types/ArrayOf';
import ObjectOf from './types/ObjectOf';
import OneOf from './types/OneOf';
import InstanceOf from './types/InstanceOf';
import Signature from './types/Signature';
import Literal from './types/Literal';

import { TypeInfo } from './types/proptypes';

// propType -> Component map - these are a bit more complex prop types to display
const propTypeComponentMap = new Map([
  ['shape', Shape],
  ['union', OneOfType],
  ['arrayOf', ArrayOf],
  ['objectOf', ObjectOf],
  // Might be overkill to have below proptypes  as separate components *shrug*
  ['literal', Literal],
  ['oneOf', OneOf],
  ['instanceOf', InstanceOf],
  ['signature', Signature]
]);

const PrettyPropType = (props) => {
  const { propType, depth } = props;
  if (!propType) {
    return <span>unknown</span>;
  }

  if (propTypeComponentMap.has(propType)) {
    const Component = propTypeComponentMap.get(propType);
    return <Component propType={propType} depth={depth} />;
  }

  // Otherwise, propType does not have a dedicated component, display proptype name by default
  return <span>{propType}</span>;
};

PrettyPropType.displayName = 'PrettyPropType';

PrettyPropType.defaultProps = {
  propType: null,
  depth: 1
};

PrettyPropType.propTypes = {
  propType: TypeInfo,
  depth: PropTypes.number
};

export default PrettyPropType;
