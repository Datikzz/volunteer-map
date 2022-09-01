import { LMap, LTileLayer, LMarker, LTooltip, LCircle, LIcon } from '@vue-leaflet/vue-leaflet';
import 'leaflet/dist/leaflet.css';

// this part resolve an issue where the markers would not appear
delete LIcon.Default.prototype._getIconUrl;

export default defineNuxtPlugin((nuxtApp) => {
	nuxtApp.vueApp.component('LMap', LMap);
	nuxtApp.vueApp.component('LTileLayer', LTileLayer);
	nuxtApp.vueApp.component('LMarker', LMarker);
	nuxtApp.vueApp.component('LTooltip', LTooltip);
	nuxtApp.vueApp.component('LCircle', LCircle);
});
