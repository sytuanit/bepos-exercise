import { BaseDTO } from './base.dto';

export class StepDTO extends BaseDTO {
    id: number;
    name: string;
    hasCompleted: boolean;

    get identifier(): number {
        return this.id;
    }

    get displayName(): string {
        return this.name;
    }
}
