<template>
    <div id="map"></div>
</template>

<script>
import GoogleMapsLoader from 'google-maps'

export default {
    // HACK mapのサイズを外部から変更できるように
    props: {
        center: {
            latitude: Number,
            longitude: Number
        }
    },
    data() {
        return {
        }
    },
    mounted() {
        GoogleMapsLoader.KEY = process.env.GOOGLE_MAPS_API
        GoogleMapsLoader.LANGUAGE = 'ja'
        GoogleMapsLoader.LIBRARIES = ['geometry', 'places']
        GoogleMapsLoader.load(function(google) {
            window.google = google
            window.map = new google.maps.Map(document.getElementById('map'), {
                zoom: 20,
                center: new google.maps.LatLng(35.681167, 139.767052)
            })
        })
    },
    watch: {
        center: (center) => {
            const latlng = new window.google.maps.LatLng(center.latitude, center.longitude)
            window.map.setCenter(latlng)
        }
    },
}
</script>

<style scoped>
#map {
  height: 300px;
}

</style>
