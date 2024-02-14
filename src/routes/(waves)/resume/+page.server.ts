import { getWorkExperiences } from "$lib/data/work-experiences/api";

export async function load() {
    const workExperiences = await getWorkExperiences();
    return {
        workExperience: workExperiences
    };
}

export const prerender = true;