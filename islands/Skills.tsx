
export default function Skills() {
 
  return (
  <section id="skills" class="py-24 bg-gray-900 text-white">
  <div class="container mx-auto px-6 lg:px-16 text-center">
    <h2 class="text-4xl font-bold mb-4 text-gold-400">Tech Stack & Skills</h2>
    <p class="text-gray-400 mb-12 max-w-2xl mx-auto">
      Tools and technologies I use to turn ideas into digital experiences.
    </p>

    {/* Skills Grid */}
    <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8 justify-items-center">
      {/* Row 1 */}
      <div class="bg-gray-800 neon rounded-2xl px-6 py-6 flex flex-col items-center shadow-lg hover:scale-105 transition-all">
        <img src="./kotlin.png" alt="Kotlin" class="w-10 h-10 mb-3" />
        <p class="text-gray-300 font-semibold">Kotlin</p>
      </div>

      <div class="bg-gray-800 neon rounded-2xl px-6 py-6 flex flex-col items-center shadow-lg hover:scale-105 transition-all">
        <img src="./php.png" alt="PHP" class="w-10 h-10 mb-3" />
        <p class="text-gray-300 font-semibold">PHP</p>
      </div>

      <div class="bg-gray-800 neon rounded-2xl px-6 py-6 flex flex-col items-center shadow-lg hover:scale-105 transition-all">
        <img src="./mysql.jpeg" alt="MySQL" class="w-10 h-10 mb-3" />
        <p class="text-gray-300 font-semibold">MySQL</p>
      </div>

      <div class="bg-gray-800  neon rounded-2xl px-6 py-6 flex flex-col items-center shadow-lg hover:scale-105 transition-all">
        <img src="./tailwind.png" alt="TailwindCSS" class="w-10 h-10 mb-3" />
        <p class="text-gray-300 font-semibold">TailwindCSS</p>
      </div>

      <div class="bg-gray-800 neon rounded-2xl px-6 py-6 flex flex-col items-center shadow-lg hover:scale-105 transition-all">
        <img src="./deno.svg" alt="Fresh / Deno" class="w-10 h-10 mb-3" />
        <p class="text-gray-300 font-semibold">Fresh / Deno</p>
      </div>

      {/* Row 2 */}
      <div class="bg-gray-800 neon rounded-2xl px-6 py-6 flex flex-col items-center shadow-lg hover:scale-105 transition-all">
        <img src="./react.png" alt="Java" class="w-10 h-10 mb-3" />
        <p class="text-gray-300 font-semibold">React</p>
      </div>

      <div class="bg-gray-800 neon rounded-2xl px-6 py-6 flex flex-col items-center shadow-lg hover:scale-105 transition-all">
        <img src="./javascript.png" alt="JavaScript" class="w-10 h-10 mb-3" />
        <p class="text-gray-300 font-semibold">JavaScript</p>
      </div>

      <div class="bg-gray-800 neon rounded-2xl px-6 py-6 flex flex-col items-center shadow-lg hover:scale-105 transition-all">
        <img src="./java.png" alt="Git" class="w-10 h-10 mb-3" />
        <p class="text-gray-300 font-semibold">Java</p>
      </div>

      <div class="bg-gray-800 neon rounded-2xl px-6 py-6 flex flex-col items-center shadow-lg hover:scale-105 transition-all">
        <img src="./android.png" alt="Android" class="w-10 h-10 mb-3" />
        <p class="text-gray-300 font-semibold">Android</p>
      </div>

      <div class="bg-gray-800 neon rounded-2xl px-6 py-6 flex flex-col items-center shadow-lg hover:scale-105 transition-all">
        <img src="./swift.png" alt="Swift" class="w-10 h-10 mb-3" />
        <p class="text-gray-300 font-semibold">Swift</p>
      </div>
    </div>

    <p class="text-gray-500 mt-12 text-sm">
      Constantly exploring new technologies — currently diving deeper into Deno Fresh & AI integration.
    </p>
  </div>
</section>
  );

}