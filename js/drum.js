//querySelector 監聽整個HTML頁面
const html = document.querySelector('html');
//設置一個常數html的去取得html的整個DOM (Document Object Module)文字物件模組
//並且寫一個事件監聽器觸發條件為Keyup，鬆開按鍵時觸發e(element)也就是在主控台顯示該按鍵的所有內容物
//如果在e的後面加上".屬性"就可以只顯示該屬性的值，這邊我使用e.keyCode讓他只顯示按鍵代碼
//從而得出每個按鍵的keyCode數值方便我們觀察數值是否正確
//可以從主控台看出A=65 S=83 D=68 F=70 G=71 H=72 J=74 K=75 L=76 

html.addEventListener("keydown", function (e) {
//   console.log(e.keyCode);
  //以下函式操作按鍵撥放音樂 
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  //把所有audio的html標籤作為物件取到js內部，呼叫是以data-key="e.keyCode"的方式，也就是當前按什麼按鍵就出現什麼值
  //${}為把變數或表達式引用為數值的寫法
   if(audio) {
    audio.currentTime = 0 //這個currentTime = 0 意思是音效刷新時間為0，不用等到音效播完就可以再播同一個音效
    audio.play() ;
}

   //執行音樂檔audio的html，這邊的audio常數已經用document.querySelector取得個別的audio物件了(主控台看)
   //直接用執行涵式play()他就會依照當前按鍵傳進去的${e.keyCode}，決定要撥放哪一個音效檔
   //但是當按到不是播放音效的按鍵時就會報錯，所以要添加if判別，如果有按到audio才執行audio.play()


  //以下函式改變DOM的STYLE
  const dom = document.querySelector(`div[data-key="${e.keyCode}"]`);
    if (dom){
        dom.classList.add(`playing`);
    //playing這個class預設寫在CSS內，當按鍵時觸發添加這個屬性導致按鈕變化; 
    }

    html.addEventListener('transitionend',endPlaying);
    //全頁觸發事件在變化結束時(transtitionend)觸發endPlaying函式
    function endPlaying(){

      if(dom) dom.classList.remove(`playing`);
      else return;
    }
    //如同添加Class變化那邊的作法，只是因為全頁觸發如果按在非按鍵上會報錯，必須多寫一個else return直接結束不執行動作

  console.log(dom,audio);//在主控台確認是否輸出正確，這邊我原本寫querySelectorAll導致回傳node.list
  });
  
