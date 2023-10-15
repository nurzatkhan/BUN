import routes from "./routes.ts";


const server = Bun.serve({
    port: 3000,
    async fetch(req) {
        const url = new URL(req.url);
        if (url.pathname) {
            const routFunc = routes?.[url.pathname]?.[req.method]
            if (routFunc) {
                return await routFunc(req)
            }
        }
        return new Response("Not Found", {status: 404});
    },
});

const HOST = `http://localhost:${server.port}`
for (const rout in routes) {
    for (const method in routes[rout]) {
        console.log((`${method}: ${HOST}${rout}`));
    }
}
console.log(new URL(HOST));
console.log(`server_bun готов к бою!`);

