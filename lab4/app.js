import http from 'http'
import * as t from './teams.js'
import parseUrl from 'url'

const sendJson = (res, statusCode, data) => {
    res.writeHead(statusCode, { 'Content-Type': 'application/json' })
    res.end(data === undefined ? "" : JSON.stringify(data))
}
const parseJSONBody = (req) => {
    return new Promise((resolve, reject) => {
        let body = '';
        req.on('data', (chunk) => {
            body += chunk.toString();
        });
        req.on('end', () => {
            try {
                const parsedData = JSON.parse(body || '{}');
                resolve(parsedData);
            } catch (error) {
                reject(error);
            }
        });
        req.on("error", reject);
    });
};
const server = http.createServer((req,res) => {
    const parsedUrl = parseUrl.parse(req.url, true);
    const {method} = req;
    const { pathname, query } = parsedUrl;
    console.log("pathname", pathname);
    console.log("query", query);
    console.log("method", method);
    if (pathname === '/api/v1/teams' && method === 'GET') {
        const teams = t.getAllTeams()
        return sendJson(res, 200, teams)
    }

    if (pathname === '/api/v1/teams' && method === 'POST') {
        parseJSONBody(req)
            .then((teamData) => sendJson(res, 201, t.addTeam(teamData)))
            .catch(() => sendJson(res, 400, { error: 'Invalid JSON body' }))
        return
    }

    return sendJson(res, 404, { error: "Not Found" })
})

server.listen(5000, ()=>{console.log("SIH server is running on http://localhost:5000")})