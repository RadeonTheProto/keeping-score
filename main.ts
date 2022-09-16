input.onButtonPressed(Button.A, function () {
    Team_one += 1
    basic.showString("TEAM 1 HAS SCORED")
    basic.clearScreen()
})
input.onButtonPressed(Button.AB, function () {
    Team_two += 1
    Team_one += 1
    basic.showString("TIE")
    basic.clearScreen()
})
input.onButtonPressed(Button.B, function () {
    Team_two += 1
    basic.showString("TEAM 2 HAS SCORED")
    basic.clearScreen()
})
let Team_one = 0
let Team_two = 0
basic.forever(function () {
	
})
