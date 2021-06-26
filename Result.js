// Name       : Jonghyeon Lee
// Assignment : make_a_game
// Course     : CS099
// Spring 2021

//Output Results Screen

function S1_Result_Output()
{
    push();
    noStroke();
    fill('black');
    rectMode(CENTER);
    rect(width/2, height/2, width, height);
        push();
        fill(34, 195, 187, 100);
        rect(width/2, height/2, width, height);
        fill('white');
        textSize(25);
        text("Result - Stage1", 110, 30);
        pop();
    pop();
    rectMode(CORNER);
    push();
    stroke('white');
    noFill();
    strokeWeight(3);
    rect(20, 60, 750, 345);
    rect(20, 410, 750, 60);
    pop();

    if(S1_RPerson1_life == 0)
    {
        push();
        textAlign(LEFT, TOP);
        textSize(20);
        fill('Linen');
        text("She, who was the top priority of the client, died with the burning house.\nShe, who was loved by everyone because she was pitiful and beautiful,\nis now gone in front of everyone.\nMaybe it's because someone abandoned her.", 30, 70, 700, 100);
        pop();
    }else if(S1_RPerson1_life == 1)
    {
        push();
        textAlign(LEFT, TOP);
        textSize(20);
        fill('Linen');
        text("She, the top priority of the client, was safely rescued from the hellish fire.\nHer father will cherish her even more than before,\neven though she lost her left leg and suffered from aftereffects.\nWhatever the truth is.", 30, 70, 700, 100);
        text("Mr.o: Congratulations on completing your mission.\n        ...and the others couldn't help it ..Yeah", 30, 415, 700, 100);
        pop();
    }

    if(S1_RPerson2_life == 0)
    {
        push();
        textAlign(LEFT, TOP);
        textSize(20);
        fill('Linen');
        text("A close friend of the client, she ended up with a handful of ashes.\nShe was a promising student who received everyone's writing\nbecause of her excellent grades.\nBut that kind of future is no longer coming.", 30, 185, 700, 100);
        pop();
    }else if(S1_RPerson2_life == 1)
    {
        push();
        textAlign(LEFT, TOP);
        textSize(20);
        fill('Linen');
        text("A close friend of the client, she was lucky to escape without major aftereffects.\nIt's all because someone's reached out for salvation in hell.\nBut the loss of family and best friends in front of her will eat her whole life.", 30, 185, 700, 100);
        text("Mr.o: Why did you save someone else? It's a good thing, of course,\n        But... Thanks to you, the client is running amok.", 30, 415, 700, 100);
        pop();
    }

    if(S1_RPerson3_life == 0)
    {
        push();
        textAlign(LEFT, TOP);
        textSize(20);
        fill('Linen');
        text("The miserable sprawling mother of this house became a good firewood.\nHer disappearance as a good mother would bring sorrow to everyone.\nWell, it might be better to die and be forgotten like this.", 30, 300, 700, 100);
        pop();
    }else if(S1_RPerson3_life == 1)
    {
        push();
        textAlign(LEFT, TOP);
        textSize(20);
        fill('Linen');
        text("The miserable sprawling mother of this house, miraculously came back to life.\nHowever, the aftereffects were so severe that her daily life was\nno longer possible and she couldn't talk anymore.\nAnd She may end up hating you for the grief of losing her child.", 30, 300, 700, 100);
        text("Mr.o: Why did you save someone else? It's a good thing, of course,\n        But... Thanks to you, the client is running amok.", 30, 415, 700, 100);
        pop();
    }
    ButtonsT1(400, 550, 150, 70, "Next ==>", 5);
}

