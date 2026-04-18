const WeatherLoader = () => {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen gap-6">

      <div className="relative w-24 h-24">  
        <div className="absolute top-0 left-6 w-12 h-12 bg-yellow-400 rounded-full animate-pulse shadow-lg"></div>
        <div className="absolute bottom-2 left-2 w-16 h-10 bg-white rounded-full shadow-md animate-bounce"></div>
        <div className="absolute bottom-5 left-6 w-10 h-10 bg-white rounded-full"></div>
        <div className="absolute bottom-5 left-2 w-8 h-8 bg-white rounded-full"></div>

      </div>

      <p className="text-gray-400 text-sm animate-pulse">
        Loading weather data...
      </p>

    </div>
  );
};

export default WeatherLoader;