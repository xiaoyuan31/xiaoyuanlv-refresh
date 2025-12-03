
export default function Home() {
 
  return (
 <div class="bg-gray-900 ">
    <div class="mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 items-center px-6 py-16 lg:px-8 lg:py-24">
     <div class="max-w-xl">
      <img src="./clabsnight.png" alt="Clabs Night Working" />
    </div>
    
    <div class="max-w-xl lg:mx-auto lg:pl-8">
      <h2 class="text-3xl font-semibold tracking-tight text-pretty text-white sm:text-4xl">Home</h2>
      <p class="mt-6 text-lg/8 text-gray-400">This is my home of creativity</p>
      <ul>
        <li class="mt-4 text-gray-400">🏠 Welcome to my digital abode, where creativity meets code.</li>
        <li class="mt-4 text-gray-400">📍 Location: Yangon, Myanmar</li>
        <li class="mt-4 text-gray-400">💼 Profession: Mobile App Developer</li>
        {/* <li class="mt-4 text-gray-400">🌐 Languages: JavaScript, PHP, HTML, CSS, Android</li> */}
        <li class="mt-4 text-gray-400">📫 Contact: xiaoyuan.drhorse@gmail.com </li>
        <li class="mt-4 text-gray-400">🔗 Socials: GitHub</li>
        <li class="mt-4 text-gray-400">🌐 Website: www.xiaoyuanlv.com</li>
        <li class="mt-4 text-gray-400">🎉 Fun Fact: I love stargazing and coding under the night sky.</li>
        <li class="mt-4 text-gray-400">🎨 Favorite Tech: React, Fresh, Deno, Nodejs, Tailwindcss</li>
        </ul>
    </div>
   
  </div>
</div>
  );

}