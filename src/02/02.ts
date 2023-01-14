// export type CityType={
//     title: string,
//     houses: Array<housesType>,
//     governmentBuildings: Array<>,
//     citizensNumber: number
// }
// type housesType={
//     id:number
//     buildedAt:number
//     repaired:boolean
//     address:adressType
// }
// type adressType={
//     number:number
//     street:streetType
// }
//
// type streetType = {
//     title:string
// }

import {CityType} from "../01/01";

export function demolishHousesOnTheStreet(city:CityType, street: string){
  return city.houses= city.houses.filter(h=>h.address.street.title !==street)

}