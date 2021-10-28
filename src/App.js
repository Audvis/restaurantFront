import { Route } from 'react-router-dom';

import Ordenes from './components/paginas/Ordenes';
import Menu from './components/paginas/Menu';
import NuevoPlatillo from './components/paginas/NuevoPlatillo';
import SideBar from './components/ui/SideBar';

function App() {
  return (
    <div className="md:flex min-h-screen">
      <SideBar />

      <div className="md:w-3/5 xl:w-4/5 p-6">
        <Route exact path='/'>
          < Ordenes />
        </Route>

        <Route path='/menu'>
          < Menu />
        </Route>

        <Route path='/nuevo-platillo'>
          < NuevoPlatillo />
        </Route>
      </div>

    </div>
  );
}

export default App;
