function solution(skill, skill_trees) {
  let result = 0;
  let graph = {};

  [...skill].forEach((name, index) => {
    graph[name] = index;
  });

  for (let i = 0; i < skill_trees.length; i++) {
    let tree = skill_trees[i].split("");
    let order = 0;
    let flag = true;

    while (tree.length > 0) {
      let value = tree.shift();
      if (graph[value] == undefined) {
        continue;
      } else {
        if (graph[value] === order) {
          order++;
        } else {
          flag = false;
          break;
        }
      }
    }
    if (flag) result++;
  }
  return result;
}
