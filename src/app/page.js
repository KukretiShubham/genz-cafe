
import Image from 'next/image';
// import Card from '../components/card';
// import SideForm from '@/components/sideForm'; // Updated import
// import { createContext, ContextProvider } from 'react';


export default function Home() {
  // useEffect(() => {
  //   const getENS = async () => {
  //     const queryID = 2640064;
  //     const parameters = [
  //       QueryParameter.text('Wallet Address', '0x6B2eBFe3FE5c5B84746105421de93Df383b222E8'),
  //       QueryParameter.enum('Chain', 'ethereum'),
  //     ];
  //     try {
  //       const executionResult = await client.refresh(queryID, parameters);
  //       console.log(executionResult.result?.rows);
  //     } catch (error) {
  //       console.error('Error:', error);
  //     }
  //   };

  //   getENS();
  // }, []); // Run only once on component mount

  return (
<div className="inline-flex flex-col space-y-28 items-center justify-end pt-32 pb-8 bg-black" style={{ width: 1280, height: 3698 }}>
  <div className="image-container">
    <Image alt="hero" src="https://i.ibb.co/DbFbCSP/DALL-E-2023-06-16-23-58-21-fill-the-image.png" height={563} width={1280} />
  </div>
  <p className="text-8xl text-white" style={{ width: 798, height: 374 }}>
    World is Crowdy!<br />So will be Virtuality
  </p>
  <p className="text-4xl text-white" style={{ width: 798, height: 81 }}>
    Suite of Perspective rendering Solutions
  </p>
  <div className="inline-flex space-x-28 items-center justify-end" style={{ width: 1095, height: 334 }}>
    <div className="flex items-center justify-center w-80 h-full px-28 py-28 bg-gray-900 shadow rounded-2xl">
      <p className="flex-1 h-full text-4xl text-white">Genz SDK</p>
    </div>
    <p className="text-4xl text-white" style={{ width: 653, height: 297 }}>
      An SDK to quickly get wallets compatible with the provided match score.
    </p>
  </div>
  <div className="inline-flex space-x-28 items-center justify-end" style={{ width: 1095, height: 334 }}>
    <div className="flex items-center justify-center w-80 h-full px-8 py-20 bg-gray-900 shadow rounded-2xl">
      <p className="flex-1 h-full text-4xl text-center text-white">Customizable virtual spaces</p>
    </div>
    <p className="text-4xl text-white" style={{ width: 653, height: 297 }}>
      Virtual Spaces that can be customized according to your preferences.
    </p>
  </div>
  <div className="inline-flex space-x-28 items-end justify-end" style={{ width: 1095, height: 348 }}>
    <div className="flex items-center justify-center w-80 h-80 px-28 py-32 bg-gray-900 shadow rounded-2xl">
      <p className="flex-1 h-full text-4xl text-white">SDK</p>
    </div>
    <p className="text-4xl text-white" style={{ width: 653, height: 297 }}>
      Virtual Spaces that can be easily integrated using our SDK.
    </p>
  </div>
  <div className="flex flex-col space-y-16 items-center justify-end" style={{ width: 1146, height: 535 }}>
  <p className="w-32 h-16 text-4xl text-white">Team</p>
  <div className="relative flex flex-row" style={{ width: 1146, height: 403 }}>
    <div className="team-member flex flex-col items-center">
      <img className="w-72 h-72 rounded-full" src="https://avatars.githubusercontent.com/u/57281769?v=4" alt="team-member" />
      <p className="mt-4 text-4xl text-white">Shubham Kukreti</p>
    </div>
    <div className="team-member flex flex-col items-center">
      <img className="w-72 h-72 rounded-full" src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/ChatGPT_logo.svg/240px-ChatGPT_logo.svg.png" alt="team-member" />
      <p className="mt-4 text-4xl text-center text-white">chatGPT</p>
    </div>
    <div className="team-member flex flex-col items-center">
      <img className="w-72 h-72 rounded-full" src="https://upload.wikimedia.org/wikipedia/commons/e/e6/Midjourney_Emblem.png" alt="team-member" />
      <p className="mt-4 text-4xl text-center text-white">Midjourney</p>
    </div>
  </div>
</div>

  <p className="text-8xl text-center text-white" style={{ width: 1000, height: 147 }}>
    Building with ♥️
  </p>
</div>


  );
}
