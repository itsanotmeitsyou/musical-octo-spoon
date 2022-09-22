(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [3775], {
        44923: function(e, t, n) {
            "use strict";
            n.d(t, {
                G: function() {
                    return r
                },
                l: function() {
                    return i
                }
            });
            var r = "playSettings",
                i = "spatialAudioSettings"
        },
        64912: function(e, t, n) {
            "use strict";
            n.d(t, {
                ZP: function() {
                    return ee
                },
                $e: function() {
                    return X
                },
                eY: function() {
                    return K
                }
            });
            var r = n(85893),
                i = n(67294),
                a = n(74979),
                o = n(30083),
                l = n(30883),
                s = n(93969),
                u = n(41749),
                c = n(79895),
                d = n(74638),
                f = .01,
                m = function(e) {
                    var t = e.nestedForm,
                        n = e.defaults,
                        i = (0, l.y)(),
                        a = (0, s.VY)({
                            nestedForm: t,
                            defaultValues: n
                        }).makeNestedFormProps;
                    return (0, r.jsxs)(u.Z, {
                        container: !0,
                        className: i.gridRoot,
                        children: [(0, r.jsx)(u.Z, {
                            item: !0,
                            xs: 6,
                            lg: 4,
                            children: (0, r.jsx)(c.Z, {
                                className: i.paper,
                                children: (0, r.jsx)(d.ZP, {
                                    uniform: !0,
                                    description: "scale",
                                    nestedForm: a("scale"),
                                    defaults: d.SD,
                                    step: f
                                })
                            })
                        }), (0, r.jsx)(u.Z, {
                            item: !0,
                            xs: 6,
                            lg: 4,
                            children: (0, r.jsx)(c.Z, {
                                className: i.paper,
                                children: (0, r.jsx)(d.ZP, {
                                    description: "position",
                                    nestedForm: a("position"),
                                    defaults: d.ek,
                                    step: f
                                })
                            })
                        }), (0, r.jsx)(u.Z, {
                            item: !0,
                            xs: 6,
                            lg: 4,
                            children: (0, r.jsx)(c.Z, {
                                className: i.paper,
                                children: (0, r.jsx)(d.ZP, {
                                    isAngle: !0,
                                    description: "rotation",
                                    nestedForm: a("rotation"),
                                    defaults: d.ek,
                                    step: f
                                })
                            })
                        })]
                    })
                },
                h = n(42091),
                v = n(14788),
                p = n(64789),
                x = n(22318),
                g = n(43323),
                q = n(25120),
                b = n(67402),
                y = n(68624),
                j = function(e) {
                    var t = e.nestedForm,
                        n = e.defaults,
                        a = (0, l.y)(),
                        o = (0, s.VY)({
                            nestedForm: t,
                            defaultValues: n
                        }),
                        u = o.values,
                        d = o.handleFieldChanged,
                        f = o.makeNestedFormProps,
                        m = o.errors,
                        h = (u.size || y.y8) / (u.legacyFontScale || 1),
                        v = (0, i.useCallback)((function(e) {
                            var t = u.legacyFontScale ? e * u.legacyFontScale : e;
                            d("size")(t)
                        }), [d, u.legacyFontScale]);
                    return (0, r.jsxs)(r.Fragment, {
                        children: [(0, r.jsxs)(c.Z, {
                            className: a.paper,
                            children: [(0, r.jsx)(x.Z, {
                                variant: "h6",
                                children: "Text Settings"
                            }), (0, r.jsxs)("div", {
                                className: a.formRoot,
                                children: [(0, r.jsx)("div", {
                                    className: a.formRow,
                                    children: (0, r.jsx)(p.Z, {
                                        value: u.text,
                                        setValue: d("text"),
                                        label: "Text",
                                        size: "fullWidth",
                                        error: null === m || void 0 === m ? void 0 : m.text
                                    })
                                }), (0, r.jsx)("div", {
                                    className: a.formRow,
                                    children: (0, r.jsx)(g.Z, {
                                        label: "Font Color",
                                        setValue: d("frontColor"),
                                        value: u.frontColor
                                    })
                                }), (0, r.jsxs)("div", {
                                    className: a.formRow,
                                    children: [(0, r.jsx)(q.ZP, {
                                        label: "Font Size",
                                        initialValue: h,
                                        setValue: v
                                    }), (0, r.jsx)(q.ZP, {
                                        label: "Depth",
                                        initialValue: u.height,
                                        setValue: d("height")
                                    })]
                                })]
                            })]
                        }), (0, r.jsx)(b.Z, {
                            nestedForm: f("shadow"),
                            defaults: b.U
                        })]
                    })
                },
                S = n(16877),
                w = n(88218),
                Z = n(63433),
                F = n(70429),
                C = n(86211),
                k = n(27973),
                _ = n(64350),
                T = n(74051),
                M = function(e) {
                    var t = e.nestedForm,
                        n = e.defaults,
                        i = (0, s.VY)({
                            nestedForm: t,
                            defaultValues: n
                        }),
                        a = i.values,
                        o = i.handleFieldChanged,
                        u = (0, l.y)();
                    return (0, r.jsx)(r.Fragment, {
                        children: (0, r.jsxs)(k.ZP, {
                            container: !0,
                            children: [(0, r.jsx)(k.ZP, {
                                item: !0,
                                xs: 6,
                                children: (0, r.jsx)(_.Mr, {
                                    label: "Radius",
                                    initialValue: a.radius || 5,
                                    min: 0,
                                    setValue: o("radius"),
                                    step: .1
                                })
                            }), (0, r.jsx)(k.ZP, {
                                item: !0,
                                xs: 6,
                                children: (0, r.jsx)(_.Mr, {
                                    label: "Segments",
                                    initialValue: a.segments || 10,
                                    min: 3,
                                    setValue: o("segments"),
                                    step: 1
                                })
                            }), (0, r.jsx)(k.ZP, {
                                item: !0,
                                xs: 12,
                                children: (0, r.jsx)("div", {
                                    className: u.formRow,
                                    children: (0, r.jsx)(_.i5, {
                                        min: 0,
                                        max: 360,
                                        value: [a.thetaStart || 0, a.thetaEnd || 360],
                                        setFirstValue: o("thetaStart"),
                                        setSecondValue: o("thetaEnd"),
                                        description: "Theta Start/End",
                                        isAngle: !0,
                                        step: 1
                                    })
                                })
                            })]
                        })
                    })
                },
                P = function(e) {
                    var t = e.nestedForm,
                        n = e.defaults,
                        i = (0, s.VY)({
                            nestedForm: t,
                            defaultValues: n
                        }),
                        a = i.values,
                        o = i.handleFieldChanged;
                    return (0, r.jsxs)(k.ZP, {
                        container: !0,
                        children: [(0, r.jsx)(k.ZP, {
                            item: !0,
                            xs: 6,
                            children: (0, r.jsx)(_.Mr, {
                                label: "Width",
                                initialValue: a.width || 2,
                                min: .1,
                                setValue: o("width"),
                                step: .1
                            })
                        }), (0, r.jsx)(k.ZP, {
                            item: !0,
                            xs: 6,
                            children: (0, r.jsx)(_.Mr, {
                                label: "Height",
                                initialValue: a.height || 2,
                                min: .1,
                                setValue: o("height"),
                                step: .1
                            })
                        })]
                    })
                },
                E = function(e) {
                    var t = e.nestedForm,
                        n = e.defaults,
                        i = (0, s.VY)({
                            nestedForm: t,
                            defaultValues: n
                        }),
                        a = i.values,
                        o = i.handleFieldChanged,
                        u = i.makeNestedFormProps,
                        c = (0, l.y)();
                    return (0, r.jsxs)(r.Fragment, {
                        children: [(0, r.jsx)(T.PS, {
                            children: "Shape Settings"
                        }), (0, r.jsx)(T.Ur, {
                            children: "When a user is inside this shape, they will be broadcasted"
                        }), (0, r.jsx)("div", {
                            className: c.formRow,
                            children: (0, r.jsx)(_._u, {
                                options: ["circle", "rectangle"],
                                value: a.kind || "circle",
                                setValue: o("kind")
                            })
                        }), "circle" === a.kind && (0, r.jsx)(M, {
                            nestedForm: u("circle"),
                            defaults: y.pR
                        }), "rectangle" === a.kind && (0, r.jsx)(P, {
                            nestedForm: u("rectangle"),
                            defaults: y.xM
                        })]
                    })
                },
                I = n(22704),
                A = function(e) {
                    var t = e.nestedForm,
                        n = e.defaults,
                        i = (0, s.VY)({
                            nestedForm: t,
                            defaultValues: n
                        }),
                        a = i.values,
                        u = i.handleFieldChanged,
                        c = i.makeNestedFormProps,
                        d = (0, l.y)();
                    return (0, r.jsxs)(r.Fragment, {
                        children: [(0, r.jsx)(k.ZP, {
                            container: !0,
                            children: (0, r.jsx)(k.ZP, {
                                item: !0,
                                xs: 12,
                                children: (0, r.jsxs)(o.ZP, {
                                    className: d.paper,
                                    children: [(0, r.jsx)(T.rT, {
                                        children: "Brodcast Zone Settings"
                                    }), (0, r.jsx)(T.Ur, {
                                        children: "When a user is in a broadcast their video is visible to everyone, and their audio is broadcast to everyone. The audio will taper off based off of the positional audio settings."
                                    })]
                                })
                            })
                        }), (0, r.jsxs)(k.ZP, {
                            container: !0,
                            children: [(0, r.jsx)(k.ZP, {
                                item: !0,
                                xs: 12,
                                lg: 6,
                                children: (0, r.jsxs)(o.ZP, {
                                    className: d.paper,
                                    children: [(0, r.jsx)(E, {
                                        nestedForm: c("shape"),
                                        defaults: y.uT
                                    }), (0, r.jsx)(_.rs, {
                                        label: "Visualize",
                                        value: a.visualize,
                                        setValue: u("visualize")
                                    })]
                                })
                            }), (0, r.jsx)(k.ZP, {
                                item: !0,
                                xs: 12,
                                lg: 6,
                                children: (0, r.jsx)(o.ZP, {
                                    className: d.paper,
                                    children: (0, r.jsx)(I.Z, {
                                        nestedForm: c("sound"),
                                        defaults: y.oS
                                    })
                                })
                            })]
                        })]
                    })
                },
                D = n(33795),
                V = n(42623),
                R = n(24889),
                N = n(61355),
                B = n(72441),
                z = n(74222),
                L = n(6172),
                O = n(47552),
                H = n(36272),
                U = n(68728),
                $ = n(35800),
                G = n(27844),
                W = n(64886),
                Y = n(40164),
                K = function(e, t) {
                    var n = v.h.collection("spaces").doc(e).collection("elementsTree");
                    if (0 === t.length) return null;
                    var r = t[t.length - 1];
                    return n.doc(r)
                },
                X = function() {
                    return {
                        scale: d.ag
                    }
                },
                Q = function(e) {
                    e.error;
                    return (0, r.jsx)("div", {
                        children: "An unhandled error occured..."
                    })
                },
                J = function() {
                    return Object.values(a.H).filter((function(e) {
                        return "root" !== e
                    }))
                },
                ee = function(e) {
                    var t = e.nestedForm,
                        n = e.spaceId,
                        a = e.disableTypeChanged,
                        s = e.elementId,
                        u = (0, l.y)(),
                        c = (0, w.sb)(t),
                        d = c.values,
                        f = c.errors,
                        v = c.handleFieldChanged,
                        x = c.makeNestedFormProps,
                        g = (0, i.useMemo)(J, []),
                        q = {
                            spaceId: n,
                            playerPositionRef: (0, i.useRef)(),
                            documentationMode: !1
                        },
                        b = (0, i.useMemo)((function() {
                            return {
                                locked: d.locked
                            }
                        }), [d.locked]),
                        k = (0, W.mg)();
                    return (0, r.jsx)(r.Fragment, {
                        children: (0, r.jsx)(G.l.Provider, {
                            value: q,
                            children: (0, r.jsx)(Y.h.Provider, {
                                value: b,
                                children: (0, r.jsxs)($.ErrorBoundary, {
                                    FallbackComponent: Q,
                                    onError: function(e, t) {
                                        console.error("error loading values:", d), console.error(e, t)
                                    },
                                    resetKeys: Object.values(d),
                                    children: [(0, r.jsx)(o.ZP, {
                                        className: u.paper,
                                        children: (0, r.jsx)(_._u, {
                                            options: g,
                                            value: d.elementType,
                                            setValue: v("elementType"),
                                            disabled: a
                                        })
                                    }), d.elementType && (0, r.jsxs)(r.Fragment, {
                                        children: [(0, r.jsx)(o.ZP, {
                                            className: u.paper,
                                            children: (0, r.jsx)(p.Z, {
                                                value: d.name,
                                                setValue: v("name"),
                                                label: "Element Name",
                                                size: "xl",
                                                error: null === f || void 0 === f ? void 0 : f.name
                                            })
                                        }), (0, r.jsx)(m, {
                                            nestedForm: x("transform"),
                                            defaults: X
                                        }), B.vP(d) && (0, r.jsx)(h.ZP, {
                                            nestedForm: x("model"),
                                            defaults: y.pk
                                        }), B.Jf(d) && (0, r.jsx)(z.ZP, {
                                            nestedForm: x("placard"),
                                            defaults: k.placard
                                        }), B.Gs(d) && (0, r.jsx)(j, {
                                            nestedForm: x("text"),
                                            defaults: y.Az
                                        }), B.Or(d) && (0, r.jsx)(S.ZP, {
                                            nestedForm: x("image"),
                                            defaults: k.image
                                        }), B.RQ(d) && (0, r.jsx)(Z.ZP, {
                                            nestedForm: x("light"),
                                            defaults: y.PW
                                        }), B.Wv(d) && (0, r.jsx)(F.Z, {
                                            nestedForm: x("video"),
                                            defaults: k.video
                                        }), B.Ij(d) && (0, r.jsx)(C.Z, {
                                            nestedForm: x("screenShare"),
                                            defaults: y.J3
                                        }), B.Id(d) && (0, r.jsx)(A, {
                                            nestedForm: x("broadcastZone"),
                                            defaults: y.DK
                                        }), B.m3(d) && (0, r.jsx)(D.ZP, {
                                            nestedForm: x("reflectorSurface"),
                                            defaults: V.ut
                                        }), B.ni(d) && (0, r.jsx)(R.ZP, {
                                            nestedForm: x("portal"),
                                            defaults: N.S
                                        }), B.qC(d) && (0, r.jsx)(L.Z, {
                                            nestedForm: x("terrain"),
                                            defaults: y.Bs
                                        }), B.L7(d) && (0, r.jsx)(O.ZP, {
                                            nestedForm: x("nft"),
                                            defaults: k.nft,
                                            elementId: s
                                        }), B.uf(d) && (0, r.jsx)(H.ZP, {
                                            nestedForm: x("water"),
                                            defaults: U.Q,
                                            transform: d.transform
                                        })]
                                    })]
                                })
                            })
                        })
                    })
                }
        },
        33850: function(e, t, n) {
            "use strict";
            n.d(t, {
                d: function() {
                    return c
                }
            });
            var r = n(99534),
                i = n(85893),
                a = n(27973),
                o = n(93969),
                l = n(64350),
                s = n(68624),
                u = n(93132),
                c = function(e) {
                    var t = e.title,
                        n = void 0 === t ? "Frame Settings" : t,
                        c = e.defaultExpanded,
                        f = e.notExpandable,
                        m = (0, r.Z)(e, ["title", "defaultExpanded", "notExpandable"]),
                        h = (0, o.mX)(m),
                        v = h.values,
                        p = h.makeNestedFormProps,
                        x = h.handleFieldChanged;
                    return (0, i.jsx)(a.ZP, {
                        item: !0,
                        xs: 12,
                        children: (0, i.jsxs)(u.Z, {
                            title: n,
                            defaultExpanded: c,
                            notExpandable: f,
                            children: [(0, i.jsx)(a.ZP, {
                                item: !0,
                                xs: 12,
                                children: (0, i.jsx)(l.rs, {
                                    value: v.hasFrame,
                                    setValue: x("hasFrame"),
                                    label: "Has a Frame"
                                })
                            }), v.hasFrame && (0, i.jsx)(d, {
                                nestedForm: p("frameConfig"),
                                defaults: s.GE,
                                formSection: !1
                            })]
                        })
                    })
                },
                d = function(e) {
                    var t = e.nestedForm,
                        n = e.defaults,
                        r = e.title,
                        c = void 0 === r ? "Frame Settings" : r,
                        d = e.formSection,
                        f = void 0 === d || d,
                        m = e.defaultExpanded,
                        h = (0, o.VY)({
                            nestedForm: t,
                            defaultValues: n
                        }),
                        v = h.values,
                        p = h.handleFieldChanged,
                        x = (0, h.makeNestedFormProps)("material"),
                        g = (0, o.VY)({
                            nestedForm: x,
                            defaultValues: s.w$
                        }),
                        q = (0, i.jsxs)(i.Fragment, {
                            children: [(0, i.jsx)(l.Mr, {
                                label: "Frame Border",
                                initialValue: v.border || 0,
                                setValue: p("border")
                            }), (0, i.jsx)(l.Mr, {
                                label: "Frame Depth",
                                initialValue: v.depth || 0,
                                setValue: p("depth")
                            }), (0, i.jsx)(l.zH, {
                                label: "Frame Color",
                                value: g.values.color,
                                setValue: g.handleFieldChanged("color")
                            })]
                        });
                    return f ? (0, i.jsx)(a.ZP, {
                        item: !0,
                        xs: 12,
                        children: (0, i.jsx)(u.Z, {
                            title: c,
                            defaultExpanded: m,
                            children: q
                        })
                    }) : q
                };
            t.Z = d
        },
        16877: function(e, t, n) {
            "use strict";
            n.d(t, {
                Wf: function() {
                    return Z
                },
                cK: function() {
                    return w
                }
            });
            var r = n(26042),
                i = n(69396),
                a = n(99534),
                o = n(85893),
                l = n(27973),
                s = n(30083),
                u = n(30883),
                c = n(55239),
                d = n(93969),
                f = n(64350),
                m = n(74051),
                h = n(64742),
                v = n(5327),
                p = n(67294),
                x = n(93132),
                g = n(42091),
                q = n(33850),
                b = n(68624),
                y = n(32725),
                j = ["40", "50", "60", "80", "100"],
                S = function(e) {
                    var t, n, r = e.mediaShape,
                        i = e.title,
                        l = void 0 === i ? "Image Resolution and Quality" : i,
                        s = e.defaultExpanded,
                        c = e.notExpandable,
                        m = (0, a.Z)(e, ["mediaShape", "title", "defaultExpanded", "notExpandable"]),
                        h = (0, p.useMemo)((function() {
                            return null === r || void 0 === r ? void 0 : r.width
                        }), [null === r || void 0 === r ? void 0 : r.width]),
                        v = (0, p.useMemo)((function() {
                            if (h) {
                                return [480, 640, 720, 1e3, 1280, 1600, 1920, 2240, 2560].filter((function(e) {
                                    return e <= h
                                })).map((function(e) {
                                    return e.toString()
                                }))
                            }
                        }), [h]),
                        g = (0, u.y)(),
                        q = (0, d.mX)(m),
                        y = q.values,
                        S = q.handleFieldChanged,
                        w = (0, p.useCallback)((function(e) {
                            S("inSpaceResolution")(+e)
                        }), [S]),
                        Z = (0, p.useCallback)((function(e) {
                            S("inSpaceQuality")(+e)
                        }), [S]);
                    return (0, o.jsx)(x.Z, {
                        title: l,
                        defaultExpanded: s,
                        notExpandable: c,
                        children: v && (0, o.jsxs)(o.Fragment, {
                            children: [(0, o.jsx)("div", {
                                className: g.formRow,
                                children: (0, o.jsx)(f._u, {
                                    label: "In-Space Max Image Resolution (along the width of the image)",
                                    options: v,
                                    value: (null === (t = y.inSpaceResolution) || void 0 === t ? void 0 : t.toString()) || b.q.toString(),
                                    setValue: w,
                                    description: "Since the full image resolution is usually not seen within a space (unless a viewer is very close up), it is recommended to resize the image down before displaying it; This can significantly help with performance and load time. This setting will set the max resolution in pixels, along the width, that the image will be displayed in the space."
                                })
                            }), (0, o.jsx)("div", {
                                className: g.formRow,
                                children: (0, o.jsx)(f._u, {
                                    label: "In-Space Image Quality",
                                    options: j,
                                    value: (null === (n = y.inSpaceQuality) || void 0 === n ? void 0 : n.toString()) || b.gG.toString(),
                                    setValue: Z,
                                    description: "This will set the quality of the image displayed in the space. Lower quality means faster load time and better performance for visitors. Recommended value is 80."
                                })
                            })]
                        })
                    })
                },
                w = function(e) {
                    var t = e.values,
                        n = e.handleFieldChanged,
                        r = e.errors,
                        i = e.defaultExpanded,
                        a = e.notExpandable,
                        s = e.title,
                        d = (0, u.y)();
                    return (0, o.jsx)(l.ZP, {
                        item: !0,
                        xs: 12,
                        children: (0, o.jsxs)(x.Z, {
                            title: s,
                            defaultExpanded: i,
                            notExpandable: a,
                            children: [(0, o.jsx)("div", {
                                className: d.formRow,
                                children: (0, o.jsx)(c.Ee, {
                                    disablePaper: !0,
                                    fieldName: "Image File",
                                    file: t.imageFile,
                                    handleChanged: n("imageFile"),
                                    errors: null === r || void 0 === r ? void 0 : r.imageFile,
                                    allowEmpty: !0,
                                    allowExternalFile: !0,
                                    shapeDetermined: n("imageShape"),
                                    extensions: b.$N
                                })
                            }), (0, o.jsx)("div", {
                                className: d.formRow,
                                children: (0, o.jsx)(f.rs, {
                                    label: "Transparent",
                                    value: t.transparent || !1,
                                    setValue: n("transparent")
                                })
                            }), (0, o.jsx)(f.rs, {
                                label: "Animated",
                                value: t.isAnimated || !1,
                                setValue: n("isAnimated")
                            })]
                        })
                    })
                },
                Z = function(e) {
                    var t = e.mediaShape,
                        n = e.getThemeDefault,
                        r = e.nestedForm,
                        i = e.hideGeometrySettings,
                        a = (0, d.mX)({
                            nestedForm: r,
                            getThemeDefault: n
                        }).makeNestedFormProps;
                    return (0, o.jsxs)(o.Fragment, {
                        children: [(0, o.jsx)(S, {
                            nestedForm: r,
                            getThemeDefault: v.imageInSpaceQuality,
                            mediaShape: t,
                            notExpandable: !0
                        }), !i && (0, o.jsx)(y.Z, {
                            nestedForm: a("geometry"),
                            title: "3d Image Element Geoemetry",
                            notExpandable: !0
                        })]
                    })
                };
            t.ZP = function(e) {
                var t = e.nestedForm,
                    n = e.defaults,
                    a = (0, d.VY)({
                        nestedForm: t,
                        defaultValues: n
                    }),
                    c = a.values,
                    f = (0, u.y)();
                return (0, o.jsxs)(l.ZP, {
                    container: !0,
                    children: [(0, o.jsxs)(l.ZP, {
                        item: !0,
                        lg: 6,
                        xs: 12,
                        children: [(0, o.jsx)(w, (0, i.Z)((0, r.Z)({}, a), {
                            defaultExpanded: !0,
                            title: "Image Contents"
                        })), (0, o.jsx)(q.d, {
                            nestedForm: a.makeNestedFormProps("frame"),
                            getThemeDefault: v.defaultFrame,
                            title: "Image Frame"
                        }), (0, o.jsx)(Z, {
                            nestedForm: a.makeNestedFormProps("settings"),
                            getThemeDefault: v.getDefaultImageSettings,
                            mediaShape: c.imageShape
                        }), (0, o.jsx)(g.Fv, (0, r.Z)({}, a))]
                    }), (0, o.jsx)(l.ZP, {
                        item: !0,
                        lg: 6,
                        xs: 12,
                        children: (0, o.jsxs)(s.ZP, {
                            className: f.paper,
                            children: [(0, o.jsx)(m.PS, {
                                children: "Image Element Preview"
                            }), (0, o.jsx)(h.Ee, {
                                config: c
                            })]
                        })
                    })]
                })
            }
        },
        13448: function(e, t, n) {
            "use strict";
            n.d(t, {
                D: function() {
                    return q
                },
                K: function() {
                    return g
                }
            });
            var r = n(10253),
                i = n(85893),
                a = n(67294),
                o = n(64350),
                l = n(85437),
                s = n(93969),
                u = n(30883),
                c = n(22318),
                d = n(282),
                f = n(15181),
                m = n(74051),
                h = n(49168),
                v = n(55239),
                p = n(68624),
                x = '\n<p>Hello!</p>\n<p>What you write here would appear on the screen when they click this model</p>\n<p>You can add things here like \ud83c\udf89 and <a href="https://arium.xyz/home" target="_blank">this</a> and\n<span style="color: rgb(44,130,201);"> t</span>\n<span style="color: rgb(247,218,100);">h</span>\n<span style="color: rgb(0,168,133);">i</span>\n<span style="color: rgb(147,101,184);">s!</span>\n</p>\n'.replace("\n", ""),
                g = function() {
                    return {
                        action: h.s.showModal,
                        payload: {
                            backgroundColor: "#ffffff",
                            contentHTML: x,
                            maxDistance: 20,
                            showDetail: !0,
                            detailFileType: "self"
                        }
                    }
                },
                q = function(e) {
                    var t = e.nestedForm,
                        n = e.defaults,
                        r = (0, s.VY)({
                            nestedForm: t,
                            defaultValues: n
                        }),
                        a = r.values,
                        l = r.handleFieldChanged,
                        u = r.makeNestedFormProps,
                        c = l("action");
                    return (0, i.jsxs)(i.Fragment, {
                        children: [(0, i.jsx)("br", {}), (0, i.jsx)(o.TV, {
                            options: Object.keys(h.s).map((function(e) {
                                return h.s[e]
                            })),
                            value: a.action,
                            label: "Action on Click",
                            setValue: c
                        }), a.action === h.s.showModal && (0, i.jsx)(y, {
                            nestedForm: u("payload")
                        })]
                    })
                },
                b = {
                    options: ["inline", "blockType", "list", "textAlign", "colorPicker", "link", "history", "fontSize", "fontFamily"],
                    fontSize: {
                        options: ["", 8, 9, 10, 11, 12, 14, 16, 18, 24, 30, 36, 48, 60, 72, 96],
                        className: void 0,
                        component: void 0,
                        dropdownClassName: void 0
                    },
                    fontFamily: {
                        options: ["", "Arial", "Verdana", "Helvetica", "Tahoma", "Trebuchet MS", "Times New Roman", "Georgia", "Garamond", "Courier New"],
                        className: void 0,
                        component: void 0,
                        dropdownClassName: void 0
                    }
                },
                y = function(e) {
                    var t = e.nestedForm,
                        n = (0, l.sb)(t),
                        s = n.values,
                        h = n.handleFieldChanged,
                        x = (0, a.useState)(!1),
                        g = x[0],
                        q = x[1],
                        y = (0, u.y)(),
                        j = (0, r.Z)((0, o.UK)(h("contentHTML"), s.contentHTML), 2),
                        S = j[0],
                        w = j[1],
                        Z = (0, a.useCallback)((function(e) {
                            h("detailFile")(void 0), h("detailFileType")(e)
                        }), [h]),
                        F = (0, a.useMemo)((function() {
                            return ["self", "image", "video"]
                        }), []);
                    return (0, i.jsxs)(i.Fragment, {
                        children: [(0, i.jsx)(m.PS, {
                            children: "Model Settings"
                        }), (0, i.jsx)("div", {
                            className: y.formRow,
                            children: (0, i.jsx)(o.Mr, {
                                initialValue: s.maxDistance,
                                setValue: h("maxDistance"),
                                label: "Max Click Distance"
                            })
                        }), (0, i.jsx)("div", {
                            className: y.formRow,
                            children: (0, i.jsx)(o.zH, {
                                label: "Background Color",
                                value: s.backgroundColor,
                                setValue: h("backgroundColor")
                            })
                        }), (0, i.jsx)(m.PS, {
                            children: "Asset to Display"
                        }), (0, i.jsxs)("div", {
                            className: y.formRow,
                            children: [(0, i.jsx)(o.rs, {
                                label: "Show Asset",
                                value: s.showDetail,
                                setValue: h("showDetail")
                            }), s.showDetail && (0, i.jsxs)(i.Fragment, {
                                children: [(0, i.jsx)(o._u, {
                                    value: s.detailFileType,
                                    options: F,
                                    setValue: Z
                                }), s.detailFileType && (0, i.jsxs)(i.Fragment, {
                                    children: ["self" === s.detailFileType && (0, i.jsxs)(i.Fragment, {
                                        children: [(0, i.jsx)(c.Z, {
                                            variant: "body1",
                                            children: "Display this element in the modal."
                                        }), (0, i.jsx)(c.Z, {
                                            variant: "caption",
                                            children: "Only works when this element is a video or an image"
                                        })]
                                    }), "image" === s.detailFileType && (0, i.jsx)(v.Ee, {
                                        fieldName: "Image File to Show",
                                        file: s.detailFile,
                                        handleChanged: h("detailFile"),
                                        allowEmpty: !0,
                                        extensions: p.$N,
                                        allowExternalFile: !0
                                    }), "video" === s.detailFileType && (0, i.jsx)(v.nk, {
                                        fieldName: "Video File to Show",
                                        file: s.detailFile,
                                        handleChanged: h("detailFile"),
                                        allowEmpty: !0,
                                        extensions: p.u3,
                                        allowExternalFile: !0
                                    })]
                                })]
                            })]
                        }), (0, i.jsx)("br", {}), (0, i.jsx)(m.PS, {
                            children: (0, i.jsxs)(i.Fragment, {
                                children: ["Text to Display", (0, i.jsx)(w, {
                                    type: "submit",
                                    variant: "contained",
                                    color: "primary",
                                    style: {
                                        float: "right"
                                    },
                                    children: "Save"
                                }), (0, i.jsx)(d.Z, {
                                    style: {
                                        float: "right"
                                    },
                                    onClick: function(e) {
                                        return q(!0)
                                    },
                                    children: "Preview"
                                })]
                            })
                        }), (0, i.jsx)("br", {}), (0, i.jsxs)("div", {
                            style: {
                                borderWidth: "12px",
                                borderColor: s.backgroundColor,
                                backgroundColor: s.backgroundColor
                            },
                            children: [(0, i.jsx)(S, {
                                toolBarConfigOverride: b
                            }), (0, i.jsx)(f.w, {
                                show: g,
                                onClose: function() {
                                    return q(!1)
                                },
                                bgColor: s.backgroundColor,
                                markup: s.contentHTML,
                                assetDetailsFileType: s.detailFileType,
                                assetDetailsFile: s.detailFile
                            })]
                        })]
                    })
                }
        },
        83450: function(e, t, n) {
            "use strict";
            n.d(t, {
                Z: function() {
                    return p
                }
            });
            var r = n(85893),
                i = n(27973),
                a = n(30883),
                o = n(64350),
                l = n(93969),
                s = n(86740),
                u = n(67294),
                c = n(93132),
                d = n(41749),
                f = Math.pow(2, 10),
                m = function(e) {
                    var t, n, i = e.nestedForm,
                        s = e.defaults,
                        m = (0, l.VY)({
                            nestedForm: i,
                            defaultValues: s
                        }),
                        h = m.values,
                        v = m.handleFieldChanged,
                        p = m.errors,
                        x = (0, a.y)(),
                        g = function(e) {
                            var t = e.min,
                                n = e.max;
                            return (0, u.useMemo)((function() {
                                for (var e = [], r = t, i = 1; r <= n;) {
                                    var a = Math.pow(2, i);
                                    if (a > t && a <= n && e.push(a), a >= n) break;
                                    i++
                                }
                                return e.map((function(e) {
                                    return {
                                        value: e,
                                        label: e.toString()
                                    }
                                }))
                            }), [t, n])
                        }({
                            min: 4,
                            max: f
                        }),
                        q = (0, u.useMemo)((function() {
                            var e = g.map((function(e) {
                                return e.label
                            }));
                            return {
                                firstHalf: e.slice(0, Math.floor(e.length / 2)),
                                secondHalf: e.slice(Math.floor(e.length / 2), e.length)
                            }
                        }), [g]);
                    return (0, r.jsx)(d.Z, {
                        item: !0,
                        xs: 12,
                        children: (0, r.jsxs)(c.Z, {
                            title: "Advanced Light Shadow Settings",
                            children: [(0, r.jsxs)("div", {
                                className: x.formRow,
                                children: [(0, r.jsx)("label", {
                                    children: "Shadow Map Size"
                                }), (0, r.jsx)("br", {}), (0, r.jsx)(o._u, {
                                    options: q.firstHalf,
                                    value: null === (t = h.mapSize) || void 0 === t ? void 0 : t.toString(),
                                    setValue: function(e) {
                                        return v("mapSize")(+e)
                                    }
                                }), (0, r.jsx)("br", {}), (0, r.jsx)(o._u, {
                                    options: q.secondHalf,
                                    value: null === (n = h.mapSize) || void 0 === n ? void 0 : n.toString(),
                                    setValue: function(e) {
                                        return v("mapSize")(+e)
                                    }
                                })]
                            }), (0, r.jsxs)("div", {
                                className: x.formRow,
                                children: [(0, r.jsx)(o.Mr, {
                                    initialValue: h.cameraFar,
                                    setValue: v("cameraFar"),
                                    step: 1,
                                    label: "Shadow Map Camera Far",
                                    error: null === p || void 0 === p ? void 0 : p.cameraFar
                                }), (0, r.jsx)(o.Mr, {
                                    initialValue: h.cameraSize,
                                    setValue: v("cameraSize"),
                                    step: 1,
                                    label: "Shadow Map Camera Size",
                                    error: null === p || void 0 === p ? void 0 : p.cameraSize
                                }), (0, r.jsx)(o.Mr, {
                                    initialValue: h.bias,
                                    setValue: v("bias"),
                                    step: 1e-5,
                                    label: "Shadow Bias"
                                })]
                            })]
                        })
                    })
                },
                h = n(68624),
                v = function() {
                    return {
                        x: 0,
                        y: 2,
                        z: 0
                    }
                },
                p = function(e) {
                    var t = e.nestedForm,
                        n = e.defaults,
                        u = (0, l.VY)({
                            nestedForm: t,
                            defaultValues: n
                        }),
                        c = u.values,
                        d = u.handleFieldChanged,
                        f = u.makeNestedFormProps,
                        p = f("position"),
                        x = (0, l.VY)({
                            nestedForm: p,
                            defaultValues: v
                        }),
                        g = x.values,
                        q = x.handleFieldChanged,
                        b = (0, a.y)();
                    return (0, r.jsxs)(i.ZP, {
                        container: !0,
                        children: [(0, r.jsx)(i.ZP, {
                            item: !0,
                            xs: 12,
                            children: (0, r.jsx)(o.Mr, {
                                initialValue: g.y,
                                setValue: q("y"),
                                step: .01,
                                min: 1,
                                label: "height"
                            })
                        }), (0, r.jsxs)(i.ZP, {
                            item: !0,
                            xs: 12,
                            children: [(0, r.jsx)("div", {
                                className: b.formRow,
                                children: (0, r.jsx)(s.Z, {
                                    label: "Cast Shadow? (Turn on cautiously, this can cause serious performance issues).",
                                    value: c.castShadow,
                                    setValue: d("castShadow")
                                })
                            }), c.castShadow && (0, r.jsx)(m, {
                                nestedForm: f("shadowConfig"),
                                defaults: h.Bj
                            })]
                        })]
                    })
                }
        },
        63433: function(e, t, n) {
            "use strict";
            n.d(t, {
                XX: function() {
                    return x
                },
                eR: function() {
                    return p
                },
                gO: function() {
                    return g
                },
                nd: function() {
                    return q
                }
            });
            var r = n(26042),
                i = n(85893),
                a = n(27973),
                o = n(89590),
                l = n(43323),
                s = n(93969),
                u = n(18032),
                c = n(83450),
                d = n(52950),
                f = n(80498),
                m = n(68624),
                h = n(93132),
                v = n(43257),
                p = function(e) {
                    return e.kind === f.i.directional
                },
                x = function(e) {
                    return e.kind === f.i.spot
                },
                g = function(e) {
                    return e.kind === f.i.point
                },
                q = function(e) {
                    var t = e.values,
                        n = e.handleFieldChanged;
                    return (0, i.jsx)(a.ZP, {
                        item: !0,
                        xs: 12,
                        children: (0, i.jsx)(h.Z, {
                            title: "Light Settings",
                            defaultExpanded: !0,
                            children: (0, i.jsxs)(a.ZP, {
                                container: !0,
                                children: [(0, i.jsx)(a.ZP, {
                                    item: !0,
                                    xs: 12,
                                    children: (0, i.jsx)(o.Z, {
                                        options: ["directional", "spot", "point"],
                                        value: t.kind,
                                        label: "Light Kind",
                                        setValue: n("kind")
                                    })
                                }), (0, i.jsx)(a.ZP, {
                                    item: !0,
                                    xs: 12,
                                    children: (0, i.jsx)(u.Z, {
                                        label: "Intensity",
                                        value: t.intensity || m._k,
                                        setValue: n("intensity")
                                    })
                                }), (0, i.jsx)(a.ZP, {
                                    item: !0,
                                    xs: 12,
                                    children: (0, i.jsx)(l.Z, {
                                        label: "color",
                                        value: t.color,
                                        setValue: n("color")
                                    })
                                })]
                            })
                        })
                    })
                };
            t.ZP = function(e) {
                var t = e.nestedForm,
                    n = e.defaults,
                    o = (0, s.VY)({
                        nestedForm: t,
                        defaultValues: n
                    }),
                    l = o.values,
                    u = o.makeNestedFormProps;
                return (0, i.jsxs)(a.ZP, {
                    container: !0,
                    children: [(0, i.jsx)(a.ZP, {
                        item: !0,
                        xs: 12,
                        lg: 6,
                        children: (0, i.jsx)(q, (0, r.Z)({}, o))
                    }), p(l) && (0, i.jsx)(a.ZP, {
                        item: !0,
                        xs: 12,
                        lg: 6,
                        children: (0, i.jsx)(h.Z, {
                            title: "Directional Light Settings",
                            defaultExpanded: !0,
                            children: (0, i.jsx)(c.Z, {
                                nestedForm: u("directional"),
                                defaults: m.mQ
                            })
                        })
                    }), x(l) && (0, i.jsx)(i.Fragment, {
                        children: (0, i.jsxs)(h.Z, {
                            title: "Spot Light Settings",
                            defaultExpanded: !0,
                            children: [(0, i.jsx)(a.ZP, {
                                item: !0,
                                xs: 12,
                                lg: 6,
                                children: (0, i.jsx)(c.Z, {
                                    nestedForm: u("directional"),
                                    defaults: m.mQ
                                })
                            }), (0, i.jsx)(a.ZP, {
                                item: !0,
                                xs: 12,
                                lg: 6,
                                children: (0, i.jsx)(d.Z, {
                                    nestedForm: u("spot"),
                                    defaults: m.jK
                                })
                            })]
                        })
                    }), g(l) && (0, i.jsx)(a.ZP, {
                        item: !0,
                        xs: 12,
                        lg: 6,
                        children: (0, i.jsx)(h.Z, {
                            title: "Point Light Settings",
                            defaultExpanded: !0,
                            children: (0, i.jsx)(v.Z, {
                                nestedForm: t,
                                defaults: n
                            })
                        })
                    })]
                })
            }
        },
        43257: function(e, t, n) {
            "use strict";
            var r = n(85893),
                i = n(27973),
                a = n(30083),
                o = n(30883),
                l = n(64350),
                s = n(93969);
            t.Z = function(e) {
                var t = e.nestedForm,
                    n = e.defaults,
                    u = (0, s.VY)({
                        nestedForm: t,
                        defaultValues: n
                    }),
                    c = u.values,
                    d = u.handleFieldChanged,
                    f = (0, o.y)();
                return (0, r.jsxs)(i.ZP, {
                    item: !0,
                    xs: 12,
                    children: [(0, r.jsx)(i.ZP, {
                        item: !0,
                        xs: 12,
                        lg: 6,
                        children: (0, r.jsx)(a.ZP, {
                            className: f.paper,
                            children: (0, r.jsx)(l.iR, {
                                exponential: !1,
                                min: 0,
                                max: 100,
                                label: "Distance",
                                value: c.distance,
                                setValue: d("distance"),
                                description: "How far the point light should project to."
                            })
                        })
                    }), (0, r.jsx)(i.ZP, {
                        item: !0,
                        xs: 12,
                        lg: 6,
                        children: (0, r.jsx)(a.ZP, {
                            className: f.paper,
                            children: (0, r.jsx)(l.iR, {
                                exponential: !1,
                                label: "Decay",
                                min: 0,
                                max: 5,
                                value: c.decay,
                                setValue: d("decay"),
                                description: "How much the light decays. 0 means it does not decay at all."
                            })
                        })
                    })]
                })
            }
        },
        52950: function(e, t, n) {
            "use strict";
            var r = n(85893),
                i = n(27973),
                a = n(30883),
                o = n(93969),
                l = n(18032),
                s = n(25120),
                u = [{
                    value: 0,
                    label: "0"
                }, {
                    value: 1,
                    label: "1"
                }],
                c = [{
                    value: 0,
                    label: "0\xb0"
                }, {
                    value: 90,
                    label: "90\xb0"
                }];
            t.Z = function(e) {
                var t = e.nestedForm,
                    n = e.defaults,
                    d = (0, o.VY)({
                        nestedForm: t,
                        defaultValues: n
                    }),
                    f = d.values,
                    m = d.handleFieldChanged,
                    h = d.errors,
                    v = (0, a.y)();
                return (0, r.jsxs)(i.ZP, {
                    container: !0,
                    children: [(0, r.jsxs)("div", {
                        className: v.formRow,
                        children: [(0, r.jsx)(s.ZP, {
                            label: "Distance",
                            initialValue: f.distance || 0,
                            step: .1,
                            setValue: m("distance"),
                            error: null === h || void 0 === h ? void 0 : h.distance
                        }), (0, r.jsx)(l.Z, {
                            label: "Angle",
                            value: f.angle,
                            min: 0,
                            max: 90,
                            setValue: m("angle"),
                            marks: c,
                            isAngle: !0
                        }), (0, r.jsx)(l.Z, {
                            label: "Decay",
                            value: f.decay,
                            min: 0,
                            max: 2,
                            setValue: m("decay")
                        })]
                    }), (0, r.jsx)("div", {
                        className: v.formRow,
                        children: (0, r.jsx)(l.Z, {
                            label: "Penumbra",
                            value: f.penumbra,
                            min: 0,
                            max: 1,
                            setValue: m("penumbra"),
                            marks: u
                        })
                    })]
                })
            }
        },
        92661: function(e, t, n) {
            "use strict";
            n.d(t, {
                Z: function() {
                    return y
                }
            });
            var r = n(26042),
                i = n(69396),
                a = n(85893),
                o = n(30883),
                l = n(64350),
                s = n(93969),
                u = n(74051),
                c = n(55239),
                d = n(79895),
                f = n(22318),
                m = n(18032),
                h = n(43323),
                v = n(68624),
                p = function() {
                    return {
                        specularColor: "0x111111",
                        shininess: 0,
                        reflectivity: 0
                    }
                },
                x = function(e) {
                    var t = e.nestedForm,
                        n = e.defaults,
                        r = (0, s.VY)({
                            nestedForm: t,
                            defaultValues: n
                        }),
                        i = r.values,
                        l = r.handleFieldChanged,
                        u = r.errors,
                        p = (0, o.y)();
                    return (0, a.jsxs)(d.Z, {
                        className: p.paper,
                        children: [(0, a.jsx)(f.Z, {
                            variant: "h6",
                            children: "Phong Material Settings"
                        }), (0, a.jsx)("div", {
                            className: p.formRow,
                            children: (0, a.jsx)(h.Z, {
                                label: "Specular Color",
                                value: i.specularColor,
                                setValue: l("specularColor")
                            })
                        }), (0, a.jsx)("div", {
                            className: p.formRow,
                            children: (0, a.jsx)(m.Z, {
                                label: "Shininess",
                                value: i.shininess || 0,
                                setValue: l("shininess"),
                                max: 100,
                                step: .1
                            })
                        }), (0, a.jsx)("div", {
                            className: p.formRow,
                            children: (0, a.jsx)(m.Z, {
                                label: "Reflectivity",
                                value: i.reflectivity || 0,
                                setValue: l("reflectivity")
                            })
                        }), (0, a.jsx)("div", {
                            className: p.formRow,
                            children: (0, a.jsx)(c.Ee, {
                                fieldName: "Bump Map Texture File",
                                file: i.bumpMapTextureFile,
                                handleChanged: l("bumpMapTextureFile"),
                                errors: null === u || void 0 === u ? void 0 : u.bumpMapTextureFile,
                                extensions: v.$N,
                                allowEmpty: !0
                            })
                        }), i.bumpMapTextureFile && (0, a.jsx)(m.Z, {
                            label: "Bump Map Scale",
                            value: i.bumpMapScale || 1,
                            setValue: l("bumpMapScale")
                        })]
                    })
                },
                g = n(93132),
                q = (n(67294), function(e) {
                    var t = e.values,
                        n = e.handleFieldChanged,
                        r = e.showColor,
                        i = (0, o.y)();
                    return (0, a.jsxs)(a.Fragment, {
                        children: [r && (0, a.jsx)("div", {
                            className: i.formRow,
                            children: (0, a.jsx)(l.zH, {
                                label: "color",
                                value: t.color,
                                setValue: n("color")
                            })
                        }), (0, a.jsx)("div", {
                            className: i.formRow,
                            children: (0, a.jsx)(l.rs, {
                                label: "Transparent",
                                value: t.transparent,
                                setValue: n("transparent")
                            })
                        }), t.transparent && (0, a.jsx)("div", {
                            className: i.formRow,
                            children: (0, a.jsx)(l.iR, {
                                label: "Opacity",
                                value: t.opacity || 1,
                                setValue: n("opacity")
                            })
                        })]
                    })
                }),
                b = n(27973),
                y = function(e) {
                    var t = e.nestedForm,
                        n = e.defaults,
                        d = e.title,
                        f = void 0 === d ? "Material" : d,
                        m = e.defaultExpanded,
                        h = void 0 !== m && m,
                        y = e.showColor,
                        j = (0, s.VY)({
                            nestedForm: t,
                            defaultValues: n
                        }),
                        S = j.values,
                        w = j.handleFieldChanged,
                        Z = j.makeNestedFormProps,
                        F = j.errors,
                        C = (0, o.y)();
                    return (0, a.jsx)(b.ZP, {
                        item: !0,
                        xs: 12,
                        children: (0, a.jsx)(g.Z, {
                            title: f,
                            defaultExpanded: h,
                            children: (0, a.jsxs)(a.Fragment, {
                                children: [(0, a.jsx)("div", {
                                    className: C.formRow,
                                    children: (0, a.jsx)(l._u, {
                                        label: "Material Type",
                                        options: ["basic", "lambert", "phong"],
                                        value: S.materialType || "lambert",
                                        setValue: w("materialType")
                                    })
                                }), "basic" === S.materialType && (0, a.jsx)(q, (0, i.Z)((0, r.Z)({}, j), {
                                    showColor: y
                                })), "basic" !== S.materialType && (0, a.jsxs)(a.Fragment, {
                                    children: [(0, a.jsx)("div", {
                                        className: C.formRow,
                                        children: (0, a.jsx)(c.Ee, {
                                            disablePaper: !0,
                                            fieldName: "Texture File",
                                            file: S.textureFile,
                                            handleChanged: w("textureFile"),
                                            errors: null === F || void 0 === F ? void 0 : F.textureFile,
                                            extensions: v.$N,
                                            allowEmpty: !0
                                        })
                                    }), S.textureFile && (0, a.jsxs)("div", {
                                        className: C.formRow,
                                        children: [(0, a.jsx)(l.Mr, {
                                            label: "Texture repeat x",
                                            setValue: w("textureRepeatX"),
                                            initialValue: S.textureRepeatX || 1,
                                            error: null === F || void 0 === F ? void 0 : F.textureRepeatX,
                                            min: .1
                                        }), (0, a.jsx)(l.Mr, {
                                            label: "Texture repeat y",
                                            setValue: w("textureRepeatY"),
                                            initialValue: S.textureRepeatY || 1,
                                            error: null === F || void 0 === F ? void 0 : F.textureRepeatY,
                                            min: .1
                                        }), (0, a.jsx)("br", {}), (0, a.jsx)(u.Ur, {
                                            children: "Texture repeat x and y determines how many times the texture is repeated across the surface, in directions x and y. If greater than 1, it will become tiled. A larger value means the texture will appear smaller on the surface."
                                        })]
                                    }), y && (0, a.jsx)("div", {
                                        className: C.formRow,
                                        children: (0, a.jsx)(l.zH, {
                                            label: "color",
                                            value: S.color,
                                            setValue: w("color")
                                        })
                                    }), (0, a.jsx)("div", {
                                        className: C.formRow,
                                        children: (0, a.jsx)(l.rs, {
                                            label: "Transparent",
                                            value: S.transparent,
                                            setValue: w("transparent")
                                        })
                                    }), S.transparent && (0, a.jsx)("div", {
                                        className: C.formRow,
                                        children: (0, a.jsx)(l.iR, {
                                            label: "Opacity",
                                            value: S.opacity || 1,
                                            setValue: w("opacity")
                                        })
                                    })]
                                }), "phong" === S.materialType && (0, a.jsx)(x, {
                                    nestedForm: Z("phong"),
                                    defaults: p
                                })]
                            })
                        })
                    })
                }
        },
        32725: function(e, t, n) {
            "use strict";
            n.d(t, {
                Z: function() {
                    return x
                }
            });
            var r = n(85893),
                i = n(64350),
                a = n(27973),
                o = n(68624),
                l = n(88233),
                s = n(67402),
                u = n(93969),
                c = (n(67294), n(55239)),
                d = n(64742),
                f = n(55517),
                m = n(93132),
                h = function(e) {
                    var t = e.nestedForm,
                        n = e.defaults,
                        a = (0, u.VY)({
                            nestedForm: t,
                            defaultValues: n
                        }),
                        o = a.values,
                        h = a.handleFieldChanged,
                        v = a.makeNestedFormProps,
                        p = a.errors;
                    return (0, r.jsxs)(m.Z, {
                        title: "3d Play Geometry",
                        defaultExpanded: !0,
                        children: [(0, r.jsx)(c.Hn, {
                            disablePaper: !0,
                            fieldName: "Model File",
                            file: o.modelFile,
                            handleChanged: h("modelFile"),
                            errors: null === p || void 0 === p ? void 0 : p.modelFile,
                            extensions: l.F,
                            allowExternalFile: !0
                        }), o.modelFile && (0, r.jsx)(d.Le, {
                            config: o
                        }), (0, r.jsxs)(m.Z, {
                            title: "Animation Settings",
                            children: [(0, r.jsx)(i.rs, {
                                value: o.animated || !1,
                                setValue: h("animated"),
                                label: "Animated"
                            }), o.animated && (0, r.jsx)(i.Mr, {
                                initialValue: o.animationTimeScale || 1,
                                label: "Time Scale",
                                step: .1,
                                setValue: h("animationTimeScale")
                            }), (0, r.jsx)(f.Z, {}), (0, r.jsx)(i.rs, {
                                value: o.syncAnimation || !1,
                                setValue: h("syncAnimation"),
                                label: "Synchronize Animation Time",
                                description: "If set to true, this will attempt to ensure that multiple users viewing this animated model in the same space will see it at the same point in time. This may result in some jitteriness in animations when the animation time is adjusted. Useful for things like elevators."
                            })]
                        }), (0, r.jsxs)(m.Z, {
                            title: "Physics Settings",
                            children: [(0, r.jsx)(i.rs, {
                                value: o.isGround || !1,
                                setValue: h("isGround"),
                                label: "is ground"
                            }, "isGround"), (0, r.jsx)(i.rs, {
                                value: o.isCollidable || !1,
                                setValue: h("isCollidable"),
                                label: "is collidable"
                            }, "isCollidable")]
                        }), (0, r.jsx)(s.Z, {
                            nestedForm: v("shadow"),
                            defaults: s.U
                        })]
                    })
                },
                v = n(85437),
                p = function(e) {
                    var t = e.nestedForm,
                        n = e.defaults,
                        a = (0, u.VY)({
                            nestedForm: t,
                            defaultValues: n
                        }),
                        l = a.values,
                        s = a.handleFieldChanged;
                    return (0, r.jsxs)(m.Z, {
                        title: "Curv Configuration",
                        defaultExpanded: !0,
                        children: [(0, r.jsx)(i.iR, {
                            min: 5,
                            max: 180,
                            description: "Curve Angle",
                            label: "Curve Angle",
                            value: l.curveAngle || o.MW,
                            setValue: s("curveAngle"),
                            step: .1
                        }), (0, r.jsx)(i._u, {
                            options: ["horizontal", "vertical"],
                            label: "Orientation",
                            setValue: s("orientation"),
                            value: l.orientation
                        })]
                    })
                },
                x = function(e) {
                    var t = e.nestedForm,
                        n = e.defaultExpanded,
                        l = e.notExpandable,
                        s = e.title,
                        u = void 0 === s ? "Play Geometry" : s,
                        c = (0, v.sb)(t),
                        d = c.values,
                        f = c.handleFieldChanged,
                        x = c.makeNestedFormProps;
                    return (0, r.jsxs)(m.Z, {
                        title: u,
                        defaultExpanded: n,
                        notExpandable: l,
                        children: [(0, r.jsx)(a.ZP, {
                            container: !0,
                            children: (0, r.jsx)(i._u, {
                                options: ["plane", "curved", "3d geometry"],
                                setValue: f("mediaGeometryType"),
                                value: (null === d || void 0 === d ? void 0 : d.mediaGeometryType) || "plane",
                                label: "Type of surface to play the image or video on."
                            })
                        }), "curved" === (null === d || void 0 === d ? void 0 : d.mediaGeometryType) && (0, r.jsx)(p, {
                            nestedForm: x("mediaGeometryCurve"),
                            defaults: o.lQ
                        }), "3d geometry" === (null === d || void 0 === d ? void 0 : d.mediaGeometryType) && (0, r.jsx)(h, {
                            nestedForm: x("mediaGeometryModel"),
                            defaults: o.pk
                        })]
                    })
                }
        },
        42091: function(e, t, n) {
            "use strict";
            n.d(t, {
                Fv: function() {
                    return S
                },
                SX: function() {
                    return j
                },
                hW: function() {
                    return y
                },
                qx: function() {
                    return w
                }
            });
            var r = n(26042),
                i = n(69396),
                a = n(85893),
                o = n(30883),
                l = n(88233),
                s = n(92661),
                u = n(27973),
                c = n(79895),
                d = n(67402),
                f = n(64350),
                m = n(74051),
                h = n(93969),
                v = n(13448),
                p = n(68624),
                x = (n(67294), n(55239)),
                g = n(64742),
                q = n(55517),
                b = n(93132),
                y = function(e) {
                    var t = e.values,
                        n = e.handleFieldChanged,
                        r = e.makeNestedFormProps;
                    return (0, a.jsxs)(u.ZP, {
                        item: !0,
                        xs: 12,
                        children: [(0, a.jsxs)(b.Z, {
                            title: "Physics Settings",
                            children: [(0, a.jsx)(f.rs, {
                                value: t.isGround || !1,
                                setValue: n("isGround"),
                                label: "is ground"
                            }, "isGround"), (0, a.jsx)(f.rs, {
                                value: t.isCollidable || !1,
                                setValue: n("isCollidable"),
                                label: "is collidable"
                            }, "isCollidable")]
                        }), (0, a.jsx)(d.Z, {
                            nestedForm: r("shadow"),
                            defaults: d.U
                        })]
                    })
                },
                j = function(e) {
                    var t = e.values,
                        n = e.handleFieldChanged,
                        r = e.makeNestedFormProps,
                        i = e.defaultExpanded,
                        l = (0, o.y)();
                    return (0, a.jsx)(u.ZP, {
                        item: !0,
                        xs: 12,
                        children: (0, a.jsxs)(b.Z, {
                            title: "Material Settings",
                            defaultExpanded: i,
                            children: [(0, a.jsx)("div", {
                                className: l.formRow,
                                children: (0, a.jsx)(f.Mr, {
                                    initialValue: t.envMapIntensity,
                                    setValue: n("envMapIntensity"),
                                    max: 1,
                                    min: 0,
                                    label: "Environment Map Intensity",
                                    description: "Is there is an environment map, how intensly that is applied to this model."
                                })
                            }), (0, a.jsx)("div", {
                                className: l.formRow,
                                children: (0, a.jsx)(f.rs, {
                                    value: t.bundledMaterial,
                                    setValue: n("bundledMaterial"),
                                    label: "Bundled in Model File"
                                })
                            }), !t.bundledMaterial && (0, a.jsx)(s.Z, {
                                nestedForm: r("materialConfig"),
                                defaults: p.w$,
                                defaultExpanded: !0,
                                showColor: !0
                            })]
                        })
                    })
                },
                S = function(e) {
                    var t = e.values,
                        n = e.handleFieldChanged,
                        r = e.makeNestedFormProps,
                        i = e.defaultExpanded,
                        o = e.notExpandable,
                        l = e.title,
                        s = void 0 === l ? "Interactable Settings" : l;
                    return (0, a.jsx)(u.ZP, {
                        item: !0,
                        xs: 12,
                        children: (0, a.jsxs)(b.Z, {
                            defaultExpanded: i,
                            notExpandable: o,
                            title: s,
                            children: [(0, a.jsx)(f.rs, {
                                value: t.interactable || !1,
                                setValue: n("interactable"),
                                label: "Interactable"
                            }), t.interactable && (0, a.jsx)(v.D, {
                                nestedForm: r("interactableConfig"),
                                defaults: v.K
                            })]
                        })
                    })
                },
                w = function(e) {
                    var t = e.values,
                        n = e.handleFieldChanged,
                        r = e.errors,
                        i = (0, o.y)();
                    return (0, a.jsxs)(u.ZP, {
                        item: !0,
                        xs: 12,
                        children: [(0, a.jsx)(b.Z, {
                            title: "Model File",
                            defaultExpanded: !0,
                            children: (0, a.jsx)("div", {
                                className: i.formRow,
                                children: (0, a.jsx)(x.Hn, {
                                    disablePaper: !0,
                                    fieldName: "Model File",
                                    file: t.modelFile,
                                    handleChanged: n("modelFile"),
                                    errors: null === r || void 0 === r ? void 0 : r.modelFile,
                                    extensions: l.F,
                                    allowExternalFile: !0
                                })
                            })
                        }), (0, a.jsxs)(b.Z, {
                            title: "Animation Settings",
                            children: [(0, a.jsx)(f.rs, {
                                value: t.animated || !1,
                                setValue: n("animated"),
                                label: "Animated"
                            }), t.animated && (0, a.jsx)(f.Mr, {
                                initialValue: t.animationTimeScale || 1,
                                label: "Time Scale",
                                step: .1,
                                setValue: n("animationTimeScale")
                            }), (0, a.jsx)(q.Z, {}), (0, a.jsx)(f.rs, {
                                value: t.syncAnimation || !1,
                                setValue: n("syncAnimation"),
                                label: "Synchronize Animation Time",
                                description: "If set to true, this will attempt to ensure that multiple users viewing this animated model in the same space will see it at the same point in time. This may result in some jitteriness in animations when the animation time is adjusted. Useful for things like elevators."
                            })]
                        })]
                    })
                };
            t.ZP = function(e) {
                var t = e.nestedForm,
                    n = e.defaults,
                    l = (0, o.y)(),
                    s = (0, h.VY)({
                        nestedForm: t,
                        defaultValues: n
                    });
                return (0, a.jsxs)(a.Fragment, {
                    children: [(0, a.jsxs)(u.ZP, {
                        container: !0,
                        children: [(0, a.jsxs)(u.ZP, {
                            item: !0,
                            xs: 12,
                            lg: 6,
                            children: [(0, a.jsx)(w, (0, r.Z)({}, s)), (0, a.jsx)(S, (0, i.Z)((0, r.Z)({}, s), {
                                defaultExpanded: !0
                            })), (0, a.jsx)(j, (0, r.Z)({}, s)), (0, a.jsx)(y, (0, r.Z)({}, s))]
                        }), (0, a.jsx)(u.ZP, {
                            item: !0,
                            xs: 12,
                            lg: 6,
                            children: (0, a.jsxs)(c.Z, {
                                className: l.paper,
                                children: [(0, a.jsx)(m.PS, {
                                    children: "Model Element Preview"
                                }), (0, a.jsx)(g.Le, {
                                    config: s.values
                                })]
                            })
                        })]
                    }), (0, a.jsx)(u.ZP, {
                        container: !0
                    })]
                })
            }
        },
        29718: function(e, t, n) {
            "use strict";
            n.d(t, {
                d: function() {
                    return y
                }
            });
            var r = n(47568),
                i = n(26042),
                a = n(69396),
                o = n(29815),
                l = n(34051),
                s = n.n(l),
                u = n(85893),
                c = n(79895),
                d = n(22318),
                f = n(43065),
                m = n(3924),
                h = n(67294),
                v = n(14788),
                p = n(9923),
                x = n(30883),
                g = n(64912),
                q = n(25507),
                b = function() {
                    return {
                        active: !0,
                        elementType: null,
                        name: ""
                    }
                },
                y = function() {
                    var e = (0, r.Z)(s().mark((function e(t, n, r, l) {
                        var u, c, d, f, m;
                        return s().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return u = v.h.collection("spaces").doc(t).collection("elementsTree"), c = n.length > 0 ? n[n.length - 1] : null, d = (0, p.gf)((0, a.Z)((0, i.Z)({}, r), {
                                        parentId: c
                                    })), e.next = 5, u.add(d);
                                case 5:
                                    return f = e.sent, (0, q.n)({
                                        elementType: r.elementType,
                                        userInterface: "advanced"
                                    }), l && l(f, {}, d, !0), m = f.id, e.abrupt("return", {
                                        path: (0, o.Z)(n).concat([m]),
                                        ref: f
                                    });
                                case 10:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function(t, n, r, i) {
                        return e.apply(this, arguments)
                    }
                }();
            t.Z = function(e) {
                var t = e.spaceId,
                    n = e.path,
                    i = e.done,
                    a = (0, h.useState)(!1),
                    o = a[0],
                    l = a[1],
                    v = (0, h.useCallback)(function() {
                        var e = (0, r.Z)(s().mark((function e(r) {
                            var a;
                            return s().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return l(!0), e.next = 3, y(t, n, r);
                                    case 3:
                                        a = e.sent, l(!1), i({
                                            path: a.path,
                                            initialValues: r
                                        });
                                    case 6:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })));
                        return function(t) {
                            return e.apply(this, arguments)
                        }
                    }(), [i, n, t]),
                    p = (0, m.J3)({
                        schema: f.TQ,
                        initial: b,
                        handleSave: v
                    }).nestedForm;
                (0, h.useEffect)((function() {
                    if (null === p || void 0 === p ? void 0 : p.values.elementType) {
                        var e = {
                            active: !0,
                            elementType: t = p.values.elementType,
                            name: t
                        };
                        v(e)
                    }
                    var t
                }), [null === p || void 0 === p ? void 0 : p.values.elementType, v]);
                var q = (0, x.y)();
                return (0, u.jsxs)("div", {
                    style: {
                        opacity: o ? .5 : 1
                    },
                    children: [(0, u.jsx)(c.Z, {
                        className: q.paper,
                        children: (0, u.jsx)(d.Z, {
                            variant: "h4",
                            children: "Create new Element"
                        })
                    }), p && (0, u.jsx)(u.Fragment, {
                        children: (0, u.jsx)(g.ZP, {
                            nestedForm: p,
                            spaceId: t,
                            disableTypeChanged: o
                        })
                    })]
                })
            }
        },
        55085: function(e, t, n) {
            "use strict";
            var r = n(26042),
                i = n(69396),
                a = n(99534),
                o = n(85893),
                l = n(93969),
                s = n(64350),
                u = n(5327),
                c = n(93132),
                d = n(39061),
                f = n(97811),
                m = function() {
                    return {
                        showMedia: !0,
                        showPlacard: !0
                    }
                },
                h = function(e) {
                    var t = (0, l.VY)({
                            defaultValues: e.defaults,
                            nestedForm: e.nestedForm
                        }),
                        n = t.values,
                        r = t.handleFieldChanged;
                    return (0, o.jsxs)(c.Z, {
                        title: "What to Show",
                        defaultExpanded: !0,
                        notExpandable: !0,
                        children: [(0, o.jsx)(s.rs, {
                            value: n.showMedia,
                            label: "Show the Media (video/image/model)",
                            setValue: r("showMedia")
                        }), (0, o.jsx)(s.rs, {
                            value: n.showPlacard,
                            label: "Show the Placard",
                            setValue: r("showPlacard")
                        })]
                    })
                };
            t.Z = function(e) {
                e.mediaFile, e.mediaFileType, e.mediaShape;
                var t = (0, a.Z)(e, ["mediaFile", "mediaFileType", "mediaShape"]),
                    n = (0, l.LD)({
                        nestedForm: t.nestedForm
                    }),
                    s = (0, f.F3)(t.nestedForm.values).showPlacard;
                return (0, o.jsxs)(o.Fragment, {
                    children: [(0, o.jsx)(h, (0, i.Z)((0, r.Z)({}, t), {
                        defaults: m
                    })), s && (0, o.jsx)(d.Z, {
                        nestedForm: n("nftPlacardSettings"),
                        getThemeDefault: u.nftPlacard,
                        title: "Nft Placard Settings"
                    })]
                })
            }
        },
        47552: function(e, t, n) {
            "use strict";
            n.d(t, {
                ZL: function() {
                    return te
                },
                a0: function() {
                    return $
                },
                ZP: function() {
                    return re
                },
                Ef: function() {
                    return Q
                },
                zR: function() {
                    return ne
                }
            });
            var r = n(47568),
                i = n(26042),
                a = n(69396),
                o = n(34051),
                l = n.n(o),
                s = n(85893),
                u = n(30883),
                c = n(79895),
                d = n(93969),
                f = n(64350),
                m = n(74051),
                h = n(27973),
                v = n(67294),
                p = n(64742),
                x = n(73488),
                g = n(4701),
                q = n(59480),
                b = n(14788),
                y = n(68624),
                j = n(5327),
                S = n(25784),
                w = n(17812),
                Z = n(33681),
                F = n(36277),
                C = n(55239),
                k = {
                    creatorName: {
                        editor: g.K.freeText,
                        editorConfig: {
                            label: "Creator Name",
                            help: "Name of creator who minted the nft",
                            size: "xl"
                        }
                    },
                    ownerName: {
                        editor: g.K.freeText,
                        editorConfig: {
                            label: "Owner Name",
                            help: "Name of owner of the nft",
                            size: "xl"
                        }
                    },
                    collectionName: {
                        editor: g.K.freeText,
                        editorConfig: {
                            label: "Collection or Marketplace name",
                            help: "Name of the collection or the marketplace this was minted on.  This will be used for the url title.",
                            size: "xl"
                        }
                    },
                    externalUrl: {
                        editor: g.K.freeText,
                        editorConfig: {
                            label: "External Url",
                            help: "The url of webpagepage where token can be viewed",
                            fullWidth: !0,
                            size: "fullWidth"
                        }
                    },
                    name: {
                        editor: g.K.freeText,
                        editorConfig: {
                            label: "Name",
                            help: "Name of the nft",
                            size: "xl"
                        }
                    },
                    description: {
                        editor: g.K.freeText,
                        editorConfig: {
                            label: "Description",
                            help: "Description of the nft",
                            size: "xl",
                            fullWidth: !0,
                            multiline: !0
                        }
                    },
                    mediaType: {
                        editor: g.K.select,
                        editorConfig: {
                            label: "Token Media File Type",
                            options: ["video", "image", "gif"]
                        }
                    }
                },
                _ = ["mp4"],
                T = function(e) {
                    var t, n = e.nestedForm,
                        r = e.defaults,
                        a = e.shapeDetermined,
                        o = (0, d.VY)({
                            nestedForm: n,
                            defaultValues: r
                        }),
                        l = o.values,
                        f = o.handleFieldChanged,
                        p = o.errors,
                        x = (0, q.Z)(k, f, l),
                        g = x.FormFields,
                        b = x.props,
                        j = (0, u.y)();
                    return (null === (t = (0, v.useContext)(F.u)) || void 0 === t ? void 0 : t.spaceId) ? (0, s.jsx)(s.Fragment, {
                        children: (0, s.jsx)(h.ZP, {
                            item: !0,
                            xs: 12,
                            children: (0, s.jsxs)(c.Z, {
                                className: j.paper,
                                children: [(0, s.jsx)(m.PS, {
                                    children: "Manual Entry Nft"
                                }), (0, s.jsx)(g.name, (0, i.Z)({}, b)), (0, s.jsx)(g.description, (0, i.Z)({}, b)), (0, s.jsx)(g.creatorName, (0, i.Z)({}, b)), (0, s.jsx)(g.ownerName, (0, i.Z)({}, b)), (0, s.jsx)(g.collectionName, (0, i.Z)({}, b)), (0, s.jsx)(g.externalUrl, (0, i.Z)({}, b)), (0, s.jsx)(g.mediaType, (0, i.Z)({}, b)), ("image" === l.mediaType || "gif" === l.mediaType) && (0, s.jsx)(C.Ee, {
                                    disablePaper: !0,
                                    fieldName: "Image File",
                                    file: l.imageFile,
                                    handleChanged: f("imageFile"),
                                    errors: null === p || void 0 === p ? void 0 : p.imageFile,
                                    allowEmpty: !0,
                                    allowExternalFile: !0,
                                    shapeDetermined: a,
                                    extensions: y.$N
                                }), "video" === l.mediaType && (0, s.jsx)(C.nk, {
                                    fieldName: "Token Media Video File",
                                    file: l.videoFile,
                                    handleChanged: f("videoFile"),
                                    allowEmpty: !0,
                                    extensions: _,
                                    errors: null === p || void 0 === p ? void 0 : p.videoFile,
                                    allowExternalFile: !0
                                })]
                            })
                        })
                    }) : null
                },
                M = n(21169),
                P = n(93132),
                E = n(36210),
                I = n(55085),
                A = n(33850),
                D = n(3248),
                V = n(16877),
                R = {
                    v2: "0xb932a70a57673d89f4acffbe830e8ed7f75fb9e0",
                    v1: "0x41a322b28d0ff354040e2cbc676f0320d8c8850d"
                },
                N = function(e) {
                    var t = e.contractVersion,
                        n = e.contractAddress;
                    if ("custom" === t) {
                        if (!n) throw new Error("contract address must be defined if contract is custom");
                        return n
                    }
                    return R[t]
                },
                B = function() {
                    var e = (0, r.Z)(l().mark((function e(t, n, r) {
                        var i, a, o, s;
                        return l().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return i = N({
                                        contractAddress: r,
                                        contractVersion: n
                                    }), a = {
                                        tokenId: t,
                                        contractAddress: i,
                                        contractAddresses: [i],
                                        fingerprint: null
                                    }, e.next = 4, fetch("https://superrare.com/api/v2/nft/get", {
                                        method: "POST",
                                        body: JSON.stringify(a),
                                        headers: {
                                            "Content-Type": "application/json"
                                        }
                                    });
                                case 4:
                                    if (200 === (o = e.sent).status) {
                                        e.next = 8;
                                        break
                                    }
                                    throw console.error("could not fetch;", o.status, o.statusText), new Error("could not fetch status");
                                case 8:
                                    return e.next = 10, o.json();
                                case 10:
                                    return s = e.sent.result, e.abrupt("return", s);
                                case 12:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function(t, n, r) {
                        return e.apply(this, arguments)
                    }
                }(),
                z = function(e, t, n) {
                    var r, i, a;
                    return {
                        token: {
                            metadata: {
                                name: null === (r = e.metadata) || void 0 === r ? void 0 : r.name,
                                description: e.description,
                                fileType: null === (i = e.media) || void 0 === i ? void 0 : i.mimeType,
                                fileUrl: null === (a = e.media) || void 0 === a ? void 0 : a.uri
                            },
                            creator: L(e.creator),
                            owner: L(e.owner),
                            tokenId: e.tokenId,
                            tokenAddress: "custom" !== t ? "superrare-".concat(t) : n
                        },
                        superrareTokenHistory: {
                            auction: e.auction,
                            editionNumber: e.editionNumber,
                            nftEvents: e.nftEvents,
                            currentPrice: e.currentPrice,
                            events: e.events,
                            totalEditions: e.totalEditions
                        }
                    }
                };

            function L(e) {
                if (e) return {
                    address: e.ethaddress,
                    profileImgUrl: e.avatar,
                    userName: e.username
                }
            }
            var O = function() {
                    var e = (0, r.Z)(l().mark((function e(t) {
                        var n, r, i, a;
                        return l().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return n = t.tokenId, r = t.version, i = t.contractAddress, e.next = 3, B(+n, r, i);
                                case 3:
                                    return a = e.sent, e.abrupt("return", z(a, r, i));
                                case 5:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }(),
                H = function() {
                    var e = (0, r.Z)(l().mark((function e(t) {
                        var n, r, i, a, o, s, u, c, d, f, m;
                        return l().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return n = t.fetchData, r = t.handleUpdates, i = n.superrareVersion, a = void 0 === i ? "v2" : i, o = n.tokenAddress, s = n.tokenId, u = function(e) {
                                        return r({
                                            "nft.superrareTokenHistory": null,
                                            "nft.token": null,
                                            "nft.updateStatus": "failed",
                                            "nft.failReason": e
                                        }), {
                                            success: !1
                                        }
                                    }, e.next = 5, O({
                                        tokenId: s,
                                        version: a,
                                        contractAddress: o || void 0
                                    });
                                case 5:
                                    if (!(c = e.sent).token) {
                                        e.next = 12;
                                        break
                                    }
                                    return m = "".concat(null === (d = c.token.creator) || void 0 === d ? void 0 : d.userName, " ").concat(null === (f = c.token.metadata) || void 0 === f ? void 0 : f.name), r({
                                        name: m,
                                        "nft.superrareTokenHistory": c.superrareTokenHistory,
                                        "nft.token": c.token,
                                        "nft.updateStatus": "success",
                                        "nft.nftType": n.nftType,
                                        "nft.tokenId": n.tokenId,
                                        "nft.fetchingMedia": !0
                                    }), console.log("updated token"), e.abrupt("return", c);
                                case 12:
                                    return u("superrare token was not returned"), e.abrupt("return", null);
                                case 14:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }(),
                U = function(e) {
                    var t = e.url,
                        n = (0, v.useMemo)((function() {
                            return {
                                modelFile: {
                                    fileType: "external",
                                    url: t
                                },
                                bundledMaterial: !0,
                                materialConfig: void 0
                            }
                        }), [t]);
                    return (0, s.jsx)(p.Le, {
                        config: n
                    })
                },
                $ = function(e) {
                    var t = e.tokenMedia,
                        n = e.tokenTextInfo,
                        r = e.loading,
                        i = e.shapeDetermined,
                        a = null === t || void 0 === t ? void 0 : t.originalMediaFileType,
                        o = (0, v.useCallback)((function(e) {
                            var t = e.target.naturalWidth,
                                n = e.target.naturalHeight;
                            i({
                                width: t,
                                height: n
                            })
                        }), [i]),
                        l = (0, M.PP)(null === t || void 0 === t ? void 0 : t.originalMediaFile);
                    return (0, s.jsxs)(P.Z, {
                        title: "Token",
                        defaultExpanded: !0,
                        children: [r && "...loading", !r && (0, s.jsxs)(s.Fragment, {
                            children: [(0, s.jsxs)("p", {
                                children: ["Title: ", null === n || void 0 === n ? void 0 : n.name, (0, s.jsx)("br", {}), "Artist: ", null === n || void 0 === n ? void 0 : n.creatorName]
                            }), "video" === a && (0, s.jsx)("video", {
                                src: l,
                                width: 400,
                                controls: !0
                            }), ("image" === a || "gif" === a) && (0, s.jsx)("img", {
                                src: l,
                                alt: "Nft",
                                width: 400,
                                onLoad: o
                            }), "model" === a && l && (0, s.jsx)(U, {
                                url: l
                            })]
                        })]
                    })
                },
                G = (g.K.switch, g.K.switch, {
                    description: {
                        editor: g.K.freeText,
                        editorConfig: {
                            label: "Override Description",
                            help: "If desired to override the description from the token, then set that here.",
                            fullWidth: !0,
                            size: "fullWidth",
                            multiline: !0
                        }
                    },
                    fetchPricing: {
                        editor: g.K.switch,
                        editorConfig: {
                            label: "Show Auction/Pricing Data",
                            description: "If auction and pricing data should be shown."
                        }
                    },
                    overrideNftLink: {
                        editor: g.K.switch,
                        editorConfig: {
                            label: "Override the nft link"
                        }
                    },
                    overrideNftLinkText: {
                        editor: g.K.freeText,
                        editorConfig: {
                            label: "Override link text",
                            size: "xl"
                        }
                    },
                    overrideNftLinkUrl: {
                        editor: g.K.freeText,
                        editorConfig: {
                            label: "Override link url",
                            size: "xl"
                        }
                    }
                }),
                W = function() {
                    return {}
                },
                Y = function(e) {
                    return (0, b.wk)().httpsCallable("fetchTokenAndUpdateNft")(e)
                },
                K = function(e) {
                    return (0, b.wk)().httpsCallable("updateTokenMedia")(e)
                },
                X = {
                    tokenId: "",
                    metadata: {
                        fileType: "image/png",
                        name: "Nft",
                        description: "...awaiting token info entry"
                    }
                },
                Q = "KT1RJ6PbjHpwc3M5rw5s2Nbmefwbuwbdxton",
                J = [{
                    alias: "hicetnunc",
                    address: Q
                }, {
                    alias: "randomly common skeles",
                    address: "KT1HZVd9Cjc2CMe3sQvXgbxhpJkdena21pih"
                }, {
                    alias: "other",
                    address: null
                }],
                ee = [{
                    label: "v1",
                    value: "v1"
                }, {
                    label: "v2",
                    value: "v2"
                }, {
                    label: "Superrare Spaces",
                    value: "custom"
                }],
                te = function(e) {
                    var t, n, a = (0, q.Z)(G, e.handleFieldChanged, e.values),
                        o = a.FormFields,
                        u = a.props,
                        c = function(e) {
                            var t, n = e.values,
                                i = e.handleUpdates,
                                a = e.elementId,
                                o = e.setUpdating,
                                s = (0, v.useState)(!1),
                                u = s[0],
                                c = s[1],
                                d = (0, x.oI)(n) ? n.superrareVersion || y.Wx : void 0,
                                f = "opensea" === n.nftType ? "ethereum" : n.nftType,
                                m = (0, x.ml)(n) || (0, x.oI)(n) ? n.tokenAddress : void 0,
                                h = (0, x.um)(n) ? n.contractAddress : void 0,
                                p = (0, x.um)(n) ? n.contractAlias : void 0,
                                g = null === (t = (0, v.useContext)(F.u)) || void 0 === t ? void 0 : t.spaceId,
                                q = (0, v.useCallback)(function() {
                                    var e = (0, r.Z)(l().mark((function e(t) {
                                        var n, r, o, s;
                                        return l().wrap((function(e) {
                                            for (;;) switch (e.prev = e.next) {
                                                case 0:
                                                    if (n = t.tokenId, g && a) {
                                                        e.next = 3;
                                                        break
                                                    }
                                                    return e.abrupt("return");
                                                case 3:
                                                    if (c(!1), e.prev = 4, "superrare" !== f) {
                                                        e.next = 18;
                                                        break
                                                    }
                                                    if (d) {
                                                        e.next = 8;
                                                        break
                                                    }
                                                    throw new Error("missing superrare version");
                                                case 8:
                                                    if ("custom" !== d || m) {
                                                        e.next = 10;
                                                        break
                                                    }
                                                    throw new Error("missing token address");
                                                case 10:
                                                    return e.next = 12, H({
                                                        fetchData: {
                                                            spaceId: g,
                                                            elementId: a,
                                                            tokenId: n,
                                                            tokenAddress: m,
                                                            superrareVersion: d,
                                                            nftType: "superrare"
                                                        },
                                                        handleUpdates: i
                                                    });
                                                case 12:
                                                    if (!(r = e.sent)) {
                                                        e.next = 16;
                                                        break
                                                    }
                                                    return e.next = 16, K({
                                                        elementId: a,
                                                        spaceId: g,
                                                        tokenInfo: {
                                                            nftType: "ethereum",
                                                            token: r.token
                                                        }
                                                    });
                                                case 16:
                                                    e.next = 32;
                                                    break;
                                                case 18:
                                                    if ("ethereum" !== f) {
                                                        e.next = 26;
                                                        break
                                                    }
                                                    if (m) {
                                                        e.next = 21;
                                                        break
                                                    }
                                                    throw new Error("missing token address");
                                                case 21:
                                                    return o = {
                                                        elementId: a,
                                                        spaceId: g,
                                                        tokenId: n,
                                                        tokenAddress: m,
                                                        nftType: "opensea"
                                                    }, e.next = 24, Y(o);
                                                case 24:
                                                    e.next = 32;
                                                    break;
                                                case 26:
                                                    if ("tezos" !== f) {
                                                        e.next = 32;
                                                        break
                                                    }
                                                    if (h) {
                                                        e.next = 29;
                                                        break
                                                    }
                                                    throw new Error("missing contract address");
                                                case 29:
                                                    return s = {
                                                        elementId: a,
                                                        spaceId: g,
                                                        tokenId: n,
                                                        contractAddress: h,
                                                        nftType: "tezos"
                                                    }, e.next = 32, Y(s);
                                                case 32:
                                                    e.next = 38;
                                                    break;
                                                case 34:
                                                    e.prev = 34, e.t0 = e.catch(4), console.error(e.t0), c(!0);
                                                case 38:
                                                case "end":
                                                    return e.stop()
                                            }
                                        }), e, null, [
                                            [4, 34]
                                        ])
                                    })));
                                    return function(t) {
                                        return e.apply(this, arguments)
                                    }
                                }(), [g, a, f, d, m, i, h]),
                                b = (0, v.useCallback)(function() {
                                    var e = (0, r.Z)(l().mark((function e(t) {
                                        var r = arguments;
                                        return l().wrap((function(e) {
                                            for (;;) switch (e.prev = e.next) {
                                                case 0:
                                                    if (r.length > 1 && void 0 !== r[1] && r[1] || t !== n.tokenId) {
                                                        e.next = 3;
                                                        break
                                                    }
                                                    return e.abrupt("return");
                                                case 3:
                                                    if (i({
                                                            "nft.tokenId": t,
                                                            "nft.token": null,
                                                            "nft.updateStatus": t ? T : M
                                                        }), !t) {
                                                        e.next = 12;
                                                        break
                                                    }
                                                    return o(!0), e.prev = 6, e.next = 9, q({
                                                        tokenId: t
                                                    });
                                                case 9:
                                                    return e.prev = 9, o(!1), e.finish(9);
                                                case 12:
                                                case "end":
                                                    return e.stop()
                                            }
                                        }), e, null, [
                                            [6, , 9, 12]
                                        ])
                                    })));
                                    return function(t) {
                                        return e.apply(this, arguments)
                                    }
                                }(), [q, i, o, n.tokenId]),
                                j = (0, v.useCallback)((function(e) {
                                    e !== d && i({
                                        "nft.superrareVersion": e,
                                        "nft.tokenId": null,
                                        "nft.token": null,
                                        "nft.updateStatus": M
                                    })
                                }), [i, d]),
                                S = (0, v.useCallback)((function(e) {
                                    e !== m && i({
                                        "nft.tokenAddress": e,
                                        "nft.tokenId": null,
                                        "nft.token": X,
                                        "nft.updateStatus": M
                                    })
                                }), [i, m]),
                                w = (0, v.useCallback)((function(e) {
                                    var t;
                                    if (e !== p) {
                                        var n = null === (t = J.find((function(t) {
                                            return t.alias === e
                                        }))) || void 0 === t ? void 0 : t.address;
                                        i({
                                            "nft.contractAlias": e,
                                            "nft.contractAddress": n,
                                            "nft.tokenId": null,
                                            "nft.tezosToken": null,
                                            "nft.updateStatus": M
                                        })
                                    }
                                }), [i, p]),
                                Z = (0, v.useCallback)((function(e) {
                                    e !== h && i({
                                        "nft.contractAddress": e,
                                        "nft.tokenId": null,
                                        "nft.tezosToken": null,
                                        "nft.updateStatus": M
                                    })
                                }), [i, h]),
                                C = (0, v.useCallback)((function(e) {
                                    e && f !== e && i({
                                        "nft.nftType": e,
                                        "nft.tokenId": null,
                                        "nft.token": null,
                                        "nft.updateStatus": M
                                    })
                                }), [i, f]),
                                k = (0, v.useMemo)((function() {
                                    return J.map((function(e) {
                                        return e.alias
                                    }))
                                }), []),
                                _ = (0, v.useCallback)((function() {
                                    n.tokenId && b(n.tokenId, !0)
                                }), [n.tokenId, b]),
                                T = "updating",
                                M = "awaitingInput";
                            return {
                                handleVersionChanged: j,
                                handleTokenIdChanged: b,
                                handleTokenAddressChanged: S,
                                handleContractAliasChanged: w,
                                handleContractAddressChanged: Z,
                                handleNftTypeChanged: C,
                                contractKeys: k,
                                fetchFailed: u,
                                nftType: f,
                                refreshToken: _
                            }
                        }(e),
                        d = c.handleVersionChanged,
                        m = c.handleTokenIdChanged,
                        p = c.handleTokenAddressChanged,
                        g = c.handleContractAliasChanged,
                        b = c.handleContractAddressChanged,
                        C = c.handleNftTypeChanged,
                        k = c.contractKeys,
                        _ = c.fetchFailed,
                        M = c.nftType,
                        I = c.refreshToken,
                        A = e.values,
                        D = e.updating,
                        V = e.makeNestedFormProps,
                        R = "updating" === (null === (t = e.sourceValues) || void 0 === t ? void 0 : t.updateStatus),
                        N = (0, S.Of)(null === (n = u.values.display) || void 0 === n ? void 0 : n.nftPlacardSettings, j.nftPlacard),
                        B = D;
                    return (0, s.jsxs)(s.Fragment, {
                        children: [(0, s.jsxs)(P.Z, {
                            defaultExpanded: !0,
                            title: "Nft Token",
                            children: [(0, s.jsxs)(h.ZP, {
                                container: !0,
                                children: [(0, s.jsx)(h.ZP, {
                                    item: !0,
                                    xs: 12,
                                    children: (0, s.jsx)(f.TV, {
                                        options: ["ethereum", "superrare", "tezos", "manual entry"],
                                        setValue: C,
                                        value: M,
                                        label: "Nft Type",
                                        disabled: B
                                    })
                                }), (0, x.oI)(A) && (0, s.jsx)(h.ZP, {
                                    item: !0,
                                    xs: 12,
                                    children: (0, s.jsx)(f.TV, {
                                        options: ee,
                                        setValue: d,
                                        value: A.superrareVersion || y.Wx,
                                        label: "Superrare token version",
                                        disabled: B
                                    })
                                }), ((0, x.ml)(A) || (0, x.oI)(A) && "custom" === A.superrareVersion) && (0, s.jsx)(h.ZP, {
                                    item: !0,
                                    xs: 12,
                                    children: (0, s.jsx)(f.H2, {
                                        label: "Token Address",
                                        value: A.tokenAddress,
                                        setValue: p,
                                        size: "fullWidth",
                                        disabled: B
                                    })
                                }), (0, x.um)(A) && (0, s.jsxs)(s.Fragment, {
                                    children: [(0, s.jsx)(h.ZP, {
                                        item: !0,
                                        xs: 12,
                                        children: (0, s.jsx)(f.TV, {
                                            label: "Contract",
                                            options: k,
                                            value: A.contractAlias,
                                            setValue: g,
                                            size: "fullWidth",
                                            disabled: B
                                        })
                                    }), (0, s.jsx)(h.ZP, {
                                        item: !0,
                                        xs: 12,
                                        children: (0, s.jsx)(f.H2, {
                                            label: "Contract Address",
                                            value: A.contractAddress,
                                            setValue: b,
                                            size: "fullWidth",
                                            disabled: B || "other" !== A.contractAlias
                                        })
                                    })]
                                }), !(0, x.nm)(A) && (0, s.jsxs)(h.ZP, {
                                    item: !0,
                                    xs: 12,
                                    children: [(0, s.jsx)(f.H2, {
                                        size: "lg",
                                        value: A.tokenId || void 0,
                                        setValue: m,
                                        label: "Token id",
                                        error: _ ? "Error fetching token" : void 0,
                                        disabled: B
                                    }), (0, s.jsx)(w.Z, {
                                        disabled: !A.tokenId || B,
                                        onClick: I,
                                        "aria-label": "Refresh",
                                        children: (0, s.jsx)(E.Z, {})
                                    })]
                                }), (0, x.ml)(A) && (0, s.jsxs)(h.ZP, {
                                    item: !0,
                                    xs: 12,
                                    children: [(0, s.jsx)(o.fetchPricing, (0, i.Z)({}, u)), (0, s.jsx)(o.overrideNftLink, (0, i.Z)({}, u)), A.overrideNftLink && (0, s.jsxs)(s.Fragment, {
                                        children: [(0, s.jsx)(o.overrideNftLinkText, (0, i.Z)({}, u)), (0, s.jsx)(o.overrideNftLinkUrl, (0, i.Z)({}, u))]
                                    })]
                                })]
                            }), R && (0, s.jsxs)(h.ZP, {
                                item: !0,
                                xs: 12,
                                children: [(0, s.jsx)("p", {
                                    children: "loading token..."
                                }), (0, s.jsx)(Z.Z, {})]
                            }), !(0, x.nm)(A) && (0, s.jsx)(h.ZP, {
                                item: !0,
                                xs: 12,
                                children: N.showDescription && (0, s.jsx)(o.description, (0, i.Z)({}, u))
                            })]
                        }), (0, x.nm)(A) && (0, s.jsx)(T, {
                            nestedForm: V("manualEntryToken"),
                            defaults: W
                        })]
                    })
                },
                ne = function(e) {
                    var t = (0, v.useMemo)((function() {
                            return (0, x.zz)(e)
                        }), [e]),
                        n = (0, x.c9)(e),
                        r = (0, v.useState)();
                    return {
                        tokenMetadata: n,
                        mediaAndFileType: t,
                        mediaShape: r[0],
                        setMediaShape: r[1]
                    }
                },
                re = function(e) {
                    var t, n = (0, u.y)(),
                        r = (0, d.VY)({
                            nestedForm: e.nestedForm,
                            defaultValues: e.defaults
                        }),
                        o = r.values,
                        l = r.makeNestedFormProps,
                        g = r.handleFieldChanged,
                        q = ne(e.nestedForm.sourceValues),
                        b = q.mediaAndFileType,
                        y = q.tokenMetadata,
                        S = q.mediaShape,
                        w = q.setMediaShape,
                        Z = null === (t = e.nestedForm.sourceValues) || void 0 === t ? void 0 : t.display,
                        F = (0, v.useState)(!1),
                        C = F[0],
                        k = F[1],
                        _ = l("display"),
                        T = (0, d.LD)({
                            nestedForm: _
                        }),
                        M = b.originalMediaFileType;
                    return (0, s.jsx)(s.Fragment, {
                        children: (0, s.jsxs)(h.ZP, {
                            container: !0,
                            children: [(0, s.jsxs)(h.ZP, {
                                item: !0,
                                xs: 12,
                                lg: 6,
                                children: [(0, s.jsx)(te, (0, a.Z)((0, i.Z)({}, r), {
                                    updating: C,
                                    setUpdating: k,
                                    elementId: e.elementId
                                })), !(0, x.nm)(o) && (0, s.jsx)($, {
                                    tokenMedia: b,
                                    tokenTextInfo: y,
                                    loading: C,
                                    shapeDetermined: w
                                }), (0, s.jsx)(A.d, {
                                    nestedForm: T("mediaFrame"),
                                    getThemeDefault: j.defaultFrame
                                }), ("video" === M || "gif" === M) && (0, s.jsx)(D.Z, {
                                    nestedForm: T("video"),
                                    getThemeDefault: j.videoSettings,
                                    mediaShape: S,
                                    storedVideo: b.originalMediaFile,
                                    type: "stored video"
                                }), "image" === M && (0, s.jsx)(V.Wf, {
                                    nestedForm: T("image"),
                                    getThemeDefault: j.getDefaultImageSettings,
                                    mediaShape: S
                                }), (0, s.jsx)(I.Z, {
                                    nestedForm: l("display"),
                                    mediaFileType: b.originalMediaFileType,
                                    mediaFile: b.inSpaceMediaFile || void 0,
                                    mediaShape: S
                                }), (0, s.jsx)(P.Z, {
                                    defaultExpanded: !0,
                                    title: "Interactable Config",
                                    children: (0, s.jsx)(f.rs, {
                                        value: o.interactable,
                                        label: "Open details model on click",
                                        setValue: g("interactable"),
                                        description: "If enabled, when a user clicks on this nft element, a modal will open with details about the element and a link to the marketplace its listed on"
                                    })
                                })]
                            }), (0, s.jsx)(h.ZP, {
                                item: !0,
                                lg: 6,
                                xs: 12,
                                children: (0, s.jsxs)(c.Z, {
                                    className: n.paper,
                                    children: [(0, s.jsx)(m.PS, {
                                        children: "Nft Element Preview"
                                    }), e.nestedForm.sourceValues && (0, s.jsx)(p.SB, {
                                        config: (0, a.Z)((0, i.Z)({}, e.nestedForm.sourceValues), {
                                            display: Z
                                        })
                                    })]
                                })
                            })]
                        })
                    })
                }
        },
        69216: function(e, t, n) {
            "use strict";
            var r = n(26042),
                i = n(69396),
                a = n(85893),
                o = (n(67294), n(64350)),
                l = n(41749),
                s = n(93969),
                u = n(59480),
                c = n(4701),
                d = n(74222),
                f = n(93132),
                m = {
                    fontSize: {
                        editor: c.K.numberField,
                        editorConfig: {
                            label: "Font Size",
                            min: 0,
                            max: 20
                        }
                    },
                    primaryFontColor: {
                        editor: c.K.colorPicker,
                        editorConfig: {
                            label: "Font Color"
                        }
                    },
                    hasBacking: {
                        editor: c.K.switch,
                        editorConfig: {
                            label: "Has a Box"
                        }
                    }
                };
            t.Z = function(e) {
                var t = e.nestedForm,
                    n = e.getThemeDefault,
                    c = e.defaultExpanded,
                    h = (0, s.mX)({
                        nestedForm: t,
                        getThemeDefault: n
                    }),
                    v = h.values,
                    p = h.errors,
                    x = h.handleFieldChanged,
                    g = (0, u.u)(m, x, v),
                    q = g.FormFields,
                    b = g.props;
                return (0, a.jsxs)(l.Z, {
                    item: !0,
                    xs: 12,
                    children: [(0, a.jsx)(f.Z, {
                        title: "Placard Text Style",
                        defaultExpanded: c,
                        children: (0, a.jsxs)(l.Z, {
                            container: !0,
                            children: [(0, a.jsxs)(l.Z, {
                                container: !0,
                                children: [(0, a.jsx)(l.Z, {
                                    item: !0,
                                    xs: 6,
                                    children: (0, a.jsx)(o.CH, {
                                        font: v.font,
                                        handleChanged: x("font"),
                                        error: null === p || void 0 === p ? void 0 : p.font
                                    })
                                }), (0, a.jsx)(l.Z, {
                                    item: !0,
                                    xs: 6,
                                    children: (0, a.jsx)(q.fontSize, (0, r.Z)({}, b))
                                })]
                            }), (0, a.jsx)(l.Z, {
                                container: !0,
                                children: (0, a.jsx)(l.Z, {
                                    item: !0,
                                    xs: 6,
                                    children: (0, a.jsx)(q.primaryFontColor, (0, r.Z)({}, b))
                                })
                            })]
                        })
                    }), (0, a.jsx)(f.Z, {
                        title: "Placard Box Settings",
                        defaultExpanded: c,
                        children: (0, a.jsx)(d.dp, (0, i.Z)((0, r.Z)({}, h), {
                            showBackingPadding: !0,
                            notExpandable: !0
                        }))
                    })]
                })
            }
        },
        74222: function(e, t, n) {
            "use strict";
            n.d(t, {
                W: function() {
                    return F
                },
                dp: function() {
                    return Z
                }
            });
            var r = n(26042),
                i = n(69396),
                a = n(85893),
                o = n(67294),
                l = n(30883),
                s = n(79895),
                u = n(93969),
                c = n(64350),
                d = n(74051),
                f = n(27973),
                m = n(68624),
                h = n(33850),
                v = n(13448),
                p = n(79123),
                x = n(64742),
                g = n(80203),
                q = n(93132),
                b = n(69216),
                y = n(5327),
                j = ["left", "center", "right"],
                S = ["top", "top-baseline", "middle", "bottom-baseline", "bottom"],
                w = ["left", "right", "center", "justify"],
                Z = function(e) {
                    var t = e.values,
                        n = e.handleFieldChanged,
                        r = e.makeNestedFormProps,
                        i = e.showBackingPadding,
                        o = void 0 === i || i,
                        l = e.title,
                        s = e.defaultExpanded,
                        d = e.notExpandable,
                        v = r("backingMaterial"),
                        p = (0, u.VY)({
                            nestedForm: v,
                            defaultValues: m.w$
                        });
                    return (0, a.jsx)(f.ZP, {
                        item: !0,
                        xs: 12,
                        children: (0, a.jsxs)(q.Z, {
                            title: l,
                            defaultExpanded: s,
                            notExpandable: d,
                            children: [(0, a.jsx)(c.rs, {
                                label: "Has Backing",
                                value: t.hasBacking,
                                setValue: n("hasBacking"),
                                description: "If backing/a box should appear around the text"
                            }), t.hasBacking && o && (0, a.jsx)(f.ZP, {
                                item: !0,
                                xs: 12,
                                children: (0, a.jsx)(c.Mr, {
                                    label: "Placard Contents Padding",
                                    initialValue: t.backingOffsetScale,
                                    setValue: n("backingOffsetScale"),
                                    min: 0,
                                    max: 2,
                                    step: .01,
                                    size: "lg",
                                    description: "How much percentage to pad around the text when adding backing."
                                })
                            }), t.hasBacking && (0, a.jsx)(f.ZP, {
                                item: !0,
                                xs: 12,
                                children: (0, a.jsx)(c.zH, {
                                    label: "Box Color",
                                    value: p.values.color,
                                    setValue: p.handleFieldChanged("color")
                                })
                            }), (0, a.jsx)(f.ZP, {
                                item: !0,
                                xs: 12,
                                children: (0, a.jsx)(c.rs, {
                                    label: "Has a Frame",
                                    value: t.hasFrame,
                                    setValue: n("hasFrame")
                                })
                            }), (0, a.jsx)(f.ZP, {
                                item: !0,
                                xs: 12,
                                children: t.hasFrame && (0, a.jsx)(h.Z, {
                                    defaults: m.GE,
                                    nestedForm: r("frameConfig"),
                                    formSection: !1
                                })
                            })]
                        })
                    })
                },
                F = function(e) {
                    var t = e.values,
                        n = e.handleFieldChanged,
                        r = e.errors;
                    return (0, a.jsxs)(f.ZP, {
                        container: !0,
                        children: [(0, a.jsx)(f.ZP, {
                            item: !0,
                            xs: 12,
                            style: {
                                padding: "8px 16px 16px"
                            },
                            children: (0, a.jsx)(c.H2, {
                                value: t.text,
                                setValue: n("text"),
                                label: "Text",
                                size: "fullWidth",
                                multiline: !0,
                                error: null === r || void 0 === r ? void 0 : r.text
                            })
                        }), (0, a.jsx)(f.ZP, {
                            item: !0,
                            xs: 6,
                            style: {
                                padding: "8px 16px 16px"
                            },
                            children: (0, a.jsx)(c.Mr, {
                                label: "Max Width",
                                description: "The max width of the text block. If larger than this, text will be wrapped. If set to 0, this will be considered to not have a max width.",
                                initialValue: t.maxWidth,
                                setValue: n("maxWidth"),
                                min: 0,
                                max: 1e3,
                                step: .1
                            })
                        }), (0, a.jsx)(f.ZP, {
                            item: !0,
                            xs: 6,
                            children: (0, a.jsx)(c.TV, {
                                label: "Text Align",
                                value: t.textAlign || "left",
                                setValue: n("textAlign"),
                                options: w,
                                size: "md",
                                description: "The horizontal alignment of each line of text within the overall text bounding box."
                            })
                        }), " ", (0, a.jsx)(q.Z, {
                            title: "Advanced Placard Alignment",
                            children: (0, a.jsxs)(f.ZP, {
                                container: !0,
                                children: [(0, a.jsx)(f.ZP, {
                                    item: !0,
                                    xs: 4,
                                    children: (0, a.jsx)(c.TV, {
                                        label: "Anchor X",
                                        value: t.anchorX || "center",
                                        setValue: n("anchorX"),
                                        options: j,
                                        size: "md",
                                        description: "The horizontal position in the text block that should line up with the local origin. "
                                    })
                                }), (0, a.jsx)(f.ZP, {
                                    item: !0,
                                    xs: 4,
                                    children: (0, a.jsx)(c.TV, {
                                        label: "Anchor Y",
                                        value: t.anchorY || "middle",
                                        setValue: n("anchorY"),
                                        options: S,
                                        size: "md",
                                        description: "The vertical position in the text block that should line up with the local origin."
                                    })
                                })]
                            })
                        })]
                    })
                };
            t.ZP = function(e) {
                var t = e.nestedForm,
                    n = e.defaults,
                    m = (0, l.y)(),
                    h = (0, u.VY)({
                        nestedForm: t,
                        defaultValues: n
                    }),
                    j = h.values,
                    S = h.handleFieldChanged,
                    w = h.makeNestedFormProps,
                    Z = (0, o.useState)(!1),
                    C = Z[0],
                    k = Z[1],
                    _ = (0, x.Qe)();
                return (0, a.jsxs)(a.Fragment, {
                    children: [(0, a.jsxs)(f.ZP, {
                        container: !0,
                        children: [(0, a.jsxs)(f.ZP, {
                            item: !0,
                            xs: 12,
                            lg: 6,
                            children: [(0, a.jsx)(f.ZP, {
                                item: !0,
                                xs: 12,
                                children: (0, a.jsx)(q.Z, {
                                    title: "Placard Content",
                                    defaultExpanded: !0,
                                    children: (0, a.jsx)(F, (0, r.Z)({}, h))
                                })
                            }), (0, a.jsx)(f.ZP, {
                                item: !0,
                                xs: 12,
                                children: (0, a.jsx)(b.Z, {
                                    nestedForm: w("display"),
                                    getThemeDefault: y.placardDisplay
                                })
                            })]
                        }), (0, a.jsx)(f.ZP, {
                            item: !0,
                            xs: 6,
                            children: (0, a.jsxs)(s.Z, {
                                className: m.paper,
                                children: [(0, a.jsx)(d.PS, {
                                    children: "Placard Element Preview"
                                }), (0, a.jsx)(p.Z, {
                                    loaded: C,
                                    children: (0, a.jsx)(g.ZP, (0, i.Z)((0, r.Z)({
                                        config: j
                                    }, _), {
                                        handleLoaded: k
                                    }))
                                })]
                            })
                        })]
                    }), (0, a.jsx)(f.ZP, {
                        container: !0,
                        children: (0, a.jsx)(f.ZP, {
                            item: !0,
                            xs: 12,
                            children: (0, a.jsxs)(s.Z, {
                                className: m.paper,
                                children: [(0, a.jsx)(c.rs, {
                                    label: "Interactable",
                                    value: j.interactable,
                                    setValue: S("interactable")
                                }), j.interactable && (0, a.jsx)(v.D, {
                                    nestedForm: w("interactableConfig"),
                                    defaults: v.K
                                })]
                            })
                        })
                    })]
                })
            }
        },
        24889: function(e, t, n) {
            "use strict";
            n.d(t, {
                NK: function() {
                    return b
                },
                Sy: function() {
                    return p
                },
                X7: function() {
                    return g
                },
                fO: function() {
                    return x
                }
            });
            var r = n(26042),
                i = n(85893),
                a = n(67294),
                o = n(4701),
                l = n(93969),
                s = n(27973),
                u = n(59480),
                c = n(74638),
                d = n(93132),
                f = n(51381),
                m = n(64706),
                h = {
                    x: {
                        editor: o.K.numberField,
                        editorConfig: {
                            label: "x",
                            description: "x"
                        }
                    },
                    y: {
                        editor: o.K.numberField,
                        editorConfig: {
                            label: "y",
                            description: "y"
                        }
                    },
                    z: {
                        editor: o.K.numberField,
                        editorConfig: {
                            label: "z",
                            description: "z"
                        }
                    }
                },
                v = function(e) {
                    var t = e.description,
                        n = e.nestedForm,
                        a = e.defaults,
                        o = (0, l.VY)({
                            nestedForm: n,
                            defaultValues: a
                        }),
                        c = o.values,
                        d = o.handleFieldChanged,
                        f = o.errors,
                        m = (0, u.u)(t, d, c, f),
                        h = m.FormFields,
                        v = m.props;
                    return (0, i.jsx)(i.Fragment, {
                        children: (0, i.jsxs)(s.ZP, {
                            container: !0,
                            children: [(0, i.jsx)(s.ZP, {
                                item: !0,
                                xs: 4,
                                children: (0, i.jsx)(h.x, (0, r.Z)({}, v))
                            }), (0, i.jsx)(s.ZP, {
                                item: !0,
                                xs: 4,
                                children: (0, i.jsx)(h.y, (0, r.Z)({}, v))
                            }), (0, i.jsx)(s.ZP, {
                                item: !0,
                                xs: 4,
                                children: (0, i.jsx)(h.z, (0, r.Z)({}, v))
                            })]
                        })
                    })
                },
                p = function(e) {
                    var t = e.FormFields,
                        n = e.props;
                    return (0, i.jsx)(s.ZP, {
                        item: !0,
                        xs: 12,
                        children: (0, i.jsxs)(d.Z, {
                            title: "Portal Settings",
                            defaultExpanded: !0,
                            children: [(0, i.jsx)(t.radius, (0, r.Z)({}, n)), (0, i.jsxs)(s.ZP, {
                                xs: 12,
                                children: [(0, i.jsx)(t.toAnotherSpace, (0, r.Z)({}, n)), (0, i.jsx)(t.visible, (0, r.Z)({}, n)), (0, i.jsx)(t.showHelper, (0, r.Z)({}, n))]
                            })]
                        })
                    })
                },
                x = function(e) {
                    var t = e.FormFields,
                        n = e.props;
                    return (0, i.jsx)(s.ZP, {
                        xs: 12,
                        children: (0, i.jsxs)(d.Z, {
                            title: "Target Space",
                            defaultExpanded: !0,
                            children: [(0, i.jsx)(t.targetSpaceId, (0, r.Z)({}, n)), (0, i.jsx)(t.specifyLandingPosition, (0, r.Z)({}, n))]
                        })
                    })
                },
                g = function(e) {
                    var t = e.makeNestedFormProps;
                    return (0, i.jsxs)(i.Fragment, {
                        children: [(0, i.jsx)(s.ZP, {
                            item: !0,
                            xs: 12,
                            children: (0, i.jsx)(d.Z, {
                                title: "Target Position",
                                defaultExpanded: !0,
                                children: (0, i.jsx)(v, {
                                    description: h,
                                    nestedForm: t("targetPosition"),
                                    defaults: c.ek
                                })
                            })
                        }), (0, i.jsx)(s.ZP, {
                            item: !0,
                            xs: 12,
                            children: (0, i.jsx)(d.Z, {
                                title: "Target Look At",
                                defaultExpanded: !0,
                                children: (0, i.jsx)(v, {
                                    description: h,
                                    nestedForm: t("targetLookAt"),
                                    defaults: c.ek
                                })
                            })
                        })]
                    })
                },
                q = [],
                b = function(e) {
                    var t = e.nestedForm,
                        n = e.defaults,
                        r = (0, a.useContext)(f.f),
                        i = (null === r || void 0 === r ? void 0 : r.editableSpaces) || q,
                        s = (0, l.VY)({
                            nestedForm: t,
                            defaultValues: n
                        }),
                        c = s.values,
                        d = s.handleFieldChanged,
                        h = s.errors,
                        v = s.makeNestedFormProps,
                        p = (0, m.Xz)(i),
                        x = (0, a.useMemo)((function() {
                            return e = p, {
                                radius: {
                                    editor: o.K.numberField,
                                    editorConfig: {
                                        label: "Radius",
                                        description: "The radius of the spherical trigger area.",
                                        min: .1
                                    }
                                },
                                visible: {
                                    editor: o.K.switch,
                                    editorConfig: {
                                        label: "Visible",
                                        description: "Do you want to render the portal in the scene?"
                                    }
                                },
                                showHelper: {
                                    editor: o.K.switch,
                                    editorConfig: {
                                        label: "Show Helper",
                                        description: "Render the wire frame of the target position, making it easier to find when designing. *Only works with same-space portal."
                                    }
                                },
                                toAnotherSpace: {
                                    editor: o.K.switch,
                                    editorConfig: {
                                        label: "To Another Space",
                                        description: "If this portal go to a different space"
                                    }
                                },
                                specifyLandingPosition: {
                                    editor: o.K.switch,
                                    editorConfig: {
                                        label: "Specify Landing Position",
                                        description: "Should this portal bring the user to a specified position in the other space?"
                                    }
                                },
                                targetSpaceId: {
                                    editor: o.K.dropdownPicker,
                                    editorConfig: {
                                        label: "Space To Transport To",
                                        description: "The Arium space to which this portal transports the user",
                                        options: e.map((function(e) {
                                            var t = e.spaceId;
                                            return {
                                                label: e.slug,
                                                value: t
                                            }
                                        }))
                                    }
                                }
                            };
                            var e
                        }), [p]);
                    return (0, a.useEffect)((function() {
                        c.toAnotherSpace && !c.targetSpaceId && i.length > 0 && d("targetSpaceId")(i[0])
                    }), [i, c.toAnotherSpace, c.targetSpaceId, d]), {
                        formFieldsAndProps: (0, u.u)(x, d, c, h),
                        values: c,
                        makeNestedFormProps: v
                    }
                };
            t.ZP = function(e) {
                var t = b(e),
                    n = t.formFieldsAndProps,
                    a = t.values,
                    o = t.makeNestedFormProps;
                return (0, i.jsx)(i.Fragment, {
                    children: (0, i.jsxs)(s.ZP, {
                        container: !0,
                        children: [(0, i.jsx)(p, (0, r.Z)({}, n)), a.toAnotherSpace && (0, i.jsx)(x, (0, r.Z)({}, n)), !(a.toAnotherSpace && !a.specifyLandingPosition) && (0, i.jsx)(s.ZP, {
                            item: !0,
                            xs: 12,
                            lg: 6,
                            children: (0, i.jsx)(g, {
                                makeNestedFormProps: o
                            })
                        })]
                    })
                })
            }
        },
        22704: function(e, t, n) {
            "use strict";
            var r = n(26042),
                i = n(99534),
                a = n(85893),
                o = n(93132),
                l = n(93969),
                s = n(4701),
                u = n(59480),
                c = n(98241),
                d = n(32149),
                f = n(44923),
                m = {
                    mode: {
                        editor: s.K.select,
                        editorConfig: {
                            label: "Audio Mode",
                            description: "If set to spatial, audio will emit from position of audio element, and get quiter as the user gets farther away.  If global is selected, the volume is constant throughout the space.",
                            options: ["spatial", "global"]
                        }
                    },
                    volume: {
                        editor: s.K.slider,
                        editorConfig: {
                            min: 0,
                            max: 100,
                            valueLabelDisplay: "off",
                            label: "Base Volume",
                            showMarks: !1,
                            edgeIcons: {
                                front: (0, a.jsx)(c.Z, {}),
                                end: (0, a.jsx)(d.Z, {})
                            }
                        }
                    },
                    refDistance: {
                        editor: s.K.slider,
                        editorConfig: {
                            label: "Distance until audio rolls off",
                            description: "The distance in meters from the audio source before the volume starts fading out",
                            min: 1,
                            max: 100
                        }
                    },
                    rollOffFactor: {
                        editor: s.K.slider,
                        editorConfig: {
                            label: "Audio rolloff factor",
                            description: "How fast the audio levels fade out when the user is farther away than the reference distance.",
                            min: .01,
                            max: 10
                        }
                    }
                };
            t.Z = function(e) {
                var t = e.title,
                    n = void 0 === t ? "Positional Audio Settings" : t,
                    s = e.defaultExpanded,
                    c = e.notExpandable,
                    d = e.defaults,
                    h = (0, i.Z)(e, ["title", "defaultExpanded", "notExpandable", "defaults"]),
                    v = (0, l.VY)({
                        nestedForm: h.nestedForm,
                        defaultValues: d
                    }),
                    p = v.values,
                    x = v.handleFieldChanged,
                    g = (0, u.Z)(m, x, p),
                    q = g.FormFields,
                    b = g.props;
                return (0, a.jsxs)(o.Z, {
                    title: n,
                    defaultExpanded: s,
                    notExpandable: c,
                    children: [(0, a.jsx)(q.volume, (0, r.Z)({}, b)), (0, a.jsx)(q.mode, (0, r.Z)({}, b)), "spatial" === p.mode && (0, a.jsx)(o.Z, {
                        title: "Spatial sound settings",
                        activeEditorKey: f.l,
                        children: (0, a.jsxs)(a.Fragment, {
                            children: [(0, a.jsx)(q.refDistance, (0, r.Z)({}, b)), (0, a.jsx)(q.rollOffFactor, (0, r.Z)({}, b))]
                        })
                    })]
                })
            }
        },
        33795: function(e, t, n) {
            "use strict";
            n.d(t, {
                lI: function() {
                    return S
                },
                ry: function() {
                    return w
                }
            });
            var r = n(26042),
                i = n(85893),
                a = (n(67294), n(42623)),
                o = n(4701),
                l = n(93969),
                s = n(33850),
                u = n(74051),
                c = n(27973),
                d = n(30083),
                f = n(30883),
                m = n(59480),
                h = n(68624),
                v = n(79123),
                p = n(52849),
                x = n(93132),
                g = {
                    doubleSided: {
                        editor: o.K.switch,
                        editorConfig: {
                            label: "Double Sided",
                            description: "Rendering reflection at both sides of the surface."
                        }
                    },
                    hasFrame: {
                        editor: o.K.switch,
                        editorConfig: {
                            label: "Has a Frame",
                            description: "Adding a frame to the surface."
                        }
                    },
                    width: {
                        editor: o.K.numberField,
                        editorConfig: {
                            min: 0,
                            label: "Width",
                            description: "The width of the surface."
                        }
                    },
                    height: {
                        editor: o.K.numberField,
                        editorConfig: {
                            min: 0,
                            label: "Height",
                            description: "The height of the surface."
                        }
                    },
                    isCollidable: {
                        editor: o.K.switch,
                        editorConfig: {
                            label: "is collidable",
                            description: "if the user should be prevented from walking through the reflector."
                        }
                    },
                    isGround: {
                        editor: o.K.switch,
                        editorConfig: {
                            label: "is ground",
                            description: "if the reflector should act as a ground plane."
                        }
                    }
                },
                q = {
                    resolution: {
                        editor: o.K.slider,
                        editorConfig: {
                            label: "Resolution",
                            description: "Off-buffer resolution, lower=faster, higher=better quality.",
                            max: 10,
                            min: 4,
                            step: 1,
                            exponential: !0
                        }
                    },
                    mixBlur: {
                        editor: o.K.slider,
                        editorConfig: {
                            label: "Mix Blur",
                            description: "How much blur mixes with surface roughness. Works better with low resolution",
                            min: 0,
                            max: 3,
                            exponential: !0
                        }
                    },
                    mixStrength: {
                        editor: o.K.slider,
                        editorConfig: {
                            label: "Mix Strength",
                            description: "Strength of the reflections",
                            min: 0,
                            max: 4,
                            step: .1,
                            exponential: !0
                        }
                    },
                    mirror: {
                        editor: o.K.slider,
                        editorConfig: {
                            label: "Mirror",
                            description: "Mirror environment, 0 = texture colors, 1 = pick up env colors",
                            max: 1,
                            min: 0,
                            step: .01
                        }
                    }
                },
                b = {
                    roughness: {
                        editor: o.K.slider,
                        editorConfig: {
                            label: "Roughness",
                            description: "How rough the surface appears",
                            max: 4,
                            min: 0,
                            exponential: !0
                        }
                    },
                    metalness: {
                        editor: o.K.slider,
                        editorConfig: {
                            label: "Metalness",
                            description: "How much the material is like a metal",
                            max: 4,
                            min: 0,
                            exponential: !0
                        }
                    },
                    color: {
                        editor: o.K.colorPicker,
                        editorConfig: {
                            label: "Color",
                            description: "Color of the material"
                        }
                    },
                    transparent: {
                        editor: o.K.switch,
                        editorConfig: {
                            label: "Transparent"
                        }
                    },
                    opacity: {
                        editor: o.K.slider,
                        editorConfig: {
                            label: "Opacity",
                            min: 0,
                            max: 1
                        }
                    }
                },
                y = function(e) {
                    var t = e.nestedForm,
                        n = e.defaults,
                        a = (0, l.VY)({
                            nestedForm: t,
                            defaultValues: n
                        }),
                        o = a.values,
                        s = a.handleFieldChanged,
                        u = (0, m.u)(q, s, o),
                        c = u.FormFields,
                        d = u.props;
                    return (0, i.jsxs)(i.Fragment, {
                        children: [(0, i.jsx)(c.resolution, (0, r.Z)({}, d)), (0, i.jsx)(c.mirror, (0, r.Z)({}, d)), (0, i.jsx)(c.mixStrength, (0, r.Z)({}, d)), (0, i.jsx)(c.mixBlur, (0, r.Z)({}, d))]
                    })
                },
                j = function(e) {
                    var t = e.nestedForm,
                        n = e.defaults,
                        a = (0, l.VY)({
                            nestedForm: t,
                            defaultValues: n
                        }),
                        o = a.values,
                        s = a.handleFieldChanged,
                        u = (0, m.u)(b, s, o),
                        c = u.FormFields,
                        d = u.props;
                    return (0, i.jsxs)(x.Z, {
                        title: "Reflector Material",
                        children: [(0, i.jsx)(c.color, (0, r.Z)({}, d)), (0, i.jsx)(c.roughness, (0, r.Z)({}, d)), (0, i.jsx)(c.metalness, (0, r.Z)({}, d)), (0, i.jsx)(c.transparent, (0, r.Z)({}, d)), d.values.transparent && (0, i.jsx)(c.opacity, (0, r.Z)({}, d))]
                    })
                },
                S = function(e) {
                    var t = e.values,
                        n = e.handleFieldChanged,
                        o = e.makeNestedFormProps,
                        l = (0, m.u)(g, n, t),
                        s = l.FormFields,
                        u = l.props;
                    return (0, i.jsx)(i.Fragment, {
                        children: (0, i.jsxs)(c.ZP, {
                            item: !0,
                            xs: 12,
                            children: [(0, i.jsxs)(x.Z, {
                                title: "Reflector Settings",
                                defaultExpanded: !0,
                                children: [(0, i.jsx)(y, {
                                    nestedForm: o("reflectorConfig"),
                                    defaults: a.bJ
                                }), (0, i.jsx)(s.doubleSided, (0, r.Z)({}, u))]
                            }), (0, i.jsx)(j, {
                                nestedForm: o("materialConfig"),
                                defaults: a.H1
                            }), (0, i.jsxs)(x.Z, {
                                title: "Physics",
                                children: [(0, i.jsx)(s.isGround, (0, r.Z)({}, u)), (0, i.jsx)(s.isCollidable, (0, r.Z)({}, u))]
                            })]
                        })
                    })
                },
                w = function(e) {
                    var t = e.values,
                        n = e.handleFieldChanged,
                        a = e.makeNestedFormProps,
                        o = (0, m.u)(g, n, t),
                        l = o.FormFields,
                        d = o.props;
                    return (0, i.jsx)(c.ZP, {
                        item: !0,
                        xs: 12,
                        children: (0, i.jsxs)(x.Z, {
                            defaultExpanded: !0,
                            title: "Reflector Frame",
                            children: [(0, i.jsx)(u.PS, {
                                children: "Frame"
                            }), (0, i.jsx)(l.hasFrame, (0, r.Z)({}, d)), t.hasFrame && (0, i.jsx)(s.Z, {
                                nestedForm: a("frameConfig"),
                                defaults: h.GE
                            })]
                        })
                    })
                };
            t.ZP = function(e) {
                var t = e.nestedForm,
                    n = e.defaults,
                    a = (0, l.VY)({
                        nestedForm: t,
                        defaultValues: n
                    }),
                    o = a.values,
                    s = (0, f.y)();
                return (0, i.jsx)(i.Fragment, {
                    children: (0, i.jsxs)(c.ZP, {
                        container: !0,
                        children: [(0, i.jsx)(c.ZP, {
                            item: !0,
                            xs: 6,
                            children: (0, i.jsxs)(c.ZP, {
                                container: !0,
                                children: [(0, i.jsx)(c.ZP, {
                                    item: !0,
                                    xs: 12,
                                    children: (0, i.jsx)(S, (0, r.Z)({}, a))
                                }), (0, i.jsx)(c.ZP, {
                                    item: !0,
                                    xs: 12,
                                    children: (0, i.jsx)(w, (0, r.Z)({}, a))
                                })]
                            })
                        }), (0, i.jsx)(c.ZP, {
                            item: !0,
                            xs: 6,
                            children: (0, i.jsxs)(d.ZP, {
                                className: s.paper,
                                children: [(0, i.jsx)(u.PS, {
                                    children: "Reflector Element Preview"
                                }), (0, i.jsx)(v.Z, {
                                    loaded: !0,
                                    children: (0, i.jsx)(p.default, {
                                        config: o
                                    })
                                })]
                            })
                        })]
                    })
                })
            }
        },
        86211: function(e, t, n) {
            "use strict";
            n.d(t, {
                j: function() {
                    return f
                }
            });
            var r = n(26042),
                i = n(69396),
                a = n(85893),
                o = n(27973),
                l = n(93969),
                s = n(93132),
                u = n(4701),
                c = n(59480),
                d = {
                    guestsCanScreenShare: {
                        editor: u.K.switch,
                        editorConfig: {
                            label: "Guests can screenshare",
                            description: "If checked, then guests can screenshare.  Otherwise, only editors of the space can screenshare."
                        }
                    }
                },
                f = function(e) {
                    var t = e.nestedForm,
                        n = e.defaults,
                        i = e.title,
                        o = void 0 === i ? "Screen Share Settings" : i,
                        u = e.defaultExpanded,
                        f = e.notExpandable,
                        m = (0, l.VY)({
                            nestedForm: t,
                            defaultValues: n
                        }),
                        h = m.values,
                        v = m.handleFieldChanged,
                        p = (0, c.Z)(d, v, h),
                        x = p.FormFields,
                        g = p.props;
                    return (0, a.jsx)(s.Z, {
                        title: o,
                        defaultExpanded: u,
                        notExpandable: f,
                        children: (0, a.jsx)(x.guestsCanScreenShare, (0, r.Z)({}, g))
                    })
                };
            t.Z = function(e) {
                return (0, a.jsx)(o.ZP, {
                    container: !0,
                    children: (0, a.jsx)(o.ZP, {
                        item: !0,
                        xs: 6,
                        children: (0, a.jsx)(f, (0, i.Z)((0, r.Z)({}, e), {
                            defaultExpanded: !0
                        }))
                    })
                })
            }
        },
        67402: function(e, t, n) {
            "use strict";
            n.d(t, {
                U: function() {
                    return l
                }
            });
            var r = n(85893),
                i = n(86740),
                a = n(93969),
                o = n(93132),
                l = function() {
                    return {
                        cast: !1,
                        receive: !1
                    }
                };
            t.Z = function(e) {
                var t = e.nestedForm,
                    n = e.defaults,
                    l = (0, a.VY)({
                        nestedForm: t,
                        defaultValues: n
                    }),
                    s = l.values,
                    u = l.handleFieldChanged;
                return (0, r.jsxs)(o.Z, {
                    title: "Shadow Settings",
                    children: [(0, r.jsx)(i.Z, {
                        value: s.cast || !1,
                        setValue: u("cast"),
                        label: "Cast Shadow"
                    }, "cast"), (0, r.jsx)(i.Z, {
                        value: s.receive || !1,
                        setValue: u("receive"),
                        label: "Receive Shadow"
                    }, "receive")]
                })
            }
        },
        6172: function(e, t, n) {
            "use strict";
            n.d(t, {
                U: function() {
                    return q
                }
            });
            var r = n(26042),
                i = n(85893),
                a = n(30883),
                o = n(79895),
                l = n(93969),
                s = n(27973),
                u = n(4701),
                c = n(59480),
                d = n(55239),
                f = n(92661),
                m = n(68624),
                h = n(79123),
                v = n(63441),
                p = n(67294),
                x = n(93132),
                g = {
                    maxHeight: {
                        editor: u.K.numberField,
                        editorConfig: {
                            min: 1,
                            label: "Max Height",
                            description: "The maximum height of the terrain"
                        }
                    },
                    width: {
                        editor: u.K.numberField,
                        editorConfig: {
                            min: 1,
                            label: "Width",
                            description: "The width of the terrain, in meters."
                        }
                    },
                    height: {
                        editor: u.K.numberField,
                        editorConfig: {
                            min: 0,
                            label: "Height",
                            description: "The height of the terrain, in meters."
                        }
                    },
                    heightSegments: {
                        editor: u.K.numberField,
                        editorConfig: {
                            min: 0,
                            label: "Height Segments",
                            description: "The resolution width, in pixels, of the terrain."
                        }
                    },
                    widthSegments: {
                        editor: u.K.numberField,
                        editorConfig: {
                            min: 0,
                            label: "Height Segments",
                            description: "The resolution height, in pixels, of the terrain."
                        }
                    },
                    easing: {
                        editor: u.K.dropdownPicker,
                        editorConfig: {
                            options: ["Linear", "EaseIn", "EaseInWeak", "EaseOut", "EaseInOut", "InEaseOut"],
                            label: "Easing function",
                            description: "The easing function when smoothing the terrain"
                        }
                    },
                    isGround: {
                        editor: u.K.switch,
                        editorConfig: {
                            label: "Is Ground",
                            description: "If this is a ground, then users will always be walking above this terrain."
                        }
                    }
                },
                q = function(e) {
                    var t = e.values,
                        n = e.handleFieldChanged,
                        o = (0, c.Z)(g, n, t),
                        l = o.FormFields,
                        u = o.props,
                        f = (0, a.y)();
                    return (0, i.jsxs)(x.Z, {
                        title: "Terrain Settings",
                        defaultExpanded: !0,
                        children: [(0, i.jsx)(s.ZP, {
                            container: !0,
                            children: (0, i.jsx)(s.ZP, {
                                item: !0,
                                xs: 12,
                                children: (0, i.jsx)(d.Ee, {
                                    disablePaper: !0,
                                    fieldName: "Height Map File",
                                    file: t.heightMapFile,
                                    handleChanged: n("heightMapFile"),
                                    extensions: m.$N,
                                    errors: void 0,
                                    allowEmpty: !0,
                                    allowExternalFile: !0
                                })
                            })
                        }), (0, i.jsxs)("div", {
                            className: f.formRow,
                            children: [(0, i.jsx)(l.width, (0, r.Z)({}, u)), (0, i.jsx)(l.height, (0, r.Z)({}, u))]
                        }), (0, i.jsxs)("div", {
                            className: f.formRow,
                            children: [(0, i.jsx)(l.widthSegments, (0, r.Z)({}, u)), (0, i.jsx)(l.heightSegments, (0, r.Z)({}, u))]
                        }), (0, i.jsxs)("div", {
                            className: f.formRow,
                            children: [(0, i.jsx)(l.maxHeight, (0, r.Z)({}, u)), (0, i.jsx)(l.easing, (0, r.Z)({}, u))]
                        }), (0, i.jsx)("div", {
                            className: f.formRow,
                            children: (0, i.jsx)(l.isGround, (0, r.Z)({}, u))
                        })]
                    })
                };
            t.Z = function(e) {
                var t = e.nestedForm,
                    n = e.defaults,
                    u = (0, a.y)(),
                    c = (0, l.VY)({
                        nestedForm: t,
                        defaultValues: n
                    }),
                    d = c.values,
                    x = c.makeNestedFormProps,
                    g = (0, p.useState)(!1),
                    b = g[0],
                    y = g[1];
                return (0, i.jsx)(i.Fragment, {
                    children: (0, i.jsxs)(s.ZP, {
                        container: !0,
                        children: [(0, i.jsxs)(s.ZP, {
                            item: !0,
                            xs: 12,
                            lg: 6,
                            children: [(0, i.jsx)(q, (0, r.Z)({}, c)), (0, i.jsx)(f.Z, {
                                title: "Terrain Material",
                                nestedForm: x("materialConfig"),
                                defaults: m.w$,
                                showColor: !0
                            })]
                        }), (0, i.jsx)(s.ZP, {
                            item: !0,
                            xs: 12,
                            lg: 6,
                            children: (0, i.jsx)(o.Z, {
                                className: u.paper,
                                children: d.heightMapFile && (0, i.jsx)(h.Z, {
                                    loaded: b,
                                    environment: "forest",
                                    preset: "soft",
                                    children: (0, i.jsx)(v.default, {
                                        config: d,
                                        handleLoaded: y
                                    })
                                })
                            })
                        })]
                    })
                })
            }
        },
        70429: function(e, t, n) {
            "use strict";
            n.d(t, {
                F: function() {
                    return S
                },
                Z: function() {
                    return w
                }
            });
            var r = n(26042),
                i = n(69396),
                a = n(85893),
                o = n(27973),
                l = n(30083),
                s = n(68624),
                u = n(30883),
                c = n(93969),
                d = n(89590),
                f = n(64350),
                m = n(38240),
                h = function(e) {
                    var t = e.nestedForm,
                        n = e.playSettings,
                        r = e.defaults,
                        i = (0, c.VY)({
                            nestedForm: t,
                            defaultValues: r
                        }),
                        o = i.values,
                        l = i.handleFieldChanged,
                        s = i.errors;
                    return (0, a.jsxs)(a.Fragment, {
                        children: [(0, a.jsx)(f.H2, {
                            label: "Mux Playback Id",
                            value: o.muxPlaybackId,
                            setValue: l("muxPlaybackId"),
                            error: null === s || void 0 === s ? void 0 : s.muxPlaybackId,
                            size: "fullWidth",
                            help: "The public playback id of the Mux asset or live stream"
                        }), (0, a.jsx)(m.O, {
                            playSettings: n,
                            liveStream: o
                        })]
                    })
                },
                v = n(55239),
                p = n(64742),
                x = n(74051),
                g = n(93132),
                q = n(42091),
                b = n(3248),
                y = n(5327),
                j = n(33850),
                S = function(e) {
                    var t = (0, u.y)(),
                        n = e.values,
                        r = e.errors,
                        i = e.handleFieldChanged,
                        l = e.makeNestedFormProps,
                        c = e.defaultExpanded,
                        f = void 0 === c || c,
                        m = e.notExpandable,
                        p = e.title,
                        x = void 0 === p ? "Video Content" : p,
                        q = e.allowToggleStream,
                        b = n.type || "stored video";
                    return (0, a.jsx)(g.Z, {
                        title: x,
                        defaultExpanded: f,
                        notExpandable: m,
                        children: (0, a.jsxs)(o.ZP, {
                            container: !0,
                            children: [q && (0, a.jsx)(o.ZP, {
                                item: !0,
                                xs: 12,
                                children: (0, a.jsx)("div", {
                                    className: t.formRow,
                                    children: (0, a.jsx)(d.Z, {
                                        options: ["stored video", "stream"],
                                        value: b,
                                        setValue: i("type")
                                    })
                                })
                            }), (0, a.jsx)(o.ZP, {
                                item: !0,
                                xs: 12,
                                children: (0, a.jsxs)("div", {
                                    className: t.formRow,
                                    children: ["stored video" === b && (0, a.jsx)(v.nk, {
                                        disablePaper: !0,
                                        fieldName: "mp4 or webm file",
                                        file: n.storedVideo,
                                        handleChanged: i("storedVideo"),
                                        errors: null === r || void 0 === r ? void 0 : r.storedVideo,
                                        allowEmpty: !0,
                                        extensions: ["mp4", "webm"],
                                        allowExternalFile: !0
                                    }), "stream" === b && (0, a.jsx)(h, {
                                        nestedForm: l("liveStream"),
                                        defaults: s.UF
                                    })]
                                })
                            })]
                        })
                    })
                },
                w = function(e) {
                    var t = e.nestedForm,
                        n = e.defaults,
                        s = (0, c.VY)({
                            nestedForm: t,
                            defaultValues: n
                        }),
                        d = s.values,
                        f = (0, u.y)();
                    return (0, a.jsxs)(o.ZP, {
                        container: !0,
                        children: [(0, a.jsxs)(o.ZP, {
                            item: !0,
                            xs: 12,
                            lg: 6,
                            children: [(0, a.jsx)(S, (0, i.Z)((0, r.Z)({}, s), {
                                allowToggleStream: !0
                            })), (0, a.jsx)(j.d, {
                                nestedForm: s.makeNestedFormProps("frame"),
                                getThemeDefault: y.defaultFrame
                            }), (0, a.jsx)(b.Z, {
                                nestedForm: s.makeNestedFormProps("settings"),
                                getThemeDefault: y.videoSettings,
                                mediaShape: d.videoShape,
                                liveStream: d.liveStream,
                                storedVideo: d.storedVideo,
                                type: d.type
                            }), (0, a.jsx)(q.Fv, (0, r.Z)({}, s))]
                        }), (0, a.jsx)(o.ZP, {
                            item: !0,
                            xs: 12,
                            lg: 6,
                            children: (0, a.jsxs)(l.ZP, {
                                className: f.paper,
                                children: [(0, a.jsx)(x.PS, {
                                    children: "Video Element Preview"
                                }), (0, a.jsx)(p.nk, {
                                    config: d
                                })]
                            })
                        })]
                    })
                }
        },
        3248: function(e, t, n) {
            "use strict";
            n.d(t, {
                b: function() {
                    return S
                },
                Z: function() {
                    return w
                }
            });
            var r = n(99534),
                i = n(85893),
                a = n(5327),
                o = n(22704),
                l = n(27973),
                s = n(93969),
                u = n(64350),
                c = n(58365),
                d = n(67294),
                f = n(41230),
                m = n(93132),
                h = function(e) {
                    var t = e.storedVideo,
                        n = e.videoType,
                        a = e.liveStream,
                        o = e.title,
                        h = e.defaultExpanded,
                        v = e.notExpandable,
                        p = (0, r.Z)(e, ["storedVideo", "videoType", "liveStream", "title", "defaultExpanded", "notExpandable"]),
                        x = (0, s.mX)(p),
                        g = x.values,
                        q = x.handleFieldChanged,
                        b = (0, d.useMemo)((function() {
                            return (0, f.DL)({
                                type: n,
                                thumbnailConfig: g,
                                storedVideo: t,
                                liveStream: a
                            })
                        }), [a, t, g, n]),
                        y = (0, d.useState)(!1),
                        j = y[0],
                        S = y[1];
                    (0, d.useEffect)((function() {
                        S(!1)
                    }), [b]);
                    var w = (0, d.useCallback)((function() {
                        S(!0)
                    }), []);
                    return (0, i.jsxs)(m.Z, {
                        title: o,
                        defaultExpanded: h,
                        notExpandable: v,
                        children: [(0, i.jsx)(l.ZP, {
                            container: !0,
                            children: (0, i.jsx)(l.ZP, {
                                item: !0,
                                xs: 6,
                                children: (0, i.jsx)(u.Mr, {
                                    label: "Time (in seconds)",
                                    setValue: q("time"),
                                    initialValue: g.time,
                                    description: "The time, in seconds, of the video to grab a thumbnail from.",
                                    size: "xl",
                                    min: 0
                                })
                            })
                        }), (0, i.jsx)(l.ZP, {
                            container: !0,
                            children: (0, i.jsxs)("div", {
                                style: {
                                    maxWidth: "100%",
                                    maxHeight: 300,
                                    height: 300,
                                    position: "relative"
                                },
                                children: [!j && (0, i.jsx)(c.Z, {
                                    width: 300,
                                    height: 300,
                                    style: {
                                        transform: "none"
                                    }
                                }), b && (0, i.jsx)("img", {
                                    src: b,
                                    alt: "Thumbnail",
                                    style: {
                                        maxHeight: 300,
                                        maxWidth: "100%",
                                        margin: "10px 0",
                                        display: j ? "block" : "none"
                                    },
                                    onLoad: w
                                })]
                            })
                        })]
                    })
                },
                v = n(26042),
                p = n(4701),
                x = n(59480),
                g = n(44923),
                q = {
                    auto: {
                        editor: p.K.switch,
                        editorConfig: {
                            invertValue: !0,
                            label: "Only play when viewer is looking at video",
                            description: "If the video should only be playing when the user is looking in the vicinity of the video.  It is generally recommended to leave this as true.  Leaving it as false for multiple media and video elements in a space can slow down a space."
                        }
                    },
                    maxDistance: {
                        editor: p.K.slider,
                        editorConfig: {
                            label: "Only play when within distance (in meters)",
                            description: "The maximum distance from the video that the user can be for it to play.",
                            min: 10,
                            max: 200
                        }
                    },
                    syncToTimeline: {
                        editor: p.K.switch,
                        editorConfig: {
                            label: "Synchronize Video/Audio Time across Sessions",
                            description: "If set to true, then the time position that the video/audio is playing/the time in the media will be synchronized for all users, ensuring that they are viewing/hearing the media at the same point in its timeline."
                        }
                    }
                },
                b = function(e) {
                    var t = (0, s.mX)(e),
                        n = t.values,
                        r = t.handleFieldChanged,
                        a = (0, x.Z)(q, r, n),
                        o = a.FormFields,
                        l = a.props,
                        u = e.title,
                        c = void 0 === u ? "Advanced Video Playback Settings" : u,
                        d = e.defaultExpanded,
                        f = e.notExpandable;
                    return (0, i.jsxs)(m.Z, {
                        title: c,
                        defaultExpanded: d,
                        notExpandable: f,
                        activeEditorKey: g.G,
                        children: [(0, i.jsx)(o.auto, (0, v.Z)({}, l)), !n.auto && (0, i.jsx)(o.maxDistance, (0, v.Z)({}, l)), (0, i.jsx)(o.syncToTimeline, (0, v.Z)({}, l))]
                    })
                },
                y = n(68624),
                j = n(32725),
                S = function(e) {
                    var t = e.getThemeDefault,
                        n = e.nestedForm,
                        r = (0, s.mX)({
                            nestedForm: n,
                            getThemeDefault: t
                        }).makeNestedFormProps;
                    return (0, i.jsxs)(i.Fragment, {
                        children: [(0, i.jsx)(o.Z, {
                            nestedForm: r("positionalAudio"),
                            defaults: y.r,
                            defaultExpanded: !0,
                            title: "Video Sound Settings"
                        }), (0, i.jsx)(b, {
                            nestedForm: r("playSettings"),
                            getThemeDefault: a.playSettings,
                            defaultExpanded: !0
                        })]
                    })
                },
                w = function(e) {
                    var t, n, l = e.type,
                        u = e.liveStream,
                        c = e.storedVideo,
                        d = e.getThemeDefault,
                        f = e.hideGeometrySettings,
                        m = (0, r.Z)(e, ["type", "liveStream", "storedVideo", "getThemeDefault", "hideGeometrySettings"]),
                        v = (0, s.mX)({
                            nestedForm: m.nestedForm,
                            getThemeDefault: d
                        }).makeNestedFormProps,
                        p = m.nestedForm;
                    return (0, i.jsxs)(i.Fragment, {
                        children: [(0, i.jsx)(o.Z, {
                            nestedForm: v("positionalAudio"),
                            defaults: y.r,
                            title: "Video sound settings",
                            defaultExpanded: !0
                        }), (0, i.jsx)(b, {
                            nestedForm: v("playSettings"),
                            getThemeDefault: a.playSettings,
                            title: "When the video should play"
                        }), !(null === (t = p.values) || void 0 === t || null === (n = t.playSettings) || void 0 === n ? void 0 : n.auto) && (0, i.jsx)(h, {
                            title: "Thumbnail (shown when video is not playing)",
                            videoType: l,
                            liveStream: u,
                            storedVideo: c,
                            nestedForm: v("videoThumbnail"),
                            getThemeDefault: a.videoThumbnail
                        }), !f && (0, i.jsx)(j.Z, {
                            nestedForm: v("geometry")
                        })]
                    })
                }
        },
        36272: function(e, t, n) {
            "use strict";
            n.d(t, {
                gg: function() {
                    return y
                },
                sR: function() {
                    return j
                }
            });
            var r = n(26042),
                i = n(85893),
                a = n(93969),
                o = n(27973),
                l = n(67294),
                s = n(59480),
                u = n(4701),
                c = n(30883),
                d = n(79895),
                f = n(79123),
                m = n(84129),
                h = n(68624),
                v = n(25784),
                p = n(9923),
                x = n(55239),
                g = n(88233),
                q = n(93132),
                b = {
                    color: {
                        editor: u.K.colorPicker,
                        editorConfig: {
                            label: "Color",
                            description: "Color of the material"
                        }
                    },
                    scale: {
                        editor: u.K.numberField,
                        editorConfig: {
                            min: 0,
                            label: "Scale",
                            description: "Scale of the ripples."
                        }
                    },
                    reflectivity: {
                        editor: u.K.slider,
                        editorConfig: {
                            min: 0,
                            max: 3,
                            label: "Reflectivity",
                            description: "The reflectivity of the water surface.",
                            exponential: !0
                        }
                    },
                    flowSpeed: {
                        editor: u.K.numberField,
                        editorConfig: {
                            min: 0,
                            label: "Flow Speed",
                            description: "The speed of the water flow."
                        }
                    },
                    isGround: {
                        editor: u.K.switch,
                        editorConfig: {
                            label: "is ground",
                            description: "if the reflector should act as a ground plane."
                        }
                    },
                    resolution: {
                        editor: u.K.select,
                        editorConfig: {
                            label: "resolution",
                            description: "The resolution of the water. Higher is going to be higher fidelity but can slow down performance when many media elements are visible in the space.",
                            options: [128, 256, 512]
                        }
                    },
                    surfaceType: {
                        editor: u.K.select,
                        editorConfig: {
                            label: "Water geometry type",
                            description: "Geometry of the water.  The water material will be rendered on this geometry",
                            options: ["plane", "3d geometry"]
                        }
                    }
                },
                y = function(e) {
                    var t = e.values,
                        n = e.handleFieldChanged,
                        a = (0, s.u)(b, n, t),
                        l = a.FormFields,
                        u = a.props;
                    return (0, i.jsx)(o.ZP, {
                        item: !0,
                        xs: 12,
                        children: (0, i.jsx)(q.Z, {
                            title: "Water Settings",
                            defaultExpanded: !0,
                            children: (0, i.jsxs)(o.ZP, {
                                container: !0,
                                spacing: 4,
                                children: [(0, i.jsx)(o.ZP, {
                                    item: !0,
                                    sm: 12,
                                    md: 6,
                                    lg: 4,
                                    children: (0, i.jsx)(l.flowSpeed, (0, r.Z)({}, u))
                                }), (0, i.jsx)(o.ZP, {
                                    item: !0,
                                    sm: 12,
                                    md: 6,
                                    lg: 4,
                                    children: (0, i.jsx)(l.scale, (0, r.Z)({}, u))
                                }), (0, i.jsx)(o.ZP, {
                                    item: !0,
                                    xs: 12,
                                    children: (0, i.jsx)(l.color, (0, r.Z)({}, u))
                                }), (0, i.jsx)(o.ZP, {
                                    item: !0,
                                    sm: 12,
                                    children: (0, i.jsx)(l.reflectivity, (0, r.Z)({}, u))
                                }), (0, i.jsx)(o.ZP, {
                                    item: !0,
                                    sm: 12,
                                    children: (0, i.jsx)(l.resolution, (0, r.Z)({}, u))
                                }), (0, i.jsx)(o.ZP, {
                                    item: !0,
                                    xs: 12,
                                    lg: 4,
                                    children: (0, i.jsx)(l.isGround, (0, r.Z)({}, u))
                                })]
                            })
                        })
                    })
                },
                j = function(e) {
                    var t = e.values,
                        n = e.handleFieldChanged,
                        a = (0, s.u)(b, n, t),
                        l = a.FormFields,
                        u = a.props;
                    return (0, i.jsx)(o.ZP, {
                        item: !0,
                        xs: 12,
                        children: (0, i.jsxs)(q.Z, {
                            title: "Water Geometry",
                            defaultExpanded: !0,
                            children: [(0, i.jsx)(o.ZP, {
                                item: !0,
                                xs: 12,
                                children: (0, i.jsx)(l.surfaceType, (0, r.Z)({}, u))
                            }), "3d geometry" === t.surfaceType && (0, i.jsx)(o.ZP, {
                                item: !0,
                                xs: 12,
                                children: (0, i.jsx)(x.Hn, {
                                    disablePaper: !0,
                                    fieldName: "Water Geometry Model File",
                                    file: t.surfaceGeometryFile,
                                    handleChanged: n("surfaceGeometryFile"),
                                    extensions: g.F,
                                    allowExternalFile: !0
                                })
                            })]
                        })
                    })
                };
            t.ZP = function(e) {
                var t = e.nestedForm,
                    n = e.defaults,
                    s = e.transform,
                    u = (0, a.VY)({
                        nestedForm: t,
                        defaultValues: n
                    }),
                    x = (0, c.y)(),
                    g = (0, l.useState)(!1),
                    q = g[0],
                    b = g[1],
                    S = (0, v.sT)(s, h.$e);
                return (0, i.jsx)(i.Fragment, {
                    children: (0, i.jsxs)(o.ZP, {
                        container: !0,
                        children: [(0, i.jsxs)(o.ZP, {
                            item: !0,
                            xs: 12,
                            lg: 6,
                            children: [(0, i.jsx)(y, (0, r.Z)({}, u)), (0, i.jsx)(j, (0, r.Z)({}, u))]
                        }), (0, i.jsx)(o.ZP, {
                            item: !0,
                            xs: 12,
                            lg: 6,
                            children: (0, i.jsx)(d.Z, {
                                className: x.paper,
                                children: (0, i.jsx)(f.Z, {
                                    loaded: q,
                                    environment: "forest",
                                    children: (0, i.jsx)(i.Fragment, {
                                        children: (0, i.jsx)("group", {
                                            "position-y": 1,
                                            children: (0, i.jsx)("group", {
                                                position: (0, p.wQ)(S.position),
                                                rotation: (0, p.wQ)(S.rotation),
                                                scale: (0, p.wQ)(S.scale),
                                                children: (0, i.jsx)(m.default, {
                                                    config: u.values,
                                                    handleLoaded: b
                                                })
                                            })
                                        })
                                    })
                                })
                            })
                        })]
                    })
                })
            }
        },
        88233: function(e, t, n) {
            "use strict";
            n.d(t, {
                F: function() {
                    return r
                }
            });
            var r = ["glb"]
        },
        79123: function(e, t, n) {
            "use strict";
            var r = n(26042),
                i = n(69396),
                a = n(99534),
                o = n(85893),
                l = n(67294),
                s = n(41749),
                u = n(42422),
                c = n(53359),
                d = n(59888),
                f = n(58046),
                m = n(36277),
                h = n(27844),
                v = n(35800);
            t.Z = function(e) {
                var t = e.children,
                    n = e.loaded,
                    p = (0, a.Z)(e, ["children", "loaded"]),
                    x = (0, l.useState)(!1),
                    g = x[0],
                    q = x[1];
                (0, l.useEffect)((function() {
                    q(!0), setTimeout((function() {
                        q(!1)
                    }), 100)
                }), [n]);
                var b = (0, c.j)(m.u, h.l);
                return (0, o.jsx)(s.Z, {
                    container: !0,
                    style: {
                        position: "relative"
                    },
                    children: (0, o.jsx)("div", {
                        style: {
                            height: 500,
                            width: "100%",
                            position: "relative"
                        },
                        children: (0, o.jsx)(u.Xz, {
                            dpr: window.devicePixelRatio,
                            children: (0, o.jsx)(b, {
                                children: (0, o.jsx)(v.ErrorBoundary, {
                                    fallback: null,
                                    children: (0, o.jsx)(l.Suspense, {
                                        fallback: null,
                                        children: (0, o.jsxs)(f.H, (0, i.Z)((0, r.Z)({
                                            preset: "portrait"
                                        }, p), {
                                            adjustCamera: g,
                                            children: [n && (0, o.jsx)(d.z, {}), t]
                                        }))
                                    })
                                })
                            })
                        })
                    })
                })
            }
        },
        93132: function(e, t, n) {
            "use strict";
            var r = n(85893),
                i = n(30883),
                a = n(41749),
                o = n(27959),
                l = n(50743),
                s = n(61201),
                u = n(22318),
                c = n(64566),
                d = n(30564),
                f = n(67294),
                m = n(8396);

            function h(e) {
                var t = e.nestedForm;
                e.isForTheme;
                return t.values ? null : (0, r.jsx)(d.Z, {})
            }
            t.Z = function(e) {
                var t, n = e.children,
                    d = e.title,
                    v = e.defaultExpanded,
                    p = e.nestedForm,
                    x = e.isForTheme,
                    g = e.notExpandable,
                    q = e.activeEditorKey,
                    b = (0, i.y)(),
                    y = null === (t = (0, f.useContext)(m.rU)) || void 0 === t ? void 0 : t.setActiveEditor,
                    j = (0, f.useState)(!1),
                    S = j[0],
                    w = j[1],
                    Z = (0, f.useState)(v),
                    F = Z[0],
                    C = Z[1],
                    k = (0, f.useCallback)((function(e, t) {
                        C(t), q && y && y(q, t)
                    }), [q, y]),
                    _ = F || S;
                return (0, f.useEffect)((function() {
                    if (y && q) return _ ? (y(q, !0), function() {
                        y(q, !1)
                    }) : void 0
                }), [y, q, _]), g ? (0, r.jsx)(a.Z, {
                    container: !0,
                    style: {
                        backgroundColor: "#ffffff"
                    },
                    children: (0, r.jsx)(a.Z, {
                        item: !0,
                        xs: 12,
                        style: {
                            padding: "8px 16px 16px"
                        },
                        children: n
                    })
                }) : (0, r.jsxs)(o.Z, {
                    defaultExpanded: v,
                    style: {
                        width: "100%"
                    },
                    onChange: k,
                    onMouseOver: function() {
                        return w(!0)
                    },
                    onMouseOut: function() {
                        return w(!1)
                    },
                    children: [(0, r.jsxs)(l.Z, {
                        expandIcon: (0, r.jsx)(c.Z, {}),
                        "aria-controls": "".concat(d, "-content"),
                        id: "".concat(d, "-header"),
                        children: [(0, r.jsx)(u.Z, {
                            className: b.accordionHeading,
                            children: d
                        }), p && (0, r.jsx)(h, {
                            nestedForm: p,
                            isForTheme: x
                        })]
                    }), (0, r.jsx)(s.Z, {
                        style: {
                            padding: "0 16px 8px"
                        },
                        children: (0, r.jsx)(a.Z, {
                            container: !0,
                            children: (0, r.jsx)(a.Z, {
                                item: !0,
                                xs: 12,
                                children: n
                            })
                        })
                    })]
                })
            }
        },
        64742: function(e, t, n) {
            "use strict";
            n.d(t, {
                Ee: function() {
                    return g
                },
                Le: function() {
                    return x
                },
                SB: function() {
                    return q
                },
                nk: function() {
                    return j
                },
                Qe: function() {
                    return p
                }
            });
            var r = n(26042),
                i = n(69396),
                a = n(85893),
                o = n(67294),
                l = n(53349),
                s = n(79123),
                u = n(27386),
                c = n(75207),
                d = n(91366),
                f = n(97429),
                m = n(17812),
                h = (n(21169), n(94631)),
                v = n(72328),
                p = function() {
                    var e = (0, v.j7)(!1);
                    return {
                        elementId: "",
                        enablePointerOverLayer$: e,
                        disableInteractivity$: e
                    }
                },
                x = function(e) {
                    var t = e.config,
                        n = e.handleLoaded,
                        i = (0, o.useState)(!1),
                        u = i[0],
                        c = i[1];
                    (0, o.useEffect)((function() {
                        n && u && n(!0)
                    }), [u, n]);
                    var d = p();
                    return (0, a.jsx)(s.Z, {
                        loaded: u,
                        children: (0, a.jsx)(l.ZP, (0, r.Z)({
                            config: t,
                            handleLoaded: c
                        }, d))
                    })
                },
                g = (0, o.memo)((function(e) {
                    var t = e.config,
                        n = (0, o.useState)(!1),
                        i = n[0],
                        l = n[1],
                        c = p();
                    return (0, a.jsx)(s.Z, {
                        loaded: i,
                        children: (0, a.jsx)(u.default, (0, r.Z)({
                            config: t,
                            handleLoaded: l
                        }, c))
                    })
                })),
                q = (0, o.memo)((function(e) {
                    var t = e.config,
                        n = (0, o.useState)(!1),
                        l = n[0],
                        u = n[1],
                        c = p(),
                        d = (0, o.useState)(!0),
                        f = d[0],
                        m = d[1],
                        v = (0, o.useCallback)((function() {
                            m((function(e) {
                                return !e
                            }))
                        }), []);
                    return (0, o.useEffect)((function() {
                        u(!1)
                    }), [t.token]), (0, a.jsxs)(a.Fragment, {
                        children: [(0, a.jsx)(s.Z, {
                            loaded: l,
                            children: (0, a.jsx)(h.default, (0, i.Z)((0, r.Z)({
                                config: t
                            }, c), {
                                handleLoaded: u,
                                muted: f
                            }))
                        }), (0, a.jsx)(b, {
                            muted: f,
                            toggleMuted: v
                        })]
                    })
                })),
                b = function(e) {
                    var t = e.muted,
                        n = e.toggleMuted;
                    return (0, a.jsxs)(m.Z, {
                        onClick: n,
                        children: [t && (0, a.jsx)(d.Z, {}), !t && (0, a.jsx)(f.Z, {})]
                    })
                },
                y = function(e) {
                    var t = e.config,
                        n = (0, o.useState)(!1),
                        i = n[0],
                        l = n[1],
                        u = (0, o.useState)(!0),
                        d = u[0],
                        f = u[1],
                        m = p(),
                        h = (0, o.useCallback)((function() {
                            f((function(e) {
                                return !e
                            }))
                        }), []);
                    return (0, a.jsxs)(a.Fragment, {
                        children: [(0, a.jsx)(s.Z, {
                            loaded: i,
                            children: (0, a.jsx)(c.ZP, (0, r.Z)({
                                config: t,
                                lastActive: void 0,
                                handleLoaded: l,
                                muted: d,
                                elementTransform: void 0
                            }, m))
                        }), (0, a.jsx)(b, {
                            muted: d,
                            toggleMuted: h
                        })]
                    })
                },
                j = function(e) {
                    var t = e.config;
                    return (0, c.sd)(t) ? null : (0, a.jsx)(y, {
                        config: t
                    })
                }
        },
        39061: function(e, t, n) {
            "use strict";
            var r = n(26042),
                i = n(85893),
                a = (n(67294), n(41749)),
                o = n(93969),
                l = n(59480),
                s = n(4701),
                u = n(93132),
                c = {
                    showTitle: {
                        editor: s.K.switch,
                        editorConfig: {
                            label: "Show the Title",
                            description: "If the title of the nft should be shown in the placard"
                        }
                    },
                    showCreator: {
                        editor: s.K.switch,
                        editorConfig: {
                            label: "Show the Creator",
                            description: "If the creator of the nft should be shown in the placard"
                        }
                    },
                    showOwner: {
                        editor: s.K.switch,
                        editorConfig: {
                            label: "Show the Owner",
                            description: "If the owner of the nft should be shown in the placard"
                        }
                    },
                    showDescription: {
                        editor: s.K.switch,
                        editorConfig: {
                            label: "Show the Description",
                            description: "If the description of the nft should be shown in the placard"
                        }
                    },
                    showHistory: {
                        editor: s.K.switch,
                        editorConfig: {
                            label: "Show the History",
                            description: "If the history (bids, time listed for sale, etc.) should be shown on the placard. Currently only supported for Superrare."
                        }
                    },
                    showPrice: {
                        editor: s.K.switch,
                        editorConfig: {
                            label: "Show the Price",
                            description: "If the current price of the nft should be shown in the placard. Currently only supported for Superrare."
                        }
                    },
                    width: {
                        editor: s.K.numberField,
                        editorConfig: {
                            min: 0,
                            label: "Width",
                            description: "The width of the placard."
                        }
                    },
                    leftOffset: {
                        editor: s.K.numberField,
                        editorConfig: {
                            label: "Offset X",
                            description: "Horizontal offset from the artwork ",
                            min: 0,
                            max: 10
                        }
                    },
                    bottomOffset: {
                        editor: s.K.numberField,
                        editorConfig: {
                            label: "Offset Y",
                            description: "Vertical offset from the bottom of the artwork."
                        }
                    },
                    titleVisibleDistance: {
                        editor: s.K.numberField,
                        editorConfig: {
                            label: "Name visible distance",
                            description: "The distance the name of the nft is visible from"
                        }
                    },
                    detailsVisibleDistance: {
                        editor: s.K.numberField,
                        editorConfig: {
                            label: "Details visible distance",
                            description: "The distance the details on the placard (description, bid histroy, etc) ar visible from"
                        }
                    }
                };
            t.Z = function(e) {
                var t = e.nestedForm,
                    n = e.getThemeDefault,
                    s = e.title,
                    d = void 0 === s ? "Nft Placard Settings" : s,
                    f = e.defaultExpanded,
                    m = e.notExpandable,
                    h = (0, o.mX)({
                        nestedForm: t,
                        getThemeDefault: n
                    }),
                    v = h.values,
                    p = h.handleFieldChanged,
                    x = (0, l.u)(c, p, v),
                    g = x.FormFields,
                    q = x.props;
                return (0, i.jsx)(u.Z, {
                    title: d,
                    defaultExpanded: f,
                    notExpandable: m,
                    children: (0, i.jsxs)(a.Z, {
                        item: !0,
                        xs: 12,
                        children: [(0, i.jsxs)(u.Z, {
                            title: "Nft Placard Display Settings",
                            children: [(0, i.jsx)(g.leftOffset, (0, r.Z)({}, q)), (0, i.jsx)(g.bottomOffset, (0, r.Z)({}, q)), (0, i.jsx)(g.width, (0, r.Z)({}, q))]
                        }), (0, i.jsxs)(u.Z, {
                            title: "What to Show in the Placard",
                            children: [(0, i.jsx)(g.showTitle, (0, r.Z)({}, q)), (0, i.jsx)(g.showCreator, (0, r.Z)({}, q)), (0, i.jsx)(g.showOwner, (0, r.Z)({}, q)), (0, i.jsx)(g.showPrice, (0, r.Z)({}, q)), (0, i.jsx)(g.showDescription, (0, r.Z)({}, q)), (0, i.jsx)(g.showHistory, (0, r.Z)({}, q)), (0, i.jsx)(a.Z, {
                                container: !0,
                                children: (0, i.jsxs)(a.Z, {
                                    item: !0,
                                    xs: 12,
                                    children: [(0, i.jsx)(g.titleVisibleDistance, (0, r.Z)({}, q)), (0, i.jsx)(g.detailsVisibleDistance, (0, r.Z)({}, q))]
                                })
                            })]
                        })]
                    })
                })
            }
        },
        59480: function(e, t, n) {
            "use strict";
            n.d(t, {
                u: function() {
                    return v
                }
            });
            var r = n(26042),
                i = n(69396),
                a = n(99534),
                o = n(85893),
                l = n(67294),
                s = n(64350),
                u = n(4701),
                c = s.rs,
                d = function(e) {
                    var t = e.size,
                        n = (0, a.Z)(e, ["size"]);
                    return (0, o.jsx)(s.ro, (0, r.Z)({
                        size: t
                    }, n))
                },
                f = function(e) {
                    var t = e.setValue,
                        n = e.max,
                        l = e.min,
                        u = (0, a.Z)(e, ["setValue", "max", "min"]);
                    return (0, o.jsx)(o.Fragment, {
                        children: (0, o.jsx)(s.Mr, (0, i.Z)((0, r.Z)({
                            max: n,
                            min: l,
                            setValue: function(e) {
                                return t(e)
                            }
                        }, u), {
                            initialValue: u.value
                        }))
                    })
                },
                m = s.zH,
                h = s.iR,
                v = function(e, t, n, a) {
                    return {
                        FormFields: (0, l.useMemo)((function() {
                            var t = function(t) {
                                    var a = e[t],
                                        l = function(e) {
                                            switch (e) {
                                                case u.K.freeText:
                                                    return s.H2;
                                                case u.K.switch:
                                                    return c;
                                                case u.K.numberField:
                                                    return f;
                                                case u.K.slider:
                                                    return h;
                                                case u.K.colorPicker:
                                                    return m;
                                                case u.K.password:
                                                    return d;
                                                case u.K.dropdownPicker:
                                                    return s.TV;
                                                case u.K.select:
                                                    return s._u;
                                                default:
                                                    throw Error("Unsupported Editor")
                                            }
                                        }(a.editor);
                                    n[t] = function(e) {
                                        var n = e.handleFieldChanged,
                                            s = e.values,
                                            u = e.errors,
                                            c = s[t],
                                            d = n(t),
                                            f = u ? u[t] : void 0;
                                        return (0, o.jsx)(l, (0, i.Z)((0, r.Z)({}, a.editorConfig), {
                                            value: c,
                                            setValue: d,
                                            error: f
                                        }))
                                    }
                                },
                                n = {};
                            for (var a in e) t(a);
                            return n
                        }), [e]),
                        props: {
                            handleFieldChanged: t,
                            values: n,
                            errors: a
                        }
                    }
                };
            t.Z = v
        },
        4701: function(e, t, n) {
            "use strict";
            var r;
            n.d(t, {
                    K: function() {
                        return r
                    }
                }),
                function(e) {
                    e.freeText = "freeText", e.switch = "switch", e.slider = "slider", e.numberField = "numberField", e.colorPicker = "colorPicker", e.password = "password", e.dropdownPicker = "dropdownPicker", e.select = "select"
                }(r || (r = {}))
        },
        16712: function(e, t, n) {
            "use strict";
            n.d(t, {
                k: function() {
                    return a
                },
                l: function() {
                    return i
                }
            });
            var r = n(46182),
                i = function(e) {
                    (0, r.Bu)("Opened modal", {
                        elementType: e
                    })
                };

            function a(e) {
                var t = e.fromSpace,
                    n = e.toSpace;
                (0, r.Bu)("Entered portal", {
                    fromSpace: t,
                    toSpace: n
                })
            }
        },
        86528: function(e, t, n) {
            "use strict";
            n.d(t, {
                XA: function() {
                    return c
                },
                Xy: function() {
                    return o
                },
                bg: function() {
                    return u
                },
                hE: function() {
                    return i
                },
                iQ: function() {
                    return l
                },
                lR: function() {
                    return s
                },
                wU: function() {
                    return a
                }
            });
            var r = n(46182),
                i = "Space loaded",
                a = function(e) {
                    var t = e.kind;
                    (0, r.Bu)("Failed requesting media", {
                        kind: t
                    })
                },
                o = function(e) {
                    var t = e.kind;
                    (0, r.Bu)("Succeeded requesting media", {
                        kind: t
                    })
                };

            function l(e) {
                var t = e.spaceSlug,
                    n = e.spaceId;
                (0, r.Bu)("Opened Space", {
                    spaceSlug: t,
                    spaceId: n
                })
            }

            function s(e) {
                var t = e.spaceId,
                    n = e.spaceSlug,
                    i = e.grantAccess;
                (0, r.Bu)("Clicked to Initialize", {
                    spaceSlug: n,
                    spaceId: t,
                    "agreed to grant accesss": i
                })
            }

            function u(e) {
                var t = e.spaceSlug,
                    n = e.spaceId;
                (0, r.Bu)("Clicked to Enter Space", {
                    spaceSlug: t,
                    spaceId: n
                })
            }
            var c = function() {
                (0, r.lR)(".modal-container", "Modal link clicked")
            }
        },
        79338: function(e, t, n) {
            "use strict";
            var r = n(85893),
                i = n(67294),
                a = n(99477);
            t.Z = function(e) {
                var t = e.cameraTexture,
                    n = e.meshes,
                    o = (0, i.useState)(),
                    l = o[0],
                    s = o[1];
                return (0, i.useEffect)((function() {
                    var e = n.map((function(e) {
                        return {
                            geometry: e.geometry,
                            material: new a.MeshBasicMaterial({
                                color: e.material.color
                            }),
                            side: a.DoubleSide,
                            position: e.position,
                            scale: e.scale,
                            rotation: e.rotation
                        }
                    }));
                    return s(e),
                        function() {
                            e.forEach((function(e) {
                                return e.material.dispose()
                            }))
                        }
                }), [n]), (0, i.useEffect)((function() {
                    l && l.forEach((function(e) {
                        e.material.map = t || null, e.material.needsUpdate = !0
                    }))
                }), [l, t]), (0, r.jsx)(r.Fragment, {
                    children: null === l || void 0 === l ? void 0 : l.map((function(e, t) {
                        return (0, r.jsx)("mesh", {
                            position: e.position,
                            scale: e.scale,
                            rotation: e.rotation,
                            geometry: e.geometry,
                            material: e.material
                        }, t)
                    }))
                })
            }
        },
        52741: function(e, t, n) {
            "use strict";
            n.d(t, {
                bD: function() {
                    return h
                },
                nt: function() {
                    return v
                },
                y0: function() {
                    return m
                }
            });
            var r = n(85893),
                i = n(38700),
                a = n(86704),
                o = n(21169),
                l = n(72328),
                s = n(67294),
                u = n(55709),
                c = n(99477),
                d = n(82473),
                f = n(96747),
                m = function(e) {
                    var t = (0, s.useState)(),
                        n = t[0],
                        r = t[1],
                        l = (0, s.useState)(),
                        d = l[0],
                        f = l[1];
                    (0, s.useEffect)((function() {
                        var t = e.pipe((0, u.U)((function(e) {
                            return (null === e || void 0 === e ? void 0 : e.defaultAvatar) || void 0
                        }))).subscribe(f);
                        return function() {
                            return t.unsubscribe()
                        }
                    }), [e]);
                    var m = (0, o.PP)(null === d || void 0 === d ? void 0 : d.avatarFile, !0),
                        h = (0, i.Z)(m).model;
                    return (0, s.useEffect)((function() {
                        h && r(function(e) {
                            var t = e.nodes,
                                n = e.selfViewPosition,
                                r = void 0 === n ? {
                                    x: 0,
                                    y: -1.2,
                                    z: 2.4
                                } : n,
                                i = e.selfViewRotation,
                                o = void 0 === i ? {
                                    x: 0,
                                    y: -.27,
                                    z: 0
                                } : i,
                                l = Object.values(t).filter((function(e) {
                                    return !!e.isMesh && !!e.userData.cameraSurface
                                })).map((function(e) {
                                    var t = e.clone(!0),
                                        n = t.material.color || 16777215;
                                    return t.material = new c.MeshBasicMaterial({
                                        color: n
                                    }), t
                                })),
                                s = Object.values(t).filter((function(e) {
                                    return !!e.isMesh && !!e.userData.body
                                })),
                                u = Object.values(t).find((function(e) {
                                    return !!e.userData.nameDisplay
                                })),
                                d = (null === u || void 0 === u ? void 0 : u.position) || new c.Vector3(0, .7, .5),
                                f = Object.values(t).find((function(e) {
                                    return !!e.userData.camera
                                })),
                                m = Object.values(t).find((function(e) {
                                    return e.isMesh && !!e.userData.audioLevelIndicator
                                }));
                            return {
                                cameraSurfaces: l,
                                body: s,
                                namePosition: d,
                                cameraPosition: (null === f || void 0 === f ? void 0 : f.position) || new c.Vector3(0, a.mz, 0),
                                audioPreview: m,
                                selfViewPosition: new c.Vector3(r.x || 0, r.y || 0, r.z || 0),
                                selfViewRotation: new c.Vector3(o.x || 0, o.y || 0, o.z || 0)
                            }
                        }({
                            nodes: h.children,
                            selfViewPosition: (null === d || void 0 === d ? void 0 : d.selfViewPosition) || void 0,
                            selfViewRotation: (null === d || void 0 === d ? void 0 : d.selfViewRotation) || void 0
                        }))
                    }), [null === d || void 0 === d ? void 0 : d.selfViewPosition, null === d || void 0 === d ? void 0 : d.selfViewRotation, h, r]), n
                },
                h = function(e) {
                    var t = e.mesh,
                        n = e.volume$,
                        i = (0, l.Hq)(n, 0);
                    return (0, r.jsx)("mesh", {
                        position: t.position,
                        rotation: t.rotation,
                        scale: t.scale,
                        geometry: t.geometry,
                        children: (0, r.jsx)("meshBasicMaterial", {
                            transparent: !0,
                            opacity: 3 * i,
                            color: "rgba(255,255,0,1)"
                        })
                    })
                },
                v = (0, s.memo)((function(e) {
                    var t = e.name,
                        n = e.visible;
                    return (0, r.jsx)(s.Suspense, {
                        fallback: null,
                        children: (0, r.jsx)(d.x, {
                            color: "white",
                            outlineColor: "black",
                            outlineWidth: .005,
                            anchorX: "center",
                            anchorY: "middle",
                            font: f.Z.Comfortaa,
                            fontSize: .3,
                            visible: n,
                            children: t
                        })
                    })
                }))
        },
        29137: function(e, t, n) {
            "use strict";
            n.d(t, {
                GT: function() {
                    return g
                },
                _D: function() {
                    return q
                }
            });
            var r = n(11227),
                i = n.n(r),
                a = (n(67294), n(62561)),
                o = n(31898),
                l = n(69604),
                s = n(44081),
                u = n(80665),
                c = n(62187),
                d = n(55709),
                f = n(47746),
                m = n(96381),
                h = n(5602),
                v = n(40486),
                p = n(12368);
            n(72328);

            function x(e, t) {
                return (0, a.z)((0, u.a)((function(n) {
                    return (0, o.w)(1, e).pipe((0, c.$)(n, (function(e) {
                        return e
                    })), (0, d.U)((function(e) {
                        return e * e
                    })), (0, f.zg)((function(e) {
                        return (0, l.H)(e * t)
                    })))
                })))
            }
            var g = function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2,
                        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 500;
                    return (0, s.D)([e]).pipe((0, m.w)((function(e) {
                        return e.play()
                    }))).pipe(x(t, n), (0, h.h)(!0), (0, v.K)((function() {
                        return (0, s.D)([!1])
                    })))
                },
                q = function(e) {
                    var t = e.element,
                        n = e.play,
                        r = e.playing;
                    return t ? n === r ? (0, s.D)([r]) : n ? g(t).pipe((0, p.b)((function(e) {
                        return i()("stream:playResult")({
                            succeeded: e,
                            element: t,
                            elementId: t.tagName
                        })
                    }))) : (t.pause(), i()("stream:pause")({
                        tag: t.tagName,
                        element: t
                    }), (0, s.D)([!1])) : (0, s.D)([!1])
                }
        },
        35155: function(e, t, n) {
            "use strict";
            var r = n(67294),
                i = n(51442),
                a = n(99477),
                o = n(86704),
                l = n(99498),
                s = n(92918),
                u = n(72328);
            t.Z = function(e) {
                var t = e.positionRef,
                    n = e.movementSpeed,
                    c = void 0 === n ? 5 : n,
                    d = e.jumpSpeed,
                    f = void 0 === d ? .5 : d,
                    m = e.gravity,
                    h = void 0 === m ? 5 : m,
                    v = e.meshes,
                    p = e.disableCollisions,
                    x = void 0 !== p && p,
                    g = e.disableGravity,
                    q = void 0 !== g && g,
                    b = e.joystickMoveRef,
                    y = e.keyboardMovementKeys$,
                    j = e.disabled,
                    S = (0, r.useRef)(!1),
                    w = (0, r.useRef)(0),
                    Z = (0, r.useCallback)((function() {
                        S.current && (w.current = f)
                    }), [f]),
                    F = (0, u.Hq)(y, s.G),
                    C = F.sprint;
                (0, r.useEffect)((function() {
                    F.jump && Z()
                }), [F.jump, Z]);
                var k = (0, i.w)().camera,
                    _ = (0, r.useRef)(new a.Raycaster);
                return (0, i.x)((function(e, n) {
                    if (!j) {
                        var r = t.current;
                        if (r) {
                            var i = new a.Vector3(r.x, r.y + o.sr, r.z),
                                s = C ? 2 * c : c,
                                u = (0, l.sJ)({
                                    cameraMatrix: k.matrix,
                                    delta: n,
                                    move: F,
                                    movementSpeed: s,
                                    joystickMove: null === b || void 0 === b ? void 0 : b.current
                                }),
                                d = u.change,
                                f = u.hasMovement && (!!x || ! function(e) {
                                    var t = e.position,
                                        n = e.raycaster,
                                        r = e.toMove,
                                        i = e.meshes;
                                    n.far = .5;
                                    var a = r.clone();
                                    a.normalize(), n.set(t, a);
                                    var o = i.collidable;
                                    return n.intersectObjects(o).length > 0
                                }({
                                    position: i,
                                    raycaster: _.current,
                                    toMove: d,
                                    meshes: v
                                }));
                            if (!q) {
                                var m = function(e) {
                                    var t = e.meshes,
                                        n = e.position,
                                        r = e.raycaster,
                                        i = t.ground,
                                        o = 0,
                                        l = new a.Vector3(n.x, n.y + 1, n.z);
                                    r.set(l, new a.Vector3(0, -1, 0)), r.far = 50;
                                    try {
                                        var s = r.intersectObjects(i);
                                        s[0] && (o = s[0].point.y)
                                    } catch (u) {
                                        console.error(u)
                                    }
                                    return o
                                }({
                                    meshes: v,
                                    position: i,
                                    raycaster: _.current
                                });
                                f && r.add(d), r.setY(r.y + w.current), w.current -= h * n, w.current = Math.max(w.current, -10);
                                var p = r.y <= m + .15;
                                S.current = p, p && !q && (w.current = 0, r.setY(m))
                            }
                        }
                    }
                })), null
            }
        },
        74478: function(e, t, n) {
            "use strict";
            var r = n(71505),
                i = n(67294),
                a = n(51442),
                o = n(99477),
                l = n(93783),
                s = (0, r.ZP)();
            t.Z = function(e) {
                var t = e.turnSpeed,
                    n = void 0 === t ? 1e3 : t,
                    r = e.movementSpeed,
                    u = void 0 === r ? .002 : r,
                    c = e.joystickMoveRef,
                    d = e.keyboardMovementKeys$,
                    f = (0, a.w)().camera,
                    m = (0, i.useRef)(!1),
                    h = (0, i.useRef)(!1),
                    v = (0, i.useRef)(new o.Euler(0, 0, 0, "YXZ"));
                return (0, i.useEffect)((function() {
                    var e = d.pipe((0, l.j)("turnLeft")).subscribe({
                            next: function(e) {
                                return m.current = e
                            }
                        }),
                        t = d.pipe((0, l.j)("turnRight")).subscribe({
                            next: function(e) {
                                return h.current = e
                            }
                        });
                    return function() {
                        e.unsubscribe(), t.unsubscribe()
                    }
                }), [d]), (0, a.x)((function(e, t) {
                    var r = 0;
                    m.current && (r = -t * n), h.current && (r = t * n), !s && (null === c || void 0 === c ? void 0 : c.current) && null !== c.current.x && 0 !== c.current.x && (r = t * c.current.x * 30), r && (v.current.setFromQuaternion(f.quaternion), v.current.y -= r * u, f.quaternion.setFromEuler(v.current))
                })), null
            }
        },
        88250: function(e, t, n) {
            "use strict";
            var r = n(10253),
                i = (n(85893), n(67294)),
                a = n(51442),
                o = n(57027),
                l = n(99477),
                s = n(58148),
                u = n.n(s),
                c = n(43825),
                d = n(66008),
                f = n(99498),
                m = n(86704),
                h = n(72328),
                v = function(e, t) {
                    e && (t && !e.classList.contains(u().cursorGrabbing) ? e.classList.add(u().cursorGrabbing) : !t && e.classList.contains(u().cursorGrabbing) && e.classList.remove(u().cursorGrabbing))
                },
                p = Math.PI / 2,
                x = function(e) {
                    return 1 === (1 & e)
                };
            t.Z = function(e) {
                e.reverseDrag, e.mouseDragRotationSpeed, e.rotationSpeed, e.enableDamping, e.dampingFactor;
                var t = e.minPolarAngle,
                    n = void 0 === t ? Math.PI / 4 : t,
                    s = e.maxPolarAngle,
                    u = void 0 === s ? 3 * Math.PI / 4 : s,
                    g = e.disabled,
                    q = (0, i.useRef)(new l.Euler(0, 0, 0, "YXZ")),
                    b = (0, a.w)().camera,
                    y = (0, i.useCallback)((function(e, t) {
                        q.current.setFromQuaternion(b.quaternion), q.current.y -= .002 * e, q.current.x -= .002 * t, q.current.x = Math.max(p - u, Math.min(p - n, q.current.x)), b.quaternion.setFromEuler(q.current)
                    }), [b.quaternion, u, n]);
                return function(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                            n = (0, a.w)().gl.domElement,
                            r = (0, i.useCallback)((function(r) {
                                if (x(r.buttons) && !t) {
                                    r.preventDefault(), v(n, !0);
                                    var i = r.movementX || r.mozMovementX || r.webkitMovementX || 0,
                                        a = r.movementY || r.mozMovementY || r.webkitMovementY || 0;
                                    e(i, a)
                                } else v(n, !1)
                            }), [n, e, t]);
                        (0, i.useEffect)((function() {
                            var e = (0, o.R)(n, "mousemove").subscribe((function(e) {
                                return r(e)
                            }));
                            return function() {
                                return e.unsubscribe()
                            }
                        }), [n, r]), (0, i.useEffect)((function() {
                            var e = (0, o.R)(n, "mouseup").subscribe((function(e) {
                                return v(n, !1)
                            }));
                            return function() {
                                v(n, !1), e.unsubscribe()
                            }
                        }), [n, r])
                    }(y, g),
                    function(e, t) {
                        var n = (0, a.w)().gl.domElement,
                            l = (0, i.useRef)(null),
                            s = (0, i.useCallback)((function(e) {
                                if (null === l.current) {
                                    var t = function(e) {
                                        for (var t = e[0], n = 1; n < e.length; n++) e[n].clientY < t.clientY && (t = e[n]);
                                        return t
                                    }(e.changedTouches);
                                    (t.clientX > 160 || t.clientY < window.innerHeight - 160) && (l.current = t)
                                }
                            }), []),
                            u = (0, i.useCallback)((function(e) {
                                null !== l.current && (0, f.KY)(e.changedTouches, l.current) && (l.current = null)
                            }), []),
                            v = (0, i.useCallback)((function(n) {
                                if (!t && (n.scale && 1 !== n.scale && n.preventDefault(), null !== l.current)) {
                                    var r = (0, f.KY)(n.changedTouches, l.current);
                                    if (null !== r) {
                                        n.preventDefault();
                                        var i = r.clientX - l.current.clientX,
                                            a = r.clientY - l.current.clientY;
                                        e(i * m.Hh, a * m.Hh), l.current = r
                                    }
                                }
                            }), [e, t]),
                            p = (0, h.j7)(t);
                        (0, i.useEffect)((function() {
                            var e = (0, o.R)(document, "touchmove").pipe((0, c.M)(p), (0, d.h)((function(e) {
                                return !(0, r.Z)(e, 2)[1]
                            }))).subscribe({
                                next: function(e) {
                                    var t = (0, r.Z)(e, 1)[0];
                                    return v(t)
                                }
                            });
                            return function() {
                                return e.unsubscribe()
                            }
                        }), [n, v, p]), (0, i.useEffect)((function() {
                            var e = (0, o.R)(document, "touchstart").pipe((0, c.M)(p), (0, d.h)((function(e) {
                                return !(0, r.Z)(e, 2)[1]
                            }))).subscribe({
                                next: function(e) {
                                    var t = (0, r.Z)(e, 1)[0];
                                    return s(t)
                                }
                            });
                            return function() {
                                return e.unsubscribe()
                            }
                        }), [n, s, p]), (0, i.useEffect)((function() {
                            var e = (0, o.R)(document, "touchend").subscribe((function(e) {
                                return u(e)
                            }));
                            return function() {
                                return e.unsubscribe()
                            }
                        }), [n, u])
                    }(y, g), null
            }
        },
        3120: function(e, t, n) {
            "use strict";
            n.d(t, {
                j: function() {
                    return s
                }
            });
            var r = n(99477),
                i = n(51442),
                a = n(99498),
                o = n(86704),
                l = new r.Vector3(0, o.mz, 0),
                s = function(e) {
                    var t = e.updatePlayerState,
                        n = e.position,
                        r = (0, i.w)().camera;
                    return (0, i.x)((function() {
                        var e = n.current;
                        if (e) {
                            var i = (0, a.RI)(r);
                            t({
                                position: e.toArray(),
                                quarternion: i.quaternion,
                                lookAt: i.lookAt
                            })
                        }
                    })), null
                };
            t.Z = function(e) {
                var t = e.position,
                    n = e.cameraOffset,
                    r = e.setPositionFromCamera,
                    a = (0, i.w)().camera;
                return (0, i.x)((function() {
                    var e = t.current;
                    if (e) {
                        var i = n || l;
                        if (r) {
                            var o = a.position;
                            e.set(o.x - i.x, o.y - i.y, o.z - i.z)
                        } else a.position.set(e.x, e.y, e.z), a.position.add(i)
                    }
                })), null
            }
        },
        92918: function(e, t, n) {
            "use strict";
            n.d(t, {
                G: function() {
                    return j
                }
            });
            var r = n(14924),
                i = n(26042),
                a = n(69396),
                o = n(10253),
                l = n(67294),
                s = n(89233),
                u = n(57027),
                c = n(18170),
                d = n(14370),
                f = n(69604),
                m = n(55709),
                h = n(11120),
                v = n(47746),
                p = n(96381),
                x = n(66008),
                g = n(5602),
                q = n(41931),
                b = n(22807),
                y = n(10179),
                j = {
                    left: !1,
                    right: !1,
                    forward: !1,
                    backward: !1,
                    sprint: !1,
                    turnLeft: !1,
                    turnRight: !1,
                    jump: !1
                };
            t.Z = function() {
                var e = (0, l.useState)(new s.X(j))[0];
                return (0, l.useEffect)((function() {
                    var t = {
                            left: [37, 65],
                            right: [39, 68],
                            forward: [38, 87],
                            backward: [40, 83],
                            turnLeft: [81],
                            turnRight: [69],
                            sprint: [16],
                            jump: [32]
                        },
                        n = {};
                    Object.entries(t).forEach((function(e) {
                        var t = (0, o.Z)(e, 2),
                            r = t[0];
                        t[1].forEach((function(e) {
                            return n[e] = r
                        }))
                    }));
                    var l = (0, u.R)(document, "keydown").pipe((0, m.U)((function(e) {
                        return n[e.keyCode]
                    })), (0, y.YU)()).pipe((0, h.v)((function(e) {
                        return e
                    })), (0, v.zg)((function(e) {
                        return e.pipe((0, p.w)((function(e) {
                            var n = (0, c.of)({
                                    event: e,
                                    down: !0
                                }),
                                r = (0, u.R)(document, "keyup").pipe((0, x.h)((function(n) {
                                    return t[e].includes(n.keyCode)
                                }))).pipe((0, g.h)({
                                    event: e,
                                    down: !1
                                }));
                            return (0, d.T)(n, r)
                        })), (0, q.x)())
                    }))).pipe((0, b.R)((function(e, t) {
                        return (0, a.Z)((0, i.Z)({}, e), (0, r.Z)({}, t.event, t.down))
                    }), j)).pipe((0, p.w)((function(e) {
                        var t = (0, c.of)(e),
                            n = (0, f.H)(1500).pipe((0, g.h)(j));
                        return (0, d.T)(t, n)
                    }))).subscribe(e);
                    return function() {
                        return l.unsubscribe()
                    }
                }), [e]), e
            }
        },
        99498: function(e, t, n) {
            "use strict";
            n.d(t, {
                KY: function() {
                    return c
                },
                RI: function() {
                    return u
                },
                sJ: function() {
                    return s
                }
            });
            var r = n(29815),
                i = n(99477),
                a = n(71505),
                o = n(91200),
                l = (0, a.ZP)(),
                s = function(e) {
                    var t = e.delta,
                        n = e.movementSpeed,
                        r = e.cameraMatrix,
                        a = e.move,
                        o = e.joystickMove,
                        s = t * n,
                        u = new i.Matrix4;
                    u.extractRotation(r);
                    var c = new i.Vector3(0, 0, 1).applyMatrix4(u),
                        d = c.clone().negate(),
                        f = d.clone().cross(new i.Vector3(0, 1, 0)).normalize(),
                        m = f.clone().negate(),
                        h = new i.Vector3(0, 0, 0),
                        v = !1;
                    return o && o.y && 0 !== o.y && (o.y > 0 || o.y < 0) && (v = !0, h.addScaledVector(new i.Vector3(d.x, 0, d.z), o.y * s * .05)), l && o && o.x && 0 !== o.x && (o.x > 0 || o.x < 0) && (v = !0, h.addScaledVector(new i.Vector3(f.x, 0, f.z), o.x * s * .05)), a.forward && (v = !0, h.addScaledVector(new i.Vector3(d.x, 0, d.z), s)), a.backward && (v = !0, h.addScaledVector(new i.Vector3(c.x, 0, c.z), s)), a.left && (v = !0, h.addScaledVector(new i.Vector3(m.x, 0, m.z), s)), a.right && (v = !0, h.addScaledVector(new i.Vector3(f.x, 0, f.z), s)), {
                        change: h,
                        hasMovement: v
                    }
                },
                u = function(e) {
                    var t, n = new i.Vector3;
                    e.getWorldDirection(n);
                    var a = n.toArray(),
                        l = new i.Object3D,
                        s = e.position.toArray();
                    (t = l.position).set.apply(t, (0, r.Z)(s));
                    var u = (0, o.Dh)(s, a);
                    return l.lookAt(u), {
                        quaternion: l.quaternion.toArray(),
                        lookAt: u.toArray()
                    }
                },
                c = function(e, t) {
                    for (var n = 0; n < e.length; n++)
                        if (e[n].identifier === t.identifier) return e[n];
                    return null
                }
        },
        20336: function(e, t, n) {
            "use strict";
            var r = n(26042),
                i = n(69396),
                a = n(85893),
                o = n(61523),
                l = n(82473),
                s = n(51442),
                u = n(8396),
                c = n(8077),
                d = n(96486),
                f = n(67294),
                m = n(99477),
                h = n(44923),
                v = n(64886),
                p = n(86704);

            function x(e, t) {
                return e - t
            }
            var g = function(e) {
                    var t = e.positionalAudio,
                        n = e.maxPlayDistance,
                        l = (0, f.useState)(null),
                        s = l[0],
                        u = l[1],
                        d = (0, f.useState)(),
                        h = d[0],
                        v = d[1];
                    return (0, f.useEffect)((function() {
                        if (s) {
                            for (var e = s.attributes.position, t = new m.Vector3, r = 0; r < e.count; r++) {
                                t.fromBufferAttribute(e, r);
                                var i = Math.sqrt(Math.pow(t.x, 2) + Math.pow(t.y, 2)) / n;
                                s.attributes.uv.setXY(r, 0, 1 - i)
                            }
                            s.attributes.uv.needsUpdate = !0
                        }
                    }), [s, n]), (0, f.useEffect)((function() {
                        for (var e = [], r = [], i = 0; i <= 20; i++) {
                            var a = i / 20,
                                o = a * n,
                                l = void 0;
                            l = o > n ? 0 : (0, c.D)(o * o, t);
                            var s = a,
                                u = "hsl(".concat(100 + 100 * l, ", 100%, ").concat(50 * l, "%)");
                            e.push(s), r.push(u)
                        }
                        v({
                            stops: e,
                            colors: r
                        })
                    }), [t, n]), h ? (0, a.jsxs)("mesh", {
                        "rotation-x": Math.PI / 2,
                        children: [(0, a.jsx)("meshBasicMaterial", {
                            side: m.DoubleSide,
                            transparent: !0,
                            opacity: .8,
                            children: (0, a.jsx)(o.S, (0, i.Z)((0, r.Z)({}, h), {
                                size: 1024
                            }))
                        }), (0, a.jsx)("circleBufferGeometry", {
                            args: [n, 32],
                            ref: u
                        })]
                    }) : null
                },
                q = (0, f.memo)((function(e) {
                    var t = e.positionalAudioConfig,
                        n = e.elementTransform,
                        r = (e.audio, e.maxPlayDistance),
                        i = void 0 === r ? v.AV : r,
                        o = (0, f.useState)(null),
                        u = o[0],
                        h = o[1],
                        q = (0, f.useState)(),
                        b = q[0],
                        y = q[1],
                        j = (0, s.w)().scene,
                        S = (0, f.useState)(new m.Vector3(0, 0, 0)),
                        w = S[0],
                        Z = S[1],
                        F = (0, f.useState)(new m.Vector3(1, 1, 1)),
                        C = F[0],
                        k = F[1],
                        _ = (0, f.useState)((function() {
                            var e = new m.Raycaster;
                            return e.layers.disableAll(), e.layers.enable(p.mJ), e.far = 100, e
                        }))[0];
                    (0, f.useLayoutEffect)((function() {
                        if (u) {
                            var e = new m.Vector3;
                            u.getWorldScale(e);
                            var t = new m.Vector3(1, 1, 1).clone().divide(e);
                            k(t);
                            var n = new m.Vector3;
                            u.getWorldPosition(n);
                            var r = new m.Vector3(0, -1, 0);
                            _.set(n, r);
                            var i, a = _.intersectObjects(j.children, !0),
                                o = n.y || 0;
                            if (0 === a.length) i = -o;
                            else {
                                var l = a.map((function(e) {
                                    return e.distance
                                }));
                                l.sort(x), i = -l[0]
                            }
                            var s = new m.Vector3(0, i * t.y + .05, 0);
                            Z(s)
                        }
                    }), [u, n, j, _]), (0, f.useEffect)((function() {
                        if ("global" !== t.mode) {
                            var e = t.refDistance || 10,
                                n = i * i,
                                r = (0, d.range)(e, i, 5).map((function(e) {
                                    var r = e * e;
                                    return {
                                        radius: e,
                                        volume: r > n ? 0 : (0, c.D)(r, t)
                                    }
                                })).filter((function(e) {
                                    var t = e.volume;
                                    return Math.floor(100 * t) > 0
                                }));
                            y(r)
                        } else y(void 0)
                    }), [t, i]);
                    var T = Math.PI / 2,
                        M = 2 * Math.PI;
                    return (0, a.jsx)("group", {
                        ref: h,
                        children: (0, a.jsx)("group", {
                            "position-y": w.y,
                            children: (0, a.jsxs)("group", {
                                scale: C,
                                children: [null === b || void 0 === b ? void 0 : b.map((function(e, t) {
                                    var n = e.radius,
                                        r = e.volume;
                                    return (0, a.jsxs)(f.Fragment, {
                                        children: [(0, a.jsxs)("mesh", {
                                            "rotation-x": T,
                                            children: [(0, a.jsx)("meshBasicMaterial", {
                                                color: "red",
                                                transparent: !0,
                                                opacity: r,
                                                side: m.DoubleSide
                                            }), (0, a.jsx)("torusBufferGeometry", {
                                                args: [n, .05, 8, 64]
                                            })]
                                        }), (0, a.jsx)("group", {
                                            "rotation-y": M * t / 10,
                                            children: (0, d.range)(1, 3).map((function(e) {
                                                var t = "".concat(Math.round(100 * r), "% volume");
                                                return (0, a.jsx)(a.Fragment, {
                                                    children: (0, a.jsx)("group", {
                                                        "rotation-y": M * (e / 2),
                                                        "position-y": 2,
                                                        children: (0, a.jsx)(f.Suspense, {
                                                            fallback: null,
                                                            children: (0, a.jsx)(l.x, {
                                                                "position-z": n,
                                                                "rotation-y": Math.PI,
                                                                color: "white",
                                                                outlineColor: "black",
                                                                outlineWidth: .005,
                                                                fontSize: 1,
                                                                children: t
                                                            })
                                                        })
                                                    })
                                                })
                                            }))
                                        })]
                                    }, t)
                                })), "global" !== t.mode && (0, a.jsx)(f.Suspense, {
                                    fallback: null,
                                    children: (0, a.jsx)(g, {
                                        positionalAudio: t,
                                        maxPlayDistance: i
                                    })
                                })]
                            })
                        })
                    })
                }));
            t.Z = function(e) {
                var t;
                return !!(null === (t = (0, f.useContext)(u.rU)) || void 0 === t ? void 0 : t.activeEditors[h.l]) || !!e.alwaysShow ? (0, a.jsx)(q, (0, r.Z)({}, e)) : null
            }
        },
        20390: function(e, t, n) {
            "use strict";
            n.d(t, {
                Z: function() {
                    return g
                }
            });
            var r = n(26042),
                i = n(69396),
                a = n(85893),
                o = n(67294),
                l = n(68624),
                s = n(25784),
                u = n(38008),
                c = n(47568),
                d = n(34051),
                f = n.n(d),
                m = n(51442),
                h = n(99477),
                v = n(21169),
                p = function(e) {
                    var t = e.imageUrl,
                        n = e.setTexture,
                        r = e.repeatX,
                        i = e.repeatY,
                        a = (0, m.z)(h.TextureLoader, t);
                    return (0, o.useEffect)((function() {
                        return n(a), r && (a.repeat.setX(r), r > 1 && (a.wrapS = h.RepeatWrapping), a.needsUpdate = !0), i && (a.repeat.setY(i), i > 1 && (a.wrapT = h.RepeatWrapping), a.needsUpdate = !0),
                            function() {
                                a.dispose()
                            }
                    }), [a, n, r, i]), (0, o.useEffect)((function() {
                        return function() {
                            n(null)
                        }
                    }), [n]), null
                },
                x = function(e) {
                    var t = e.imageFileLocation,
                        n = e.setTexture,
                        r = e.repeatX,
                        i = e.repeatY,
                        l = (0, o.useState)(),
                        s = l[0],
                        u = l[1];
                    return (0, o.useEffect)((function() {
                        (0, c.Z)(f().mark((function e() {
                            return f().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (!t) {
                                            e.next = 8;
                                            break
                                        }
                                        return e.t0 = u, e.next = 4, (0, v.gN)(t);
                                    case 4:
                                        e.t1 = e.sent, (0, e.t0)(e.t1), e.next = 9;
                                        break;
                                    case 8:
                                        u(void 0);
                                    case 9:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })))()
                    }), [t]), s ? (0, a.jsx)(p, {
                        setTexture: n,
                        imageUrl: s,
                        repeatX: r,
                        repeatY: i
                    }) : null
                },
                g = function(e) {
                    var t = e.config,
                        n = e.handleMaterialSet,
                        c = e.useThreeColor,
                        d = (0, s.sT)(t, l.w$),
                        f = (0, o.useState)(null),
                        m = f[0],
                        h = f[1],
                        v = (0, o.useState)(null),
                        p = v[0],
                        g = v[1],
                        q = (0, o.useState)(null),
                        b = q[0],
                        y = q[1],
                        j = (0, o.useState)(null),
                        S = j[0],
                        w = j[1],
                        Z = (0, o.useState)(null),
                        F = Z[0],
                        C = Z[1],
                        k = (0, o.useMemo)((function() {
                            return {
                                color: m ? void 0 : (0, u.C)(d.color, c),
                                opacity: d.opacity,
                                transparent: d.transparent,
                                map: m,
                                ref: C
                            }
                        }), [m, d.color, d.opacity, d.transparent, c]),
                        _ = (0, s.sT)(d.phong, l.e1),
                        T = (0, o.useMemo)((function() {
                            if (_.specularColor) return (0, u.C)(_.specularColor, c)
                        }), [_.specularColor, c]);
                    return (0, o.useEffect)((function() {
                        F && (F.needsUpdate = !0)
                    }), [m, p, F]), (0, o.useEffect)((function() {
                        F && n && n(F)
                    }), [F, n]), (0, o.useEffect)((function() {
                        if (n) return function() {
                            return n(void 0)
                        }
                    }), [n]), (0, a.jsxs)(a.Fragment, {
                        children: [d.textureFile && (0, a.jsx)(x, {
                            imageFileLocation: d.textureFile,
                            setTexture: h,
                            repeatX: d.textureRepeatX,
                            repeatY: d.textureRepeatY
                        }), _.bumpMapTextureFile && (0, a.jsx)(x, {
                            imageFileLocation: _.bumpMapTextureFile,
                            setTexture: g,
                            repeatX: d.textureRepeatX,
                            repeatY: d.textureRepeatY
                        }), _.normalMapTextureFile && (0, a.jsx)(x, {
                            imageFileLocation: _.normalMapTextureFile,
                            setTexture: y,
                            repeatX: d.textureRepeatX,
                            repeatY: d.textureRepeatY
                        }), _.displacementMapTextureFile && (0, a.jsx)(x, {
                            imageFileLocation: _.displacementMapTextureFile,
                            setTexture: w,
                            repeatX: d.textureRepeatX,
                            repeatY: d.textureRepeatY
                        }), "basic" === d.materialType && (0, a.jsx)("meshBasicMaterial", (0, r.Z)({}, k)), "phong" === d.materialType && (0, a.jsx)("meshPhongMaterial", (0, i.Z)((0, r.Z)({}, k), {
                            specular: T,
                            shininess: _.shininess,
                            reflectivity: _.reflectivity,
                            bumpMap: p,
                            bumpScale: _.bumpMapScale,
                            displacementMap: S,
                            displacementScale: _.displacementMapScale,
                            normalMap: b
                        })), "lambert" === d.materialType && (0, a.jsx)("meshLambertMaterial", (0, r.Z)({}, k))]
                    })
                }
        },
        32069: function(e, t, n) {
            "use strict";
            var r = n(26042),
                i = n(69396),
                a = n(10253),
                o = n(85893),
                l = n(67294),
                s = n(25784),
                u = n(68624),
                c = n(20390);
            t.Z = function(e) {
                var t = e.config,
                    n = e.imageDimensions,
                    d = e.boxFront,
                    f = e.rotationY,
                    m = (0, s.sT)(t, u.GE),
                    h = (0, l.useMemo)((function() {
                        var e = m.border,
                            t = m.depth,
                            o = (0, a.Z)(n, 2),
                            l = o[0],
                            s = o[1],
                            u = {
                                center: [-l / 2 - e / 2, 0, -t / 2],
                                shape: [e, s + 2 * e, t]
                            },
                            c = {
                                center: [0, s / 2 + e / 2, -t / 2],
                                shape: [l + e / 2, e, t]
                            },
                            f = {
                                width: l + 2 * e,
                                height: s + 2 * e
                            };
                        return {
                            boxes: [u, (0, i.Z)((0, r.Z)({}, u), {
                                center: [-u.center[0], u.center[1], u.center[2]]
                            }), c, (0, i.Z)((0, r.Z)({}, c), {
                                center: [c.center[0], -c.center[1], c.center[2]]
                            })],
                            backing: (0, r.Z)({
                                centerZ: -t
                            }, f),
                            front: d ? (0, r.Z)({
                                centerZ: 0
                            }, f) : void 0
                        }
                    }), [n, m.border, m.depth, d]),
                    v = h.boxes,
                    p = h.backing,
                    x = h.front,
                    g = (0, l.useState)(),
                    q = g[0],
                    b = g[1];
                return (0, o.jsxs)(o.Fragment, {
                    children: [(0, o.jsx)(c.Z, {
                        config: m.material,
                        handleMaterialSet: b
                    }), (0, o.jsxs)("group", {
                        "rotation-y": f,
                        children: [v.map((function(e, t) {
                            return (0, o.jsx)("mesh", {
                                "position-x": e.center[0],
                                "position-y": e.center[1],
                                "position-z": e.center[2],
                                material: q,
                                children: (0, o.jsx)("boxBufferGeometry", {
                                    attach: "geometry",
                                    args: e.shape
                                })
                            }, t)
                        })), (0, o.jsx)("mesh", {
                            "position-z": p.centerZ,
                            "rotation-y": Math.PI,
                            material: q,
                            children: (0, o.jsx)("planeBufferGeometry", {
                                attach: "geometry",
                                args: [p.width, p.height]
                            })
                        }), x && (0, o.jsx)("mesh", {
                            "position-z": x.centerZ,
                            material: q,
                            children: (0, o.jsx)("planeBufferGeometry", {
                                attach: "geometry",
                                args: [x.width, x.height]
                            })
                        })]
                    })]
                })
            }
        },
        63441: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return A
                },
                generateMaterialConfig: function() {
                    return M
                }
            });
            var r = n(85893),
                i = n(67294),
                a = n(99477),
                o = n(21169),
                l = n(51442),
                s = n(86704),
                u = n(20390),
                c = n(25784),
                d = n(68624),
                f = n(51438),
                m = n(14924),
                h = n(82670),
                v = function e(t, n, r) {
                    (0, f.Z)(this, e), (0, m.Z)(this, "dot2", (function(e, t) {
                        return this.x * e + this.y * t
                    })), (0, m.Z)(this, "dot3", (function(e, t, n) {
                        return this.x * e + this.y * t + this.z * n
                    })), this.x = t, this.y = n, this.z = r
                },
                p = [new v(1, 1, 0), new v(-1, 1, 0), new v(1, -1, 0), new v(-1, -1, 0), new v(1, 0, 1), new v(-1, 0, 1), new v(1, 0, -1), new v(-1, 0, -1), new v(0, 1, 1), new v(0, -1, 1), new v(0, 1, -1), new v(0, -1, -1)],
                x = [151, 160, 137, 91, 90, 15, 131, 13, 201, 95, 96, 53, 194, 233, 7, 225, 140, 36, 103, 30, 69, 142, 8, 99, 37, 240, 21, 10, 23, 190, 6, 148, 247, 120, 234, 75, 0, 26, 197, 62, 94, 252, 219, 203, 117, 35, 11, 32, 57, 177, 33, 88, 237, 149, 56, 87, 174, 20, 125, 136, 171, 168, 68, 175, 74, 165, 71, 134, 139, 48, 27, 166, 77, 146, 158, 231, 83, 111, 229, 122, 60, 211, 133, 230, 220, 105, 92, 41, 55, 46, 245, 40, 244, 102, 143, 54, 65, 25, 63, 161, 1, 216, 80, 73, 209, 76, 132, 187, 208, 89, 18, 169, 200, 196, 135, 130, 116, 188, 159, 86, 164, 100, 109, 198, 173, 186, 3, 64, 52, 217, 226, 250, 124, 123, 5, 202, 38, 147, 118, 126, 255, 82, 85, 212, 207, 206, 59, 227, 47, 16, 58, 17, 182, 189, 28, 42, 223, 183, 170, 213, 119, 248, 152, 2, 44, 154, 163, 70, 221, 153, 101, 155, 167, 43, 172, 9, 129, 22, 39, 253, 19, 98, 108, 110, 79, 113, 224, 232, 178, 185, 112, 104, 218, 246, 97, 228, 251, 34, 242, 193, 238, 210, 144, 12, 191, 179, 162, 241, 81, 51, 145, 235, 249, 14, 239, 107, 49, 192, 214, 31, 181, 199, 106, 157, 184, 84, 204, 176, 115, 121, 50, 45, 127, 4, 150, 254, 138, 236, 205, 93, 222, 114, 67, 29, 24, 72, 243, 141, 128, 195, 78, 66, 215, 61, 156, 180],
                g = new Array(512),
                q = new Array(512),
                b = .5 * (Math.sqrt(3) - 1),
                y = (3 - Math.sqrt(3)) / 6;

            function j(e) {
                return e * e * e * (e * (6 * e - 15) + 10)
            }

            function S(e, t, n) {
                return (1 - n) * e + n * t
            }
            var w = function(e) {
                    e > 0 && e < 1 && (e *= 65536), (e = Math.floor(e)) < 256 && (e |= e << 8);
                    for (var t = 0; t < 256; t++) {
                        var n;
                        n = 1 & t ? x[t] ^ 255 & e : x[t] ^ e >> 8 & 255, g[t] = g[t + 256] = n, q[t] = q[t + 256] = p[n % 12]
                    }
                },
                Z = function(e, t) {
                    var n, r, i = (e + t) * b,
                        a = Math.floor(e + i),
                        o = Math.floor(t + i),
                        l = (a + o) * y,
                        s = e - a + l,
                        u = t - o + l;
                    s > u ? (n = 1, r = 0) : (n = 0, r = 1);
                    var c = s - n + y,
                        d = u - r + y,
                        f = s - 1 + 2 * y,
                        m = u - 1 + 2 * y,
                        h = q[(a &= 255) + g[o &= 255]],
                        v = q[a + n + g[o + r]],
                        p = q[a + 1 + g[o + 1]],
                        x = .5 - s * s - u * u,
                        j = .5 - c * c - d * d,
                        S = .5 - f * f - m * m;
                    return 70 * ((x < 0 ? 0 : (x *= x) * x * h.dot2(s, u)) + (j < 0 ? 0 : (j *= j) * j * v.dot2(c, d)) + (S < 0 ? 0 : (S *= S) * S * p.dot2(f, m)))
                },
                F = function(e, t) {
                    var n = Math.floor(e),
                        r = Math.floor(t);
                    e -= n, t -= r;
                    var i = q[(n &= 255) + g[r &= 255]].dot2(e, t),
                        a = q[n + g[r + 1]].dot2(e, t - 1),
                        o = q[n + 1 + g[r]].dot2(e - 1, t),
                        l = q[n + 1 + g[r + 1]].dot2(e - 1, t - 1),
                        s = j(e);
                    return S(S(i, o, s), S(a, l, s), j(t))
                },
                C = {};
            C.Normalize = function(e, t) {
                    var n = C.toArray1D(e.geometry.attributes.position.array);
                    t.turbulent && C.Turbulence(n, t), t.steps > 1 && (C.Step(n, t.steps), C.Smooth(n, t)), C.Clamp(n, t), "function" === typeof t.after && t.after(n, t), C.fromArray1D(e.geometry.attributes.position.array, n), e.geometry.computeBoundingSphere(), e.geometry.computeTangents(), e.geometry.computeVertexNormals()
                }, C.NONE = 0, C.GEOMIPMAP = 1, C.GEOCLIPMAP = 2, C.POLYGONREDUCTION = 3, C.toArray2D = function(e, t) {
                    var n, r, i = new Array(t.xSegments + 1),
                        a = t.xSegments + 1,
                        o = t.ySegments + 1;
                    for (n = 0; n < a; n++)
                        for (i[n] = new Float32Array(t.ySegments + 1), r = 0; r < o; r++) i[n][r] = e[r * a + n];
                    return i
                }, C.fromArray2D = function(e, t) {
                    for (var n = 0, r = t.length; n < r; n++)
                        for (var i = 0, a = t[n].length; i < a; i++) e[i * r + n] = t[n][i]
                }, C.toArray1D = function(e) {
                    for (var t = new Float32Array(e.length / 3), n = 0, r = t.length; n < r; n++) t[n] = e[3 * n + 2];
                    return t
                }, C.fromArray1D = function(e, t) {
                    for (var n = 0, r = Math.min(e.length / 3, t.length); n < r; n++) e[3 * n + 2] = t[n]
                }, C.heightmapArray = function(e, t) {
                    var n = new Array((t.xSegments + 1) * (t.ySegments + 1));
                    return n.fill(0), t.minHeight = t.minHeight || 0, t.maxHeight = "undefined" === typeof t.maxHeight ? 1 : t.maxHeight, t.stretch = t.stretch || !1, e(n, t), C.Clamp(n, t), n
                }, C.Linear = function(e) {
                    return e
                }, C.EaseIn = function(e) {
                    return e * e
                }, C.EaseOut = function(e) {
                    return -e * (e - 2)
                }, C.EaseInOut = function(e) {
                    return e * e * (3 - 2 * e)
                }, C.InEaseOut = function(e) {
                    var t = 2 * e - 1;
                    return .5 * t * t * t + .5
                }, C.EaseInWeak = function(e) {
                    return Math.pow(e, 1.55)
                }, C.EaseInStrong = function(e) {
                    return e * e * e * e * e * e * e
                }, C.fromHeightmap = function(e, t) {
                    var n = document.createElement("canvas"),
                        r = n.getContext("2d"),
                        i = t.ySegments + 1,
                        a = t.xSegments + 1,
                        o = t.maxHeight - t.minHeight;
                    n.width = a, n.height = i, r.drawImage(t.heightmap, 0, 0, n.width, n.height);
                    for (var l = r.getImageData(0, 0, n.width, n.height).data, s = 0; s < i; s++)
                        for (var u = 0; u < a; u++) {
                            var c = s * a + u,
                                d = 4 * c;
                            e[c] = (l[d] + l[d + 1] + l[d + 2]) / 765 * o + t.minHeight
                        }
                }, C.toHeightmap = function(e, t) {
                    var n = "undefined" !== typeof t.maxHeight,
                        r = "undefined" !== typeof t.minHeight,
                        i = n ? t.maxHeight : -1 / 0,
                        a = r ? t.minHeight : 1 / 0;
                    if (!n || !r) {
                        for (var o = i, l = a, s = 2, u = e.length; s < u; s += 3) e[s] > o && (o = e[s]), e[s] < l && (l = e[s]);
                        n || (i = o), r || (a = l)
                    }
                    var c = (0, h.Z)(t.heightmap, HTMLCanvasElement) ? t.heightmap : document.createElement("canvas"),
                        d = c.getContext("2d"),
                        f = t.ySegments + 1,
                        m = t.xSegments + 1,
                        v = i - a;
                    c.width = m, c.height = f;
                    for (var p = d.createImageData(c.width, c.height), x = p.data, g = 0; g < f; g++)
                        for (var q = 0; q < m; q++) {
                            var b = g * m + q,
                                y = 4 * b;
                            x[y] = x[y + 1] = x[y + 2] = Math.round((e[3 * b + 2] - a) / v * 255), x[y + 3] = 255
                        }
                    return d.putImageData(p, 0, 0), c
                }, C.Clamp = function(e, t) {
                    var n, r = 1 / 0,
                        i = -1 / 0,
                        a = e.length;
                    for (t.easing = t.easing || C.Linear, n = 0; n < a; n++) e[n] < r && (r = e[n]), e[n] > i && (i = e[n]);
                    var o = i - r,
                        l = "number" !== typeof t.maxHeight ? i : t.maxHeight,
                        s = "number" !== typeof t.minHeight ? r : t.minHeight,
                        u = t.stretch ? l : i < l ? i : l,
                        c = t.stretch ? s : r > s ? r : s,
                        d = u - c;
                    for (u < c && (d = (u = l) - c), n = 0; n < a; n++) e[n] = t.easing((e[n] - r) / o) * d + s
                }, C.Edges = function(e, t, n, r, i, a) {
                    var o, l, s, u, c, d = Math.floor(r / (t.xSize / t.xSegments)) || 1,
                        f = Math.floor(r / (t.ySize / t.ySegments)) || 1,
                        m = n ? t.maxHeight : t.minHeight,
                        h = n ? Math.max : Math.min,
                        v = t.xSegments + 1,
                        p = t.ySegments + 1;
                    for (i = i || C.EaseInOut, "object" !== typeof a && (a = {
                            top: !0,
                            bottom: !0,
                            left: !0,
                            right: !0
                        }), o = 0; o < v; o++)
                        for (l = 0; l < f; l++) s = i(1 - l / f), u = l * v + o, c = (t.ySegments - l) * v + o, a.top && (e[u] = h(e[u], (m - e[u]) * s + e[u])), a.bottom && (e[c] = h(e[c], (m - e[c]) * s + e[c]));
                    for (o = 0; o < p; o++)
                        for (l = 0; l < d; l++) s = i(1 - l / d), u = o * v + l, c = (t.ySegments - o) * v + (t.xSegments - l), a.left && (e[u] = h(e[u], (m - e[u]) * s + e[u])), a.right && (e[c] = h(e[c], (m - e[c]) * s + e[c]));
                    C.Clamp(e, {
                        maxHeight: t.maxHeight,
                        minHeight: t.minHeight,
                        stretch: !0
                    })
                }, C.RadialEdges = function(e, t, n, r, i) {
                    var a, o, l, s, u, c = n ? t.maxHeight : t.minHeight,
                        d = n ? Math.max : Math.min,
                        f = t.xSegments + 1,
                        m = .5 * f,
                        h = .5 * (t.ySegments + 1),
                        v = t.xSize / t.xSegments,
                        p = t.ySize / t.ySegments,
                        x = .5 * Math.min(t.xSize, t.ySize) - r;
                    for (a = 0; a < f; a++)
                        for (o = 0; o < h; o++) s = o * f + a, (u = Math.min(x, Math.sqrt((m - a) * v * (m - a) * v + (h - o) * p * (h - o) * p) - r)) < 0 || (l = i(u / x), e[s] = d(e[s], (c - e[s]) * l + e[s]), e[s = (t.ySegments - o) * f + a] = d(e[s], (c - e[s]) * l + e[s]))
                }, C.Smooth = function(e, t, n) {
                    for (var r = new Float32Array(e.length), i = 0, a = t.xSegments + 1, o = t.ySegments + 1; i < a; i++)
                        for (var l = 0; l < o; l++) {
                            for (var s = 0, u = 0, c = -1; c <= 1; c++)
                                for (var d = -1; d <= 1; d++) {
                                    var f = (l + c) * a + i + d;
                                    "undefined" !== typeof e[f] && i + d >= 0 && l + c >= 0 && i + d < a && l + c < o && (s += e[f], u++)
                                }
                            r[l * a + i] = s / u
                        }
                    for (var m = 1 / (1 + (n = n || 0)), h = 0, v = e.length; h < v; h++) e[h] = (r[h] + e[h] * n) * m
                }, C.SmoothMedian = function(e, t) {
                    for (var n = new Float32Array(e.length), r = [], i = [], a = function(e, t) {
                            return r[e] - r[t]
                        }, o = 0, l = t.xSegments + 1, s = t.ySegments + 1; o < l; o++)
                        for (var u = 0; u < s; u++) {
                            r.length = 0, i.length = 0;
                            for (var c = -1; c <= 1; c++)
                                for (var d = -1; d <= 1; d++) {
                                    var f = (u + c) * l + o + d;
                                    "undefined" !== typeof e[f] && o + d >= 0 && u + c >= 0 && o + d < l && u + c < s && (r.push(e[f]), i.push(f))
                                }
                            i.sort(a);
                            var m, h = Math.floor(.5 * i.length);
                            m = i.length % 2 === 1 ? e[i[h]] : .5 * (e[i[h - 1]] + e[i[h]]), n[u * l + o] = m
                        }
                    for (var v = 0, p = e.length; v < p; v++) e[v] = n[v]
                }, C.SmoothConservative = function(e, t, n) {
                    for (var r = new Float32Array(e.length), i = 0, a = t.xSegments + 1, o = t.ySegments + 1; i < a; i++)
                        for (var l = 0; l < o; l++) {
                            for (var s = -1 / 0, u = 1 / 0, c = -1; c <= 1; c++)
                                for (var d = -1; d <= 1; d++) {
                                    var f = (l + c) * a + i + d;
                                    "undefined" !== typeof e[f] && c && d && i + d >= 0 && l + c >= 0 && i + d < a && l + c < o && (e[f] < u && (u = e[f]), e[f] > s && (s = e[f]))
                                }
                            var m = l * a + i;
                            if ("number" === typeof n) {
                                var h = .5 * (s - u),
                                    v = u + h;
                                s = v + h * n, u = v - h * n
                            }
                            r[m] = e[m] > s ? s : e[m] < u ? u : e[m]
                        }
                    for (var p = 0, x = e.length; p < x; p++) e[p] = r[p]
                }, C.Step = function(e, t) {
                    var n = 0,
                        r = 0,
                        i = e.length,
                        a = Math.floor(i / t),
                        o = new Array(i),
                        l = new Array(t);
                    for ("undefined" === typeof t && (t = Math.floor(Math.pow(.5 * i, .25))), n = 0; n < i; n++) o[n] = e[n];
                    for (o.sort((function(e, t) {
                            return e - t
                        })), n = 0; n < t; n++) {
                        var s = o.slice(n * a, (n + 1) * a),
                            u = 0,
                            c = s.length;
                        for (r = 0; r < c; r++) u += s[r];
                        l[n] = {
                            min: s[0],
                            max: s[s.length - 1],
                            avg: u / c
                        }
                    }
                    for (n = 0; n < i; n++) {
                        var d = e[n];
                        for (r = 0; r < t; r++)
                            if (d >= l[r].min && d <= l[r].max) {
                                e[n] = l[r].avg;
                                break
                            }
                    }
                }, C.Turbulence = function(e, t) {
                    for (var n = t.maxHeight - t.minHeight, r = 0, i = e.length; r < i; r++) e[r] = t.minHeight + Math.abs(2 * (e[r] - t.minHeight) - n)
                }, C.MultiPass = function(e, t, n) {
                    var r = {};
                    for (var i in t) t.hasOwnProperty(i) && (r[i] = t[i]);
                    for (var a = t.maxHeight - t.minHeight, o = 0, l = n.length; o < l; o++) {
                        var s = .5 * (a - a * ("undefined" === typeof n[o].amplitude ? 1 : n[o].amplitude));
                        r.maxHeight = t.maxHeight - s, r.minHeight = t.minHeight + s, r.frequency = "undefined" === typeof n[o].frequency ? t.frequency : n[o].frequency, n[o].method(e, r)
                    }
                }, C.Curve = function(e, t, n) {
                    for (var r = .5 * (t.maxHeight - t.minHeight), i = t.frequency / (Math.min(t.xSegments, t.ySegments) + 1), a = 0, o = t.xSegments + 1, l = t.ySegments + 1; a < o; a++)
                        for (var s = 0; s < l; s++) e[s * o + a] += n(a * i, s * i) * r
                }, C.Cosine = function(e, t) {
                    for (var n = .5 * (t.maxHeight - t.minHeight), r = t.frequency * Math.PI / (Math.min(t.xSegments, t.ySegments) + 1), i = Math.random() * Math.PI * 2, a = 0, o = t.xSegments + 1; a < o; a++)
                        for (var l = 0, s = t.ySegments + 1; l < s; l++) e[l * o + a] += n * (Math.cos(a * r + i) + Math.cos(l * r + i))
                }, C.CosineLayers = function(e, t) {
                    C.MultiPass(e, t, [{
                        method: C.Cosine,
                        frequency: 2.5
                    }, {
                        method: C.Cosine,
                        amplitude: .1,
                        frequency: 12
                    }, {
                        method: C.Cosine,
                        amplitude: .05,
                        frequency: 15
                    }, {
                        method: C.Cosine,
                        amplitude: .025,
                        frequency: 20
                    }])
                }, C.DiamondSquare = function(e, t) {
                    var n, r, i = a.Math.ceilPowerOfTwo(Math.max(t.xSegments, t.ySegments) + 1),
                        o = i + 1,
                        l = [],
                        s = t.maxHeight - t.minHeight,
                        u = t.xSegments + 1,
                        c = t.ySegments + 1;
                    for (n = 0; n <= i; n++) l[n] = new Float64Array(i + 1);
                    for (var d = i; d >= 2; d /= 2) {
                        var f, m, h, v, p = Math.round(.5 * d),
                            x = Math.round(d);
                        for (s /= 2, f = 0; f < i; f += x)
                            for (m = 0; m < i; m += x) v = Math.random() * s * 2 - s, h = l[f][m] + l[f + x][m] + l[f][m + x] + l[f + x][m + x], h *= .25, l[f + p][m + p] = h + v;
                        for (f = 0; f < i; f += p)
                            for (m = (f + p) % d; m < i; m += d) v = Math.random() * s * 2 - s, h = l[(f - p + o) % o][m] + l[(f + p) % o][m] + l[f][(m + p) % o] + l[f][(m - p + o) % o], h *= .25, h += v, l[f][m] = h, 0 === f && (l[i][m] = h), 0 === m && (l[f][i] = h)
                    }
                    for (n = 0; n < u; n++)
                        for (r = 0; r < c; r++) e[r * u + n] += l[n][r]
                }, C.Fault = function(e, t) {
                    for (var n = Math.sqrt(t.xSegments * t.xSegments + t.ySegments * t.ySegments), r = n * t.frequency, i = .5 * (t.maxHeight - t.minHeight) / r, a = Math.min(t.xSize / t.xSegments, t.ySize / t.ySegments) * t.frequency, o = 0; o < r; o++)
                        for (var l = Math.random(), s = Math.sin(l * Math.PI * 2), u = Math.cos(l * Math.PI * 2), c = Math.random() * n - .5 * n, d = 0, f = t.xSegments + 1; d < f; d++)
                            for (var m = 0, h = t.ySegments + 1; m < h; m++) {
                                var v = s * d + u * m - c;
                                v > a ? e[m * f + d] += i : v < -a ? e[m * f + d] -= i : e[m * f + d] += Math.cos(v / a * Math.PI * 2) * i
                            }
                }, C.Hill = function(e, t, n, r) {
                    var i = 2 * t.frequency,
                        o = i * i * 10,
                        l = t.maxHeight - t.minHeight,
                        s = l / (i * i),
                        u = l / i,
                        c = Math.min(t.xSize, t.ySize),
                        d = c / (i * i),
                        f = c / i;
                    n = n || C.Influences.Hill;
                    for (var m = {
                            x: 0,
                            y: 0
                        }, h = 0; h < o; h++) {
                        var v = Math.random() * (f - d) + d,
                            p = Math.random() * (u - s) + s;
                        m.x = Math.random(), m.y = Math.random(), "function" === typeof r && r(m), C.Influence(e, t, n, m.x, m.y, v, p, a.AdditiveBlending, C.EaseInStrong)
                    }
                }, C.HillIsland = function() {
                    var e = function(e) {
                        var t = Math.random() * Math.PI * 2;
                        e.x = .5 + Math.cos(t) * e.x * .4, e.y = .5 + Math.sin(t) * e.y * .4
                    };
                    return function(t, n, r) {
                        C.Hill(t, n, r, e)
                    }
                }(),
                function() {
                    function e(t, n, r, i, a) {
                        for (var o = r * i + n, l = 0; l < 3; l++) {
                            switch (Math.floor(8 * Math.random())) {
                                case 0:
                                    n++;
                                    break;
                                case 1:
                                    n--;
                                    break;
                                case 2:
                                    r++;
                                    break;
                                case 3:
                                    r--;
                                    break;
                                case 4:
                                    n++, r++;
                                    break;
                                case 5:
                                    n++, r--;
                                    break;
                                case 6:
                                    n--, r++;
                                    break;
                                case 7:
                                    n--, r--
                            }
                            var s = r * i + n;
                            if ("undefined" !== typeof t[s]) {
                                if (t[s] < t[o]) return void e(t, n, r, i, a)
                            } else if (Math.random() < .2) return void(t[o] += a)
                        }
                        t[o] += a
                    }
                    C.Particles = function(t, n) {
                        for (var r = Math.sqrt(n.xSegments * n.xSegments + n.ySegments * n.ySegments) * n.frequency * 300, i = n.xSegments + 1, a = (n.maxHeight - n.minHeight) / r * 1e3, o = Math.floor(Math.random() * n.xSegments), l = Math.floor(Math.random() * n.ySegments), s = .2 * Math.random() - .1, u = .2 * Math.random() - .1, c = 0; c < r; c++) {
                            e(t, o, l, i, a);
                            var d = Math.random() * Math.PI * 2;
                            c % 1e3 === 0 && (s = .2 * Math.random() - .1, u = .2 * Math.random() - .1), c % 100 === 0 && (o = Math.floor(n.xSegments * (.5 + s) + Math.cos(d) * Math.random() * n.xSegments * (.5 - Math.abs(s))), l = Math.floor(n.ySegments * (.5 + u) + Math.sin(d) * Math.random() * n.ySegments * (.5 - Math.abs(u))))
                        }
                    }
                }(), C.Perlin = function(e, t) {
                    w(Math.random());
                    for (var n = .5 * (t.maxHeight - t.minHeight), r = (Math.min(t.xSegments, t.ySegments) + 1) / t.frequency, i = 0, a = t.xSegments + 1; i < a; i++)
                        for (var o = 0, l = t.ySegments + 1; o < l; o++) e[o * a + i] += F(i / r, o / r) * n
                }, C.PerlinDiamond = function(e, t) {
                    C.MultiPass(e, t, [{
                        method: C.Perlin
                    }, {
                        method: C.DiamondSquare,
                        amplitude: .75
                    }, {
                        method: function(e, t) {
                            return C.SmoothMedian(e, t)
                        }
                    }])
                }, C.PerlinLayers = function(e, t) {
                    C.MultiPass(e, t, [{
                        method: C.Perlin,
                        frequency: 1.25
                    }, {
                        method: C.Perlin,
                        amplitude: .05,
                        frequency: 2.5
                    }, {
                        method: C.Perlin,
                        amplitude: .35,
                        frequency: 5
                    }, {
                        method: C.Perlin,
                        amplitude: .15,
                        frequency: 10
                    }])
                }, C.Simplex = function(e, t) {
                    w(Math.random());
                    for (var n = .5 * (t.maxHeight - t.minHeight), r = 2 * (Math.min(t.xSegments, t.ySegments) + 1) / t.frequency, i = 0, a = t.xSegments + 1; i < a; i++)
                        for (var o = 0, l = t.ySegments + 1; o < l; o++) e[o * a + i] += Z(i / r, o / r) * n
                }, C.SimplexLayers = function(e, t) {
                    C.MultiPass(e, t, [{
                        method: C.Simplex,
                        frequency: 1.25
                    }, {
                        method: C.Simplex,
                        amplitude: .5,
                        frequency: 2.5
                    }, {
                        method: C.Simplex,
                        amplitude: .25,
                        frequency: 5
                    }, {
                        method: C.Simplex,
                        amplitude: .125,
                        frequency: 10
                    }, {
                        method: C.Simplex,
                        amplitude: .0625,
                        frequency: 20
                    }])
                },
                function() {
                    var e = function(e, t, n, r, i, a) {
                        if (!(n > r)) {
                            var o = 0,
                                l = 0,
                                s = r,
                                u = r,
                                c = Math.floor(r / n),
                                d = -c,
                                f = -c;
                            for (o = 0; o <= s; o += c) {
                                for (l = 0; l <= u; l += c) {
                                    var m = l * s + o;
                                    if (a[m] = Math.random() * i, !(d < 0 && f < 0)) {
                                        for (var h = a[m], v = a[l * s + (o - c)] || h, p = a[(l - c) * s + o] || h, x = a[(l - c) * s + (o - c)] || h, g = d; g < o; g++)
                                            for (var q = f; q < l; q++)
                                                if (g !== d || q !== f) {
                                                    var b = q * s + g;
                                                    if (!(b < 0)) {
                                                        var y = (g - d) / c,
                                                            j = (q - f) / c,
                                                            S = y * p + (1 - y) * x,
                                                            w = y * h + (1 - y) * v;
                                                        a[b] = j * w + (1 - j) * S
                                                    }
                                                } f = l
                                    }
                                }
                                d = o, f = -c
                            }
                            for (o = 0, s = t.xSegments + 1; o < s; o++)
                                for (l = 0, u = t.ySegments + 1; l < u; l++) {
                                    var Z = l * r + o;
                                    e[l * s + o] += a[Z]
                                }
                        }
                    };
                    C.Value = function(t, n) {
                        for (var r = a.Math.ceilPowerOfTwo(Math.max(n.xSegments, n.ySegments) + 1), i = new Float64Array((r + 1) * (r + 1)), o = n.maxHeight - n.minHeight, l = 2; l < 7; l++) e(t, n, Math.pow(2, l), r, o * Math.pow(2, 2.4 - 1.2 * l), i);
                        C.Clamp(t, {
                            maxHeight: n.maxHeight,
                            minHeight: n.minHeight,
                            stretch: !0
                        })
                    }
                }(), C.Weierstrass = function(e, t) {
                    for (var n = .5 * (t.maxHeight - t.minHeight), r = Math.random() < .5 ? 1 : -1, i = Math.random() < .5 ? 1 : -1, a = .5 + 1 * Math.random(), o = .5 + 1 * Math.random(), l = .025 + .1 * Math.random(), s = 2 * Math.random() - 1, u = .5 + 1 * Math.random(), c = .5 + 1 * Math.random(), d = .025 + .1 * Math.random(), f = 2 * Math.random() - 1, m = 0, h = t.xSegments + 1; m < h; m++)
                        for (var v = 0, p = t.ySegments + 1; v < p; v++) {
                            for (var x = 0, g = 0; g < 20; g++) {
                                var q = Math.pow(1 + a, -g) * Math.sin(Math.pow(1 + o, g) * (m + .25 * Math.cos(v) + s * v) * l),
                                    b = Math.pow(1 + u, -g) * Math.sin(Math.pow(1 + c, g) * (v + .25 * Math.cos(m) + f * m) * d);
                                x -= Math.exp(r * q * q + i * b * b)
                            }
                            e[v * h + m] += x * n
                        }
                    C.Clamp(e, t)
                }, C.generateBlendedMaterial = function(e, t) {
                    for (var n = function(e) {
                            return e === (0 | e) ? e + ".0" : e + ""
                        }, r = "", i = "", o = e[0].texture.repeat, l = e[0].texture.offset, s = 0, u = e.length; s < u; s++)
                        if (e[s].texture.wrapS = e[s].wrapT = a.RepeatWrapping, e[s].texture.needsUpdate = !0, r += "uniform sampler2D texture_" + s + ";\n", 0 !== s) {
                            var c = e[s].levels,
                                d = e[s].glsl,
                                f = "undefined" !== typeof c,
                                m = e[s].texture.repeat,
                                h = e[s].texture.offset;
                            if (f) {
                                c[1] - c[0] < 1 && (c[0] -= 1), c[3] - c[2] < 1 && (c[3] += 1);
                                for (var v = 0; v < c.length; v++) c[v] = n(c[v])
                            }
                            var p = f ? "1.0 - smoothstep(" + c[0] + ", " + c[1] + ", vPosition.z) + smoothstep(" + c[2] + ", " + c[3] + ", vPosition.z)" : d;
                            i += "        color = mix( texture2D( texture_" + s + ", MyvUv * vec2( " + n(m.x) + ", " + n(m.y) + " ) + vec2( " + n(h.x) + ", " + n(h.y) + " ) ), color, max(min(" + p + ", 1.0), 0.0));\n"
                        } var x = "float slope = acos(max(min(dot(myNormal, vec3(0.0, 0.0, 1.0)), 1.0), -1.0));\n    diffuseColor = vec4( diffuse, opacity );\n    vec4 color = texture2D( texture_0, MyvUv * vec2( " + n(o.x) + ", " + n(o.y) + " ) + vec2( " + n(l.x) + ", " + n(l.y) + " ) ); // base\n" + i + "    diffuseColor = color;\n",
                        g = r + "\nvarying vec2 MyvUv;\nvarying vec3 vPosition;\nvarying vec3 myNormal;\n",
                        q = t || new a.MeshLambertMaterial;
                    return q.onBeforeCompile = function(t) {
                        t.vertexShader = t.vertexShader.replace("#include <common>", "varying vec2 MyvUv;\nvarying vec3 vPosition;\nvarying vec3 myNormal;\n#include <common>"), t.vertexShader = t.vertexShader.replace("#include <uv_vertex>", "MyvUv = uv;\nvPosition = position;\nmyNormal = normal;\n#include <uv_vertex>"), t.fragmentShader = t.fragmentShader.replace("#include <common>", g + "\n#include <common>"), t.fragmentShader = t.fragmentShader.replace("#include <map_fragment>", x);
                        for (var n = 0, r = e.length; n < r; n++) t.uniforms["texture_" + n] = {
                            type: "t",
                            value: e[n].texture
                        }
                    }, q
                }, C.ScatterMeshes = function(e, t) {
                    if (t.mesh) {
                        t.scene || (t.scene = new a.Object3D);
                        var n = {
                            spread: .025,
                            smoothSpread: 0,
                            sizeVariance: .1,
                            randomness: Math.random,
                            maxSlope: .6283185307179586,
                            maxTilt: 1 / 0,
                            w: 0,
                            h: 0
                        };
                        for (var r in n) n.hasOwnProperty(r) && (t[r] = "undefined" === typeof t[r] ? n[r] : t[r]);
                        var i, o, l = "number" === typeof t.spread,
                            s = 1 / t.smoothSpread,
                            u = 2 * t.sizeVariance,
                            c = new a.Vector3,
                            d = new a.Vector3,
                            f = new a.Vector3,
                            m = new a.Vector3,
                            h = t.mesh.up.clone().applyAxisAngle(new a.Vector3(1, 0, 0), .5 * Math.PI);
                        l && (o = "number" === typeof(i = t.randomness()) ? Math.random : function(e) {
                            return i[e]
                        });
                        for (var v = (e = e.toNonIndexed()).attributes.position.array, p = 0; p < e.attributes.position.array.length; p += 9) {
                            c.set(v[p + 0], v[p + 1], v[p + 2]), d.set(v[p + 3], v[p + 4], v[p + 5]), f.set(v[p + 6], v[p + 7], v[p + 8]), a.Triangle.getNormal(c, d, f, m);
                            var x = !1;
                            if (l) {
                                var g = o(key);
                                g < t.spread ? x = !0 : g < t.spread + t.smoothSpread && (x = C.EaseInOut((g - t.spread) * s) * t.spread > Math.random())
                            } else x = t.spread(c, p / 9, m, p);
                            if (x) {
                                if (m.angleTo(h) > t.maxSlope) continue;
                                var q = t.mesh.clone();
                                if (q.position.addVectors(c, d).add(f).divideScalar(3), t.maxTilt > 0) {
                                    var b = q.position.clone().add(m);
                                    q.lookAt(b);
                                    var y = m.angleTo(h);
                                    if (y > t.maxTilt) {
                                        var j = t.maxTilt / y;
                                        q.rotation.x *= j, q.rotation.y *= j, q.rotation.z *= j
                                    }
                                }
                                if (q.rotation.x += .5 * Math.PI, q.rotateY(2 * Math.random() * Math.PI), t.sizeVariance) {
                                    var S = Math.random() * u - t.sizeVariance;
                                    q.scale.x = q.scale.z = 1 + S, q.scale.y += S
                                }
                                q.updateMatrix(), t.scene.add(q)
                            }
                        }
                        return t.scene
                    }
                    console.error("options.mesh is required for Terrain.ScatterMeshes but was not passed")
                }, C.ScatterHelper = function(e, t, n, r) {
                    n = n || 1, r = r || .25, t.frequency = t.frequency || 2.5;
                    var i = {};
                    for (var a in t) t.hasOwnProperty(a) && (i[a] = t[a]);
                    i.xSegments *= 2, i.stretch = !0, i.maxHeight = 1, i.minHeight = 0;
                    for (var o = C.heightmapArray(e, i), l = 0, s = o.length; l < s; l++)(l % n || Math.random() > r) && (o[l] = 1);
                    return function() {
                        return o
                    }
                }, C.Influences = {
                    Mesa: function(e) {
                        return 1.25 * Math.min(.8, Math.exp(-e * e))
                    },
                    Hole: function(e) {
                        return -C.Influences.Mesa(e)
                    },
                    Hill: function(e) {
                        return e < 0 ? (e + 1) * (e + 1) * (3 - 2 * (e + 1)) : 1 - e * e * (3 - 2 * e)
                    },
                    Valley: function(e) {
                        return -C.Influences.Hill(e)
                    },
                    Dome: function(e) {
                        return -(e + 1) * (e - 1)
                    },
                    Flat: function(e) {
                        return 0
                    },
                    Volcano: function(e) {
                        return .94 - .32 * (Math.abs(2 * e) + Math.cos(2 * Math.PI * Math.abs(e) + .4))
                    }
                }, C.Influence = function(e, t, n, r, i, o, l, s, u) {
                    n = n || C.Influences.Hill, r = "undefined" === typeof r ? .5 : r, i = "undefined" === typeof i ? .5 : i, o = "undefined" === typeof o ? 64 : o, l = "undefined" === typeof l ? 64 : l, s = "undefined" === typeof s ? a.NormalBlending : s, u = u || C.EaseIn;
                    for (var c = t.xSegments + 1, d = c * r, f = (t.ySegments + 1) * i, m = t.xSize / t.xSegments, h = t.ySize / t.ySegments, v = o / m, p = o / h, x = 1 / o, g = Math.ceil(d - v), q = Math.floor(d + v), b = Math.ceil(f - p), y = Math.floor(f + p), j = g; j < q; j++)
                        for (var S = b; S < y; S++) {
                            var w = S * c + j,
                                Z = (j - d) * m,
                                F = (S - f) * h,
                                k = Math.sqrt(Z * Z + F * F),
                                _ = k * x,
                                T = Z * x,
                                M = F * x,
                                P = n(_, T, M) * l * (1 - u(_, T, M));
                            k > o || "undefined" == typeof e[w] || (s === a.AdditiveBlending ? e[w] += P : s === a.SubtractiveBlending ? e[w] -= P : s === a.MultiplyBlending ? e[w] *= P : s === a.NoBlending ? e[w] = P : s === a.NormalBlending ? e[w] = u(_, T, M) * e[w] + P : "function" === typeof s && (e[w] = s(e[w].z, P, _, T, M)))
                        }
                };
            var k = n(27844),
                _ = {
                    fileLocation: "standardAssets",
                    fileType: "stored",
                    fileName: "aerial_grass_rock_diff_2k.jpg",
                    folder: "textures/aerial_grass_rock_1k"
                },
                T = {
                    fileLocation: "standardAssets",
                    fileType: "stored",
                    fileName: "sand_01_diff_1k.jpg",
                    folder: "textures/sand_01"
                },
                M = function() {
                    return {
                        materialType: "phong",
                        color: "white",
                        textureFile: {
                            fileLocation: "standardAssets",
                            fileType: "stored",
                            fileName: "aerial_grass_rock_diff_2k.jpg",
                            folder: "textures/aerial_grass_rock_1k"
                        },
                        textureRepeatX: 16,
                        textureRepeatY: 16,
                        phong: {
                            normalMapTextureFile: {
                                fileLocation: "standardAssets",
                                fileType: "stored",
                                fileName: "aerial_grass_rock_nor_2k.jpg",
                                folder: "textures/aerial_grass_rock_1k"
                            },
                            displacementMapTextureFile: {
                                fileLocation: "standardAssets",
                                fileType: "stored",
                                fileName: "aerial_grass_rock_disp_2k.jpg",
                                folder: "textures/aerial_grass_rock_1k"
                            },
                            bumpMapScale: .3,
                            specularColor: "black"
                        }
                    }
                },
                P = {
                    Linear: C.Linear,
                    EaseIn: C.EaseIn,
                    EaseInWeak: C.EaseInWeak,
                    EaseOut: C.EaseOut,
                    EaseInOut: C.EaseInOut,
                    InEaseOut: C.InEaseOut
                },
                E = function(e) {
                    var t = e.meshesChanged,
                        n = e.config,
                        o = e.canvas,
                        l = e.material,
                        u = e.handleLoaded,
                        c = (0, i.useState)(),
                        d = c[0],
                        f = c[1];
                    return (0, i.useEffect)((function() {
                        if (l) {
                            var e, t = function(e) {
                                var t = {
                                    after: null,
                                    easing: C.Linear,
                                    heightmap: C.DiamondSquare,
                                    material: null,
                                    maxHeight: 100,
                                    minHeight: -100,
                                    optimization: C.NONE,
                                    frequency: 2.5,
                                    steps: 1,
                                    stretch: !0,
                                    turbulent: !1,
                                    xSegments: 63,
                                    xSize: 1024,
                                    ySegments: 63,
                                    ySize: 1024
                                };
                                for (var n in e = e || {}, t) t.hasOwnProperty(n) && (e[n] = "undefined" === typeof e[n] ? t[n] : e[n]);
                                e.material = e.material || new a.MeshBasicMaterial({
                                    color: 15623731
                                });
                                var r = new a.Mesh(new a.PlaneGeometry(e.xSize, e.ySize, e.xSegments, e.ySegments), e.material),
                                    i = C.toArray1D(r.geometry.attributes.position.array);
                                return (0, h.Z)(e.heightmap, HTMLCanvasElement) || (0, h.Z)(e.heightmap, Image) ? C.fromHeightmap(i, e) : "function" === typeof e.heightmap ? e.heightmap(i, e) : console.warn("An invalid value was passed for `options.heightmap`: " + e.heightmap), C.fromArray1D(r.geometry.attributes.position.array, i), C.Normalize(r, e), r
                            }({
                                heightmap: o,
                                material: l,
                                xSegments: n.widthSegments,
                                ySegments: n.heightSegments,
                                easing: (e = n.easing, e ? P[e] : void 0),
                                maxHeight: n.maxHeight || 10,
                                minHeight: n.minHeight || 0,
                                xSize: n.width || 100,
                                ySize: n.height || 100
                            });
                            return t.receiveShadow = !0, f(t),
                                function() {
                                    t.geometry.dispose()
                                }
                        }
                    }), [o, n, l]), (0, i.useEffect)((function() {
                        if (d) return n.isGround ? (d.layers.enable(s.mJ), t && t(), function() {
                            d.layers.disableAll(), t && t()
                        }) : void 0
                    }), [d, t, n.isGround]), (0, i.useLayoutEffect)((function() {
                        u && u(!!d)
                    }), [d, u]), (0, r.jsx)("group", {
                        "rotation-x": -Math.PI / 2,
                        children: d && (0, r.jsx)("primitive", {
                            object: d
                        })
                    })
                },
                I = function(e) {
                    var t = e.src,
                        n = e.setCanvasRef,
                        r = (0, l.z)(a.ImageLoader, t);
                    return (0, i.useEffect)((function() {
                        var e = document.createElement("canvas");
                        return e.width = r.width, e.height = r.height, e.setAttribute("style", "display:none"), document.body.appendChild(e), e.getContext("2d").drawImage(r, 0, 0, e.width, e.height), n(e),
                            function() {
                                document.body.removeChild(e), n(null)
                            }
                    }), [r, n]), null
                },
                A = function(e) {
                    var t = e.config,
                        n = e.handleLoaded,
                        a = (0, c.sT)(t, d.Bs),
                        l = (0, o.PP)(a.heightMapFile),
                        s = (0, o.PP)(_),
                        f = (0, o.PP)(T),
                        m = (0, i.useMemo)((function() {
                            if (s && f) return {
                                baseFileUrl: s,
                                otherTexture: {
                                    fileUrl: f,
                                    levels: [-10, 2, 7, 12]
                                }
                            }
                        }), [s, f]),
                        h = (0, i.useState)(null),
                        v = h[0],
                        p = h[1],
                        x = (0, i.useState)(),
                        g = x[0],
                        q = x[1],
                        b = (0, i.useContext)(k.l);
                    return (0, i.useEffect)((function() {
                        n && !l && n(!0)
                    }), [n, l]), l && m ? (0, r.jsxs)(r.Fragment, {
                        children: [v && g && (0, r.jsx)(E, {
                            meshesChanged: null === b || void 0 === b ? void 0 : b.meshesChanged,
                            config: a,
                            canvas: v,
                            material: g,
                            handleLoaded: n
                        }), (0, r.jsx)(i.Suspense, {
                            fallback: null,
                            children: (0, r.jsx)(I, {
                                src: l,
                                setCanvasRef: p
                            })
                        }), (0, r.jsx)(i.Suspense, {
                            fallback: null,
                            children: (0, r.jsx)(u.Z, {
                                config: a.materialConfig,
                                handleMaterialSet: q
                            })
                        })]
                    }) : null
                }
        },
        36304: function(e, t, n) {
            "use strict";
            n.d(t, {
                b: function() {
                    return a
                }
            });
            var r = n(85893),
                i = n(67294),
                a = (0, i.memo)((function(e) {
                    var t = e.elementWidth,
                        n = e.elementHeight,
                        a = e.frameConfig,
                        o = e.rotationY,
                        l = e.visible,
                        s = void 0 === l || l,
                        u = (0, i.useMemo)((function() {
                            var e = 0;
                            a && (e = a.border ? a.border : 0);
                            var r = t + 2 * e,
                                i = n + 2 * e,
                                o = .0625;
                            return new Float32Array([-r / 2, i / 2, 0, r / 2 + o, i / 2 + o, 0, -r / 2 - o, i / 2 + o, 0, -r / 2, i / 2, 0, r / 2, i / 2, 0, r / 2 + o, i / 2 + o, 0, r / 2, i / 2, 0, r / 2 + o, -i / 2 - o, 0, r / 2 + o, i / 2 + o, 0, r / 2, i / 2, 0, r / 2, -i / 2, 0, r / 2 + o, -i / 2 - o, 0, r / 2, -i / 2, 0, -r / 2 - o, -i / 2 - o, 0, r / 2 + o, -i / 2 - o, 0, r / 2, -i / 2, 0, -r / 2, -i / 2, 0, -r / 2 - o, -i / 2 - o, 0, -r / 2, -i / 2, 0, -r / 2 - o, i / 2 + o, 0, -r / 2 - o, -i / 2 - o, 0, -r / 2, -i / 2, 0, -r / 2, i / 2, 0, -r / 2 - o, i / 2 + o, 0])
                        }), [t, n, a]);
                    return (0, r.jsx)(r.Fragment, {
                        children: (0, r.jsxs)("mesh", {
                            "rotation-y": o,
                            visible: s,
                            children: [(0, r.jsx)("bufferGeometry", {
                                attach: "geometry",
                                children: (0, r.jsx)("bufferAttribute", {
                                    attach: "attributes-position",
                                    count: u.length / 3,
                                    array: u,
                                    itemSize: 3
                                })
                            }), (0, r.jsx)("meshBasicMaterial", {
                                color: "white",
                                transparent: !0,
                                opacity: .5
                            })]
                        })
                    })
                }))
        },
        27386: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                ImageDisplayMesh: function() {
                    return z
                },
                default: function() {
                    return L
                }
            });
            var r = n(47568),
                i = n(26042),
                a = n(69396),
                o = n(99534),
                l = n(34051),
                s = n.n(l),
                u = n(85893),
                c = n(67294),
                d = n(74979),
                f = n(99477),
                m = n(21169),
                h = n(51442),
                v = n(15181),
                p = n(29894),
                x = n(51438),
                g = n(28668),
                q = n(91224),
                b = n(50630),
                y = n.n(b),
                j = n(75119);

            function S(e) {
                if (!e.ok) throw new Error("HTTP ".concat(e.status, " - ").concat(e.statusText));
                return e
            }
            var w = function(e) {
                    (0, g.Z)(n, e);
                    var t = (0, q.Z)(n);

                    function n() {
                        return (0, x.Z)(this, n), t.apply(this, arguments)
                    }
                    return n.prototype.update = function() {
                        this.needsUpdate = !0
                    }, n
                }(f.Texture),
                Z = {},
                F = function() {
                    var e = (0, r.Z)(s().mark((function e(t) {
                        var n, r, i, a, o;
                        return s().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, fetch(t);
                                case 2:
                                    return S(n = e.sent), e.next = 6, n.arrayBuffer();
                                case 6:
                                    return r = e.sent, i = y()(r), (a = document.createElement("canvas")).width = i.width, a.height = i.height, e.next = 13, i.getPlayer(a.getContext("2d"), !0);
                                case 13:
                                    return o = e.sent, e.abrupt("return", {
                                        player: o,
                                        canvas: a
                                    });
                                case 15:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }(),
                C = function() {
                    function e(t) {
                        (0, x.Z)(this, e);
                        var n = (0, j.vq)(t),
                            r = (0, j.zw)(n, !0);
                        this.frames = r, this.start = 0, this.end = 0, this.dimensions = this.frames[0].dims, this.canvas = document.createElement("canvas"), this.canvas.width = this.dimensions.width, this.canvas.height = this.dimensions.height, this.ctx = this.canvas.getContext("2d"), this.currFrameIndex = 0, this.tempCanvas = document.createElement("canvas"), this.tempCtx = this.tempCanvas.getContext("2d"), this.tempCanvas.width = this.dimensions.width, this.tempCanvas.height = this.dimensions.height, this.frameImageData = this.tempCtx.createImageData(this.dimensions.width, this.dimensions.height), this.prevFrameDisposalType = 0, this.texture = new w, this.texture.format = f.RGBAFormat, this.texture.needsUpdate = !0, this.texture.image = this.canvas, this.renderFrame()
                    }
                    var t = e.prototype;
                    return t.drawPatch = function(e) {
                        this.tempCtx && this.ctx && (this.dimensions = e.dims, 2 !== this.prevFrameDisposalType && 0 !== this.currFrameIndex || this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height), this.dimensions.width === this.frameImageData.width && this.dimensions.height === this.frameImageData.height || (this.tempCanvas.width = this.dimensions.width, this.tempCanvas.height = this.dimensions.height, this.frameImageData = this.tempCtx.createImageData(this.dimensions.width, this.dimensions.height)), this.frameImageData.data.set(e.patch), this.tempCtx.putImageData(this.frameImageData, 0, 0), this.ctx.drawImage(this.tempCanvas, this.dimensions.left, this.dimensions.top))
                    }, t.renderFrame = function() {
                        var e = this;
                        if (this.ctx) {
                            this.start = (new Date).getTime();
                            var t = this.frames[this.currFrameIndex];
                            this.drawPatch(t), this.prevFrameDisposalType = t.disposalType, this.currFrameIndex++, this.currFrameIndex >= this.frames.length && (this.currFrameIndex = 0), this.end = (new Date).getTime();
                            var n = this.end - this.start;
                            this.texture.needsUpdate = !0, setTimeout((function() {
                                return e.renderFrame()
                            }), Math.max(0, Math.floor(t.delay - n)))
                        }
                    }, e
                }(),
                k = function() {
                    var e = (0, r.Z)(s().mark((function e(t) {
                        var n, r, i;
                        return s().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, fetch(t);
                                case 2:
                                    return S(n = e.sent), e.next = 6, n.arrayBuffer();
                                case 6:
                                    return r = e.sent, i = new C(r), e.abrupt("return", {
                                        canvas: i.canvas,
                                        texture: i.texture
                                    });
                                case 9:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }(),
                _ = function(e) {
                    (0, g.Z)(n, e);
                    var t = (0, q.Z)(n);

                    function n() {
                        var e;
                        return (0, x.Z)(this, n), (e = t.apply(this, arguments)).isAnimated = !0, e
                    }
                    return n.prototype.load = function(e, t, n, i) {
                        var a = this;
                        return (0, r.Z)(s().mark((function n() {
                            var r, i, o, l, u, c, d, m;
                            return s().wrap((function(n) {
                                for (;;) switch (n.prev = n.next) {
                                    case 0:
                                        if (void 0 !== a.path && (e = a.path + e), -1 === e.indexOf("imagekit.io")) {
                                            n.next = 3;
                                            break
                                        }
                                        return n.abrupt("return");
                                    case 3:
                                        if (-1 === e.indexOf(".png")) {
                                            n.next = 24;
                                            break
                                        }
                                        if (!Z[e]) {
                                            n.next = 10;
                                            break
                                        }
                                        r = Z[e].player, i = Z[e].canvas, n.next = 17;
                                        break;
                                    case 10:
                                        return n.next = 12, F(e);
                                    case 12:
                                        o = n.sent, r = o.player, i = o.canvas, console.log(o), Z[e] = {
                                            player: r,
                                            canvas: i
                                        };
                                    case 17:
                                        return (l = new w).format = f.RGBAFormat, l.needsUpdate = !0, l.image = i, r.on("frame", (function() {
                                            l.needsUpdate = !0
                                        })), t && t(l), n.abrupt("return", i);
                                    case 24:
                                        if (-1 === e.indexOf(".gif")) {
                                            n.next = 39;
                                            break
                                        }
                                        if (!Z[e]) {
                                            n.next = 31;
                                            break
                                        }
                                        return console.log("Using canvas from cache"), u = Z[e].canvas, n.abrupt("return", u);
                                    case 31:
                                        return n.next = 33, k(e);
                                    case 33:
                                        return c = n.sent, d = c.canvas, m = c.texture, Z[e] = {
                                            canvas: d
                                        }, t && t(m), n.abrupt("return", d);
                                    case 39:
                                    case "end":
                                        return n.stop()
                                }
                            }), n)
                        })))()
                    }, n
                }(f.Loader),
                T = n(82145),
                M = n(68624),
                P = n(5327),
                E = n(50682),
                I = n(35800),
                A = n(1422),
                D = n(62077),
                V = n(36277),
                R = n(25784),
                N = function(e) {
                    var t, n, r = e.imagePath,
                        i = e.config,
                        a = e.settings,
                        o = e.frame,
                        l = e.handleLoaded,
                        s = (0, c.useMemo)((function() {
                            return i.isAnimated ? _ : f.TextureLoader
                        }), [i.isAnimated]),
                        d = (0, h.z)(s, r),
                        m = (0, c.useState)(),
                        v = m[0],
                        x = m[1];
                    (0, c.useEffect)((function() {
                        if (d) {
                            var e = d.image,
                                t = e.height,
                                n = e.width;
                            x(n / t), l && l(!0, {
                                width: n,
                                height: t
                            })
                        } else l && l(!1)
                    }), [d, l]);
                    var g = (0, p.L)(v, i.width, M.vz),
                        q = (0, c.useMemo)((function() {
                            return g ? [g.width, g.height] : null
                        }), [g]),
                        b = (0, c.useMemo)((function() {
                            return o.hasFrame ? f.FrontSide : f.DoubleSide
                        }), [o.hasFrame]),
                        y = (0, c.useContext)(V.u),
                        j = a.geometry,
                        S = "plane" === j.mediaGeometryType || "curved" === j.mediaGeometryType || !j.mediaGeometryModel,
                        w = "3d geometry" === j.mediaGeometryType && !!j.mediaGeometryModel;
                    return S ? (0, u.jsx)(u.Fragment, {
                        children: (0, u.jsx)("group", {
                            "rotation-y": i.legacyRotation ? Math.PI : 0,
                            children: (0, u.jsx)(E.Z, {
                                planeDimensions: {
                                    width: null === q || void 0 === q ? void 0 : q[0],
                                    height: null === q || void 0 === q ? void 0 : q[1]
                                },
                                texture: d,
                                side: b,
                                frameConfig: o.frameConfig,
                                hasFrame: o.hasFrame,
                                transparent: i.transparent,
                                curve: null === (t = j.mediaGeometryCurve) || void 0 === t ? void 0 : t.curveAngle,
                                curveOrientation: null === (n = j.mediaGeometryCurve) || void 0 === n ? void 0 : n.orientation,
                                curved: "curved" === j.mediaGeometryType
                            })
                        })
                    }) : w ? (0, u.jsx)(D.G$, {
                        model: j.mediaGeometryModel,
                        texture: d,
                        serverTimeOffset$: null === y || void 0 === y ? void 0 : y.serverTimeOffset$
                    }) : null
                },
                B = function(e) {
                    var t, n, r = e.config,
                        i = (e.displayConfig, e.handleLoaded),
                        a = (0, c.useMemo)((function() {
                            return [1, 1]
                        }), []);
                    return (0, c.useLayoutEffect)((function() {
                        i && i(!0)
                    }), [i]), (0, u.jsx)("group", {
                        "rotation-y": r.legacyRotation ? Math.PI : 0,
                        children: (0, u.jsx)(E.Z, {
                            planeDimensions: {
                                width: null === a || void 0 === a ? void 0 : a[0],
                                height: null === a || void 0 === a ? void 0 : a[1]
                            },
                            texture: void 0,
                            side: f.FrontSide,
                            frameConfig: null === (t = r.frame) || void 0 === t ? void 0 : t.frameConfig,
                            hasFrame: null === (n = r.frame) || void 0 === n ? void 0 : n.hasFrame,
                            transparent: r.transparent,
                            curved: !1
                        })
                    })
                },
                z = function(e) {
                    var t = e.config,
                        n = e.settings,
                        o = function(e, t) {
                            var n = (0, c.useState)({
                                    path: null,
                                    loaded: !1
                                }),
                                i = n[0],
                                a = n[1];
                            return (0, c.useEffect)((function() {
                                (0, r.Z)(s().mark((function n() {
                                    var r;
                                    return s().wrap((function(n) {
                                        for (;;) switch (n.prev = n.next) {
                                            case 0:
                                                if (!e.imageFile) {
                                                    n.next = 13;
                                                    break
                                                }
                                                if (!e.isAnimated) {
                                                    n.next = 10;
                                                    break
                                                }
                                                return n.t0 = a, n.next = 5, (0, m.gN)(e.imageFile);
                                            case 5:
                                                n.t1 = n.sent, n.t2 = {
                                                    path: n.t1,
                                                    loaded: !0
                                                }, (0, n.t0)(n.t2), n.next = 11;
                                                break;
                                            case 10:
                                                (0, m.U_)(e.imageFile) ? (r = (0, T.nt)(e.imageFile, {
                                                    maxWidth: (null === t || void 0 === t ? void 0 : t.inSpaceResolution) || M.q,
                                                    quality: (null === t || void 0 === t ? void 0 : t.inSpaceQuality) || M.gG
                                                }), a({
                                                    path: r,
                                                    loaded: !0
                                                })) : a({
                                                    path: e.imageFile.url,
                                                    loaded: !0
                                                });
                                            case 11:
                                                n.next = 14;
                                                break;
                                            case 13:
                                                a({
                                                    path: (0, M.t$)("Image"),
                                                    loaded: !0
                                                });
                                            case 14:
                                            case "end":
                                                return n.stop()
                                        }
                                    }), n)
                                })))()
                            }), [null === t || void 0 === t ? void 0 : t.inSpaceQuality, null === t || void 0 === t ? void 0 : t.inSpaceResolution, e.imageFile, e.isAnimated]), i
                        }(t, n),
                        l = o.path,
                        d = o.loaded,
                        f = (0, c.useState)(!1),
                        h = f[0],
                        v = f[1];
                    (0, c.useEffect)((function() {
                        v(!0), setTimeout((function() {
                            v(!1)
                        }), 100)
                    }), [n.geometry.mediaGeometryModel, n.geometry.mediaGeometryType]);
                    var p = e.handleLoaded;
                    return (0, c.useEffect)((function() {
                        !l && d && p && p(!0)
                    }), [l, d, p]), !l || h ? null : (0, u.jsx)(I.ErrorBoundary, {
                        fallback: (0, u.jsx)(B, (0, a.Z)((0, i.Z)({}, e), {
                            displayConfig: n
                        })),
                        children: (0, u.jsx)(c.Suspense, {
                            fallback: null,
                            children: (0, u.jsx)(N, (0, a.Z)((0, i.Z)({}, e), {
                                settings: n,
                                imagePath: l,
                                frame: e.frame
                            }))
                        })
                    })
                },
                L = function(e) {
                    var t, n = e.elementId,
                        r = e.config,
                        l = (0, o.Z)(e, ["elementId", "config"]),
                        s = (0, A.$v)(n, r),
                        c = (0, R.Of)(r.settings, P.getDefaultImageSettings),
                        f = (0, R.Of)(r.frame, P.defaultFrame),
                        m = r.offsetFromBack && (null === f || void 0 === f ? void 0 : f.hasFrame) && (null === f || void 0 === f || null === (t = f.frameConfig) || void 0 === t ? void 0 : t.depth) || 0;
                    return (0, u.jsxs)(A.Z9.Provider, {
                        value: s,
                        children: [(0, u.jsx)("group", {
                            "position-z": m,
                            children: (0, u.jsx)(z, (0, a.Z)((0, i.Z)({}, l), {
                                settings: c,
                                config: r,
                                frame: f
                            }))
                        }), !(null === s || void 0 === s ? void 0 : s.disableInteractivity) && r.interactable && r.interactableConfig && (0, u.jsx)(v.Z, {
                            elementType: d.H.image,
                            elementFile: r.imageFile,
                            interactionConfig: r.interactableConfig
                        })]
                    })
                }
        },
        50682: function(e, t, n) {
            "use strict";
            var r = n(26042),
                i = n(69396),
                a = n(99534),
                o = n(85893),
                l = n(16609),
                s = n(72328),
                u = n(36304),
                c = n(32069),
                d = n(99477),
                f = n(67294),
                m = n(65449),
                h = n(1422),
                v = n(9923),
                p = n(68624),
                x = n(41230),
                g = function() {
                    var e = (0, f.useState)(!1),
                        t = e[0],
                        n = e[1],
                        r = (0, f.useRef)(null);
                    return (0, m.useSpring)({
                        from: {
                            color: "white"
                        },
                        to: {
                            color: "gray"
                        },
                        reverse: t,
                        onRest: function() {
                            return n((function(e) {
                                return !e
                            }))
                        },
                        onChange: function(e) {
                            var t = e.value.color;
                            r.current && (r.current.color = t)
                        }
                    }), (0, o.jsx)("meshBasicMaterial", {
                        ref: r
                    })
                },
                q = function(e) {
                    var t = e.texture,
                        n = e.side,
                        r = e.transparent,
                        i = e.frameConfig,
                        a = e.hasFrame,
                        d = e.loading,
                        m = e.dimensionsArray,
                        v = e.legacyRotation,
                        p = (0, f.useContext)(h.Z9) || {},
                        q = p.pointerOver$,
                        b = p.enablePointerOverLayer$,
                        y = (0, s.Hq)(q, !1),
                        j = (0, l.E)(b),
                        S = (0, x.TW)(v);
                    return (0, o.jsxs)(o.Fragment, {
                        children: [(0, o.jsx)("mesh", {
                            ref: j,
                            "rotation-y": S,
                            children: m && (0, o.jsxs)(o.Fragment, {
                                children: [(0, o.jsx)("planeBufferGeometry", {
                                    attach: "geometry",
                                    args: m
                                }), !d && t && (0, o.jsx)("meshBasicMaterial", {
                                    attach: "material",
                                    map: t,
                                    side: n,
                                    transparent: r
                                }), d && (0, o.jsx)(g, {})]
                            })
                        }), a && m && i && (0, o.jsx)(c.Z, {
                            config: i,
                            imageDimensions: m,
                            boxFront: r,
                            rotationY: S
                        }), m && (0, o.jsx)(u.b, {
                            elementWidth: m[0],
                            elementHeight: m[1],
                            frameConfig: i && a ? i : void 0,
                            rotationY: S,
                            visible: y
                        })]
                    })
                },
                b = function(e) {
                    for (var t = e.attributes.uv, n = 0; n < t.count; n++) {
                        var r = t.getX(n),
                            i = t.getY(n);
                        t.setXY(n, i, r)
                    }
                    t.needsUpdate = !0
                },
                y = function(e) {
                    for (var t = e.attributes.uv, n = 0; n < t.count; n++) {
                        var r = t.getX(n),
                            i = t.getY(n);
                        t.setXY(n, 1 - r, i)
                    }
                    t.needsUpdate = !0
                },
                j = function(e) {
                    var t = e.texture,
                        n = (e.side, e.transparent),
                        a = e.frameConfig,
                        s = e.hasFrame,
                        u = e.loading,
                        c = e.dimensionsArray,
                        m = e.curve,
                        p = e.curveOrientation,
                        x = ((0, f.useContext)(h.Z9) || {}).enablePointerOverLayer$,
                        q = (0, l.E)(x),
                        j = (0, f.useState)(),
                        S = j[0],
                        w = j[1],
                        Z = s ? (null === a || void 0 === a ? void 0 : a.depth) || 0 : void 0,
                        F = "vertical" === p;
                    (0, f.useEffect)((function() {
                        var e = c[F ? 1 : 0],
                            t = c[F ? 0 : 1],
                            n = (0, v.Ht)(m),
                            r = Math.PI / 2 + (Math.PI - n) / 2,
                            i = 2 * Math.PI * (n / (2 * Math.PI)),
                            a = t * i / e,
                            o = t / a,
                            l = o,
                            s = {
                                radiusTop: l,
                                radiusBottom: l,
                                height: a * o,
                                radialSegments: 64,
                                heightSegments: 1,
                                openEnded: !0,
                                thetaStart: r,
                                thetaLength: n
                            },
                            u = [s.radiusTop, s.radiusBottom, s.height, s.radialSegments, s.heightSegments, s.openEnded, s.thetaStart, s.thetaLength],
                            d = l * Math.sin(i / 2),
                            f = l - (l - Math.sqrt(l * l - d * d)),
                            h = F ? -Math.PI / 2 : 0;
                        w({
                            cylinder: u,
                            positionZ: f,
                            rotationZ: h,
                            uvMapReady: !1
                        })
                    }), [c, m, Z, F]);
                    var C = (0, f.useState)(null),
                        k = C[0],
                        _ = C[1];
                    return (0, f.useEffect)((function() {
                        if (k) {
                            var e = function() {
                                w((function(e) {
                                    if (e) return (0, i.Z)((0, r.Z)({}, e), {
                                        uvMapReady: !0
                                    })
                                }))
                            };
                            return F ? (b(k), e(), function() {
                                b(k)
                            }) : (y(k), e(), function() {
                                y(k)
                            })
                        }
                    }), [F, k]), S ? (0, o.jsx)(o.Fragment, {
                        children: (0, o.jsxs)("mesh", {
                            ref: q,
                            "position-z": S.positionZ,
                            "rotation-x": 0,
                            "rotation-y": 0,
                            "rotation-z": S.rotationZ,
                            visible: S.uvMapReady,
                            children: [(0, o.jsx)("cylinderBufferGeometry", {
                                args: S.cylinder,
                                ref: _
                            }), !u && (0, o.jsx)("meshBasicMaterial", {
                                attach: "material",
                                map: t,
                                side: d.DoubleSide,
                                transparent: n
                            }), u && (0, o.jsx)(g, {})]
                        })
                    }) : null
                };
            t.Z = function(e) {
                var t = e.planeDimensions,
                    n = e.loading,
                    l = e.handleLoaded,
                    s = e.curve,
                    u = e.curved,
                    c = e.curveOrientation,
                    d = void 0 === c ? p.BF : c,
                    m = (0, a.Z)(e, ["planeDimensions", "loading", "handleLoaded", "curve", "curved", "curveOrientation"]),
                    h = (0, f.useMemo)((function() {
                        return (null === t || void 0 === t ? void 0 : t.width) && t.height ? [t.width, t.height] : n ? [1, 1] : null
                    }), [null === t || void 0 === t ? void 0 : t.width, null === t || void 0 === t ? void 0 : t.height, n]);
                (0, f.useLayoutEffect)((function() {
                    l && l(!!h)
                }), [h, l]);
                var v = u && !!s;
                return h ? (0, o.jsxs)(o.Fragment, {
                    children: [!v && (0, o.jsx)(o.Fragment, {
                        children: (0, o.jsx)(q, (0, i.Z)((0, r.Z)({}, m), {
                            dimensionsArray: h
                        }))
                    }), v && (0, o.jsx)(j, (0, i.Z)((0, r.Z)({}, m), {
                        dimensionsArray: h,
                        curve: s,
                        curveOrientation: d
                    }))]
                }) : null
            }
        },
        53349: function(e, t, n) {
            "use strict";
            n.d(t, {
                vK: function() {
                    return D
                },
                ZP: function() {
                    return V
                }
            });
            var r = n(47568),
                i = n(26042),
                a = n(69396),
                o = n(10253),
                l = n(34051),
                s = n.n(l),
                u = n(85893),
                c = n(67294),
                d = n(21169),
                f = n(99477),
                m = n(51442),
                h = function(e) {
                    var t = e.model,
                        n = e.enabled,
                        r = (0, c.useState)(),
                        i = r[0],
                        a = r[1];
                    return (0, c.useEffect)((function() {
                        var e = t.clone();
                        e.visible = !1, e.scale.set(1.02 * (t.scale.x || 1), 1.02 * (t.scale.y || 1), 1.02 * (t.scale.z || 1));
                        var n = new f.MeshBasicMaterial({
                            color: new f.Color("white"),
                            transparent: !0,
                            opacity: .5
                        });
                        return e.traverse((function(e) {
                                e.isMesh && (e.material = n)
                            })), a(e),
                            function() {
                                e.visible = !1
                            }
                    }), [t]), (0, c.useEffect)((function() {
                        if (i) return n ? (i.visible = !0, function() {
                            i.visible = !1
                        }) : void 0
                    }), [i, n, t]), i ? (0, u.jsx)("primitive", {
                        object: i
                    }) : null
                },
                v = n(15181),
                p = n(72328),
                x = n(86704),
                g = n(43485),
                q = n(43825),
                b = n(55709),
                y = n(41931),
                j = n(26564),
                S = n(44081),
                w = n(75142),
                Z = n(38700),
                F = n(27844),
                C = n(36277),
                k = n(1422),
                _ = n(45804),
                T = n(20390),
                M = n(68624),
                P = n(25784),
                E = function(e) {
                    var t = e.model,
                        n = e.material;
                    return (0, c.useEffect)((function() {
                        return t.traverse((function(e) {
                                var t = e;
                                t.originalMaterial || (t.originalMaterial = t.material)
                            })),
                            function() {
                                t.traverse((function(e) {
                                    var t = e;
                                    t.originalMaterial && (t.material = t.originalMaterial)
                                }))
                            }
                    }), [t]), (0, c.useEffect)((function() {
                        t.traverse((function(e) {
                            e.material = n
                        }))
                    }), [t, n]), null
                },
                I = function(e) {
                    var t = e.model,
                        n = e.animations,
                        i = e.timeScale,
                        a = e.syncAcrossSessions,
                        l = (0, c.useState)(),
                        u = l[0],
                        d = l[1],
                        h = (0, p.j7)(u);
                    (0, c.useEffect)((function() {
                        var e;
                        return (0, r.Z)(s().mark((function r() {
                                var i;
                                return s().wrap((function(r) {
                                    for (;;) switch (r.prev = r.next) {
                                        case 0:
                                            if (0 !== n.length) {
                                                r.next = 3;
                                                break
                                            }
                                            return d(void 0), r.abrupt("return");
                                        case 3:
                                            i = new f.AnimationMixer(t), (e = n.map((function(e) {
                                                return i.clipAction(e)
                                            }))).forEach((function(e) {
                                                return e.play()
                                            })), d(i);
                                        case 7:
                                        case "end":
                                            return r.stop()
                                    }
                                }), r)
                            })))(),
                            function() {
                                null === e || void 0 === e || e.forEach((function(e) {
                                    return e.stop()
                                }))
                            }
                    }), [n, t]);
                    var v = ((0, c.useContext)(C.u) || {}).serverTimeOffset$;
                    return (0, c.useEffect)((function() {
                        if (a) {
                            var e = (0, j.F)(5e3).pipe((0, g.O)([0])).pipe((0, q.M)(v || (0, S.D)([0])), (0, b.U)((function(e) {
                                    var t = (0, o.Z)(e, 2)[1];
                                    return ((new Date).getTime() + t) / 1e3
                                }))),
                                t = (0, w.aj)([h, e]).subscribe({
                                    next: function(e) {
                                        var t = (0, o.Z)(e, 2),
                                            n = t[0],
                                            r = t[1];
                                        n && r && n.setTime(r)
                                    }
                                });
                            return function() {
                                return t.unsubscribe()
                            }
                        }
                    }), [v, h, a]), (0, c.useEffect)((function() {
                        "undefined" !== typeof i && u && (u.timeScale = i)
                    }), [u, i]), (0, m.x)((function(e, t) {
                        null === u || void 0 === u || u.update(t)
                    })), null
                },
                A = function(e) {
                    var t, n, r = e.config,
                        i = e.meshesChanged,
                        a = e.handleLoaded,
                        o = e.model,
                        l = e.overrideMaterial,
                        s = e.animations,
                        d = e.disableCursorIntersectionDetection,
                        f = (0, c.useState)([]),
                        m = f[0],
                        v = f[1],
                        g = r.dontPreload;
                    (0, c.useEffect)((function() {
                        (o || g) && a && a(!0)
                    }), [o, a, g]), (0, c.useEffect)((function() {
                        var e = [];
                        return o && (o.traverse((function(t) {
                                if (t.isMesh) {
                                    var n, i;
                                    e.push(t), r.isCollidable || t.userData.collidable ? t.layers.enable(x.Qc) : t.layers.disable(x.Qc), r.isGround || t.userData.ground ? t.layers.enable(x.mJ) : t.layers.disable(x.mJ);
                                    var a = t.userData.castShadow || !!(null === (n = r.shadow) || void 0 === n ? void 0 : n.cast);
                                    t.castShadow = a;
                                    var o = t.userData.receiveShadow || !!(null === (i = r.shadow) || void 0 === i ? void 0 : i.receive);
                                    t.receiveShadow = o, t.visible = !t.userData.invisible, t.material.envMapIntensity = r.envMapIntensity || .2, d ? t.layers.disable(x.xg) : t.layers.enable(x.xg)
                                }
                                t.isLight && (t.visible = !1)
                            })), i && i()), v(e),
                            function() {
                                o && i && i()
                            }
                    }), [o, r.isCollidable, r.isGround, r.envMapIntensity, null === (t = r.shadow) || void 0 === t ? void 0 : t.cast, null === (n = r.shadow) || void 0 === n ? void 0 : n.receive, i, d]);
                    var q = ((0, c.useContext)(_.X9) || {}).enablePointerOverLayer$,
                        b = ((0, c.useContext)(k.Z9) || {}).pointerOver$;
                    (0, c.useEffect)((function() {
                        if (q) {
                            var e = null === q || void 0 === q ? void 0 : q.pipe((0, y.x)()).subscribe((function(e) {
                                m.forEach((function(t) {
                                    e ? t.layers.enable(x.Ry) : t.layers.disable(x.Ry)
                                }))
                            }));
                            return function() {
                                null === e || void 0 === e || e.unsubscribe()
                            }
                        }
                    }), [m, q]);
                    var j = (0, p.Hq)(b, !1);
                    return (0, u.jsxs)(u.Fragment, {
                        children: [(0, u.jsx)("primitive", {
                            object: o
                        }), l && o && (0, u.jsx)(E, {
                            model: o,
                            material: l
                        }), r.interactable && o && (0, u.jsx)(h, {
                            model: o,
                            enabled: j
                        }), o && s && r.animated && (0, u.jsx)(I, {
                            model: o,
                            animations: s,
                            timeScale: r.animationTimeScale,
                            syncAcrossSessions: r.syncAnimation
                        })]
                    })
                },
                D = function(e) {
                    var t = e.modelUrl,
                        n = e.handleLoaded,
                        r = (0, Z.Z)(t),
                        o = r.model,
                        l = r.animations,
                        s = r.loadAttemptComplete;
                    return (0, c.useEffect)((function() {
                        n && (t && !s || n(!0))
                    }), [t, s, n]), o ? (0, u.jsx)(A, (0, a.Z)((0, i.Z)({}, e), {
                        model: o,
                        animations: l
                    })) : null
                },
                V = function(e) {
                    var t = e.elementId,
                        n = e.config,
                        r = e.handleLoaded,
                        i = e.disableCursorIntersectionDetection,
                        a = (0, c.useState)(null),
                        o = a[0],
                        l = a[1],
                        s = (0, P.sT)(n, M.pk),
                        f = (0, k.$v)(t, s),
                        m = (0, d.AB)(s.modelFile),
                        h = m.filePath,
                        p = m.loaded,
                        x = (0, c.useState)(),
                        g = x[0],
                        q = x[1],
                        b = !1 !== s.bundledMaterial;
                    return (0, c.useEffect)((function() {
                        !h && p && r && r(!0)
                    }), [h, p, r]), (0, u.jsx)(k.Z9.Provider, {
                        value: f,
                        children: (0, u.jsxs)("group", {
                            ref: l,
                            children: [o && h && (0, u.jsx)(c.Suspense, {
                                fallback: null,
                                children: (0, u.jsx)(C.u.Consumer, {
                                    children: function(e) {
                                        return (0, u.jsx)(F.l.Consumer, {
                                            children: function(t) {
                                                return e && (0, u.jsxs)(u.Fragment, {
                                                    children: [(0, u.jsx)(D, {
                                                        modelUrl: h,
                                                        config: s,
                                                        meshesChanged: null === t || void 0 === t ? void 0 : t.meshesChanged,
                                                        handleLoaded: r,
                                                        overrideMaterial: g,
                                                        disableCursorIntersectionDetection: i
                                                    }), !b && (0, u.jsx)(T.Z, {
                                                        config: s.materialConfig,
                                                        handleMaterialSet: q,
                                                        useThreeColor: !0
                                                    })]
                                                })
                                            }
                                        })
                                    }
                                })
                            }), !(null === f || void 0 === f ? void 0 : f.disableInteractivity) && s.interactable && s.interactableConfig && (0, u.jsx)(v.Z, {
                                interactionConfig: s.interactableConfig
                            })]
                        })
                    })
                }
        },
        15181: function(e, t, n) {
            "use strict";
            n.d(t, {
                w: function() {
                    return L
                },
                Z: function() {
                    return U
                }
            });
            var r = n(14924),
                i = n(26042),
                a = n(69396),
                o = n(85893),
                l = n(67294),
                s = n(25935),
                u = n(80366),
                c = n(282),
                d = n(35800),
                f = n(49168),
                m = n(5566),
                h = n(32692),
                v = n(73637),
                p = n(74979),
                x = n(86010),
                g = n(41749),
                q = n(10253),
                b = n(21169),
                y = n(58365),
                j = n(58212),
                S = n.n(j),
                w = n(79123),
                Z = n(53349),
                F = function(e) {
                    var t = e.file,
                        n = e.handleMediaSizeChanged,
                        r = e.mediaElementSize,
                        i = e.display,
                        a = (0, l.useCallback)((function(e) {
                            var t = e.target,
                                r = t.videoWidth,
                                i = t.videoHeight;
                            n({
                                width: r,
                                height: i
                            })
                        }), [n]);
                    return (0, o.jsx)(o.Fragment, {
                        children: (0, o.jsx)("video", {
                            crossOrigin: "anonymous",
                            loop: !0,
                            controls: !0,
                            style: {
                                display: i
                            },
                            src: t,
                            autoPlay: !0,
                            onLoadedMetadata: a,
                            width: null === r || void 0 === r ? void 0 : r.width,
                            height: null === r || void 0 === r ? void 0 : r.height
                        })
                    })
                },
                C = function(e) {
                    var t = e.file,
                        n = e.handleMediaSizeChanged,
                        r = e.mediaElementSize,
                        i = e.display,
                        a = (0, l.useCallback)((function(e) {
                            var t = e.target,
                                r = t.width,
                                i = t.height;
                            n({
                                width: r,
                                height: i
                            })
                        }), [n]),
                        s = (0, l.useState)(!1),
                        u = s[0],
                        c = s[1],
                        d = (0, l.useRef)(null),
                        f = (0, l.useState)([0, 0]),
                        m = (0, q.Z)(f[0], 2),
                        h = m[0],
                        v = m[1],
                        p = f[1],
                        g = (0, l.useCallback)((function() {
                            return d.current ? [-d.current.getBoundingClientRect().x, -0] : [0, 0]
                        }), []),
                        b = (0, l.useCallback)((function() {
                            c((function(e) {
                                return p(e ? [0, 0] : g()), !e
                            }))
                        }), [g]);
                    return (0, o.jsxs)("div", {
                        className: (0, x.default)(S().modalAssetContainer),
                        children: [(0, o.jsx)("div", {
                            className: (0, x.default)(S().bg, u && S().bgFullScreen)
                        }), r && (0, o.jsx)("button", {
                            onClick: b,
                            className: (0, x.default)(S().fullScreenBtn, u && S().fullScreenBtnFullScreen),
                            children: (0, o.jsx)("img", {
                                src: u ? "/images/icons/exit-fullscreen.svg" : "/images/icons/enter-fullscreen.svg",
                                alt: "enter fullscreen"
                            })
                        }), (0, o.jsx)("img", {
                            ref: d,
                            className: (0, x.default)(S().modalAsset, u && S().modalAssetFullScreen),
                            style: {
                                display: i,
                                top: v,
                                left: h
                            },
                            crossOrigin: "anonymous",
                            src: t,
                            alt: "Detail View",
                            width: null === r || void 0 === r ? void 0 : r.width,
                            height: null === r || void 0 === r ? void 0 : r.height,
                            onLoad: a
                        })]
                    })
                },
                k = function(e) {
                    var t = e.file,
                        n = e.handleMediaSizeChanged,
                        r = (e.mediaElementSize, e.display, (0, l.useMemo)((function() {
                            return {
                                modelFile: {
                                    fileType: "external",
                                    url: t
                                },
                                bundledMaterial: !0,
                                materialConfig: void 0
                            }
                        }), [t])),
                        i = (0, l.useState)(!1),
                        a = i[0],
                        s = i[1];
                    return (0, l.useEffect)((function() {
                        a && n({
                            width: 1e3,
                            height: 1e3
                        })
                    }), [a, n]), (0, o.jsx)("div", {
                        className: (0, x.default)(S().modalAssetContainer),
                        children: (0, o.jsx)(w.Z, {
                            loaded: a,
                            children: (0, o.jsx)(Z.vK, {
                                config: r,
                                modelUrl: t,
                                handleLoaded: s
                            })
                        })
                    })
                },
                _ = (0, l.memo)((function(e) {
                    var t = e.fileLocation,
                        n = e.fileType,
                        r = void 0 === n ? "image" : n,
                        i = e.handleMediaSizeChanged,
                        a = e.mediaElementSize,
                        l = e.showMediaElement,
                        s = (0, b.PP)(t);
                    if (!s) return null;
                    var u = l ? "flex" : "none";
                    return "image" === r ? (0, o.jsx)(C, {
                        file: s,
                        handleMediaSizeChanged: i,
                        mediaElementSize: a,
                        display: u
                    }) : "video" === r ? (0, o.jsx)(F, {
                        file: s,
                        handleMediaSizeChanged: i,
                        mediaElementSize: a,
                        display: u
                    }) : "model" === r ? (0, o.jsx)(k, {
                        file: s,
                        handleMediaSizeChanged: i,
                        mediaElementSize: a,
                        display: u
                    }) : null
                })),
                T = function(e) {
                    var t = e.mediaElementSize,
                        n = e.containerSize,
                        r = (0, l.useMemo)((function() {
                            return !!(n && t && t.width && t.height)
                        }), [t, n]);
                    return (0, o.jsxs)(o.Fragment, {
                        children: [!r && (0, o.jsx)(y.Z, {
                            variant: "rect",
                            width: "".concat((null === n || void 0 === n ? void 0 : n.width) || 400, "px"),
                            height: "".concat((null === n || void 0 === n ? void 0 : n.height) || 400, "px")
                        }), (0, o.jsx)(_, (0, a.Z)((0, i.Z)({}, e), {
                            showMediaElement: r
                        }))]
                    })
                },
                M = n(86388),
                P = n(46182),
                E = n(35922),
                I = n.n(E),
                A = n(74519),
                D = n.n(A),
                V = n(36277),
                R = n(1422),
                N = n(58631),
                B = n(16712),
                z = function(e) {
                    var t = e.onClose;
                    return (0, o.jsx)(c.Z, {
                        className: I().closeButton,
                        onClick: t,
                        children: (0, o.jsx)(u.Z, {})
                    })
                },
                L = (0, l.memo)((function(e) {
                    var t = e.markup,
                        n = e.assetDetailsFile,
                        u = e.assetDetailsFileType,
                        c = e.onClose,
                        f = e.show,
                        p = e.bgColor,
                        q = e.contentVerticalAlignment,
                        b = void 0 === q ? "center" : q,
                        y = (0, l.useState)(0),
                        j = y[0],
                        S = y[1],
                        w = !!n,
                        Z = (0, l.useState)(),
                        F = Z[0],
                        C = Z[1],
                        k = (0, l.useCallback)((function(e) {
                            C(e)
                        }), []),
                        _ = (0, l.useRef)(null);
                    (0, M.Z)({
                        ref: _,
                        onResize: k
                    }), (0, l.useLayoutEffect)((function() {
                        var e;
                        C(null === (e = _.current) || void 0 === e ? void 0 : e.getBoundingClientRect())
                    }), [_]);
                    var E = (0, l.useState)(),
                        A = E[0],
                        V = E[1],
                        R = (0, l.useState)({
                            width: void 0,
                            height: void 0
                        }),
                        N = R[0],
                        B = R[1];
                    (0, l.useEffect)((function() {
                        var e = function(e) {
                            var t = e.mediaSize,
                                n = e.containerHeight,
                                r = e.containerWidth;
                            if (!t || !n || !r || !t.width || !t.height) return {
                                width: void 0,
                                height: void 0
                            };
                            var i, a = r / t.width,
                                o = n / t.height;
                            return {
                                width: (i = a < o ? a : o) * t.width,
                                height: i * t.height
                            }
                        }({
                            mediaSize: A,
                            containerHeight: null === F || void 0 === F ? void 0 : F.height,
                            containerWidth: null === F || void 0 === F ? void 0 : F.width
                        });
                        B(e)
                    }), [F, A]), (0, l.useLayoutEffect)((function() {
                        setTimeout((function() {
                            (0, P.lR)(".".concat(I().modal, " a"), "Modal link clicked")
                        }), 250)
                    }), []);
                    var L, H = (0, l.useMemo)((function() {
                        return function(e) {
                            return e.showAssetDetails ? {
                                details: {
                                    xs: 12,
                                    sm: 6,
                                    lg: 8
                                },
                                text: {
                                    xs: 12,
                                    sm: 6,
                                    lg: 4
                                }
                            } : {
                                details: {
                                    xs: 12
                                },
                                text: {
                                    xs: 12
                                }
                            }
                        }({
                            showAssetDetails: w
                        })
                    }), [w]);
                    return f ? (0, o.jsx)(m.Z, {
                        disablePortal: !0,
                        "aria-labelledby": "transition-modal-title",
                        "aria-describedby": "transition-modal-description",
                        className: (0, x.default)(D().modal, "modal-container"),
                        open: f,
                        onClose: c,
                        BackdropComponent: h.Z,
                        BackdropProps: {
                            timeout: 500
                        },
                        children: (0, o.jsx)(v.Z, {
                            in: f,
                            children: (0, o.jsx)("div", {
                                className: (0, x.default)(D().modalPaper, w ? I().modalPaperWithDetails : I().modalPaperWithoutDetails),
                                style: {
                                    background: p
                                },
                                children: (0, o.jsxs)("div", {
                                    className: I().modelScrollingWrapper,
                                    children: [(0, o.jsx)("div", {
                                        className: I().closeBtn,
                                        children: (0, o.jsx)(z, {
                                            onClose: c
                                        })
                                    }), (0, o.jsxs)(g.Z, {
                                        container: !0,
                                        className: D().modalContainer,
                                        children: [n && (0, o.jsx)(g.Z, (0, a.Z)((0, i.Z)({
                                            item: !0
                                        }, H.details), {
                                            ref: _,
                                            className: (0, x.default)(I().detailsColumn, I().assetColumn),
                                            children: (0, o.jsx)(T, {
                                                fileLocation: n,
                                                fileType: u,
                                                mediaElementSize: N,
                                                handleMediaSizeChanged: V,
                                                containerSize: F
                                            })
                                        })), t && "" !== t && (0, o.jsx)(g.Z, (0, a.Z)((0, i.Z)({
                                            item: !0
                                        }, H.text), {
                                            className: (0, x.default)(I().detailsColumn, I().contentColumn, (L = {}, (0, r.Z)(L, I().padText, w), (0, r.Z)(L, I().contentColumnCenter, "center" === b), L)),
                                            children: (0, o.jsxs)("div", {
                                                className: I().contentContents,
                                                children: ["string" === typeof t && (0, o.jsx)(d.ErrorBoundary, {
                                                    FallbackComponent: O,
                                                    onError: function() {
                                                        S((function(e) {
                                                            return e + 1
                                                        }))
                                                    },
                                                    children: j > 2 ? (0, s.ZP)("\n<p>Failed loading content.</p>\n") : (0, s.ZP)(t)
                                                }), "string" !== typeof t && t]
                                            })
                                        }))]
                                    })]
                                })
                            })
                        })
                    }) : null
                })),
                O = function(e) {
                    var t = e.error,
                        n = e.resetErrorBoundary;
                    return (0, o.jsxs)("div", {
                        role: "alert",
                        children: [(0, o.jsx)("p", {
                            children: "Something went wrong:"
                        }), (0, o.jsx)("pre", {
                            children: null === t || void 0 === t ? void 0 : t.message
                        }), (0, o.jsx)("button", {
                            onClick: n,
                            children: "Try again"
                        })]
                    })
                },
                H = function(e) {
                    var t = e.elementType,
                        n = e.elementFile,
                        r = e.modalConfig,
                        i = e.show,
                        a = e.onClose,
                        s = (0, l.useMemo)((function() {
                            if ("self" === r.detailFileType) {
                                var e = void 0;
                                return t === p.H.image ? e = "image" : t === p.H.video ? e = "video" : t === p.H.model && (e = "model"), [e, n]
                            }
                            return [r.detailFileType, r.detailFile]
                        }), [n, t, r.detailFile, r.detailFileType]),
                        u = s[0],
                        c = s[1];
                    return i ? (0, o.jsx)(N.Z, {
                        children: (0, o.jsx)(L, {
                            markup: r.contentHTML,
                            bgColor: r.backgroundColor,
                            assetDetailsFile: r.showDetail ? c : void 0,
                            assetDetailsFileType: u,
                            onClose: a,
                            show: i,
                            contentVerticalAlignment: r.contentVerticalAlignment
                        })
                    }) : null
                },
                U = function(e) {
                    var t, n, r = e.elementType,
                        i = e.elementFile,
                        a = e.onModalOpen,
                        s = e.onModalClose,
                        u = e.interactionConfig,
                        c = (0, l.useState)(!1),
                        d = c[0],
                        m = c[1],
                        h = (0, l.useContext)(V.u),
                        v = null === h || void 0 === h ? void 0 : h.setModalOpen,
                        p = (0, l.useCallback)((function() {
                            m(!0), (0, B.l)(r), v && (v(!0), a && a())
                        }), [r, v, a]),
                        x = (0, l.useCallback)((function() {
                            m(!1), v && (v(!1), s && s())
                        }), [v, s]),
                        g = ((0, l.useContext)(R.Z9) || {}).clicked$;
                    return t = g, n = p, (0, l.useEffect)((function() {
                        if (t) {
                            var e = t.subscribe(n);
                            return function() {
                                e.unsubscribe()
                            }
                        }
                    }), [t, n]), (0, o.jsx)(o.Fragment, {
                        children: u.action === f.s.showModal && (0, o.jsx)(H, {
                            elementType: r,
                            elementFile: i,
                            modalConfig: u.payload,
                            show: d,
                            onClose: x
                        })
                    })
                }
        },
        38700: function(e, t, n) {
            "use strict";
            n.d(t, {
                O: function() {
                    return c
                }
            });
            var r = n(47568),
                i = n(34051),
                a = n.n(i),
                o = n(21169),
                l = n(67294),
                s = n(44976),
                u = n(17607);

            function c() {
                var e = new u.E,
                    t = new s._;
                return t.setDecoderPath("https://www.gstatic.com/draco/versioned/decoders/1.5.2/"), e.setDRACOLoader(t), e
            }
            var d = void 0;
            t.Z = function(e) {
                var t = (d || (d = c()), d),
                    n = (0, l.useState)(null),
                    i = n[0],
                    s = n[1],
                    u = (0, l.useState)(),
                    f = u[0],
                    m = u[1],
                    h = (0, l.useState)(),
                    v = h[0],
                    p = h[1],
                    x = (0, l.useState)(!1),
                    g = x[0],
                    q = x[1];
                return (0, l.useEffect)((function() {
                    m(e ? (0, o.Ix)(e) || "glb" : void 0)
                }), [e]), (0, l.useEffect)((function() {
                    (0, r.Z)(a().mark((function n() {
                        var r;
                        return a().wrap((function(n) {
                            for (;;) switch (n.prev = n.next) {
                                case 0:
                                    if (!e || !f) {
                                        n.next = 21;
                                        break
                                    }
                                    if ("glb" !== f && "gltf" !== f) {
                                        n.next = 20;
                                        break
                                    }
                                    return r = void 0, n.prev = 3, n.prev = 4, n.next = 7, t.loadAsync(e);
                                case 7:
                                    r = n.sent, n.next = 14;
                                    break;
                                case 10:
                                    n.prev = 10, n.t0 = n.catch(4), console.error("failed to parse model at ".concat(e)), console.error(n.t0);
                                case 14:
                                    r && (r.animations && r.animations.length > 0 ? p(r.animations) : p(void 0), s(r.scene));
                                case 15:
                                    return n.prev = 15, q(!0), n.finish(15);
                                case 18:
                                    n.next = 21;
                                    break;
                                case 20:
                                    q(!0), console.error("No existing loader for model of type ".concat(f));
                                case 21:
                                case "end":
                                    return n.stop()
                            }
                        }), n, null, [
                            [3, , 15, 18],
                            [4, 10]
                        ])
                    })))()
                }), [e, f, t]), {
                    model: i,
                    animations: v,
                    loadAttemptComplete: g
                }
            }
        },
        94631: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                bidOffset: function() {
                    return ee
                },
                default: function() {
                    return ae
                },
                useRefreshIfChanged: function() {
                    return ne
                },
                useRefreshOnObserved: function() {
                    return re
                }
            });
            var r = n(26042),
                i = n(69396),
                a = n(85893),
                o = n(67294),
                l = n(72328),
                s = n(1422),
                u = n(49168),
                c = n(15181),
                d = n(25784),
                f = n(97811),
                m = n(99534),
                h = n(47552),
                v = n(73578),
                p = n(73488),
                x = function(e) {
                    var t = e.token,
                        n = e.superrareVersion,
                        r = void 0 === n ? "v2" : n,
                        i = e.tokenId,
                        o = e.tokenMetadata,
                        l = e.tokenAddress,
                        s = null === t || void 0 === t ? void 0 : t.metadata;
                    if (!s) return null;
                    var u = function(e) {
                            var t = e.superrareVersion,
                                n = e.tokenAddress;
                            return "v1" === t ? "artwork" : "v2" === t ? "artwork-".concat(t) : n
                        }({
                            superrareVersion: r,
                            tokenAddress: l
                        }),
                        c = "https://superrare.com/".concat(u, "/").concat(i);
                    return (0, a.jsxs)(a.Fragment, {
                        children: [(0, a.jsx)("p", {
                            children: (0, a.jsx)("b", {
                                children: null === s || void 0 === s ? void 0 : s.name
                            })
                        }), (0, a.jsxs)("p", {
                            children: ["Creator: @", null === o || void 0 === o ? void 0 : o.creatorName, (0, a.jsx)("br", {}), "Owner: @", null === o || void 0 === o ? void 0 : o.ownerName]
                        }), (null === o || void 0 === o ? void 0 : o.description) && (0, a.jsx)("p", {
                            children: null === o || void 0 === o ? void 0 : o.description
                        }), (0, a.jsx)("p", {
                            children: (0, a.jsx)("a", {
                                href: c,
                                target: "_blank",
                                title: "Artwork Auction on Superrare",
                                children: "View on Superrare"
                            })
                        })]
                    })
                },
                g = function(e) {
                    var t = e.token,
                        n = e.tokenMetadata,
                        o = (0, m.Z)(e, ["token", "tokenMetadata"]);
                    if (!(null === t || void 0 === t ? void 0 : t.metadata)) return null;
                    var l = function(e) {
                        var t = e.overrideNftLink,
                            n = e.overrideNftLinkText,
                            r = e.overrideNftLinkUrl,
                            i = e.token;
                        return t && n && r ? {
                            text: n,
                            url: r
                        } : (null === i || void 0 === i ? void 0 : i.externalLink) ? {
                            url: null === i || void 0 === i ? void 0 : i.externalLink,
                            text: "View on ".concat(null === i || void 0 === i ? void 0 : i.collectionName)
                        } : null
                    }((0, i.Z)((0, r.Z)({}, o), {
                        token: t
                    }));
                    return (0, a.jsxs)(a.Fragment, {
                        children: [(0, a.jsx)("p", {
                            children: (0, a.jsx)("b", {
                                children: null === n || void 0 === n ? void 0 : n.name
                            })
                        }), (0, a.jsxs)("p", {
                            children: [(null === n || void 0 === n ? void 0 : n.creatorName) && "Creator: @".concat(null === n || void 0 === n ? void 0 : n.creatorName), (null === n || void 0 === n ? void 0 : n.ownerName) && (0, a.jsxs)(a.Fragment, {
                                children: [(0, a.jsx)("br", {}), "Owner: @", null === n || void 0 === n ? void 0 : n.ownerName]
                            })]
                        }), (null === n || void 0 === n ? void 0 : n.description) && (0, a.jsx)("p", {
                            children: null === n || void 0 === n ? void 0 : n.description
                        }), l && (0, a.jsx)("p", {
                            children: (0, a.jsx)("a", {
                                href: l.url,
                                target: "_blank",
                                title: l.text,
                                children: l.text
                            })
                        }), !l && (null === t || void 0 === t ? void 0 : t.openSeaLink) && (0, a.jsx)("p", {
                            children: (0, a.jsx)("a", {
                                href: t.openSeaLink,
                                target: "_blank",
                                title: "Video on OpenSea",
                                children: "View on OpenSea"
                            })
                        })]
                    })
                };
            var q, b = function(e) {
                    return e ? function(e) {
                        return e === h.Ef
                    }(e) ? {
                        domain: "https://hic.link/",
                        site: "teia.art"
                    } : {
                        domain: "https://objkt.com/asset/".concat(e, "/"),
                        site: "object.com"
                    } : null
                },
                y = function(e) {
                    var t = e.tezosToken,
                        n = e.tokenMetadata,
                        r = (0, v.tR)(t),
                        i = b(null === r || void 0 === r ? void 0 : r.contract);
                    return (0, a.jsxs)(a.Fragment, {
                        children: [(0, a.jsx)(j, {
                            tokenMetadata: n
                        }), (null === r || void 0 === r ? void 0 : r.totalSupply) && (0, a.jsx)("p", {
                            children: (0, a.jsxs)("b", {
                                children: [null === r || void 0 === r ? void 0 : r.totalSupply, " Editions"]
                            })
                        }), (null === r || void 0 === r ? void 0 : r.tokenId) && i && (0, a.jsx)("p", {
                            children: (0, a.jsxs)("a", {
                                href: "".concat(i.domain).concat(null === r || void 0 === r ? void 0 : r.tokenId),
                                target: "_blank",
                                title: "View on Objkt.com",
                                children: ["view on ", i.site]
                            })
                        })]
                    })
                },
                j = function(e) {
                    var t = e.tokenMetadata;
                    return (0, a.jsxs)(a.Fragment, {
                        children: [(0, a.jsx)("p", {
                            children: (0, a.jsx)("b", {
                                children: null === t || void 0 === t ? void 0 : t.name
                            })
                        }), (0, a.jsxs)("p", {
                            children: [(null === t || void 0 === t ? void 0 : t.creatorName) && "Creator: @".concat(null === t || void 0 === t ? void 0 : t.creatorName), (null === t || void 0 === t ? void 0 : t.ownerName) && (0, a.jsxs)(a.Fragment, {
                                children: [(0, a.jsx)("br", {}), "Owner: @", null === t || void 0 === t ? void 0 : t.ownerName]
                            })]
                        }), (null === t || void 0 === t ? void 0 : t.description) && (0, a.jsx)("p", {
                            children: null === t || void 0 === t ? void 0 : t.description
                        }), (null === t || void 0 === t ? void 0 : t.externalLink) && (0, a.jsx)("p", {
                            children: (0, a.jsxs)("a", {
                                href: t.externalLink,
                                target: "_blank",
                                title: "View on ".concat(t.collectionName),
                                children: ["View on ", t.collectionName]
                            })
                        })]
                    })
                },
                S = (0, o.memo)((function(e) {
                    var t = e.values,
                        n = e.tokenMetadata;
                    return (0, p.oI)(t) ? (0, a.jsx)(x, (0, i.Z)((0, r.Z)({}, t), {
                        tokenMetadata: n
                    })) : (0, p.ml)(t) ? (0, a.jsx)(g, (0, i.Z)((0, r.Z)({}, t), {
                        tokenMetadata: n
                    })) : (0, p.um)(t) ? (0, a.jsx)(y, (0, i.Z)((0, r.Z)({}, t), {
                        tokenMetadata: n
                    })) : (0, p.nm)(t) ? (0, a.jsx)(j, (0, i.Z)((0, r.Z)({}, t), {
                        tokenMetadata: n
                    })) : null
                })),
                w = n(45804),
                Z = n(18446),
                F = n.n(Z),
                C = n(5327),
                k = n(64886),
                _ = n(47568),
                T = n(51438),
                M = n(14924),
                P = n(28668),
                E = n(82670),
                I = n(29815),
                A = n(33227),
                D = n(91224),
                V = n(34051),
                R = n.n(V),
                N = n(56434),
                B = n(42696),
                z = n(66519),
                L = n(82515),
                O = n(93302),
                H = n.n(O),
                U = function(e) {
                    (0, P.Z)(n, e);
                    var t = (0, D.Z)(n);

                    function n() {
                        return (0, T.Z)(this, n), t.apply(this, arguments)
                    }
                    return n
                }((0, A.Z)(Error)),
                $ = function(e) {
                    (0, P.Z)(n, e);
                    var t = (0, D.Z)(n);

                    function n() {
                        return (0, T.Z)(this, n), t.apply(this, arguments)
                    }
                    return n
                }((0, A.Z)(Error)),
                G = function(e, t, n, r, i) {
                    (0, E.Z)(e, U) || (0, E.Z)(e, $) || i.retryCount && r(i)
                };

            function W(e, t, n) {
                var r, i, a, o, l;
                return {
                    nft: {
                        tokenId: e.tokenId.toString(),
                        contract: {
                            address: e.address,
                            name: null === (r = e.tokenContract) || void 0 === r || null === (i = r.name) || void 0 === i ? void 0 : i.toString(),
                            symbol: null === (a = e.tokenContract) || void 0 === a || null === (o = a.symbol) || void 0 === o ? void 0 : o.toString()
                        },
                        owner: e.owner,
                        creator: e.minter || void 0,
                        metadataURI: e.tokenURI || ""
                    },
                    zoraNFT: e.media ? {
                        createdAtTimestamp: (null === (l = e.mintTransferEvent) || void 0 === l ? void 0 : l.blockTimestamp) || 0,
                        contentURI: e.media.contentURI || "",
                        contentHash: e.media.contentHash,
                        metadataURI: e.media.metadataURI || "",
                        metadataHash: e.media.metadataHash,
                        ownerBidShare: e.media.ownerBidShare,
                        ownerBidSharePercentage: e.media.ownerBidShare ? new(H())(e.media.ownerBidShare).div(new(H())(10).pow(18)).toNumber() : 0,
                        creatorBidShare: e.media.creatorBidShare,
                        creatorBidSharePercentage: e.media.creatorBidShare ? new(H())(e.media.creatorBidShare).div(new(H())(10).pow(18)).toNumber() : 0
                    } : void 0,
                    zoraIndexerResponse: e,
                    pricing: (0, z.addAuctionInformation)({
                        reserve: (0, z.auctionDataToPricing)(t)
                    }, n)
                }
            }

            function Y(e) {
                var t, n, r;
                if (e.reserve) {
                    var i, a = null === (i = e.reserve) || void 0 === i ? void 0 : i.auctionCurrency.id;
                    if (a) return [a]
                }
                var o = (null === (t = e.perpetual) || void 0 === t || null === (n = t.bids) || void 0 === n ? void 0 : n.map((function(e) {
                        return e.pricing.currency.id
                    }))) || [],
                    l = null === (r = e.perpetual.ask) || void 0 === r ? void 0 : r.pricing.currency.id;
                return l ? (0, I.Z)(o).concat([l]) : o
            }
            var K = (q = {}, (0, M.Z)(q, N.pt.MAINNET, "0xabEFBc9fD2F806065b4f3C237d4b59D9A97Bcac7"), (0, M.Z)(q, N.pt.RINKEBY, "0x7C2668BD0D3c050703CEcC956C11Bd520c26f7d4"), (0, M.Z)(q, N.pt.MUMBAI, "0xabEFBc9fD2F806065b4f3C237d4b59D9A97Bcac7"), (0, M.Z)(q, N.pt.POLYGON, "0x6953190AAfD8f8995e8f47e8F014d0dB83E92300"), q);

            function X(e) {
                var t, n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    a = (0, o.useContext)(B.NFTFetchContext),
                    l = n || {},
                    s = l.loadCurrencyInfo,
                    u = void 0 !== s && s,
                    c = l.refreshInterval,
                    d = l.initialData,
                    f = (0, L.default)(e ? ["loadZNFTDataUntransformed", e] : null, (function(e, t) {
                        return a.loadZNFTDataUntransformed(t)
                    }), {
                        refreshInterval: c,
                        dedupingInterval: 0
                    }),
                    m = (0, L.default)(f.data && f.data.pricing && u ? ["loadCurrencies"].concat((0, I.Z)(Y((0, z.addAuctionInformation)(f.data.pricing)))) : null, (function(e) {
                        for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
                        return a.loadCurrencies(n)
                    }), {
                        refreshInterval: c,
                        dedupingInterval: 0
                    });
                return t = void 0 !== f.data ? (0, i.Z)((0, r.Z)({}, f.data), {
                    pricing: (0, z.addAuctionInformation)(f.data.pricing, m.data)
                }) : d, {
                    currencyLoaded: !!m.data,
                    error: f.error,
                    data: t
                }
            }

            function Q(e, t) {
                var n, r, i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                    a = (0, o.useContext)(B.NFTFetchContext),
                    l = i || {},
                    s = l.refreshInterval,
                    u = l.initialData,
                    c = l.loadCurrencyInfo,
                    d = void 0 === c || c,
                    f = (0, L.default)(e && t ? ["loadIndexerNFT", e, t] : null, (function(e, t, n) {
                        return a.loadZoraNFTIndexerNFTUntransformed(t, n)
                    }), {
                        dedupingInterval: 0,
                        initialData: null === u || void 0 === u ? void 0 : u.tokenData,
                        onErrorRetry: G
                    }),
                    m = (0, L.default)(e && t ? ["loadAuctionForNFT", e, t] : null, (function(e, t, n) {
                        return a.loadAuctionInfo(t, n)
                    }), {
                        refreshInterval: s,
                        initialData: null === u || void 0 === u ? void 0 : u.auctionData,
                        onErrorRetry: G
                    }),
                    h = (0, L.default)(f && f.data && d ? ["loadCurrencies", null === (n = m.data) || void 0 === n ? void 0 : n.auctionCurrency.id] : null, (function(e) {
                        for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
                        return a.loadCurrencies(n)
                    }), {
                        refreshInterval: s,
                        dedupingInterval: 0
                    }),
                    v = void 0 !== f.data ? W(f.data, m.data, h.data) : u;
                return {
                    currencyLoaded: !!h.data,
                    error: null === (r = f.error) || void 0 === r ? void 0 : r.toString(),
                    data: v
                }
            }

            function J(e, t) {
                var n, r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                    i = (0, o.useContext)(B.NFTFetchContext),
                    a = r || {},
                    l = a.loadCurrencyInfo,
                    s = void 0 !== l && l,
                    u = a.refreshInterval,
                    c = (0, L.default)(e && t ? ["loadAuctionForNFT", e, t] : null, function() {
                        var e = (0, _.Z)(R().mark((function e(t, n, r) {
                            return R().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.abrupt("return", i.loadAuctionInfo(n, r));
                                    case 1:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })));
                        return function(t, n, r) {
                            return e.apply(this, arguments)
                        }
                    }()),
                    d = (0, L.default)(s ? ["loadCurrencies", null === c || void 0 === c || null === (n = c.data) || void 0 === n ? void 0 : n.auctionCurrency] : null, (function(e) {
                        for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
                        return i.loadCurrencies(n)
                    }), {
                        refreshInterval: u,
                        dedupingInterval: 0
                    }),
                    f = (0, z.addAuctionInformation)({
                        reserve: (0, z.auctionDataToPricing)(c.data)
                    }, d.data);
                return {
                    currencyLoaded: !!d.data,
                    data: {
                        pricing: f
                    },
                    error: c.error
                }
            }
            var ee = -.15;

            function te(e) {
                var t = e.originalMediaFileType;
                return {
                    showDetail: !0,
                    detailFile: e.originalMediaFile,
                    detailFileType: "image" === t || "gif" === t || "svg" === t ? "image" : "video" === t ? "video" : "model" === t ? "model" : "image"
                }
            }

            function ne(e) {
                var t = (0, o.useState)({
                        lastValue: void 0,
                        refresh: !1
                    }),
                    n = t[0],
                    a = t[1];
                return (0, o.useEffect)((function() {
                    var t = e;
                    a((function(e) {
                        var n = e.lastValue;
                        if (!n) return {
                            lastValue: t,
                            refresh: !1
                        };
                        var r = !F()(n, t);
                        return {
                            lastValue: t,
                            refresh: r
                        }
                    }))
                }), [e]), (0, o.useEffect)((function() {
                    n.refresh && setTimeout((function() {
                        a((function(e) {
                            return (0, i.Z)((0, r.Z)({}, e), {
                                refresh: !1
                            })
                        }))
                    }))
                }), [n.refresh]), n.refresh
            }
            var re = function(e) {
                    var t = (0, o.useState)(!1),
                        n = t[0],
                        r = t[1];
                    return (0, o.useEffect)((function() {
                        var t = e.subscribe({
                            next: function() {
                                r(!0), setTimeout((function() {
                                    r(!1)
                                }))
                            }
                        });
                        return function() {
                            return t.unsubscribe()
                        }
                    }), [e]), n
                },
                ie = {
                    refreshInterval: 3e4
                },
                ae = function(e) {
                    var t, n, i = e.config,
                        m = e.elementId,
                        h = e.handleLoaded,
                        v = e.muted,
                        x = e.elementTransform,
                        g = e.showHelper,
                        q = (0, d.sT)(i, k.Nj),
                        b = ((0, o.useContext)(w.X9) || {}).disableInteractivity$,
                        y = (0, l.Hq)(b, !1),
                        j = (0, p.c9)(q),
                        Z = (0, o.useMemo)((function() {
                            return (0, p.zz)(q)
                        }), [q]),
                        F = (0, o.useMemo)((function() {
                            return j && (0, a.jsx)(S, {
                                values: q,
                                tokenMetadata: j
                            })
                        }), [j, q]),
                        _ = !!q.fetchPricing,
                        T = q.tokenAddress,
                        M = function() {
                            var e, t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                                n = t.contractAddress,
                                r = t.tokenId,
                                i = t.options,
                                a = void 0 === i ? {} : i,
                                l = (0, o.useContext)(B.NFTFetchContext),
                                s = n || K[l.networkId],
                                u = s === K[l.networkId],
                                c = J(a.useBetaIndexer || u ? void 0 : s, a.useBetaIndexer || u ? void 0 : r, a),
                                d = Q(a.useBetaIndexer ? s : void 0, a.useBetaIndexer ? r : void 0, a),
                                f = X(!a.useBetaIndexer && u ? r : void 0, a),
                                m = a.useBetaIndexer ? d : u ? f : c;
                            return {
                                currencyLoaded: null === m || void 0 === m ? void 0 : m.currencyLoaded,
                                pricing: null === m || void 0 === m || null === (e = m.data) || void 0 === e ? void 0 : e.pricing,
                                error: null === m || void 0 === m ? void 0 : m.error
                            }
                        }({
                            contractAddress: _ ? T : void 0,
                            tokenId: _ && q.tokenId || void 0,
                            options: ie
                        }),
                        P = (0, o.useMemo)((function() {
                            return {
                                interactable: !1 !== q.interactable,
                                interactableConfig: {
                                    action: u.s.showModal,
                                    payload: (0, r.Z)({
                                        contentHTML: F,
                                        backgroundColor: "white"
                                    }, te(Z))
                                }
                            }
                        }), [Z, F, q.interactable]),
                        E = (0, s.$v)(m, P),
                        I = q.display,
                        A = (0, d.Of)(null === (t = q.display) || void 0 === t ? void 0 : t.mediaFrame, null === C || void 0 === C ? void 0 : C.defaultFrame),
                        D = q.offsetFromBack && (null === A || void 0 === A || null === (n = A.frameConfig) || void 0 === n ? void 0 : n.depth) || 0,
                        V = ne(Z),
                        R = ne(j);
                    return (0, a.jsxs)(s.Z9.Provider, {
                        value: E,
                        children: [(0, a.jsx)("group", {
                            "position-z": D,
                            children: !V && !R && (0, a.jsx)(f.ZP, {
                                config: q,
                                displayConfig: I,
                                handleLoaded: h,
                                tokenMedia: Z,
                                tokenTextInfo: j,
                                muted: v,
                                pricing: M.pricing,
                                elementTransform: x,
                                showHelper: g
                            })
                        }, 1), !y && P.interactable && P.interactableConfig && (0, a.jsx)(c.Z, {
                            interactionConfig: P.interactableConfig
                        })]
                    })
                }
        },
        97811: function(e, t, n) {
            "use strict";
            n.d(t, {
                ZP: function() {
                    return Be
                },
                F3: function() {
                    return Re
                }
            });
            var r = n(26042),
                i = n(69396),
                a = n(99534),
                o = n(85893),
                l = n(67294),
                s = n(99477),
                u = n(27386),
                c = n(75207),
                d = n(7091),
                f = n(21169),
                m = n(53349),
                h = n(25784),
                v = n(5327),
                p = function(e) {
                    var t = e.fileLocation,
                        n = e.handleLoaded,
                        s = (0, a.Z)(e, ["fileLocation", "handleLoaded"]),
                        c = (0, h.Of)(s.image, v.getDefaultImageSettings),
                        f = (0, h.Of)(s.frame, v.defaultFrame),
                        m = (0, l.useMemo)((function() {
                            return {
                                imageFile: t,
                                interactable: !0,
                                settings: c,
                                frame: f
                            }
                        }), [c, t, f]),
                        p = (0, d.Pt)(),
                        x = (0, l.useCallback)((function(e) {
                            n && n(e), p()
                        }), [p, n]);
                    return (0, o.jsx)(u.ImageDisplayMesh, (0, i.Z)((0, r.Z)({
                        config: m
                    }, s), {
                        settings: c,
                        frame: f,
                        handleLoaded: x
                    }))
                },
                x = function(e) {
                    var t = e.fileLocation,
                        n = e.handleLoaded,
                        s = e.showHelper,
                        u = e.elementTransform,
                        f = (0, a.Z)(e, ["fileLocation", "handleLoaded", "showHelper", "elementTransform"]),
                        m = (0, h.Of)(f.video, v.videoSettings),
                        p = (0, l.useMemo)((function() {
                            return {
                                storedVideo: t,
                                type: "stored video",
                                interactable: !0
                            }
                        }), [t]),
                        x = (0, d.Pt)(),
                        g = (0, l.useCallback)((function(e) {
                            n && n(e), x()
                        }), [x, n]);
                    return (0, o.jsxs)(o.Fragment, {
                        children: [(0, o.jsx)(c.Y7, (0, i.Z)((0, r.Z)({
                            values: p
                        }, f), {
                            handleLoaded: g,
                            inFlexBox: !0,
                            settings: m
                        })), s && (0, o.jsx)(c.M2, {
                            elementTransform: u,
                            positionalAudioConfig: m.positionalAudio,
                            playSettings: m.playSettings
                        })]
                    })
                },
                g = function(e) {
                    var t = e.fileLocation,
                        n = e.handleLoaded,
                        r = (0, f.PP)(t),
                        i = (0, l.useMemo)((function() {
                            return {
                                modelFile: t,
                                bundledMaterial: !0,
                                materialConfig: void 0,
                                animated: !0
                            }
                        }), [t]),
                        a = (0, d.Pt)(),
                        s = (0, l.useCallback)((function(e) {
                            n && n(e), a()
                        }), [a, n]);
                    return r ? (0, o.jsx)(m.vK, {
                        config: i,
                        handleLoaded: s,
                        modelUrl: r
                    }) : null
                },
                q = function(e) {
                    var t = e.fileLocation,
                        n = e.mediaType,
                        i = (0, a.Z)(e, ["fileLocation", "mediaType"]),
                        s = (0, d.Pt)();
                    return (0, l.useLayoutEffect)((function() {
                        s()
                    }), [t, n]), n && t ? "image" === n ? (0, o.jsx)(p, (0, r.Z)({
                        fileLocation: t
                    }, i)) : "video" === n || "gif" === n ? (0, o.jsx)(x, (0, r.Z)({
                        fileLocation: t
                    }, i)) : "model" === n ? (0, o.jsx)(g, (0, r.Z)({
                        fileLocation: t
                    }, i)) : null : null
                },
                b = n(10253),
                y = n(96747),
                j = .05,
                S = n(80203),
                w = function(e) {
                    var t = e.boxConfig,
                        n = e.setMesh,
                        r = (0, b.Z)(e.size, 2),
                        i = r[0],
                        a = r[1],
                        u = e.pointerOver$,
                        c = (0, l.useMemo)((function() {
                            return {
                                center: new s.Vector3(i / 2, -a / 2, 0),
                                size: new s.Vector3(i, a, 0)
                            }
                        }), [i, a]),
                        d = t.backingMaterial,
                        f = t.frameConfig;
                    return d && f ? (0, o.jsx)(o.Fragment, {
                        children: (0, o.jsx)(S.Sz, {
                            boxParams: c,
                            hasBacking: t.hasBacking,
                            backingMaterial: d,
                            frameConfig: f,
                            hasFrame: t.hasFrame,
                            setMesh: n,
                            pointerOver$: u,
                            interactable: !0
                        })
                    }) : null
                },
                Z = n(82473),
                F = n(3430),
                C = n(73488),
                k = n(96486),
                _ = n(16609),
                T = n(1422),
                M = n(8381),
                P = n(56434),
                E = n(48622),
                I = "List price",
                A = "Highest bid",
                D = "Reserve price",
                V = "Auction ends",
                R = "Bidder",
                N = "Duration",
                B = "Sold for",
                z = "Winner",
                L = function(e) {
                    var t, n = e.pricing,
                        r = e.showUSD,
                        i = void 0 === r || r,
                        a = new Intl.NumberFormat(navigator.language, {
                            style: "decimal",
                            maximumFractionDigits: 8
                        }).format;
                    return n ? {
                        pricingAmount: "".concat(a(parseFloat(n.prettyAmount)), " ").concat(n.currency.symbol),
                        computedValue: i && n.computedValue && "".concat(a(parseInt(null === (t = n.computedValue) || void 0 === t ? void 0 : t.inUSD, 10)))
                    } : null
                },
                O = function(e) {
                    var t, n = e.address,
                        l = e.showChars,
                        s = e.prefix,
                        u = (0, a.Z)(e, ["address", "showChars", "prefix"]),
                        c = (0, P.mN)(n),
                        d = (0, P.OP)(n),
                        f = n.slice(0, l || 6),
                        m = n.slice(n.length - (l || 6)),
                        h = null;
                    return h = c.data ? c.data : (null === (t = d.username) || void 0 === t ? void 0 : t.username) ? "@".concat(d.username.username) : ((null === d || void 0 === d ? void 0 : d.error) || (null === d || void 0 === d ? void 0 : d.username)) && (c.error || c.data) ? "".concat(f, "...").concat(m) : "...", (0, o.jsx)(U, (0, i.Z)((0, r.Z)({}, u), {
                        text: "".concat(s, ": ").concat(h)
                    }))
                },
                H = function(e) {
                    var t = e.text,
                        n = e.fontSizes,
                        a = e.maxWidth,
                        s = e.fonts,
                        u = e.visible;
                    return (0, o.jsx)(d.xu, (0, i.Z)((0, r.Z)({
                        marginTop: .05
                    }, E.q), {
                        children: (0, o.jsx)(l.Suspense, {
                            fallback: null,
                            children: (0, o.jsx)(Z.x, (0, i.Z)((0, r.Z)({
                                fontSize: n.subHeader
                            }, s.bold), {
                                maxWidth: a,
                                visible: u,
                                children: t
                            }))
                        })
                    }))
                },
                U = function(e) {
                    var t = e.text,
                        n = e.fontSizes,
                        a = e.maxWidth,
                        s = e.fonts,
                        u = e.visible;
                    return (0, o.jsx)(d.xu, (0, i.Z)((0, r.Z)({}, E.q), {
                        children: (0, o.jsx)(l.Suspense, {
                            fallback: null,
                            children: (0, o.jsx)(Z.x, (0, i.Z)((0, r.Z)({
                                fontSize: n.body
                            }, s.standard), {
                                maxWidth: a,
                                visible: u,
                                children: t
                            }))
                        })
                    }))
                };

            function $(e) {
                return "string" === typeof e ? parseInt(e, 10) : e
            }
            var G = {
                    d: "day",
                    h: "hour",
                    m: "minute",
                    s: "second"
                },
                W = function(e) {
                    return {
                        d: Math.floor(e / 86400),
                        h: Math.floor(e / 3600) % 24,
                        m: Math.floor(e / 60 % 60),
                        s: Math.floor(e % 60)
                    }
                },
                Y = function(e, t) {
                    if (void 0 === t) return null;
                    var n = e - t;
                    return n < 0 && (n = 0), W(n)
                },
                K = function(e) {
                    var t = e.duration,
                        n = (0, a.Z)(e, ["duration"]),
                        i = W(t);
                    return Object.values(i).map((function(e) {
                        return 0 === e
                    })).reduce((function(e, t) {
                        return e + (t ? 0 : 1)
                    }), 0) <= 1 ? (0, o.jsx)(l.Fragment, {
                        children: Object.keys(i).map((function(e) {
                            return t = e, 0 === (n = i[e]) ? "" : 1 === n ? "".concat(n, " ").concat(G[t]) : "".concat(n, " ").concat(G[t], "s");
                            var t, n
                        })).join("")
                    }) : (0, o.jsx)(X, (0, r.Z)({
                        from: 0,
                        to: t
                    }, n))
                },
                X = function(e) {
                    var t = (0, l.useState)(Y($(e.to), $(void 0 === e.from ? (new Date).getTime() / 1e3 : e.from))),
                        n = t[0],
                        a = t[1],
                        s = (0, l.useCallback)((function() {
                            a(Y($(e.to), $(void 0 === e.from ? (new Date).getTime() / 1e3 : e.from)))
                        }), [e.to, e.from]);
                    if ((0, l.useEffect)((function() {
                            var e = setInterval(s, 1e3);
                            return function() {
                                clearInterval(e)
                            }
                        }), []), !n) return (0, o.jsx)(l.Fragment, {});
                    var u = [
                        [n.d, "d"],
                        [n.h, "h"],
                        [n.m, "m"],
                        [n.s, "s"]
                    ].filter((function(e) {
                        return null !== e
                    })).reduce((function(e, t) {
                        var n = (0, b.Z)(t, 2),
                            r = n[0],
                            i = n[1];
                        return e.length || 0 !== r ? "".concat(e, " ").concat(r).concat(i) : ""
                    }), "");
                    return (0, o.jsx)(U, (0, i.Z)((0, r.Z)({}, e), {
                        text: "".concat(e.prefix, ": ").concat(u || "0s")
                    }))
                },
                Q = function(e) {
                    var t, n = e.pricing,
                        s = e.showPerpetual,
                        u = void 0 === s || s,
                        c = (0, a.Z)(e, ["pricing", "showPerpetual"]);
                    if (!n) return (0, o.jsx)(o.Fragment, {});
                    if (n.status === P.Hf.NO_PRICING) return (0, o.jsx)(o.Fragment, {});
                    if (n.status === P.Hf.PERPETUAL_ASK && u && n) {
                        var d, f, m = L({
                            pricing: null === (d = n.perpetual) || void 0 === d || null === (f = d.ask) || void 0 === f ? void 0 : f.pricing,
                            showUSD: !0
                        });
                        return (0, o.jsxs)(o.Fragment, {
                            children: [m && (0, o.jsx)(o.Fragment, {
                                children: (0, o.jsx)(H, (0, i.Z)((0, r.Z)({}, c), {
                                    text: "".concat(I, ": ").concat(m.pricingAmount)
                                }))
                            }), (0, o.jsx)(U, (0, i.Z)((0, r.Z)({}, c), {
                                text: "Be the first one to bid on this piece!"
                            }))]
                        })
                    }
                    var h = n.reserve;
                    if (n.reserve && n.reserve.current.likelyHasEnded && ("Finished" === n.reserve.status || "Active" === n.reserve.status)) {
                        var v = n.reserve.currentBid || n.reserve.previousBids[0],
                            p = L({
                                pricing: v.pricing,
                                showUSD: !0
                            });
                        return (0, o.jsx)(o.Fragment, {
                            children: p && (0, o.jsxs)(o.Fragment, {
                                children: [(0, o.jsx)(H, (0, i.Z)((0, r.Z)({}, c), {
                                    text: B
                                })), (0, o.jsx)(U, (0, i.Z)((0, r.Z)({}, c), {
                                    text: p.pricingAmount
                                })), (0, o.jsx)(O, (0, i.Z)((0, r.Z)({}, c), {
                                    prefix: z,
                                    address: v.bidder.id
                                }))]
                            })
                        })
                    }
                    if (void 0 !== h && !h.current.likelyHasEnded && h.expectedEndTimestamp && void 0 !== h.current.highestBid) {
                        var x, g = L({
                            pricing: h.current.highestBid.pricing,
                            showUSD: !0
                        });
                        return (0, o.jsx)(o.Fragment, {
                            children: g && (0, o.jsxs)(o.Fragment, {
                                children: [(0, o.jsx)(X, (0, r.Z)({
                                    prefix: V,
                                    to: h.expectedEndTimestamp
                                }, c)), (0, o.jsx)(U, (0, i.Z)((0, r.Z)({}, c), {
                                    text: "".concat(A, ": ").concat(g.pricingAmount)
                                })), (0, o.jsx)(O, (0, i.Z)((0, r.Z)({}, c), {
                                    prefix: R,
                                    address: null === (x = h.current.highestBid) || void 0 === x ? void 0 : x.placedBy
                                }))]
                            })
                        })
                    }
                    if (u && n.auctionType === M.AuctionType.PERPETUAL && n.perpetual.highestBid) {
                        var q, b = L({
                            pricing: null === (q = n.perpetual.highestBid) || void 0 === q ? void 0 : q.pricing,
                            showUSD: !0
                        });
                        return b && (0, o.jsx)(U, (0, i.Z)((0, r.Z)({}, c), {
                            text: "".concat(A, ": ").concat(b.pricingAmount)
                        }))
                    }
                    if (!u && n.auctionType === M.AuctionType.PERPETUAL) return (0, o.jsx)(l.Fragment, {});
                    var y = n.auctionType === M.AuctionType.PERPETUAL ? I : D;
                    if (n.auctionType === M.AuctionType.PERPETUAL && n.perpetual.ask) {
                        var j = L({
                            pricing: n.perpetual.ask.pricing,
                            showUSD: !0
                        });
                        return (0, o.jsx)(H, (0, i.Z)((0, r.Z)({}, c), {
                            text: "".concat(y, ": ").concat(null === j || void 0 === j ? void 0 : j.pricingAmount)
                        }))
                    }
                    if (n.auctionType === M.AuctionType.RESERVE && (null === (t = n.reserve) || void 0 === t ? void 0 : t.reservePrice)) {
                        var S = L({
                            pricing: n.reserve.reservePrice,
                            showUSD: !0
                        });
                        return (0, o.jsxs)(o.Fragment, {
                            children: [(0, o.jsx)(H, (0, i.Z)((0, r.Z)({}, c), {
                                text: "".concat(y, ": ").concat(null === S || void 0 === S ? void 0 : S.pricingAmount)
                            })), (0, o.jsx)(K, (0, r.Z)({
                                prefix: N,
                                duration: n.reserve.duration
                            }, c))]
                        })
                    }
                    return null
                },
                J = function(e) {
                    return e / 1e18
                },
                ee = function(e) {
                    return "".concat(J(e), "ETH")
                },
                te = new Intl.NumberFormat("en-US", {
                    style: "currency",
                    currency: "USD",
                    maximumFractionDigits: 2
                }),
                ne = function(e, t) {
                    var n, r = t ? " ".concat((n = t, te.format(n))) : "";
                    return "".concat(J(e), "ETH").concat(r)
                };
            var re = function(e) {
                    switch (e.nftEventType) {
                        case "CREATION":
                            var t, n;
                            return "@".concat(null === (t = e.creation) || void 0 === t || null === (n = t.firstOwner) || void 0 === n ? void 0 : n.username, " minted");
                        case "BID":
                            var r, i, a = e.bid;
                            return (null === a || void 0 === a || null === (r = a.bidder) || void 0 === r ? void 0 : r.username) && (null === a || void 0 === a ? void 0 : a.amount) ? "@".concat(null === a || void 0 === a || null === (i = a.bidder) || void 0 === i ? void 0 : i.username, " offered ").concat(ee(null === a || void 0 === a ? void 0 : a.amount)) : null;
                        case "SCHEDULED_AUCTION_STARTED":
                        case "AUCTION_STARTED":
                            var o = (e.auctionStarted || e.scheduledAuctionStarted).auctionCreator;
                            return "@".concat(o.username, " started auction");
                        case "AUCTION_BID":
                            var l, s, u = e.auctionBid;
                            return (null === u || void 0 === u || null === (l = u.bidder) || void 0 === l ? void 0 : l.username) && (null === u || void 0 === u ? void 0 : u.amount) ? "@".concat(null === u || void 0 === u || null === (s = u.bidder) || void 0 === s ? void 0 : s.username, " bid ").concat(ee(null === u || void 0 === u ? void 0 : u.amount)) : null;
                        case "AUCTION_ENDED":
                            var c, d = e.auctionEnded;
                            return "@".concat(null === (c = d.bidder) || void 0 === c ? void 0 : c.username, " won auction with a bid of ").concat(ne(d.amount, d.usdAmount));
                        case "TRANSFER":
                            var f = e.transfer.to;
                            return "transfered ".concat(f ? "to @".concat(f.username) : "");
                        case "ACCEPT_BID":
                            return function(e) {
                                if (e) {
                                    var t = e.bidder,
                                        n = e.seller,
                                        r = e.amount,
                                        i = e.usdAmount;
                                    if (n && t) return "@".concat(n.username, " accepted an offer of ").concat(ne(r, i), " from @").concat(t.username)
                                }
                            }(e.acceptBid);
                        case "SALE":
                            var m = e.sale,
                                h = m.buyer,
                                v = m.seller,
                                p = m.amount,
                                x = m.usdAmount;
                            return "@".concat(h.username, " bought from @").concat(v.username, " for ").concat(ne(p, x));
                        default:
                            return null
                    }
                },
                ie = function(e) {
                    return e ? new Date(e).toLocaleDateString() : null
                };

            function ae(e) {
                if (e) return Array.isArray(e) ? e : Object.entries(e).sort((function(e) {
                    return +(0, b.Z)(e, 1)[0]
                })).map((function(e) {
                    return (0, b.Z)(e, 2)[1]
                }))
            }
            var oe = function(e) {
                    var t = ae(e);
                    return t ? t.map((function(e) {
                        return function(e) {
                            var t = re(e);
                            return t ? {
                                dateTime: Date.parse(e.timestamp),
                                description: t
                            } : null
                        }(e)
                    })).filter((function(e) {
                        return null !== e
                    })) : null
                },
                le = .05,
                se = (0, l.memo)((function(e) {
                    var t = e.token,
                        n = e.fontSizes,
                        a = e.maxWidth,
                        s = e.fonts,
                        u = e.visible,
                        c = e.reflow,
                        f = (0, l.useMemo)((function() {
                            return oe(t.events)
                        }), [t.events]),
                        m = (0, d.Pt)(),
                        h = (0, l.useCallback)((function() {
                            m(), setTimeout((function() {
                                c()
                            }))
                        }), [m, c]);
                    return (0, o.jsx)(o.Fragment, {
                        children: (0, o.jsxs)(o.Fragment, {
                            children: [(0, o.jsx)(d.xu, (0, i.Z)((0, r.Z)({
                                marginBottom: .025
                            }, E.q), {
                                children: (0, o.jsx)(l.Suspense, {
                                    fallback: null,
                                    children: (0, o.jsx)(Z.x, (0, i.Z)((0, r.Z)({
                                        fontSize: n.body,
                                        lineHeight: 1.1 * n.body
                                    }, s.bold), {
                                        maxWidth: a,
                                        visible: u,
                                        onSync: h,
                                        children: "History:"
                                    }))
                                })
                            })), null === f || void 0 === f ? void 0 : f.filter((function(e) {
                                return null !== e
                            })).map((function(e) {
                                return (0, o.jsxs)(l.Fragment, {
                                    children: [(0, o.jsx)(d.xu, (0, i.Z)((0, r.Z)({
                                        marginTop: .1 / 3
                                    }, E.q), {
                                        children: (0, o.jsx)(l.Suspense, {
                                            fallback: null,
                                            children: (0, o.jsx)(Z.x, (0, i.Z)((0, r.Z)({
                                                fontSize: n.body
                                            }, s.standard), {
                                                maxWidth: a,
                                                visible: u,
                                                whiteSpace: "overflowWrap",
                                                onSync: h,
                                                children: null === e || void 0 === e ? void 0 : e.description
                                            }))
                                        })
                                    }), "a"), (0, o.jsx)(d.xu, (0, i.Z)((0, r.Z)({
                                        marginTop: le / 3
                                    }, E.q), {
                                        children: (0, o.jsx)(l.Suspense, {
                                            fallback: null,
                                            children: (0, o.jsx)(Z.x, (0, i.Z)((0, r.Z)({
                                                fontSize: n.body / 2,
                                                lineHeight: n.body / 2,
                                                visible: u
                                            }, s.bold), {
                                                maxWidth: a,
                                                onSync: h,
                                                children: ie(null === e || void 0 === e ? void 0 : e.dateTime)
                                            }))
                                        })
                                    }), "b")]
                                }, null === e || void 0 === e ? void 0 : e.dateTime)
                            }))]
                        })
                    })
                })),
                ue = function(e) {
                    return (0, o.jsx)(d.xu, (0, i.Z)((0, r.Z)({}, E.q), {
                        children: (0, o.jsx)(d.kC, (0, i.Z)((0, r.Z)({}, E.q), {
                            children: (0, o.jsx)(se, (0, r.Z)({}, e))
                        }))
                    }))
                },
                ce = function(e) {
                    var t, n, a, s = e.fontSizes,
                        u = e.maxWidth,
                        c = e.config,
                        f = e.fonts,
                        m = e.visible,
                        h = e.sdfGlyphSize,
                        v = null === c || void 0 === c || null === (t = c.token) || void 0 === t || null === (n = t.creator) || void 0 === n ? void 0 : n.userName,
                        p = null === (a = c.superrareTokenHistory) || void 0 === a ? void 0 : a.events,
                        x = (0, l.useMemo)((function() {
                            if (p) {
                                var e = ae(p),
                                    t = null === e || void 0 === e ? void 0 : e.find((function(e) {
                                        return "CREATION" === e.nftEventType
                                    }));
                                if (t) {
                                    var n = Date.parse(t.timestamp);
                                    return ie(n)
                                }
                            }
                        }), [p]);
                    return (0, o.jsxs)(o.Fragment, {
                        children: ["custom" !== c.superrareVersion && (0, o.jsx)(d.xu, (0, i.Z)((0, r.Z)({}, E.q), {
                            children: (0, o.jsx)(l.Suspense, {
                                fallback: null,
                                children: (0, o.jsxs)(Z.x, (0, i.Z)((0, r.Z)({
                                    fontSize: s.body
                                }, f.bold), {
                                    maxWidth: u,
                                    visible: m,
                                    children: ["Superrare Token ", c.tokenId]
                                }))
                            })
                        })), (0, o.jsx)(d.xu, (0, i.Z)((0, r.Z)({}, E.q), {
                            children: (0, o.jsx)(l.Suspense, {
                                fallback: null,
                                children: (0, o.jsxs)(Z.x, (0, i.Z)((0, r.Z)({
                                    fontSize: s.body
                                }, f.bold), {
                                    maxWidth: u,
                                    visible: m,
                                    sdfGlyphSize: h,
                                    children: ["Minted by @", v, " ", x ? "on ".concat(x) : ""]
                                }))
                            })
                        }))]
                    })
                },
                de = function(e) {
                    var t = e.config,
                        n = e.fontSizes,
                        a = e.fonts,
                        l = e.visible,
                        s = e.maxWidth,
                        u = e.reflow,
                        c = t.superrareTokenHistory;
                    return c ? (0, o.jsx)(d.xu, (0, i.Z)((0, r.Z)({
                        marginTop: .1
                    }, E.q), {
                        children: (0, o.jsx)(ue, {
                            token: c,
                            fontSizes: n,
                            maxWidth: s,
                            fonts: a,
                            visible: l,
                            reflow: u
                        })
                    })) : null
                },
                fe = n(72328),
                me = n(89445),
                he = n(47568),
                ve = n(34051),
                pe = n.n(ve),
                xe = n(70211),
                ge = n(14370),
                qe = n(26564),
                be = n(75142),
                ye = n(5631),
                je = n(96381),
                Se = n(41931),
                we = n(55709),
                Ze = n(14788),
                Fe = function() {
                    var e = (0, he.Z)(pe().mark((function e() {
                        var t, n;
                        return pe().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return t = null, e.prev = 1, e.next = 4, (0, Ze.wk)().httpsCallable("getEthBlockNumber")();
                                case 4:
                                    n = e.sent, t = n.data.blockNumber, e.next = 11;
                                    break;
                                case 8:
                                    e.prev = 8, e.t0 = e.catch(1), console.error(e.t0);
                                case 11:
                                    return e.abrupt("return", t);
                                case 12:
                                case "end":
                                    return e.stop()
                            }
                        }), e, null, [
                            [1, 8]
                        ])
                    })));
                    return function() {
                        return e.apply(this, arguments)
                    }
                }(),
                Ce = function(e) {
                    var t = e.auction,
                        n = (0, fe.j7)(t),
                        r = (0, l.useState)((function() {
                            return new xe.xQ
                        }))[0];
                    return (0, l.useEffect)((function() {
                        var e = (0, ge.T)(Fe(), (0, qe.F)(6e4).pipe((0, je.w)((function() {
                                return Fe()
                            })))).pipe((0, Se.x)()),
                            t = (0, be.aj)([n, e]).pipe((0, we.U)((function(e) {
                                var t = (0, b.Z)(e, 2),
                                    n = t[0],
                                    r = t[1];
                                if (n.lengthOfAuction) {
                                    var i = +n.lengthOfAuction;
                                    if (r) {
                                        var a = n.startingBlock;
                                        if (!a) return;
                                        return 13.2 * (+a + i - r)
                                    }
                                }
                            })), (0, je.w)((function(e) {
                                if (!e) return ye.E;
                                var t = (new Date).getTime();
                                return (0, qe.F)(1e3).pipe((0, we.U)((function() {
                                    var n = ((new Date).getTime() - t) / 1e3;
                                    return function(e) {
                                        var t = Math.floor(e / 86400);
                                        e -= 86400 * t;
                                        var n = Math.floor(e / 3600) % 24;
                                        e -= 3600 * n;
                                        var r = Math.floor(e / 60) % 60;
                                        return e -= 60 * r, {
                                            days: t,
                                            hours: n,
                                            minutes: r,
                                            seconds: Math.round(e % 60)
                                        }
                                    }(e - n)
                                })))
                            }))).subscribe(r);
                        return function() {
                            return t.unsubscribe()
                        }
                    }), [r, n]), r
                },
                ke = .0125,
                _e = function(e) {
                    var t = e.text,
                        n = e.fontSizes,
                        a = e.fonts,
                        s = e.visible,
                        u = e.maxWidth,
                        c = e.reflow;
                    return (0, o.jsx)(l.Suspense, {
                        fallback: null,
                        children: (0, o.jsx)(Z.x, (0, i.Z)((0, r.Z)({
                            fontSize: n.body
                        }, a.bold), {
                            maxWidth: u,
                            onSync: c,
                            visible: s,
                            children: t
                        }))
                    })
                },
                Te = function(e) {
                    var t = e.auction,
                        n = e.fontSizes,
                        a = e.fonts,
                        s = e.visible,
                        u = e.maxWidth,
                        c = e.reflow,
                        f = (0, l.useMemo)((function() {
                            var e, n = ae(t.currentAuctionBids);
                            return n && 0 !== n.length ? "Current high bid:\n".concat((e = t.currentAuctionBids[0], "".concat(ee(e.amount), " by @").concat(e.bidder.username))) : ""
                        }), [t.currentAuctionBids]),
                        m = (0, l.useMemo)((function() {
                            return ee(+t.reservePrice)
                        }), [t.reservePrice]),
                        h = Ce({
                            auction: t
                        }),
                        v = (0, fe.Hq)(h, null);
                    return (0, o.jsxs)(o.Fragment, {
                        children: [(0, o.jsx)(d.xu, (0, i.Z)((0, r.Z)({
                            marginTop: j
                        }, E.q), {
                            children: (0, o.jsx)(_e, {
                                text: "Running Auction",
                                fontSizes: n,
                                fonts: a,
                                visible: s,
                                maxWidth: u,
                                reflow: c
                            })
                        })), (0, o.jsx)(d.xu, (0, i.Z)((0, r.Z)({
                            marginTop: ke
                        }, E.q), {
                            children: (0, o.jsx)(l.Suspense, {
                                fallback: null,
                                children: (0, o.jsx)(Z.x, (0, i.Z)((0, r.Z)({
                                    fontSize: n.subHeader
                                }, a.bold), {
                                    onSync: c,
                                    visible: s,
                                    children: m ? "Reserve Price Met: ".concat(m) : ""
                                }))
                            })
                        })), (0, o.jsx)(d.xu, (0, i.Z)((0, r.Z)({
                            marginTop: ke
                        }, E.q), {
                            children: (0, o.jsx)(l.Suspense, {
                                fallback: null,
                                children: (0, o.jsx)(Z.x, (0, i.Z)((0, r.Z)({
                                    fontSize: n.subHeader
                                }, a.standard), {
                                    color: me.Qq,
                                    outlineWidth: 2 * a.bold.outlineWidth,
                                    outlineColor: me.Qq,
                                    onSync: c,
                                    visible: s,
                                    children: v && "".concat(v.hours, " hours, ").concat(v.minutes, " minutes, ").concat(v.seconds, " seconds")
                                }))
                            })
                        })), (0, o.jsx)(d.xu, (0, i.Z)((0, r.Z)({
                            marginTop: ke
                        }, E.q), {
                            children: (0, o.jsx)(l.Suspense, {
                                fallback: null,
                                children: (0, o.jsx)(Z.x, (0, i.Z)((0, r.Z)({
                                    fontSize: n.body
                                }, a.bold), {
                                    lineHeight: 25 * n.body,
                                    onSync: c,
                                    visible: s,
                                    children: f
                                }))
                            })
                        }))]
                    })
                },
                Me = function(e) {
                    var t = e.auction,
                        n = e.fontSizes,
                        a = e.fonts,
                        s = e.maxWidth,
                        u = e.reflow,
                        c = e.visible,
                        f = (0, l.useMemo)((function() {
                            return ee(+t.reservePrice)
                        }), [t.reservePrice]);
                    return (0, o.jsxs)(o.Fragment, {
                        children: [(0, o.jsx)(d.xu, (0, i.Z)((0, r.Z)({
                            marginTop: j
                        }, E.q), {
                            children: (0, o.jsx)(_e, {
                                text: "Pending Auction",
                                fontSizes: n,
                                fonts: a,
                                maxWidth: s,
                                visible: c,
                                reflow: u
                            })
                        })), (0, o.jsx)(d.xu, (0, i.Z)((0, r.Z)({}, E.q), {
                            children: (0, o.jsx)(l.Suspense, {
                                fallback: null,
                                children: (0, o.jsx)(Z.x, (0, i.Z)((0, r.Z)({
                                    fontSize: n.subHeader
                                }, a.bold), {
                                    onSync: u,
                                    maxWidth: s,
                                    visible: c,
                                    children: f ? "Reserve Price: ".concat(f) : ""
                                }))
                            })
                        }))]
                    })
                },
                Pe = function(e) {
                    var t = (0, d.Pt)(),
                        n = e.reflow,
                        a = (0, l.useCallback)((function() {
                            t(), setTimeout((function() {
                                n()
                            }))
                        }), [t, n]);
                    return e.tokenHistory.auction ? (0, o.jsx)(o.Fragment, {
                        children: "RUNNING_AUCTION" === e.tokenHistory.auction.auctionState ? (0, o.jsx)(Te, (0, i.Z)((0, r.Z)({}, e), {
                            auction: e.tokenHistory.auction,
                            reflow: a
                        })) : (0, o.jsx)(Me, (0, i.Z)((0, r.Z)({}, e), {
                            auction: e.tokenHistory.auction,
                            reflow: a
                        }))
                    }) : null
                },
                Ee = function(e) {
                    return (0, o.jsx)(d.xu, (0, i.Z)((0, r.Z)({}, E.q), {
                        children: (0, o.jsx)(d.kC, (0, i.Z)((0, r.Z)({}, E.q), {
                            children: (0, o.jsx)(Pe, (0, r.Z)({}, e))
                        }))
                    }))
                },
                Ie = n(73578),
                Ae = function(e) {
                    var t = e.fontSizes,
                        n = e.maxWidth,
                        a = e.textInfo,
                        s = e.fonts,
                        u = e.visible,
                        c = e.sdfGlyphSize;
                    return (0, o.jsx)(o.Fragment, {
                        children: (0, o.jsx)(d.xu, (0, i.Z)((0, r.Z)({}, E.q), {
                            children: (0, o.jsx)(l.Suspense, {
                                fallback: null,
                                children: (0, o.jsxs)(Z.x, (0, i.Z)((0, r.Z)({
                                    fontSize: t.body
                                }, s.bold), {
                                    maxWidth: n,
                                    visible: u,
                                    sdfGlyphSize: c,
                                    children: ["Created by @", a.creatorName, " "]
                                }))
                            })
                        }))
                    })
                },
                De = (0, l.memo)((function(e) {
                    var t, n, a, s = e.settings,
                        u = e.placardDisplay,
                        c = e.config,
                        f = (0, b.Z)(e.size, 2),
                        m = f[0],
                        h = f[1],
                        v = e.maxWidth,
                        p = e.textInfo,
                        x = e.parentReflow,
                        g = e.pricing,
                        q = (0, d.Pt)(),
                        M = (0, S.t0)(u.fontSize),
                        P = (0, l.useMemo)((function() {
                            return {
                                header: M,
                                subHeader: .7 * M,
                                body: .5 * M
                            }
                        }), [M]),
                        I = s.showDescription,
                        A = s.showTitle,
                        D = s.showHistory,
                        V = s.showPrice,
                        R = s.showCreator,
                        N = s.showOwner,
                        B = null === p || void 0 === p ? void 0 : p.ownerName,
                        z = null === p || void 0 === p ? void 0 : p.creatorName,
                        L = (0, l.useMemo)((function() {
                            return B && "" !== B && B !== z
                        }), [B, z]),
                        O = (0, l.useMemo)((function() {
                            return L && N ? "Owned by @".concat(B) : null
                        }), [L, B, N]);
                    (0, l.useEffect)((function() {
                        setTimeout((function() {
                            q(), x()
                        }), 1e3)
                    }), [q, x]), (0, l.useLayoutEffect)((function() {
                        setTimeout((function() {
                            q(), setTimeout((function() {
                                x()
                            }), 300)
                        }), 300)
                    }), [s, c, p, x]);
                    var H = (0, l.useState)(null),
                        U = H[0],
                        $ = H[1],
                        G = (0, l.useMemo)((function() {
                            return {
                                titleVisible: s.titleVisibleDistance,
                                highResText: s.detailsVisibleDistance,
                                detailsVisible: s.detailsVisibleDistance
                            }
                        }), [s.detailsVisibleDistance, s.titleVisibleDistance]),
                        W = (0, F.Z)({
                            mesh: U,
                            distancedProperties: G
                        }),
                        Y = (0, l.useMemo)((function() {
                            var e = (null === u || void 0 === u ? void 0 : u.primaryFontColor) || "black",
                                t = {
                                    font: y.Z[(null === u || void 0 === u ? void 0 : u.font) || "Roboto"],
                                    anchorX: "left",
                                    anchorY: "top",
                                    color: e,
                                    depthOffset: -1
                                };
                            return {
                                standard: t,
                                bold: (0, i.Z)((0, r.Z)({}, t), {
                                    outlineWidth: .0015,
                                    outlineColor: e
                                })
                            }
                        }), [null === u || void 0 === u ? void 0 : u.primaryFontColor, null === u || void 0 === u ? void 0 : u.font]),
                        K = (null === W || void 0 === W ? void 0 : W.highResText) ? 64 : 8,
                        X = (0, l.useCallback)((function() {
                            (0, k.throttle)(q, 500, {
                                leading: !1,
                                trailing: !0
                            })
                        }), [q]),
                        J = (0, l.useContext)(T.Z9),
                        ee = (0, _.E)(null === J || void 0 === J ? void 0 : J.enablePointerOverLayer$),
                        te = (0, C.um)(c) ? null === (t = (0, Ie.tR)(c.tezosToken)) || void 0 === t ? void 0 : t.totalSupply : void 0;
                    return (0, o.jsxs)("group", {
                        ref: $,
                        children: [A && p.name && (0, o.jsx)(d.xu, (0, i.Z)((0, r.Z)({
                            marginBottom: j
                        }, E.q), {
                            children: (0, o.jsx)(l.Suspense, {
                                fallback: null,
                                children: (0, o.jsx)(Z.x, (0, i.Z)((0, r.Z)({
                                    fontSize: P.header,
                                    lineHeight: 8 * P.header
                                }, Y.bold), {
                                    maxWidth: v,
                                    onSync: X,
                                    visible: null === W || void 0 === W ? void 0 : W.titleVisible,
                                    sdfGlyphSize: K,
                                    children: p.name
                                }))
                            })
                        })), R && z && (0, o.jsxs)(o.Fragment, {
                            children: [(0, C.oI)(c) && (0, o.jsx)(ce, {
                                config: c,
                                fontSizes: P,
                                fonts: Y,
                                visible: null === W || void 0 === W ? void 0 : W.detailsVisible,
                                maxWidth: v,
                                reflow: X,
                                sdfGlyphSize: K
                            }), !(0, C.oI)(c) && (0, o.jsx)(Ae, {
                                textInfo: p,
                                fontSizes: P,
                                fonts: Y,
                                visible: null === W || void 0 === W ? void 0 : W.detailsVisible,
                                maxWidth: v,
                                reflow: X,
                                sdfGlyphSize: K
                            })]
                        }), te && (0, o.jsx)(d.xu, (0, i.Z)((0, r.Z)({}, E.q), {
                            children: (0, o.jsx)(l.Suspense, {
                                fallback: null,
                                children: (0, o.jsxs)(Z.x, (0, i.Z)((0, r.Z)({
                                    fontSize: P.body
                                }, Y.bold), {
                                    maxWidth: v,
                                    onSync: X,
                                    visible: null === W || void 0 === W ? void 0 : W.detailsVisible,
                                    sdfGlyphSize: K,
                                    children: [te, " editions"]
                                }))
                            })
                        })), O && (0, o.jsx)(d.xu, (0, i.Z)((0, r.Z)({}, E.q), {
                            children: (0, o.jsx)(l.Suspense, {
                                fallback: null,
                                children: (0, o.jsx)(Z.x, (0, i.Z)((0, r.Z)({
                                    fontSize: P.body
                                }, Y.bold), {
                                    maxWidth: v,
                                    onSync: X,
                                    visible: null === W || void 0 === W ? void 0 : W.detailsVisible,
                                    sdfGlyphSize: K,
                                    children: O
                                }))
                            })
                        })), I && p.description && (0, o.jsx)(d.xu, (0, i.Z)((0, r.Z)({
                            marginTop: j
                        }, E.q), {
                            children: (0, o.jsx)(l.Suspense, {
                                fallback: null,
                                children: (0, o.jsx)(Z.x, (0, i.Z)((0, r.Z)({
                                    fontSize: P.body
                                }, Y.standard), {
                                    onSync: X,
                                    maxWidth: v,
                                    visible: null === W || void 0 === W ? void 0 : W.detailsVisible,
                                    sdfGlyphSize: K,
                                    children: p.description
                                }))
                            })
                        })), V && (0, C.oI)(c) && c.superrareTokenHistory && (0, o.jsx)(Ee, {
                            tokenHistory: c.superrareTokenHistory,
                            fontSizes: P,
                            fonts: Y,
                            visible: null === W || void 0 === W ? void 0 : W.detailsVisible,
                            maxWidth: v,
                            reflow: X
                        }), D && g && (0, o.jsx)(Q, {
                            pricing: g,
                            visible: null === W || void 0 === W ? void 0 : W.detailsVisible,
                            fontSizes: P,
                            fonts: Y,
                            maxWidth: v,
                            reflow: X
                        }), D && (0, C.oI)(c) && !(V && "RUNNING_AUCTION" === (null === (n = c.superrareTokenHistory) || void 0 === n || null === (a = n.auction) || void 0 === a ? void 0 : a.auctionState)) && (0, o.jsx)(de, {
                            config: c,
                            fontSizes: P,
                            fonts: Y,
                            visible: null === W || void 0 === W ? void 0 : W.detailsVisible,
                            maxWidth: v,
                            reflow: X
                        }), (0, o.jsx)(w, {
                            boxConfig: u,
                            size: [m, h],
                            setMesh: ee,
                            pointerOver$: null === J || void 0 === J ? void 0 : J.pointerOver$
                        })]
                    })
                })),
                Ve = function(e, t) {
                    return "undefined" === typeof e ? t : e
                },
                Re = function(e) {
                    return {
                        showMedia: Ve(null === e || void 0 === e ? void 0 : e.showMedia, !0),
                        showPlacard: Ve(null === e || void 0 === e ? void 0 : e.showPlacard, !0)
                    }
                },
                Ne = function(e) {
                    var t = e.displayConfig,
                        n = e.config,
                        u = e.elementTransform,
                        c = e.handleLoaded,
                        f = e.tokenTextInfo,
                        m = e.tokenMedia,
                        p = e.muted,
                        x = e.flexRef,
                        g = e.pricing,
                        b = (0, a.Z)(e, ["displayConfig", "config", "elementTransform", "handleLoaded", "tokenTextInfo", "tokenMedia", "muted", "flexRef", "pricing"]),
                        y = (0, l.useState)(),
                        j = y[0],
                        S = y[1],
                        w = (0, d.Pt)();
                    (0, l.useLayoutEffect)((function() {
                        if (x) {
                            var e = function() {
                                var e = new s.Vector3;
                                x.getWorldScale(e);
                                var t = new s.Vector3(1, 1, 1).clone().divide(e);
                                S(t)
                            };
                            e(), setTimeout((function() {
                                e()
                            }), 1e3)
                        }
                    }), [x, u]), (0, l.useLayoutEffect)((function() {
                        w()
                    }), [j, w]);
                    var Z = Re(t),
                        F = Z.showMedia,
                        C = Z.showPlacard;
                    (0, l.useLayoutEffect)((function() {
                        F && m.inSpaceMediaFile && m.originalMediaFileType || c && c(!0)
                    }), [F, c, m.inSpaceMediaFile, m.originalMediaFileType]);
                    var k = (0, h.Of)(null === t || void 0 === t ? void 0 : t.placardDisplay, v.placardDisplay),
                        _ = (0, h.Of)(null === t || void 0 === t ? void 0 : t.nftPlacardSettings, v.nftPlacard);
                    return (0, o.jsxs)(o.Fragment, {
                        children: [F && m.originalMediaFileType && m.inSpaceMediaFile && (0, o.jsx)(d.xu, (0, i.Z)((0, r.Z)({
                            centerAnchor: !0
                        }, E.q), {
                            children: (0, o.jsx)(q, (0, i.Z)((0, r.Z)({
                                fileLocation: m.inSpaceMediaFile,
                                mediaType: m.originalMediaFileType
                            }, b), {
                                image: null === t || void 0 === t ? void 0 : t.image,
                                video: null === t || void 0 === t ? void 0 : t.video,
                                frame: null === t || void 0 === t ? void 0 : t.mediaFrame,
                                handleLoaded: c,
                                muted: p,
                                elementTransform: u
                            }))
                        })), C && (0, o.jsx)(d.xu, (0, i.Z)((0, r.Z)({}, E.q), {
                            children: (0, o.jsx)("group", {
                                scale: j,
                                children: (0, o.jsx)(d.kC, (0, i.Z)((0, r.Z)({
                                    size: [_.width, 2, 0],
                                    "position-y": _.bottomOffset,
                                    "position-x": _.leftOffset
                                }, E.q), {
                                    children: (0, o.jsx)(d.xu, (0, i.Z)((0, r.Z)({
                                        flexDirection: "column",
                                        padding: .05
                                    }, E.q), {
                                        children: function(e, t) {
                                            return (0, o.jsx)(o.Fragment, {
                                                children: (0, o.jsx)(De, {
                                                    placardDisplay: k,
                                                    settings: _,
                                                    textInfo: f,
                                                    config: n,
                                                    size: [e, t],
                                                    maxWidth: e - .1,
                                                    parentReflow: w,
                                                    pricing: g
                                                })
                                            })
                                        }
                                    }))
                                }))
                            })
                        }))]
                    })
                },
                Be = function(e) {
                    var t = (0, l.useState)(null),
                        n = t[0],
                        a = t[1];
                    return (0, o.jsx)("group", {
                        ref: a,
                        children: (0, o.jsx)(d.kC, (0, i.Z)((0, r.Z)({
                            flexDirection: "row",
                            alignItems: "flex-end",
                            centerAnchor: !0
                        }, E.q), {
                            children: (0, o.jsx)(Ne, (0, i.Z)((0, r.Z)({}, e), {
                                flexRef: n
                            }))
                        }))
                    })
                }
        },
        73578: function(e, t, n) {
            "use strict";
            n.d(t, {
                mF: function() {
                    return i
                },
                tR: function() {
                    return a
                }
            });
            var r = function(e) {
                    return !!e && "string" === typeof e.contract
                },
                i = function(e) {
                    return e ? r(e) ? function(e) {
                        return {
                            artifactUri: e.artifact_uri,
                            creators: e.creators,
                            decimals: e.decimals,
                            description: e.description,
                            displayUri: e.display_uri,
                            formats: e.formats,
                            name: e.name,
                            symbol: e.symbol,
                            tags: e.tags,
                            thumbnailUri: e.thumbnail_uri
                        }
                    }(e) : e.metadata : null
                },
                a = function(e) {
                    return e ? r(e) ? {
                        tokenId: e.token_id,
                        totalSupply: e.supply,
                        contract: e.contract
                    } : {
                        tokenId: e.tokenId,
                        totalSupply: e.totalSupply,
                        contract: e.contract.address
                    } : null
                }
        },
        73488: function(e, t, n) {
            "use strict";
            n.d(t, {
                c9: function() {
                    return c
                },
                ml: function() {
                    return l
                },
                nm: function() {
                    return u
                },
                oI: function() {
                    return o
                },
                um: function() {
                    return s
                },
                zz: function() {
                    return d
                }
            });
            var r = n(67294),
                i = n(73578),
                a = function(e) {
                    return e.includes("video") ? "video" : e.includes("png") || e.includes("jpg") || e.includes("jpeg") ? "image" : e.includes("gif") ? "gif" : e.includes("video") ? "video" : e.includes("gltf") || e.includes("glb") ? "model" : e.includes("svg") ? "svg" : e.includes("application") ? "application" : "other"
                },
                o = function(e) {
                    return "superrare" === (null === e || void 0 === e ? void 0 : e.nftType)
                },
                l = function(e) {
                    return "ethereum" === (null === e || void 0 === e ? void 0 : e.nftType) || "opensea" === (null === e || void 0 === e ? void 0 : e.nftType)
                },
                s = function(e) {
                    return "tezos" === (null === e || void 0 === e ? void 0 : e.nftType)
                },
                u = function(e) {
                    return "manual entry" === (null === e || void 0 === e ? void 0 : e.nftType)
                };
            var c = function(e) {
                    var t = (0, r.useMemo)((function() {
                            if (u(e)) return e.manualEntryToken
                        }), [e]),
                        n = (0, r.useMemo)((function() {
                            if (o(e) || l(e)) return e.token
                        }), [e]),
                        a = (0, r.useMemo)((function() {
                            if (s(e)) return (0, i.mF)(e.tezosToken)
                        }), [e]),
                        c = (0, r.useMemo)((function() {
                            if (s(e)) return e.tezosCreators
                        }), [e]);
                    return (0, r.useMemo)((function() {
                        if (t) return function(e) {
                            return {
                                description: null === e || void 0 === e ? void 0 : e.description,
                                name: null === e || void 0 === e ? void 0 : e.name,
                                creatorName: null === e || void 0 === e ? void 0 : e.creatorName,
                                ownerName: null === e || void 0 === e ? void 0 : e.ownerName,
                                collectionName: null === e || void 0 === e ? void 0 : e.collectionName,
                                externalLink: null === e || void 0 === e ? void 0 : e.externalUrl
                            }
                        }(t);
                        var r = null === e || void 0 === e ? void 0 : e.updateStatus;
                        if ("updating" === r) return {
                            description: "...",
                            name: "Loading token..."
                        };
                        if ("failed" === r) return {
                            description: "",
                            name: "Failed to load token."
                        };
                        if ("awaitingInput" === r) return {
                            description: "...",
                            name: "Awaiting Nft Configuration"
                        };
                        var i, o, l, s, u = (null === e || void 0 === e ? void 0 : e.description) && "" !== (null === e || void 0 === e ? void 0 : e.description) ? null === e || void 0 === e ? void 0 : e.description : void 0;
                        if (n) return {
                            description: u || (null === n || void 0 === n || null === (i = n.metadata) || void 0 === i ? void 0 : i.description),
                            name: null === n || void 0 === n || null === (o = n.metadata) || void 0 === o ? void 0 : o.name,
                            creatorName: (null === n || void 0 === n || null === (l = n.creator) || void 0 === l ? void 0 : l.userName) || void 0,
                            ownerName: (null === n || void 0 === n || null === (s = n.owner) || void 0 === s ? void 0 : s.userName) || void 0,
                            collectionName: (null === n || void 0 === n ? void 0 : n.collectionName) || void 0,
                            externalLink: (null === n || void 0 === n ? void 0 : n.externalLink) || void 0
                        };
                        if (a) {
                            var d, f = u || a.description,
                                m = (null === a || void 0 === a ? void 0 : a.creators[0]) || void 0;
                            return {
                                description: f,
                                name: null === a || void 0 === a ? void 0 : a.name,
                                creatorName: c ? (null === (d = c[0]) || void 0 === d ? void 0 : d.alias) || void 0 : m,
                                ownerName: void 0,
                                collectionName: void 0,
                                externalLink: void 0
                            }
                        }
                        return {
                            description: "...",
                            name: "Awaiting Nft Configuration"
                        }
                    }), [t, null === e || void 0 === e ? void 0 : e.updateStatus, null === e || void 0 === e ? void 0 : e.description, n, a, c])
                },
                d = function(e) {
                    if (!e) return {
                        inSpaceMediaFile: void 0,
                        originalMediaFileType: void 0,
                        originalMediaFile: void 0,
                        inSpaceMediaFileType: void 0
                    };
                    if (u(e)) {
                        var t = e.manualEntryToken,
                            n = null === t || void 0 === t ? void 0 : t.mediaType,
                            r = "image" === n || "gif" === n ? null === t || void 0 === t ? void 0 : t.imageFile : null === t || void 0 === t ? void 0 : t.videoFile;
                        return {
                            originalMediaFileType: n,
                            inSpaceMediaFile: r,
                            originalMediaFile: r
                        }
                    }
                    var o, l, c, d = e.updateStatus;
                    if ("updating" === d) {
                        var f = {
                            fileType: "external",
                            url: "https://dummyimage.com/320x180/cccccc/fff.png&text=Loading token..."
                        };
                        return {
                            originalMediaFileType: "image",
                            inSpaceMediaFile: f,
                            originalMediaFile: f
                        }
                    }
                    if ("failed" === d) {
                        var m = {
                            fileType: "external",
                            url: "https://dummyimage.com/320x180/cccccc/fff.png&text=Failed to load token."
                        };
                        return {
                            originalMediaFileType: "image",
                            inSpaceMediaFile: m,
                            originalMediaFile: m
                        }
                    }
                    if ("awaitingInput" === d) {
                        var h = {
                            fileType: "external",
                            url: "https://dummyimage.com/320x180/cccccc/fff.png&text=awaiting nft token input..."
                        };
                        return {
                            originalMediaFileType: "image",
                            inSpaceMediaFile: h,
                            originalMediaFile: h
                        }
                    }
                    if (e.fetchingMedia) {
                        var v = {
                            fileType: "external",
                            url: "https://dummyimage.com/320x180/cccccc/fff.png&text='loading nft media...'"
                        };
                        return {
                            originalMediaFileType: "image",
                            inSpaceMediaFile: v,
                            originalMediaFile: v
                        }
                    }
                    if (s(e)) {
                        var p, x = (0, i.mF)(e.tezosToken),
                            g = null === x || void 0 === x ? void 0 : x.formats;
                        o = g ? null === (p = g[0]) || void 0 === p ? void 0 : p.mimeType : void 0, c = function(e) {
                            if (e) {
                                var t = e.split("/"),
                                    n = t[t.length - 1];
                                return "https://ipfs.io/ipfs/".concat(n)
                            }
                        }(null === x || void 0 === x ? void 0 : x.artifactUri), l = o
                    } else {
                        var q, b, y, j;
                        o = null === (q = e.token) || void 0 === q || null === (b = q.metadata) || void 0 === b ? void 0 : b.fileType, c = null === e || void 0 === e || null === (y = e.token) || void 0 === y || null === (j = y.metadata) || void 0 === j ? void 0 : j.fileUrl, l = (null === e || void 0 === e ? void 0 : e.mediaFileType) || o
                    }
                    var S = o ? a(o) : void 0,
                        w = l ? a(l) : void 0,
                        Z = void 0;
                    return c && (Z = {
                        fileType: "external",
                        url: c
                    }), {
                        inSpaceMediaFile: e.override3dMediaFile || e.mediaFile || void 0,
                        inSpaceMediaFileType: w,
                        originalMediaFile: Z,
                        originalMediaFileType: e.override3dMediaFileType && e.override3dMediaFile ? e.override3dMediaFileType : S
                    }
                }
        },
        48622: function(e, t, n) {
            "use strict";
            n.d(t, {
                q: function() {
                    return r
                }
            });
            var r = {
                attachArray: void 0,
                attachObject: void 0,
                attachFns: void 0
            }
        },
        80203: function(e, t, n) {
            "use strict";
            n.d(t, {
                Sz: function() {
                    return j
                },
                t0: function() {
                    return y
                }
            });
            var r = n(85893),
                i = n(67294),
                a = n(99477),
                o = n(82473),
                l = n(96747),
                s = n(25784),
                u = n(20390),
                c = n(32069),
                d = n(27876),
                f = n(68624),
                m = n(1422),
                h = n(15181),
                v = n(72328),
                p = n(36304),
                x = n(16609),
                g = n(5327),
                q = n(64886),
                b = n(94631),
                y = function(e) {
                    return (0, i.useMemo)((function() {
                        return (e || f._3) * d.FONT_SCALE
                    }), [e])
                },
                j = function(e) {
                    var t = e.hasBacking,
                        n = e.boxParams,
                        i = e.backingMaterial,
                        a = e.hasFrame,
                        o = e.frameConfig,
                        l = e.setMesh,
                        s = e.pointerOver$,
                        d = e.interactable,
                        f = (0, v.Hq)(s, !1);
                    return (0, r.jsxs)("group", {
                        "position-z": -.01,
                        "position-x": n.center.x,
                        "position-y": n.center.y,
                        children: [t && (0, r.jsxs)("mesh", {
                            ref: l,
                            children: [(0, r.jsx)("boxBufferGeometry", {
                                args: [n.size.x, n.size.y, 0]
                            }), (0, r.jsx)(u.Z, {
                                config: i
                            })]
                        }), ")", a && (0, r.jsx)(c.Z, {
                            config: o,
                            imageDimensions: [n.size.x, n.size.y]
                        }), d && (0, r.jsx)("group", {
                            visible: f,
                            children: (0, r.jsx)(p.b, {
                                elementWidth: n.size.x,
                                elementHeight: n.size.y,
                                frameConfig: o
                            })
                        })]
                    })
                };
            t.ZP = function(e) {
                var t, n, u, c = e.config,
                    d = e.elementId,
                    f = e.handleLoaded,
                    S = (0, s.sT)(c, q.CY),
                    w = (0, i.useState)(null),
                    Z = w[0],
                    F = w[1],
                    C = (0, i.useState)(),
                    k = C[0],
                    _ = C[1],
                    T = (0, s.Of)(c.display, g.placardDisplay);
                (0, i.useEffect)((function() {
                    Z && setTimeout((function() {
                        var e = new a.Box3;
                        Z.geometry.computeBoundingBox(), e.copy(Z.geometry.boundingBox), e.expandByScalar(T.backingOffsetScale || 0);
                        var t = new a.Vector3,
                            n = new a.Vector3;
                        e.getCenter(t), e.getSize(n), _({
                            center: t,
                            size: n
                        })
                    }))
                }), [Z, T.backingOffsetScale]);
                var M = y(T.fontSize),
                    P = (0, m.$v)(d, c),
                    E = (0, x.E)(null === P || void 0 === P ? void 0 : P.enablePointerOverLayer$),
                    I = (0, v.Hq)(null === P || void 0 === P ? void 0 : P.pointerOver$, !1),
                    A = (0, i.useCallback)((function(e) {
                        E(e), F(e)
                    }), [E, F]);
                (0, i.useLayoutEffect)((function() {
                    f && f(!!k)
                }), [k, f]);
                var D = (0, i.useMemo)((function() {
                        var e;
                        return c.offsetFromBack ? null === (e = T.frameConfig) || void 0 === e ? void 0 : e.depth : 0
                    }), [null === (t = T.frameConfig) || void 0 === t ? void 0 : t.depth, c.offsetFromBack]),
                    V = (0, b.useRefreshIfChanged)(c.text),
                    R = (0, b.useRefreshIfChanged)(c.anchorX),
                    N = (0, b.useRefreshIfChanged)(c.anchorY),
                    B = (0, b.useRefreshIfChanged)(c.maxWidth),
                    z = (0, b.useRefreshIfChanged)(c.display);
                return V || R || N || B || z ? null : (0, r.jsx)(m.Z9.Provider, {
                    value: P,
                    children: (0, r.jsxs)("group", {
                        "position-z": D,
                        children: [(0, r.jsx)(i.Suspense, {
                            fallback: null,
                            children: (0, r.jsx)(o.x, {
                                castShadow: null === (n = T.shadow) || void 0 === n ? void 0 : n.cast,
                                receiveShadow: null === (u = T.shadow) || void 0 === u ? void 0 : u.receive,
                                color: T.primaryFontColor,
                                fontSize: M,
                                maxWidth: c.maxWidth || void 0,
                                anchorX: c.anchorX,
                                anchorY: c.anchorY,
                                textAlign: c.textAlign,
                                font: l.Z[T.font || "Roboto"],
                                onSync: A,
                                children: c.text
                            })
                        }), k && (0, r.jsx)(j, {
                            boxParams: k,
                            hasBacking: T.hasBacking,
                            backingMaterial: T.backingMaterial,
                            frameConfig: T.frameConfig,
                            hasFrame: T.hasFrame,
                            pointerOver$: null === P || void 0 === P ? void 0 : P.pointerOver$,
                            interactable: S.interactable
                        }), I && k && (0, r.jsx)(p.b, {
                            elementWidth: k.size.x,
                            elementHeight: k.size.y,
                            frameConfig: T.frameConfig && T.hasFrame ? T.frameConfig : void 0
                        }), !(null === P || void 0 === P ? void 0 : P.disableInteractivity) && c.interactable && c.interactableConfig && (0, r.jsx)(h.Z, {
                            interactionConfig: c.interactableConfig
                        })]
                    })
                })
            }
        },
        62077: function(e, t, n) {
            "use strict";
            n.d(t, {
                G$: function() {
                    return k
                },
                nC: function() {
                    return w
                },
                y5: function() {
                    return Z
                }
            });
            var r = n(26042),
                i = n(69396),
                a = n(99534),
                o = n(10253),
                l = n(85893),
                s = n(67294),
                u = n(9923),
                c = n(99477),
                d = n(32069),
                f = n(25784),
                m = n(68624),
                h = n(16609),
                v = n(36304),
                p = n(21169),
                x = n(53349),
                g = n(72328),
                q = n(7091),
                b = n(50682),
                y = n(1422),
                j = n(41230),
                S = n(48622),
                w = function(e) {
                    var t = e.cropLeft,
                        n = e.cropRight,
                        r = e.cropTop,
                        i = e.cropBottom,
                        a = e.videoWidth,
                        o = e.videoHeight,
                        l = [n - t, i - r];
                    return [a * l[0], o * l[1]]
                },
                Z = function(e) {
                    var t = e.texture,
                        n = e.config,
                        a = e.planeDimensions,
                        o = e.frameConfig,
                        p = e.setMesh,
                        x = e.legacyRotation,
                        b = e.handleLoaded,
                        Z = (0, f.G$)(n, m.LG),
                        F = Z.cropTop,
                        C = void 0 === F ? 0 : F,
                        k = Z.cropBottom,
                        _ = void 0 === k ? 1 : k,
                        T = Z.cropLeft,
                        M = void 0 === T ? 0 : T,
                        P = Z.cropRight,
                        E = void 0 === P ? 1 : P,
                        I = (null === a || void 0 === a ? void 0 : a.width) || 0,
                        A = (null === a || void 0 === a ? void 0 : a.height) || 0,
                        D = (0, s.useMemo)((function() {
                            return w({
                                cropBottom: _,
                                cropTop: C,
                                cropLeft: M,
                                cropRight: E,
                                videoWidth: I,
                                videoHeight: A
                            })
                        }), [_, C, M, E, I, A]),
                        V = (0, s.useMemo)((function() {
                            return [D[0], D[1]]
                        }), [D]),
                        R = (0, j.TW)(x),
                        N = (0, s.useContext)(y.Z9),
                        B = (0, h.E)(null === N || void 0 === N ? void 0 : N.enablePointerOverLayer$),
                        z = (0, g.Hq)(null === N || void 0 === N ? void 0 : N.pointerOver$, !1),
                        L = (0, s.useCallback)((function(e) {
                            B(e), p && p(e)
                        }), [p, B]),
                        O = (0, s.useState)(null),
                        H = O[0],
                        U = O[1];
                    (0, s.useEffect)((function() {
                        if (H && !Z.isEquirectangular) {
                            var e = H.getAttribute("uv");
                            e.setXY(0, M, _), e.setXY(1, E, _), e.setXY(2, M, C), e.setXY(3, E, C), H.attributes.uv.needsUpdate = !0
                        }
                    }), [H, _, C, M, E, Z.isEquirectangular]);
                    var $ = (0, s.useMemo)((function() {
                        return Z.side || m.Hj
                    }), [Z.side]);
                    return (0, s.useLayoutEffect)((function() {
                        b && b(!0)
                    }), [b]), (0, l.jsx)(l.Fragment, {
                        children: (0, l.jsxs)("group", {
                            position: (0, u.wQ)(Z.position),
                            rotation: (0, u.wQ)(Z.rotation),
                            children: [(0, l.jsx)(q.xu, (0, i.Z)((0, r.Z)({}, S.q), {
                                children: (0, l.jsxs)("group", {
                                    "rotation-y": R,
                                    children: [(0, l.jsxs)("mesh", {
                                        ref: L,
                                        children: [Z.isEquirectangular ? (0, l.jsx)("sphereBufferGeometry", {
                                            args: [D[0], 24, 24],
                                            ref: U
                                        }) : (0, l.jsx)("planeBufferGeometry", {
                                            args: D,
                                            ref: U
                                        }), (0, l.jsx)("meshBasicMaterial", {
                                            map: t,
                                            opacity: Z.transparent ? Z.opacity : void 0,
                                            transparent: Z.transparent,
                                            side: "Double Sided" === $ ? c.DoubleSide : c.FrontSide
                                        })]
                                    }), o && (0, l.jsx)("group", {
                                        children: (0, l.jsx)(d.Z, {
                                            config: o,
                                            imageDimensions: V
                                        })
                                    })]
                                })
                            })), V && (0, l.jsx)("group", {
                                visible: z,
                                "rotation-y": R,
                                children: (0, l.jsx)(v.b, {
                                    elementWidth: V[0],
                                    elementHeight: V[1],
                                    frameConfig: o || void 0
                                })
                            })]
                        })
                    })
                },
                F = function(e) {
                    return (0, l.jsx)(b.Z, {
                        planeDimensions: e.planeDimensions,
                        texture: e.texture,
                        side: c.FrontSide,
                        transparent: !1,
                        frameConfig: e.frameConfig,
                        hasFrame: e.hasFrame,
                        loading: e.loading,
                        handleLoaded: e.handleLoaded,
                        curve: e.curve,
                        curveOrientation: e.curveOrientation,
                        curved: e.curved,
                        legacyRotation: e.legacyRotation
                    })
                },
                C = function(e) {
                    var t = e.playSurfaces,
                        n = e.planeDimensions,
                        s = (0, a.Z)(e, ["playSurfaces", "planeDimensions"]),
                        u = (0, f.G$)(t, m.DW);
                    return (null === n || void 0 === n ? void 0 : n.width) && (null === n || void 0 === n ? void 0 : n.height) ? (0, l.jsx)(l.Fragment, {
                        children: Object.entries(u).filter((function(e) {
                            return null !== (0, o.Z)(e, 2)[1]
                        })).map((function(e) {
                            var t = (0, o.Z)(e, 2),
                                a = t[0],
                                u = t[1];
                            return (0, l.jsx)(Z, (0, i.Z)((0, r.Z)({}, s), {
                                config: u || void 0,
                                planeDimensions: n
                            }), a)
                        }))
                    }) : null
                },
                k = function(e) {
                    var t = e.model,
                        n = (e.serverTimeOffset$, e.texture),
                        r = e.handleLoaded,
                        i = (0, p.PP)(null === t || void 0 === t ? void 0 : t.modelFile),
                        a = (0, s.useState)(),
                        o = a[0],
                        u = a[1];
                    return (0, s.useEffect)((function() {
                        if (n) {
                            var e = n.flipY;
                            return n.flipY = !1, n.needsUpdate = !0,
                                function() {
                                    n.flipY = e, n.needsUpdate = !0
                                }
                        }
                    }), [n]), (0, l.jsxs)(l.Fragment, {
                        children: [(0, l.jsx)("meshBasicMaterial", {
                            map: n,
                            ref: u,
                            side: c.DoubleSide
                        }), i && t && (0, l.jsx)(s.Suspense, {
                            fallback: null,
                            children: (0, l.jsx)(x.vK, {
                                modelUrl: i,
                                config: t,
                                overrideMaterial: o,
                                handleLoaded: r
                            })
                        })]
                    })
                },
                _ = function(e) {
                    var t = e.mediaGeometryType,
                        n = void 0 === t ? m.tF : t,
                        o = e.mediaPlaySurfaces,
                        s = e.mediaGeometryModel,
                        u = e.mediaGeometryCurve,
                        c = e.loading,
                        d = (0, a.Z)(e, ["mediaGeometryType", "mediaPlaySurfaces", "mediaGeometryModel", "mediaGeometryCurve", "loading"]);
                    return "plane" === n ? (0, l.jsx)(F, (0, i.Z)((0, r.Z)({}, d), {
                        loading: c,
                        curved: !1
                    })) : "curved" === n ? (0, l.jsx)(F, (0, i.Z)((0, r.Z)({}, d), {
                        loading: c,
                        curved: !0,
                        curve: (null === u || void 0 === u ? void 0 : u.curveAngle) || m.MW,
                        curveOrientation: (null === u || void 0 === u ? void 0 : u.orientation) || m.BF
                    })) : "planes" === n ? (0, l.jsx)(C, (0, i.Z)((0, r.Z)({}, d), {
                        playSurfaces: o
                    })) : (0, l.jsx)(k, (0, r.Z)({
                        model: s
                    }, d))
                },
                T = (0, s.memo)((function(e) {
                    var t = e.inFlexBox,
                        n = (0, a.Z)(e, ["inFlexBox"]);
                    return t ? (0, l.jsx)(q.xu, (0, i.Z)((0, r.Z)({}, S.q), {
                        children: (0, l.jsx)(_, (0, r.Z)({}, n))
                    })) : (0, l.jsx)(_, (0, r.Z)({}, n))
                }));
            t.ZP = T
        },
        27876: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                FONT_SCALE: function() {
                    return m
                }
            });
            var r = n(26042),
                i = n(69396),
                a = n(85893),
                o = n(67294),
                l = n(97157),
                s = n(71711),
                u = n(90180),
                c = n(38008),
                d = n(16609),
                f = n(45804);
            (0, n(51442).e)({
                TextGeometry: s.M
            });
            var m = .01;
            t.default = function(e) {
                var t, n, s = e.config,
                    h = (0, o.useState)(null),
                    v = h[0],
                    p = h[1];
                (0, o.useEffect)((function() {
                    var e = new l.Z(u);
                    p(e)
                }), []);
                var x = (0, o.useState)(),
                    g = x[0],
                    q = x[1],
                    b = s.height,
                    y = (0, o.useMemo)((function() {
                        return (s.legacyFontScale ? m / s.legacyFontScale : m) * (s.size || 16)
                    }), [s.size, s.legacyFontScale]);
                (0, o.useEffect)((function() {
                    g && g.computeVertexNormals()
                }), [b, y, g]);
                var j = (0, o.useContext)(f.X9),
                    S = (0, d.E)(null === j || void 0 === j ? void 0 : j.enablePointerOverLayer$),
                    w = (0, o.useMemo)((function() {
                        return [s.text, (0, i.Z)((0, r.Z)({
                            font: v
                        }, s.textGeometry), {
                            height: s.height,
                            size: y
                        })]
                    }), [s.height, s.text, s.textGeometry, v, y]);
                return v ? (0, a.jsxs)("mesh", {
                    ref: S,
                    castShadow: null === (t = s.shadow) || void 0 === t ? void 0 : t.cast,
                    receiveShadow: null === (n = s.shadow) || void 0 === n ? void 0 : n.receive,
                    children: [(0, a.jsx)("textGeometry", {
                        ref: q,
                        args: w
                    }), (0, a.jsx)("meshPhongMaterial", {
                        color: (0, c.C)(s.frontColor),
                        flatShading: !0
                    })]
                }) : null
            }
        },
        54717: function(e, t, n) {
            "use strict";
            n.d(t, {
                Q: function() {
                    return I
                },
                Z: function() {
                    return A
                }
            });
            var r = n(26042),
                i = n(69396),
                a = n(85893),
                o = n(67294),
                l = n(35800),
                s = n(49637),
                u = n(6493),
                c = n(82473),
                d = [0, .5, 0],
                f = [0, .1, .1],
                m = [0, -.1, .1],
                h = [3, 1],
                v = function(e) {
                    var t = e.error;
                    e.resetErrorBoundary;
                    return (0, a.jsx)(a.Fragment, {
                        children: (0, a.jsxs)(s.V, {
                            position: d,
                            follow: !0,
                            lockX: !1,
                            lockY: !1,
                            lockZ: !1,
                            children: [(0, a.jsx)(u.JO, {
                                args: h,
                                "material-color": "white"
                            }), (0, a.jsxs)(o.Suspense, {
                                fallback: null,
                                children: [(0, a.jsx)(c.x, {
                                    color: "#f29f05",
                                    position: f,
                                    children: "Could not load element because of an error"
                                }), (0, a.jsx)(c.x, {
                                    color: "gray",
                                    position: m,
                                    overflowWrap: "normal",
                                    maxWidth: 2.5,
                                    fontSize: .05,
                                    children: t.message
                                })]
                            })]
                        })
                    })
                },
                p = n(86704),
                x = n(45804),
                g = n(25784),
                q = n(68624),
                b = n(9923),
                y = n(8396),
                j = n(86958),
                S = n(95432),
                w = n(29815),
                Z = n(20424),
                F = n(57195),
                C = n(72328),
                k = n(72441),
                _ = n(99477),
                T = n(85062),
                M = function(e) {
                    var t = e.elementGroup,
                        n = e.highlight,
                        r = (0, o.useRef)(t),
                        i = n ? "cyan" : void 0;
                    return (0, T.H)(r, _.BoxHelper, i), null
                };
            var P = function(e) {
                    var t = e.editorState,
                        n = e.elementConfig,
                        l = e.pointerOverElementGroup,
                        s = e.parentPath,
                        u = e.elementId,
                        c = e.disableCursorIntersectionDetection,
                        d = e.handleElementLoaded,
                        f = e.elementsTree,
                        m = null === t || void 0 === t ? void 0 : t.nestedForm,
                        h = (0, o.useMemo)((function() {
                            return (0, w.Z)(s).concat([u])
                        }), [s, u]),
                        v = (0, C.Hq)(t.status$, null),
                        p = (null === t || void 0 === t ? void 0 : t.userHasEditPermission) && (v === F.I.editingElement || v === F.I.selectingElement),
                        x = null === t || void 0 === t ? void 0 : t.setCurrentEditingElementAndPath,
                        g = null === t || void 0 === t ? void 0 : t.spaceId,
                        q = (0, o.useCallback)((function(e) {
                            x && g && x({
                                path: h,
                                initialValues: n,
                                element: l || void 0
                            })
                        }), [n, h, l, x, g]),
                        b = (0, Z.a)({
                            editorState: t,
                            elementPath: h,
                            elementGroup: l,
                            disabled: n.locked || !p,
                            handleSelected: q
                        }),
                        y = b.isEditingMe,
                        S = b.pointerOver,
                        _ = function(e) {
                            var t = e.isEditingMe,
                                n = e.editingElementConfig,
                                a = e.updatingElementId,
                                o = e.elementId,
                                l = e.elementConfig;
                            if (!t) return l;
                            if (!n) return l;
                            if (a !== o) return l;
                            if ((0, k.L7)(l)) {
                                var s = l.nft;
                                return (0, i.Z)((0, r.Z)({}, n), {
                                    nft: (0, i.Z)((0, r.Z)({}, n.nft), {
                                        mediaFile: s.mediaFile,
                                        superrareTokenHistory: s.superrareTokenHistory,
                                        superrareVersion: s.superrareVersion,
                                        token: s.token,
                                        tezosToken: s.tezosToken,
                                        tezosCreators: s.tezosCreators,
                                        updateStatus: s.updateStatus,
                                        fetchingMedia: s.fetchingMedia
                                    }),
                                    transform: l.transform
                                })
                            }
                            return n
                        }({
                            editingElementConfig: null === m || void 0 === m ? void 0 : m.values,
                            updatingElementId: null === m || void 0 === m ? void 0 : m.updatedId,
                            elementConfig: n,
                            isEditingMe: y,
                            elementId: u
                        }),
                        T = p && !(!l || !y && !S);
                    return (0, a.jsxs)(a.Fragment, {
                        children: [(0, a.jsx)(j.Z, {
                            elementConfig: _,
                            elementId: u,
                            parentPath: s,
                            disableCursorIntersectionDetection: c,
                            showHelper: T,
                            handleElementLoaded: d,
                            elementsTree: f
                        }), T && l && (0, a.jsx)(M, {
                            elementGroup: l,
                            highlight: y
                        })]
                    })
                },
                E = n(71505),
                I = [p.Ry],
                A = function(e) {
                    var t = e.elementConfig,
                        n = e.elementId,
                        s = e.elementConfig,
                        u = s.transform,
                        c = s.hideOnMobile,
                        d = (0, o.useContext)(y.rU),
                        f = (0, x.Z9)(d, t),
                        m = (0, g.sT)(u, q.$e),
                        h = (0, o.useState)(),
                        p = h[0],
                        w = h[1];
                    (0, o.useEffect)((function() {
                        w({
                            position: (0, b.wQ)(m.position),
                            rotation: (0, b.wQ)(m.rotation),
                            scale: (0, b.wQ)(m.scale)
                        })
                    }), [m]);
                    var Z = (0, o.useState)(!0),
                        F = Z[0],
                        C = Z[1],
                        k = null === d || void 0 === d ? void 0 : d.transformControlsMode,
                        _ = null === d || void 0 === d ? void 0 : d.currentEditingElementPath;
                    (0, o.useEffect)((function() {
                        if (k && _) return _[_.length - 1] === e.elementId ? (C(!0), function() {
                            C(!1)
                        }) : void 0
                    }), [k, e.elementId, _]);
                    var T = (0, o.useState)(!1),
                        M = T[0],
                        A = T[1];
                    (0, o.useEffect)((function() {
                        c ? (0, E.gn)() && A(!0) : A(!1)
                    }), [c]);
                    var D = e.handleElementLoaded,
                        V = (0, o.useCallback)((function() {
                            D && D(n)
                        }), [D, n]);
                    (0, o.useEffect)((function() {
                        M && V()
                    }), [M, V]);
                    var R = (0, o.useCallback)((function(e, t) {
                        console.error(e, t), V()
                    }), [V]);
                    return M ? null : (0, a.jsx)(a.Fragment, {
                        children: (0, a.jsxs)("group", {
                            name: n,
                            ref: f.setElementGroup,
                            layers: I,
                            position: F ? null === p || void 0 === p ? void 0 : p.position : void 0,
                            rotation: F ? null === p || void 0 === p ? void 0 : p.rotation : void 0,
                            scale: F ? null === p || void 0 === p ? void 0 : p.scale : void 0,
                            children: [(0, a.jsx)(l.ErrorBoundary, {
                                FallbackComponent: v,
                                onError: R,
                                resetKeys: Object.values(t),
                                children: (0, a.jsx)(x.X9.Provider, {
                                    value: f,
                                    children: d ? (0, a.jsx)(P, (0, i.Z)((0, r.Z)({}, e), {
                                        editorState: d,
                                        pointerOverElementGroup: f.elementGroup,
                                        handleElementLoaded: D
                                    })) : (0, a.jsx)(j.Z, (0, i.Z)((0, r.Z)({}, e), {
                                        handleElementLoaded: D
                                    }))
                                })
                            }), e.elementsTree[n] && (0, a.jsx)(S.Z, (0, i.Z)((0, r.Z)({}, e), {
                                parentId: n,
                                handleElementLoaded: D,
                                editorState: d
                            }))]
                        }, n)
                    })
                }
        },
        95432: function(e, t, n) {
            "use strict";
            var r = n(10253),
                i = n(29815),
                a = n(85893),
                o = n(67294),
                l = n(54717),
                s = n(71799);
            t.Z = function(e) {
                var t = e.elementsTree,
                    n = e.parentPath,
                    u = e.elementId,
                    c = e.editorState,
                    d = e.handleElementLoaded,
                    f = (0, o.useMemo)((function() {
                        return u ? (0, i.Z)(n).concat([u]) : n
                    }), [u, n]),
                    m = t[u || s.c];
                return m ? (0, a.jsx)("group", {
                    children: Object.entries(m.configs).map((function(e) {
                        var n = (0, r.Z)(e, 2),
                            i = n[0],
                            o = n[1];
                        return (0, a.jsx)(l.Z, {
                            elementConfig: o,
                            elementId: i,
                            parentPath: f,
                            editorState: c,
                            handleElementLoaded: d,
                            elementsTree: t
                        }, i)
                    }))
                }) : null
            }
        },
        27844: function(e, t, n) {
            "use strict";
            n.d(t, {
                l: function() {
                    return z
                },
                Z: function() {
                    return O
                }
            });
            var r = n(26042),
                i = n(69396),
                a = n(85893),
                o = n(67294),
                l = n(14788),
                s = n(47568),
                u = n(99534),
                c = n(29815),
                d = n(34051),
                f = n.n(d),
                m = n(99477),
                h = n(51442),
                v = n(57027),
                p = n(86704),
                x = n(58148),
                g = n.n(x),
                q = function(e, t) {
                    e && (t ? e.classList.add(g().cursorCrosshair) : e.classList.remove(g().cursorCrosshair))
                },
                b = function(e) {
                    var t;
                    if (e) {
                        var n = (new m.Matrix3).getNormalMatrix(e.object.matrixWorld);
                        return null === (t = e.face) || void 0 === t ? void 0 : t.normal.applyMatrix3(n).normalize()
                    }
                },
                y = n(72328),
                j = n(69604),
                S = n(17447),
                w = n(62898),
                Z = n(86958),
                F = n(82492),
                C = n.n(F),
                k = n(59971),
                _ = n(96381),
                T = n(24759),
                M = function(e) {
                    var t = e.elementToRender,
                        n = e.editorState,
                        l = (0, u.Z)(e, ["elementToRender", "editorState"]),
                        d = (0, o.useRef)(),
                        x = (0, o.useMemo)((function() {
                            return C()({}, t.defaults, t.toSave)
                        }), [t.defaults, t.toSave]),
                        g = function() {
                            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                                t = e.disable,
                                n = void 0 !== t && t,
                                r = e.disableNormal,
                                i = void 0 !== r && r,
                                a = (0, o.useMemo)((function() {
                                    var e = new m.Raycaster;
                                    return e.far = p.vA, e.layers.set(p.xg), e
                                }), []),
                                l = (0, h.w)(),
                                s = l.camera,
                                u = l.scene,
                                c = l.gl,
                                d = (0, o.useRef)({
                                    mouse: {
                                        x: 0,
                                        y: 0
                                    },
                                    mouseDirection: new m.Vector3,
                                    mouseOrigin: s.position
                                }),
                                f = (0, o.useCallback)((function(e) {
                                    var t = e.clientX / window.innerWidth * 2 - 1,
                                        r = -e.clientY / window.innerHeight * 2 + 1;
                                    a.setFromCamera({
                                        x: t,
                                        y: r
                                    }, s);
                                    var o = a.ray.direction,
                                        l = a.ray.origin,
                                        f = null;
                                    n || (f = a.intersectObjects(u.children, !0)[0]), f ? (d.current = {
                                        intersection: f,
                                        mouse: {
                                            x: e.clientX,
                                            y: e.clientY
                                        },
                                        normal: i ? void 0 : b(f),
                                        mouseOrigin: l,
                                        mouseDirection: o
                                    }, q(c.domElement, !0)) : (d.current = {
                                        mouse: {
                                            x: e.clientX,
                                            y: e.clientY
                                        },
                                        mouseDirection: o,
                                        mouseOrigin: l
                                    }, q(c.domElement, !1))
                                }), [n, a, s, u.children, i, c.domElement]);
                            return (0, o.useEffect)((function() {
                                var e = (0, v.R)(c.domElement, "mousemove").subscribe((function(e) {
                                    return f(e)
                                }));
                                return function() {
                                    e.unsubscribe(), q(c.domElement, !1)
                                }
                            }), [c, f]), d
                        }({
                            disable: (0, o.useMemo)((function() {
                                return ![S.H.image, S.H.nft, S.H.video, S.H.placard].includes(x.elementType)
                            }), [x.elementType])
                        }),
                        y = (0, w.Xi)({
                            editorState: n,
                            previewRef: d,
                            toShowInitially: x,
                            toSave: t.toSave,
                            pushUndoItem: n.undoInstance.pushUndoItem
                        }),
                        F = (0, o.useRef)(new m.Vector3),
                        M = (0, o.useRef)(new m.Vector3);
                    (0, h.x)((function() {
                        if (g.current) {
                            var e = g.current,
                                t = e.normal,
                                n = e.intersection,
                                r = e.mouseDirection,
                                i = e.mouseOrigin,
                                a = d.current;
                            if (a)
                                if (t && n) {
                                    var o, l = n.point.clone().add(t);
                                    a.lookAt(l), (o = a.position).set.apply(o, (0, c.Z)(n.point.toArray()))
                                } else {
                                    var s = F.current,
                                        u = M.current;
                                    s.copy(i), u.copy(r).multiplyScalar(5), s.add(u), a.position.copy(s), a.rotation.set(0, 0, 0)
                                }
                        }
                    }));
                    var P = x.elementType === S.H.group;
                    return (0, o.useEffect)((function() {
                        P && y(!0)
                    }), [P, y]), (0, o.useEffect)((function() {
                        var e = (0, j.H)(500).pipe((0, k.P)(), (0, _.w)((function() {
                            return (0, v.R)(document.body, "click").pipe((0, T.z)((0, s.Z)(f().mark((function e() {
                                return f().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.next = 2, y();
                                        case 2:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })))))
                        }))).subscribe();
                        return function() {
                            e.unsubscribe()
                        }
                    }), [y]), (0, o.useEffect)((function() {
                        return n.setMessage("Point your mouse to where you want to place this ".concat(x.elementType)),
                            function() {
                                n.setMessage(null)
                            }
                    }), [n, x.elementType]), (0, a.jsx)(a.Fragment, {
                        children: (0, a.jsx)("group", {
                            ref: d,
                            children: (0, a.jsx)(Z.Z, (0, i.Z)((0, r.Z)({}, l), {
                                elementId: "preview",
                                elementConfig: x,
                                disableCursorIntersectionDetection: !0,
                                showHelper: !0,
                                handleElementLoaded: void 0
                            }))
                        })
                    })
                },
                P = function(e) {
                    var t = e.editorState,
                        n = (0, u.Z)(e, ["editorState"]),
                        i = (0, y.Hq)(t.previewElement$, null);
                    return null == i ? null : (0, a.jsx)(M, (0, r.Z)({
                        editorState: t,
                        elementToRender: i
                    }, n))
                },
                E = n(8396),
                I = n(95432),
                A = n(75981),
                D = n(5152),
                V = n.n(D),
                R = n(71799),
                N = n(19514),
                B = V()((function() {
                    return n.e(898).then(n.bind(n, 898))
                }), {
                    loadableGenerated: {
                        webpack: function() {
                            return [898]
                        }
                    }
                }),
                z = (0, o.createContext)(null),
                L = [],
                O = (0, o.memo)((function(e) {
                    var t = e.spaceId,
                        n = (0, o.useMemo)((function() {
                            return l.h.collection("spaces").doc(t).collection("elementsTree")
                        }), [t]),
                        s = (0, o.useMemo)((function() {
                            return A.F.includes(t)
                        }), [t]),
                        u = (0, R.Z)({
                            spaceId: t
                        }),
                        c = (0, N.Z)({
                            totalInitialElements: null === u || void 0 === u ? void 0 : u.initialCount,
                            initialElements: null === u || void 0 === u ? void 0 : u.initialElements,
                            handleProgressChanged: e.handleProgressChanged,
                            spaceId: t
                        });
                    return u ? (0, a.jsx)(a.Fragment, {
                        children: (0, a.jsx)(E.rU.Consumer, {
                            children: function(t) {
                                return (0, a.jsxs)(a.Fragment, {
                                    children: [(0, a.jsx)(z.Provider, {
                                        value: (0, r.Z)({}, e),
                                        children: (0, a.jsxs)(a.Fragment, {
                                            children: [(0, a.jsx)(I.Z, (0, i.Z)((0, r.Z)({}, e), {
                                                parentPath: L,
                                                elementId: null,
                                                elementsCollectionRef: n,
                                                editorState: t,
                                                elementsTree: u.elements,
                                                handleElementLoaded: c.handleLoaded
                                            })), s && (0, a.jsx)(B, {})]
                                        })
                                    }), t && (0, a.jsx)(P, (0, i.Z)((0, r.Z)({}, e), {
                                        parentPath: L,
                                        editorState: t,
                                        elementsTree: u.elements
                                    }))]
                                })
                            }
                        })
                    }) : null
                }))
        },
        86958: function(e, t, n) {
            "use strict";
            n.d(t, {
                Z: function() {
                    return re
                }
            });
            var r = n(26042),
                i = n(69396),
                a = n(29815),
                o = n(85893),
                l = n(67294),
                s = n(80203),
                u = n(53349),
                c = n(99477),
                d = n(68624),
                f = n(85062),
                m = n(65449),
                h = n(80498),
                v = n(25784),
                p = function(e, t) {
                    if (!e) return {};
                    var n = t || {},
                        r = n.mapSize,
                        i = void 0 === r ? 1024 : r,
                        a = n.cameraSize,
                        o = void 0 === a ? 150 : a,
                        l = n.cameraFar,
                        s = void 0 === l ? 3500 : l,
                        u = n.bias;
                    return {
                        castShadow: e,
                        "shadow-mapSize-width": i,
                        "shadow-mapSize-height": i,
                        "shadow-camera-left": -o,
                        "shadow-camera-right": o,
                        "shadow-camera-top": o,
                        "shadow-camera-bottom": -o,
                        "shadow-camera-far": s,
                        "shadow-bias": void 0 === u ? -1e-4 : u
                    }
                },
                x = function(e) {
                    var t = e.spotLight,
                        n = (0, l.useRef)(t);
                    return (0, f.H)(n, c.SpotLightHelper), null
                },
                g = function(e) {
                    var t = e.pointLight,
                        n = (0, l.useRef)(t),
                        r = .1 * (1 + t.intensity + t.distance);
                    return (0, f.H)(n, c.PointLightHelper, r), null
                },
                q = function(e) {
                    var t = e.directionalLight,
                        n = (0, l.useRef)(t);
                    return (0, f.H)(n, c.DirectionalLightHelper), null
                },
                b = {
                    x: 0,
                    y: 2,
                    z: 0
                },
                y = {
                    x: 0,
                    y: 0,
                    z: 0
                },
                j = function(e) {
                    return (0, l.useMemo)((function() {
                        return (0, r.Z)({}, b, e || {})
                    }), [e])
                },
                S = function(e) {
                    return (0, l.useMemo)((function() {
                        return (0, r.Z)({}, y, e || {})
                    }), [e])
                },
                w = function(e) {
                    var t = e.values,
                        n = e.showHelper,
                        a = (0, l.useState)(null),
                        s = a[0],
                        u = a[1],
                        f = (0, l.useState)(new c.Object3D)[0],
                        h = t.color,
                        x = t.intensity,
                        g = (0, v.sT)(t.directional, d.mQ),
                        b = g.castShadow,
                        y = g.shadowConfig,
                        w = g.target,
                        Z = g.position,
                        F = (0, l.useMemo)((function() {
                            return p(b, y)
                        }), [b, y]),
                        C = j(Z),
                        k = S(w),
                        _ = (0, m.useSpring)({
                            to: {
                                color: h,
                                intensity: x,
                                x: C.x,
                                y: C.y,
                                z: C.z,
                                targetX: k.x,
                                targetY: k.y,
                                targetZ: k.z
                            }
                        });
                    return (0, o.jsxs)(o.Fragment, {
                        children: [(0, o.jsx)(m.a.directionalLight, (0, i.Z)((0, r.Z)({
                            color: _.color,
                            intensity: _.intensity,
                            "position-x": _.x,
                            "position-y": _.y,
                            "position-z": _.z,
                            target: f
                        }, F), {
                            ref: u
                        })), s && (0, o.jsx)(m.a.primitive, {
                            object: s.target,
                            "position-x": _.targetX,
                            "position-y": _.targetY,
                            "position-z": _.targetZ
                        }), n && s && (0, o.jsx)(q, {
                            directionalLight: s
                        })]
                    })
                },
                Z = function(e) {
                    var t = e.values,
                        n = e.showHelper,
                        a = (0, l.useState)(),
                        s = a[0],
                        u = a[1],
                        f = (0, l.useState)(new c.Object3D)[0],
                        h = t.color,
                        g = t.intensity,
                        q = (0, v.sT)(t.directional, d.mQ),
                        b = q.castShadow,
                        y = q.shadowConfig,
                        w = q.target,
                        Z = q.position,
                        F = (0, v.sT)(t.spot, d.jK),
                        C = F.distance,
                        k = F.angle,
                        _ = F.penumbra,
                        T = F.decay,
                        M = (0, l.useMemo)((function() {
                            return p(b, y)
                        }), [b, y]),
                        P = j(Z),
                        E = S(w),
                        I = (0, m.useSpring)({
                            to: {
                                color: h,
                                intensity: g,
                                x: P.x,
                                y: P.y,
                                z: P.z,
                                angle: k,
                                distance: C,
                                penumbra: _,
                                decay: T,
                                targetX: E.x,
                                targetY: E.y,
                                targetZ: E.z
                            }
                        });
                    return (0, o.jsxs)(o.Fragment, {
                        children: [(0, o.jsx)(m.a.spotLight, (0, i.Z)((0, r.Z)({
                            color: I.color,
                            intensity: I.intensity,
                            "position-x": I.x,
                            "position-y": I.y,
                            "position-z": I.z,
                            target: f
                        }, M), {
                            ref: u,
                            distance: I.distance,
                            angle: I.angle,
                            penumbra: I.penumbra,
                            decay: I.decay
                        })), s && (0, o.jsx)(m.a.primitive, {
                            object: s.target,
                            "position-x": I.targetX,
                            "position-y": I.targetY,
                            "position-z": I.targetZ
                        }), n && s && (0, o.jsx)(x, {
                            spotLight: s
                        })]
                    })
                },
                F = function(e) {
                    var t = e.values,
                        n = e.showHelper,
                        r = (0, l.useState)(),
                        i = r[0],
                        a = r[1],
                        s = t.color,
                        u = t.intensity,
                        c = t.decay,
                        d = t.distance,
                        f = (0, m.useSpring)({
                            to: {
                                color: s,
                                intensity: u,
                                distance: d,
                                decay: c
                            }
                        });
                    return (0, o.jsxs)(o.Fragment, {
                        children: [(0, o.jsx)(m.a.pointLight, {
                            color: f.color,
                            intensity: f.intensity,
                            ref: a,
                            distance: f.distance,
                            decay: f.decay
                        }), n && i && (0, o.jsx)(g, {
                            pointLight: i
                        })]
                    })
                },
                C = function(e) {
                    var t = e.config,
                        n = e.showHelper,
                        r = (0, v.sT)(t, d.PW),
                        i = r.kind || d.gs;
                    return i === h.i.directional ? (0, o.jsx)(w, {
                        values: r,
                        showHelper: n
                    }) : i === h.i.spot ? (0, o.jsx)(Z, {
                        values: r,
                        showHelper: n
                    }) : i === h.i.point ? (0, o.jsx)(F, {
                        values: r,
                        showHelper: n
                    }) : null
                },
                k = n(75207),
                _ = n(5152),
                T = n.n(_),
                M = n(72441),
                P = n(74979),
                E = n(51442),
                I = n(58631),
                A = n(64886),
                D = n(21169),
                V = n(36277),
                R = n(72328),
                N = n(92238),
                B = n(42961),
                z = n(68732),
                L = n(20336),
                O = n(38700),
                H = function() {
                    var e = (0, O.Z)("/models/Speaker.glb").model;
                    return e ? (0, o.jsx)("primitive", {
                        object: e
                    }) : null
                },
                U = function(e) {
                    var t = e.config,
                        n = e.lastActive,
                        r = e.muted,
                        i = e.showHelper,
                        a = e.elementTransform,
                        s = (0, v.QW)(t, A.fj),
                        u = s.playSettings,
                        d = (0, l.useContext)(V.u),
                        f = (0, l.useState)(),
                        m = f[0],
                        h = f[1],
                        p = (0, E.w)().camera,
                        x = (0, l.useCallback)((function() {
                            if (!m) return 0;
                            var e = new c.Vector3;
                            return m.getWorldPosition(e), p.position.distanceToSquared(e)
                        }), [m, p]),
                        g = (0, B.b)({
                            initialized$: null === d || void 0 === d ? void 0 : d.initialized$,
                            playSettings: u,
                            serverTimeOffset$: null === d || void 0 === d ? void 0 : d.serverTimeOffset$,
                            playStartTime: n,
                            disabled: !1,
                            getDistanceFromSoundSquared: x
                        }),
                        q = g.setMediaDuration,
                        b = g.shouldPlay,
                        y = g.seekTime,
                        j = (0, l.useCallback)((function(e) {
                            var t = e.target.duration;
                            q(t)
                        }), [q]),
                        S = (0, l.useState)(null),
                        w = S[0],
                        Z = S[1],
                        F = (0, k.xw)({
                            media: w
                        }).playOrPauseMedia,
                        C = b;
                    (0, z.mc)({
                        media: w,
                        play: C,
                        seekTime: y
                    }, F);
                    var _ = (0, D.PP)(null === t || void 0 === t ? void 0 : t.audioFile),
                        T = (0, R.Hq)(null === d || void 0 === d ? void 0 : d.listener$, null);
                    return (0, o.jsxs)("group", {
                        ref: h,
                        children: [_ && (0, o.jsxs)(o.Fragment, {
                            children: [(0, o.jsx)(I.Z, {
                                children: (0, o.jsx)("audio", {
                                    crossOrigin: "anonymous",
                                    controls: !0,
                                    playsInline: !0,
                                    loop: !0,
                                    onLoadedData: j,
                                    ref: Z,
                                    preload: "metadata",
                                    muted: r,
                                    src: _
                                })
                            }), T && w && m && !r && (0, o.jsx)(N.ZP, {
                                listener: T,
                                play: C,
                                soundConfig: s.positionalAudio,
                                mediaElement: w,
                                spatialAudioEnabled: null === d || void 0 === d ? void 0 : d.spatialAudioEnabled,
                                parentElement: m
                            })]
                        }), ");", i && (0, o.jsxs)(o.Fragment, {
                            children: [(0, o.jsx)(l.Suspense, {
                                fallback: null,
                                children: (0, o.jsx)(H, {})
                            }), (0, o.jsx)(L.Z, {
                                positionalAudioConfig: s.positionalAudio,
                                elementTransform: a,
                                audio: w || null,
                                maxPlayDistance: s.playSettings.maxDistance,
                                alwaysShow: !0
                            })]
                        })]
                    })
                },
                $ = T()((function() {
                    return Promise.resolve().then(n.bind(n, 63441))
                }), {
                    loadableGenerated: {
                        webpack: function() {
                            return [63441]
                        }
                    }
                }),
                G = T()((function() {
                    return Promise.resolve().then(n.bind(n, 94631))
                }), {
                    loadableGenerated: {
                        webpack: function() {
                            return [94631]
                        }
                    }
                }),
                W = T()((function() {
                    return n.e(5528).then(n.bind(n, 95528))
                }), {
                    loadableGenerated: {
                        webpack: function() {
                            return [95528]
                        }
                    }
                }),
                Y = T()((function() {
                    return Promise.resolve().then(n.bind(n, 27386))
                }), {
                    loadableGenerated: {
                        webpack: function() {
                            return [27386]
                        }
                    }
                }),
                K = T()((function() {
                    return Promise.resolve().then(n.bind(n, 27876))
                }), {
                    loadableGenerated: {
                        webpack: function() {
                            return [27876]
                        }
                    }
                }),
                X = T()((function() {
                    return n.e(1467).then(n.bind(n, 1467))
                }), {
                    loadableGenerated: {
                        webpack: function() {
                            return [1467]
                        }
                    }
                }),
                Q = T()((function() {
                    return Promise.resolve().then(n.bind(n, 52849))
                }), {
                    loadableGenerated: {
                        webpack: function() {
                            return [52849]
                        }
                    }
                }),
                J = T()((function() {
                    return n.e(8781).then(n.bind(n, 98781))
                }), {
                    loadableGenerated: {
                        webpack: function() {
                            return [98781]
                        }
                    }
                }),
                ee = T()((function() {
                    return Promise.resolve().then(n.bind(n, 84129))
                }), {
                    loadableGenerated: {
                        webpack: function() {
                            return [84129]
                        }
                    }
                }),
                te = function(e) {
                    var t = e.elementConfig,
                        n = (0, l.useMemo)((function() {
                            return (0, a.Z)(e.parentPath).concat([e.elementId])
                        }), [e.elementId, e.parentPath]);
                    return (0, o.jsxs)(o.Fragment, {
                        children: [M.vP(t) && (0, o.jsx)(u.ZP, (0, i.Z)((0, r.Z)({}, e), {
                            config: t.model
                        })), M.Gs(t) && (0, o.jsx)(K, (0, r.Z)({
                            config: t.text
                        }, e)), M.Or(t) && (0, o.jsx)(Y, (0, i.Z)((0, r.Z)({}, e), {
                            config: t.image
                        })), M.RQ(t) && (0, o.jsx)(C, {
                            config: t.light
                        }), M.Wv(t) && (0, o.jsx)(k.ZP, (0, i.Z)((0, r.Z)({}, e), {
                            config: t.video,
                            lastActive: t.lastActive,
                            elementTransform: t.transform
                        })), M.F0(t) && (0, o.jsx)(U, (0, i.Z)((0, r.Z)({}, e), {
                            config: t.audio,
                            lastActive: t.lastActive,
                            elementTransform: t.transform
                        })), M.qC(t) && (0, o.jsx)($, (0, r.Z)({
                            config: t.terrain
                        }, e)), M.Jf(t) && (0, o.jsx)(s.ZP, (0, i.Z)((0, r.Z)({}, e), {
                            config: t.placard
                        })), M.L7(t) && (0, o.jsx)(G, (0, i.Z)((0, r.Z)({}, e), {
                            config: t.nft,
                            elementTransform: t.transform
                        })), M.Ij(t) && (0, o.jsx)(J, (0, i.Z)((0, r.Z)({}, e), {
                            path: n,
                            config: t.screenShare
                        })), M.Id(t) && (0, o.jsx)(X, (0, i.Z)((0, r.Z)({}, e), {
                            path: n,
                            config: t.broadcastZone
                        })), M.m3(t) && (0, o.jsx)(Q, (0, i.Z)((0, r.Z)({}, e), {
                            transform: t.transform,
                            config: t.reflectorSurface
                        })), M.ni(t) && (0, o.jsx)(W, (0, i.Z)((0, r.Z)({}, e), {
                            transform: t.transform,
                            config: t.portal
                        })), M.uf(t) && (0, o.jsx)(ee, (0, i.Z)((0, r.Z)({}, e), {
                            config: t.water
                        }))]
                    })
                },
                ne = [P.H.model, P.H.image, P.H.video, P.H.nft, P.H.water, P.H.terrain],
                re = function(e) {
                    var t = e.elementId,
                        n = e.handleElementLoaded,
                        a = e.elementConfig,
                        s = a.elementType,
                        u = a.active,
                        c = a.deleted,
                        d = (0, l.useCallback)((function(e) {
                            e && n && n(t)
                        }), [n, t]);
                    return (0, l.useLayoutEffect)((function() {
                        (!1 === u || !!c || !ne.includes(s)) && d(!0)
                    }), [d, s, u, c]), (0, o.jsx)(te, (0, i.Z)((0, r.Z)({}, e), {
                        handleLoaded: d
                    }))
                }
        },
        71799: function(e, t, n) {
            "use strict";
            n.d(t, {
                c: function() {
                    return s
                }
            });
            var r = n(14924),
                i = n(26042),
                a = n(69396),
                o = n(14788),
                l = n(67294),
                s = "root";

            function u(e, t) {
                var n = t === s ? 0 : 1,
                    r = e[t];
                return r ? Object.keys(r.configs).reduce((function(t, n) {
                    return t + u(e, n)
                }), 0) + n : n
            }

            function c(e, t) {
                var n = t === s ? new Set : new Set([t]),
                    r = e[t];
                return r ? (Object.keys(r.configs).forEach((function(t) {
                    var r = c(e, t);
                    Array.from(r.values()).forEach((function(e) {
                        return n.add(e)
                    }))
                })), n) : n
            }
            t.Z = function(e) {
                var t = e.spaceId,
                    n = (0, l.useMemo)((function() {
                        return o.h.collection("spaces").doc(t).collection("elementsTree")
                    }), [t]),
                    d = (0, l.useState)(),
                    f = d[0],
                    m = d[1];
                return (0, l.useEffect)((function() {
                    m(void 0);
                    var e = n.onSnapshot((function(e) {
                        m((function(t) {
                            if (!t) {
                                var n = function(e) {
                                    return Array.from(e.docChanges()).filter((function(e) {
                                        return "removed" !== e.type
                                    })).reduce((function(e, t) {
                                        var n = t.doc.data();
                                        if (!1 === n.active || n.deleted) return e;
                                        var o = n.parentId || s,
                                            l = e[o] || {
                                                numInitialChildren: 0,
                                                configs: {}
                                            },
                                            u = t.doc.id,
                                            c = (0, a.Z)((0, i.Z)({}, l.configs), (0, r.Z)({}, u, n)),
                                            d = {
                                                configs: c,
                                                numInitialChildren: Object.keys(c).length
                                            };
                                        return (0, a.Z)((0, i.Z)({}, e), (0, r.Z)({}, o, d))
                                    }), {})
                                }(e);
                                return {
                                    elements: n,
                                    initialCount: u(n, s),
                                    initialElements: c(n, s)
                                }
                            }
                            var o = function(e) {
                                var t = e.existing,
                                    n = e.snapshot;
                                return Array.from(n.docChanges()).reduce((function(e, t) {
                                    var n, o, l = t.doc.data(),
                                        u = "removed" === t.type || !1 === l.active || !!l.deleted,
                                        c = l.parentId || s,
                                        d = (0, i.Z)({}, (null === (n = e[c]) || void 0 === n ? void 0 : n.configs) || {}),
                                        f = t.doc.id;
                                    u ? delete d[f] : d = (0, a.Z)((0, i.Z)({}, d), (0, r.Z)({}, f, l));
                                    var m = {
                                        configs: d,
                                        numInitialChildren: (null === (o = e[c]) || void 0 === o ? void 0 : o.numInitialChildren) || 0
                                    };
                                    return (0, a.Z)((0, i.Z)({}, e), (0, r.Z)({}, c, m))
                                }), t)
                            }({
                                existing: t.elements,
                                snapshot: e
                            });
                            return (0, a.Z)((0, i.Z)({}, t), {
                                elements: o
                            })
                        }))
                    }));
                    return function() {
                        return e()
                    }
                }), [n]), f
            }
        },
        19514: function(e, t, n) {
            "use strict";
            n.d(t, {
                T: function() {
                    return s
                }
            });
            var r = n(26042),
                i = n(69396),
                a = n(46182),
                o = n(86528),
                l = n(67294),
                s = function() {
                    var e = (0, l.useState)(0),
                        t = e[0];
                    return {
                        fullyLoaded: (t || 0) >= 1,
                        elementsLoadedProgress: t,
                        setElementLoadedProgress: e[1]
                    }
                };
            t.Z = function(e) {
                var t = e.totalInitialElements,
                    n = e.initialElements,
                    s = e.handleProgressChanged,
                    u = e.spaceId,
                    c = (0, l.useState)({
                        loadedElements: new Set,
                        numberLoaded: 0
                    }),
                    d = c[0],
                    f = c[1];
                (0, l.useEffect)((function() {
                    f({
                        loadedElements: new Set,
                        numberLoaded: 0
                    })
                }), [u]);
                var m = (0, l.useCallback)((function(e) {
                    f((function(t) {
                        var n = new Set(Array.from(t.loadedElements));
                        return n.add(e), (0, i.Z)((0, r.Z)({}, t), {
                            numberLoaded: n.size,
                            loadedElements: n
                        })
                    }))
                }), []);
                (0, l.useEffect)((function() {}), [d.loadedElements, n]);
                var h = d.numberLoaded;
                return (0, l.useEffect)((function() {
                    if ("undefined" !== typeof t && s) {
                        var e = 0 === t ? 1 : (h || 0) / t;
                        e >= 1 && (0, a.Bu)(o.hE), s(e)
                    }
                }), [h, t, s]), (0, r.Z)({
                    handleLoaded: m
                }, d)
            }
        },
        92238: function(e, t, n) {
            "use strict";
            n.d(t, {
                ZP: function() {
                    return g
                }
            });
            var r = n(10253),
                i = n(85893),
                a = n(67294),
                o = n(75142),
                l = n(55709),
                s = n(99477),
                u = n(68624),
                c = n(72328),
                d = n(8077),
                f = n(91200),
                m = n(51442),
                h = n(89233),
                v = n(26564),
                p = function(e) {
                    var t = e.mediaElement,
                        n = e.soundConfig,
                        r = e.listener,
                        o = e.play,
                        l = e.setAudioPlaying,
                        s = (0, a.useState)(),
                        c = s[0],
                        d = s[1],
                        f = (0, a.useState)(null),
                        m = f[0],
                        h = f[1];
                    (0, a.useEffect)((function() {
                        d(r.context.createMediaElementSource(t))
                    }), [t, r]),
                    function(e) {
                        var t = e.positionalAudio,
                            n = e.soundConfig,
                            r = void 0 === n ? (0, u.Ow)() : n;
                        (0, a.useEffect)((function() {
                            null === t || void 0 === t || t.setRefDistance(r.refDistance || 5)
                        }), [t, r.refDistance]), (0, a.useEffect)((function() {
                            null === t || void 0 === t || t.setRolloffFactor(r.rollOffFactor || 2)
                        }), [t, r.rollOffFactor]), (0, a.useEffect)((function() {
                            null === t || void 0 === t || t.setDistanceModel("exponential")
                        }), [t, r.distanceModel]), (0, a.useEffect)((function() {
                            null === t || void 0 === t || t.setMaxDistance(r.maxDistance || 1e4)
                        }), [t, r.maxDistance])
                    }({
                        positionalAudio: m,
                        soundConfig: n
                    });
                    var v = function(e) {
                            var t = e.positionalAudio,
                                n = e.audioSource,
                                r = (0, a.useState)(!1),
                                i = r[0],
                                o = r[1];
                            return (0, a.useEffect)((function() {
                                t && n && (t.setNodeSource(n), o(!0))
                            }), [t, n]), (0, a.useEffect)((function() {
                                if (t) return function() {
                                    t.pause(), t.disconnect()
                                }
                            }), [t]), (0, a.useEffect)((function() {
                                if (n) return function() {
                                    n.disconnect()
                                }
                            }), [n]), i
                        }({
                            positionalAudio: m,
                            audioSource: c
                        }),
                        p = function(e) {
                            var t = e.audioSourceNodeSet,
                                n = e.play,
                                r = e.positionalAudio,
                                i = (0, a.useState)(!1),
                                o = i[0],
                                l = i[1];
                            return (0, a.useEffect)((function() {
                                t && r && (n ? (r.play(), l(!0)) : (r.pause(), l(!1)))
                            }), [n, r, t]), o
                        }({
                            audioSourceNodeSet: v,
                            play: o,
                            positionalAudio: m
                        });
                    return (0, a.useEffect)((function() {
                        l && l(p)
                    }), [p, l]), c ? (0, i.jsx)("group", {
                        children: (0, i.jsx)("positionalAudio", {
                            args: [r],
                            ref: h
                        })
                    }) : null
                },
                x = function(e) {
                    var t = e.mediaElement,
                        n = e.soundConfig,
                        i = e.play,
                        u = e.parentElement,
                        p = (0, c.j7)(i),
                        x = function(e) {
                            var t = (0, m.w)().camera,
                                n = (0, a.useState)(new h.X([t.position.x, t.position.y, t.position.z]))[0],
                                r = (0, c.Qy)();
                            return (0, a.useEffect)((function() {
                                (0, v.F)(e).pipe((0, l.U)((function() {
                                    return [t.position.x, t.position.y, t.position.z]
                                })), r()).subscribe(n)
                            }), [t, n, r, e]), n
                        }(500),
                        g = (0, c.j7)(t),
                        q = (0, c.j7)(u),
                        b = (0, c.j7)(n),
                        y = (0, c.Qy)();
                    return (0, a.useEffect)((function() {
                        (0, o.aj)([p, x, g, q, b]).pipe((0, l.U)((function(e) {
                            var t = (0, r.Z)(e, 5),
                                n = t[0],
                                i = t[1],
                                a = t[2],
                                o = t[3],
                                l = t[4],
                                u = 0;
                            if (n) {
                                var c = new s.Vector3;
                                o.getWorldPosition(c);
                                var m = (0, f.Dv)(i, [c.x, c.y, c.z]);
                                u = (0, d.D)(m, l)
                            }
                            if (u !== a.volume && !isNaN(u)) try {
                                a.volume = u
                            } catch (h) {
                                console.error(h)
                            }
                        }))).pipe(y()).subscribe()
                    }), [g, q, p, x, b, y]), null
                },
                g = (0, a.memo)((function(e) {
                    var t = e.mediaElement,
                        n = e.soundConfig,
                        r = void 0 === n ? (0, u.Ow)() : n,
                        a = e.listener,
                        o = e.play,
                        l = e.setAudioPlaying,
                        s = e.spatialAudioEnabled,
                        c = e.parentElement;
                    return s && "global" !== r.mode ? (0, i.jsx)(p, {
                        mediaElement: t,
                        soundConfig: r,
                        listener: a,
                        play: o,
                        setAudioPlaying: l
                    }) : (0, i.jsx)(x, {
                        mediaElement: t,
                        soundConfig: r,
                        play: o,
                        parentElement: c
                    })
                }))
        },
        75207: function(e, t, n) {
            "use strict";
            n.d(t, {
                M2: function() {
                    return ie
                },
                Y7: function() {
                    return re
                },
                ZP: function() {
                    return ae
                },
                xw: function() {
                    return J
                },
                sd: function() {
                    return ne
                }
            });
            var r = n(47568),
                i = n(26042),
                a = n(69396),
                o = n(99534),
                l = n(34051),
                s = n.n(l),
                u = n(85893),
                c = n(67294),
                d = n(51442),
                f = n(99477),
                m = n(5327),
                h = n(25784),
                v = n(74979),
                p = (0, c.memo)((function(e) {
                    var t = e.setPlayMesh,
                        n = e.elementSize,
                        r = (0, c.useMemo)((function() {
                            if (n) return [2 * n.width, 2 * n.height]
                        }), [n]);
                    return (0, u.jsx)("group", {
                        ref: t,
                        visible: !1,
                        "rotation-z": Math.PI,
                        children: (0, u.jsxs)("mesh", {
                            children: [(0, u.jsx)("planeBufferGeometry", {
                                args: r
                            }), (0, u.jsx)("meshBasicMaterial", {
                                transparent: !0,
                                opacity: .5,
                                color: "#fff",
                                side: f.DoubleSide,
                                attach: "material"
                            })]
                        })
                    })
                })),
                x = function(e) {
                    var t = e.playObjectContainer,
                        n = (0, o.Z)(e, ["playObjectContainer"]);
                    return t ? (0, u.jsx)(u.Fragment, {
                        children: (0, d.g)((0, u.jsx)(p, (0, i.Z)({}, n)), t)
                    }) : (0, u.jsx)(p, (0, i.Z)({}, n))
                },
                g = n(62077),
                q = n(68732),
                b = n(92238),
                y = n(41230),
                j = n(85769),
                S = function(e) {
                    var t = e.filePath,
                        n = e.imageRef,
                        r = e.metadataDetermined,
                        i = (0, j.m)(t);
                    return (0, c.useEffect)((function() {
                        if (i.image) {
                            var e = i.image,
                                t = e.naturalWidth,
                                a = e.naturalHeight;
                            r({
                                aspectRatio: t / a
                            }), n(i)
                        }
                    }), [i, r, n]), null
                },
                w = (0, c.memo)((function(e) {
                    var t = e.config,
                        n = e.imageRef,
                        r = e.metadataDetermined,
                        i = e.visible,
                        a = void 0 === i || i,
                        o = e.settings,
                        l = (0, c.useState)(!1),
                        s = l[0],
                        d = l[1];
                    (0, c.useEffect)((function() {
                        a && d(!0)
                    }), [a]);
                    var f = (0, c.useMemo)((function() {
                        return (0, y.DL)({
                            storedVideo: t.storedVideo,
                            storedVideos: t.storedVideos,
                            liveStream: t.liveStream,
                            type: t.type,
                            thumbnailConfig: o
                        })
                    }), [t.storedVideo, t.storedVideos, t.liveStream, t.type, o]);
                    return f && s ? (0, u.jsx)(c.Suspense, {
                        fallback: null,
                        children: (0, u.jsx)(S, {
                            filePath: f,
                            imageRef: n,
                            metadataDetermined: r
                        })
                    }) : null
                })),
                Z = n(15181),
                F = n(1422),
                C = n(72328),
                k = n(29894),
                _ = f.LinearFilter,
                T = f.LinearFilter,
                M = function(e) {
                    var t = e.videoElement,
                        n = e.imageTexture,
                        r = e.useImage,
                        i = e.transparent,
                        a = (0, c.useState)(),
                        o = a[0],
                        l = a[1],
                        s = (0, c.useMemo)((function() {
                            return i ? f.RGBAFormat : f.RGBFormat
                        }), [i]);
                    return (0, c.useEffect)((function() {
                        n && (n.format = s, n.encoding = f.sRGBEncoding, n.wrapS = f.RepeatWrapping, n.wrapT = f.RepeatWrapping, n.needsUpdate = !0)
                    }), [n, s]), (0, c.useEffect)((function() {
                        if (t) {
                            var e = new f.VideoTexture(t, void 0, f.RepeatWrapping, f.RepeatWrapping, T, _, s);
                            return e.needsUpdate = !0, e.encoding = f.sRGBEncoding, l(e),
                                function() {
                                    e.dispose()
                                }
                        }
                    }), [t, s]), (0, c.useMemo)((function() {
                        return r ? n : o || n
                    }), [r, n, o])
                },
                P = n(18446),
                E = n.n(P),
                I = n(77854),
                A = n(41120),
                D = n(35117),
                V = n(99863),
                R = n(282),
                N = n(89445),
                B = (0, A.Z)((function(e) {
                    return (0, D.Z)({
                        button: {
                            margin: e.spacing(1),
                            borderRadius: 0,
                            opacity: .8,
                            fontFamily: N.$S
                        }
                    })
                })),
                z = function(e) {
                    var t = e.playOrPauseVideo,
                        n = e.legacyRotation,
                        r = (0, c.useCallback)((function() {
                            t(!0)
                        }), [t]),
                        i = B(),
                        a = (0, c.useMemo)((function() {
                            return n ? -Math.PI / 2 : 0
                        }), [n]);
                    return (0, u.jsx)("group", {
                        "rotation-y": a,
                        "scale-x": .5,
                        "scale-y": .5,
                        children: (0, u.jsx)(I.V, {
                            transform: !0,
                            children: (0, u.jsx)(R.Z, {
                                variant: "contained",
                                color: "default",
                                className: i.button,
                                startIcon: (0, u.jsx)(V.Z, {}),
                                onClick: r,
                                children: "Play"
                            })
                        })
                    })
                },
                L = n(71505),
                O = n(29137),
                H = n(36277),
                U = n(64886),
                $ = n(68624),
                G = n(20336),
                W = n(42961),
                Y = n(8396),
                K = n(44923),
                X = function(e) {
                    var t = e.children,
                        n = (0, c.useRef)(null),
                        r = (0, c.useRef)(null),
                        i = (0, c.useRef)(new f.Vector3(1, 1, 1)),
                        a = (0, c.useRef)(new f.Vector3(1, 1, 1));
                    return (0, d.x)((function() {
                        var e = n.current,
                            t = r.current;
                        t && e && (e.getWorldScale(i.current), a.current.set(1, 1, 1), a.current.divide(i.current), t.scale.set(a.current.x, a.current.y, a.current.z))
                    })), (0, u.jsx)("group", {
                        ref: n,
                        children: (0, u.jsx)("group", {
                            ref: r,
                            children: t
                        })
                    })
                },
                Q = function(e) {
                    var t, n = e.playSettings;
                    e.elementTransform;
                    return !!(null === (t = (0, c.useContext)(Y.rU)) || void 0 === t ? void 0 : t.activeEditors[K.G]) ? (0, u.jsx)(u.Fragment, {
                        children: !(null === n || void 0 === n ? void 0 : n.auto) && (0, u.jsx)(X, {
                            children: (0, u.jsxs)("mesh", {
                                children: [(0, u.jsx)("meshBasicMaterial", {
                                    color: "white",
                                    transparent: !0,
                                    opacity: .5,
                                    side: f.DoubleSide
                                }), (0, u.jsx)("sphereBufferGeometry", {
                                    args: [(null === n || void 0 === n ? void 0 : n.maxDistance) || $.yv, 32, 16]
                                })]
                            })
                        })
                    }) : null
                },
                J = function(e) {
                    var t = e.media,
                        n = (0, c.useMemo)((function() {
                            return (0, L.gn)() || (0, L.zc)()
                        }), []),
                        i = (0, c.useState)(!1),
                        a = i[0],
                        o = i[1],
                        l = (0, c.useCallback)(function() {
                            var e = (0, r.Z)(s().mark((function e(r) {
                                return s().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            if (t) {
                                                e.next = 2;
                                                break
                                            }
                                            return e.abrupt("return");
                                        case 2:
                                            if (!r) {
                                                e.next = 42;
                                                break
                                            }
                                            if (t.paused) {
                                                e.next = 5;
                                                break
                                            }
                                            return e.abrupt("return");
                                        case 5:
                                            return e.prev = 5, console.log("playing video"), e.next = 9, t.play();
                                        case 9:
                                            return o(!1), e.abrupt("return");
                                        case 13:
                                            return e.prev = 13, e.t0 = e.catch(5), console.log("failed to play video...retrying"), e.prev = 16, e.next = 19, t.play();
                                        case 19:
                                            console.log("succeeded to play video after retry"), o(!1), e.next = 28;
                                            break;
                                        case 23:
                                            e.prev = 23, e.t1 = e.catch(16), console.error("failed to play after retry"), o(!0), console.error(e.t1);
                                        case 28:
                                            if (!n) {
                                                e.next = 30;
                                                break
                                            }
                                            return e.abrupt("return");
                                        case 30:
                                            return e.prev = 30, e.next = 33, (0, O.GT)(t, 2, 300).toPromise();
                                        case 33:
                                            t.paused || o(!1), e.next = 40;
                                            break;
                                        case 36:
                                            e.prev = 36, e.t2 = e.catch(30), console.error("failed to try to replay"), console.error(e.t2);
                                        case 40:
                                            e.next = 46;
                                            break;
                                        case 42:
                                            if (!t.paused) {
                                                e.next = 44;
                                                break
                                            }
                                            return e.abrupt("return");
                                        case 44:
                                            console.log("pausing video"), t.pause();
                                        case 46:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, null, [
                                    [5, 13],
                                    [16, 23],
                                    [30, 36]
                                ])
                            })));
                            return function(t) {
                                return e.apply(this, arguments)
                            }
                        }(), [o, t, n]);
                    return {
                        playOrPauseMedia: l,
                        failedToPlay: a,
                        cannotPlayUnMutedWithoutManual: n
                    }
                },
                ee = function(e) {
                    var t = e.values,
                        n = e.lastActive,
                        r = e.handleLoaded,
                        o = e.muted,
                        l = e.playObject,
                        s = e.inFlexBox,
                        v = e.settings,
                        p = e.visible,
                        y = void 0 === p || p,
                        j = (0, c.useState)(null),
                        S = j[0],
                        Z = j[1],
                        F = (0, c.useState)(),
                        _ = F[0],
                        T = F[1],
                        P = (0, c.useContext)(H.u),
                        E = (0, C.Hq)(null === P || void 0 === P ? void 0 : P.modalOpen$, !1),
                        I = (0, d.w)().camera,
                        A = (0, c.useState)(),
                        D = A[0],
                        V = A[1],
                        R = l || D,
                        N = v.playSettings,
                        B = v.videoThumbnail,
                        L = (0, c.useState)(new f.Raycaster)[0];
                    (0, c.useEffect)((function() {
                        N.maxDistance && (L.far = N.maxDistance)
                    }), [L, N.maxDistance]);
                    var O = (0, c.useCallback)((function() {
                            return !!R && (L.setFromCamera({
                                x: 0,
                                y: 0
                            }, I), 0 !== L.intersectObject(R, !0).length)
                        }), [I, R, L]),
                        U = (0, W.y)({
                            viewDirectionIntersectsPlayGeometry: O,
                            initialized$: null === P || void 0 === P ? void 0 : P.initialized$,
                            playSettings: N,
                            serverTimeOffset$: null === P || void 0 === P ? void 0 : P.serverTimeOffset$,
                            playStartTime: n,
                            disabled: !y
                        }),
                        G = U.setMediaDuration,
                        Y = U.shouldPlay,
                        K = U.seekTime,
                        X = (0, c.useState)(!1),
                        Q = X[0],
                        ee = X[1],
                        te = (0, c.useState)(!1),
                        ne = te[0],
                        re = te[1];
                    (0, c.useEffect)((function() {
                        Y && re(!0)
                    }), [Y]);
                    var ie = (0, c.useState)(),
                        ae = ie[0],
                        oe = ie[1],
                        le = (0, c.useState)("loading"),
                        se = le[0],
                        ue = le[1],
                        ce = (0, c.useCallback)((function(e) {
                            var n = e.aspectRatio,
                                i = e.duration;
                            if (n) {
                                var a = (0, k.r)(n, t.width, $.sS);
                                a && oe({
                                    width: a.width,
                                    height: a.height
                                }), G(i), r && r(!0), ue("loaded")
                            } else G(void 0), ue("failed")
                        }), [G, t.width, r]),
                        de = (0, c.useCallback)((function(e) {
                            var t = e.target,
                                n = t.videoWidth,
                                r = t.videoHeight;
                            n && r && (t.width = n, t.height = r, ce({
                                aspectRatio: n / r,
                                duration: t.duration
                            }))
                        }), [ce]),
                        fe = (0, c.useCallback)((function() {
                            ee(!0)
                        }), []),
                        me = J({
                            media: S
                        }),
                        he = me.playOrPauseMedia,
                        ve = me.failedToPlay,
                        pe = me.cannotPlayUnMutedWithoutManual,
                        xe = (0, c.useCallback)((function(e) {
                            var n = e.aspectRatio;
                            if (n) {
                                var r = (0, k.r)(n, t.width, $.sS);
                                r && oe({
                                    width: r.width,
                                    height: r.height
                                }), ue("loaded")
                            }
                        }), [t.width]),
                        ge = (0, c.useMemo)((function() {
                            var e = Y && !E;
                            return {
                                showThumbnail: !e || !Q || ve,
                                play: e
                            }
                        }), [E, Y, ve, Q]),
                        qe = ge.showThumbnail,
                        be = ge.play,
                        ye = (0, c.useState)(),
                        je = ye[0],
                        Se = ye[1],
                        we = M({
                            imageTexture: _,
                            videoElement: S,
                            useImage: qe,
                            transparent: !0
                        }),
                        Ze = (0, C.Hq)(null === P || void 0 === P ? void 0 : P.listener$, null),
                        Fe = (0, h.Of)(null === t || void 0 === t ? void 0 : t.frame, m.defaultFrame);
                    return P ? (0, u.jsxs)("group", {
                        ref: Se,
                        children: [ne && (0, u.jsx)(q.ZP, {
                            videoConfig: t,
                            play: be,
                            playOrPauseMedia: he,
                            handleVideoEvent: de,
                            handleVideoStartedPlaying: fe,
                            mediaRef: Z,
                            seekTime: K,
                            media: S,
                            muted: o
                        }), ve && be && pe && (0, u.jsx)(z, {
                            playOrPauseVideo: he,
                            legacyRotation: t.legacyRotation
                        }), (0, u.jsx)(w, {
                            config: t,
                            imageRef: T,
                            metadataDetermined: xe,
                            visible: y,
                            settings: B
                        }), (0, u.jsx)(g.ZP, (0, a.Z)((0, i.Z)({
                            planeDimensions: ae
                        }, Fe), {
                            legacyRotation: t.legacyRotation,
                            handleLoaded: r,
                            texture: we,
                            serverTimeOffset$: null === P || void 0 === P ? void 0 : P.serverTimeOffset$,
                            inFlexBox: s,
                            loading: "loading" === se,
                            mediaGeometryCurve: v.geometry.mediaGeometryCurve,
                            mediaGeometryType: v.geometry.mediaGeometryType,
                            mediaGeometryModel: v.geometry.mediaGeometryModel,
                            mediaPlaySurfaces: v.geometry.mediaPlaySurfaces
                        })), Ze && S && je && !o && (0, u.jsx)(b.ZP, {
                            listener: Ze,
                            play: be && Q,
                            soundConfig: v.positionalAudio,
                            mediaElement: S,
                            spatialAudioEnabled: null === P || void 0 === P ? void 0 : P.spatialAudioEnabled,
                            parentElement: je
                        }), !N.auto && !l && (0, u.jsx)(x, {
                            setPlayMesh: V,
                            elementSize: ae
                        })]
                    }) : null
                },
                te = function(e) {
                    var t;
                    return {
                        videoType: e.type,
                        file: e.storedVideo,
                        playbackId: null === (t = e.liveStream) || void 0 === t ? void 0 : t.muxPlaybackId
                    }
                },
                ne = function(e) {
                    var t = (0, c.useState)((function() {
                            return te(e)
                        })),
                        n = t[0],
                        r = t[1],
                        i = (0, c.useState)(!1),
                        a = i[0],
                        o = i[1];
                    return (0, c.useEffect)((function() {
                        var t = te({
                            type: e.type,
                            storedVideo: e.storedVideo,
                            liveStream: e.liveStream
                        });
                        E()(n, t) || (r(t), o(!0), setTimeout((function() {
                            o(!1)
                        }), 10))
                    }), [n, e.storedVideos, e.liveStream, e.type, e.storedVideo]), a
                },
                re = function(e) {
                    return ne(e.values) ? null : (0, u.jsx)(ee, (0, i.Z)({}, e))
                },
                ie = function(e) {
                    var t = e.positionalAudioConfig,
                        n = e.elementTransform,
                        r = e.playSettings;
                    return (0, u.jsxs)(u.Fragment, {
                        children: [r && (0, u.jsx)(Q, {
                            playSettings: r,
                            elementTransform: n
                        }), t && (0, u.jsx)(u.Fragment, {
                            children: (0, u.jsx)(G.Z, {
                                audio: null,
                                elementTransform: n,
                                positionalAudioConfig: t,
                                maxPlayDistance: (null === r || void 0 === r ? void 0 : r.auto) ? void 0 : (null === r || void 0 === r ? void 0 : r.maxDistance) || $.yv
                            })
                        })]
                    })
                },
                ae = function(e) {
                    var t, n, r, l, s = e.config,
                        c = e.elementId,
                        d = e.lastActive,
                        f = e.muted,
                        p = void 0 !== f && f,
                        x = e.visible,
                        g = void 0 === x || x,
                        q = (e.showHelper, e.elementTransform),
                        b = (0, o.Z)(e, ["config", "elementId", "lastActive", "muted", "visible", "showHelper", "elementTransform"]),
                        y = (0, h.sT)(s, U.Yy),
                        j = (0, h.Of)(null === s || void 0 === s ? void 0 : s.settings, m.videoSettings),
                        S = (0, h.Of)(null === s || void 0 === s ? void 0 : s.frame, m.defaultFrame),
                        w = y.offsetFromBack && S.frameConfig.depth || 0,
                        C = (0, F.$v)(c, y);
                    return (0, u.jsxs)(u.Fragment, {
                        children: [(0, u.jsxs)(F.Z9.Provider, {
                            value: C,
                            children: [(0, u.jsx)("group", {
                                "position-z": w,
                                visible: g,
                                children: (0, u.jsx)(re, (0, a.Z)((0, i.Z)({}, b), {
                                    values: y,
                                    lastActive: d,
                                    muted: p,
                                    settings: j,
                                    visible: g
                                }))
                            }), !(null === C || void 0 === C ? void 0 : C.disableInteractivity) && y.interactable && y.interactableConfig && (0, u.jsx)(Z.Z, {
                                elementType: v.H.video,
                                elementFile: y.storedVideo || (null === (t = y.storedVideos) || void 0 === t ? void 0 : t.mp4) || (null === (n = y.storedVideos) || void 0 === n ? void 0 : n.webm),
                                interactionConfig: y.interactableConfig
                            })]
                        }), (0, u.jsx)(ie, {
                            elementTransform: q,
                            positionalAudioConfig: null === (r = y.settings) || void 0 === r ? void 0 : r.positionalAudio,
                            playSettings: null === (l = y.settings) || void 0 === l ? void 0 : l.playSettings
                        })]
                    })
                }
        },
        42961: function(e, t, n) {
            "use strict";
            n.d(t, {
                b: function() {
                    return h
                },
                y: function() {
                    return m
                }
            });
            var r = n(10253),
                i = n(72328),
                a = n(67294),
                o = n(44081),
                l = n(75142),
                s = n(26564),
                u = n(55709),
                c = n(96381),
                d = n(41931),
                f = function(e) {
                    var t = e.shouldPlay$,
                        n = e.playSettings$,
                        i = e.serverTimeOffset$,
                        a = e.playStartTimeMs$,
                        s = e.duration$;
                    return (0, l.aj)([t, n]).pipe((0, c.w)((function(e) {
                        var t = (0, r.Z)(e, 2),
                            n = t[0],
                            c = t[1];
                        return n ? function(e) {
                            var t = e.playSettings,
                                n = e.serverTimeOffset$,
                                i = e.duration$,
                                a = e.playStartTimeMs$;
                            return t.syncToTimeline ? (0, l.aj)([n, a, i]).pipe((0, u.U)((function(e) {
                                var t = (0, r.Z)(e, 3),
                                    n = t[0],
                                    i = t[1],
                                    a = void 0 === i ? 0 : i,
                                    o = t[2],
                                    l = ((new Date).getTime() - n) / 1e3,
                                    s = a / 1e3;
                                return {
                                    computedStartTime: void 0,
                                    seekTime: o ? (l - s) % o : s
                                }
                            }))) : (0, o.D)([{
                                computedStartTime: 0,
                                seekTime: void 0
                            }])
                        }({
                            duration$: s,
                            playSettings: c,
                            playStartTimeMs$: a,
                            serverTimeOffset$: i
                        }).pipe((0, u.U)((function(e) {
                            return {
                                computedStartTime: e.computedStartTime,
                                seekTime: e.seekTime,
                                shouldPlay: !0
                            }
                        }))) : (0, o.D)([{
                            shouldPlay: !1,
                            computedStartTime: 0,
                            seekTime: void 0
                        }])
                    })))
                },
                m = function(e) {
                    var t = e.playSettings,
                        n = e.initialized$,
                        m = e.serverTimeOffset$,
                        h = e.playStartTime,
                        v = e.viewDirectionIntersectsPlayGeometry,
                        p = e.disabled,
                        x = (0, a.useState)(),
                        g = x[0],
                        q = x[1],
                        b = (0, a.useState)({
                            shouldPlay: !1,
                            computedStartTime: void 0,
                            seekTime: void 0
                        }),
                        y = b[0],
                        j = y.shouldPlay,
                        S = y.computedStartTime,
                        w = y.seekTime,
                        Z = b[1],
                        F = (0, i.j7)(t),
                        C = (0, i.j7)(g),
                        k = (0, a.useMemo)((function() {
                            return null === h || void 0 === h ? void 0 : h.toDate().getTime()
                        }), [h]),
                        _ = (0, i.j7)(k),
                        T = (0, i.j7)(p);
                    return (0, a.useEffect)((function() {
                        if (n && m) {
                            var e = (0, l.aj)([n, F, T]).pipe((0, c.w)((function(e) {
                                    var t = (0, r.Z)(e, 3),
                                        n = t[0],
                                        i = t[1],
                                        a = t[2];
                                    return !n || a ? (0, o.D)([!1]) : i.auto ? (0, o.D)([!0]) : (0, s.F)(250).pipe((0, u.U)((function() {
                                        return v()
                                    })))
                                })), (0, d.x)()),
                                t = f({
                                    duration$: C,
                                    playSettings$: F,
                                    playStartTimeMs$: _,
                                    serverTimeOffset$: m,
                                    shouldPlay$: e
                                }).subscribe({
                                    next: function(e) {
                                        Z(e)
                                    }
                                });
                            return function() {
                                return t.unsubscribe()
                            }
                        }
                    }), [F, m, C, _, n, v, T]), {
                        shouldPlay: j,
                        computedStartTime: S,
                        seekTime: w,
                        setMediaDuration: q
                    }
                },
                h = function(e) {
                    var t = e.playSettings,
                        n = e.initialized$,
                        m = e.serverTimeOffset$,
                        h = e.playStartTime,
                        v = e.disabled,
                        p = e.getDistanceFromSoundSquared,
                        x = (0, a.useState)(),
                        g = x[0],
                        q = x[1],
                        b = (0, a.useState)({
                            shouldPlay: !1,
                            computedStartTime: void 0,
                            seekTime: void 0
                        }),
                        y = b[0],
                        j = y.shouldPlay,
                        S = y.computedStartTime,
                        w = y.seekTime,
                        Z = b[1],
                        F = (0, i.j7)(t),
                        C = (0, i.j7)(g),
                        k = (0, a.useMemo)((function() {
                            return null === h || void 0 === h ? void 0 : h.toDate().getTime()
                        }), [h]),
                        _ = (0, i.j7)(k),
                        T = (0, i.j7)(v);
                    return (0, a.useEffect)((function() {
                        if (n && m) {
                            var e = (0, l.aj)([n, F, T]).pipe((0, c.w)((function(e) {
                                    var t = (0, r.Z)(e, 3),
                                        n = t[0],
                                        i = t[1],
                                        a = t[2];
                                    if (!n || a) return (0, o.D)([!1]);
                                    var l = i.maxDistance || 200,
                                        c = l * l;
                                    return (0, s.F)(250).pipe((0, u.U)((function() {
                                        return p() < c
                                    })))
                                })), (0, d.x)()),
                                t = f({
                                    duration$: C,
                                    playSettings$: F,
                                    playStartTimeMs$: _,
                                    serverTimeOffset$: m,
                                    shouldPlay$: e
                                }).subscribe({
                                    next: function(e) {
                                        Z(e)
                                    }
                                });
                            return function() {
                                return t.unsubscribe()
                            }
                        }
                    }), [F, m, C, _, n, T, p]), {
                        shouldPlay: j,
                        computedStartTime: S,
                        seekTime: w,
                        setMediaDuration: q
                    }
                }
        },
        41230: function(e, t, n) {
            "use strict";
            n.d(t, {
                DL: function() {
                    return u
                },
                Oy: function() {
                    return s
                },
                TW: function() {
                    return c
                },
                c3: function() {
                    return l
                }
            });
            var r = n(68624),
                i = n(82145),
                a = n(67294),
                o = n(97917),
                l = function(e) {
                    var t = e.cropLeft,
                        n = e.cropRight,
                        r = e.cropTop;
                    return {
                        offset: {
                            x: t,
                            y: r
                        },
                        scale: {
                            x: n - t,
                            y: e.cropBottom - r
                        }
                    }
                },
                s = function(e) {
                    var t = e.width / e.height;
                    if (t > 1) {
                        var n = (t - 1) / 2;
                        return {
                            cropTop: 0,
                            cropBottom: 1,
                            cropLeft: n,
                            cropRight: 1 - n
                        }
                    }
                    var r = (1 - t) / 2;
                    return {
                        cropTop: r,
                        cropBottom: 1 - r,
                        cropLeft: 0,
                        cropRight: 1
                    }
                },
                u = function(e) {
                    var t = e.thumbnailConfig,
                        n = e.type,
                        a = void 0 === n ? "stored video" : n,
                        l = e.storedVideo,
                        s = e.storedVideos,
                        u = e.liveStream,
                        c = null === t || void 0 === t ? void 0 : t.time,
                        d = null === t || void 0 === t ? void 0 : t.width;
                    return "stored video" === a ? l ? (0, i.gu)(l, c, d) : s && s.gif ? (0, i.gu)(s.gif, c, d) : (0, r.t$)("Image") : (null === u || void 0 === u ? void 0 : u.muxPlaybackId) ? (0, o.muxThumbnailUrl)({
                        playbackId: null === u || void 0 === u ? void 0 : u.muxPlaybackId,
                        time: c,
                        width: d
                    }) : null
                },
                c = function(e) {
                    var t = (0, a.useState)(0),
                        n = t[0],
                        r = t[1];
                    return (0, a.useEffect)((function() {
                        r(e ? -Math.PI / 2 : 0)
                    }), [e]), n
                }
        },
        84129: function(e, t, n) {
            "use strict";
            n.r(t);
            var r = n(47568),
                i = n(26042),
                a = n(69396),
                o = n(99534),
                l = n(34051),
                s = n.n(l),
                u = n(85893),
                c = n(21169),
                d = n(16609),
                f = n(15820),
                m = n(67294),
                h = n(51442),
                v = n(99477),
                p = n(43225),
                x = n(25784),
                g = n(68728),
                q = n(27844),
                b = n(38700),
                y = n(45804);

            function j(e, t) {
                return S.apply(this, arguments)
            }

            function S() {
                return (S = (0, r.Z)(s().mark((function e(t, n) {
                    var r, i, a, o;
                    return s().wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return e.next = 2, (0, c.gN)(t);
                            case 2:
                                if (r = e.sent) {
                                    e.next = 5;
                                    break
                                }
                                return e.abrupt("return");
                            case 5:
                                return e.next = 7, n.loadAsync(r);
                            case 7:
                                return i = e.sent, a = i.scene.children, o = a.find((function(e) {
                                    return e.isMesh
                                })), e.abrupt("return", null === o || void 0 === o ? void 0 : o.geometry);
                            case 11:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                })))).apply(this, arguments)
            }
            var w = function(e) {
                var t = e.handleLoaded,
                    n = e.config,
                    o = n.width,
                    l = n.height,
                    x = n.isGround,
                    q = n.color,
                    S = n.reflectivity,
                    w = n.flowSpeed,
                    Z = n.scale,
                    F = n.resolution,
                    C = n.surfaceGeometryFile,
                    k = n.surfaceType,
                    _ = e.meshesChanged,
                    T = (0, m.useMemo)((function() {
                        return function(e) {
                            var t = e === g.w ? "" : "-".concat(e);
                            return ["standardAssets/textures/water_normal_1/Water_1_M_Normal".concat(t, ".jpeg"), "standardAssets/textures/water_normal_1/Water_2_M_Normal".concat(t, ".jpeg")].map(c.jz)
                        }(F)
                    }), [F]),
                    M = (0, m.useState)(),
                    P = M[0],
                    E = M[1],
                    I = (0, m.useState)(),
                    A = I[0],
                    D = I[1],
                    V = (0, m.useContext)(y.X9),
                    R = (0, d.E)(null === V || void 0 === V ? void 0 : V.enablePointerOverLayer$);
                (0, m.useEffect)((function() {
                    P && R(P)
                }), [P, R]);
                var N = (0, m.useState)(),
                    B = N[0],
                    z = N[1],
                    L = (0, m.useMemo)((function() {
                        return (0, b.O)()
                    }), []);
                (0, m.useEffect)((function() {
                    (0, r.Z)(s().mark((function e() {
                        var t;
                        return s().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    if ("3d geometry" !== k || !C) {
                                        e.next = 8;
                                        break
                                    }
                                    return e.next = 4, j(C, L);
                                case 4:
                                    (t = e.sent) && t.rotateX(Math.PI), e.next = 9;
                                    break;
                                case 8:
                                    t = new v.PlaneBufferGeometry(o, l);
                                case 9:
                                    z(t);
                                case 10:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })))()
                }), [k, C, o, l, L]), (0, m.useEffect)((function() {
                    if (B) return function() {
                        return B.dispose()
                    }
                }), [B]);
                var O = (0, h.z)(v.TextureLoader, T[0]),
                    H = (0, h.z)(v.TextureLoader, T[1]),
                    U = (0, m.useMemo)((function() {
                        return {
                            color: q,
                            reflectivity: S,
                            flowSpeed: w,
                            scale: Z,
                            textureHeight: F,
                            textureWidth: F
                        }
                    }), [q, w, S, Z, F]),
                    $ = (0, m.useState)(),
                    G = $[0],
                    W = $[1];
                return (0, m.useEffect)((function() {
                    if (O && H && B) {
                        var e = (0, a.Z)((0, i.Z)({}, U), {
                                normalMap0: O,
                                normalMap1: H
                            }),
                            t = new p.B(B, e);
                        return W(t),
                            function() {
                                t.material.dispose()
                            }
                    }
                }), [B, O, H, U]), (0, f.s)({
                    mesh: A,
                    isGround: x,
                    meshesChanged: _
                }), (0, m.useLayoutEffect)((function() {
                    t && G && t(!0)
                }), [G, t]), G ? (0, u.jsxs)("group", {
                    ref: E,
                    "rotation-x": -Math.PI / 2,
                    children: [(0, u.jsx)("primitive", {
                        object: G
                    }), B && (0, u.jsx)("mesh", {
                        geometry: B,
                        ref: D,
                        visible: !1
                    })]
                }) : null
            };
            t.default = function(e) {
                var t = e.config,
                    n = (0, o.Z)(e, ["config"]),
                    r = (0, x.QW)(t, g.Q);
                return (0, u.jsx)(m.Suspense, {
                    fallback: null,
                    children: (0, u.jsx)(q.l.Consumer, {
                        children: function(e) {
                            return (0, u.jsx)(w, (0, a.Z)((0, i.Z)({
                                config: r
                            }, n), {
                                meshesChanged: null === e || void 0 === e ? void 0 : e.meshesChanged
                            }))
                        }
                    })
                })
            }
        },
        72441: function(e, t, n) {
            "use strict";
            n.d(t, {
                F0: function() {
                    return d
                },
                Gs: function() {
                    return a
                },
                Id: function() {
                    return f
                },
                Ij: function() {
                    return u
                },
                Jf: function() {
                    return o
                },
                L7: function() {
                    return p
                },
                Or: function() {
                    return l
                },
                RQ: function() {
                    return s
                },
                Wv: function() {
                    return c
                },
                m3: function() {
                    return m
                },
                ni: function() {
                    return h
                },
                qC: function() {
                    return v
                },
                uf: function() {
                    return x
                },
                vP: function() {
                    return i
                }
            });
            var r = n(17447),
                i = function(e) {
                    return e.elementType === r.H.model
                },
                a = function(e) {
                    return e.elementType === r.H.text
                },
                o = function(e) {
                    return e.elementType === r.H.placard
                },
                l = function(e) {
                    return e.elementType === r.H.image
                },
                s = function(e) {
                    return e.elementType === r.H.light
                },
                u = function(e) {
                    return e.elementType === r.H.screenShare
                },
                c = function(e) {
                    return e.elementType === r.H.video
                },
                d = function(e) {
                    return e.elementType === r.H.audio
                },
                f = function(e) {
                    return e.elementType === r.H.broadcastZone
                },
                m = function(e) {
                    return e.elementType === r.H.reflectorSurface
                },
                h = function(e) {
                    return e.elementType === r.H.portal
                },
                v = function(e) {
                    return e.elementType === r.H.terrain
                },
                p = function(e) {
                    return e.elementType === r.H.nft
                },
                x = function(e) {
                    return e.elementType === r.H.water
                }
        },
        73759: function(e, t, n) {
            "use strict";
            var r = n(47568),
                i = n(26042),
                a = n(69396),
                o = n(10253),
                l = n(34051),
                s = n.n(l),
                u = n(85893),
                c = n(67294),
                d = n(60761),
                f = n(21169),
                m = n(51442),
                h = n(57458),
                v = n(92666),
                p = n(99477),
                x = n(86704),
                g = n(36493),
                q = "https://firebasestorage.googleapis.com/v0/b/volta-events-294715.appspot.com/o/standardAssets%2Fhdri%2Fkloppenheim_06%2Fkloppenheim_06_8k.jpg?alt=media&token=add96adf-3fd5-47c4-a0d3-d6d3dc68dbdb",
                b = "https://firebasestorage.googleapis.com/v0/b/volta-events-294715.appspot.com/o/hdri%2Fkloppenheim_06%2Fkloppenheim_06_4k.hdr?alt=media&token=beed0875-d5e7-4153-9645-1e8a0f11a13a",
                y = ["posx.jpg", "negx.jpg", "posy.jpg", "negy.jpg", "posz.jpg", "negz.jpg"];

            function j(e) {
                return S.apply(this, arguments)
            }

            function S() {
                return (S = (0, r.Z)(s().mark((function e(t) {
                    var n, r;
                    return s().wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return n = (0, h.K3)(t), r = y.map((function(e) {
                                    return "".concat(n, "/").concat(e)
                                })), e.next = 4, Promise.all(r.map((function(e) {
                                    return (0, f.km)(e)
                                })));
                            case 4:
                                return e.abrupt("return", e.sent);
                            case 5:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                })))).apply(this, arguments)
            }
            var w, Z = function() {
                    var e = (0, r.Z)(s().mark((function e(t, n) {
                        return s().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.abrupt("return", new Promise((function(e, n) {
                                        (new p.TextureLoader).load(t, (function(t) {
                                            t.mapping = p.EquirectangularReflectionMapping, t.encoding = p.sRGBEncoding, e(t)
                                        }), void 0, (function(e) {
                                            n(e)
                                        }))
                                    })));
                                case 1:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function(t, n) {
                        return e.apply(this, arguments)
                    }
                }(),
                F = function() {
                    var e = (0, r.Z)(s().mark((function e(t, n) {
                        return s().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.abrupt("return", new Promise((function(e, r) {
                                        var i = new p.PMREMGenerator(n);
                                        (new v.x).load(t, (function(t) {
                                            var n = i.fromEquirectangular(t).texture;
                                            i.dispose(), e(n)
                                        }), void 0, (function(e) {
                                            r(e)
                                        }))
                                    })));
                                case 1:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function(t, n) {
                        return e.apply(this, arguments)
                    }
                }(),
                C = function() {
                    var e = (0, r.Z)(s().mark((function e(t) {
                        var n, r, i, a;
                        return s().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    if (!t) {
                                        e.next = 11;
                                        break
                                    }
                                    if (!(n = (0, h.K3)(t))) {
                                        e.next = 11;
                                        break
                                    }
                                    return r = n.slice(n.lastIndexOf("/") + 1), e.next = 6, (0, f.km)("".concat(n, "/").concat(r, "_").concat(x.fd, ".hdr"));
                                case 6:
                                    return i = e.sent, e.next = 9, (0, f.km)("".concat(n, "/").concat(r, "_").concat(x.jB, ".jpg"));
                                case 9:
                                    return a = e.sent, e.abrupt("return", [i, a]);
                                case 11:
                                    return e.abrupt("return", [q, b]);
                                case 12:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }();
            ! function(e) {
                e.jpg = "jpg", e.jpeg = "jpeg", e.png = "png", e.hdr = "hdr"
            }(w || (w = {}));
            var k = function(e, t, n) {
                    if ("jpg" === e || "jpeg" === e || "png" === e) return Z(t, n);
                    if ("hdr" === e) return F(t, n);
                    throw Error("unknown envMap file type: ".concat(e))
                },
                _ = function(e) {
                    if ("stored" === e.fileType) return (0, f.Ix)(e.fileName);
                    if ("external" === e.fileType) return (0, f.Ix)(e.url);
                    throw Error("unknown file type ".concat(JSON.stringify(e)))
                },
                T = function(e) {
                    var t = e.customSkyBox,
                        n = t.envMap,
                        r = t.skyBox,
                        i = t.useSkyBoxAsEnvMap,
                        a = t.enableEnvMapping,
                        o = e.visible,
                        l = void 0 === o || o,
                        s = (0, m.w)().gl,
                        d = (0, c.useState)(),
                        h = d[0],
                        v = d[1],
                        p = (0, c.useState)(),
                        x = p[0],
                        g = p[1];
                    return (0, c.useEffect)((function() {
                        r && (0, f.N3)(r).then((function(e) {
                            if (!e) throw Error("Cannot get custom skybox url");
                            var t = _(r);
                            if (t && t in w) return k(t, e, s);
                            throw Error("unknown envMap file type: ".concat(t))
                        })).then((function(e) {
                            if (g(e), a) {
                                if (!i) return n ? (0, f.N3)(n).then((function(e) {
                                    if (!e) throw Error("Cannot get envMap url");
                                    var t = _(n);
                                    if (t && t in w) return k(t, e, s);
                                    throw Error("unknown envMap file type: ".concat(t))
                                })).then((function(e) {
                                    v(e)
                                })) : void 0;
                                v(e)
                            }
                        }))
                    }), [s, n, r, i, a]), l ? (0, u.jsxs)(u.Fragment, {
                        children: [(0, u.jsx)(P, {
                            texture: x
                        }), a && (0, u.jsx)(E, {
                            texture: h
                        })]
                    }) : null
                },
                M = function(e) {
                    var t = e.HDRI,
                        n = e.environmentMapping,
                        r = e.visible,
                        i = void 0 === r || r,
                        a = (0, m.w)().gl,
                        l = (0, c.useState)(),
                        s = l[0],
                        d = l[1],
                        f = (0, c.useState)(),
                        h = f[0],
                        v = f[1];
                    return (0, c.useEffect)((function() {
                        C(t).then((function(e) {
                            var t = (0, o.Z)(e, 2),
                                n = t[0],
                                r = t[1];
                            return Promise.all([F(n, a), Z(r, a)])
                        })).then((function(e) {
                            var t = (0, o.Z)(e, 2),
                                n = t[0],
                                r = t[1];
                            v(r), d(n)
                        }))
                    }), [a, t, n]), i ? (0, u.jsxs)(u.Fragment, {
                        children: [(0, u.jsx)(P, {
                            texture: h
                        }), n && (0, u.jsx)(E, {
                            texture: s
                        })]
                    }) : null
                },
                P = function(e) {
                    var t = e.texture,
                        n = (0, m.w)().scene;
                    return (0, c.useEffect)((function() {
                        if (t) return n.background = t,
                            function() {
                                n.background = null
                            }
                    }), [t, n]), null
                },
                E = function(e) {
                    var t = e.texture,
                        n = (0, m.w)().scene;
                    return (0, c.useEffect)((function() {
                        if (t) return n.environment = t,
                            function() {
                                n.background = null
                            }
                    }), [t, n]), null
                },
                I = function(e) {
                    var t = e.cubeMapFiles,
                        n = e.environmentMapping,
                        i = void 0 !== n && n,
                        a = e.visible,
                        o = void 0 === a || a,
                        l = (0, c.useState)(),
                        f = l[0],
                        m = l[1];
                    return (0, c.useEffect)((function() {
                        (0, r.Z)(s().mark((function e() {
                            var n, r;
                            return s().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, j(t);
                                    case 2:
                                        n = e.sent, r = (new d.c).load(n), m(r);
                                    case 5:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })))()
                    }), [t, i]), o ? (0, u.jsxs)(u.Fragment, {
                        children: [(0, u.jsx)(P, {
                            texture: f
                        }), i && (0, u.jsx)(E, {
                            texture: f
                        })]
                    }) : null
                },
                A = function(e) {
                    var t = e.skyBoxType,
                        n = e.skyBox,
                        r = e.environmentMapping,
                        i = e.HDRI,
                        a = e.customSkyBox,
                        o = e.visible,
                        l = void 0 === o || o;
                    return (0, u.jsxs)(u.Fragment, {
                        children: [(void 0 === t || t === g.y.cubeMap) && n && (0, u.jsx)(I, {
                            cubeMapFiles: n,
                            environmentMapping: r,
                            visible: l
                        }), t === g.y.HDRI && (0, u.jsx)(M, {
                            HDRI: i,
                            environmentMapping: r,
                            visible: l
                        }), t === g.y.customSkyBox && (0, u.jsx)(T, {
                            customSkyBox: a || {},
                            visible: l
                        })]
                    })
                },
                D = function(e) {
                    var t = e.environment,
                        n = e.visible,
                        r = void 0 === n || n,
                        o = t.ambientLightIntensity,
                        l = t.showGrid,
                        s = t.ambientLightColor,
                        d = (0, c.useMemo)((function() {
                            if (t.enableFog) return [t.fogColor || "#cdcdcd", t.fogNear || 10, t.fogFar || 300]
                        }), [t]);
                    return (0, u.jsxs)(u.Fragment, {
                        children: [l && r && (0, u.jsx)("gridHelper", {
                            position: [0, -.01, 0],
                            args: [200, 200]
                        }), (0, u.jsx)("ambientLight", {
                            intensity: o,
                            color: s,
                            visible: r
                        }), (0, u.jsx)(c.Suspense, {
                            fallback: null,
                            children: (0, u.jsx)(A, (0, a.Z)((0, i.Z)({}, t), {
                                visible: r
                            }))
                        }), d && (0, u.jsx)("fog", {
                            attach: "fog",
                            args: d,
                            visible: r
                        })]
                    })
                };
            t.Z = function(e) {
                var t = e.environment,
                    n = e.visible,
                    r = void 0 === n || n;
                return t ? (0, u.jsx)(D, {
                    environment: t,
                    visible: r
                }) : null
            }
        },
        20424: function(e, t, n) {
            "use strict";
            n.d(t, {
                e: function() {
                    return C
                },
                a: function() {
                    return F
                }
            });
            var r = n(26042),
                i = n(69396),
                a = n(10253),
                o = n(85893),
                l = n(67294),
                s = n(57195),
                u = n(1422),
                c = n(43825),
                d = n(72328),
                f = n(9923),
                m = n(34726),
                h = n(64912),
                v = n(85437),
                p = n(93969),
                x = function(e, t) {
                    var n = e(t),
                        r = n.handleUpdate,
                        i = n.path;
                    return function(e) {
                        null != i && r({
                            path: i,
                            change: (0, f.Vd)(e)
                        })
                    }
                },
                g = n(81472),
                q = n(51442),
                b = n(59888),
                y = n(99477),
                j = function(e) {
                    var t = e.transformControls,
                        n = e.setControllingCamera,
                        r = e.animateCameraPosition,
                        i = (0, l.useState)(null),
                        a = i[0],
                        s = i[1];
                    (0, l.useEffect)((function() {
                        if (t && a) return function() {
                            if (t && a) {
                                var e = function(e) {
                                    return a.enabled = !e.value
                                };
                                return t.addEventListener("dragging-changed", e),
                                    function() {
                                        return t.removeEventListener("dragging-changed", e)
                                    }
                            }
                        }()
                    }), [a, t]);
                    var u = (0, q.w)().camera,
                        c = (0, l.useMemo)((function() {
                            return u.position.clone()
                        }), [u]);
                    (0, l.useEffect)((function() {
                        if (a) return n(!0),
                            function() {
                                var e = u.position.clone();
                                r({
                                    from: e,
                                    to: c,
                                    lookAt: a.target.clone()
                                })
                            }
                    }), [n, a, u, r, c]);
                    var d = (0, l.useState)((function() {
                        var e = new y.Vector3;
                        u.getWorldDirection(e);
                        var t = u.position.clone(),
                            n = e.normalize().multiplyScalar(25);
                        return t.add(n)
                    }))[0];
                    return (0, o.jsx)(b.z, {
                        makeDefault: !0,
                        ref: s,
                        enablePan: !0,
                        target: d
                    })
                },
                S = function(e) {
                    var t = e.from,
                        n = e.target,
                        r = e.lookAt,
                        i = e.onComplete,
                        a = (0, q.w)().camera;
                    return (0, l.useEffect)((function() {
                        (0, f.cO)(t.toArray().map((function(e) {
                            return Math.round(e)
                        })), n.toArray().map((function(e) {
                            return Math.round(e)
                        }))) && i()
                    }), [t, n, i]), (0, g.useSpring)({
                        from: {
                            x: t.x,
                            y: t.y,
                            z: t.z
                        },
                        to: {
                            x: n.x,
                            y: n.y,
                            z: n.z
                        },
                        config: {
                            mass: 2,
                            friction: 50
                        },
                        onChange: function(e) {
                            var t = e.value,
                                n = t.x,
                                i = t.y,
                                o = t.z;
                            a.position.set(n, i, o), r && a.lookAt(r)
                        },
                        onRest: function() {
                            i()
                        }
                    }), null
                },
                w = function(e) {
                    var t, n, r, i = e.editorState,
                        a = e.setControllingCamera,
                        s = e.setDragging,
                        u = i.transformControls,
                        c = i.setTransformControls,
                        d = i.nestedForm,
                        f = !1 !== (null === d || void 0 === d || null === (t = d.sourceValues) || void 0 === t ? void 0 : t.active),
                        h = !0 === (null === d || void 0 === d || null === (n = d.sourceValues) || void 0 === n ? void 0 : n.deleted),
                        v = !!(null === d || void 0 === d || null === (r = d.sourceValues) || void 0 === r ? void 0 : r.locked),
                        p = f && !h && (null === i || void 0 === i ? void 0 : i.currentEditingElement),
                        x = i.cameraMode;
                    (0, l.useEffect)((function() {
                        return function() {
                            return a(!1)
                        }
                    }), [a]), (0, l.useEffect)((function() {
                        if (u) return function() {
                            if (u) {
                                var e = function(e) {
                                    return s(!!e.value)
                                };
                                return u.addEventListener("dragging-changed", e),
                                    function() {
                                        u.removeEventListener("dragging-changed", e), s(!1)
                                    }
                            }
                        }()
                    }), [s, u]);
                    var g = i.transformControlsSnap;
                    (0, l.useEffect)((function() {
                        if (p && u) return u.attach(p),
                            function() {
                                u.detach()
                            }
                    }), [p, u]), (0, l.useEffect)((function() {
                        if (u) return function() {
                            u.detach()
                        }
                    }), [u]);
                    var q = (0, l.useState)(),
                        b = q[0],
                        y = q[1],
                        w = (0, l.useCallback)((function() {
                            a(!1), y(void 0)
                        }), [a]),
                        F = i.isClosed,
                        C = !F && !!p && !!i.transformControlsMode && !v;
                    return (0, o.jsxs)(o.Fragment, {
                        children: [(0, o.jsx)(m.Y, {
                            mode: i.transformControlsMode || "translate",
                            rotationSnap: g ? Math.PI / 2 : null,
                            translationSnap: g ? .2 : null,
                            scaleSnap: g ? .1 : null,
                            ref: c,
                            enabled: C,
                            showX: C,
                            showY: C,
                            showZ: C
                        }), "orbit" === x && !F && (0, o.jsx)(j, {
                            transformControls: u,
                            animateCameraPosition: y,
                            setControllingCamera: a
                        }), b && (0, o.jsx)(S, {
                            from: b.from,
                            target: b.to,
                            onComplete: w,
                            lookAt: b.lookAt
                        }), u && d && (0, o.jsx)(Z, {
                            transformControls: u,
                            nestedForm: d
                        })]
                    })
                },
                Z = function(e) {
                    return function(e, t) {
                        var n = (0, (0, v.sb)(e).makeNestedFormProps)("transform"),
                            r = (0, p.VY)({
                                nestedForm: n,
                                defaultValues: h.$e
                            }).makeNestedFormProps,
                            i = (0, l.useMemo)((function() {
                                return x(r, "scale")
                            }), [r]),
                            o = (0, l.useMemo)((function() {
                                return x(r, "position")
                            }), [r]),
                            s = (0, l.useMemo)((function() {
                                return x(r, "rotation")
                            }), [r]),
                            u = t,
                            c = (0, a.Z)((0, d.Kz)(!1), 2),
                            f = c[0],
                            m = c[1],
                            g = (0, l.useCallback)((function() {
                                if (u) {
                                    var e = null === u || void 0 === u ? void 0 : u.object;
                                    if (e) switch (u.getMode()) {
                                        case "translate":
                                            o(e.position);
                                            break;
                                        case "rotate":
                                            s(e.rotation);
                                            break;
                                        case "scale":
                                            i(e.scale);
                                            break;
                                        default:
                                            throw new Error("invalid mode ".concat(u.getMode()))
                                    }
                                }
                            }), [u, o, s, i]);
                        (0, l.useEffect)((function() {
                            return null === u || void 0 === u || u.addEventListener("mouseUp", g),
                                function() {
                                    null === u || void 0 === u || u.removeEventListener("mouseUp", g)
                                }
                        }), [u, f, g, m])
                    }(e.nestedForm, e.transformControls), null
                },
                F = function(e) {
                    var t = e.editorState,
                        n = e.elementPath,
                        o = e.elementGroup,
                        m = e.disabled,
                        h = e.handleSelected,
                        v = null === t || void 0 === t ? void 0 : t.currentEditingElementPath,
                        p = (0, l.useMemo)((function() {
                            return v && (0, f.cO)(v, n)
                        }), [v, n]),
                        x = null === t || void 0 === t ? void 0 : t.setCurrentEditingElementAndPath;
                    (0, l.useEffect)((function() {
                        p && o && x && x((function(e) {
                            if (e) return e.element !== o ? (0, i.Z)((0, r.Z)({}, e), {
                                element: o
                            }) : e
                        }))
                    }), [p, o, x]);
                    var g = n[n.length - 1],
                        q = (0, u.SZ)(g, m),
                        b = q.clicked$,
                        y = q.pointerOver$,
                        j = (0, d.j7)(p),
                        S = null === t || void 0 === t ? void 0 : t.status$;
                    (0, l.useEffect)((function() {
                        if (S) {
                            var e = b.pipe((0, c.M)(S, j)).subscribe((function(e) {
                                var t = (0, a.Z)(e, 3),
                                    n = t[1];
                                t[2] || n !== s.I.adding && h()
                            }));
                            return function() {
                                e.unsubscribe()
                            }
                        }
                    }), [b, S, h, j]);
                    var w = (0, d.Hq)(y, !1);
                    return {
                        isEditingMe: p,
                        pointerOver: w
                    }
                },
                C = function(e) {
                    var t = e.editorState,
                        n = e.setControllingCamera,
                        r = e.setDragging;
                    return null != t && t.userHasEditPermission ? (0, o.jsx)(o.Fragment, {
                        children: (0, o.jsx)(w, {
                            editorState: t,
                            setControllingCamera: n,
                            setDragging: r
                        })
                    }) : null
                }
        },
        62898: function(e, t, n) {
            "use strict";
            n.d(t, {
                EN: function() {
                    return x
                },
                OW: function() {
                    return g
                },
                Xi: function() {
                    return q
                },
                hz: function() {
                    return p
                }
            });
            var r = n(47568),
                i = n(26042),
                a = n(69396),
                o = n(34051),
                l = n.n(o),
                s = n(29718),
                u = n(88674),
                c = n(9923),
                d = n(96486),
                f = n(67294),
                m = n(57195),
                h = n(72328),
                v = n(25507),
                p = function(e) {
                    return (0, f.useCallback)((function() {
                        e.setPreviewElement(null)
                    }), [e])
                },
                x = function(e) {
                    return (0, f.useCallback)((function() {
                        e.setCurrentEditingElementAndPath(null), e.setPreviewElement(null), e.setSaving(!1), e.setStatus(m.I.closed)
                    }), [e])
                },
                g = function(e) {
                    var t = function(e) {
                            return (0, f.useCallback)((function() {
                                return e.setStatus(m.I.selectingElement)
                            }), [e])
                        }(e),
                        n = x(e),
                        r = (0, u.bG)(e.status$);
                    return (0, f.useCallback)((function() {
                        r ? n() : t()
                    }), [n, r, t])
                },
                q = function(e) {
                    var t = e.editorState,
                        n = e.previewRef,
                        o = e.toShowInitially,
                        u = e.toSave,
                        p = e.pushUndoItem,
                        x = (0, h.Hq)(t.saving$, !1),
                        g = (0, f.useCallback)(function() {
                            var e = (0, r.Z)(l().mark((function e(r) {
                                var f, h, g, q;
                                return l().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            if (!x) {
                                                e.next = 2;
                                                break
                                            }
                                            return e.abrupt("return");
                                        case 2:
                                            if (!n.current) {
                                                e.next = 21;
                                                break
                                            }
                                            return t.setSaving(!0), t.setMessage("Saving new element..."), f = r ? {
                                                position: {
                                                    x: 0,
                                                    y: 0,
                                                    z: 0
                                                },
                                                rotation: {
                                                    x: 0,
                                                    y: 0,
                                                    z: 0
                                                }
                                            } : {
                                                position: (0, c.Vd)(n.current.position),
                                                rotation: (0, c.Vd)(n.current.rotation)
                                            }, h = (0, a.Z)((0, i.Z)({}, u), {
                                                transform: (0, d.merge)({}, u.transform, f)
                                            }), e.next = 9, (0, s.d)(t.spaceId, [], h, p);
                                        case 9:
                                            if (g = e.sent, void 0 !== (q = (0, d.last)(g.path))) {
                                                e.next = 13;
                                                break
                                            }
                                            throw new Error("Failed to get new element ID after saving");
                                        case 13:
                                            return t.setMessage("Saved!"), setTimeout((function() {
                                                return t.setMessage(null)
                                            }), 1e3), t.setPreviewElement(null), t.setCurrentEditingElementAndPath({
                                                path: [q],
                                                initialValues: (0, a.Z)((0, i.Z)({}, o), {
                                                    transform: f
                                                }),
                                                element: n.current
                                            }), t.setStatus(m.I.editingElement), t.setSaving(!1), (0, v.n)({
                                                elementType: u.elementType,
                                                userInterface: "in space"
                                            }), e.abrupt("return", q);
                                        case 21:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })));
                            return function(t) {
                                return e.apply(this, arguments)
                            }
                        }(), [x, n, t, u, p, o]);
                    return g
                }
        },
        88674: function(e, t, n) {
            "use strict";
            n.d(t, {
                UJ: function() {
                    return c
                },
                bG: function() {
                    return s
                },
                y1: function() {
                    return u
                }
            });
            var r = n(10253),
                i = n(57195),
                a = n(67294),
                o = n(55709),
                l = n(72328),
                s = function(e) {
                    return (0, l.kG)(e, i.I.closed) !== i.I.closed
                },
                u = function(e) {
                    var t = (0, r.Z)((0, l.Kz)(!1), 2),
                        n = t[0],
                        s = t[1];
                    return (0, a.useEffect)((function() {
                        if (e) {
                            var t = e.pipe((0, o.U)((function(e) {
                                return e !== i.I.closed
                            }))).subscribe(s);
                            return function() {
                                t.unsubscribe()
                            }
                        }
                    }), [s, e]), n
                },
                c = function(e) {
                    var t = (0, r.Z)((0, l.Kz)(!1), 2),
                        n = t[0],
                        s = t[1];
                    return (0, a.useEffect)((function() {
                        if (e) {
                            var t = e.pipe((0, o.U)((function(e) {
                                return e === i.I.adding
                            }))).subscribe(s);
                            return function() {
                                t.unsubscribe()
                            }
                        }
                    }), [s, e]), n
                }
        },
        52849: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return M
                }
            });
            var r = n(26042),
                i = n(69396),
                a = n(99534),
                o = n(85893),
                l = n(10253),
                s = n(67294),
                u = n(99477),
                c = n(51442),
                d = n(35878),
                f = n(51438),
                m = n(28668),
                h = n(91224),
                v = function(e) {
                    (0, m.Z)(n, e);
                    var t = (0, h.Z)(n);

                    function n() {
                        var e, r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : new u.Vector2;
                        return (0, f.Z)(this, n), (e = t.call(this, {
                            uniforms: {
                                inputBuffer: new u.Uniform(null),
                                depthBuffer: new u.Uniform(null),
                                resolution: new u.Uniform(new u.Vector2),
                                texelSize: new u.Uniform(new u.Vector2),
                                halfTexelSize: new u.Uniform(new u.Vector2),
                                kernel: new u.Uniform(0),
                                scale: new u.Uniform(1),
                                cameraNear: new u.Uniform(0),
                                cameraFar: new u.Uniform(1),
                                minDepthThreshold: new u.Uniform(0),
                                maxDepthThreshold: new u.Uniform(1),
                                depthScale: new u.Uniform(0),
                                depthToBlurRatioBias: new u.Uniform(.25)
                            },
                            fragmentShader: "#include <common>\n        #include <dithering_pars_fragment>      \n        uniform sampler2D inputBuffer;\n        uniform sampler2D depthBuffer;\n        uniform float cameraNear;\n        uniform float cameraFar;\n        uniform float minDepthThreshold;\n        uniform float maxDepthThreshold;\n        uniform float depthScale;\n        uniform float depthToBlurRatioBias;\n        varying vec2 vUv;\n        varying vec2 vUv0;\n        varying vec2 vUv1;\n        varying vec2 vUv2;\n        varying vec2 vUv3;\n\n        void main() {\n          float depthFactor = 0.0;\n          \n          #ifdef USE_DEPTH\n            vec4 depth = texture2D(depthBuffer, vUv);\n            depthFactor = smoothstep(minDepthThreshold, maxDepthThreshold, 1.0-(depth.r * depth.a));\n            depthFactor *= depthScale;\n            depthFactor = max(0.0, min(1.0, depthFactor + 0.25));\n          #endif\n          \n          vec4 sum = texture2D(inputBuffer, mix(vUv0, vUv, depthFactor));\n          sum += texture2D(inputBuffer, mix(vUv1, vUv, depthFactor));\n          sum += texture2D(inputBuffer, mix(vUv2, vUv, depthFactor));\n          sum += texture2D(inputBuffer, mix(vUv3, vUv, depthFactor));\n          gl_FragColor = sum * 0.25 ;\n\n          #include <dithering_fragment>\n        }",
                            vertexShader: "uniform vec2 texelSize;\n        uniform vec2 halfTexelSize;\n        uniform float kernel;\n        uniform float scale;\n        varying vec2 vUv;\n        varying vec2 vUv0;\n        varying vec2 vUv1;\n        varying vec2 vUv2;\n        varying vec2 vUv3;\n\n        void main() {\n          vec2 uv = position.xy * 0.5 + 0.5;\n          vUv = uv;\n\n          vec2 dUv = (texelSize * vec2(kernel) + halfTexelSize) * scale;\n          vUv0 = vec2(uv.x - dUv.x, uv.y + dUv.y);\n          vUv1 = vec2(uv.x + dUv.x, uv.y + dUv.y);\n          vUv2 = vec2(uv.x + dUv.x, uv.y - dUv.y);\n          vUv3 = vec2(uv.x - dUv.x, uv.y - dUv.y);\n\n          gl_Position = vec4(position.xy, 1.0, 1.0);\n        }",
                            blending: u.NoBlending,
                            depthWrite: !1,
                            depthTest: !1
                        })).toneMapped = !1, e.setTexelSize(r.x, r.y), e.kernel = new Float32Array([0, 1, 2, 2, 3]), e
                    }
                    var r = n.prototype;
                    return r.setTexelSize = function(e, t) {
                        this.uniforms.texelSize.value.set(e, t), this.uniforms.halfTexelSize.value.set(e, t).multiplyScalar(.5)
                    }, r.setResolution = function(e) {
                        this.uniforms.resolution.value.copy(e)
                    }, n
                }(u.ShaderMaterial),
                p = function() {
                    function e(t) {
                        var n = t.gl,
                            r = t.resolution,
                            i = t.width,
                            a = void 0 === i ? 500 : i,
                            o = t.height,
                            l = void 0 === o ? 500 : o,
                            s = t.minDepthThreshold,
                            c = void 0 === s ? 0 : s,
                            d = t.maxDepthThreshold,
                            m = void 0 === d ? 1 : d,
                            h = t.depthScale,
                            p = void 0 === h ? 0 : h,
                            x = t.depthToBlurRatioBias,
                            g = void 0 === x ? .25 : x;
                        (0, f.Z)(this, e), this.renderToScreen = !1, this.renderTargetA = new u.WebGLRenderTarget(r, r, {
                            minFilter: u.LinearFilter,
                            magFilter: u.LinearFilter,
                            stencilBuffer: !1,
                            depthBuffer: !1,
                            encoding: n.outputEncoding
                        }), this.renderTargetB = this.renderTargetA.clone(), this.convolutionMaterial = new v, this.convolutionMaterial.setTexelSize(1 / a, 1 / l), this.convolutionMaterial.setResolution(new u.Vector2(a, l)), this.scene = new u.Scene, this.camera = new u.Camera, this.convolutionMaterial.uniforms.minDepthThreshold.value = c, this.convolutionMaterial.uniforms.maxDepthThreshold.value = m, this.convolutionMaterial.uniforms.depthScale.value = p, this.convolutionMaterial.uniforms.depthToBlurRatioBias.value = g, this.convolutionMaterial.defines.USE_DEPTH = p > 0;
                        var q = new Float32Array([-1, -1, 0, 3, -1, 0, -1, 3, 0]),
                            b = new Float32Array([0, 0, 2, 0, 0, 2]),
                            y = new u.BufferGeometry;
                        y.setAttribute("position", new u.BufferAttribute(q, 3)), y.setAttribute("uv", new u.BufferAttribute(b, 2)), this.screen = new u.Mesh(y, this.convolutionMaterial), this.screen.frustumCulled = !1, this.scene.add(this.screen)
                    }
                    return e.prototype.render = function(e, t, n) {
                        var r = this.scene,
                            i = this.camera,
                            a = this.renderTargetA,
                            o = this.renderTargetB,
                            l = this.convolutionMaterial,
                            s = l.uniforms;
                        s.depthBuffer.value = t.depthTexture;
                        var u, c, d, f = l.kernel,
                            m = t;
                        for (c = 0, d = f.length - 1; c < d; ++c) u = 0 === (1 & c) ? a : o, s.kernel.value = f[c], s.inputBuffer.value = m.texture, e.setRenderTarget(u), e.render(r, i), m = u;
                        s.kernel.value = f[c], s.inputBuffer.value = m.texture, e.setRenderTarget(this.renderToScreen ? null : n), e.render(r, i)
                    }, e
                }(),
                x = n(52951),
                g = function(e) {
                    (0, m.Z)(n, e);
                    var t = (0, h.Z)(n);

                    function n() {
                        var e, r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                        return (0, f.Z)(this, n), (e = t.call(this, r))._debug = {
                            value: 0
                        }, e._tDepth = {
                            value: null
                        }, e._distortionMap = {
                            value: null
                        }, e._tDiffuse = {
                            value: null
                        }, e._tDiffuseBlur = {
                            value: null
                        }, e._textureMatrix = {
                            value: null
                        }, e._hasBlur = {
                            value: !1
                        }, e._mirror = {
                            value: 0
                        }, e._mixBlur = {
                            value: 0
                        }, e._blurStrength = {
                            value: .5
                        }, e._minDepthThreshold = {
                            value: .9
                        }, e._maxDepthThreshold = {
                            value: 1
                        }, e._depthScale = {
                            value: 0
                        }, e._depthToBlurRatioBias = {
                            value: .25
                        }, e._distortion = {
                            value: 1
                        }, e.setValues(r), e
                    }
                    return n.prototype.onBeforeCompile = function(e) {
                        var t;
                        (null === (t = e.defines) || void 0 === t ? void 0 : t.USE_UV) || (e.defines.USE_UV = ""), e.uniforms.debug = this._debug, e.uniforms.hasBlur = this._hasBlur, e.uniforms.tDiffuse = this._tDiffuse, e.uniforms.tDepth = this._tDepth, e.uniforms.distortionMap = this._distortionMap, e.uniforms.tDiffuseBlur = this._tDiffuseBlur, e.uniforms.textureMatrix = this._textureMatrix, e.uniforms.mirror = this._mirror, e.uniforms.mixBlur = this._mixBlur, e.uniforms.mixStrength = this._blurStrength, e.uniforms.minDepthThreshold = this._minDepthThreshold, e.uniforms.maxDepthThreshold = this._maxDepthThreshold, e.uniforms.depthScale = this._depthScale, e.uniforms.depthToBlurRatioBias = this._depthToBlurRatioBias, e.uniforms.distortion = this._distortion, e.vertexShader = "\n        uniform mat4 textureMatrix;\n        varying vec4 my_vUv;     \n      ".concat(e.vertexShader), e.vertexShader = e.vertexShader.replace("#include <project_vertex>", "#include <project_vertex>\n        my_vUv = textureMatrix * vec4( position, 1.0 );\n        gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );"), e.fragmentShader = "\n        uniform int debug;\n        uniform sampler2D tDiffuse;\n        uniform sampler2D tDiffuseBlur;\n        uniform sampler2D tDepth;\n        uniform sampler2D distortionMap;\n        uniform float distortion;\n        uniform float cameraNear;\n\t\t\t  uniform float cameraFar;\n        uniform bool hasBlur;\n        uniform float mixBlur;\n        uniform float mirror;\n        uniform float mixStrength;\n        uniform float minDepthThreshold;\n        uniform float maxDepthThreshold;\n        uniform float depthScale;\n        uniform float depthToBlurRatioBias;\n        varying vec4 my_vUv;        \n        ".concat(e.fragmentShader), e.fragmentShader = e.fragmentShader.replace("#include <emissivemap_fragment>", "#include <emissivemap_fragment>\n    \n      float distortionFactor = 0.0;\n      #ifdef USE_DISTORTION\n        distortionFactor = texture2D(distortionMap, vUv).r * distortion;\n      #endif\n\n      vec4 new_vUv = my_vUv;\n      new_vUv.x += distortionFactor;\n      new_vUv.y += distortionFactor;\n\n      vec4 base = texture2DProj(tDiffuse, new_vUv);\n      vec4 blur = texture2DProj(tDiffuseBlur, new_vUv);\n      \n      vec4 merge = base;\n      \n      #ifdef USE_NORMALMAP\n        vec2 normal_uv = vec2(0.0);\n        vec4 normalColor = texture2D(normalMap, vUv * normalScale);\n        vec3 my_normal = normalize( vec3( normalColor.r * 2.0 - 1.0, normalColor.b,  normalColor.g * 2.0 - 1.0 ) );\n        vec3 coord = new_vUv.xyz / new_vUv.w;\n        normal_uv = coord.xy + coord.z * my_normal.xz * 0.05;\n        vec4 base_normal = texture2D(tDiffuse, normal_uv);\n        vec4 blur_normal = texture2D(tDiffuseBlur, normal_uv);\n        merge = base_normal;\n        blur = blur_normal;\n      #endif\n\n      float depthFactor = 0.0001;\n      float blurFactor = 0.0;\n\n      #ifdef USE_DEPTH\n        vec4 depth = texture2DProj(tDepth, new_vUv);\n        depthFactor = smoothstep(minDepthThreshold, maxDepthThreshold, 1.0-(depth.r * depth.a));\n        depthFactor *= depthScale;\n        depthFactor = max(0.0001, min(1.0, depthFactor));\n\n        #ifdef USE_BLUR\n          blur = blur * min(1.0, depthFactor + depthToBlurRatioBias);\n          merge = merge * min(1.0, depthFactor + 0.5);;\n        #else\n          merge = merge * depthFactor;\n        #endif\n  \n      #endif\n\n      float reflectorRoughnessFactor = roughness;\n      #ifdef USE_ROUGHNESSMAP\n        vec4 reflectorTexelRoughness = texture2D( roughnessMap, vUv );\n        reflectorRoughnessFactor *= reflectorTexelRoughness.g;\n      #endif\n      \n      #ifdef USE_BLUR\n        blurFactor = min(1.0, mixBlur * reflectorRoughnessFactor);\n        merge = mix(merge, blur, blurFactor);\n      #endif\n\n      diffuseColor.rgb = diffuseColor.rgb * ((1.0 - min(1.0, mirror)) + merge.rgb * mixStrength);           \n      diffuseColor = sRGBToLinear(diffuseColor);\n      \n      if (debug == 1) {\n        diffuseColor = sRGBToLinear(vec4(vec3(depthFactor), 1.0));\n      }\n      if (debug == 2) {\n        diffuseColor = sRGBToLinear(vec4(vec3(blurFactor), 1.0));\n      }\n      if (debug == 3) {\n        diffuseColor = sRGBToLinear(texture2DProj(tDiffuse, new_vUv));\n      }\n      if (debug == 4) {\n        diffuseColor = sRGBToLinear(texture2DProj(tDiffuseBlur, new_vUv));\n      }\n      ")
                    }, (0, x.Z)(n, [{
                        key: "tDiffuse",
                        get: function() {
                            return this._tDiffuse.value
                        },
                        set: function(e) {
                            this._tDiffuse.value = e
                        }
                    }, {
                        key: "tDepth",
                        get: function() {
                            return this._tDepth.value
                        },
                        set: function(e) {
                            this._tDepth.value = e
                        }
                    }, {
                        key: "distortionMap",
                        get: function() {
                            return this._distortionMap.value
                        },
                        set: function(e) {
                            this._distortionMap.value = e
                        }
                    }, {
                        key: "tDiffuseBlur",
                        get: function() {
                            return this._tDiffuseBlur.value
                        },
                        set: function(e) {
                            this._tDiffuseBlur.value = e
                        }
                    }, {
                        key: "textureMatrix",
                        get: function() {
                            return this._textureMatrix.value
                        },
                        set: function(e) {
                            this._textureMatrix.value = e
                        }
                    }, {
                        key: "hasBlur",
                        get: function() {
                            return this._hasBlur.value
                        },
                        set: function(e) {
                            this._hasBlur.value = e
                        }
                    }, {
                        key: "mirror",
                        get: function() {
                            return this._mirror.value
                        },
                        set: function(e) {
                            this._mirror.value = e
                        }
                    }, {
                        key: "mixBlur",
                        get: function() {
                            return this._mixBlur.value
                        },
                        set: function(e) {
                            this._mixBlur.value = e
                        }
                    }, {
                        key: "mixStrength",
                        get: function() {
                            return this._blurStrength.value
                        },
                        set: function(e) {
                            this._blurStrength.value = e
                        }
                    }, {
                        key: "minDepthThreshold",
                        get: function() {
                            return this._minDepthThreshold.value
                        },
                        set: function(e) {
                            this._minDepthThreshold.value = e
                        }
                    }, {
                        key: "maxDepthThreshold",
                        get: function() {
                            return this._maxDepthThreshold.value
                        },
                        set: function(e) {
                            this._maxDepthThreshold.value = e
                        }
                    }, {
                        key: "depthScale",
                        get: function() {
                            return this._depthScale.value
                        },
                        set: function(e) {
                            this._depthScale.value = e
                        }
                    }, {
                        key: "debug",
                        get: function() {
                            return this._debug.value
                        },
                        set: function(e) {
                            this._debug.value = e
                        }
                    }, {
                        key: "depthToBlurRatioBias",
                        get: function() {
                            return this._depthToBlurRatioBias.value
                        },
                        set: function(e) {
                            this._depthToBlurRatioBias.value = e
                        }
                    }, {
                        key: "distortion",
                        get: function() {
                            return this._distortion.value
                        },
                        set: function(e) {
                            this._distortion.value = e
                        }
                    }]), n
                }(u.MeshStandardMaterial);
            (0, c.e)({
                MeshReflectorMaterial: g
            });
            var q = s.forwardRef((function(e, t) {
                    var n = e.mixBlur,
                        f = void 0 === n ? 0 : n,
                        m = e.mixStrength,
                        h = void 0 === m ? .5 : m,
                        v = e.resolution,
                        x = void 0 === v ? 256 : v,
                        g = e.blur,
                        q = void 0 === g ? [0, 0] : g,
                        b = e.args,
                        y = void 0 === b ? [1, 1] : b,
                        j = e.minDepthThreshold,
                        S = void 0 === j ? .9 : j,
                        w = e.maxDepthThreshold,
                        Z = void 0 === w ? 1 : w,
                        F = e.depthScale,
                        C = void 0 === F ? 0 : F,
                        k = e.depthToBlurRatioBias,
                        _ = void 0 === k ? .25 : k,
                        T = e.mirror,
                        M = e.children,
                        P = e.debug,
                        E = void 0 === P ? 0 : P,
                        I = e.distortion,
                        A = void 0 === I ? 1 : I,
                        D = e.distortionMap,
                        V = (0, a.Z)(e, ["mixBlur", "mixStrength", "resolution", "blur", "args", "minDepthThreshold", "maxDepthThreshold", "depthScale", "depthToBlurRatioBias", "mirror", "children", "debug", "distortion", "distortionMap"]),
                        R = (q = Array.isArray(q) ? q : [q, q])[0] + q[1] > 0,
                        N = s.useRef(null),
                        B = (0, l.Z)(s.useState((function() {
                            return new u.Plane
                        })), 1)[0],
                        z = (0, l.Z)(s.useState((function() {
                            return new u.Vector3
                        })), 1)[0],
                        L = (0, l.Z)(s.useState((function() {
                            return new u.Vector3
                        })), 1)[0],
                        O = (0, l.Z)(s.useState((function() {
                            return new u.Vector3
                        })), 1)[0],
                        H = (0, l.Z)(s.useState((function() {
                            return new u.Matrix4
                        })), 1)[0],
                        U = (0, l.Z)(s.useState((function() {
                            return new u.Vector3(0, 0, -1)
                        })), 1)[0],
                        $ = (0, l.Z)(s.useState((function() {
                            return new u.Vector4
                        })), 1)[0],
                        G = (0, l.Z)(s.useState((function() {
                            return new u.Vector3
                        })), 1)[0],
                        W = (0, l.Z)(s.useState((function() {
                            return new u.Vector3
                        })), 1)[0],
                        Y = (0, l.Z)(s.useState((function() {
                            return new u.Vector4
                        })), 1)[0],
                        K = (0, l.Z)(s.useState((function() {
                            return new u.Matrix4
                        })), 1)[0],
                        X = (0, l.Z)(s.useState((function() {
                            return new u.PerspectiveCamera
                        })), 1)[0],
                        Q = (0, c.w)(),
                        J = Q.gl,
                        ee = Q.scene,
                        te = Q.camera,
                        ne = s.useCallback((function() {
                            if (L.setFromMatrixPosition(N.current.matrixWorld), O.setFromMatrixPosition(te.matrixWorld), H.extractRotation(N.current.matrixWorld), z.set(0, 0, 1), z.applyMatrix4(H), G.subVectors(L, O), !(G.dot(z) > 0)) {
                                G.reflect(z).negate(), G.add(L), H.extractRotation(te.matrixWorld), U.set(0, 0, -1), U.applyMatrix4(H), U.add(O), W.subVectors(L, U), W.reflect(z).negate(), W.add(L), X.position.copy(G), X.up.set(0, 1, 0), X.up.applyMatrix4(H), X.up.reflect(z), X.lookAt(W), X.far = te.far, X.updateMatrixWorld(), X.projectionMatrix.copy(te.projectionMatrix), K.set(.5, 0, 0, .5, 0, .5, 0, .5, 0, 0, .5, .5, 0, 0, 0, 1), K.multiply(X.projectionMatrix), K.multiply(X.matrixWorldInverse), K.multiply(N.current.matrixWorld), B.setFromNormalAndCoplanarPoint(z, L), B.applyMatrix4(X.matrixWorldInverse), $.set(B.normal.x, B.normal.y, B.normal.z, B.constant);
                                var e = X.projectionMatrix;
                                Y.x = (Math.sign($.x) + e.elements[8]) / e.elements[0], Y.y = (Math.sign($.y) + e.elements[9]) / e.elements[5], Y.z = -1, Y.w = (1 + e.elements[10]) / e.elements[14], $.multiplyScalar(2 / $.dot(Y)), e.elements[2] = $.x, e.elements[6] = $.y, e.elements[10] = $.z + 1, e.elements[14] = $.w
                            }
                        }), []),
                        re = (0, l.Z)(s.useMemo((function() {
                            var e = {
                                    minFilter: u.LinearFilter,
                                    magFilter: u.LinearFilter,
                                    format: u.RGBFormat,
                                    encoding: J.outputEncoding
                                },
                                t = new u.WebGLRenderTarget(x, x, e);
                            t.depthBuffer = !0, t.depthTexture = new u.DepthTexture(x, x), t.depthTexture.format = u.DepthFormat, t.depthTexture.type = u.UnsignedShortType;
                            var n = new u.WebGLRenderTarget(x, x, e);
                            return [t, n, new p({
                                gl: J,
                                resolution: x,
                                width: q[0],
                                height: q[1],
                                minDepthThreshold: S,
                                maxDepthThreshold: Z,
                                depthScale: C,
                                depthToBlurRatioBias: _
                            }), {
                                mirror: T,
                                textureMatrix: K,
                                mixBlur: f,
                                tDiffuse: t.texture,
                                tDepth: t.depthTexture,
                                tDiffuseBlur: n.texture,
                                hasBlur: R,
                                mixStrength: h,
                                minDepthThreshold: S,
                                maxDepthThreshold: Z,
                                depthScale: C,
                                depthToBlurRatioBias: _,
                                transparent: !0,
                                debug: E,
                                distortion: A,
                                distortionMap: D,
                                "defines-USE_BLUR": R ? "" : void 0,
                                "defines-USE_DEPTH": C > 0 ? "" : void 0,
                                "defines-USE_DISTORTION": D ? "" : void 0
                            }]
                        }), [J, q, K, x, T, R, f, h, S, Z, C, _, E, A, D]), 4),
                        ie = re[0],
                        ae = re[1],
                        oe = re[2],
                        le = re[3];
                    return (0, c.x)((function() {
                        (null === N || void 0 === N ? void 0 : N.current) && (N.current.visible = !1, ne(), J.setRenderTarget(ie), J.render(ee, X), R && oe.render(J, ie, ae), N.current.visible = !0, J.setRenderTarget(null))
                    })), (0, o.jsxs)("mesh", (0, i.Z)((0, r.Z)({
                        ref: (0, d.Z)([N, t])
                    }, V), {
                        children: [(0, o.jsx)("planeBufferGeometry", {
                            args: y
                        }), M ? M("meshReflectorMaterial", le) : (0, o.jsx)("meshReflectorMaterial", (0, r.Z)({}, le))]
                    }))
                })),
                b = n(45804),
                y = n(16609),
                j = n(15820),
                S = n(25784),
                w = n(42623),
                Z = n(27844),
                F = n(32069),
                C = [0, -Math.PI, 0],
                k = [0, 0, 0],
                _ = function(e) {
                    var t = e.rotation,
                        n = e.zOffset,
                        a = e.reflectorConfig,
                        l = e.widthAndHeight,
                        u = e.materialConfig,
                        c = e.isGround,
                        d = e.isCollidable,
                        f = e.meshesChanged,
                        m = (0, s.useContext)(b.X9),
                        h = (0, y.E)(null === m || void 0 === m ? void 0 : m.enablePointerOverLayer$),
                        v = (0, j.O)({
                            meshesChanged: f,
                            isCollidable: d,
                            isGround: c
                        }),
                        p = v.mesh,
                        x = v.setMesh;
                    return (0, s.useEffect)((function() {
                        p && h(p)
                    }), [p, h]), (0, o.jsx)(q, (0, i.Z)((0, r.Z)({
                        ref: x,
                        position: [0, 0, n],
                        rotation: t,
                        args: l,
                        blur: a.resolution
                    }, a), {
                        children: function(e, t) {
                            return (0, o.jsx)(e, (0, r.Z)({}, u, t))
                        }
                    }))
                },
                T = function(e) {
                    var t = e.config,
                        n = t.width,
                        a = t.height,
                        l = t.hasFrame,
                        u = t.doubleSided,
                        c = t.reflectorConfig,
                        d = t.frameConfig,
                        f = t.materialConfig,
                        m = t.isCollidable,
                        h = t.isGround,
                        v = e.meshesChanged,
                        p = [n, a],
                        x = (0, s.useMemo)((function() {
                            return d.depth || 0
                        }), [d.depth]),
                        g = (0, s.useMemo)((function() {
                            return u ? 2 * (d.depth || 0) : d.depth || 0
                        }), [d.depth, u]);
                    return (0, o.jsxs)(o.Fragment, {
                        children: [(0, o.jsx)(_, {
                            rotation: k,
                            zOffset: x + .001,
                            reflectorConfig: c,
                            materialConfig: f,
                            widthAndHeight: p,
                            meshesChanged: v,
                            isCollidable: m,
                            isGround: h
                        }), u && (0, o.jsx)(_, {
                            zOffset: -x - .001,
                            rotation: C,
                            reflectorConfig: c,
                            materialConfig: f,
                            widthAndHeight: p,
                            meshesChanged: v,
                            isCollidable: m,
                            isGround: h
                        }), l && (0, o.jsx)("group", {
                            position: [0, 0, u ? g / 2 : 0],
                            children: (0, o.jsx)(F.Z, {
                                config: (0, i.Z)((0, r.Z)({}, d), {
                                    depth: g
                                }),
                                imageDimensions: p
                            })
                        })]
                    })
                },
                M = function(e) {
                    var t = e.config,
                        n = (0, a.Z)(e, ["config"]),
                        l = (0, S.sT)(t, w.ut);
                    return (0, o.jsx)(Z.l.Consumer, {
                        children: function(e) {
                            return (0, o.jsx)(T, (0, i.Z)((0, r.Z)({
                                config: l
                            }, n), {
                                meshesChanged: null === e || void 0 === e ? void 0 : e.meshesChanged
                            }))
                        }
                    })
                }
        },
        94410: function(e, t, n) {
            "use strict";
            n.d(t, {
                ZP: function() {
                    return ot
                },
                ir: function() {
                    return nt
                },
                q6: function() {
                    return at
                }
            });
            var r = n(26042),
                i = n(69396),
                a = n(85893),
                o = n(67294),
                l = n(73759),
                s = n(42422),
                u = n(51442),
                c = n(7637),
                d = n.n(c),
                f = n(99477),
                m = n(78573),
                h = (n(75460), n(29815)),
                v = (0, o.memo)((function(e) {
                    var t = e.position,
                        n = e.initialPosition,
                        r = e.initialLookAt,
                        i = e.cameraOffset,
                        a = (0, u.w)().camera,
                        l = (0, o.useState)(!1),
                        s = l[0],
                        c = l[1];
                    return (0, o.useEffect)((function() {
                        s || (n && (t.current = n), setTimeout((function() {
                            var e;
                            t.current && a.position.copy(t.current), a.position.add(i), (e = a).lookAt.apply(e, (0, h.Z)(r.toArray()))
                        }), 30), c(!0))
                    }), [r, a, s, t, n, i]), null
                })),
                p = n(68624),
                x = n(25784),
                g = n(10253),
                q = n(89233),
                b = n(75142),
                y = n(72328),
                j = n(70211),
                S = n(55709),
                w = n(55155),
                Z = n(51381),
                F = function(e) {
                    e.spaceId;
                    var t = (0, o.useContext)(Z.f),
                        n = !!(null === t || void 0 === t ? void 0 : t.canEdit),
                        r = (0, g.Z)((0, w._K)("m"), 1)[0],
                        i = (0, o.useState)(new j.xQ)[0],
                        a = (0, o.useState)(new q.X(null))[0],
                        l = (0, o.useCallback)((function(e) {
                            i.next(e)
                        }), [i]),
                        s = (0, y.j7)(r);
                    return (0, o.useEffect)((function() {
                        l(null)
                    }), [r, l]), (0, o.useEffect)((function() {
                        var e = (0, b.aj)([s, i]).pipe((0, S.U)((function(e) {
                            var t = (0, g.Z)(e, 2),
                                n = t[0],
                                r = t[1];
                            return n ? r : null
                        }))).subscribe(a);
                        return function() {
                            e.unsubscribe()
                        }
                    }), [s, a, i]), {
                        enable: n && r,
                        selectPeer: l,
                        moderatingPeer$: a
                    }
                },
                C = n(47568),
                k = n(34051),
                _ = n.n(k),
                T = n(20745),
                M = n(44081),
                P = n(96381),
                E = n(93783),
                I = n(59971),
                A = n(49637),
                D = n(77854),
                V = n(14788),
                R = function() {
                    var e = (0, C.Z)(_().mark((function e(t) {
                        return _().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, (0, V.wk)().httpsCallable("banUser")({
                                        sessionId: t
                                    });
                                case 2:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }(),
                N = function(e) {
                    var t = e.children;
                    return (0, o.useEffect)((function() {
                        var e = document.createElement("div");
                        document.body.appendChild(e);
                        var n = (0, T.createRoot)(e);
                        return n.render((0, a.jsx)("div", {
                                children: t
                            })),
                            function() {
                                n.unmount(), document.body.removeChild(e)
                            }
                    }), [t]), null
                },
                B = function(e) {
                    var t = e.peerPositions$,
                        n = e.moderatingPeer$,
                        r = e.selectPeer,
                        i = (0, y.j7)(n),
                        l = (0, o.useState)(null),
                        s = l[0],
                        u = l[1];
                    (0, o.useEffect)((function() {
                        var e = n.pipe((0, P.w)((function(e) {
                            return e ? t.pipe((0, E.j)(e)) : (0, M.D)([null])
                        }))).subscribe({
                            next: function(e) {
                                u(e ? new f.Vector3(e[0], e[1] + 1, e[2]) : null)
                            }
                        });
                        return function() {
                            e.unsubscribe()
                        }
                    }), [n, t]);
                    var c = (0, o.useState)(!1),
                        d = c[0],
                        m = c[1],
                        h = (0, o.useCallback)(function() {
                            var e = (0, C.Z)(_().mark((function e(t) {
                                var i;
                                return _().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            if (t.preventDefault(), !window.confirm("Kick out this user?")) {
                                                e.next = 12;
                                                break
                                            }
                                            return m(!0), e.next = 6, n.pipe((0, I.P)()).toPromise();
                                        case 6:
                                            if (!(i = e.sent)) {
                                                e.next = 11;
                                                break
                                            }
                                            return e.next = 10, R(i);
                                        case 10:
                                            r(null);
                                        case 11:
                                            m(!1);
                                        case 12:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })));
                            return function(t) {
                                return e.apply(this, arguments)
                            }
                        }(), [n, r]);
                    return (0, a.jsxs)(a.Fragment, {
                        children: [(0, a.jsx)(N, {
                            children: (0, a.jsx)("div", {
                                style: {
                                    position: "absolute",
                                    top: 0,
                                    left: 200,
                                    backgroundColor: "red",
                                    padding: 10,
                                    textAlign: "center"
                                },
                                children: "Moderating Users"
                            })
                        }), i && s && (0, a.jsx)(a.Fragment, {
                            children: (0, a.jsx)(A.V, {
                                follow: !0,
                                lockX: !1,
                                lockY: !1,
                                lockZ: !1,
                                position: s,
                                visible: !1,
                                children: (0, a.jsx)(D.V, {
                                    children: (0, a.jsx)("button", {
                                        onClick: h,
                                        style: {
                                            width: 100,
                                            height: 100
                                        },
                                        disabled: d,
                                        children: "Kick User"
                                    })
                                })
                            })
                        })]
                    })
                },
                z = n(89101),
                L = n(52751),
                O = n(81472),
                H = n(19258),
                U = n(11633),
                $ = n(79338),
                G = n(52741),
                W = n(91200),
                Y = n(41931);

            function K(e) {
                var t = e.peerId$,
                    n = e.mediaTrackKind,
                    r = e.peersThatShouldConsume$,
                    i = e.producingPeers$,
                    a = e.sessionPaths$;
                (0, o.useEffect)((function() {
                    if (i) {
                        var e = (0, b.aj)([t, r]).pipe((0, S.U)((function(e) {
                                var t = (0, g.Z)(e, 2),
                                    n = t[0];
                                return !!t[1][n]
                            })), (0, Y.x)(), (0, P.w)((function(e) {
                                return e && i ? (0, b.aj)([t, i]).pipe((0, S.U)((function(e) {
                                    var t = (0, g.Z)(e, 2),
                                        n = t[0];
                                    return t[1].has(n)
                                }))) : (0, M.D)([!1])
                            })), (0, Y.x)()),
                            o = (0, b.aj)([t, e, a]).subscribe({
                                next: function(e) {
                                    var t = (0, g.Z)(e, 3),
                                        r = t[0],
                                        i = t[1],
                                        a = t[2];
                                    a && V.F$.ref(a.peerToConsume({
                                        kind: n,
                                        peerId: r
                                    })).set(i)
                                }
                            });
                        return function() {
                            o.unsubscribe()
                        }
                    }
                }), [n, t, r, i, a])
            }
            var X = function(e) {
                    var t = e.peerId$,
                        n = e.peerConsumers,
                        r = e.sessionPaths$;
                    K({
                        mediaTrackKind: "webcamAudio",
                        peersThatShouldConsume$: n.peersToHear$,
                        producingPeers$: n.producingPeers.webcamAudio,
                        peerId$: t,
                        sessionPaths$: r
                    }), K({
                        mediaTrackKind: "webcamVideo",
                        peersThatShouldConsume$: n.peersToSee$,
                        producingPeers$: n.producingPeers.webcamVideo,
                        peerId$: t,
                        sessionPaths$: r
                    })
                },
                Q = n(35800),
                J = function(e) {
                    var t = e.object3d,
                        n = e.targetPosition,
                        r = e.targetQuaternion;
                    return (0, o.useEffect)((function() {
                        var e;
                        (e = t.position).set.apply(e, (0, h.Z)(n))
                    }), [t, n]), (0, o.useEffect)((function() {
                        var e;
                        (e = t.quaternion).set.apply(e, (0, h.Z)(r))
                    }), [t, r]), null
                },
                ee = function(e) {
                    var t = e.object3d,
                        n = e.targetPosition,
                        r = e.targetQuaternion,
                        i = (0, o.useState)({
                            initialPosition: n,
                            reset: !1
                        }),
                        a = i[0],
                        l = a.initialPosition,
                        s = a.reset,
                        u = i[1];
                    (0, O.useSpring)({
                        from: {
                            x: l[0],
                            y: l[1],
                            z: l[2]
                        },
                        to: {
                            x: n[0],
                            y: n[1],
                            z: n[2]
                        },
                        config: {
                            duration: H.KK
                        },
                        reset: s,
                        onChange: function(e) {
                            t.position.set(e.value.x, e.value.y, e.value.z)
                        }
                    }), (0, o.useEffect)((function() {
                        var e;
                        (e = t.position).set.apply(e, (0, h.Z)(l))
                    }), [l, t]);
                    var c = (0, o.useCallback)((function() {
                        var e;
                        (0, W.Dv)(n, t.position.toArray()) >= 400 && (u({
                            initialPosition: n,
                            reset: !0
                        }), setTimeout((function() {
                            u({
                                initialPosition: n,
                                reset: !1
                            })
                        })), (e = t.position).set.apply(e, (0, h.Z)(n)))
                    }), [t, n]);
                    return (0, o.useEffect)((function() {
                        c();
                        var e = setInterval((function() {
                            c()
                        }), 5e3);
                        return function() {
                            return clearInterval(e)
                        }
                    }), [c]), (0, o.useEffect)((function() {
                        if (r) {
                            var e, n = (0, z.Z)(f.Quaternion, (0, h.Z)(r)),
                                i = function() {
                                    var a;
                                    (t.quaternion.slerp(n, .05), t.quaternion.angleTo(n) <= .01) ? (a = t.quaternion).set.apply(a, (0, h.Z)(r)): e = window.requestAnimationFrame(i)
                                };
                            return i(),
                                function() {
                                    window.cancelAnimationFrame(e)
                                }
                        }
                    }), [t, r]), null
                },
                te = function(e) {
                    var t = e.sessionId,
                        n = e.visiblePeers$,
                        r = e.tweenedPeers$,
                        i = e.textVisiblePeers$,
                        l = e.consumers$,
                        s = e.peerPositions$,
                        u = e.peerMetadata$,
                        c = e.playerQuaternions$,
                        d = e.moderation,
                        m = (e.volume, e.children),
                        h = e.instancedMeshes,
                        v = (e.bodyScaleOverride, e.cameraSurfaces),
                        p = e.namePosition,
                        x = e.peerConsumers,
                        g = e.sessionPaths$,
                        q = (0, o.useState)(null),
                        b = q[0],
                        j = q[1],
                        S = (0, L.ZP)({
                            consumers$: l,
                            peerMetadata$: u,
                            peerPositions$: s,
                            playerQuaternions$: c,
                            sessionId: t,
                            visiblePeers$: n,
                            tweenedPeers$: r,
                            textVisiblePeers$: i
                        }),
                        w = S.avatar,
                        Z = S.visible,
                        F = S.targetPosition,
                        C = S.targetQuaternion,
                        k = S.animate,
                        _ = S.textVisible,
                        T = (0, o.useState)(),
                        M = T[0],
                        P = T[1],
                        E = (0, y.j7)(t);
                    (0, o.useEffect)((function() {
                        d.enable || P(void 0);
                        P({
                            onClick: function() {
                                t && d.selectPeer(t)
                            }
                        })
                    }), [d, d.enable, d.selectPeer, t]);
                    var I = w.metadata,
                        A = null === I || void 0 === I ? void 0 : I[U.oK.bodyColor],
                        D = (0, o.useMemo)((function() {
                            if (A) return new f.Color(A)
                        }), [A]);
                    return X({
                        peerConsumers: x,
                        sessionPaths$: g,
                        peerId$: E
                    }), (0, a.jsxs)("group", {
                        visible: Z,
                        ref: j,
                        onClick: null === M || void 0 === M ? void 0 : M.onClick,
                        children: [b && C && F && (0, a.jsxs)(a.Fragment, {
                            children: [!k && (0, a.jsx)(J, {
                                object3d: b,
                                targetPosition: F,
                                targetQuaternion: C
                            }), k && (0, a.jsx)(ee, {
                                object3d: b,
                                targetPosition: F,
                                targetQuaternion: C
                            })]
                        }), (0, a.jsx)($.Z, {
                            cameraTexture: w.textureToUse,
                            meshes: v
                        }), m, Z && (0, a.jsx)(a.Fragment, {
                            children: h.map((function(e, t) {
                                return (0, a.jsx)(e, {
                                    color: D
                                }, t)
                            }))
                        }), I && I[U.oK.name] && (0, a.jsx)("group", {
                            position: p,
                            children: (0, a.jsx)(G.nt, {
                                name: I[U.oK.name],
                                visible: _
                            })
                        })]
                    })
                },
                ne = function(e) {
                    return (0, a.jsx)(Q.ErrorBoundary, {
                        fallback: (0, a.jsx)("group", {}),
                        resetKeys: [e.sessionId, e.cameraSurfaces, e.peerConsumers],
                        children: (0, a.jsx)(te, (0, r.Z)({}, e))
                    })
                },
                re = n(3432);

            function ie(e, t) {
                if (e.size !== t.size) return !1;
                var n = !0,
                    r = !1,
                    i = void 0;
                try {
                    for (var a, o = Array.from(e.values())[Symbol.iterator](); !(n = (a = o.next()).done); n = !0) {
                        var l = a.value;
                        if (!t.has(l)) return !1
                    }
                } catch (s) {
                    r = !0, i = s
                } finally {
                    try {
                        n || null == o.return || o.return()
                    } finally {
                        if (r) throw i
                    }
                }
                return !0
            }
            var ae = new Set,
                oe = (0, o.memo)((function(e) {
                    var t = e.peerPositions$,
                        n = e.consumers$,
                        r = e.visiblePeersSortedByDistance$,
                        i = e.activeSessions$,
                        l = e.spaceId,
                        s = e.sessionId$,
                        u = e.spaceId$,
                        c = e.peersSettings$,
                        d = e.avatarMeshes,
                        f = e.peerConsumers,
                        m = e.sessionPaths$,
                        h = F({
                            spaceId: l
                        }),
                        v = (0, L.sp)(u, s, i),
                        p = (0, y.Hq)(i, ae),
                        x = (0, o.useState)(new q.X(ae))[0],
                        j = (0, o.useState)(new q.X(ae))[0],
                        w = (0, o.useState)(new q.X(ae))[0],
                        Z = (0, U.fG)({
                            spaceId: l
                        }),
                        C = (0, y.j7)(Z);
                    return (0, o.useEffect)((function() {
                        var e = (0, b.aj)([r, s]).pipe((0, S.U)((function(e) {
                            var t = (0, g.Z)(e, 2),
                                n = t[0],
                                r = t[1];
                            return new Set(n.map((function(e) {
                                return e.id
                            })).filter((function(e) {
                                return e !== r
                            })))
                        })), (0, Y.x)(ie)).subscribe(x);
                        return function() {
                            return e.unsubscribe()
                        }
                    }), [s, x, r]), (0, o.useEffect)((function() {
                        var e = c.pipe((0, E.j)("maxTweenedPeers"), (0, Y.x)()),
                            t = (0, b.aj)([r, s, e]).pipe((0, S.U)((function(e) {
                                var t = (0, g.Z)(e, 3),
                                    n = t[0],
                                    r = t[1],
                                    i = t[2];
                                return new Set(n.slice(0, i).map((function(e) {
                                    return e.id
                                })).filter((function(e) {
                                    return e !== r
                                })).slice())
                            })), (0, Y.x)(ie)).subscribe(j);
                        return function() {
                            return t.unsubscribe()
                        }
                    }), [c, s, j, r]), (0, o.useEffect)((function() {
                        var e = Math.pow(20, 2),
                            t = r.pipe((0, S.U)((function(t) {
                                return new Set(t.filter((function(t) {
                                    return t.distance <= e
                                })).map((function(e) {
                                    return e.id
                                })))
                            })), (0, Y.x)(ie)).subscribe(w);
                        return function() {
                            return t.unsubscribe()
                        }
                    }), [w, r]), (0, a.jsxs)(a.Fragment, {
                        children: [d && (0, a.jsx)(re.gp, {
                            meshes: d.body,
                            children: function() {
                                for (var e = arguments.length, r = new Array(e), i = 0; i < e; i++) r[i] = arguments[i];
                                return Array.from(p).map((function(e) {
                                    return (0, a.jsx)(ne, {
                                        sessionId: e,
                                        moderation: h,
                                        peerPositions$: t,
                                        playerQuaternions$: v,
                                        instancedMeshes: r,
                                        cameraSurfaces: d.cameraSurfaces,
                                        visiblePeers$: x,
                                        tweenedPeers$: j,
                                        consumers$: n,
                                        peerMetadata$: C,
                                        textVisiblePeers$: w,
                                        namePosition: d.namePosition,
                                        peerConsumers: f,
                                        sessionPaths$: m
                                    }, e)
                                }))
                            }
                        }), h.enable && (0, a.jsx)(B, {
                            peerPositions$: t,
                            moderatingPeer$: h.moderatingPeer$,
                            selectPeer: h.selectPeer
                        })]
                    })
                })),
                le = oe,
                se = n(39038),
                ue = n(27844),
                ce = n(60315),
                de = n(26564),
                fe = n(31818),
                me = function(e, t) {
                    return Math.round(e * t) / t
                },
                he = function(e) {
                    var t = e.playerLocation$,
                        n = (0, y.Hq)(t, void 0),
                        r = (0, o.useState)(),
                        i = r[0],
                        l = r[1],
                        s = (0, u.w)().camera,
                        c = (0, o.useRef)(null),
                        d = (0, o.useRef)(new f.Vector3(0, 0, -1));
                    return (0, u.x)((function() {
                        c.current && (s.getWorldDirection(d.current), d.current.normalize(), d.current.add(s.position), c.current.position.copy(d.current))
                    })), (0, o.useEffect)((function() {
                        var e = (0, de.F)(250).pipe((0, S.U)((function() {
                            var e = new f.Vector3(0, 0, -1);
                            return e.applyQuaternion(s.quaternion), e
                        }))).subscribe(l);
                        return function() {
                            return e.unsubscribe()
                        }
                    }), [s]), n ? (0, a.jsx)(a.Fragment, {
                        children: (0, a.jsx)("group", {
                            ref: c,
                            children: (0, a.jsx)(D.V, {
                                center: !0,
                                position: null,
                                children: (0, a.jsx)(a.Fragment, {
                                    children: (0, a.jsxs)("div", {
                                        style: {
                                            position: "absolute",
                                            top: "60px",
                                            left: "17px",
                                            width: "250px"
                                        },
                                        children: ["your position: ", me(n.position[0], 2), ",", " ", me(n.position[1], 2), ",", " ", me(n.position[2], 2), i && (0, a.jsxs)(a.Fragment, {
                                            children: [(0, a.jsx)("br", {}), "your look at: ", me(100 * i.x, 2), ",", " ", me(100 * i.y, 2), ",", " ", me(100 * i.z, 2)]
                                        }), (0, a.jsx)("br", {}), "type 'p' to close"]
                                    })
                                })
                            })
                        })
                    }) : null
                },
                ve = function(e) {
                    var t = e.playerLocation$,
                        n = (0, fe.JL)({
                            ensureSignedInAnonymously: !1
                        }),
                        r = n.authenticated,
                        i = n.isAnonymous;
                    return (0, g.Z)((0, w._K)("p"), 1)[0] ? !r || i ? null : (0, a.jsx)(he, {
                        playerLocation$: t
                    }) : null
                },
                pe = n(41033),
                xe = function() {
                    return (0, g.Z)((0, w._K)("ctrl+i"), 1)[0] ? (0, a.jsx)(pe.j, {}) : null
                },
                ge = n(45804),
                qe = n(59637),
                be = n(59888),
                ye = n(34726),
                je = n(65449),
                Se = n(96026),
                we = n.n(Se),
                Ze = function(e) {
                    var t = e.trackPoints,
                        n = e.isAnimating,
                        r = e.transformControls,
                        i = e.cameraTarget,
                        l = e.loopTime,
                        s = e.startingPoints,
                        u = (0, o.useState)(),
                        c = u[0],
                        d = u[1],
                        m = (0, o.useState)(null),
                        h = m[0],
                        v = m[1],
                        p = (0, o.useCallback)((function() {
                            if (c && h) {
                                var e = t.current.slice(0, s.length);
                                c.points = e.map((function(e) {
                                    return e.position
                                })), c.updateArcLengths(), h.setFromPoints(c.getPoints(600)), h.attributes.position.needsUpdate = !0
                            }
                        }), [c, h, t, s.length]);
                    return (0, o.useEffect)((function() {
                        if (c) p();
                        else {
                            var e = t.current.slice(0, s.length);
                            if (e.length >= 2) {
                                var n = new f.CatmullRomCurve3(e.map((function(e) {
                                    return e.position
                                })));
                                n.curveType = "catmullrom", d(n)
                            }
                        }
                    }), [c, s, t, p]), (0, o.useEffect)((function() {
                        if (r) return r.addEventListener("objectChange", p),
                            function() {
                                r.removeEventListener("objectChange", p)
                            }
                    }), [t, r, p]), (0, a.jsxs)(a.Fragment, {
                        children: [(0, a.jsxs)("line", {
                            visible: !n,
                            children: [(0, a.jsx)("bufferGeometry", {
                                ref: v
                            }), (0, a.jsx)("lineBasicMaterial", {
                                color: 16777215,
                                opacity: .85
                            })]
                        }), c && i.current && (0, a.jsx)(Fe, {
                            curve: c,
                            target: i.current,
                            loopTime: l,
                            isAnimating: n
                        })]
                    })
                },
                Fe = function(e) {
                    var t = e.curve,
                        n = e.target,
                        r = e.loopTime,
                        i = e.isAnimating,
                        l = (0, u.w)().camera,
                        s = (0, o.useRef)(null),
                        c = (0, o.useRef)(new f.Vector3),
                        d = (0, o.useRef)(0);
                    return (0, u.x)((function() {
                        var e, a;
                        d.current = d.current + r, d.current >= 1 && (d.current = 0), t.getPointAt(d.current, c.current), c.current.multiplyScalar(1), null === (e = s.current) || void 0 === e || e.position.copy(c.current), null === (a = s.current) || void 0 === a || a.lookAt(n.position), i && (l.position.copy(c.current), l.lookAt(n.position))
                    })), (0, a.jsxs)("mesh", {
                        visible: !i,
                        ref: s,
                        children: [(0, a.jsx)("sphereBufferGeometry", {
                            args: [.5, 16, 16]
                        }), (0, a.jsx)("meshBasicMaterial", {
                            color: 16776960
                        })]
                    })
                },
                Ce = -1,
                ke = function(e) {
                    var t = e.trackPoints,
                        n = e.index,
                        r = e.setTransformTarget,
                        i = e.transformTarget,
                        l = e.attachControlsTo,
                        s = e.visible,
                        u = e.startingPosition,
                        c = (0, o.useRef)(null),
                        d = i === n,
                        f = (0, o.useState)(!1),
                        m = f[0],
                        v = f[1],
                        p = (0, je.useSpring)({
                            scale: m && !d ? 1.2 : 1
                        }).scale;
                    (0, o.useEffect)((function() {
                        c.current && i === n && l(c.current)
                    }), [i, l, n]);
                    var x = (0, o.useCallback)((function() {
                        r(n)
                    }), [r, n]);
                    return (0, o.useLayoutEffect)((function() {
                        var e;
                        c.current && ((e = c.current.position).set.apply(e, (0, h.Z)(u)), t.current[n] = c.current)
                    }), [c, n, t, u]), (0, a.jsxs)(je.animated.mesh, {
                        onClick: x,
                        ref: c,
                        onPointerOver: function() {
                            return v(!0)
                        },
                        onPointerOut: function() {
                            return v(!1)
                        },
                        scale: p,
                        visible: s,
                        children: [(0, a.jsx)("boxBufferGeometry", {}), (0, a.jsx)("meshBasicMaterial", {
                            color: d ? 16776960 : 16777215
                        })]
                    })
                },
                _e = function() {
                    var e = (0, o.useState)(!1),
                        t = e[0],
                        n = e[1],
                        r = (0, o.useRef)(null),
                        i = (0, o.useState)(.001),
                        l = i[0],
                        s = i[1],
                        u = (0, o.useRef)([]),
                        c = (0, o.useState)((function() {
                            return we()(3).map((function() {
                                return [50 * Math.random() - 25, 20 + 20 * Math.random(), 50 * Math.random() - 25]
                            }))
                        })),
                        d = c[0],
                        m = c[1],
                        v = (0, o.useCallback)((function() {
                            m((function(e) {
                                var t = u.current.slice(0, e.length),
                                    n = (0, g.Z)(t.slice(t.length - 2, t.length).map((function(e) {
                                        return e.position
                                    })), 2),
                                    r = n[0],
                                    i = n[1],
                                    a = i.clone().sub(r).normalize(),
                                    o = i.clone().add(a.multiplyScalar(5)),
                                    l = (0, h.Z)(e).concat([
                                        [o.x, o.y, o.z]
                                    ]);
                                return q(l.length - 1), l
                            }))
                        }), []),
                        p = (0, o.useState)(null),
                        x = p[0],
                        q = p[1],
                        b = (0, o.useCallback)((function() {
                            m((function(e) {
                                if (e.length <= 2) return e;
                                var t = e.slice(0, e.length - 1);
                                return q((function(e) {
                                    return e ? e > t.length - 1 ? t.length - 1 : e : null
                                })), t
                            }))
                        }), []),
                        y = (0, o.useCallback)((function() {
                            if (r.current) {
                                var e = r.current.position,
                                    t = u.current.slice(0, d.length).map((function(e) {
                                        return e.position
                                    })),
                                    n = [e].concat((0, h.Z)(t)).map((function(e) {
                                        return [e.x.toString(), e.y.toString(), e.z.toString()].join(",")
                                    })).join("\n");
                                prompt("Copy control points:", n)
                            }
                        }), [d]),
                        j = (0, o.useCallback)((function() {
                            var e;
                            if (r.current) {
                                var t = prompt("Paste control points:", "");
                                if (t) {
                                    var n = t.split("\n").map((function(e) {
                                            return e.split(",").map((function(e) {
                                                return +e
                                            }))
                                        })),
                                        i = (0, qe.Z)(n),
                                        a = i[0],
                                        o = i.slice(1);
                                    (e = r.current.position).set.apply(e, (0, h.Z)(a)), m(o)
                                }
                            }
                        }), []),
                        S = (0, o.useState)(null),
                        w = S[0],
                        Z = S[1],
                        F = (0, o.useState)(null),
                        C = F[0],
                        k = F[1],
                        _ = d.length;
                    (0, o.useEffect)((function() {
                        var e = function(e) {
                                69 === e.keyCode && (null === C || void 0 === C || C.setSpace("local"), null === C || void 0 === C || C.setMode("rotate"))
                            },
                            t = function(e) {
                                switch (e.keyCode) {
                                    case 69:
                                        null === C || void 0 === C || C.setSpace("world"), null === C || void 0 === C || C.setMode("translate");
                                        break;
                                    case 187:
                                        v();
                                        break;
                                    case 189:
                                        b();
                                        break;
                                    case 221:
                                        s((function(e) {
                                            return e + 1e-4
                                        }));
                                        break;
                                    case 219:
                                        s((function(e) {
                                            return e - 1e-4
                                        }));
                                        break;
                                    case 32:
                                        n((function(e) {
                                            return !e
                                        }));
                                        break;
                                    case 75:
                                        y();
                                        break;
                                    case 76:
                                        j();
                                        break;
                                    case 188:
                                        q((function(e) {
                                            return null === e || 0 === e ? Ce : e === Ce ? _ - 1 : e - 1
                                        }));
                                        break;
                                    case 190:
                                        q((function(e) {
                                            return null === e || e + 1 >= _ ? Ce : e + 1
                                        }));
                                        break;
                                    default:
                                        return
                                }
                            };
                        return window.addEventListener("keydown", e), window.addEventListener("keyup", t),
                            function() {
                                window.removeEventListener("keydown", e), window.removeEventListener("keyup", t)
                            }
                    }), [v, b, y, j, C, _]);
                    var T = (0, o.useRef)(new f.Vector3),
                        M = (0, o.useState)([0, 0, 0]),
                        P = M[0],
                        E = M[1];
                    (0, je.useSpring)({
                        to: {
                            x: P[0],
                            y: P[1],
                            z: P[2]
                        },
                        onChange: function(e) {
                            T.current.set(e.value.x, e.value.y, e.value.z)
                        }
                    });
                    var I = (0, o.useCallback)((function(e) {
                        w && C && (C.detach(), C.attach(e), E(e.position.toArray()))
                    }), [w, C]);
                    (0, o.useEffect)((function() {
                        r.current && x && x === Ce && I(r.current)
                    }), [I, x]);
                    var A = (0, o.useCallback)((function() {
                        q(null), null === C || void 0 === C || C.detach()
                    }), [C]);
                    (0, o.useEffect)((function() {
                        if (C && w) return w.target = T.current, q(Ce),
                            function() {
                                var e = function(e) {
                                    return w.enabled = !e.value
                                };
                                return C.addEventListener("dragging-changed", e),
                                    function() {
                                        return C.removeEventListener("dragging-changed", e)
                                    }
                            }()
                    }), [w, C]);
                    var D = (0, o.useCallback)((function() {
                            if (C) {
                                var e = C.object.position;
                                E(e.toArray())
                            }
                        }), [C]),
                        V = !t;
                    return (0, a.jsxs)(a.Fragment, {
                        children: [(0, a.jsx)(be.z, {
                            makeDefault: !0,
                            ref: Z,
                            enabled: !t,
                            visible: V
                        }), (0, a.jsx)(ye.Y, {
                            mode: "translate",
                            ref: k,
                            enabled: V,
                            visible: V,
                            showX: V,
                            showY: V,
                            showZ: V,
                            onMouseUp: D
                        }), (0, a.jsxs)("mesh", {
                            ref: r,
                            onClick: function() {
                                return q(Ce)
                            },
                            onPointerMissed: A,
                            visible: !t,
                            children: [(0, a.jsx)("boxBufferGeometry", {}), (0, a.jsx)("meshBasicMaterial", {
                                color: 16711680
                            })]
                        }), (0, a.jsx)(Ze, {
                            trackPoints: u,
                            transformControls: C,
                            startingPoints: d,
                            cameraTarget: r,
                            loopTime: l,
                            isAnimating: t
                        }), d.map((function(e, n) {
                            return (0, a.jsx)(ke, {
                                index: n,
                                startingPosition: e,
                                transformTarget: x,
                                trackPoints: u,
                                attachControlsTo: I,
                                setTransformTarget: q,
                                visible: !t
                            }, n)
                        }))]
                    })
                },
                Te = n(96486),
                Me = n(36277),
                Pe = function(e) {
                    var t = e.target,
                        n = e.camera,
                        r = e.onAnimationFinish,
                        i = (0, o.useMemo)((function() {
                            var e = 1 / 60,
                                r = t.fov - n.fov,
                                i = t.far - n.far;
                            return {
                                fovDiff: r,
                                farDiff: i,
                                fovIncrePerFrame: r / (Math.max(t.fovTransitionSpeed, .1) / e),
                                farIncrePerFrame: i / (Math.max(t.farTransitionSpeed, .1) / e)
                            }
                        }), [n, t]),
                        a = i.fovIncrePerFrame,
                        l = i.farIncrePerFrame;
                    return (0, u.x)((function() {
                        var e = Math.abs(n.fov - t.fov),
                            i = Math.abs(n.far - t.far),
                            o = e <= Math.max(Math.abs(a), .1),
                            s = i <= Math.max(Math.abs(l), .1);
                        o && s ? r() : (o || (n.fov += a), s || (n.far += l), n.updateProjectionMatrix())
                    })), null
                },
                Ee = function(e) {
                    var t = e.spaceId,
                        n = (0, u.w)().camera,
                        r = (0, o.useMemo)(p.GY, []),
                        i = (0, o.useState)(!0),
                        l = i[0],
                        s = i[1],
                        c = (0, o.useCallback)((function() {
                            s(!0)
                        }), []),
                        d = (0, o.useState)(r),
                        f = d[0],
                        m = d[1];
                    return (0, o.useEffect)((function() {
                        var e = V.h.collection("spaces").doc(t).collection("settings").doc("camera").onSnapshot((function(e) {
                            var t = e.data();
                            m((0, Te.merge)({}, r, t)), s(!1)
                        }));
                        return function() {
                            e()
                        }
                    }), [n, r, t]), l || "PerspectiveCamera" !== n.type ? null : (0, a.jsx)(Pe, {
                        camera: n,
                        onAnimationFinish: c,
                        target: f
                    })
                },
                Ie = function(e) {
                    var t = e.spaceId;
                    return (0, a.jsx)(Me.u.Consumer, {
                        children: function(e) {
                            var n, r;
                            return !!(null === e || void 0 === e || null === (n = e.spaceSettings) || void 0 === n || null === (r = n.experimental) || void 0 === r ? void 0 : r.cameraControls) && (0, a.jsx)(Ee, {
                                spaceId: t
                            })
                        }
                    })
                },
                Ae = n(71481),
                De = n(29674),
                Ve = n(5152),
                Re = n.n(Ve),
                Ne = Re()((function() {
                    return Promise.all([n.e(1444), n.e(2821)]).then(n.bind(n, 2821))
                }), {
                    loadableGenerated: {
                        webpack: function() {
                            return [2821]
                        }
                    }
                }),
                Be = (0, o.memo)((function(e) {
                    var t = e.spaceId,
                        n = (0, o.useState)(),
                        r = n[0],
                        i = n[1];
                    return (0, o.useEffect)((function() {
                        var e = (0, De.An)(t).onSnapshot((function(e) {
                            if (e.exists) {
                                var t = e.data().postProcessing,
                                    n = t && Object.entries(t).filter((function(e) {
                                        var t = (0, g.Z)(e, 2);
                                        t[0];
                                        return t[1].enabled
                                    }));
                                i(n)
                            } else i(void 0)
                        }));
                        return function() {
                            return e()
                        }
                    }), [t]), r && 0 !== r.length ? (0, a.jsx)(Ne, {
                        effects: r
                    }) : null
                })),
                ze = n(53359),
                Le = n(3758),
                Oe = n(20424),
                He = n(8396),
                Ue = n(35155),
                $e = n(74478),
                Ge = n(88250),
                We = n(3120),
                Ye = n(92918),
                Ke = function(e) {
                    var t = e.controlsSettings,
                        n = e.meshes,
                        r = e.joystickMoveRef,
                        i = e.position,
                        l = e.cameraOffset,
                        s = (0, Ye.Z)(),
                        u = (0, o.useContext)(He.rU),
                        c = (0, o.useState)(!1),
                        d = c[0],
                        f = c[1],
                        m = (0, o.useState)(!1),
                        h = m[0],
                        v = m[1];
                    return (0, a.jsxs)(a.Fragment, {
                        children: [u && (0, a.jsx)(Q.ErrorBoundary, {
                            fallback: (0, a.jsx)("group", {}),
                            resetKeys: Object.values(u),
                            children: (0, a.jsx)(Oe.e, {
                                editorState: u,
                                setControllingCamera: f,
                                setDragging: v
                            })
                        }), (0, a.jsxs)(a.Fragment, {
                            children: [(0, a.jsx)(Ge.Z, {
                                disabled: d || h
                            }), !(null === t || void 0 === t ? void 0 : t.disableKeyboardControls) && (0, a.jsxs)(a.Fragment, {
                                children: [l && (0, a.jsx)(We.Z, {
                                    position: i,
                                    cameraOffset: l,
                                    setPositionFromCamera: d
                                }), (0, a.jsx)($e.Z, {
                                    joystickMoveRef: r,
                                    keyboardMovementKeys$: s
                                }), !d && (0, a.jsx)(Ue.Z, {
                                    positionRef: i,
                                    movementSpeed: null === t || void 0 === t ? void 0 : t.movementSpeed,
                                    gravity: null === t || void 0 === t ? void 0 : t.gravity,
                                    jumpSpeed: null === t || void 0 === t ? void 0 : t.jumpSpeed,
                                    disableCollisions: null === t || void 0 === t ? void 0 : t.disableCollisions,
                                    disableGravity: null === t || void 0 === t ? void 0 : t.disableGroundDetection,
                                    meshes: n,
                                    joystickMoveRef: r,
                                    keyboardMovementKeys$: s
                                })]
                            })]
                        })]
                    })
                },
                Xe = n(66136),
                Qe = n(54727),
                Je = Re()((function() {
                    return n.e(5249).then(n.bind(n, 55249))
                }), {
                    loadableGenerated: {
                        webpack: function() {
                            return [55249]
                        }
                    }
                }),
                et = Re()((function() {
                    return Promise.all([n.e(1162), n.e(1465)]).then(n.bind(n, 51465))
                }), {
                    loadableGenerated: {
                        webpack: function() {
                            return [51465]
                        }
                    }
                }),
                tt = function(e, t) {
                    var n = t - e;
                    return e + Math.random() * n
                },
                nt = function(e) {
                    var t = e.initialX,
                        n = e.initialY,
                        i = e.initialZ,
                        a = e.spawnConfigOrigin,
                        o = e.spawnConfigRadius;
                    if (t || n || i) return new f.Vector3(t || 0, n || 0, i || 0);
                    var l = (0, p.BS)(),
                        s = (0, r.Z)({}, l.origin, a || {}),
                        u = o || l.radius || 5,
                        c = {
                            x: s.x + tt(-u, u),
                            y: s.y,
                            z: s.z + tt(-u, u)
                        };
                    return new f.Vector3(c.x, c.y, c.z)
                },
                rt = function(e) {
                    var t = e.initialX,
                        n = e.initialY,
                        i = e.initialZ,
                        a = e.initialLookAtX,
                        o = e.initialLookAtY,
                        l = e.initialLookAtZ,
                        s = e.spawnConfig,
                        u = nt({
                            initialX: t,
                            initialY: n,
                            initialZ: i,
                            spawnConfigOrigin: null === s || void 0 === s ? void 0 : s.origin,
                            spawnConfigRadius: null === s || void 0 === s ? void 0 : s.radius
                        }),
                        c = function(e) {
                            var t = e.initialLookAtX,
                                n = e.initialLookAtY,
                                i = e.initialLookAtZ,
                                a = e.spawnConfigLookAt;
                            if (t || n || i) return new f.Vector3(t || 0, n || 0, i || 0);
                            var o = (0, p.BS)(),
                                l = (0, r.Z)({}, o.lookAt, a || {});
                            return new f.Vector3(l.x, l.y, l.z)
                        }({
                            initialLookAtX: a,
                            initialLookAtY: o,
                            initialLookAtZ: l,
                            spawnConfigLookAt: null === s || void 0 === s ? void 0 : s.lookAt
                        });
                    return {
                        initialPosition: u,
                        initialLookAt: c
                    }
                },
                it = function(e) {
                    var t, n = e.spaceId,
                        r = e.sessionId,
                        i = e.userId,
                        s = e.updatePlayerLocation,
                        c = e.render,
                        d = e.initialX,
                        f = e.initialY,
                        h = e.initialZ,
                        p = e.initialLookAtX,
                        x = e.initialLookAtY,
                        g = e.initialLookAtZ,
                        q = e.controlsSettings,
                        b = e.peerLocations$,
                        y = e.peersSettings$,
                        j = e.playerLocation$,
                        S = e.visiblePeersSortedByDistance$,
                        w = e.enteredSpace,
                        Z = e.environment,
                        F = e.spaceId$,
                        C = e.sessionId$,
                        k = e.joystickMoveRef,
                        _ = e.documentation,
                        T = e.peerConsumers,
                        M = e.loadingComplete,
                        P = e.setLoadedProgress,
                        E = (0, u.w)(),
                        I = E.camera,
                        A = E.gl,
                        D = E.scene,
                        V = null === (t = (0, o.useContext)(Qe.Z)) || void 0 === t ? void 0 : t.setThree,
                        R = (0, o.useContext)(Me.u) || {},
                        N = R.listener$,
                        B = R.avatarMeshes;
                    (0, o.useEffect)((function() {
                        V && V({
                            camera: I,
                            scene: D,
                            gl: A
                        })
                    }), [I, A, D, V]);
                    var z = (0, o.useState)(),
                        L = z[0],
                        O = z[1];
                    (0, o.useEffect)((function() {
                        O(n && i ? {
                            spaceId: n,
                            sessionId: r,
                            userId: i
                        } : void 0)
                    }), [r, n, i]);
                    var H = (0, o.useMemo)((function() {
                            return Z ? rt({
                                initialX: d,
                                initialY: f,
                                initialZ: h,
                                initialLookAtX: p,
                                initialLookAtY: x,
                                initialLookAtZ: g,
                                spawnConfig: null === Z || void 0 === Z ? void 0 : Z.spawn
                            }) : {
                                initialPosition: void 0,
                                initialLookAt: void 0
                            }
                        }), [Z, d, f, h, p, x, g]),
                        U = H.initialPosition,
                        $ = H.initialLookAt,
                        G = (0, o.useRef)(U),
                        W = (0, se.Z)(),
                        Y = W.meshes,
                        K = W.updateMeshes;
                    (0, ce.K)({
                        listener$: N
                    });
                    var X = null === B || void 0 === B ? void 0 : B.cameraPosition,
                        Q = (0, o.useMemo)((function() {
                            return ["better", "chance", "gain", "enough", "entropy"].includes(n.toLowerCase())
                        }), [n]),
                        J = (0, o.useMemo)((function() {
                            return ["2h6pbt", "pufvwr"].includes(n.toLowerCase())
                        }), [n]);
                    return (0, ge.C_)(), (0, a.jsxs)(a.Fragment, {
                        children: [(0, a.jsx)(xe, {}), (0, a.jsx)(m.Z, {}), !(null === q || void 0 === q ? void 0 : q.disableKeyboardControls) && (0, a.jsx)(ve, {
                            playerLocation$: j
                        }), !(null === q || void 0 === q ? void 0 : q.disableMovementControls) && $ && U && X && (0, a.jsxs)(a.Fragment, {
                            children: [(0, a.jsx)(v, {
                                initialLookAt: $,
                                initialPosition: U,
                                position: G,
                                cameraOffset: X
                            }), w && M && (0, a.jsx)(a.Fragment, {
                                children: _ ? (0, a.jsx)(a.Fragment, {
                                    children: (0, a.jsx)(_e, {})
                                }) : (0, a.jsxs)(a.Fragment, {
                                    children: [(0, a.jsx)(Ke, {
                                        meshes: Y,
                                        controlsSettings: q,
                                        joystickMoveRef: k,
                                        position: G,
                                        cameraOffset: X
                                    }), s && (0, a.jsx)(We.j, {
                                        position: G,
                                        updatePlayerState: s
                                    })]
                                })
                            })]
                        }), c && (0, a.jsxs)(a.Fragment, {
                            children: [L && n && (0, a.jsx)(a.Fragment, {
                                children: (0, a.jsxs)("group", {
                                    visible: M && w,
                                    children: [(0, a.jsx)(Ie, {
                                        spaceId: n
                                    }), (0, a.jsx)(l.Z, {
                                        environment: Z,
                                        visible: M && w
                                    }), (0, a.jsx)(ue.Z, {
                                        spaceId: n,
                                        userInfo: L,
                                        meshesChanged: K,
                                        playerPositionRef: G,
                                        documentationMode: _,
                                        handleProgressChanged: P
                                    })]
                                })
                            }), Q && (0, a.jsx)(Je, {
                                spaceId: n
                            }), J && (0, a.jsx)(et, {}), (0, a.jsx)(Me.u.Consumer, {
                                children: function(e) {
                                    return (null === e || void 0 === e ? void 0 : e.activeSessions$) && (null === e || void 0 === e ? void 0 : e.consumers$) && (null === e || void 0 === e ? void 0 : e.sessionPaths$) && (0, a.jsx)(le, {
                                        activeSessions$: e.activeSessions$,
                                        consumers$: e.consumers$,
                                        peerPositions$: b,
                                        visiblePeersSortedByDistance$: S,
                                        peersSettings$: y,
                                        spaceId$: F,
                                        sessionId$: C,
                                        spaceId: n,
                                        avatarMeshes: B,
                                        peerConsumers: T,
                                        sessionPaths$: null === e || void 0 === e ? void 0 : e.sessionPaths$
                                    })
                                }
                            })]
                        })]
                    })
                },
                at = function(e) {
                    return "BasicShadowMap" === e ? f.BasicShadowMap : "PCFShadowMap" === e ? f.PCFShadowMap : "PCFSoftShadowMap" === e ? f.PCFSoftShadowMap : "VSMShadowMap" === e ? f.VSMShadowMap : f.PCFShadowMap
                },
                ot = function(e) {
                    var t = (0, Ae.Z)({
                            spaceId: e.spaceId
                        }),
                        n = (0, x.G$)(null === t || void 0 === t ? void 0 : t.defaultGraphics, p.VZ),
                        l = (0, o.useMemo)((function() {
                            return at(n.shadowMapType)
                        }), [n.shadowMapType]),
                        u = (0, ze.j)(Me.u, He.rU, Xe._y, Z.f, Qe.Z);
                    return (0, a.jsxs)(s.Xz, {
                        "output-encoding": {
                            sRGBEncoding: f.sRGBEncoding
                        },
                        shadows: {
                            enabled: !0,
                            type: l
                        },
                        className: d().sphericalDragCanvas,
                        performance: {
                            min: .5
                        },
                        children: [(0, a.jsx)(Be, {
                            spaceId: e.spaceId
                        }), (0, a.jsx)(u, {
                            children: (0, a.jsx)(it, (0, i.Z)((0, r.Z)({}, e), {
                                environment: t
                            }))
                        }), (0, a.jsx)(Le.S, {
                            pixelated: !0
                        })]
                    })
                }
        },
        78573: function(e, t, n) {
            "use strict";
            var r = n(51442),
                i = n(67294);
            t.Z = function() {
                var e = (0, r.w)(),
                    t = e.raycaster,
                    n = e.camera;
                return (0, i.useEffect)((function() {
                    var e = function(e) {
                        var r = e.clientX / window.innerWidth * 2 - 1,
                            i = -e.clientY / window.innerHeight * 2 + 1;
                        n.position && t.setFromCamera({
                            x: r,
                            y: i
                        }, n)
                    };
                    return document.addEventListener("mousemove", e),
                        function() {
                            document.removeEventListener("mousemove", e)
                        }
                }), [n, t]), null
            }
        },
        54727: function(e, t, n) {
            "use strict";
            var r = (0, n(67294).createContext)(null);
            t.Z = r
        },
        49143: function(e, t, n) {
            "use strict";
            var r = n(51438),
                i = n(28668),
                a = n(91224),
                o = n(99477),
                l = function(e) {
                    (0, i.Z)(n, e);
                    var t = (0, a.Z)(n);

                    function n(e) {
                        var i, a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : o.LinearFilter,
                            l = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : o.LinearFilter,
                            s = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : o.RGBAFormat;
                        return (0, r.Z)(this, n), (i = t.call(this, e, void 0, void 0, void 0, a, l, s)).format = void 0 !== s ? s : RGBFormat, i.minFilter = void 0 !== l ? l : o.LinearFilter, i.magFilter = void 0 !== a ? a : o.LinearFilter, i.isVideoTexture = !0, i.needsUpdate = !0, i
                    }
                    return n.prototype.update = function() {
                        var e = this.image;
                        e.readyState >= e.HAVE_CURRENT_DATA && (this.needsUpdate = !0)
                    }, n
                }(o.Texture);
            t.Z = l
        },
        75460: function(e, t, n) {
            "use strict";
            n.d(t, {
                Z: function() {
                    return p
                }
            });
            var r = n(10253),
                i = n(68624),
                a = n(67294),
                o = n(75142),
                l = n(89233),
                s = n(44081),
                u = n(66008),
                c = n(70051),
                d = n(96381),
                f = n(55709),
                m = n(30557),
                h = n(72328),
                v = function(e) {
                    var t = e.records,
                        n = e.activePeerIds,
                        a = {};
                    return Object.entries(t).forEach((function(e) {
                        var t = (0, r.Z)(e, 2),
                            o = t[0],
                            l = t[1];
                        if (n.has(o)) {
                            var s = function(e) {
                                if (e) return (0, i.oS)()
                            }(l.autoBroadcast);
                            if (s) a[o] = s;
                            else {
                                var u = function(e) {
                                    if (e) {
                                        var t = null;
                                        return Object.values(e).forEach((function(e) {
                                            e.broadcast && (t = e.audio)
                                        })), t || void 0
                                    }
                                }(l.zones);
                                u && (a[o] = u)
                            }
                        }
                    })), a
                },
                p = function(e) {
                    var t = e.canManuallyBroadcast,
                        n = e.sessionId$,
                        i = e.spaceId$,
                        p = e.userId$,
                        x = e.activePresence$,
                        g = (0, a.useState)(!1),
                        q = g[0],
                        b = g[1],
                        y = (0, h.j7)(q),
                        j = (0, a.useCallback)((function() {
                            b((function(e) {
                                return !e
                            }))
                        }), [b]),
                        S = (0, a.useMemo)((function() {
                            return {
                                broadcasting: q,
                                canManuallyBroadcast: t,
                                toggleBroadcasting: j
                            }
                        }), [q, t, j]);
                    (0, a.useEffect)((function() {
                        var e = y.pipe((0, u.h)((function(e) {
                                return !0 === e
                            }))),
                            t = y.pipe((0, c.u)(e)),
                            a = (0, o.aj)([t, n, i, p]).subscribe({
                                next: function(e) {
                                    var t = (0, r.Z)(e, 4),
                                        n = t[0],
                                        i = t[1],
                                        a = t[2],
                                        o = t[3];
                                    o && i && a && (0, m.NY)({
                                        sessionId: i,
                                        userId: o,
                                        spaceId: a
                                    }, !!n)
                                }
                            });
                        return function() {
                            a.unsubscribe()
                        }
                    }), [y, n, p, i]);
                    var w = (0, a.useState)(new l.X({}))[0];
                    return (0, a.useEffect)((function() {
                        var e = (0, o.aj)([i, n]).pipe((0, d.w)((function(e) {
                                var t = (0, r.Z)(e, 2),
                                    n = t[0],
                                    i = t[1];
                                return n && i ? (0, m.BG)({
                                    spaceId: n
                                }) : (0, s.D)([{}])
                            }))),
                            t = (0, o.aj)([e, x]).pipe((0, f.U)((function(e) {
                                var t = (0, r.Z)(e, 2),
                                    n = t[0],
                                    i = t[1];
                                return v({
                                    records: n,
                                    activePeerIds: i
                                })
                            }))).subscribe(w);
                        return function() {
                            t.unsubscribe()
                        }
                    }), [x, w, n, i]), {
                        broadcasters$: w,
                        controls: S
                    }
                }
        },
        70031: function(e, t, n) {
            "use strict";
            n.d(t, {
                Y: function() {
                    return m
                }
            });
            var r = n(10253),
                i = n(14788),
                a = n(82492),
                o = n.n(a),
                l = n(67294),
                s = n(39846),
                u = n(3222),
                c = n(75142),
                d = n(55709),
                f = n(72328);

            function m(e) {
                var t = e.path,
                    n = (0, l.useState)(void 0),
                    r = n[0],
                    a = n[1];
                return (0, l.useEffect)((function() {
                    var e = i.h.doc(t).onSnapshot((function(e) {
                        e.exists ? a(e.data()) : a(void 0)
                    }));
                    return function() {
                        e()
                    }
                }), [t]), r
            }
            t.Z = function(e) {
                var t = e.path,
                    n = e.override,
                    a = e.defaultValue,
                    m = (0, l.useState)((function() {
                        return new s.t(1)
                    }))[0],
                    h = (0, f.j7)(n);
                return (0, l.useEffect)((function() {
                    var e = i.h.doc(t),
                        n = new u.y((function(t) {
                            var n = e.onSnapshot((function(e) {
                                e.exists ? t.next(e.data()) : t.next(void 0)
                            }));
                            return function() {
                                n()
                            }
                        })),
                        l = (0, c.aj)([n, h]).pipe((0, d.U)((function(e) {
                            var t = (0, r.Z)(e, 2),
                                n = t[0],
                                i = t[1];
                            return o()({}, a(), n || {}, i || {})
                        }))),
                        s = l.subscribe(m);
                    return function() {
                        return s.unsubscribe()
                    }
                }), [m, h, t, a]), m
            }
        },
        29894: function(e, t, n) {
            "use strict";
            n.d(t, {
                L: function() {
                    return o
                },
                r: function() {
                    return a
                }
            });
            var r = n(68624),
                i = n(67294),
                a = function(e, t) {
                    var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : r.vz;
                    if (!e) return null;
                    var i = null == t ? n : t;
                    return {
                        width: i,
                        height: i / e
                    }
                },
                o = function(e, t) {
                    var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : r.vz,
                        o = (0, i.useMemo)((function() {
                            return a(e, t, n)
                        }), [n, e, t]);
                    return o
                }
        },
        71481: function(e, t, n) {
            "use strict";
            var r = n(67294),
                i = n(68624),
                a = n(29674);
            t.Z = function(e) {
                var t = e.spaceId,
                    n = (0, r.useState)(),
                    o = n[0],
                    l = n[1];
                return (0, r.useEffect)((function() {
                    if (t) {
                        var e = (0, a.rx)(t).onSnapshot((function(e) {
                            var t = e.data() || (0, i.Tl)();
                            l(t)
                        }));
                        return function() {
                            e(), l(void 0)
                        }
                    }
                }), [t]), o
            }
        },
        45804: function(e, t, n) {
            "use strict";
            n.d(t, {
                C_: function() {
                    return w
                },
                Cr: function() {
                    return Z
                },
                X9: function() {
                    return F
                },
                Z9: function() {
                    return C
                }
            });
            var r = n(10253),
                i = n(67294),
                a = n(51442),
                o = n(99477),
                l = n(89233),
                s = n(14370),
                u = n(26564),
                c = n(57027),
                d = n(75142),
                f = n(43825),
                m = n(55709),
                h = n(41931),
                v = n(86704),
                p = n(72328),
                x = n(88674),
                g = n(57195),
                q = n(74979),
                b = n(58148),
                y = n.n(b),
                j = n(3430),
                S = new l.X(null),
                w = function() {
                    var e = (0, i.useMemo)((function() {
                            var e = new o.Raycaster;
                            return e.far = 40, e.layers.set(v.Ry), e
                        }), []),
                        t = (0, a.w)(),
                        n = t.camera,
                        r = t.scene,
                        l = t.gl,
                        d = (0, i.useCallback)((function(t) {
                            var i = t.clientX / window.innerWidth * 2 - 1,
                                a = -t.clientY / window.innerHeight * 2 + 1;
                            e.setFromCamera({
                                x: i,
                                y: a
                            }, n);
                            var o, s, u = function(e, t) {
                                    var n = null,
                                        r = function(e) {
                                            var i = !0,
                                                a = !1,
                                                o = void 0;
                                            try {
                                                for (var l, s = e[Symbol.iterator](); !(i = (l = s.next()).done); i = !0) {
                                                    var u = l.value;
                                                    if (u.isMesh && u.layers.test(t.layers)) {
                                                        var c = t.intersectObject(u, !1);
                                                        if (c.length > 0) {
                                                            var d = c[0];
                                                            (!n || d.distance < n.distance) && (n = d)
                                                        }
                                                    }
                                                    r(u.children)
                                                }
                                            } catch (f) {
                                                a = !0, o = f
                                            } finally {
                                                try {
                                                    i || null == s.return || s.return()
                                                } finally {
                                                    if (a) throw o
                                                }
                                            }
                                        };
                                    return r(e), n
                                }(r.children, e),
                                c = function(e, t) {
                                    for (; null != e && ("Group" !== e.type || !e.layers.test(t));) e = e.parent;
                                    return e || null
                                }(null === u || void 0 === u ? void 0 : u.object, e.layers);
                            S.next(c), o = l.domElement, s = null !== c, o && (s && !o.classList.contains(y().cursorPointer) ? o.classList.add(y().cursorPointer) : !s && o.classList.contains(y().cursorPointer) && o.classList.remove(y().cursorPointer))
                        }), [n, l.domElement, e, r.children]);
                    (0, i.useEffect)((function() {
                        var e = (0, s.T)((0, u.F)(100), (0, c.R)(l.domElement, "mousedown")).pipe((0, f.M)((0, c.R)(l.domElement, "mousemove")), (0, m.U)((function(e) {
                            return e[1]
                        })), (0, h.x)()).subscribe((function(e) {
                            d(e)
                        }));
                        return function() {
                            e.unsubscribe()
                        }
                    }), [l.domElement, d])
                },
                Z = function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                        n = (0, p.j7)(!1);
                    return (0, i.useEffect)((function() {
                        if (!t) {
                            var r = S.pipe((0, m.U)((function(t) {
                                return e(t)
                            })), (0, h.x)()).subscribe(n);
                            return function() {
                                n.next(!1), r.unsubscribe()
                            }
                        }
                    }), [t, e, n]), n
                },
                F = (0, i.createContext)(null),
                C = function(e, t, n) {
                    var a = (0, i.useState)(null),
                        o = a[0],
                        l = a[1],
                        s = function(e) {
                            var t = (0, r.Z)((0, p.Kz)(!1), 2),
                                n = t[0],
                                a = t[1];
                            return (0, i.useEffect)((function() {
                                if (e) {
                                    var t = e.status$.pipe((0, m.U)((function(e) {
                                        return e !== g.I.closed
                                    })), (0, h.x)()).subscribe((function(e) {
                                        a(e)
                                    }));
                                    return function() {
                                        t.unsubscribe()
                                    }
                                }
                            }), [e, a]), n
                        }(e),
                        u = function(e) {
                            var t = (0, x.UJ)(null === e || void 0 === e ? void 0 : e.status$),
                                n = (0, x.y1)(null === e || void 0 === e ? void 0 : e.status$),
                                a = (0, i.useState)(!1),
                                o = a[0],
                                l = a[1];
                            return (0, i.useEffect)((function() {
                                var e = (0, d.aj)([t, n]).pipe((0, m.U)((function(e) {
                                    var t = (0, r.Z)(e, 2),
                                        n = t[0];
                                    return t[1] && !n
                                })), (0, h.x)()).subscribe(l);
                                return function() {
                                    e.unsubscribe()
                                }
                            }), [t, n]), o
                        }(e),
                        c = function(e) {
                            var t = (0, i.useState)({
                                    enabled: !1,
                                    distance: 0
                                }),
                                n = t[0],
                                r = t[1];
                            return (0, i.useEffect)((function() {
                                var t, n, i = e.elementType === q.H.image ? e.image : e.elementType === q.H.model ? e.model : e.elementType === q.H.placard ? e.placard : e.elementType === q.H.video ? e.video : e.elementType === q.H.nft ? e.nft : void 0,
                                    a = !!(null === i || void 0 === i ? void 0 : i.interactable) || e.elementType === q.H.nft,
                                    o = (null === i || void 0 === i || null === (t = i.interactableConfig) || void 0 === t || null === (n = t.payload) || void 0 === n ? void 0 : n.maxDistance) || 1e4;
                                r({
                                    enabled: a,
                                    distance: o
                                })
                            }), [e]), n
                        }(t),
                        f = (0, i.useMemo)((function() {
                            return {
                                canSelectToEdit: u ? v.Li : Number.POSITIVE_INFINITY,
                                canInteract: c.enabled ? c.distance : Number.POSITIVE_INFINITY
                            }
                        }), [u, c.distance, c.enabled]),
                        b = (0, j.Z)({
                            distancedProperties: f,
                            mesh: o,
                            distanceCheckInterval: 100,
                            disabled: n
                        }),
                        y = !!(null === b || void 0 === b ? void 0 : b.canInteract);
                    return {
                        enablePointerOverLayer$: (0, p.j7)(y),
                        elementGroup: o,
                        setElementGroup: l,
                        disableInteractivity$: s,
                        canInteract: !!(null === b || void 0 === b ? void 0 : b.canInteract),
                        canSelectToEdit: !!(null === b || void 0 === b ? void 0 : b.canSelectToEdit)
                    }
                }
        },
        1422: function(e, t, n) {
            "use strict";
            n.d(t, {
                $v: function() {
                    return g
                },
                SZ: function() {
                    return p
                },
                Z9: function() {
                    return x
                }
            });
            var r = n(26042),
                i = n(69396),
                a = n(10253),
                o = n(59637),
                l = n(51442),
                s = n(67294),
                u = n(70211),
                c = n(57027),
                d = n(43825),
                f = n(66008),
                m = n(55709),
                h = n(45804),
                v = n(72328),
                p = function(e, t) {
                    var n = (0, s.useMemo)((function() {
                            return new u.xQ
                        }), []),
                        r = (0, s.useCallback)((function(t) {
                            return !!t && t.name === e
                        }), [e]),
                        i = (0, h.Cr)(r, t),
                        v = (0, l.w)().gl;
                    return (0, s.useEffect)((function() {
                        if (!t) {
                            var e = (0, c.R)(v.domElement, "mouseup").pipe((0, d.M)((0, c.R)(v.domElement, "mousedown"), i), (0, f.h)((function(e) {
                                var t = (0, a.Z)(e, 3),
                                    n = t[0],
                                    r = t[1],
                                    i = t[2];
                                return n.timeStamp - r.timeStamp < 300 && i
                            })), (0, m.U)((function(e) {
                                var t = (0, o.Z)(e),
                                    n = t[0];
                                t.slice(1);
                                return n
                            }))).subscribe(n);
                            return function() {
                                e.unsubscribe()
                            }
                        }
                    }), [v, t, n, i]), {
                        clicked$: n,
                        pointerOver$: i
                    }
                },
                x = (0, s.createContext)(null),
                g = function(e, t) {
                    var n = (0, s.useContext)(h.X9),
                        a = (0, v.Hq)(null === n || void 0 === n ? void 0 : n.disableInteractivity$, !1),
                        o = (0, s.useState)(!1),
                        l = o[0],
                        u = o[1];
                    (0, s.useEffect)((function() {
                        (null === t || void 0 === t ? void 0 : t.interactable) && (null === t || void 0 === t ? void 0 : t.interactableConfig) && !a ? u(!0) : u(!1)
                    }), [null === t || void 0 === t ? void 0 : t.interactable, null === t || void 0 === t ? void 0 : t.interactableConfig, a]);
                    var c = p(e, !l);
                    return n ? (0, i.Z)((0, r.Z)({}, c, n), {
                        disableInteractivity: a
                    }) : null
                }
        },
        16609: function(e, t, n) {
            "use strict";
            n.d(t, {
                E: function() {
                    return s
                }
            });
            var r = n(14924),
                i = n(10253),
                a = n(86704),
                o = n(67294),
                l = n(72328),
                s = function(e) {
                    var t = (0, l.Hq)(e, !1);
                    return function(e) {
                        var t = (0, o.useState)(),
                            n = t[0],
                            r = t[1];
                        return (0, o.useEffect)((function() {
                            if (n) {
                                var t = !0,
                                    r = !1,
                                    a = void 0;
                                try {
                                    for (var o, l = Object.entries(e)[Symbol.iterator](); !(t = (o = l.next()).done); t = !0) {
                                        var s = (0, i.Z)(o.value, 2),
                                            u = s[0];
                                        s[1] ? n.layers.enable(parseInt(u)) : n.layers.disable(parseInt(u))
                                    }
                                } catch (c) {
                                    r = !0, a = c
                                } finally {
                                    try {
                                        t || null == l.return || l.return()
                                    } finally {
                                        if (r) throw a
                                    }
                                }
                            }
                        }), [e, n]), r
                    }((0, o.useMemo)((function() {
                        var e;
                        return e = {}, (0, r.Z)(e, a.Ry, t), (0, r.Z)(e, a.xg, t), e
                    }), [t]))
                }
        },
        60315: function(e, t, n) {
            "use strict";
            n.d(t, {
                G: function() {
                    return v
                },
                K: function() {
                    return p
                }
            });
            var r = n(10253),
                i = n(67294),
                a = n(89233),
                o = n(75142),
                l = n(34181),
                s = n(66008),
                u = n(55709),
                c = n(43485),
                d = n(27554),
                f = n(72328),
                m = n(99477),
                h = n(51442),
                v = function(e) {
                    var t = e.initialized$,
                        n = e.muted,
                        r = (0, i.useState)(new a.X(void 0))[0],
                        o = (0, i.useState)(new a.X(void 0))[0],
                        c = (0, f.Qy)();
                    return (0, i.useEffect)((function() {
                        n || t.pipe((0, l.E)(), (0, s.h)((function(e) {
                            return e
                        })), (0, u.U)((function() {
                            return new m.AudioListener
                        })), c()).subscribe(r)
                    }), [t, r, c, n]), (0, i.useEffect)((function() {
                        t.pipe((0, l.E)(), (0, u.U)((function(e) {
                            if (e) {
                                var t = m.AudioContext.getContext();
                                return t.resume(), t
                            }
                        })), c()).subscribe(o)
                    }), [o, t, c]), {
                        listener$: r,
                        audioContext$: o
                    }
                },
                p = function(e) {
                    var t = e.listener$,
                        n = (0, h.w)().camera,
                        a = (0, f.j7)(n);
                    (0, i.useEffect)((function() {
                        t && (0, o.aj)([a, t]).pipe((0, c.O)([void 0, void 0]), (0, d.G)()).subscribe({
                            next: function(e) {
                                var t = (0, r.Z)(e, 2),
                                    n = (0, r.Z)(t[0], 1)[0],
                                    i = (0, r.Z)(t[1], 2),
                                    a = i[0],
                                    o = i[1];
                                o && (n && (o.parent = null, n.remove(o)), a && (o.parent = null, a.add(o)))
                            }
                        })
                    }), [t, a])
                }
        },
        3430: function(e, t, n) {
            "use strict";
            var r = n(14924),
                i = n(26042),
                a = n(69396),
                o = n(10253),
                l = n(51442),
                s = n(9923),
                u = n(67294),
                c = n(99477);
            t.Z = function(e) {
                var t = e.mesh,
                    n = e.distancedProperties,
                    d = e.distanceCheckInterval,
                    f = void 0 === d ? 250 : d,
                    m = e.disabled,
                    h = void 0 !== m && m,
                    v = (0, l.w)().camera,
                    p = (0, u.useState)(),
                    x = p[0],
                    g = p[1];
                return (0, u.useEffect)((function() {
                    if (t && !h) {
                        var e = Object.entries(n).map((function(e) {
                                var t = (0, o.Z)(e, 2),
                                    n = t[0],
                                    r = t[1];
                                return {
                                    key: n,
                                    distanceSquared: Math.pow(r, 2)
                                }
                            })),
                            l = new c.Vector3,
                            u = new c.Vector3,
                            d = setInterval((function() {
                                l.setFromMatrixPosition(t.matrixWorld), u.setFromMatrixPosition(v.matrixWorld);
                                var n = l.distanceToSquared(u),
                                    o = e.reduce((function(e, t) {
                                        return (0, a.Z)((0, i.Z)({}, e), (0, r.Z)({}, t.key, n <= t.distanceSquared))
                                    }), {});
                                g((function(e) {
                                    return (0, s.vZ)(e, o) ? e : o
                                }))
                            }), f);
                        return function() {
                            clearInterval(d)
                        }
                    }
                }), [h, n, v, f, t]), x
            }
        },
        39038: function(e, t, n) {
            "use strict";
            var r = n(86704),
                i = n(67294),
                a = n(51442),
                o = n(99477);
            t.Z = function() {
                var e = (0, a.w)().scene,
                    t = (0, i.useState)({
                        collidable: [],
                        ground: []
                    }),
                    n = t[0],
                    l = t[1];
                return {
                    meshes: n,
                    updateMeshes: (0, i.useCallback)((function() {
                        var t = {
                                collidable: [],
                                ground: []
                            },
                            n = new o.Layers,
                            i = new o.Layers;
                        n.set(r.Qc), i.set(r.mJ), e.traverse((function(e) {
                            if ("Mesh" === e.type) {
                                var r = e;
                                r.layers.test(n) && t.collidable.push(r), r.layers.test(i) && t.ground.push(r)
                            }
                        })), l(t)
                    }), [e])
                }
            }
        },
        55155: function(e, t, n) {
            "use strict";
            n.d(t, {
                _K: function() {
                    return x
                },
                x_: function() {
                    return v
                },
                zp: function() {
                    return p
                }
            });
            var r = n(67294),
                i = n(42441),
                a = n.n(i),
                o = n(33242),
                l = n(60050),
                s = new Map,
                u = new(a()),
                c = new Set,
                d = function(e) {
                    c.forEach((function(t) {
                        return t(e)
                    }))
                },
                f = function(e) {
                    c.add(e)
                },
                m = function(e) {
                    c.delete(e)
                },
                h = !1,
                v = function(e) {
                    var t = (0, l.D)(e);
                    h || (u.bind("esc", d), h = !0), (0, r.useEffect)((function() {
                        return t !== e && m(t), f(e),
                            function() {
                                m(e)
                            }
                    }), [e, t])
                },
                p = function(e, t, n) {
                    var i = (0, o.G)();
                    (0, r.useEffect)((function() {
                        var r = function(e, t) {
                            return t ? "".concat(e, " : ").concat(t) : "".concat(e)
                        }(e, n);
                        if (!s.has(r)) return s.set(r, i), u.bind(e, t, n),
                            function() {
                                u.unbind(e, n), s.delete(r)
                            };
                        s.get(r) !== i && console.error("Key binding exists: ".concat(r, "."))
                    }), [t, n, e, i])
                },
                x = function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                        n = arguments.length > 2 ? arguments[2] : void 0,
                        i = (0, r.useState)(t),
                        a = i[0],
                        o = i[1],
                        l = (0, r.useCallback)((function() {
                            o((function(e) {
                                return !e
                            }))
                        }), [o]);
                    return p(e, l, n), [a, o]
                }
        },
        88792: function(e, t, n) {
            "use strict";
            n.d(t, {
                V: function() {
                    return c
                }
            });
            var r, i = n(67294),
                a = n(70211),
                o = n(3222),
                l = function(e) {
                    return function(t) {
                        var n = e.fn(t.data);
                        postMessage(n)
                    }
                },
                s = function(e) {
                    if (0 === e.length) return "";
                    var t = e.map((function(e) {
                        return "".concat(e)
                    })).toString();
                    return "importScripts('".concat(t, "')")
                };
            ! function(e) {
                e.AUTO = "auto", e.NONE = "none"
            }(r || (r = {}));
            var u = function(e, t, n) {
                    var r = "\n    ".concat(s(t), ";\n    onmessage=(").concat(l, ")({\n      fn: (").concat(e, "),\n      transferable: '").concat(n, "'\n    })\n  "),
                        i = new Blob([r], {
                            type: "text/javascript"
                        });
                    return URL.createObjectURL(i)
                },
                c = function(e, t, n) {
                    var l = (0, i.useState)(new a.xQ)[0],
                        s = (0, i.useCallback)((function(e) {
                            l.next(e)
                        }), [l]);
                    return (0, i.useEffect)((function() {
                        var i = u(e, t, r.AUTO),
                            a = new Worker(i);
                        l.pipe().subscribe({
                            next: function(e) {
                                e && a.postMessage(e)
                            }
                        }), new o.y((function(e) {
                            return a.onmessage = function(t) {
                                    e.next(t.data)
                                },
                                function() {
                                    a.onmessage = null
                                }
                        })).subscribe(n)
                    }), [t, e, n, l]), s
                }
        },
        52751: function(e, t, n) {
            "use strict";
            n.d(t, {
                Sv: function() {
                    return P
                },
                sp: function() {
                    return T
                },
                zJ: function() {
                    return E
                }
            });
            var r = n(47568),
                i = n(26042),
                a = n(69396),
                o = n(10253),
                l = n(34051),
                s = n.n(l),
                u = n(39846),
                c = n(75142),
                d = n(5631),
                f = n(44081),
                m = n(89233),
                h = n(57027),
                v = n(67294),
                p = n(96381),
                x = n(66008),
                g = n(55709),
                q = n(43485),
                b = n(41931),
                y = n(93783),
                j = n(31762),
                S = n(10179),
                w = n(99477),
                Z = n(11633),
                F = n(30557),
                C = n(72328),
                k = n(49143),
                _ = n(41230),
                T = function(e, t, n) {
                    var r = (0, v.useState)((function() {
                        return new u.t(5)
                    }))[0];
                    return (0, v.useEffect)((function() {
                        var i = (0, c.aj)([e, t]).pipe((0, p.w)((function(e) {
                            var t = (0, o.Z)(e, 2),
                                r = t[0],
                                i = t[1];
                            return i ? (0, F.e3)({
                                spaceId: r,
                                sessionId: i,
                                activeSessions$: n
                            }) : d.E
                        })), (0, x.h)((function(e) {
                            return !e.remove
                        })), (0, g.U)((function(e) {
                            return {
                                sessionId: e.sessionId,
                                quaternion: e.change
                            }
                        }))).subscribe(r);
                        return function() {
                            return i.unsubscribe()
                        }
                    }), [n, r, t, e]), r
                },
                M = function() {
                    var e = (0, r.Z)(s().mark((function e(t) {
                        var n;
                        return s().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    if (t) {
                                        e.next = 2;
                                        break
                                    }
                                    return e.abrupt("return", void 0);
                                case 2:
                                    return e.next = 4, I(t);
                                case 4:
                                    return (n = e.sent).flipY = !1, n.needsUpdate = !0, e.abrupt("return", n);
                                case 8:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }(),
                P = function(e) {
                    return e.pipe((0, p.w)((function(e) {
                        if (!e) return (0, f.D)([null]);
                        var t = new k.Z(e);
                        t.encoding = w.sRGBEncoding, t.flipY = !1, t.needsUpdate = !0;
                        var n = function(e) {
                            return e.videoWidth && e.videoHeight ? (0, f.D)([{
                                width: e.videoWidth,
                                height: e.videoHeight
                            }]) : (0, h.R)(e, "loadedmetadata").pipe((0, g.U)((function() {
                                return e.videoWidth && e.videoHeight ? {
                                    width: e.videoWidth,
                                    height: e.videoHeight
                                } : null
                            })))
                        }(e).pipe((0, q.O)(null));
                        return n.pipe((0, g.U)((function(e) {
                            return function(e, t) {
                                if (e.center.setX(.5), e.center.setY(.5), t) {
                                    var n = (0, _.Oy)(t),
                                        r = (0, _.c3)(n),
                                        i = r.offset,
                                        a = r.scale;
                                    e.offset = new w.Vector2(i.x, i.y), e.repeat.set(a.x, a.y)
                                }
                            }(t, e), t
                        })))
                    })))
                },
                E = function(e) {
                    var t = e.pipe((0, b.x)(), (0, g.U)((function(e) {
                        return e || {}
                    })), (0, y.j)(Z.oK.photo), (0, b.x)(), (0, p.w)(function() {
                        var e = (0, r.Z)(s().mark((function e(t) {
                            return s().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (!t) {
                                            e.next = 2;
                                            break
                                        }
                                        return e.abrupt("return", M(t));
                                    case 2:
                                        return e.abrupt("return", null);
                                    case 3:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })));
                        return function(t) {
                            return e.apply(this, arguments)
                        }
                    }()));
                    return t
                };
            t.ZP = function(e) {
                var t = e.sessionId,
                    n = e.consumers$,
                    r = e.peerPositions$,
                    l = e.peerMetadata$,
                    s = e.visiblePeers$,
                    u = e.tweenedPeers$,
                    d = e.playerQuaternions$,
                    f = e.textVisiblePeers$,
                    h = (0, v.useState)({
                        textureToUse: void 0,
                        metadata: void 0
                    }),
                    p = h[0],
                    w = h[1],
                    Z = (0, v.useState)(new m.X(!1))[0];
                (0, v.useEffect)((function() {
                    var e = l.pipe((0, S.YU)(), (0, y.j)(t), (0, b.x)()).pipe((0, j._)(1, void 0, (function(e) {
                            var t = E(e);
                            return (0, c.aj)([t, e]).pipe((0, g.U)((function(e) {
                                var t = (0, o.Z)(e, 2);
                                return {
                                    imageTexture: t[0],
                                    metadata: t[1]
                                }
                            })))
                        })), (0, q.O)({
                            imageTexture: void 0,
                            metadata: void 0
                        })),
                        r = n.pipe((0, y.j)(t), (0, b.x)(), (0, y.j)("webcamVideo"), (0, b.x)()).pipe((0, j._)(1, void 0, (function(e) {
                            var t = e.pipe((0, S.YU)(), (0, g.U)((function(e) {
                                    return e.mediaElement
                                })), (0, b.x)()),
                                n = P(t);
                            return (0, c.aj)([e, n]).pipe((0, g.U)((function(e) {
                                var t = (0, o.Z)(e, 2),
                                    n = t[0],
                                    r = t[1];
                                return (0, a.Z)((0, i.Z)({}, n), {
                                    texture: r
                                })
                            })))
                        }))).pipe((0, q.O)(void 0)),
                        u = (0, c.aj)([e, r, Z]).pipe((0, g.U)((function(e) {
                            var t = (0, o.Z)(e, 3),
                                n = t[0],
                                r = n.imageTexture,
                                i = n.metadata,
                                a = t[1],
                                l = t[2];
                            return {
                                textureToUse: !(null === a || void 0 === a ? void 0 : a.paused) && (null === a || void 0 === a ? void 0 : a.texture) ? null === a || void 0 === a ? void 0 : a.texture : r || null,
                                metadata: i,
                                visible: l
                            }
                        }))).subscribe(w),
                        d = s.pipe((0, g.U)((function(e) {
                            return e.has(t)
                        })), (0, b.x)()).subscribe(Z);
                    return function() {
                        u.unsubscribe(), d.unsubscribe()
                    }
                }), [n, l, t, Z, s]);
                var F = (0, v.useState)(),
                    k = F[0],
                    _ = F[1],
                    T = (0, v.useState)(),
                    M = T[0],
                    I = T[1],
                    A = (0, v.useState)(!1),
                    D = A[0],
                    V = A[1];
                (0, v.useEffect)((function() {
                    var e = f.pipe((0, g.U)((function(e) {
                        return e.has(t)
                    }))).subscribe(V);
                    return function() {
                        return e.unsubscribe()
                    }
                }), [f, t]), (0, v.useEffect)((function() {
                    var e = r.pipe((0, y.j)(t), (0, b.x)()).subscribe({
                            next: function(e) {
                                return _(e)
                            }
                        }),
                        n = d.pipe((0, x.h)((function(e) {
                            return e.sessionId === t
                        })), (0, g.U)((function(e) {
                            return e.quaternion
                        }))).subscribe({
                            next: function(e) {
                                return I(e)
                            }
                        });
                    return function() {
                        e.unsubscribe(), n.unsubscribe()
                    }
                }), [r, d, t]);
                var R = (0, v.useState)(!1),
                    N = R[0],
                    B = R[1];
                return (0, v.useEffect)((function() {
                    var e = u.pipe((0, g.U)((function(e) {
                        return e.has(t)
                    }))).subscribe(B);
                    return function() {
                        return e.unsubscribe()
                    }
                }), [u, t]), {
                    avatar: p,
                    visible: (0, C.dO)(Z),
                    targetPosition: k,
                    targetQuaternion: M,
                    animate: N,
                    textVisible: D
                }
            };
            var I = function() {
                var e = (0, r.Z)(s().mark((function e(t) {
                    var n;
                    return s().wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return n = new w.TextureLoader, e.abrupt("return", new Promise((function(e, r) {
                                    n.load(t, (function(t) {
                                        t.encoding = w.sRGBEncoding, e(t)
                                    }), void 0, (function(e) {
                                        r(e)
                                    }))
                                })));
                            case 2:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                })));
                return function(t) {
                    return e.apply(this, arguments)
                }
            }()
        },
        8077: function(e, t, n) {
            "use strict";
            n.d(t, {
                D: function() {
                    return P
                },
                S: function() {
                    return R
                }
            });
            var r = n(26042),
                i = n(10253),
                a = n(29815),
                o = n(67294),
                l = n(75142),
                s = n(44081),
                u = n(89233),
                c = n(3222),
                d = n(70211),
                f = n(93783),
                m = n(41931),
                h = n(55709),
                v = n(22807),
                p = n(96381),
                x = n(31166),
                g = n(7839),
                q = n(12368),
                b = n(66008),
                y = n(11120),
                j = n(47746),
                S = n(20264),
                w = n(29674),
                Z = n(99477),
                F = n(29137),
                C = n(14788),
                k = n(10179),
                _ = n(72328),
                T = n(88792),
                M = function(e) {
                    return Math.min(Math.max(0, e), 1)
                };

            function P(e, t) {
                var n = Math.sqrt(e),
                    r = t || {},
                    i = r.maxDistance,
                    a = void 0 === i ? 1e4 : i,
                    o = r.distanceModel,
                    l = r.rollOffFactor,
                    s = void 0 === l ? 2 : l,
                    u = r.refDistance,
                    c = void 0 === u ? 5 : u,
                    d = r.volume,
                    f = (void 0 === d ? 100 : d) / 100;
                return "global" === r.mode ? f : "linear" === o ? f * M((1 - s) * (n - c) / (a - c)) : f * M(Math.pow(Math.max(n, c) / c, -s))
            }
            var E = function(e) {
                    var t = function(e) {
                        return Math.min(Math.max(0, e), 1)
                    };
                    return Object.entries(e).reduce((function(e, n) {
                        var r = n[0],
                            i = n[1],
                            a = i.distance,
                            o = i.playing,
                            l = i.positionalAudioConfig;
                        return e[r] = o ? function(e, n) {
                            var r = Math.sqrt(e),
                                i = n.maxDistance,
                                a = void 0 === i ? 1e4 : i,
                                o = n.distanceModel,
                                l = n.rollOffFactor,
                                s = void 0 === l ? 2 : l,
                                u = n.refDistance,
                                c = void 0 === u ? 5 : u;
                            return t("linear" === o ? (1 - s) * (r - c) / (a - c) : Math.pow(Math.max(r, c) / c, -s))
                        }(a, l) : 0, e
                    }), {})
                },
                I = {
                    distanceModel: "exponential",
                    maxDistance: 50,
                    refDistance: 4,
                    rollOffFactor: 4
                },
                A = function(e) {
                    var t = e.consumerOfPeer$,
                        n = e.positionalAudioConfig$,
                        r = e.listener,
                        i = e.peerPositions$,
                        o = e.peerId,
                        l = t.pipe((0, v.R)((function(e, t) {
                            return function(e, t, n) {
                                var r = e.positionalAudio,
                                    i = e.playing;
                                if (r) return t.paused && i ? r.pause() : t.paused || i || r.play(), {
                                    positionalAudio: r,
                                    playing: !t.paused
                                };
                                if (t.paused || !t.mediaElement) return e;
                                var a = new Z.PositionalAudio(n);
                                return a.setMediaStreamSource(t.mediaElement.srcObject), a.play(), {
                                    positionalAudio: a,
                                    playing: !0
                                }
                            }(e, t, r)
                        }), {
                            playing: !1,
                            positionalAudio: void 0
                        }));
                    return l.pipe((0, p.w)((function(e) {
                        var t = e.positionalAudio,
                            r = e.playing;
                        if (!t) return (0, s.D)([void 0]);
                        if (r) {
                            var l = n.pipe((0, m.x)(), (0, h.U)((function(e) {
                                ! function(e, t) {
                                    e.setRefDistance(t.refDistance || 5), e.setRolloffFactor(t.rollOffFactor || 2), e.setDistanceModel(t.distanceModel || "exponential"), e.setMaxDistance(t.maxDistance || 1e4)
                                }(t, e)
                            })));
                            return l.pipe((0, p.w)((function() {
                                return i.pipe((0, f.j)(o), (0, k.YU)(), (0, m.x)()).pipe((0, h.U)((function(e) {
                                    var n;
                                    return (n = t.position).set.apply(n, (0, a.Z)(e)), t.updateMatrixWorld(!0), e
                                })))
                            })))
                        }
                        return (0, s.D)([void 0])
                    })))
                },
                D = function(e) {
                    var t = e.peerId,
                        n = e.consumerOfPeer$,
                        r = e.distancesByPeer$,
                        a = e.broadcasters$,
                        o = e.peerPositions$,
                        u = e.defaultPositionalAudioConfig$,
                        c = e.distanceCalculationRequests$,
                        d = e.spatialAudioEnabled$,
                        v = e.listener$;
                    return n.pipe((0, x.n)((function(e) {
                        var n = function(e) {
                            var t = e.peerId,
                                n = e.broadcasters$,
                                r = e.defaultPositionalAudioConfig$,
                                a = n.pipe((0, f.j)(t), (0, m.x)()),
                                o = (0, l.aj)([a, r]).pipe((0, h.U)((function(e) {
                                    var t = (0, i.Z)(e, 2),
                                        n = t[0],
                                        r = t[1];
                                    return n || r
                                })));
                            return o
                        }({
                            peerId: t,
                            broadcasters$: a,
                            defaultPositionalAudioConfig$: u
                        });
                        return d.pipe((0, p.w)((function(a) {
                            if (a) return v.pipe((0, p.w)((function(r) {
                                return r ? A({
                                    consumerOfPeer$: e,
                                    positionalAudioConfig$: n,
                                    peerId: t,
                                    peerPositions$: o,
                                    listener: r
                                }) : (0, s.D)([void 0])
                            })));
                            var u = e.pipe((0, g.fU)((function(e, t) {
                                    return t.mediaElement ? (0, F._D)({
                                        element: t.mediaElement,
                                        play: !t.paused,
                                        playing: e
                                    }) : (0, s.D)([!1])
                                }), !1, 1), (0, m.x)()),
                                d = r.pipe((0, f.j)(t), (0, m.x)());
                            return (0, l.aj)([(0, s.D)([t]), u, d, n]).pipe((0, h.U)((function(e) {
                                var t = (0, i.Z)(e, 4);
                                return {
                                    peerId: t[0],
                                    playing: t[1],
                                    peerDistance: t[2],
                                    positionalAudioConfig: t[3]
                                }
                            })), (0, q.b)((function(e) {
                                return c.next(e)
                            })))
                        })))
                    })))
                },
                V = [],
                R = function(e) {
                    var t = e.authenticated$,
                        n = e.consumers$,
                        a = e.distancesByPeer$,
                        v = e.peerPositions$,
                        g = e.broadcasters$,
                        q = e.enableSpatialAudio,
                        Z = e.listener$,
                        F = function(e, t) {
                            var n = (0, o.useState)(new u.X(I))[0],
                                a = (0, _.Qy)();
                            return (0, o.useEffect)((function() {
                                (0, l.aj)([e.pipe((0, b.h)((function(e) {
                                    return e
                                }))), t.pipe((0, k.YU)())]).pipe((0, p.w)((function(e) {
                                    var t = (0, i.Z)(e, 2)[1];
                                    return new c.y((function(e) {
                                        var n = (0, w.hx)(t).onSnapshot((function(t) {
                                            t.exists ? e.next(t.data()) : e.next(null)
                                        }));
                                        return function() {
                                            n()
                                        }
                                    }))
                                }))).pipe((0, m.x)()).pipe((0, p.w)((function(e) {
                                    return e ? (0, s.D)([e]) : new c.y((function(e) {
                                        var t = C.h.collection("settings").doc("defaultPositionalAudioConfig").onSnapshot((function(t) {
                                            t.exists ? e.next(t.data()) : e.next(I)
                                        }));
                                        return function() {
                                            return t()
                                        }
                                    }))
                                }))).pipe((0, h.U)((function(e) {
                                    return (0, r.Z)({}, I, e || {})
                                })), a()).subscribe(n)
                            }), [e, n, t, a]), n
                        }(t, e.spaceId$),
                        M = (0, o.useState)(new d.xQ)[0],
                        P = (0, T.V)(E, V, M),
                        A = (0, _.Qy)(),
                        R = (0, o.useState)(new d.xQ)[0],
                        N = (0, _.j7)(q);
                    (0, o.useEffect)((function() {
                        n.pipe((0, b.h)((function(e) {
                            return "webcamAudio" === e.kind
                        })), (0, y.v)((function(e) {
                            return e.producingSessionId
                        })), (0, j.zg)((function(e) {
                            var t = e.pipe((0, h.U)((function(e) {
                                    return e.mediaElement
                                })), (0, m.x)()),
                                n = e.key;
                            return t.pipe((0, p.w)((function(e) {
                                return e ? M.pipe((0, f.j)(n), (0, k.YU)(), (0, m.x)(), (0, h.U)((function(t) {
                                    return isNaN(t) || t === e.volume || (e.volume = t), e.volume
                                }))) : (0, s.D)([void 0])
                            })))
                        })), A()).subscribe(), n.pipe((0, b.h)((function(e) {
                            return "webcamAudio" === e.kind
                        })), (0, y.v)((function(e) {
                            return e.producingSessionId
                        }))).pipe((0, j.zg)((function(e) {
                            var t = e.key;
                            return e.pipe((0, x.n)((function(e) {
                                return D({
                                    peerId: t,
                                    consumerOfPeer$: e,
                                    distancesByPeer$: a,
                                    peerPositions$: v,
                                    broadcasters$: g,
                                    defaultPositionalAudioConfig$: F,
                                    distanceCalculationRequests$: R,
                                    spatialAudioEnabled$: N,
                                    listener$: Z
                                })
                            })))
                        })), A()).subscribe(), R.pipe((0, S.e)(250), (0, b.h)((function(e) {
                            return e.length > 0
                        })), (0, h.U)((function(e) {
                            var t = {};
                            return e.forEach((function(e) {
                                var n = e.peerId,
                                    r = e.playing,
                                    i = e.peerDistance,
                                    a = e.positionalAudioConfig;
                                t[n] = {
                                    playing: r,
                                    distance: i,
                                    positionalAudioConfig: a
                                }
                            })), t
                        })), A()).subscribe({
                            next: P
                        })
                    }), [g, P, n, F, R, a, Z, v, N, A, M])
                }
        },
        11633: function(e, t, n) {
            "use strict";
            n.d(t, {
                AQ: function() {
                    return g
                },
                fG: function() {
                    return q
                },
                oK: function() {
                    return x
                }
            });
            var r = n(47568),
                i = n(10253),
                a = n(34051),
                o = n.n(a),
                l = n(14788),
                s = n(67294),
                u = n(30557),
                c = n(9923),
                d = n(75142),
                f = n(14370),
                m = n(72328),
                h = n(10179),
                v = n(96381),
                p = n(31762),
                x = {
                    name: "displayName",
                    photo: "photo",
                    bodyColor: "bodyColor",
                    avatarScale: "avatarScale"
                },
                g = function(e) {
                    var t = e.intialMetadata,
                        n = e.userId$,
                        a = e.spaceId$,
                        u = e.sessionId$,
                        x = (0, s.useState)((function() {
                            return t ? (0, c.gf)(t) : void 0
                        })),
                        g = x[0],
                        q = x[1],
                        b = (0, m.j7)(g);
                    return (0, s.useEffect)((function() {
                        var e = (0, d.aj)([u.pipe((0, h.YU)()), n.pipe((0, h.YU)())]).pipe((0, v.w)(function() {
                                var e = (0, r.Z)(o().mark((function e(t) {
                                    var n, r, a, s;
                                    return o().wrap((function(e) {
                                        for (;;) switch (e.prev = e.next) {
                                            case 0:
                                                return n = (0, i.Z)(t, 2), r = n[0], a = n[1], s = l.sM.ref("userMetadata/".concat(r)), e.next = 4, s.set({
                                                    userId: a
                                                });
                                            case 4:
                                                return e.abrupt("return", s);
                                            case 5:
                                            case "end":
                                                return e.stop()
                                        }
                                    }), e)
                                })));
                                return function(t) {
                                    return e.apply(this, arguments)
                                }
                            }())),
                            t = e.pipe((0, p._)(1, void 0, (function(e) {
                                var t = (0, d.aj)([e, a.pipe((0, h.YU)())]).pipe((0, v.w)(function() {
                                        var e = (0, r.Z)(o().mark((function e(t) {
                                            var n, r, a;
                                            return o().wrap((function(e) {
                                                for (;;) switch (e.prev = e.next) {
                                                    case 0:
                                                        return n = (0, i.Z)(t, 2), r = n[0], a = n[1], e.next = 3, r.update({
                                                            spaceId: a
                                                        });
                                                    case 3:
                                                    case "end":
                                                        return e.stop()
                                                }
                                            }), e)
                                        })));
                                        return function(t) {
                                            return e.apply(this, arguments)
                                        }
                                    }())),
                                    n = (0, d.aj)([e, b.pipe((0, h.YU)())]).pipe((0, v.w)(function() {
                                        var e = (0, r.Z)(o().mark((function e(t) {
                                            var n, r, a;
                                            return o().wrap((function(e) {
                                                for (;;) switch (e.prev = e.next) {
                                                    case 0:
                                                        return n = (0, i.Z)(t, 2), r = n[0], a = n[1], e.next = 3, r.update({
                                                            metadata: a
                                                        });
                                                    case 3:
                                                    case "end":
                                                        return e.stop()
                                                }
                                            }), e)
                                        })));
                                        return function(t) {
                                            return e.apply(this, arguments)
                                        }
                                    }()));
                                return (0, f.T)(t, n)
                            }))).subscribe();
                        return function() {
                            t.unsubscribe()
                        }
                    }), [b, a, n, u]), {
                        metadata: g,
                        setMetadata: q
                    }
                },
                q = function(e) {
                    var t = e.spaceId,
                        n = (0, s.useState)({}),
                        r = n[0],
                        i = n[1];
                    return (0, s.useEffect)((function() {
                        if (t) {
                            var e = (0, u.Np)({
                                spaceId: t,
                                setPeersMetadata: i
                            });
                            return function() {
                                e()
                            }
                        }
                    }), [i, t]), r
                }
        },
        91200: function(e, t, n) {
            "use strict";
            n.d(t, {
                Dh: function() {
                    return Z
                },
                Dv: function() {
                    return F
                },
                UT: function() {
                    return k
                },
                wP: function() {
                    return b
                }
            });
            var r = n(26042),
                i = n(10253),
                a = n(67294),
                o = n(89233),
                l = n(75142),
                s = n(44081),
                u = n(96381),
                c = n(22807),
                d = n(20264),
                f = n(55709),
                m = n(10179),
                h = n(72328),
                v = n(30557),
                p = n(99477),
                x = n(88792);

            function g(e) {
                var t, n = e.playerState,
                    r = e.activeSessions,
                    i = e.peerPlayerStates,
                    a = e.maxVisiblePeers,
                    o = e.broadcastingPeers,
                    l = e.projectionMatrix,
                    s = e.maxPeersToSee,
                    u = e.maxPeerstoHear,
                    c = function() {
                        var e = {};
                        return Object.entries(i).forEach((function(t) {
                            var i = t[0],
                                a = t[1];
                            r.includes(i) && (e[i] = function(e, t) {
                                var n = e.map((function(e, n) {
                                        return Math.pow(e - t[n], 2)
                                    })),
                                    r = 0;
                                return n.forEach((function(e) {
                                    r += e
                                })), r
                            }(n.position, a))
                        })), e
                    }(),
                    d = (t = c, Object.entries(t).sort((function(e, t) {
                        return e[1] - t[1]
                    })).map((function(e) {
                        return {
                            id: e[0],
                            distance: e[1]
                        }
                    }))),
                    f = function(e) {
                        var t = e.distancesByPeer,
                            n = e.peersSortedByDistance,
                            r = e.max,
                            i = n.slice(0, a);
                        if (Object.keys(o).length > 0) {
                            var l = i.map((function(e) {
                                return e.id
                            }));
                            Object.keys(o).forEach((function(e) {
                                if (!l.includes(e)) {
                                    var n = t[e];
                                    n && i.unshift({
                                        id: e,
                                        distance: n
                                    })
                                }
                            }))
                        }
                        return i.slice(0, r + 1).reduce((function(e, t) {
                            return e[t.id] = t.distance, e
                        }), {})
                    }({
                        distancesByPeer: c,
                        peersSortedByDistance: d,
                        max: u
                    }),
                    m = function(e) {
                        var t = e.distancesByPeer,
                            n = e.peersSortedByDistance,
                            r = e.max,
                            s = function() {
                                var e = new THREE.Matrix4;
                                e.elements = l;
                                var t = new THREE.Frustum;
                                return t.setFromProjectionMatrix(e), Object.entries(i).filter((function(e) {
                                    var n = e[1],
                                        r = new THREE.Vector3(n[0], n[1], n[2]),
                                        i = r.clone().addScalar(-1),
                                        a = r.clone().addScalar(1),
                                        o = new THREE.Box3(i, a);
                                    return t.intersectsBox(o)
                                })).map((function(e) {
                                    return e[0]
                                }))
                            }(),
                            u = n.filter((function(e) {
                                return s.includes(e.id)
                            })).slice(0, a);
                        if (Object.keys(o).length > 0) {
                            var c = u.map((function(e) {
                                return e.id
                            }));
                            Object.keys(o).forEach((function(e) {
                                if (s.includes(e) && !c.includes(e)) {
                                    var n = t[e];
                                    n && u.unshift({
                                        id: e,
                                        distance: n
                                    })
                                }
                            }))
                        }
                        return u.slice(0, r + 1).reduce((function(e, t) {
                            return e[t.id] = t.distance, e
                        }), {})
                    }({
                        distancesByPeer: c,
                        peersSortedByDistance: d,
                        max: s
                    });
                return {
                    distancesByPeer: c,
                    allVisiblePeers: d.slice(0, a),
                    peersToHear: f,
                    peersToSee: m
                }
            }
            var q = n(54727),
                b = function(e) {
                    var t = e.spaceId$,
                        n = e.sessionId$,
                        p = e.activeSessions$,
                        x = (0, a.useState)(new o.X({}))[0],
                        g = (0, h.Qy)();
                    return (0, a.useEffect)((function() {
                        (0, l.aj)([t, n]).pipe((0, u.w)((function(e) {
                            var t = (0, i.Z)(e, 2),
                                n = t[0],
                                a = t[1];
                            return n && a ? (0, v.Ut)({
                                spaceId: n,
                                sessionId: a,
                                activeSessions$: p
                            }).pipe((0, c.R)((function(e, t) {
                                var n = (0, r.Z)({}, e);
                                return t.remove ? delete n[t.sessionId] : n[t.sessionId] = t.change, n
                            }), {})) : (0, s.D)([{}])
                        })), (0, d.e)(y), (0, f.U)((function(e) {
                            return j(e)
                        })), (0, m.YU)(), g()).subscribe(x)
                    }), [p, n, t, g, x]), x
                },
                y = 500,
                j = function(e) {
                    return e[e.length - 1]
                },
                S = new p.Vector3,
                w = new p.Vector3;

            function Z(e, t) {
                return S.set(e[0], e[1], e[2]), w.set(t[0], t[1], t[2]), S.add(w), S.setY(e[1]), S
            }
            var F = function(e, t) {
                    var n = e.map((function(e, n) {
                            return Math.pow(e - t[n], 2)
                        })),
                        r = 0;
                    return n.forEach((function(e) {
                        r += e
                    })), r
                },
                C = ["https://cdnjs.cloudflare.com/ajax/libs/three.js/r125/three.min.js"],
                k = function(e) {
                    var t, n, r = e.playerLocation$,
                        s = e.peerPositions$,
                        u = e.activeSessions$,
                        c = e.peersSettings$,
                        v = e.broadcastingPeers$,
                        b = (0, a.useState)(new o.X({
                            allVisiblePeers: [],
                            distancesByPeer: {},
                            peersToHear: {},
                            peersToSee: {}
                        }))[0],
                        y = (0, a.useState)(new o.X({}))[0],
                        j = (0, a.useState)(new o.X([]))[0],
                        S = (0, a.useState)(new o.X({}))[0],
                        w = (0, a.useState)(new o.X({}))[0],
                        Z = (0, h.Qy)(),
                        F = (0, x.V)(g, C, b),
                        k = null === (t = (0, a.useContext)(q.Z)) || void 0 === t || null === (n = t.three) || void 0 === n ? void 0 : n.camera,
                        _ = (0, h.j7)(k);
                    return (0, a.useEffect)((function() {
                        var e = b.subscribe({
                            next: function(e) {
                                var t = e.distancesByPeer,
                                    n = e.allVisiblePeers,
                                    r = e.peersToHear,
                                    i = e.peersToSee;
                                y.next(t), j.next(n), S.next(r), w.next(i)
                            }
                        });
                        return (0, l.aj)([s, u, r, v, c, _]).pipe((0, d.e)(250), (0, f.U)((function(e) {
                                return e[e.length - 1]
                            })), (0, m.YU)(), Z()).subscribe({
                                next: function(e) {
                                    var t = (0, i.Z)(e, 6),
                                        n = t[0],
                                        r = t[1],
                                        a = t[2],
                                        o = t[3],
                                        l = t[4],
                                        s = t[5];
                                    if (s) {
                                        var u = l.maxVisiblePeers,
                                            c = void 0 === u ? 150 : u,
                                            d = l.maxAudioPeers,
                                            f = void 0 === d ? 12 : d,
                                            m = l.maxVideoPeers,
                                            h = void 0 === m ? 12 : m,
                                            v = new p.Frustum;
                                        try {
                                            var x = s.clone();
                                            x.setFocalLength(.8 * x.getFocalLength());
                                            var g = (new p.Matrix4).multiplyMatrices(x.projectionMatrix, x.matrixWorldInverse);
                                            v.setFromProjectionMatrix(g), F({
                                                playerState: a,
                                                activeSessions: Array.from(r.values()),
                                                peerPlayerStates: n,
                                                broadcastingPeers: o,
                                                maxVisiblePeers: c,
                                                projectionMatrix: g.elements,
                                                maxPeersToSee: h,
                                                maxPeerstoHear: f
                                            })
                                        } catch (q) {
                                            console.error(q)
                                        }
                                    }
                                }
                            }),
                            function() {
                                e.unsubscribe()
                            }
                    }), [u, j, v, _, b, y, s, c, S, w, r, F, Z]), {
                        distancesByPeer$: y,
                        allVisiblePeers$: j,
                        peersToHear$: S,
                        peersToSee$: w
                    }
                }
        },
        60050: function(e, t, n) {
            "use strict";
            n.d(t, {
                D: function() {
                    return i
                }
            });
            var r = n(67294),
                i = function(e) {
                    var t = (0, r.useRef)(e);
                    return (0, r.useEffect)((function() {
                        t.current = e
                    }), [e]), t.current
                }
        },
        15820: function(e, t, n) {
            "use strict";
            n.d(t, {
                O: function() {
                    return o
                },
                s: function() {
                    return a
                }
            });
            var r = n(86704),
                i = n(67294),
                a = function(e) {
                    var t = e.meshesChanged,
                        n = e.isCollidable,
                        a = e.isGround,
                        o = e.mesh;
                    (0, i.useEffect)((function() {
                        if (t && o && (n || a)) return a && o.layers.enable(r.mJ), n && o.layers.enable(r.Qc), t(),
                            function() {
                                o.layers.disableAll(), t()
                            }
                    }), [a, n, o, t])
                },
                o = function(e) {
                    var t = e.meshesChanged,
                        n = e.isCollidable,
                        r = e.isGround,
                        o = (0, i.useState)(),
                        l = o[0],
                        s = o[1];
                    return a({
                        meshesChanged: t,
                        isGround: r,
                        isCollidable: n,
                        mesh: l
                    }), {
                        mesh: l,
                        setMesh: s
                    }
                }
        },
        64706: function(e, t, n) {
            "use strict";
            n.d(t, {
                RS: function() {
                    return c
                },
                Xz: function() {
                    return f
                },
                e6: function() {
                    return d
                },
                yr: function() {
                    return m
                }
            });
            var r = n(47568),
                i = n(34051),
                a = n.n(i),
                o = n(14788),
                l = n(67294),
                s = n(29674),
                u = function(e) {
                    return o.h.collection("spaces").where("slug", "==", e)
                },
                c = function() {
                    var e = (0, r.Z)(a().mark((function e(t) {
                        var n, r, i;
                        return a().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 3, (0, s.EW)(t).get();
                                case 3:
                                    if ((r = e.sent).exists) {
                                        e.next = 6;
                                        break
                                    }
                                    return e.abrupt("return", t);
                                case 6:
                                    return i = null === (n = r.data()) || void 0 === n ? void 0 : n.slug, e.abrupt("return", i || t);
                                case 8:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }(),
                d = function() {
                    var e = (0, r.Z)(a().mark((function e(t) {
                        var n, r;
                        return a().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, u(t).get();
                                case 2:
                                    if (0 !== (n = e.sent).size) {
                                        e.next = 5;
                                        break
                                    }
                                    return e.abrupt("return", {
                                        exists: !1,
                                        id: void 0
                                    });
                                case 5:
                                    return r = n.docs[0], e.abrupt("return", {
                                        exists: !0,
                                        id: r.id
                                    });
                                case 7:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }(),
                f = function(e) {
                    var t = (0, l.useState)([]),
                        n = t[0],
                        i = t[1];
                    return (0, l.useEffect)((function() {
                        (0, r.Z)(a().mark((function t() {
                            var n;
                            return a().wrap((function(t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        return t.next = 2, Promise.all(e.map(function() {
                                            var e = (0, r.Z)(a().mark((function e(t) {
                                                return a().wrap((function(e) {
                                                    for (;;) switch (e.prev = e.next) {
                                                        case 0:
                                                            return e.t0 = t, e.next = 3, c(t);
                                                        case 3:
                                                            return e.t1 = e.sent, e.abrupt("return", {
                                                                spaceId: e.t0,
                                                                slug: e.t1
                                                            });
                                                        case 5:
                                                        case "end":
                                                            return e.stop()
                                                    }
                                                }), e)
                                            })));
                                            return function(t) {
                                                return e.apply(this, arguments)
                                            }
                                        }()));
                                    case 2:
                                        n = t.sent, i(n);
                                    case 4:
                                    case "end":
                                        return t.stop()
                                }
                            }), t)
                        })))()
                    }), [e]), n
                },
                m = function(e) {
                    var t = (0, l.useState)(),
                        n = t[0],
                        r = t[1];
                    return (0, l.useEffect)((function() {
                        if (e) {
                            var t = (0, s.EW)(e).onSnapshot((function(e) {
                                if (e.exists) {
                                    var t, n = null === (t = e.data()) || void 0 === t ? void 0 : t.slug;
                                    r(n)
                                } else r(void 0)
                            }));
                            return function() {
                                return t()
                            }
                        }
                    }), [e]), n
                };
            t.ZP = function(e) {
                var t = (0, l.useState)(),
                    n = t[0],
                    i = t[1],
                    s = (0, l.useState)(!1),
                    c = s[0],
                    d = s[1];
                return (0, l.useEffect)((function() {
                    var t = u(e).onSnapshot(function() {
                        var t = (0, r.Z)(a().mark((function t(n) {
                            return a().wrap((function(t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        if (!n.empty) {
                                            t.next = 6;
                                            break
                                        }
                                        return t.next = 3, o.h.collection("spaces").doc(e).get();
                                    case 3:
                                        return t.sent.exists ? i(e) : d(!0), t.abrupt("return");
                                    case 6:
                                        i(n.docs[0].id);
                                    case 7:
                                    case "end":
                                        return t.stop()
                                }
                            }), t)
                        })));
                        return function(e) {
                            return t.apply(this, arguments)
                        }
                    }());
                    return function() {
                        return t()
                    }
                }), [e]), {
                    spaceId: n,
                    doesNotExist: c
                }
            }
        },
        23917: function(e, t, n) {
            "use strict";
            var r = n(5327),
                i = n(67294),
                a = n(29674),
                o = n(70031),
                l = n(55155);
            t.Z = function(e) {
                var t = e.documentationMode,
                    n = e.spaceId,
                    s = (0, i.useState)(!1),
                    u = s[0],
                    c = s[1],
                    d = (0, i.useCallback)((function() {
                        c((function(e) {
                            return !e
                        }))
                    }), []),
                    f = (0, i.useMemo)((function() {
                        return u && t ? {
                            video: {
                                playSettings: {
                                    maxDistance: 1e3
                                }
                            },
                            nftPlacard: {
                                detailsVisibleDistance: 300,
                                titleVisibleDistance: 300
                            }
                        } : null
                    }), [u, t]);
                (0, l.zp)("\\", d);
                var m = (0, i.useMemo)((function() {
                    return (0, a.Oi)(n)
                }), [n]);
                return (0, o.Z)({
                    path: m.path,
                    override: f,
                    defaultValue: r.defaultTheme
                })
            }
        },
        19258: function(e, t, n) {
            "use strict";
            n.d(t, {
                KK: function() {
                    return v
                },
                Kt: function() {
                    return p
                }
            });
            var r = n(10253),
                i = n(67294),
                a = n(14788),
                o = n(9923),
                l = n(75142),
                s = n(44081),
                u = n(14370),
                c = n(96381),
                d = n(20264),
                f = n(55709),
                m = n(41931),
                h = n(10179),
                v = 500,
                p = {
                    position: [0, 0, 0],
                    quarternion: [0, 0, 0, 0],
                    lookAt: [100, 0, 0]
                };
            t.ZP = function(e) {
                var t = e.spaceId$,
                    n = e.userId$,
                    p = e.sessionId$,
                    x = e.invisible,
                    g = e.enteredSpace$,
                    q = e.playerLocation$;
                (0, i.useEffect)((function() {
                    if (!x) {
                        var e = (0, l.aj)([t, n, p, g]).pipe((0, c.w)((function(e) {
                            var t = (0, r.Z)(e, 4),
                                n = t[0],
                                i = t[1],
                                l = t[2],
                                c = t[3];
                            if (!n || !i || !l || !c) return (0, s.D)([void 0]);
                            var p = a.Yo.ref("userPositions/".concat(n, "/").concat(l)),
                                x = a.Yo.ref("userRotations/".concat(n, "/").concat(l)),
                                g = q.pipe((0, d.e)(v), (0, f.U)((function(e) {
                                    return e[e.length - 1]
                                })), (0, h.YU)()),
                                b = g.pipe((0, f.U)((function(e) {
                                    return e.position
                                })), (0, m.x)(o.cO), (0, f.U)((function(e) {
                                    return {
                                        update: {
                                            position: e,
                                            userId: i
                                        },
                                        ref: p
                                    }
                                }))),
                                y = g.pipe((0, f.U)((function(e) {
                                    return e.quarternion
                                })), (0, m.x)(o.cO), (0, f.U)((function(e) {
                                    return {
                                        update: {
                                            quaternion: e,
                                            userId: i
                                        },
                                        ref: x
                                    }
                                })));
                            return (0, u.T)(b, y)
                        }))).pipe((0, h.YU)()).subscribe({
                            next: function(e) {
                                var t = e.update;
                                e.ref.set(t)
                            }
                        });
                        return function() {
                            return e.unsubscribe()
                        }
                    }
                }), [g, x, q, p, t, n])
            }
        },
        38008: function(e, t, n) {
            "use strict";
            n.d(t, {
                C: function() {
                    return i
                }
            });
            var r = n(99477),
                i = function(e, t) {
                    if (e) return t ? new r.Color(e) : e
                }
        },
        71505: function(e, t, n) {
            "use strict";
            n.d(t, {
                ZP: function() {
                    return l
                },
                gn: function() {
                    return a
                },
                zc: function() {
                    return o
                }
            });
            var r = null;

            function i() {
                return null === r && (r = /\b(Macintosh|iPad|iPhone)\b/i.test(navigator.userAgent) && function() {
                    var e = !1;
                    if ("maxTouchPoints" in navigator) e = navigator.maxTouchPoints > 0;
                    else if ("msMaxTouchPoints" in navigator) e = navigator.msMaxTouchPoints > 0;
                    else {
                        var t = window.matchMedia && matchMedia("(pointer:coarse)");
                        if (t && "(pointer:coarse)" === t.media) e = !!t.matches;
                        else if ("orientation" in window) e = !0;
                        else {
                            var n = navigator.userAgent;
                            e = /\b(BlackBerry|webOS|iPhone|IEMobile)\b/i.test(n) || /\b(Android|Windows Phone|iPad|iPod)\b/i.test(n)
                        }
                    }
                    return e
                }()), r
            }

            function a() {
                return /iPad|iPhone|iPod/.test(window.navigator.platform)
            }

            function o() {
                return window.navigator.userAgent.match(/(iPad)/) || "MacIntel" === navigator.platform && navigator.maxTouchPoints > 1
            }
            var l = function() {
                var e, t = !1;
                return e = window.navigator.userAgent || window.navigator.vendor || window.opera, (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(e) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw-(n|u)|c55\/|capi|ccwa|cdm-|cell|chtm|cldc|cmd-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc-s|devi|dica|dmob|do(c|p)o|ds(12|-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(-|_)|g1 u|g560|gene|gf-5|g-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd-(m|p|t)|hei-|hi(pt|ta)|hp( i|ip)|hs-c|ht(c(-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i-(20|go|ma)|i230|iac( |-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|-[a-w])|libw|lynx|m1-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|-([1-8]|c))|phil|pire|pl(ay|uc)|pn-2|po(ck|rt|se)|prox|psio|pt-g|qa-a|qc(07|12|21|32|60|-[2-7]|i-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h-|oo|p-)|sdk\/|se(c(-|0|1)|47|mc|nd|ri)|sgh-|shar|sie(-|m)|sk-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h-|v-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl-|tdg-|tel(i|m)|tim-|t-mo|to(pl|sh)|ts(70|m-|m3|m5)|tx-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas-|your|zeto|zte-/i.test(e.substr(0, 4))) && (t = !0), (a() || function() {
                        var e = window.navigator.userAgent;
                        return /ipad|Nexus (7|9)|xoom|sch-i800|playbook|tablet|kindle/i.test(e)
                    }() || /R7 Build/.test(window.navigator.userAgent)) && (t = !0), i() && (t = !0),
                    function() {
                        return t
                    }
            }()
        },
        82145: function(e, t, n) {
            "use strict";
            n.d(t, {
                gu: function() {
                    return m
                },
                nt: function() {
                    return s
                }
            });
            var r = n(68624),
                i = n(21169),
                a = n(57458),
                o = n(12805),
                l = n(56599),
                s = function(e, t) {
                    return (0, i.U_)(e) ? c(e, t) : function(e, t) {
                        if (!e.url) return null;
                        var n = t.quality,
                            i = void 0 === n ? r.gG : n,
                            a = t.maxWidth,
                            o = void 0 === a ? r.q : a;
                        return u.image(e.url).setDeliveryType("fetch").setAssetType("image").resize((0, l.bA)().width(o)).quality(i).toURL()
                    }(e, t)
                },
                u = new o.r({
                    cloud: {
                        cloudName: "arium"
                    }
                }),
                c = function(e, t) {
                    if (e.fileName) {
                        var n = (0, a.LA)(e),
                            i = t.quality,
                            o = void 0 === i ? r.gG : i,
                            l = t.maxWidth,
                            s = void 0 === l ? r.q : l,
                            u = "".concat(n || "").concat(e.fileName || "");
                        return "/next/static/media/trw-".concat(s).concat(o < 100 ? ",q-".concat(o) : "", "/").concat(u)
                    }
                };
            var d = function() {
                return "".concat("https://nftisahoax.ml", "/thumbnail")
            };

            function f(e) {
                if ((0, i.U_)(e)) {
                    var t = (0, a.K3)(e);
                    return t ? new URL(function(e) {
                        var t = d();
                        return "".concat(t, "/").concat(e)
                    }(t)) : null
                }
                if (!e.url) return null;
                var n = new URL(d());
                return n.searchParams.append("url", e.url), n
            }
            var m = function(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                    n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : r.rQ,
                    i = f(e);
                return i ? (i.searchParams.append("t", t.toString()), i.searchParams.append("w", n.toString()), i.toString()) : null
            }
        },
        36493: function(e, t, n) {
            "use strict";
            var r;
            n.d(t, {
                    y: function() {
                        return r
                    }
                }),
                function(e) {
                    e.cubeMap = "Cube Map", e.HDRI = "HDRI", e.customSkyBox = "Custom Sky Box"
                }(r || (r = {}))
        },
        49168: function(e, t, n) {
            "use strict";
            var r;
            n.d(t, {
                    s: function() {
                        return r
                    }
                }),
                function(e) {
                    e.showModal = "Show Modal"
                }(r || (r = {}))
        },
        42623: function(e, t, n) {
            "use strict";
            n.d(t, {
                H1: function() {
                    return r
                },
                bJ: function() {
                    return i
                },
                ut: function() {
                    return a
                }
            });
            var r = function() {
                    return {
                        roughness: 1,
                        metalness: 0,
                        color: "#a0a0a0",
                        transparent: !1,
                        opacity: 1
                    }
                },
                i = function() {
                    return {
                        resolution: 1024,
                        mixBlur: 0,
                        mixStrength: 4,
                        mirror: .8
                    }
                },
                a = function() {
                    return {
                        hasFrame: !1,
                        doubleSided: !0,
                        width: 4,
                        height: 4,
                        frameConfig: {
                            depth: .01,
                            border: .1
                        },
                        reflectorConfig: i(),
                        materialConfig: r()
                    }
                }
        },
        68728: function(e, t, n) {
            "use strict";
            n.d(t, {
                Q: function() {
                    return i
                },
                w: function() {
                    return r
                }
            });
            var r = 512,
                i = function() {
                    return {
                        width: 1,
                        height: 1,
                        color: "white",
                        reflectivity: .3,
                        flowSpeed: .01,
                        scale: .5,
                        resolution: r,
                        isGround: !0,
                        surfaceType: "plane",
                        surfaceGeometryFile: null
                    }
                }
        },
        75981: function(e, t, n) {
            "use strict";
            n.d(t, {
                F: function() {
                    return r
                },
                J: function() {
                    return i
                }
            });
            var r = ["visual-massage", "tvm-w3", "testspacevm"],
                i = function(e) {
                    var t = e.spaceId;
                    return r.includes(t)
                }
        },
        35922: function(e) {
            e.exports = {
                modalPaperWithDetails: "interactionModal_modalPaperWithDetails___l5Pl",
                modalPaperWithoutDetails: "interactionModal_modalPaperWithoutDetails__uXxzM",
                modelScrollingWrapper: "interactionModal_modelScrollingWrapper__7IoWX",
                closeBtn: "interactionModal_closeBtn__4ruQ3",
                padText: "interactionModal_padText__Y6Xnh",
                detailsColumn: "interactionModal_detailsColumn__NbZ8K",
                assetColumn: "interactionModal_assetColumn__B9h1w",
                contentColumn: "interactionModal_contentColumn__9Z1VG",
                contentColumnCenter: "interactionModal_contentColumnCenter__pQKdC",
                contentContents: "interactionModal_contentContents__qMTVz"
            }
        },
        58148: function(e) {
            e.exports = {
                root: "controls_root__xb45r",
                buttonGridItem: "controls_buttonGridItem__8sytD",
                videoContainer: "controls_videoContainer__SBOAd",
                clickable: "controls_clickable__EwShI",
                clickIcons: "controls_clickIcons__3AEUM",
                icon: "controls_icon__A0i5H",
                withPadding: "controls_withPadding__ehQuZ",
                drawerOpenButton: "controls_drawerOpenButton__C7jq_",
                buttonContainer: "controls_buttonContainer__0kAiF",
                clickableMenu: "controls_clickableMenu__kZI2c",
                clipImage: "controls_clipImage__Oq6tq",
                clipCircle: "controls_clipCircle__j6U5V",
                flipVideo: "controls_flipVideo__c1oFi",
                hidden: "controls_hidden__lsfdg",
                sidebarContainer: "controls_sidebarContainer__gH8tR",
                sidebarColumn: "controls_sidebarColumn___V5fC",
                sidebarColumnHidden: "controls_sidebarColumnHidden__2FkM_",
                sidebarLogo: "controls_sidebarLogo__X2HMa",
                sidebarExitButton: "controls_sidebarExitButton__RxdER",
                "sidebar-clipped-image-container": "controls_sidebar-clipped-image-container__IlibI",
                betaSignUp: "controls_betaSignUp__HQIg5",
                bottomBorder: "controls_bottomBorder__hr5tc",
                signUpCta: "controls_signUpCta__ulGyv",
                "sidebar-clipped-image": "controls_sidebar-clipped-image__nO85p",
                "sidebar-beta-signup-button": "controls_sidebar-beta-signup-button__3n_FY",
                sidebarDisplaynameInput: "controls_sidebarDisplaynameInput__wEicn",
                sidebarButtonContainer: "controls_sidebarButtonContainer__0wWqv",
                sidebarContainerButtonElement: "controls_sidebarContainerButtonElement__el883",
                sidebarButtonIcon: "controls_sidebarButtonIcon__dF4Hr",
                "pause-resume-button-avatar": "controls_pause-resume-button-avatar__Zc_SQ",
                fullWidth: "controls_fullWidth__XZGKZ",
                "sign-up-form": "controls_sign-up-form__H7dBp",
                mainControlsVideoContainer: "controls_mainControlsVideoContainer__eRaqt",
                mainControlsVideoElement: "controls_mainControlsVideoElement__d86aL",
                mainControlsVideo: "controls_mainControlsVideo__dQta2",
                footerControlsCol: "controls_footerControlsCol__Vcuil",
                joystickWrapper: "controls_joystickWrapper__1RlYQ",
                joystickContainer: "controls_joystickContainer__v_JWU",
                topLeftIcon: "controls_topLeftIcon__PXS_Y",
                bottomBar: "controls_bottomBar__2OmgE",
                controls: "controls_controls__DnX_l",
                bottomBarOffset: "controls_bottomBarOffset__360yU",
                instructions: "controls_instructions__LwreZ",
                instructionsText: "controls_instructionsText__lG8ov",
                footerControlButton: "controls_footerControlButton__9_lUk",
                shareButton: "controls_shareButton__cKkzY",
                settingsButton: "controls_settingsButton__H1qZ5",
                pauseButton: "controls_pauseButton__iD4qN",
                resumeButton: "controls_resumeButton__NwR_T",
                alertButtonOn: "controls_alertButtonOn__ijbhe",
                fullScreenButton: "controls_fullScreenButton__5NwmI",
                alertOn: "controls_alertOn__MPbSz",
                fullScreenButtonWrapper: "controls_fullScreenButtonWrapper__IIeB6",
                fullscreenButtonContainer: "controls_fullscreenButtonContainer__mac_p",
                betaSignUpLogo: "controls_betaSignUpLogo__trhor",
                betaSignUpText: "controls_betaSignUpText__LwZpq",
                cursorCrosshair: "controls_cursorCrosshair__g3aLQ",
                cursorPointer: "controls_cursorPointer__tSYKF",
                cursorGrab: "controls_cursorGrab__O_4be",
                cursorGrabbing: "controls_cursorGrabbing__wwj3a"
            }
        },
        58212: function(e) {
            e.exports = {
                fullSize: "interactable_fullSize__MvZ3N",
                fastTransition: "interactable_fastTransition__NpsEs",
                modalAsset: "interactable_modalAsset__0Z_bu",
                fullScreenBtnFullScreen: "interactable_fullScreenBtnFullScreen__ksNkp",
                fullScreenBtn: "interactable_fullScreenBtn__YLh_C",
                modalAssetContainer: "interactable_modalAssetContainer__jYqsj",
                bg: "interactable_bg__S9Sb1",
                bgFullScreen: "interactable_bgFullScreen__EZlry",
                modalAssetFullScreen: "interactable_modalAssetFullScreen__fVmtn"
            }
        },
        74519: function(e) {
            e.exports = {
                modal: "modal_modal__rq_yP",
                closeButton: "modal_closeButton__c9MMm",
                modalContainer: "modal_modalContainer__aljmd",
                modalPaper: "modal_modalPaper__5qX8Z"
            }
        },
        87158: function(e) {
            e.exports = {
                main: "layout_main__vj_5k",
                mainContainer: "layout_mainContainer__WkjF4",
                mainActions: "layout_mainActions__HoG6y",
                loadingWrapper: "layout_loadingWrapper__uS008",
                alignCenter: "layout_alignCenter__5S20o"
            }
        },
        46601: function() {},
        90180: function(e) {
            "use strict";
            e.exports = JSON.parse('{"glyphs":{"0":{"x_min":51,"x_max":779,"ha":828,"o":"m 415 -26 q 142 129 242 -26 q 51 476 51 271 q 141 825 51 683 q 415 984 242 984 q 687 825 585 984 q 779 476 779 682 q 688 131 779 271 q 415 -26 587 -26 m 415 137 q 529 242 485 137 q 568 477 568 338 q 530 713 568 619 q 415 821 488 821 q 303 718 344 821 q 262 477 262 616 q 301 237 262 337 q 415 137 341 137 "},"1":{"x_min":197.609375,"x_max":628,"ha":828,"o":"m 628 0 l 434 0 l 434 674 l 197 674 l 197 810 q 373 837 318 810 q 468 984 450 876 l 628 984 l 628 0 "},"2":{"x_min":64,"x_max":764,"ha":828,"o":"m 764 685 q 675 452 764 541 q 484 325 637 415 q 307 168 357 250 l 754 168 l 754 0 l 64 0 q 193 301 64 175 q 433 480 202 311 q 564 673 564 576 q 519 780 564 737 q 416 824 475 824 q 318 780 358 824 q 262 633 270 730 l 80 633 q 184 903 80 807 q 415 988 276 988 q 654 907 552 988 q 764 685 764 819 "},"3":{"x_min":61,"x_max":767,"ha":828,"o":"m 767 290 q 653 51 767 143 q 402 -32 548 -32 q 168 48 262 -32 q 61 300 61 140 l 250 300 q 298 173 250 219 q 405 132 343 132 q 514 169 471 132 q 563 282 563 211 q 491 405 563 369 q 343 432 439 432 l 343 568 q 472 592 425 568 q 534 701 534 626 q 493 793 534 758 q 398 829 453 829 q 306 789 344 829 q 268 669 268 749 l 80 669 q 182 909 80 823 q 410 986 274 986 q 633 916 540 986 q 735 719 735 840 q 703 608 735 656 q 615 522 672 561 q 727 427 687 486 q 767 290 767 369 "},"4":{"x_min":53,"x_max":775.21875,"ha":828,"o":"m 775 213 l 660 213 l 660 0 l 470 0 l 470 213 l 53 213 l 53 384 l 416 958 l 660 958 l 660 370 l 775 370 l 775 213 m 474 364 l 474 786 l 204 363 l 474 364 "},"5":{"x_min":59,"x_max":767,"ha":828,"o":"m 767 319 q 644 59 767 158 q 382 -29 533 -29 q 158 43 247 -29 q 59 264 59 123 l 252 264 q 295 165 252 201 q 400 129 339 129 q 512 172 466 129 q 564 308 564 220 q 514 437 564 387 q 398 488 464 488 q 329 472 361 488 q 271 420 297 456 l 93 428 l 157 958 l 722 958 l 722 790 l 295 790 l 271 593 q 348 635 306 621 q 431 649 389 649 q 663 551 560 649 q 767 319 767 453 "},"6":{"x_min":57,"x_max":771,"ha":828,"o":"m 744 734 l 544 734 q 500 802 533 776 q 425 828 466 828 q 315 769 359 828 q 264 571 264 701 q 451 638 343 638 q 691 537 602 638 q 771 315 771 449 q 683 79 771 176 q 420 -29 586 -29 q 134 123 227 -29 q 57 455 57 250 q 184 865 57 721 q 452 988 293 988 q 657 916 570 988 q 744 734 744 845 m 426 128 q 538 178 498 128 q 578 300 578 229 q 538 422 578 372 q 415 479 493 479 q 303 430 342 479 q 264 313 264 381 q 308 184 264 240 q 426 128 352 128 "},"7":{"x_min":65.28125,"x_max":762.5,"ha":828,"o":"m 762 808 q 521 435 604 626 q 409 0 438 244 l 205 0 q 313 422 227 234 q 548 789 387 583 l 65 789 l 65 958 l 762 958 l 762 808 "},"8":{"x_min":57,"x_max":770,"ha":828,"o":"m 625 516 q 733 416 697 477 q 770 284 770 355 q 675 69 770 161 q 415 -29 574 -29 q 145 65 244 -29 q 57 273 57 150 q 93 413 57 350 q 204 516 130 477 q 112 609 142 556 q 83 718 83 662 q 177 905 83 824 q 414 986 272 986 q 650 904 555 986 q 745 715 745 822 q 716 608 745 658 q 625 516 688 558 m 414 590 q 516 624 479 590 q 553 706 553 659 q 516 791 553 755 q 414 828 480 828 q 311 792 348 828 q 275 706 275 757 q 310 624 275 658 q 414 590 345 590 m 413 135 q 527 179 487 135 q 564 279 564 218 q 525 386 564 341 q 411 436 482 436 q 298 387 341 436 q 261 282 261 344 q 300 178 261 222 q 413 135 340 135 "},"9":{"x_min":58,"x_max":769,"ha":828,"o":"m 769 492 q 646 90 769 232 q 384 -33 539 -33 q 187 35 271 -33 q 83 224 98 107 l 282 224 q 323 154 286 182 q 404 127 359 127 q 513 182 471 127 q 563 384 563 248 q 475 335 532 355 q 372 315 418 315 q 137 416 224 315 q 58 642 58 507 q 144 877 58 781 q 407 984 239 984 q 694 827 602 984 q 769 492 769 699 m 416 476 q 525 521 488 476 q 563 632 563 566 q 521 764 563 709 q 403 826 474 826 q 297 773 337 826 q 258 649 258 720 q 295 530 258 577 q 416 476 339 476 "},"\u03bf":{"x_min":0,"x_max":764,"ha":863,"o":"m 380 -25 q 105 87 211 -25 q 0 372 0 200 q 104 660 0 545 q 380 775 209 775 q 658 659 552 775 q 764 372 764 544 q 658 87 764 200 q 380 -25 552 -25 m 379 142 q 515 216 466 142 q 557 373 557 280 q 515 530 557 465 q 379 607 466 607 q 245 530 294 607 q 204 373 204 465 q 245 218 204 283 q 379 142 294 142 "},"S":{"x_min":0,"x_max":826,"ha":915,"o":"m 826 306 q 701 55 826 148 q 423 -29 587 -29 q 138 60 255 -29 q 0 318 13 154 l 208 318 q 288 192 216 238 q 437 152 352 152 q 559 181 506 152 q 623 282 623 217 q 466 411 623 372 q 176 487 197 478 q 18 719 18 557 q 136 958 18 869 q 399 1040 244 1040 q 670 956 561 1040 q 791 713 791 864 l 591 713 q 526 826 583 786 q 393 866 469 866 q 277 838 326 866 q 218 742 218 804 q 374 617 218 655 q 667 542 646 552 q 826 306 826 471 "},"\xa6":{"x_min":0,"x_max":143,"ha":240,"o":"m 143 462 l 0 462 l 0 984 l 143 984 l 143 462 m 143 -242 l 0 -242 l 0 280 l 143 280 l 143 -242 "},"/":{"x_min":196.109375,"x_max":632.5625,"ha":828,"o":"m 632 1040 l 289 -128 l 196 -128 l 538 1040 l 632 1040 "},"\u03a4":{"x_min":-0.609375,"x_max":808,"ha":878,"o":"m 808 831 l 508 831 l 508 0 l 298 0 l 298 831 l 0 831 l 0 1013 l 808 1013 l 808 831 "},"y":{"x_min":0,"x_max":738.890625,"ha":828,"o":"m 738 749 l 444 -107 q 361 -238 413 -199 q 213 -277 308 -277 q 156 -275 176 -277 q 120 -271 131 -271 l 120 -110 q 147 -113 134 -111 q 179 -116 161 -116 q 247 -91 226 -116 q 269 -17 269 -67 q 206 173 269 -4 q 84 515 162 301 q 0 749 41 632 l 218 749 l 376 207 l 529 749 l 738 749 "},"\u03a0":{"x_min":0,"x_max":809,"ha":922,"o":"m 809 0 l 598 0 l 598 836 l 208 836 l 208 0 l 0 0 l 0 1012 l 809 1012 l 809 0 "},"\u0390":{"x_min":-162,"x_max":364,"ha":364,"o":"m 364 810 l 235 810 l 235 952 l 364 952 l 364 810 m 301 1064 l 86 810 l -12 810 l 123 1064 l 301 1064 m -33 810 l -162 810 l -162 952 l -33 952 l -33 810 m 200 0 l 0 0 l 0 748 l 200 748 l 200 0 "},"g":{"x_min":0,"x_max":724,"ha":839,"o":"m 724 48 q 637 -223 724 -142 q 357 -304 551 -304 q 140 -253 226 -304 q 23 -72 36 -192 l 243 -72 q 290 -127 255 -110 q 368 -144 324 -144 q 504 -82 470 -144 q 530 71 530 -38 l 530 105 q 441 25 496 51 q 319 0 386 0 q 79 115 166 0 q 0 377 0 219 q 77 647 0 534 q 317 775 166 775 q 534 656 456 775 l 534 748 l 724 748 l 724 48 m 368 167 q 492 237 447 167 q 530 382 530 297 q 490 529 530 466 q 364 603 444 603 q 240 532 284 603 q 201 386 201 471 q 240 239 201 300 q 368 167 286 167 "},"\xb2":{"x_min":0,"x_max":463,"ha":560,"o":"m 463 791 q 365 627 463 706 q 151 483 258 555 l 455 483 l 455 382 l 0 382 q 84 565 0 488 q 244 672 97 576 q 331 784 331 727 q 299 850 331 824 q 228 876 268 876 q 159 848 187 876 q 132 762 132 820 l 10 762 q 78 924 10 866 q 228 976 137 976 q 392 925 322 976 q 463 791 463 874 "},"\u2013":{"x_min":0,"x_max":704.171875,"ha":801,"o":"m 704 297 l 0 297 l 0 450 l 704 450 l 704 297 "},"\u039a":{"x_min":0,"x_max":899.671875,"ha":969,"o":"m 899 0 l 646 0 l 316 462 l 208 355 l 208 0 l 0 0 l 0 1013 l 208 1013 l 208 596 l 603 1013 l 863 1013 l 460 603 l 899 0 "},"\u0192":{"x_min":-46,"x_max":440,"ha":525,"o":"m 440 609 l 316 609 l 149 -277 l -46 -277 l 121 609 l 14 609 l 14 749 l 121 749 q 159 949 121 894 q 344 1019 208 1019 l 440 1015 l 440 855 l 377 855 q 326 841 338 855 q 314 797 314 827 q 314 773 314 786 q 314 749 314 761 l 440 749 l 440 609 "},"e":{"x_min":0,"x_max":708,"ha":808,"o":"m 708 321 l 207 321 q 254 186 207 236 q 362 141 298 141 q 501 227 453 141 l 700 227 q 566 36 662 104 q 362 -26 477 -26 q 112 72 213 -26 q 0 369 0 182 q 95 683 0 573 q 358 793 191 793 q 619 677 531 793 q 708 321 708 561 m 501 453 q 460 571 501 531 q 353 612 420 612 q 247 570 287 612 q 207 453 207 529 l 501 453 "},"\u03cc":{"x_min":0,"x_max":764,"ha":863,"o":"m 380 -25 q 105 87 211 -25 q 0 372 0 200 q 104 660 0 545 q 380 775 209 775 q 658 659 552 775 q 764 372 764 544 q 658 87 764 200 q 380 -25 552 -25 m 379 142 q 515 216 466 142 q 557 373 557 280 q 515 530 557 465 q 379 607 466 607 q 245 530 294 607 q 204 373 204 465 q 245 218 204 283 q 379 142 294 142 m 593 1039 l 391 823 l 293 823 l 415 1039 l 593 1039 "},"J":{"x_min":0,"x_max":649,"ha":760,"o":"m 649 294 q 573 48 649 125 q 327 -29 497 -29 q 61 82 136 -29 q 0 375 0 173 l 200 375 l 199 309 q 219 194 199 230 q 321 145 249 145 q 418 193 390 145 q 441 307 441 232 l 441 1013 l 649 1013 l 649 294 "},"\xbb":{"x_min":-0.234375,"x_max":526,"ha":624,"o":"m 526 286 l 297 87 l 296 250 l 437 373 l 297 495 l 297 660 l 526 461 l 526 286 m 229 286 l 0 87 l 0 250 l 140 373 l 0 495 l 0 660 l 229 461 l 229 286 "},"\xa9":{"x_min":3,"x_max":1007,"ha":1104,"o":"m 507 -6 q 129 153 269 -6 q 3 506 3 298 q 127 857 3 713 q 502 1017 266 1017 q 880 855 740 1017 q 1007 502 1007 711 q 882 152 1007 295 q 507 -6 743 -6 m 502 934 q 184 800 302 934 q 79 505 79 680 q 184 210 79 331 q 501 76 302 76 q 819 210 701 76 q 925 507 925 331 q 820 800 925 682 q 502 934 704 934 m 758 410 q 676 255 748 313 q 506 197 605 197 q 298 291 374 197 q 229 499 229 377 q 297 713 229 624 q 494 811 372 811 q 666 760 593 811 q 752 616 739 710 l 621 616 q 587 688 621 658 q 509 719 554 719 q 404 658 441 719 q 368 511 368 598 q 403 362 368 427 q 498 298 438 298 q 624 410 606 298 l 758 410 "},"\u03ce":{"x_min":0,"x_max":945,"ha":1051,"o":"m 566 528 l 372 528 l 372 323 q 372 298 372 311 q 373 271 372 285 q 360 183 373 211 q 292 142 342 142 q 219 222 243 142 q 203 365 203 279 q 241 565 203 461 q 334 748 273 650 l 130 748 q 36 552 68 650 q 0 337 0 444 q 69 96 0 204 q 276 -29 149 -29 q 390 0 337 -29 q 470 78 444 28 q 551 0 495 30 q 668 -29 608 -29 q 874 96 793 -29 q 945 337 945 205 q 910 547 945 444 q 814 748 876 650 l 610 748 q 703 565 671 650 q 742 365 742 462 q 718 189 742 237 q 651 142 694 142 q 577 190 597 142 q 565 289 565 221 l 565 323 l 566 528 m 718 1039 l 516 823 l 417 823 l 540 1039 l 718 1039 "},"^":{"x_min":197.21875,"x_max":630.5625,"ha":828,"o":"m 630 836 l 536 836 l 413 987 l 294 836 l 197 836 l 331 1090 l 493 1090 l 630 836 "},"\xab":{"x_min":0,"x_max":526.546875,"ha":624,"o":"m 526 87 l 297 286 l 297 461 l 526 660 l 526 495 l 385 373 l 526 250 l 526 87 m 229 87 l 0 286 l 0 461 l 229 660 l 229 495 l 88 373 l 229 250 l 229 87 "},"D":{"x_min":0,"x_max":864,"ha":968,"o":"m 400 1013 q 736 874 608 1013 q 864 523 864 735 q 717 146 864 293 q 340 0 570 0 l 0 0 l 0 1013 l 400 1013 m 398 837 l 206 837 l 206 182 l 372 182 q 584 276 507 182 q 657 504 657 365 q 594 727 657 632 q 398 837 522 837 "},"\u2219":{"x_min":0,"x_max":207,"ha":304,"o":"m 207 528 l 0 528 l 0 735 l 207 735 l 207 528 "},"\xff":{"x_min":0,"x_max":47,"ha":125,"o":"m 47 3 q 37 -7 47 -7 q 28 0 30 -7 q 39 -4 32 -4 q 45 3 45 -1 l 37 0 q 28 9 28 0 q 39 19 28 19 l 47 16 l 47 19 l 47 3 m 37 1 q 44 8 44 1 q 37 16 44 16 q 30 8 30 16 q 37 1 30 1 m 26 1 l 23 22 l 14 0 l 3 22 l 3 3 l 0 25 l 13 1 l 22 25 l 26 1 "},"w":{"x_min":0,"x_max":1056.953125,"ha":1150,"o":"m 1056 749 l 848 0 l 647 0 l 527 536 l 412 0 l 211 0 l 0 749 l 202 749 l 325 226 l 429 748 l 633 748 l 740 229 l 864 749 l 1056 749 "},"$":{"x_min":0,"x_max":704,"ha":800,"o":"m 682 693 l 495 693 q 468 782 491 749 q 391 831 441 824 l 391 579 q 633 462 562 534 q 704 259 704 389 q 616 57 704 136 q 391 -22 528 -22 l 391 -156 l 308 -156 l 308 -22 q 76 69 152 -7 q 0 300 0 147 l 183 300 q 215 191 190 230 q 308 128 245 143 l 308 414 q 84 505 157 432 q 12 700 12 578 q 89 902 12 824 q 308 981 166 981 l 308 1069 l 391 1069 l 391 981 q 595 905 521 981 q 682 693 670 829 m 308 599 l 308 831 q 228 796 256 831 q 200 712 200 762 q 225 642 200 668 q 308 599 251 617 m 391 128 q 476 174 449 140 q 504 258 504 207 q 391 388 504 354 l 391 128 "},"\\\\":{"x_min":-0.03125,"x_max":434.765625,"ha":532,"o":"m 434 -128 l 341 -128 l 0 1039 l 91 1040 l 434 -128 "},"\xb5":{"x_min":0,"x_max":647,"ha":754,"o":"m 647 0 l 478 0 l 478 68 q 412 9 448 30 q 330 -11 375 -11 q 261 3 296 -11 q 199 43 226 18 l 199 -277 l 0 -277 l 0 749 l 199 749 l 199 358 q 216 221 199 267 q 322 151 244 151 q 435 240 410 151 q 448 401 448 283 l 448 749 l 647 749 l 647 0 "},"\u0399":{"x_min":42,"x_max":250,"ha":413,"o":"m 250 0 l 42 0 l 42 1013 l 250 1013 l 250 0 "},"\u038e":{"x_min":0,"x_max":1211.15625,"ha":1289,"o":"m 1211 1012 l 907 376 l 907 0 l 697 0 l 697 376 l 374 1012 l 583 1012 l 802 576 l 1001 1012 l 1211 1012 m 313 1035 l 98 780 l 0 780 l 136 1035 l 313 1035 "},"\u2019":{"x_min":0,"x_max":192,"ha":289,"o":"m 192 834 q 137 692 192 751 q 0 626 83 634 l 0 697 q 101 831 101 723 l 0 831 l 0 1013 l 192 1013 l 192 834 "},"\u039d":{"x_min":0,"x_max":833,"ha":946,"o":"m 833 0 l 617 0 l 206 696 l 206 0 l 0 0 l 0 1013 l 216 1013 l 629 315 l 629 1013 l 833 1013 l 833 0 "},"-":{"x_min":27.78125,"x_max":413.890625,"ha":525,"o":"m 413 279 l 27 279 l 27 468 l 413 468 l 413 279 "},"Q":{"x_min":0,"x_max":995.59375,"ha":1096,"o":"m 995 49 l 885 -70 l 762 42 q 641 -12 709 4 q 497 -29 572 -29 q 135 123 271 -29 q 0 504 0 276 q 131 881 0 731 q 497 1040 270 1040 q 859 883 719 1040 q 994 506 994 731 q 966 321 994 413 q 884 152 938 229 l 995 49 m 730 299 q 767 395 755 344 q 779 504 779 446 q 713 743 779 644 q 505 857 638 857 q 284 745 366 857 q 210 501 210 644 q 279 265 210 361 q 492 157 357 157 q 615 181 557 157 l 508 287 l 620 405 l 730 299 "},"\u03c2":{"x_min":0,"x_max":731.78125,"ha":768,"o":"m 731 448 l 547 448 q 485 571 531 533 q 369 610 440 610 q 245 537 292 610 q 204 394 204 473 q 322 186 204 238 q 540 133 430 159 q 659 -15 659 98 q 643 -141 659 -80 q 595 -278 627 -202 l 423 -278 q 458 -186 448 -215 q 474 -88 474 -133 q 352 0 474 -27 q 123 80 181 38 q 0 382 0 170 q 98 660 0 549 q 367 777 202 777 q 622 683 513 777 q 731 448 731 589 "},"M":{"x_min":0,"x_max":1019,"ha":1135,"o":"m 1019 0 l 823 0 l 823 819 l 618 0 l 402 0 l 194 818 l 194 0 l 0 0 l 0 1013 l 309 1012 l 510 241 l 707 1013 l 1019 1013 l 1019 0 "},"\u03a8":{"x_min":0,"x_max":995,"ha":1085,"o":"m 995 698 q 924 340 995 437 q 590 200 841 227 l 590 0 l 404 0 l 404 200 q 70 340 152 227 q 0 698 0 437 l 0 1013 l 188 1013 l 188 694 q 212 472 188 525 q 404 383 254 383 l 404 1013 l 590 1013 l 590 383 q 781 472 740 383 q 807 694 807 525 l 807 1013 l 995 1013 l 995 698 "},"C":{"x_min":0,"x_max":970.828125,"ha":1043,"o":"m 970 345 q 802 70 933 169 q 490 -29 672 -29 q 130 130 268 -29 q 0 506 0 281 q 134 885 0 737 q 502 1040 275 1040 q 802 939 668 1040 q 965 679 936 838 l 745 679 q 649 809 716 761 q 495 857 582 857 q 283 747 361 857 q 214 508 214 648 q 282 267 214 367 q 493 154 359 154 q 651 204 584 154 q 752 345 718 255 l 970 345 "},"!":{"x_min":0,"x_max":204,"ha":307,"o":"m 204 739 q 182 515 204 686 q 152 282 167 398 l 52 282 q 13 589 27 473 q 0 739 0 704 l 0 1013 l 204 1013 l 204 739 m 204 0 l 0 0 l 0 203 l 204 203 l 204 0 "},"{":{"x_min":0,"x_max":501.390625,"ha":599,"o":"m 501 -285 q 229 -209 301 -285 q 176 -35 176 -155 q 182 47 176 -8 q 189 126 189 103 q 156 245 189 209 q 0 294 112 294 l 0 438 q 154 485 111 438 q 189 603 189 522 q 186 666 189 636 q 176 783 176 772 q 231 945 176 894 q 501 1015 306 1015 l 501 872 q 370 833 408 872 q 340 737 340 801 q 342 677 340 705 q 353 569 353 579 q 326 451 353 496 q 207 366 291 393 q 327 289 294 346 q 353 164 353 246 q 348 79 353 132 q 344 17 344 26 q 372 -95 344 -58 q 501 -141 408 -141 l 501 -285 "},"X":{"x_min":0,"x_max":894.453125,"ha":999,"o":"m 894 0 l 654 0 l 445 351 l 238 0 l 0 0 l 316 516 l 0 1013 l 238 1013 l 445 659 l 652 1013 l 894 1013 l 577 519 l 894 0 "},"#":{"x_min":0,"x_max":1019.453125,"ha":1117,"o":"m 1019 722 l 969 582 l 776 581 l 717 417 l 919 417 l 868 279 l 668 278 l 566 -6 l 413 -5 l 516 279 l 348 279 l 247 -6 l 94 -6 l 196 278 l 0 279 l 49 417 l 245 417 l 304 581 l 98 582 l 150 722 l 354 721 l 455 1006 l 606 1006 l 507 721 l 673 722 l 776 1006 l 927 1006 l 826 721 l 1019 722 m 627 581 l 454 581 l 394 417 l 567 417 l 627 581 "},"\u03b9":{"x_min":42,"x_max":242,"ha":389,"o":"m 242 0 l 42 0 l 42 749 l 242 749 l 242 0 "},"\u0386":{"x_min":0,"x_max":995.828125,"ha":1072,"o":"m 313 1035 l 98 780 l 0 780 l 136 1035 l 313 1035 m 995 0 l 776 0 l 708 208 l 315 208 l 247 0 l 29 0 l 390 1012 l 629 1012 l 995 0 m 652 376 l 509 809 l 369 376 l 652 376 "},")":{"x_min":0,"x_max":389,"ha":486,"o":"m 389 357 q 319 14 389 187 q 145 -293 259 -134 l 0 -293 q 139 22 90 -142 q 189 358 189 187 q 139 689 189 525 q 0 1013 90 853 l 145 1013 q 319 703 258 857 q 389 357 389 528 "},"\u03b5":{"x_min":16.671875,"x_max":652.78125,"ha":742,"o":"m 652 259 q 565 49 652 123 q 340 -25 479 -25 q 102 39 188 -25 q 16 197 16 104 q 45 299 16 249 q 134 390 75 348 q 58 456 86 419 q 25 552 25 502 q 120 717 25 653 q 322 776 208 776 q 537 710 456 776 q 625 508 625 639 l 445 508 q 415 585 445 563 q 327 608 386 608 q 254 590 293 608 q 215 544 215 573 q 252 469 215 490 q 336 453 280 453 q 369 455 347 453 q 400 456 391 456 l 400 308 l 329 308 q 247 291 280 308 q 204 223 204 269 q 255 154 204 172 q 345 143 286 143 q 426 174 398 143 q 454 259 454 206 l 652 259 "},"\u0394":{"x_min":0,"x_max":981.953125,"ha":1057,"o":"m 981 0 l 0 0 l 386 1013 l 594 1013 l 981 0 m 715 175 l 490 765 l 266 175 l 715 175 "},"}":{"x_min":0,"x_max":500,"ha":597,"o":"m 500 294 q 348 246 390 294 q 315 128 315 209 q 320 42 315 101 q 326 -48 326 -17 q 270 -214 326 -161 q 0 -285 196 -285 l 0 -141 q 126 -97 90 -141 q 154 8 154 -64 q 150 91 154 37 q 146 157 146 145 q 172 281 146 235 q 294 366 206 339 q 173 451 208 390 q 146 576 146 500 q 150 655 146 603 q 154 731 154 708 q 126 831 154 799 q 0 872 90 872 l 0 1015 q 270 944 196 1015 q 326 777 326 891 q 322 707 326 747 q 313 593 313 612 q 347 482 313 518 q 500 438 390 438 l 500 294 "},"\u2030":{"x_min":0,"x_max":1681,"ha":1775,"o":"m 861 484 q 1048 404 979 484 q 1111 228 1111 332 q 1048 51 1111 123 q 859 -29 979 -29 q 672 50 740 -29 q 610 227 610 122 q 672 403 610 331 q 861 484 741 484 m 861 120 q 939 151 911 120 q 967 226 967 183 q 942 299 967 270 q 861 333 912 333 q 783 301 811 333 q 756 226 756 269 q 783 151 756 182 q 861 120 810 120 m 904 984 l 316 -28 l 205 -29 l 793 983 l 904 984 m 250 984 q 436 904 366 984 q 499 730 499 832 q 436 552 499 626 q 248 472 366 472 q 62 552 132 472 q 0 728 0 624 q 62 903 0 831 q 250 984 132 984 m 249 835 q 169 801 198 835 q 140 725 140 768 q 167 652 140 683 q 247 621 195 621 q 327 654 298 621 q 357 730 357 687 q 329 803 357 772 q 249 835 301 835 m 1430 484 q 1618 404 1548 484 q 1681 228 1681 332 q 1618 51 1681 123 q 1429 -29 1548 -29 q 1241 50 1309 -29 q 1179 227 1179 122 q 1241 403 1179 331 q 1430 484 1311 484 m 1431 120 q 1509 151 1481 120 q 1537 226 1537 183 q 1511 299 1537 270 q 1431 333 1482 333 q 1352 301 1380 333 q 1325 226 1325 269 q 1352 151 1325 182 q 1431 120 1379 120 "},"a":{"x_min":0,"x_max":700,"ha":786,"o":"m 700 0 l 488 0 q 465 93 469 45 q 365 5 427 37 q 233 -26 303 -26 q 65 37 130 -26 q 0 205 0 101 q 120 409 0 355 q 343 452 168 431 q 465 522 465 468 q 424 588 465 565 q 337 611 384 611 q 250 581 285 611 q 215 503 215 552 l 26 503 q 113 707 26 633 q 328 775 194 775 q 538 723 444 775 q 657 554 657 659 l 657 137 q 666 73 657 101 q 700 33 675 45 l 700 0 m 465 297 l 465 367 q 299 322 358 340 q 193 217 193 287 q 223 150 193 174 q 298 127 254 127 q 417 175 370 127 q 465 297 465 224 "},"\u2014":{"x_min":0,"x_max":941.671875,"ha":1039,"o":"m 941 297 l 0 297 l 0 450 l 941 450 l 941 297 "},"=":{"x_min":29.171875,"x_max":798.609375,"ha":828,"o":"m 798 502 l 29 502 l 29 635 l 798 635 l 798 502 m 798 204 l 29 204 l 29 339 l 798 339 l 798 204 "},"N":{"x_min":0,"x_max":833,"ha":949,"o":"m 833 0 l 617 0 l 206 695 l 206 0 l 0 0 l 0 1013 l 216 1013 l 629 315 l 629 1013 l 833 1013 l 833 0 "},"\u03c1":{"x_min":0,"x_max":722,"ha":810,"o":"m 364 -17 q 271 0 313 -17 q 194 48 230 16 l 194 -278 l 0 -278 l 0 370 q 87 656 0 548 q 358 775 183 775 q 626 655 524 775 q 722 372 722 541 q 621 95 722 208 q 364 -17 520 -17 m 360 607 q 237 529 280 607 q 201 377 201 463 q 234 229 201 292 q 355 147 277 147 q 467 210 419 147 q 515 374 515 273 q 471 537 515 468 q 360 607 428 607 "},"\xaf":{"x_min":0,"x_max":775,"ha":771,"o":"m 775 958 l 0 958 l 0 1111 l 775 1111 l 775 958 "},"Z":{"x_min":0,"x_max":804.171875,"ha":906,"o":"m 804 836 l 251 182 l 793 182 l 793 0 l 0 0 l 0 176 l 551 830 l 11 830 l 11 1013 l 804 1013 l 804 836 "},"u":{"x_min":0,"x_max":668,"ha":782,"o":"m 668 0 l 474 0 l 474 89 q 363 9 425 37 q 233 -19 301 -19 q 61 53 123 -19 q 0 239 0 126 l 0 749 l 199 749 l 199 296 q 225 193 199 233 q 316 146 257 146 q 424 193 380 146 q 469 304 469 240 l 469 749 l 668 749 l 668 0 "},"k":{"x_min":0,"x_max":688.890625,"ha":771,"o":"m 688 0 l 450 0 l 270 316 l 196 237 l 196 0 l 0 0 l 0 1013 l 196 1013 l 196 483 l 433 748 l 675 748 l 413 469 l 688 0 "},"\u0397":{"x_min":0,"x_max":837,"ha":950,"o":"m 837 0 l 627 0 l 627 450 l 210 450 l 210 0 l 0 0 l 0 1013 l 210 1013 l 210 635 l 627 635 l 627 1013 l 837 1013 l 837 0 "},"\u0391":{"x_min":0,"x_max":966.671875,"ha":1043,"o":"m 966 0 l 747 0 l 679 208 l 286 208 l 218 0 l 0 0 l 361 1013 l 600 1013 l 966 0 m 623 376 l 480 809 l 340 376 l 623 376 "},"s":{"x_min":0,"x_max":681,"ha":775,"o":"m 681 229 q 568 33 681 105 q 340 -29 471 -29 q 107 39 202 -29 q 0 245 0 114 l 201 245 q 252 155 201 189 q 358 128 295 128 q 436 144 401 128 q 482 205 482 166 q 363 284 482 255 q 143 348 181 329 q 25 533 25 408 q 129 716 25 647 q 340 778 220 778 q 554 710 465 778 q 658 522 643 643 l 463 522 q 419 596 458 570 q 327 622 380 622 q 255 606 290 622 q 221 556 221 590 q 339 473 221 506 q 561 404 528 420 q 681 229 681 344 "},"B":{"x_min":0,"x_max":835,"ha":938,"o":"m 674 547 q 791 450 747 518 q 835 304 835 383 q 718 75 835 158 q 461 0 612 0 l 0 0 l 0 1013 l 477 1013 q 697 951 609 1013 q 797 754 797 880 q 765 630 797 686 q 674 547 734 575 m 438 621 q 538 646 495 621 q 590 730 590 676 q 537 814 590 785 q 436 838 494 838 l 199 838 l 199 621 l 438 621 m 445 182 q 561 211 513 182 q 618 311 618 247 q 565 410 618 375 q 444 446 512 446 l 199 446 l 199 182 l 445 182 "},"\u2026":{"x_min":0,"x_max":819,"ha":963,"o":"m 206 0 l 0 0 l 0 207 l 206 207 l 206 0 m 512 0 l 306 0 l 306 207 l 512 207 l 512 0 m 819 0 l 613 0 l 613 207 l 819 207 l 819 0 "},"?":{"x_min":1,"x_max":687,"ha":785,"o":"m 687 734 q 621 563 687 634 q 501 454 560 508 q 436 293 436 386 l 251 293 l 251 391 q 363 557 251 462 q 476 724 476 653 q 432 827 476 788 q 332 866 389 866 q 238 827 275 866 q 195 699 195 781 l 1 699 q 110 955 1 861 q 352 1040 210 1040 q 582 963 489 1040 q 687 734 687 878 m 446 0 l 243 0 l 243 203 l 446 203 l 446 0 "},"H":{"x_min":0,"x_max":838,"ha":953,"o":"m 838 0 l 628 0 l 628 450 l 210 450 l 210 0 l 0 0 l 0 1013 l 210 1013 l 210 635 l 628 635 l 628 1013 l 838 1013 l 838 0 "},"\u03bd":{"x_min":0,"x_max":740.28125,"ha":828,"o":"m 740 749 l 473 0 l 266 0 l 0 749 l 222 749 l 373 211 l 529 749 l 740 749 "},"c":{"x_min":0,"x_max":751.390625,"ha":828,"o":"m 751 282 q 625 58 725 142 q 384 -26 526 -26 q 107 84 215 -26 q 0 366 0 195 q 98 651 0 536 q 370 774 204 774 q 616 700 518 774 q 751 486 715 626 l 536 486 q 477 570 516 538 q 380 607 434 607 q 248 533 298 607 q 204 378 204 466 q 242 219 204 285 q 377 139 290 139 q 483 179 438 139 q 543 282 527 220 l 751 282 "},"\xb6":{"x_min":0,"x_max":566.671875,"ha":678,"o":"m 21 892 l 52 892 l 98 761 l 145 892 l 176 892 l 178 741 l 157 741 l 157 867 l 108 741 l 88 741 l 40 871 l 40 741 l 21 741 l 21 892 m 308 854 l 308 731 q 252 691 308 691 q 227 691 240 691 q 207 696 213 695 l 207 712 l 253 706 q 288 733 288 706 l 288 763 q 244 741 279 741 q 193 797 193 741 q 261 860 193 860 q 287 860 273 860 q 308 854 302 855 m 288 842 l 263 843 q 213 796 213 843 q 248 756 213 756 q 288 796 288 756 l 288 842 m 566 988 l 502 988 l 502 -1 l 439 -1 l 439 988 l 317 988 l 317 -1 l 252 -1 l 252 602 q 81 653 155 602 q 0 805 0 711 q 101 989 0 918 q 309 1053 194 1053 l 566 1053 l 566 988 "},"\u03b2":{"x_min":0,"x_max":703,"ha":789,"o":"m 510 539 q 651 429 600 501 q 703 262 703 357 q 617 53 703 136 q 404 -29 532 -29 q 199 51 279 -29 l 199 -278 l 0 -278 l 0 627 q 77 911 0 812 q 343 1021 163 1021 q 551 957 464 1021 q 649 769 649 886 q 613 638 649 697 q 510 539 577 579 m 344 136 q 452 181 408 136 q 497 291 497 227 q 435 409 497 369 q 299 444 381 444 l 299 600 q 407 634 363 600 q 452 731 452 669 q 417 820 452 784 q 329 857 382 857 q 217 775 246 857 q 199 622 199 725 l 199 393 q 221 226 199 284 q 344 136 254 136 "},"\u039c":{"x_min":0,"x_max":1019,"ha":1132,"o":"m 1019 0 l 823 0 l 823 818 l 617 0 l 402 0 l 194 818 l 194 0 l 0 0 l 0 1013 l 309 1013 l 509 241 l 708 1013 l 1019 1013 l 1019 0 "},"\u038c":{"x_min":0.15625,"x_max":1174,"ha":1271,"o":"m 676 -29 q 312 127 451 -29 q 179 505 179 277 q 311 883 179 733 q 676 1040 449 1040 q 1040 883 901 1040 q 1174 505 1174 733 q 1041 127 1174 277 q 676 -29 903 -29 m 676 154 q 890 266 811 154 q 961 506 961 366 q 891 745 961 648 q 676 857 812 857 q 462 747 541 857 q 392 506 392 648 q 461 266 392 365 q 676 154 540 154 m 314 1034 l 98 779 l 0 779 l 136 1034 l 314 1034 "},"\u0389":{"x_min":0,"x_max":1248,"ha":1361,"o":"m 1248 0 l 1038 0 l 1038 450 l 621 450 l 621 0 l 411 0 l 411 1012 l 621 1012 l 621 635 l 1038 635 l 1038 1012 l 1248 1012 l 1248 0 m 313 1035 l 98 780 l 0 780 l 136 1035 l 313 1035 "},"\u2022":{"x_min":-27.78125,"x_max":691.671875,"ha":775,"o":"m 691 508 q 588 252 691 358 q 331 147 486 147 q 77 251 183 147 q -27 508 -27 355 q 75 761 -27 655 q 331 868 179 868 q 585 763 479 868 q 691 508 691 658 "},"\xa5":{"x_min":0,"x_max":836,"ha":931,"o":"m 195 625 l 0 1013 l 208 1013 l 427 576 l 626 1013 l 836 1013 l 650 625 l 777 625 l 777 472 l 578 472 l 538 389 l 777 389 l 777 236 l 532 236 l 532 0 l 322 0 l 322 236 l 79 236 l 79 389 l 315 389 l 273 472 l 79 472 l 79 625 l 195 625 "},"(":{"x_min":0,"x_max":388.890625,"ha":486,"o":"m 388 -293 l 243 -293 q 70 14 130 -134 q 0 357 0 189 q 69 703 0 526 q 243 1013 129 856 l 388 1013 q 248 695 297 860 q 200 358 200 530 q 248 24 200 187 q 388 -293 297 -138 "},"U":{"x_min":0,"x_max":813,"ha":926,"o":"m 813 362 q 697 79 813 187 q 405 -29 582 -29 q 114 78 229 -29 q 0 362 0 186 l 0 1013 l 210 1013 l 210 387 q 260 226 210 291 q 408 154 315 154 q 554 226 500 154 q 603 387 603 291 l 603 1013 l 813 1013 l 813 362 "},"\u03b3":{"x_min":0.0625,"x_max":729.234375,"ha":815,"o":"m 729 749 l 457 37 l 457 -278 l 257 -278 l 257 37 q 218 155 243 95 q 170 275 194 215 l 0 749 l 207 749 l 363 284 l 522 749 l 729 749 "},"\u03b1":{"x_min":-1,"x_max":722,"ha":835,"o":"m 722 0 l 531 0 l 530 101 q 433 8 491 41 q 304 -25 375 -25 q 72 104 157 -25 q -1 372 -1 216 q 72 643 -1 530 q 308 775 158 775 q 433 744 375 775 q 528 656 491 713 l 528 749 l 722 749 l 722 0 m 361 601 q 233 527 277 601 q 196 375 196 464 q 232 224 196 288 q 358 144 277 144 q 487 217 441 144 q 528 370 528 281 q 489 523 528 457 q 361 601 443 601 "},"F":{"x_min":0,"x_max":706.953125,"ha":778,"o":"m 706 837 l 206 837 l 206 606 l 645 606 l 645 431 l 206 431 l 206 0 l 0 0 l 0 1013 l 706 1013 l 706 837 "},"\xad":{"x_min":0,"x_max":704.171875,"ha":801,"o":"m 704 297 l 0 297 l 0 450 l 704 450 l 704 297 "},":":{"x_min":0,"x_max":207,"ha":304,"o":"m 207 528 l 0 528 l 0 735 l 207 735 l 207 528 m 207 0 l 0 0 l 0 207 l 207 207 l 207 0 "},"\u03a7":{"x_min":0,"x_max":894.453125,"ha":978,"o":"m 894 0 l 654 0 l 445 351 l 238 0 l 0 0 l 316 516 l 0 1013 l 238 1013 l 445 660 l 652 1013 l 894 1013 l 577 519 l 894 0 "},"*":{"x_min":115,"x_max":713,"ha":828,"o":"m 713 740 l 518 688 l 651 525 l 531 438 l 412 612 l 290 439 l 173 523 l 308 688 l 115 741 l 159 880 l 342 816 l 343 1013 l 482 1013 l 481 816 l 664 880 l 713 740 "},"\u2020":{"x_min":0,"x_max":809,"ha":894,"o":"m 509 804 l 809 804 l 809 621 l 509 621 l 509 0 l 299 0 l 299 621 l 0 621 l 0 804 l 299 804 l 299 1011 l 509 1011 l 509 804 "},"\xb0":{"x_min":-1,"x_max":363,"ha":460,"o":"m 181 808 q 46 862 94 808 q -1 992 -1 917 q 44 1118 -1 1066 q 181 1175 96 1175 q 317 1118 265 1175 q 363 991 363 1066 q 315 862 363 917 q 181 808 267 808 m 181 908 q 240 933 218 908 q 263 992 263 958 q 242 1051 263 1027 q 181 1075 221 1075 q 120 1050 142 1075 q 99 991 99 1026 q 120 933 99 958 q 181 908 142 908 "},"V":{"x_min":0,"x_max":895.828125,"ha":997,"o":"m 895 1013 l 550 0 l 347 0 l 0 1013 l 231 1013 l 447 256 l 666 1013 l 895 1013 "},"\u039e":{"x_min":0,"x_max":751.390625,"ha":800,"o":"m 733 826 l 5 826 l 5 1012 l 733 1012 l 733 826 m 681 432 l 65 432 l 65 617 l 681 617 l 681 432 m 751 0 l 0 0 l 0 183 l 751 183 l 751 0 "},"\xa0":{"x_min":0,"x_max":0,"ha":853},"\u03ab":{"x_min":-0.21875,"x_max":836.171875,"ha":914,"o":"m 610 1046 l 454 1046 l 454 1215 l 610 1215 l 610 1046 m 369 1046 l 212 1046 l 212 1215 l 369 1215 l 369 1046 m 836 1012 l 532 376 l 532 0 l 322 0 l 322 376 l 0 1012 l 208 1012 l 427 576 l 626 1012 l 836 1012 "},"\u201d":{"x_min":0,"x_max":469,"ha":567,"o":"m 192 834 q 137 692 192 751 q 0 626 83 634 l 0 697 q 101 831 101 723 l 0 831 l 0 1013 l 192 1013 l 192 834 m 469 834 q 414 692 469 751 q 277 626 360 634 l 277 697 q 379 831 379 723 l 277 831 l 277 1013 l 469 1013 l 469 834 "},"@":{"x_min":0,"x_max":1276,"ha":1374,"o":"m 1115 -52 q 895 -170 1015 -130 q 647 -211 776 -211 q 158 -34 334 -211 q 0 360 0 123 q 179 810 0 621 q 698 1019 377 1019 q 1138 859 981 1019 q 1276 514 1276 720 q 1173 210 1276 335 q 884 75 1062 75 q 784 90 810 75 q 737 186 749 112 q 647 104 698 133 q 532 75 596 75 q 360 144 420 75 q 308 308 308 205 q 398 568 308 451 q 638 696 497 696 q 731 671 690 696 q 805 604 772 647 l 840 673 l 964 673 q 886 373 915 490 q 856 239 856 257 q 876 201 856 214 q 920 188 895 188 q 1084 284 1019 188 q 1150 511 1150 380 q 1051 779 1150 672 q 715 905 934 905 q 272 734 439 905 q 121 363 121 580 q 250 41 121 170 q 647 -103 394 -103 q 863 -67 751 -103 q 1061 26 975 -32 l 1115 -52 m 769 483 q 770 500 770 489 q 733 567 770 539 q 651 596 695 596 q 508 504 566 596 q 457 322 457 422 q 483 215 457 256 q 561 175 509 175 q 671 221 625 175 q 733 333 718 268 l 769 483 "},"\u038a":{"x_min":0,"x_max":619,"ha":732,"o":"m 313 1035 l 98 780 l 0 780 l 136 1035 l 313 1035 m 619 0 l 411 0 l 411 1012 l 619 1012 l 619 0 "},"i":{"x_min":14,"x_max":214,"ha":326,"o":"m 214 830 l 14 830 l 14 1013 l 214 1013 l 214 830 m 214 0 l 14 0 l 14 748 l 214 748 l 214 0 "},"\u0392":{"x_min":0,"x_max":835,"ha":961,"o":"m 675 547 q 791 450 747 518 q 835 304 835 383 q 718 75 835 158 q 461 0 612 0 l 0 0 l 0 1013 l 477 1013 q 697 951 609 1013 q 797 754 797 880 q 766 630 797 686 q 675 547 734 575 m 439 621 q 539 646 496 621 q 590 730 590 676 q 537 814 590 785 q 436 838 494 838 l 199 838 l 199 621 l 439 621 m 445 182 q 561 211 513 182 q 618 311 618 247 q 565 410 618 375 q 444 446 512 446 l 199 446 l 199 182 l 445 182 "},"\u03c5":{"x_min":0,"x_max":656,"ha":767,"o":"m 656 416 q 568 55 656 145 q 326 -25 490 -25 q 59 97 137 -25 q 0 369 0 191 l 0 749 l 200 749 l 200 369 q 216 222 200 268 q 326 142 245 142 q 440 247 411 142 q 456 422 456 304 l 456 749 l 656 749 l 656 416 "},"]":{"x_min":0,"x_max":349,"ha":446,"o":"m 349 -300 l 0 -300 l 0 -154 l 163 -154 l 163 866 l 0 866 l 0 1013 l 349 1013 l 349 -300 "},"m":{"x_min":0,"x_max":1065,"ha":1174,"o":"m 1065 0 l 866 0 l 866 483 q 836 564 866 532 q 759 596 807 596 q 663 555 700 596 q 627 454 627 514 l 627 0 l 433 0 l 433 481 q 403 563 433 531 q 323 596 374 596 q 231 554 265 596 q 197 453 197 513 l 197 0 l 0 0 l 0 748 l 189 748 l 189 665 q 279 745 226 715 q 392 775 333 775 q 509 744 455 775 q 606 659 563 713 q 695 744 640 713 q 814 775 749 775 q 992 702 920 775 q 1065 523 1065 630 l 1065 0 "},"\u03c7":{"x_min":0,"x_max":759.71875,"ha":847,"o":"m 759 -299 l 548 -299 l 379 66 l 215 -299 l 0 -299 l 261 233 l 13 749 l 230 749 l 379 400 l 527 749 l 738 749 l 500 238 l 759 -299 "},"\u03af":{"x_min":42,"x_max":371.171875,"ha":389,"o":"m 242 0 l 42 0 l 42 748 l 242 748 l 242 0 m 371 1039 l 169 823 l 71 823 l 193 1039 l 371 1039 "},"\u0396":{"x_min":0,"x_max":804.171875,"ha":886,"o":"m 804 835 l 251 182 l 793 182 l 793 0 l 0 0 l 0 176 l 551 829 l 11 829 l 11 1012 l 804 1012 l 804 835 "},"R":{"x_min":0,"x_max":836.109375,"ha":947,"o":"m 836 0 l 608 0 q 588 53 596 20 q 581 144 581 86 q 581 179 581 162 q 581 215 581 197 q 553 345 581 306 q 428 393 518 393 l 208 393 l 208 0 l 0 0 l 0 1013 l 491 1013 q 720 944 630 1013 q 819 734 819 869 q 778 584 819 654 q 664 485 738 513 q 757 415 727 463 q 794 231 794 358 l 794 170 q 800 84 794 116 q 836 31 806 51 l 836 0 m 462 838 l 208 838 l 208 572 l 452 572 q 562 604 517 572 q 612 704 612 640 q 568 801 612 765 q 462 838 525 838 "},"o":{"x_min":0,"x_max":764,"ha":871,"o":"m 380 -26 q 105 86 211 -26 q 0 371 0 199 q 104 660 0 545 q 380 775 209 775 q 658 659 552 775 q 764 371 764 544 q 658 86 764 199 q 380 -26 552 -26 m 379 141 q 515 216 466 141 q 557 373 557 280 q 515 530 557 465 q 379 607 466 607 q 245 530 294 607 q 204 373 204 465 q 245 217 204 282 q 379 141 294 141 "},"K":{"x_min":0,"x_max":900,"ha":996,"o":"m 900 0 l 647 0 l 316 462 l 208 355 l 208 0 l 0 0 l 0 1013 l 208 1013 l 208 595 l 604 1013 l 863 1013 l 461 603 l 900 0 "},",":{"x_min":0,"x_max":206,"ha":303,"o":"m 206 5 q 150 -151 206 -88 q 0 -238 94 -213 l 0 -159 q 84 -100 56 -137 q 111 -2 111 -62 l 0 -2 l 0 205 l 206 205 l 206 5 "},"d":{"x_min":0,"x_max":722,"ha":836,"o":"m 722 0 l 530 0 l 530 101 q 303 -26 449 -26 q 72 103 155 -26 q 0 373 0 214 q 72 642 0 528 q 305 775 156 775 q 433 743 373 775 q 530 656 492 712 l 530 1013 l 722 1013 l 722 0 m 361 600 q 234 523 280 600 q 196 372 196 458 q 233 220 196 286 q 358 143 278 143 q 489 216 442 143 q 530 369 530 280 q 491 522 530 456 q 361 600 443 600 "},"\xa8":{"x_min":212,"x_max":609,"ha":933,"o":"m 609 1046 l 453 1046 l 453 1216 l 609 1216 l 609 1046 m 369 1046 l 212 1046 l 212 1216 l 369 1216 l 369 1046 "},"E":{"x_min":0,"x_max":761.109375,"ha":824,"o":"m 761 0 l 0 0 l 0 1013 l 734 1013 l 734 837 l 206 837 l 206 621 l 690 621 l 690 446 l 206 446 l 206 186 l 761 186 l 761 0 "},"Y":{"x_min":0,"x_max":836,"ha":931,"o":"m 836 1013 l 532 376 l 532 0 l 322 0 l 322 376 l 0 1013 l 208 1013 l 427 576 l 626 1013 l 836 1013 "},"\\"":{"x_min":0,"x_max":357,"ha":454,"o":"m 357 604 l 225 604 l 225 988 l 357 988 l 357 604 m 132 604 l 0 604 l 0 988 l 132 988 l 132 604 "},"\u2039":{"x_min":35.984375,"x_max":791.671875,"ha":828,"o":"m 791 17 l 36 352 l 35 487 l 791 823 l 791 672 l 229 421 l 791 168 l 791 17 "},"\u201e":{"x_min":0,"x_max":483,"ha":588,"o":"m 206 5 q 150 -151 206 -88 q 0 -238 94 -213 l 0 -159 q 84 -100 56 -137 q 111 -2 111 -62 l 0 -2 l 0 205 l 206 205 l 206 5 m 483 5 q 427 -151 483 -88 q 277 -238 371 -213 l 277 -159 q 361 -100 334 -137 q 388 -2 388 -62 l 277 -2 l 277 205 l 483 205 l 483 5 "},"\u03b4":{"x_min":6,"x_max":732,"ha":835,"o":"m 732 352 q 630 76 732 177 q 354 -25 529 -25 q 101 74 197 -25 q 6 333 6 174 q 89 581 6 480 q 323 690 178 690 q 66 864 201 787 l 66 1013 l 669 1013 l 669 856 l 348 856 q 532 729 461 789 q 673 566 625 651 q 732 352 732 465 m 419 551 q 259 496 321 551 q 198 344 198 441 q 238 208 198 267 q 357 140 283 140 q 484 203 437 140 q 526 344 526 260 q 499 466 526 410 q 419 551 473 521 "},"\u03ad":{"x_min":16.671875,"x_max":652.78125,"ha":742,"o":"m 652 259 q 565 49 652 123 q 340 -25 479 -25 q 102 39 188 -25 q 16 197 16 104 q 45 299 16 250 q 134 390 75 348 q 58 456 86 419 q 25 552 25 502 q 120 717 25 653 q 322 776 208 776 q 537 710 456 776 q 625 508 625 639 l 445 508 q 415 585 445 563 q 327 608 386 608 q 254 590 293 608 q 215 544 215 573 q 252 469 215 490 q 336 453 280 453 q 369 455 347 453 q 400 456 391 456 l 400 308 l 329 308 q 247 291 280 308 q 204 223 204 269 q 255 154 204 172 q 345 143 286 143 q 426 174 398 143 q 454 259 454 206 l 652 259 m 579 1039 l 377 823 l 279 823 l 401 1039 l 579 1039 "},"\u03c9":{"x_min":0,"x_max":945,"ha":1051,"o":"m 565 323 l 565 289 q 577 190 565 221 q 651 142 597 142 q 718 189 694 142 q 742 365 742 237 q 703 565 742 462 q 610 749 671 650 l 814 749 q 910 547 876 650 q 945 337 945 444 q 874 96 945 205 q 668 -29 793 -29 q 551 0 608 -29 q 470 78 495 30 q 390 0 444 28 q 276 -29 337 -29 q 69 96 149 -29 q 0 337 0 204 q 36 553 0 444 q 130 749 68 650 l 334 749 q 241 565 273 650 q 203 365 203 461 q 219 222 203 279 q 292 142 243 142 q 360 183 342 142 q 373 271 373 211 q 372 298 372 285 q 372 323 372 311 l 372 528 l 566 528 l 565 323 "},"\xb4":{"x_min":0,"x_max":132,"ha":299,"o":"m 132 604 l 0 604 l 0 988 l 132 988 l 132 604 "},"\xb1":{"x_min":29,"x_max":798,"ha":828,"o":"m 798 480 l 484 480 l 484 254 l 344 254 l 344 480 l 29 480 l 29 615 l 344 615 l 344 842 l 484 842 l 484 615 l 798 615 l 798 480 m 798 0 l 29 0 l 29 136 l 798 136 l 798 0 "},"|":{"x_min":0,"x_max":143,"ha":240,"o":"m 143 462 l 0 462 l 0 984 l 143 984 l 143 462 m 143 -242 l 0 -242 l 0 280 l 143 280 l 143 -242 "},"\u03cb":{"x_min":0,"x_max":656,"ha":767,"o":"m 535 810 l 406 810 l 406 952 l 535 952 l 535 810 m 271 810 l 142 810 l 142 952 l 271 952 l 271 810 m 656 417 q 568 55 656 146 q 326 -25 490 -25 q 59 97 137 -25 q 0 369 0 192 l 0 748 l 200 748 l 200 369 q 216 222 200 268 q 326 142 245 142 q 440 247 411 142 q 456 422 456 304 l 456 748 l 656 748 l 656 417 "},"\xa7":{"x_min":0,"x_max":633,"ha":731,"o":"m 633 469 q 601 356 633 406 q 512 274 569 305 q 570 197 548 242 q 593 105 593 152 q 501 -76 593 -5 q 301 -142 416 -142 q 122 -82 193 -142 q 43 108 43 -15 l 212 108 q 251 27 220 53 q 321 1 283 1 q 389 23 360 1 q 419 83 419 46 q 310 194 419 139 q 108 297 111 295 q 0 476 0 372 q 33 584 0 537 q 120 659 62 626 q 72 720 91 686 q 53 790 53 755 q 133 978 53 908 q 312 1042 207 1042 q 483 984 412 1042 q 574 807 562 921 l 409 807 q 379 875 409 851 q 307 900 349 900 q 244 881 270 900 q 218 829 218 862 q 324 731 218 781 q 524 636 506 647 q 633 469 633 565 m 419 334 q 473 411 473 372 q 451 459 473 436 q 390 502 430 481 l 209 595 q 167 557 182 577 q 153 520 153 537 q 187 461 153 491 q 263 413 212 440 l 419 334 "},"b":{"x_min":0,"x_max":722,"ha":822,"o":"m 416 -26 q 289 6 346 -26 q 192 101 232 39 l 192 0 l 0 0 l 0 1013 l 192 1013 l 192 656 q 286 743 226 712 q 415 775 346 775 q 649 644 564 775 q 722 374 722 533 q 649 106 722 218 q 416 -26 565 -26 m 361 600 q 232 524 279 600 q 192 371 192 459 q 229 221 192 284 q 357 145 275 145 q 487 221 441 145 q 526 374 526 285 q 488 523 526 460 q 361 600 442 600 "},"q":{"x_min":0,"x_max":722,"ha":833,"o":"m 722 -298 l 530 -298 l 530 97 q 306 -25 449 -25 q 73 104 159 -25 q 0 372 0 216 q 72 643 0 529 q 305 775 156 775 q 430 742 371 775 q 530 654 488 709 l 530 750 l 722 750 l 722 -298 m 360 601 q 234 527 278 601 q 197 378 197 466 q 233 225 197 291 q 357 144 277 144 q 488 217 441 144 q 530 370 530 282 q 491 523 530 459 q 360 601 443 601 "},"\u03a9":{"x_min":-0.03125,"x_max":1008.53125,"ha":1108,"o":"m 1008 0 l 589 0 l 589 199 q 717 368 670 265 q 764 580 764 471 q 698 778 764 706 q 504 855 629 855 q 311 773 380 855 q 243 563 243 691 q 289 360 243 458 q 419 199 336 262 l 419 0 l 0 0 l 0 176 l 202 176 q 77 355 123 251 q 32 569 32 459 q 165 908 32 776 q 505 1040 298 1040 q 844 912 711 1040 q 977 578 977 785 q 931 362 977 467 q 805 176 886 256 l 1008 176 l 1008 0 "},"\u03cd":{"x_min":0,"x_max":656,"ha":767,"o":"m 656 417 q 568 55 656 146 q 326 -25 490 -25 q 59 97 137 -25 q 0 369 0 192 l 0 748 l 200 748 l 201 369 q 218 222 201 269 q 326 142 245 142 q 440 247 411 142 q 456 422 456 304 l 456 748 l 656 748 l 656 417 m 579 1039 l 378 823 l 279 823 l 401 1039 l 579 1039 "},"z":{"x_min":0,"x_max":663.890625,"ha":753,"o":"m 663 0 l 0 0 l 0 154 l 411 591 l 25 591 l 25 749 l 650 749 l 650 584 l 245 165 l 663 165 l 663 0 "},"\u2122":{"x_min":0,"x_max":951,"ha":1063,"o":"m 405 921 l 255 921 l 255 506 l 149 506 l 149 921 l 0 921 l 0 1013 l 405 1013 l 405 921 m 951 506 l 852 506 l 852 916 l 750 506 l 643 506 l 539 915 l 539 506 l 442 506 l 442 1013 l 595 1012 l 695 625 l 794 1013 l 951 1013 l 951 506 "},"\u03ae":{"x_min":0,"x_max":669,"ha":779,"o":"m 669 -278 l 469 -278 l 469 390 q 448 526 469 473 q 348 606 417 606 q 244 553 288 606 q 201 441 201 501 l 201 0 l 0 0 l 0 749 l 201 749 l 201 665 q 301 744 244 715 q 423 774 359 774 q 606 685 538 774 q 669 484 669 603 l 669 -278 m 495 1039 l 293 823 l 195 823 l 317 1039 l 495 1039 "},"\u0398":{"x_min":0,"x_max":993,"ha":1092,"o":"m 497 -29 q 133 127 272 -29 q 0 505 0 277 q 133 883 0 733 q 497 1040 272 1040 q 861 883 722 1040 q 993 505 993 733 q 861 127 993 277 q 497 -29 722 -29 m 497 154 q 711 266 631 154 q 782 506 782 367 q 712 746 782 648 q 497 858 634 858 q 281 746 361 858 q 211 506 211 648 q 280 266 211 365 q 497 154 359 154 m 676 430 l 316 430 l 316 593 l 676 593 l 676 430 "},"\xae":{"x_min":3,"x_max":1007,"ha":1104,"o":"m 507 -6 q 129 153 269 -6 q 3 506 3 298 q 127 857 3 713 q 502 1017 266 1017 q 880 855 740 1017 q 1007 502 1007 711 q 882 152 1007 295 q 507 -6 743 -6 m 502 934 q 184 800 302 934 q 79 505 79 680 q 184 210 79 331 q 501 76 302 76 q 819 210 701 76 q 925 507 925 331 q 820 800 925 682 q 502 934 704 934 m 782 190 l 639 190 q 627 225 632 202 q 623 285 623 248 l 623 326 q 603 411 623 384 q 527 439 584 439 l 388 439 l 388 190 l 257 190 l 257 829 l 566 829 q 709 787 654 829 q 772 654 772 740 q 746 559 772 604 q 675 497 720 514 q 735 451 714 483 q 756 341 756 419 l 756 299 q 760 244 756 265 q 782 212 764 223 l 782 190 m 546 718 l 388 718 l 388 552 l 541 552 q 612 572 584 552 q 641 635 641 593 q 614 695 641 672 q 546 718 587 718 "},"~":{"x_min":0,"x_max":851,"ha":949,"o":"m 851 968 q 795 750 851 831 q 599 656 730 656 q 406 744 506 656 q 259 832 305 832 q 162 775 193 832 q 139 656 139 730 l 0 656 q 58 871 0 787 q 251 968 124 968 q 442 879 341 968 q 596 791 544 791 q 691 849 663 791 q 712 968 712 892 l 851 968 "},"\u0395":{"x_min":0,"x_max":761.546875,"ha":824,"o":"m 761 0 l 0 0 l 0 1012 l 735 1012 l 735 836 l 206 836 l 206 621 l 690 621 l 690 446 l 206 446 l 206 186 l 761 186 l 761 0 "},"\xb3":{"x_min":0,"x_max":467,"ha":564,"o":"m 467 555 q 393 413 467 466 q 229 365 325 365 q 70 413 134 365 q 0 565 0 467 l 123 565 q 163 484 131 512 q 229 461 190 461 q 299 486 269 461 q 329 553 329 512 q 281 627 329 607 q 187 641 248 641 l 187 722 q 268 737 237 722 q 312 804 312 758 q 285 859 312 837 q 224 882 259 882 q 165 858 189 882 q 135 783 140 834 l 12 783 q 86 930 20 878 q 230 976 145 976 q 379 931 314 976 q 444 813 444 887 q 423 744 444 773 q 365 695 402 716 q 439 640 412 676 q 467 555 467 605 "},"[":{"x_min":0,"x_max":347.21875,"ha":444,"o":"m 347 -300 l 0 -300 l 0 1013 l 347 1013 l 347 866 l 188 866 l 188 -154 l 347 -154 l 347 -300 "},"L":{"x_min":0,"x_max":704.171875,"ha":763,"o":"m 704 0 l 0 0 l 0 1013 l 208 1013 l 208 186 l 704 186 l 704 0 "},"\u03c3":{"x_min":0,"x_max":851.3125,"ha":940,"o":"m 851 594 l 712 594 q 761 369 761 485 q 658 83 761 191 q 379 -25 555 -25 q 104 87 208 -25 q 0 372 0 200 q 103 659 0 544 q 378 775 207 775 q 464 762 407 775 q 549 750 521 750 l 851 750 l 851 594 m 379 142 q 515 216 466 142 q 557 373 557 280 q 515 530 557 465 q 379 608 465 608 q 244 530 293 608 q 203 373 203 465 q 244 218 203 283 q 379 142 293 142 "},"\u03b6":{"x_min":0,"x_max":622,"ha":701,"o":"m 622 -32 q 604 -158 622 -98 q 551 -278 587 -218 l 373 -278 q 426 -180 406 -229 q 446 -80 446 -131 q 421 -22 446 -37 q 354 -8 397 -8 q 316 -9 341 -8 q 280 -11 291 -11 q 75 69 150 -11 q 0 283 0 150 q 87 596 0 437 q 291 856 162 730 l 47 856 l 47 1013 l 592 1013 l 592 904 q 317 660 422 800 q 197 318 197 497 q 306 141 197 169 q 510 123 408 131 q 622 -32 622 102 "},"\u03b8":{"x_min":0,"x_max":714,"ha":817,"o":"m 357 1022 q 633 833 534 1022 q 714 486 714 679 q 634 148 714 288 q 354 -25 536 -25 q 79 147 175 -25 q 0 481 0 288 q 79 831 0 679 q 357 1022 177 1022 m 510 590 q 475 763 510 687 q 351 862 430 862 q 233 763 272 862 q 204 590 204 689 l 510 590 m 510 440 l 204 440 q 233 251 204 337 q 355 131 274 131 q 478 248 434 131 q 510 440 510 337 "},"\u039f":{"x_min":0,"x_max":995,"ha":1092,"o":"m 497 -29 q 133 127 272 -29 q 0 505 0 277 q 132 883 0 733 q 497 1040 270 1040 q 861 883 722 1040 q 995 505 995 733 q 862 127 995 277 q 497 -29 724 -29 m 497 154 q 711 266 632 154 q 781 506 781 365 q 711 745 781 647 q 497 857 632 857 q 283 747 361 857 q 213 506 213 647 q 282 266 213 365 q 497 154 361 154 "},"\u0393":{"x_min":0,"x_max":703.84375,"ha":742,"o":"m 703 836 l 208 836 l 208 0 l 0 0 l 0 1012 l 703 1012 l 703 836 "}," ":{"x_min":0,"x_max":0,"ha":375},"%":{"x_min":0,"x_max":1111,"ha":1213,"o":"m 861 484 q 1048 404 979 484 q 1111 228 1111 332 q 1048 51 1111 123 q 859 -29 979 -29 q 672 50 740 -29 q 610 227 610 122 q 672 403 610 331 q 861 484 741 484 m 861 120 q 939 151 911 120 q 967 226 967 183 q 942 299 967 270 q 861 333 912 333 q 783 301 811 333 q 756 226 756 269 q 783 151 756 182 q 861 120 810 120 m 904 984 l 316 -28 l 205 -29 l 793 983 l 904 984 m 250 984 q 436 904 366 984 q 499 730 499 832 q 436 552 499 626 q 248 472 366 472 q 62 552 132 472 q 0 728 0 624 q 62 903 0 831 q 250 984 132 984 m 249 835 q 169 801 198 835 q 140 725 140 768 q 167 652 140 683 q 247 621 195 621 q 327 654 298 621 q 357 730 357 687 q 329 803 357 772 q 249 835 301 835 "},"P":{"x_min":0,"x_max":771,"ha":838,"o":"m 208 361 l 208 0 l 0 0 l 0 1013 l 450 1013 q 682 919 593 1013 q 771 682 771 826 q 687 452 771 544 q 466 361 604 361 l 208 361 m 421 837 l 208 837 l 208 544 l 410 544 q 525 579 480 544 q 571 683 571 615 q 527 792 571 747 q 421 837 484 837 "},"\u0388":{"x_min":0,"x_max":1172.546875,"ha":1235,"o":"m 1172 0 l 411 0 l 411 1012 l 1146 1012 l 1146 836 l 617 836 l 617 621 l 1101 621 l 1101 446 l 617 446 l 617 186 l 1172 186 l 1172 0 m 313 1035 l 98 780 l 0 780 l 136 1035 l 313 1035 "},"\u038f":{"x_min":0.4375,"x_max":1189.546875,"ha":1289,"o":"m 1189 0 l 770 0 l 770 199 q 897 369 849 263 q 945 580 945 474 q 879 778 945 706 q 685 855 810 855 q 492 773 561 855 q 424 563 424 691 q 470 360 424 458 q 600 199 517 262 l 600 0 l 180 0 l 180 176 l 383 176 q 258 355 304 251 q 213 569 213 459 q 346 908 213 776 q 686 1040 479 1040 q 1025 912 892 1040 q 1158 578 1158 785 q 1112 362 1158 467 q 986 176 1067 256 l 1189 176 l 1189 0 m 314 1092 l 99 837 l 0 837 l 136 1092 l 314 1092 "},"_":{"x_min":61.109375,"x_max":766.671875,"ha":828,"o":"m 766 -333 l 61 -333 l 61 -190 l 766 -190 l 766 -333 "},"\u03aa":{"x_min":-56,"x_max":342,"ha":503,"o":"m 342 1046 l 186 1046 l 186 1215 l 342 1215 l 342 1046 m 101 1046 l -56 1046 l -56 1215 l 101 1215 l 101 1046 m 249 0 l 41 0 l 41 1012 l 249 1012 l 249 0 "},"+":{"x_min":43,"x_max":784,"ha":828,"o":"m 784 353 l 483 353 l 483 0 l 343 0 l 343 353 l 43 353 l 43 489 l 343 489 l 343 840 l 483 840 l 483 489 l 784 489 l 784 353 "},"\xbd":{"x_min":0,"x_max":1090,"ha":1188,"o":"m 1090 380 q 992 230 1090 301 q 779 101 886 165 q 822 94 784 95 q 924 93 859 93 l 951 93 l 973 93 l 992 93 l 1009 93 q 1046 93 1027 93 q 1085 93 1066 93 l 1085 0 l 650 0 l 654 38 q 815 233 665 137 q 965 376 965 330 q 936 436 965 412 q 869 461 908 461 q 806 435 831 461 q 774 354 780 409 l 659 354 q 724 505 659 451 q 870 554 783 554 q 1024 506 958 554 q 1090 380 1090 459 m 868 998 l 268 -28 l 154 -27 l 757 999 l 868 998 m 272 422 l 147 422 l 147 799 l 0 799 l 0 875 q 126 900 91 875 q 170 973 162 926 l 272 973 l 272 422 "},"\u03a1":{"x_min":0,"x_max":771,"ha":838,"o":"m 208 361 l 208 0 l 0 0 l 0 1012 l 450 1012 q 682 919 593 1012 q 771 681 771 826 q 687 452 771 544 q 466 361 604 361 l 208 361 m 422 836 l 209 836 l 209 544 l 410 544 q 525 579 480 544 q 571 683 571 614 q 527 791 571 747 q 422 836 484 836 "},"\'":{"x_min":0,"x_max":192,"ha":289,"o":"m 192 834 q 137 692 192 751 q 0 626 82 632 l 0 697 q 101 830 101 726 l 0 830 l 0 1013 l 192 1013 l 192 834 "},"\xaa":{"x_min":0,"x_max":350,"ha":393,"o":"m 350 625 l 245 625 q 237 648 241 636 q 233 672 233 661 q 117 611 192 611 q 33 643 66 611 q 0 727 0 675 q 116 846 0 828 q 233 886 233 864 q 211 919 233 907 q 168 931 190 931 q 108 877 108 931 l 14 877 q 56 977 14 942 q 165 1013 98 1013 q 270 987 224 1013 q 329 903 329 955 l 329 694 q 332 661 329 675 q 350 641 336 648 l 350 625 m 233 774 l 233 809 q 151 786 180 796 q 97 733 97 768 q 111 700 97 712 q 149 689 126 689 q 210 713 187 689 q 233 774 233 737 "},"\u0385":{"x_min":57,"x_max":584,"ha":753,"o":"m 584 810 l 455 810 l 455 952 l 584 952 l 584 810 m 521 1064 l 305 810 l 207 810 l 343 1064 l 521 1064 m 186 810 l 57 810 l 57 952 l 186 952 l 186 810 "},"T":{"x_min":0,"x_max":809,"ha":894,"o":"m 809 831 l 509 831 l 509 0 l 299 0 l 299 831 l 0 831 l 0 1013 l 809 1013 l 809 831 "},"\u03a6":{"x_min":0,"x_max":949,"ha":1032,"o":"m 566 0 l 385 0 l 385 121 q 111 230 222 121 q 0 508 0 340 q 112 775 0 669 q 385 892 219 875 l 385 1013 l 566 1013 l 566 892 q 836 776 732 875 q 949 507 949 671 q 838 231 949 341 q 566 121 728 121 l 566 0 m 566 285 q 701 352 650 285 q 753 508 753 419 q 703 658 753 597 q 566 729 653 720 l 566 285 m 385 285 l 385 729 q 245 661 297 717 q 193 516 193 604 q 246 356 193 427 q 385 285 300 285 "},"j":{"x_min":-45.828125,"x_max":242,"ha":361,"o":"m 242 830 l 42 830 l 42 1013 l 242 1013 l 242 830 m 242 -119 q 180 -267 242 -221 q 20 -308 127 -308 l -45 -308 l -45 -140 l -24 -140 q 25 -130 8 -140 q 42 -88 42 -120 l 42 748 l 242 748 l 242 -119 "},"\u03a3":{"x_min":0,"x_max":772.21875,"ha":849,"o":"m 772 0 l 0 0 l 0 140 l 368 526 l 18 862 l 18 1012 l 740 1012 l 740 836 l 315 836 l 619 523 l 298 175 l 772 175 l 772 0 "},"\u203a":{"x_min":36.109375,"x_max":792,"ha":828,"o":"m 792 352 l 36 17 l 36 168 l 594 420 l 36 672 l 36 823 l 792 487 l 792 352 "},"<":{"x_min":35.984375,"x_max":791.671875,"ha":828,"o":"m 791 17 l 36 352 l 35 487 l 791 823 l 791 672 l 229 421 l 791 168 l 791 17 "},"\xa3":{"x_min":0,"x_max":716.546875,"ha":814,"o":"m 716 38 q 603 -9 658 5 q 502 -24 548 -24 q 398 -10 451 -24 q 239 25 266 25 q 161 12 200 25 q 77 -29 122 0 l 0 113 q 110 211 81 174 q 151 315 151 259 q 117 440 151 365 l 0 440 l 0 515 l 73 515 q 35 610 52 560 q 15 710 15 671 q 119 910 15 831 q 349 984 216 984 q 570 910 480 984 q 693 668 674 826 l 501 668 q 455 791 501 746 q 353 830 414 830 q 256 795 298 830 q 215 705 215 760 q 249 583 215 655 q 283 515 266 548 l 479 515 l 479 440 l 309 440 q 316 394 313 413 q 319 355 319 374 q 287 241 319 291 q 188 135 263 205 q 262 160 225 152 q 332 168 298 168 q 455 151 368 168 q 523 143 500 143 q 588 152 558 143 q 654 189 617 162 l 716 38 "},"t":{"x_min":0,"x_max":412,"ha":511,"o":"m 412 -6 q 349 -8 391 -6 q 287 -11 307 -11 q 137 38 177 -11 q 97 203 97 87 l 97 609 l 0 609 l 0 749 l 97 749 l 97 951 l 297 951 l 297 749 l 412 749 l 412 609 l 297 609 l 297 191 q 315 152 297 162 q 366 143 334 143 q 389 143 378 143 q 412 143 400 143 l 412 -6 "},"\xac":{"x_min":0,"x_max":704,"ha":801,"o":"m 704 93 l 551 93 l 551 297 l 0 297 l 0 450 l 704 450 l 704 93 "},"\u03bb":{"x_min":0,"x_max":701.390625,"ha":775,"o":"m 701 0 l 491 0 l 345 444 l 195 0 l 0 0 l 238 697 l 131 1013 l 334 1013 l 701 0 "},"W":{"x_min":0,"x_max":1291.671875,"ha":1399,"o":"m 1291 1013 l 1002 0 l 802 0 l 645 777 l 490 0 l 288 0 l 0 1013 l 215 1013 l 388 298 l 534 1012 l 757 1013 l 904 299 l 1076 1013 l 1291 1013 "},">":{"x_min":36.109375,"x_max":792,"ha":828,"o":"m 792 352 l 36 17 l 36 168 l 594 420 l 36 672 l 36 823 l 792 487 l 792 352 "},"v":{"x_min":0,"x_max":740.28125,"ha":828,"o":"m 740 749 l 473 0 l 266 0 l 0 749 l 222 749 l 373 211 l 529 749 l 740 749 "},"\u03c4":{"x_min":0.28125,"x_max":618.734375,"ha":699,"o":"m 618 593 l 409 593 l 409 0 l 210 0 l 210 593 l 0 593 l 0 749 l 618 749 l 618 593 "},"\u03be":{"x_min":0,"x_max":640,"ha":715,"o":"m 640 -14 q 619 -157 640 -84 q 563 -299 599 -230 l 399 -299 q 442 -194 433 -223 q 468 -85 468 -126 q 440 -25 468 -41 q 368 -10 412 -10 q 333 -11 355 -10 q 302 -13 311 -13 q 91 60 179 -13 q 0 259 0 138 q 56 426 0 354 q 201 530 109 493 q 106 594 144 553 q 65 699 65 642 q 94 787 65 747 q 169 856 123 828 l 22 856 l 22 1013 l 597 1013 l 597 856 l 497 857 q 345 840 398 857 q 257 736 257 812 q 366 614 257 642 q 552 602 416 602 l 552 446 l 513 446 q 313 425 379 446 q 199 284 199 389 q 312 162 199 184 q 524 136 418 148 q 640 -14 640 105 "},"&":{"x_min":-1,"x_max":910.109375,"ha":1007,"o":"m 910 -1 l 676 -1 l 607 83 q 291 -47 439 -47 q 50 100 135 -47 q -1 273 -1 190 q 51 431 -1 357 q 218 568 104 505 q 151 661 169 629 q 120 769 120 717 q 201 951 120 885 q 382 1013 276 1013 q 555 957 485 1013 q 635 789 635 894 q 584 644 635 709 q 468 539 548 597 l 615 359 q 664 527 654 440 l 844 527 q 725 223 824 359 l 910 -1 m 461 787 q 436 848 461 826 q 381 870 412 870 q 325 849 349 870 q 301 792 301 829 q 324 719 301 757 q 372 660 335 703 q 430 714 405 680 q 461 787 461 753 m 500 214 l 318 441 q 198 286 198 363 q 225 204 198 248 q 347 135 268 135 q 425 153 388 135 q 500 214 462 172 "},"\u039b":{"x_min":0,"x_max":894.453125,"ha":974,"o":"m 894 0 l 666 0 l 447 757 l 225 0 l 0 0 l 344 1013 l 547 1013 l 894 0 "},"I":{"x_min":41,"x_max":249,"ha":365,"o":"m 249 0 l 41 0 l 41 1013 l 249 1013 l 249 0 "},"G":{"x_min":0,"x_max":971,"ha":1057,"o":"m 971 -1 l 829 -1 l 805 118 q 479 -29 670 -29 q 126 133 261 -29 q 0 509 0 286 q 130 884 0 737 q 493 1040 268 1040 q 790 948 659 1040 q 961 698 920 857 l 736 698 q 643 813 709 769 q 500 857 578 857 q 285 746 364 857 q 213 504 213 644 q 285 263 213 361 q 505 154 365 154 q 667 217 598 154 q 761 374 736 280 l 548 374 l 548 548 l 971 548 l 971 -1 "},"\u03b0":{"x_min":0,"x_max":655,"ha":767,"o":"m 583 810 l 454 810 l 454 952 l 583 952 l 583 810 m 186 810 l 57 809 l 57 952 l 186 952 l 186 810 m 516 1039 l 315 823 l 216 823 l 338 1039 l 516 1039 m 655 417 q 567 55 655 146 q 326 -25 489 -25 q 59 97 137 -25 q 0 369 0 192 l 0 748 l 200 748 l 201 369 q 218 222 201 269 q 326 142 245 142 q 439 247 410 142 q 455 422 455 304 l 455 748 l 655 748 l 655 417 "},"`":{"x_min":0,"x_max":190,"ha":288,"o":"m 190 654 l 0 654 l 0 830 q 55 970 0 909 q 190 1040 110 1031 l 190 969 q 111 922 134 952 q 88 836 88 892 l 190 836 l 190 654 "},"\xb7":{"x_min":0,"x_max":207,"ha":304,"o":"m 207 528 l 0 528 l 0 735 l 207 735 l 207 528 "},"\u03a5":{"x_min":-0.21875,"x_max":836.171875,"ha":914,"o":"m 836 1013 l 532 376 l 532 0 l 322 0 l 322 376 l 0 1013 l 208 1013 l 427 576 l 626 1013 l 836 1013 "},"r":{"x_min":0,"x_max":431.9375,"ha":513,"o":"m 431 564 q 269 536 320 564 q 200 395 200 498 l 200 0 l 0 0 l 0 748 l 183 748 l 183 618 q 285 731 224 694 q 431 768 345 768 l 431 564 "},"x":{"x_min":0,"x_max":738.890625,"ha":826,"o":"m 738 0 l 504 0 l 366 238 l 230 0 l 0 0 l 252 382 l 11 749 l 238 749 l 372 522 l 502 749 l 725 749 l 488 384 l 738 0 "},"\u03bc":{"x_min":0,"x_max":647,"ha":754,"o":"m 647 0 l 477 0 l 477 68 q 411 9 448 30 q 330 -11 374 -11 q 261 3 295 -11 q 199 43 226 18 l 199 -278 l 0 -278 l 0 749 l 199 749 l 199 358 q 216 222 199 268 q 322 152 244 152 q 435 240 410 152 q 448 401 448 283 l 448 749 l 647 749 l 647 0 "},"h":{"x_min":0,"x_max":669,"ha":782,"o":"m 669 0 l 469 0 l 469 390 q 449 526 469 472 q 353 607 420 607 q 248 554 295 607 q 201 441 201 501 l 201 0 l 0 0 l 0 1013 l 201 1013 l 201 665 q 303 743 245 715 q 425 772 362 772 q 609 684 542 772 q 669 484 669 605 l 669 0 "},".":{"x_min":0,"x_max":206,"ha":303,"o":"m 206 0 l 0 0 l 0 207 l 206 207 l 206 0 "},"\u03c6":{"x_min":-1,"x_max":921,"ha":990,"o":"m 542 -278 l 367 -278 l 367 -22 q 99 92 200 -22 q -1 376 -1 206 q 72 627 -1 520 q 288 769 151 742 l 288 581 q 222 495 243 550 q 202 378 202 439 q 240 228 202 291 q 367 145 285 157 l 367 776 l 515 776 q 807 667 694 776 q 921 379 921 558 q 815 93 921 209 q 542 -22 709 -22 l 542 -278 m 542 145 q 672 225 625 145 q 713 381 713 291 q 671 536 713 470 q 542 611 624 611 l 542 145 "},";":{"x_min":0,"x_max":208,"ha":306,"o":"m 208 528 l 0 528 l 0 735 l 208 735 l 208 528 m 208 6 q 152 -151 208 -89 q 0 -238 96 -212 l 0 -158 q 87 -100 61 -136 q 113 0 113 -65 l 0 0 l 0 207 l 208 207 l 208 6 "},"f":{"x_min":0,"x_max":424,"ha":525,"o":"m 424 609 l 300 609 l 300 0 l 107 0 l 107 609 l 0 609 l 0 749 l 107 749 q 145 949 107 894 q 328 1019 193 1019 l 424 1015 l 424 855 l 362 855 q 312 841 324 855 q 300 797 300 827 q 300 773 300 786 q 300 749 300 761 l 424 749 l 424 609 "},"\u201c":{"x_min":0,"x_max":468,"ha":567,"o":"m 190 631 l 0 631 l 0 807 q 55 947 0 885 q 190 1017 110 1010 l 190 947 q 88 813 88 921 l 190 813 l 190 631 m 468 631 l 278 631 l 278 807 q 333 947 278 885 q 468 1017 388 1010 l 468 947 q 366 813 366 921 l 468 813 l 468 631 "},"A":{"x_min":0,"x_max":966.671875,"ha":1069,"o":"m 966 0 l 747 0 l 679 208 l 286 208 l 218 0 l 0 0 l 361 1013 l 600 1013 l 966 0 m 623 376 l 480 810 l 340 376 l 623 376 "},"\u2018":{"x_min":0,"x_max":190,"ha":289,"o":"m 190 631 l 0 631 l 0 807 q 55 947 0 885 q 190 1017 110 1010 l 190 947 q 88 813 88 921 l 190 813 l 190 631 "},"\u03ca":{"x_min":-55,"x_max":337,"ha":389,"o":"m 337 810 l 208 810 l 208 952 l 337 952 l 337 810 m 74 810 l -55 810 l -55 952 l 74 952 l 74 810 m 242 0 l 42 0 l 42 748 l 242 748 l 242 0 "},"\u03c0":{"x_min":0.5,"x_max":838.890625,"ha":938,"o":"m 838 593 l 750 593 l 750 0 l 549 0 l 549 593 l 287 593 l 287 0 l 88 0 l 88 593 l 0 593 l 0 749 l 838 749 l 838 593 "},"\u03ac":{"x_min":-1,"x_max":722,"ha":835,"o":"m 722 0 l 531 0 l 530 101 q 433 8 491 41 q 304 -25 375 -25 q 72 104 157 -25 q -1 372 -1 216 q 72 643 -1 530 q 308 775 158 775 q 433 744 375 775 q 528 656 491 713 l 528 749 l 722 749 l 722 0 m 361 601 q 233 527 277 601 q 196 375 196 464 q 232 224 196 288 q 358 144 277 144 q 487 217 441 144 q 528 370 528 281 q 489 523 528 457 q 361 601 443 601 m 579 1039 l 377 823 l 279 823 l 401 1039 l 579 1039 "},"O":{"x_min":0,"x_max":994,"ha":1094,"o":"m 497 -29 q 133 127 272 -29 q 0 505 0 277 q 131 883 0 733 q 497 1040 270 1040 q 860 883 721 1040 q 994 505 994 733 q 862 127 994 277 q 497 -29 723 -29 m 497 154 q 710 266 631 154 q 780 506 780 365 q 710 745 780 647 q 497 857 631 857 q 283 747 361 857 q 213 506 213 647 q 282 266 213 365 q 497 154 361 154 "},"n":{"x_min":0,"x_max":669,"ha":782,"o":"m 669 0 l 469 0 l 469 452 q 442 553 469 513 q 352 601 412 601 q 245 553 290 601 q 200 441 200 505 l 200 0 l 0 0 l 0 748 l 194 748 l 194 659 q 289 744 230 713 q 416 775 349 775 q 600 700 531 775 q 669 509 669 626 l 669 0 "},"l":{"x_min":41,"x_max":240,"ha":363,"o":"m 240 0 l 41 0 l 41 1013 l 240 1013 l 240 0 "},"\xa4":{"x_min":40.265625,"x_max":727.203125,"ha":825,"o":"m 727 792 l 594 659 q 620 552 620 609 q 598 459 620 504 l 725 331 l 620 224 l 491 352 q 382 331 443 331 q 273 352 322 331 l 144 224 l 40 330 l 167 459 q 147 552 147 501 q 172 658 147 608 l 40 794 l 147 898 l 283 759 q 383 776 330 776 q 482 759 434 776 l 620 898 l 727 792 m 383 644 q 308 617 334 644 q 283 551 283 590 q 309 489 283 517 q 381 462 335 462 q 456 488 430 462 q 482 554 482 515 q 455 616 482 588 q 383 644 429 644 "},"\u03ba":{"x_min":0,"x_max":691.84375,"ha":779,"o":"m 691 0 l 479 0 l 284 343 l 196 252 l 196 0 l 0 0 l 0 749 l 196 749 l 196 490 l 440 749 l 677 749 l 416 479 l 691 0 "},"p":{"x_min":0,"x_max":722,"ha":824,"o":"m 415 -26 q 287 4 346 -26 q 192 92 228 34 l 192 -298 l 0 -298 l 0 750 l 192 750 l 192 647 q 289 740 230 706 q 416 775 347 775 q 649 645 566 775 q 722 375 722 534 q 649 106 722 218 q 415 -26 564 -26 m 363 603 q 232 529 278 603 q 192 375 192 465 q 230 222 192 286 q 360 146 276 146 q 487 221 441 146 q 526 371 526 285 q 488 523 526 458 q 363 603 443 603 "},"\u2021":{"x_min":0,"x_max":809,"ha":894,"o":"m 299 621 l 0 621 l 0 804 l 299 804 l 299 1011 l 509 1011 l 509 804 l 809 804 l 809 621 l 509 621 l 509 387 l 809 387 l 809 205 l 509 205 l 509 0 l 299 0 l 299 205 l 0 205 l 0 387 l 299 387 l 299 621 "},"\u03c8":{"x_min":0,"x_max":875,"ha":979,"o":"m 522 142 q 657 274 620 163 q 671 352 671 316 l 671 748 l 875 748 l 875 402 q 806 134 875 240 q 525 -22 719 -1 l 525 -278 l 349 -278 l 349 -22 q 65 135 152 -1 q 0 402 0 238 l 0 748 l 204 748 l 204 352 q 231 240 204 295 q 353 142 272 159 l 353 922 l 524 922 l 522 142 "},"\u03b7":{"x_min":0,"x_max":669,"ha":779,"o":"m 669 -278 l 469 -278 l 469 390 q 448 526 469 473 q 348 606 417 606 q 244 553 288 606 q 201 441 201 501 l 201 0 l 0 0 l 0 749 l 201 749 l 201 665 q 301 744 244 715 q 423 774 359 774 q 606 685 538 774 q 669 484 669 603 l 669 -278 "}},"cssFontWeight":"bold","ascender":1216,"underlinePosition":-100,"cssFontStyle":"normal","boundingBox":{"yMin":-333,"xMin":-162,"yMax":1216,"xMax":1681},"resolution":1000,"original_font_information":{"postscript_name":"Helvetiker-Bold","version_string":"Version 1.00 2004 initial release","vendor_url":"http://www.magenta.gr","full_font_name":"Helvetiker Bold","font_family_name":"Helvetiker","copyright":"Copyright (c) Magenta ltd, 2004.","description":"","trademark":"","designer":"","designer_url":"","unique_font_identifier":"Magenta ltd:Helvetiker Bold:22-10-104","license_url":"http://www.ellak.gr/fonts/MgOpen/license.html","license_description":"Copyright (c) 2004 by MAGENTA Ltd. All Rights Reserved.\\r\\n\\r\\nPermission is hereby granted, free of charge, to any person obtaining a copy of the fonts accompanying this license (\\"Fonts\\") and associated documentation files (the \\"Font Software\\"), to reproduce and distribute the Font Software, including without limitation the rights to use, copy, merge, publish, distribute, and/or sell copies of the Font Software, and to permit persons to whom the Font Software is furnished to do so, subject to the following conditions: \\r\\n\\r\\nThe above copyright and this permission notice shall be included in all copies of one or more of the Font Software typefaces.\\r\\n\\r\\nThe Font Software may be modified, altered, or added to, and in particular the designs of glyphs or characters in the Fonts may be modified and additional glyphs or characters may be added to the Fonts, only if the fonts are renamed to names not containing the word \\"MgOpen\\", or if the modifications are accepted for inclusion in the Font Software itself by the each appointed Administrator.\\r\\n\\r\\nThis License becomes null and void to the extent applicable to Fonts or Font Software that has been modified and is distributed under the \\"MgOpen\\" name.\\r\\n\\r\\nThe Font Software may be sold as part of a larger software package but no copy of one or more of the Font Software typefaces may be sold by itself. \\r\\n\\r\\nTHE FONT SOFTWARE IS PROVIDED \\"AS IS\\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO ANY WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT OF COPYRIGHT, PATENT, TRADEMARK, OR OTHER RIGHT. IN NO EVENT SHALL MAGENTA OR PERSONS OR BODIES IN CHARGE OF ADMINISTRATION AND MAINTENANCE OF THE FONT SOFTWARE BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, INCLUDING ANY GENERAL, SPECIAL, INDIRECT, INCIDENTAL, OR CONSEQUENTIAL DAMAGES, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF THE USE OR INABILITY TO USE THE FONT SOFTWARE OR FROM OTHER DEALINGS IN THE FONT SOFTWARE.","manufacturer_name":"Magenta ltd","font_sub_family_name":"Bold"},"descender":-334,"familyName":"Helvetiker","lineHeight":1549,"underlineThickness":50}')
        }
    }
]);
