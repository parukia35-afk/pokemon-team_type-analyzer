import ResultSection from "./ResultSection"

interface Props{
  calcResult:TypeCount
  coverage: Record<string, number>
}
interface TypeCount {
  weakCount:Record<string, number> ;
  resistCount:Record<string, number> ;
  immuneCount:Record<string, number> ;
}

function OutputWrapper({calcResult, coverage}:Props){
  return(
    <div className="w-1/2 bg-blue-100">
      <ResultSection title="弱點" data={calcResult.weakCount} showCount={true}></ResultSection>
      <ResultSection title="抗性" data={calcResult.resistCount} showCount={true}></ResultSection>
      <ResultSection title="免疫" data={calcResult.immuneCount} showCount={true}></ResultSection>
      <ResultSection title="打點" data={coverage} showCount={false}></ResultSection>
    </div>
  )
}

export default OutputWrapper