import styled from 'styled-components';
import { rem, padding, margin, transitions } from 'polished';

export const Table = styled.table`
  ${margin(0, 0, rem('24px'))}
  padding: 0;
  /* border: none; */
  min-width: 60%;
  width: auto;
  border-spacing: 0;
  overflow: hidden;
  border: ${rem('1px')} solid #DFE3E8;
  border-radius: ${rem('4px')};
`;

export const Tr = styled.tr`
  &:hover {
    td {
      color: white;
      background-color: #FFC021;
    }
  }

  &:first-child {
    td {
      border-top: none;
    }
  }
`;

export const Th = styled.th`
  ${padding(rem('8px'), rem('16px'))}
  border-left: ${rem('1px')} solid #DFE3E8;
  border-bottom: ${rem('1px')} solid #DFE3E8;
  font-size: ${rem('14px')};
  font-weight: 700;
  text-align: left;
  color: #454F5B;
  background-color: #F4F6F8;

  &:first-child {
    border-left: none;
  }
`;

export const Td = styled.td`
  ${padding(rem('8px'), rem('16px'))}
  ${transitions('background-color 200ms ease-in-out', 'color 200ms ease-in-out')}
  border-left: ${rem('1px')} solid #F9FAFB;
  border-top: ${rem('1px')} solid #F4F6F8;
  font-size: ${rem('14px')};
  color: #454F5B;
  background-color: white;

  &:first-child {
    border-left: none;
  }
`;
