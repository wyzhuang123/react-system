//  模仿打字的动态效果
function Typing(dom, target, delay = 30) {
  if(typeof delay != 'number' && delay != null) {
    throw new Error('Type Error, delay is not a Number!');
  }
  let i = 0;
  let timer = null;
  let way = Object.prototype.toString.call(dom.innerHTML); 
  switch(way) {
    case "[object String]":
      // 字符串
      let arr = dom.innerHTML.split('');
      timer = setInterval(() => {
        target.innerHTML += arr[i];
        i++;
        if(i === arr.length) {
          clearInterval(timer);
          return;
        }
      }, delay);
    return;

    // case "[object Number]":
    //   // 数字
    //   timer = setInterval(() => {
    //     if(target.innerHTML - dom.innerHTML > increase) {
    //       target.innerHTML += increase;
    //     } else if (10 < target.innerHTML - dom.innerHTML < increase) {
    //       target.innerHTML += 10;
    //     } else if (target.innerHTML - dom.innerHTML <= 10){
    //       target.innerHTML += 1;
    //     }

    //     if(target.innerHTML === dom.innerHTML) {
    //       return;
    //     }
    //   }, 10000)
    // return;
    default:
      return;
  }

}




export default Typing;