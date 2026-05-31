import { useState } from "react";
import InputWrapper from "./InputWrapper/InputWrapper";
import OutputWrapper from "./OutputWrapper/OutputWrapper";
import countTypes from "../utils/countTypes";
import lookupTeamTypes from "../utils/calcWeakResist";
import coverageTypes from "../utils/coverageTypes";

interface Types {
  types: string[];
}

function AnalyzerWrapper() {
  const [teamMembers, setTeamMembers] = useState<Types[]>(
    Array.from({ length: 6 }, () => ({ types: [] })),
  );
  function updateTeamMembers(index: number, types: string[]) {
    const newMembers = [...teamMembers];
    newMembers[index] = { types: types };
    setTeamMembers(newMembers);
  }
  const calcResult = countTypes(lookupTeamTypes(teamMembers));
  const coverage = coverageTypes(teamMembers)

  return (
    <div className="flex h-screen w-screen overflow-hidden">
        <InputWrapper onUpdate={updateTeamMembers}></InputWrapper>
        <OutputWrapper calcResult={calcResult} coverage={coverage}></OutputWrapper>
    </div>
  );
}

export default AnalyzerWrapper;
