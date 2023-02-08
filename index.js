const container = document.querySelector('.container');

const grids = document.querySelectorAll('.box');
// console.log(grids[0].children);

const startButton = document.querySelector('button');

const circle = document.querySelector('.circle');

const cross = document.querySelector('.cross');

const scircle = document.querySelector('.small-circle');

const scross = document.querySelector('.small-cross');
let displayScross = true;
let displayScircle = true;
let isPlaying = 0;
let over = document.createElement('div');
over.innerText = 'Game Over';

let win = document.createElement('div');
let shape = document.createElement('div');
let statement = document.createElement('div');
statement.innerText = 'Won the game!';
win.style.display = 'flex';
win.style.flexDirection = 'row';
win.style.alignItems = 'center'
win.style.justifyContent = 'space-between'
win.style.width = '140px';
win.appendChild(shape);
win.appendChild(statement);



startButton.addEventListener('click', () => {
  startButton.innerText = 'Started';

  let rand = Math.floor(Math.random()*2);
  if(rand === 0) {
  displayScross = false;
} else if(rand === 1) {
    displayScircle = false;
  }

  grids.forEach(grid => {
    var going = true;
   if(going) {
     console.log(going);
    grid.addEventListener('click', () => {
      if(displayScircle) {
      let circle = document.createElement('div');
      circle.classList.add('circle');
      if(grid.children.length === 0) {
      grid.appendChild(circle);
      displayScross = true;
      displayScircle = false;
      scross.style.display = '';
      scircle.style.display = 'none';
      isPlaying += 1;
    }

    }
     else if (displayScross) {
       let cross = document.createElement('div');
       let line1 = document.createElement('div');
       let line2 = document.createElement('div');
       line1.classList.add('line1');
       line2.classList.add('line2');
       cross.appendChild(line1);
       cross.appendChild(line2);
       cross.classList.add('cross')
       // cross.appendChild(line1)
       // cross.appendChild(line2)
       if(grid.children.length === 0) {
       grid.appendChild(cross);
       isPlaying += 1;
       displayScross = false;
       displayScircle = true;
       scross.style.display = 'none';
       scircle.style.display = '';
     }

     }
console.log(container.children.length);
      if(grids[0].children.length === 1 && grids[1].children.length === 1 && grids[2].children.length === 1) {
        if(grids[0].children[0].className === grids[1].children[0].className && grids[1].children[0].className === grids[2].children[0].className) {
          if(grids[0].children[0].className === 'circle') {
          shape.classList.add('small-circle');
        }
        else {
          let sline1 = document.createElement('div');
          let sline2 = document.createElement('div');
          sline1.classList.add('sline1');
          sline2.classList.add('sline2');
          shape.appendChild(sline1);
          shape.appendChild(sline2);
          shape.classList.add('small-cross');
        }
          container.appendChild(win);
          scross.style.display = '';
          scircle.style.display = '';
          going = false;
        }
      }
      if(grids[3].children.length === 1 && grids[4].children.length === 1 && grids[5].children.length === 1) {
        if(grids[3].children[0].className === grids[4].children[0].className && grids[4].children[0].className === grids[5].children[0].className) {
          if(grids[3].children[0].className === 'circle') {
          shape.classList.add('small-circle');
        }
        else {
          let sline1 = document.createElement('div');
          let sline2 = document.createElement('div');
          sline1.classList.add('sline1');
          sline2.classList.add('sline2');
          shape.appendChild(sline1);
          shape.appendChild(sline2);
          shape.classList.add('small-cross');
        }
          container.appendChild(win);
          container.appendChild(over);
          scross.style.display = '';
          scircle.style.display = '';
          going = false;
        }
      }
      if(grids[6].children.length === 1 && grids[7].children.length === 1 && grids[8].children.length === 1) {
        if(grids[6].children[0].className === grids[7].children[0].className && grids[7].children[0].className === grids[8].children[0].className) {
          if(grids[6].children[0].className === 'circle') {
          shape.classList.add('small-circle');
        }
        else {
          let sline1 = document.createElement('div');
          let sline2 = document.createElement('div');
          sline1.classList.add('sline1');
          sline2.classList.add('sline2');
          shape.appendChild(sline1);
          shape.appendChild(sline2);
          shape.classList.add('small-cross');
        }
          container.appendChild(win);
          container.appendChild(over);
          scross.style.display = '';
          scircle.style.display = '';
          going = false;
        }
      }
      if(grids[0].children.length === 1 && grids[3].children.length === 1 && grids[6].children.length === 1) {
        if(grids[0].children[0].className === grids[3].children[0].className && grids[3].children[0].className === grids[6].children[0].className) {
          if(grids[0].children[0].className === 'circle') {
          shape.classList.add('small-circle');
        }
        else {
          let sline1 = document.createElement('div');
          let sline2 = document.createElement('div');
          sline1.classList.add('sline1');
          sline2.classList.add('sline2');
          shape.appendChild(sline1);
          shape.appendChild(sline2);
          shape.classList.add('small-cross');
        }
          container.appendChild(win);
          container.appendChild(over);
          scross.style.display = '';
          scircle.style.display = '';
          going = false;
        }
      }
      if(grids[1].children.length === 1 && grids[4].children.length === 1 && grids[7].children.length === 1) {
        if(grids[1].children[0].className === grids[4].children[0].className && grids[4].children[0].className === grids[7].children[0].className) {
          if(grids[1].children[0].className === 'circle') {
          shape.classList.add('small-circle');
        }
        else {
          let sline1 = document.createElement('div');
          let sline2 = document.createElement('div');
          sline1.classList.add('sline1');
          sline2.classList.add('sline2');
          shape.appendChild(sline1);
          shape.appendChild(sline2);
          shape.classList.add('small-cross');
        }
          container.appendChild(win);
          container.appendChild(over);
          scross.style.display = '';
          scircle.style.display = '';
          going = false;
        }
      }
      if(grids[2].children.length === 1 && grids[5].children.length === 1 && grids[8].children.length === 1) {
        if(grids[2].children[0].className === grids[5].children[0].className && grids[5].children[0].className === grids[8].children[0].className) {
          if(grids[2].children[0].className === 'circle') {
          shape.classList.add('small-circle');
        }
        else {
          let sline1 = document.createElement('div');
          let sline2 = document.createElement('div');
          sline1.classList.add('sline1');
          sline2.classList.add('sline2');
          shape.appendChild(sline1);
          shape.appendChild(sline2);
          shape.classList.add('small-cross');
        }
          container.appendChild(win);
          container.appendChild(over);
          scross.style.display = '';
          scircle.style.display = '';
          going = false;
        }
      }
      if(grids[0].children.length === 1 && grids[4].children.length === 1 && grids[8].children.length === 1) {
        if(grids[0].children[0].className === grids[4].children[0].className && grids[4].children[0].className === grids[8].children[0].className) {
          if(grids[0].children[0].className === 'circle') {
          shape.classList.add('small-circle');
        }
        else {
          let sline1 = document.createElement('div');
          let sline2 = document.createElement('div');
          sline1.classList.add('sline1');
          sline2.classList.add('sline2');
          shape.appendChild(sline1);
          shape.appendChild(sline2);
          shape.classList.add('small-cross');
        }
          container.appendChild(win);
          container.appendChild(over);
          scross.style.display = '';
          scircle.style.display = '';
          going = false;
        }
      }
      if(grids[2].children.length === 1 && grids[4].children.length === 1 && grids[6].children.length === 1) {
        if(grids[2].children[0].className === grids[4].children[0].className && grids[4].children[0].className === grids[6].children[0].className) {
          if(grids[2].children[0].className === 'circle') {
          shape.classList.add('small-circle');
        }
        else {
          let sline1 = document.createElement('div');
          let sline2 = document.createElement('div');
          sline1.classList.add('sline1');
          sline2.classList.add('sline2');
          shape.appendChild(sline1);
          shape.appendChild(sline2);
          shape.classList.add('small-cross');
        }
          container.appendChild(win);
          container.appendChild(over);
          scross.style.display = '';
          scircle.style.display = '';
          going = false;
        }
      }
      // console.log(grids[0].children[0].className);
      // console.log(grids[1].children[0].className);
      // console.log(grids[0].children[0].className === grids[1].children[0].className);

      if(isPlaying === 9) {
        container.appendChild(over);
        scross.style.display = '';
        scircle.style.display = '';
        going = false;
      }

    })
   }
  })
})
