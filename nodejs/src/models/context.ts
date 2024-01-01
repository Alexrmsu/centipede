import {Schema, model, Document} from "mongoose";
import {Scraper} from "./scraper";

const schema = new Schema({
    variables: [],
    source: String,
    tech: []
})

export interface Context extends Document{
    scraper: Scraper;
    variables: string[];
}

export default model('Context', schema)