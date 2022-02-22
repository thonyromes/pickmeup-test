import React from 'react';

import {
  PageView,
  MainView,
  SocialsConnectView,
  HeaderView,
  GreetingView,
  InstructionsView,
  InputControlView,
  ButtonView,
  InputView,
  SocialsConnectInstructionsView,
  IconView,
  SocialButtonsView,
  IconButtonView,
  GoogleButtonText,
  IconTextView,
} from './styles';

import {H1, H2, TextView, Paragraph} from '../../widget/text/styles';
import TextInput from '../../widget/textInput';
import {IconButton, PrimaryButton} from '../../widget/button/styles';
import Icon from '../../widget/icon';

const login = () => {
  return (
    <PageView>
      <MainView>
        <HeaderView>
          <IconView>
            <Icon source={require('../../../assets/images/logo.png')} />
          </IconView>
          <H1>Pickmeup</H1>
        </HeaderView>
        <GreetingView>
          <H2>Hey there!</H2>
        </GreetingView>
        <InstructionsView>
          <TextView>Type in your phone number to get started</TextView>
        </InstructionsView>
        <InputControlView>
          <IconTextView>
            <IconView paddingRight="12px">
              <Icon
                source={require('../../../assets/images/flag.png')}
                size="20px"
              />
            </IconView>
            <Paragraph color="black">+234</Paragraph>
          </IconTextView>
          <InputView>
            <TextInput placeholder="08031234567" keyboardType="phone-pad" />
          </InputView>
          <ButtonView>
            <PrimaryButton>
              <TextView>GO</TextView>
            </PrimaryButton>
          </ButtonView>
        </InputControlView>
        <SocialsConnectInstructionsView>
          <Paragraph>or you can sign in with</Paragraph>
        </SocialsConnectInstructionsView>
      </MainView>
      <SocialsConnectView>
        <SocialButtonsView>
          <IconButtonView>
            <IconButton>
              <IconView paddingRight="24px">
                <Icon
                  source={require('../../../assets/images/facebook-square.png')}
                  size="20px"
                />
              </IconView>
              <Paragraph color="black">Facebook</Paragraph>
            </IconButton>
          </IconButtonView>

          <IconButtonView>
            <IconButton padding="0" borderColor="#cdcdcd">
              <IconView paddingRight="12px" paddingLeft="12px">
                <Icon
                  source={require('../../../assets/images/google.png')}
                  size="20px"
                />
              </IconView>
              <GoogleButtonText color="black">Google</GoogleButtonText>
            </IconButton>
          </IconButtonView>
        </SocialButtonsView>
      </SocialsConnectView>
    </PageView>
  );
};

export default login;
