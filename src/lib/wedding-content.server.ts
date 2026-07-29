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
          time: "On arrival",
          title: "Welcome Lunch",
          detail: "Buffet-style lunch as guests arrive and settle in.",
        },
        {
          time: "5:00 pm",
          title: "Civil Ceremony on the Beach",
          detail:
            "Barefoot on the sand as the sun goes down. Please be seated a little before 5pm.",
          theme:
            "Summer formal — colour is very much encouraged. No black, white or red.",
          image: "ceremony",
        },
        {
          time: "After the ceremony",
          title: "Drinks & Canapés",
          detail: "Sundowners and canapés on the beach.",
        },
        {
          time: "7:30 pm",
          title: "Dinner & Reception",
          detail: "Dinner in the garden with a live band.",
          image: "reception",
        },
      ],
    },
    {
      date: "21",
      weekday: "Sunday",
      label: "Pool Party & Sangeet",
      events: [
        {
          time: "11:30 am – 3:30 pm",
          title: "Pool Party",
          detail: "Food stalls around the pool, music, and a long lazy afternoon.",
          theme: "Resort beach chic — elegant swimwear, linen shirts, breezy dresses.",
          image: "pool",
        },
        {
          time: "7:30 pm",
          title: "Sangeet — Anantara Banquet Hall",
          detail:
            "Buffet dinner 8:00 – 9:15 pm, DJ and dancing from 9:15 pm onwards.",
          theme:
            "Bollywood glam — Indian & Indo-Western. Vibrant colour, festive elegance, outfits made for dancing.",
          image: "sangeet",
        },
        {
          time: "2:00 am onwards",
          title: "After After Party",
          detail: "For those still standing.",
        },
      ],
    },
    {
      date: "22",
      weekday: "Monday",
      label: "Farewell",
      events: [
        {
          time: "Morning",
          title: "Breakfast & Checkout",
          detail: "One last breakfast together before goodbyes.",
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
      blurb: "The capital — rooftop bars, serious cocktails and the best dining in the country.",
      spots: [
        {
          name: "Ministry of Crab",
          kind: "Restaurant",
          note: "Sri Lanka's most famous restaurant. Book weeks ahead for the garlic chilli crab.",
          instagram: "https://www.instagram.com/ministryofcrab/",
        },
        {
          name: "Kaema Sutra",
          kind: "Restaurant",
          note: "Modern Sri Lankan by Dharshan Munidasa & Bathiya and Santhush.",
          instagram: "https://www.instagram.com/kaemasutra/",
        },
        {
          name: "Nihonbashi",
          kind: "Restaurant",
          note: "Exceptional Japanese, and the sister restaurant to Ministry of Crab.",
          instagram: "https://www.instagram.com/nihonbashisl/",
        },
        {
          name: "Smoke & Bitters (Hiriketiya)",
          kind: "Bar",
          note: "Regularly named one of Asia's 50 Best Bars — worth the drive.",
          instagram: "https://www.instagram.com/smokeandbitters/",
        },
        {
          name: "Cloud Red at Cinnamon Life",
          kind: "Rooftop bar",
          note: "Skyline views and a long cocktail list.",
          instagram: "https://www.instagram.com/cinnamonlife/",
        },
        {
          name: "Kama Colombo",
          kind: "Night spot",
          note: "Late-night Indian small plates and a lively bar crowd.",
          instagram: "https://www.instagram.com/kamacolombo/",
        },
      ],
    },
    {
      area: "Bentota & Kalutara",
      blurb: "Our neighbourhood — river, reef and long empty stretches of sand.",
      spots: [
        {
          name: "Club Villa",
          kind: "Restaurant",
          note: "Geoffrey Bawa-designed garden hotel, lovely for a long lunch.",
          instagram: "https://www.instagram.com/clubvillabentota/",
        },
        {
          name: "Lunuganga Estate",
          kind: "Attraction",
          note: "Bawa's country garden at Dedduwa — tours and afternoon tea.",
          instagram: "https://www.instagram.com/geoffreybawatrust/",
        },
        {
          name: "Diya Sisila",
          kind: "Restaurant",
          note: "River-side seafood, unfussy and excellent.",
        },
        {
          name: "Taprobana Beach Bar",
          kind: "Beach club",
          note: "Sunset drinks with your feet in the sand.",
        },
      ],
    },
    {
      area: "Galle & the South Coast",
      blurb: "Fort walls, surf towns and the island's best beach clubs.",
      spots: [
        {
          name: "Wijaya Beach",
          kind: "Beach club",
          note: "Thalpe institution — pizza, reef pools and sundowners.",
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
          note: "Day beds, cocktails and a very good swim.",
          instagram: "https://www.instagram.com/poetscove.lk/",
        },
        {
          name: "Verandah at Amangalla",
          kind: "Bar",
          note: "Colonial elegance and a properly made gin and tonic.",
          instagram: "https://www.instagram.com/aman/",
        },
      ],
    },
    {
      area: "Weligama, Mirissa & Hiriketiya",
      blurb: "Surf, sunsets and the island's best late nights.",
      spots: [
        {
          name: "Smoke & Bitters",
          kind: "Bar",
          note: "Asia's 50 Best — foraged Sri Lankan ingredients in every glass.",
          instagram: "https://www.instagram.com/smokeandbitters/",
        },
        {
          name: "Salt House",
          kind: "Restaurant",
          note: "Hiriketiya favourite for long, slow dinners.",
          instagram: "https://www.instagram.com/salthouse.lk/",
        },
        {
          name: "W15 Weligama",
          kind: "Beach club",
          note: "Infinity pool over the bay.",
          instagram: "https://www.instagram.com/w15escapes/",
        },
        {
          name: "Cape Weligama",
          kind: "Sunset spot",
          note: "Cliff-top crescent pool and the best sundowner view in Sri Lanka.",
          instagram: "https://www.instagram.com/capeweligama/",
        },
      ],
    },
  ],
  rsvpUrl:
    "https://withjoy.com/lalita-and-ayush/rsvp?utm_medium=web&utm_source=joy&utm_campaign=website_overview_copy",
};
