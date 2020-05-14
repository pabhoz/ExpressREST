import Model from '../libs/Model';

export default class God extends Model {

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

}
