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

        let result = new Promise((resolve, reject) => {
            God.dbc.query('SELECT * from rest.god', (err: any, rows: any, fields: any) => {
                if (err) { reject(err); }
                resolve(rows);
            });
        });

        return result;
    }

    export async function create(name: string, origin: string): Promise<any> {
        const god = new God(name, origin);
        let result = new Promise((resolve, reject) => {
            God.dbc.query(`INSERT INTO rest.god (name, origin) VALUES ('${god.name}','${god.origin}')`, (err: any, rows: any, fields: any) => {
                if (err) { reject(err); }
                resolve(rows);
            });
        });
        if (await result) {
            return god;
        }
    }
}

export default GodsService;
