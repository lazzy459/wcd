// 4. Hapus kemunculan pertama dari substring dalam string
function removeFirstOccurrence(str, search) {
    return str.replace(search, '');
}
console.log(`"Hello world", remove "ell" → "${removeFirstOccurrence("Hello world", "ell")}"`);