/* Create a class Ghost

Ghost objects are instantiated without any arguments.

Ghost objects are given a random color attribute of white" or "yellow" or "purple" or "red" when instantiated */



class Ghost {
   constructor () {
       let color = ['yellow', 'purple', 'red', 'white'];
       this.color = color[~~(Math.random()*4)]
   }
}