class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target, position, speed) {
       /**
        * 1. hash map the postions and their respective speeds {position: speed} 
        * 2. Sort in descending order so car with highest position will stay at front, 
        * 3. calculate the time taken to reach by time = (target - position) / speed 
        * 4. store the value in stack and continue if the next value is <= to current value do not push the value and continue to next one
        * 
        * example target = 10 pos = [4,1,0,7] speed = [2,2,1,1]
        * hashmap + sorted => 7: 1, 4: 2, 1: 2, 0: 1,
        * time calculated:
        * 7: 1 => 3 (added to stack)
        * 4: 2 => 3 (will collide so skipped)
        * 1: 2 => 4.5 (added to stack)
        * 0: 1 => 10 (added to stack)

return car fleet => stack.length()
       */
      let stack = []
      let cars = position.map((e, i) =>  {
        return [e, speed[i]]
      })
      const sortedCars = cars.sort((a, b) => b[0]-a[0])

      for (let i = 0; i < sortedCars.length; i++){
        let time = (target - sortedCars[i][0]) / sortedCars[i][1];
        if(stack.length !== 0 && time <= stack[stack.length -1]){
            continue
        } else {
            stack.push(time)
        }
      }
      return stack.length
    }
}
