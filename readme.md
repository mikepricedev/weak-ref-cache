# Weak-Ref-Cache

The `weak-ref-cache` package is a utility module designed to help you manage and reuse weak references to objects in JavaScript. With this package, you can retrieve weak references to objects and compare them using the same equality comparison as you would use for the objects themselves. Furthermore, it ensures that only one `WeakRef` instance is created per object, promoting memory efficiency.

## Installation

```bash
npm install weak-ref-cache
```

## Usage

Here's how you can use the `weak-ref-cache` package:

1. Import the `getWeakRef` function from the package.
2. Use the `getWeakRef` function to get a weak reference to an object.
3. You can compare weak references obtained using the `getWeakRef` function just like you would compare the objects themselves.

### Example

```ts
import getWeakRef from "weak-ref-cache";

const obj = { foo: "bar" };

const weakRef = getWeakRef(obj);

console.log(weakRef === getWeakRef(obj)); // true

console.log(weakRef === new WeakRef(obj)); // false
```

## API

### `getWeakRef(obj: object): WeakRef`

- **Parameters:**
  - `obj` (Object): The object for which you want to get a weak reference.
- **Returns:**
  - A `WeakRef` instance representing a weak reference to the `obj`. If a weak reference to the `obj` was previously created by `getWeakRef`, it returns the same `WeakRef` instance.
