


interface IndexeableObject {
    [index: string]: {
        [index: string]: string
    }
}

export const data: IndexeableObject = {
    companies: {
        stats: "10k+",
        description: "Companies" 
    },
    templates: {
        stats: "314",
        description: "Templates" 
    },
    queries: {
        stats: "12M+",
        description: "Queries" 
    }
}