

s = "leetcode"
s1 = "loveleetcode"
s3 = "aabb"
var firstUniqChar = function(s) {
       const map = new Map()
       for (let i = 0; i < s.length; i++) {
        map.set(s[i], map.get(s[i]) + 1 || 1)
        }
        for (let i = 0; i < s.length; i++) {
                if (map.get(s[i]) === 1) {
                        return i
                        }
                        }
                        return -1
                        
};
let result = firstUniqChar(s)
console.log(result);
console.log(firstUniqChar(s1));
console.log(firstUniqChar(s3));