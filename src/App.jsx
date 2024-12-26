// import React, { useState, useEffect } from 'react';

// function App() {
//   function formatTime(date) {
//     const hours = String(date.getHours()).padStart(2, '0');
//     const minutes = String(date.getMinutes()).padStart(2, '0');
//     const seconds = String(date.getSeconds()).padStart(2, '0');
//     return `${hours}:${minutes}:${seconds}`;
//   }

//   const [time, setTime] = useState(new Date());

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setTime(new Date());
//     }, 1000);

//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div className="flex items-center justify-center h-screen bg-gray-100">
//       <h1 className="text-4xl font-bold text-blue-600">{formatTime(time)}</h1>
//     </div>
//   );
// }

// export default App;

// 2-masala
// import React, { useState, useEffect } from 'react';

// function CountdownTimer() {
//   const [time, setTime] = useState(0);
//   const [isRunning, setIsRunning] = useState(false);

//   useEffect(() => {
//     let interval;
//     if (isRunning && time > 0) {
//       interval = setInterval(() => {
//         setTime((prevTime) => prevTime - 1);
//       }, 1000);
//     } else if (time === 0 && isRunning) {
//       clearInterval(interval);
//       setIsRunning(false);
//     }
//     return () => clearInterval(interval);
//   }, [isRunning, time]);

//   const handleStart = () => {
//     if (time > 0) setIsRunning(true);
//   };

//   const handleInputChange = (e) => {
//     setTime(parseInt(e.target.value, 10) || 0);
//   };

//   return (
//     <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
//       <div className="flex flex-col items-center gap-4">
//         {!isRunning && (
//           <input
//             type="number"
//             className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
//             placeholder="Sekund kiriting"
//             onChange={handleInputChange}
//           />
//         )}
//         <button
//           onClick={handleStart}
//           className="bg-blue-500 text-white px-6 py-2 rounded shadow hover:bg-blue-600 transition duration-300"
//           disabled={isRunning || time <= 0}
//         >
//           Boshlash
//         </button>
//       </div>
//       <div className="mt-8 text-4xl font-bold">
//         {time > 0 ? time : 'tamom'}
//       </div>
//     </div>
//   );
// }

// export default CountdownTimer;


// 3-masala

// import React, { useState, useEffect } from 'react';

// function WorldClock() {
//   const [selectedCity, setSelectedCity] = useState('Asia/Tashkent');
//   const [time, setTime] = useState('');

//   const cities = [
//     { name: 'Toshkent', timeZone: 'Asia/Tashkent' },
//     { name: 'London', timeZone: 'Europe/London' },
//     { name: 'Tokio', timeZone: 'Asia/Tokyo' },
//   ];

//   useEffect(() => {
//     const updateTime = () => {
//       const now = new Date();
//       const formatter = new Intl.DateTimeFormat('en-US', {
//         timeZone: selectedCity,
//         hour: '2-digit',
//         minute: '2-digit',
//         second: '2-digit',
//       });
//       setTime(formatter.format(now));
//     };

//     updateTime();
//     const interval = setInterval(updateTime, 1000); 

//     return () => clearInterval(interval);
//   }, [selectedCity]);

//   const handleCityChange = (event) => {
//     setSelectedCity(event.target.value);
//   };

//   return (
//     <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
//       <h1 className="text-2xl font-bold mb-6">Mahalliy vaqtni ko'rish</h1>
//       <select
//         value={selectedCity}
//         onChange={handleCityChange}
//         className="border border-gray-300 rounded px-4 py-2 mb-6 focus:outline-none focus:ring-2 focus:ring-blue-500"
//       >
//         {cities.map((city) => (
//           <option key={city.timeZone} value={city.timeZone}>
//             {city.name}
//           </option>
//         ))}
//       </select>
//       <div className="text-4xl font-bold text-blue-600">{time}</div>
//     </div>
//   );
// }

// export default WorldClock;
