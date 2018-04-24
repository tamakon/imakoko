<template>
    <div id="map"></div>
</template>

<script>
import GoogleMapsLoader from 'google-maps'

export default {
    props: {
        center: {
            latitude: Number,
            longitude: Number
        }
    },
    data() {
        return {
            map: null
        }
    },
    mounted() {
        GoogleMapsLoader.KEY = ''
        GoogleMapsLoader.LANGUAGE = 'ja'
        GoogleMapsLoader.LIBRARIES = ['geometry', 'places']
        GoogleMapsLoader.load(function(google) {
            this.map = new google.maps.Map(document.getElementById('map'), {
                zoom: 15,
                center: new google.maps.LatLng(35.681167, 139.767052)
            })
        })
    }
}
</script>
