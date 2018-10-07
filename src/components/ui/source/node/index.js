import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Props from '../props';

const getData = (element) => {
  const data = {
    name: null,
    text: null,
    children: null
  };

  if (element === null) {
    return data;
  }

  if (typeof element === 'string') {
    data.text = element;
    return data;
  }

  if (typeof element === 'number') {
    data.text = String.toString(element);
    return data;
  }

  data.children = element.props.children;
  const { type } = element;

  if (typeof type === 'string') {
    data.name = type;
  } else {
    data.name = type.displayName || type.name || 'Unknown';
  }

  return data;
};

const Node = (props) => {
  const {
    node,
    depth,
    maxPropsIntoLine,
    maxPropObjectKeys,
    maxPropArrayLength,
    maxPropStringLength
  } = props;

  const { name, text, children } = getData(node);

  // Just text
  if (!name) {
    return text;
  }

  // Single-line tag
  if (!children) {
    return (
      <div>
        <span>&lt;{name}</span>
        <Props
          node={node}
          singleLine
          maxPropsIntoLine={maxPropsIntoLine}
          maxPropObjectKeys={maxPropObjectKeys}
          maxPropArrayLength={maxPropArrayLength}
          maxPropStringLength={maxPropStringLength}
        />
        <span>/&gt;</span>
      </div>
    );
  }

  // tag with children
  return (
    <Fragment>
      {`<${name}`}
      <Props
        node={node}
        maxPropsIntoLine={maxPropsIntoLine}
        maxPropObjectKeys={maxPropObjectKeys}
        maxPropArrayLength={maxPropArrayLength}
        maxPropStringLength={maxPropStringLength}
      />
      {'>'}
      {React.Children.map(children, childElement => (
        <Node
          node={childElement}
          depth={depth + 1}
          maxPropsIntoLine={maxPropsIntoLine}
          maxPropObjectKeys={maxPropObjectKeys}
          maxPropArrayLength={maxPropArrayLength}
          maxPropStringLength={maxPropStringLength}
        />
      ))}
      {`</${name}>`}
    </Fragment>
  );
};

Node.defaultProps = {
  node: null,
  depth: 0
};

Node.propTypes = {
  node: PropTypes.node,
  depth: PropTypes.number,
  maxPropsIntoLine: PropTypes.number,
  maxPropObjectKeys: PropTypes.number,
  maxPropArrayLength: PropTypes.number,
  maxPropStringLength: PropTypes.number
};

export default Node;
