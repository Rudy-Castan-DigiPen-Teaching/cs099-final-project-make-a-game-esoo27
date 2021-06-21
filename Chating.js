// Name       : Jonghyeon Lee
// Assignment : make_a_game
// Course     : CS099
// Spring 2021

let chatbox_mod = 1;

function Chating(x, y, w, h, person, message)
{
    const button_range_within_x = mouseX >= x - w / 2 && mouseX < x + w / 2;
    const button_range_within_y = mouseY >= y - h / 2 && mouseY < y + h / 2;
    const quit_range_within_x = mouseX >= x + w*9 - 30 && mouseX < x + w*9;
    const quit_range_within_y = mouseY >= y - h*5/7 - 15 && mouseY < y - h*5/7 + 15;

    push();
    if(chatbox_mod == 0)
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
                    image(ChatBox, x, y, w, h);
                    chatbox_mod = 1;
                    pop();
                }else false
            }else{
                push();
                tint(255, 200);
                imageMode(CENTER);
                image(ChatBox, x, y, w, h);
                pop();
            }
        }else{
            push();
            tint(255, 220);
            imageMode(CENTER);
            image(ChatBox, x, y, w, h);
            pop();
        }
        pop();
    }else if(chatbox_mod == 1)
    {
        push();
        noStroke();
        fill(230, 255, 247, 150);
        rect(x + w*4, y + h, 500, 200);
            push();
            strokeWeight(1);
            fill(164, 192, 244, 150);
            rect(x + w*4, y - h/4*3, 500, 30);
                push();
                stroke('black');
                fill('black');
                textSize(18);
                text(person, x, y - h/4*3 + 2);
                pop();
            pop();

            push();
            fill('black');
            textAlign(LEFT, TOP);
            textSize(12);
            text(message, x - w + 5, y - h/4*3 + 20);
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
                    rect(x + w*9 - 15, y - h*5/7, 30, 30);
                    pop();
                    chatbox_mod = 0;
                }else false
            }else{
                push();
                fill(220, 20, 60, 160);
                rect(x + w*9 - 15, y - h*5/7, 30, 30);
                pop();
            }
        }else{
            push();
            fill(220, 20, 60, 180);
            rect(x + w*9 - 15, y - h*5/7, 30, 30);
            pop();
        }
        pop();
    }
    pop();
}