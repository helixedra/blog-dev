export const url = process.env.NEXT_PUBLIC_API_URL;

export const api = {
    get: (endpoint: string) => fetch(`${url}/api/${endpoint}`),
    post: (endpoint: string, body: any) => fetch(`${url}/api/${endpoint}`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
    }),
    put: (endpoint: string, body: any) => fetch(`${url}/api/${endpoint}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
    }),
    delete: (endpoint: string) => fetch(`${url}/api/${endpoint}`, {
        method: "DELETE",
    }),
}