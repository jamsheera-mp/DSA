

function isValid(s){
    let pairs = {'(':')','{':'}','[':']'}
    let n= s.length
    if(n%2===1) return false
    if(s[0]==='}'||s[0]===']'||s[0]===')') return false
    if(s[n-1]==='('||s[n-1]==='{'||s[n-1]==='[') return false

    let stack =[]
    for(let i=0;i<s.length;i++){
        if(s[i]==='('||s[i]==='{'||s[i]==='['){
            stack.push(s[i])
        }else if(pairs[stack.pop()]!== s[i]){
            return false
        }
    }
    return stack.length === 0
}
let str1 ='{}{}[][))'
let str2 ='({{[]}})'
let str3 = '(){}[]'
let str4 = '[{{(])})}]'

console.log(isValid(str1));
console.log(isValid(str2));
console.log(isValid(str3));
console.log(isValid(str4));

