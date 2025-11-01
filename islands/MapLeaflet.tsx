import { useEffect } from "preact/hooks";

export default function MapLeaflet() {
  return (
    <div class="w-full flex items-center justify-center mx-auto overflow-hidden" >
    <iframe src="https://www.openstreetmap.org/export/embed.html?bbox=96.0,16.7,96.3,16.9&layer=mapnik"></iframe>
    </div>
  );
}