

//Reverse a string using stack

let str = 'hello'
function reverseString(s){

    let stack = []

    for(let char of s){
        stack.push(char)
    }

    let reverse = ''
    while(stack.length>0){
        reverse+= stack.pop()
    }
    return reverse
}


console.log(reverseString(str));
