document.addEventListener('DOMContentLoaded', function(){
    
    let scrollscreenerRootElement = document.querySelectorAll(':has( > .scrollscreener + .scrollscreener)');
  
    function textNodesUnder(el) {
      const children = [] // Type: Node[]
      const walker = document.createTreeWalker(el, NodeFilter.SHOW_TEXT);
      while(walker.nextNode()) {
        children.push(walker.currentNode);
      }
      return children;
    }
  
  
    // let scrollscreenerResize(e){}
    let splitWords = true;
    let scrollGroupHolders = [];
    scrollscreenerRootElement.forEach(elRoot => {
      let firstScreens = elRoot.querySelectorAll('.scrollscreener:has(+ .scrollscreener):not(.scrollscreener + .scrollscreener)');
      firstScreens.forEach(elFirst => {
        let scrollGroup = [elFirst];
        let next = elFirst.nextElementSibling;
        while(next && next.matches('.scrollscreener')){
          scrollGroup.push(next);
          next = next.nextElementSibling;
        }
        // собрали группу
        // console.log(scrollGroup);
        let elHolder = document.createElement('div');
        elFirst.before(elHolder);
        elHolder.className = 'scrollscreener_root';
        elHolder.append(...scrollGroup);
        // зафиксируем геометрию и уроним все экраны
        // elHolder.style.setProperty('height', `${elHolder.clientHeight}px`);
        elHolder.style.setProperty('--screen-count', `${scrollGroup.length}`);
        elHolder.classList.add('scrollscreener_fall');
        // снимаем с блоков фоны
        let arBg = scrollGroup.map((elBlock) => getComputedStyle(elBlock).background);
        scrollGroup.forEach((elBlock, j) => {
          if(j == 0){
            elHolder.style.setProperty('background', arBg[0]);
          }
          elBlock.style.setProperty('--index', j); 
          elBlock.style.setProperty('background-color', 'transparent', 'important');
          // разбиваем блоки на слова
          let lstTextNodes = textNodesUnder(elBlock);
          lstTextNodes.forEach(node => {
            if(node.textContent.trim().length == 0) return;
            var words = node.textContent.trim().split(' ');
            words.forEach((sw, i, ar) => {
                    var wrap1 = document.createElement('span');
                        wrap1.innerText = sw+' ';
                    var wrap0 = document.createElement('span');
                        wrap0.className = 'scrollscreener_word';
                        wrap0.innerText = sw;//+' ';
    //                        wrap0.append(wrap1);          
            node.parentElement.insertBefore(wrap0, node)
  
            });
          node.remove();
  
  
          });
  
        });
  
        // сложили в массив
        scrollGroupHolders.push({elRoot: elHolder, elements: scrollGroup, arBg});
      })
    });
  
    // console.log(scrollGroupHolders)
  
    const scrollscreenerScrollHandler = function(){
      var windowHeight = (window.innerHeight || document.documentElement.clientHeight);
      scrollGroupHolders.forEach(({elRoot, elements, arBg}) => {
        var elRect = elRoot.getBoundingClientRect();
        const isVisible = ( elRect.top < windowHeight && elRect.bottom > 0);
        if(!isVisible) return;
        let {top, bottom, height} = elRect;
        elRoot.dataset.stage = (top <= 0 && bottom >= windowHeight) ? 1 : (top <= 0 && bottom > 0) ? 2 : 0;
        let commonProgress = (0-top) / windowHeight + 0.5;
        let currentIndex = Math.floor(commonProgress);
        let currentProgress = commonProgress - currentIndex;
        if(elements[currentIndex]){
          let el = elements[currentIndex];
          elRoot.style.setProperty('background', arBg[currentIndex]);
          el.dataset.age = (currentProgress > 0.5) ? 1 : 0;
          el.dataset.current = '1';
        }
      });
    }
    window.addEventListener('scroll', scrollscreenerScrollHandler);
    window.dispatchEvent(new Event('scroll'));
    // слушаем события
  })
  
  
  