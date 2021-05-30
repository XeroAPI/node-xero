
export class TimeEntry {
    /**
    * Identifier of the time entry.
    */
    'timeEntryId'?: string;
    /**
    * The xero user identifier of the person who logged time.
    */
    'userId'?: string;
    /**
    * Identifier of the project, that the task (which the time entry is logged against) belongs to.
    */
    'projectId'?: string;
    /**
    * Identifier of the task that time entry is logged against.
    */
    'taskId'?: string;
    /**
    * The date time that time entry is logged on. UTC Date Time in ISO-8601 format.
    */
    'dateUtc'?: Date;
    /**
    * The date time that time entry is created. UTC Date Time in ISO-8601 format. By default it is set to server time.
    */
    'dateEnteredUtc'?: Date;
    /**
    * The duration of logged minutes.
    */
    'duration'?: number;
    /**
    * A description of the time entry.
    */
    'description'?: string;
    /**
    * Status of the time entry. By default a time entry is created with status of `ACTIVE`. A `LOCKED` state indicates that the time entry is currently changing state (for example being invoiced). Updates are not allowed when in this state. It will have a status of INVOICED once it is invoiced.
    */
    'status'?: TimeEntry.StatusEnum;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "timeEntryId",
            "baseName": "timeEntryId",
            "type": "string"
        },
        {
            "name": "userId",
            "baseName": "userId",
            "type": "string"
        },
        {
            "name": "projectId",
            "baseName": "projectId",
            "type": "string"
        },
        {
            "name": "taskId",
            "baseName": "taskId",
            "type": "string"
        },
        {
            "name": "dateUtc",
            "baseName": "dateUtc",
            "type": "Date"
        },
        {
            "name": "dateEnteredUtc",
            "baseName": "dateEnteredUtc",
            "type": "Date"
        },
        {
            "name": "duration",
            "baseName": "duration",
            "type": "number"
        },
        {
            "name": "description",
            "baseName": "description",
            "type": "string"
        },
        {
            "name": "status",
            "baseName": "status",
            "type": "TimeEntry.StatusEnum"
        }    ];

    static getAttributeTypeMap() {
        return TimeEntry.attributeTypeMap;
    }
}

export namespace TimeEntry {
    export enum StatusEnum {
        ACTIVE = <any> 'ACTIVE',
        LOCKED = <any> 'LOCKED',
        INVOICED = <any> 'INVOICED'
    }
}
