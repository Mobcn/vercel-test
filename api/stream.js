export const config = {
    runtime: 'edge',
    regions: ['iad1'] // optional
};

export default async (request, context) => {
    return new Response(JSON.stringify({ request: Reflect.ownKeys(request), context }), { status: 200 });
};
