

let a  = [11, 1, 13, 21, 3, 7], b = [11, 3, 7, 1] 


function subSet(a,b){
    for(let i=0;i<b.length;i++){
        let found = false
        for(let j=0;j<a.length;j++){
            if(b[i] === a[j]){
                found = true
                break
            }
        }
        if(!found) return false
    }
   
        return true
}

//console.log(subSet(a,b));


function isSubSet(a,b){
    const set = new Set(a)
    for(const num of b){
        if(!set.has(num)){
            return false
        }
    }
    return true
}
console.log(isSubSet(a,b));

function findElements(a){
    const set = new Set(a)

}
