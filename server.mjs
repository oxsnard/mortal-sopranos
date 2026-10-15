import http from 'node:http';
import {readFile} from 'node:fs/promises';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
import {spawn} from 'node:child_process';
const root=path.join(path.dirname(fileURLToPath(import.meta.url)),'dist');
const types={'.html':'text/html','.css':'text/css','.js':'text/javascript','.mjs':'text/javascript','.png':'image/png','.svg':'image/svg+xml'};
const server=http.createServer(async(req,res)=>{try {const name=decodeURIComponent(new URL(req.url,'http://localhost').pathname);const file=path.resolve(root,'.'+(name==='/'?'/index.html':name));if(!file.startsWith(root+path.sep)){res.writeHead(403).end();return;}const data=await readFile(file);res.writeHead(200,{'Content-Type':types[path.extname(file)]||'application/octet-stream','Cache-Control':'no-cache'});res.end(data);}catch{res.writeHead(404).end('Not found');}});
function openGame(){if(process.platform==='win32')spawn('cmd.exe',['/c','start','','http://127.0.0.1:4173'],{windowsHide:true,stdio:'ignore'});}
server.on('error',err=>{if(err.code==='EADDRINUSE'){console.log('A server is already running at http://127.0.0.1:4173');if(process.argv.includes('--open'))openGame();}else{console.error(err.message);process.exitCode=1;}});
server.listen(4173,'127.0.0.1',()=>{console.log('Local: http://127.0.0.1:4173');if(process.argv.includes('--open'))openGame();});
