import _ from "lodash";

export class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    toString() {
        return "Name: " + this.name + " Age:" + this.age;
    }

}

export class PersonGenerator {

    static generate(size) {
        const persons = new Array();
        for (var i = 0; i < size; i++) {
            const name = _.times(20, () => _.random(35).toString(36)).join('');
            const age = _.random(80);
            persons.push(new Person(name, age));
        }
        return persons;
    }

}

export class PersonSorter {
    static sort(persons, sortProps) {
        const sortBy = sortProps.map(x => x.name);
        const sortOrder = sortProps.map(x => x.order);
        return _.sortBy(persons, sortBy, sortOrder);
    }
}
