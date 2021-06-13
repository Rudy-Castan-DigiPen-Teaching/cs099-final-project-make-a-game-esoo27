// Name       : Jonghyeon Lee
// Assignment : make_a_game
// Course     : CS099
// Spring 2021

class Hand
{
    constructor(x, y)
    {
        this.x = x;
        this.y = y;
    }

    update()
    {
        this.y += random(-1, 1)

        if(this.y == 455 || this.y == 440)
        {
            this.y = 450
        }else false
    }

    draw()
    {
        const Hand_sizeW = 200;
        const Hand_sizeH = 180;
        image(HandL, this.x - 200, this.y, Hand_sizeW, Hand_sizeH);
        image(HandR, this.x + 200, this.y, Hand_sizeW, Hand_sizeH);
    }
}