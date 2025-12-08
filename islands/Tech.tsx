export default function Tech() {

    return (
<section id="projects" class="py-24 bg-gray-950 text-white">
  <div class="container mx-auto px-6 lg:px-16 text-center">
    <h2 class="text-4xl font-bold mb-4 text-yellow-400">My Projects</h2>
    <p class="text-gray-400 mb-12">
        A showcase of my recent work and creations in web and app development.
    </p>

    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
      {/* Project 1 */}
      <div class="bg-gray-900 rounded-2xl overflow-hidden shadow-lg hover:scale-[1.02] transition-all">
        <img
          src="./dhammapada.png"
          alt="Dhammapada"
          class="w-full  object-cover"
        />
        <div class="p-6 text-left">
          <h3 class="text-2xl font-semibold mb-2 text-yellow-400">
            Dhammapada
          </h3>
          <p class="text-gray-400 text-sm mb-4">
            Dhammapada app with react, API, android and iOS support.
          </p>
          <a
            href="https://github.com/xiaoyuanlv/dhammapada" target="_blank"
            class="inline-block px-5 py-2 bg-yellow-600 hover:bg-indigo-700 rounded-xl font-medium transition-all"
          >
            View on Github
          </a>
        </div>
      </div>

      {/* Project 2 */}
      <div class="bg-gray-900 rounded-2xl overflow-hidden shadow-lg hover:scale-[1.02] transition-all">
        <img
          src="./planetz.png"
          alt="Planetz"
          class="w-full object-cover"
        />
        <div class="p-6 text-left">
          <h3 class="text-2xl font-semibold mb-2 text-yellow-400">
            Planetz
          </h3>
          <p class="text-gray-400 text-sm mb-4">
            Info about the eight known planets of the Solar System and facts.
          </p>
          <a
            href="https://github.com/xiaoyuanlv/planetz" target="_blank"
            class="inline-block px-5 py-2 bg-yellow-600 hover:bg-indigo-700 rounded-xl font-medium transition-all"
          >
            View on Github
          </a>
        </div>
      </div>

      {/* Project 3 */}
      <div class="bg-gray-900 rounded-2xl overflow-hidden shadow-lg hover:scale-[1.02] transition-all">
        <img
          src="./movie.png"
          alt="My Portfolio"
          class="w-full h-90 object-cover"
        />
        <div class="p-6 text-left">
          <h3 class="text-2xl font-semibold mb-2 text-yellow-400">
            Movie List
          </h3>
          <p class="text-gray-400 text-sm mb-4">
            A dark-themed portfolio showcasing design, coding, and creativity with React.
          </p>
          <a
            href="https://moviesearch-xylv.web.app/" target="_blank"
            class="inline-block px-5 py-2 bg-yellow-600 hover:bg-indigo-700 rounded-xl font-medium transition-all"
          >
            View Live
          </a>
        </div>
      </div>


      {/* Project 4 */}
      <div class="bg-gray-900 rounded-2xl overflow-hidden shadow-lg hover:scale-[1.02] transition-all">
        <img
          src="./lunastay.png"
          alt="Planetz"
          class="w-[400px] h-[200px] object-cover"
        />
        <div class="p-6 text-left">
          <h3 class="text-2xl font-semibold mb-2 text-yellow-400">
            Hotel LunaStay
          </h3>
          <p class="text-gray-400 text-sm mb-4">
            A modern hotel reservation template built with PHP Admin and Express API with mobile android.
          </p>
          <a
            href="https://drive.google.com/file/d/1AodkAeaWQ5UwvpdyGAuWg59wEolgDFPR/view?usp=sharing" target="_blank"
            class="inline-block px-5 py-2 bg-yellow-600 hover:bg-indigo-700 rounded-xl font-medium transition-all"
          >
            View Source Code
          </a>
        </div>
      </div>

      {/* Project 5 */}
      <div class="bg-gray-900 rounded-2xl overflow-hidden shadow-lg hover:scale-[1.02] transition-all">
        <img
          src="./expense.png"
          alt="List"
          class="w-[400px] h-[300px] object-cover"
        />
        <div class="p-6 text-left">
          <h3 class="text-2xl font-semibold mb-2 text-yellow-400">
             List
          </h3>
          <p class="text-gray-400 text-sm mb-4">
            A simple and effective To do List application, expenese List etc. built with Flutter.
          </p>
          <a
            href="https://github.com/xiaoyuan31/flutter_projects" target="_blank"
            class="inline-block px-5 py-2 bg-yellow-600 hover:bg-indigo-700 rounded-xl font-medium transition-all"
          >
            View on Github
          </a>
        </div>
      </div>




 {/* Project 6 */}
      <div class="bg-gray-900 rounded-2xl overflow-hidden shadow-lg hover:scale-[1.02] transition-all">
        <img
          src="./weather.png"
          alt="List"
          class="w-[400px] h-[300px] object-cover"
        />
        <div class="p-6 text-left">
          <h3 class="text-2xl font-semibold mb-2 text-yellow-400">
             Weather
          </h3>
          <p class="text-gray-400 text-sm mb-4">
            A simeple weather app built with Flutter.
          </p>
          <a
            href="https://drive.google.com/file/d/1NkXkD0ZVv7-5fSHstyVr6Apo7KOuFkbg/view?usp=sharing" target="_blank"
            class="inline-block px-5 py-2 bg-yellow-600 hover:bg-indigo-700 rounded-xl font-medium transition-all"
          >
            Download Source Code
          </a>
        </div>
      </div>


    </div>
  </div>
</section>
    );
}