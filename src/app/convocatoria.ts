export class Convoca {
    id: number;
    descrpcion: string;
    fecha_fin: Date;
    fecha_inicio: Date;
    estado: boolean;

    constructor(values: Object = {}) {
        Object.assign(this, values);
    }

}
