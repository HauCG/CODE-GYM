// Create a lamp and a switch
    let electricLamp_1 = new ELamp(false);
    let switchButton_1 = new Switch(electricLamp_1, false);

    // Function to update the status on the page
    function updateStatus() {
    document.getElementById('status').innerHTML = `Lamp status: ${switchButton_1.getStatus()}`;
}

    // Simulate switching on and off 10 times
    for (let i = 0; i < 10; i++) {
    if (i % 2 === 0) {
    switchButton_1.switchOn();
} else {
    switchButton_1.switchOff();
}
    updateStatus();
}
