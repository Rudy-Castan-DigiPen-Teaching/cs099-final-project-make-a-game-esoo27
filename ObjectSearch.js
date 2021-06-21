// Name       : Jonghyeon Lee
// Assignment : make_a_game
// Course     : CS099
// Spring 2021

let S1_Obj = 0;
let S1object_mod_1 = 0; //PictureFrame //1F Room5
let S1object_mod_2 = 0; //Footprint1 //1F Room6
let S1object_mod_3 = 0; //ignition point //1F Room7
let S1object_mod_4 = 0; //Divorce //2F Room3
let S1object_mod_5 = 0; //Picture //2F Room5
let S1object_mod_6 = 0; //ignition point2 //2F Room6
let S1object_mod_7 = 0; //Knife //2F Room7

//Stage 1
function S1Object_search1(x, y, w, h, image_file, explanation_text)
{
    const button_range_within_x = mouseX >= x - w / 2 && mouseX < x + w / 2;
    const button_range_within_y = mouseY >= y - h / 2 && mouseY < y + h / 2;
    const quit_range_within_x = mouseX >= width/2 + 220 && width/2 + 250;
    const quit_range_within_y = mouseY >= height/2 - 100 && mouseY < height/2 - 70;

    push();
    if(S1object_mod_1 == 0)
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
                    S1object_mod_1 = 1;
                    pop();

                    S1_Obj += 1;
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
    }else if(S1object_mod_1 == 1)
    {
        push();
        noStroke();
        fill(175, 206, 207, 150);
        rectMode(CENTER);
        rect(width/2, height/2, 500, 200);
            push();
            strokeWeight(1);
            fill(141, 176, 242, 150);
            rect(width/2, height/2 - 85, 500, 30);
            pop();

            push();
            fill('black');
            textAlign(CENTER, TOP);
            text(explanation_text, width/2, height/2 - 50);
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
                    rect(width/2 + 235, height/2 - 85, 30, 30);
                    pop();
                    S1object_mod_1 = 2;
                }else false
            }else{
                push();
                fill(220, 20, 60, 160);
                rect(width/2 + 235, height/2 - 85, 30, 30);
                pop();
            }
        }else{
            push();
            fill(220, 20, 60, 180);
            rect(width/2 + 235, height/2 - 85, 30, 30);
            pop();
        }
        pop();
    }else if(S1object_mod_1 == 2)
    {}else false
    pop();
}

function S1Object_search2(x, y, w, h, image_file, explanation_text)
{
    const button_range_within_x = mouseX >= x - w / 2 && mouseX < x + w / 2;
    const button_range_within_y = mouseY >= y - h / 2 && mouseY < y + h / 2;
    const quit_range_within_x = mouseX >= width/2 + 220 && width/2 + 250;
    const quit_range_within_y = mouseY >= height/2 - 100 && mouseY < height/2 - 70;

    push();
    if(S1object_mod_2 == 0)
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
                    S1object_mod_2 = 1;
                    pop();

                    S1_Obj += 1;
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
    }else if(S1object_mod_2 == 1)
    {
        push();
        noStroke();
        fill(175, 206, 207, 150);
        rectMode(CENTER);
        rect(width/2, height/2, 500, 200);
            push();
            strokeWeight(1);
            fill(141, 176, 242, 150);
            rect(width/2, height/2 - 85, 500, 30);
            pop();

            push();
            fill('black');
            textAlign(CENTER, TOP);
            text(explanation_text, width/2, height/2 - 50);
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
                    rect(width/2 + 235, height/2 - 85, 30, 30);
                    pop();
                    S1object_mod_2 = 2;
                }else false
            }else{
                push();
                fill(220, 20, 60, 160);
                rect(width/2 + 235, height/2 - 85, 30, 30);
                pop();
            }
        }else{
            push();
            fill(220, 20, 60, 180);
            rect(width/2 + 235, height/2 - 85, 30, 30);
            pop();
        }
        pop();
    }else if(S1object_mod_2 == 2)
    {}else false
    pop();
}

