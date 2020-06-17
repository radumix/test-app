export interface IPolicies {
    id: number,
    header: string;
    policyNumber: string;
    status: string;
    detail: IDetail;
    message: string;
}

interface IDetail{
    title: string;
    value: string;
}
