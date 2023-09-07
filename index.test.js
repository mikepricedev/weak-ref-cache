import { describe, it } from "vitest";

import { getWeakRef } from "./index";

describe("getWeakRef", () => {
  const obj = { foo: "bar" };

  it("Should return a weak ref of the passed object.", ({ expect }) => {
    const objWeakRef = getWeakRef(obj);

    expect(objWeakRef).toBeInstanceOf(WeakRef);

    expect(objWeakRef.deref()).toStrictEqual(obj);
  });

  it("Should return the same weak ref for each object on subsequent calls.", ({
    expect,
  }) => {
    const objWeakRef = getWeakRef(obj);

    expect(getWeakRef(objWeakRef)).toStrictEqual(objWeakRef);
  });
});
