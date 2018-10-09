import styled from 'styled-components';
import { rem, padding, margin } from 'polished';
import { lato } from '../../fonts';

export const Header = styled.header`
  ${padding(rem('16px'), rem('24px'), rem('16px'))}
  margin-bottom: ${rem('12px')};
  border-bottom: ${rem('1px')} solid #F4F6F8;
  background-color: #fbfbfb;
`;

export const H1 = styled.h1`
  ${margin(0)};
  font-family: ${lato};
  font-size: ${rem('12px')};
  line-height: ${rem('18px')};
  font-weight: 700;
  letter-spacing: ${rem('0.5px')};
  text-transform: uppercase;
  color: #637381;
`;

export const H2 = styled.h2`
  ${margin(0)};
  font-family: ${lato};
  font-size: ${rem('24px')};
  line-height: ${rem('28px')};
  font-weight: 700;
  color: #212B36;
`;
