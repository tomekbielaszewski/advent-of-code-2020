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

    function part1_fasterSolution(input: string[]): number {
        const hashset = new Set()
        for (const elem of input) {
            const num: number = +elem
            if (hashset.has(2020 - num)) return num * (2020 - num)
            hashset.add(num)
        }
    }

    function part2_fasterSolution(input: string[]): number {
        const hashset = new Set()
        for (const elem1 of input) {
            for (const elem2 of input) {
                const num1: number = +elem1
                const num2: number = +elem2
                if (hashset.has(2020 - num1 - num2)) return num1 * num2 * (2020 - num1 - num2)
                hashset.add(num1)
                hashset.add(num2)
            }
        }
    }

    it('part 1 - sum to given number', () => {
        const inputStr = fs.readFileSync(path.join(__dirname, 'day1.input')).toString()
        const numbers = inputStr.split('\r\n')

        const start = new Date().getTime()
        console.log(`naive solution: ${part1_naiveSolution(numbers)} calculated in ${new Date().getTime() - start}ms`)
        console.log(`faster solution: ${part1_fasterSolution(numbers)} calculated in ${new Date().getTime() - start}ms`)
    })
    it('part 2 - sum of 3 to given number', () => {
        const inputStr = fs.readFileSync(path.join(__dirname, 'day1.input')).toString()
        const numbers = inputStr.split('\r\n')

        const start = new Date().getTime()
        console.log(`naive solution: ${part2_naiveSolution(numbers)} calculated in ${new Date().getTime() - start}ms`)
        console.log(`faster solution: ${part2_fasterSolution(numbers)} calculated in ${new Date().getTime() - start}ms`)
    })
})