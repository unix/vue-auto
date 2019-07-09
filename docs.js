const fs = require('fs')
const { execSync } = require('child_process')

const es = fs.readFileSync('./README.md', 'utf-8')
const init = t => `<html class="zi-dark-theme"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Vue Auto</title>
<link rel="stylesheet" href="//cdn.jsdelivr.net/npm/@zeit-ui/style@0.8.3/dist/style.css"><link rel="icon" href="favicon.ico"></head><body class="zi-main zi-layout"><div style="max-width: 1000px;margin: 0 auto;padding: 30px 0;">
${require('marked')(t)}<hr>This project is open-sourced on <a href="https://github.com/unix/vue-auto">GitHub</a>.</div></body></html>`

execSync('(yarn add marked & mkdir dist) && cp favicon.ico ./dist')
fs.writeFileSync('dist/index.html', init(es))
