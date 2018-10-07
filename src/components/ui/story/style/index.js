/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';
import { rem, padding, margin } from 'polished';
import { colors } from '../../colors';

export const StoryPreview = styled.div`
  ${margin(rem('12px'))}
  ${padding(rem('32px'), rem('24px'))}
  border-radius: ${rem('2px')};
  display: flex;
  justify-content: center;
  align-items: center;
  border: ${rem('1px')} dotted ${colors.neutral.midlight};
`;
