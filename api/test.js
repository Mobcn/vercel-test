/**
 * @param {VercelRequest} req Vercel请求对象
 * @param {VercelResponse} res Vercel响应对象
 */
// export default async (req, res) => {
//     const apiKey = req.query['key'];
//     if (!apiKey) {
//         res.send('没有apiKey！');
//         return;
//     }
//     const initOptions = {
//         headers: {
//             'Content-Type': 'application/json',
//             Authorization: `Bearer ${apiKey}`
//         },
//         method: 'POST',
//         body: JSON.stringify({
//             model: 'gpt-3.5-turbo',
//             messages: [{ role: 'user', content: '你好' }],
//             temperature: 0.7
//         })
//     };
//     const rawResponse = await fetch('https://api.openai.com/v1/chat/completions', initOptions).catch((err) => {
//         res.send(`code: ${err.name}, message: ${err.message}`);
//     });
//     if (rawResponse) {
//         res.send(await rawResponse.text());
//     } else {
//         res.send('请求失败！');
//     }
// };

export const post = async (context) => {
    return new Response(
        JSON.stringify({
            data: {
                code: 200,
                message: '测试'
            }
        }),
        { status: 200 }
    );
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
