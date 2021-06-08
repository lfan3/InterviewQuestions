const {Worker} = require('worker_threads');

const file = './mazeSearch.js';
const worker = new Worker(file);

worker.once('message', messageFromWorker => {
    console.log(messageFromWorker)
  })