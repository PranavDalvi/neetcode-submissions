class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target, position, speed) {
       /**
        * Once cars are running next to each other and cannot pass then its known as car fleet.
        * Single car is also termed as car flee
        * Return total number of cars arrive at the destination.
        * Map the position and speed and sort them desending. 
       */
      let stack = []
      let cars = position.map((e, i) =>  {
        return [e, speed[i]]
      })
      const sortedCars = cars.sort((a, b) => b[0]-a[0])

      for (let i = 0; i < sortedCars.length; i++){
        let time = (target - sortedCars[i][0]) / sortedCars[i][1];
        console.log(time)
        if(stack.length !== 0 && time <= stack[stack.length -1]){
            continue
        } else {
            stack.push(time)
        }
      }
      console.log(stack)
      return stack.length
    }
}
