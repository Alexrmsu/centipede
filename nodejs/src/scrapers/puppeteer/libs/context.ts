import {connection} from "../../../database/connection";

export interface Context {
    id: number;
    scraperId: number;
    contextValues: string;
    createdAt: string;
    status: string;
}

export const getContexts = async (scraperId: number): Promise<Context[]> => {
    return new Promise((resolve, reject) => {
        connection.query('SELECT * FROM context WHERE scraperId = ?', [scraperId], (err, results) : void => {
            if(err) reject(err);
            resolve(results);
        });
    });
}
