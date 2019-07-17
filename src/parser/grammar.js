// Generated automatically by nearley, version 2.15.1
// http://github.com/Hardmath123/nearley
(function () {
function id(x) { return x[0]; }

const lexer = require('./lexer')
const nil = () => null
const nth = i => x => x[i - 1]
const pick = (p, i = 1) => x => x[i - 1][p]
var grammar = {
    Lexer: lexer,
    ParserRules: [
    {"name": "statement$ebnf$1", "symbols": ["command"], "postprocess": id},
    {"name": "statement$ebnf$1", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "statement$ebnf$2", "symbols": [(lexer.has("comment") ? {type: "comment"} : comment)], "postprocess": id},
    {"name": "statement$ebnf$2", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "statement", "symbols": ["_", "statement$ebnf$1", "_", "statement$ebnf$2", (lexer.has("endOfStatement") ? {type: "endOfStatement"} : endOfStatement)], "postprocess": nth(2)},
    {"name": "command", "symbols": ["command", "_", "separator", "_", "argumentList"], "postprocess": ([c,, sep,, s]) => [sep, [c, s]]},
    {"name": "command", "symbols": ["argumentList"], "postprocess": id},
    {"name": "argumentList", "symbols": ["argumentList", (lexer.has("whitespace") ? {type: "whitespace"} : whitespace), "_", "argument"], "postprocess": ([s,,, w]) => s.concat(w)},
    {"name": "argumentList", "symbols": ["argument"]},
    {"name": "argument", "symbols": [(lexer.has("path") ? {type: "path"} : path)], "postprocess": x => x[0].value.replace(/\\(.)/, '$1')},
    {"name": "argument", "symbols": [(lexer.has("doubleQuotedString") ? {type: "doubleQuotedString"} : doubleQuotedString)], "postprocess": x => parseString(x[0])},
    {"name": "argument", "symbols": [(lexer.has("singleQuotedString") ? {type: "singleQuotedString"} : singleQuotedString)], "postprocess": x => parseString(x[0])},
    {"name": "separator", "symbols": [(lexer.has("pipe") ? {type: "pipe"} : pipe)], "postprocess": id},
    {"name": "separator", "symbols": [(lexer.has("redirect") ? {type: "redirect"} : redirect)], "postprocess": id},
    {"name": "_$ebnf$1", "symbols": []},
    {"name": "_$ebnf$1", "symbols": ["_$ebnf$1", (lexer.has("whitespace") ? {type: "whitespace"} : whitespace)], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "_", "symbols": ["_$ebnf$1"], "postprocess": nil}
]
  , ParserStart: "statement"
}
if (typeof module !== 'undefined'&& typeof module.exports !== 'undefined') {
   module.exports = grammar;
} else {
   window.grammar = grammar;
}
})();
