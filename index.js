addEventListener("fetch", event => {
  event.respondWith(handleRequest(event.request))
})

async function handleRequest(request) {
  const response = await fetch(request)
  return new HTMLRewriter()
    .on("body", {
      element(el) {
        el.append(`
          <div id="comments"></div>
          <script src="https://utteranc.es/client.js"
                  repo="YOUR_USERNAME/YOUR_REPO"
                  issue-term="pathname"
                  theme="github-light"
                  crossorigin="anonymous"
                  async>
          </script>
        `, { html: true })
      }
    })
    .transform(response)
}
