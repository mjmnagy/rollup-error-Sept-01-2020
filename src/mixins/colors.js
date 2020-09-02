export default {
  getColor(colorx, alphax = 1, defaultx = true) {
    // change color hex to RGB
    if (/^[#]/.test(colorx)) {
      let c = this.hexToRgb(colorx)

      if (alphax == 1) {
        colorx = `rgb(${c.r},${c.g},${c.b})`
      } else {
        colorx = `rgba(${c.r},${c.g},${c.b},${alphax})`
      }
    } else if (/^rgba/.test(colorx)) {
      if (colorx.search(/.([0-9]\))$/) == -1 && !defaultx) {
        colorx = colorx.replace(/.?([0-9]\))$/, `${alphax})`)
      }
    } else if (/^(rgb)/.test(colorx)) {
      // change rgb and rgba
      if (alphax != 1) {
        colorx = colorx.replace(/^(rgb)/, `rgba`)
        colorx = colorx.replace(/\)$/, `,${alphax})`)
      }
    }
    return colorx
  },
  hexToRgb(hex) {
    // Expand shorthand form (e.g. "03F") to full form (e.g. "0033FF")
    var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i
    hex = hex.replace(shorthandRegex, function(m, r, g, b) {
      return r + r + g + g + b + b
    })

    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
    return result
      ? {
          r: parseInt(result[1], 16),
          g: parseInt(result[2], 16),
          b: parseInt(result[3], 16)
        }
      : null
  },
}
