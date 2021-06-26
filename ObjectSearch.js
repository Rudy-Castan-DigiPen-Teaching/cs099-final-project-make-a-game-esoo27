// Name       : Jonghyeon Lee
// Assignment : make_a_game
// Course     : CS099
// Spring 2021

//Object selection and text output

let S1_Obj = 0;
let S2_Obj = 0;
let S3_Obj = 0;
let S4_Obj = 0;
let S2_Obj_Special = 0;
let S3_Obj_Special = 0;
let S1object_mod_1 = 0; //PictureFrame //1F Room5
let S1object_mod_2 = 0; //Footprint //1F Room6
let S1object_mod_3 = 0; //ignition point //1F Room7
let S1object_mod_4 = 0; //Divorce //2F Room3
let S1object_mod_5 = 0; //Picture //2F Room5
let S1object_mod_6 = 0; //ignition point2 //2F Room6
let S1object_mod_7 = 0; //Knife //2F Room7
let S2object_mod_1 = 0; //Footprint1 //Room5
let S2object_mod_2 = 0; //Box1 //Room7
let S2object_mod_3 = 0; //Building documents //Room9
let S2object_mod_4 = 0; //PictureFrame //Room11
let S2object_mod_5 = 0; //Box2 //Room13
let S2object_mod_6 = 0; //Bowl //Room17
let S2object_mod_7 = 0; //Footprint2 //Room18
let S3object_mod_1 = 0; //Girl //Room3
let S3object_mod_2 = 0; //Diary //Room4
let S3object_mod_3 = 0; //Ghost //Room16
let S3object_mod_4 = 0; //Noise //Room18
let S4object_mod_1 = 0; //Footprint //Room2
let S4object_mod_2 = 0; //Knife //Room5
let S4object_mod_3 = 0; //Box //Room10
let S4object_mod_4 = 0; //Diary //Room16
let S4object_mod_5 = 0; //Noise //Room19
let S2Object_mod_Special = 0; //Ring //Room8
let S3Object_mod_Special = 0; //Something //Room14

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
function S2Object_search1(x, y, w, h, image_file, explanation_text)
{
    const button_range_within_x = mouseX >= x - w / 2 && mouseX < x + w / 2;
    const button_range_within_y = mouseY >= y - h / 2 && mouseY < y + h / 2;
    const quit_range_within_x = mouseX >= width/2 + 220 && width/2 + 250;
    const quit_range_within_y = mouseY >= height/2 - 100 && mouseY < height/2 - 70;

    push();
    if(S2object_mod_1 == 0)
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
                    S2object_mod_1 = 1;
                    pop();

                    S2_Obj += 1;
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
    }else if(S2object_mod_1 == 1)
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
                    S2object_mod_1 = 2;
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
    }else if(S2object_mod_1 == 2)
    {}else false
    pop();
}

function S2Object_search2(x, y, w, h, image_file, explanation_text)
{
    const button_range_within_x = mouseX >= x - w / 2 && mouseX < x + w / 2;
    const button_range_within_y = mouseY >= y - h / 2 && mouseY < y + h / 2;
    const quit_range_within_x = mouseX >= width/2 + 220 && width/2 + 250;
    const quit_range_within_y = mouseY >= height/2 - 100 && mouseY < height/2 - 70;

    push();
    if(S2object_mod_2 == 0)
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
                    S2object_mod_2 = 1;
                    pop();

                    S2_Obj += 1;
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
    }else if(S2object_mod_2 == 1)
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
                    S2object_mod_2 = 2;
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
    }else if(S2object_mod_2 == 2)
    {}else false
    pop();
}

function S2Object_search3(x, y, w, h, image_file, explanation_text)
{
    const button_range_within_x = mouseX >= x - w / 2 && mouseX < x + w / 2;
    const button_range_within_y = mouseY >= y - h / 2 && mouseY < y + h / 2;
    const quit_range_within_x = mouseX >= width/2 + 220 && width/2 + 250;
    const quit_range_within_y = mouseY >= height/2 - 100 && mouseY < height/2 - 70;

    push();
    if(S2object_mod_3 == 0)
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
                    S2object_mod_3 = 1;
                    pop();

                    S2_Obj += 1;
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
    }else if(S2object_mod_3 == 1)
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
                    S2object_mod_3 = 2;
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
    }else if(S2object_mod_3 == 2)
    {}else false
    pop();
}

