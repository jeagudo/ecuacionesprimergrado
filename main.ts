input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    if (contador == 1) {
        contador = 2
        basic.showString("b=")
        basic.showNumber(b)
    } else if (contador == 2) {
        contador = 3
        basic.showString("c=")
        basic.showNumber(c)
    } else {
        basic.showString("x=")
        basic.showNumber((c - b) / a)
        soundExpression.giggle.playUntilDone()
    }
})
input.onButtonPressed(Button.A, function () {
    if (contador == 1) {
        a = 0 - a
        basic.showNumber(a)
    } else if (contador == 2) {
        b = 0 - b
        basic.showNumber(b)
    } else {
        c = 0 - b
        basic.showNumber(c)
    }
})
input.onButtonPressed(Button.B, function () {
    if (contador == 1) {
        a = a + 1
        basic.showNumber(a)
    } else if (contador == 2) {
        b = b + 1
        basic.showNumber(b)
    } else {
        c = c + 1
        basic.showNumber(c)
    }
})
let contador = 0
let c = 0
let b = 0
let a = 0
a = 1
b = 1
c = 1
contador = 1
basic.showString("a=")
basic.showNumber(a)
basic.forever(function () {
	
})
