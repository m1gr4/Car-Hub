import { res } from './mock';
export const calculateCarRent = (city_mpg: number, year: number) => {
  const basePricePerDay = 50; // Base rental price per day in dollars
  const mileageFactor = 0.1; // Additional rate per mile driven
  const ageFactor = 0.05; // Additional rate per year of vehicle age

  // Calculate additional rate based on mileage and age
  const mileageRate = city_mpg * mileageFactor;
  const ageRate = (new Date().getFullYear() - year) * ageFactor;

  // Calculate total rental rate per day
  const rentalRatePerDay = basePricePerDay + mileageRate + ageRate;

  return rentalRatePerDay.toFixed(0);
};

export async function fetchCars() {

  return res;

  // const headers = {
  //     'X-RapidAPI-Key': 'cb3154dd6emsh8c60cb1f929149cp17b73cjsn5aa148418b0f',
  //     'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
  //   }

  //   const response = await fetch('https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla', {
  //     headers
  //   });

  //   const result = await response.json();
  //   return result;
};