class Car {
    constructor() {
        this._speed = 0;
        this._engineHealth = 100;
    }

    accelerate() {   
        this._speed += 10;
    }

    brake() {  
        this._speed -= 10; 
    }

    getEngineHealth() { 
        return this._engineHealth;
    }

    getSpeed() { 
        return this._speed;  
    }
}