function S1Object_search3(x, y, w, h, image_file, explanation_text)
{
    const button_range_within_x = mouseX >= x - w / 2 && mouseX < x + w / 2;
    const button_range_within_y = mouseY >= y - h / 2 && mouseY < y + h / 2;
    const quit_range_within_x = mouseX >= width/2 + 220 && width/2 + 250;
    const quit_range_within_y = mouseY >= height/2 - 100 && mouseY < height/2 - 70;

    push();
    if(S1object_mod_3 == 0)
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
                    S1object_mod_3 = 1;
                    pop();

                    S1_Obj += 1;
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
    }else if(S1object_mod_3 == 1)
    {
        push();
        noStroke();
        fill(175, 206, 207, 150);
        rectMode(CENTER);
        rect(width/2, height/2, 500, 200);
            push();
            strokeWeight(1);
            fill(141, 176, 242, 150);
            rect(width/2, height/2 - 85, 500, 30);
            pop();

            push();
            fill('black');
            textAlign(CENTER, TOP);
            text(explanation_text, width/2, height/2 - 50);
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
                    rect(width/2 + 235, height/2 - 85, 30, 30);
                    pop();
                    S1object_mod_3 = 2;
                }else false
            }else{
                push();
                fill(220, 20, 60, 160);
                rect(width/2 + 235, height/2 - 85, 30, 30);
                pop();
            }
        }else{
            push();
            fill(220, 20, 60, 180);
            rect(width/2 + 235, height/2 - 85, 30, 30);
            pop();
        }
        pop();
    }else if(S1object_mod_3 == 2)
    {}else false
    pop();
}

function S1Object_search4(x, y, w, h, image_file, explanation_text)
{
    const button_range_within_x = mouseX >= x - w / 2 && mouseX < x + w / 2;
    const button_range_within_y = mouseY >= y - h / 2 && mouseY < y + h / 2;
    const quit_range_within_x = mouseX >= width/2 + 220 && width/2 + 250;
    const quit_range_within_y = mouseY >= height/2 - 100 && mouseY < height/2 - 70;

    push();
    if(S1object_mod_4 == 0)
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
                    S1object_mod_4 = 1;
                    pop();

                    S1_Obj += 1;
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
    }else if(S1object_mod_4 == 1)
    {
        push();
        noStroke();
        fill(175, 206, 207, 150);
        rectMode(CENTER);
        rect(width/2, height/2, 500, 200);
            push();
            strokeWeight(1);
            fill(141, 176, 242, 150);
            rect(width/2, height/2 - 85, 500, 30);
            pop();

            push();
            fill('black');
            textAlign(CENTER, TOP);
            text(explanation_text, width/2, height/2 - 50);
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
                    rect(width/2 + 235, height/2 - 85, 30, 30);
                    pop();
                    S1object_mod_4 = 2;
                }else false
            }else{
                push();
                fill(220, 20, 60, 160);
                rect(width/2 + 235, height/2 - 85, 30, 30);
                pop();
            }
        }else{
            push();
            fill(220, 20, 60, 180);
            rect(width/2 + 235, height/2 - 85, 30, 30);
            pop();
        }
        pop();
    }else if(S1object_mod_4 == 2)
    {}else false
    pop();
}

function S1Object_search5(x, y, w, h, image_file, explanation_text)
{
    const button_range_within_x = mouseX >= x - w / 2 && mouseX < x + w / 2;
    const button_range_within_y = mouseY >= y - h / 2 && mouseY < y + h / 2;
    const quit_range_within_x = mouseX >= width/2 + 220 && width/2 + 250;
    const quit_range_within_y = mouseY >= height/2 - 100 && mouseY < height/2 - 70;

    push();
    if(S1object_mod_5 == 0)
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
                    S1object_mod_5 = 1;
                    pop();

                    S1_Obj += 1;
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
    }else if(S1object_mod_5 == 1)
    {
        push();
        noStroke();
        fill(175, 206, 207, 150);
        rectMode(CENTER);
        rect(width/2, height/2, 500, 200);
            push();
            strokeWeight(1);
            fill(141, 176, 242, 150);
            rect(width/2, height/2 - 85, 500, 30);
            pop();

            push();
            fill('black');
            textAlign(CENTER, TOP);
            text(explanation_text, width/2, height/2 - 50);
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
                    rect(width/2 + 235, height/2 - 85, 30, 30);
                    pop();
                    S1object_mod_5 = 2;
                }else false
            }else{
                push();
                fill(220, 20, 60, 160);
                rect(width/2 + 235, height/2 - 85, 30, 30);
                pop();
            }
        }else{
            push();
            fill(220, 20, 60, 180);
            rect(width/2 + 235, height/2 - 85, 30, 30);
            pop();
        }
        pop();
    }else if(S1object_mod_5 == 2)
    {}else false
    pop();
}

