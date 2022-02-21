import styled from 'styled-components/native';

import Button from './index';

export const PrimaryButton = styled(Button)`
  background-color: ${props => props.theme.colors.primaryColor};
  color: ${props => props.theme.colors.primaryTextColor};
  border: 2px solid white
  border-radius: 6px;
  padding: 10px 12px;
`;
