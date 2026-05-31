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
  <div className={`rounded-xl p-3 flex items-center gap-3 border
    ${type.length > 0
      ? "bg-surface-high border-white/15"
      : "bg-white/[0.02] border-white/8 border-dashed"
    }`}>
    
    {/* 左側圓形圖示 */}
    <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shrink-0 text-text-muted text-base">
      {type.length > 0 ? "◆" : "+"}
    </div>

    {/* 右側內容 */}
    <div className="flex-1 min-w-0">
      <input
        disabled={isLoading}
        type="text"
        placeholder="輸入寶可夢名稱"
        value={pokemon}
        onChange={(e) => {
          setPokemon(e.target.value);
          setPMerror("");
          setInputErr(false);
        }}
        onKeyDown={(e) => handleEnter(e.key)}
        className="w-full bg-transparent border-none outline-none font-mono text-[14px] text-text-primary placeholder:text-text-muted/40 disabled:opacity-50"
      />
      
      {/* 狀態列：loading / 屬性 / 錯誤 */}
      <div className="flex items-center gap-1.5 mt-1 flex-wrap">
        {isLoading && (
          <span className="font-mono text-[10px] text-text-muted">查詢中...</span>
        )}
        {!isLoading && type.length > 0 && type.map((en) => (
          <span key={en} className="font-mono text-[10px] text-text-muted">
            {typeNameZhTw[en]}
          </span>
        ))}
        {PMerror && (
          <span className="font-mono text-[10px] text-red-400">{PMerror}</span>
        )}
        {inputErr && (
          <button
            onClick={() => fetchPokemon(lastFetchPokemon)}
            className="font-mono text-[10px] text-accent underline"
          >
            重試
          </button>
        )}
      </div>
    </div>

  </div>
);
}

export default PokemonInput;
