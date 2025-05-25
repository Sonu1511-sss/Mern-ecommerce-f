import React, { useEffect, useState } from 'react';

const Offers = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  // Set your target date here
  const targetDate = new Date('2025-06-01T00:00:00').getTime();

  const calculateTimeLeft = () => {
    const now = new Date().getTime();
    const difference = targetDate - now;

    if (difference > 0) {
      setTimeLeft({
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / (1000 * 60)) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      });
    } else {
      setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
    }
  };

  useEffect(() => {
    const timer = setInterval(calculateTimeLeft, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div
      className="relative bg-cover bg-center text-white py-24 px-6"
      style={{
        backgroundImage: 'url(https://images.pexels.com/photos/1926329/pexels-photo-1926329.jpeg?auto=compress&cs=tinysrgb&w=600)',
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <h2 className="text-5xl font-extrabold mb-6">🔥 Big Offer Countdown 🔥</h2>
        <p className="text-xl mb-10">Hurry up! The offer ends soon.</p>

        <div className="flex justify-center gap-6 text-center">
          {[
            { label: 'Days', value: timeLeft.days },
            { label: 'Hours', value: timeLeft.hours },
            { label: 'Minutes', value: timeLeft.minutes },
            { label: 'Seconds', value: timeLeft.seconds },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white/20 backdrop-blur-sm p-6 rounded-xl shadow-lg min-w-[80px]"
            >
              <div className="text-4xl font-bold">{String(item.value).padStart(2, '0')}</div>
              <div className="text-sm uppercase tracking-widest mt-2">{item.label}</div>
            </div>
          ))}
        </div>

        <button className="mt-10 btn_secondary_rounded  gap-x-2 medium-16 text-black font-semibold py-3 px-8 rounded-full transition duration-300">
          Shop Now
        </button>
      </div>
    </div>
  );
};

export default Offers;
