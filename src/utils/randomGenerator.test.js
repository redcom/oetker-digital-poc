import {
  generateRandomPostNumber,
  generateRandomText,
  generateItems,
  generateRandomTabIndex,
} from './randomGenerator'

describe('generateRandomPostNumber', () => {
  it('generate a number in given limits', () => {
    const actual = generateRandomPostNumber(10, 100)
    const expected = true
    expect(actual > 10 && actual < 100).toBe(expected)
  })

  it('generate a number bellow 100 when no arguments are set', () => {
    const actual = generateRandomPostNumber()
    const expected = true
    expect(actual > 0 && actual < 100).toBe(expected)
  })
})

describe('generateRandomText', () => {
  it('generate a random sentence', () => {
    const actual = generateRandomText()
    const expected = true
    expect(actual.trim().length > 0).toBe(expected)
  })
})

describe('generateItems', () => {
  it('generate a list of N items given as parameter', () => {
    const actual = generateItems(5)
    const expected = 5
    expect(actual.length).toBe(expected)
  })

  it('generate an empty list if no parameters are given', () => {
    const actual = generateItems()
    const expected = 0
    expect(actual.length).toBe(expected)
  })

  it('generated list should be an Array', () => {
    const actual = generateItems()
    const expected = true
    expect(actual instanceof Array).toBe(expected)
  })
})

describe('generateRandomTabIndex', () => {
  it('generate a random number with upper limit defined by its parameters', () => {
    const actual = generateRandomTabIndex(3)
    const expected = true
    expect(actual >= 0 && actual < 3).toBe(expected)
  })
})
