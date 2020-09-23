import React from 'react';
import {
  Container,
  InputArea,
  CustomButton,
  CustomButtonText,
  SignMessageButton,
  SignMessageButtonText,
  SignMessageButtonTextBold,
} from './styles';

// import Api from '../../Api';

// import SignInput from '../../components/SignInput';

// import BarberLogo from '../../assets/barber.svg';
// import EmailIcon from '../../assets/email.svg';
// import LockIcon from '../../assets/lock.svg';

import BarberLogo from '../../assets/barber.svg';

export default () => (
  <Container>
    <BarberLogo width="100%" height="160" />
     <InputArea>
                

                <CustomButton >
                    <CustomButtonText>LOGIN</CustomButtonText>
                </CustomButton>
            </InputArea>

            <SignMessageButton >
                <SignMessageButtonText>Ainda não possui uma conta?</SignMessageButtonText>
                <SignMessageButtonTextBold>Cadastre-se</SignMessageButtonTextBold>
            </SignMessageButton>
  </Container>
);
