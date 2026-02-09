module.exports = {
  params: {
    designator: 'SW',
    side: 'F',
    from: { type: 'net', value: undefined },
    to: { type: 'net', value: undefined },
    center: { type: 'net', value: 'GND' },
  },
  body: p => {
    const fp = [];
    const flip = p.side === "B";
if (!flip && p.side !== "F") throw new Error('unsupported side: ' + p.side);

fp.push(`(footprint "hs-mx-choc-rev"`);
fp.push(`(at ${p.x} ${p.y} ${flipR(flip, p.r)})`);
fp.push(`(layer "${(flip ? "B.Cu" : "F.Cu")}")`);
fp.push(`(property "Reference" "${p.ref}" ${p.ref_hide} (at 0 0 ${flipR(flip, p.r) % 180}) (layer "${p.side}.SilkS") (effects (font (size 1 1) (thickness 0.15))${ p.side === "B" ? " (justify mirror)" : ""}))`);
fp.push(`(property "Value" "" hide (at 0 0 ${flipR(flip, p.r) % 180}) (layer "${p.side}.Fab") (effects (font (size 1 1) (thickness 0.15))${ p.side === "B" ? " (justify mirror)" : ""}))`);
fp.push(`(property "Datasheet" "" hide (at 0 0 ${flipR(flip, p.r) % 180}) (layer "${p.side}.Fab") (effects (font (size 1 1) (thickness 0.15))${ p.side === "B" ? " (justify mirror)" : ""}))`);
fp.push(`(property "Description" "" hide (at 0 0 ${flipR(flip, p.r) % 180}) (layer "${p.side}.Fab") (effects (font (size 1 1) (thickness 0.15))${ p.side === "B" ? " (justify mirror)" : ""}))`);

fp.push(`(descr "Footprint for Cherry MX style and Kailh Choc V1 style switches with Kailh hotswap sockets")`);
fp.push(`(attr through_hole)`);

// Unknown to kicad2ergogen
fp.push(`(embedded_fonts no)`);

// Pads
fp.push(`(pad "" thru_hole circle (at 0 ${flipN(flip, 5.95)} ${flipR(flip, p.r + 0)}) (size 3.3 3.3) (drill 3) (layers "*.Cu" "*.Mask") (remove_unused_layers no) )`);
fp.push(`(pad "1" smd roundrect (at -8.245 ${flipN(flip, 3.75)} ${flipR(flip, p.r + 180)}) (size 2.65 2.6) (layers "${(flip ? "F" : "B")}.Cu" "${(flip ? "F" : "B")}.Mask" "${(flip ? "F" : "B")}.Paste") (roundrect_rratio 0.1)  ${p.from})`);
fp.push(`(pad "1" smd roundrect (at -7.36 ${flipN(flip, -2.54)} ${flipR(flip, p.r + 180)}) (size 2.55 2.5) (layers "${(flip ? "F" : "B")}.Cu" "${(flip ? "F" : "B")}.Mask" "${(flip ? "F" : "B")}.Paste") (roundrect_rratio 0.1)  ${p.from})`);
fp.push(`(pad "1" smd rect (at -6.55 ${flipN(flip, 3.75)} ${flipR(flip, p.r + 180)}) (size 1.2 2.6) (layers "${(flip ? "F" : "B")}.Cu")  ${p.from})`);
fp.push(`(pad "1" smd roundrect (at -6.09 ${flipN(flip, -5.08)} ${flipR(flip, p.r + 0)}) (size 2.55 2.5) (layers "${(flip ? "B" : "F")}.Cu" "${(flip ? "B" : "F")}.Mask" "${(flip ? "B" : "F")}.Paste") (roundrect_rratio 0.1)  ${p.from})`);
fp.push(`(pad "1" smd rect (at -5.635 ${flipN(flip, -2.54)} ${flipR(flip, p.r + 0)}) (size 1.65 2.5) (layers "${(flip ? "F" : "B")}.Cu")  ${p.from})`);
fp.push(`(pad "1" thru_hole circle (at -5.5 ${flipN(flip, 0)} ${flipR(flip, p.r + 0)}) (size 2 2) (drill 1.7) (layers "*.Cu") (remove_unused_layers no)  ${p.from})`);
fp.push(`(pad "1" thru_hole circle (at -5.08 ${flipN(flip, 0)} ${flipR(flip, p.r + 0)}) (size 2.5 2.5) (drill 1.9) (layers "*.Cu") (remove_unused_layers no)  ${p.from})`);
fp.push(`(pad "1" thru_hole circle (at -5 ${flipN(flip, 3.75)} ${flipR(flip, p.r + 180)}) (size 3.3 3.3) (drill 3) (layers "*.Cu" "${(flip ? "F" : "B")}.Mask") (remove_unused_layers no)  ${p.from})`);
fp.push(`(pad "1" smd rect (at -4.34 ${flipN(flip, -5.08)} ${flipR(flip, p.r + 0)}) (size 1.65 2.5) (layers "${(flip ? "B" : "F")}.Cu")  ${p.from})`);
fp.push(`(pad "1" thru_hole circle (at -3.81 ${flipN(flip, -2.54)} ${flipR(flip, p.r + 180)}) (size 3.3 3.3) (drill 3) (property pad_prop_mechanical) (layers "*.Cu" "${(flip ? "F" : "B")}.Mask") (remove_unused_layers no)  ${p.from})`);
fp.push(`(pad "1" smd roundrect (at -3.245 ${flipN(flip, 5.95)} ${flipR(flip, p.r + 0)}) (size 2.65 2.6) (layers "${(flip ? "B" : "F")}.Cu" "${(flip ? "B" : "F")}.Mask" "${(flip ? "B" : "F")}.Paste") (roundrect_rratio 0.1)  ${p.from})`);
fp.push(`(pad "1" thru_hole circle (at -2.54 ${flipN(flip, -5.08)} ${flipR(flip, p.r + 0)}) (size 3.3 3.3) (drill 3) (property pad_prop_mechanical) (layers "*.Cu" "${(flip ? "B" : "F")}.Mask") (remove_unused_layers no)  ${p.from})`);
fp.push(`(pad "2" thru_hole circle (at 2.54 ${flipN(flip, -5.08)} ${flipR(flip, p.r + 180)}) (size 3.3 3.3) (drill 3) (property pad_prop_mechanical) (layers "*.Cu" "${(flip ? "F" : "B")}.Mask") (remove_unused_layers no)  ${p.to})`);
fp.push(`(pad "2" smd roundrect (at 3.245001 ${flipN(flip, 5.95)} ${flipR(flip, p.r + 180)}) (size 2.65 2.6) (layers "${(flip ? "F" : "B")}.Cu" "${(flip ? "F" : "B")}.Mask" "${(flip ? "F" : "B")}.Paste") (roundrect_rratio 0.1)  ${p.to})`);
fp.push(`(pad "2" thru_hole circle (at 3.81 ${flipN(flip, -2.54)} ${flipR(flip, p.r + 0)}) (size 3.3 3.3) (drill 3) (property pad_prop_mechanical) (layers "*.Cu" "${(flip ? "B" : "F")}.Mask") (remove_unused_layers no)  ${p.to})`);
fp.push(`(pad "2" smd rect (at 4.34 ${flipN(flip, -5.08)} ${flipR(flip, p.r + 180)}) (size 1.65 2.5) (layers "${(flip ? "F" : "B")}.Cu")  ${p.to})`);
fp.push(`(pad "2" thru_hole circle (at 5 ${flipN(flip, 3.75)} ${flipR(flip, p.r + 0)}) (size 3.3 3.3) (drill 3) (layers "*.Cu" "${(flip ? "B" : "F")}.Mask") (remove_unused_layers no)  ${p.to})`);
fp.push(`(pad "2" thru_hole circle (at 5.08 ${flipN(flip, 0)} ${flipR(flip, p.r + 0)}) (size 2.5 2.5) (drill 1.9) (layers "*.Cu") (remove_unused_layers no)  ${p.to})`);
fp.push(`(pad "2" thru_hole circle (at 5.5 ${flipN(flip, 0)} ${flipR(flip, p.r + 0)}) (size 2 2) (drill 1.7) (layers "*.Cu") (remove_unused_layers no)  ${p.to})`);
fp.push(`(pad "2" smd rect (at 5.635 ${flipN(flip, -2.54)} ${flipR(flip, p.r + 180)}) (size 1.65 2.5) (layers "${(flip ? "B" : "F")}.Cu")  ${p.to})`);
fp.push(`(pad "2" smd roundrect (at 6.09 ${flipN(flip, -5.08)} ${flipR(flip, p.r + 180)}) (size 2.55 2.5) (layers "${(flip ? "F" : "B")}.Cu" "${(flip ? "F" : "B")}.Mask" "${(flip ? "F" : "B")}.Paste") (roundrect_rratio 0.1)  ${p.to})`);
fp.push(`(pad "2" smd rect (at 6.55 ${flipN(flip, 3.75)} ${flipR(flip, p.r + 0)}) (size 1.2 2.6) (layers "${(flip ? "B" : "F")}.Cu")  ${p.to})`);
fp.push(`(pad "2" smd roundrect (at 7.36 ${flipN(flip, -2.54)} ${flipR(flip, p.r + 0)}) (size 2.55 2.5) (layers "${(flip ? "B" : "F")}.Cu" "${(flip ? "B" : "F")}.Mask" "${(flip ? "B" : "F")}.Paste") (roundrect_rratio 0.1)  ${p.to})`);
fp.push(`(pad "2" smd roundrect (at 8.245 ${flipN(flip, 3.75)} ${flipR(flip, p.r + 0)}) (size 2.65 2.6) (layers "${(flip ? "B" : "F")}.Cu" "${(flip ? "B" : "F")}.Mask" "${(flip ? "B" : "F")}.Paste") (roundrect_rratio 0.1)  ${p.to})`);
fp.push(`(pad "3" thru_hole circle (at 0 ${flipN(flip, 0)} ${flipR(flip, p.r + 180)}) (size 5.0625 5.0625) (drill 4.7625) (layers "*.Cu") (remove_unused_layers no)  ${p.center})`);

// Drawings on B.CrtYd
fp.push(`(fp_line (start -9.050004 ${flipN(flip, 2.910001)}) (end -7.250004 ${flipN(flip, 2.910001)}) (stroke (width 0.05) (type solid)) (layer "${(flip ? "F.CrtYd" : "B.CrtYd")}") )`);
fp.push(`(fp_line (start -9.050004 ${flipN(flip, 4.589999)}) (end -9.050004 ${flipN(flip, 2.910001)}) (stroke (width 0.05) (type solid)) (layer "${(flip ? "F.CrtYd" : "B.CrtYd")}") )`);
fp.push(`(fp_line (start -8.685177 ${flipN(flip, -3.75022)}) (end -8.685176 ${flipN(flip, -1.300222)}) (stroke (width 0.05) (type solid)) (layer "${(flip ? "F.CrtYd" : "B.CrtYd")}") )`);
fp.push(`(fp_line (start -8.685176 ${flipN(flip, -1.300222)}) (end -6.085175 ${flipN(flip, -1.300222)}) (stroke (width 0.05) (type solid)) (layer "${(flip ? "F.CrtYd" : "B.CrtYd")}") )`);
fp.push(`(fp_line (start -7.250004 ${flipN(flip, 2.275)}) (end -7.250004 ${flipN(flip, 2.910001)}) (stroke (width 0.05) (type default)) (layer "${(flip ? "F.CrtYd" : "B.CrtYd")}") )`);
fp.push(`(fp_line (start -7.250004 ${flipN(flip, 4.589999)}) (end -9.050004 ${flipN(flip, 4.589999)}) (stroke (width 0.05) (type solid)) (layer "${(flip ? "F.CrtYd" : "B.CrtYd")}") )`);
fp.push(`(fp_line (start -7.250003 ${flipN(flip, 5.325)}) (end -7.250004 ${flipN(flip, 4.589999)}) (stroke (width 0.05) (type solid)) (layer "${(flip ? "F.CrtYd" : "B.CrtYd")}") )`);
fp.push(`(fp_line (start -6.450003 ${flipN(flip, 1.475)}) (end -3.400003 ${flipN(flip, 1.475)}) (stroke (width 0.05) (type solid)) (layer "${(flip ? "F.CrtYd" : "B.CrtYd")}") )`);
fp.push(`(fp_line (start -6.085176 ${flipN(flip, -0.86022)}) (end -2.494322 ${flipN(flip, -0.86022)}) (stroke (width 0.05) (type solid)) (layer "${(flip ? "F.CrtYd" : "B.CrtYd")}") )`);
fp.push(`(fp_line (start -6.085175 ${flipN(flip, -3.75022)}) (end -8.685177 ${flipN(flip, -3.75022)}) (stroke (width 0.05) (type solid)) (layer "${(flip ? "F.CrtYd" : "B.CrtYd")}") )`);
fp.push(`(fp_line (start -6.085175 ${flipN(flip, -3.75022)}) (end -6.085176 ${flipN(flip, -4.75022)}) (stroke (width 0.05) (type solid)) (layer "${(flip ? "F.CrtYd" : "B.CrtYd")}") )`);
fp.push(`(fp_line (start -6.085175 ${flipN(flip, -1.300222)}) (end -6.085176 ${flipN(flip, -0.86022)}) (stroke (width 0.05) (type solid)) (layer "${(flip ? "F.CrtYd" : "B.CrtYd")}") )`);
fp.push(`(fp_line (start -4.085176 ${flipN(flip, -6.75022)}) (end 4.864825 ${flipN(flip, -6.750222)}) (stroke (width 0.05) (type solid)) (layer "${(flip ? "F.CrtYd" : "B.CrtYd")}") )`);
fp.push(`(fp_line (start -3.450003 ${flipN(flip, 6.125002)}) (end -6.450003 ${flipN(flip, 6.125)}) (stroke (width 0.05) (type solid)) (layer "${(flip ? "F.CrtYd" : "B.CrtYd")}") )`);
fp.push(`(fp_line (start -2.450003 ${flipN(flip, 7.475)}) (end -2.450003 ${flipN(flip, 7.125)}) (stroke (width 0.05) (type solid)) (layer "${(flip ? "F.CrtYd" : "B.CrtYd")}") )`);
fp.push(`(fp_line (start -2.450003 ${flipN(flip, 7.475)}) (end -1.650001 ${flipN(flip, 8.274999)}) (stroke (width 0.05) (type solid)) (layer "${(flip ? "F.CrtYd" : "B.CrtYd")}") )`);
fp.push(`(fp_line (start 1.499996 ${flipN(flip, 8.275002)}) (end -1.650001 ${flipN(flip, 8.274999)}) (stroke (width 0.05) (type solid)) (layer "${(flip ? "F.CrtYd" : "B.CrtYd")}") )`);
fp.push(`(fp_line (start 1.499999 ${flipN(flip, 3.625)}) (end -0.300003 ${flipN(flip, 3.625)}) (stroke (width 0.05) (type solid)) (layer "${(flip ? "F.CrtYd" : "B.CrtYd")}") )`);
fp.push(`(fp_line (start 1.499999 ${flipN(flip, 3.625)}) (end 2.299997 ${flipN(flip, 4.425)}) (stroke (width 0.05) (type solid)) (layer "${(flip ? "F.CrtYd" : "B.CrtYd")}") )`);
fp.push(`(fp_line (start 2.299996 ${flipN(flip, 7.475)}) (end 1.499996 ${flipN(flip, 8.275002)}) (stroke (width 0.05) (type solid)) (layer "${(flip ? "F.CrtYd" : "B.CrtYd")}") )`);
fp.push(`(fp_line (start 2.299996 ${flipN(flip, 7.475)}) (end 2.299996 ${flipN(flip, 6.790001)}) (stroke (width 0.05) (type solid)) (layer "${(flip ? "F.CrtYd" : "B.CrtYd")}") )`);
fp.push(`(fp_line (start 2.299997 ${flipN(flip, 5.11)}) (end 2.299997 ${flipN(flip, 4.425)}) (stroke (width 0.05) (type solid)) (layer "${(flip ? "F.CrtYd" : "B.CrtYd")}") )`);
fp.push(`(fp_line (start 4.099996 ${flipN(flip, 6.79)}) (end 2.299996 ${flipN(flip, 6.790001)}) (stroke (width 0.05) (type solid)) (layer "${(flip ? "F.CrtYd" : "B.CrtYd")}") )`);
fp.push(`(fp_line (start 4.099997 ${flipN(flip, 5.110002)}) (end 2.299997 ${flipN(flip, 5.11)}) (stroke (width 0.05) (type solid)) (layer "${(flip ? "F.CrtYd" : "B.CrtYd")}") )`);
fp.push(`(fp_line (start 4.099997 ${flipN(flip, 5.110002)}) (end 4.099996 ${flipN(flip, 6.79)}) (stroke (width 0.05) (type solid)) (layer "${(flip ? "F.CrtYd" : "B.CrtYd")}") )`);
fp.push(`(fp_line (start 4.864823 ${flipN(flip, -3.87022)}) (end 4.864823 ${flipN(flip, -2.700221)}) (stroke (width 0.05) (type solid)) (layer "${(flip ? "F.CrtYd" : "B.CrtYd")}") )`);
fp.push(`(fp_line (start 4.864823 ${flipN(flip, -3.87022)}) (end 7.414823 ${flipN(flip, -3.870219)}) (stroke (width 0.05) (type solid)) (layer "${(flip ? "F.CrtYd" : "B.CrtYd")}") )`);
fp.push(`(fp_line (start 4.864823 ${flipN(flip, -2.700221)}) (end -0.2 ${flipN(flip, -2.700218)}) (stroke (width 0.05) (type solid)) (layer "${(flip ? "F.CrtYd" : "B.CrtYd")}") )`);
fp.push(`(fp_line (start 4.864825 ${flipN(flip, -6.750222)}) (end 4.864824 ${flipN(flip, -6.32022)}) (stroke (width 0.05) (type solid)) (layer "${(flip ? "F.CrtYd" : "B.CrtYd")}") )`);
fp.push(`(fp_line (start 7.414823 ${flipN(flip, -6.320221)}) (end 4.864824 ${flipN(flip, -6.32022)}) (stroke (width 0.05) (type solid)) (layer "${(flip ? "F.CrtYd" : "B.CrtYd")}") )`);
fp.push(`(fp_line (start 7.414823 ${flipN(flip, -3.870219)}) (end 7.414823 ${flipN(flip, -6.320221)}) (stroke (width 0.05) (type solid)) (layer "${(flip ? "F.CrtYd" : "B.CrtYd")}") )`);
fp.push(`(fp_arc (start -7.250004 ${flipN(flip, 2.275)}) (mid -7.015689 ${flipN(flip, 1.709314)}) (end -6.450003 ${flipN(flip, 1.475)}) (stroke (width 0.05) (type solid)) (layer "${(flip ? "F.CrtYd" : "B.CrtYd")}") )`);
fp.push(`(fp_arc (start -6.450003 ${flipN(flip, 6.125)}) (mid -7.015689 ${flipN(flip, 5.890685)}) (end -7.250003 ${flipN(flip, 5.325)}) (stroke (width 0.05) (type solid)) (layer "${(flip ? "F.CrtYd" : "B.CrtYd")}") )`);
fp.push(`(fp_arc (start -6.085176 ${flipN(flip, -4.75022)}) (mid -5.499389 ${flipN(flip, -6.164431)}) (end -4.085176 ${flipN(flip, -6.75022)}) (stroke (width 0.05) (type solid)) (layer "${(flip ? "F.CrtYd" : "B.CrtYd")}") )`);
fp.push(`(fp_arc (start -3.450003 ${flipN(flip, 6.125002)}) (mid -2.742898 ${flipN(flip, 6.417895)}) (end -2.450003 ${flipN(flip, 7.125)}) (stroke (width 0.05) (type solid)) (layer "${(flip ? "F.CrtYd" : "B.CrtYd")}") )`);
fp.push(`(fp_arc (start -3.400003 ${flipN(flip, 1.475)}) (mid -2.826426 ${flipN(flip, 1.655848)}) (end -2.460309 ${flipN(flip, 2.13298)}) (stroke (width 0.05) (type solid)) (layer "${(flip ? "F.CrtYd" : "B.CrtYd")}") )`);
fp.push(`(fp_arc (start -2.494322 ${flipN(flip, -0.86022)}) (mid -1.670503 ${flipN(flip, -2.1834)}) (end -0.2 ${flipN(flip, -2.700218)}) (stroke (width 0.05) (type solid)) (layer "${(flip ? "F.CrtYd" : "B.CrtYd")}") )`);
fp.push(`(fp_arc (start -0.300002 ${flipN(flip, 3.624999)}) (mid -1.577275 ${flipN(flip, 3.167235)}) (end -2.455449 ${flipN(flip, 2.132929)}) (stroke (width 0.05) (type solid)) (layer "${(flip ? "F.CrtYd" : "B.CrtYd")}") )`);

// Drawings on F.CrtYd
fp.push(`(fp_line (start -7.414824 ${flipN(flip, -6.32022)}) (end -4.864824 ${flipN(flip, -6.32022)}) (stroke (width 0.05) (type solid)) (layer "${(flip ? "B.CrtYd" : "F.CrtYd")}") )`);
fp.push(`(fp_line (start -7.414824 ${flipN(flip, -3.87022)}) (end -7.414824 ${flipN(flip, -6.32022)}) (stroke (width 0.05) (type solid)) (layer "${(flip ? "B.CrtYd" : "F.CrtYd")}") )`);
fp.push(`(fp_line (start -4.864824 ${flipN(flip, -6.75022)}) (end -4.864824 ${flipN(flip, -6.32022)}) (stroke (width 0.05) (type solid)) (layer "${(flip ? "B.CrtYd" : "F.CrtYd")}") )`);
fp.push(`(fp_line (start -4.864824 ${flipN(flip, -3.87022)}) (end -7.414824 ${flipN(flip, -3.87022)}) (stroke (width 0.05) (type solid)) (layer "${(flip ? "B.CrtYd" : "F.CrtYd")}") )`);
fp.push(`(fp_line (start -4.864824 ${flipN(flip, -3.87022)}) (end -4.864824 ${flipN(flip, -2.70022)}) (stroke (width 0.05) (type solid)) (layer "${(flip ? "B.CrtYd" : "F.CrtYd")}") )`);
fp.push(`(fp_line (start -4.864824 ${flipN(flip, -2.70022)}) (end 0.2 ${flipN(flip, -2.70022)}) (stroke (width 0.05) (type solid)) (layer "${(flip ? "B.CrtYd" : "F.CrtYd")}") )`);
fp.push(`(fp_line (start -4.1 ${flipN(flip, 5.11)}) (end -4.1 ${flipN(flip, 6.79)}) (stroke (width 0.05) (type solid)) (layer "${(flip ? "B.CrtYd" : "F.CrtYd")}") )`);
fp.push(`(fp_line (start -4.1 ${flipN(flip, 5.11)}) (end -2.3 ${flipN(flip, 5.11)}) (stroke (width 0.05) (type solid)) (layer "${(flip ? "B.CrtYd" : "F.CrtYd")}") )`);
fp.push(`(fp_line (start -4.1 ${flipN(flip, 6.79)}) (end -2.3 ${flipN(flip, 6.79)}) (stroke (width 0.05) (type solid)) (layer "${(flip ? "B.CrtYd" : "F.CrtYd")}") )`);
fp.push(`(fp_line (start -2.3 ${flipN(flip, 5.11)}) (end -2.3 ${flipN(flip, 4.425)}) (stroke (width 0.05) (type solid)) (layer "${(flip ? "B.CrtYd" : "F.CrtYd")}") )`);
fp.push(`(fp_line (start -2.3 ${flipN(flip, 7.475)}) (end -2.3 ${flipN(flip, 6.79)}) (stroke (width 0.05) (type solid)) (layer "${(flip ? "B.CrtYd" : "F.CrtYd")}") )`);
fp.push(`(fp_line (start -2.3 ${flipN(flip, 7.475)}) (end -1.5 ${flipN(flip, 8.275)}) (stroke (width 0.05) (type solid)) (layer "${(flip ? "B.CrtYd" : "F.CrtYd")}") )`);
fp.push(`(fp_line (start -1.5 ${flipN(flip, 3.625)}) (end -2.3 ${flipN(flip, 4.425)}) (stroke (width 0.05) (type solid)) (layer "${(flip ? "B.CrtYd" : "F.CrtYd")}") )`);
fp.push(`(fp_line (start -1.5 ${flipN(flip, 3.625)}) (end 0.3 ${flipN(flip, 3.625)}) (stroke (width 0.05) (type solid)) (layer "${(flip ? "B.CrtYd" : "F.CrtYd")}") )`);
fp.push(`(fp_line (start -1.5 ${flipN(flip, 8.275)}) (end 1.65 ${flipN(flip, 8.275)}) (stroke (width 0.05) (type solid)) (layer "${(flip ? "B.CrtYd" : "F.CrtYd")}") )`);
fp.push(`(fp_line (start 2.45 ${flipN(flip, 7.475)}) (end 1.65 ${flipN(flip, 8.275)}) (stroke (width 0.05) (type solid)) (layer "${(flip ? "B.CrtYd" : "F.CrtYd")}") )`);
fp.push(`(fp_line (start 2.45 ${flipN(flip, 7.475)}) (end 2.45 ${flipN(flip, 7.125)}) (stroke (width 0.05) (type solid)) (layer "${(flip ? "B.CrtYd" : "F.CrtYd")}") )`);
fp.push(`(fp_line (start 3.45 ${flipN(flip, 6.125)}) (end 6.45 ${flipN(flip, 6.125)}) (stroke (width 0.05) (type solid)) (layer "${(flip ? "B.CrtYd" : "F.CrtYd")}") )`);
fp.push(`(fp_line (start 4.085176 ${flipN(flip, -6.75022)}) (end -4.864824 ${flipN(flip, -6.75022)}) (stroke (width 0.05) (type solid)) (layer "${(flip ? "B.CrtYd" : "F.CrtYd")}") )`);
fp.push(`(fp_line (start 6.085176 ${flipN(flip, -3.75022)}) (end 6.085176 ${flipN(flip, -4.75022)}) (stroke (width 0.05) (type solid)) (layer "${(flip ? "B.CrtYd" : "F.CrtYd")}") )`);
fp.push(`(fp_line (start 6.085176 ${flipN(flip, -3.75022)}) (end 8.685176 ${flipN(flip, -3.75022)}) (stroke (width 0.05) (type solid)) (layer "${(flip ? "B.CrtYd" : "F.CrtYd")}") )`);
fp.push(`(fp_line (start 6.085176 ${flipN(flip, -1.30022)}) (end 6.085176 ${flipN(flip, -0.86022)}) (stroke (width 0.05) (type solid)) (layer "${(flip ? "B.CrtYd" : "F.CrtYd")}") )`);
fp.push(`(fp_line (start 6.085176 ${flipN(flip, -0.86022)}) (end 2.494322 ${flipN(flip, -0.86022)}) (stroke (width 0.05) (type solid)) (layer "${(flip ? "B.CrtYd" : "F.CrtYd")}") )`);
fp.push(`(fp_line (start 6.45 ${flipN(flip, 1.475)}) (end 3.4 ${flipN(flip, 1.475)}) (stroke (width 0.05) (type solid)) (layer "${(flip ? "B.CrtYd" : "F.CrtYd")}") )`);
fp.push(`(fp_line (start 7.25 ${flipN(flip, 2.275001)}) (end 7.25 ${flipN(flip, 2.91)}) (stroke (width 0.05) (type default)) (layer "${(flip ? "B.CrtYd" : "F.CrtYd")}") )`);
fp.push(`(fp_line (start 7.25 ${flipN(flip, 4.59)}) (end 9.05 ${flipN(flip, 4.59)}) (stroke (width 0.05) (type solid)) (layer "${(flip ? "B.CrtYd" : "F.CrtYd")}") )`);
fp.push(`(fp_line (start 7.25 ${flipN(flip, 5.325)}) (end 7.25 ${flipN(flip, 4.59)}) (stroke (width 0.05) (type solid)) (layer "${(flip ? "B.CrtYd" : "F.CrtYd")}") )`);
fp.push(`(fp_line (start 8.685176 ${flipN(flip, -3.75022)}) (end 8.685176 ${flipN(flip, -1.30022)}) (stroke (width 0.05) (type solid)) (layer "${(flip ? "B.CrtYd" : "F.CrtYd")}") )`);
fp.push(`(fp_line (start 8.685176 ${flipN(flip, -1.30022)}) (end 6.085176 ${flipN(flip, -1.30022)}) (stroke (width 0.05) (type solid)) (layer "${(flip ? "B.CrtYd" : "F.CrtYd")}") )`);
fp.push(`(fp_line (start 9.05 ${flipN(flip, 2.91)}) (end 7.25 ${flipN(flip, 2.91)}) (stroke (width 0.05) (type solid)) (layer "${(flip ? "B.CrtYd" : "F.CrtYd")}") )`);
fp.push(`(fp_line (start 9.05 ${flipN(flip, 4.59)}) (end 9.05 ${flipN(flip, 2.91)}) (stroke (width 0.05) (type solid)) (layer "${(flip ? "B.CrtYd" : "F.CrtYd")}") )`);
fp.push(`(fp_arc (start 0.2 ${flipN(flip, -2.70022)}) (mid 1.670503 ${flipN(flip, -2.183399)}) (end 2.494322 ${flipN(flip, -0.86022)}) (stroke (width 0.05) (type solid)) (layer "${(flip ? "B.CrtYd" : "F.CrtYd")}") )`);
fp.push(`(fp_arc (start 2.45 ${flipN(flip, 7.125)}) (mid 2.742893 ${flipN(flip, 6.417893)}) (end 3.45 ${flipN(flip, 6.125)}) (stroke (width 0.05) (type solid)) (layer "${(flip ? "B.CrtYd" : "F.CrtYd")}") )`);
fp.push(`(fp_arc (start 2.455444 ${flipN(flip, 2.13293)}) (mid 1.577272 ${flipN(flip, 3.167235)}) (end 0.299999 ${flipN(flip, 3.624999)}) (stroke (width 0.05) (type solid)) (layer "${(flip ? "B.CrtYd" : "F.CrtYd")}") )`);
fp.push(`(fp_arc (start 2.460307 ${flipN(flip, 2.13298)}) (mid 2.826423 ${flipN(flip, 1.655848)}) (end 3.4 ${flipN(flip, 1.475)}) (stroke (width 0.05) (type solid)) (layer "${(flip ? "B.CrtYd" : "F.CrtYd")}") )`);
fp.push(`(fp_arc (start 4.085176 ${flipN(flip, -6.75022)}) (mid 5.49939 ${flipN(flip, -6.164434)}) (end 6.085176 ${flipN(flip, -4.75022)}) (stroke (width 0.05) (type solid)) (layer "${(flip ? "B.CrtYd" : "F.CrtYd")}") )`);
fp.push(`(fp_arc (start 6.45 ${flipN(flip, 1.475)}) (mid 7.015686 ${flipN(flip, 1.709315)}) (end 7.25 ${flipN(flip, 2.275001)}) (stroke (width 0.05) (type solid)) (layer "${(flip ? "B.CrtYd" : "F.CrtYd")}") )`);
fp.push(`(fp_arc (start 7.25 ${flipN(flip, 5.325)}) (mid 7.015685 ${flipN(flip, 5.890685)}) (end 6.45 ${flipN(flip, 6.125)}) (stroke (width 0.05) (type solid)) (layer "${(flip ? "B.CrtYd" : "F.CrtYd")}") )`);

// Drawings on B.Fab
fp.push(`(fp_line (start -7.246002 ${flipN(flip, 5.349999)}) (end -7.246 ${flipN(flip, 1.5)}) (stroke (width 0.05) (type solid)) (layer "${(flip ? "F.Fab" : "B.Fab")}") )`);
fp.push(`(fp_line (start -7.246 ${flipN(flip, 1.5)}) (end -3.396 ${flipN(flip, 1.5)}) (stroke (width 0.05) (type solid)) (layer "${(flip ? "F.Fab" : "B.Fab")}") )`);
fp.push(`(fp_line (start -6.085176 ${flipN(flip, -0.86022)}) (end -6.085176 ${flipN(flip, -4.75022)}) (stroke (width 0.05) (type solid)) (layer "${(flip ? "F.Fab" : "B.Fab")}") )`);
fp.push(`(fp_line (start -6.085176 ${flipN(flip, -0.86022)}) (end -2.494322 ${flipN(flip, -0.86022)}) (stroke (width 0.05) (type solid)) (layer "${(flip ? "F.Fab" : "B.Fab")}") )`);
fp.push(`(fp_line (start -4.085176 ${flipN(flip, -6.75022)}) (end 4.864825 ${flipN(flip, -6.750222)}) (stroke (width 0.05) (type solid)) (layer "${(flip ? "F.Fab" : "B.Fab")}") )`);
fp.push(`(fp_line (start -3.446001 ${flipN(flip, 6.149999)}) (end -6.445999 ${flipN(flip, 6.15)}) (stroke (width 0.05) (type solid)) (layer "${(flip ? "F.Fab" : "B.Fab")}") )`);
fp.push(`(fp_line (start -2.445999 ${flipN(flip, 7.499999)}) (end -2.446 ${flipN(flip, 7.149999)}) (stroke (width 0.05) (type solid)) (layer "${(flip ? "F.Fab" : "B.Fab")}") )`);
fp.push(`(fp_line (start -2.445999 ${flipN(flip, 7.499999)}) (end -1.646 ${flipN(flip, 8.300001)}) (stroke (width 0.05) (type solid)) (layer "${(flip ? "F.Fab" : "B.Fab")}") )`);
fp.push(`(fp_line (start 1.504 ${flipN(flip, 3.649999)}) (end -0.296001 ${flipN(flip, 3.65)}) (stroke (width 0.05) (type solid)) (layer "${(flip ? "F.Fab" : "B.Fab")}") )`);
fp.push(`(fp_line (start 1.504 ${flipN(flip, 3.649999)}) (end 2.304 ${flipN(flip, 4.45)}) (stroke (width 0.05) (type solid)) (layer "${(flip ? "F.Fab" : "B.Fab")}") )`);
fp.push(`(fp_line (start 1.504 ${flipN(flip, 8.3)}) (end -1.646 ${flipN(flip, 8.300001)}) (stroke (width 0.05) (type solid)) (layer "${(flip ? "F.Fab" : "B.Fab")}") )`);
fp.push(`(fp_line (start 2.304 ${flipN(flip, 7.5)}) (end 1.504 ${flipN(flip, 8.3)}) (stroke (width 0.05) (type solid)) (layer "${(flip ? "F.Fab" : "B.Fab")}") )`);
fp.push(`(fp_line (start 2.304 ${flipN(flip, 7.5)}) (end 2.304 ${flipN(flip, 4.45)}) (stroke (width 0.05) (type solid)) (layer "${(flip ? "F.Fab" : "B.Fab")}") )`);
fp.push(`(fp_line (start 4.864823 ${flipN(flip, -2.700221)}) (end -0.2 ${flipN(flip, -2.700218)}) (stroke (width 0.05) (type solid)) (layer "${(flip ? "F.Fab" : "B.Fab")}") )`);
fp.push(`(fp_line (start 4.864825 ${flipN(flip, -6.750222)}) (end 4.864823 ${flipN(flip, -2.700221)}) (stroke (width 0.05) (type solid)) (layer "${(flip ? "F.Fab" : "B.Fab")}") )`);
fp.push(`(fp_arc (start -6.445999 ${flipN(flip, 6.15)}) (mid -7.011685 ${flipN(flip, 5.915685)}) (end -7.246002 ${flipN(flip, 5.349999)}) (stroke (width 0.05) (type solid)) (layer "${(flip ? "F.Fab" : "B.Fab")}") )`);
fp.push(`(fp_arc (start -6.085176 ${flipN(flip, -4.75022)}) (mid -5.499389 ${flipN(flip, -6.164431)}) (end -4.085176 ${flipN(flip, -6.75022)}) (stroke (width 0.05) (type solid)) (layer "${(flip ? "F.Fab" : "B.Fab")}") )`);
fp.push(`(fp_arc (start -3.446001 ${flipN(flip, 6.149999)}) (mid -2.738893 ${flipN(flip, 6.442892)}) (end -2.446 ${flipN(flip, 7.149999)}) (stroke (width 0.05) (type solid)) (layer "${(flip ? "F.Fab" : "B.Fab")}") )`);
fp.push(`(fp_arc (start -3.396 ${flipN(flip, 1.5)}) (mid -2.822424 ${flipN(flip, 1.680848)}) (end -2.456308 ${flipN(flip, 2.15798)}) (stroke (width 0.05) (type solid)) (layer "${(flip ? "F.Fab" : "B.Fab")}") )`);
fp.push(`(fp_arc (start -2.494322 ${flipN(flip, -0.86022)}) (mid -1.670503 ${flipN(flip, -2.1834)}) (end -0.2 ${flipN(flip, -2.700218)}) (stroke (width 0.05) (type solid)) (layer "${(flip ? "F.Fab" : "B.Fab")}") )`);
fp.push(`(fp_arc (start -0.296 ${flipN(flip, 3.65)}) (mid -1.573273 ${flipN(flip, 3.192236)}) (end -2.451444 ${flipN(flip, 2.15793)}) (stroke (width 0.05) (type solid)) (layer "${(flip ? "F.Fab" : "B.Fab")}") )`);

// Drawings on F.Fab
fp.push(`(fp_line (start -4.864824 ${flipN(flip, -6.75022)}) (end -4.864824 ${flipN(flip, -2.70022)}) (stroke (width 0.05) (type solid)) (layer "${(flip ? "B.Fab" : "F.Fab")}") )`);
fp.push(`(fp_line (start -4.864824 ${flipN(flip, -2.70022)}) (end 0.2 ${flipN(flip, -2.70022)}) (stroke (width 0.05) (type solid)) (layer "${(flip ? "B.Fab" : "F.Fab")}") )`);
fp.push(`(fp_line (start -2.304 ${flipN(flip, 7.5)}) (end -2.304 ${flipN(flip, 4.45)}) (stroke (width 0.05) (type solid)) (layer "${(flip ? "B.Fab" : "F.Fab")}") )`);
fp.push(`(fp_line (start -2.304 ${flipN(flip, 7.5)}) (end -1.504 ${flipN(flip, 8.3)}) (stroke (width 0.05) (type solid)) (layer "${(flip ? "B.Fab" : "F.Fab")}") )`);
fp.push(`(fp_line (start -1.504 ${flipN(flip, 3.65)}) (end -2.304 ${flipN(flip, 4.45)}) (stroke (width 0.05) (type solid)) (layer "${(flip ? "B.Fab" : "F.Fab")}") )`);
fp.push(`(fp_line (start -1.504 ${flipN(flip, 3.65)}) (end 0.296 ${flipN(flip, 3.65)}) (stroke (width 0.05) (type solid)) (layer "${(flip ? "B.Fab" : "F.Fab")}") )`);
fp.push(`(fp_line (start -1.504 ${flipN(flip, 8.3)}) (end 1.646 ${flipN(flip, 8.3)}) (stroke (width 0.05) (type solid)) (layer "${(flip ? "B.Fab" : "F.Fab")}") )`);
fp.push(`(fp_line (start 2.446 ${flipN(flip, 7.5)}) (end 1.646 ${flipN(flip, 8.3)}) (stroke (width 0.05) (type solid)) (layer "${(flip ? "B.Fab" : "F.Fab")}") )`);
fp.push(`(fp_line (start 2.446 ${flipN(flip, 7.5)}) (end 2.446 ${flipN(flip, 7.15)}) (stroke (width 0.05) (type solid)) (layer "${(flip ? "B.Fab" : "F.Fab")}") )`);
fp.push(`(fp_line (start 3.446 ${flipN(flip, 6.15)}) (end 6.446 ${flipN(flip, 6.15)}) (stroke (width 0.05) (type solid)) (layer "${(flip ? "B.Fab" : "F.Fab")}") )`);
fp.push(`(fp_line (start 4.085176 ${flipN(flip, -6.75022)}) (end -4.864824 ${flipN(flip, -6.75022)}) (stroke (width 0.05) (type solid)) (layer "${(flip ? "B.Fab" : "F.Fab")}") )`);
fp.push(`(fp_line (start 6.085176 ${flipN(flip, -0.86022)}) (end 2.494322 ${flipN(flip, -0.86022)}) (stroke (width 0.05) (type solid)) (layer "${(flip ? "B.Fab" : "F.Fab")}") )`);
fp.push(`(fp_line (start 6.085176 ${flipN(flip, -0.86022)}) (end 6.085176 ${flipN(flip, -4.75022)}) (stroke (width 0.05) (type solid)) (layer "${(flip ? "B.Fab" : "F.Fab")}") )`);
fp.push(`(fp_line (start 7.246 ${flipN(flip, 1.5)}) (end 3.396 ${flipN(flip, 1.5)}) (stroke (width 0.05) (type solid)) (layer "${(flip ? "B.Fab" : "F.Fab")}") )`);
fp.push(`(fp_line (start 7.246 ${flipN(flip, 5.35)}) (end 7.246 ${flipN(flip, 1.5)}) (stroke (width 0.05) (type solid)) (layer "${(flip ? "B.Fab" : "F.Fab")}") )`);
fp.push(`(fp_arc (start 0.2 ${flipN(flip, -2.70022)}) (mid 1.670503 ${flipN(flip, -2.183399)}) (end 2.494322 ${flipN(flip, -0.86022)}) (stroke (width 0.05) (type solid)) (layer "${(flip ? "B.Fab" : "F.Fab")}") )`);
fp.push(`(fp_arc (start 2.446 ${flipN(flip, 7.15)}) (mid 2.738893 ${flipN(flip, 6.442893)}) (end 3.446 ${flipN(flip, 6.15)}) (stroke (width 0.05) (type solid)) (layer "${(flip ? "B.Fab" : "F.Fab")}") )`);
fp.push(`(fp_arc (start 2.451444 ${flipN(flip, 2.15793)}) (mid 1.573272 ${flipN(flip, 3.192235)}) (end 0.295999 ${flipN(flip, 3.649999)}) (stroke (width 0.05) (type solid)) (layer "${(flip ? "B.Fab" : "F.Fab")}") )`);
fp.push(`(fp_arc (start 2.456307 ${flipN(flip, 2.15798)}) (mid 2.822423 ${flipN(flip, 1.680848)}) (end 3.396 ${flipN(flip, 1.5)}) (stroke (width 0.05) (type solid)) (layer "${(flip ? "B.Fab" : "F.Fab")}") )`);
fp.push(`(fp_arc (start 4.085176 ${flipN(flip, -6.75022)}) (mid 5.49939 ${flipN(flip, -6.164434)}) (end 6.085176 ${flipN(flip, -4.75022)}) (stroke (width 0.05) (type solid)) (layer "${(flip ? "B.Fab" : "F.Fab")}") )`);
fp.push(`(fp_arc (start 7.246 ${flipN(flip, 5.35)}) (mid 7.011685 ${flipN(flip, 5.915685)}) (end 6.446 ${flipN(flip, 6.15)}) (stroke (width 0.05) (type solid)) (layer "${(flip ? "B.Fab" : "F.Fab")}") )`);

// Drawings on B.SilkS
fp.push(`(fp_line (start -7.504 ${flipN(flip, 1.475)}) (end -7.503999 ${flipN(flip, 2.174998)}) (stroke (width 0.12) (type solid)) (layer "${(flip ? "F.SilkS" : "B.SilkS")}") )`);
fp.push(`(fp_line (start -7.504 ${flipN(flip, 1.475)}) (end -6.504 ${flipN(flip, 1.475001)}) (stroke (width 0.12) (type solid)) (layer "${(flip ? "F.SilkS" : "B.SilkS")}") )`);
fp.push(`(fp_line (start -6.085177 ${flipN(flip, -1.100221)}) (end -6.085176 ${flipN(flip, -0.86022)}) (stroke (width 0.15) (type solid)) (layer "${(flip ? "F.SilkS" : "B.SilkS")}") )`);
fp.push(`(fp_line (start -6.085176 ${flipN(flip, -3.95022)}) (end -6.085176 ${flipN(flip, -4.75022)}) (stroke (width 0.15) (type solid)) (layer "${(flip ? "F.SilkS" : "B.SilkS")}") )`);
fp.push(`(fp_line (start -4.085176 ${flipN(flip, -6.75022)}) (end 1.814823 ${flipN(flip, -6.75022)}) (stroke (width 0.15) (type solid)) (layer "${(flip ? "F.SilkS" : "B.SilkS")}") )`);
fp.push(`(fp_line (start 1.5 ${flipN(flip, 3.625)}) (end 0.5 ${flipN(flip, 3.625)}) (stroke (width 0.12) (type solid)) (layer "${(flip ? "F.SilkS" : "B.SilkS")}") )`);
fp.push(`(fp_line (start 1.5 ${flipN(flip, 3.625)}) (end 2.3 ${flipN(flip, 4.425)}) (stroke (width 0.12) (type solid)) (layer "${(flip ? "F.SilkS" : "B.SilkS")}") )`);
fp.push(`(fp_line (start 1.5 ${flipN(flip, 8.275)}) (end 0.500001 ${flipN(flip, 8.275001)}) (stroke (width 0.12) (type solid)) (layer "${(flip ? "F.SilkS" : "B.SilkS")}") )`);
fp.push(`(fp_line (start 2.299999 ${flipN(flip, 7.475002)}) (end 1.5 ${flipN(flip, 8.275)}) (stroke (width 0.12) (type solid)) (layer "${(flip ? "F.SilkS" : "B.SilkS")}") )`);
fp.push(`(fp_line (start 3.314825 ${flipN(flip, -6.750218)}) (end 4.864825 ${flipN(flip, -6.750222)}) (stroke (width 0.15) (type solid)) (layer "${(flip ? "F.SilkS" : "B.SilkS")}") )`);
fp.push(`(fp_line (start 4.364825 ${flipN(flip, -2.700219)}) (end -0.2 ${flipN(flip, -2.700218)}) (stroke (width 0.15) (type solid)) (layer "${(flip ? "F.SilkS" : "B.SilkS")}") )`);
fp.push(`(fp_line (start 4.864824 ${flipN(flip, -3.67022)}) (end 4.864824 ${flipN(flip, -3.20022)}) (stroke (width 0.15) (type solid)) (layer "${(flip ? "F.SilkS" : "B.SilkS")}") )`);
fp.push(`(fp_line (start 4.864825 ${flipN(flip, -6.750222)}) (end 4.864824 ${flipN(flip, -6.52022)}) (stroke (width 0.15) (type solid)) (layer "${(flip ? "F.SilkS" : "B.SilkS")}") )`);
fp.push(`(fp_arc (start -6.45 ${flipN(flip, 6.125)}) (mid -7.015684 ${flipN(flip, 5.890685)}) (end -7.249999 ${flipN(flip, 5.325001)}) (stroke (width 0.12) (type solid)) (layer "${(flip ? "F.SilkS" : "B.SilkS")}") )`);
fp.push(`(fp_arc (start -6.085176 ${flipN(flip, -4.75022)}) (mid -5.499389 ${flipN(flip, -6.164431)}) (end -4.085176 ${flipN(flip, -6.75022)}) (stroke (width 0.15) (type solid)) (layer "${(flip ? "F.SilkS" : "B.SilkS")}") )`);
fp.push(`(fp_arc (start -2.494322 ${flipN(flip, -0.86022)}) (mid -1.670693 ${flipN(flip, -2.183637)}) (end -0.2 ${flipN(flip, -2.700218)}) (stroke (width 0.15) (type solid)) (layer "${(flip ? "F.SilkS" : "B.SilkS")}") )`);
fp.push(`(fp_arc (start 4.864824 ${flipN(flip, -3.20022)}) (mid 4.718377 ${flipN(flip, -2.846667)}) (end 4.364825 ${flipN(flip, -2.700219)}) (stroke (width 0.15) (type solid)) (layer "${(flip ? "F.SilkS" : "B.SilkS")}") )`);

// Drawings on F.SilkS
fp.push(`(fp_line (start -4.864824 ${flipN(flip, -6.75022)}) (end -4.864824 ${flipN(flip, -6.52022)}) (stroke (width 0.15) (type solid)) (layer "${(flip ? "B.SilkS" : "F.SilkS")}") )`);
fp.push(`(fp_line (start -4.864824 ${flipN(flip, -3.67022)}) (end -4.864824 ${flipN(flip, -3.20022)}) (stroke (width 0.15) (type solid)) (layer "${(flip ? "B.SilkS" : "F.SilkS")}") )`);
fp.push(`(fp_line (start -4.364824 ${flipN(flip, -2.70022)}) (end 0.2 ${flipN(flip, -2.70022)}) (stroke (width 0.15) (type solid)) (layer "${(flip ? "B.SilkS" : "F.SilkS")}") )`);
fp.push(`(fp_line (start -3.314824 ${flipN(flip, -6.75022)}) (end -4.864824 ${flipN(flip, -6.75022)}) (stroke (width 0.15) (type solid)) (layer "${(flip ? "B.SilkS" : "F.SilkS")}") )`);
fp.push(`(fp_line (start -2.3 ${flipN(flip, 7.475)}) (end -1.5 ${flipN(flip, 8.275)}) (stroke (width 0.12) (type solid)) (layer "${(flip ? "B.SilkS" : "F.SilkS")}") )`);
fp.push(`(fp_line (start -1.5 ${flipN(flip, 3.625)}) (end -2.3 ${flipN(flip, 4.425)}) (stroke (width 0.12) (type solid)) (layer "${(flip ? "B.SilkS" : "F.SilkS")}") )`);
fp.push(`(fp_line (start -1.5 ${flipN(flip, 3.625)}) (end -0.5 ${flipN(flip, 3.625)}) (stroke (width 0.12) (type solid)) (layer "${(flip ? "B.SilkS" : "F.SilkS")}") )`);
fp.push(`(fp_line (start -1.5 ${flipN(flip, 8.275)}) (end -0.5 ${flipN(flip, 8.275)}) (stroke (width 0.12) (type solid)) (layer "${(flip ? "B.SilkS" : "F.SilkS")}") )`);
fp.push(`(fp_line (start 4.085176 ${flipN(flip, -6.75022)}) (end -1.814824 ${flipN(flip, -6.75022)}) (stroke (width 0.15) (type solid)) (layer "${(flip ? "B.SilkS" : "F.SilkS")}") )`);
fp.push(`(fp_line (start 6.085176 ${flipN(flip, -3.95022)}) (end 6.085176 ${flipN(flip, -4.75022)}) (stroke (width 0.15) (type solid)) (layer "${(flip ? "B.SilkS" : "F.SilkS")}") )`);
fp.push(`(fp_line (start 6.085176 ${flipN(flip, -1.10022)}) (end 6.085176 ${flipN(flip, -0.86022)}) (stroke (width 0.15) (type solid)) (layer "${(flip ? "B.SilkS" : "F.SilkS")}") )`);
fp.push(`(fp_line (start 7.504 ${flipN(flip, 1.475)}) (end 6.504 ${flipN(flip, 1.475)}) (stroke (width 0.12) (type solid)) (layer "${(flip ? "B.SilkS" : "F.SilkS")}") )`);
fp.push(`(fp_line (start 7.504 ${flipN(flip, 1.475)}) (end 7.504 ${flipN(flip, 2.175)}) (stroke (width 0.12) (type solid)) (layer "${(flip ? "B.SilkS" : "F.SilkS")}") )`);
fp.push(`(fp_arc (start -4.364824 ${flipN(flip, -2.70022)}) (mid -4.718377 ${flipN(flip, -2.846667)}) (end -4.864824 ${flipN(flip, -3.20022)}) (stroke (width 0.15) (type solid)) (layer "${(flip ? "B.SilkS" : "F.SilkS")}") )`);
fp.push(`(fp_arc (start 0.2 ${flipN(flip, -2.70022)}) (mid 1.670693 ${flipN(flip, -2.183637)}) (end 2.494322 ${flipN(flip, -0.86022)}) (stroke (width 0.15) (type solid)) (layer "${(flip ? "B.SilkS" : "F.SilkS")}") )`);
fp.push(`(fp_arc (start 4.085176 ${flipN(flip, -6.75022)}) (mid 5.49939 ${flipN(flip, -6.164434)}) (end 6.085176 ${flipN(flip, -4.75022)}) (stroke (width 0.15) (type solid)) (layer "${(flip ? "B.SilkS" : "F.SilkS")}") )`);
fp.push(`(fp_arc (start 7.25 ${flipN(flip, 5.325)}) (mid 7.015685 ${flipN(flip, 5.890685)}) (end 6.45 ${flipN(flip, 6.125)}) (stroke (width 0.12) (type solid)) (layer "${(flip ? "B.SilkS" : "F.SilkS")}") )`);

// Drawings on Eco2.User
fp.push(`(fp_rect (start -7 ${flipN(flip, 7)}) (end 7 ${flipN(flip, -7)}) (stroke (width 0.1) (type solid)) (fill no) (layer "Eco2.User") )`);

// 3D Models
fp.push(`(model "\${KICAD8_3RD_PARTY}/3dmodels/com_github_ebastler_marbastlib/HS_CPG151101S11_MX.step" (offset (xyz -4.82 6.74 1.82)) (scale (xyz 1 1 1)) (rotate (xyz 180 0 0)))`);

// Properties
// fp.push(`(property "Reference" "REF**" (at -4.25 ${flipN(flip, -1.75)} ${flipR(flip, p.r + 0) % 180}) (layer "${(flip ? "B.SilkS" : "F.SilkS")}") (hide yes)  (effects (font (size 1 1) (thickness 0.15)) (justify${ flip ? " mirror" : ""})))`);
// fp.push(`(property "Value" "CPG151101S11" (at 0 ${flipN(flip, 0)} ${flipR(flip, p.r + 0) % 180}) (layer "${(flip ? "B.Fab" : "F.Fab")}") (hide yes)  (effects (font (size 1 1) (thickness 0.15)) (justify${ flip ? " mirror" : ""})))`);
// fp.push(`(property "Datasheet" "" (at 0 ${flipN(flip, 0)} ${flipR(flip, p.r + 0) % 180}) (layer "${(flip ? "B.Fab" : "F.Fab")}") (hide yes)  (effects (font (size 1.27 1.27) (thickness 0.15)) (justify${ flip ? " mirror" : ""})))`);
// fp.push(`(property "Description" "" (at 0 ${flipN(flip, 0)} ${flipR(flip, p.r + 0) % 180}) (layer "${(flip ? "B.Fab" : "F.Fab")}") (hide yes)  (effects (font (size 1.27 1.27) (thickness 0.15)) (justify${ flip ? " mirror" : ""})))`);

    fp.push(')');
    return fp.join('\n');
  }
}
function normalizeAngle(angle) {
  angle = angle % 360;
  if (angle <= -180) angle += 360;
  else if (angle > 180) angle -= 360;
  return angle;
}
function flipR(flip, r) { return normalizeAngle(flip ? (180 - r) : r) }
function flipN(flip, n) { return flip ? -n : n }