import { IApp } from 'App';
import Counter from './features/counter';
import Pokemon from './features/pokemon';

const App = ({ showDate }: IApp) => {
    const pokemon = [
        'pikachu',
        'charmander',
        'squirtle',
        'bulbasaur',
    ];

    return (
        <>
            <h1>
                My React and TypeScript App from Scratch!{' '}
                {showDate && new Date().toLocaleDateString()}
            </h1>
            <h1>List of Pokemonts</h1>
            <div>
                {pokemon.map((poke, index) => (
                    <Pokemon
                        key={index}
                        name={poke}
                        pollingInterval={0}
                    />
                ))}
            </div>
            <br />
            <Counter />
        </>
    );
};

export default App;
