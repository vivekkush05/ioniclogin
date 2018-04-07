export interface Row {
    refer_id: string;
    username: string;
    email: string;
    mobile: number;
    member_subscription: number;
}

export interface LoginDetailInterface {
    member_id: string;
    user_id: string;
    row: Row;
}
