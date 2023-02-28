import axios from "axios";

const FetchPoke = ({ poke, setPoke }) => {

    const fetchPk = () => {
        axios.get("https://pokeapi.co/api/v2/pokemon?limit=807")
            .then(response => { setPoke(response.data.results.map(pkm => pkm.name)) })
            .catch(err => { console.log(err) });
        console.log("pokemon desde fecth: " + poke);
    }

    return (
        <button onClick={fetchPk}>Fetch Pokemon</button>
    );
}
export default FetchPoke;