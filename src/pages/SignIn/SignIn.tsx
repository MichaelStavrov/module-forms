import React, { FC } from 'react';

import AuthForm from '../../components/AuthForm';
import { signInFields } from '../../utils/fields';

interface SignInpProps {
  onSubmit: (values: Record<string, string>) => void;
}

const SignIn: FC<SignInpProps> = ({ onSubmit }) => {
  return <AuthForm onSubmit={onSubmit} fields={signInFields} type='signIn' />;
};

export default SignIn;
