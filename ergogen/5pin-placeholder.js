module.exports = {
  params: {
    designator: 'PLACEHOLDER',
    P1: {type: 'net', value: ''},
    P2: {type: 'net', value: ''},
    P3: {type: 'net', value: ''},
    P4: {type: 'net', value: ''},
    P5: {type: 'net', value: ''}
  },
  body: p => `
    (module placeholder (layer F.Cu)
      ${p.at /* parametric position */}
    
      ${'' /* footprint reference */}
      (fp_text reference "${p.designator}" (at 0 1.5) (layer F.Fab) 
        (effects (font (size 1 1) (thickness 0.15)))
      )

      ${'' /* pin definitions */}
      (pad "1" thru_hole circle (at -1.27 -2.54) (size 1.5 1.5) (drill 0.8) (layers *.Cu *.Mask) ${p.P1.str})
      (pad "2" thru_hole circle (at 1.27 -2.54) (size 1.5 1.5) (drill 0.8) (layers *.Cu *.Mask) ${p.P2.str})
      (pad "3" thru_hole circle (at -1.27 0) (size 1.5 1.5) (drill 0.8) (layers *.Cu *.Mask) ${p.P3.str})
      (pad "4" thru_hole circle (at 1.27 0) (size 1.5 1.5) (drill 0.8) (layers *.Cu *.Mask) ${p.P4.str})
      (pad "5" thru_hole circle (at 0 2.54) (size 1.5 1.5) (drill 0.8) (layers *.Cu *.Mask) ${p.P5.str})
    )
  `
}