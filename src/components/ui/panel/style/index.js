import styled from 'styled-components';
import { rem, padding, margin, transitions } from 'polished';
import { lato } from '../../fonts';
import { FadeIn } from '../../animation';

export const PanelWrapper = styled.div`
  ${margin(rem('8px'), 0, rem('8px'))}
`;

export const PanelHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${margin(rem('8px'), rem('12px'))}
  ${padding(rem('8px'), rem('12px'))}
  ${transitions('border-color 300ms ease-in-out')}
  border-top: ${rem('1px')} solid ${props => (props.isClosed ? '#DFE3E8' : '#637381')};
  border-bottom: ${rem('1px')} solid ${props => (props.isClosed ? '#DFE3E8' : '#637381')};
  background-color: white;
  cursor: pointer;
`;

export const PanelIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 34px;
  height: 34px;
  opacity: ${props => (props.isClosed ? '.6' : '1')};
  ${transitions('opacity 300ms ease-in-out')}

  > span {
    ${transitions('font-size 200ms')}
    display: inline-block;
    margin-top: ${rem('2px')};
    font-size: ${rem('24px')};
    line-height: ${rem('24px')};
  }
`;

export const PanelHeading = styled.h4`
  ${margin(0)}
  ${transitions('color 300ms ease-in-out')}
  font-family: ${lato};
  font-size: ${rem('12px')};
  line-height: ${rem('18px')};
  text-transform: uppercase;
  letter-spacing: ${rem('1px')};
  font-weight: 700;
  color: ${props => (props.isClosed ? '#C4CDD5' : '#212B36')};
`;

export const PanelContent = styled.div`
  ${padding(rem('16px'), rem('24px'))}
  display: ${props => (props.isClosed ? 'none' : 'block')};
  animation: ${FadeIn} 300ms ease-in-out;
`;
