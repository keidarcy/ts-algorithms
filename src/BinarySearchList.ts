/**
 * @see https://leetcode.com/problems/binary-search/
 */
function binary_search(haystack: number[], needle: number) {
  let low = 0;
  let high = haystack.length;
  while (low <= high) {
    const mid = Math.floor((low + high) / 2);
    if (haystack[mid] === needle) {
      return true;
    } else if (haystack[mid] > needle) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }
  return false;
}

if (import.meta.vitest) {
  const { test, expect } = import.meta.vitest;

  test("binary search array", function () {
    const foo = [1, 3, 4, 69, 71, 81, 90, 99, 420, 1337, 69420];
    expect(binary_search(foo, 69)).toEqual(true);
    expect(binary_search(foo, 1336)).toEqual(false);
    expect(binary_search(foo, 69420)).toEqual(true);
    expect(binary_search(foo, 69421)).toEqual(false);
    expect(binary_search(foo, 1)).toEqual(true);
    expect(binary_search(foo, 0)).toEqual(false);
  });
}
