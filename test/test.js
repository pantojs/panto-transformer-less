/**
 * Copyright (C) 2016 pantojs.xyz
 * test.js
 *
 * changelog
 * 2016-06-24[11:40:27]:revised
 *
 * @author yanni4night@gmail.com
 * @version 1.0.0
 * @since 1.0.0
 */
'use strict';
const assert = require('assert');
const panto = require('panto');
const LessTransformer = require('../');

describe('panto-transformer-read', () => {
    describe('#transform', () => {
        it('should get origin if content is not null/undefined', done => {
            const file = {
                filename: 'a.js',
                content: '.parent {.child{left: 2px}font-size:14px}'
            };
            new LessTransformer({
                lessOptions: {
                    compress: true
                }
            }).transform(file).then(tfile => {
                assert.deepEqual(tfile.content,
                    '.parent{font-size:14px}.parent .child{left:2px}');
                done();
            }).catch(console.error.bind(console));
        });
    });
});