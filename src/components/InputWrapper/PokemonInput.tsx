import { useState } from "react";
import nameZhToEn from "../../data/pokemonName";
import typeNameZhTw from "../../data/typeName";

interface Type {
  name: string;
  url: string;
}

interface Types {
  slot: number;
  type: Type;
}

interface Props {
  index: number;
  onUpdate: (index: number, types: string[]) => void;
}

function PokemonInput({ index, onUpdate }: Props) {
  const [pokemon, setPokemon] = useState("");
  const [type, setType] = useState<string[]>([]);

  async function fetchPokemon(englishName: string) {
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${englishName}`,
    );
    const data = await response.json();
    console.log(data);
    const handledTypes = data.types.map((value: Types) => value.type.name);
    setType(handledTypes);
    onUpdate(index, handledTypes);
  }

  async function handleEnter(key: string) {
    if (key === "Enter") {
      if (pokemon === "") {
        onUpdate(index, []);
        setType([]);
        return;
      } else {
        const englishName = nameZhToEn[pokemon];
        if (englishName !== undefined) {
          await fetchPokemon(englishName);
        } else {
          console.log("沒有這隻寶可夢");
        }
      }
    }
  }

  return (
    <div>
      <input
        type="text"
        placeholder="輸入寶可夢名稱"
        value={pokemon}
        onChange={(e) => {
          setPokemon(e.target.value);
        }}
        onKeyDown={(e) => {
          handleEnter(e.key);
        }}
      />
      <span>
        {type
          .map((en) => {
            return typeNameZhTw[en];
          })
          .join(",")}
      </span>
    </div>
  );
}

export default PokemonInput;
