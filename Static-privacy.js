/*
I wrote a class Class, with a private static property foo and a getter to retrieve it:
  class Class {
    static #foo = 42;

    static get foo() {
      return this.#foo;
    }
  }
  Class.foo; // 42

However, when I create a class Subclass that inherits from Class, the code breaks:
  class Subclass extends Class {}
  Subclass.foo; // Error !

Can you fix the code?
Modify Class so that Subclass.foo will work correctly. 
This should also work for any level of inheritance from Class, e.g. with:

class Deepclass extends Subclass {}
Deepclass.foo; // should return 42
*/


// Solution

class Class {
  static #foo = 42;

  static get foo() {
    return Class.#foo;
  }
}

// or

class Class {
  static #bar = 42;

  static get bar() {
    return this.hasOwnProperty('bar') ? this.#bar : Class.#bar;
  }
}