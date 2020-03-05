const updateSpeedometer = (speedometerElement, carObject) => {
    speedometerElement.innerText = carObject.getSpeed();
}

const makeAcceleratorButton = (acceleratorElement, speedometerElement, carObject) => {
    acceleratorElement.addEventListener('click', ()=>{
        carObject.accelerate();
        updateSpeedometer(speedometerElement, carObject);
    })
}