class Logger {

    constructor() {
        this.id = this.#getRandom(10000)
    }

    #getRandom (max) {
        return Math.floor(Math.random() * max)
    }


    log (value) {
        console.log(`[Logger: ${id}]: ${value} `)
    }
}

module.exports = Logger