import React, { FC } from 'react';

import AuthForm from '../../components/AuthForm';
import { signUpFields } from '../../utils/fields';

interface SignUpProps {
  onSubmit: (values: Record<string, string>) => void;
}

const SignUp: FC<SignUpProps> = ({ onSubmit }) => {
  return <AuthForm onSubmit={onSubmit} fields={signUpFields} type='signUp' />;
};

export default SignUp;
