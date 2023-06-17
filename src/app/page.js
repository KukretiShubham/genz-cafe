import Image from 'next/image';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-end bg-black">
      <div className='text-2xl text-white'>Genz Cafe</div>
      <div className="carousel carousel-end">
        <div className="relative carousel-item w-full">
          <Image
            alt="hero"
            src="https://i.ibb.co/JFzMf41/hero.jpg"
            height={573}
            width={1019}
          />
        </div>
        <p className="abosolute text-8xl text-white top-1/2 left-1/2">
        World is Crowdy!
        <br />
        So will be Virtuality
      </p>
      </div>
      <div className='italic text-6xl pt-20 text-white'>
        All you need is Genz Cafe
      </div>
      <p className="italic text-2xl pt-2 text-white">
        (A Suite of Perspective rendering Solutions)
      </p>
      <div className="grid grid-cols-2 gap-x-28 gap-y-8 md:gap-y-28 justify-end w-full max-w-4xl mt-12">
        <a href='https://www.npmjs.com/package/gez-sdk'>
        <div className="flex items-center justify-center h-full px-8 py-20 bg-gray-900 shadow rounded-2xl">
          <p className="text-4xl text-center text-white">Genz SDK</p>
        </div>
        </a>
        <p className="text-2xl text-white">
          An SDK to quickly get wallets compatible with the provided match score.
        </p>
        <a href='https://landing-page-dodao.vercel.app/'>
        <div className="flex items-center justify-center h-full px-8 py-20 bg-gray-900 shadow rounded-2xl">
          <p className="text-4xl text-center text-white">Customizable virtual spaces</p>
        </div>
        </a>
        <p className="text-2xl text-white">
          Virtual Spaces that can be customized according to your preferences.
        </p>
        <div className="flex items-center justify-center h-full px-8 py-20 bg-gray-900 shadow rounded-2xl">
          <p className="text-4xl text-white">genEngine</p>
        </div>
        <p className="text-2xl text-white">
          A powerful perspective rendering engine that can power your game rendering logic
        </p>
      </div>
      <div className="flex flex-col items-center justify-end w-full max-w-4xl mt-12">
        <p className="w-32 h-16 text-4xl text-white">Team</p>
        <div className="flex flex-row space-x-4 mt-4">
          <div className="flex flex-col items-center">
            <Image
              className="w-40 h-40 rounded-full"
              src="https://avatars.githubusercontent.com/u/57281769?v=4"
              alt="team-member"
              width={288}
              height={288}
            />
            <p className="mt-4 text-2xl text-white">Shubham Kukreti</p>
          </div>
          <div className="flex flex-col items-center">
            <Image
              className="w-40 h-40 rounded-full"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/ChatGPT_logo.svg/240px-ChatGPT_logo.svg.png"
              alt="team-member"
              width={288}
              height={288}
            />
            <p className="mt-4 text-2xl text-center text-white">chatGPT</p>
          </div>
          <div className="flex flex-col items-center">
            <Image
              className="w-40 h-40 rounded-full"
              src="https://upload.wikimedia.org/wikipedia/commons/e/e6/Midjourney_Emblem.png"
              alt="team-member"
              width={288}
              height={288}
            />
            <p className="mt-4 text-2xl text-center text-white">Midjourney</p>
          </div>
        </div>
      </div>
      <p className="text-4xl pt-10 text-center text-white" style={{ width: 1000, height: 147 }}>
        Building with ❤️ & 🧠
      </p>
    </div>
  );
}
