describe('Car should behave like a car:', () => {
    let underTest;
    
    beforeEach(() => {
        underTest = new Car();
    });

    describe('Car can save state, and return it to us:', () => {
        it('Should return initial speed of 0', () =>{
            expect(underTest.getSpeed()).toBe(0);
        });

        it('Should return initial engine health as 100', () => {
            expect(underTest.getEngineHealth()).toBe(100);
        });
    });

    describe('Car can accelerate:', () => {
        it('Should go faster by 10 mph!', () => {
            underTest.accelerate();
            expect(underTest.getSpeed()).toBe(10);
        });
    });

    describe('Car should slow down:', () => {
        it('Should slow down by 10 mph', () => {
            underTest.accelerate();
            underTest.accelerate();
            underTest.brake();
            expect(underTest.getSpeed()).toBe(10);
        })
    })
    
});