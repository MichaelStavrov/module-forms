import React, { FC } from 'react';

import AuthForm from '../../components/AuthForm';
import { signInFields } from '../../utils/fields';

interface SignUpProps {
  onSubmit: (values: Record<string, string>) => void;
}

const SignIn: FC<SignUpProps> = ({ onSubmit }) => {
  return <AuthForm onSubmit={onSubmit} fields={signInFields} type='signIn' />;
};

export default SignIn;
