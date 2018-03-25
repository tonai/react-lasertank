#!/usr/bin/env node

// Usage :
// $ ./convertMap.js Peaceful.json
const fetch = require('node-fetch');
const blockMapping = require('./blockMapping');

const serverUrl = 'https://urdre8k8nk.execute-api.eu-west-3.amazonaws.com/dev/load';
const map = process.argv[2];

const request = {
  method: 'POST',
  body: `map-load-file=${map}`
};

fetch(serverUrl, request)
  .then(response => response.json())
  .then(data => convert(data.response.map))
  .catch(error => console.error(error));

function convert(data) {
  const blocks0 = getTable('blocks', 0, data);
  const blocks1 = getTable('blocks', 1, data);
  const grounds0 = getTable('grounds', 0, data);
  const grounds1 = getTable('grounds', 1, data);
  const map = {
    grounds: [grounds0, grounds1],
    blocks: [blocks0, blocks1],
  };
  console.log(JSON.stringify(map));
}

function getTable(type, z, data) {
  return data.map(line =>
    line.map(block =>
      blockMapping[block][type] && blockMapping[block][type][z] || null
    ).reverse()
  );
}
