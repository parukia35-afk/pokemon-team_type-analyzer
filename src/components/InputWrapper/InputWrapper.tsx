import PokemonInput from "./PokemonInput";

interface Props {
  onUpdate: (index: number, types: string[]) => void;
  fetchErr: (value: boolean) => void
}

function InputWrapper({ onUpdate, fetchErr }:Props) {
  return (
    <>
      <div className="w-1/2 bg-lime-200">
        <PokemonInput index={0} onUpdate={onUpdate} fetchErr={fetchErr} />
        <PokemonInput index={1} onUpdate={onUpdate} fetchErr={fetchErr} />
        <PokemonInput index={2} onUpdate={onUpdate} fetchErr={fetchErr} />
        <PokemonInput index={3} onUpdate={onUpdate} fetchErr={fetchErr} />
        <PokemonInput index={4} onUpdate={onUpdate} fetchErr={fetchErr} />
        <PokemonInput index={5} onUpdate={onUpdate} fetchErr={fetchErr} />
      </div>
    </>
  );
}

export default InputWrapper;
