export default interface Home{
    objectID: string,
    type: string,
    description:  string,
    note:  string,
    reviewCount:  number,
    reviewValue:  number,
    features: Array<string>,
    pricePerNight: number,
    location: Location,
    guests:number,
    bedrooms:  number,
    beds:  number,
    bathrooms:  number,
    images: Array<string>,
    _geoloc: Geoloc

}

interface Location{
    address: string,
    city:  string,
    state: string,
    country:  string
}

interface Geoloc{
    lat: number,
    lng: number
}
