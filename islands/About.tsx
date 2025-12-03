export default function About() {

    return (

<section class="py-24 bg-gray-900 text-white" id="about">
  <div class="container mx-auto px-6 lg:px-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
    
    {/* Left: Image */}
    <div class="flex justify-center">
      <img
        src="./moontree.png"
        alt="About"
        class="object-cover shadow-lg"
      />
    </div>

    {/* Right: Text */}
    <div>
      <h2 class="text-4xl font-bold mb-6 text-gold-400">
        About Me
      </h2>
       

         <div class="max-w-xl lg:mx-auto lg:pl-8">
            <ul>
                <li class="mt-4 text-gray-400">🌙 Legal Name: Seint Seint Thu</li>
                <li class="mt-4 text-gray-400">🌙 Nickname: Xiao Yuan Lv (Little Circle Like Moon)</li>
                <li class="mt-4 text-gray-400">🌙 Religion: Buddhism</li>
                <li class="mt-4 text-gray-400">🌙 Nationality: Myanmar</li>
                <li class="mt-4 text-gray-400">🌙 Race: Chinese-Myanmar</li>
                <li class="mt-4 text-gray-400">🌙 Birthday: 31st Jan 1989</li>
                <li class="mt-4 text-gray-400">🌙 Birth Place: Yangon, Myanmar</li>
                <li class="mt-4 text-gray-400">🌙 Education: B.C.Tech(Hons) UCSY. IADCS (NCC Edu)</li>
                <li class="mt-4 text-gray-400">🌙 Speak: Burmese, Chinese, English, Korean</li>
            </ul>
    </div>


     <img
        src="./star_line.png"
        alt="About"
        class="object-cover shadow-lg"
      />
</div>

  </div>
</section>
    );
}