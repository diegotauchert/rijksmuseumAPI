/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */
const wordsAnagram:string[] = [
  'rope',
  'pore',
  'repo',
  'red rum',
  'murder',
  'listen',
  'silent',
  'endeavour',
  ];

  const getAnagram = (words: string[]): string[] => {
    const anagrams: string[] = []
    const resultedAnagrams: string[] = []
    
    for (const word of words){
      const sortedLetters: string = word.replace(' ', '').split('').sort().join('')
      anagrams[sortedLetters] = anagrams[sortedLetters] ?? []
      anagrams[sortedLetters].push(word)
    }
  
    for (const key in anagrams){
      resultedAnagrams.push(anagrams[key])
    }

    return resultedAnagrams
  }
  
  getAnagram(wordsAnagram)

