#!/usr/bin/env node

'use strict'

const sh = require('shelljs')

const pkg = require('./package.json')

// config
const version = pkg.version
const distFolder = `dist`
// path to the doc dir
const rootDocsDir = '../uimini-new-doc-repo/docs/.vuepress/public/download/'

sh.exec(`zip -r9 "${rootDocsDir}uimini-${version}.zip" "${distFolder}"`)
