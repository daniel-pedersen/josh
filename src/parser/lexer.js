const moo = require('moo')

const escaped = '\n; \t#"\\\'|<>'

module.exports = moo.compile({
  endOfStatement: { match: /[\n;]/, lineBreaks: true },
  whitespace: /[ \t]+/,
  comment: /#.*?$/,
  pipe: '|',
  redirect: ['<', '>', '>>', '>|'],
  doubleQuotedString: /"(?:\\"|[^"])*"?/,
  singleQuotedString: /'(?:\\'|[^'])*'?/,
  path: RegExp(`(?:\\\\[${escaped}]|[^${escaped}])+`)
  // control: ['\n', '|', '||', '&&', ';'],
  // redirect: ['>', '>>', '2>', '2>>', '>|', '2>|', '&>', '&>>', '&>|']
})
