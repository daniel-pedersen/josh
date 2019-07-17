const { join, resolve } = require('path')
const { statSync } = require('fs')
const aliases = require('./aliases')
const { print, error } = require('./io')

module.exports = {
  alias (...args) {
    let { _ } = parseArgs(args)
    if (_.length === 0) _ = Object.keys(aliases)
    for (let arg of _) {
      let i = arg.indexOf('=')
      if (i === -1) {
        if (arg in aliases) {
          print('%s="%s"', arg, aliases[arg].replace('"', '\\"'))
        } else {
          error('%s: not found', arg)
        }
      } else {
        aliases[arg.slice(0, i)] = arg.slice(i + 1)
      }
    }
  },
  // bg
  cd (...args) {
    let { _ } = parseArgs(args, { L: '-', P: '-' })
    if (_.length > 1) throw Error('too many arguments')
    let directory = _.shift() || process.env.HOME || '.'
    let pwd = directory === '-'
    if (directory === '-') directory = process.env.OLDPWD || '.'
    if (directory[0] !== '/' && !/^\.\.?(\/|$)/.test(directory)) {
      const cdPaths = parsePathSpec(process.env.CDPATH)
      for (let path of cdPaths) {
        if (isDirectory(resolve(path, directory))) {
          directory = resolve(path, directory)
          pwd = true
          break
        }
      }
    }
    const oldpwd = process.cwd()
    process.chdir(resolve(directory))
    process.env.OLDPWD = oldpwd
    if (pwd) process.stdout.write(process.cwd() + '\n')
    return 0
  },
  // command
  false () {
    return 1
  },
  // fc
  // fg
  // getopts
  // hash
  // jobs
  // kill
  // newgrp
  pwd (...args) {
    let { _ } = parseArgs(args, { L: '-', P: '-' })
    if (_.length > 0) throw Error('too many arguments')
    process.stdout.write(process.cwd() + '\n')
    return 0
  }
}

function parseArgs (args, opts) {
  const argv = { _: [] }
  args = args.slice(0)
  while (args.length) {
    if (args[0] === '-' || args[0] === '--' || args[0][0] !== '-') {
      argv._ = args
      break
    }
    let arg = args.shift().slice(1).split('')
    while (arg.length) {
      let opt = arg.shift()
      if (!(opt in opts)) throw Error(`-${opt}: invalid option`)
      argv[opt] = opts[opt] === '-' ||
        arg.splice(0).join('') ||
        opts[opt] === '?' ||
        args.shift()
    }
  }
  return argv
}

function parsePathSpec (str) {
  return (str.match(/(?:\\[:\\]|[^:\\])+/g) || []).map(tildeExpand)
}

function tildeExpand (path) {
  return /^~(\/|$)/.test(path) ? join(process.env.HOME, path.slice(1)) : path
}

function isDirectory (path) {
  try {
    return statSync(path).isDirectory()
  } catch (e) {
    return false
  }
}
