import { LMap, LTileLayer, LMarker, LTooltip, LCircle } from '@vue-leaflet/vue-leaflet';
import { Icon } from 'leaflet';
import 'leaflet/dist/leaflet.css';

delete Icon.Default.prototype._getIconUrl;
Icon.Default.mergeOptions({
	iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
	iconUrl: require('leaflet/dist/images/marker-icon.png'),
	shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});

export default defineNuxtPlugin((nuxtApp) => {
	nuxtApp.vueApp.component('LMap', LMap);
	nuxtApp.vueApp.component('LTileLayer', LTileLayer);
	nuxtApp.vueApp.component('LMarker', LMarker);
	nuxtApp.vueApp.component('LTooltip', LTooltip);
	nuxtApp.vueApp.component('LCircle', LCircle);
});
