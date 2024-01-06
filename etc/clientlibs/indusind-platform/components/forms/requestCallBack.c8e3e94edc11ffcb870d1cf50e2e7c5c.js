/*
CryptoJS v3.1.2
code.google.com/p/crypto-js
(c) 2009-2013 by Jeff Mott. All rights reserved.
code.google.com/p/crypto-js/wiki/License
*/
var CryptoJS = CryptoJS || function(u, p) {
    var d = {},
        l = d.lib = {},
        s = function() {},
        t = l.Base = {
            extend: function(a) {
                s.prototype = this;
                var c = new s;
                a && c.mixIn(a);
                c.hasOwnProperty("init") || (c.init = function() {
                    c.$super.init.apply(this, arguments)
                });
                c.init.prototype = c;
                c.$super = this;
                return c
            },
            create: function() {
                var a = this.extend();
                a.init.apply(a, arguments);
                return a
            },
            init: function() {},
            mixIn: function(a) {
                for (var c in a) a.hasOwnProperty(c) && (this[c] = a[c]);
                a.hasOwnProperty("toString") && (this.toString = a.toString)
            },
            clone: function() {
                return this.init.prototype.extend(this)
            }
        },
        r = l.WordArray = t.extend({
            init: function(a, c) {
                a = this.words = a || [];
                this.sigBytes = c != p ? c : 4 * a.length
            },
            toString: function(a) {
                return (a || v).stringify(this)
            },
            concat: function(a) {
                var c = this.words,
                    e = a.words,
                    j = this.sigBytes;
                a = a.sigBytes;
                this.clamp();
                if (j % 4)
                    for (var k = 0; k < a; k++) c[j + k >>> 2] |= (e[k >>> 2] >>> 24 - 8 * (k % 4) & 255) << 24 - 8 * ((j + k) % 4);
                else if (65535 < e.length)
                    for (k = 0; k < a; k += 4) c[j + k >>> 2] = e[k >>> 2];
                else c.push.apply(c, e);
                this.sigBytes += a;
                return this
            },
            clamp: function() {
                var a = this.words,
                    c = this.sigBytes;
                a[c >>> 2] &= 4294967295 <<
                    32 - 8 * (c % 4);
                a.length = u.ceil(c / 4)
            },
            clone: function() {
                var a = t.clone.call(this);
                a.words = this.words.slice(0);
                return a
            },
            random: function(a) {
                for (var c = [], e = 0; e < a; e += 4) c.push(4294967296 * u.random() | 0);
                return new r.init(c, a)
            }
        }),
        w = d.enc = {},
        v = w.Hex = {
            stringify: function(a) {
                var c = a.words;
                a = a.sigBytes;
                for (var e = [], j = 0; j < a; j++) {
                    var k = c[j >>> 2] >>> 24 - 8 * (j % 4) & 255;
                    e.push((k >>> 4).toString(16));
                    e.push((k & 15).toString(16))
                }
                return e.join("")
            },
            parse: function(a) {
                for (var c = a.length, e = [], j = 0; j < c; j += 2) e[j >>> 3] |= parseInt(a.substr(j,
                    2), 16) << 24 - 4 * (j % 8);
                return new r.init(e, c / 2)
            }
        },
        b = w.Latin1 = {
            stringify: function(a) {
                var c = a.words;
                a = a.sigBytes;
                for (var e = [], j = 0; j < a; j++) e.push(String.fromCharCode(c[j >>> 2] >>> 24 - 8 * (j % 4) & 255));
                return e.join("")
            },
            parse: function(a) {
                for (var c = a.length, e = [], j = 0; j < c; j++) e[j >>> 2] |= (a.charCodeAt(j) & 255) << 24 - 8 * (j % 4);
                return new r.init(e, c)
            }
        },
        x = w.Utf8 = {
            stringify: function(a) {
                try {
                    return decodeURIComponent(escape(b.stringify(a)))
                } catch (c) {
                    throw Error("Malformed UTF-8 data");
                }
            },
            parse: function(a) {
                return b.parse(unescape(encodeURIComponent(a)))
            }
        },
        q = l.BufferedBlockAlgorithm = t.extend({
            reset: function() {
                this._data = new r.init;
                this._nDataBytes = 0
            },
            _append: function(a) {
                "string" == typeof a && (a = x.parse(a));
                this._data.concat(a);
                this._nDataBytes += a.sigBytes
            },
            _process: function(a) {
                var c = this._data,
                    e = c.words,
                    j = c.sigBytes,
                    k = this.blockSize,
                    b = j / (4 * k),
                    b = a ? u.ceil(b) : u.max((b | 0) - this._minBufferSize, 0);
                a = b * k;
                j = u.min(4 * a, j);
                if (a) {
                    for (var q = 0; q < a; q += k) this._doProcessBlock(e, q);
                    q = e.splice(0, a);
                    c.sigBytes -= j
                }
                return new r.init(q, j)
            },
            clone: function() {
                var a = t.clone.call(this);
                a._data = this._data.clone();
                return a
            },
            _minBufferSize: 0
        });
    l.Hasher = q.extend({
        cfg: t.extend(),
        init: function(a) {
            this.cfg = this.cfg.extend(a);
            this.reset()
        },
        reset: function() {
            q.reset.call(this);
            this._doReset()
        },
        update: function(a) {
            this._append(a);
            this._process();
            return this
        },
        finalize: function(a) {
            a && this._append(a);
            return this._doFinalize()
        },
        blockSize: 16,
        _createHelper: function(a) {
            return function(b, e) {
                return (new a.init(e)).finalize(b)
            }
        },
        _createHmacHelper: function(a) {
            return function(b, e) {
                return (new n.HMAC.init(a,
                    e)).finalize(b)
            }
        }
    });
    var n = d.algo = {};
    return d
}(Math);
(function() {
    var u = CryptoJS,
        p = u.lib.WordArray;
    u.enc.Base64 = {
        stringify: function(d) {
            var l = d.words,
                p = d.sigBytes,
                t = this._map;
            d.clamp();
            d = [];
            for (var r = 0; r < p; r += 3)
                for (var w = (l[r >>> 2] >>> 24 - 8 * (r % 4) & 255) << 16 | (l[r + 1 >>> 2] >>> 24 - 8 * ((r + 1) % 4) & 255) << 8 | l[r + 2 >>> 2] >>> 24 - 8 * ((r + 2) % 4) & 255, v = 0; 4 > v && r + 0.75 * v < p; v++) d.push(t.charAt(w >>> 6 * (3 - v) & 63));
            if (l = t.charAt(64))
                for (; d.length % 4;) d.push(l);
            return d.join("")
        },
        parse: function(d) {
            var l = d.length,
                s = this._map,
                t = s.charAt(64);
            t && (t = d.indexOf(t), -1 != t && (l = t));
            for (var t = [], r = 0, w = 0; w <
                l; w++)
                if (w % 4) {
                    var v = s.indexOf(d.charAt(w - 1)) << 2 * (w % 4),
                        b = s.indexOf(d.charAt(w)) >>> 6 - 2 * (w % 4);
                    t[r >>> 2] |= (v | b) << 24 - 8 * (r % 4);
                    r++
                }
            return p.create(t, r)
        },
        _map: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="
    }
})();
(function(u) {
    function p(b, n, a, c, e, j, k) {
        b = b + (n & a | ~n & c) + e + k;
        return (b << j | b >>> 32 - j) + n
    }

    function d(b, n, a, c, e, j, k) {
        b = b + (n & c | a & ~c) + e + k;
        return (b << j | b >>> 32 - j) + n
    }

    function l(b, n, a, c, e, j, k) {
        b = b + (n ^ a ^ c) + e + k;
        return (b << j | b >>> 32 - j) + n
    }

    function s(b, n, a, c, e, j, k) {
        b = b + (a ^ (n | ~c)) + e + k;
        return (b << j | b >>> 32 - j) + n
    }
    for (var t = CryptoJS, r = t.lib, w = r.WordArray, v = r.Hasher, r = t.algo, b = [], x = 0; 64 > x; x++) b[x] = 4294967296 * u.abs(u.sin(x + 1)) | 0;
    r = r.MD5 = v.extend({
        _doReset: function() {
            this._hash = new w.init([1732584193, 4023233417, 2562383102, 271733878])
        },
        _doProcessBlock: function(q, n) {
            for (var a = 0; 16 > a; a++) {
                var c = n + a,
                    e = q[c];
                q[c] = (e << 8 | e >>> 24) & 16711935 | (e << 24 | e >>> 8) & 4278255360
            }
            var a = this._hash.words,
                c = q[n + 0],
                e = q[n + 1],
                j = q[n + 2],
                k = q[n + 3],
                z = q[n + 4],
                r = q[n + 5],
                t = q[n + 6],
                w = q[n + 7],
                v = q[n + 8],
                A = q[n + 9],
                B = q[n + 10],
                C = q[n + 11],
                u = q[n + 12],
                D = q[n + 13],
                E = q[n + 14],
                x = q[n + 15],
                f = a[0],
                m = a[1],
                g = a[2],
                h = a[3],
                f = p(f, m, g, h, c, 7, b[0]),
                h = p(h, f, m, g, e, 12, b[1]),
                g = p(g, h, f, m, j, 17, b[2]),
                m = p(m, g, h, f, k, 22, b[3]),
                f = p(f, m, g, h, z, 7, b[4]),
                h = p(h, f, m, g, r, 12, b[5]),
                g = p(g, h, f, m, t, 17, b[6]),
                m = p(m, g, h, f, w, 22, b[7]),
                f = p(f, m, g, h, v, 7, b[8]),
                h = p(h, f, m, g, A, 12, b[9]),
                g = p(g, h, f, m, B, 17, b[10]),
                m = p(m, g, h, f, C, 22, b[11]),
                f = p(f, m, g, h, u, 7, b[12]),
                h = p(h, f, m, g, D, 12, b[13]),
                g = p(g, h, f, m, E, 17, b[14]),
                m = p(m, g, h, f, x, 22, b[15]),
                f = d(f, m, g, h, e, 5, b[16]),
                h = d(h, f, m, g, t, 9, b[17]),
                g = d(g, h, f, m, C, 14, b[18]),
                m = d(m, g, h, f, c, 20, b[19]),
                f = d(f, m, g, h, r, 5, b[20]),
                h = d(h, f, m, g, B, 9, b[21]),
                g = d(g, h, f, m, x, 14, b[22]),
                m = d(m, g, h, f, z, 20, b[23]),
                f = d(f, m, g, h, A, 5, b[24]),
                h = d(h, f, m, g, E, 9, b[25]),
                g = d(g, h, f, m, k, 14, b[26]),
                m = d(m, g, h, f, v, 20, b[27]),
                f = d(f, m, g, h, D, 5, b[28]),
                h = d(h, f,
                    m, g, j, 9, b[29]),
                g = d(g, h, f, m, w, 14, b[30]),
                m = d(m, g, h, f, u, 20, b[31]),
                f = l(f, m, g, h, r, 4, b[32]),
                h = l(h, f, m, g, v, 11, b[33]),
                g = l(g, h, f, m, C, 16, b[34]),
                m = l(m, g, h, f, E, 23, b[35]),
                f = l(f, m, g, h, e, 4, b[36]),
                h = l(h, f, m, g, z, 11, b[37]),
                g = l(g, h, f, m, w, 16, b[38]),
                m = l(m, g, h, f, B, 23, b[39]),
                f = l(f, m, g, h, D, 4, b[40]),
                h = l(h, f, m, g, c, 11, b[41]),
                g = l(g, h, f, m, k, 16, b[42]),
                m = l(m, g, h, f, t, 23, b[43]),
                f = l(f, m, g, h, A, 4, b[44]),
                h = l(h, f, m, g, u, 11, b[45]),
                g = l(g, h, f, m, x, 16, b[46]),
                m = l(m, g, h, f, j, 23, b[47]),
                f = s(f, m, g, h, c, 6, b[48]),
                h = s(h, f, m, g, w, 10, b[49]),
                g = s(g, h, f, m,
                    E, 15, b[50]),
                m = s(m, g, h, f, r, 21, b[51]),
                f = s(f, m, g, h, u, 6, b[52]),
                h = s(h, f, m, g, k, 10, b[53]),
                g = s(g, h, f, m, B, 15, b[54]),
                m = s(m, g, h, f, e, 21, b[55]),
                f = s(f, m, g, h, v, 6, b[56]),
                h = s(h, f, m, g, x, 10, b[57]),
                g = s(g, h, f, m, t, 15, b[58]),
                m = s(m, g, h, f, D, 21, b[59]),
                f = s(f, m, g, h, z, 6, b[60]),
                h = s(h, f, m, g, C, 10, b[61]),
                g = s(g, h, f, m, j, 15, b[62]),
                m = s(m, g, h, f, A, 21, b[63]);
            a[0] = a[0] + f | 0;
            a[1] = a[1] + m | 0;
            a[2] = a[2] + g | 0;
            a[3] = a[3] + h | 0
        },
        _doFinalize: function() {
            var b = this._data,
                n = b.words,
                a = 8 * this._nDataBytes,
                c = 8 * b.sigBytes;
            n[c >>> 5] |= 128 << 24 - c % 32;
            var e = u.floor(a /
                4294967296);
            n[(c + 64 >>> 9 << 4) + 15] = (e << 8 | e >>> 24) & 16711935 | (e << 24 | e >>> 8) & 4278255360;
            n[(c + 64 >>> 9 << 4) + 14] = (a << 8 | a >>> 24) & 16711935 | (a << 24 | a >>> 8) & 4278255360;
            b.sigBytes = 4 * (n.length + 1);
            this._process();
            b = this._hash;
            n = b.words;
            for (a = 0; 4 > a; a++) c = n[a], n[a] = (c << 8 | c >>> 24) & 16711935 | (c << 24 | c >>> 8) & 4278255360;
            return b
        },
        clone: function() {
            var b = v.clone.call(this);
            b._hash = this._hash.clone();
            return b
        }
    });
    t.MD5 = v._createHelper(r);
    t.HmacMD5 = v._createHmacHelper(r)
})(Math);
(function() {
    var u = CryptoJS,
        p = u.lib,
        d = p.Base,
        l = p.WordArray,
        p = u.algo,
        s = p.EvpKDF = d.extend({
            cfg: d.extend({
                keySize: 4,
                hasher: p.MD5,
                iterations: 1
            }),
            init: function(d) {
                this.cfg = this.cfg.extend(d)
            },
            compute: function(d, r) {
                for (var p = this.cfg, s = p.hasher.create(), b = l.create(), u = b.words, q = p.keySize, p = p.iterations; u.length < q;) {
                    n && s.update(n);
                    var n = s.update(d).finalize(r);
                    s.reset();
                    for (var a = 1; a < p; a++) n = s.finalize(n), s.reset();
                    b.concat(n)
                }
                b.sigBytes = 4 * q;
                return b
            }
        });
    u.EvpKDF = function(d, l, p) {
        return s.create(p).compute(d,
            l)
    }
})();
CryptoJS.lib.Cipher || function(u) {
    var p = CryptoJS,
        d = p.lib,
        l = d.Base,
        s = d.WordArray,
        t = d.BufferedBlockAlgorithm,
        r = p.enc.Base64,
        w = p.algo.EvpKDF,
        v = d.Cipher = t.extend({
            cfg: l.extend(),
            createEncryptor: function(e, a) {
                return this.create(this._ENC_XFORM_MODE, e, a)
            },
            createDecryptor: function(e, a) {
                return this.create(this._DEC_XFORM_MODE, e, a)
            },
            init: function(e, a, b) {
                this.cfg = this.cfg.extend(b);
                this._xformMode = e;
                this._key = a;
                this.reset()
            },
            reset: function() {
                t.reset.call(this);
                this._doReset()
            },
            process: function(e) {
                this._append(e);
                return this._process()
            },
            finalize: function(e) {
                e && this._append(e);
                return this._doFinalize()
            },
            keySize: 4,
            ivSize: 4,
            _ENC_XFORM_MODE: 1,
            _DEC_XFORM_MODE: 2,
            _createHelper: function(e) {
                return {
                    encrypt: function(b, k, d) {
                        return ("string" == typeof k ? c : a).encrypt(e, b, k, d)
                    },
                    decrypt: function(b, k, d) {
                        return ("string" == typeof k ? c : a).decrypt(e, b, k, d)
                    }
                }
            }
        });
    d.StreamCipher = v.extend({
        _doFinalize: function() {
            return this._process(!0)
        },
        blockSize: 1
    });
    var b = p.mode = {},
        x = function(e, a, b) {
            var c = this._iv;
            c ? this._iv = u : c = this._prevBlock;
            for (var d = 0; d < b; d++) e[a + d] ^=
                c[d]
        },
        q = (d.BlockCipherMode = l.extend({
            createEncryptor: function(e, a) {
                return this.Encryptor.create(e, a)
            },
            createDecryptor: function(e, a) {
                return this.Decryptor.create(e, a)
            },
            init: function(e, a) {
                this._cipher = e;
                this._iv = a
            }
        })).extend();
    q.Encryptor = q.extend({
        processBlock: function(e, a) {
            var b = this._cipher,
                c = b.blockSize;
            x.call(this, e, a, c);
            b.encryptBlock(e, a);
            this._prevBlock = e.slice(a, a + c)
        }
    });
    q.Decryptor = q.extend({
        processBlock: function(e, a) {
            var b = this._cipher,
                c = b.blockSize,
                d = e.slice(a, a + c);
            b.decryptBlock(e, a);
            x.call(this,
                e, a, c);
            this._prevBlock = d
        }
    });
    b = b.CBC = q;
    q = (p.pad = {}).Pkcs7 = {
        pad: function(a, b) {
            for (var c = 4 * b, c = c - a.sigBytes % c, d = c << 24 | c << 16 | c << 8 | c, l = [], n = 0; n < c; n += 4) l.push(d);
            c = s.create(l, c);
            a.concat(c)
        },
        unpad: function(a) {
            a.sigBytes -= a.words[a.sigBytes - 1 >>> 2] & 255
        }
    };
    d.BlockCipher = v.extend({
        cfg: v.cfg.extend({
            mode: b,
            padding: q
        }),
        reset: function() {
            v.reset.call(this);
            var a = this.cfg,
                b = a.iv,
                a = a.mode;
            if (this._xformMode == this._ENC_XFORM_MODE) var c = a.createEncryptor;
            else c = a.createDecryptor, this._minBufferSize = 1;
            this._mode = c.call(a,
                this, b && b.words)
        },
        _doProcessBlock: function(a, b) {
            this._mode.processBlock(a, b)
        },
        _doFinalize: function() {
            var a = this.cfg.padding;
            if (this._xformMode == this._ENC_XFORM_MODE) {
                a.pad(this._data, this.blockSize);
                var b = this._process(!0)
            } else b = this._process(!0), a.unpad(b);
            return b
        },
        blockSize: 4
    });
    var n = d.CipherParams = l.extend({
            init: function(a) {
                this.mixIn(a)
            },
            toString: function(a) {
                return (a || this.formatter).stringify(this)
            }
        }),
        b = (p.format = {}).OpenSSL = {
            stringify: function(a) {
                var b = a.ciphertext;
                a = a.salt;
                return (a ? s.create([1398893684,
                    1701076831
                ]).concat(a).concat(b) : b).toString(r)
            },
            parse: function(a) {
                a = r.parse(a);
                var b = a.words;
                if (1398893684 == b[0] && 1701076831 == b[1]) {
                    var c = s.create(b.slice(2, 4));
                    b.splice(0, 4);
                    a.sigBytes -= 16
                }
                return n.create({
                    ciphertext: a,
                    salt: c
                })
            }
        },
        a = d.SerializableCipher = l.extend({
            cfg: l.extend({
                format: b
            }),
            encrypt: function(a, b, c, d) {
                d = this.cfg.extend(d);
                var l = a.createEncryptor(c, d);
                b = l.finalize(b);
                l = l.cfg;
                return n.create({
                    ciphertext: b,
                    key: c,
                    iv: l.iv,
                    algorithm: a,
                    mode: l.mode,
                    padding: l.padding,
                    blockSize: a.blockSize,
                    formatter: d.format
                })
            },
            decrypt: function(a, b, c, d) {
                d = this.cfg.extend(d);
                b = this._parse(b, d.format);
                return a.createDecryptor(c, d).finalize(b.ciphertext)
            },
            _parse: function(a, b) {
                return "string" == typeof a ? b.parse(a, this) : a
            }
        }),
        p = (p.kdf = {}).OpenSSL = {
            execute: function(a, b, c, d) {
                d || (d = s.random(8));
                a = w.create({
                    keySize: b + c
                }).compute(a, d);
                c = s.create(a.words.slice(b), 4 * c);
                a.sigBytes = 4 * b;
                return n.create({
                    key: a,
                    iv: c,
                    salt: d
                })
            }
        },
        c = d.PasswordBasedCipher = a.extend({
            cfg: a.cfg.extend({
                kdf: p
            }),
            encrypt: function(b, c, d, l) {
                l = this.cfg.extend(l);
                d = l.kdf.execute(d,
                    b.keySize, b.ivSize);
                l.iv = d.iv;
                b = a.encrypt.call(this, b, c, d.key, l);
                b.mixIn(d);
                return b
            },
            decrypt: function(b, c, d, l) {
                l = this.cfg.extend(l);
                c = this._parse(c, l.format);
                d = l.kdf.execute(d, b.keySize, b.ivSize, c.salt);
                l.iv = d.iv;
                return a.decrypt.call(this, b, c, d.key, l)
            }
        })
}();
(function() {
    for (var u = CryptoJS, p = u.lib.BlockCipher, d = u.algo, l = [], s = [], t = [], r = [], w = [], v = [], b = [], x = [], q = [], n = [], a = [], c = 0; 256 > c; c++) a[c] = 128 > c ? c << 1 : c << 1 ^ 283;
    for (var e = 0, j = 0, c = 0; 256 > c; c++) {
        var k = j ^ j << 1 ^ j << 2 ^ j << 3 ^ j << 4,
            k = k >>> 8 ^ k & 255 ^ 99;
        l[e] = k;
        s[k] = e;
        var z = a[e],
            F = a[z],
            G = a[F],
            y = 257 * a[k] ^ 16843008 * k;
        t[e] = y << 24 | y >>> 8;
        r[e] = y << 16 | y >>> 16;
        w[e] = y << 8 | y >>> 24;
        v[e] = y;
        y = 16843009 * G ^ 65537 * F ^ 257 * z ^ 16843008 * e;
        b[k] = y << 24 | y >>> 8;
        x[k] = y << 16 | y >>> 16;
        q[k] = y << 8 | y >>> 24;
        n[k] = y;
        e ? (e = z ^ a[a[a[G ^ z]]], j ^= a[a[j]]) : e = j = 1
    }
    var H = [0, 1, 2, 4, 8,
            16, 32, 64, 128, 27, 54
        ],
        d = d.AES = p.extend({
            _doReset: function() {
                for (var a = this._key, c = a.words, d = a.sigBytes / 4, a = 4 * ((this._nRounds = d + 6) + 1), e = this._keySchedule = [], j = 0; j < a; j++)
                    if (j < d) e[j] = c[j];
                    else {
                        var k = e[j - 1];
                        j % d ? 6 < d && 4 == j % d && (k = l[k >>> 24] << 24 | l[k >>> 16 & 255] << 16 | l[k >>> 8 & 255] << 8 | l[k & 255]) : (k = k << 8 | k >>> 24, k = l[k >>> 24] << 24 | l[k >>> 16 & 255] << 16 | l[k >>> 8 & 255] << 8 | l[k & 255], k ^= H[j / d | 0] << 24);
                        e[j] = e[j - d] ^ k
                    }
                c = this._invKeySchedule = [];
                for (d = 0; d < a; d++) j = a - d, k = d % 4 ? e[j] : e[j - 4], c[d] = 4 > d || 4 >= j ? k : b[l[k >>> 24]] ^ x[l[k >>> 16 & 255]] ^ q[l[k >>>
                    8 & 255]] ^ n[l[k & 255]]
            },
            encryptBlock: function(a, b) {
                this._doCryptBlock(a, b, this._keySchedule, t, r, w, v, l)
            },
            decryptBlock: function(a, c) {
                var d = a[c + 1];
                a[c + 1] = a[c + 3];
                a[c + 3] = d;
                this._doCryptBlock(a, c, this._invKeySchedule, b, x, q, n, s);
                d = a[c + 1];
                a[c + 1] = a[c + 3];
                a[c + 3] = d
            },
            _doCryptBlock: function(a, b, c, d, e, j, l, f) {
                for (var m = this._nRounds, g = a[b] ^ c[0], h = a[b + 1] ^ c[1], k = a[b + 2] ^ c[2], n = a[b + 3] ^ c[3], p = 4, r = 1; r < m; r++) var q = d[g >>> 24] ^ e[h >>> 16 & 255] ^ j[k >>> 8 & 255] ^ l[n & 255] ^ c[p++],
                    s = d[h >>> 24] ^ e[k >>> 16 & 255] ^ j[n >>> 8 & 255] ^ l[g & 255] ^ c[p++],
                    t =
                    d[k >>> 24] ^ e[n >>> 16 & 255] ^ j[g >>> 8 & 255] ^ l[h & 255] ^ c[p++],
                    n = d[n >>> 24] ^ e[g >>> 16 & 255] ^ j[h >>> 8 & 255] ^ l[k & 255] ^ c[p++],
                    g = q,
                    h = s,
                    k = t;
                q = (f[g >>> 24] << 24 | f[h >>> 16 & 255] << 16 | f[k >>> 8 & 255] << 8 | f[n & 255]) ^ c[p++];
                s = (f[h >>> 24] << 24 | f[k >>> 16 & 255] << 16 | f[n >>> 8 & 255] << 8 | f[g & 255]) ^ c[p++];
                t = (f[k >>> 24] << 24 | f[n >>> 16 & 255] << 16 | f[g >>> 8 & 255] << 8 | f[h & 255]) ^ c[p++];
                n = (f[n >>> 24] << 24 | f[g >>> 16 & 255] << 16 | f[h >>> 8 & 255] << 8 | f[k & 255]) ^ c[p++];
                a[b] = q;
                a[b + 1] = s;
                a[b + 2] = t;
                a[b + 3] = n
            },
            keySize: 8
        });
    u.AES = p._createHelper(d)
})();


