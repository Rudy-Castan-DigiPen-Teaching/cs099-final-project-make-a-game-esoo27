// Name       : Jonghyeon Lee
// Assignment : make_a_game
// Course     : CS099
// Spring 2021

//Comprehensive Sketch

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
    background( 255 );

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
            pop();
            break;
        }
        case 1: //How To Play
        {
            push();
            text("HOW TO PLAY", 400, 300);
            image(HowToPlay, 0, 0, width, height);
            ButtonsT1(70, 50, 100, 50, "Back", 0);
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
                    image(CollapseBuildingOut, 0, 0, width, height);
                    ButtonsS2(400, 550, 180, 50, 'Enter', 0);
                    pop();
                    break;
                }
                case 0:
                {
                    push();
                    text("S2_1F_Map1", 400, 300);
                    image(CollapseBuilding4, 0, 0, width, height);
                    S2Forward_Button(450, 350, 30, 30, "-time 10", 1);
                    Escape_ButtonS2(50, 500, 65, 100, "(-time 50)");
                    Chating(100, 100, 50, 50, "Mr.O--", "All right. That old man made a fuss, but let's finish the mission quickly.\n\nBut this time, the building is weak, so please be careful\nbecause you can't use a lot of hammers.\n\nThen... Huh?! Why don't you come in here for a second?\n\nClient: What are you doing? Come on, move, move!");
                    pop();
                    break;
                }
                case 1:
                {
                    push();
                    text("S2_1F_Map2", 400, 300);
                    image(CollapseBuilding3, 0, 0, width, height);
                    S2Forward_Button(420, 350, 30, 30, "-time 10", 2);
                    S2Backward_Button(380, 550, 30, 30, "-time 10", 0);
                    Escape_ButtonS2(50, 500, 65, 100, "(-time 50)");
                    Chating(100, 100, 50, 50, "Client", "Loud! I didn't come forward because it was so lame!\n\nMove faster! Move faster!");
                    pop();
                    break;
                }
                case 2:
                {
                    push();
                    text("S2_1F_Map3", 400, 300);
                    image(CollapseBuilding4, 0, 0, width, height);
                    S2Forward_Button(450, 350, 30, 30, "-time 10", 3);
                    S2Backward_Button(450, 550, 30, 30, "-time 10", 1);
                    S2Left_Button(100, 350, 30, 30, "-time 10", 11);
                    S2Right_Button(700, 400, 30, 30, "-time 10", 5);
                    Escape_ButtonS2(50, 500, 65, 100, "(-time 50)");
                    Chating(100, 100, 50, 50, "", "Mr. O: No, you cannot do this\n\nClient: Get things done!\n\nMr. O: Ha. I'm sorry. I think you're gonna have to make a good judgment.");
                    pop();
                    break;
                }
                case 3:
                {
                    push();
                    text("S2_1F_Map4", 400, 300);
                    image(CollapseBuilding2, 0, 0, width, height);
                    S2Forward_Button(420, 350, 30, 30, "-time 10", 4);
                    S2Right_Button(700, 400, 30, 30, "-time 10", 6);
                    S2Backward_Button(400, 550, 30, 30, "-time 10", 2);
                    Escape_ButtonS2(50, 500, 65, 100, "(-time 50)");
                    pop();
                    break;
                }
                case 4:
                {
                    push();
                    text("S2_1F_Map5", 400, 300);
                    image(CollapseBuilding1, 0, 0, width, height);
                    S2Backward_Button(450, 550, 30, 30, "-time 10", 3);
                    Escape_ButtonS2(50, 500, 65, 100, "(-time 50)");
                    S2Object_search1(500, 500, 50, 50, FootPrint, "FootPrint\n\nIt's a sign of using this room.");
                    Chating(100, 100, 50, 50, "Client", "No, it's not there. Let's go somewhere else!");
                    pop();
                    break;
                }
                case 5:
                {
                    push();
                    text("S2_1F_Map6", 400, 300);
                    image(CollapseBuilding1, 0, 0, width, height);
                    S2Forward_Button(420, 350, 30, 30, "-time 10", 6);
                    S2Left_Button(150, 450, 30, 30, "-time 10", 2);
                    S2Right_Button(650, 450, 30, 30, "-time 10", 8);
                    Escape_ButtonS2(50, 500, 65, 100, "(-time 50)");
                    pop();
                    break;
                }
                case 6:
                {
                    push();
                    text("S2_1F_Map7", 400, 300);
                    image(CollapseBuilding4, 0, 0, width, height);
                    S2Backward_Button(450, 550, 30, 30, "-time 10", 5);
                    S2Left_Button(100, 400, 30, 30, "-time 10", 3);
                    S2Right_Button(650, 450, 30, 30, "-time 10", 9);
                    push();
                    textSize(17);
                    S2Object_search2(300, 450, 50, 50, Box, "Box\n\nIt is a box that has been used\nfor a considerable period of time.");
                    pop();
                    Escape_ButtonS2(50, 500, 65, 100, "(-time 50)");
                    pop();
                    break;
                }
                case 7:
                {
                    push();
                    text("S2_1F_Map8", 400, 300);
                    image(CollapseBuilding1, 0, 0, width, height);
                    S2Forward_Button(420, 350, 30, 30, "-time 10", 8);
                    push();
                    textSize(17);
                    S2Object_search_Special(395, 490, 25, 25, Ring, "Ring\n\nIt's a faded ring.");
                    pop();
                    Escape_ButtonS2(50, 500, 65, 100, "(-time 50)");
                    Chating(100, 100, 50, 50, "Client", "It's... There is..");
                    pop();
                    break;
                }
                case 8:
                {
                    push();
                    text("S2_1F_Map9", 400, 300);
                    image(CollapseBuilding3, 0, 0, width, height);
                    S2Forward_Button(350, 400, 30, 30, "-time 10", 9);
                    S2Backward_Button(450, 550, 30, 30, "-time 10", 7);
                    S2Left_Button(100, 400, 30, 30, "-time 10", 5);
                    push();
                    textSize(17);
                    S2Object_search3(220, 400, 50, 50, DivorceDocument, "Building Document\n\nIt appears to be a relevant document of this building.");
                    pop();
                    Escape_ButtonS2(50, 500, 65, 100, "(-time 50)");
                    pop();
                    break;
                }
                case 9:
                {
                    push();
                    text("S2_1F_Map10", 400, 300);
                    image(CollapseBuilding2, 0, 0, width, height);
                    S2Forward_Button(400, 350, 30, 30, "-time 10", 10);
                    S2Backward_Button(420, 500, 30, 30, "-time 10", 8);
                    S2Left_Button(120, 430, 30, 30, "-time 10", 6);
                    Escape_ButtonS2(50, 500, 65, 100, "(-time 50)");
                    Chating(100, 100, 50, 50, "Client", "Is that all you guys can do?");
                    pop();
                    break;
                }
                case 10:
                {
                    push();
                    text("S2_1F_Map11", 400, 300);
                    image(CollapseBuilding1, 0, 0, width, height);
                    S2Backward_Button(400, 450, 30, 30, "-time 10", 9);
                    push();
                    textSize(17);
                    S2Object_search4(290, 400, 50, 50, PictureFrame, "Picture\n\nThis is a picture taken by a couple affectionately.\nIt is quite old.");
                    pop();
                    Escape_ButtonS2(50, 500, 65, 100, "(-time 50)");
                    pop();
                    break;
                }
                case 11:
                {
                    push();
                    text("S2_1F_Map12", 400, 300);
                    image(CollapseBuilding3, 0, 0, width, height);
                    S2Left_Button(120, 430, 30, 30, "-time 10", 13);
                    S2Right_Button(650, 450, 30, 30, "-time 10", 2);
                    Escape_ButtonS2(50, 500, 65, 100, "(-time 50)");
                    pop();
                    break;
                }
                case 12:
                {
                    push();
                    text("S2_1F_Map13", 400, 300);
                    image(CollapseBuilding4, 0, 0, width, height);
                    S2Forward_Button(400, 350, 30, 30, "-time 10", 13);
                    push();
                    textSize(17);
                    S2Object_search5(510, 450, 50, 50, Box, "Dirty Box\n\nIt's a contaminated box.\nThere's a lot of dirt on it.");
                    pop();
                    Escape_ButtonS2(50, 500, 65, 100, "(-time 50)");
                    pop();
                    break;
                }
                case 13:
                {
                    push();
                    text("S2_1F_Map14", 400, 300);
                    image(CollapseBuilding1, 0, 0, width, height);
                    S2Forward_Button(380, 300, 30, 30, "-time 10", 14);
                    S2Backward_Button(400, 500, 30, 30, "-time 10",12);
                    S2Right_Button(700, 400, 30, 30, "-time 10", 11);
                    Escape_ButtonS2(50, 500, 65, 100, "(-time 50)");
                    Chating(100, 100, 50, 50, "Client", "Look more closely!");
                    pop();
                    break;
                }
                case 14:
                {
                    push();
                    text("S2_1F_Map15", 400, 300);
                    image(CollapseBuilding2, 0, 0, width, height);
                    S2Forward_Button(400, 350, 30, 30, "-time 10", 15);
                    S2Backward_Button(430, 450, 30, 30, "-time 10",12);
                    Escape_ButtonS2(50, 500, 65, 100, "(-time 50)");
                    pop();
                    break;
                }
                case 15:
                {
                    push();
                    text("S2_1F_Map16", 400, 300);
                    image(CollapseBuilding3, 0, 0, width, height);
                    S2Backward_Button(400, 500, 30, 30, "-time 10",12);
                    S2Right_Button(700, 400, 30, 30, "-time 10", 17);
                    Escape_ButtonS2(50, 500, 65, 100, "(-time 50)");
                    Chating(100, 100, 50, 50, "Client", "My dog will find it better!");
                    pop();
                    break;
                }
                case 16:
                {
                    push();
                    text("S2_1F_Map17", 400, 300);
                    image(CollapseBuilding3, 0, 0, width, height);
                    S2Right_Button(700, 400, 30, 30, "-time 10", 18);
                    push();
                    textSize(17);
                    S2Object_search6(600, 400, 50, 50, Bowl, "Bowl\n\nIt's a leftover bowl.\nFood scraps are stuck together.");
                    pop();
                    Escape_ButtonS2(50, 500, 65, 100, "(-time 50)");
                    pop();
                    break;
                }
                case 17:
                {
                    push();
                    text("S2_1F_Map18", 400, 300);
                    image(CollapseBuilding1, 0, 0, width, height);
                    S2Forward_Button(350, 350, 30, 30, "-time 10", 18);
                    S2Left_Button(120, 430, 30, 30, "-time 10", 15);
                    push();
                    textSize(17);
                    S2Object_search7(700, 500, 50, 50, FootPrint, "FootPrint\n\nIt's a vestige of someone's frequent visits.");
                    pop();
                    Escape_ButtonS2(50, 500, 65, 100, "(-time 50)");
                    pop();
                    break;
                }
                case 18:
                {
                    push();
                    text("S2_1F_Map19", 400, 300);
                    image(CollapseBuilding4, 0, 0, width, height);
                    Hammer_ButtonS2(400, 300, 30, 30, "-time 20", 19);
                    S2Backward_Button(380, 510, 30, 30, "-time 10",17);
                    S2Left_Button(120, 430, 30, 30, "-time 10", 16);
                    Escape_ButtonS2(50, 500, 65, 100, "(-time 50)");
                    pop();
                    break;
                }
                case 19:
                {
                    push();
                    text("S2_1F_Map20", 400, 300);
                    image(CollapseBuilding1, 0, 0, width, height);
                    push();
                    imageMode(CENTER);
                    image(S2_R_Object1, 150, 350, 60, 60);
                    image(S2_R_Object2, 310, 400, 60, 60);
                    image(S2_R_Object3, 440, 420, 60, 60);
                    pop();
                    S2Backward_Button(430, 480, 30, 30, "-time 10",18);
                    Escape_ButtonS2(50, 500, 65, 100, "(-time 50)");
                    S2_Rescue1(150, 350, 25, 25, PeopleSearch);
                    S2_Rescue2(310, 400, 25, 25, PeopleSearch);
                    S2_Rescue3(440, 420, 25, 25, PeopleSearch);
                    Chating(100, 100, 50, 50, "Mr.O", "Ha.. I wonder if there's a target there.\n\nHonestly, I don't want to do more.");
                    pop();
                    break;
                }
                case 21: //Result
                {
                    push();
                    rectMode(CORNER);
                    textAlign(LEFT, TOP);
                    textSize(20);
                    fill('Linen');
                    S2_Result_Output();
                    if(S2_Answer_Choice == 1)
                    {
                        push();
                        S2_Answer_Button(700, 500, 50, 50, AnswerButton, "The item found was the will of the deceased wife,\nand inside it was to forget about yourself.\n\nThe client had refused to leave the building with\nmemories of his wife,\nbut gave up and tried to leave\nwhen the building came to the brink\nof collapse over time,\nbut he had requested it after learning\nthat his wife's goods had disappeared.");
                        pop();
                    }
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
            tint(255, 200);
            image(BuildingCollapse, 0, 0, width, height);
            ButtonsT1(400, 480, 180, 50, 'Go', 8);
                push();
                textAlign(LEFT, TOP);
                text("Recently, there have been a series of missing children who visited the waste factory.\n\nParents are not letting their children go here,\nbut they want to do more if they don're not allowed to.\n\nThe police entered and tried to search, but they couldn't find anything.\n\nThen one of the parents has commissioned us.", 50, 100);
                pop();
            pop();
            break;
        }
        case 8: //abandoned building
        {
            push();
            switch(S3_Maps)
            {
                case 24:
                {
                    push();
                    text("S3_Out", 400, 300);
                    image(WasteFactoryView, 0, 0, width, height);
                    ButtonsS3(400, 550, 180, 50, 'Enter', 0);
                    pop();
                    break;
                }
                case 0:
                {
                    push();
                    text("S3_1F_Map1", 400, 300);
                    image(WasteFactory2, 0, 0, width, height);
                    S3Forward_Button(390, 350, 30, 30, "-time 10", 1);
                    Escape_ButtonS3(50, 500, 65, 100, "(-time 50)");
                    Chating(100, 100, 50, 50, "Mr.O", "This place seems a bit gloomy.\n\nI feel like I'm going to get something.");
                    pop();
                    break;
                }
                case 1:
                {
                    push();
                    text("S3_1F_Map2", 400, 300);
                    image(WasteFactory3, 0, 0, width, height);
                    Hammer_ButtonS3(400, 300, 30, 30, "-time 20", 2);
                    S3Backward_Button(380, 550, 30, 30, "-time 10", 0);
                    S3Right_Button(700, 400, 30, 30, "-time 10", 4);
                    Escape_ButtonS3(50, 500, 65, 100, "(-time 50)");
                    Chating(100, 100, 50, 50, "Mr.O", "To be honest, I don't think we're going to be any different\n\nwhen the police came in and couldn't find anything.");
                    pop();
                    break;
                }
                case 2:
                {
                    push();
                    text("S3_1F_Map3", 400, 300);
                    image(WasteFactory1, 0, 0, width, height);
                    S3Backward_Button(450, 520, 30, 30, "-time 10", 1);
                    S3Right_Button(700, 400, 30, 30, "-time 10", 5);
                    push();
                    textSize(17);
                    S3Object_search1(300, 400, 60, 60, Girl, "Girl..?\n\nI think there was something like a girl.");
                    pop();
                    Escape_ButtonS3(50, 500, 65, 100, "(-time 50)");
                    pop();
                    break;
                }
                case 3:
                {
                    push();
                    text("S3_1F_Map4", 400, 300);
                    image(WasteFactory2, 0, 0, width, height);
                    S3Right_Button(700, 400, 30, 30, "-time 10", 7);
                    push();
                    textSize(17);
                    S3Object_search2(200, 400, 60, 60, Diary, "Diary\n\nI can't read the contents because they are all worn out.");
                    pop();
                    Escape_ButtonS3(50, 500, 65, 100, "(-time 50)");
                    pop();
                    break;
                }
                case 4:
                {
                    push();
                    text("S3_1F_Map5", 400, 300);
                    image(WasteFactory4, 0, 0, width, height);
                    S3Forward_Button(450, 350, 30, 30, "-time 10", 5);
                    S3Left_Button(100, 350, 30, 30, "-time 10", 1);
                    Escape_ButtonS3(50, 500, 65, 100, "(-time 50)");
                    pop();
                    break;
                }
                case 5:
                {
                    push();
                    text("S3_1F_Map6", 400, 300);
                    image(WasteFactory2, 0, 0, width, height);
                    Hammer_ButtonS3(400, 300, 30, 30, "-time 20", 6);
                    S3Backward_Button(450, 550, 30, 30, "-time 10", 4);
                    S3Left_Button(100, 350, 30, 30, "-time 10", 2);
                    Escape_ButtonS3(50, 500, 65, 100, "(-time 50)");
                    pop();
                    break;
                }
                case 6:
                {
                    push();
                    text("S3_1F_Map7", 400, 300);
                    image(WasteFactory1, 0, 0, width, height);
                    S3Forward_Button(450, 350, 30, 30, "-time 10", 7);
                    S3Backward_Button(450, 550, 30, 30, "-time 10", 5);
                    Escape_ButtonS3(50, 500, 65, 100, "(-time 50)");
                    pop();
                    break;
                }
                case 7:
                {
                    push();
                    text("S3_1F_Map8", 400, 300);
                    image(WasteFactory3, 0, 0, width, height);
                    Hammer_ButtonS3(400, 300, 30, 30, "-time 20", 8);
                    S3Backward_Button(380, 550, 30, 30, "-time 10", 6);
                    S3Left_Button(100, 350, 30, 30, "-time 10", 3);
                    Escape_ButtonS3(50, 500, 65, 100, "(-time 50)");
                    pop();
                    break;
                }
                case 8:
                {
                    push();
                    text("S3_1F_Map9", 400, 300);
                    image(WasteFactoryStair, 0, 0, width, height);
                    S3Backward_Button(450, 550, 30, 30, "-time 10", 7);
                    S3Backward_Button(380, 400, 20, 20, "-time 10", 16);
                    Escape_ButtonS3(50, 500, 65, 100, "(-time 50)");
                    Chating(100, 100, 50, 50, "Mr.O", "You can go underground.\n\nWhat's down there?");
                    pop();
                    break;
                }
                case 9:
                {
                    push();
                    text("S3_B1F_Map1", 400, 300);
                    image(WasteFactory4, 0, 0, width, height);
                    S3Forward_Button(450, 350, 30, 30, "-time 10", 10);
                    S3Right_Button(700, 400, 30, 30, "-time 10", 14);
                    Escape_ButtonS3(50, 500, 65, 100, "(-time 50)");
                    pop();
                    break;
                }
                case 10:
                {
                    push();
                    text("S3_B1F_Map2", 400, 300);
                    image(WasteFactory3, 0, 0, width, height);
                    Hammer_ButtonS3(400, 300, 30, 30, "-time 20", 11);
                    S3Backward_Button(450, 550, 30, 30, "-time 10", 9);
                    Escape_ButtonS3(50, 500, 65, 100, "(-time 50)");
                    pop();
                    break;
                }
                case 11:
                {
                    push();
                    text("S3_B1F_Map3", 400, 300);
                    image(WasteFactory2, 0, 0, width, height);
                    S3Forward_Button(450, 350, 30, 30, "-time 10", 12);
                    S3Backward_Button(380, 550, 30, 30, "-time 10", 10);
                    S3Right_Button(700, 400, 30, 30, "-time 10", 15);
                    Escape_ButtonS3(50, 500, 65, 100, "(-time 50)");
                    Chating(100, 100, 50, 50, "Mr.O", "-----------T-e sou-d------------- ins--ide----------");
                    pop();
                    break;
                }
                case 12:
                {
                    push();
                    text("S3_B1F_Map4", 400, 300);
                    image(WasteFactory1, 0, 0, width, height);
                    S3Backward_Button(450, 550, 30, 30, "-time 10", 11);
                    S3Right_Button(700, 400, 30, 30, "-time 10", 16);
                    Escape_ButtonS3(50, 500, 65, 100, "(-time 50)");
                    pop();
                    break;
                }
                case 13:
                {
                    push();
                    text("S3_B1F_Map5", 400, 300);
                    image(WasteFactory1, 0, 0, width, height);
                    S3Forward_Button(450, 350, 30, 30, "-time 10", 14);
                    push();
                    textSize(17);
                    S3Object_search_Special(300, 100, 60, 60, Something, "");
                    pop();
                    Escape_ButtonS3(50, 500, 65, 100, "(-time 50)");
                    pop();
                    break;
                }
                case 14:
                {
                    push();
                    text("S3_B1F_Map6", 400, 300);
                    image(WasteFactory4, 0, 0, width, height);
                    S3Backward_Button(380, 550, 30, 30, "-time 10", 13);
                    S3Left_Button(100, 350, 30, 30, "-time 10", 9);
                    Escape_ButtonS3(50, 500, 65, 100, "(-time 50)");
                    Chating(100, 100, 50, 50, "Mr.O", "-------------------W-ere-------------------");
                    pop();
                    break;
                }
                case 15:
                {
                    push();
                    text("S3_B1F_Map7", 400, 300);
                    image(WasteFactory1, 0, 0, width, height);
                    S3Left_Button(100, 350, 30, 30, "-time 10", 11);
                    Escape_ButtonS3(50, 500, 65, 100, "(-time 50)");
                    push();
                    textSize(17);
                    S3Object_search3(100, 400, 60, 60, Ghost, "???\n\nSomthing..");
                    pop();
                    pop();
                    break;
                }
                case 16:
                {
                    push();
                    text("S3_B1F_Map8", 400, 300);
                    image(WasteFactoryStair, 0, 0, width, height);
                    S3Forward_Button(350, 300, 30, 30, "-time 10", 8);
                    S3Backward_Button(300, 400, 20, 20, "-time 10", 23);
                    S3Left_Button(100, 350, 30, 30, "-time 10", 12);
                    Escape_ButtonS3(50, 500, 65, 100, "(-time 50)");
                    Chating(100, 100, 50, 50, "Mr.O", "I--hink we can go down--to B2F.\n\nWhat's on this floor?");
                    pop();
                    break;
                }
                case 17:
                {
                    push();
                    text("S3_B2F_Map1", 400, 300);
                    image(WasteFactory1, 0, 0, width, height);
                    S3Forward_Button(450, 350, 30, 30, "-time 10", 18);
                    push();
                    textSize(17);
                    S3Object_search4(600, 450, 60, 60, Noise, "Noise\n\nWhat...?");
                    pop();
                    Escape_ButtonS3(50, 500, 65, 100, "(-time 50)");
                    pop();
                    break;
                }
                case 18:
                {
                    push();
                    text("S3_B2F_Map2", 400, 300);
                    image(WasteFactory2, 0, 0, width, height);
                    S3Backward_Button(380, 550, 30, 30, "-time 10", 17);
                    S3Right_Button(700, 400, 30, 30, "-time 10", 22);
                    Escape_ButtonS3(50, 500, 65, 100, "(-time 50)");
                    pop();
                    break;
                }
                case 19:
                {
                    push();
                    text("S3_B2F_Map3", 400, 300);
                    image(WasteFactory1, 0, 0, width, height);
                    push();
                    imageMode(CENTER);
                    image(S3_R_Object1, 150, 400, 80, 80);
                    image(S3_R_Object2, 250, 400, 80, 80);
                    image(S3_R_Object3, 400, 450, 80, 80);
                    pop();
                    S3Forward_Button(600, 350, 30, 30, "-time 10", 20);
                    Escape_ButtonS3(50, 500, 65, 100, "(-time 50)");
                    S3_Rescue1(150, 400, 25, 25, PeopleSearch);
                    S3_Rescue2(250, 400, 25, 25, PeopleSearch);
                    S3_Rescue3(400, 450, 25, 25, PeopleSearch);
                    Chating(100, 100, 50, 50, "M=-.-=-", "----------The-e---------Wh-t---------");
                    pop();
                    break;
                }
                case 20:
                {
                    push();
                    text("S3_B2F_Map4", 400, 300);
                    image(WasteFactory3, 0, 0, width, height);
                    S3Forward_Button(380, 350, 30, 30, "-time 10", 21);
                    S3Backward_Button(370, 500, 30, 30, "-time 10", 19);
                    Escape_ButtonS3(50, 500, 65, 100, "(-time 50)");
                    Chating(100, 100, 50, 50, "--==-", "------------------------------------");
                    pop();
                    break;
                }
                case 21:
                {
                    push();
                    text("S3_B2F_Map5", 400, 300);
                    image(WasteFactory2, 0, 0, width, height);
                    S3Forward_Button(450, 350, 30, 30, "-time 10", 22);
                    Hammer_ButtonS3(400, 550, 30, 30, "-time 20", 20);
                    Escape_ButtonS3(50, 500, 65, 100, "(-time 50)");
                    pop();
                    break;
                }
                case 22:
                {
                    push();
                    text("S3_B2F_Map6", 400, 300);
                    image(WasteFactory4, 0, 0, width, height);
                    S3Forward_Button(380, 350, 30, 30, "-time 10", 23);
                    S3Backward_Button(380, 500, 30, 30, "-time 10", 21);
                    S3Left_Button(100, 350, 30, 30, "-time 10", 18);
                    Escape_ButtonS3(50, 500, 65, 100, "(-time 50)");
                    pop();
                    break;
                }
                case 23:
                {
                    push();
                    text("S3_B2F_Map7", 400, 300);
                    image(WasteFactoryStair, 0, 0, width, height);
                    S3Forward_Button(400, 300, 30, 30, "-time 10", 16);
                    S3Backward_Button(450, 550, 30, 30, "-time 10", 22);
                    Escape_ButtonS3(50, 500, 65, 100, "(-time 50)");
                    Chating(100, 100, 50, 50, "Mr.=-", "-------can----he-r------------------------------");
                    pop();
                    break;
                }
                case 25:
                {
                    push();
                    text("S3_Result", 400, 300);
                    rectMode(CORNER);
                    textAlign(LEFT, TOP);
                    textSize(20);
                    fill('Linen');
                    S3_Result_Output();
                    if(S3_Answer_Choice == 1)
                    {
                        push();
                        S3_Answer_Button(700, 500, 50, 50, AnswerButton, "------------===--------------=------==-------------------=\n\n-------=-=----==----------=------------====------------=\n\n-----------------------------=--------------------------=\n\n----------====------------==------------===------------=\n\n---------------===-----------------=-=-=--=------------=\n\n-------------------------------------------------------------=\n\n------------==------------------=--------------------------=");
                        pop();
                    }
                    pop();
                    break;
                }
            }
                push();
                Hand_twice.draw();
                Hand_twice.update();
                Limit_setS3(750, 50);
                pop();
            pop();
            break;
        }
        case 9: //strange place(hostage situation0 Intro
        {
            push();
            tint(255, 200);
            image(StrangePlace, 0, 0, width, height);
            ButtonsT1(400, 480, 180, 50, 'Go', 10);
                push();
                textAlign(LEFT, TOP);
                text("When I came to my senses, I was in this strange space.\n\n\nAll I remembered was that the hostage situation took place and I was dispatched.\n\n\nThe timer was set to 500 seconds, and there was no communication with the operator.\n\n\nI think we have no choice but to enter.", 50, 100);
                pop();
            pop();
            break;
        }
        case 10: //strange place(hostage situation)
        {
            push();
            switch(S4_Maps)
            {
                case 20:
                {
                    push();
                    image(StrangePlaceView, 0, 0, width, height);
                    ButtonsS4(400, 550, 180, 50, 'Enter', 0);
                    pop();
                    break;
                }
                case 0:
                {
                    push();
                    image(BurningHouse1, 0, 0, width, height);
                    S4Forward_Button(390, 350, 30, 30, "-time 10", 1);
                    Escape_ButtonS4(50, 500, 65, 100, "(-time 50)");
                    Chating(100, 100, 50, 50, "???", "Hi. I have the hostage.\n\nCome on, save the hostage.");
                    pop();
                    break;
                }
                case 1:
                {
                    push();
                    image(CollapseBuilding1, 0, 0, width, height);
                    S4Forward_Button(450, 350, 30, 30, "-time 10", 2);
                    S4Backward_Button(380, 550, 30, 30, "-time 10", 0);
                        push();
                        textSize(17);
                        S4Object_search1(400, 400, 50, 50, FootPrint, "FootPrint\n\nIt's someone's footprints.\n\nIt looks like it's about to disappear.");
                        pop();
                    Escape_ButtonS4(50, 500, 65, 100, "(-time 50)");
                    pop();
                    break;
                }
                case 2:
                {
                    push();
                    image(WasteFactory1, 0, 0, width, height);
                    S4Forward_Button(390, 350, 30, 30, "-time 10", 3);
                    S4Backward_Button(450, 550, 30, 30, "-time 10", 1);
                    Escape_ButtonS4(50, 500, 65, 100, "(-time 50)");
                    Chating(100, 100, 50, 50, "???", "Are you still procrastinating?");
                    pop();
                    break;
                }
                case 3:
                {
                    push();
                    image(StrangePlace1, 0, 0, width, height);
                    S4Forward_Button(450, 350, 30, 30, "-time 10", 4);
                    S4Backward_Button(380, 550, 30, 30, "-time 10", 2);
                    Escape_ButtonS4(50, 500, 65, 100, "(-time 50)");
                    pop();
                    break;
                }
                case 4:
                {
                    push();
                    image(CollapseBuilding2, 0, 0, width, height);
                    S4Forward_Button(390, 350, 30, 30, "-time 10", 5);
                    S4Backward_Button(450, 550, 30, 30, "-time 10", 3);
                        push();
                        textSize(17);
                        S4Object_search2(400, 400, 50, 50, Knife, "Knife\n\nIt's a knife with a chipped tooth.\n\nIt's like being in a museum.");
                        pop();
                    Escape_ButtonS4(50, 500, 65, 100, "(-time 50)");
                    pop();
                    break;
                }
                case 5:
                {
                    push();
                    image(BurningHouse2, 0, 0, width, height);
                    S4Right_Button(700, 400, 30, 30, "-time 10", 6);
                    S4Backward_Button(380, 550, 30, 30, "-time 10", 4);
                    Escape_ButtonS4(50, 500, 65, 100, "(-time 50)");
                    Chating(100, 100, 50, 50, "???", "I've given you plenty of time.\n\nCome on.");
                    pop();
                    break;
                }
                case 6:
                {
                    push();
                    image(WasteFactory2, 0, 0, width, height);
                    S4Left_Button(100, 450, 30, 30, "-time 10", 5);
                    S4Right_Button(650, 450, 30, 30, "-time 10", 7);
                    Escape_ButtonS4(50, 500, 65, 100, "(-time 50)");
                    pop();
                    break;
                }
                case 7:
                {
                    push();
                    image(StrangePlace4, 0, 0, width, height);
                    S4Left_Button(100, 350, 30, 30, "-time 10", 6);
                    S4Backward_Button(380, 550, 30, 30, "-time 10", 8);
                    Escape_ButtonS4(50, 500, 65, 100, "(-time 50)");
                    pop();
                    break;
                }
                case 8:
                {
                    push();
                    image(StrangePlace3, 0, 0, width, height);
                    S4Forward_Button(390, 350, 30, 30, "-time 10", 7);
                    S4Backward_Button(450, 550, 30, 30, "-time 10", 9);
                    Escape_ButtonS4(50, 500, 65, 100, "(-time 50)");
                    pop();
                    break;
                }
                case 9:
                {
                    push();
                    image(CollapseBuilding3, 0, 0, width, height);
                    S4Forward_Button(450, 300, 30, 30, "-time 10", 8);
                    S4Backward_Button(380, 550, 30, 30, "-time 10", 10);
                        push();
                        textSize(17);
                        S4Object_search3(400, 400, 50, 50, Box, "Box\n\nIt's an ordinary paper box.\n\nOur company's logo is drawn on the surface.");
                        pop();
                    Escape_ButtonS4(50, 500, 65, 100, "(-time 50)");
                    Chating(100, 100, 50, 50, "???", "Our lives are a series of hardships.");
                    pop();
                    break;
                }
                case 10:
                {
                    push();
                    image(BurningHouse3, 0, 0, width, height);
                    S4Forward_Button(390, 350, 30, 30, "-time 10", 9);
                    S4Backward_Button(450, 530, 30, 30, "-time 10", 11);
                    Escape_ButtonS4(50, 500, 65, 100, "(-time 50)");
                    Chating(100, 100, 50, 50, "???", "You're the only one who can save yourself.");
                    pop();
                    break;
                }
                case 11:
                {
                    push();
                    image(WasteFactory3, 0, 0, width, height);
                    S4Forward_Button(450, 400, 30, 30, "-time 10", 10);
                    S4Backward_Button(380, 550, 30, 30, "-time 10", 12);
                    Escape_ButtonS4(50, 500, 65, 100, "(-time 50)");
                    pop();
                    break;
                }
                case 12:
                {
                    push();
                    image(BurningHouse4, 0, 0, width, height);
                    S4Forward_Button(390, 350, 30, 30, "-time 10", 11);
                    S4Right_Button(700, 400, 30, 30, "-time 10", 13);
                    Escape_ButtonS4(50, 500, 65, 100, "(-time 50)");
                    pop();
                    break;
                }
                case 13:
                {
                    push();
                    image(StrangePlace3, 0, 0, width, height);
                    S4Left_Button(80, 300, 30, 30, "-time 10", 12);
                    S4Right_Button(650, 380, 30, 30, "-time 10", 14);
                    Escape_ButtonS4(50, 500, 65, 100, "(-time 50)");
                    Chating(100, 100, 50, 50, "???", "You're coming like you're taking a step at a time.");
                    pop();
                    break;
                }
                case 14:
                {
                    push();
                    image(WasteFactory4, 0, 0, width, height);
                    S4Forward_Button(390, 350, 30, 30, "-time 10", 15);
                    S4Left_Button(100, 350, 30, 30, "-time 10", 13);
                    Escape_ButtonS4(50, 500, 65, 100, "(-time 50)");
                    pop();
                    break;
                }
                case 15:
                {
                    push();
                    image(CollapseBuilding4, 0, 0, width, height);
                    S4Forward_Button(450, 300, 30, 30, "-time 10", 16);
                    S4Backward_Button(380, 550, 30, 30, "-time 10", 14);
                        push();
                        textSize(17);
                        S4Object_search4(400, 400, 50, 50, Diary, "Diary\n\nIt's someone's diary.\n\nI can't open it because it's locked.");
                        pop();
                    Escape_ButtonS4(50, 500, 65, 100, "(-time 50)");
                    pop();
                    break;
                }
                case 16:
                {
                    push();
                    image(WasteFactoryStair, 0, 0, width, height);
                    S4Forward_Button(390, 350, 30, 30, "-time 10", 17);
                    S4Backward_Button(450, 530, 30, 30, "-time 10", 15);
                    Escape_ButtonS4(50, 500, 65, 100, "(-time 50)");
                    pop();
                    break;
                }
                case 17:
                {
                    push();
                    image(StrangePlace2, 0, 0, width, height);
                    S4Forward_Button(450, 300, 30, 30, "-time 10", 18);
                    S4Backward_Button(380, 550, 30, 30, "-time 10", 16);
                    Escape_ButtonS4(50, 500, 65, 100, "(-time 50)");
                    Chating(100, 100, 50, 50, "???", "Yeah, we're almost there.\n\nJust a little more.");
                    pop();
                    break;
                }
                case 18:
                {
                    push();
                    image(StrangePlace1, 0, 0, width, height);
                    S4Forward_Button(390, 350, 30, 30, "-time 10", 19);
                    S4Backward_Button(450, 520, 30, 30, "-time 10", 17);
                        push();
                        textSize(17);
                        S4Object_search5(400, 400, 50, 50, Noise, "Noise\n\nI don't know if this is a thing.");
                        pop();
                    Escape_ButtonS4(50, 500, 65, 100, "(-time 50)");
                    pop();
                    break;
                }
                case 19:
                {
                    push();
                    image(StrangePlace4, 0, 0, width, height);
                        push();
                        imageMode(CENTER);
                        image(S4RPerson1, 400, 400, 100, 100);
                        pop();
                    S4Backward_Button(380, 550, 30, 30, "-time 10", 18);
                    Escape_ButtonS4(50, 500, 65, 100, "(-time 50)");
                    S4_Rescue1(400, 400, 25, 25, PeopleSearch);
                    Chating(100, 100, 50, 50, "???", "I've been waiting for you.");
                    pop();
                    break;
                }
                case 21:
                {
                    push();
                    rectMode(CORNER);
                    textAlign(LEFT, TOP);
                    textSize(20);
                    fill('Linen');
                    S4_Result_Output();
                    pop();
                    break;
                }
            }
                push();
                Hand_twice.draw();
                Hand_twice.update();
                Limit_setS4(750, 50);
                pop();
            pop();
            break;
        }
        case 11: //epilogue
        {
            push();
            if(S1_Obj == 7 || S2_Obj == 7 || S3_Obj == 4 || S2_Obj_Special == 1 || S3_Obj_Special == 1)
            {
                push();
                fill('white');
                rect(0, 0, width, height);
                fill('black');
                textAlign(CENTER, TOP);
                textSize(20);
                text("~Perfect worker~\n\n\nIt's perfect.\n\nNo one can accomplish a task better than you.\n\nYou're a man of the sword, pure and simple.\n\nLike a knife that cuts everything off.", width/2, 200);
                pop();
            }else
            {
                push();
                textAlign(CENTER, TOP);
                textSize(20);
                text("~Decent worker~\n\n\nYou seem to have been working pretty hard.\n\nBut I think there's something missing, but I appreciate your effort.\n\nThe choice is irreversible anyway.", width/2, 200);
                pop();
            }
            pop();
            break;
        }
    }
}