
export interface Project {

        id: number,
        name: string,
        githubLink: string,
        url: string,
        description: string,
        techStack: string[]
    
}


export const projectList: Project[] = [
    {
        id: 1,
        name: "JobFinder",
        githubLink: "https://github.com/nidal23/jobs",
        url: "https://jobs-gr2uf9m3y-nidal23.vercel.app/",
        description: "",
        techStack: ["NextJS", "Prisma", "Shadcn", "Typescript", "Postgres"]
    }
]