import test from 'ava';
import {CSG} from '../csg';
import {CAG} from '../csg';
import {OBJ} from '../helpers/obj-store';

//
// Test suite for CAG Conversions
//
test("CAG should convert to and from binary", t => {
  // test using simple default shapes
  var c1 = CAG.circle();
  var c2 = CAG.ellipse();
  var c3 = CAG.rectangle();
  var c4 = CAG.roundedRectangle();

  var b1 = c1.toCompactBinary();
  var r1 = CAG.fromCompactBinary(b1);
  t.deepEqual(c1,r1);
  var b2 = c2.toCompactBinary();
  var r2 = CAG.fromCompactBinary(b2);
  t.deepEqual(c2,r2);
  var b3 = c3.toCompactBinary();
  var r3 = CAG.fromCompactBinary(b3);
  t.deepEqual(c3,r3);
  var b4 = c4.toCompactBinary();
  var r4 = CAG.fromCompactBinary(b4);
  t.deepEqual(c4,r4);
});

test("CAG should convert to and from anonymous object", t => {
  // test using simple default shapes
  var c1 = CAG.circle();
  var c2 = CAG.ellipse();
  var c3 = CAG.rectangle();
  var c4 = CAG.roundedRectangle();

  var b1 = JSON.parse(OBJ.convertCAGtoJSON(c1));
  var r1 = CAG.fromObject(b1.object);
  t.deepEqual(c1,r1);
  var b2 = JSON.parse(OBJ.convertCAGtoJSON(c2));
  var r2 = CAG.fromObject(b2.object);
  t.deepEqual(c2,r2);
  var b3 = JSON.parse(OBJ.convertCAGtoJSON(c3));
  var r3 = CAG.fromObject(b3.object);
  t.deepEqual(c3,r3);
  var b4 = JSON.parse(OBJ.convertCAGtoJSON(c4));
  var r4 = CAG.fromObject(b4.object);
  t.deepEqual(c4,r4);
});

test("CAG should convert to and from sides", t => {
  // test using simple default shapes
  var c1 = CAG.circle();
  var c2 = CAG.ellipse();
  var c3 = CAG.rectangle();
  var c4 = CAG.roundedRectangle();

  var s1 = c1.sides;
  var f1 = CAG.fromSides(s1);
  t.deepEqual(c1,f1);
  var s2 = c2.sides;
  var f2 = CAG.fromSides(s2);
  t.deepEqual(c2,f2);
  var s3 = c3.sides;
  var f3 = CAG.fromSides(s3);
  t.deepEqual(c3,f3);
  var s4 = c4.sides;
  var f4 = CAG.fromSides(s4);
  t.deepEqual(c4,f4);
});

test("CAG should convert to and from points", t => {
  //fromPoints()
  //fromPointsNoCheck()
  t.fail('TODO: add tests') // non implemented tests should fail so we see the changes when we actually add them!!
});

test("CAG should convert to and from paths", t => {
  // test using simple default shapes
  var c1 = CAG.circle();
  var c2 = CAG.ellipse();
  var c3 = CAG.rectangle();
  var c4 = CAG.roundedRectangle();

  // convert to array of CSG.Path2D
  var p1 = c1.getOutlinePaths();
  var f1 = p1[0].innerToCAG();
  t.deepEqual(c1,f1);
  var p2 = c2.getOutlinePaths();
  var f2 = p2[0].innerToCAG();
  t.deepEqual(c2,f2);
  var p3 = c3.getOutlinePaths();
  var f3 = p3[0].innerToCAG();
  t.deepEqual(c3,f3);
  var p4 = c4.getOutlinePaths();
  var f4 = p4[0].innerToCAG();
  t.deepEqual(c4,f4);
});
