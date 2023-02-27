// CRUD - Explonation
// C - Create
// use sprea [...], distracture
// R - Read
// filter, sort, includes, find
// U - Update
// filter, find
// D - Delete
// filter, splice
// Array

let students =  [
{id: 1, year: 1994, name: 'Nursulton Boysariyev'},
{id: 2, year: 2007, name: 'Jamshid Otaboyev'},
{id: 3, year: 2001, name: 'Laylo Tursunboyev'},
{id: 4, year: 2003, name: 'Xurshid Shukurov'},
{id: 5, year: 2000, name: 'Azim Nurmirzayev'},
{id: 6, year: 1993, name: 'Bekjon Topilov'},
{id: 7, year: 2004, name: 'Samar Mominov'},
{id: 8, year: 2001, name: 'Bek Eshpulatov'},
{id: 9, year: 1998, name: 'Ismon Hudoyqul'}
]

// Read

// let sortByYear = () => {
//     let res = students.sort((a, b) => a.year - b.year)
//     students = res;
// }

// let sortByAlphabet = () => {
//     let res = students.sort((a, b) => a.name.localeCompare(b.name))
//     students = res;
// }
// sortByAlphabet()
// console.log(students);

// Includes
const getFilter = (key) => {
    let res = students.filter(value => 
        value.name.toLowerCase().includes(key.toLowerCase())
    );
    students = res
}

getFilter('Asilbek')
console.log(students);

// Delete qilish uchun filterdan foydalaniladi mapdan foyldanalmidi chunki mapdan false disaylik falsdiham chiqarib beradi

// const deleteUser = (id) => {
//     let res = students.filter((value) => value.id !== id);
//     students = res
// }
// deleteUser(4)
// console.log(students);

// Create

// biz push qilsak boladi lekin real projectda push yo'q 
// const addUser = (user) => {
//     students =  [...students, {...user, id: students.length + 1}]
//     // console.log(user);
//     // user.push()
// }
// addUser({name: 'Webbrain', year: 2019 })

// Update

// const updateUser = (data) => {
//     let res = students.map((value)=> value.id === data.id ? 1 : 2);
//     students = res
// }
// updateUser({id:2, type: 'name', value: 'Gulbashak'})
// console.log(students);