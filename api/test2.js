export default async (req, res) => {
    const resp = await fetch('https://chat.openai.com');
    res.send(await resp.text());
};
