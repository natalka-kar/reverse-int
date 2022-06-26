module.exports = function reverse (n) {
  let o = Math.abs(n);
  let a = o.toString(10);
  let b = a.split('');
  let c = b.reverse();
  let d = c.join('');
  let f = Number(d);
  return f;
}
