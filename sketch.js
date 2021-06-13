// Name       : Jonghyeon Lee
// Assignment : make_a_game
// Course     : CS099
// Spring 2021

let Hand_twice;

function setup()
{
    createCanvas( 800, 600 );
    let frame_set = 30;
    frameRate(frame_set);

    Hand_twice = new Hand(305, 450);
}

function draw()
{
    background( 100 );

    switch(ScenesNumbers)
    {
        case 0:
        {
            push();
                push();
                textAlign(CENTER, CENTER);
                textSize(30);
                text("Leaking Life", 400, 150);
                pop();

            ButtonsT1(400, 400, 200, 80, 'GAME START', 2);
            ButtonsT1(400, 490, 180, 50, 'HOW TO PLAY', 1);
            pop();

            break;
        }
        case 1:
        {
            text("HOW TO PLAY", 400, 300);
            break;
        }
        case 2:
        {
            push();
            tint(255, 200);
            image(NightCity, 0, 0, width, height);
            ButtonsT1(400, 550, 180, 50, 'Next', 3);

            text("Screen 1", 400, 300);
            text();
            pop();

            break;
        }
        case 3:
        {
            push();
            tint(255, 200);
            image(FireDisaster, 0, 0, width, height);
            ButtonsT1(400, 480, 180, 50, 'Go', 4);

            text("Screen 2", 400, 300);
            pop();

            break;
        }
        case 4:
        {
            push();
            Hand_twice.draw();
            Hand_twice.update();
            switch(S1_Maps)
            {
                case 17:
                {
                    text("S1_Out", 200, 300);
                    ButtonsS1(400, 550, 180, 50, 'Enter', 0);
                    break;
                }
                case 0:
                {
                    text("S1_1F_Map1", 200, 300);
                    S1Forward_Button(400, 300, 30, 30, '-time 10', 1);
                    break;
                }
                case 1:
                {
                    text("S1_1F_Map2", 200, 300);
                    Hammer_Button(400, 300, 30, 30, '-time 20', 2);
                    S1Backward_Button(400, 550, 30, 30, '-time 10', 0);
                    break;
                }
                case 2:
                {
                    text("S1_1F_Map3", 200, 300);
                    S1Forward_Button(400, 300, 30, 30, '-time 10', 3);
                    S1Backward_Button(400, 550, 30, 30, '-time 10', 1);
                    break;
                }
                case 3:
                {
                    text("S1_1F_Map4", 200, 300);
                    S1Forward_Button(400, 300, 30, 30, '-time 10', 4);
                    S1Backward_Button(400, 550, 30, 30, '-time 10', 2);
                    break;
                }
                case 4:
                {
                    text("S1_1F_Map5", 200, 300);
                    S1Forward_Button(400, 300, 30, 30, '-time 10', 5);
                    S1Backward_Button(400, 550, 30, 30, '-time 10', 3);
                    S1Right_Button(700, 400, 30, 30, '-time 10', 7);
                    break;
                }
                case 5:
                {
                    text("S1_1F_Map6", 200, 300);
                    Hammer_Button(400, 300, 30, 30, '-time 20', 6);
                    S1Backward_Button(400, 550, 30, 30, '-time 10', 4);
                    break;
                }
                case 6:
                {
                    text("S1_1F_Map7", 200, 300);
                    S1Backward_Button(400, 550, 30, 30, '-time 10', 5);
                    break;
                }
                case 7:
                {
                    text("S1_1F_Map8", 200, 300);
                    S1Forward_Button(400, 300, 30, 30, '-time 10', 8);
                    S1Left_Button(100, 400, 30, 30, '-time 10', 4);
                    break;
                }
                case 8:
                {
                    text("S1_1F_Stairs", 200, 300);
                    S1Forward_Button(400, 300, 30, 30, '-time 10', 9);
                    break;
                }
                case 9:
                {
                    text("S1_2F_Stairs", 200, 300);
                    S1Backward_Button(400, 550, 30, 30, '-time 10', 8);
                    S1Left_Button(100, 400, 30, 30, '-time 10', 10);
                    break;
                }
                case 10:
                {
                    text("S1_2F_Map1", 200, 300);
                    S1Forward_Button(400, 300, 30, 30, '-time 10', 13);
                    S1Backward_Button(400, 550, 30, 30, '-time 10', 15);
                    S1Left_Button(100, 400, 30, 30, '-time 10', 11);
                    S1Right_Button(700, 400, 30, 30, '-time 10', 9);
                    break;
                }
                case 11:
                {
                    text("S1_2F_Map2", 200, 300);
                    S1Backward_Button(400, 550, 30, 30, '-time 10', 12);
                    S1Right_Button(700, 400, 30, 30, '-time 10', 10);
                    break;
                }
                case 12:
                {
                    text("S1_2F_Map3", 200, 300);
                    S1Forward_Button(400, 300, 30, 30, '-time 10', 11);
                    break;
                }
                case 13:
                {
                    text("S1_2F_Map4", 200, 300);
                    Hammer_Button(400, 300, 30, 30, '-time 20', 14);
                    S1Backward_Button(400, 550, 30, 30, '-time 10', 10);
                    break;
                }
                case 14:
                {
                    text("S1_2F_Map5", 200, 300);
                    S1Backward_Button(400, 550, 30, 30, '-time 10', 13);
                    break;
                }
                case 15:
                {
                    text("S1_2F_Map6", 200, 300);
                    S1Forward_Button(400, 300, 30, 30, '-time 10', 10);
                    S1Backward_Button(400, 550, 30, 30, '-time 10', 16);
                    break;
                }
                case 16:
                {
                    text("S1_2F_Map7", 200, 300);
                    S1Forward_Button(400, 300, 30, 30, '-time 10', 15);
                    break;
                }

            }
            pop();

            push();
            Limit_setS1(750, 50);
            pop();
            break;
        }
        case 5:
        {
            push();
            pop();
            break;
        }
        case 6:
        {
            push();
            pop();
            break;
        }
        case 7:
        {
            break;
        }
    }
}