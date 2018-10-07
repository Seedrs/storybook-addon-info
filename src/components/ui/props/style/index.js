/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';
import { rem, margin } from 'polished';
import { lato } from '../../fonts';
import { colors } from '../../colors';

export const StoryPropsWrapper = styled.div`
  ${margin(rem('16px'), 0)}
`;

export const Heading = styled.h3`
  ${margin(0, 0, rem('8px'))}
  font-family: ${lato};
  font-size: ${rem('18px')};
  line-height: ${rem('20px')};
  letter-spacing: ${rem('0.5px')};
  font-weight: 700;
  color: ${colors.neutral.xdark};
`;
