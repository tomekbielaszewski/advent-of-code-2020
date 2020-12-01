import fs from 'fs'
import path from 'path'

describe('Day 1 - expense report', () => {
    function part1_naiveSolution(input: string[]): number {
        for (const inumber1 of input) {
            for (const inumber2 of input) {
                const n1: number = +inumber1
                const n2: number = +inumber2
                if ((n1 + n2) === 2020) return (n1 * n2)
            }
        }
    }

    function part2_naiveSolution(input: string[]): number {
        for (const inumber1 of input) {
            for (const inumber2 of input) {
                for (const inumber3 of input) {
                    const n1: number = +inumber1
                    const n2: number = +inumber2
                    const n3: number = +inumber3
                    if ((n1 + n2 + n3) === 2020) return (n1 * n2 * n3)
                }
            }
        }
    }

    it('part 1 - sum to given number', () => {
        const inputStr = fs.readFileSync(path.join(__dirname, 'day1.input')).toString()
        const numbers = inputStr.split('\r\n')

        console.log(part1_naiveSolution(numbers))
    })
    it('part 2 - sum of 3 to given number', () => {
        const inputStr = fs.readFileSync(path.join(__dirname, 'day1.input')).toString()
        const numbers = inputStr.split('\r\n')

        console.log(part2_naiveSolution(numbers))
    })
})