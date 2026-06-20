'use strict';

const assert = require('node:assert/strict');
const { readFileSync } = require('node:fs');
const test = require('node:test');

const html = readFileSync('index.html', 'utf8');
const script = readFileSync('script.js', 'utf8');

test('modal has accessible dialog markup', () => {
  assert.match(html, /role="dialog"/);
  assert.match(html, /aria-modal="true"/);
  assert.match(html, /aria-labelledby="modal-title"/);
  assert.match(html, /aria-label="Close modal"/);
});

test('modal close behavior is centralized', () => {
  assert.match(script, /const closeModal = function/);
  assert.equal((script.match(/keydown/g) || []).length, 1);
  assert.doesNotMatch(script, /console\.log/);
});
