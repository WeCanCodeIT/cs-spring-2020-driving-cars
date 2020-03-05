describe('app.js manipulates the DOM to reflect the status of a Car object.', () => {
    
    beforeEach(() => {
        
    });
    describe('showSpeed() - As the car accelerates, the innerText of the passed element reflects the cars speed.', () => {
        it('Without accelerating the car speed should be 0.', () => {  

        });

        it('After accelerating the car speed should be 10.', () => {  

        });
    });

    describe('showSpeed() - As the car brakes, the innerText of the passed element reflects the cars speed.', () => {
        it('Braking to 10 should show a speed of 10.', () => {
            
        });
    });

    describe('makeAccelerator() - Creates an accelerator button out of the passed button, calls accelerate() one time when clicked.', () => {
        it('Clicking once on the new accelerator will increase the car\'s speed.', () => {
            
        });

        it('Clicking once on the accelerator will increase the speedometer elements innerText to \'10\'.', () => {
           
        });
    });
    describe('updateCheckEngineLight() - Changes the text and color of the passed element.', () => {
        beforeEach(() => {
            
        })
        describe('When engine health goes below 100, the check engine light turns amber.', () => {
            it('Perfect engine health should leave light off.', () => {
                
            });
            it('Engine health of 90 should turn light on.', () => {
                
            });
        });
    });
});
describe('The app.js file wires the elements of the Car.js and index.html files together.', () => {
    describe('The accelerator increases the displayed speed of the car.', () => {
       

        it('Hitting the accelerator once should increase the displayed speed to 10.', () => {
            
        })
    })
});