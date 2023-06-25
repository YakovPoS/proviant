import { Injectable } from '@nestjs/common';
import { SourceMap } from 'module';
import { client } from 'src/DB/connecnt-to-DB';
const path = require('path')

@Injectable()
export class NewsService {
    async addNews(title:string, description:string, image:string ){
        try {
            const result = await client.query('INSERT INTO news (title, description, pathtoimage) VALUES ($1::text, $2::text, $3::text)',[title, description, image]);
        }catch(error) {
            throw new Error(`Error executing query: ${error}`);
        }

    }

    async deleteNews(id:number ){
        try{
            const result = await client.query('SELECT * FROM news WHERE id=$1', [id])
            if (result.rows){
                await client.query('DELETE FROM news WHERE id=$1', [id])
            }
        }catch(error) {
            throw new Error(`Не найден Id   ` + error);
        }

    }

    async changeNews(id: number, title:string, description:string, image:string ){
        try {
            const result = await client.query('SELECT * FROM news WHERE id=$1', [id])
            if (result.rows){
                await client.query('UPDATE news SET title=$1, description=$2, pathtoimage=$3 WHERE id=$4', [title, description, image, id])
            }
        }catch(error) {
            throw new Error(`Error executing query: ${error}`);
        }

    }
}
