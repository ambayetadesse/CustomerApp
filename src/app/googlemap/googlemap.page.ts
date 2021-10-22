import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { NativeGeocoder, NativeGeocoderResult, NativeGeocoderOptions } from '@ionic-native/native-geocoder/ngx';

declare var google;
@Component({
  selector: 'app-googlemap',
  templateUrl: './googlemap.page.html',
  styleUrls: ['./googlemap.page.scss'],
})
export class GooglemapPage implements OnInit {
  @ViewChild('map',{read:ElementRef,static:false}) mapElement: ElementRef;
  mapLoaded: boolean;
  map: google.maps.Map;
  center: google.maps.LatLngLiteral;

  source: google.maps.LatLngLiteral;
  destination: google.maps.LatLngLiteral;

  options: google.maps.MapOptions = {
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    scrollwheel: true,
    disableDefaultUI: true,
    disableDoubleClickZoom: true,
    zoom: 12
  }

  ds: google.maps.DirectionsService;
  dr: google.maps.DirectionsRenderer;

  ngOnInit() {
    this.ds = new google.maps.DirectionsService();
    this.dr = new google.maps.DirectionsRenderer({
      map: null,
      suppressMarkers: true
    });

    navigator.geolocation.getCurrentPosition(position => {

      this.source = {
        lat: 9.011616509138298,
        lng: 38.73706935882969
      };

      this.destination = {
        lat: 8.98339179692712,
        lng: 38.773790006329726
      };

      // initialize the map container
      this.map = new google.maps.Map(document.getElementById('map-canvas'), {
        ...this.options,
        center: this.source
      });

      this.map.addListener('tilesloaded', () => {
        this.mapLoaded = true;
      });

      // adding a marker
      var markerStart = new google.maps.Marker({
        position: this.source,
        icon: {
          url: './assets/imgs/truck_pin.svg',
          anchor: new google.maps.Point(35,10),
          scaledSize: new google.maps.Size(100, 100)
        },
        map: this.map
      });

      var destinationMarker = new google.maps.Marker({
        position: this.destination,
        icon: {
          url: './assets/imgs/destination_custom_pin.svg',
          anchor: new google.maps.Point(35,10),
          scaledSize: new google.maps.Size(100, 100)
        },
        map: this.map
      });

      this.setRoutePolyline();
    });
  }

  setRoutePolyline() {
    let request = {
      origin: this.source,
      destination: this.destination,
      travelMode: google.maps.TravelMode.DRIVING
    };

    this.ds.route(request, (response, status) => {
      this.dr.setOptions({
        suppressPolylines: false,
        map: this.map
      });

      if (status == google.maps.DirectionsStatus.OK) {
        this.dr.setDirections(response);
      }
    })
  }
  backToHome() {
    // this.router.navigate(["/menu/" + this.status]);
  }
}
