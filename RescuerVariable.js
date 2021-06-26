// Name       : Jonghyeon Lee
// Assignment : make_a_game
// Course     : CS099
// Spring 2021

//Select Rescuers and Output Text

let S1_RPerson1 = 0;
let S1_RPerson2 = 0;
let S1_RPerson3 = 0;
let S2_RObject1 = 0;
let S2_RObject2 = 0;
let S2_RObject3 = 0;
let S3_RObject1 = 0;
let S3_RObject2 = 0;
let S3_RObject3 = 0;
let S4_RPerson1 = 0;
let S1_Answer_Choice = 0;
let S2_Answer_Choice = 0;
let S3_Answer_Choice = 0;
let S4_Answer_Choice = 0;
let S1_RPerson1_life = 0;
let S1_RPerson2_life = 0;
let S1_RPerson3_life = 0;
let S2_RObject1_life = 0;
let S2_RObject2_life = 0;
let S2_RObject3_life = 0;
let S3_RObject1_life = 0;
let S3_RObject2_life = 0;
let S3_RObject3_life = 0;
let S4_RPerson1_life = 0;

function S1_Rescue1(x, y, w, h, image_file)
{
    const button_range_within_x = mouseX >= x - w / 2 && mouseX < x + w / 2;
    const button_range_within_y = mouseY >= y - h / 2 && mouseY < y + h / 2;
    const save_range_within_x = mouseX >= 230 && mouseX < 330;
    const save_range_within_y = mouseY >= 320 && mouseY < 360;
    const no_range_within_x = mouseX >= 470 && mouseX < 570;
    const no_range_within_y = mouseY >= 320 && mouseY < 360;

    push();
    if(S1_RPerson1 == 0)
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
                    S1_RPerson1 = 1;
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
    }else if(S1_RPerson1 == 1)
    {
        push();
        stroke(0, 139, 139, 150);
        fill(0, 0, 0, 150);
        rectMode(CENTER);
        textSize(16);
        rect(width/2, 250, 450, 250);
            push();
            fill(8, 29, 68, 150);
            rect(width/2, 140, 450, 30);
            pop();
        text("Do you wanna rescue this people?", width/2 - 75, 140);
            push();
            fill('white');
            noStroke();
            textAlign(LEFT, TOP);
            textSize(12);
            text("The girl whom the client identified as the top rescuer.\n\nThe skin is scorched with heat,\nand the eyes are blurred with smoke and fear.\nand the left leg is exposed to something.\nMaybe this girl will live with great aftereffects for the rest of her life.\n\nIf you save this girl and escape as she is, the mission ends here.\n\nAre you going to save this girl?", 190, 165);
            pop();

            push();
            if(save_range_within_x && save_range_within_y)
            {
                if(mouseIsPressed)
                {
                    if(mouseButton === LEFT)
                    {
                        push();
                        noStroke();
                        fill(255, 140, 0, 100);
                        rect(280, 340, 100, 40);
                            push();
                            fill(255, 215, 0);
                            text("Yes", 280, 340);
                            pop();
                        S1_Maps = S1_Result;
                        S1_RPerson1_life = 1;
                        S1_Answer_Choice = 1;
                        pop();
                    }else false
                }else{
                    push();
                    noStroke();
                    fill(255, 140, 0, 130);
                    rect(280, 340, 100, 40);
                        push();
                        fill(255, 215, 0);
                        text("Yes", 280, 340);
                        pop();
                    pop();
                }
            }else{
                push();
                noStroke();
                fill(255, 140, 0, 150);
                rect(280, 340, 100, 40);
                    push();
                    fill(255, 215, 0);
                    text("Yes", 280, 340);
                    pop();
                pop();
            }
            pop();

            push();
            if(no_range_within_x && no_range_within_y)
            {
                if(mouseIsPressed)
                {
                    if(mouseButton === LEFT)
                    {
                        push();
                        noStroke();
                        fill(255, 140, 0, 100);
                        rect(520, 340, 100, 40);
                            push();
                            fill(255, 215, 0);
                            text("No", 520, 340);
                            pop();
                        S1_RPerson1 = 0;
                        pop();
                    }else false
                }else{
                    push();
                    noStroke();
                    fill(255, 140, 0, 130);
                    rect(520, 340, 100, 40);
                        push();
                        fill(255, 215, 0);
                        text("No", 520, 340);
                        pop();
                    pop();
                }
            }else{
                push();
                noStroke();
                fill(255, 140, 0, 150);
                rect(520, 340, 100, 40);
                    push();
                    fill(255, 215, 0);
                    text("No", 520, 340);
                    pop();
                pop();
            }
            pop();
        pop();
    }else false
    pop();
}

