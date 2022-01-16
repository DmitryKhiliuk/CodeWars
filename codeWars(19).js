/* Thinkful - Logic Drills: Traffic light */

const updateLight = current =>
  ({
    green: 'yellow',
    yellow: 'red',
    red: 'green',
  }[current])


module.exports = updateLight