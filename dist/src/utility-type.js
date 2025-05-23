"use strict";
const todo1 = {
    title: 'Gym',
}; // Makes every property optional
const todo2 = {
    title: 'Gym',
    description: 'Please workout',
}; // Makes every property read only
const todo3 = {
    title: 'Wash cloths',
}; // Picks only the mentioned properties
const todo4 = {
    description: 'yo',
}; // Removes the mentioned properties
const todo5 = {
    1: { title: 'Gym', description: 'Must go' },
    2: { title: 'Gym' },
}; // Record lets us use the type in an object
