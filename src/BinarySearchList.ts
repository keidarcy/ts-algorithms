// low is inclusive, high is exclusive.

function binarySearch(haystack: number[], needle: number) {
  let low = 0;
  let high = haystack.length;
  do {
    const mid = Math.floor((low + high) / 2);
    const v = haystack[mid];
    if (v === needle) {
      return true;
    } else if (v < needle) {
      low = mid;
    } else {
      high = mid - 1;
    }
  } while (low < high);
  return false;
}

if (import.meta.vitest) {
  const { test, expect } = import.meta.vitest;

  test("binary search array", function () {
    const foo = [1, 3, 4, 69, 71, 81, 90, 99, 420, 1337, 69420];
    expect(binarySearch(foo, 69)).toEqual(true);
    expect(binarySearch(foo, 1336)).toEqual(false);
    expect(binarySearch(foo, 69420)).toEqual(true);
    expect(binarySearch(foo, 69421)).toEqual(false);
    expect(binarySearch(foo, 1)).toEqual(true);
    expect(binarySearch(foo, 0)).toEqual(false);
  });
}
