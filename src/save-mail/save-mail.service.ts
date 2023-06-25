import { Injectable } from '@nestjs/common';
import { client } from 'src/DB/connecnt-to-DB';


@Injectable()
export class SaveMailService {
  async saveMail(userMail){
    console.log(userMail)
    try {
        const result = await client.query('INSERT INTO mails (mail) VALUES ($1::text)',[userMail]);
    } catch(error) {
        throw new Error(`Error executing query: ${error}`);
    }
  }
}
