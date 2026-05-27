import PokemonInput from "./PokemonInput";

interface Props {
  onUpdate: (index: number, types: string[]) => void;
}

function InputWrapper({ onUpdate }:Props) {
  return (
    <>
      <div className="w-1/2 bg-lime-200">
        <PokemonInput index={0} onUpdate={onUpdate} />
        <PokemonInput index={1} onUpdate={onUpdate} />
        <PokemonInput index={2} onUpdate={onUpdate} />
        <PokemonInput index={3} onUpdate={onUpdate} />
        <PokemonInput index={4} onUpdate={onUpdate} />
        <PokemonInput index={5} onUpdate={onUpdate} />
      </div>
    </>
  );
}

export default InputWrapper;
