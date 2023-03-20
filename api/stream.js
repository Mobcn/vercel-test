export default async (req, res) => {
    let time = 0;
    res.writeHead(200, {
        'Content-Type': 'text/event-stream',
        'Cache-Control': 'no-cache',
        Connection: 'keep-alive'
    });
    const timer = setInterval(() => {
        if (++time < 5) {
            res.write('event: message\n');
            res.write('data: ' + new Date() + '\n\n');
        } else {
            clearInterval(timer);
            res.end();
        }
    }, 1000);
};
