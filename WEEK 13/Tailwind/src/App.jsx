import "./App.css";

function App() {
  return (
    <div className="h-screen bg-blue-800 text-white">
      <div>
        <div className="flex justify-center p-15">
          <img src="./../img/camera.svg" />
          <div className="flex ml-2">
            <p className="text-blue-300">Webinar</p>.gg
          </div>
        </div>
      </div>
      <div className="flex justify-center font-bold mb-10">Verify Your Age</div>
      <div className="flex justify-center text-xs text-gray-400">
        Please confirm your birth date. This data will not be stored
      </div>
      <div className="flex justify-center ">
        <input
          className="bg-blue-400 rounded-lg border border-blue-200 px-5 py-2 my-2"
          type="date"
          placeholder="Your Birth Year"
        />
      </div>
      <div className="flex justify-center ">
        <button className="bg-gray-400 px-20 py-2 rounded-lg font-semibold mt-5 cursor-pointer">
          Continue
        </button>
      </div>
    </div>
  );
}

export default App;
