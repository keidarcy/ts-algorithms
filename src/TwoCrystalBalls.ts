/**
 * Given two crystal balls that will break if dropped from high enough
 * distance, determine the exact spot in which it will break in the most
 * optimized way.
 */
function two_crystal_balls(breaks: boolean[]): number {
  const jumpAmount = Math.floor(Math.sqrt(breaks.length));
  let i = jumpAmount;

  for (; i < breaks.length; i += jumpAmount) {
    if (breaks[i]) {
      break;
    }
  }

  i -= jumpAmount;

  for (; i < i + jumpAmount && i < breaks.length; i++) {
    if (breaks[i]) {
      return i;
    }
  }

  return -1;
}

if (import.meta.vitest) {
  const { test, expect } = import.meta.vitest;

  test("two crystal balls", function () {
    let idx = Math.floor(Math.random() * 10000);
    const data = new Array(10000).fill(false);

    for (let i = idx; i < 10000; ++i) {
      data[i] = true;
    }

    expect(two_crystal_balls(data)).toEqual(idx);
    expect(two_crystal_balls(new Array(821).fill(false))).toEqual(-1);
  });
}
