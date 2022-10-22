import '../style/App.css';
import Jeu from './Jeu';
import Lancement from './Lancement';
import Regles_Jeu from './Regles_Jeu';


function App() {
  return (
    <div className="App">
      {/* <Lancement /> */}
      <Regles_Jeu />
      
      <Jeu />
    </div>
  );
}

export default App;
