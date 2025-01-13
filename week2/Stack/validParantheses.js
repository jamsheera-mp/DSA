

function isValid(s){
    const pairs = {'(':')','{':'}','[':']'}
    const n = s.length
    if(n % 2 === 1 ) return false
    if(s[0] === ')' || s[0] === '}' || s[0] === ']') return false
    if(s[n-1] === '(' || s[n-1] === '{' || s[n-1] === '[') return false

    let stack = []
    for(let i=0;i<s.length;i++){
        if(s[i] === '(' || s[i] === '{' || s[i] === '['){
            stack.push(s[i])
        }else if(pairs[stack.pop()] !== s[i]){
            return false
        }
    }
    return stack.length === 0
}


const string1 = '{()'
console.log(isValid(string1));
