declare interface pacientProfile {
    firstName: string;
    lastName: string;
    email: string;
    country: string;
    street: string;
    city: string;
    region: string;
    postalCode: string;
    photo: string;
}

declare interface dentistProfile {
    firstName: string;
    lastName: string;
    email: string;
    workingId: string;
    country: string;
    street: string;
    city: string;
    region: string;
    postalCode: string;
    photo: string;
    schedule: dentistSchedule[];
}

declare interface dentistSchedule {
    week_day: number;
    from: string;
    to: string;
}