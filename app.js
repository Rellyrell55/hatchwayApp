//const csv = require('csv-parser')
const converter = require('csvtojson')
const fs = require('fs');

converter().fromFile('./CSVs/courses.csv')
    .then(courses => {
        fs.writeFile('courses.json', JSON.stringify(courses), (err) => {
            if(err){
                throw err
            }
            console.log("JSON file saved for courses")
        })
        

    }).catch(err => {
        console.log(err)
    })

converter().fromFile('./CSVs/marks.csv')
    .then(marks => {
        fs.writeFile('marks.json', JSON.stringify(marks), (err) => {
            if(err){
                throw err 
            }
            console.log("JSON file saved for marks")
        })
    })

// converter().fromFile('./CSVs/students.csv')
//     .then(students => {
//         fs.writeFile('students.json', JSON.stringify(students),(err) => {
//             if(err){
//                 throw err
//             }
//             console.log("JSON file saved for students")
//         })
//     })

