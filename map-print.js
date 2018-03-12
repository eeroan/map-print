const center = [4173, 3155]
const width = 15
const height = 15
const createImg = (col, row) => Object.assign(document.createElement('img'), {
    src: `https://retkikartta.fi/wmts/30c616a00f157e7357721900e8b0415c/?SERVICE=WMTS&REQUEST=GetTile&VERSION=1.0.0&` +
    `LAYER=maastokartta&STYLE=default&TILEMATRIXSET=ETRS-TM35FIN&TILEMATRIX=13&TILEROW=${row}&TILECOL=${col}&FORMAT=image%2Fpng`,
    style: 'width: ' + (100 / width) + '%'
})
const range = amount => Array.from(Array(amount)).map((a, b) => b)
const fragment = document.createDocumentFragment()

range(height).forEach(row => {
    fragment.appendChild(document.createElement('br'))
    range(width).forEach(col =>
        fragment.appendChild(createImg(center[0] + col - Math.floor(width / 2), center[1] + row - Math.floor(height / 2))))
})


document.getElementById('map').appendChild(fragment)

