const size = {
    mobile: '37.5em', //600px (600/16)
    tabletP: '56.25em', //900px
    tabletL: '75em', //1200px
    desktop: '112.5em' //1800px
}


export const device = {
    mobile: `(max-width: ${size.mobile})`,
    tabletP: `(max-width: ${size.tabletP})`,
    tabletL: `(max-width: ${size.tabletL}) `,
    desktop: `(min-width: ${size.desktop})`,
}