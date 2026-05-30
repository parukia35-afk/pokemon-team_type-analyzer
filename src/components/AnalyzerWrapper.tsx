import { useState } from "react";
import InputWrapper from "./InputWrapper/InputWrapper";
import OutputWrapper from "./OutputWrapper/OutputWrapper";
import countTypes from "../utils/countTypes";
import lookupTeamTypes from "../utils/calcWeakResist";

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

  return (
    <div className="max-w-4xl w-full bg-lime-950">
      <h1 className="text-3xl text-center">寶可夢隊伍屬性分析器</h1>
      <div className="flex flex-row">
        <InputWrapper onUpdate={updateTeamMembers}></InputWrapper>
        <OutputWrapper calcResult={calcResult}></OutputWrapper>
      </div>
    </div>
  );
}

export default AnalyzerWrapper;
