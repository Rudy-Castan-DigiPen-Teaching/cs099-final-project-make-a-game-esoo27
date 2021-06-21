// Name       : Jonghyeon Lee
// Assignment : 30_velocity_particles_array
// Course     : CS099
// Spring 2021

class particle
{
    constructor(start_x, start_y)
    {
        this.position = new Vec2(start_x, start_y);
        this.velocity = new Vec2(1, 0);
        const speed = random(4, 12);
        const direction = random(TWO_PI);
        this.velocity.setLength(speed);
        this.velocity.setAngle(direction);
    }

    update()
    {
        this.position.addTo(this.velocity);
    }

    draw()
    {
        push();
        noStroke();
        fill(random(150, 178), random(29, 34), random(29, 34));
        ellipse(this.position.x, this.position.y, 2, 6);
        pop();
    }
}

function mousePressed()
{
    for(let i = 0; i < Particle_Number; ++i)
    {
        explosion.push(new particle(mouseX, mouseY));
    }
}