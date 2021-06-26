// Name       : Jonghyeon Lee
// Assignment : make_a_game
// Course     : CS099
// Spring 2021

//Normal Button and Escape, Hammer Button

function ButtonsT1(x, y, w, h, textT1, move_page)
{
    let button_colorT1 = 255;
    const button_range_within_x = mouseX >= x - w / 2 && mouseX < x + w / 2;
    const button_range_within_y = mouseY >= y - h / 2 && mouseY < y + h / 2;
    strokeCap(ROUND);
    strokeJoin(ROUND);
    strokeWeight(3);
    textSize(18);
    stroke('black');
    fill(button_colorT1);
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
                button_colorT1 = 220;
                fill(button_colorT1);
                rect(x, y, w, h);
                text(textT1, x, y);
                pop();

                ScenesNumbers = move_page;
            }else false
            
        }else{
            push();
            button_colorT1 = 220;
            fill(button_colorT1);
            rect(x, y, w, h);
            text(textT1, x, y);
            pop();
        }
    }else{
        push();
        button_colorT1 = 255;
        fill(button_colorT1);
        rect(x, y, w, h);
        text(textT1, x, y);
        pop();
    }
    pop();
}

function ButtonsS1(x, y, w, h, textS1, move_page)
{
    let button_colorS1 = 255;
    const button_range_within_x = mouseX >= x - w / 2 && mouseX < x + w / 2;
    const button_range_within_y = mouseY >= y - h / 2 && mouseY < y + h / 2;
    strokeCap(ROUND);
    strokeJoin(ROUND);
    strokeWeight(3);
    textSize(18);
    stroke('black');
    fill(button_colorS1);
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
                button_colorS1 = 220;
                fill(button_colorS1);
                rect(x, y, w, h);
                text(textS1, x, y);
                pop();

                S1_Maps = move_page;
            }else false
            
        }else{
            push();
            button_colorS1 = 220;
            fill(button_colorS1);
            rect(x, y, w, h);
            text(textS1, x, y);
            pop();
        }
    }else{
        push();
        button_colorS1 = 255;
        fill(button_colorS1);
        rect(x, y, w, h);
        text(textS1, x, y);
        pop();
    }
    pop();
}

function ButtonsS2(x, y, w, h, textS2, move_page)
{
    let button_colorS2 = 255;
    const button_range_within_x = mouseX >= x - w / 2 && mouseX < x + w / 2;
    const button_range_within_y = mouseY >= y - h / 2 && mouseY < y + h / 2;
    strokeCap(ROUND);
    strokeJoin(ROUND);
    strokeWeight(3);
    textSize(18);
    stroke('black');
    fill(button_colorS2);
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
                button_colorS2 = 220;
                fill(button_colorS2);
                rect(x, y, w, h);
                text(textS2, x, y);
                pop();

                S2_Maps = move_page;
            }else false
            
        }else{
            push();
            button_colorS2 = 220;
            fill(button_colorS2);
            rect(x, y, w, h);
            text(textS2, x, y);
            pop();
        }
    }else{
        push();
        button_colorS2 = 255;
        fill(button_colorS2);
        rect(x, y, w, h);
        text(textS2, x, y);
        pop();
    }
    pop();
}

function ButtonsS3(x, y, w, h, textS3, move_page)
{
    let button_colorS3 = 255;
    const button_range_within_x = mouseX >= x - w / 2 && mouseX < x + w / 2;
    const button_range_within_y = mouseY >= y - h / 2 && mouseY < y + h / 2;
    strokeCap(ROUND);
    strokeJoin(ROUND);
    strokeWeight(3);
    textSize(18);
    stroke('black');
    fill(button_colorS3);
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
                button_colorS3 = 220;
                fill(button_colorS3);
                rect(x, y, w, h);
                text(textS3, x, y);
                pop();

                S3_Maps = move_page;
            }else false
            
        }else{
            push();
            button_colorS3 = 220;
            fill(button_colorS3);
            rect(x, y, w, h);
            text(textS3, x, y);
            pop();
        }
    }else{
        push();
        button_colorS3 = 255;
        fill(button_colorS3);
        rect(x, y, w, h);
        text(textS3, x, y);
        pop();
    }
    pop();
}

