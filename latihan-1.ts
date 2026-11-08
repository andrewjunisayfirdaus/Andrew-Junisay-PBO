class Enemy{
    hp: number;
    attack : number;
    defense : number;
    speed: number;
    dead: boolean = false;

    attacking(): number {
        return this.attack;
    }
    walking(): number {
        return this.speed;
    }

    isDead(): boolean {
        return (this.dead = true);
    }

}