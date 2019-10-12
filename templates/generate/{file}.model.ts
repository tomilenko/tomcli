import { Schema, Document, Model, model, Error } from 'mongoose';

export declare interface I{Name} extends Document {
    _id: string,
    data: string
}

export interface I{Name}Model extends Model<I{Name}> { };

export class {Name}Model {
    
    private _model: Model<I{Name}>;

    constructor() {
        const {Name}Schema: Schema = new Schema({
            data: { type: String, required: false, default: 'some value' }
        })

        {Name}Schema.pre<I{Name}>('save', function(next) {
            next();
        });

        this._model = model<I{Name}>('{Name}', {Name}Schema);
    }

    public get model(): Model<I{Name}> {
        return this._model;
    }
}