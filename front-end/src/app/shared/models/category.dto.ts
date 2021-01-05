import { BaseDTO } from './base.dto';

export class CategoryDTO extends BaseDTO {
    id: number;
    name: string;
    value: number;

    get identifier(): number {
        return this.id;
    }

    get displayName(): string {
        return this.name;
    }
}
