/**
 * Retrieve or create a weak reference for the given object.
 *
 * @template {object} Obj
 * @param {Obj} obj
 * @returns {WeakRef<Obj>}
 */
export function getWeakRef<Obj extends object>(obj: Obj): WeakRef<Obj>;
export default getWeakRef;
