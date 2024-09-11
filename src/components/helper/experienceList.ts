export interface Experience {
    id: number,
    companyName: string,
    companyUrl: string,
    role: string,
    startDate: Date,
    endDate: string | Date,
    contributions: string[],
}


export const experienceList: Experience[] =  [
    {
        id: 1,
        companyName: 'Intelo',
        companyUrl: 'https://www.intelo.ai',
        role: 'Fullstack developer',
        startDate: new Date('2023-06-24'),
        endDate: 'current',
        contributions: [
            'Developed an automated meeting scheduling functionality to optimize user experience and operational efficiency.',
            'Implemented incremental authorization, enhancing security and user access control.',
            'Leveraged AWS services, including Lambda functions, DynamoDB, and Amplify, for efficient data management and scalability.',
            'Integrated Kibana for robust data indexing and visualization, enhancing data-driven decision-making processes.',
            'Orchestrated seamless integration of third-party applications including Slack, Salesforce, Gmail, and Google Calendar to streamline operational processes.',
            'Played a pivotal role in the implementation of Cognito for in-app user authentication and authorization, ensuring robust security measures and smooth user experiences.',
            'These contributions significantly enhanced our products functionality and success.',
            'Worked on containerizing applications using Docker, setting up Jenkins pipelines for continuous integration, and managing deployments through Azure Container Registry.'
        ]
    },
    {
        id: 2,
        companyName: 'Neuwave labs',
        companyUrl: 'https://www.neuwavelabs.com/',
        role: 'Frontend engineer',
        startDate: new Date('2022-02-10'),
        endDate: new Date('2023-04-20'),
        contributions: [
            'Developed an automated meeting scheduling functionality to optimize user experience and operational efficiency.',
            'Implemented incremental authorization, enhancing security and user access control.',
            'Leveraged AWS services, including Lambda functions, DynamoDB, and Amplify, for efficient data management and scalability.',
            'Integrated Kibana for robust data indexing and visualization, enhancing data-driven decision-making processes.',
            'Orchestrated seamless integration of third-party applications including Slack, Salesforce, Gmail, and Google Calendar to streamline operational processes.',
            'Spearheaded the implementation of Cognito for in-app user authentication and authorization, ensuring robust security measures and smooth user experiences.',
            'These contributions significantly enhanced our products functionality and success.'
        ]
    }
]