function S1_Rescue2(x, y, w, h, image_file)
{
    const button_range_within_x = mouseX >= x - w / 2 && mouseX < x + w / 2;
    const button_range_within_y = mouseY >= y - h / 2 && mouseY < y + h / 2;
    const save_range_within_x = mouseX >= 230 && mouseX < 330;
    const save_range_within_y = mouseY >= 320 && mouseY < 360;
    const no_range_within_x = mouseX >= 470 && mouseX < 570;
    const no_range_within_y = mouseY >= 320 && mouseY < 360;

    push();
    if(S1_RPerson2 == 0)
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
                    S1_RPerson2 = 1;
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
    }else if(S1_RPerson2 == 1)
    {
        push();
        stroke(0, 139, 139, 150);
        fill(0, 0, 0, 150);
        rectMode(CENTER);
        textSize(16);
        rect(width/2, 250, 450, 250);
            push();
            fill(8, 29, 68, 150);
            rect(width/2, 140, 450, 30);
            pop();
        text("Do you wanna rescue this people?", width/2 - 75, 140);
            push();
            fill('white');
            noStroke();
            textAlign(LEFT, TOP);
            textSize(14);
            text("This girl is the daughter of this house.\n\nIn a way, it's the most innocent victim.\n\nI'm stunned, but I don't see any major injuries.\n\nTake this girl out now and she'll live without much aftereffects.\n\nWill you save this girl?", 190, 165);
            pop();

            push();
            if(save_range_within_x && save_range_within_y)
            {
                if(mouseIsPressed)
                {
                    if(mouseButton === LEFT)
                    {
                        push();
                        noStroke();
                        fill(255, 140, 0, 100);
                        rect(280, 340, 100, 40);
                            push();
                            fill(255, 215, 0);
                            text("Yes", 280, 340);
                            pop();
                        S1_Maps = S1_Result;
                        S1_RPerson2_life = 1;
                        pop();
                    }else false
                }else{
                    push();
                    noStroke();
                    fill(255, 140, 0, 130);
                    rect(280, 340, 100, 40);
                        push();
                        fill(255, 215, 0);
                        text("Yes", 280, 340);
                        pop();
                    pop();
                }
            }else{
                push();
                noStroke();
                fill(255, 140, 0, 150);
                rect(280, 340, 100, 40);
                    push();
                    fill(255, 215, 0);
                    text("Yes", 280, 340);
                    pop();
                pop();
            }
            pop();

            push();
            if(no_range_within_x && no_range_within_y)
            {
                if(mouseIsPressed)
                {
                    if(mouseButton === LEFT)
                    {
                        push();
                        noStroke();
                        fill(255, 140, 0, 100);
                        rect(520, 340, 100, 40);
                            push();
                            fill(255, 215, 0);
                            text("No", 520, 340);
                            pop();
                        S1_RPerson2 = 0;
                        pop();
                    }else false
                }else{
                    push();
                    noStroke();
                    fill(255, 140, 0, 130);
                    rect(520, 340, 100, 40);
                        push();
                        fill(255, 215, 0);
                        text("No", 520, 340);
                        pop();
                    pop();
                }
            }else{
                push();
                noStroke();
                fill(255, 140, 0, 150);
                rect(520, 340, 100, 40);
                    push();
                    fill(255, 215, 0);
                    text("No", 520, 340);
                    pop();
                pop();
            }
            pop();
        pop();
    }else false
    pop();
}

