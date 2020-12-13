export const uniqueBy = (arr, prop) => {
  return [
    ...new Map(
      arr.map((element) => [element[prop], element]),
    ).values(),
  ];
};
