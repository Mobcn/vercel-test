/**
 * @param {VercelRequest} req Vercel请求对象
 * @param {VercelResponse} res Vercel响应对象
 */
 export default async (req, res) => {
    const resp = await fetch('https://chat.openai.com');
    res.send(await resp.text());
};

/**
 * @typedef {Object} VercelRequest Vercel请求对象
 * @property {{ [key: string]: string | string[] }} query 请求参数
 * @property {{ [key: string]: string }} cookies 请求Cookie
 * @property {any} body 请求体
 */

/**
 * @typedef {Object} VercelResponse Vercel响应对象
 * @property {(body: any) => VercelResponse} send 响应发送
 * @property {(jsonBody: any) => VercelResponse} json JSON格式响应发送
 * @property {(statusCode: number) => VercelResponse} status 响应状态码
 * @property {(statusOrUrl: string | number, url?: string) => VercelResponse} redirect 重定向
 */
