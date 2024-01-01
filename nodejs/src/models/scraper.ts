import {Schema, model, Document} from "mongoose";

const schema = new Schema({
    path: String,
    source: String,
    tech: []
})

export interface Scraper extends Document{
    path: string;
    source: string;
    tech: string[];
}

export default model('Scraper', schema)