function S1Object_search6(x, y, w, h, image_file, explanation_text)
{
    const button_range_within_x = mouseX >= x - w / 2 && mouseX < x + w / 2;
    const button_range_within_y = mouseY >= y - h / 2 && mouseY < y + h / 2;
    const quit_range_within_x = mouseX >= width/2 + 220 && width/2 + 250;
    const quit_range_within_y = mouseY >= height/2 - 100 && mouseY < height/2 - 70;

    push();
    if(S1object_mod_6 == 0)
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
                    S1object_mod_6 = 1;
                    pop();

                    S1_Obj += 1;
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
    }else if(S1object_mod_6 == 1)
    {
        push();
        noStroke();
        fill(175, 206, 207, 150);
        rectMode(CENTER);
        rect(width/2, height/2, 500, 200);
            push();
            strokeWeight(1);
            fill(141, 176, 242, 150);
            rect(width/2, height/2 - 85, 500, 30);
            pop();

            push();
            fill('black');
            textAlign(CENTER, TOP);
            text(explanation_text, width/2, height/2 - 50);
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
                    rect(width/2 + 235, height/2 - 85, 30, 30);
                    pop();
                    S1object_mod_6 = 2;
                }else false
            }else{
                push();
                fill(220, 20, 60, 160);
                rect(width/2 + 235, height/2 - 85, 30, 30);
                pop();
            }
        }else{
            push();
            fill(220, 20, 60, 180);
            rect(width/2 + 235, height/2 - 85, 30, 30);
            pop();
        }
        pop();
    }else if(S1object_mod_6 == 2)
    {}else false
    pop();
}

function S1Object_search7(x, y, w, h, image_file, explanation_text)
{
    const button_range_within_x = mouseX >= x - w / 2 && mouseX < x + w / 2;
    const button_range_within_y = mouseY >= y - h / 2 && mouseY < y + h / 2;
    const quit_range_within_x = mouseX >= width/2 + 220 && width/2 + 250;
    const quit_range_within_y = mouseY >= height/2 - 100 && mouseY < height/2 - 70;

    push();
    if(S1object_mod_7 == 0)
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
                    S1object_mod_7 = 1;
                    pop();

                    S1_Obj += 1;
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
    }else if(S1object_mod_7 == 1)
    {
        push();
        noStroke();
        fill(175, 206, 207, 150);
        rectMode(CENTER);
        rect(width/2, height/2, 500, 200);
            push();
            strokeWeight(1);
            fill(141, 176, 242, 150);
            rect(width/2, height/2 - 85, 500, 30);
            pop();

            push();
            fill('black');
            textAlign(CENTER, TOP);
            text(explanation_text, width/2, height/2 - 50);
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
                    rect(width/2 + 235, height/2 - 85, 30, 30);
                    pop();
                    S1object_mod_7 = 2;
                }else false
            }else{
                push();
                fill(220, 20, 60, 160);
                rect(width/2 + 235, height/2 - 85, 30, 30);
                pop();
            }
        }else{
            push();
            fill(220, 20, 60, 180);
            rect(width/2 + 235, height/2 - 85, 30, 30);
            pop();
        }
        pop();
    }else if(S1object_mod_7 == 2)
    {}else false
    pop();
}
//Stage 2