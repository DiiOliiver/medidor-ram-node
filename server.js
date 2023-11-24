const http = require('http')
const stats = require()

const host = `http://localhost`
const port = 3000

http.createServer((req, res) => {
    let url = req.url

    if (url === '/stats') {
        res.end(JSON.stringify(stats, null, 2))
        return;
    }

    res.end(`<h1>Seja bem vindo(a)</h1>`)
}).listen(port, () => console.log(`Server is running in ${host}:${port}`))