function ButtonsS4(x, y, w, h, textS4, move_page)
{
    let button_colorS4 = 255;
    const button_range_within_x = mouseX >= x - w / 2 && mouseX < x + w / 2;
    const button_range_within_y = mouseY >= y - h / 2 && mouseY < y + h / 2;
    strokeCap(ROUND);
    strokeJoin(ROUND);
    strokeWeight(3);
    textSize(18);
    stroke('black');
    fill(button_colorS4);
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
                button_colorS4 = 220;
                fill(button_colorS4);
                rect(x, y, w, h);
                text(textS4, x, y);
                pop();

                S4_Maps = move_page;
            }else false
            
        }else{
            push();
            button_colorS4 = 220;
            fill(button_colorS4);
            rect(x, y, w, h);
            text(textS4, x, y);
            pop();
        }
    }else{
        push();
        button_colorS4 = 255;
        fill(button_colorS4);
        rect(x, y, w, h);
        text(textS4, x, y);
        pop();
    }
    pop();
}

function Escape_ButtonS1(x, y, w, h, textEsc_losetime)
{
    let button_colorEsc1 = 255;
    let button_colorEsc2 = 255;
    let button_colorEsc3 = 255;
    const button_range_within_x = mouseX >= x - w / 2 && mouseX < x + w / 2;
    const button_range_within_y = mouseY >= y - h / 2 && mouseY < y + h / 2;
    strokeCap(ROUND);
    strokeJoin(ROUND);
    strokeWeight(3);
    textSize(18);
    stroke('black');
    fill(button_colorEsc1, button_colorEsc2, button_colorEsc3);
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
                button_colorEsc1 = 153;
                button_colorEsc2 = 0;
                button_colorEsc3 = 0;
                fill(button_colorEsc1, button_colorEsc2, button_colorEsc3);
                rect(x, y, w, h);
                text('ESCAPE', x, y);
                    push();
                    textSize(10);
                    text(textEsc_losetime, x, y - 20);
                    pop();
                pop();

                S1_Maps = 17;
                Time_limitS1 -= 50
            }else false
        }else{
            push();
            button_colorEsc1 = 204;
            button_colorEsc2 = 0;
            button_colorEsc3 = 0;
            fill(button_colorEsc1, button_colorEsc2, button_colorEsc3);
            rect(x, y, w, h);
            text('ESCAPE', x, y);
                push();
                textSize(10);
                text(textEsc_losetime, x, y - 20);
                pop();
            pop();
        }
    }else{
        push();
        button_colorEsc1 = 255;
        button_colorEsc2 = 0;
        button_colorEsc3 = 0;
        fill(button_colorEsc1, button_colorEsc2, button_colorEsc3);
        rect(x, y, w, h);
        text('ESCAPE', x, y);
            push();
            textSize(10);
            text(textEsc_losetime, x, y - 20);
            pop();
        pop();
    }
    pop();
}

function Escape_ButtonS2(x, y, w, h, textEsc_losetime)
{
    let button_colorEsc1 = 255;
    let button_colorEsc2 = 255;
    let button_colorEsc3 = 255;
    const button_range_within_x = mouseX >= x - w / 2 && mouseX < x + w / 2;
    const button_range_within_y = mouseY >= y - h / 2 && mouseY < y + h / 2;
    strokeCap(ROUND);
    strokeJoin(ROUND);
    strokeWeight(3);
    textSize(18);
    stroke('black');
    fill(button_colorEsc1, button_colorEsc2, button_colorEsc3);
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
                button_colorEsc1 = 153;
                button_colorEsc2 = 0;
                button_colorEsc3 = 0;
                fill(button_colorEsc1, button_colorEsc2, button_colorEsc3);
                rect(x, y, w, h);
                text('ESCAPE', x, y);
                    push();
                    textSize(10);
                    text(textEsc_losetime, x, y - 20);
                    pop();
                pop();

                S2_Maps = 20;
                Time_limitS2 -= 50
            }else false
        }else{
            push();
            button_colorEsc1 = 204;
            button_colorEsc2 = 0;
            button_colorEsc3 = 0;
            fill(button_colorEsc1, button_colorEsc2, button_colorEsc3);
            rect(x, y, w, h);
            text('ESCAPE', x, y);
                push();
                textSize(10);
                text(textEsc_losetime, x, y - 20);
                pop();
            pop();
        }
    }else{
        push();
        button_colorEsc1 = 255;
        button_colorEsc2 = 0;
        button_colorEsc3 = 0;
        fill(button_colorEsc1, button_colorEsc2, button_colorEsc3);
        rect(x, y, w, h);
        text('ESCAPE', x, y);
            push();
            textSize(10);
            text(textEsc_losetime, x, y - 20);
            pop();
        pop();
    }
    pop();
}

