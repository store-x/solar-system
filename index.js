addEventListener('fetch', event => {
    event.respondWith(handleRequest(event.request));
});

async function handleRequest(request) {
    const html = await fetch('index.html'); 
    return new Response(html.body, {
        headers: { 'Content-Type': 'text/html' },
    });
}
