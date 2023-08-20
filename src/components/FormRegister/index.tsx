import '../FormLogin/style.css';
import { Form, Formik } from 'formik';
import {
  FormProps,
  initialValues,
  FormInputProps
} from '../FormLogin/structure';
import { Input } from '../Inputs';
import { Button } from '../Button';
import { Link } from 'react-router-dom';

export const FormRegister = ({}: FormInputProps) => {
      const onSubmit=(values: any, actions: { setSubmitting: (arg0: boolean) => void; }) => {
        // Faça algo com os valores, se necessário
        console.log('Form Values:', values);
        actions.setSubmitting(false);
      }

  return (
    <Formik<FormProps> initialValues={initialValues} onSubmit={onSubmit}>
      <Form className="form">
        <div className='wrapper-input'>
          <img src="src/assets/img/profile.svg" alt="envelope para email" />
          <Input
            className='input'
            id="profile"
            name="profile"
            type="text"
            placeholder="Nome e Sobrenome"
          />
        </div>
        <div className='wrapper-input'>
          <img src="src/assets/img/mail.svg" alt="envelope para email" />
          <Input className='input' id="email" name="email" type="email" placeholder="E-mail" />
        </div>
        <div className='wrapper-input'>
          <img src="src/assets/img/lock.svg" alt="cadeado para senha" />
          <Input
            className='input'
            id="password"
            name="password"
            type="password"
            placeholder="Senha"
          />
        </div>
        <div className='wrapper-input'>
          <img src="src/assets/img/lock.svg" alt="cadeado para senha" />
          <Input
            className='input'
            id="password"
            name="password"
            type="password"
            placeholder="Confirma senha"
          />
        </div>
        <div className='checkBox'>
          <Input type='checkBox' name='checkBox' className='custom-checkbox'/>
          <p>Declaro que li e concordo com os termos e condições de uso.</p>
        </div>

        <Button text="Cadastrar" width="30.7rem" height="5.7rem" />
        <Link to="/login" className="return">Voltar</Link>
      </Form>
    </Formik>
  );
};
