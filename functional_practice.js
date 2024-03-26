const head = array => array[0];
const tail = array => array.slice(1);

function sum(xs) {
  if (!xs.length) return 0;
  return head(xs) + sum(tail(xs))
}

function sum2(xs) {
  const go = (xs, acc) => {
    if (!xs.length) return acc;
    return go(tail(xs), acc + head(xs))
  }
  return go(xs, 0)
}

const ans = sum([1,2,3,4,5])
const ans2 = sum2([1,2,3,4,5])

console.log({ ans })
console.log({ ans2 })

function count (xs) {
  if(!xs.length) return 0
  return count(tail(xs)) + 1
}

const c = count([1,2,3,4,5,6])
console.log({ c })

function max (xs) {
  const aux = (n, idxMax) => {
    if(n < 0) return xs[idxMax];
    return aux(n - 1, xs[n] > xs[idxMax] ? n : idxMax);
  }
  return aux(xs.length, 0)
}

const m = max([2,3,40,5,6]);

console.log({ m })