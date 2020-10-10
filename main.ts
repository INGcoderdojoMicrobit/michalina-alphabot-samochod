radio.onReceivedString(function (receivedString) {
    if (receivedString == "E") {
        AlphaBot2.RunDelay(Dir.forward, 50, 1)
    }
})
basic.showIcon(IconNames.Asleep)
radio.setGroup(123)
basic.forever(function () {
	
})
