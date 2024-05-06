let getal = 0
input.onButtonPressed(Button.A, function () {
    basic.showNumber(getal)
    getal += -1
})
input.onButtonPressed(Button.B, function () {
    basic.showNumber(getal)
    getal += 1
})
basic.forever(function () {
    basic.showNumber(getal)
    getal += 1
})
