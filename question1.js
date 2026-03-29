let market = {
  name: "Balogun Market",
  location: "Lagos Island",
  totalStalls: 400,
  openDays: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
};

console.log(`${market.name} is located in ${market.location}`)
console.log(`Market is open for ${market.openDays.length} days`)

for(i = 0; i < market.openDays.length; i++){
    console.log(market.openDays[i])
}