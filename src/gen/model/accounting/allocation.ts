/**
 * Accounting API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 2.0.4
 * Contact: api@xero.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { Invoice } from './invoice';

export class Allocation {
    'invoice': Invoice;
    /**
    * the amount being applied to the invoice
    */
    'amount': number;
    /**
    * the date the allocation is applied YYYY-MM-DD.
    */
    'date': string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "invoice",
            "baseName": "Invoice",
            "type": "Invoice"
        },
        {
            "name": "amount",
            "baseName": "Amount",
            "type": "number"
        },
        {
            "name": "date",
            "baseName": "Date",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return Allocation.attributeTypeMap;
    }
}

