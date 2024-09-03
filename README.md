# Country Info App

## Overview

Country Info App is a full-stack application that provides information about countries and their populations. It includes both a backend and a frontend component. This README provides instructions for setting up and running both parts of the application.

## Prerequisites

Make sure you have the following installed on your machine:

- [Node.js](https://nodejs.org/en/) (v14 or higher)
- [npm](https://www.npmjs.com/get-npm) (comes with Node.js)

## Backend Setup

The backend is built with Node.js and Express. Follow these steps to set it up:

1. **Navigate to the Backend Directory**

   ```bash
   cd backend
2. **Install dependencies**

   ```bash
   npm install

3. **Configure Environment Variables**
   ```bash
   AVAILABLE_COUNTRIES_URL=https://date.nager.at/api/v3/AvailableCountries
   COUNTRY_INFO_URL=https://date.nager.at/api/v3/CountryInfo/
   POPULATION_DATA_URL=https://countriesnow.space/api/v0.1/countries/population
   FLAG_URL=https://countriesnow.space/api/v0.1/countries/flag/images

   
4. **Run backend server**

   ```bash
   npm run start


## Frontend Setup

The frontend is built with React. Follow these steps to set it up:

1. **Navigate to the Frontend Directory**

   ```bash
   cd frontend
2. **Install dependencies**

   ```bash
   npm install
3. **Run frontend server**

   ```bash
   npm start
