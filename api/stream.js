export const config = {
    runtime: 'edge'
};

export default async (context) => {
    return new Response(JSON.stringify(context), { status: 200 });
};
