const updateSpeedometer = (speedometerElement, carObject) => {
    speedometerElement.innerText = carObject.getSpeed();
}

const makeAcceleratorButton = (acceleratorElement, speedometerElement, carObject) => {
    acceleratorElement.addEventListener('click', ()=>{
        carObject.accelerate();
        updateSpeedometer(speedometerElement, carObject);
    })
}

const acceleratorElement = document.querySelector('.floorboard__accelerator');
const speedometerElement = document.querySelector('.dashboard__speedometer');
const appCar = new Car();

makeAcceleratorButton(acceleratorElement, speedometerElement, appCar);
updateSpeedometer(speedometerElement, appCar);