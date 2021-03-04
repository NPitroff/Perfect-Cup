const brewingMethods = [
  {
    imageUrl: "https://i.ibb.co/4T3GVgt/aeropress.png",
    name: "Aeropress",
    total_time: "01:45",
    grind_size: "Fine",
    default_grams: 15,
    default_water: 255,
    instructions: [
      "Begin with an Aeropress in the standard position on a mug and a washed, paper filter in place.",
      "Add all coffee grounds to the Aeropress, start timer and immediately top with all of the water",
      "Stir North-to-South five times and East-to-West five times and cap with plunger.",
      "At 1:00, uncap Aeropress and stir again",
      "Recap and press, slowly, for 45 seconds."
    ]
  },
  {
    imageUrl: "https://i.ibb.co/fnQvzK4/Coffee-Drip-512.png",
    name: "V60",
    total_time: "04:00",
    grind_size: "Medium",
    default_grams: 21,
    default_water: 360,
    instructions: [
      "Fold the filter into a cone shape and rinse it in the dripper with water just off the boil (about 205°F). Discard the rinse water.",
      "Add coffee to your brewer. ",
      "Saturate the grounds with water right off the boil (about 205°F). Use just enough water to cover the grounds. Let it bloom for 15 seconds.",
      "Pour water in a slow, even spiral, adding water every 10 – 15 seconds for an even extraction. Pour over the dark spots and avoid the light ones. If you're using a scale, you should pour until you reach 360g.",
      "Once you hit 3:00, you should have about 10 oz of brewed coffee. Remove the brewer and pour the coffee into a warm mug. "
    ]
  },
  {
    imageUrl: "https://i.ibb.co/KKFMwj2/frenchpress.png",
    name: "French Press",
    total_time: "05:30",
    grind_size: "Coarse",
    default_grams: 56,
    default_water: 550,
    instructions: [
      "Weigh the amount of coffee beans to be used (Ratio 1:12) And grind to medium/coarse grounds",
      "Get the water to reach 88-91 degrees",
      "Warm up your empty French Press by rinsing it with very hot water. This helps maintain the temperature while brewing for best extraction.",
      "Now that your French Press is warmed up, discard the hot water and add coffee into the empty press. Start your count-up timer as soon as you add hot water.",
      "Place the Chamber on the scale and tare then add the coffee grounds in the chamber and level it.",
      "Pour water starting into the middle then swirl it to the edges only 30-40ml.",
      "After 30seconds start to pour the rest of the ratio water.",
      "Use a stirrer after pouring the water in and do 5-10 stirs",
      "Place the filter/plunger on top.",
      "Wait for about 2:30-3:30 min and then plunge.",
      "Pour it into your cup/tumbler and enjoy you coffee!"
    ]
  },
  {
    imageUrl: "https://i.ibb.co/6vrZ6dr/chemex.png",
    name: "Chemex",
    total_time: "3:30",
    grind_size: "Medium",
    default_grams: 26,
    default_water: 415,
    instructions: [
      "Heat your water to 205 degrees by bringing it to a boil and letting it sit for 30 seconds.",
      "Pour hot water around the inside of the filter for about 5 seconds. Keeping the filter in place, discard the rinse water.",
      "Start your timer and pour twice as much water as coffee over the grounds. The goal is even saturation, so pour slowly in a clockwise pattern. This is an essential step that should never be rushed.",
      "After about a minute, add water in stages (around 70–100g at a time) until you reach the desired final brew weight, making sure that the grounds are never exposed to air until the brew is finished. Concentrate the pour towards the center of the Chemex, working your way outwards to about a centimeter from the edge of the slurry. The water stream from the pouring kettle should be slow enough to fall straight down, not at an angle.",
      "Once the drips stall to every couple of seconds, your brew is finished. If your grind was correct, and you poured at the right speed, this should have taken between 4-5 minutes.",
      "Remove the filter and discard. Enjoy!"
    ]
  },
  {
    imageUrl: "https://i.ibb.co/XFQvy47/kalita.png",
    name: "Kalita",
    total_time: "2:40",
    grind_size: "Medium",
    default_grams: 15,
    default_water: 225,
    instructions: [
      "weight the amount of coffee beans to be used (Ratio 1:15) And grind to medium grounds",
      "Take a paper filter and place it on your chosen tool.",
      "Get the water to reach 88-91 degrees",
      "clean and pre-wet your tools and tumbler (cup) with hot water",
      "place your tools on the cup and place them above a scale.",
      "place your coffee grounds in the filter and level it.",
      "pour water starting into the middle then swirl it to the edges only 30-40ml.",
      "after 30seconds start to pour the rest of the ratio water slowly.",
      "After the coffee has been brewed to your cup, remove your tool, clean it and enjoy you coffee."
    ]
  }
];
export default brewingMethods;
