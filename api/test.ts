import type { VercelRequest, VercelResponse } from '@vercel/node';

export default async (req: VercelRequest, res: VercelResponse) => {
    const resp = await fetch('https://chat.openai.com');
    res.send(await resp.text());
};
