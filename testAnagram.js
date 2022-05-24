var words = [
    'rope',
    'pore',
    'repo',
    'red rum',
    'murder',
    'listen',
    'silent',
    'endeavour',
];
var getAnagram = function (words) {
    var _a;
    var anagrams = [];
    var resultedAnagrams = [];
    for (var _i = 0, words_1 = words; _i < words_1.length; _i++) {
        var word = words_1[_i];
        var sortedLetters = word.replace(' ', '').split('').sort().join('');
        anagrams[sortedLetters] = (_a = anagrams[sortedLetters]) !== null && _a !== void 0 ? _a : [];
        anagrams[sortedLetters].push(word);
    }
    for (var key in anagrams) {
        resultedAnagrams.push(anagrams[key]);
    }
    return resultedAnagrams;
};
console.log(getAnagram(words));
//# sourceMappingURL=testAnagram.js.map