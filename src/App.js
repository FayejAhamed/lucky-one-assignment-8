import logo from './logo.svg';
import './App.css';
import Header from './Component/Header/Header';
import Books from './Component/Books/Books';
import Question from './Component/Question/Question';

function App() {
  return (
    <div className='main'>
      <Header></Header>
      <Books></Books>
      <Question></Question>
    </div>
  );
}

export default App;
