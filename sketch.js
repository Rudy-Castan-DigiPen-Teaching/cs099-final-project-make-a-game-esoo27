// Name       : Jonghyeon Lee
// Assignment : make_a_game
// Course     : CS099
// Spring 2021

let Hand_twice;
let explosion = []
const Particle_Number = 10;

function setup()
{
    createCanvas( 800, 600 );
    let frame_set = 60;
    frameRate(frame_set);

    Hand_twice = new Hand(305, 450);

    for(let i = 0; i < Particle_Number; ++i)
    {
        explosion.push(new particle(width / 2, height / 2));
    }
}

function draw()
{
    background( 100 );

    for(let particle of explosion)
    {
        particle.update();
        particle.draw();
    }

    for(let i = explosion.length - 1; i >= 0; --i)
    {
        let particle = explosion[i];

        if(particle.position.x > width || particle.position.x < 0 ||
            particle.position.y > height || particle.position.y < 0)
        {
            explosion.splice(i, 1);
        }
    }

    switch(ScenesNumbers)
    {
        case 0: //Main Menu
        {
            push();
                push();
                textAlign(CENTER, CENTER);
                textSize(30);
                text("Leaking Life", 400, 150);
                pop();

            ButtonsT1(400, 400, 200, 80, 'GAME START', 2);
            ButtonsT1(400, 490, 180, 50, 'HOW TO PLAY', 1);
                push();
                textSize(10);
                text(round(mouseX),mouseX+10,mouseY-10);
                text(round(mouseY),mouseX+20,mouseY);
                pop();
            pop();

            break;
        }
        case 1: //How To Play
        {
            push();
            text("HOW TO PLAY", 400, 300);
            pop();
            break;
        }
        case 2: //Intro
        {
            push();
            tint(255, 200);
            image(NightCity, 0, 0, width, height);
            ButtonsT1(400, 550, 180, 50, 'Next', 3);
                push();
                textAlign(LEFT, TOP);
                text("Unlike the hopeful fantasies of the past, such as the near future and\n‘entry into space exploration’ the world did not meet much change.\n\nAmbiguously developed technology and a relatively immature human\npersonality created synergy, leading to a rapid increase in crime rates.\nAs a result, the state became unable to handle all kinds of accidents\nand approved private solutions.\n\nUpon approval, organizations operating in the dark crawled out to the sun.\nOrganizations prioritize client referral and receive remuneration after settlement.\nThe client range is acceptable from individuals to state agencies.\n\nOf course, society's perception of us is not good.\nIn some cases, people engage in theft or robbery during their duties.\nThat is why we are often perceived and used as mere consumables.", 50, 100);
                pop();
            pop();

            break;
        }
        case 3: //Burning Intro
        {
            push();
            tint(255, 200);
            image(FireDisaster, 0, 0, width, height);
            ButtonsT1(400, 480, 180, 50, 'Go', 4);
                push();
                textAlign(LEFT, TOP);
                text("The mission I was commissioned to do this time is to rescue the rescuer from the house\nwhere this fire broke out.\n\nThe client is the owner of the house, and the client's house is right around here,\nso it seems that they frequently come and go with the house.\n\nThe top priority is the homeowner's daughter, who seems to have visited the house at\nthe time of the accident.\n\nAnyway, I enter this scene from now on and start my mission.", 50, 100);
                pop();
            pop();

            break;
        }
        case 4: //Burning
        {
            push();
            switch(S1_Maps)
            {
                case 17:
                {
                    image(BurningHouseView, 0, 0, width, height);
                    ButtonsS1(400, 550, 180, 50, 'Enter', 0);
                    break;
                }
                case 0:
                {
                    image(BurningHouse3, 0, 0, width, height);
                    S1Forward_Button(450, 350, 30, 30, "-time 10", 1);
                    Chating(100, 100, 50, 50, "Mr.O", "I'm your new operator. I'll explain quickly because We don't have time.\n\nAs a result of scanning the building, the time limit for a safe range is 300seconds.\n\nWe can save only one person from here due to time-like circumstances.\n\nMost actions take 'time', so be careful.");
                    Escape_ButtonS1(50, 500, 65, 100, "(-time 50)");
                    break;
                }
                case 1:
                {
                    image(BurningHouse2, 0, 0, width, height);
                    Hammer_ButtonS1(400, 300, 30, 30, "-time 20", 2);
                    S1Backward_Button(400, 550, 30, 30, "-time 10", 0);
                    Chating(100, 100, 50, 50, "Mr.O", "The wall in front of you is a wall that doesn't interfere with breaking\nthrough with a hammer.\n\nPlease be careful not to touch the other wall.");
                    Escape_ButtonS1(50, 500, 65, 100, "(-time 50)");
                    break;
                }
                case 2:
                {
                    image(BurningHouse3, 0, 0, width, height);
                    S1Forward_Button(400, 400, 30, 30, "-time 10", 3);
                    S1Backward_Button(450, 550, 30, 30, "-time 10", 1);
                    Escape_ButtonS1(50, 500, 65, 100, "(-time 50)");
                    break;
                }
                case 3:
                {
                    image(BurningHouse1, 0, 0, width, height);
                    S1Forward_Button(200, 400, 30, 30, "-time 10", 4);
                    S1Backward_Button(400, 550, 30, 30, "-time 10", 2);
                    Chating(100, 100, 50, 50, "Mr.O", "Frankly, you, a veteran, may not need me.\n\nBut I'm assigned to the form, so please understand.\n\nIt's supposed to be four people entering together.");
                    Escape_ButtonS1(50, 500, 65, 100, "(-time 50)");
                    break;
                }
                case 4:
                {
                    image(BurningHouse3, 0, 0, width, height);
                    S1Forward_Button(400, 250, 30, 30, "-time 10", 5);
                    S1Backward_Button(450, 550, 30, 30, "-time 10", 3);
                    S1Right_Button(700, 400, 30, 30, "-time 10", 7);
                    Escape_ButtonS1(50, 500, 65, 100, "(-time 50)");
                    S1Object_search1(300, 400, 25, 25, PictureFrame, "Family Picture\n\nI think it was a harmonious family.");
                    break;
                }
                case 5:
                {
                    image(BurningHouse2, 0, 0, width, height);
                    Hammer_ButtonS1(400, 300, 30, 30, "-time 20", 6);
                    S1Backward_Button(400, 550, 30, 30, "-time 10", 4);
                    Escape_ButtonS1(50, 500, 65, 100, "(-time 50)");
                    S1Object_search2(300, 500, 50, 50, FootPrint, "Foot Print\n\nFootprints of a burly adult male.\n\nThe stride is wide and strong.\nI think it was quite a passionate state.");
                    break;
                }
                case 6:
                {
                    image(BurningHouse4, 0, 0, width, height);
                    S1Backward_Button(450, 550, 30, 30, "-time 10", 5);
                    Escape_ButtonS1(50, 500, 65, 100, "(-time 50)");
                    S1Object_search3(350, 500, 50, 50, IgnitionPoint, "Ignition Point\n\nI think this is the ignition point.\n\nI think the stove is covered with oil.");
                    break;
                }
                case 7:
                {
                    image(BurningHouse1, 0, 0, width, height);
                    S1Forward_Button(200, 400, 30, 30, "-time 10", 8);
                    S1Left_Button(100, 400, 30, 30, "-time 10", 4);
                    Escape_ButtonS1(50, 500, 65, 100, "(-time 50)");
                    break;
                }
                case 8:
                {
                    image(BurningHouse3, 0, 0, width, height);
                    S1Forward_Button(400, 300, 30, 30, "-time 10", 9);
                    S1Backward_Button(450, 550, 30, 30, "-time 10", 7);
                    Chating(100, 100, 50, 50, "Mr.O", "There may be survivors upstairs.");
                    Escape_ButtonS1(50, 500, 65, 100, "(-time 50)");
                    break;
                }
                case 9:
                {
                    image(BurningHouse4, 0, 0, width, height);
                    S1Backward_Button(400, 550, 30, 30, "-time 10", 8);
                    S1Left_Button(100, 350, 30, 30, "-time 10", 10);
                    Escape_ButtonS1(50, 500, 65, 100, "(-time 50)");
                    break;
                }
                case 10:
                {
                    image(BurningHouse2, 0, 0, width, height);
                    S1Forward_Button(400, 400, 30, 30, "-time 10", 13);
                    S1Backward_Button(400, 550, 30, 30, "-time 10", 15);
                    S1Left_Button(100, 400, 30, 30, "-time 10", 11);
                    S1Right_Button(700, 350, 30, 30, "-time 10", 9);
                    Chating(100, 100, 50, 50, "Mr.O", "The roads are divided. Someone said, ‘Life is choice and concentration.’");
                    Escape_ButtonS1(50, 500, 65, 100, "(-time 50)");
                    break;
                }
                case 11:
                {
                    image(BurningHouse3, 0, 0, width, height);
                    S1Backward_Button(450, 550, 30, 30, "-time 10", 12);
                    S1Right_Button(700, 400, 30, 30, "-time 10", 10);
                    Escape_ButtonS1(50, 500, 65, 100, "(-time 50)");
                    break;
                }
                case 12:
                {
                    image(BurningHouse4, 0, 0, width, height);
                    S1Forward_Button(400, 300, 30, 30, "-time 10", 11);
                    Chating(100, 100, 50, 50, "Mr.O", "It's not here. Let's go back.");
                    Escape_ButtonS1(50, 500, 65, 100, "(-time 50)");
                    S1Object_search4(600, 350, 40, 40, DivorceDocument, "Divorce Document\n\nIt's supposed to be a burning divorce papers.\n\nOnly the wife's signature is written");
                    break;
                }
                case 13:
                {
                    image(BurningHouse3, 0, 0, width, height);
                    Hammer_ButtonS1(400, 350, 30, 30, "-time 20", 14);
                    S1Backward_Button(400, 550, 30, 30, "-time 10", 10);
                    Escape_ButtonS1(50, 500, 65, 100, "(-time 50)");
                    break;
                }
                case 14:
                {
                    image(BurningHouse2, 0, 0, width, height);
                    S1Backward_Button(350, 550, 30, 30, "-time 10", 13);
                    Chating(100, 100, 50, 50, "Mr.O", "It's not here. Let's go back.");
                    Escape_ButtonS1(50, 500, 65, 100, "(-time 50)");
                    S1Object_search5(600, 400, 35, 35, Picture, "Picture\n\nIt's a picture of a man and a woman tangled up.\n\nIt seems to be taken without the parties knowing.");
                    break;
                }
                case 15:
                {
                    image(BurningHouse1, 0, 0, width, height);
                    S1Forward_Button(400, 300, 30, 30, "-time 10", 10);
                    S1Backward_Button(400, 500, 30, 30, "-time 10", 16);
                    Escape_ButtonS1(50, 500, 65, 100, "(-time 50)");
                    S1Object_search6(250, 450, 60, 60, IgnitionPoint, "burning Body\n\nA body believed to have been 'a man who was' is on board.\n\nThe skull is sunken.");
                    break;
                }
                case 16:
                {
                    image(BurningHouse2, 0, 0, width, height);
                        push();
                        imageMode(CENTER);
                        image(S1RPerson1, 150, 300, 100, 100);
                        image(S1RPerson2, 250, 300, 100, 100);
                        image(S1RPerson3, 600, 350, 100, 100);
                        pop();
                    S1Forward_Button(400, 350, 30, 30, "-time 10", 15);
                    Chating(100, 100, 50, 50, "Mr.O", "We've found a target. Let's secure it and get out of course.\n\nRemember, there's only one thing you can save.");
                    Escape_ButtonS1(50, 500, 65, 100, "(-time 50)");
                    S1Object_search7(300, 500, 45, 45, Knife, "Knife\n\nIt's a kitchen knife with a lot of blood on it.\n\nThe blood is not dry yet.");
                    S1_Rescue1(150, 300, 25, 25, PeopleSearch);
                    S1_Rescue2(250, 300, 25, 25, PeopleSearch);
                    S1_Rescue3(600, 350, 25, 25, PeopleSearch);
                    break;
                }
                case 18:
                {
                    text("S1_Result", 200, 300);
                    push();
                    rectMode(CORNER);
                    textAlign(LEFT, TOP);
                    textSize(20);
                    fill('Linen');
                    S1_Result_Output();
                    if(S1_Obj == 7)
                    {
                        push();
                        S1_Answer_Button(700, 200, 50, 50, AnswerButton, "The landlord and the wife of the house hid the fact\nand continued the relationship,\nbut the husband, who felt suspicious\nafter seeing the message,\nconducted a background investigation and\nfound out about the relationship.\nHowever, the wife first sought divorce,\nand the angry husband took the knife and used violence,\nwhich ignited the accident.\nThe husband, who lost his mind, chased his wife to\nthe second floor regardless of the flames,\nbut was killed by his wife's counterattack\nand burned down the body.");
                        pop();
                    }
                    pop();
                    break;
                }
            }
            pop();

            push();
            Hand_twice.draw();
            Hand_twice.update();
            Limit_setS1(750, 50);
            pop();
            break;
        }
        case 5: //collapsing building Intro
        {
            push();
            tint(255, 200);
            image(BuildingCollapse, 0, 0, width, height);
            ButtonsT1(400, 480, 180, 50, 'Go', 6);
                push();
                textAlign(LEFT, TOP);
                text("20XX-06-02\n\nI got a request today as well.\n\nThis client is the owner of the abandoned building and he is actually living there.\n\nThe client's request is to find the stuff inside the building.\n\nThe client is about to move from this building to another place,\nbut he seems to be unable to move because he couldn't find anything.\n\nIn addition, the building is said to be fairly old and poorly constructed,\nso it is not strange to collapse at any time.\n\nAnd now the client is screaming beside me and urging me to enter.", 50, 100);
                pop();
            pop();
            break;
        }
        case 6: //collapsing building
        {
            push();
            switch(S2_Maps)
            {
                case 20:
                {
                    push();
                    text("S2_Out", 400, 300);
                    ButtonsS2(400, 550, 180, 50, 'Enter', 0);
                    pop();
                    break;
                }
                case 0:
                {
                    push();
                    text("S2_1F_Map1", 400, 300);
                    S2Forward_Button(450, 350, 30, 30, "-time 10", 1);
                    Escape_ButtonS2(50, 500, 65, 100, "(-time 50)");
                    pop();
                    break;
                }
                case 1:
                {
                    push();
                    text("S2_1F_Map2", 400, 300);
                    S2Forward_Button(420, 350, 30, 30, "-time 10", 2);
                    S2Backward_Button(380, 550, 30, 30, "-time 10", 0);
                    Escape_ButtonS2(50, 500, 65, 100, "(-time 50)");
                    pop();
                    break;
                }
                case 2:
                {
                    push();
                    text("S2_1F_Map3", 400, 300);
                    S2Forward_Button(450, 350, 30, 30, "-time 10", 3);
                    S2Backward_Button(450, 550, 30, 30, "-time 10", 1);
                    S2Left_Button(100, 350, 30, 30, "-time 10", 11);
                    S2Right_Button(700, 400, 30, 30, "-time 10", 5);
                    Escape_ButtonS2(50, 500, 65, 100, "(-time 50)");
                    pop();
                    break;
                }
                case 3:
                {
                    push();
                    text("S2_1F_Map4", 400, 300);
                    S2Forward_Button(420, 350, 30, 30, "-time 10", 4);
                    S2Right_Button(650, 400, 30, 30, "-time 10", 6);
                    S2Backward_Button(400, 550, 30, 30, "-time 10", 2);
                    Escape_ButtonS2(50, 500, 65, 100, "(-time 50)");
                    pop();
                    break;
                }
                case 4:
                {
                    push();
                    text("S2_1F_Map5", 400, 300);
                    S2Backward_Button(450, 550, 30, 30, "-time 10", 3);
                    Escape_ButtonS2(50, 500, 65, 100, "(-time 50)");
                    pop();
                    break;
                }
                case 5:
                {
                    push();
                    text("S2_1F_Map6", 400, 300);
                    S2Forward_Button(420, 350, 30, 30, "-time 10", 6);
                    S2Left_Button(100, 400, 30, 30, "-time 10", 4);
                    S2Right_Button(700, 450, 30, 30, "-time 10", 10);
                    Escape_ButtonS2(50, 500, 65, 100, "(-time 50)");
                    pop();
                    break;
                }
                case 6:
                {
                    push();
                    text("S2_1F_Map7", 400, 300);
                    S2Backward_Button(450, 550, 30, 30, "-time 10", 5);
                    S2Left_Button(100, 400, 30, 30, "-time 10", 3);
                    S2Right_Button(700, 450, 30, 30, "-time 10", 9);
                    Escape_ButtonS2(50, 500, 65, 100, "(-time 50)");
                    pop();
                    break;
                }
                case 7:
                {
                    push();
                    text("S2_1F_Map8", 400, 300);
                    Escape_ButtonS2(50, 500, 65, 100, "(-time 50)");
                    pop();
                    break;
                }
                case 8:
                {
                    push();
                    text("S2_1F_Map9", 400, 300);
                    Escape_ButtonS2(50, 500, 65, 100, "(-time 50)");
                    pop();
                    break;
                }
                case 9:
                {
                    push();
                    text("S2_1F_Map10", 400, 300);
                    Escape_ButtonS2(50, 500, 65, 100, "(-time 50)");
                    pop();
                    break;
                }
                case 10:
                {
                    push();
                    text("S2_1F_Map11", 400, 300);
                    Escape_ButtonS2(50, 500, 65, 100, "(-time 50)");
                    pop();
                    break;
                }
                case 11:
                {
                    push();
                    text("S2_1F_Map12", 400, 300);
                    Escape_ButtonS2(50, 500, 65, 100, "(-time 50)");
                    pop();
                    break;
                }
                case 12:
                {
                    push();
                    text("S2_1F_Map13", 400, 300);
                    Escape_ButtonS2(50, 500, 65, 100, "(-time 50)");
                    pop();
                    break;
                }
                case 13:
                {
                    push();
                    text("S2_1F_Map14", 400, 300);
                    Escape_ButtonS2(50, 500, 65, 100, "(-time 50)");
                    pop();
                    break;
                }
                case 14:
                {
                    push();
                    text("S2_1F_Map15", 400, 300);
                    Escape_ButtonS2(50, 500, 65, 100, "(-time 50)");
                    pop();
                    break;
                }
                case 15:
                {
                    push();
                    text("S2_1F_Map16", 400, 300);
                    Escape_ButtonS2(50, 500, 65, 100, "(-time 50)");
                    pop();
                    break;
                }
                case 16:
                {
                    push();
                    text("S2_1F_Map17", 400, 300);
                    Escape_ButtonS2(50, 500, 65, 100, "(-time 50)");
                    pop();
                    break;
                }
                case 17:
                {
                    push();
                    text("S2_1F_Map18", 400, 300);
                    Escape_ButtonS2(50, 500, 65, 100, "(-time 50)");
                    pop();
                    break;
                }
                case 18:
                {
                    push();
                    text("S2_1F_Map19", 400, 300);
                    Escape_ButtonS2(50, 500, 65, 100, "(-time 50)");
                    pop();
                    break;
                }
                case 19:
                {
                    push();
                    text("S2_1F_Map20", 400, 300);
                    Escape_ButtonS2(50, 500, 65, 100, "(-time 50)");
                    pop();
                    break;
                }
                case 21:
                {
                    push();
                    pop();
                    break;
                }
            }
            push();
                Hand_twice.draw();
                Hand_twice.update();
                Limit_setS2(750, 50);
                pop();
            pop();
            break;
        }
        case 7: //abandoned building Intro
        {
            push();
            text("Stage 3 Intro", 400, 300);
            pop();
            break;
        }
        case 8: //abandoned building
        {
            push();
            text("Stage 3", 400, 300);
            pop();
            break;
        }
        case 9: //earthquake zone(hostage situation) Intro
        {
            push();
            text("Stage 4 Intro", 400, 300);
            pop();
            break;
        }
        case 10: //earthquake zone(hostage situation)
        {
            push();
            text("Stage 4", 400, 300);
            pop();
            break;
        }
        case 11: //epilogue
        {
            push();
            pop();
            break;
        }
    }
}