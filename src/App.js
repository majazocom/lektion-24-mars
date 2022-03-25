import './App.css';
import { buyPiggelin, addPiggelin } from './actions/icecreamActions';
import { useDispatch } from 'react-redux';


function App() {

  const dispatch = useDispatch();

  function buy() {
    //vill vi då kalla på vår action till vårt biträde
    dispatch(buyPiggelin(1))
  }

  function add() {
    dispatch(addPiggelin(1))
  }

  return (
    <main>
      <button onClick={buy}>KÖP 1</button>
      <button onClick={add}>LÄGG TILL 1</button>
    </main>
  );
}

export default App;
