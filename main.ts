let TIMER = 0
input.onButtonPressed(Button.A, function () {
    TIMER = randint(5, 15)
    basic.showIcon(IconNames.StickFigure)
    while (TIMER > 0) {
        TIMER += -1
        basic.pause(1000)
    }
    basic.showIcon(IconNames.Skull)
})
basic.forever(function () {
	
})
