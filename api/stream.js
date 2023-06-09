export const config = {
    runtime: 'edge',
    regions: ['iad1'] // optional
};

export default async (request, context) => {
    return new Response(JSON.stringify({ request: await request.json(), context: Reflect.ownKeys(context) }), {
        status: 200
    });
};
