import typeNameZhTw from "../../data/typeName";

interface Props {
  title: string;
  data: Record<string, number>;
  showCount: boolean;
}

function ResultSection({ title, data, showCount }: Props) {
  const handledData = Object.entries(data); // [[fire,1],[water,2]]
  return (
    <div>
      <h2>{title}</h2>
      <div className="min-h-4">
        {handledData.map((item) => {
          return (
            <span key={item[0]}>{`${typeNameZhTw[item[0]]} ${showCount?item[1]:''}`}</span>
          );
        })}
      </div>
    </div>
  );
}

export default ResultSection;
