const getCSS = (variavel) => {
    const bodyStyles = getComputedStyle(document.body)
    return bodyStyles.getPropertyValue(variavel)
}

const tickConfig = {
    family: getCSS('2'),
    size: 16,
    color: getCSS('--cor-4')
}

export {getCSS, tickConfig}