function S1_Rescue3(x, y, w, h, image_file)
{
    const button_range_within_x = mouseX >= x - w / 2 && mouseX < x + w / 2;
    const button_range_within_y = mouseY >= y - h / 2 && mouseY < y + h / 2;
    const save_range_within_x = mouseX >= 230 && mouseX < 330;
    const save_range_within_y = mouseY >= 320 && mouseY < 360;
    const no_range_within_x = mouseX >= 470 && mouseX < 570;
    const no_range_within_y = mouseY >= 320 && mouseY < 360;

    push();
    if(S1_RPerson3 == 0)
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
                    S1_RPerson3 = 1;
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
    }else if(S1_RPerson3 == 1)
    {
        push();
        stroke(0, 139, 139, 150);
        fill(0, 0, 0, 150);
        rectMode(CENTER);
        textSize(16);
        rect(width/2, 250, 450, 250);
            push();
            fill(8, 29, 68, 150);
            rect(width/2, 140, 450, 30);
            pop();
        text("Do you wanna rescue this people?", width/2 - 75, 140);
            push();
            fill('white');
            noStroke();
            textAlign(LEFT, TOP);
            textSize(14);
            text("This person is the mother of this house.\n\nThe right arm is lost and burned all over the body,\nmaking it not strange for him to die right away.\n\nI'm sure that's what happened when you were protecting the kids.\nIf we take him out now, we'll save him,\nbut we'll be disabled for the rest of our lives.\nAre you going to save this man?", 190, 165);
            pop();

            push();
            if(save_range_within_x && save_range_within_y)
            {
                if(mouseIsPressed)
                {
                    if(mouseButton === LEFT)
                    {
                        push();
                        noStroke();
                        fill(255, 140, 0, 100);
                        rect(280, 340, 100, 40);
                            push();
                            fill(255, 215, 0);
                            text("Yes", 280, 340);
                            pop();
                        S1_Maps = S1_Result;
                        S1_RPerson3_life = 1;
                        pop();
                    }else false
                }else{
                    push();
                    noStroke();
                    fill(255, 140, 0, 130);
                    rect(280, 340, 100, 40);
                        push();
                        fill(255, 215, 0);
                        text("Yes", 280, 340);
                        pop();
                    pop();
                }
            }else{
                push();
                noStroke();
                fill(255, 140, 0, 150);
                rect(280, 340, 100, 40);
                    push();
                    fill(255, 215, 0);
                    text("Yes", 280, 340);
                    pop();
                pop();
            }
            pop();

            push();
            if(no_range_within_x && no_range_within_y)
            {
                if(mouseIsPressed)
                {
                    if(mouseButton === LEFT)
                    {
                        push();
                        noStroke();
                        fill(255, 140, 0, 100);
                        rect(520, 340, 100, 40);
                            push();
                            fill(255, 215, 0);
                            text("No", 520, 340);
                            pop();
                        S1_RPerson3 = 0;
                        pop();
                    }else false
                }else{
                    push();
                    noStroke();
                    fill(255, 140, 0, 130);
                    rect(520, 340, 100, 40);
                        push();
                        fill(255, 215, 0);
                        text("No", 520, 340);
                        pop();
                    pop();
                }
            }else{
                push();
                noStroke();
                fill(255, 140, 0, 150);
                rect(520, 340, 100, 40);
                    push();
                    fill(255, 215, 0);
                    text("No", 520, 340);
                    pop();
                pop();
            }
            pop();
        pop();
    }else false
    pop();
}

