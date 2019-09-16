window.setTimeout(function(){
    var numberSq = 6;
    var color = [];
    var picked;
    var sq = document.querySelectorAll('.square');
    var colordisp = document.getElementById('colorDisp');
    var msg = document.querySelector('#msg');
    var h1 = document.querySelector('h1');
    var reset = document.getElementById('reset');
    var modeBtn = document.querySelectorAll('.mode');

    init();

    function init(){
        // mode listeners
        for (var i = 0; i< modeBtn.length; i++){
            modeBtn[i].addEventListener('click',function(){
                modeBtn[0].classList.remove('selected');
                modeBtn[1].classList.remove('selected');
                this.classList.add('selected');
                if (this.textContent === 'Easy'){
                    numberSq = 3;
                }else{
                    numberSq = 6;
                }
                reset_main()
            })
        }
        // set the square
        for (var i = 0; i<sq.length; i++){
            sq[i].addEventListener('click', function(){
                // grab the color
                var clickedColor = this.style.backgroundColor
                // compare to the picke dcolor
                if (clickedColor === picked){
                    msg.textContent = 'Correct';
                    reset.textContent = 'Play Again';
                    changeColor(picked);
                    h1.style.backgroundColor = picked;
                }else{
                    this.style.backgroundColor = '#232323';
                    msg.textContent = 'Try Again';
                }
            });

        reset_main();
        }
    }
    function reset_main(){
        color = genraterandomColor(numberSq)
        picked = pick();
        // change display color
        colordisp.textContent = picked
        reset.textContent='new Colors';
        for (var i = 0; i<sq.length; i++){
            if (color[i]){
                 sq[i].style.display = 'block';
                 sq[i].style.backgroundColor = color[i];
            }else{
                sq[i].style.display = 'none';
            }
        };
        h1.style.backgroundColor = 'steelblue';
        msg.textContent = '';   
    }
    reset.addEventListener('click',function(){
        reset_main()
    });
    
    function changeColor(color){
        // loop through all the colors
        for(var i = 0; i<sq.length; i++){
        // change the color to the specific correct option
            sq[i].style.backgroundColor = color;
        }
        
    }
    function pick(){
       var random = Math.floor(Math.random()*color.length);
       return color[random];
    }
    function genraterandomColor(no){
    // make a array genrate ramdom color
    var arr = [];
    for(var i = 0; i < no; i++){
        // get random color
        arr.push(randomcolor());
    }
    // return the array
    return arr
    }
    function randomcolor(){
     var r = Math.floor(Math.random()* 256);
     var g = Math.floor(Math.random()* 256);
     var b = Math.floor(Math.random()* 256);
     return "rgb("+r+", "+g+", "+b+ ")";
    }
},200);