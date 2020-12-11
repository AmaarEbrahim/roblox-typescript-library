/**
 * This is a utility Counter class.
 * 
 * @since 12/11/20
 */


export class Counter {
    private Value: number = 0
    
    /**
     * Counter constructor.
     */
    constructor() { }

    /**
     * This method increments the Value field and returns the new value.
     * @returns the next number in the counter
     */
    public next(): number {
        this.Value =+ 1
        return this.Value
    }
} 