function S2_Rescue1(x, y, w, h, image_file)
{
    const button_range_within_x = mouseX >= x - w / 2 && mouseX < x + w / 2;
    const button_range_within_y = mouseY >= y - h / 2 && mouseY < y + h / 2;
    const save_range_within_x = mouseX >= 230 && mouseX < 330;
    const save_range_within_y = mouseY >= 320 && mouseY < 360;
    const no_range_within_x = mouseX >= 470 && mouseX < 570;
    const no_range_within_y = mouseY >= 320 && mouseY < 360;

    push();
    if(S2_RObject1 == 0)
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
                    S2_RObject1 = 1;
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
    }else if(S2_RObject1 == 1)
    {
        push();
        stroke(0, 139, 139, 150);
        fill(0, 0, 0, 150);
        rectMode(CENTER);
        textSize(16);
        rect(width/2, 250, 450, 250);
            push();
            fill(8, 29, 68, 150);
            rect(width/2, 140, 450, 30);
            pop();
        text("Is this the right product?", width/2 - 75, 140);
            push();
            fill('white');
            noStroke();
            textAlign(LEFT, TOP);
            textSize(15);
            text("The pink box contained precious metals such as jewelry.\n\nThey certainly looked valuable.\n\nAt this rate, I understand that the client made the fuss.\n\nIs this what you're looking for?", 190, 165);
            pop();

            push();
            if(save_range_within_x && save_range_within_y)
            {
                if(mouseIsPressed)
                {
                    if(mouseButton === LEFT)
                    {
                        push();
                        noStroke();
                        fill(255, 140, 0, 100);
                        rect(280, 340, 100, 40);
                            push();
                            fill(255, 215, 0);
                            text("Yes", 280, 340);
                            pop();
                        S2_Maps = S2_Result;
                        S2_RObject1_life = 1;
                        pop();
                    }else false
                }else{
                    push();
                    noStroke();
                    fill(255, 140, 0, 130);
                    rect(280, 340, 100, 40);
                        push();
                        fill(255, 215, 0);
                        text("Yes", 280, 340);
                        pop();
                    pop();
                }
            }else{
                push();
                noStroke();
                fill(255, 140, 0, 150);
                rect(280, 340, 100, 40);
                    push();
                    fill(255, 215, 0);
                    text("Yes", 280, 340);
                    pop();
                pop();
            }
            pop();

            push();
            if(no_range_within_x && no_range_within_y)
            {
                if(mouseIsPressed)
                {
                    if(mouseButton === LEFT)
                    {
                        push();
                        noStroke();
                        fill(255, 140, 0, 100);
                        rect(520, 340, 100, 40);
                            push();
                            fill(255, 215, 0);
                            text("No", 520, 340);
                            pop();
                        S2_RObject1 = 0;
                        pop();
                    }else false
                }else{
                    push();
                    noStroke();
                    fill(255, 140, 0, 130);
                    rect(520, 340, 100, 40);
                        push();
                        fill(255, 215, 0);
                        text("No", 520, 340);
                        pop();
                    pop();
                }
            }else{
                push();
                noStroke();
                fill(255, 140, 0, 150);
                rect(520, 340, 100, 40);
                    push();
                    fill(255, 215, 0);
                    text("No", 520, 340);
                    pop();
                pop();
            }
            pop();
        pop();
    }else false
    pop();
}

function S2_Rescue2(x, y, w, h, image_file)
{
    const button_range_within_x = mouseX >= x - w / 2 && mouseX < x + w / 2;
    const button_range_within_y = mouseY >= y - h / 2 && mouseY < y + h / 2;
    const save_range_within_x = mouseX >= 230 && mouseX < 330;
    const save_range_within_y = mouseY >= 320 && mouseY < 360;
    const no_range_within_x = mouseX >= 470 && mouseX < 570;
    const no_range_within_y = mouseY >= 320 && mouseY < 360;

    push();
    if(S2_RObject2 == 0)
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
                    S2_RObject2 = 1;
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
    }else if(S2_RObject2 == 1)
    {
        push();
        stroke(0, 139, 139, 150);
        fill(0, 0, 0, 150);
        rectMode(CENTER);
        textSize(16);
        rect(width/2, 250, 450, 250);
            push();
            fill(8, 29, 68, 150);
            rect(width/2, 140, 450, 30);
            pop();
        text("Is this the right product?", width/2 - 75, 140);
            push();
            fill('white');
            noStroke();
            textAlign(LEFT, TOP);
            textSize(17);
            text("What was in the green box was an envelope.\n\nThe envelope is tightly sealed,\nso I don't think I can open it.\n\nIs this what you're looking for?", 190, 165);
            pop();

            push();
            if(save_range_within_x && save_range_within_y)
            {
                if(mouseIsPressed)
                {
                    if(mouseButton === LEFT)
                    {
                        push();
                        noStroke();
                        fill(255, 140, 0, 100);
                        rect(280, 340, 100, 40);
                            push();
                            fill(255, 215, 0);
                            text("Yes", 280, 340);
                            pop();
                        S2_Maps = S2_Result;
                        S2_RObject2_life = 1;
                        S2_Answer_Choice = 1;
                        pop();
                    }else false
                }else{
                    push();
                    noStroke();
                    fill(255, 140, 0, 130);
                    rect(280, 340, 100, 40);
                        push();
                        fill(255, 215, 0);
                        text("Yes", 280, 340);
                        pop();
                    pop();
                }
            }else{
                push();
                noStroke();
                fill(255, 140, 0, 150);
                rect(280, 340, 100, 40);
                    push();
                    fill(255, 215, 0);
                    text("Yes", 280, 340);
                    pop();
                pop();
            }
            pop();

            push();
            if(no_range_within_x && no_range_within_y)
            {
                if(mouseIsPressed)
                {
                    if(mouseButton === LEFT)
                    {
                        push();
                        noStroke();
                        fill(255, 140, 0, 100);
                        rect(520, 340, 100, 40);
                            push();
                            fill(255, 215, 0);
                            text("No", 520, 340);
                            pop();
                        S2_RObject2 = 0;
                        pop();
                    }else false
                }else{
                    push();
                    noStroke();
                    fill(255, 140, 0, 130);
                    rect(520, 340, 100, 40);
                        push();
                        fill(255, 215, 0);
                        text("No", 520, 340);
                        pop();
                    pop();
                }
            }else{
                push();
                noStroke();
                fill(255, 140, 0, 150);
                rect(520, 340, 100, 40);
                    push();
                    fill(255, 215, 0);
                    text("No", 520, 340);
                    pop();
                pop();
            }
            pop();
        pop();
    }else false
    pop();
}

