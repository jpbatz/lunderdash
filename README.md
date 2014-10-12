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

**Example**

_.compact([0, 1, false, 2, '', 3]);
// → [1, 2, 3]


_.difference(array, [values])
-----------------------------

Creates an array excluding all values of the provided arrays using strict equality for comparisons, i.e. ===.

**Arguments**

array (Array): The array to process.
[values] (…Array): The arrays of values to exclude.
Returns

(Array): Returns a new array of filtered values.

**Example**

_.difference([1, 2, 3, 4, 5], [5, 2, 10]);
// → [1, 3, 4]


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

**Example**

_.first([1, 2, 3]);
// → 1

_.first([1, 2, 3], 2);
// → [1, 2]

_.first([1, 2, 3], function(num) {
  return num < 3;
});
// → [1, 2]

var characters = [
  { 'name': 'barney',  'blocked': true,  'employer': 'slate' },
  { 'name': 'fred',    'blocked': false, 'employer': 'slate' },
  { 'name': 'pebbles', 'blocked': true,  'employer': 'na' }
];

// using "_.pluck" callback shorthand
_.first(characters, 'blocked');
// → [{ 'name': 'barney', 'blocked': true, 'employer': 'slate' }]

// using "_.where" callback shorthand
_.pluck(_.first(characters, { 'employer': 'slate' }), 'name');
// → ['barney', 'fred']


_.union([array])
----------------

Creates an array of unique values, in order, of the provided arrays using strict equality for comparisons, i.e. ===.

**Arguments**

[array] (…Array): The arrays to inspect.

**Returns**

(Array): Returns an array of combined values.

**Example**

_.union([1, 2, 3], [5, 2, 1, 4], [2, 1]);
// → [1, 2, 3, 5, 4]

