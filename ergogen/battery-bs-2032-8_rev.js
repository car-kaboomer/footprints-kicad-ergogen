// https://www.lcsc.com/datasheet/C964794.pdf
// bs-2032-8

module.exports = {
  params: {
    designator: 'CR',
    side: 'F',
    BAT_P: { type: 'net', value: 'BAT_P' },
    GND: { type: 'net', value: 'GND' },
  },
  body: p => {
    const fp = [];
    const flip = p.side === "B";
if (!flip && p.side !== "F") throw new Error('unsupported side: ' + p.side);

fp.push(`(footprint "bs-2032-8_rev"`);
fp.push(`(at ${p.x} ${p.y} ${flipR(flip, p.r)})`);
fp.push(`(layer "${(flip ? "B.Cu" : "F.Cu")}")`);
fp.push(`(property "Reference" "${p.ref}" ${p.ref_hide} (at 0 0 ${flipR(flip, p.r) % 180}) (layer "${p.side}.SilkS") (effects (font (size 1 1) (thickness 0.15))${ p.side === "B" ? " (justify mirror)" : ""}))`);
fp.push(`(property "Value" "" hide (at 0 0 ${flipR(flip, p.r) % 180}) (layer "${p.side}.Fab") (effects (font (size 1 1) (thickness 0.15))${ p.side === "B" ? " (justify mirror)" : ""}))`);
fp.push(`(property "Datasheet" "" hide (at 0 0 ${flipR(flip, p.r) % 180}) (layer "${p.side}.Fab") (effects (font (size 1 1) (thickness 0.15))${ p.side === "B" ? " (justify mirror)" : ""}))`);
fp.push(`(property "Description" "" hide (at 0 0 ${flipR(flip, p.r) % 180}) (layer "${p.side}.Fab") (effects (font (size 1 1) (thickness 0.15))${ p.side === "B" ? " (justify mirror)" : ""}))`);

fp.push(`(attr smd)`);

// Unknown to kicad2ergogen
fp.push(`(embedded_fonts no)`);

// Pads
fp.push(`(pad "1" thru_hole roundrect (at -8.8 ${flipN(flip, 0)} ${flipR(flip, p.r + 0)}) (size 4.3 2.8) (drill 1.2) (layers "*.Cu" "*.Mask") (remove_unused_layers no) (roundrect_rratio 0.15)  ${p.GND})`);
fp.push(`(pad "2" thru_hole roundrect (at 13 ${flipN(flip, 0)} ${flipR(flip, p.r + 0)}) (size 3.5 3.8) (drill 0.4) (layers "*.Cu" "*.Mask") (remove_unused_layers no) (roundrect_rratio 0.36) (chamfer_ratio 0.013) (chamfer top_left bottom_left)  ${p.BAT_P})`);

// Drawings on B.Fab
fp.push(`(fp_circle (center 0 ${flipN(flip, 0)}) (end 10 ${flipN(flip, 0)}) (stroke (width 0.1) (type solid)) (fill no) (layer "${(flip ? "F.Fab" : "B.Fab")}") )`);

// Drawings on F.Fab
fp.push(`(fp_circle (center 0 ${flipN(flip, 0)}) (end 10 ${flipN(flip, 0)}) (stroke (width 0.1) (type solid)) (fill no) (layer "${(flip ? "B.Fab" : "F.Fab")}") )`);

// Drawings on B.SilkS
fp.push(`(fp_line (start -7.9183 ${flipN(flip, -7.850033)}) (end 7.918333 ${flipN(flip, -7.85)}) (stroke (width 0.1) (type default)) (layer "${(flip ? "F.SilkS" : "B.SilkS")}") )`);
fp.push(`(fp_line (start -7.9183 ${flipN(flip, 7.85)}) (end 7.9183 ${flipN(flip, 7.85)}) (stroke (width 0.1) (type default)) (layer "${(flip ? "F.SilkS" : "B.SilkS")}") )`);
fp.push(`(fp_line (start 12.95 ${flipN(flip, -6.5)}) (end 9.059386 ${flipN(flip, -6.5)}) (stroke (width 0.1) (type default)) (layer "${(flip ? "F.SilkS" : "B.SilkS")}") )`);
fp.push(`(fp_line (start 12.95 ${flipN(flip, 6.5)}) (end 9.059386 ${flipN(flip, 6.5)}) (stroke (width 0.1) (type default)) (layer "${(flip ? "F.SilkS" : "B.SilkS")}") )`);
fp.push(`(fp_line (start 12.95 ${flipN(flip, 6.5)}) (end 12.95 ${flipN(flip, -6.5)}) (stroke (width 0.1) (type default)) (layer "${(flip ? "F.SilkS" : "B.SilkS")}") )`);
fp.push(`(fp_arc (start -7.918317 ${flipN(flip, 7.850017)}) (mid -11.15 ${flipN(flip, -0.000012)}) (end -7.9183 ${flipN(flip, -7.850033)}) (stroke (width 0.1) (type default)) (layer "${(flip ? "F.SilkS" : "B.SilkS")}") )`);
fp.push(`(fp_arc (start -6.434283 ${flipN(flip, 7.85)}) (mid -10.15 ${flipN(flip, 0)}) (end -6.434283 ${flipN(flip, -7.85)}) (stroke (width 0.1) (type solid)) (layer "${(flip ? "F.SilkS" : "B.SilkS")}") )`);
fp.push(`(fp_arc (start 6.434278 ${flipN(flip, -7.850004)}) (mid 10.15 ${flipN(flip, 0)}) (end 6.434278 ${flipN(flip, 7.850004)}) (stroke (width 0.1) (type solid)) (layer "${(flip ? "F.SilkS" : "B.SilkS")}") )`);
fp.push(`(fp_arc (start 7.918333 ${flipN(flip, -7.85)}) (mid 11.15 ${flipN(flip, 0)}) (end 7.918333 ${flipN(flip, 7.85)}) (stroke (width 0.1) (type default)) (layer "${(flip ? "F.SilkS" : "B.SilkS")}") )`);
fp.push(`(fp_text user "-" (at -10.95 ${flipN(flip, 0)} ${flipR(flip, p.r + 0) % 180}) (unlocked yes) (layer "${(flip ? "F.SilkS" : "B.SilkS")}")  (effects (font (size 2 2) (thickness 0.4) (bold yes)) (justify left${ flip ? "" : " mirror"})))`);
fp.push(`(fp_text user "cr2032" (at 0 ${flipN(flip, 0)} ${flipR(flip, p.r + 0) % 180}) (unlocked yes) (layer "${(flip ? "F.SilkS" : "B.SilkS")}")  (effects (font (size 1 1) (thickness 0.2) (bold yes)) (justify${ flip ? "" : " mirror"})))`);
fp.push(`(fp_text user "+" (at 14.75 ${flipN(flip, 0)} ${flipR(flip, p.r + 0) % 180}) (unlocked yes) (layer "${(flip ? "F.SilkS" : "B.SilkS")}")  (effects (font (size 2 2) (thickness 0.4) (bold yes)) (justify right${ flip ? "" : " mirror"})))`);

// Drawings on F.SilkS
fp.push(`(fp_line (start -7.9183 ${flipN(flip, -7.85)}) (end 7.9183 ${flipN(flip, -7.85)}) (stroke (width 0.1) (type default)) (layer "${(flip ? "B.SilkS" : "F.SilkS")}") )`);
fp.push(`(fp_line (start -7.9183 ${flipN(flip, 7.850033)}) (end 7.918333 ${flipN(flip, 7.85)}) (stroke (width 0.1) (type default)) (layer "${(flip ? "B.SilkS" : "F.SilkS")}") )`);
fp.push(`(fp_line (start 12.95 ${flipN(flip, -6.5)}) (end 9.059386 ${flipN(flip, -6.5)}) (stroke (width 0.1) (type default)) (layer "${(flip ? "B.SilkS" : "F.SilkS")}") )`);
fp.push(`(fp_line (start 12.95 ${flipN(flip, -6.5)}) (end 12.95 ${flipN(flip, 6.5)}) (stroke (width 0.1) (type default)) (layer "${(flip ? "B.SilkS" : "F.SilkS")}") )`);
fp.push(`(fp_line (start 12.95 ${flipN(flip, 6.5)}) (end 9.059386 ${flipN(flip, 6.5)}) (stroke (width 0.1) (type default)) (layer "${(flip ? "B.SilkS" : "F.SilkS")}") )`);
fp.push(`(fp_arc (start -7.9183 ${flipN(flip, 7.850033)}) (mid -11.15 ${flipN(flip, 0)}) (end -7.918317 ${flipN(flip, -7.850017)}) (stroke (width 0.1) (type default)) (layer "${(flip ? "B.SilkS" : "F.SilkS")}") )`);
fp.push(`(fp_arc (start -6.434283 ${flipN(flip, 7.85)}) (mid -10.15 ${flipN(flip, 0)}) (end -6.434283 ${flipN(flip, -7.85)}) (stroke (width 0.1) (type solid)) (layer "${(flip ? "B.SilkS" : "F.SilkS")}") )`);
fp.push(`(fp_arc (start 6.434278 ${flipN(flip, -7.850004)}) (mid 10.15 ${flipN(flip, 0)}) (end 6.434278 ${flipN(flip, 7.850004)}) (stroke (width 0.1) (type solid)) (layer "${(flip ? "B.SilkS" : "F.SilkS")}") )`);
fp.push(`(fp_arc (start 7.918333 ${flipN(flip, -7.85)}) (mid 11.15 ${flipN(flip, 0)}) (end 7.918333 ${flipN(flip, 7.85)}) (stroke (width 0.1) (type default)) (layer "${(flip ? "B.SilkS" : "F.SilkS")}") )`);
fp.push(`(fp_text user "+" (at 14.75 ${flipN(flip, 0)} ${flipR(flip, p.r + 0) % 180}) (unlocked yes) (layer "${(flip ? "B.SilkS" : "F.SilkS")}")  (effects (font (size 2 2) (thickness 0.4) (bold yes)) (justify left${ flip ? " mirror" : ""})))`);
fp.push(`(fp_text user "-" (at -10.95 ${flipN(flip, 0)} ${flipR(flip, p.r + 0) % 180}) (unlocked yes) (layer "${(flip ? "B.SilkS" : "F.SilkS")}")  (effects (font (size 2 2) (thickness 0.4) (bold yes)) (justify right${ flip ? " mirror" : ""})))`);
fp.push(`(fp_text user "cr2032" (at 0 ${flipN(flip, 0)} ${flipR(flip, p.r + 0) % 180}) (unlocked yes) (layer "${(flip ? "B.SilkS" : "F.SilkS")}")  (effects (font (size 1 1) (thickness 0.2) (bold yes)) (justify${ flip ? " mirror" : ""})))`);

// Properties
// fp.push(`(property "Reference" "REF**" (at -1.9 ${flipN(flip, -0.5)} ${flipR(flip, p.r + 0) % 180}) (unlocked yes) (layer "${(flip ? "B.SilkS" : "F.SilkS")}") (hide yes)  (effects (font (size 1 1) (thickness 0.1)) (justify${ flip ? " mirror" : ""})))`);
// fp.push(`(property "Value" "cr2032_rev" (at -1.9 ${flipN(flip, 1)} ${flipR(flip, p.r + 22.5) % 180}) (unlocked yes) (layer "${(flip ? "B.Fab" : "F.Fab")}") (hide yes)  (effects (font (size 1 1) (thickness 0.15)) (justify${ flip ? " mirror" : ""})))`);
// fp.push(`(property "Datasheet" "" (at -1.9 ${flipN(flip, 0)} ${flipR(flip, p.r + 0) % 180}) (unlocked yes) (layer "${(flip ? "B.Fab" : "F.Fab")}") (hide yes)  (effects (font (size 1 1) (thickness 0.15)) (justify${ flip ? " mirror" : ""})))`);
// fp.push(`(property "Description" "" (at -1.9 ${flipN(flip, 0)} ${flipR(flip, p.r + 0) % 180}) (unlocked yes) (layer "${(flip ? "B.Fab" : "F.Fab")}") (hide yes)  (effects (font (size 1 1) (thickness 0.15)) (justify${ flip ? " mirror" : ""})))`);

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

