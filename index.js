/**
 * Copyright (C) 2016 pantojs.xyz
 * index.js
 *
 * changelog
 * 2016-06-22[14:10:04]:revised
 *
 * @author yanni4night@gmail.com
 * @version 1.0.0
 * @since 1.0.0
 */
'use strict';
const Transformer = require('panto-transformer');
const less = require('less');

class LessTransformer extends Transformer {
    _transform(file) {
        let {
            filename,
            content
        } = file;
        return new Promise((resolve, reject) => {
            less.render(content, panto.util.extend({
                filename
            }, this.options.lessOptions), (err, output) => {
                if (err) {
                    if (this.options.ignoreError) {
                        panto.log.warn(`LessTransform warnning: ${err.message}`);
                        resolve(file);
                    } else {
                        reject(err);
                    }
                } else {
                    resolve(panto.util.extend(file, {
                        content: output.css
                    }));
                }
            });
        });
    }
}

module.exports = LessTransformer;