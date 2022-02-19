const val1 = document.getElementById("val1")
const val2 = document.getElementById("val2")
const val3 = document.getElementById("val3")
const val4 = document.getElementById("val4")
const val5 = document.getElementById("val5")

window.midi_api.receiveMidi((event, val) => {
    if (val == "144,64,127") {
        setLevel(0)
    } else if (val == "144,0,127") {
        setLevel(1)
    } else if (val == "144,8,127") {
        setLevel(2)
    } else if (val == "144,16,127") {
        setLevel(3)
    } else if (val == "144,24,127") {
        setLevel(4)
    } else if (val == "144,32,127") {
        setLevel(5)
    }
})

const setLevel = (level) => {
    if (level == 0) {
        window.midi_api.sendMidi([144, 32, 0])
        window.midi_api.sendMidi([144, 24, 0])
        window.midi_api.sendMidi([144, 16, 0])
        window.midi_api.sendMidi([144, 8, 0])
        window.midi_api.sendMidi([144, 0, 0])

        val5.classList.add("black")
        val5.classList.remove("red")

        val4.classList.add("black")
        val4.classList.remove("yellow")

        val3.classList.add("black")
        val3.classList.remove("green")

        val2.classList.add("black")
        val2.classList.remove("green")

        val1.classList.add("black")
        val1.classList.remove("green")
    } else if (level == 1) {
        window.midi_api.sendMidi([144, 32, 0])
        window.midi_api.sendMidi([144, 24, 0])
        window.midi_api.sendMidi([144, 16, 0])
        window.midi_api.sendMidi([144, 8, 0])
        window.midi_api.sendMidi([144, 0, 1])

        val5.classList.add("black")
        val5.classList.remove("red")

        val4.classList.add("black")
        val4.classList.remove("yellow")

        val3.classList.add("black")
        val3.classList.remove("green")

        val2.classList.add("black")
        val2.classList.remove("green")

        val1.classList.add("green")
        val1.classList.remove("black")
    } else if (level == 2) {
        window.midi_api.sendMidi([144, 32, 0])
        window.midi_api.sendMidi([144, 24, 0])
        window.midi_api.sendMidi([144, 16, 0])
        window.midi_api.sendMidi([144, 8, 1])
        window.midi_api.sendMidi([144, 0, 1])

        val5.classList.add("black")
        val5.classList.remove("red")

        val4.classList.add("black")
        val4.classList.remove("yellow")

        val3.classList.add("black")
        val3.classList.remove("green")

        val2.classList.add("green")
        val2.classList.remove("black")

        val1.classList.add("green")
        val1.classList.remove("black")
    } else if (level == 3) {
        window.midi_api.sendMidi([144, 32, 0])
        window.midi_api.sendMidi([144, 24, 0])
        window.midi_api.sendMidi([144, 16, 1])
        window.midi_api.sendMidi([144, 8, 1])
        window.midi_api.sendMidi([144, 0, 1])

        val5.classList.add("black")
        val5.classList.remove("red")

        val4.classList.add("black")
        val4.classList.remove("yellow")

        val3.classList.add("green")
        val3.classList.remove("black")

        val2.classList.add("green")
        val2.classList.remove("black")

        val1.classList.add("green")
        val1.classList.remove("black")
    } else if (level == 4) {
        window.midi_api.sendMidi([144, 32, 0])
        window.midi_api.sendMidi([144, 24, 5])
        window.midi_api.sendMidi([144, 16, 1])
        window.midi_api.sendMidi([144, 8, 1])
        window.midi_api.sendMidi([144, 0, 1])

        val5.classList.add("black")
        val5.classList.remove("red")

        val4.classList.add("yellow")
        val4.classList.remove("black")

        val3.classList.add("green")
        val3.classList.remove("black")

        val2.classList.add("green")
        val2.classList.remove("black")

        val1.classList.add("green")
        val1.classList.remove("black")
    } else if (level == 5) {
        window.midi_api.sendMidi([144, 32, 3])
        window.midi_api.sendMidi([144, 24, 5])
        window.midi_api.sendMidi([144, 16, 1])
        window.midi_api.sendMidi([144, 8, 1])
        window.midi_api.sendMidi([144, 0, 1])

        val5.classList.add("red")
        val5.classList.remove("black")

        val4.classList.add("yellow")
        val4.classList.remove("black")

        val3.classList.add("green")
        val3.classList.remove("black")

        val2.classList.add("green")
        val2.classList.remove("black")

        val1.classList.add("green")
        val1.classList.remove("black")
    }
}