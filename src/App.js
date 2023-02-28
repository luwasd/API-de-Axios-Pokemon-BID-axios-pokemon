import './App.css';
import { useState } from 'react';
import FetchPoke from './components/FetchPoke';
import ShowPoke from './components/ShowPoke';

function App() {
    const [poke, setPoke] = useState([]);
    console.log(`Desde app: ${poke}`);

    return (
        <>
            <FetchPoke poke={poke} setPoke={setPoke} />
            <ShowPoke poke={poke} />
        </>
    );
}

export default App;