function S2_Result_Output()
{
    push();
    noStroke();
    fill('black');
    rectMode(CENTER);
    rect(width/2, height/2, width, height);
        push();
        fill(34, 195, 187, 100);
        rect(width/2, height/2, width, height);
        fill('white');
        textSize(25);
        text("Result - Stage2", 110, 30);
        pop();
    pop();
    rectMode(CORNER);
    push();
    stroke('white');
    noFill();
    strokeWeight(3);
    rect(20, 60, 750, 345);
    rect(20, 410, 750, 60);
    pop();

    if(S2_RObject1_life == 0)
    {
        push();
        textAlign(LEFT, TOP);
        textSize(20);
        fill('Linen');
        text("The gem that shone brilliantly in the dark disappeared\ninto the collapsing building.\nIf the client finds out, it's a waste, but...\nIt doesn't matter if you don't know.", 30, 70, 700, 100);
        pop();
    }else if(S2_RObject1_life == 1)
    {
        push();
        textAlign(LEFT, TOP);
        textSize(20);
        fill('Linen');
        text("You chose the jewel that was shining in the dust.\nYeah, there's nothing more important than money.\nEveryone will understand.", 30, 70, 700, 100);
        text("Mr.o: No, I don't think that's it.\n        The building collapsed.", 30, 415, 700, 100);
        pop();
    }

    if(S2_RObject2_life == 0)
    {
        push();
        textAlign(LEFT, TOP);
        textSize(20);
        fill('Linen');
        text("But the client doesn't seem to think so.\nHe's going wild right now.\nI think the mission is a failure.", 30, 185, 700, 100);
        pop();
    }else if(S2_RObject2_life == 1)
    {
        push();
        textAlign(LEFT, TOP);
        textSize(20);
        fill('Linen');
        if(S2Object_mod_Special == 0)
        {
            text("The client who received the letter went somewhere because it was softened.\nHe was angry because he was in a bad temper\nuntil just now, but he was depressed in a moment ago.\nWhat the hell was that?", 30, 185, 700, 100);
            text("Mr.o: I think I've completed my mission.\n        But the client's reaction is somewhat dubious.", 30, 415, 700, 100);
        }else if(S2Object_mod_Special == 1)
        {
            text("The client, who received the ring with the letter,\nsuddenly began to bring up his story.\nAfter finishing the story,\nthe client disappeared somewhere as if he was relieved.", 30, 185, 700, 100);
            text("Mr.o: This is a ring I shared with my wife.\n        Looking at this ring, I think I can leave properly now. Thank you.", 30, 415, 700, 100);
        }else false
        pop();
    }

    if(S2_RObject3_life == 0)
    {
        push();
        textAlign(LEFT, TOP);
        textSize(20);
        fill('Linen');
        text("The meaningless bankbook inside the box was buried.\nThere was a lot of money written on the account\nthat I saw at first glance, but It can make it again.", 30, 300, 700, 100);
        pop();
    }else if(S2_RObject3_life == 1)
    {
        push();
        textAlign(LEFT, TOP);
        textSize(20);
        fill('Linen');
        text("And the only thing you brought out was your bankbook.\nWhen I got it reissued, I came out with my own bank account.\nWouldn't you feel good if you saw the number on your account?", 30, 300, 700, 100);
        text("Mr.o: No, I don't think that's it.\n        The building collapsed.", 30, 415, 700, 100);
        pop();
    }
    ButtonsT1(400, 550, 150, 70, "Next ==>", 7);
}

