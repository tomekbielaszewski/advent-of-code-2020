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
                if(passLetter === letter) letterCounter++
            }

            if(letterCounter >= rangeFrom && letterCounter <= rangeTo) passCounter++
        }
        return passCounter
    }

    function part2(input: string[]): number {
        return 0
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

    it('part 2 - sum of 3 to given number', () => {
        const inputStr = fs.readFileSync(path.join(__dirname, 'day1.input')).toString()
        const numbers = inputStr.split('\r\n')

        const start = new Date().getTime()
        console.log(`solution: ${part2(numbers)} calculated in ${new Date().getTime() - start}ms`)
    })
})