function S2_Rescue3(x, y, w, h, image_file)
{
    const button_range_within_x = mouseX >= x - w / 2 && mouseX < x + w / 2;
    const button_range_within_y = mouseY >= y - h / 2 && mouseY < y + h / 2;
    const save_range_within_x = mouseX >= 230 && mouseX < 330;
    const save_range_within_y = mouseY >= 320 && mouseY < 360;
    const no_range_within_x = mouseX >= 470 && mouseX < 570;
    const no_range_within_y = mouseY >= 320 && mouseY < 360;

    push();
    if(S2_RObject3 == 0)
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
                    S2_RObject3 = 1;
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
    }else if(S2_RObject3 == 1)
    {
        push();
        stroke(0, 139, 139, 150);
        fill(0, 0, 0, 150);
        rectMode(CENTER);
        textSize(16);
        rect(width/2, 250, 450, 250);
            push();
            fill(8, 29, 68, 150);
            rect(width/2, 140, 450, 30);
            pop();
        text("Is this the right product?", width/2 - 75, 140);
            push();
            fill('white');
            noStroke();
            textAlign(LEFT, TOP);
            textSize(17);
            text("What was in the blue box was a bank account.\n\nInside were transaction details and balances.\n\nIs this what you're looking for?", 190, 165);
            pop();

            push();
            if(save_range_within_x && save_range_within_y)
            {
                if(mouseIsPressed)
                {
                    if(mouseButton === LEFT)
                    {
                        push();
                        noStroke();
                        fill(255, 140, 0, 100);
                        rect(280, 340, 100, 40);
                            push();
                            fill(255, 215, 0);
                            text("Yes", 280, 340);
                            pop();
                        S2_Maps = S2_Result;
                        S2_RObject3_life = 1;
                        pop();
                    }else false
                }else{
                    push();
                    noStroke();
                    fill(255, 140, 0, 130);
                    rect(280, 340, 100, 40);
                        push();
                        fill(255, 215, 0);
                        text("Yes", 280, 340);
                        pop();
                    pop();
                }
            }else{
                push();
                noStroke();
                fill(255, 140, 0, 150);
                rect(280, 340, 100, 40);
                    push();
                    fill(255, 215, 0);
                    text("Yes", 280, 340);
                    pop();
                pop();
            }
            pop();

            push();
            if(no_range_within_x && no_range_within_y)
            {
                if(mouseIsPressed)
                {
                    if(mouseButton === LEFT)
                    {
                        push();
                        noStroke();
                        fill(255, 140, 0, 100);
                        rect(520, 340, 100, 40);
                            push();
                            fill(255, 215, 0);
                            text("No", 520, 340);
                            pop();
                        S2_RObject3 = 0;
                        pop();
                    }else false
                }else{
                    push();
                    noStroke();
                    fill(255, 140, 0, 130);
                    rect(520, 340, 100, 40);
                        push();
                        fill(255, 215, 0);
                        text("No", 520, 340);
                        pop();
                    pop();
                }
            }else{
                push();
                noStroke();
                fill(255, 140, 0, 150);
                rect(520, 340, 100, 40);
                    push();
                    fill(255, 215, 0);
                    text("No", 520, 340);
                    pop();
                pop();
            }
            pop();
        pop();
    }else false
    pop();
}

