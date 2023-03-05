export type userType={
    name:string
    hair:number
    city:{title:string}
}
type laptopType={
  title:string
}
export type userWithLaptopType= userType & {
    laptop:laptopType

}
export type userNewJobType= userType & {
    company:{id:number, job:string}[]

}
export type userWithbook= userWithLaptopType & {
    book:string[]
}

export function hairdresser(user:userType, power:number){
    const copy={...user}
    copy.hair=user.hair/power
    return copy

}
export function moveUser(user:userWithLaptopType, city:string){
    let copy ={...user, city:{...user.city, title:city,}}

    return copy
}
 export function upgradeLaptop(user:userWithLaptopType, nameTop:string){
    return{...user, laptop: {...user.laptop, title:nameTop} }
 }

export function addBook(user:userWithbook, nameBool:string){
    return{...user, book: [...user.book, nameBool]}
}
export function changeBooks(user:userWithbook,nameOldBook:string, nameBool:string){
            return {...user, book: [...user.book.map(b=>b!==nameOldBook ? b:nameBool)]}
}
export function addNewJob(user:userNewJobType,id:number, newJob:string){
    let newCompany = {id: id, job: newJob}
            return{...user, company: [...user.company,newCompany] }
}