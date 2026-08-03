/**
 * Protected wedding content. Server-only: this module is never bundled to the
 * client, so locked visitors cannot read any of it from the JS bundle.
 */
import type { WeddingContent } from "./wedding-types";

export const weddingContent: WeddingContent = {
  venue: {
    name: "Avani Kalutara Resort",
    location: "Kalutara, Sri Lanka",
    url: "https://www.avanihotels.com/kalutara",
  },
  days: [
    {
      date: "20",
      weekday: "Saturday",
      label: "Arrival & Civil Ceremony",
      events: [
        {
          time: "1:00 – 3:30 pm",
          title: "Welcome Lunch",
          detail:
            "Whether you've had time to settle in or have come straight from the plane, join us for a relaxed lunch.",
          location: "Mangrove Restaurant, Avani Kalutara Resort",
          mapsUrl: "https://maps.google.com/?q=Avani+Kalutara+Resort+Sri+Lanka",
          start: "20270220T073000Z",
          end: "20270220T100000Z",
        },
        {
          time: "4:45 – 7:30 pm",
          title: "Civil Ceremony & Cocktail Hour",
          detail:
            "Our official 'I do'. Join us as we exchange our vows with the ocean as our backdrop, followed by sunset cocktails and canapés, before enjoying dinner and dancing the night away to a live band. We kindly ask that you are seated by 4:45 pm for the ceremony.",
          theme:
            "Summer formal — colour is very much encouraged. No black, white or red.",
          image: "ceremony",
          location: "The beach, Avani Kalutara Resort",
          start: "20270220T111500Z",
          end: "20270220T140000Z",
        },
      ],
    },
    {
      date: "21",
      weekday: "Sunday",
      label: "Pool Party & Sangeet",
      events: [
        {
          time: "7:00 – 11:00 am",
          title: "Buffet Breakfast",
          detail:
            "Join us for a leisurely breakfast. Recharge, refuel and get ready for round two.",
          location: "Mangrove Restaurant, Avani Kalutara Resort",
          start: "20270221T013000Z",
          end: "20270221T053000Z",
        },
        {
          time: "11:30 am – 3:30 pm",
          title: "Pool Party",
          detail:
            "Think sunshine, cocktails, pool games, live food stalls and a DJ playing all afternoon. Come ready to relax, have fun and make the most of our final day together before the evening celebrations begin.",
          theme: "Resort beach chic — elegant swimwear, linen shirts, breezy dresses.",
          image: "pool",
          location: "The pool, Avani Kalutara Resort",
          start: "20270221T060000Z",
          end: "20270221T100000Z",
        },
        {
          time: "7:30 pm until late",
          title: "Sangeet, Dinner & DJ Night",
          detail:
            "The grand finale of our wedding weekend. An evening of vibrant performances, incredible food and a packed dance floor. Join us as we celebrate with dinner, music and dancing late into the early hours of the morning.",
          theme:
            "Bollywood glam — Indian & Indo-Western. Vibrant colour, festive elegance, outfits made for dancing.",
          image: "sangeet",
          location: "Anantara Ballroom",
          mapsUrl: "https://maps.google.com/?q=Anantara+Kalutara+Resort+Sri+Lanka",
          start: "20270221T140000Z",
          end: "20270221T193000Z",
        },
      ],
    },
    {
      date: "22",
      weekday: "Monday",
      label: "Farewell",
      events: [
        {
          time: "Breakfast before 11",
          title: "Breakfast & Checkout",
          detail:
            "Before you head home, join us for one last buffet breakfast. Share a final coffee, relive the weekend's highlights and say your goodbyes before checking out by 12pm.",
          location: "Mangrove Restaurant, Avani Kalutara Resort",
        },
      ],
    },
  ],

  travel: {
    heading: "Getting There",
    body: "Our wedding celebrations will take place at the beautiful Avani Kalutara Resort, a tropical beachfront escape where the Kalu Ganga River meets the Indian Ocean. Roughly an hour and a half south of Colombo's Bandaranaike International Airport (CMB).",
    points: [
      {
        title: "Flights",
        detail:
          "Fly into Colombo (CMB). There are direct and one-stop connections from London, Dubai, Singapore, Mumbai and Delhi.",
      },
      {
        title: "Transfers",
        detail:
          "For those arriving Saturday and leaving Monday, transportation will be provided. We will collect your arrival and departure information closer to the time.",
      },
      {
        title: "Arriving early or staying on",
        detail:
          "You are more than welcome to arrive earlier or leave later — we would love that. Please get in touch with us for more information and room bookings.",
      },
      {
        title: "Visas",
        detail:
          "Most nationalities need an ETA (Electronic Travel Authorisation) for Sri Lanka. Apply online before you travel — it only takes a few minutes.",
      },
    ],
  },
  travelInfo: [
    {
      title: "Ride-Hailing Apps (Most Recommended)",
      detail:
        "The easiest and most flexible way to reach Bentota is by using Uber or PickMe. Both services are available from the airport.",
    },
    {
      title: "Train (Scenic Coastal Route)",
      detail:
        "For a uniquely Sri Lankan experience, take a train from Colombo Fort Railway Station to Kalutara South Railway Station. The journey takes approximately 1.5–2 hours, offering beautiful coastal views along the way. From the station, the resort is just a short tuk-tuk or taxi ride away.",
    },
    {
      title: "Private Transfers",
      detail:
        "If you prefer to arrange a ride in advance, we highly recommend checking out colomboairporttransfers.com",
    },
    {
      title: "Currency Exchange",
      detail:
        "You can exchange money or withdraw Sri Lankan Rupees (LKR) at the airport, but for better rates it's recommended to use local banks or trusted authorised money exchangers in the city or before you travel. We'd recommend bringing cash with you for tips and taxis.",
    },
    {
      title: "Visa & Entry Requirements",
      detail:
        "All travellers visiting Sri Lanka must apply for an Electronic Travel Authorization (ETA) before arrival. Apply only via the official site https://www.eta.gov.lk/slvisa/visainfo/apply.jsp?locale=en_US — and make sure your passport is valid for at least 6 months beyond your travel dates.",
    },
    {
      title: "SIM Cards",
      detail:
        "You can easily purchase a local SIM card upon arrival. Major providers like Dialog and Mobitel have stalls in the arrival lobby at the airport with tourist-friendly data, call and SMS packages.",
    },
  ],
  discover: [
    "Sri Lanka may be small, but it's wonderfully diverse — and we'd love for you to make the most of your time here after the wedding.",
    "Explore the cultural wonders of Sigiriya, Dambulla, Kandy, Anuradhapura and Polonnaruwa, where ancient temples, royal cities and rich history bring the island's heritage to life.",
    "Head to the hill country to discover Ella, Nuwara Eliya and Haputale, home to rolling tea plantations, breathtaking viewpoints, waterfalls and some of the world's most scenic train journeys.",
    "For wildlife, venture into Yala, Udawalawe, Wilpattu or Minneriya National Parks, where you can spot elephants, leopards, sloth bears, crocodiles and an incredible variety of birdlife.",
    "If you're drawn to the coast, soak up the laid-back atmosphere of Mirissa, Weligama, Unawatuna, Tangalle, Arugam Bay, Trincomalee, Nilaveli and Pasikudah — each offering its own mix of golden beaches, surfing, snorkelling, whale watching and crystal-clear waters.",
    "For something a little different, visit the colonial streets of Galle Fort, explore the unique culture of Jaffna, or take a boat trip to Pigeon Island or Delft Island for unforgettable island experiences.",
    "We've put together a guest map (see above) to help you plan your adventures. Consider this your invitation to stay a little longer and discover the many sides of Sri Lanka.",
  ],
  faqs: [
    {
      q: "Are kids welcome?",
      a: "While we adore your little ones, we have chosen to make our wedding celebrations an adults-only occasion. We hope this gives you the opportunity to relax, celebrate, and enjoy the weekend with us.",
    },
    {
      q: "What is the overall vibe of your wedding?",
      a: "Bring your appetite, dancing shoes & best outfits.",
    },
    {
      q: "Are gifts welcome?",
      a: "Your presence is the only gift we need. If you wish to celebrate us further, a contribution towards our honeymoon fund would mean the world to us. Details are below.",
    },
    {
      q: "Is transportation provided?",
      a: "For those arriving Saturday and leaving Monday, transportation will be provided. We will be collecting your arrival and departure information closer to the time. You're more than welcome to arrive earlier or leave later — see the Getting There page for more information.",
    },
    {
      q: "Can I arrive earlier, or stay at Avani longer?",
      a: "For those wanting to arrive on Friday 19th Feb, or stay an extra night on 22nd Feb 2027, we've negotiated a special rate for you. Enter the promo code XXXX when you book your room directly through the hotel website.",
    },
    {
      q: "Whom should I call with questions?",
      a: "You can WhatsApp either of us on the numbers below.",
    },
  ],

  contacts: [
    { name: "Ayush", phone: "+65 8401 8517" },
    { name: "Lalita", phone: "+44 7565 790424" },
  ],
  honeymoon: [
    "Lalita Chopra",
    "Wio Bank PJSC",
    "Etihad Airways Centre, 5th Floor, Abu Dhabi, UAE",
    "IBAN: AE420860000006897094783",
    "SWIFT/BIC: WIOBAEADXXX",
  ],
  attractions: [
    {
      name: "Galle Fort",
      note: "A 17th-century Dutch fort of ramparts, boutiques and cafés — an easy hour south of Kalutara.",
    },
    {
      name: "Sigiriya Lion Rock",
      note: "The ancient rock fortress rising out of the jungle. Climb it at sunrise.",
    },
    {
      name: "Yala or Udawalawe National Park",
      note: "Leopards, elephants and a proper dawn safari.",
    },
    {
      name: "Ella & the Nine Arch Bridge",
      note: "Hill country, tea estates and the most beautiful train ride in Asia.",
    },
    {
      name: "Kandy — Temple of the Tooth",
      note: "Sri Lanka's spiritual heart, set around a lake in the hills.",
    },
    {
      name: "Bentota & Madu River",
      note: "Twenty minutes from the resort — mangrove boat safaris and river islands.",
    },
    {
      name: "Whale watching in Mirissa",
      note: "Blue whales and spinner dolphins between December and April.",
    },
    {
      name: "Kalutara Bodhiya",
      note: "The hollow stupa on our doorstep, right beside the Kalu Ganga bridge.",
    },
  ],
  areas: [
    {
      area: "Colombo",
      blurb:
        "The capital — rooftop bars, serious cocktails, colonial arcades and the best dining in the country. Worth a night on the way in or out.",
      spots: [
        {
          name: "Ministry of Crab",
          kind: "Restaurant",
          note: "Sri Lanka's most famous restaurant, inside the Dutch Hospital. Book weeks ahead for the garlic chilli crab.",
          instagram: "https://www.instagram.com/ministryofcrab/",
        },
        {
          name: "Kaema Sutra",
          kind: "Restaurant",
          note: "Modern Sri Lankan by Dharshan Munidasa & Bathiya and Santhush — hoppers and kottu, done beautifully.",
          instagram: "https://www.instagram.com/kaemasutra/",
        },
        {
          name: "Nihonbashi",
          kind: "Restaurant",
          note: "Exceptional Japanese, sister restaurant to Ministry of Crab. The omakase is the move.",
          instagram: "https://www.instagram.com/nihonbashisl/",
        },
        {
          name: "Paradise Road The Gallery Café",
          kind: "Restaurant",
          note: "Geoffrey Bawa's former office turned courtyard café. Go for the black pork curry and the chocolate mousse.",
          instagram: "https://www.instagram.com/paradiseroadsrilanka/",
        },
        {
          name: "Cloud Red, Cinnamon Life",
          kind: "Rooftop bar",
          note: "Skyline views over the Beira Lake and a long cocktail list. Best at sunset.",
          instagram: "https://www.instagram.com/cinnamonlife/",
        },
        {
          name: "Kama Colombo",
          kind: "Night spot",
          note: "Late-night Indian small plates, a lively bar crowd and dancing until close.",
          instagram: "https://www.instagram.com/kamacolombo/",
        },
        {
          name: "Re.Public",
          kind: "Night spot",
          note: "One of the city's busiest club nights — go late, stay later.",
          instagram: "https://www.instagram.com/republic.lk/",
        },
        {
          name: "Galle Face Green & Hotel",
          kind: "Attraction",
          note: "Sunset kite-flying and street food on the promenade, then a gin at the Chequerboard verandah.",
          instagram: "https://www.instagram.com/gallefacehotel/",
        },
      ],
    },
    {
      area: "Bentota & Kalutara",
      blurb:
        "Our neighbourhood — river, reef and long empty stretches of sand, all within half an hour of the resort.",
      spots: [
        {
          name: "Club Villa",
          kind: "Restaurant",
          note: "Geoffrey Bawa-designed garden hotel, lovely for a long, slow lunch by the sea.",
          instagram: "https://www.instagram.com/clubvillabentota/",
        },
        {
          name: "Lunuganga Estate",
          kind: "Attraction",
          note: "Bawa's country garden at Dedduwa — garden tours and a very civilised afternoon tea.",
          instagram: "https://www.instagram.com/geoffreybawatrust/",
        },
        {
          name: "Brief Garden",
          kind: "Attraction",
          note: "Bevis Bawa's eccentric jungle garden and art collection, twenty minutes inland.",
        },
        {
          name: "Madu River Boat Safari",
          kind: "Attraction",
          note: "Mangrove tunnels, cinnamon islands and monitor lizards. Go early morning.",
        },
        {
          name: "Diya Sisila",
          kind: "Restaurant",
          note: "River-side seafood, unfussy and excellent. Ask for the crab curry.",
        },
        {
          name: "Taprobana Beach Bar",
          kind: "Beach club",
          note: "Sunset drinks with your feet in the sand, five minutes from Avani.",
        },
        {
          name: "Kalutara Bodhiya",
          kind: "Attraction",
          note: "The hollow stupa on our doorstep, right beside the Kalu Ganga bridge.",
        },
      ],
    },
    {
      area: "Galle & the South Coast",
      blurb:
        "Fort walls, surf towns and the island's best beach clubs — about an hour and a half south of us.",
      spots: [
        {
          name: "Wijaya Beach",
          kind: "Beach club",
          note: "Thalpe institution — wood-fired pizza, reef pools and long sundowners.",
          instagram: "https://www.instagram.com/wijayabeach/",
        },
        {
          name: "Fort Bazaar / Church Street Social",
          kind: "Restaurant & bar",
          note: "The most stylish place to eat and drink inside Galle Fort.",
          instagram: "https://www.instagram.com/fortbazaar/",
        },
        {
          name: "Poets Cove, Unawatuna",
          kind: "Beach club",
          note: "Day beds, cocktails and a very good swim in a sheltered bay.",
          instagram: "https://www.instagram.com/poetscove.lk/",
        },
        {
          name: "Verandah at Amangalla",
          kind: "Bar",
          note: "Colonial elegance inside the Fort and a properly made gin and tonic.",
          instagram: "https://www.instagram.com/aman/",
        },
        {
          name: "The Tuna & The Crab",
          kind: "Restaurant",
          note: "Japanese-Sri Lankan sashimi and crab in the Fort's old Dutch Hospital.",
          instagram: "https://www.instagram.com/thetunaandthecrab/",
        },
        {
          name: "Galle Fort Ramparts",
          kind: "Attraction",
          note: "Walk the walls at golden hour, from the lighthouse round to Flag Rock.",
        },
      ],
    },
    {
      area: "Weligama, Mirissa & Hiriketiya",
      blurb:
        "Surf, whales, sunsets and the island's best late nights — the stretch everyone ends up extending their trip for.",
      spots: [
        {
          name: "Smoke & Bitters",
          kind: "Bar",
          note: "Regularly named one of Asia's 50 Best Bars — foraged Sri Lankan ingredients in every glass.",
          instagram: "https://www.instagram.com/smokeandbitters/",
        },
        {
          name: "Salt House",
          kind: "Restaurant",
          note: "Hiriketiya favourite for long, slow dinners under the palms.",
          instagram: "https://www.instagram.com/salthouse.lk/",
        },
        {
          name: "W15 Weligama",
          kind: "Beach club",
          note: "Infinity pool over the bay, day passes and a good lunch menu.",
          instagram: "https://www.instagram.com/w15escapes/",
        },
        {
          name: "Cape Weligama",
          kind: "Sunset spot",
          note: "Cliff-top crescent pool and arguably the best sundowner view in Sri Lanka.",
          instagram: "https://www.instagram.com/capeweligama/",
        },
        {
          name: "Doctor's House, Hiriketiya",
          kind: "Night spot",
          note: "Live music, DJs and a garden crowd that stays out late.",
          instagram: "https://www.instagram.com/thedoctorshouse.lk/",
        },
        {
          name: "Whale watching, Mirissa",
          kind: "Attraction",
          note: "Blue whales and spinner dolphins between December and April. Boats leave at dawn.",
        },
        {
          name: "Coconut Tree Hill",
          kind: "Attraction",
          note: "The headland everyone photographs. Come at first light to have it to yourself.",
        },
      ],
    },
    {
      area: "Kandy & the Hill Country",
      blurb:
        "Tea estates, waterfalls, cool mountain air and the most beautiful train ride in Asia.",
      spots: [
        {
          name: "Temple of the Sacred Tooth Relic",
          kind: "Attraction",
          note: "Sri Lanka's spiritual heart, set beside Kandy Lake. Time your visit for evening puja.",
        },
        {
          name: "Kandy to Ella train",
          kind: "Attraction",
          note: "Seven hours through tea country past the Nine Arch Bridge. Book second-class reserved.",
        },
        {
          name: "Ceylon Tea Trails",
          kind: "Restaurant & stay",
          note: "Relais & Châteaux bungalows above the Castlereagh reservoir — go for lunch and a tea tasting.",
          instagram: "https://www.instagram.com/ceylonteatrails/",
        },
        {
          name: "Grand Hotel, Nuwara Eliya",
          kind: "Bar",
          note: "Fireplaces, high tea and colonial-era billiards in the hills.",
        },
        {
          name: "Little Adam's Peak & Ravana Falls",
          kind: "Attraction",
          note: "An easy sunrise hike above Ella, then a swim under the falls.",
        },
      ],
    },
    {
      area: "Wildlife & the Cultural Triangle",
      blurb:
        "Leopards, elephants and ancient rock cities — the north-central heart of the island.",
      spots: [
        {
          name: "Yala National Park",
          kind: "Attraction",
          note: "The highest density of leopards in the world. Dawn safaris only, book ahead.",
        },
        {
          name: "Udawalawe National Park",
          kind: "Attraction",
          note: "Guaranteed elephants, plus the Elephant Transit Home feeding at 10am.",
        },
        {
          name: "Sigiriya Lion Rock",
          kind: "Attraction",
          note: "The ancient rock fortress rising out of the jungle. Climb it at sunrise.",
        },
        {
          name: "Dambulla Cave Temples",
          kind: "Attraction",
          note: "Five caves of painted Buddhas carved into the hillside, half an hour from Sigiriya.",
        },
        {
          name: "Wild Coast Tented Lodge",
          kind: "Restaurant & stay",
          note: "Cocoon tents on the edge of Yala — worth it just for dinner and the beach bar.",
          instagram: "https://www.instagram.com/resplendentceylon/",
        },
      ],
    },
  ],

  rsvpUrl:
    "https://withjoy.com/lalita-and-ayush/rsvp?utm_medium=web&utm_source=joy&utm_campaign=website_overview_copy",
};
