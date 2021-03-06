const { types } = require('recast')

exports.name = 'es6.symbol'
exports.type = 'api'

exports.def = function (ast) {
    let result = false

    types.visit(ast, {
        visitIdentifier: function (path) {
            const node = path.node

            if (node.name === 'Symbol') {
                result = true
            }

            this.traverse(path)
        },
    })

    return result
}
