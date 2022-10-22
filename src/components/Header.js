import logo from "../assets/logo2.png"

export default function Header() {
  return (
    <div>
      <div class=" shadow-2xl flex flex-row bg-stone-700 rounded-lg m-4 justify-center">
        <div></div>
        <img src={logo} alt="logo" width="5%" height="5%" class="fixed top-3 left-10 right-5" ></img>
        <button class="basis-1/8 font-medium text-stone-400 transition-all duration-500 hover:text-stone-50 p-4 mx-6">Accueil</button>
        <button class="basis-1/8 font-medium text-stone-100 p-4 mx-6 rounded-lg  hover:text-emerald-500 group transition duration-300">
          Verbes Irréguliers
          <span class="block max-w-0 group-hover:max-w-xs transition-all duration-500 h-0.5 bg-emerald-600 "></span>
        </button>
        <button class="basis-1/8 font-medium text-stone-100 hover:text-stone-100/2 p-4 mx-6 rounded-lg hover:text-emerald-500 group transition duration-300">
          À venir
          <span class="block max-w-0 group-hover:max-w-xs transition-all duration-500 h-0.5 bg-emerald-600 "></span>
        </button>
      </div>
    </div>
  );
}

//bg-gradient-to-r from-purple-500 to-pink-500


