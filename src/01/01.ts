export type CityType = {
    title: string,
    houses: Array<housesType>,
    governmentBuildings: governmentBuildingsType[],
    citizensNumber: number
}
type housesType = {
    buildedAt: number
    repaired: boolean
    address: adressType
}
type adressType = {
    number: number
    street: streetType
}

type streetType = {
    title: string
}
type governmentBuildingsType = {
    type: string
    budget: number
    staffCount: number
    address: {
        street: {
            title: string
        }
    }
}

