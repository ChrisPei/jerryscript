// Copyright JS Foundation and other contributors, http://js.foundation
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

// TODO: Update these tests when the internal routine has been implemented

var target = {};
var handler = { isExtensible (target) {
  throw 42;
}};

var proxy = new Proxy(target, handler);

try {
  // 7.3.15
  Object.isFrozen(proxy)
  assert(false);
} catch (e) {
  assert(e instanceof TypeError);
}

try {
  // 7.3.15
  Object.isSealed(proxy)
  assert(false);
} catch (e) {
  assert(e instanceof TypeError);
}

try {
  // 7.2.5
  Object.isExtensible(proxy)
  assert(false);
} catch (e) {
  assert(e instanceof TypeError);
}