function S3_Result_Output()
{
    push();
    noStroke();
    fill('black');
    rectMode(CENTER);
    rect(width/2, height/2, width, height);
        push();
        fill(34, 195, 187, 100);
        rect(width/2, height/2, width, height);
        fill('white');
        textSize(25);
        text("Result - Stage3", 110, 30);
        pop();
    pop();
    rectMode(CORNER);
    push();
    stroke('white');
    noFill();
    strokeWeight(3);
    rect(20, 60, 750, 345);
    rect(20, 410, 750, 60);
    pop();

    if(S3_RObject1_life == 0)
    {
        push();
        textAlign(LEFT, TOP);
        textSize(20);
        fill('Linen');
        text("As soon as he picked up the body,\nthe factory began to shake and escaped desperately.\n\nThe man's body couldn't bear to come out.", 30, 70, 700, 100);
        pop();
    }else if(S3_RObject1_life == 1)
    {
        push();
        textAlign(LEFT, TOP);
        textSize(20);
        fill('Linen');
        text("As soon as he picked up the body,\nthe factory began to shake and escaped desperately.\n\nThe body that came out was the wrong person's.\n\nOne person can rest in peace.", 30, 70, 700, 100);
        text("Mr.o: The mission failed.\n        But it was a mission that was unlikely to succeed in the first place.", 30, 415, 700, 100);
        pop();
    }

    if(S3_RObject2_life == 0)
    {
        push();
        textAlign(LEFT, TOP);
        textSize(20);
        fill('Linen');
        text("And I don't think I found the client's child.\n\nThe client looked disappointed, but it couldn't be helped.", 30, 185, 700, 100);
        pop();
    }else if(S3_RObject2_life == 1)
    {
        push();
        textAlign(LEFT, TOP);
        textSize(20);
        fill('Linen');
        if(S3Object_mod_Special == 0)
        {
            text("When I found the target and handed it over to the client,\nthe client disappeared after saying thank you.\n\nIt was a strange mission from start to finish.", 30, 185, 700, 100);
            text("Mr.o: I really didn't expect to succeed…\n        By the way, what happened inside?", 30, 415, 700, 100);
        }else if(S3Object_mod_Special == 1)
        {
            text("When I handed over something to the client that\nI couldn't even know if it was found inside the factory\nalong with the request, the client smiled brightly and\ndisappeared in front of me.", 30, 185, 700, 100);
            text("Mr.o: I really didn't expect to succeed…\n        Who the hell is she?", 30, 415, 700, 100);
        }else false
        pop();
    }

    if(S3_RObject3_life == 0)
    {
        push();
        textAlign(LEFT, TOP);
        textSize(20);
        fill('Linen');
        text("And another boy's body was left inside the factory.\nEven though I couldn't get it, I did my best.", 30, 300, 700, 100);
        pop();
    }else if(S3_RObject3_life == 1)
    {
        push();
        textAlign(LEFT, TOP);
        textSize(20);
        fill('Linen');
        text("And then you walked out with the boy's body.\n\nHis parents will be pleased, even though he hasn't completed his mission.", 30, 300, 700, 100);
        text("Mr.o: The mission failed.\n        But it was a mission that was unlikely to succeed in the first place.", 30, 415, 700, 100);
        pop();
    }
    if(S1_Obj == 7 || S2_Obj == 7 || S3_Obj == 4 || S2_Obj_Special == 1 || S3_Obj_Special == 1)
    {
        ButtonsT1(400, 550, 150, 70, "Next ==>", 9);
    }else{
        ButtonsT1(400, 550, 150, 70, "Next ==>", 11);
    }
}

function S4_Result_Output()
{
    push();
    noStroke();
    fill('black');
    rectMode(CENTER);
    rect(width/2, height/2, width, height);
        push();
        fill(34, 195, 187, 100);
        rect(width/2, height/2, width, height);
        fill('white');
        textSize(25);
        text("Result - Stage4", 110, 30);
        pop();
    pop();
    rectMode(CORNER);
    push();
    stroke('white');
    noFill();
    strokeWeight(3);
    rect(20, 60, 750, 345);
    rect(20, 410, 750, 60);
    pop();

    if(S4_RPerson1_life == 0)
    {
        push();
        textAlign(LEFT, TOP);
        textSize(20);
        fill('Linen');
        text("", 30, 70, 700, 100);
        pop();
    }else if(S4_RPerson1_life == 1)
    {
        push();
        textAlign(LEFT, TOP);
        textSize(20);
        fill('Linen');
        text("You made the choice of saving as usual.\n\n\nI don't know if it's a person.", 30, 70, 700, 100);
        text("???: It's just not what I expected.\n        So that's it.", 30, 415, 700, 100);
        pop();
    }
    ButtonsT1(400, 550, 150, 70, "Next ==>", 11);
}