// Name       : Jonghyeon Lee
// Assignment : make_a_game
// Course     : CS099
// Spring 2021

//Comment button (if selected correctly)

let S1_Answer = 0;
let S2_Answer = 0;
let S3_Answer = 0;

function S1_Answer_Button(x, y, w, h, image_file, explanation_text)
{
    const button_range_within_x = mouseX >= x - w / 2 && mouseX < x + w / 2;
    const button_range_within_y = mouseY >= y - h / 2 && mouseY < y + h / 2;
    const quit_range_within_x = mouseX >= width/2 + 220 && width/2 + 250;
    const quit_range_within_y = mouseY >= height/2 - 250 && mouseY < height/2 - 220;

    push();
    if(S1_Answer == 0)
    {
        push();
        if(button_range_within_x && button_range_within_y)
        {
            if(mouseIsPressed)
            {
                if(mouseButton === LEFT)
                {
                    push();
                    tint(255, 180);
                    imageMode(CENTER);
                    image(image_file, x, y, w, h);
                    S1_Answer = 1;
                    pop();
                }else false
            }else{
                push();
                tint(255, 200);
                imageMode(CENTER);
                image(image_file, x, y, w, h);
                pop();
            }
        }else{
            push();
            tint(255, 220);
            imageMode(CENTER);
            image(image_file, x, y, w, h);
            pop();
        }
        pop();
    }else if(S1_Answer == 1)
    {
        push();
        noStroke();
        fill(175, 206, 207);
        rectMode(CENTER);
        rect(width/2, height/2, 500, 500);
            push();
            strokeWeight(1);
            fill(141, 176, 242, 150);
            rect(width/2, height/2 - 235, 500, 30);
            pop();

            push();
            fill('black');
            textAlign(LEFT, TOP);
            text(explanation_text, width/2 - 230, height/2 - 180);
            pop();
        pop();

        push();
        if(quit_range_within_x && quit_range_within_y)
        {
            if(mouseIsPressed)
            {
                if(mouseButton === LEFT)
                {
                    push();
                    fill(220, 20, 60, 150);
                    rect(width/2 + 235, height/2 - 235, 30, 30);
                    pop();
                    S1_Answer = 0;
                }else false
            }else{
                push();
                fill(220, 20, 60, 160);
                rect(width/2 + 235, height/2 - 235, 30, 30);
                pop();
            }
        }else{
            push();
            fill(220, 20, 60, 180);
            rect(width/2 + 235, height/2 - 235, 30, 30);
            pop();
        }
        pop();
    }else false
    pop();
}

function S2_Answer_Button(x, y, w, h, image_file, explanation_text)
{
    const button_range_within_x = mouseX >= x - w / 2 && mouseX < x + w / 2;
    const button_range_within_y = mouseY >= y - h / 2 && mouseY < y + h / 2;
    const quit_range_within_x = mouseX >= width/2 + 220 && width/2 + 250;
    const quit_range_within_y = mouseY >= height/2 - 250 && mouseY < height/2 - 220;

    push();
    if(S2_Answer == 0)
    {
        push();
        if(button_range_within_x && button_range_within_y)
        {
            if(mouseIsPressed)
            {
                if(mouseButton === LEFT)
                {
                    push();
                    tint(255, 180);
                    imageMode(CENTER);
                    image(image_file, x, y, w, h);
                    S2_Answer = 1;
                    pop();
                }else false
            }else{
                push();
                tint(255, 200);
                imageMode(CENTER);
                image(image_file, x, y, w, h);
                pop();
            }
        }else{
            push();
            tint(255, 220);
            imageMode(CENTER);
            image(image_file, x, y, w, h);
            pop();
        }
        pop();
    }else if(S2_Answer == 1)
    {
        push();
        noStroke();
        fill(175, 206, 207);
        rectMode(CENTER);
        rect(width/2, height/2, 500, 500);
            push();
            strokeWeight(1);
            fill(141, 176, 242, 150);
            rect(width/2, height/2 - 235, 500, 30);
            pop();

            push();
            fill('black');
            textAlign(LEFT, TOP);
            text(explanation_text, width/2 - 230, height/2 - 180);
            pop();
        pop();

        push();
        if(quit_range_within_x && quit_range_within_y)
        {
            if(mouseIsPressed)
            {
                if(mouseButton === LEFT)
                {
                    push();
                    fill(220, 20, 60, 150);
                    rect(width/2 + 235, height/2 - 235, 30, 30);
                    pop();
                    S2_Answer = 0;
                }else false
            }else{
                push();
                fill(220, 20, 60, 160);
                rect(width/2 + 235, height/2 - 235, 30, 30);
                pop();
            }
        }else{
            push();
            fill(220, 20, 60, 180);
            rect(width/2 + 235, height/2 - 235, 30, 30);
            pop();
        }
        pop();
    }else false
    pop();
}

function S3_Answer_Button(x, y, w, h, image_file, explanation_text)
{
    const button_range_within_x = mouseX >= x - w / 2 && mouseX < x + w / 2;
    const button_range_within_y = mouseY >= y - h / 2 && mouseY < y + h / 2;
    const quit_range_within_x = mouseX >= width/2 + 220 && width/2 + 250;
    const quit_range_within_y = mouseY >= height/2 - 250 && mouseY < height/2 - 220;

    push();
    if(S3_Answer == 0)
    {
        push();
        if(button_range_within_x && button_range_within_y)
        {
            if(mouseIsPressed)
            {
                if(mouseButton === LEFT)
                {
                    push();
                    tint(255, 180);
                    imageMode(CENTER);
                    image(image_file, x, y, w, h);
                    S3_Answer = 1;
                    pop();
                }else false
            }else{
                push();
                tint(255, 200);
                imageMode(CENTER);
                image(image_file, x, y, w, h);
                pop();
            }
        }else{
            push();
            tint(255, 220);
            imageMode(CENTER);
            image(image_file, x, y, w, h);
            pop();
        }
        pop();
    }else if(S3_Answer == 1)
    {
        push();
        noStroke();
        fill(175, 206, 207);
        rectMode(CENTER);
        rect(width/2, height/2, 500, 500);
            push();
            strokeWeight(1);
            fill(141, 176, 242, 150);
            rect(width/2, height/2 - 235, 500, 30);
            pop();

            push();
            fill('black');
            textAlign(LEFT, TOP);
            text(explanation_text, width/2 - 230, height/2 - 180);
            pop();
        pop();

        push();
        if(quit_range_within_x && quit_range_within_y)
        {
            if(mouseIsPressed)
            {
                if(mouseButton === LEFT)
                {
                    push();
                    fill(220, 20, 60, 150);
                    rect(width/2 + 235, height/2 - 235, 30, 30);
                    pop();
                    S3_Answer = 0;
                }else false
            }else{
                push();
                fill(220, 20, 60, 160);
                rect(width/2 + 235, height/2 - 235, 30, 30);
                pop();
            }
        }else{
            push();
            fill(220, 20, 60, 180);
            rect(width/2 + 235, height/2 - 235, 30, 30);
            pop();
        }
        pop();
    }else false
    pop();
}