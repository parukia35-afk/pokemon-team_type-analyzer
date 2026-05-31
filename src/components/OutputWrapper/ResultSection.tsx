import typeNameZhTw from "../../data/typeName";

interface Props {
  title: string;
  data: Record<string, number>;
  showCount: boolean;
}

const titleIcon: Record<string, string> = {
  弱點: "⚠",
  抗性: "✓",
  免疫: "🛡",
  打點: "⚔",
};

const titleColor: Record<string, string> = {
  弱點: "text-red-400",
  抗性: "text-accent",
  免疫: "text-blue-300",
  打點: "text-warn",
};

function ResultSection({ title, data, showCount }: Props) {
  const handledData = Object.entries(data);

  return (
    <section className="rounded-2xl border border-white/8 bg-white/[0.03] p-5 h-full">
      
      {/* Section Header */}
      <div className="flex items-center justify-between mb-4">
        <h3 className={`flex items-center gap-2 text-[15px] font-semibold text-text-primary`}>
          <span className={titleColor[title]}>{titleIcon[title]}</span>
          {title}
        </h3>
        {showCount && (
          <span className="font-mono text-[10px] text-text-muted">出現次數統計</span>
        )}
      </div>

      {/* Cards */}
      {handledData.length === 0 ? (
        <div className="border border-dashed border-white/10 rounded-xl p-6 flex flex-col items-center justify-center gap-2 opacity-50">
          <span className="text-2xl">—</span>
          <p className="font-mono text-[10px] text-text-muted text-center">無資料</p>
        </div>
      ) : (
        <div className="grid grid-cols-[repeat(auto-fill,minmax(100px,1fr))] gap-2.5">
          {handledData.map(([type, count]) => (
            <div
              key={type}
              className="rounded-xl border border-white/8 bg-white/[0.04] p-3 flex flex-col items-center gap-2"
            >
              <span className="font-mono text-[10px] font-bold tracking-wider text-text-primary">
                {typeNameZhTw[type]}
              </span>
              {showCount && (
                <>
                  <span className="text-xl font-bold text-text-primary">{count}</span>
                  <span className="font-mono text-[9px] text-text-muted">隻寶可夢</span>
                </>
              )}
            </div>
          ))}
        </div>
      )}

    </section>
  );
}

export default ResultSection;