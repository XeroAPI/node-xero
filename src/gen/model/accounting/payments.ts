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

import { Payment } from './payment';

export class Payments {
    'payments'?: Array<Payment>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "payments",
            "baseName": "Payments",
            "type": "Array<Payment>"
        }    ];

    static getAttributeTypeMap() {
        return Payments.attributeTypeMap;
    }
}

