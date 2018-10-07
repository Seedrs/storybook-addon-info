import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import PropVal from '../prop-val';

const Props = (props) => {
  const {
    maxPropsIntoLine,
    maxPropArrayLength,
    maxPropObjectKeys,
    maxPropStringLength
  } = props;

  const nodeProps = props.node.props;

  const { defaultProps } = props.node.type;

  if (!nodeProps || typeof nodeProps !== 'object') {
    return <span />;
  }

  const names = Object.keys(nodeProps).filter(
    name =>
      name[0] !== '_' &&
      name !== 'children' &&
      (!defaultProps || nodeProps[name] !== defaultProps[name])
  );

  const breakIntoNewLines = names.length > maxPropsIntoLine;
  const endingSpace = props.singleLine ? ' ' : '';

  const items = [];
  names.forEach((name, i) => {
    items.push(
      <Fragment>
        {` ${name}`}
        {/* Use implicit true: */}
        {(!nodeProps[name] || typeof nodeProps[name] !== 'boolean') && (
          <Fragment>
            {'='}
            {typeof nodeProps[name] === 'string' ? '"' : '{'}
            <PropVal
              val={nodeProps[name]}
              maxPropObjectKeys={maxPropObjectKeys}
              maxPropArrayLength={maxPropArrayLength}
              maxPropStringLength={maxPropStringLength}
              maxPropsIntoLine={maxPropsIntoLine}
            />
            {typeof nodeProps[name] === 'string' ? '"' : '}'}
          </Fragment>
        )}

        {i === names.length - 1 && (breakIntoNewLines ? <br /> : endingSpace)}
      </Fragment>
    );
  });

  return items;
};

Props.defaultProps = {
  singleLine: false
};

Props.propTypes = {
  node: PropTypes.node,
  singleLine: PropTypes.bool,
  maxPropsIntoLine: PropTypes.number,
  maxPropObjectKeys: PropTypes.number,
  maxPropArrayLength: PropTypes.number,
  maxPropStringLength: PropTypes.number
};

export default Props;