function S3_Rescue1(x, y, w, h, image_file)
{
    const button_range_within_x = mouseX >= x - w / 2 && mouseX < x + w / 2;
    const button_range_within_y = mouseY >= y - h / 2 && mouseY < y + h / 2;
    const save_range_within_x = mouseX >= 230 && mouseX < 330;
    const save_range_within_y = mouseY >= 320 && mouseY < 360;
    const no_range_within_x = mouseX >= 470 && mouseX < 570;
    const no_range_within_y = mouseY >= 320 && mouseY < 360;

    push();
    if(S3_RObject1 == 0)
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
                    S3_RObject1 = 1;
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
    }else if(S3_RObject1 == 1)
    {
        push();
        stroke(0, 139, 139, 150);
        fill(0, 0, 0, 150);
        rectMode(CENTER);
        textSize(16);
        rect(width/2, 250, 450, 250);
            push();
            fill(8, 29, 68, 150);
            rect(width/2, 140, 450, 30);
            pop();
        text("Is this the right product?", width/2 - 75, 140);
            push();
            fill('white');
            noStroke();
            textAlign(LEFT, TOP);
            textSize(15);
            text("Based on the shape of the bones,\nthe first body is believed to be of an adult male.\n\nThe bone was so damaged\nthat I could see that it was cut by something.\n\nIs this the right target?", 190, 165);
            pop();

            push();
            if(save_range_within_x && save_range_within_y)
            {
                if(mouseIsPressed)
                {
                    if(mouseButton === LEFT)
                    {
                        push();
                        noStroke();
                        fill(255, 140, 0, 100);
                        rect(280, 340, 100, 40);
                            push();
                            fill(255, 215, 0);
                            text("Yes", 280, 340);
                            pop();
                        S3_Maps = S3_Result;
                        S3_RObject1_life = 1;
                        pop();
                    }else false
                }else{
                    push();
                    noStroke();
                    fill(255, 140, 0, 130);
                    rect(280, 340, 100, 40);
                        push();
                        fill(255, 215, 0);
                        text("Yes", 280, 340);
                        pop();
                    pop();
                }
            }else{
                push();
                noStroke();
                fill(255, 140, 0, 150);
                rect(280, 340, 100, 40);
                    push();
                    fill(255, 215, 0);
                    text("Yes", 280, 340);
                    pop();
                pop();
            }
            pop();

            push();
            if(no_range_within_x && no_range_within_y)
            {
                if(mouseIsPressed)
                {
                    if(mouseButton === LEFT)
                    {
                        push();
                        noStroke();
                        fill(255, 140, 0, 100);
                        rect(520, 340, 100, 40);
                            push();
                            fill(255, 215, 0);
                            text("No", 520, 340);
                            pop();
                        S3_RObject1 = 0;
                        pop();
                    }else false
                }else{
                    push();
                    noStroke();
                    fill(255, 140, 0, 130);
                    rect(520, 340, 100, 40);
                        push();
                        fill(255, 215, 0);
                        text("No", 520, 340);
                        pop();
                    pop();
                }
            }else{
                push();
                noStroke();
                fill(255, 140, 0, 150);
                rect(520, 340, 100, 40);
                    push();
                    fill(255, 215, 0);
                    text("No", 520, 340);
                    pop();
                pop();
            }
            pop();
        pop();
    }else false
    pop();
}

