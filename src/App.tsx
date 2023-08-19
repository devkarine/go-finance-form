import './App.css';
import { Elipses } from './components/Elipses';
import { Introduction } from './components/Introduction';
import { Record } from './components/Record';

export const App = () => {
  return (
    <>
      <main>
        <Introduction />
        <Record />
      </main>
      <Elipses />
    </>
  );
};
