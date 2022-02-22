import {KeyboardAvoidingView} from 'react-native';
import styled from 'styled-components/native';

import Text from '../../widget/text';
import {Paragraph} from '../../widget/text/styles';

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
  padding: 12px;
  justify-content: center;
`;

export const HeaderView = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: 24px;
  margin-bottom: 48px;
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
  align-items: stretch;
  height: 50px;
`;

export const InputView = styled.View`
  flex: 1;
`;

export const ButtonView = styled.View`
  padding-left: 6px;
`;

export const SocialsConnectInstructionsView = styled.View`
  margin-top: auto;
  align-items: center;
  padding-bottom: 12px;
`;

export const IconView = styled.View`
  padding-right: ${props => props.paddingRight || '6px'};
  padding-left: ${props => props.paddingLeft || '0'};
`;

export const SocialButtonsView = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 50px;
`;

export const IconButtonView = styled.View`
  padding: 0 12px;
`;

export const GoogleButtonText = styled(Paragraph)`
  background-color: ${props => props.theme.colors.primaryColor};
  color: ${props => props.theme.colors.primaryTextColor};
  border-radius: 12px;
  padding: 6px 12px;
`;

export const IconTextView = styled.View`
  background-color: white;
  border-top-left-radius: 6px;
  border-bottom-left-radius: 6px;
  padding: 12px;
  height: 100%;
  border-right-width: 2px;
  border-right-color: rgb(211, 211, 211);
  flex-direction: row;
  align-items: center;
`;
