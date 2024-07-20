export class Owner {
    constructor (id, firstName, lastName, birthday) {
        this.id = id,
        this.firstName = firstName,
        this.lastName = lastName,
        this.birthday = birthday.format('YYYY-MM-DD')
    }
}