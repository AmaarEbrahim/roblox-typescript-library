/**
 * This interface is for classes that are saved to Roblox's datastores.
 * Datastores don't accept certain kinds of data, so any data must be converted
 * into a format that is valid when storing something in the datastore, and
 * any data being retrieved must be converted back into an instance.
 * 
 * The Type Assertion TClass is intended to be the same as the class
 * that implements this interface.
 * 
 * @since 12/11/20
 */

export interface IDatastoreSerialize<TClass> {
    serializeForDatastore(): Object
    deserializeFromDatastore(data: Object): TClass
}
