// Name       : Jonghyeon Lee
// Assignment : make_a_game
// Course     : CS099
// Spring 2021

function S1Forward_Button(x, y, w, h, FButton_losetime_mark, move_page)
{
    let button_colorFor1 = 255;
    let button_colorFor2 = 255;
    let button_colorFor3 = 255;
    let button_alphaFor = 150;
    const button_range_within_x = mouseX >= x - w / 2 && mouseX < x + w / 2;
    const button_range_within_y = mouseY >= y - h / 2 && mouseY < y + h / 2;
    strokeCap(ROUND);
    strokeJoin(ROUND);
    strokeWeight(1);
    textSize(10);
    stroke('Maroon');
    fill(button_colorFor1, button_colorFor2, button_colorFor3, button_alphaFor);
    rectMode(CENTER);
    textAlign(CENTER, CENTER);

    push();
    if(button_range_within_x && button_range_within_y)
    {
        if(mouseIsPressed)
        {
            if(mouseButton === LEFT)
            {
                push();
                button_colorFor1 = 128;
                button_colorFor2 = 128;
                button_colorFor3 = 128;
                button_alphaFor = 150;
                fill(button_colorFor1, button_colorFor2, button_colorFor3, button_alphaFor);
                rect(x, y, w, h);
                triangle(x, y - h, x - w, y - h/2, x + w, y - h/2);

                    push();
                    textSize(10);
                    text(FButton_losetime_mark, x + 20, y);
                    pop();
                pop();

                S1_Maps = move_page;
                Time_limitS1 -= 10;
            }else false
        }else{
            push();
            button_colorFor1 = 153;
            button_colorFor2 = 153;
            button_colorFor3 = 153;
            button_alphaFor = 150;
            fill(button_colorFor1, button_colorFor2, button_colorFor3, button_alphaFor);
            rect(x, y, w, h);
            triangle(x, y - h, x - w, y - h/2, x + w, y - h/2);
            
            push();
            textSize(10);
            text(FButton_losetime_mark, x + 20, y);
            pop();
            pop();
        }
    }else{
        push();
        button_colorFor1 = 169;
        button_colorFor2 = 169;
        button_colorFor3 = 169;
        button_alphaFor = 150;
        fill(button_colorFor1, button_colorFor2, button_colorFor3, button_alphaFor);
        rect(x, y, w, h);
        triangle(x, y - h, x - w, y - h/2, x + w, y - h/2);
        
        push();
        textSize(10);
        text(FButton_losetime_mark, x + 20, y);
        pop();
        pop();
    }
    pop();
}

function S1Backward_Button(x, y, w, h, BButton_losetime_mark, move_page)
{
    let button_colorBack1 = 255;
    let button_colorBack2 = 255;
    let button_colorBack3 = 255;
    let button_alphaBack = 150;
    const button_range_within_x = mouseX >= x - w / 2 && mouseX < x + w / 2;
    const button_range_within_y = mouseY >= y - h / 2 && mouseY < y + h / 2;
    strokeCap(ROUND);
    strokeJoin(ROUND);
    strokeWeight(1);
    textSize(10);
    stroke('Maroon');
    fill(button_colorBack1, button_colorBack2, button_colorBack3, button_alphaBack);
    rectMode(CENTER);
    textAlign(CENTER, CENTER);

    push();
    if(button_range_within_x && button_range_within_y)
    {
        if(mouseIsPressed)
        {
            if(mouseButton === LEFT)
            {
                push();
                button_colorBack1 = 128;
                button_colorBack2 = 128;
                button_colorBack3 = 128;
                button_alphaBack = 150;
                fill(button_colorBack1, button_colorBack2, button_colorBack3, button_alphaBack);
                rect(x, y, w, h);
                triangle(x, y + h, x - w, y + h/2, x + w, y + h/2);

                    push();
                    textSize(10);
                    text(BButton_losetime_mark, x + 20, y);
                    pop();
                pop();

                S1_Maps = move_page;
                Time_limitS1 -= 10;
            }else false
        }else{
            push();
            button_colorBack1 = 153;
            button_colorBack2 = 153;
            button_colorBack3 = 153;
            button_alphaBack = 150;
            fill(button_colorBack1, button_colorBack2, button_colorBack3, button_alphaBack);
            rect(x, y, w, h);
            triangle(x, y + h, x - w, y + h/2, x + w, y + h/2);
            
            push();
            textSize(10);
            text(BButton_losetime_mark, x + 20, y);
            pop();
            pop();
        }
    }else{
        push();
        button_colorBack1 = 169;
        button_colorBack2 = 169;
        button_colorBack3 = 169;
        button_alphaBack = 150;
        fill(button_colorBack1, button_colorBack2, button_colorBack3, button_alphaBack);
        rect(x, y, w, h);
        triangle(x, y + h, x - w, y + h/2, x + w, y + h/2);
        
        push();
        textSize(10);
        text(BButton_losetime_mark, x + 20, y);
        pop();
        pop();
    }
    pop();
}

