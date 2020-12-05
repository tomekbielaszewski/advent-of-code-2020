import fs from 'fs'
import path from 'path'

describe('Day 4 - Passport Processing', () => {
    const fields = [
        "byr",
        "iyr",
        "eyr",
        "hgt",
        "hcl",
        "ecl",
        "pid",
        "cid",
    ]

    const fieldsValidator = {
        byr: (s: string) => Number(s) >= 1920 && Number(s) <= 2002,
        iyr: (s: string) => Number(s) >= 2010 && Number(s) <= 2020,
        eyr: (s: string) => Number(s) >= 2020 && Number(s) <= 2030,
        hgt: (s: string) => s.search('^[0-9]{2,3}cm|in$') === 0 && s.endsWith('cm') ?
            Number(s.substr(0, s.length - 2)) >= 150 && Number(s.substr(0, s.length - 2)) <= 193 :
            Number(s.substr(0, s.length - 2)) >= 59 && Number(s.substr(0, s.length - 2)) <= 76,
        hcl: (s: string) => s.search('^#[0-9a-f]{6}$') === 0,
        ecl: (s: string) => s.search('^(amb|blu|brn|gry|grn|hzl|oth)$') === 0,
        pid: (s:string) => s.search('^[0-9]{9}$') === 0,
        cid: () => true
    }

    function part1(input: string[]): number {
        let counter = 0
        for (const line of input) {
            const formatted = line.split('\r\n').join(' ')
            const vals = formatted.split(' ')
            const presentFields = new Set()
            for (const val of vals) {
                const keyValue = val.split(':')
                presentFields.add(keyValue[0])
            }
            if (presentFields.size === fields.length ||
                (presentFields.size === fields.length - 1 && !presentFields.has('cid'))) {
                counter++
            }
        }
        return counter
    }

    function part2(input: string[]): number {
        let counter = 0
        for (const line of input) {
            const formatted = line.split('\r\n').join(' ')
            const vals = formatted.split(' ')
            const presentFields = new Set()
            for (const val of vals) {
                const keyValue = val.split(':')
                if(!fieldsValidator[keyValue[0]](keyValue[1])) break
                presentFields.add(keyValue[0])
            }
            if (presentFields.size === fields.length ||
                (presentFields.size === fields.length - 1 && !presentFields.has('cid'))) {
                counter++
            }
        }
        return counter
    }

    it('part 1 - sample', () => {
        const inputStr = "ecl:gry pid:860033327 eyr:2020 hcl:#fffffd\r\n" +
            "byr:1937 iyr:2017 cid:147 hgt:183cm\r\n" +
            "\r\n" +
            "iyr:2013 ecl:amb cid:350 eyr:2023 pid:028048884\r\n" +
            "hcl:#cfa07d byr:1929\r\n" +
            "\r\n" +
            "hcl:#ae17e1 iyr:2013\r\n" +
            "eyr:2024\r\n" +
            "ecl:brn pid:760753108 byr:1931\r\n" +
            "hgt:179cm\r\n" +
            "\r\n" +
            "hcl:#cfa07d eyr:2025 pid:166559648\r\n" +
            "iyr:2011 ecl:brn hgt:59in"
        const lines = inputStr.split('\r\n\r\n')

        const start = new Date().getTime()
        console.log(`solution: ${part1(lines)} calculated in ${new Date().getTime() - start}ms`)
    })

    it('part 1 - check passport validity', () => {
        const inputStr = fs.readFileSync(path.join(__dirname, 'day4.input')).toString()
        const lines = inputStr.split('\r\n\r\n')

        const start = new Date().getTime()
        console.log(`solution: ${part1(lines)} calculated in ${new Date().getTime() - start}ms`)
    })

    it('part 2 - invalid sample', () => {
        const inputStr = "eyr:1972 cid:100\r\n" +
            "hcl:#18171d ecl:amb hgt:170 pid:186cm iyr:2018 byr:1926\r\n" +
            "\r\n" +
            "iyr:2019\r\n" +
            "hcl:#602927 eyr:1967 hgt:170cm\r\n" +
            "ecl:grn pid:012533040 byr:1946\r\n" +
            "\r\n" +
            "hcl:dab227 iyr:2012\r\n" +
            "ecl:brn hgt:182cm pid:021572410 eyr:2020 byr:1992 cid:277\r\n" +
            "\r\n" +
            "hgt:59cm ecl:zzz\r\n" +
            "eyr:2038 hcl:74454a iyr:2023\r\n" +
            "pid:3556412378 byr:2007"
        const lines = inputStr.split('\r\n\r\n')

        const start = new Date().getTime()
        console.log(`solution: ${part2(lines)} calculated in ${new Date().getTime() - start}ms`)
    })

    it('part 2 - valid sample', () => {
        const inputStr = "pid:087499704 hgt:74in ecl:grn iyr:2012 eyr:2030 byr:1980\r\n" +
            "hcl:#623a2f\r\n" +
            "\r\n" +
            "eyr:2029 ecl:blu cid:129 byr:1989\r\n" +
            "iyr:2014 pid:896056539 hcl:#a97842 hgt:165cm\r\n" +
            "\r\n" +
            "hcl:#888785\r\n" +
            "hgt:164cm byr:2001 iyr:2015 cid:88\r\n" +
            "pid:545766238 ecl:hzl\r\n" +
            "eyr:2022\r\n" +
            "\r\n" +
            "iyr:2010 hgt:158cm hcl:#b6652a ecl:blu byr:1944 eyr:2021 pid:093154719"
        const lines = inputStr.split('\r\n\r\n')

        const start = new Date().getTime()
        console.log(`solution: ${part2(lines)} calculated in ${new Date().getTime() - start}ms`)
    })

    it('part 2 - check data validity in passports', () => {
        const inputStr = fs.readFileSync(path.join(__dirname, 'day4.input')).toString()
        const lines = inputStr.split('\r\n\r\n')

        const start = new Date().getTime()
        console.log(`solution: ${part2(lines)} calculated in ${new Date().getTime() - start}ms`)
    })
})