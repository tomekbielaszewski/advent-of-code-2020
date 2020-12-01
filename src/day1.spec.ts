import fs from 'fs'
import path from 'path'

describe('Day 1 - expense report', () => {
    it('part 1 - sum to given number', () => {
        const inputStr = fs.readFileSync(path.join(__dirname, 'day1.input')).toString()
        const numbers = inputStr.split('\r\n')

        for (const inumber1 of numbers) {
            for (const inumber2 of numbers) {
                const n1: number = +inumber1
                const n2: number = +inumber2
                if((n1 + n2) === 2020) console.log(n1 * n2)
            }
        }
    });
    it('part 2 - sum of 3 to given number', () => {
        const inputStr = fs.readFileSync(path.join(__dirname, 'day1.input')).toString()
        const numbers = inputStr.split('\r\n')

        for (const inumber1 of numbers) {
            for (const inumber2 of numbers) {
                for (const inumber3 of numbers) {
                    const n1: number = +inumber1
                    const n2: number = +inumber2
                    const n3: number = +inumber3
                    if((n1 + n2 + n3) === 2020) console.log(n1 * n2 * n3)
                }
            }
        }
    });
})