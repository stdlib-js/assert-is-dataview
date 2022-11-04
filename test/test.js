/**
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

'use strict';

// MODULES //

var tape = require( 'tape' );
var Float32Array = require( '@stdlib/array-float32' );
var Float64Array = require( '@stdlib/array-float64' );
var Int8Array = require( '@stdlib/array-int8' );
var Int16Array = require( '@stdlib/array-int16' );
var Int32Array = require( '@stdlib/array-int32' );
var Uint8Array = require( '@stdlib/array-uint8' );
var Uint8ClampedArray = require( '@stdlib/array-uint8c' );
var Uint16Array = require( '@stdlib/array-uint16' );
var Uint32Array = require( '@stdlib/array-uint32' );
var ArrayBuffer = require( '@stdlib/array-buffer' );
var DataView = require( '@stdlib/array-dataview' );
var isDataView = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof isDataView, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function returns `true` if provided a DataView', function test( t ) {
	t.strictEqual( isDataView( new DataView( new ArrayBuffer( 10 ) ) ), true, 'returns true' );
	t.end();
});

tape( 'the function returns `false` if not provided a DataView', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		5,
		NaN,
		true,
		null,
		void 0,
		[],
		{},
		function noop() {},
		new Array( 10 ),
		new Float64Array( 10 ),
		new Float32Array( 10 ),
		new Uint32Array( 10 ),
		new Int32Array( 10 ),
		new Uint16Array( 10 ),
		new Int16Array( 10 ),
		new Uint8Array( 10 ),
		new Int8Array( 10 ),
		new Uint8ClampedArray( 10 ),
		new ArrayBuffer( 10 )
	];

	for ( i = 0; i < values.length; i++ ) {
		t.strictEqual( isDataView( values[i] ), false, 'returns false when provided ' + values[i] );
	}
	t.end();
});
