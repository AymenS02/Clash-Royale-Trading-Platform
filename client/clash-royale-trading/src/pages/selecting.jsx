import cardsList from '../data/cardsList.json';
import { useNavigate } from 'react-router-dom'; // Updated import
import { useState } from 'react';

export default function Selecting() {
  const [selectedCards, setSelectedCards] = useState({});
  const navigate = useNavigate(); // Updated to useNavigate()

  // Function to toggle the selection state of a specific card
  const handleClick = (index) => {
    setSelectedCards((prevState) => ({
      ...prevState,
      [index]: !prevState[index], // Toggle the selected state of the clicked card
    }));
  };

  // Function to handle submit button click
  const handleSubmit = () => {
    const selectedCardsList = Object.keys(selectedCards)
      .filter((key) => selectedCards[key])
      .map((key) => cardsList[parseInt(key)]);

    // Use navigate() to programmatically navigate to the submissions page
    navigate('/submissions', { state: { selectedCards: selectedCardsList } });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-teal-800 via-purple-900 to-pink-900 bg-cover bg-fixed animate-gradient-x pb-20">
      <h1 className="text-4xl text-white bg-slate-400 font-bold p-4">Select your cards</h1>
      <div className="grid grid-cols-4 gap-4 p-4 rounded-lg md:mx-[20vw] mt-20 bg-slate-300">
        {cardsList.map((image, index) => (
          <div
            key={index}
            onClick={() => handleClick(index)}
            className={`flex flex-col items-center rounded-lg cursor-pointer border-2 ${
              selectedCards[index] ? 'bg-yellow-500 border-black' : 'bg-blue-500 border-white'
            } transform transition-all duration-300 ease-in-out ${
              selectedCards[index] ? 'scale-105' : 'scale-100'
            }`}
          >
            <img
              src={image}
              alt={`Card ${index + 1}`}
              className="w-full h-auto object-contain"
            />
            <div className="w-full text-center py-2 text-white font-bold">
              {selectedCards[index] ? 'Unselect' : 'Select'}
            </div>
          </div>
        ))}
      </div>

      {/* Show Submit button when cards are selected */}
      {Object.keys(selectedCards).some((key) => selectedCards[key]) && (
        <button
          onClick={handleSubmit}
          className="fixed bottom-4 right-4 bg-green-500 text-white font-bold py-2 px-4 rounded-lg shadow-lg hover:bg-green-700 transition-all duration-300"
        >
          Submit
        </button>
      )}
    </div>
  );
}
