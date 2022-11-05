import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OlMapComponent } from './ol-map/ol-map.component';
import { OlMapMarkerComponent } from './ol-map-marker/ol-map-marker.component';

const COMPONENTS = [
  OlMapComponent,
  OlMapMarkerComponent,
];

@NgModule({
  declarations: [
    OlMapComponent,
    OlMapMarkerComponent
  ],
  exports: [
    OlMapComponent,
    OlMapMarkerComponent
  ],
  imports: [
    CommonModule
  ]
})
export class OlMapsModule { }
