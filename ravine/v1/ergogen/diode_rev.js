module.exports = {
  params: {
    designator: 'D',
    side: 'F',
    from: { type: 'net', value: undefined },
    to: { type: 'net', value: undefined },
  },
  body: p => {
    const fp = [];
    const flip = p.side === "B";
if (!flip && p.side !== "F") throw new Error('unsupported side: ' + p.side);

fp.push(`(footprint "diode-rev"`);
fp.push(`(at ${p.x} ${p.y} ${flipR(flip, p.r)})`);
fp.push(`(layer "${(flip ? "B.Cu" : "F.Cu")}")`);
fp.push(`(property "Reference" "${p.ref}" ${p.ref_hide} (at 0 0 ${flipR(flip, p.r) % 180}) (layer "${p.side}.SilkS") (effects (font (size 1 1) (thickness 0.15))${ p.side === "B" ? " (justify mirror)" : ""}))`);
fp.push(`(property "Value" "" hide (at 0 0 ${flipR(flip, p.r) % 180}) (layer "${p.side}.Fab") (effects (font (size 1 1) (thickness 0.15))${ p.side === "B" ? " (justify mirror)" : ""}))`);
fp.push(`(property "Datasheet" "" hide (at 0 0 ${flipR(flip, p.r) % 180}) (layer "${p.side}.Fab") (effects (font (size 1 1) (thickness 0.15))${ p.side === "B" ? " (justify mirror)" : ""}))`);
fp.push(`(property "Description" "" hide (at 0 0 ${flipR(flip, p.r) % 180}) (layer "${p.side}.Fab") (effects (font (size 1 1) (thickness 0.15))${ p.side === "B" ? " (justify mirror)" : ""}))`);

fp.push(`(descr "Resitance 3 pas")`);
fp.push(`(tags "R")`);

// Unknown to kicad2ergogen
fp.push(`(embedded_fonts no)`);

// Pads
fp.push(`(pad "1" thru_hole oval (at 0.85 ${flipN(flip, 0)} ${flipR(flip, p.r + 180)}) (size 1 0.5) (drill 0.3 (offset -0.25 0)) (layers "*.Cu") (remove_unused_layers no)  ${p.from})`);
fp.push(`(pad "1" smd roundrect (at 1.775 ${flipN(flip, -0.0004)} ${flipR(flip, p.r + 0)}) (size 1.3 0.95) (layers "${(flip ? "B" : "F")}.Cu" "${(flip ? "B" : "F")}.Mask" "${(flip ? "B" : "F")}.Paste") (roundrect_rratio 0.25)  ${p.from})`);
fp.push(`(pad "1" smd roundrect (at 1.775 ${flipN(flip, -0.0004)} ${flipR(flip, p.r + 0)}) (size 1.3 0.95) (layers "${(flip ? "F" : "B")}.Cu" "${(flip ? "F" : "B")}.Mask" "${(flip ? "F" : "B")}.Paste") (roundrect_rratio 0.25)  ${p.from})`);
fp.push(`(pad "2" smd roundrect (at -1.775 ${flipN(flip, 0)} ${flipR(flip, p.r + 0)}) (size 1.3 0.95) (layers "${(flip ? "B" : "F")}.Cu" "${(flip ? "B" : "F")}.Mask" "${(flip ? "B" : "F")}.Paste") (roundrect_rratio 0.25)  ${p.to})`);
fp.push(`(pad "2" smd roundrect (at -1.775 ${flipN(flip, 0)} ${flipR(flip, p.r + 0)}) (size 1.3 0.95) (layers "${(flip ? "F" : "B")}.Cu" "${(flip ? "F" : "B")}.Mask" "${(flip ? "F" : "B")}.Paste") (roundrect_rratio 0.25)  ${p.to})`);
fp.push(`(pad "2" thru_hole oval (at -0.85 ${flipN(flip, 0)} ${flipR(flip, p.r + 0)}) (size 1 0.5) (drill 0.3 (offset -0.25 0)) (layers "*.Cu") (remove_unused_layers no)  ${p.to})`);

// Drawings on B.SilkS
fp.push(`(fp_line (start -2.7 ${flipN(flip, -0.75)}) (end -2.7 ${flipN(flip, 0.75)}) (stroke (width 0.15) (type solid)) (layer "${(flip ? "F.SilkS" : "B.SilkS")}") )`);
fp.push(`(fp_line (start -2.7 ${flipN(flip, 0.75)}) (end -0.85 ${flipN(flip, 0.75)}) (stroke (width 0.15) (type solid)) (layer "${(flip ? "F.SilkS" : "B.SilkS")}") )`);
fp.push(`(fp_line (start -0.85 ${flipN(flip, -0.75)}) (end -2.7 ${flipN(flip, -0.75)}) (stroke (width 0.15) (type solid)) (layer "${(flip ? "F.SilkS" : "B.SilkS")}") )`);
fp.push(`(fp_line (start -0.5 ${flipN(flip, 0.5)}) (end -0.5 ${flipN(flip, -0.5)}) (stroke (width 0.15) (type solid)) (layer "${(flip ? "F.SilkS" : "B.SilkS")}") )`);
fp.push(`(fp_line (start -0.4 ${flipN(flip, 0)}) (end 0.5 ${flipN(flip, 0.5)}) (stroke (width 0.15) (type solid)) (layer "${(flip ? "F.SilkS" : "B.SilkS")}") )`);
fp.push(`(fp_line (start 0.5 ${flipN(flip, -0.5004)}) (end 0.5 ${flipN(flip, 0.4996)}) (stroke (width 0.15) (type solid)) (layer "${(flip ? "F.SilkS" : "B.SilkS")}") )`);
fp.push(`(fp_line (start 0.5 ${flipN(flip, -0.5)}) (end -0.4 ${flipN(flip, 0)}) (stroke (width 0.15) (type solid)) (layer "${(flip ? "F.SilkS" : "B.SilkS")}") )`);
fp.push(`(fp_line (start 0.5 ${flipN(flip, 0.5)}) (end 0.5 ${flipN(flip, -0.5)}) (stroke (width 0.15) (type solid)) (layer "${(flip ? "F.SilkS" : "B.SilkS")}") )`);

// Drawings on F.SilkS
fp.push(`(fp_line (start -2.7 ${flipN(flip, -0.75)}) (end -2.7 ${flipN(flip, 0.75)}) (stroke (width 0.15) (type solid)) (layer "${(flip ? "B.SilkS" : "F.SilkS")}") )`);
fp.push(`(fp_line (start -2.7 ${flipN(flip, 0.75)}) (end -0.85 ${flipN(flip, 0.75)}) (stroke (width 0.15) (type solid)) (layer "${(flip ? "B.SilkS" : "F.SilkS")}") )`);
fp.push(`(fp_line (start -0.85 ${flipN(flip, -0.75)}) (end -2.7 ${flipN(flip, -0.75)}) (stroke (width 0.15) (type solid)) (layer "${(flip ? "B.SilkS" : "F.SilkS")}") )`);
fp.push(`(fp_line (start -0.5 ${flipN(flip, -0.5)}) (end -0.5 ${flipN(flip, 0.5)}) (stroke (width 0.15) (type solid)) (layer "${(flip ? "B.SilkS" : "F.SilkS")}") )`);
fp.push(`(fp_line (start -0.4 ${flipN(flip, 0)}) (end 0.5 ${flipN(flip, -0.5)}) (stroke (width 0.15) (type solid)) (layer "${(flip ? "B.SilkS" : "F.SilkS")}") )`);
fp.push(`(fp_line (start 0.5 ${flipN(flip, -0.5)}) (end 0.5 ${flipN(flip, 0.5)}) (stroke (width 0.15) (type solid)) (layer "${(flip ? "B.SilkS" : "F.SilkS")}") )`);
fp.push(`(fp_line (start 0.5 ${flipN(flip, 0.4996)}) (end 0.5 ${flipN(flip, -0.5004)}) (stroke (width 0.15) (type solid)) (layer "${(flip ? "B.SilkS" : "F.SilkS")}") )`);
fp.push(`(fp_line (start 0.5 ${flipN(flip, 0.5)}) (end -0.4 ${flipN(flip, 0)}) (stroke (width 0.15) (type solid)) (layer "${(flip ? "B.SilkS" : "F.SilkS")}") )`);

// 3D Models
fp.push(`(model "Diodes_SMD.3dshapes/SMB_Handsoldering.wrl" (offset (xyz 0 0 0)) (scale (xyz 0.22 0.15 0.15)) (rotate (xyz 0 0 180)))`);

// Properties
// fp.push(`(property "Reference" "D13" (at 0 ${flipN(flip, 1.397)} ${flipR(flip, p.r + 180) % 180}) (layer "${(flip ? "B.Fab" : "F.Fab")}") (hide yes)  (effects (font (size 0.5 0.5) (thickness 0.125)) (justify${ flip ? " mirror" : ""})))`);
// fp.push(`(property "Value" " 1N4148W" (at 0 ${flipN(flip, -1.397)} ${flipR(flip, p.r + 180) % 180}) (layer "${(flip ? "B.Fab" : "F.Fab")}") (hide yes)  (effects (font (size 0.5 0.5) (thickness 0.125)) (justify${ flip ? " mirror" : ""})))`);
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

