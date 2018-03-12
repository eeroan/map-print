const params = new URL(document.location).searchParams
const x = +params.get('x') || 4173
const y = +params.get('y') || 3155
const width = +params.get('w') || 15
const height = +params.get('h') || 15
document.title = `x:${x} y:${y}, w:${width}, h:${height}`
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
        fragment.appendChild(createImg(x + col - Math.floor(width / 2), y + row - Math.floor(height / 2))))
})

new URL(document.location)
document.getElementById('map').appendChild(fragment)

