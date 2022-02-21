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
} from './styles';

import {H1, H2, TextView, Paragraph} from '../../widget/text/styles';
import TextInput from '../../widget/textInput';
import {PrimaryButton} from '../../widget/button/styles';

const login = () => {
  return (
    <PageView>
      <MainView>
        <HeaderView>
          <H1>Pickmeup</H1>
        </HeaderView>
        <GreetingView>
          <H2>Hey there!</H2>
        </GreetingView>
        <InstructionsView>
          <TextView>Type in your phone number to get started</TextView>
        </InstructionsView>
        <InputControlView>
          <InputView>
            <TextInput placeholder="Hello world" />
          </InputView>
          <ButtonView>
            <PrimaryButton>
              <TextView>Go</TextView>
            </PrimaryButton>
          </ButtonView>
        </InputControlView>
        <SocialsConnectInstructionsView>
          <Paragraph>or you can sign in with</Paragraph>
        </SocialsConnectInstructionsView>
      </MainView>
      <SocialsConnectView>
        <TextView>Socials Connect</TextView>
      </SocialsConnectView>
    </PageView>
  );
};

export default login;
