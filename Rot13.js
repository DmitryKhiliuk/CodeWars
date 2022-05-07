function rot13(message){
   let newMessage = ''
   for (let i = 0; i < message.length; i++){
      if(message[i] === 'a') {
         newMessage += 'n'
      }
      else if(message[i] === 'b') {
         newMessage += 'o'
      }
      else if(message[i] === 'c') {
         newMessage += 'p'
      }
      else if(message[i] === 'd') {
         newMessage += 'q'
      }
      else if(message[i] === 'e') {
         newMessage += 'r'
      }
      else if(message[i] === 'f') {
         newMessage += 's'
      }
      else if(message[i] === 'g') {
         newMessage += 't'
      }
      else if(message[i] === 'G') {
         newMessage += 'T'
      }
      else if(message[i] === 'h') {
         newMessage += 'u'
      }
      else if(message[i] === 'i') {
         newMessage += 'v'
      }
      else if(message[i] === 'j') {
         newMessage += 'w'
      }
      else if(message[i] === 'k') {
         newMessage += 'x'
      }
      else if(message[i] === 'l') {
         newMessage += 'y'
      }
      else if(message[i] === 'm') {
         newMessage += 'z'
      }
      else if(message[i] === 'n') {
         newMessage += 'a'
      }
      else if(message[i] === 'o') {
         newMessage += 'b'
      }
      else if(message[i] === 'p') {
         newMessage += 'c'
      }
      else if(message[i] === 'q') {
         newMessage += 'd'
      }
      else if(message[i] === 'r') {
         newMessage += 'e'
      }
      else if(message[i] === 's') {
         newMessage += 'f'
      }
      else if(message[i] === 't') {
         newMessage += 'g'
      }
      else if(message[i] === 'u') {
         newMessage += 'h'
      }
      else if(message[i] === 'v') {
         newMessage += 'i'
      }
      else if(message[i] === 'w') {
         newMessage += 'j'
      }
      else if(message[i] === 'x') {
         newMessage += 'k'
      }
      else if(message[i] === 'y') {
         newMessage += 'l'
      }
      else if(message[i] === 'z') {
         newMessage += 'm'
      }
      else {
         newMessage += message[i]
      }
   }
      
      return newMessage
   }
          


console.log(rot13('Test123'))





/* 

} */