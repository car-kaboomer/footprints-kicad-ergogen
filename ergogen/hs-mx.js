module.exports = {
  params: {
    designator: 'XX',
    side: 'F',
    left: { type: 'net', value: undefined },
    right: { type: 'net', value: undefined },
  },
  body: p => {
    const fp = [];
    const flip = p.side === "B";
if (!flip && p.side !== "F") throw new Error('unsupported side: ' + p.side);

fp.push(`(footprint "hsmx"`);
fp.push(`(at ${p.x} ${p.y} ${flipR(flip, p.r)})`);
fp.push(`(layer "${(flip ? "B.Cu" : "F.Cu")}")`);
fp.push(`(property "Reference" "${p.ref}" ${p.ref_hide} (at 0 0 ${flipR(flip, p.r) % 180}) (layer "${p.side}.SilkS") (effects (font (size 1 1) (thickness 0.15))${ p.side === "B" ? " (justify mirror)" : ""}))`);
fp.push(`(property "Value" "" hide (at 0 0 ${flipR(flip, p.r) % 180}) (layer "${p.side}.Fab") (effects (font (size 1 1) (thickness 0.15))${ p.side === "B" ? " (justify mirror)" : ""}))`);
fp.push(`(property "Datasheet" "" hide (at 0 0 ${flipR(flip, p.r) % 180}) (layer "${p.side}.Fab") (effects (font (size 1 1) (thickness 0.15))${ p.side === "B" ? " (justify mirror)" : ""}))`);
fp.push(`(property "Description" "" hide (at 0 0 ${flipR(flip, p.r) % 180}) (layer "${p.side}.Fab") (effects (font (size 1 1) (thickness 0.15))${ p.side === "B" ? " (justify mirror)" : ""}))`);

fp.push(`(descr "Footprint for Cherry MX style switches with Kailh hotswap socket")`);
fp.push(`(attr smd)`);

// Unknown to kicad2ergogen
fp.push(`(embedded_fonts no)`);

// Pads
fp.push(`(pad "" np_thru_hole circle (at -5.08 ${flipN(flip, 0)} ${flipR(flip, p.r + 0)}) (size 1.7 1.7) (drill 1.7) (layers "*.Cu" "*.Mask") )`);
fp.push(`(pad "" np_thru_hole circle (at 0 ${flipN(flip, 0)} ${flipR(flip, p.r + 0)}) (size 3.9878 3.9878) (drill 3.9878) (layers "*.Cu" "*.Mask") )`);
fp.push(`(pad "" np_thru_hole circle (at 5.08 ${flipN(flip, 0)} ${flipR(flip, p.r + 0)}) (size 1.7 1.7) (drill 1.7) (layers "*.Cu" "*.Mask") )`);
fp.push(`(pad "1" thru_hole circle (at 3.81 ${flipN(flip, -2.54)} ${flipR(flip, p.r + 0)}) (size 3.3 3.3) (drill 3) (property pad_prop_mechanical) (layers "*.Cu" "*.Mask") (remove_unused_layers no)  ${p.right})`);
fp.push(`(pad "1" smd rect (at 5.635 ${flipN(flip, -2.54)} ${flipR(flip, p.r + 180)}) (size 1.65 2.5) (layers "${(flip ? "B" : "F")}.Cu")  ${p.right})`);
fp.push(`(pad "1" smd roundrect (at 7.36 ${flipN(flip, -2.54)} ${flipR(flip, p.r + 0)}) (size 2.55 2.5) (layers "${(flip ? "B" : "F")}.Cu" "${(flip ? "B" : "F")}.Mask" "${(flip ? "B" : "F")}.Paste") (roundrect_rratio 0.1)  ${p.right})`);
fp.push(`(pad "2" smd roundrect (at -6.09 ${flipN(flip, -5.08)} ${flipR(flip, p.r + 0)}) (size 2.55 2.5) (layers "${(flip ? "B" : "F")}.Cu" "${(flip ? "B" : "F")}.Mask" "${(flip ? "B" : "F")}.Paste") (roundrect_rratio 0.1)  ${p.left})`);
fp.push(`(pad "2" smd rect (at -4.34 ${flipN(flip, -5.08)} ${flipR(flip, p.r + 0)}) (size 1.65 2.5) (layers "${(flip ? "B" : "F")}.Cu")  ${p.left})`);
fp.push(`(pad "2" thru_hole circle (at -2.54 ${flipN(flip, -5.08)} ${flipR(flip, p.r + 0)}) (size 3.3 3.3) (drill 3) (property pad_prop_mechanical) (layers "*.Cu" "*.Mask") (remove_unused_layers no)  ${p.left})`);

// Drawings on F.CrtYd
fp.push(`(fp_line (start -7.414824 ${flipN(flip, -6.32022)}) (end -4.864824 ${flipN(flip, -6.32022)}) (stroke (width 0.05) (type solid)) (layer "${(flip ? "B.CrtYd" : "F.CrtYd")}") )`);
fp.push(`(fp_line (start -7.414824 ${flipN(flip, -3.87022)}) (end -7.414824 ${flipN(flip, -6.32022)}) (stroke (width 0.05) (type solid)) (layer "${(flip ? "B.CrtYd" : "F.CrtYd")}") )`);
fp.push(`(fp_line (start -4.864824 ${flipN(flip, -6.75022)}) (end -4.864824 ${flipN(flip, -6.32022)}) (stroke (width 0.05) (type solid)) (layer "${(flip ? "B.CrtYd" : "F.CrtYd")}") )`);
fp.push(`(fp_line (start -4.864824 ${flipN(flip, -3.87022)}) (end -7.414824 ${flipN(flip, -3.87022)}) (stroke (width 0.05) (type solid)) (layer "${(flip ? "B.CrtYd" : "F.CrtYd")}") )`);
fp.push(`(fp_line (start -4.864824 ${flipN(flip, -3.87022)}) (end -4.864824 ${flipN(flip, -2.70022)}) (stroke (width 0.05) (type solid)) (layer "${(flip ? "B.CrtYd" : "F.CrtYd")}") )`);
fp.push(`(fp_line (start -4.864824 ${flipN(flip, -2.70022)}) (end 0.2 ${flipN(flip, -2.70022)}) (stroke (width 0.05) (type solid)) (layer "${(flip ? "B.CrtYd" : "F.CrtYd")}") )`);
fp.push(`(fp_line (start 4.085176 ${flipN(flip, -6.75022)}) (end -4.864824 ${flipN(flip, -6.75022)}) (stroke (width 0.05) (type solid)) (layer "${(flip ? "B.CrtYd" : "F.CrtYd")}") )`);
fp.push(`(fp_line (start 6.085176 ${flipN(flip, -3.75022)}) (end 6.085176 ${flipN(flip, -4.75022)}) (stroke (width 0.05) (type solid)) (layer "${(flip ? "B.CrtYd" : "F.CrtYd")}") )`);
fp.push(`(fp_line (start 6.085176 ${flipN(flip, -3.75022)}) (end 8.685176 ${flipN(flip, -3.75022)}) (stroke (width 0.05) (type solid)) (layer "${(flip ? "B.CrtYd" : "F.CrtYd")}") )`);
fp.push(`(fp_line (start 6.085176 ${flipN(flip, -1.30022)}) (end 6.085176 ${flipN(flip, -0.86022)}) (stroke (width 0.05) (type solid)) (layer "${(flip ? "B.CrtYd" : "F.CrtYd")}") )`);
fp.push(`(fp_line (start 6.085176 ${flipN(flip, -0.86022)}) (end 2.494322 ${flipN(flip, -0.86022)}) (stroke (width 0.05) (type solid)) (layer "${(flip ? "B.CrtYd" : "F.CrtYd")}") )`);
fp.push(`(fp_line (start 8.685176 ${flipN(flip, -3.75022)}) (end 8.685176 ${flipN(flip, -1.30022)}) (stroke (width 0.05) (type solid)) (layer "${(flip ? "B.CrtYd" : "F.CrtYd")}") )`);
fp.push(`(fp_line (start 8.685176 ${flipN(flip, -1.30022)}) (end 6.085176 ${flipN(flip, -1.30022)}) (stroke (width 0.05) (type solid)) (layer "${(flip ? "B.CrtYd" : "F.CrtYd")}") )`);
fp.push(`(fp_arc (start 0.2 ${flipN(flip, -2.70022)}) (mid 1.670503 ${flipN(flip, -2.183399)}) (end 2.494322 ${flipN(flip, -0.86022)}) (stroke (width 0.05) (type solid)) (layer "${(flip ? "B.CrtYd" : "F.CrtYd")}") )`);
fp.push(`(fp_arc (start 4.085176 ${flipN(flip, -6.75022)}) (mid 5.49939 ${flipN(flip, -6.164434)}) (end 6.085176 ${flipN(flip, -4.75022)}) (stroke (width 0.05) (type solid)) (layer "${(flip ? "B.CrtYd" : "F.CrtYd")}") )`);

// Drawings on F.Fab
fp.push(`(fp_line (start -4.864824 ${flipN(flip, -6.75022)}) (end -4.864824 ${flipN(flip, -2.70022)}) (stroke (width 0.05) (type solid)) (layer "${(flip ? "B.Fab" : "F.Fab")}") )`);
fp.push(`(fp_line (start -4.864824 ${flipN(flip, -2.70022)}) (end 0.2 ${flipN(flip, -2.70022)}) (stroke (width 0.05) (type solid)) (layer "${(flip ? "B.Fab" : "F.Fab")}") )`);
fp.push(`(fp_line (start 4.085176 ${flipN(flip, -6.75022)}) (end -4.864824 ${flipN(flip, -6.75022)}) (stroke (width 0.05) (type solid)) (layer "${(flip ? "B.Fab" : "F.Fab")}") )`);
fp.push(`(fp_line (start 6.085176 ${flipN(flip, -0.86022)}) (end 2.494322 ${flipN(flip, -0.86022)}) (stroke (width 0.05) (type solid)) (layer "${(flip ? "B.Fab" : "F.Fab")}") )`);
fp.push(`(fp_line (start 6.085176 ${flipN(flip, -0.86022)}) (end 6.085176 ${flipN(flip, -4.75022)}) (stroke (width 0.05) (type solid)) (layer "${(flip ? "B.Fab" : "F.Fab")}") )`);
fp.push(`(fp_arc (start 0.2 ${flipN(flip, -2.70022)}) (mid 1.670503 ${flipN(flip, -2.183399)}) (end 2.494322 ${flipN(flip, -0.86022)}) (stroke (width 0.05) (type solid)) (layer "${(flip ? "B.Fab" : "F.Fab")}") )`);
fp.push(`(fp_arc (start 4.085176 ${flipN(flip, -6.75022)}) (mid 5.49939 ${flipN(flip, -6.164434)}) (end 6.085176 ${flipN(flip, -4.75022)}) (stroke (width 0.05) (type solid)) (layer "${(flip ? "B.Fab" : "F.Fab")}") )`);
fp.push(`(fp_text user "\${REFERENCE}" (at 0.5 ${flipN(flip, -4.5)} ${flipR(flip, p.r + 0) % 180}) (layer "${(flip ? "B.Fab" : "F.Fab")}")  (effects (font (size 0.8 0.8) (thickness 0.12)) (justify${ flip ? " mirror" : ""})))`);

// Drawings on F.SilkS
fp.push(`(fp_line (start -4.864824 ${flipN(flip, -6.75022)}) (end -4.864824 ${flipN(flip, -6.52022)}) (stroke (width 0.15) (type solid)) (layer "${(flip ? "B.SilkS" : "F.SilkS")}") )`);
fp.push(`(fp_line (start -4.864824 ${flipN(flip, -3.67022)}) (end -4.864824 ${flipN(flip, -3.20022)}) (stroke (width 0.15) (type solid)) (layer "${(flip ? "B.SilkS" : "F.SilkS")}") )`);
fp.push(`(fp_line (start -4.364824 ${flipN(flip, -2.70022)}) (end 0.2 ${flipN(flip, -2.70022)}) (stroke (width 0.15) (type solid)) (layer "${(flip ? "B.SilkS" : "F.SilkS")}") )`);
fp.push(`(fp_line (start -3.314824 ${flipN(flip, -6.75022)}) (end -4.864824 ${flipN(flip, -6.75022)}) (stroke (width 0.15) (type solid)) (layer "${(flip ? "B.SilkS" : "F.SilkS")}") )`);
fp.push(`(fp_line (start 4.085176 ${flipN(flip, -6.75022)}) (end -1.814824 ${flipN(flip, -6.75022)}) (stroke (width 0.15) (type solid)) (layer "${(flip ? "B.SilkS" : "F.SilkS")}") )`);
fp.push(`(fp_line (start 6.085176 ${flipN(flip, -3.95022)}) (end 6.085176 ${flipN(flip, -4.75022)}) (stroke (width 0.15) (type solid)) (layer "${(flip ? "B.SilkS" : "F.SilkS")}") )`);
fp.push(`(fp_line (start 6.085176 ${flipN(flip, -1.10022)}) (end 6.085176 ${flipN(flip, -0.86022)}) (stroke (width 0.15) (type solid)) (layer "${(flip ? "B.SilkS" : "F.SilkS")}") )`);
fp.push(`(fp_arc (start -4.364824 ${flipN(flip, -2.70022)}) (mid -4.718377 ${flipN(flip, -2.846667)}) (end -4.864824 ${flipN(flip, -3.20022)}) (stroke (width 0.15) (type solid)) (layer "${(flip ? "B.SilkS" : "F.SilkS")}") )`);
fp.push(`(fp_arc (start 0.2 ${flipN(flip, -2.70022)}) (mid 1.670693 ${flipN(flip, -2.183637)}) (end 2.494322 ${flipN(flip, -0.86022)}) (stroke (width 0.15) (type solid)) (layer "${(flip ? "B.SilkS" : "F.SilkS")}") )`);
fp.push(`(fp_arc (start 4.085176 ${flipN(flip, -6.75022)}) (mid 5.49939 ${flipN(flip, -6.164434)}) (end 6.085176 ${flipN(flip, -4.75022)}) (stroke (width 0.15) (type solid)) (layer "${(flip ? "B.SilkS" : "F.SilkS")}") )`);

// Drawings on Eco2.User
fp.push(`(fp_line (start -7 ${flipN(flip, -6.5)}) (end -7 ${flipN(flip, 6.5)}) (stroke (width 0.05) (type solid)) (layer "Eco2.User") )`);
fp.push(`(fp_line (start -6.5 ${flipN(flip, 7)}) (end 6.5 ${flipN(flip, 7)}) (stroke (width 0.05) (type solid)) (layer "Eco2.User") )`);
fp.push(`(fp_line (start 6.5 ${flipN(flip, -7)}) (end -6.5 ${flipN(flip, -7)}) (stroke (width 0.05) (type solid)) (layer "Eco2.User") )`);
fp.push(`(fp_line (start 7 ${flipN(flip, 6.5)}) (end 7 ${flipN(flip, -6.5)}) (stroke (width 0.05) (type solid)) (layer "Eco2.User") )`);
fp.push(`(fp_arc (start -7 ${flipN(flip, -6.5)}) (mid -6.853553 ${flipN(flip, -6.853553)}) (end -6.5 ${flipN(flip, -7)}) (stroke (width 0.05) (type solid)) (layer "Eco2.User") )`);
fp.push(`(fp_arc (start -6.497236 ${flipN(flip, 6.998884)}) (mid -6.850789 ${flipN(flip, 6.852437)}) (end -6.997236 ${flipN(flip, 6.498884)}) (stroke (width 0.05) (type solid)) (layer "Eco2.User") )`);
fp.push(`(fp_arc (start 6.5 ${flipN(flip, -7)}) (mid 6.853553 ${flipN(flip, -6.853553)}) (end 7 ${flipN(flip, -6.5)}) (stroke (width 0.05) (type solid)) (layer "Eco2.User") )`);
fp.push(`(fp_arc (start 7 ${flipN(flip, 6.5)}) (mid 6.853553 ${flipN(flip, 6.853553)}) (end 6.5 ${flipN(flip, 7)}) (stroke (width 0.05) (type solid)) (layer "Eco2.User") )`);

// 3D Models
fp.push(`(model "\${KICAD8_3RD_PARTY}/3dmodels/com_github_ebastler_marbastlib/HS_CPG151101S11_MX.step" (offset (xyz -4.82 6.74 1.82)) (scale (xyz 1 1 1)) (rotate (xyz 180 0 0)))`);

// Properties
// fp.push(`(property "Reference" "REF**" (at -4.25 ${flipN(flip, -1.7)} ${flipR(flip, p.r + 0) % 180}) (layer "${(flip ? "B.SilkS" : "F.SilkS")}")  (effects (font (size 1 1) (thickness 0.15)) (justify${ flip ? " mirror" : ""})))`);
// fp.push(`(property "Value" "CPG151101S11" (at 0 ${flipN(flip, 0)} ${flipR(flip, p.r + 0) % 180}) (layer "${(flip ? "B.Fab" : "F.Fab")}")  (effects (font (size 1 1) (thickness 0.15)) (justify${ flip ? " mirror" : ""})))`);
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

