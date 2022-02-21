import {KeyboardAvoidingView} from 'react-native';
import styled from 'styled-components/native';

import Text from '../../widget/text';

export const TextView = styled(Text)``;

export const PageView = styled.View`
  flex: 1;
  background-color: #fff;
`;

export const MainView = styled(KeyboardAvoidingView)`
  background-color: ${props => props.theme.colors.primaryColor};
  flex: 1;
  padding: 24px 24px 0 24px;
`;

export const SocialsConnectView = styled.View`
  background-color: ${props => props.theme.colors.lightGray};
  height: 100px;
`;

export const HeaderView = styled.View`
  flex-direction: row;
  justify-content: center;
  margin-top: 24px;
  margin-bottom: 24px;
`;

export const GreetingView = styled.View`
  margin-bottom: 12px;
`;

export const InstructionsView = styled.View`
  margin-bottom: 48px;
`;

export const InputControlView = styled.View`
  flex-direction: row;
  justify-content: center;
`;

export const InputView = styled.View`
  flex: 1;
`;

export const ButtonView = styled.View`
  padding-left: 6px;
  align-items: center;
  justify-content: center;
`;

export const SocialsConnectInstructionsView = styled.View`
margin-top: auto;
align-items: center;
padding-bottom: 12px;
`;
