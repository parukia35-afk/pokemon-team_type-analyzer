import typeChart from "../data/typeChart.json";

interface Types {
  types: string[];
}

interface TypeData{
  weak:string[],
  resist:string[],
  immune:string[]
}

function lookupTeamTypes(members: Types[]) {
  const wholeWeakResist:TypeData = { weak: [], resist: [], immune: [] };
  members.forEach((member: Types) => {
    const firstType:TypeData = { weak: [], resist: [], immune: [] };
    const secondType:TypeData = { weak: [], resist: [], immune: [] };
    member.types.forEach((type: string, order: number) => {
      if (order === 0) {
        firstType.weak = (typeChart as Record<string, TypeData>)[type].weak;
        firstType.resist = (typeChart as Record<string, TypeData>)[type].resist;
        firstType.immune = (typeChart as Record<string, TypeData>)[type].immune;
      } else {
        secondType.weak = (typeChart as Record<string, TypeData>)[type].weak;
        secondType.resist = (typeChart as Record<string, TypeData>)[type].resist;
        secondType.immune = (typeChart as Record<string, TypeData>)[type].immune;
      }
    });
    // 第一屬性的弱點與第二屬性抗性抵銷
    const firstTypeWeakness = firstType.weak.filter((value) => {
      return !secondType.resist.includes(value);
    });
    const secondTypeWeakness = secondType.weak.filter((value) => {
      return !firstType.resist.includes(value);
    });
    const weakness = firstTypeWeakness.concat(secondTypeWeakness); // 最終弱點

    const firstTypeResistance = firstType.resist.filter((value) => {
      return !secondType.weak.includes(value);
    });
    const secondTypeResistance = secondType.resist.filter((value) => {
      return !firstType.weak.includes(value);
    });
    const resistance = firstTypeResistance.concat(secondTypeResistance); // 最終抗性

    const immune = firstType.immune.concat(secondType.immune); // 最終免疫

    weakness.forEach((value) => wholeWeakResist.weak.push(value));
    resistance.forEach((value) => wholeWeakResist.resist.push(value));
    immune.forEach((value) => wholeWeakResist.immune.push(value));
  });
  return wholeWeakResist;
}

export default lookupTeamTypes