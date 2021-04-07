import fs from 'fs'
import path from 'path'

describe('Day 7 - Handy Haversacks', () => {

    function part1(input: string[]): number {
        return 0
    }

    function part2(input: string[]): number {
        return 0
    }

    it('part 1 - sample', () => {
        const inputStr = "light red bags contain 1 bright white bag, 2 muted yellow bags.\r\n" +
            "dark orange bags contain 3 bright white bags, 4 muted yellow bags.\r\n" +
            "bright white bags contain 1 shiny gold bag.\r\n" +
            "muted yellow bags contain 2 shiny gold bags, 9 faded blue bags.\r\n" +
            "shiny gold bags contain 1 dark olive bag, 2 vibrant plum bags.\r\n" +
            "dark olive bags contain 3 faded blue bags, 4 dotted black bags.\r\n" +
            "vibrant plum bags contain 5 faded blue bags, 6 dotted black bags.\r\n" +
            "faded blue bags contain no other bags.\r\n" +
            "dotted black bags contain no other bags."
        const lines = inputStr.split('\r\n')

        const start = new Date().getTime()
        console.log(`solution: ${part1(lines)} calculated in ${new Date().getTime() - start}ms`)
    })

    it('part 1 - check passport validity', () => {
        const inputStr = fs.readFileSync(path.join(__dirname, 'day7.input')).toString()
        const lines = inputStr.split('\r\n')

        const start = new Date().getTime()
        console.log(`solution: ${part1(lines)} calculated in ${new Date().getTime() - start}ms`)
    })

    it('part 2 - sample', () => {
        const inputStr = "light red bags contain 1 bright white bag, 2 muted yellow bags.\r\n" +
            "dark orange bags contain 3 bright white bags, 4 muted yellow bags.\r\n" +
            "bright white bags contain 1 shiny gold bag.\r\n" +
            "muted yellow bags contain 2 shiny gold bags, 9 faded blue bags.\r\n" +
            "shiny gold bags contain 1 dark olive bag, 2 vibrant plum bags.\r\n" +
            "dark olive bags contain 3 faded blue bags, 4 dotted black bags.\r\n" +
            "vibrant plum bags contain 5 faded blue bags, 6 dotted black bags.\r\n" +
            "faded blue bags contain no other bags.\r\n" +
            "dotted black bags contain no other bags."
        const lines = inputStr.split('\r\n')

        const start = new Date().getTime()
        console.log(`solution: ${part2(lines)} calculated in ${new Date().getTime() - start}ms`)
    })

    it('part 2 - check data validity in passports', () => {
        const inputStr = fs.readFileSync(path.join(__dirname, 'day7.input')).toString()
        const lines = inputStr.split('\r\n')

        const start = new Date().getTime()
        console.log(`solution: ${part2(lines)} calculated in ${new Date().getTime() - start}ms`)
    })
})