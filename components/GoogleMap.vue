<template>
  <div id="map" :style="mapStyle"></div>
</template>

<script>
import GoogleMapsLoader from "google-maps";

export default {
  // HACK mapのサイズを外部から変更できるように
  props: {
    center: {
      latitude: Number,
      longitude: Number
    },
    marker: {
      latitude: Number,
      longitude: Number
    }
  },
  data() {
    return {
      map: null,
      google: null
    };
  },
  mounted() {
    GoogleMapsLoader.KEY = process.env.GOOGLE_MAPS_API;
    GoogleMapsLoader.LANGUAGE = "ja";
    GoogleMapsLoader.LIBRARIES = ["geometry", "places"];
    GoogleMapsLoader.load(this.onLoad);
  },
  methods: {
    onLoad(google) {
      console.log("onload");
      window.google = google;
      this.google = google;
      // default location at Tokyo
      const center = new google.maps.LatLng(30.681167, 139.767052);
      window.map = new google.maps.Map(document.getElementById("map"), {
        zoom: 20,
        center,
        mapTypeControl: false,
        streetViewControl: false
      });
    }
  },
  watch: {
    center: center => {
      const latlng = new window.google.maps.LatLng(
        center.latitude,
        center.longitude
      );
      window.map.setCenter(latlng);
      const myMarker = new window.google.maps.Marker({
        map: window.map,
        position: latlng,
      });
    },
    marker: marker => {
      const latlng = new window.google.maps.LatLng(
        marker.latitude,
        marker.longitude
      );
      const icon = new google.maps.MarkerImage(
        '/pin.png',
        null,
        null,
        null,
        new google.maps.Size(50,50),
      )
      const gMarker = new window.google.maps.Marker({
        map: window.map,
        position: latlng,
        icon
      });
    }
  },
  computed: {
    mapStyle: () => {
      const height = window.innerHeight * 0.8
      return {
        height: `${height}px`
      }
    }
  }
};
</script>

<style scoped>
#map {
  height: 200px;
}
</style>
