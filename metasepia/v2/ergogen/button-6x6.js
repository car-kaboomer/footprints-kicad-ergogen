module.exports = {
  params: {
    designator: 'XX',
    side: 'F',
    P1: { type: 'net', value: undefined },
    P2: { type: 'net', value: undefined },
  },
  body: p => {
    const fp = [];
    const flip = p.side === "B";
if (!flip && p.side !== "F") throw new Error('unsupported side: ' + p.side);

fp.push(`(footprint "button-6x6"`);
fp.push(`(at ${p.x} ${p.y} ${flipR(flip, p.r)})`);
fp.push(`(layer "${(flip ? "B.Cu" : "F.Cu")}")`);
fp.push(`(property "Reference" "${p.ref}" ${p.ref_hide} (at 0 0 ${flipR(flip, p.r) % 180}) (layer "${p.side}.SilkS") (effects (font (size 1 1) (thickness 0.15))${ p.side === "B" ? " (justify mirror)" : ""}))`);
fp.push(`(property "Value" "" hide (at 0 0 ${flipR(flip, p.r) % 180}) (layer "${p.side}.Fab") (effects (font (size 1 1) (thickness 0.15))${ p.side === "B" ? " (justify mirror)" : ""}))`);
fp.push(`(property "Datasheet" "" hide (at 0 0 ${flipR(flip, p.r) % 180}) (layer "${p.side}.Fab") (effects (font (size 1 1) (thickness 0.15))${ p.side === "B" ? " (justify mirror)" : ""}))`);
fp.push(`(property "Description" "" hide (at 0 0 ${flipR(flip, p.r) % 180}) (layer "${p.side}.Fab") (effects (font (size 1 1) (thickness 0.15))${ p.side === "B" ? " (justify mirror)" : ""}))`);

fp.push(`(attr through_hole)`);

// Unknown to kicad2ergogen
fp.push(`(embedded_fonts no)`);

// Pads
fp.push(`(pad "1" thru_hole circle (at -3.249999 ${flipN(flip, -2.249999)} ${flipR(flip, p.r + 180)}) (size 1.3 1.3) (drill 1) (layers "*.Cu" "*.Mask") (remove_unused_layers no) (clearance 0.15)  ${p.P1})`);
fp.push(`(pad "1" thru_hole circle (at 3.249999 ${flipN(flip, -2.249999)} ${flipR(flip, p.r + 180)}) (size 1.3 1.3) (drill 1) (layers "*.Cu" "*.Mask") (remove_unused_layers no) (clearance 0.15)  ${p.P1})`);
fp.push(`(pad "2" thru_hole circle (at -3.25 ${flipN(flip, 2.25)} ${flipR(flip, p.r + 0)}) (size 1.3 1.3) (drill 1) (layers "*.Cu" "*.Mask") (remove_unused_layers no) (clearance 0.15)  ${p.P2})`);
fp.push(`(pad "2" thru_hole circle (at 3.25 ${flipN(flip, 2.25)} ${flipR(flip, p.r + 0)}) (size 1.3 1.3) (drill 1) (layers "*.Cu" "*.Mask") (remove_unused_layers no) (clearance 0.15)  ${p.P2})`);

// Drawings on F.CrtYd
fp.push(`(fp_rect (start -3.2 ${flipN(flip, -3.2)}) (end 3.2 ${flipN(flip, 3.2)}) (stroke (width 0.2) (type solid)) (fill no) (layer "${(flip ? "B.CrtYd" : "F.CrtYd")}") )`);

// Drawings on F.SilkS
fp.push(`(fp_rect (start -3.2 ${flipN(flip, -3.2)}) (end 3.2 ${flipN(flip, 3.2)}) (stroke (width 0.2) (type solid)) (fill no) (layer "${(flip ? "B.SilkS" : "F.SilkS")}") )`);

// 3D Models
fp.push(`(model "../../../../../../Users/pluis/Documents/Magic Briefcase/Documents/KiCad/3d/AB2_TRS_3p5MM_PTH.wrl" (offset (xyz 0 0 0)) (scale (xyz 0.42 0.42 0.42)) (rotate (xyz 0 0 90)))`);

// Properties
// fp.push(`(property "Reference" "J*" (at 0 ${flipN(flip, -2)} ${flipR(flip, p.r + 0) % 180}) (layer "${(flip ? "B.Fab" : "F.Fab")}") (hide yes)  (effects (font (size 1 1) (thickness 0.15)) (justify${ flip ? " mirror" : ""})))`);
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

