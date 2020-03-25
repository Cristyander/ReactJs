import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import logo from '../../assets/logo.svg';

import { signUpRequest } from '../../store/modules/auth/actions';

const schema = Yup.object().shape({
  username: Yup.string().required('O nome é obrigatorio'),
  email: Yup.string()
    .email('Insira um e-mail válido')
    .required('O e-mail é obrigatorio'),
  password: Yup.string()
    .min(6, 'A senha precisa ter no minimo 6 caracteres.')
    .required('A senha é obrigatoria'),
  password_confirmation: Yup.string()
    .min(6, 'A senha precisa ter no minimo 6 caracteres.')
    .required('Confirmar a senha é obrigatoria'),
});

export default function SignUp() {
  const dispatch = useDispatch();

  function handleSubmit({ username, email, password, password_confirmation }) {
    dispatch(signUpRequest(username, email, password, password_confirmation));
  }

  return (
    <>
      <img src={logo} alt="" />

      <Form schema={schema} onSubmit={handleSubmit}>
        <Input name="username" type="name" placeholder="Nome Completo" />
        <Input name="email" type="email" placeholder="Seu e-mail" />
        <Input name="password" type="password" placeholder="Crie sua senha" />
        <Input
          name="password_confirmation"
          type="password"
          placeholder="Confirme sua senha"
        />

        <button type="submit">Criar Conta</button>
        <Link to="/">Já Tenho Login</Link>
      </Form>
    </>
  );
}
