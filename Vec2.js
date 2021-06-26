// Name       : Jonghyeon Lee
// Assignment : make_a_game
// Course     : CS099
// Spring 2021

//Vector

class Vec2{
    constructor(x = 0, y = 0)
    {
        this.x = x;
        this.y = y;
    }

    getAngle()
    {
        const angle = atan2(this.y, this.x);
        return angle;
    }

    setAngle(angle_in_radian)
    {
        const length = this.getLength();
        this.x = cos(angle_in_radian) * length;
        this.y = sin(angle_in_radian) * length;
    }

    getLength()
    {
        const length = sqrt(this.x * this.x + this.y * this.y);
        return length;
    }

    setLength(length)
    {
        const angle_in_radian = this.getAngle();
        this.x = cos(angle_in_radian) * length;
        this.y = sin(angle_in_radian) * length;
    }

    add(other_vector)
    {
        const xn = this.x + other_vector.x;
        const yn = this.y + other_vector.y;
        return new Vec2(xn, yn);
    }

    addTo(other_vector)
    {
        this.x += other_vector.x;
        this.y += other_vector.y;
    }

    subtract(other_vector)
    {
        const xn = this.x - other_vector.x;
        const yn = this.y - other_vector.y;
        return new Vec2(xn, yn);
    }

    subtractFrom(other_vector)
    {
        this.x -= other_vector.x;
        this.y -= other_vector.y;
    }

    multiply(scalar)
    {
        const xn = scalar * this.x;
        const yn = scalar * this.y;
        return new Vec2(xn, yn);
    }

    multiplyBy(scalar)
    {
        this.x *= scalar;
        this.y *= scalar;
    }

    divide(scalar)
    {
        const xn = this.x / scalar;
        const yn = this.y / scalar;
        return new Vec2(xn, yn);
    }

    divideBy(scalar)
    {
        this.x /= scalar;
        this.y /= scalar;
    }
}