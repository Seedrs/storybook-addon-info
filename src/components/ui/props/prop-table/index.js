import React from 'react';
import PropTypes from 'prop-types';
import PrettyPropType from '../prop';
import {
  Table,
  Tr,
  Th,
  Td
} from './style';

export const multiLineText = (input) => {
  if (!input) return input;
  const text = String(input);
  const arrayOfText = text.split(/\r?\n|\r/g);
  const isSingleLine = arrayOfText.length < 2;
  return isSingleLine
    ? text
    : arrayOfText.map((
      lineOfText,
      i // note: lineOfText is the closest we will get to a unique key
    ) => (
      <span key={lineOfText}>
        {i > 0 && <br />} {lineOfText}
      </span>
    ));
};

const PropTable = ({ propDefinitions }) => (
  <Table>
    <thead>
      <Tr>
        <Th>Property</Th>
        <Th>PropType</Th>
        <Th>Is required?</Th>
        <Th>Default</Th>
      </Tr>
    </thead>
    <tbody>
      { propDefinitions.map(
        ({ property, propType, required, defaultValue }, idx) => (
          <Tr key={idx}>
            <Td>{property}</Td>
            <Td><PrettyPropType propType={propType} /></Td>
            <Td>{ required ? 'true' : 'false' }</Td>
            <Td>{defaultValue}</Td>
          </Tr>
        )
      )}
    </tbody>
  </Table>
);

PropTable.propTypes = {
  propDefinitions: PropTypes.array
};

export default PropTable;
