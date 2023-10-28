import express from 'express'
import { spawn } from 'child_process'
import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';
const server = express()
const rl = readline.createInterface({ input, output });

const streamkey = await rl.question('Send Your Stream Key On Youtube ? ( This Is Screet key) ');
const video = await rl.question('Send Your filename video ?  ? ( Example : video.mp4 ) ');
const audio = "https://stream.zeno.fm/0r0xa792kwzuv";


const command = `ffmpeg -stream_loop -1 -re -i ${video} -stream_loop -1 -re -i ${audio} -vcodec libx264 -pix_fmt yuvj420p -maxrate 2048k -preset ultrafast -r 12 -framerate 1 -g 50 -crf 51 -c:a aac -b:a 128k -ar 44100 -strict experimental -video_track_timescale 100 -b:v 1500k -f flv  rtmp://a.rtmp.youtube.com/live2/${streamkey}
`;

const command = `ffmpeg -stream_loop -1 -re -i ${video} -stream_loop -1 -re -i ${audio} -vcodec libx264 -pix_fmt yuvj420p -maxrate 2048k -preset ultrafast -r 12 -framerate 1 -g 50 -crf 51 -c:a aac -b:a 128k -ar 44100 -strict experimental -video_track_timescale 100 -b:v 1500k -f flv  rtmp://a.rtmp.youtube.com/live2/${streamkey}
`;

const child = spawn('ffmpeg' , command)

child.stdout.on('data', (data) => {
  console.log(`stdout: ${data}`);
});

child.stderr.on('data', (data) => {
  console.error(`stderr: ${data}`);
});

child.on('close', (code) => {
  console.log(`child process exited with code ${code}`);
});

server.use('/', (req, res) => {
  res.send('Your Live Streaming Is All Ready Live')
})

server.listen(3000, () => {
  console.log('live stream is ready')
})
