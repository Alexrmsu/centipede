import {Schema, model, Document} from "mongoose";
import {Scraper} from "./scraper";

const schema = new Schema({
    scraper: {type: Schema.Types.ObjectId, ref: 'Scraper'},
    status: String,
    startDate: Date,
    endDate: Date,
})

export default model('Context', schema)