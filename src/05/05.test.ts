import {
    addBook, addNewJob,
    changeBooks,
    hairdresser,
    moveUser,
    upgradeLaptop, userNewJobType,
    userType,
    userWithbook,
    userWithLaptopType
} from "./05";


test('should select corresponding user from obj', () => {
    let user: userType = {
        name: 'alex',
        hair: 30,
        city: {title: 'Moscow'}
    }
    let awesom = hairdresser(user, 2)

    expect(awesom.hair).toBe(15)
    expect(user.hair).toBe(30)
    expect(awesom.city.title).toBe('Moscow')
})

test('change adress title ', () => {
    let user: userWithLaptopType = {
        name: 'alex',
        hair: 30,
        city: {title: 'Moscow'},
        laptop: {title: 'Mak'}
    }
    let awesom = moveUser(user, 'Kiev')

    expect(awesom.city.title).toBe('Kiev')
    expect(user.city.title).toBe('Moscow')

})

test('upgrade laptop to Mak  ', () => {
    let user: userWithLaptopType = {
        name: 'alex',
        hair: 30,
        city: {title: 'Moscow'},
        laptop: {title: 'Asus'}
    }
    let awesom = upgradeLaptop(user, 'Mac')

    expect(awesom.laptop.title).toBe('Mac')
    expect(user.laptop.title).toBe('Asus')

})
test('add read books  ', () => {
    let user: userWithbook = {
        name: 'alex',
        hair: 30,
        city: {title: 'Moscow'},
        laptop: {title: 'Asus'},
        book: ['css', 'html', 'react']
    }
    let newBook = addBook(user, 'redux')

    expect(newBook.book[3]).toBe('redux')
    expect(user.book.length).toBe(3)
    expect(newBook.book.length).toBe(4)

})

test('change books  ', () => {
    let user: userWithbook = {
        name: 'alex',
        hair: 30,
        city: {title: 'Moscow'},
        laptop: {title: 'Asus'},
        book: ['css', 'html', 'react']
    }
    let nBook = changeBooks(user, 'react', 'redux')

    expect(nBook.book[2]).toBe('redux')
    expect(user.book[2]).toBe('react')
    expect(user.book.length).toBe(3)
    expect(nBook.book.length).toBe(3)


})

test('add work  ', () => {
    let user: userNewJobType = {
        name: 'alex',
        hair: 30,
        city: {title: 'Moscow'},
        company: [
            {id: 1, job: 'Treder'},
            {id: 2, job: 'Trener'},
        ]

    }
    let newJob = addNewJob(user, 3, 'IT')

    expect(newJob.company.length).toBe(3)
    expect(newJob.company[2].job).toBe('IT')
    expect(user.company[2]).toBe(undefined)




})