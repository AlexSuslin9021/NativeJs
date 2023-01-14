export type CityType={
    title: string,
    houses: Array<housesType>,
    governmentBuildings: Array<>,
    citizensNumber: number
}
type housesType={
    buildedAt:number
    repaired:boolean
    address:adressType
}
type adressType={
    number:number
    street:streetType
}

type streetType = {
    title:string
}

