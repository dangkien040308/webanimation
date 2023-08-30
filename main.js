var container = document.getElementById('container');
var borderArray = ['50%','0'];
var blurArray = ['0','5px'];
var randomColorArray = ['33CCCC','	#CC66CC', '#FF3333' ,'#FF9966'];
var width = document.documentElement.clientWidth ;
var height = document.documentElement.clientHeight ;
var count = 60 ;

function CreateElementsRandom() {
    for (var i = 0 ; i < count ; i++){
        var randomnumber = Math.random()*250 + 1 
        var randomLeft = Math.floor(Math.random()*width) + randomnumber ;
        var randomTop = Math.floor(Math.random()*height);
        var randomColor = Math.floor(Math.random()*randomColorArray.length);
        var randomWidth = Math.floor(Math.random()*5) + 5 ;
        var border = Math.floor(Math.random()*borderArray.length);
        var blur = Math.floor(Math.random()*blurArray.length);
        var animation = Math.floor(Math.random()*12) + 6 ;

        var div = document.createElement("div");
        div.style.backgroundColor = randomColorArray[randomColor];
        div.style.position = 'absolute' ;
        div.style.width = randomWidth + 'px' ;
        div.style.height = randomWidth + 'px' ;
        div.style.marginLeft = randomLeft + 'px';
        div.style.marginTop = randomTop + 'px'; 
        div.style.borderRadius = borderArray[border];
        div.style.filter = 'blur(' + blurArray[blur] + ')';
        div.style.animation = 'move ' + animation + 's ease-in infinite' ;

        container.appendChild(div);
    }
}

CreateElementsRandom();
