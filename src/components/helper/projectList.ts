
export interface Project {

        id: number,
        name: string,
        githubLink: string,
        url: string,
        summary: string,
        description: string
        techStack: string[],
        slug: string,
    
}


export const projectList: Project[] = [
    {
        id: 1,
        name: "JobFinder",
        githubLink: "https://github.com/nidal23/jobs",
        url: "https://jobs-gr2uf9m3y-nidal23.vercel.app/",
        summary: "This is a platform that lets developers find jobs in software.",
        description: "This is a platform that lets developers find jobs in tech. The app also gives an user the ability to add jobs. The app was built with NextJS primarily, with Prisma being used for database management. The Image files are stored in Vercel's blob storage",
        //  \n\n- Bullet point 1\n- Bullet point 2\n- Bullet point 3",
        techStack: ["NextJS", "Prisma", "Shadcn", "Typescript", "Postgres"],
        slug: "1"
    },
    {
        id: 2,
        name: "Gift Suggester",
        githubLink: "https://github.com/nidal23/jobs",
        url: "https://jobs-gr2uf9m3y-nidal23.vercel.app/",
        summary: "This is a platform that lets developers find jobs in software. Includes functionality to create jobs.",
        description: "",
        techStack: ["NextJS", "Prisma", "Shadcn", "Typescript", "Postgres", "OpenAI"],
        slug: "2"
    },
    {
        id: 3,
        name: "Hunger Killer",
        githubLink: "https://github.com/nidal23/jobs",
        url: "https://jobs-gr2uf9m3y-nidal23.vercel.app/",
        summary: "This is a platform that lets developers find jobs in software. Includes functionality to create jobs.",
        description: "",
        techStack: ["NextJS", "Prisma", "Shadcn", "Typescript", "Postgres"],
        slug: "3"
    },
    {
        id: 4,
        name: "Road trip planner",
        githubLink: "https://github.com/nidal23/jobs",
        url: "https://jobs-gr2uf9m3y-nidal23.vercel.app/",
        summary: "This is a platform that lets developers find jobs in software. Includes functionality to create jobs.",
        description: "",
        techStack: ["NextJS", "Prisma", "Shadcn", "Typescript", "Postgres", "OpenAI"],
        slug: "4"
    }
]