function S1Left_Button(x, y, w, h, LButton_losetime_mark, move_page)
{
    let button_colorBack1 = 255;
    let button_colorBack2 = 255;
    let button_colorBack3 = 255;
    let button_alphaBack = 150;
    const button_range_within_x = mouseX >= x - w / 2 && mouseX < x + w / 2;
    const button_range_within_y = mouseY >= y - h / 2 && mouseY < y + h / 2;
    strokeCap(ROUND);
    strokeJoin(ROUND);
    strokeWeight(1);
    textSize(10);
    stroke('Maroon');
    fill(button_colorBack1, button_colorBack2, button_colorBack3, button_alphaBack);
    rectMode(CENTER);
    textAlign(CENTER, CENTER);

    push();
    if(button_range_within_x && button_range_within_y)
    {
        if(mouseIsPressed)
        {
            if(mouseButton === LEFT)
            {
                push();
                button_colorBack1 = 128;
                button_colorBack2 = 128;
                button_colorBack3 = 128;
                button_alphaBack = 150;
                fill(button_colorBack1, button_colorBack2, button_colorBack3, button_alphaBack);
                rect(x, y, w, h);
                triangle(x - w, y, x - w/2, y + h, x - w/2, y - h);

                    push();
                    textSize(10);
                    text(LButton_losetime_mark, x + 20, y);
                    pop();
                pop();

                S1_Maps = move_page;
                Time_limitS1 -= 10;
            }else false
        }else{
            push();
            button_colorBack1 = 153;
            button_colorBack2 = 153;
            button_colorBack3 = 153;
            button_alphaBack = 150;
            fill(button_colorBack1, button_colorBack2, button_colorBack3, button_alphaBack);
            rect(x, y, w, h);
            triangle(x - w, y, x - w/2, y + h, x - w/2, y - h);
            
            push();
            textSize(10);
            text(LButton_losetime_mark, x + 20, y);
            pop();
            pop();
        }
    }else{
        push();
        button_colorBack1 = 169;
        button_colorBack2 = 169;
        button_colorBack3 = 169;
        button_alphaBack = 150;
        fill(button_colorBack1, button_colorBack2, button_colorBack3, button_alphaBack);
        rect(x, y, w, h);
        triangle(x - w, y, x - w/2, y + h, x - w/2, y - h);
        
        push();
        textSize(10);
        text(LButton_losetime_mark, x + 20, y);
        pop();
        pop();
    }
    pop();
}

function S1Right_Button(x, y, w, h, RButton_losetime_mark, move_page)
{
    let button_colorBack1 = 255;
    let button_colorBack2 = 255;
    let button_colorBack3 = 255;
    let button_alphaBack = 150;
    const button_range_within_x = mouseX >= x - w / 2 && mouseX < x + w / 2;
    const button_range_within_y = mouseY >= y - h / 2 && mouseY < y + h / 2;
    strokeCap(ROUND);
    strokeJoin(ROUND);
    strokeWeight(1);
    textSize(10);
    stroke('Maroon');
    fill(button_colorBack1, button_colorBack2, button_colorBack3, button_alphaBack);
    rectMode(CENTER);
    textAlign(CENTER, CENTER);

    push();
    if(button_range_within_x && button_range_within_y)
    {
        if(mouseIsPressed)
        {
            if(mouseButton === LEFT)
            {
                push();
                button_colorBack1 = 128;
                button_colorBack2 = 128;
                button_colorBack3 = 128;
                button_alphaBack = 150;
                fill(button_colorBack1, button_colorBack2, button_colorBack3, button_alphaBack);
                rect(x, y, w, h);
                triangle(x + w, y, x + w/2, y + h, x + w/2, y - h);

                    push();
                    textSize(10);
                    text(RButton_losetime_mark, x + 20, y);
                    pop();
                pop();

                S1_Maps = move_page;
                Time_limitS1 -= 10;
            }else false
        }else{
            push();
            button_colorBack1 = 153;
            button_colorBack2 = 153;
            button_colorBack3 = 153;
            button_alphaBack = 150;
            fill(button_colorBack1, button_colorBack2, button_colorBack3, button_alphaBack);
            rect(x, y, w, h);
            triangle(x + w, y, x + w/2, y + h, x + w/2, y - h);
            
            push();
            textSize(10);
            text(RButton_losetime_mark, x + 20, y);
            pop();
            pop();
        }
    }else{
        push();
        button_colorBack1 = 169;
        button_colorBack2 = 169;
        button_colorBack3 = 169;
        button_alphaBack = 150;
        fill(button_colorBack1, button_colorBack2, button_colorBack3, button_alphaBack);
        rect(x, y, w, h);
        triangle(x + w, y, x + w/2, y + h, x + w/2, y - h);
        
        push();
        textSize(10);
        text(RButton_losetime_mark, x + 20, y);
        pop();
        pop();
    }
    pop();
}