module.exports = {
  params: {
    designator: 'XX',
    side: 'F',
    from: { type: 'net', value: undefined },
    to: { type: 'net', value: undefined },
  },
  body: p => {
    const fp = [];
    const flip = p.side === "B";
if (!flip && p.side !== "F") throw new Error('unsupported side: ' + p.side);

fp.push(`(footprint "diode_tht"`);
fp.push(`(at ${p.x} ${p.y} ${flipR(flip, p.r)})`);
fp.push(`(layer "${(flip ? "B.Cu" : "F.Cu")}")`);
fp.push(`(property "Reference" "${p.ref}" ${p.ref_hide} (at 0 0 ${flipR(flip, p.r) % 180}) (layer "${p.side}.SilkS") (effects (font (size 1 1) (thickness 0.15))${ p.side === "B" ? " (justify mirror)" : ""}))`);
fp.push(`(property "Value" "" hide (at 0 0 ${flipR(flip, p.r) % 180}) (layer "${p.side}.Fab") (effects (font (size 1 1) (thickness 0.15))${ p.side === "B" ? " (justify mirror)" : ""}))`);
fp.push(`(property "Datasheet" "" hide (at 0 0 ${flipR(flip, p.r) % 180}) (layer "${p.side}.Fab") (effects (font (size 1 1) (thickness 0.15))${ p.side === "B" ? " (justify mirror)" : ""}))`);
fp.push(`(property "Description" "" hide (at 0 0 ${flipR(flip, p.r) % 180}) (layer "${p.side}.Fab") (effects (font (size 1 1) (thickness 0.15))${ p.side === "B" ? " (justify mirror)" : ""}))`);

// Unknown to kicad2ergogen
fp.push(`(embedded_fonts no)`);

// Pads
fp.push(`(pad "1" thru_hole circle (at -3.81 ${flipN(flip, 0)} ${flipR(flip, p.r + 180)}) (size 1.905 1.905) (drill 0.9906) (layers "*.Cu" "*.Mask") (remove_unused_layers no)  ${p.from})`);
fp.push(`(pad "1" smd custom (at -1.775 ${flipN(flip, 0.0004)} ${flipR(flip, p.r + 180)}) (size 0.95 0.95) (layers "${(flip ? "B" : "F")}.Cu" "${(flip ? "B" : "F")}.Mask" "${(flip ? "B" : "F")}.Paste") (thermal_bridge_angle 90) (options (clearance outline) (anchor circle)) (primitives (gr_poly (pts (xy -0.65 ${flipN(flip, -0.2375)}) (xy -0.631921 ${flipN(flip, -0.328387)}) (xy -0.580438 ${flipN(flip, -0.405438)}) (xy -0.503387 ${flipN(flip, -0.456921)}) (xy -0.4125 ${flipN(flip, -0.475)}) (xy 0.4125 ${flipN(flip, -0.475)}) (xy 0.503387 ${flipN(flip, -0.456921)}) (xy 0.580438 ${flipN(flip, -0.405438)}) (xy 0.631921 ${flipN(flip, -0.328387)}) (xy 0.65 ${flipN(flip, -0.2375)}) (xy 0.65 ${flipN(flip, 0.2375)}) (xy 0.631921 ${flipN(flip, 0.328387)}) (xy 0.580438 ${flipN(flip, 0.405438)}) (xy 0.503387 ${flipN(flip, 0.456921)}) (xy 0.4125 ${flipN(flip, 0.475)}) (xy -0.4125 ${flipN(flip, 0.475)}) (xy -0.503387 ${flipN(flip, 0.456921)}) (xy -0.580438 ${flipN(flip, 0.405438)}) (xy -0.631921 ${flipN(flip, 0.328387)}) (xy -0.65 ${flipN(flip, 0.2375)})) (width 0) (fill yes)) (gr_line (start 0 ${flipN(flip, 0)}) (end 1.225 ${flipN(flip, 0.0004)}) (width 0.3)))  ${p.from})`);
fp.push(`(pad "2" smd custom (at 1.775 ${flipN(flip, 0)} ${flipR(flip, p.r + 180)}) (size 0.95 0.95) (layers "${(flip ? "B" : "F")}.Cu" "${(flip ? "B" : "F")}.Mask" "${(flip ? "B" : "F")}.Paste") (thermal_bridge_angle 90) (options (clearance outline) (anchor circle)) (primitives (gr_poly (pts (xy -0.65 ${flipN(flip, -0.2375)}) (xy -0.631921 ${flipN(flip, -0.328387)}) (xy -0.580438 ${flipN(flip, -0.405438)}) (xy -0.503387 ${flipN(flip, -0.456921)}) (xy -0.4125 ${flipN(flip, -0.475)}) (xy 0.4125 ${flipN(flip, -0.475)}) (xy 0.503387 ${flipN(flip, -0.456921)}) (xy 0.580438 ${flipN(flip, -0.405438)}) (xy 0.631921 ${flipN(flip, -0.328387)}) (xy 0.65 ${flipN(flip, -0.2375)}) (xy 0.65 ${flipN(flip, 0.2375)}) (xy 0.631921 ${flipN(flip, 0.328387)}) (xy 0.580438 ${flipN(flip, 0.405438)}) (xy 0.503387 ${flipN(flip, 0.456921)}) (xy 0.4125 ${flipN(flip, 0.475)}) (xy -0.4125 ${flipN(flip, 0.475)}) (xy -0.503387 ${flipN(flip, 0.456921)}) (xy -0.580438 ${flipN(flip, 0.405438)}) (xy -0.631921 ${flipN(flip, 0.328387)}) (xy -0.65 ${flipN(flip, 0.2375)})) (width 0) (fill yes)) (gr_line (start 0 ${flipN(flip, 0)}) (end -1.225 ${flipN(flip, -0.0004)}) (width 0.3)))  ${p.to})`);
fp.push(`(pad "2" thru_hole rect (at 3.81 ${flipN(flip, 0)} ${flipR(flip, p.r + 180)}) (size 1.778 1.778) (drill 0.9906) (layers "*.Cu" "*.Mask") (remove_unused_layers no)  ${p.to})`);

// Drawings on F.SilkS
fp.push(`(fp_line (start -0.25 ${flipN(flip, -0.4)}) (end -0.25 ${flipN(flip, 0.4)}) (stroke (width 0.1) (type solid)) (layer "${(flip ? "B.SilkS" : "F.SilkS")}") )`);
fp.push(`(fp_line (start -0.25 ${flipN(flip, 0)}) (end -0.75 ${flipN(flip, 0)}) (stroke (width 0.1) (type solid)) (layer "${(flip ? "B.SilkS" : "F.SilkS")}") )`);
fp.push(`(fp_line (start -0.25 ${flipN(flip, 0.4)}) (end 0.35 ${flipN(flip, 0)}) (stroke (width 0.1) (type solid)) (layer "${(flip ? "B.SilkS" : "F.SilkS")}") )`);
fp.push(`(fp_line (start 0.35 ${flipN(flip, 0)}) (end -0.25 ${flipN(flip, -0.4)}) (stroke (width 0.1) (type solid)) (layer "${(flip ? "B.SilkS" : "F.SilkS")}") )`);
fp.push(`(fp_line (start 0.35 ${flipN(flip, 0)}) (end 0.35 ${flipN(flip, -0.549999)}) (stroke (width 0.1) (type solid)) (layer "${(flip ? "B.SilkS" : "F.SilkS")}") )`);
fp.push(`(fp_line (start 0.35 ${flipN(flip, 0)}) (end 0.35 ${flipN(flip, 0.55)}) (stroke (width 0.1) (type solid)) (layer "${(flip ? "B.SilkS" : "F.SilkS")}") )`);
fp.push(`(fp_line (start 0.75 ${flipN(flip, 0)}) (end 0.35 ${flipN(flip, 0)}) (stroke (width 0.1) (type solid)) (layer "${(flip ? "B.SilkS" : "F.SilkS")}") )`);
fp.push(`(fp_line (start 0.85 ${flipN(flip, 0.75)}) (end 2.7 ${flipN(flip, 0.75)}) (stroke (width 0.15) (type solid)) (layer "${(flip ? "B.SilkS" : "F.SilkS")}") )`);
fp.push(`(fp_line (start 2.7 ${flipN(flip, -0.75)}) (end 0.85 ${flipN(flip, -0.75)}) (stroke (width 0.15) (type solid)) (layer "${(flip ? "B.SilkS" : "F.SilkS")}") )`);
fp.push(`(fp_line (start 2.7 ${flipN(flip, 0.75)}) (end 2.7 ${flipN(flip, -0.75)}) (stroke (width 0.15) (type solid)) (layer "${(flip ? "B.SilkS" : "F.SilkS")}") )`);

// Properties
// fp.push(`(property "Reference" "D14" (at 0 ${flipN(flip, 0)} ${flipR(flip, p.r + 180) % 180}) (layer "${(flip ? "B.SilkS" : "F.SilkS")}") (hide yes)  (effects (font (size 1 1) (thickness 0.15)) (justify${ flip ? "" : " mirror"})))`);
// fp.push(`(property "Value" "" (at 0 ${flipN(flip, 0)} ${flipR(flip, p.r + 0) % 180}) (layer "${(flip ? "F.Fab" : "B.Fab")}")  (effects (font (size 1.27 1.27) (thickness 0.15)) (justify${ flip ? "" : " mirror"})))`);
// fp.push(`(property "Datasheet" "" (at 0 ${flipN(flip, 0)} ${flipR(flip, p.r + 180) % 180}) (layer "${(flip ? "F.Fab" : "B.Fab")}") (hide yes)  (effects (font (size 1.27 1.27) (thickness 0.15)) (justify${ flip ? "" : " mirror"})))`);
// fp.push(`(property "Description" "" (at 0 ${flipN(flip, 0)} ${flipR(flip, p.r + 180) % 180}) (layer "${(flip ? "F.Fab" : "B.Fab")}") (hide yes)  (effects (font (size 1.27 1.27) (thickness 0.15)) (justify${ flip ? "" : " mirror"})))`);

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

