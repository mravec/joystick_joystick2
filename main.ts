joystickbit.onButtonEvent(joystickbit.JoystickBitPin.P14, joystickbit.ButtonType.down, function () {
    radio.sendValue("t", 5)
})
input.onButtonPressed(Button.A, function () {
    radio.sendValue("t", 1)
})
joystickbit.onButtonEvent(joystickbit.JoystickBitPin.P15, joystickbit.ButtonType.down, function () {
    radio.sendValue("t", 6)
})
input.onButtonPressed(Button.B, function () {
    radio.sendValue("t", 2)
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    radio.sendValue("t", 0)
})
joystickbit.onButtonEvent(joystickbit.JoystickBitPin.P13, joystickbit.ButtonType.down, function () {
    radio.sendValue("t", 4)
})
joystickbit.onButtonEvent(joystickbit.JoystickBitPin.P12, joystickbit.ButtonType.down, function () {
    radio.sendValue("t", 3)
})
let y = 0
let x = 0
basic.showLeds(`
    # # # # #
    . . # . .
    . . # . .
    . . # . .
    . . # . .
    `)
radio.setGroup(1)
basic.forever(function () {
    x = Math.map(joystickbit.getRockerValue(joystickbit.rockerType.X), 1023, 0, -100, 100)
    y = Math.map(joystickbit.getRockerValue(joystickbit.rockerType.Y), 1023, 0, -100, 100)
    radio.sendValue("x", x)
    radio.sendValue("y", y)
})
