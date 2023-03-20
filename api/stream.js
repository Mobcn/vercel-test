export const config = {
    runtime: 'edge',
    regions: 'iad1'
};

export default async (context) => {
    return new Response(JSON.stringify(context), { status: 200 });
};