function encryptMessage(message, key, iv) {
    return CryptoJS.AES.encrypt(message, key, {
        iv: iv,
        padding: CryptoJS.pad.Pkcs7,
        mode: CryptoJS.mode.CBC
    });
}

function decryptMessage(encryptedMessage, key, iv) {
    return CryptoJS.AES.decrypt(encryptedMessage, key, {
        iv: iv,
        padding: CryptoJS.pad.Pkcs7,
        mode: CryptoJS.mode.CBC
    }).toString(CryptoJS.enc.Utf8)
}


function makeid() {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for (var i = 0; i < 16; i++)
        text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
}



'use strict';;
(function(document, window, index) {
    var inputs = document.querySelectorAll('.inputfile');
    Array.prototype.forEach.call(inputs, function(input) {
        var label = input.nextElementSibling,
            labelVal = label.innerHTML;

        input.addEventListener('change', function(e) {
            var fileName = '';
            if (this.files && this.files.length > 1)
                fileName = (this.getAttribute('data-multiple-caption') || '').replace('{count}', this.files.length);
            else
                fileName = e.target.value.split('\\').pop();

            if (fileName)
                label.querySelector('span').innerHTML = fileName;
            else
                label.innerHTML = labelVal;
        });

        // Firefox bug fix
        input.addEventListener('focus', function() {
            input.classList.add('has-focus');
        });
        input.addEventListener('blur', function() {
            input.classList.remove('has-focus');
        });
    });
}(document, window, 0));

