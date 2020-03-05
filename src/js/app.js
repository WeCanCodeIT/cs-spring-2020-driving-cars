const updateSpeedometer = (speedometerElement, car) => {
    speedometerElement.innerText = car.getSpeed();
}

const makeButtonIntoAccelerator = (accelerator, speedometer, car) => {
    accelerator.addEventListener('click', () => {
        //car.accelerate();
        updateSpeedometer(speedometer, car);
        updateDashBoard();
    })
}

// const wireAcceleratorButton = (car) => {
//     const acceleratorButton = document.querySelector('.floorboard__accelerator');
//     const speedometer = document.querySelector('.dashboard__speedometer');
//     makeAccelerator(acceleratorButton, speedometer, car);
// }

const updateDashBoard = () => {
    updateSpeedometer(speedometerElement, appCar);
}

const acceleratorButton = document.querySelector('.floorboard__accelerator');
const speedometerElement = document.querySelector('.dashboard__speedometer');

const appCar = new Car();
//wireAcceleratorButton(appCar);
makeButtonIntoAccelerator(acceleratorButton, speedometerElement, appCar);

