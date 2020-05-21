import God from "../models/God";

const { db } = require('../conf');

module GodsService {
    export function get(id: number): God {
        const god = db.gods.filter((el: God) => {
            return el.id == id;
        })
        return god;
    }

    export function getByName(name: string): God {
        const god = db.gods.filter((el: God) => {
            return el.name == name;
        })
        return god;
    }

    export function getAll(): Promise<any> {
        return God.findAll();
    }

    export async function create(name: string, origin: string): Promise<any> {
        const god = new God(name, origin);
        const response = await god.create();
        if (response) {
            return god;
        }
    }
}

export default GodsService;
