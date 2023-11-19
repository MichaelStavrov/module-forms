import { FieldParams } from '../components/AuthForm/types';

export const signInFields: FieldParams[] = [
  {
    type: 'email',
    name: 'email',
    label: 'Логин',
    placeholder: 'Почта при регистрации',
    initialValue: '',
    autoFocus: true,
    errorMessage: 'Поле обязательно',
    required: true,
    icon: <div>@</div>,
  },
  {
    type: 'password',
    name: 'password',
    label: 'Пароль',
    placeholder: 'Ваш пароль',
    initialValue: '',
    errorMessage: 'Поле обязательно',
    required: true,
  },
];

export const signUpFields: FieldParams[] = [
  {
    type: 'text',
    name: 'name',
    label: 'Имя',
    placeholder: 'Введите имя',
    initialValue: '',
    autoFocus: true,
    errorMessage: 'Поле обязательно',
    required: true,
  },
  {
    type: 'text',
    name: 'nickname',
    label: 'Ник',
    placeholder: 'Введите никнейм',
    initialValue: '',
  },
  {
    type: 'email',
    name: 'email',
    label: 'Почта',
    placeholder: 'Укажите свою почту',
    initialValue: '',
    errorMessage: 'Поле обязательно',
    required: true,
  },
  {
    type: 'radio',
    name: 'gender',
    label: 'Пол',
    placeholder: 'Укажите свой пол',
    radioOptions: [
      { id: 'm', value: 'man', label: 'М' },
      { id: 'w', value: 'woman', label: 'Ж' },
    ],
  },
  {
    type: 'password',
    name: 'password',
    label: 'Пароль',
    placeholder: 'Создайте пароль',
    initialValue: '',
    errorMessage: 'Поле обязательно',
    required: true,
  },
  {
    type: 'password',
    name: 'password-confirm',
    label: 'Повторить пароль',
    placeholder: 'Повторите пароль',
    initialValue: '',
    errorMessage: 'Поле обязательно',
    required: true,
  },
];
