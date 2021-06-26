// Name       : Jonghyeon Lee
// Assignment : make_a_game
// Course     : CS099
// Spring 2021

//Time Limit

let Time_limitS1 = 400;
let Time_limitS2 = 500;
let Time_limitS3 = 900;
let Time_limitS4 = 999;

function Limit_setS1(x, y)
{
    if(frameCount % 60 == 0 && Time_limitS1 > 0)
    {
        Time_limitS1--;
    }
    if(Time_limitS1 <= 0)
    {
        push();
        fill('black');
        rectMode(CENTER);
        rect(width/2, height/2, width, height);
        pop();

        push();
        textAlign(CENTER, CENTER);
        textSize(50);
        fill('red');
        text("GAME OVER", width/2, height/2);
        pop();

        Time_limitS1 = 0;
    }
    push();
    textSize(20);
    fill('red');
    text(Time_limitS1, x, y);
    text("Limit:", x - 50, y);
    pop();
}

function Limit_setS2(x, y)
{
    if(frameCount % 60 == 0 && Time_limitS2 > 0)
    {
        Time_limitS2--;
    }
    if(Time_limitS2 <= 0)
    {
        push();
        fill('black');
        rectMode(CENTER);
        rect(width/2, height/2, width, height);
        pop();

        push();
        textAlign(CENTER, CENTER);
        textSize(50);
        fill('red');
        text("GAME OVER", width/2, height/2);
        pop();

        Time_limitS2 = 0;
    }
    push();
    textSize(20);
    fill('red');
    text(Time_limitS2, x, y);
    text("Limit:", x - 50, y);
    pop();
}

function Limit_setS3(x, y)
{
    if(frameCount % 60 == 0 && Time_limitS3 > 0)
    {
        Time_limitS3--;
    }
    if(Time_limitS3 <= 0)
    {
        push();
        fill('black');
        rectMode(CENTER);
        rect(width/2, height/2, width, height);
        pop();

        push();
        textAlign(CENTER, CENTER);
        textSize(50);
        fill('red');
        text("GAME OVER", width/2, height/2);
        pop();

        Time_limitS3 = 0;
    }
    push();
    textSize(20);
    fill('red');
    text(Time_limitS3, x, y);
    text("Limit:", x - 50, y);
    pop();
}

function Limit_setS4(x, y)
{
    if(frameCount % 60 == 0 && Time_limitS4 > 0)
    {
        Time_limitS4--;
    }
    if(Time_limitS4 <= 0)
    {
        push();
        fill('white');
        rectMode(CENTER);
        rect(width/2, height/2, width, height);
        pop();

        push();
        textAlign(CENTER, CENTER);
        textSize(50);
        fill('cyan');
        text("FREE WILL", width/2, height/2);
        pop();

        Time_limitS4 = 0;
    }
    push();
    textSize(20);
    fill('red');
    text(Time_limitS4, x, y);
    text("Limit:", x - 50, y);
    pop();
}