import Link from 'next/link'
import React from 'react'
import PagesMetaHead from '../components/PagesMetaHead';

const hbd = () => {
  return (
    <>
    {/* <div className='h-screen'>hbd</div> */}
	<PagesMetaHead title="Happy Birthday" />

    <section class="text-gray-600 body-font">
  <div class="container mx-auto flex px-5 py-12 items-center justify-center flex-col">
    <img class="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded" alt="hero" src="/images/gif1.gif"/>
    <div class="text-center lg:w-2/3 w-full">
      <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">🎉✨ Happy Birthday Didi🥳🎂
    </h1>
      <p class="mb-8 leading-relaxed">Click on the below button to reveal your gift !</p>
      <div class="flex justify-center">
        <Link href='/' class="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Open Gift🎂</Link>
      </div>
    </div>
  </div>
</section>
    </>
  )
}

export default hbd
