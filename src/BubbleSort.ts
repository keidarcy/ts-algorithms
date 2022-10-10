function bubble_sort(list: number[]): number[] {
  //   let line = list.length;
  //   while (line > 0) {
  //     for (let i = 0; i < line; i++) {
  //       if (list[i] > list[i + 1]) {
  //         [list[i + 1], list[i]] = [list[i], list[i + 1]];
  //       }
  //     }
  //     line--;
  //   }
  //   return list;

  for (let i = 0; i < list.length; i++) {
    for (let j = 0; j < list.length - 1 - i; j++) {
      if (list[j] > list[j + 1]) {
        [list[j + 1], list[j]] = [list[j], list[j + 1]];
      }
    }
  }
  return list;
}
if (import.meta.vitest) {
  const { test, expect } = import.meta.vitest;

  test("bubble-sort", function () {
    const arr = [9, 3, 7, 4, 69, 420, 42];

    bubble_sort(arr);

    expect(arr).toEqual([3, 4, 7, 9, 42, 69, 420]);
  });
}
