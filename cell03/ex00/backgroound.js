function bgColors()
{
    // const randomColors = Math.floor(Math.random()*255);
    // document.body.style.backgroundColor = colors[randomColors];
    document.body.style.backgroundColor = 
    'rgb(' + Math.floor(Math.random() * 255) + ','
    + Math.floor(Math.random() * 255) + ','
    + Math.floor(Math.random() * 255) + ')';
}