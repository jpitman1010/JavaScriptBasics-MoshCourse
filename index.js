//exercise price range object

//yelp has price ranges for searches, [$, $$, $$$]
//create an array of objects, each objects is a price range object
//think about properties the pricerange object should have 

let priceRanges = [
    { label: '$', toolTip: 'Inexpensive', minPerPerson: 0, maxPerPerson: 10 },
    { label: '$$', toolTip: 'Moderate', minPerPerson: 11, maxPerPerson: 20 },
    { label: '$$$', toolTip: 'Expensive', minPerPerson: 21, maxPerPerson: 50 }
];

let restaurants = [
    { averagePerPerson: 5 }
];