const core = require('@actions/core');
const github = require('@actions/github');
const exec = require('@actions/exec');

function run() {
// 1) Get some input values

    core.notice('Hello from my custom javascript action')
}

run();