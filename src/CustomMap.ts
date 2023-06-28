import { Mappable } from './interfaces/Mappable';

export class CustomMap {
  private googleMap: google.maps.Map;

  constructor(divId: string) {
    const mapElement = document.getElementById(divId);
    const mapOptions: google.maps.MapOptions = {
      zoom: 1,
      center: {
        lat: 0,
        lng: 0,
      },
    };

    this.googleMap = new google.maps.Map(mapElement as HTMLElement, mapOptions);
  }

  addMarker(mappable: Mappable): void {
    const markerOptions: google.maps.MarkerOptions = {
      map: this.googleMap,
      position: {
        lat: mappable.location.lat,
        lng: mappable.location.lng,
      },
    };

    const marker = new google.maps.Marker(markerOptions);

    marker.addListener('click', () => {
      const infoWindow = new google.maps.InfoWindow({
        content: mappable.markerContent(),
      });
      infoWindow.open(this.googleMap, marker);
    });
  }
}
export { Mappable };

