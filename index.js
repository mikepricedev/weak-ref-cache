/**
 * Retrieve or create a weak reference for the given object.
 *
 * @template {object} Obj
 * @param {Obj} obj
 * @returns {WeakRef<Obj>}
 */
export function getWeakRef(obj) {
  let weakObj = weakRefCache.get(obj);

  if (weakObj === undefined) {
    weakRefCache.set(obj, (weakObj = new WeakRef(obj)));
  }

  return weakObj;
}

export default getWeakRef;

const weakRefCache = new WeakMap();
