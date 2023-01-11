const Discord = require('discord.js');
const { Octokit } = require('@octokit/rest');

// Créer une instance de Discord.js
const client = new Discord.Client();

// Créer une instance de @octokit/rest
const octokit = new Octokit();

// Lorsque le bot est prêt, imprimer "Ready!"
client.on('ready', () => {
  console.log('Ready!');
});

// Lorsqu'un nouveau commit est poussé sur Github, envoyer un message sur Discord
octokit.hook.on('push', async ({ id, name, payload }) => {
  const repo = payload.repository.full_name;
  const branch = payload.ref.split('/').pop();
  const commits = payload.commits.map(commit => commit.message).join
