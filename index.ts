export function getWeakRef<Obj extends {}>(obj: Obj): WeakRef<Obj> {
  let weakObj = (weakRefCache as WeakRefCache<Obj>).get(obj);

  if (weakObj === undefined) {
    weakRefCache.set(obj, (weakObj = new WeakRef(obj)));
  }

  return weakObj;
}

export default getWeakRef;

type WeakRefCache<Obj extends {}> = WeakMap<Obj, WeakRef<Obj>>;

const weakRefCache: WeakRefCache<{}> = new WeakMap();
