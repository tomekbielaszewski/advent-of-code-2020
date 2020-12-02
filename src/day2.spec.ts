import fs from 'fs'
import path from 'path'

describe('Day 2 - password policy', () => {
    function part1(input: string[]): number {
        let passCounter = 0
        for (const line of input) {
            const segments = line.split(" ")
            const rangeFrom = +segments[0].split("-")[0]
            const rangeTo = +segments[0].split("-")[1]
            const letter = segments[1].charAt(0)
            const password = segments[2]
            let letterCounter = 0

            for (const passLetter of password) {
                if (passLetter === letter) letterCounter++
            }

            if (letterCounter >= rangeFrom && letterCounter <= rangeTo) passCounter++
        }
        return passCounter
    }

    function part2(input: string[]): number {
        let passCounter = 0
        for (const line of input) {
            const segments = line.split(" ")
            const firstPos = +segments[0].split("-")[0]
            const secondPos = +segments[0].split("-")[1]
            const letter = segments[1].charAt(0)
            const password = segments[2]
            let occurrenceCounter = 0

            if (password.charAt(firstPos - 1) === letter) occurrenceCounter++
            if (password.charAt(secondPos - 1) === letter) occurrenceCounter++
            if(occurrenceCounter === 1) passCounter++
        }
        return passCounter
    }

    it('part 1 - sample', () => {
        const inputStr = "1-3 a: abcde\r\n" +
            "1-3 b: cdefg\r\n" +
            "2-9 c: ccccccccc"
        const numbers = inputStr.split('\r\n')

        const start = new Date().getTime()
        console.log(`solution: ${part1(numbers)} calculated in ${new Date().getTime() - start}ms`)
    })

    it('part 1 - check if the number of letters fits into policy', () => {
        const inputStr = fs.readFileSync(path.join(__dirname, 'day2.input')).toString()
        const numbers = inputStr.split('\r\n')

        const start = new Date().getTime()
        console.log(`solution: ${part1(numbers)} calculated in ${new Date().getTime() - start}ms`)
    })

    it('part 2 - sample', () => {
        const inputStr = "1-3 a: abcde\r\n" +
            "1-3 b: cdefg\r\n" +
            "2-9 c: ccccccccc"
        const numbers = inputStr.split('\r\n')

        const start = new Date().getTime()
        console.log(`solution: ${part2(numbers)} calculated in ${new Date().getTime() - start}ms`)
    })

    it('part 2 - check if a letter appears on ONE of given positions', () => {
        const inputStr = fs.readFileSync(path.join(__dirname, 'day2.input')).toString()
        const numbers = inputStr.split('\r\n')

        const start = new Date().getTime()
        console.log(`solution: ${part2(numbers)} calculated in ${new Date().getTime() - start}ms`)
    })
})