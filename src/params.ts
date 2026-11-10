import { defineParams } from '@sveltejs/kit/params';

export const params = defineParams({
	slug: (param) => (/^[a-zA-Z][a-zA-Z0-9-]*$/.test(param) ? param : undefined),
	string: (param) => (/^[a-zA-z-]+$/.test(param) ? param : undefined),
	integer: (param) => (/^\d+$/.test(param) ? param : undefined)
});
