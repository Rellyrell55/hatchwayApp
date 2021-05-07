//const csv = require('csv-parser')
const converter = require('csvtojson')
const fs = require('fs');

const students = require('./students.json')
const marks = require('./marks.json')
const courses = require('./courses.json')
const tests = require('./tests.json')

//Using theses to create the json files for east manipulation
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

converter().fromFile('./CSVs/students.csv')
    .then(students => {
        fs.writeFile('students.json', JSON.stringify(students),(err) => {
            if(err){
                throw err
            }
            console.log("JSON file saved for students")
        })
    })

converter().fromFile('./CSVs/tests.csv')
    .then(tests => {
        fs.writeFile('tests.json', JSON.stringify(tests),(err) => {
            if(err){
                throw err
            }
            console.log("JSON file saved for tests")
        })
    })

//Creating Helper functions to use in the future 
function getStudents(students){
    students.forEach(student => {
        return student['id'], student['name']
    });
}
function getCourses(courses){
    courses.forEach(course => {
        return course['id']
    })
}

function getMarks(marks){
    marks.forEach(mark => {
        return mark["student_id"]
    })
}

function getTestIds(tests){
    tests.forEach(test => {
        return test['id']
    })
}

getStudents(students)
getCourses(courses)
getMarks(marks)
getTestIds(tests)