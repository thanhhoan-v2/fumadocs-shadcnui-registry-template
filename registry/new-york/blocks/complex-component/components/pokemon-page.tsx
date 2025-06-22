import { cache } from "react";
import { PokemonCard } from "@/registry/new-york/blocks/complex-component/components/pokemon-card";
import { getPokemonList } from "@/registry/new-york/blocks/complex-component/lib/pokemon";

const getCachedPokemonList = cache(getPokemonList);

export default async function PokemonPage() {
	const pokemons = await getCachedPokemonList({ limit: 12 });

	if (!pokemons) {
		return null;
	}

	return (
		<div className="mx-auto px-4 w-full max-w-2xl">
			<div className="gap-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 py-10">
				{pokemons.results.map((p) => (
					<PokemonCard key={p.name} name={p.name} />
				))}
			</div>
		</div>
	);
}
