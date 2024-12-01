import { useLocation } from 'react-router-dom';

export default function Submissions() {
  const location = useLocation();
  const selectedCards = location.state?.selectedCards || [];

  return (
    <div className="min-h-screen bg-gradient-to-b from-teal-800 via-purple-900 to-pink-900 bg-cover bg-fixed animate-gradient-x pb-20">
      <h1 className="text-4xl text-white bg-slate-400 font-bold p-4">
        Your Selected Cards
      </h1>
      <div className="grid grid-cols-4 gap-4 p-4 rounded-lg md:mx-[20vw] mt-20 bg-slate-300">
        {selectedCards.map((image, index) => (
          <div key={index} className="flex flex-col items-center rounded-lg">
            <img
              src={image}
              alt={image.split("Card")[0]}
              className="w-full h-auto object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
