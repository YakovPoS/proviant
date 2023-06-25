import { Injectable } from '@nestjs/common';
import { client } from 'src/DB/connecnt-to-DB';

@Injectable()
export class RatePlanService {
    async saveRatePlan(ratePlanInf){
        enum product {
            calculation,
            cashless_payment,
        }
        enum ratePlanCalc {
            standart,
            optimum,
            maximum,
        }
        enum ratePlanCashless {
            base,
            maximum,
        }
        enum period{
            oneMonth,
            threeMonth,
            sixMonth,
            twelveMonth,
        }
        console.log(ratePlanInf)
        try {
            let binder
            (ratePlanInf.product == 0) ? (binder = ratePlanCalc) : (binder = ratePlanCashless);
            (!ratePlanInf.rnumofjobs) ? (ratePlanInf.rnumofjobs = 1) : (console.log())
            const result = await client.query('INSERT INTO rateplan (product, rtplan, numofjobs, sizebase, cashier, accountant, monoblockreader, terminal, trnsprtcard, acs, period, name, mail ,phonenumber) VALUES ($1::text, $2::text, $3::int, $4::int, $5::int, $6::int, $7::boolean, $8::boolean, $9::boolean, $10::boolean, $11::text, $12::text, $13::text, $14::text)',[product[ratePlanInf.rproduct], binder[ratePlanInf.rrtplan], ratePlanInf.rnumofjobs, ratePlanInf.rsizebase, ratePlanInf.rcashier, ratePlanInf.raccountant, ratePlanInf.rmonoblockreader, ratePlanInf.rterminal, ratePlanInf.rtrnsprtcard, ratePlanInf.racs, period[ratePlanInf.rperiod], ratePlanInf.rname, ratePlanInf.rmail, ratePlanInf.rphonenumber ]);
        } catch(error) {
            throw new Error(`Error executing query: ${error}`);
        }
      }
}
