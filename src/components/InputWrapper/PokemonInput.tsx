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
  const [PMerror, setPMerror] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [inputErr, setInputErr] = useState(false);
  const [lastFetchPokemon, setLastFetchPokemon] = useState("");

  async function fetchPokemon(englishName: string) {
    setIsLoading(true);
    setInputErr(false);
    try {
      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${englishName}`,
      );
      if (!response.ok) throw new Error('API error')
      const data = await response.json();
      console.log(data);
      const handledTypes = data.types.map((value: Types) => value.type.name);
      setType(handledTypes);
      onUpdate(index, handledTypes);
    } catch {
      setInputErr(true);
    } finally {
      setIsLoading(false);
    }
  }

  async function handleEnter(key: string) {
    if (key === "Enter") {
      if (pokemon === "") {
        onUpdate(index, []);
        setType([]);
        setPMerror("");
        return;
      } else {
        const englishName = nameZhToEn[pokemon];
        if (englishName !== undefined) {
          setLastFetchPokemon(englishName);
          await fetchPokemon(englishName);
        } else {
          onUpdate(index, []);
          setType([]);
          setPMerror("沒有這隻寶可夢");
        }
      }
    }
  }

  return (
    <div>
      <input
        disabled={isLoading}
        type="text"
        placeholder="輸入寶可夢名稱"
        value={pokemon}
        onChange={(e) => {
          setPokemon(e.target.value);
          setPMerror("")
          setInputErr(false)
        }}
        onKeyDown={(e) => {
          handleEnter(e.key);
        }}
      />
      <span>
        {isLoading
          ? "查詢中..."
          : type
              .map((en) => {
                return typeNameZhTw[en];
              })
              .join(",")}
      </span>
      {PMerror && <p className="text-red-500 text-sm">{PMerror}</p>}
      {inputErr && (
        <button onClick={() => fetchPokemon(lastFetchPokemon)}>重試</button>
      )}
    </div>
  );
}

export default PokemonInput;
