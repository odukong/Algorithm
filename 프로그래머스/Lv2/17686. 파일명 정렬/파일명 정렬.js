function solution(files) {
  files.sort((pre, cur) => {
    const headReg = /\D+/;
    const numReg = /\d{1,5}/;
    const preHead = pre.match(headReg)[0];
    const curHead = cur.match(headReg)[0];
    const preNum = pre.match(numReg)[0];
    const curNum = cur.match(numReg)[0];
    // HEAD 사전 순 정렬
    const isBigger = preHead.toLowerCase().localeCompare(curHead.toLowerCase());
    if (isBigger) return isBigger; // Head 오름차순 정렬.

    // NUMBER 숫자 순 정렬
    if (preNum - curNum == 0) return 0; // 숫자 동일한 경우.
    return preNum - curNum; // 숫자 오름차순 정렬.
  });

  return files;
}
