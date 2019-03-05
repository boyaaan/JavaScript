function solve() {
  let curLink = document.querySelectorAll('#exercise a[href="#"]');
  let clickTimes = Array.from(document.querySelectorAll('#exercise span'));

  for (let element of curLink) {
    element.addEventListener('click', function () {
      let increaseVisitedNum = '';
      if (element.innerHTML === 'SoftUni') {
        increaseVisitedNum = increaseVisited(clickTimes[0].innerHTML);
        clickTimes[0].innerHTML = increaseVisitedNum;
      } else if (element.innerHTML === 'Google') {
        increaseVisitedNum = increaseVisited(clickTimes[1].innerHTML);
        clickTimes[1].innerHTML = increaseVisitedNum;
      } else if (element.innerHTML === 'YouTube') {
        increaseVisitedNum = increaseVisited(clickTimes[2].innerHTML);
        clickTimes[2].innerHTML = increaseVisitedNum;
      } else if (element.innerHTML === 'Wikipedia') {
        increaseVisitedNum = increaseVisited(clickTimes[3].innerHTML);
        clickTimes[3].innerHTML = increaseVisitedNum;
      } else if (element.innerHTML === 'Gmail') {
        increaseVisitedNum = increaseVisited(clickTimes[4].innerHTML);
        clickTimes[4].innerHTML = increaseVisitedNum;
      } else if (element.innerHTML === 'Stackoverflow') {
        increaseVisitedNum = increaseVisited(clickTimes[5].innerHTML);
        clickTimes[5].innerHTML = increaseVisitedNum;
      }

      console.log(increaseVisitedNum);
    });
  }
  function increaseVisited(clickElement) {
    let newVisit = '';
    for (let iterator of clickElement) {
      if (Number(iterator)) {
        let countVisit = Number(++iterator);
        newVisit += countVisit.toString();

      } else {
        newVisit += iterator;
      }
    }
    return newVisit;
  }
}

