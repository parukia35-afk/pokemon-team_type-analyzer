import ResultSection from "./ResultSection"

interface Props{
  calcResult: TypeCount
  coverage: Record<string, number>
}
interface TypeCount {
  weakCount: Record<string, number>;
  resistCount: Record<string, number>;
  immuneCount: Record<string, number>;
}

function OutputWrapper({ calcResult, coverage }: Props) {
  return (
    <main className="flex-1 h-screen mobile:h-auto overflow-y-auto px-8 mobile:px-4 py-7 bg-[radial-gradient(ellipse_at_top_right,_rgba(49,57,77,0.2)_0%,_#0b1326_60%)] flex flex-col">

      {/* Header */}
      <header className="flex justify-between items-end mb-7">
        <div>
          <h2 className="text-2xl font-bold text-text-primary mb-1">隊伍屬性分析</h2>
          <p className="font-mono text-[11px] text-text-muted tracking-wide">評估當前隊伍的弱點分布與打點覆蓋</p>
        </div>
        <div className="flex gap-2">
          <button className="p-2 rounded-lg border border-white/8 bg-white/[0.03] text-text-muted text-lg leading-none">↺</button>
          <button className="p-2 rounded-lg border border-white/8 bg-white/[0.03] text-text-muted text-base leading-none">↗</button>
        </div>
      </header>

      {/* Result Grid */}
      <div className="grid grid-cols-3 mobile:grid-cols-1 gap-4 flex-1 mobile:flex-none">
        <div className="col-span-2 mobile:col-span-1">
          <ResultSection title="弱點" data={calcResult.weakCount} showCount={true} />
        </div>
        <div className="col-span-1">
          <ResultSection title="免疫" data={calcResult.immuneCount} showCount={true} />
        </div>
        <div className="col-span-2 mobile:col-span-1">
          <ResultSection title="抗性" data={calcResult.resistCount} showCount={true} />
        </div>
        <div className="col-span-1">
          <ResultSection title="打點" data={coverage} showCount={false} />
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-6 pt-4 border-t border-white/[0.06] flex justify-between items-center">
        <span className="font-mono text-[10px] text-text-muted/40 tracking-wide">資料來源：PokéAPI · sindresorhus/pokemon</span>
        <span className="font-mono text-[10px] text-text-muted/40">GitHub ↗</span>
      </footer>

    </main>
  )
}

export default OutputWrapper