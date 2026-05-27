import typeNameZhTw from '../../data/typeName'

function ResultSection({ title, data }) {
  const handledData = Object.entries(data) // [[fire,1],[water,2]]
  return (
    <div>
      <h2>{title}</h2>
      <div>
        {handledData.map((item)=>{
          return <span key={item[0]}>{`${typeNameZhTw[item[0]]} ${item[1]}`}</span>
        })}
      </div>
    </div>
  );
}

export default ResultSection;
