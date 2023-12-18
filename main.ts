radio.onReceivedString(function (receivedString) {
    if (receivedString == "forward") {
        xgo.move_xgo(xgo.direction_enum.Forward, 80)
        basic.showLeds(`
            . . # . .
            . # # # .
            # . # . #
            . . # . .
            . . # . .
            `)
    } else if (receivedString == "stop") {
        xgo.move_xgo(xgo.direction_enum.Forward, 0)
        xgo.move_xgo(xgo.direction_enum.Backward, 0)
        xgo.rotate(xgo.rotate_enum.Left, 0)
        xgo.rotate(xgo.rotate_enum.Right, 0)
        basic.showLeds(`
            # # # # #
            # . . . .
            # # # # #
            . . . . #
            # # # # #
            `)
    } else if (receivedString == "backward") {
        xgo.move_xgo(xgo.direction_enum.Backward, 80)
        basic.showLeds(`
            . . # . .
            . . # . .
            # . # . #
            . # # # .
            . . # . .
            `)
    } else if (receivedString == "left") {
        basic.showLeds(`
            . . # . .
            . . . # .
            # # # . #
            . . . # .
            . . # . .
            `)
        xgo.rotate(xgo.rotate_enum.Left, 80)
    } else if (receivedString == "right") {
        basic.showLeds(`
            . . # . .
            . . . # .
            # # # . #
            . . . # .
            . . # . .
            `)
        xgo.rotate(xgo.rotate_enum.Right, 80)
    } else if (receivedString == "sit") {
        xgo.execution_action(xgo.action_enum.Sit_down)
    } else {
        xgo.move_xgo(xgo.direction_enum.Forward, 0)
        xgo.rotate(xgo.rotate_enum.Right, 0)
        xgo.rotate(xgo.rotate_enum.Left, 0)
        basic.showLeds(`
            # # # # #
            # . . . .
            # # # # #
            . . . . #
            # # # # #
            `)
    }
})
input.onButtonPressed(Button.B, function () {
    if (flip == 0) {
        basic.showString("" + (xgo.get_electric_quantity()))
        flip = 1
    } else {
        basic.clearScreen()
        flip = 0
    }
})
let flip = 0
radio.setGroup(1)
flip = 0
xgo.init_xgo_serial(SerialPin.P14, SerialPin.P13)
