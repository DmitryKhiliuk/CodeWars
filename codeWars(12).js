/* Century From Year */

const century = year => {
   const result = String(year / 100).split('.')
   return result.length === 2 ? Number(result[0]) + 1 : Number(result[0])
 }