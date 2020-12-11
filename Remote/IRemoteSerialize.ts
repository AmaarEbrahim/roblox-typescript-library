/**
 * This interface is for instances that are sent through a remote event or
 * remote function. Certain types of data can't be sent through remotes, so 
 * there must be a way to pack the data into something that can be sent, then 
 * unpack it into the instance.
 * 
 * The Type Assertion TClass is intended to be the same as the class
 * that implements this interface.
 * 
 * @since 12/11/20
 */

export interface IRemoteSerialize<TClass> {

    /**
     * This method serializes the instance so it can passed through a remote.
     * @returns An object. Lua metatables can't be sent through remotes, so
     * typescript instances, which transpile to create Lua metatables, must be 
     * converted into objects.
     */
    serializeForRemote(): Object

    /**
     * This method converts an Object into an instance of class TClassInstance
     * @param instance The Object that was serialized before being passed.
     * @returns An instance of the class.
     */
    deserializeFromRemote(instance: Object): TClass
}