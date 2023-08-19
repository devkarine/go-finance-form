import './style.css';
import { Button } from '../Button';
import { Form, Field, Formik } from 'formik';
import { FormProps, initialValues, FormInputProps } from './structure';

export const Forms = ({ id, name, type, placeholder }: FormInputProps)=> {
  const onSubmit = async () => {
    // const { email, password } = values;
  };

  return (
    <Formik<FormProps> initialValues={initialValues} onSubmit={onSubmit}>
      <Form className="form">
        <div>
          <img src="src/assets/img/mail.svg" alt="envelope para email" />
          <Field type="email" name="email" id="email" placeholder="Email" />
        </div>
        <div>
          <img src="src/assets/img/lock.svg" alt="cadeado para senha" />
          <Field id={id} name={name} type={type} placeholder={placeholder} />
        </div>

        <Button text="Entrar" width="30.7rem" height="5.7rem" />
        <a href="#">Esqueceu sua senha</a>
      </Form>
    </Formik>
  );
};
