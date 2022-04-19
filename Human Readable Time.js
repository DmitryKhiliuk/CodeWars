function humanReadable (seconds) {
   let arr = []
   if (seconds >= 3600){
      let sec = ((seconds%3600)%60)%60
      sec <=9 ? sec = ('0' + String(sec)) : sec
      let min = (seconds-sec)%3600/60
      min <= 9 ? min = ('0' + String(min)) : min
      let hour = (seconds - min*60 - sec)/3600
      hour <= 9 ? hour = ('0' + String(hour)) : hour
      arr = [hour, min, sec]
      arr = arr.join(':')
   } else if (seconds < 3600 && seconds > 59) {
      let sec = seconds%60
      sec <= 9 ? sec = ('0' + String(sec)) : sec
      let min = (seconds-sec)/60
      min <= 9 ? min = ('0' + String(min)) : min
      let hour = '00'
      arr = [hour, min, sec]
      arr = arr.join(':')
   } else if (seconds < 60) {
      let sec = seconds
      sec <= 9 ? sec = ('0' + String(sec)) : sec
      let min = '00'
      let hour = '00'
      arr = [hour, min, sec]
      arr = arr.join(':')
   }
   return arr
 }

 console.log(humanReadable(48))