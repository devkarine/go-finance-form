import { Forms } from '../Form';
import './style.css';


export const Record = () => {
  return (
    <section className="record">
      <div className="wrapper-info-record">
        <h2>Login</h2>
        <p>
          Entre ou <a href="">faça seu cadastro</a>
        </p>
      </div>
      <Forms/>
    </section>
  );
};
