import fs from 'fs'
import path from 'path'

describe('Day 5 - Binary Boarding', () => {

    function part1(input: string[]): number {
        let highest = 0
        for (const line of input) {
            const row = parseInt(line.substr(0, 7)
                .split('F').join('0')
                .split('B').join('1'), 2)
            const col = parseInt(line.substr(7, 3)
                .split('L').join('0')
                .split('R').join('1'), 2)
            const id = row * 8 + col
            if (highest < id) highest = id
        }
        return highest
    }

    function part2(input: string[]): number {
        const arrLength = part1(input)
        const arr = new Array<boolean>(arrLength)

        for (const line of input) {
            const row = parseInt(line.substr(0, 7)
                .split('F').join('0')
                .split('B').join('1'), 2)
            const col = parseInt(line.substr(7, 3)
                .split('L').join('0')
                .split('R').join('1'), 2)
            const id = row * 8 + col
            arr[id] = true
        }

        let started = false
        let i = 0
        for (const taken of arr) {
            if (taken && !started) started = true
            if (started && !taken) return i
            i++
        }
    }

    it('part 1 - sample', () => {
        const inputStr = "BFFFBBFRRR\r\n" +
            "FFFBBBFRRR\r\n" +
            "BBFFBBFRLL"
        const lines = inputStr.split('\r\n')

        const start = new Date().getTime()
        console.log(`solution: ${part1(lines)} calculated in ${new Date().getTime() - start}ms`)
    })

    it('part 1 - highest seat ID', () => {
        const inputStr = fs.readFileSync(path.join(__dirname, 'day5.input')).toString()
        const lines = inputStr.split('\r\n')

        const start = new Date().getTime()
        console.log(`solution: ${part1(lines)} calculated in ${new Date().getTime() - start}ms`)
    })

    it('part 2 - check data validity in passports', () => {
        const inputStr = fs.readFileSync(path.join(__dirname, 'day5.input')).toString()
        const lines = inputStr.split('\r\n')

        const start = new Date().getTime()
        console.log(`solution: ${part2(lines)} calculated in ${new Date().getTime() - start}ms`)
    })
})