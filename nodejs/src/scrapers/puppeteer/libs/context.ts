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
        connection.query('SELECT * FROM context WHERE scraperId = ?', [scraperId], (err: Error, results : Context[]) : void => {
            if(err) reject(err);
            resolve(results);
        });
    });
}

export const updateContextValues = async (id: number, contextValues: string): Promise<Context> => {
    return new Promise((resolve, reject) : void => {
        connection.query('UPDATE context SET contextValues = ? WHERE id = ?', [contextValues, id], (err: Error, results : Context) : void => {
            if(err) reject(err);
            resolve(results);
        });
    });
}
