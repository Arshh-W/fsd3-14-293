import http from 'http'
import * as t from './teams.js'

const sendJson =(res, statusCode, data) => {
    res.writeHead(statusCode, { 'Content-Type': 'application/json' })
    res.end(data=== "undefined" ? "": JSON.stringify(data))
}
const parseJSONBody =(req)=>{
    return new Promise((resolve, reject) => {
        let body = '';
        req.on('data', (chunk) => {
            body += chunk.toString();
        });
        req.on('end', () => {
            try {
                const parsedData = JSON.parse(body);
                resolve(parsedData);
            } catch (error) {
                reject(error);
            }
        });
    });
};
const server = http.createServer((req,res) => {
    if(req.url === '/' && req.method == 'GET') {
        const teams = t.getAllTeams()
        sendJson(res, 200, teams)   
        res.end()
    } else {
        sendJson(res, 404, { error: "Not Found" })
    }
})

server.listen(5000, ()=>{console.log("SIH server is running on http://localhost:5000")})