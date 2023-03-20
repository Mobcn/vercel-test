// export default async (req, res) => {
//     let time = 0;
//     res.writeHead(200, {
//         'Content-Type': 'text/event-stream',
//         'Cache-Control': 'no-cache',
//         Connection: 'keep-alive'
//     });
//     const timer = setInterval(() => {
//         if (++time < 5) {
//             res.write('event: message\n');
//             res.write('data: ' + new Date() + '\n\n');
//         } else {
//             clearInterval(timer);
//             res.end();
//         }
//     }, 1000);
// };

export const config = {
    runtime: 'edge'
    // regions: [
    //     'arn1',
    //     'bom1',
    //     'bru1',
    //     'cdg1',
    //     'cle1',
    //     'cpt1a',
    //     'dub1',
    //     'fra1',
    //     'gru1',
    //     'hnd1',
    //     'iad1',
    //     'icn1',
    //     'kix1',
    //     'lhr1',
    //     'pdx1',
    //     'sfo1',
    //     'sin1',
    //     'syd1'
    // ]
};

export const post = (context) => {
    // const encoder = new TextEncoder();
    // return new Response(
    //     new ReadableStream({
    //         start(controller) {
    //             let time = 0;
    //             const timer = setInterval(() => {
    //                 if (time++ < 5) {
    //                     controller.enqueue(encoder.encode('data: ' + new Date() + '\n\n'));
    //                 } else {
    //                     controller.enqueue(encoder.encode('data: ' + new Date() + '\n\n'));
    //                     clearInterval(timer);
    //                     controller.close();
    //                 }
    //             }, 1000);
    //         }
    //     })
    // );
    return new Response(JSON.stringify({ code: 200 }), { status: 200 });
};