function Escape_ButtonS3(x, y, w, h, textEsc_losetime)
{
    let button_colorEsc1 = 255;
    let button_colorEsc2 = 255;
    let button_colorEsc3 = 255;
    const button_range_within_x = mouseX >= x - w / 2 && mouseX < x + w / 2;
    const button_range_within_y = mouseY >= y - h / 2 && mouseY < y + h / 2;
    strokeCap(ROUND);
    strokeJoin(ROUND);
    strokeWeight(3);
    textSize(18);
    stroke('black');
    fill(button_colorEsc1, button_colorEsc2, button_colorEsc3);
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
                button_colorEsc1 = 153;
                button_colorEsc2 = 0;
                button_colorEsc3 = 0;
                fill(button_colorEsc1, button_colorEsc2, button_colorEsc3);
                rect(x, y, w, h);
                text('ESCAPE', x, y);
                    push();
                    textSize(10);
                    text(textEsc_losetime, x, y - 20);
                    pop();
                pop();

                S3_Maps = 20;
                Time_limitS3 -= 50
            }else false
        }else{
            push();
            button_colorEsc1 = 204;
            button_colorEsc2 = 0;
            button_colorEsc3 = 0;
            fill(button_colorEsc1, button_colorEsc2, button_colorEsc3);
            rect(x, y, w, h);
            text('ESCAPE', x, y);
                push();
                textSize(10);
                text(textEsc_losetime, x, y - 20);
                pop();
            pop();
        }
    }else{
        push();
        button_colorEsc1 = 255;
        button_colorEsc2 = 0;
        button_colorEsc3 = 0;
        fill(button_colorEsc1, button_colorEsc2, button_colorEsc3);
        rect(x, y, w, h);
        text('ESCAPE', x, y);
            push();
            textSize(10);
            text(textEsc_losetime, x, y - 20);
            pop();
        pop();
    }
    pop();
}

function Escape_ButtonS4(x, y, w, h, textEsc_losetime)
{
    let button_colorEsc1 = 255;
    let button_colorEsc2 = 255;
    let button_colorEsc3 = 255;
    const button_range_within_x = mouseX >= x - w / 2 && mouseX < x + w / 2;
    const button_range_within_y = mouseY >= y - h / 2 && mouseY < y + h / 2;
    strokeCap(ROUND);
    strokeJoin(ROUND);
    strokeWeight(3);
    textSize(18);
    stroke('black');
    fill(button_colorEsc1, button_colorEsc2, button_colorEsc3);
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
                button_colorEsc1 = 153;
                button_colorEsc2 = 0;
                button_colorEsc3 = 0;
                fill(button_colorEsc1, button_colorEsc2, button_colorEsc3);
                rect(x, y, w, h);
                text('ESCAPE', x, y);
                    push();
                    textSize(10);
                    text(textEsc_losetime, x, y - 20);
                    pop();
                pop();

                S4_Maps = 20;
                Time_limitS4 -= 50
            }else false
        }else{
            push();
            button_colorEsc1 = 204;
            button_colorEsc2 = 0;
            button_colorEsc3 = 0;
            fill(button_colorEsc1, button_colorEsc2, button_colorEsc3);
            rect(x, y, w, h);
            text('ESCAPE', x, y);
                push();
                textSize(10);
                text(textEsc_losetime, x, y - 20);
                pop();
            pop();
        }
    }else{
        push();
        button_colorEsc1 = 255;
        button_colorEsc2 = 0;
        button_colorEsc3 = 0;
        fill(button_colorEsc1, button_colorEsc2, button_colorEsc3);
        rect(x, y, w, h);
        text('ESCAPE', x, y);
            push();
            textSize(10);
            text(textEsc_losetime, x, y - 20);
            pop();
        pop();
    }
    pop();
}

