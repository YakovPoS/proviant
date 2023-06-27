import { Injectable } from '@nestjs/common';
import { SourceMap } from 'module';
import { client } from 'src/DB/connecnt-to-DB';
import* as path from 'path';
import* as fs from 'fs';

@Injectable()
export class NewsService {
    async addNews(title:string, description:string, file){
        try {
            const filePath = path.join(__dirname, `../../../imgsForProviant/${file.originalname}`,)
            fs.writeFileSync(filePath, file.buffer)
            const result = await client.query('INSERT INTO news (title, description, pathtoimage) VALUES ($1::text, $2::text, $3::text)',[title, description,filePath]);
            return filePath
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

    async changeNews(id: number, title:string, description:string, file ){
        try {
            const result = await client.query('SELECT * FROM news WHERE id=$1', [id])
            if (result.rows){
                const filePath = path.join(__dirname, `../../../imgsForProviant/${file.originalname}`,)
                fs.writeFileSync(filePath, file.buffer)
                await client.query('UPDATE news SET title=$1, description=$2, pathtoimage=$3 WHERE id=$4', [title, description, filePath, id])
                return filePath
            }
        }catch(error) {
            throw new Error(`Error executing query: ${error}`);
        }

    }
}
