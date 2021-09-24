fs = require('fs');
const jsdom = require("jsdom");
const { JSDOM } = jsdom;
var randomColor = require('randomcolor');

const colorNames = ['red', 'orange', 'yellow', 'green', 'blue', 'purple', 'pink']

random1To = (number) => {
    return Math.floor((Math.random() * number) + 1);
}

CactusColors = () => {
    const colorName = colorNames[random1To(7)]
     return [
        randomColor({
            luminosity: 'light',
            hue: colorName
        }),
        randomColor({
            luminosity: 'dark',
            hue: colorName
        }),
        randomColor({
            hue: colorNames[random1To(7)]
        })
    ]
}

function generateCactus(name){
    try {
        let data = fs.readFileSync('cactus.svg', 'utf8')
        const cactusColors = CactusColors()
        data = data.replace(/#88b94d/g,cactusColors[0])
        data = data.replace(/#094704/g,cactusColors[1])
        data = data.replace(/#ff9f00/g,cactusColors[2])
    
        let original = new JSDOM(data)
        const EyeId = random1To(7)
        for (let eyeIndex = 1; eyeIndex <= 7; eyeIndex++) {
            if(eyeIndex != EyeId){
                original.window.document.getElementById(`Pair-of-eyes-${eyeIndex}`).remove()  
            }
        }
        const mouthId = random1To(5)
        for (let mouthIndex = 1; mouthIndex <= 5; mouthIndex++) {
            if(mouthIndex != mouthId){
                original.window.document.getElementById(`Mouth-${mouthIndex}`).remove()  
            }
        }
        const ornamentId = random1To(5)
        for (let ornamenIndex = 1; ornamenIndex <= 5; ornamenIndex++) {
            if(ornamenIndex != ornamentId){
                original.window.document.getElementById(`Ornament-${ornamenIndex}`).remove()  
            }
        }
        fs.writeFileSync(`./images/${name}.svg`, original.serialize())
    } catch (err) {
        console.error(err)
      }
}

function main(){
    for (let index = 1; index <= 100; index++) {
        generateCactus(`Cactus${index}`)
    }
}

main()