function S2Object_search4(x, y, w, h, image_file, explanation_text)
{
    const button_range_within_x = mouseX >= x - w / 2 && mouseX < x + w / 2;
    const button_range_within_y = mouseY >= y - h / 2 && mouseY < y + h / 2;
    const quit_range_within_x = mouseX >= width/2 + 220 && width/2 + 250;
    const quit_range_within_y = mouseY >= height/2 - 100 && mouseY < height/2 - 70;

    push();
    if(S2object_mod_4 == 0)
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
                    S2object_mod_4 = 1;
                    pop();

                    S2_Obj += 1;
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
    }else if(S2object_mod_4 == 1)
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
                    S2object_mod_4 = 2;
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
    }else if(S2object_mod_4 == 2)
    {}else false
    pop();
}

function S2Object_search5(x, y, w, h, image_file, explanation_text)
{
    const button_range_within_x = mouseX >= x - w / 2 && mouseX < x + w / 2;
    const button_range_within_y = mouseY >= y - h / 2 && mouseY < y + h / 2;
    const quit_range_within_x = mouseX >= width/2 + 220 && width/2 + 250;
    const quit_range_within_y = mouseY >= height/2 - 100 && mouseY < height/2 - 70;

    push();
    if(S2object_mod_5 == 0)
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
                    S2object_mod_5 = 1;
                    pop();

                    S2_Obj += 1;
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
    }else if(S2object_mod_5 == 1)
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
                    S2object_mod_5 = 2;
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
    }else if(S2object_mod_5 == 2)
    {}else false
    pop();
}

function S2Object_search6(x, y, w, h, image_file, explanation_text)
{
    const button_range_within_x = mouseX >= x - w / 2 && mouseX < x + w / 2;
    const button_range_within_y = mouseY >= y - h / 2 && mouseY < y + h / 2;
    const quit_range_within_x = mouseX >= width/2 + 220 && width/2 + 250;
    const quit_range_within_y = mouseY >= height/2 - 100 && mouseY < height/2 - 70;

    push();
    if(S2object_mod_6 == 0)
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
                    S2object_mod_6 = 1;
                    pop();

                    S2_Obj += 1;
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
    }else if(S2object_mod_6 == 1)
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
                    S2object_mod_6 = 2;
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
    }else if(S2object_mod_6 == 2)
    {}else false
    pop();
}

function S2Object_search7(x, y, w, h, image_file, explanation_text)
{
    const button_range_within_x = mouseX >= x - w / 2 && mouseX < x + w / 2;
    const button_range_within_y = mouseY >= y - h / 2 && mouseY < y + h / 2;
    const quit_range_within_x = mouseX >= width/2 + 220 && width/2 + 250;
    const quit_range_within_y = mouseY >= height/2 - 100 && mouseY < height/2 - 70;

    push();
    if(S2object_mod_7 == 0)
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
                    S2object_mod_7 = 1;
                    pop();

                    S2_Obj += 1;
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
    }else if(S2object_mod_7 == 1)
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
                    S2object_mod_7 = 2;
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
    }else if(S2object_mod_7 == 2)
    {}else false
    pop();
}

