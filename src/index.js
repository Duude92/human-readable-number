module.exports = function toReadable(number) {

    let isInBaseNumber = (checkNumber) => {
        if (checkNumber < numbers_base.length) {
            result += numbers_base[checkNumber]
            return true
        }
        return false
    }

    if (number > 999) {
        throw 'number should be less than 1000'
    }
    let numbers_base = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen']
    let higher_numbers = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety']
    let result = ''

    if (isInBaseNumber(number)) {
        return result
    } else {
        let higher_digit = Math.floor(number / 100)
        let mid_digit = Math.floor((number % 100) / 10)
        let lower_digit = number % 10
        if (higher_digit != 0) {
            result += numbers_base[higher_digit] + ' hundred'
            if (mid_digit != 0) {
                result += ' '
            }
        }
        if (mid_digit != 0) {
            if (isInBaseNumber(number % 100)) {
                return result
            }

            result += higher_numbers[mid_digit - 2]
        }
        if (lower_digit != 0)
            result += ' ' + numbers_base[lower_digit];
        return result

    }

}