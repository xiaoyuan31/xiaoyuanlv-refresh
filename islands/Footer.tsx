export default function Footer() {

    return (

<footer id="contact" class="py-24 bg-gray-950 text-white border-t border-gray-800">
  <div class="container mx-auto px-6 lg:px-16 text-center">

    <h2 class="text-4xl font-bold mb-4 text-gold-400">Let's Connect</h2>
    <p class="text-gray-400 mb-10 max-w-xl mx-auto">
      I’m always open to creative collaborations, freelance opportunities, or just an inspiring chat.
      Let’s build something meaningful together 🌙
    </p>

    {/* Contact Links */}
    <div class="flex justify-center flex-wrap gap-6 mb-10">
      <a
        href="mailto:xiaoyuan.drhorse@gmail.com"
        class="px-5 py-3 rounded-xl bg-yellow-600 hover:bg-indigo-700 font-medium transition-all shadow-md"
      >
        ✉️ Email Me
      </a>
      <a
        href="https://github.com/xiaoyuan31"
        target="_blank"
        class="px-5 py-3 rounded-xl bg-gray-900 border border-gray-700 hover:border-gold-400 hover:text-gold-400 transition-all"
      >
        💻 GitHub
      </a>
      <a
        href="https://www.linkedin.com/in/xiaoyuanlv"
        target="_blank"
        class="px-5 py-3 rounded-xl bg-gray-900 border border-gray-700 hover:border-indigo-400 hover:text-indigo-400 transition-all"
      >
        🔗 LinkedIn
      </a>
      <a
        href="https://xiaoyuanlv.com"
        target="_blank"
        class="px-5 py-3 rounded-xl bg-gray-900 border border-gray-700 hover:border-indigo-400 hover:text-indigo-400 transition-all"
      >
        🌐 Website
      </a>
    </div>

    {/* Footer Line */}
    <div class="mt-16 border-t border-gray-800 pt-6 text-gray-500 text-sm">
      <p>
        Designed & Built by <span class="text-gold-400 font-medium">Xiao Yuan Lv</span> ✨
      </p>
      <p class="mt-2 text-gray-600">
        © {new Date().getFullYear()} All rights reserved.
      </p>
    </div>
  </div>
</footer>

    );

}