function Hammer_ButtonS1(x, y, w, h, HButton_losetime_mark, move_page)
{
    let button_colorHam1 = 255;
    let button_colorHam2 = 255;
    let button_colorHam3 = 255;
    let button_alphaHam = 150;
    let Ham_Mode = 0;
    const button_range_within_x = mouseX >= x - w / 2 && mouseX < x + w / 2;
    const button_range_within_y = mouseY >= y - h / 2 && mouseY < y + h / 2;
    strokeCap(ROUND);
    strokeJoin(ROUND);
    strokeWeight(2);
    textSize(12);
    stroke('white');
    fill(button_colorHam1, button_colorHam2, button_colorHam3, button_alphaHam);
    rectMode(CENTER);
    textAlign(CENTER, CENTER);

    push();
    if(Ham_Mode == 0)
    {
        if(button_range_within_x && button_range_within_y)
        {
            if(mouseIsPressed)
            {
                if(mouseButton === LEFT)
                {
                    push();
                    button_colorHam1 = 255;
                    button_colorHam2 = 163;
                    button_colorHam3 = 102;
                    button_alphaHam = 150;
                    fill(button_colorHam1, button_colorHam2, button_colorHam3, button_alphaHam);
                    rect(x, y, w, h);
                    text('HAMMER\nBreakthrough', x, y);

                        push();
                        textSize(10);
                        text(HButton_losetime_mark, x, y - 20);
                        pop();
                    pop();

                    S1_Maps = move_page;
                    Ham_Mode = 1;
                    Time_limitS1 -= 20;
                }else false
            }else{
                push();
                button_colorHam1 = 255;
                button_colorHam2 = 163;
                button_colorHam3 = 102;
                button_alphaHam = 150;
                fill(button_colorHam1, button_colorHam2, button_colorHam3, button_alphaHam);
                rect(x, y, w, h);
                text('HAMMER\nBreakthrough', x, y);

                push();
                textSize(10);
                text(HButton_losetime_mark, x, y - 20);
                pop();
                pop();
            }
        }else{
            push();
            button_colorHam1 = 255;
            button_colorHam2 = 102;
            button_colorHam3 = 0;
            button_alphaHam = 150;
            fill(button_colorHam1, button_colorHam2, button_colorHam3, button_alphaHam);
            rect(x, y, w, h);
            text('HAMMER\nBreakthrough', x, y);

            push();
            textSize(10);
            text(HButton_losetime_mark, x, y - 20);
            pop();
            pop();
        }
    }else if(Ham_Mode == 1)
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
                    text(HButton_losetime_mark, x + 20, y);
                    pop();
                    pop();
                
                    S1_Maps = move_page;
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
                text(HButton_losetime_mark, x + 20, y);
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
            text(HButton_losetime_mark, x + 20, y);
            pop();
            pop();
        }
        pop();
    }
    pop();
}

