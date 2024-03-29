/*
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

// TypeScript Version: 4.1

/* eslint-disable max-lines */

import MAX = require( '@stdlib/constants-int16-max' );
import MIN = require( '@stdlib/constants-int16-min' );
import NUM_BYTES = require( '@stdlib/constants-int16-num-bytes' );

/**
* Interface describing the `int16` namespace.
*/
interface Namespace {
	/**
	* Maximum signed 16-bit integer.
	*
	* @example
	* var max = ns.MAX;
	* // returns 32767
	*/
	MAX: typeof MAX;

	/**
	* Minimum signed 16-bit integer.
	*
	* @example
	* var min = ns.MIN;
	* // returns -32768
	*/
	MIN: typeof MIN;

	/**
	* Size (in bytes) of a 16-bit signed integer.
	*
	* @example
	* var bytes = ns.NUM_BYTES;
	* // returns 2
	*/
	NUM_BYTES: typeof NUM_BYTES;
}

/**
* 16-bit signed integer mathematical constants.
*/
declare var ns: Namespace;


// EXPORTS //

export = ns;
