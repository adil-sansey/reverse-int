module.exports = function reverse(n) {
  let result;
  if (n > 0) result = Number(String(n).split('').reverse().join('')); else
    result = Number(String(-n).split('').reverse().join(''));
  return result;
}
