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
            map: null
        }
    },
    mounted() {
        let _self = this
        GoogleMapsLoader.KEY = process.env.GOOGLE_MAPS_API
        GoogleMapsLoader.LANGUAGE = 'ja'
        GoogleMapsLoader.LIBRARIES = ['geometry', 'places']
        GoogleMapsLoader.load(function(google) {
            _self.map = new google.maps.Map(document.getElementById('map'), {
                zoom: 20,
                center: new google.maps.LatLng(35.681167, 139.767052)
            })
        })
    }
}
</script>

<style scoped>
#map {
  height: 300px;
}

</style>
