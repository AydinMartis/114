function preload () {

}

function setup ()
{
    canvas=createCanvas(300,300);
    canvas.center()
    capture=createCapture(VIDEO)
    capture.size(300,300)
    capture.hide()
    posenet=ml5.poseNet(capture,modeloaded)
    posenet.on('pose',gotposes)
}

function modeloaded ()
{
    console.log('posenet is initialised');


}

function gotposes(results)
{
    if (results.length>0)
    {
        console.log(results);
        console.log("nose x= "+results[0].pose.nose.x);
        console.log("nose y= "+results[0].pose.nose.y);

    }

}

function draw ()
{
    image(capture,0,0,300,300)

}

function take_snapshot ()
{
    save('myfilter.png')
}