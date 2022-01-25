const enough = (cap, on, wait) => Math.max(on + wait - cap, 0)


module.exports = enough