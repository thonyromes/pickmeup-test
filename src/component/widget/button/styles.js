import styled from 'styled-components/native';

import Button from './index';

export const PrimaryButton = styled(Button)`
  background-color: ${props => props.theme.colors.primaryColor};
  color: ${props => props.theme.colors.primaryTextColor};
  border: 2px solid white;
  border-radius: 6px;
  padding: 10px 12px;
  height: 100%;
  align-items: center;
  justify-content: center;
`;

export const IconButton = styled(Button)`
  border: 1px solid transparent;
  border-color: ${props => props.borderColor || props.theme.colors.primaryColor};
  flex-direction: row;
  justify-content: flex-start;
  background-color: white;
  border-radius: 12px;
  padding: ${props => props.padding || '6px 12px'};
  align-items: center
`;
