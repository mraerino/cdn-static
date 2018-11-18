/// <reference path="../types/serviceworker.d.ts" />

addEventListener('fetch', (event: FetchEvent) => {
    event.respondWith(sendDate())
})

async function sendDate() {
    return new Response(`${Date.now()}`)
}
