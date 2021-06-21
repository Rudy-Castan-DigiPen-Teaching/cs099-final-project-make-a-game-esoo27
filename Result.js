// Name       : Jonghyeon Lee
// Assignment : make_a_game
// Course     : CS099
// Spring 2021

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