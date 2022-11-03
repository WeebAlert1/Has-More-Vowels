function hasMoreVowels(word) {
    let vowels = ['a', 'e', 'i', 'o', 'u']
    let vowlCount = 0
    let vowlsNeeded = word.length / 2;
    let wordSplit = word.toLowerCase().split('');

    for (let i = 0; i < wordSplit.length; i++) {
        let letter = wordSplit[i]

        if (vowels.includes(letter)) {
            vowlCount ++
        }

        if(vowlCount > vowlsNeeded) {
            return true
        }
    }

    return false
}

console.log(hasMoreVowels('kitty'));

console.log(hasMoreVowels('Kaati'));