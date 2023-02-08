import * as p5 from 'p5'

export const sketch = (p: p5) => {
    let xC = 0, xO = 0, xD = 0, xI = 0, xN = 0, xG = 0
    let yC = 45, yO = 45, yD = 45, yI = 45, yN = 45, yG = 45
    const wi = p.displayWidth / 2
    const he = p.displayHeight
    const maxPosition = (he / 2) + 100
    let finG = "PROCESS"

    p.setup = () => {
        p.createCanvas(wi, he)
        xO = 135;
        xD = xO + 165
        xI = xD + 169
        xN = xI + 30
        xG = xN + 125
        p.textSize(250)

    }

    p.draw = () => {
        p.background(0)
        if (finG === "RESET") {
            p.textSize(250)
            finG = "PROCESS"
            yC = 45
            yO = 45
            yD = 45
            yI = 45
            yN = 45
            yG = 45
            delay(2000)
        }

        if (yC % 2 == 0) {
            p.textSize(100)
            delay(95)
        } else {
            p.textSize(250)
            delay(95)
        }


        p.fill(255)
        p.text("C", xC, yC)
        if (yC < maxPosition) yC += 15

        p.text("O", xO, yO)
        if (yO < maxPosition) yO += 15

        p.text("D", xD, yD)
        if (yD < maxPosition) yD += 15

        p.text("i", xI, yI)
        if (yI < maxPosition) yI += 15

        p.text("n",xN,yN)
        if(yN < maxPosition) yN += 15

        p.text("g",xG,yG)
        if(yG < maxPosition){
            yG += 15
        }else{
            if(finG === "PROCESS") finG = "RESET"
        }

    }


    function delay(milliseconds: number) {
        var start = new Date().getTime()
        var stop = false
        while (!stop) {
            if ((new Date().getTime() - start) > milliseconds) {
                stop = true
            }
        }
    }

}

export const myp5 = new p5(sketch, document.body)