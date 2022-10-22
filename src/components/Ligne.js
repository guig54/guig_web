import { verbes } from "../datas/data";

export default function Ligne() {
    
    //recuperer les 10 premiers elements
    const slicedArray = verbes.slice(0, 20);

    let randomVerbe=genererListe();

  return (
    <div class="justify-center">
      <ul>
        {randomVerbe.map((verbe) => (
          <li key={verbe.trad}>
            <div class="grid grid-cols-4 gap-4">
              <form>
                <label class="relative block">
                  <input
                    disabled
                    class=" block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm 
            disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none"
                    placeholder={verbe.trad}
                    type="text"
                    name="traduction"
                  />
                </label>
              </form>

              <form>
                <label class="relative block">
                  <input
                    class="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
                    placeholder={verbe.baseV}
                    type="text"
                    name="BaseVerbale"
                  />
                </label>
              </form>

              <form>
                <label class="relative block">
                  <input
                    class="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
                    placeholder={verbe.pret}
                    type="text"
                    name="Preterit"
                  />
                </label>
              </form>

              <form>
                <label class="relative block">
                  <input
                    class="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
                    placeholder={verbe.pp}
                    type="text"
                    name="pp"
                  />
                </label>
              </form>
            </div>
          </li>
        ))}
      </ul>

      <div>
        <button onClick={genererListe()} class=" p-3 mt-5 rounded-xl text-stone-50 bg-emerald-500 shadow-lg shadow-emerald-200 transition-all duration-300 hover:shadow-emerald-600/100 p-3 my-3 justify-center">
          Valider
        </button>
      </div>
    </div>
  );

}

function genererListe(){
    let randomVerbe = new Array();
    for(let i=0;i<10;i++){
        let nouveau_verbe=verbes[Math.floor(Math.random() * verbes.length)];
    
            randomVerbe.push(nouveau_verbe)
    }

    console.log(randomVerbe)
    return randomVerbe;

    
}
