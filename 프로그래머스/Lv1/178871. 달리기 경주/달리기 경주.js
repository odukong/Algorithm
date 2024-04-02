/*
===============
Solution
===============
*/
function solution(players, callings) {
  var ranks = {};
  players.forEach((_, idx) => {
    ranks[[players[idx]]] = idx;
  });

  for (let i = 0; i < callings.length; i++) {
    let index = ranks[callings[i]];
    let temp = players[index - 1];

    // players 배열 순서 변경
    players[index - 1] = players[index];
    players[index] = temp;

    // ranks 순서 변경
    ranks[players[index]] = index;
    ranks[players[index - 1]] = index - 1;
  }
  return players;
}

/*
===============
Fault Solution (시간 초과)
===============
*/
function getKeyByValue(object, value) {
  for (let key of object.keys()) {
    if (object.get(key) == value) {
      return key;
    }
  }
}

function solution(players, callings) {
  var result = players;
  const ranks = new Map();
  players.forEach((player, idx) => {
    ranks.set(player, idx);
  });

  callings.forEach((call) => {
    let index = ranks.get(call);
    ranks.set(getKeyByValue(ranks, index - 1), index);
    ranks.set(call, index - 1);
  });

  ranks.forEach((rank, name) => {
    result[rank] = name;
  });
  return result;
}
