joystickbit.onButtonEvent(joystickbit.JoystickBitPin.P12, joystickbit.ButtonType.up, function () {
    radio.sendValue("t", 3)
    basic.showNumber(3)
})
joystickbit.onButtonEvent(joystickbit.JoystickBitPin.P13, joystickbit.ButtonType.up, function () {
    radio.sendValue("t", 4)
    basic.showNumber(4)
})
input.onButtonPressed(Button.A, function () {
    radio.sendValue("t", 1)
    basic.showNumber(1)
})
input.onButtonPressed(Button.AB, function () {
    radio.sendValue("t", 8)
    basic.showNumber(8)
})
joystickbit.onButtonEvent(joystickbit.JoystickBitPin.P15, joystickbit.ButtonType.up, function () {
    radio.sendValue("t", 6)
    basic.showNumber(6)
})
input.onButtonPressed(Button.B, function () {
    radio.sendValue("t", 2)
    basic.showNumber(2)
})
joystickbit.onButtonEvent(joystickbit.JoystickBitPin.P14, joystickbit.ButtonType.up, function () {
    radio.sendValue("t", 5)
    basic.showNumber(5)
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    radio.sendValue("t", 0)
    basic.showNumber(0)
})
let y = 0
let x = 0
basic.showLeds(`
    . . . . #
    . . . . #
    . . . . #
    . # . . #
    . . # # .
    `)
joystickbit.initJoystickBit()
radio.setGroup(1)
basic.forever(function () {
    x = Math.map(joystickbit.getRockerValue(joystickbit.rockerType.X), 1023, 0, -100, 100)
    y = Math.map(joystickbit.getRockerValue(joystickbit.rockerType.Y), 1023, 0, -100, 100)
    radio.sendValue("x", x)
    radio.sendValue("y", y)
})
