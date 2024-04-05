export class User{
    name: string | undefined
    id: number | undefined
    username: string | undefined
    email: string | undefined
    phone: string | undefined
    website: string | undefined
    address: {
        street:string
        suite: string
        city: string
        zipcode: string
    }| undefined
    company: {
        name:string
        catchPhrase: string
        bs: string
    }| undefined
}