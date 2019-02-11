function square_area(size) {
	//The last test fails if the following two lines are commented out
	// if (size < 0)
	// 	return undefined;
	return size * size;
}

QUnit.test("square_area", function(assert) {
	assert.equal(square_area(0), 0, "area of 0x0 square == 0");
	assert.equal(square_area(1), 1, "area of 1x1 square == 1");
	assert.equal(square_area(2), 4, "area of 2x2 square == 4");
	assert.equal(square_area(3), 9, "area of 3x3 square == 9");
	assert.equal(square_area(10), 100, "area of 10x10 square == 100");
	assert.equal(square_area(332549), 110588837401, "area of 332549x332549 square == 110588837401");
	assert.equal(square_area(-1), undefined, "area of a negative side length is rejected");
 });
