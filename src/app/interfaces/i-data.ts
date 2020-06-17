import { IPolicies } from './i-policies';
import { IServicing } from './i-servicing';

import { from } from 'rxjs';
export interface IData {
    servicing: IServicing;
    policies: IPolicies;

}
