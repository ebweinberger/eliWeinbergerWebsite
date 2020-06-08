import { Injectable } from '@angular/core';

import * as speck from 'raw-loader!../assets/markdown/speckles.md';
import * as verc from 'raw-loader!../assets/markdown/vercel.md';
import * as site from 'raw-loader!../assets/markdown/thissite.md';
import * as heat from 'raw-loader!../assets/markdown/heatmap.md';

@Injectable({
  providedIn: 'root'
})
export class GetmdService {

  constructor() { }

  getMD(route: string){
    switch (route) {
      case "speckles":
        return speck.default;
        break;
      case "vercel":
        return verc.default;
        break;
      case "heatmap":
        return heat.default;
        break;
      case "thissite":
        return site.default;
        break;
      default:
        break;
    }
  }


}
