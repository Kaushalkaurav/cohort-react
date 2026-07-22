import React from 'react'

const Home = () => {
  return (
   <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-950 via-indigo-950 to-black">

{/* Animated background */}

<div className="absolute w-96 h-96 bg-cyan-500/20 blur-[140px] rounded-full -top-20 -left-20"></div>

<div className="absolute w-96 h-96 bg-pink-500/20 blur-[150px] rounded-full bottom-0 right-0"></div>

<div className="max-w-7xl mx-auto px-6 h-screen flex items-center">

<div className="max-w-2xl">

<p className="text-cyan-400 tracking-[6px] uppercase">
New Collection
</p>

<h1 className="text-7xl font-black text-white leading-tight mt-5">
Fashion
<br />
Without
Limits
</h1>

<p className="text-xl text-gray-300 mt-8">
Upgrade your wardrobe with luxury styles,
premium accessories and exclusive collections.
</p>

<div className="flex gap-5 mt-10">

<button className="bg-white text-black px-8 py-4 rounded-full hover:scale-105 transition">
Shop Now
</button>

<button className="border border-white text-white px-8 py-4 rounded-full hover:bg-white hover:text-black transition">
Explore
</button>

</div>

</div>

</div>

</section>
  )
}

export default Home;
