export interface ModelI{
    findAll?(): Promise<any>;
    findOne?(): Promise<any>;
    create(): Promise<any>;
    update(): Promise<any>;
    delete(): Promise<any>;
}