function Hammer_ButtonS2(x, y, w, h, HButton_losetime_mark, move_page)
{
    let button_colorHam1 = 255;
    let button_colorHam2 = 255;
    let button_colorHam3 = 255;
    let button_alphaHam = 150;
    let Ham_Mode = 0;
    const button_range_within_x = mouseX >= x - w / 2 && mouseX < x + w / 2;
    const button_range_within_y = mouseY >= y - h / 2 && mouseY < y + h / 2;
    strokeCap(ROUND);
    strokeJoin(ROUND);
    strokeWeight(2);
    textSize(12);
    stroke('white');
    fill(button_colorHam1, button_colorHam2, button_colorHam3, button_alphaHam);
    rectMode(CENTER);
    textAlign(CENTER, CENTER);

    push();
    if(Ham_Mode == 0)
    {
        if(button_range_within_x && button_range_within_y)
        {
            if(mouseIsPressed)
            {
                if(mouseButton === LEFT)
                {
                    push();
                    button_colorHam1 = 255;
                    button_colorHam2 = 163;
                    button_colorHam3 = 102;
                    button_alphaHam = 150;
                    fill(button_colorHam1, button_colorHam2, button_colorHam3, button_alphaHam);
                    rect(x, y, w, h);
                    text('HAMMER\nBreakthrough', x, y);

                        push();
                        textSize(10);
                        text(HButton_losetime_mark, x, y - 20);
                        pop();
                    pop();

                    S2_Maps = move_page;
                    Ham_Mode = 1;
                    Time_limitS2 -= 100;
                }else false
            }else{
                push();
                button_colorHam1 = 255;
                button_colorHam2 = 163;
                button_colorHam3 = 102;
                button_alphaHam = 150;
                fill(button_colorHam1, button_colorHam2, button_colorHam3, button_alphaHam);
                rect(x, y, w, h);
                text('HAMMER\nBreakthrough', x, y);

                push();
                textSize(10);
                text(HButton_losetime_mark, x, y - 20);
                pop();
                pop();
            }
        }else{
            push();
            button_colorHam1 = 255;
            button_colorHam2 = 102;
            button_colorHam3 = 0;
            button_alphaHam = 150;
            fill(button_colorHam1, button_colorHam2, button_colorHam3, button_alphaHam);
            rect(x, y, w, h);
            text('HAMMER\nBreakthrough', x, y);

            push();
            textSize(10);
            text(HButton_losetime_mark, x, y - 20);
            pop();
            pop();
        }
    }else if(Ham_Mode == 1)
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
                    text(HButton_losetime_mark, x + 20, y);
                    pop();
                    pop();
                
                    S2_Maps = move_page;
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
                text(HButton_losetime_mark, x + 20, y);
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
            text(HButton_losetime_mark, x + 20, y);
            pop();
            pop();
        }
        pop();
    }
    pop();
}

function Hammer_ButtonS3(x, y, w, h, HButton_losetime_mark, move_page)
{
    let button_colorHam1 = 255;
    let button_colorHam2 = 255;
    let button_colorHam3 = 255;
    let button_alphaHam = 150;
    let Ham_Mode = 0;
    const button_range_within_x = mouseX >= x - w / 2 && mouseX < x + w / 2;
    const button_range_within_y = mouseY >= y - h / 2 && mouseY < y + h / 2;
    strokeCap(ROUND);
    strokeJoin(ROUND);
    strokeWeight(2);
    textSize(12);
    stroke('white');
    fill(button_colorHam1, button_colorHam2, button_colorHam3, button_alphaHam);
    rectMode(CENTER);
    textAlign(CENTER, CENTER);

    push();
    if(Ham_Mode == 0)
    {
        if(button_range_within_x && button_range_within_y)
        {
            if(mouseIsPressed)
            {
                if(mouseButton === LEFT)
                {
                    push();
                    button_colorHam1 = 255;
                    button_colorHam2 = 163;
                    button_colorHam3 = 102;
                    button_alphaHam = 150;
                    fill(button_colorHam1, button_colorHam2, button_colorHam3, button_alphaHam);
                    rect(x, y, w, h);
                    text('HAMMER\nBreakthrough', x, y);

                        push();
                        textSize(10);
                        text(HButton_losetime_mark, x, y - 20);
                        pop();
                    pop();

                    S3_Maps = move_page;
                    Ham_Mode = 1;
                    Time_limitS3 -= 100;
                }else false
            }else{
                push();
                button_colorHam1 = 255;
                button_colorHam2 = 163;
                button_colorHam3 = 102;
                button_alphaHam = 150;
                fill(button_colorHam1, button_colorHam2, button_colorHam3, button_alphaHam);
                rect(x, y, w, h);
                text('HAMMER\nBreakthrough', x, y);

                push();
                textSize(10);
                text(HButton_losetime_mark, x, y - 20);
                pop();
                pop();
            }
        }else{
            push();
            button_colorHam1 = 255;
            button_colorHam2 = 102;
            button_colorHam3 = 0;
            button_alphaHam = 150;
            fill(button_colorHam1, button_colorHam2, button_colorHam3, button_alphaHam);
            rect(x, y, w, h);
            text('HAMMER\nBreakthrough', x, y);

            push();
            textSize(10);
            text(HButton_losetime_mark, x, y - 20);
            pop();
            pop();
        }
    }else if(Ham_Mode == 1)
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
                    text(HButton_losetime_mark, x + 20, y);
                    pop();
                    pop();
                
                    S3_Maps = move_page;
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
                text(HButton_losetime_mark, x + 20, y);
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
            text(HButton_losetime_mark, x + 20, y);
            pop();
            pop();
        }
        pop();
    }
    pop();
}

