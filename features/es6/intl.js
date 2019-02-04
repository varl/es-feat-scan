const { types } = require('recast')

exports.name = 'es6.intl'

exports.def = function (ast) {
    let result = false

    types.visit(ast, {
        visitIdentifier: function (path) {
            const node = path.node

            if (node.name === 'Intl') {
                result = true
            }

            this.traverse(path)
        },
    })

    return result
}