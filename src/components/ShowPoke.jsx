const ShowPoke = ({ poke }) => {
    console.log("poke desde show: ", poke);
    return (
        <>
            <h2>Pokemons List</h2>
            <ul>
                {
                    poke.map((pkm, i) => {
                        return <li key={i}>{pkm}</li>
                    })
                }
            </ul>
        </>

    );
}

export default ShowPoke;