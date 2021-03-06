export const attachShadow = (node) => {
    try {
        if (node.attachShadow) {
            const shadow = node.attachShadow({mode: 'open'})
            return shadow
        }
    } catch (e) {}
    return node
}

export const applyStyles = (node, styles) => Object
    .keys(styles)
    .forEach(key => (node.style[key] = styles[key]))


export function generateUUID() {
    let d = new Date().getTime()
    if (typeof performance !== 'undefined' && typeof performance.now === 'function') {
        d += performance.now() // use high-precision timer if available
    }
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => {
        let r = (d + Math.random() * 16) % 16 | 0
        d = Math.floor(d / 16)
        return (c === 'x'
            ? r
            : (r & 0x3) | 0x8).toString(16)
    })
}
