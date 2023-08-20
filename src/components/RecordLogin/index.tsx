
import { FormLogin } from '../FormLogin';
import './style.css';


export const RecordLogin = () => {
  return (
    <section className="record">
      <div className="wrapper-info-record">
        <h2>Login</h2>
        <p>
          Entre ou <a href="">faça seu cadastro</a>
        </p>
      </div>
      <FormLogin/>
      
    </section>
  );
};
