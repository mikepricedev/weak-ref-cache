# WeakRef Cache

Returns the same unique `WeakRef` instance per object.

## Usage

Create `WeakRefs` with the factory `getWeakRef`.

```ts
import getWeakRef from "weak-ref-cache";

const myObj = {};

const myObjWeakRef0 = getWeakRef(myObject);

const myObjWeakRef1 = getWeakRef(myObject);

if (myObjWeakRef0 === myObjWeakRef1) {
  console.log("Pass!");
} else {
  console.error("Fail!");
}
```