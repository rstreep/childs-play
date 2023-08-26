export default function ColorGame() {
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
        <header className="text-4xl font-bold mt-8">Color Guessing Game</header>
        <main className="mt-8 text-center">
        <p className="text-lg">Guess the color that matches the following:</p>
        <p className="text-2xl font-bold mt-2"></p>
        <img src="color-image.jpg" alt="Color to guess" className="mt-4" />
        <div className="mt-8 space-x-4">
        <button className={`bg- px-4 py-2 rounded text-white`}>
        {color}
        </button>
        
        </div>
        <p className="text-xl font-bold mt-6">Your score: </p>
        </main>
        </div>
        );
};