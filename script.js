const btn = document.getElementById('change');

rand = () =>  Math.floor(Math.random() * 10);

genhex = () => {
    const characters ='0123456789abcdef';
    var colorcode = '#';
    for(var i = 0; i < 6; i++) {
        colorcode = colorcode + characters.charAt(Math.floor(Math.random()*16));
    }
    return colorcode;
}

function changeColor () {
    const colors = ['red', 'green', 'blue', 'brown', 'yellow', 'grey', 'orange', 'teal', 'magenta'];
    //var newcolor = colors[rand()];
    var newcolor = genhex();
    //document.body.setAttribute("style", "background-color:newcolor");
    document.body.style.background = newcolor;
    //console.log(rand());
}

btn.addEventListener("click", changeColor);