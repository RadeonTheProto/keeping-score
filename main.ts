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
input.onGesture(Gesture.Shake, function () {
    if (Team_one != Team_two) {
        basic.showString("Team one has")
        basic.showString("" + (Team_one))
        basic.showString("points")
        basic.pause(2000)
        basic.showString("Team two has")
        basic.showString("" + (Team_two))
        basic.showString("points")
        basic.clearScreen()
    } else {
        basic.showString("The teams are tied")
    }
})
let Team_two = 0
let Team_one = 0
Team_one = 0
Team_two = 0
basic.forever(function () {
	
})
