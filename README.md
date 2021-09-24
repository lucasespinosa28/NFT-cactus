# NFT-cactus
Random generator vector images using javascript
 
![nft](https://user-images.githubusercontent.com/52639395/134718022-e00be820-78ad-4b7a-a065-2095a43cb4a6.gif)

# How this works
### 1 - We have a base svg image 
![cactus](https://user-images.githubusercontent.com/52639395/134718384-78c1450f-8bc8-4cc8-8f83-266ffe9d1c43.png)
### 2 - The function that generates the colors  
```javascript
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
```
### 3 - The SVG base is imported and the random colors are generated
```javascript
 let data = fs.readFileSync('cactus.svg', 'utf8')
 const cactusColors = CactusColors()
 data = data.replace(/#88b94d/g,cactusColors[0])
 data = data.replace(/#094704/g,cactusColors[1])
 data = data.replace(/#ff9f00/g,cactusColors[2])
```
### 4 - The objects are removed let only one per category
```javascript
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
 ```
