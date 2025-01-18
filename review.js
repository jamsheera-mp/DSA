let  nums = [1,1,2,2,2,3]

//Output: [3,1,1,2,2,2]
    const map = new Map()
    for(let i=0;i<nums.length;i++){
        map.set(nums[i],(map.get(nums[i])||0)+1)
    }

   let sortedMap = Array.from(map).sort((a, b) => a[1] - b[1]);

    console.log(map);
    console.log(sortedMap);


    let result = []
    for(let [num,count] of sortedMap){
        while(count>0){
            result.push(num)
            count--
        }
    }
    console.log(result);
    
    
    

