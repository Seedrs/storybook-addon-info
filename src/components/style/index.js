/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';
import { rem, padding } from 'polished';

export const StoryViewWrapper = styled.div`
  ${props => padding((props.noPaddingTop ? 0 : rem('8px')), 0, rem('8px'))}
  background-color: white;
`;
