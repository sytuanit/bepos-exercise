export abstract class BaseDTO {
    isSelected: boolean;

    abstract get identifier(): number;

    abstract get displayName(): string;

    get displayNameWithIdentifier(): string {
        return this.displayName + " " + this.identifier;
    }

    /**
     *Creates an instance of BaseDTO.
     * @memberof BaseDTO
     */
    constructor() {
        this.isSelected = false;
    }
}
