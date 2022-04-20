import { IPokemon } from 'Pokemon';

export default function PokemonByName({ data }: { data: IPokemon }) {
    return (
        <>
            {!!data && (
                <>
                    <h2>{data.species.name}</h2>
                    <img
                        src={data.sprites.front_shiny}
                        alt={data.species.name}
                    />
                    <div>
                        <h3>Abilities</h3>
                        <ul>
                            {data.abilities.map((item, index) => (
                                <li key={index}>
                                    {item.ability.name}
                                </li>
                            ))}
                        </ul>
                    </div>
                </>
            )}
        </>
    );
}
