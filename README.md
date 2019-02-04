# testing-calculations-with-qunit

## By: Brianne Bender, Robert Becthold, Michael Baumli, and Alexander Gittemeier

### What is QUnit?
QUnit is a strong, easy to use unit-testing framework for JavaScript.
- Used by jQuery
- Can test any generic JavaScript code
- Developed by John Resig in 2008
- Originally a part of jQuery


### Helpful Links
- [QUnit Official Website](https://qunitjs.com/ "QUnit Homepage")
- [Thorough Tutorial of QUnit](https://www.tutorialspoint.com/qunit/qunit_overview.htm "QUnit Tutorial")
- [QUnit GitHub Repository](https://github.com/qunitjs/qunit "QUnit GitHub")
- [QUnit Forum](https://forum.jquery.com/qunit-and-testing "Forum")

### How can QUnit help test calculations?
Unit tests are code that asserts that other code works as it should. QUnit provides a framework for these tests.
This can be used to test different calculations in web applications.
For instance, if you write an application to calculate the area of a square you can write assert.equals tests to check results of different known cases. (squares of 0x0, 1x1, etc.)

Example code:
```JavaScript
  QUnit.test( "equal test", function( assert ) {
    assert.equal( 0, 0, "Zero, Zero; equal succeeds" );
    assert.equal( "", 0, "Empty, Zero; equal succeeds" );
    assert.equal( "", "", "Empty, Empty; equal succeeds" );
    assert.equal( 0, false, "Zero, false; equal succeeds" );
  });
```
### QUnit Functions
- ok - assert that something is true
- equal - assert that two values equal each other (==)
- expect - register an expected count of assertions
- test - add a test to run
- throws - run the test if exception thrown
- step - marker for progress in a test
- trigger - test that a specific event occured after trigger
- module - group tests together


### Installation: 3 Methods
1. Download from qunitjs.com
1. Clone from QUnit GitHub repository
1. Install using command line instructions from [QUnitjs.com](https://qunitjs.com/ "QUnit Homepage")

