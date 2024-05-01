function solution(phone_book) {
  phone_book.sort();

  for (let i = 0; i < phone_book.length; i++) {
    if (
      phone_book[i] == (phone_book[i + 1] || []).slice(0, phone_book[i].length)
    )
      return false;
  }

  return true;
}

// 번외) 참고하면 좋을 풀이
function solution(phoneBook) {
  return !phoneBook.sort().some((t, i) => {
    if (i === phoneBook.length - 1) return false;

    return phoneBook[i + 1].startsWith(phoneBook[i]);
  });
}
