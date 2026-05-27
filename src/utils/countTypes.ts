interface TypeData {
  weak: string[];
  resist: string[];
  immune: string[];
}

function countArray(arr: string[]) {
  const count: Record<string, number> = {};
  arr.forEach((type) => {
    if (count[type]) {
      count[type]++;
    } else {
      count[type] = 1;
    }
  });
  return count;
}

function countTypes(weakResist: TypeData) {
  return {
    weakCount: countArray(weakResist.weak),
    resistCount: countArray(weakResist.resist),
    immuneCount: countArray(weakResist.immune),
  };
}

export default countTypes;
