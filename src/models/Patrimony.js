export class Patrimony {
    constructor (id, ownerId, startDate, tTime, possessionList) {
        this.id = id,
        this.ownerId = ownerId,
        this.startDate = startDate,
        this.tTime = tTime,
        this.possessionList = possessionList
    }
    
    addPossesion(possesion) {
        this.possessionList.push(possesion);
    }

    removePossesion(id) {
        this.possessionList = this.possessionList.filter(t => t.id != id);
    }

    evaluatePatrimony() {
        var spending = this.possessionList
                        .filter(p => p.type.toLowerCase() === "spending")
                        .map(i => i.value)
                        .reduce((a, b) => a + b, 0);
        return this.possessionList
                    .filter(p => p.type !== "spending")
                    .map(i => i.updateValue(this.tTime, spending))
                    .reduce((a, b) => a + b, 0);
    }

    getValueOf(name) {
        return this.possessionList
                .filter(p => p.name.toLowerCase() == name.toLowerCase())
                .map(p => p.value)
                .reduce((a, b) => a + b, 0);
    }
}