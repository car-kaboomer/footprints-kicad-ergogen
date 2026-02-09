module.exports = {
  params: {
    designator: 'XX',
    side: 'F',
    L: { type: 'net', value: undefined },
    M: { type: 'net', value: 'BAT_P' },
    R: { type: 'net', value: 'battery' },
  },
  body: p => {
    const fp = [];
    const flip = p.side === "B";
if (!flip && p.side !== "F") throw new Error('unsupported side: ' + p.side);

fp.push(`(footprint "slider-mss22d18_rev"`);
fp.push(`(at ${p.x} ${p.y} ${flipR(flip, p.r)})`);
fp.push(`(layer "${(flip ? "B.Cu" : "F.Cu")}")`);
fp.push(`(property "Reference" "${p.ref}" ${p.ref_hide} (at 0 0 ${flipR(flip, p.r) % 180}) (layer "${p.side}.SilkS") (effects (font (size 1 1) (thickness 0.15))${ p.side === "B" ? " (justify mirror)" : ""}))`);
fp.push(`(property "Value" "" hide (at 0 0 ${flipR(flip, p.r) % 180}) (layer "${p.side}.Fab") (effects (font (size 1 1) (thickness 0.15))${ p.side === "B" ? " (justify mirror)" : ""}))`);
fp.push(`(property "Datasheet" "" hide (at 0 0 ${flipR(flip, p.r) % 180}) (layer "${p.side}.Fab") (effects (font (size 1 1) (thickness 0.15))${ p.side === "B" ? " (justify mirror)" : ""}))`);
fp.push(`(property "Description" "" hide (at 0 0 ${flipR(flip, p.r) % 180}) (layer "${p.side}.Fab") (effects (font (size 1 1) (thickness 0.15))${ p.side === "B" ? " (justify mirror)" : ""}))`);

fp.push(`(attr smd exclude_from_pos_files)`);

// Unknown to kicad2ergogen
fp.push(`(embedded_fonts no)`);

// Pads
fp.push(`(pad "1" thru_hole roundrect (at 2.5 ${flipN(flip, -3)} ${flipR(flip, p.r + 270)}) (size 1.75 1.25) (drill 0.4) (layers "*.Cu" "*.Paste" "*.Mask") (remove_unused_layers no) (roundrect_rratio 0.15) (thermal_bridge_angle 45)  ${p.R})`);
fp.push(`(pad "1" thru_hole roundrect (at 2.5 ${flipN(flip, 3)} ${flipR(flip, p.r + 270)}) (size 1.75 1.25) (drill 0.4) (layers "*.Cu" "*.Paste" "*.Mask") (remove_unused_layers no) (roundrect_rratio 0.15) (thermal_bridge_angle 45)  ${p.R})`);
fp.push(`(pad "2" thru_hole roundrect (at 0 ${flipN(flip, -3)} ${flipR(flip, p.r + 270)}) (size 1.75 1.25) (drill 0.4) (layers "*.Cu" "*.Paste" "*.Mask") (remove_unused_layers no) (roundrect_rratio 0.15) (thermal_bridge_angle 45)  ${p.M})`);
fp.push(`(pad "2" thru_hole roundrect (at 0 ${flipN(flip, 3)} ${flipR(flip, p.r + 270)}) (size 1.75 1.25) (drill 0.4) (layers "*.Cu" "*.Paste" "*.Mask") (remove_unused_layers no) (roundrect_rratio 0.15) (thermal_bridge_angle 45)  ${p.M})`);
fp.push(`(pad "3" thru_hole roundrect (at -2.5 ${flipN(flip, -3)} ${flipR(flip, p.r + 270)}) (size 1.75 1.25) (drill 0.4) (layers "*.Cu" "*.Paste" "*.Mask") (remove_unused_layers no) (roundrect_rratio 0.15) (thermal_bridge_angle 45)  ${p.L})`);
fp.push(`(pad "3" thru_hole roundrect (at -2.5 ${flipN(flip, 3)} ${flipR(flip, p.r + 270)}) (size 1.75 1.25) (drill 0.4) (layers "*.Cu" "*.Paste" "*.Mask") (remove_unused_layers no) (roundrect_rratio 0.15) (thermal_bridge_angle 45)  ${p.L})`);

// Drawings on B.SilkS
fp.push(`(fp_rect (start -4.75 ${flipN(flip, -2.25)}) (end 4.75 ${flipN(flip, 2.25)}) (stroke (width 0.2) (type default)) (fill no) (layer "${(flip ? "F.SilkS" : "B.SilkS")}") )`);
fp.push(`(fp_rect (start -4 ${flipN(flip, -1.25)}) (end 4 ${flipN(flip, 1.25)}) (stroke (width 0.2) (type default)) (fill no) (layer "${(flip ? "F.SilkS" : "B.SilkS")}") )`);
fp.push(`(fp_rect (start -3.6 ${flipN(flip, -1.05)}) (end -1.55 ${flipN(flip, 1.05)}) (stroke (width 0.1) (type default)) (fill no) (layer "${(flip ? "F.SilkS" : "B.SilkS")}") )`);

// Drawings on F.SilkS
fp.push(`(fp_rect (start -4.75 ${flipN(flip, -2.25)}) (end 4.75 ${flipN(flip, 2.25)}) (stroke (width 0.2) (type default)) (fill no) (layer "${(flip ? "B.SilkS" : "F.SilkS")}") )`);
fp.push(`(fp_rect (start -4 ${flipN(flip, -1.25)}) (end 4 ${flipN(flip, 1.25)}) (stroke (width 0.2) (type default)) (fill no) (layer "${(flip ? "B.SilkS" : "F.SilkS")}") )`);
fp.push(`(fp_rect (start -3.6 ${flipN(flip, -1.05)}) (end -1.55 ${flipN(flip, 1.05)}) (stroke (width 0.1) (type default)) (fill no) (layer "${(flip ? "B.SilkS" : "F.SilkS")}") )`);

// Properties
// fp.push(`(property "Reference" "REF**" (at -0.5 ${flipN(flip, 0)} ${flipR(flip, p.r + 90) % 180}) (unlocked yes) (layer "${(flip ? "B.SilkS" : "F.SilkS")}") (hide yes)  (effects (font (size 1 1) (thickness 0.1)) (justify${ flip ? " mirror" : ""})))`);
// fp.push(`(property "Value" "slider" (at 1 ${flipN(flip, 0)} ${flipR(flip, p.r + 90) % 180}) (unlocked yes) (layer "${(flip ? "B.Fab" : "F.Fab")}") (hide yes)  (effects (font (size 1 1) (thickness 0.15)) (justify${ flip ? " mirror" : ""})))`);
// fp.push(`(property "Datasheet" "" (at 0 ${flipN(flip, 0)} ${flipR(flip, p.r + 90) % 180}) (unlocked yes) (layer "${(flip ? "B.Fab" : "F.Fab")}") (hide yes)  (effects (font (size 1 1) (thickness 0.15)) (justify${ flip ? " mirror" : ""})))`);
// fp.push(`(property "Description" "" (at 0 ${flipN(flip, 0)} ${flipR(flip, p.r + 90) % 180}) (unlocked yes) (layer "${(flip ? "B.Fab" : "F.Fab")}") (hide yes)  (effects (font (size 1 1) (thickness 0.15)) (justify${ flip ? " mirror" : ""})))`);

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

