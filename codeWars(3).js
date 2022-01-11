/* Given two points P and Q, output the symmetric point of point P about Q.
    Each argument is a two-element array of integers representing the point's X and Y coordinates.
    Output should be in the same format, giving the X and Y coordinates of point P1.
    You do not have to validate the input. */
   
   
   
 const symmetricPoint = ([a, b], [c, d]) => [c * 2 - a, d * 2 - b]
 
 module.exports = symmetricPoint