function S2Object_search_Special(x, y, w, h, image_file, explanation_text)
{
    const button_range_within_x = mouseX >= x - w / 2 && mouseX < x + w / 2;
    const button_range_within_y = mouseY >= y - h / 2 && mouseY < y + h / 2;
    const quit_range_within_x = mouseX >= width/2 + 220 && width/2 + 250;
    const quit_range_within_y = mouseY >= height/2 - 100 && mouseY < height/2 - 70;

    push();
    if(S2Object_mod_Special == 0)
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
                    S2Object_mod_Special = 1;
                    pop();

                    S2_Obj += 1;
                    S2_Obj_Special += 1;
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
    }else if(S2Object_mod_Special == 1)
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
                    S2Object_mod_Special = 2;
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
    }else if(S2Object_mod_Special == 2)
    {}else false
    pop();
}
//Stage 3
function S3Object_search1(x, y, w, h, image_file, explanation_text)
{
    const button_range_within_x = mouseX >= x - w / 2 && mouseX < x + w / 2;
    const button_range_within_y = mouseY >= y - h / 2 && mouseY < y + h / 2;
    const quit_range_within_x = mouseX >= width/2 + 220 && width/2 + 250;
    const quit_range_within_y = mouseY >= height/2 - 100 && mouseY < height/2 - 70;

    push();
    if(S3object_mod_1 == 0)
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
                    S3object_mod_1 = 1;
                    pop();

                    S3_Obj += 1;
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
    }else if(S3object_mod_1 == 1)
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
                    S3object_mod_1 = 2;
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
    }else if(S3object_mod_1 == 2)
    {}else false
    pop();
}

function S3Object_search2(x, y, w, h, image_file, explanation_text)
{
    const button_range_within_x = mouseX >= x - w / 2 && mouseX < x + w / 2;
    const button_range_within_y = mouseY >= y - h / 2 && mouseY < y + h / 2;
    const quit_range_within_x = mouseX >= width/2 + 220 && width/2 + 250;
    const quit_range_within_y = mouseY >= height/2 - 100 && mouseY < height/2 - 70;

    push();
    if(S3object_mod_2 == 0)
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
                    S3object_mod_2 = 1;
                    pop();

                    S3_Obj += 1;
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
    }else if(S3object_mod_2 == 1)
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
                    S3object_mod_2 = 2;
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
    }else if(S3object_mod_2 == 2)
    {}else false
    pop();
}

function S3Object_search3(x, y, w, h, image_file, explanation_text)
{
    const button_range_within_x = mouseX >= x - w / 2 && mouseX < x + w / 2;
    const button_range_within_y = mouseY >= y - h / 2 && mouseY < y + h / 2;
    const quit_range_within_x = mouseX >= width/2 + 220 && width/2 + 250;
    const quit_range_within_y = mouseY >= height/2 - 100 && mouseY < height/2 - 70;

    push();
    if(S3object_mod_3 == 0)
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
                    S3object_mod_3 = 1;
                    pop();

                    S3_Obj += 1;
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
    }else if(S3object_mod_3 == 1)
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
                    S3object_mod_3 = 2;
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
    }else if(S3object_mod_3 == 2)
    {}else false
    pop();
}

function S3Object_search4(x, y, w, h, image_file, explanation_text)
{
    const button_range_within_x = mouseX >= x - w / 2 && mouseX < x + w / 2;
    const button_range_within_y = mouseY >= y - h / 2 && mouseY < y + h / 2;
    const quit_range_within_x = mouseX >= width/2 + 220 && width/2 + 250;
    const quit_range_within_y = mouseY >= height/2 - 100 && mouseY < height/2 - 70;

    push();
    if(S3object_mod_4 == 0)
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
                    S3object_mod_4 = 1;
                    pop();

                    S3_Obj += 1;
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
    }else if(S3object_mod_4 == 1)
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
                    S3object_mod_4 = 2;
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
    }else if(S3object_mod_4 == 2)
    {}else false
    pop();
}