function S3_Rescue2(x, y, w, h, image_file)
{
    const button_range_within_x = mouseX >= x - w / 2 && mouseX < x + w / 2;
    const button_range_within_y = mouseY >= y - h / 2 && mouseY < y + h / 2;
    const save_range_within_x = mouseX >= 230 && mouseX < 330;
    const save_range_within_y = mouseY >= 320 && mouseY < 360;
    const no_range_within_x = mouseX >= 470 && mouseX < 570;
    const no_range_within_y = mouseY >= 320 && mouseY < 360;

    push();
    if(S3_RObject2 == 0)
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
                    S3_RObject2 = 1;
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
    }else if(S3_RObject2 == 1)
    {
        push();
        stroke(0, 139, 139, 150);
        fill(0, 0, 0, 150);
        rectMode(CENTER);
        textSize(16);
        rect(width/2, 250, 450, 250);
            push();
            fill(8, 29, 68, 150);
            rect(width/2, 140, 450, 30);
            pop();
        text("Is this the right product?", width/2 - 75, 140);
            push();
            fill('white');
            noStroke();
            textAlign(LEFT, TOP);
            textSize(17);
            text("Based on the shape of the bones,\nthe second body is presumed to belong to a girl.\n\nIt was placed as dry as a mummy.\n\nIs this the right target?", 190, 165);
            pop();

            push();
            if(save_range_within_x && save_range_within_y)
            {
                if(mouseIsPressed)
                {
                    if(mouseButton === LEFT)
                    {
                        push();
                        noStroke();
                        fill(255, 140, 0, 100);
                        rect(280, 340, 100, 40);
                            push();
                            fill(255, 215, 0);
                            text("Yes", 280, 340);
                            pop();
                        S3_Maps = S3_Result;
                        S3_RObject2_life = 1;
                        S3_Answer_Choice = 1;
                        pop();
                    }else false
                }else{
                    push();
                    noStroke();
                    fill(255, 140, 0, 130);
                    rect(280, 340, 100, 40);
                        push();
                        fill(255, 215, 0);
                        text("Yes", 280, 340);
                        pop();
                    pop();
                }
            }else{
                push();
                noStroke();
                fill(255, 140, 0, 150);
                rect(280, 340, 100, 40);
                    push();
                    fill(255, 215, 0);
                    text("Yes", 280, 340);
                    pop();
                pop();
            }
            pop();

            push();
            if(no_range_within_x && no_range_within_y)
            {
                if(mouseIsPressed)
                {
                    if(mouseButton === LEFT)
                    {
                        push();
                        noStroke();
                        fill(255, 140, 0, 100);
                        rect(520, 340, 100, 40);
                            push();
                            fill(255, 215, 0);
                            text("No", 520, 340);
                            pop();
                        S3_RObject2 = 0;
                        pop();
                    }else false
                }else{
                    push();
                    noStroke();
                    fill(255, 140, 0, 130);
                    rect(520, 340, 100, 40);
                        push();
                        fill(255, 215, 0);
                        text("No", 520, 340);
                        pop();
                    pop();
                }
            }else{
                push();
                noStroke();
                fill(255, 140, 0, 150);
                rect(520, 340, 100, 40);
                    push();
                    fill(255, 215, 0);
                    text("No", 520, 340);
                    pop();
                pop();
            }
            pop();
        pop();
    }else false
    pop();
}

function S3_Rescue3(x, y, w, h, image_file)
{
    const button_range_within_x = mouseX >= x - w / 2 && mouseX < x + w / 2;
    const button_range_within_y = mouseY >= y - h / 2 && mouseY < y + h / 2;
    const save_range_within_x = mouseX >= 230 && mouseX < 330;
    const save_range_within_y = mouseY >= 320 && mouseY < 360;
    const no_range_within_x = mouseX >= 470 && mouseX < 570;
    const no_range_within_y = mouseY >= 320 && mouseY < 360;

    push();
    if(S3_RObject3 == 0)
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
                    S3_RObject3 = 1;
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
    }else if(S3_RObject3 == 1)
    {
        push();
        stroke(0, 139, 139, 150);
        fill(0, 0, 0, 150);
        rectMode(CENTER);
        textSize(16);
        rect(width/2, 250, 450, 250);
            push();
            fill(8, 29, 68, 150);
            rect(width/2, 140, 450, 30);
            pop();
        text("Is this the right product?", width/2 - 75, 140);
            push();
            fill('white');
            noStroke();
            textAlign(LEFT, TOP);
            textSize(17);
            text("Based on the shape of the bone,\nthe third body is believed to belong to a boy.\n\nThe limbs were broken down and\nrolled around separately.\n\nIs this the right target?", 190, 165);
            pop();

            push();
            if(save_range_within_x && save_range_within_y)
            {
                if(mouseIsPressed)
                {
                    if(mouseButton === LEFT)
                    {
                        push();
                        noStroke();
                        fill(255, 140, 0, 100);
                        rect(280, 340, 100, 40);
                            push();
                            fill(255, 215, 0);
                            text("Yes", 280, 340);
                            pop();
                        S3_Maps = S3_Result;
                        S3_RObject3_life = 1;
                        pop();
                    }else false
                }else{
                    push();
                    noStroke();
                    fill(255, 140, 0, 130);
                    rect(280, 340, 100, 40);
                        push();
                        fill(255, 215, 0);
                        text("Yes", 280, 340);
                        pop();
                    pop();
                }
            }else{
                push();
                noStroke();
                fill(255, 140, 0, 150);
                rect(280, 340, 100, 40);
                    push();
                    fill(255, 215, 0);
                    text("Yes", 280, 340);
                    pop();
                pop();
            }
            pop();

            push();
            if(no_range_within_x && no_range_within_y)
            {
                if(mouseIsPressed)
                {
                    if(mouseButton === LEFT)
                    {
                        push();
                        noStroke();
                        fill(255, 140, 0, 100);
                        rect(520, 340, 100, 40);
                            push();
                            fill(255, 215, 0);
                            text("No", 520, 340);
                            pop();
                        S3_RObject3 = 0;
                        pop();
                    }else false
                }else{
                    push();
                    noStroke();
                    fill(255, 140, 0, 130);
                    rect(520, 340, 100, 40);
                        push();
                        fill(255, 215, 0);
                        text("No", 520, 340);
                        pop();
                    pop();
                }
            }else{
                push();
                noStroke();
                fill(255, 140, 0, 150);
                rect(520, 340, 100, 40);
                    push();
                    fill(255, 215, 0);
                    text("No", 520, 340);
                    pop();
                pop();
            }
            pop();
        pop();
    }else false
    pop();
}

