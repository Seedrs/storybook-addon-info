import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
// import { withTheme } from 'glamorous';
import createFragment from 'react-addons-create-fragment';

const getValueStyles = (codeColors = {}) => ({
  func: {
    color: codeColors.func || '#170'
  },

  attr: {
    color: codeColors.attr || '#666'
  },

  object: {
    color: codeColors.object || '#666'
  },

  array: {
    color: codeColors.array || '#666'
  },

  number: {
    color: codeColors.number || '#a11'
  },

  string: {
    color: codeColors.string || '#22a',
    wordBreak: 'break-word'
  },

  bool: {
    color: codeColors.bool || '#a11'
  },

  empty: {
    color: '#777'
  }
});

const indent = (breakIntoNewLines, level, isBlock) => (
  breakIntoNewLines && (
    <Fragment>
      {`${Array(level).join('  ')}  `}
      {!isBlock && '  '}
    </Fragment>
  )
);

const PreviewArray = ({
  val,
  level,
  maxPropArrayLength,
  maxPropStringLength,
  maxPropsIntoLine,
  valueStyles
}) => {
  const items = {};
  const breakIntoNewLines = val.length > maxPropsIntoLine;
  val.slice(0, maxPropArrayLength).forEach((item, i) => {
    items[`n${i}`] = (
      <Fragment>
        {indent(breakIntoNewLines, level)}
        <PropVal
          val={item}
          level={level + 1}
          valueStyles={valueStyles}
          maxPropStringLength={maxPropStringLength}
          maxPropsIntoLine={maxPropsIntoLine}
        />
      </Fragment>
    );
    items[`c${i}`] = ',';
  });
  if (val.length > maxPropArrayLength) {
    items.last = (
      <Fragment>
        {indent(breakIntoNewLines, level)}
        {'…'}
      </Fragment>
    );
  } else {
    delete items[`c${val.length - 1}`];
  }

  return (
    <Fragment>
      [{createFragment(items)}
      {indent(breakIntoNewLines, level, true)}]
    </Fragment>
  );
};

PreviewArray.propTypes = {
  val: PropTypes.any, // eslint-disable-line
  maxPropArrayLength: PropTypes.number.isRequired,
  maxPropStringLength: PropTypes.number.isRequired,
  maxPropsIntoLine: PropTypes.number.isRequired,
  level: PropTypes.number.isRequired,
  valueStyles: PropTypes.shape({
    func: PropTypes.object,
    attr: PropTypes.object,
    object: PropTypes.object,
    array: PropTypes.object,
    number: PropTypes.object,
    string: PropTypes.object,
    bool: PropTypes.object,
    empty: PropTypes.object
  }).isRequired
};

const PreviewObject = ({
  val,
  level,
  maxPropObjectKeys,
  maxPropStringLength,
  maxPropsIntoLine,
  valueStyles
}) => {
  const names = Object.keys(val);
  const items = {};
  const breakIntoNewLines = names.length > maxPropsIntoLine;
  names.slice(0, maxPropObjectKeys).forEach((name, i) => {
    items[`k${i}`] = (
      <Fragment>
        {indent(breakIntoNewLines, level)}
        {name}
      </Fragment>
    );
    items[`c${i}`] = ': ';
    items[`v${i}`] = (
      <PropVal
        val={val[name]}
        level={level + 1}
        valueStyles={valueStyles}
        maxPropStringLength={maxPropStringLength}
        maxPropsIntoLine={maxPropsIntoLine}
      />
    );
    items[`m${i}`] = ',';
  });
  if (names.length > maxPropObjectKeys) {
    items.rest = (
      <Fragment>
        {indent(breakIntoNewLines, level)}
        {'…'}
      </Fragment>
    );
  } else {
    delete items[`m${names.length - 1}`];
  }
  return (
    <Fragment>
      {'{'}
      {createFragment(items)}
      {indent(breakIntoNewLines, level, true)}
      {'}'}
    </Fragment>
  );
};

PreviewObject.propTypes = {
  val: PropTypes.any, // eslint-disable-line
  maxPropObjectKeys: PropTypes.number.isRequired,
  maxPropStringLength: PropTypes.number.isRequired,
  maxPropsIntoLine: PropTypes.number.isRequired,
  level: PropTypes.number.isRequired,
  valueStyles: PropTypes.shape({
    func: PropTypes.object,
    attr: PropTypes.object,
    object: PropTypes.object,
    array: PropTypes.object,
    number: PropTypes.object,
    string: PropTypes.object,
    bool: PropTypes.object,
    empty: PropTypes.object
  }).isRequired
};

const PropVal = (props) => {
  const {
    level,
    maxPropObjectKeys,
    maxPropArrayLength,
    maxPropStringLength,
    maxPropsIntoLine,
    theme
  } = props;
  let { val } = props;
  const { codeColors } = theme || {};
  let content = null;
  const valueStyles = props.valueStyles || getValueStyles(codeColors);

  if (typeof val === 'number') {
    content = val;
  } else if (typeof val === 'string') {
    if (val.length > maxPropStringLength) {
      val = `${val.slice(0, maxPropStringLength)}…`;
    }
    if (level > 1) {
      val = `'${val}'`;
    }
    content = val;
  } else if (typeof val === 'boolean') {
    content = val;
  } else if (Array.isArray(val)) {
    content = (
      <PreviewArray
        {...{
          val,
          level,
          maxPropArrayLength,
          maxPropStringLength,
          maxPropsIntoLine,
          valueStyles
        }}
      />
    );
  } else if (typeof val === 'function') {
    content = val.name || 'anonymous';
  } else if (!val) {
    content = val;
  } else if (typeof val !== 'object') {
    content = '...';
  } else if (React.isValidElement(val)) {
    content = (
      <Fragment>
        {`<${val.type.displayName || val.type.name || val.type} />`}
      </Fragment>
    );
  } else {
    content = (
      <PreviewObject
        {...{
          val,
          level,
          maxPropObjectKeys,
          maxPropStringLength,
          maxPropsIntoLine,
          valueStyles
        }}
      />
    );
  }

  return content;
};

PropVal.defaultProps = {
  val: null,
  maxPropObjectKeys: 3,
  maxPropArrayLength: 3,
  maxPropStringLength: 50,
  maxPropsIntoLine: 3,
  level: 1,
  theme: {},
  valueStyles: null
};

PropVal.propTypes = {
  val: PropTypes.any, // eslint-disable-line
  maxPropObjectKeys: PropTypes.number,
  maxPropArrayLength: PropTypes.number,
  maxPropStringLength: PropTypes.number,
  maxPropsIntoLine: PropTypes.number,
  level: PropTypes.number,
  theme: PropTypes.shape({
    codeColors: PropTypes.object
  }),
  valueStyles: PropTypes.shape({
    func: PropTypes.object,
    attr: PropTypes.object,
    object: PropTypes.object,
    array: PropTypes.object,
    number: PropTypes.object,
    string: PropTypes.object,
    bool: PropTypes.object,
    empty: PropTypes.object
  })
};

export default PropVal;