function S3Object_search_Special(x, y, w, h, image_file, explanation_text)
{
    const button_range_within_x = mouseX >= x - w / 2 && mouseX < x + w / 2;
    const button_range_within_y = mouseY >= y - h / 2 && mouseY < y + h / 2;
    const quit_range_within_x = mouseX >= width/2 + 220 && width/2 + 250;
    const quit_range_within_y = mouseY >= height/2 - 100 && mouseY < height/2 - 70;

    push();
    if(S3Object_mod_Special == 0)
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
                    S3Object_mod_Special = 1;
                    pop();

                    S3_Obj += 1;
                    S3_Obj_Special += 1;
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
    }else if(S3Object_mod_Special == 1)
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
                    S3Object_mod_Special = 2;
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
    }else if(S3Object_mod_Special == 2)
    {}else false
    pop();
}
//Stage 4
function S4Object_search1(x, y, w, h, image_file, explanation_text)
{
    const button_range_within_x = mouseX >= x - w / 2 && mouseX < x + w / 2;
    const button_range_within_y = mouseY >= y - h / 2 && mouseY < y + h / 2;
    const quit_range_within_x = mouseX >= width/2 + 220 && width/2 + 250;
    const quit_range_within_y = mouseY >= height/2 - 100 && mouseY < height/2 - 70;

    push();
    if(S4object_mod_1 == 0)
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
                    S4object_mod_1 = 1;
                    pop();

                    S4_Obj += 1;
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
    }else if(S4object_mod_1 == 1)
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
                    S4object_mod_1 = 2;
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
    }else if(S4object_mod_1 == 2)
    {}else false
    pop();
}

function S4Object_search2(x, y, w, h, image_file, explanation_text)
{
    const button_range_within_x = mouseX >= x - w / 2 && mouseX < x + w / 2;
    const button_range_within_y = mouseY >= y - h / 2 && mouseY < y + h / 2;
    const quit_range_within_x = mouseX >= width/2 + 220 && width/2 + 250;
    const quit_range_within_y = mouseY >= height/2 - 100 && mouseY < height/2 - 70;

    push();
    if(S4object_mod_2 == 0)
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
                    S4object_mod_2 = 1;
                    pop();

                    S4_Obj += 1;
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
    }else if(S4object_mod_2 == 1)
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
                    S4object_mod_2 = 2;
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
    }else if(S4object_mod_2 == 2)
    {}else false
    pop();
}

function S4Object_search3(x, y, w, h, image_file, explanation_text)
{
    const button_range_within_x = mouseX >= x - w / 2 && mouseX < x + w / 2;
    const button_range_within_y = mouseY >= y - h / 2 && mouseY < y + h / 2;
    const quit_range_within_x = mouseX >= width/2 + 220 && width/2 + 250;
    const quit_range_within_y = mouseY >= height/2 - 100 && mouseY < height/2 - 70;

    push();
    if(S4object_mod_3 == 0)
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
                    S4object_mod_3 = 1;
                    pop();

                    S4_Obj += 1;
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
    }else if(S4object_mod_3 == 1)
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
                    S4object_mod_3 = 2;
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
    }else if(S4object_mod_3 == 2)
    {}else false
    pop();
}

function S4Object_search4(x, y, w, h, image_file, explanation_text)
{
    const button_range_within_x = mouseX >= x - w / 2 && mouseX < x + w / 2;
    const button_range_within_y = mouseY >= y - h / 2 && mouseY < y + h / 2;
    const quit_range_within_x = mouseX >= width/2 + 220 && width/2 + 250;
    const quit_range_within_y = mouseY >= height/2 - 100 && mouseY < height/2 - 70;

    push();
    if(S4object_mod_4 == 0)
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
                    S4object_mod_4 = 1;
                    pop();

                    S4_Obj += 1;
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
    }else if(S4object_mod_4 == 1)
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
                    S4object_mod_4 = 2;
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
    }else if(S4object_mod_4 == 2)
    {}else false
    pop();
}

function S4Object_search5(x, y, w, h, image_file, explanation_text)
{
    const button_range_within_x = mouseX >= x - w / 2 && mouseX < x + w / 2;
    const button_range_within_y = mouseY >= y - h / 2 && mouseY < y + h / 2;
    const quit_range_within_x = mouseX >= width/2 + 220 && width/2 + 250;
    const quit_range_within_y = mouseY >= height/2 - 100 && mouseY < height/2 - 70;

    push();
    if(S4object_mod_5 == 0)
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
                    S4object_mod_5 = 1;
                    pop();

                    S4_Obj += 1;
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
    }else if(S4object_mod_5 == 1)
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
                    S4object_mod_5 = 2;
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
    }else if(S4object_mod_5 == 2)
    {}else false
    pop();
}