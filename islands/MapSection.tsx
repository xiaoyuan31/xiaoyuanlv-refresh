import MapLeaflet from "./MapLeaflet.tsx";

export default function MapSection() {
 
  return (
<section id="map" class="py-24 bg-gray-950 text-white">
        <div class="container mx-auto px-6 lg:px-16 text-center">
          <h2 class="text-4xl font-bold mb-6 text-gold-400">Find Me</h2>
          <p class="text-gray-400 mb-10">
            Based in <span class="text-indigo-400 font-semibold">Yangon, Myanmar</span> —
            open for remote projects and collaborations.
          </p>
          <MapLeaflet />
        </div>
      </section>

  );

}