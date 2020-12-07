import fs from 'fs'
import path from 'path'

describe('Day 6 - Custom Customs', () => {

    function part1(input: string[]): number {
        return input.map(line => Object.keys(line.split('')
            .filter(s => s !== '\n' && s !== '\r')
            .reduce((prev, curr) => ({...prev, [curr]: {}}), {})).length)
            .reduce((prev, curr) => prev + curr, 0)
    }

    function part2(input: string[]): number {
        return input.map(line => Object.keys(line.split('\r\n')
            .map(el => el.split('')
                .reduce((p, c) => ({...p, [c]: {}}), {}))
            .reduce((prev, curr) => Object.keys(prev)
                .filter({}.hasOwnProperty.bind(curr))
                .reduce((p, c) => ({...p, [c]: {}}), {}))))
            .reduce((prev, curr) => prev + curr.length, 0)
    }

    it('part 1 - sample', () => {
        const inputStr = "abc\r\n" +
            "\r\n" +
            "a\r\n" +
            "b\r\n" +
            "c\r\n" +
            "\r\n" +
            "ab\r\n" +
            "ac\r\n" +
            "\r\n" +
            "a\r\n" +
            "a\r\n" +
            "a\r\n" +
            "a\r\n" +
            "\r\n" +
            "b"
        const lines = inputStr.split('\r\n\r\n')

        const start = new Date().getTime()
        console.log(`solution: ${part1(lines)} calculated in ${new Date().getTime() - start}ms`)
    })

    it('part 1 - check passport validity', () => {
        const inputStr = fs.readFileSync(path.join(__dirname, 'day6.input')).toString()
        const lines = inputStr.split('\r\n\r\n')

        const start = new Date().getTime()
        console.log(`solution: ${part1(lines)} calculated in ${new Date().getTime() - start}ms`)
    })

    it('part 2 - sample', () => {
        const inputStr = "abc\r\n" +
            "\r\n" +
            "a\r\n" +
            "b\r\n" +
            "c\r\n" +
            "\r\n" +
            "ab\r\n" +
            "ac\r\n" +
            "\r\n" +
            "a\r\n" +
            "a\r\n" +
            "a\r\n" +
            "a\r\n" +
            "\r\n" +
            "b"
        const lines = inputStr.split('\r\n\r\n')

        const start = new Date().getTime()
        console.log(`solution: ${part2(lines)} calculated in ${new Date().getTime() - start}ms`)
    })

    it('part 2 - check data validity in passports', () => {
        const inputStr = fs.readFileSync(path.join(__dirname, 'day6.input')).toString()
        const lines = inputStr.split('\r\n\r\n')

        const start = new Date().getTime()
        console.log(`solution: ${part2(lines)} calculated in ${new Date().getTime() - start}ms`)
    })
})