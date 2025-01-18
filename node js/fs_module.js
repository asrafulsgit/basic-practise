

// const fs = require('fs') // fs means : file system

// write file
/*fs.writeFile('fs.txt','this is the first line',(err)=>{
     if(err){
          console.log('this content is not working',err)
     }
     console.log('content successfully added')
})*/

// read file
/*fs.readFile('fs.txt','utf8',(err,content)=>{
     if(err){
          console.log('file is not read properly')
     }
     console.log(content)
})*/

// append file

// fs.appendFile('fs.txt','\nthis is the second line',(err)=>{
//      if(err){
//           console.log('this content is not added')
//      }
//      console.log('content is added')
// })

// update line using async/await 
// udate line means line overwrite


const fs = require('fs/promises')

const newContent = 'this line is updated'
const lineNumber = 2
const fileName = 'fs.txt'
const updating = async(fileName,lineNumber,newContent)=>{
    const data = await fs.readFile(fileName,'utf8')
    const totalLine = data.split('\n')

    if(lineNumber > totalLine.length ||  lineNumber < 1){
     console.log('invalid line number')
    }
    totalLine[lineNumber-1]=newContent  // udate line
     //   totalLine.splice(lineNumber -1,2) // delete line
    await fs.writeFile(fileName,totalLine.join('\n'))
    console.log('file is updated')
}
updating(fileName,lineNumber,newContent)

