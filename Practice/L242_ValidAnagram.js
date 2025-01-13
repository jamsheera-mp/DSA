

var isAnagram = function(s,t){
    if(s.length !== t.length) return false
    return s.split('').sort().join('') === t.split('').sort().join('')
}

console.log(isAnagram('leetcode','edoctee'));


function validAnagramUsingMap(s,t){
    if(s.length !==  t.length) return false

    const map = new Map()

    for(let char of s){
        map.set(char,(map.get(char)||0) +1)
    }
    for(let char of t){
        if(!map.has(char)) return false

        map.set(char,map.get(char)-1)
        if(map.get(char) === 0) map.delete(char) 
    }
return map.size === 0
}

console.log(validAnagramUsingMap('anagram','maraagn'));
