radio.onReceivedNumber(function (receivedNumber) {
    AlphaBot2.MotorRun(Motors.M1, receivedNumber)
    AlphaBot2.MotorRun(Motors.M2, receivedNumber)
})
radio.onReceivedString(function (receivedString) {
    if (receivedString == "E") {
        AlphaBot2.RunDelay(Dir.forward, 70, 1)
    } else if (receivedString == "C") {
        AlphaBot2.RunDelay(Dir.backward, 70, 1)
    } else if (receivedString == "D") {
        AlphaBot2.RunDelay(Dir.turnRight, 50, 0.3)
    } else if (receivedString == "F") {
        AlphaBot2.RunDelay(Dir.turnLeft, 50, 0.3)
    }
})
radio.onReceivedValue(function (name, value) {
    if (name == "v") {
        AlphaBot2.MotorRun(Motors.M1, value)
    } else if (name == "v2") {
        AlphaBot2.MotorRun(Motors.M2, value)
    } else {
    	
    }
})
basic.showIcon(IconNames.Asleep)
radio.setGroup(123)
basic.forever(function () {
	
})
