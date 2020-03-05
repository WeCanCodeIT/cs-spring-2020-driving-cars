describe('Car should behave like a car:', () => {
    let underTest;
    
    beforeEach(() => {
        underTest = new Car();
    })

    describe('Car should accelerate:', () => {
        describe('When gas goes smash,', () => {   
            it('it should go faster by 10 mph!', function(){
                underTest.accelerate();
                
                expect(underTest.getSpeed()).toBe(10);
            })
        });

        describe('Car engine health goes down if speed is over 60', () => { 
        });

    });

    describe('Car should slow down:', () => {
        describe('When brake is pressed,', () => {
            it('it should slow by 10 mph', ()=>{
                underTest.accelerate();
                underTest.accelerate();

                underTest.brake();

                expect(underTest.getSpeed()).toBe(10);
            })
        })
    })
    
});