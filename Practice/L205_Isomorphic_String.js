

//Input: s = "egg", t = "add"   Output: true

//Explanation:The strings s and t can be made identical by:
//Mapping 'e' to 'a'.Mapping 'g' to 'd'.


//Input: s = "foo", t = "bar" Output: false
//Explanation:The strings s and t can not be made identical as 'o' needs to be mapped to both 'a' and 'r'.

var isIsomorphic = function(s, t) {
    let sToT = new Map()
    let tToS = new Map()

    for(let i=0;i<s.length;i++){
        let charS = s[i]
        let charT = t[i]
        // Check mapping from s to t
        if (sToT.has(charS)) {
            if (sToT.get(charS) !== charT) {
                return false;
            }
        } else {
            sToT.set(charS, charT);
        }
        
        // Check mapping from t to s
        if (tToS.has(charT)) {
            if (tToS.get(charT) !== charS) {
                return false;
            }
        } else {
            tToS.set(charT, charS);
        }
        
    }
    return true;
}
let s = "egg"; let t = "add" 
console.log(isIsomorphic(s,t));
