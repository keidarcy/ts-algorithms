function linear_search(haystack: number[], needle: number): boolean {
  for (let i = 0; i < haystack.length; i++) {
    if (haystack[i] == needle) return true;
  }
  return false;
}

if (import.meta.vitest) {
  const { test, expect } = import.meta.vitest;

  test("linear search array", function () {
    const foo = [1, 3, 4, 69, 71, 81, 90, 99, 420, 1337, 69420];
    expect(linear_search(foo, 69)).toEqual(true);
    expect(linear_search(foo, 1336)).toEqual(false);
    expect(linear_search(foo, 69420)).toEqual(true);
    expect(linear_search(foo, 69421)).toEqual(false);
    expect(linear_search(foo, 1)).toEqual(true);
    expect(linear_search(foo, 0)).toEqual(false);
  });
}