function Hammer_ButtonS4(x, y, w, h, HButton_losetime_mark, move_page)
{
    let button_colorHam1 = 255;
    let button_colorHam2 = 255;
    let button_colorHam3 = 255;
    let button_alphaHam = 150;
    let Ham_Mode = 0;
    const button_range_within_x = mouseX >= x - w / 2 && mouseX < x + w / 2;
    const button_range_within_y = mouseY >= y - h / 2 && mouseY < y + h / 2;
    strokeCap(ROUND);
    strokeJoin(ROUND);
    strokeWeight(2);
    textSize(12);
    stroke('white');
    fill(button_colorHam1, button_colorHam2, button_colorHam3, button_alphaHam);
    rectMode(CENTER);
    textAlign(CENTER, CENTER);

    push();
    if(Ham_Mode == 0)
    {
        if(button_range_within_x && button_range_within_y)
        {
            if(mouseIsPressed)
            {
                if(mouseButton === LEFT)
                {
                    push();
                    button_colorHam1 = 255;
                    button_colorHam2 = 163;
                    button_colorHam3 = 102;
                    button_alphaHam = 150;
                    fill(button_colorHam1, button_colorHam2, button_colorHam3, button_alphaHam);
                    rect(x, y, w, h);
                    text('HAMMER\nBreakthrough', x, y);

                        push();
                        textSize(10);
                        text(HButton_losetime_mark, x, y - 20);
                        pop();
                    pop();

                    S4_Maps = move_page;
                    Ham_Mode = 1;
                    Time_limitS4 -= 100;
                }else false
            }else{
                push();
                button_colorHam1 = 255;
                button_colorHam2 = 163;
                button_colorHam3 = 102;
                button_alphaHam = 150;
                fill(button_colorHam1, button_colorHam2, button_colorHam3, button_alphaHam);
                rect(x, y, w, h);
                text('HAMMER\nBreakthrough', x, y);

                push();
                textSize(10);
                text(HButton_losetime_mark, x, y - 20);
                pop();
                pop();
            }
        }else{
            push();
            button_colorHam1 = 255;
            button_colorHam2 = 102;
            button_colorHam3 = 0;
            button_alphaHam = 150;
            fill(button_colorHam1, button_colorHam2, button_colorHam3, button_alphaHam);
            rect(x, y, w, h);
            text('HAMMER\nBreakthrough', x, y);

            push();
            textSize(10);
            text(HButton_losetime_mark, x, y - 20);
            pop();
            pop();
        }
    }else if(Ham_Mode == 1)
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
                    text(HButton_losetime_mark, x + 20, y);
                    pop();
                    pop();
                
                    S4_Maps = move_page;
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
                text(HButton_losetime_mark, x + 20, y);
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
            text(HButton_losetime_mark, x + 20, y);
            pop();
            pop();
        }
        pop();
    }
    pop();
}