"use strict";

var tempvalid = 0;
var tempclass;
$(document).ready(function() {
    $('form').each(function() {
        this.reset();
    }); // document.getElementById("requestCallBackForm").reset();
    // }
    // window.onload=init;

    function createChecksum(data) {
        let plainText = JSON.stringify(data);
        let key = CryptoJS.enc.Utf8.parse("indusindindusind");
        let iv = CryptoJS.enc.Utf8.parse("indusindindusind");
        let bytes = encryptMessage(plainText, key, iv);
        return bytes.toString();
    }

    $('#address').css('color', 'black');
    $(".backbtn").click(function() {
        window.location.reload(); // $("#thq").hide();
        // $("#requestCallBackForm").show();
        // $("#requestCallBackForm").trigger("reset");
        // $(".global_error").hide();
        // $(".fa-check-circle").hide();

        var dropval = $("#producttype").children().eq(0).text();
        $("#producttype").children().eq(0).attr('selected', true);
        $("#producttype").next().find('.filter-option-inner-inner').html(dropval); //Reset form fields
    });
    $(".global_error").hide();
    $(".recaptchaerrorform").hide();
    $(".drop-toggle").on("click", function(event) {
        $(".dropdown-menu1").slideToggle();
        $(this).parent().toggleClass("shadow_selct");
    });
    $(".anc").find("a").removeAttr("href");
    $(".anc").find("a").on("click", function() {
        var txt = $(this);
        var txt2 = txt.text();
        $("#dropdisplay").find("span").text(txt2);
        $(".dropdown-menu1").hide();
        $("#dropdisplay").parent().toggleClass("shadow_selct");
        $("html,body").animate({
            scrollTop: $("#dropdisplay").offset().top - 100
        }, 0);
    }); //regex

    var rname = /^[^-\s][a-zA-Z0-9\s]{0,49}$/;
    var rmobile = /^[6-9]\d{9}$/;
    var remail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/; // var rcustid = /^[^-\s][a-zA-Z0-9]{0,14}$/;

    var raddress = /^[^-\s][a-zA-Z0-9\s]{9,99}$/;
    var rcompanyname = /^.{1,50}$/;
    var ftest = 0,
        ltest = 0,
        mtest = 0,
        etest = 0,
        atest = 0,
        ctest = 0,
        filetest = 0; // var customerIdglobal;

    var testToken;
    var ajaxhit = false;
    var fileupload = false; //==============Function to validate the form======================

    function validate() {
        var form = new FormData();
        var firstName = $("#fname").val();
        var lastName = $("#lname").val();
        var mobile = $("#mnumber").val();
        var email = $("#email").val();
        var address = $("#address").val();
        var producttype = $("#producttype option:selected").val();
        var comapnyname = $("#companyname").val(); //(customerIdglobal = $("#customerid").val());

        var aum = $("#aum").val();
        testToken = 1;

        if ($("#fname").val() == "") {
            $(".ferror").show(); //   $("#fname").focus();

            $("#fnamefalse").css("color", "#ff0000");
            $("#fnamefalse").show();
            testToken = 0;

            if (tempvalid == 0) {
                tempvalid = 1;
                tempclass = "#fname";
            }
        }

        if (ftest == 0) {
            //   $("#fname").focus();
            testToken = 0;

            if (tempvalid == 0) {
                tempvalid = 1;
                tempclass = "#fname";
            }
        }

        if (ltest == 0) {
            $("#lnamefalse").show();
            $(".lerror").show(); //   $("#lname").focus();

            testToken = 0;

            if (tempvalid == 0) {
                tempvalid = 1;
                tempclass = "#lname";
            }
        }

        if (mtest == 0) {
            $("#mobilefalse").show();
            $(".merror").show(); //   $("#mnumber").focus();

            testToken = 0;

            if (tempvalid == 0) {
                tempvalid = 1;
                tempclass = "#mnumber";
            }
        }

        if (etest == 0) {
            $("#emailfalse").show();
            $(".eerror").show(); //   $("#email").focus();

            testToken = 0;

            if (tempvalid == 0) {
                tempvalid = 1;
                tempclass = "#email";
            }
        }

        //      if (atest == 0) {
        //      $("#addressfalse").show();
        //      $(".addresserror").show(); //   $("#address").focus();

        //      testToken = 0;

        //      if (tempvalid == 0) {
        //        tempvalid = 1;
        //        tempclass = "#address";
        //      }
        //    }

        if (!producttype) {
            $(".typeerror").show(); //   $("#producttype").focus();

            testToken = 0;

            if (tempvalid == 0) {
                tempvalid = 1;
                tempclass = "#producttype";
            }
        }

        //    if (ctest == 0) {
        //      $("#cnamefalse").show();
        //      $(".cnameerror").show(); //   $("#companyname").focus();

        //      testToken = 0;

        //      if (tempvalid == 0) {
        //        tempvalid = 1;
        //        tempclass = "#companyname";
        //      }
        //    }

        //    if (filetest == 0) {
        //   $("#file-7").focus();
        //      $('.fileemptyerror').show();
        //      testToken = 0;

        //      if (tempvalid == 0) {
        //        tempvalid = 1;
        //        tempclass = "#file-7";
        //      }
        //    }

        if (gcaptcahsumbit.length === 0) {
            testToken = 0;
            $('.recaptchaerrorform').show();
        } // else {
        //   if (gcaptcahsumbit.length === 0) {// $('.recaptchaerrorform').show();
        //   } else {
        //     ajaxhit = true;
        //   }
        // }


        if (testToken != 0) {

            var data = {
                firstName: firstName,
                lastName: lastName,
                mobileNumber: mobile,
                email: email,
                address: address != null ? address : "",
                productType: producttype,
                companyName: comapnyname != null ? comapnyname : "",
                aum: aum != null ? aum : "",
                recaptchaResponse: gcaptcahsumbit
            };
            //everything is correct form submitted
            form.append("firstName", firstName);
            form.append("lastName", lastName);
            form.append("email", email);
            form.append("mobileNumber", mobile);
            form.append("address", address != null ? address : "");
            form.append("productType", producttype);
            form.append("companyName", comapnyname != null ? comapnyname : "");
            form.append("aum", aum != null ? aum : "");
            form.append("recaptchaResponse", gcaptcahsumbit);

            if (fileupload == true) {
                var fileForm = new FormData($("#formm")[0]);
                var _iteratorNormalCompletion = true;
                var _didIteratorError = false;
                var _iteratorError = undefined;

                try {
                    for (var _iterator = fileForm.entries()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                        var pair = _step.value;

                        if (pair[0] == "file-7[]") {
                            form.append("Upload", pair[1]);
                        }
                    }
                } catch (err) {
                    _didIteratorError = true;
                    _iteratorError = err;
                } finally {
                    try {
                        if (!_iteratorNormalCompletion && _iterator.return != null) {
                            _iterator.return();
                        }
                    } finally {
                        if (_didIteratorError) {
                            throw _iteratorError;
                        }
                    }
                }
            }

            let temkey = "";
            temkey = makeid();
            let encryptFormData = encryptMessage(JSON.stringify(data), CryptoJS.enc.Utf8.parse(temkey), CryptoJS.enc.Utf8.parse(temkey));
            encryptFormData = encryptFormData + temkey;
            let checksum = createChecksum(data);

            $.ajax({
                type: "POST",
                url: "/bin/requestCallback",
                enctype: "multipart/form-data",
                data: form,
                processData: false,
                contentType: false,
                cache: false,
                headers: {
                    checksum: checksum,
                    checksum2: encryptFormData
                },
                success: function success(data) {

                    let temkey = data.substring(0, 16);
                    data = data.substring(16);
                    if ((data != "")) {
                        data = decryptMessage(data, CryptoJS.enc.Utf8.parse(temkey), CryptoJS.enc.Utf8.parse(temkey));
                    }


                    var response = JSON.parse(data);

                    if (response.success == "true") {
                        $("#requestCallBackForm").hide();
                        $("#thq").show();
                        $('html, body').animate({
                            scrollTop: $('#thq').position().top - 110
                        }, 'slow');
                        console.log(response);
                    } else {
                        $(".global_error").show();
                    }
                },
                failure: function failure(error) {
                    $(".global_error").show();
                }
            });
            ajaxhit = false;
        }
    }

    $(".formSubmit").click(function(e) {
        e.preventDefault();
        validate();

        if (tempclass) {
            tempvalid = 0;
            $(tempclass).focus();
        }
    }); //*************************right or wrong input icon display functions****************************

    $(document).on('focusout', 'input', function() {
        if ($(this).length != 0) {
            $(this).css('border-color', '#d3d3d3');
        }
    });


    $("#address").on("keypress", function(event) {
        if ((event.charCode >= 188 && event.charCode <= 191) || (event.charCode >= 44 && event.charCode <= 57) || (event.charCode >= 65 && event.charCode <= 90) || (event.charCode >= 97 && event.charCode <= 122) || (event.charCode === 32) || (event.charCode === 188)) {
            return true;
        } else
            return false;
    });

    $("#companyname").on("keypress", function(event) {

        if ((event.charCode >= 65 && event.charCode <= 90) || (event.charCode >= 97 && event.charCode <= 122) || (event.charCode === 32) || (event.charCode === 46)) {
            return true;
        } else
            return false;
    });

    $("#aum").on("keypress", function(event) {
        //if ((event.charCode >= 65 && event.charCode <= 90)||(event.charCode >= 97 && event.charCode <= 122) || (event.charCode === 32) ) {
        if ((event.charCode >= 48 && event.charCode <= 57)) {
            return true;
        } else
            return false;
    });

    $("#fname").on("blur", function() {
        if (!rname.test($("#fname").val())) {
            $("#fnamefalse").css("color", "#ff0000");
            $("#fnamefalse").show();
            $(".ferror").show();
            ftest = 0;
        } else {
            $("#fnametrue").css("color", "#4a9807");
            $("#fnametrue").show();
            $(".ferror").hide();
            ftest = 1;
        }
    });
    $("#lname").on("blur", function() {
        if (!rname.test($("#lname").val())) {
            $("#lnamefalse").show();
            $(".lerror").show();
            ltest = 0;
        } else {
            $("#lnametrue").css("color", "#4a9807");
            $("#lnametrue").show();
            $(".lerror").hide();
            ltest = 1;
        }
    });
    $("#mnumber").on("blur", function() {
        if (!rmobile.test($("#mnumber").val())) {
            $("#mobilefalse").show();
            $(".merror").show();
            mtest = 0;
        } else {
            $("#mobiletrue").css("color", "#4a9807");
            $("#mobiletrue").show();
            $(".merror").hide();
            mtest = 1;
        }
    });
    $("#email").on("blur", function() {
        if (!remail.test($("#email").val())) {
            $("#emailfalse").show();
            $(".eerror").show();
            etest = 0;
        } else {
            $("#emailtrue").css("color", "#4a9807");
            $("#emailtrue").show();
            $(".eerror").hide();
            etest = 1;
        }
    }); //not mandatory if selected
    //address
    // $("#address").on("input", function () {
    //     if ($("#address").val() == "") {
    //         atest = 0;
    //     } else {
    //         atest = 1;
    //     }
    // });

    $("#address").on("blur", function() {
        if (!raddress.test($("#address").val())) {
            if ($("#address").val().length < 10) {
                $("#addressfalse").show();
                $(".addresserror").show();

            }
            atest = 0;

        } else {
            $("#addresstrue").css("color", "#4a9807");
            $("#addresstrue").show();
            $(".addresserror").hide();
            atest = 1;
        }

        if ($("#address").val() == "") {
            console.log('0');
            ///$(this).parent().find('label').css('top', '10px');
            $(".addresserror").hide();
            $("#addressfalse").hide();
        } //}

    })


    //Mobile Phone Validation


    $('#aum').on('keyup', function(e) {

        //for android chrome keycode fix
        if (navigator.userAgent.match(/Android/i)) {

            var inputValue = this.value;
            var regex = new RegExp("^[a-zA-Z0-9]+$");
            if (!regex.test(inputValue)) {

                this.value = inputValue.substring(0, inputValue.length - 1);

            }


        }
    });


    //Mobile Validation

    $('#aum').on('keyup', function(e) {

        //for android chrome keycode fix
        if (navigator.userAgent.match(/Android/i)) {

            var inputValue = this.value;
            var regex = new RegExp("^[0-9]+$");
            if (!regex.test(inputValue)) {

                this.value = inputValue.substring(0, inputValue.length - 1);

            }


        }
    });





    $("#address").on("blur", function() {
        // if (atest == 0) {


        if ($("#address").val().length <= 10) {
            console.log('less than 10');
            $(this).parent().find('label').css('top', '-15px');
        }

        if ($("#address").val() == "") {
            console.log('0');
            $(this).parent().find('label').css('top', '10px');
        } //}

    }).focus(function() {
        $(this).parent().find('label').css('top', '-15px');
    }); //company name


    $("#companyname").on("keydown", function() {

        $("#cnametrue").show().css("color", "#4a9807");
    })
    $("#companyname").on("blur", function() {
        if ($("#companyname").val() == "") {
            $("#cnametrue").hide();
        }
    })

    $("#aum").on("keydown", function() {

        $("#aumtrue").show().css("color", "#4a9807");
    })
    $("#aum").on("blur", function() {
        if ($("#aum").val() == "") {
            $("#aumtrue").hide();
        }
    })

    //attach Image

    $("#file-7").on("change", function() {
        var fileFormat = $(this).attr("accept");
        var arr = fileFormat.split(",");

        if ($("#file-7").val()) {
            var ext = $("#file-7").val().split(".").pop().toLowerCase();

            if ($.inArray("." + ext, arr) == -1) {
                $(".fileerror").show();
                $(".filesizeerror").hide();
                $(".fileemptyerror").hide();
                filetest = 0;
                fileupload = false;
            } else if (this.files[0].size >= 3145728
                /*3mb = 3145728  byte*/
            ) {
                $(".fileerror").hide();
                $(".filesizeerror").show();
                $(".fileemptyerror").hide();
                filetest = 0;
                fileupload = false;
            } else {
                $(".fileerror").hide();
                $(".filesizeerror").hide();
                $(".fileemptyerror").hide();
                filetest = 1;
                fileupload = true;
            }
        } else {
            $(".fileerror").hide();
            $(".filesizeerror").hide();
            filetest = 1;
            fileupload = false;
        }
    }); //****************************hide errors on input or change****************************

    //chnage border color on focus blur and input
    $('input').on('focus', function() {
        $(this).css("border-color", "#F7A30A");
    });
    $('input').on('blur', function() {
        if ($(this).closest('.form-group').find('.error_input').is(":visible")) {
            $(this).css("border-color", "#ff000b");
        } else {
            $(this).css("border-color", "#e5e5e5");
        }
    });

    $("#fname").on("input", function() {
        $("#fnamefalse").hide();
        $("#fnametrue").hide();
        $(".ferror").hide();
    });
    $("#lname").on("input", function() {
        $("#lnamefalse").hide();
        $("#lnametrue").hide();
        $(".lerror").hide();
    });
    $("#mnumber").on("input", function() {
        $("#mobilefalse").hide();
        $("#mobiletrue").hide();
        $(".merror").hide();
    });
    $("#email").on("input", function() {
        $("#emailfalse").hide();
        $("#emailtrue").hide();
        $(".eerror").hide();
    });
    $("#address").on("input", function() {
        $("#addressfalse").hide();
        $("#addresstrue").hide();
        $(".addresserror").hide();
    });
    $("#producttype").on("change", function() {
        $(".typeerror").hide();
    });
    /* $("#companyname").on("input", function () {
       $("#cnamefalse").hide();
       $("#cnametrue").hide();
       $(".cnameerror").hide();
     });*/ //:::: MOBILE NO RESTRICTIONS::::

    $("input[name='number'],input[name='number2'],input[name='distanceTravelled']").on("input", function() {
        if ($("input[name='number'],input[name='number2']").val().length <= 10) {
            this.value = this.value.replace(/[^0-9\.]/g, "");
        }
    });
});