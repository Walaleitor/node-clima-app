const axios = require('axios');

const getLugarLatLng = async(direccion) => {
    let encodedUrl = encodeURI(direccion)

    let resp = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${ encodedUrl }&key=AIzaSyDzbQ_553v-n8QNs2aafN9QaZbByTyM7gQ`)

    if (resp.data.status === 'ZERO_RESULTS') {
        throw new Error(`No hay resultados para la direccion: ${direccion} `)
    }

    let location = resp.data.results[0];
    let cordenadas = location.geometry.location

    console.log('Direccion: ', location.formatted_address);
    console.log('lat: ', cordenadas.lat);
    console.log('lng: ', cordenadas.lng);

    return {
        direccion: location.formatted_address,
        lat: cordenadas.lat,
        lng: cordenadas.lng
    }

}

module.exports = {
    getLugarLatLng
}