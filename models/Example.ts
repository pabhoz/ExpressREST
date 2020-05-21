import { ModelI } from "../interfaces/ModelI";
import Model from "../libs/Model";

export class Example extends Model implements ModelI{

    create(): Promise<any> {
        return new Promise(() => { });
    }

    update(): Promise<any> {
        return new Promise(()=>{});
    }

    delete(): Promise<any> {
        return new Promise(()=>{});
    }

}
