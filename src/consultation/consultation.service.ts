import { Injectable } from '@nestjs/common';
import { client } from 'src/DB/connecnt-to-DB';
import { Entity } from 'typeorm';

@Injectable()
export class ConsultationService {
    async saveConsultation(userConsultation){
        enum typeOfLocation1 {
            school,
            university,
            power_plant,
            other,
        }
        console.log(userConsultation.contact)
        try {
            const result = await client.query('INSERT INTO consultation (name, mail, organization, typeoflocation, сontact) VALUES ($1::text, $2::text, $3::text, $4::text, $5::text )',[userConsultation.name, userConsultation.mail, userConsultation.organization, typeOfLocation1[userConsultation.typeoflocation], userConsultation.contact]);
        } catch(error) {
            throw new Error(`Error executing query: ${error}`);
        }
      }
}
