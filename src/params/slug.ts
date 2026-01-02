import type { ParamMatcher } from '@sveltejs/kit';

export const match: ParamMatcher = (param) => {
	// Must contain at least one letter
	return /^[a-zA-Z][a-zA-Z0-9-]*$/.test(param);
};
