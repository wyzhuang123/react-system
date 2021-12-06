//  模仿打字的动态效果
function Typing(dom, target, delay, increase = 15) {
  if(typeof delay != Number && delay != null) {
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
      }, 30);
    return;

    case "[object Number]":
      // 数字
      timer = setInterval(() => {
        if(target.innerHTML - dom.innerHTML > increase) {
          target.innerHTML += increase;
        } else if (10 < target.innerHTML - dom.innerHTML < increase) {
          target.innerHTML += 10;
        } else if (target.innerHTML - dom.innerHTML <= 10){
          target.innerHTML += 1;
        }

        if(target.innerHTML === dom.innerHTML) {
          return;
        }
      }, 10000)

  }

}




export default Typing;