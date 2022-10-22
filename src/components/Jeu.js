import Ligne from './Ligne';
import Validation from './Validation';

export default function Jeu() {
return(
    <div class="p-6 m-6 mx-auto bg-white max-w-5xl rounded-xl  shadow-lg">
      <div class="text-xl font-medium text-black pb-5 "> LET'S GO</div>
      <Ligne />
      <Validation />
    </div>
    
)
}

/* <div class="p-6 mt-7 max-w-5xl mx-auto bg-white rounded-xl shadow-lg flex items-center ">
      <div>
        <div class="text-xl font-medium text-black pb-5">Règle</div>
        <p class="text-slate-500 pb-5">
          Donne les trois temps différents de la traduction. Appuie sur 
          <p class="text-emerald-600/100">valider</p>.
        </p>
      </div>
    </div> */
