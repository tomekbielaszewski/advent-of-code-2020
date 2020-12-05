import fs from 'fs'
import path from 'path'

describe('Day 3 - Toboggan Trajectory', () => {
    function part1(input: string[], right: number, down:number): number {
        let counter = 0
        let verticalOffset = 0
        // tslint:disable-next-line:prefer-for-of
        for (let i = 0; i < input.length; i += down) {
            const line = input[i];
            if(line.charAt(verticalOffset) === '#') counter++
            verticalOffset += right
            verticalOffset %= line.length
        }
        return counter
    }

    function part2(input: string[]): number {
        let counter = 1
        const slopes = [
            [1,1],
            [3,1],
            [5,1],
            [7,1],
            [1,2],
        ]
        for (const slope of slopes) {
            counter *= part1(input, slope[0], slope[1])
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
        console.log(`solution: ${part1(lines, 3, 1)} calculated in ${new Date().getTime() - start}ms`)
    })

    it('part 1 - check the amount of trees on the way', () => {
        const inputStr = fs.readFileSync(path.join(__dirname, 'day3.input')).toString()
        const numbers = inputStr.split('\r\n')

        const start = new Date().getTime()
        console.log(`solution: ${part1(numbers, 3, 1)} calculated in ${new Date().getTime() - start}ms`)
    })

    it('part 2 - sample', () => {
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
        const numbers = inputStr.split('\r\n')

        const start = new Date().getTime()
        console.log(`solution: ${part2(numbers)} calculated in ${new Date().getTime() - start}ms`)
    })

    it('part 2 - check multiple ways', () => {
        const inputStr = fs.readFileSync(path.join(__dirname, 'day3.input')).toString()
        const numbers = inputStr.split('\r\n')

        const start = new Date().getTime()
        console.log(`solution: ${part2(numbers)} calculated in ${new Date().getTime() - start}ms`)
    })
})