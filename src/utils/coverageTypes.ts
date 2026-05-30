interface Types {
  types: string[];
}

function coverageTypes(members:Types[]){
  const coverage = members.flatMap((member)=>{
    return member.types
  })
  const handledCoverage:Record<string,number> = {};
  [...new Set(coverage)].forEach((value)=>{
    handledCoverage[value] = 1
  })
  return handledCoverage
}

export default coverageTypes