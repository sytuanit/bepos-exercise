import { BaseDTO } from './base.dto';
import { CategoryDTO } from './category.dto';
import { StepDTO } from './step.dto';

export class TaskDTO extends BaseDTO {
    id: number;
    userId: number;
    name: string;
    hasCompleted: boolean;
    remindDate: Date;
    expireDate: Date;
    categories: CategoryDTO[];
    steps: StepDTO[];

    get identifier(): number {
        return this.id;
    }

    get displayName(): string {
        return this.name;
    }
}
