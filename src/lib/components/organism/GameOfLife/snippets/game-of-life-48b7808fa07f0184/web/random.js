export function rand_range(start, end) {
  const minCeiled = Math.ceil(start);
  const maxFloored = Math.floor(end);
  const value = Math.floor(
    Math.random() * (maxFloored - minCeiled) + minCeiled,
  );
  return value;
}
