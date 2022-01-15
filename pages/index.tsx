import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { useState } from 'react';

const Meals = [
  { title: 'Mac & Cheese' },
  { title: 'Ramen' },
  { title: 'Eating Out' },
  { title: 'Spaghetti' },
  { title: 'Burgers' },
];

const pickMeal = () => Meals[Math.floor(Math.random() * Meals.length)] || Meals[0];

const MealScreen = () => {
  const [selectedMeal, setSelectedMeal] = useState(pickMeal);
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="text-xl text-blue-400 w-64 py-6 px-4 text-center bg-gray-900 rounded-sm font-bold">
        {selectedMeal.title}
      </div>
      <button
        type="button"
        className="bg-green-400 text-white mt-8 py-2 px-8 rounded-full"
        onClick={() => setSelectedMeal(pickMeal)}
      >
        Pick Another
      </button>
    </div>
  );
};

const Home: NextPage = () => {
  return (
    <div className="p-4 min-h-full">
      <Head>
        <title>Meal Selector</title>
        <meta name="description" content="Meal Selector" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col justify-center items-center flex-1 min-h-full">
        <div className="text-2xl font-bold">Welcome to the meal selector</div>
      </main>

      <MealScreen />

      <footer className="flex flex-1 flex-row items-center justify-center px-4 border-t-2 border-gray-100 fixed bottom-0 left-0 right-0">
        <span className="">
          <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
        </span>
      </footer>
    </div>
  );
};

export default Home;