function S4_Rescue1(x, y, w, h, image_file)
{
    const button_range_within_x = mouseX >= x - w / 2 && mouseX < x + w / 2;
    const button_range_within_y = mouseY >= y - h / 2 && mouseY < y + h / 2;
    const save_range_within_x = mouseX >= 230 && mouseX < 330;
    const save_range_within_y = mouseY >= 320 && mouseY < 360;
    const no_range_within_x = mouseX >= 470 && mouseX < 570;
    const no_range_within_y = mouseY >= 320 && mouseY < 360;

    push();
    if(S4_RPerson1 == 0)
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
                    S4_RPerson1 = 1;
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
    }else if(S4_RPerson1 == 1)
    {
        push();
        stroke(0, 139, 139, 150);
        fill(0, 0, 0, 150);
        rectMode(CENTER);
        textSize(16);
        rect(width/2, 250, 450, 250);
            push();
            fill(8, 29, 68, 150);
            rect(width/2, 140, 450, 30);
            pop();
        text("Do you wanna rescue this thing?", width/2 - 75, 140);
            push();
            fill('white');
            noStroke();
            textAlign(LEFT, TOP);
            textSize(12);
            text("???: Come on, there's no such thing as a hostage,\nI've already killed it, so save me.\n\n\n\nShould I save this?", 190, 165);
            pop();

            push();
            if(save_range_within_x && save_range_within_y)
            {
                if(mouseIsPressed)
                {
                    if(mouseButton === LEFT)
                    {
                        push();
                        noStroke();
                        fill(255, 140, 0, 100);
                        rect(280, 340, 100, 40);
                            push();
                            fill(255, 215, 0);
                            text("Yes", 280, 340);
                            pop();
                        S4_Maps = S4_Result;
                        S4_RPerson1_life = 1;
                        S4_Answer_Choice = 1;
                        pop();
                    }else false
                }else{
                    push();
                    noStroke();
                    fill(255, 140, 0, 130);
                    rect(280, 340, 100, 40);
                        push();
                        fill(255, 215, 0);
                        text("Yes", 280, 340);
                        pop();
                    pop();
                }
            }else{
                push();
                noStroke();
                fill(255, 140, 0, 150);
                rect(280, 340, 100, 40);
                    push();
                    fill(255, 215, 0);
                    text("Yes", 280, 340);
                    pop();
                pop();
            }
            pop();

            push();
            if(no_range_within_x && no_range_within_y)
            {
                if(mouseIsPressed)
                {
                    if(mouseButton === LEFT)
                    {
                        push();
                        noStroke();
                        fill(255, 140, 0, 100);
                        rect(520, 340, 100, 40);
                            push();
                            fill(255, 215, 0);
                            text("No", 520, 340);
                            pop();
                        S4_RPerson1 = 0;
                        pop();
                    }else false
                }else{
                    push();
                    noStroke();
                    fill(255, 140, 0, 130);
                    rect(520, 340, 100, 40);
                        push();
                        fill(255, 215, 0);
                        text("No", 520, 340);
                        pop();
                    pop();
                }
            }else{
                push();
                noStroke();
                fill(255, 140, 0, 150);
                rect(520, 340, 100, 40);
                    push();
                    fill(255, 215, 0);
                    text("No", 520, 340);
                    pop();
                pop();
            }
            pop();
        pop();
    }else false
    pop();
}