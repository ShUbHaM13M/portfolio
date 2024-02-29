export function rgbToRgba(rgb: number[], a: number = 1) {
	return `rgba(${rgb[0]}, ${rgb[1]}, ${rgb[2]}, ${a})`;
}

export function isColorDark(color: number[]) {
	// Extract RGBA components from the color
	const r = color[0] / 255;
	const g = color[1] / 255;
	const b = color[2] / 255;
	const a = color[3];

	// Calculate luminance taking alpha into account
	const luminance = (0.299 * r + 0.587 * g + 0.114 * b) * a;

	// Choose a threshold (0.5 is a common value)
	const threshold = 0.5;

	// Compare luminance to the threshold
	return luminance <= threshold;
}
