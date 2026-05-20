export function rand_range(start, end) {
	const min = Math.ceil(start);
	const max = Math.floor(end);
	if (max < min) throw new RangeError('Invalid range');
	return Math.floor(Math.random() * (max - min + 1)) + min;
}
