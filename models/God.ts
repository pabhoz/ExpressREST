import Model from '../libs/Model';
import { ModelI } from '../interfaces/ModelI';

export default class God extends Model implements ModelI {

    id: number | null = null;
    name: string;
    origin: string;
    static dbc: any;
    
    constructor(name: string, origin: string) {
        super();
        this.name = name;
        this.origin = origin;
    }

    getId() {
        return this.id;
    }

    setId(value: number) {
        this.id = value;
    }

    getName() {
        return this.name;
    }

    setName(value: string) {
        this.name = value;
    }

    getOrigin() {
        return this.origin;
    }

    setOrigin(value: string) {
        this.origin = value;
    }

    static findAll() {
        const query = 'SELECT * from rest.god';
        const result = Model.execQuery(query);
        return result;
    }

    create() {
        const query = `INSERT INTO rest.god (name, origin) VALUES ('${this.name}','${this.origin}')`;
        const result = Model.execQuery(query);
        return result;
    }

    update(): Promise<any> {
        return new Promise(()=>{});
    }

    delete(): Promise<any> {
        return new Promise(()=>{});
    }

}
