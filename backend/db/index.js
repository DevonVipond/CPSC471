const db = require('./mysql')

function Database() {
    if (!(this instanceof Database)) {
        return new Database()
    }
}

const normalize = (rows) => {

    return rows.map((obj, index) => {
        return Object.assign({}, obj)
    })

}

Database.prototype.call = async (procedure_name, arguments) => {
    try {

        let procedure = `${procedure_name}(`

        if (arguments.length() === 0) procedure = procedure + `)`

        Object.keys(arguments).forEach((value, index, array) => {
            if (index === arguments.length() - 1) {
                procedure = procedure + `?)`
            } else {
                procedure = procedure + `?,`
            }
        })

        const result = await db.query(procedure, arguments);

        console.log('un-normalized', result)
        console.log('normalized', normalize(result))

        return result

    } catch(e) {

        console.error("Database::call -> Exception: " + e)
        throw e

    }
}

const database = new Database()

module.exports = database

