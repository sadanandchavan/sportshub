declare module 'jsvectormap' {
  interface jsVectorMapOptions {
    selector: string;
    map: string;
    markersSelectable?: boolean;
    markers?: { coords: number[] }[];
    markerStyle?: {
      initial?: { fill: string };
      hover?: { fill: string };
    };
    markerLabelStyle?: {
      initial?: {
        fontFamily: string;
        fontSize: number;
        fontWeight: number;
        fill: string;
      };
    };
  }

  export default class jsVectorMap {
    constructor(options: jsVectorMapOptions);
  }
}
