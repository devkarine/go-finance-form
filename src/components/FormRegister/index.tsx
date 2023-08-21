import '../FormLogin/style.css';
import { Form, Formik } from 'formik';
import { FormProps } from '../FormLogin/structure';
import { Input } from '../Inputs';
import { Button } from '../Button';
import { Link } from 'react-router-dom';
import { initialValues } from '../FormLogin/structure';
import { errorMessages } from '../../Utils/messages';
import * as Yup from 'yup';
import { CriarUsuarioProps, criarUsuario } from '../../services';


//{ values }: { values: FormProps } Verificar se precisa usar isso como parametro FormRegister

export const FormRegister = () => {
  const onSubmit = async (values: CriarUsuarioProps) => {
    const response = await criarUsuario(values);
    console.log(response);
  };

  const validation = Yup.object().shape({
    name: Yup.string().required('O campo Nome e Sobrenome é obrigatório'),
    email: Yup.string()
      .email(errorMessages.email.invalid)
      .min(10, 'O email deve ter pelo menos 10 caracteres')
      .required(errorMessages.email.required),
    password: Yup.string()
      .min(6, 'A senha deve ter pelo menos 6 caracteres')
      .max(10, 'A senha deve ter no máximo 10 caracteres')
      .required(errorMessages.password.required),
    password_confirmation: Yup.string()
      .required('A confirmação de senha é obrigatória')
      .oneOf([Yup.ref('password')], 'As senhas precisam coincidir'),
    checkBox: Yup.boolean().oneOf(
      [true],
      'Você deve concordar com os termos e condições'
    )
  });

  return (
    <Formik<FormProps>
      initialValues={initialValues}
      onSubmit={values => onSubmit(values)}
      validationSchema={validation}
    >
      {({
        isSubmitting,
        errors,
        touched,
        isValid,
        handleChange,
        initialValues,
        values
      }) => (
        <Form className="form">
          <div className="wrapper-input">
            <img src="src/assets/img/profile.svg" alt="envelope para email" />
            <Input
              className="input"
              id="profile"
              name="name"
              type="text"
              placeholder="Nome e Sobrenome"
            />
          </div>
          {touched.name && errors.name && (
            <div className="errorMEssage">{errors.name}</div>
          )}
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
          <div className="wrapper-input">
            <img src="src/assets/img/lock.svg" alt="cadeado para senha" />
            <Input
              className="input"
              id="confirmPassword"
              name="password_confirmation"
              type="password"
              placeholder="Confirma senha"
            />
          </div>
          {touched.password_confirmation && errors.password_confirmation && (
            <div className="errorMEssage">{errors.password_confirmation}</div>
          )}
          <div className="checkbox">
            <label htmlFor="html" className="checkbox-label">
              <input
                type="checkbox"
                id="checkBox"
                name="checkBox"
                className="checkbox-input"
                checked={values.checkBox}
                onChange={handleChange}
              />
              <span>
                Declaro que li e concordo com os termos e condições de uso.
              </span>
            </label>
          </div>

          {touched.checkBox && errors.checkBox && (
            <div className="errorMEssage">{errors.checkBox}</div>
          )}
          <Button
            text="Cadastrar"
            width="30.7rem"
            height="5.7rem"
            disabled={
              !isValid ||
              isSubmitting ||
              JSON.stringify(initialValues) === JSON.stringify(values)
            }
          />
          <Link to="/login" className="return">
            Voltar
          </Link>
        </Form>
      )}
    </Formik>
  );
};
