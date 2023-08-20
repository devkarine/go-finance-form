import './style.css';
import { Form, Formik } from 'formik';
import { FormProps, initialValues, FormInputProps } from './structure';
import { Input } from '../Inputs';
import { Button } from '../Button';

export const FormLogin = ({}: FormInputProps) => {
  const onSubmit = async () => {
    // const { email, password } = values;
  };

  return (
    <Formik<FormProps> initialValues={initialValues} onSubmit={onSubmit}>
      <Form className="form">
        <div className='wrapper-input'>
          <img src="src/assets/img/mail.svg" alt="envelope para email" />
          <Input className='input'  id="email" name="email" type="email" placeholder="E-mail" />
        </div>
        <div className='wrapper-input'>
          <img src="src/assets/img/lock.svg" alt="cadeado para senha" />
          <Input className='input' id="password" name="password" type="password" placeholder="Senha"/>
        </div>
        <Button text="Entrar" width="30.7rem" height="5.7rem"/>
        <a href="#">Esqueceu sua senha</a>
      </Form>
    </Formik>
  );
};
