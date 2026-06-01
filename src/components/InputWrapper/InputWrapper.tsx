import PokemonInput from "./PokemonInput";

interface Props {
  onUpdate: (index: number, types: string[]) => void;
}

function InputWrapper({ onUpdate }: Props) {
  return (
    <nav className="w-72 mobile:w-full shrink-0 h-screen mobile:h-auto flex flex-col px-4 py-7 border-r border-white/8 bg-surface">
      {/* Brand */}
      <div className="px-2 mb-8">
        <div className="font-mono text-xl text-accent font-bold tracking-widest uppercase mb-1">
          ⬡ PokéStrategist
        </div>
        <div className="font-mono text-[11px] text-text-muted/50 tracking-wide">
          競技隊伍分析器
        </div>
      </div>

      {/* Slots */}
      <div className="flex-1 mobile:flex-none flex flex-col gap-3 mb-6 pr-1 overflow-y-auto">
        <PokemonInput index={0} onUpdate={onUpdate} />
        <PokemonInput index={1} onUpdate={onUpdate} />
        <PokemonInput index={2} onUpdate={onUpdate} />
        <PokemonInput index={3} onUpdate={onUpdate} />
        <PokemonInput index={4} onUpdate={onUpdate} />
        <PokemonInput index={5} onUpdate={onUpdate} />
      </div>

      {/* Nav + Button */}
      <div className="mobile:hidden border-t border-white/8 pt-4 flex flex-col gap-1 mb-4">
        <a
          href="#"
          className="flex items-center gap-3 px-3 py-2.5 rounded-lg bg-accent/10 border-r-2 border-accent hover:bg-accent/20 transition-colors duration-200"
        >
          <span className="material-symbols-outlined text-accent text-[20px]">
            analytics
          </span>
          <span className="font-mono text-[13px] text-accent font-bold tracking-wide">
            分析結果
          </span>
        </a>
        <a
          href="#"
          className="flex items-center gap-3 px-3 py-2.5 rounded-lg opacity-50 nav-link"
        >
          <span className="material-symbols-outlined text-text-muted text-[20px]">
            swords
          </span>
          <span className="font-mono text-[13px] text-text-muted tracking-wide">
            招式配置
          </span>
        </a>
        <a
          href="#"
          className="flex items-center gap-3 px-3 py-2.5 rounded-lg opacity-50 nav-link"
        >
          <span className="material-symbols-outlined text-text-muted text-[20px]">
            monitoring
          </span>
          <span className="font-mono text-[13px] text-text-muted tracking-wide">
            努力值追蹤
          </span>
        </a>
      </div>

      <button className="mobile:hidden btn-export w-full py-3 bg-accent/10 border border-accent/30 rounded-lg font-mono text-[13px] font-bold text-accent tracking-widest uppercase">
        匯出隊伍配置
      </button>
    </nav>
  );
}

export default InputWrapper;
