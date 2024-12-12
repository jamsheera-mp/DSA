

//given an input string s, reverse the order of the words
//Input: "the sky is blue"  ----->> output:"blue is sky the"

const reverseWords = function(s){
    const splitS = s.split(" ")
    const stack = []

    for(let i of splitS){
        stack.push(i)
    }
    let finalS = ""
    while(stack.length){
        let current = stack.pop()
        if(current){
            finalS += " " + current
        }
    }
    return finalS.trim()

}

console.log(reverseWords('Hello world'));
