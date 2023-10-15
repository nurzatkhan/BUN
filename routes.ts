import {defaltRoute} from "./controller";

export async function defalt(req: Request) {
    const body = await req.json()
    const json = JSON.stringify({"hello": "world"})
    return new Response(
        json,
        {
            headers: {"Content-Type": "application/json", "content-length": (json.length).toString()},
        }
    );
}


const routes: Record<string, Record<string, (req: Request) => Promise<Response>>> = {
    "/test": {
        "GET": defalt,
        "POST": defalt,

    },
    "/post/form/example": {
        "GET": defaltRoute,
    },
}
export default routes