function isValidWalk(walk) {
  let n = walk.filter(el => el === 'n').length
  let s = walk.filter(el => el === 's').length
  let w = walk.filter(el => el === 'w').length
  let e = walk.filter(el => el === 'e').length
  
   let res = (walk.length === 10 && n === s && e === w) ? true : false
   return res
}
console.log(isValidWalk(['n','s','n','s','n','s','n','s','n','s']))
console.log(isValidWalk(['w','e','w','e','w','e','w','e','w','e','w','e']))
console.log(isValidWalk(['w']))