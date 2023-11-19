import React, { FC, useState } from 'react';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';
import { AuthFormType } from './components/AuthForm/types';
import Button from './components/Button';
import styles from './App.module.scss';

const App: FC = () => {
  const [authFormType, setAuthFormType] = useState<AuthFormType>('signIn');
  const isSignIn = authFormType === 'signIn';

  const onSubmit = (values: Record<string, string>) => {
    console.log('values ', values);
  };

  const toggleForm = () => setAuthFormType(isSignIn ? 'signUp' : 'signIn');

  const CurrentForm = isSignIn ? SignIn : SignUp;

  return (
    <div className={styles.app}>
      <CurrentForm onSubmit={onSubmit} />
      <Button view='link' onClick={toggleForm}>
        {isSignIn ? 'Регистрация' : 'Уже зарегистрирован'}
      </Button>
    </div>
  );
};

export default App;
