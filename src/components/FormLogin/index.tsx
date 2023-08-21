import './style.css';
import '../ErrorsMessage/style.css';
import { Form, Formik } from 'formik';
import { FormProps, initialValues } from './structure';
import { Input } from '../Inputs';
import { Button } from '../Button';
import * as Yup from 'yup';
import { errorMessages } from '../../Utils/messages';
import { CadastrarLogin, cadastrarLogin, obterId } from '../../services';

export const FormLogin = ({ values }: { values: FormProps }) => {
  const onSubmit = async (values: CadastrarLogin) => {
    const response = await cadastrarLogin(values);
    const { id, token } = response;
    const respostaId = await obterId({id, token});
    console.log(response);
    localStorage.setItem('user', JSON.stringify({ respostaId }));
  };

  const validation = Yup.object().shape({
    email: Yup.string()
      .email(errorMessages.email.invalid)
      .min(10, 'O email deve ter pelo menos 10 caracteres')
      .required(errorMessages.email.required),
    password: Yup.string()
      .min(6, 'A senha deve ter pelo menos 6 caracteres')
      .max(10, 'A senha deve ter no máximo 10 caracteres')
      .required(errorMessages.password.required)
  });

  return (
    <Formik<FormProps>
      initialValues={initialValues}
      onSubmit={values => onSubmit(values)}
      validationSchema={validation}
    >
      {({ isSubmitting, errors, touched, isValid }) => (
        <Form className="form">
          <div className="wrapper-input">
            <img src="src/assets/img/mail.svg" alt="envelope para email" />
            <Input
              className="input"
              id="email"
              name="email"
              type="email"
              placeholder="E-mail"
            />
          </div>
          {touched.email && errors.email && (
            <div className="errorMEssage">{errors.email}</div>
          )}
          <div className="wrapper-input">
            <img src="src/assets/img/lock.svg" alt="cadeado para senha" />
            <Input
              className="input"
              id="password"
              name="password"
              type="password"
              placeholder="Senha"
            />
          </div>
          {touched.password && errors.password && (
            <div className="errorMEssage">{errors.password}</div>
          )}
          <Button
            text="Entrar"
            width="30.7rem"
            height="5.7rem"
            disabled={
              !isValid ||
              isSubmitting ||
              JSON.stringify(initialValues) === JSON.stringify(values)
            }
          />
          <a href="#">Esqueceu sua senha</a>
        </Form>
      )}
    </Formik>
  );
};
