import fs from 'fs'
import path from 'path'

describe('Day 2 - Toboggan Trajectory', () => {
    function part1(input: string[]): number {
        let counter = 0
        let verticalOffset = 0
        // tslint:disable-next-line:prefer-for-of
        for (let i = 0; i < input.length; i++) {
            const line = input[i];
            if(line.charAt(verticalOffset) === '#') counter++
            verticalOffset += 3
            verticalOffset %= line.length
        }
        return counter
    }

    function part2(input: string[]): number {
        let counter = 0
        for (const line of input) {
            counter = 1
        }
        return counter
    }

    it('part 1 - sample', () => {
        const inputStr = "..##.......\r\n" +
            "#...#...#..\r\n" +
            ".#....#..#.\r\n" +
            "..#.#...#.#\r\n" +
            ".#...##..#.\r\n" +
            "..#.##.....\r\n" +
            ".#.#.#....#\r\n" +
            ".#........#\r\n" +
            "#.##...#...\r\n" +
            "#...##....#\r\n" +
            ".#..#...#.#"
        const lines = inputStr.split('\r\n')

        const start = new Date().getTime()
        console.log(`solution: ${part1(lines)} calculated in ${new Date().getTime() - start}ms`)
    })

    it('part 1 - check if the number of letters fits into policy', () => {
        const inputStr = fs.readFileSync(path.join(__dirname, 'day3.input')).toString()
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
        const inputStr = fs.readFileSync(path.join(__dirname, 'day3.input')).toString()
        const numbers = inputStr.split('\r\n')

        const start = new Date().getTime()
        console.log(`solution: ${part2(numbers)} calculated in ${new Date().getTime() - start}ms`)
    })
})