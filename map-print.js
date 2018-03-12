const params = new URL(document.location).searchParams
const x = +params.get('x') || 4173
const y = +params.get('y') || 3155
const width = +params.get('w') || 15
const height = +params.get('h') || 15
document.title = `x:${x} y:${y}, w:${width}, h:${height}`
//https://karttamoottori.maanmittauslaitos.fi/maasto/wmts/1.0.0/maastokartta/default/ETRS-TM35FIN/15/12611/16678.png
const maanmittauslaitos = (row, col) => `https://karttamoottori.maanmittauslaitos.fi/maasto/wmts/1.0.0/maastokartta/default/ETRS-TM35FIN/13/${row}/${col}.png`
const reittikartta = (row, col) => `https://retkikartta.fi/wmts/30c616a00f157e7357721900e8b0415c/?SERVICE=WMTS&REQUEST=GetTile&VERSION=1.0.0&` +
    `LAYER=maastokartta&STYLE=default&TILEMATRIXSET=ETRS-TM35FIN&TILEMATRIX=13&TILEROW=${row}&TILECOL=${col}&FORMAT=image%2Fpng`
const createImg = (col, row) => Object.assign(document.createElement('img'), {
    src: maanmittauslaitos(row, col),
    style: 'width: ' + (100 / width) + '%'
})
const range = amount => Array.from(Array(amount)).map((a, b) => b)

const map = document.getElementById('map')
const throttledFor = (items, fn, delay = 100) => {
    const callItemWithIndex = (items, fn, i) => {
        if (i <= items.length - 1) {
            fn(items[i])
            setTimeout(() => callItemWithIndex(items, fn, i + 1), delay)
        }
    }
    callItemWithIndex(items, fn, 0)
}

throttledFor(range(height), row => {
    map.appendChild(document.createElement('br'))
    range(width).forEach(col =>
        map.appendChild(createImg(x + col - Math.floor(width / 2), y + row - Math.floor(height / 2))))
})

