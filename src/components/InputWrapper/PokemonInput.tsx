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
  fetchErr: (value: boolean) => void
}

function PokemonInput({ index, onUpdate, fetchErr }: Props) {
  const [pokemon, setPokemon] = useState("");
  const [type, setType] = useState<string[]>([]);
  const [PMerror, setPMerror] = useState('')

  async function fetchPokemon(englishName: string) {
    try {
      const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${englishName}`,
    );
    const data = await response.json();
    console.log(data);
    const handledTypes = data.types.map((value: Types) => value.type.name);
    setType(handledTypes);
    onUpdate(index, handledTypes);
    fetchErr(true)
    } catch {
      fetchErr(true)
    }
    
  }

  async function handleEnter(key: string) {
    if (key === "Enter") {
      if (pokemon === "") {
        onUpdate(index, []);
        setType([]);
        setPMerror('')
        return;
      } else {
        const englishName = nameZhToEn[pokemon];
        if (englishName !== undefined) {
          await fetchPokemon(englishName);
        } else {
          onUpdate(index,[])
          setType([])
          setPMerror('沒有這隻寶可夢')
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
      {PMerror && <p className="text-red-500 text-sm">{PMerror}</p>}
    </div>
  );
}

export default PokemonInput;
