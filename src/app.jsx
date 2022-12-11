import { MoviesGrid } from "./componentes/MoviesGrid";
import Styles from "./app.module.css";

 export function App(){
    return(
      <div>
        <header>
          <h1 className={ Styles.title}>Movies</h1>
        </header>
        <main>
          <MoviesGrid />
        </main>
      </div>
    );
    
}