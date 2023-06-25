import { Injectable } from '@nestjs/common';
const client = require('../DB/connecnt-to-DB')
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

    async deleteNews(title:string, description:string, image:string ){
        try {
            const result = await client.query('SELECT * FROM news')
        }catch(error) {
            throw new Error(`Error executing query: ${error}`);
        }

    }

    async changeNews(title:string, description:string, image:string ){
        try {

            const result = await client.query('INSERT INTO news (title, description, pathtoimage) VALUES ($1::text, $2::text, $3::text)',[title, description, image]);
        }catch(error) {
            throw new Error(`Error executing query: ${error}`);
        }

    }
}
