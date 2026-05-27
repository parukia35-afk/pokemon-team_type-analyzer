import ResultSection from "./ResultSection"

interface TypeCount {
  weakCount:Record<string, number> ;
  resistCount:Record<string, number> ;
  immuneCount:Record<string, number> ;
}

function OutputWrapper({calcResult}){
  return(
    <div className="w-1/2 bg-blue-100">
      <ResultSection title="弱點" data={calcResult.weakCount}></ResultSection>
      <ResultSection title="抗性" data={calcResult.resistCount}></ResultSection>
      <ResultSection title="免疫" data={calcResult.immuneCount}></ResultSection>
    </div>
  )
}

export default OutputWrapper