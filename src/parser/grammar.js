// Generated automatically by nearley, version 2.15.1
// http://github.com/Hardmath123/nearley
(function () {
function id(x) { return x[0]; }

const lexer = require('./lexer')
const nuller = () => null
var grammar = {
    Lexer: lexer,
    ParserRules: [
    {"name": "statement$ebnf$1", "symbols": []},
    {"name": "statement$ebnf$1$subexpression$1", "symbols": ["_", (lexer.has("identifier") ? {type: "identifier"} : identifier)]},
    {"name": "statement$ebnf$1", "symbols": ["statement$ebnf$1", "statement$ebnf$1$subexpression$1"], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "statement$ebnf$2$subexpression$1$ebnf$1", "symbols": ["_"], "postprocess": id},
    {"name": "statement$ebnf$2$subexpression$1$ebnf$1", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "statement$ebnf$2$subexpression$1", "symbols": ["statement$ebnf$2$subexpression$1$ebnf$1", "comment"]},
    {"name": "statement$ebnf$2", "symbols": ["statement$ebnf$2$subexpression$1"], "postprocess": id},
    {"name": "statement$ebnf$2", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "statement", "symbols": [(lexer.has("identifier") ? {type: "identifier"} : identifier), "statement$ebnf$1", "statement$ebnf$2"], "postprocess": ([...x]) => x},
    {"name": "_", "symbols": [(lexer.has("whitespace") ? {type: "whitespace"} : whitespace)], "postprocess": nuller},
    {"name": "comment", "symbols": [(lexer.has("comment") ? {type: "comment"} : comment)], "postprocess": nuller}
]
  , ParserStart: "statement"
}
if (typeof module !== 'undefined'&& typeof module.exports !== 'undefined') {
   module.exports = grammar;
} else {
   window.grammar = grammar;
}
})();
