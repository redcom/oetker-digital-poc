// utility library to generate random items

export const generateRandomTabIndex = NR_OF_TABS =>
  Math.floor(Math.random() * NR_OF_TABS)

// generate a random number between 2 limits
export const generateRandomPostNumber = (max = 100, min = 0) =>
  Math.floor(Math.random() * (max - min) + min)

/* How to generate a random text? One way is to generate a list of wards and join them together
The function bellow does the following:
Given a sentence which should have 5 words we can generate those words if we would transforming a random number in base 32 which uses 32 letters of alphabet
Initially we create an empty array of 5 elements and then we abuse the reduce method of an array to concatenate the generated words
I am using template literals to accumulate the generated string
I also want to obtain different word lengths that is why I substract a small piece from the generated string
*/
export const generateRandomText = () =>
  [...Array(5)].reduce((acc, item, idx) => {
    acc = `${Math.random()
      .toString(36)
      .substring(10 - idx)} ${acc}`
    return acc
  }, '')

/*
 * How to create a random list of random sentences?
 * I use the same approach. I am generated an Array of 5 elements and then I am using again reduce method to create a new array
 * with object as items to be displayed in this exercise
 * I use idx to target a specific image
 */
export const generateItems = (nrOfItems = 0) =>
  [...Array(nrOfItems)].reduce((acc, item, idx) => {
    acc.push({ name: generateRandomText(), img: 'image_' + idx })
    return acc
  }, [])
