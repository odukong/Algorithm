function solution(arr1, arr2) {
  return arr1.reduce((result, row) => {
    result.push(
      arr2[0].map((_, j) =>
        arr2.reduce((acc, cur, z) => (acc += row[z] * cur[j]), 0)
      )
    );
    return result;
  }, []);
}
