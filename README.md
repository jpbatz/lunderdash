lunderdash
==========

Re-implements Lo-Dash functionality.


_.compact(array)
-----------------

Creates an array with all falsey values removed. The values false, null, 0, "", undefined, and NaN are all falsey.

**Arguments**

array (Array): The array to compact.

**Returns**

(Array): Returns a new array of filtered values.


_.first(array, [callback], [thisArg])
-------------------------------------

Gets the first element or first n elements of an array. If a callback is provided elements at the beginning of the array are returned as long as the callback returns truthy. The callback is bound to thisArg and invoked with three arguments; (value, index, array).

If a property name is provided for callback the created "_.pluck" style callback will return the property value of the given element.

If an object is provided for callback the created "_.where" style callback will return true for elements that have the properties of the given object, else false.

Aliases

_.head, _.take

**Arguments**

array (Array): The array to query.
[callback] (Function|Object|number|string): The function called per element or the number of elements to return. If a property name or object is provided it will be used to create a ".pluck" or ".where" style callback, respectively.
[thisArg] (*): The this binding of callback.

**Returns**

(*): Returns the first element(s) of array.

