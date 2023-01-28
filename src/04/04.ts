import {usersObj} from "./04.test";


test('should select corresponding user from obj', ()=>{
    expect(usersObj[0]).toBe('Alex')
    expect(usersObj[1]).toBe('Ser')
    expect(usersObj[2]).toBe('Dima')
    expect(usersObj[3]).toBe('Anna')
})