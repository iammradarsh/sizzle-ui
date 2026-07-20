export interface Booking {
  id: number;

  rank: number;

  image: string;

  badge: string;

  badgeIcon: string;

  name: string;

  rating: string;

  reviews: number;

  responseTime: string;

  service: string;

  price: string;

  bookedText: string;

  overlayGradient: string;

  footerColor: string;
}

export const bookings: Booking[] = [
  {
    id: 1,

    rank: 1,

    image: "/images/bookings/1.png",

    badge: "RATED THE BEST",

    badgeIcon: "/images/icons/star.svg",

    name: "NEOMI\nVANCE",

    rating: "98%",

    reviews: 135,

    responseTime: "24hr",

    service: "10 min video call",

    price: "$19.99",

    bookedText: "Booked 12 times this week",

    overlayGradient:
      "linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(200,50,176,0.90) 50%, rgba(204, 47, 176, 1) 100%)",

    footerColor: "rgba(0, 0, 0, 0.25)",
  },

  {
    id: 2,

    rank: 2,

    image: "/images/bookings/2.png",

    badge: "MOST BOOKED",

    badgeIcon: "/images/icons/fire.svg",

    name: "GEORGINA\nLONDON",

    rating: "98%",

    reviews: 135,

    responseTime: "24hr",

    service: "Custom video 1min",

    price: "$24.99",

    bookedText: "Booked 8 times this week",

    overlayGradient:
      "linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(127,55,233,0.90) 50%, rgba(126, 55, 231, 1) 100%)",

    footerColor: "rgba(0, 0, 0, 0.25)",
  },

  {
    id: 3,

    rank: 3,

    image: "/images/bookings/3.png",

    badge: "FAN FAVORITE",

    badgeIcon: "/images/icons/double-heart.svg",

    name: "SELENE\nCRUZ",

    rating: "98%",

    reviews: 135,

    responseTime: "24hr",

    service: "20 custom photos",

    price: "$17.99",

    bookedText: "Booked 10 times this week",

    overlayGradient:
      "linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,156,145,0.90) 50%, rgba(0, 156, 145, 1) 100%)",

    footerColor: "rgba(0, 0, 0, 0.25)",
  },

  {
    id: 4,

    rank: 4,

    image: "/images/bookings/4.png",

    badge: "BOOKED ON REPEAT",

    badgeIcon: "/images/icons/calendar-refresh.svg",

    name: "ARIA\nKNOX",

    rating: "98%",

    reviews: 135,

    responseTime: "24hr",

    service: "Video message",

    price: "$19.99",

    bookedText: "Booked 7 times this week",

    overlayGradient:
      "linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(228,29,71,0.90) 50%, rgba(229, 29, 71, 1) 100%)",

    footerColor: "rgba(0, 0, 0, 0.25)",
  },

  {
    id: 5,

    rank: 5,

    image: "/images/bookings/5.png",

    badge: "TRENDING",

    badgeIcon: "/images/icons/fire.svg",

    name: "MAYA\nROSS",

    rating: "96%",

    reviews: 91,

    responseTime: "24hr",

    service: "Voice message",

    price: "$12.99",

    bookedText: "Booked 11 times this week",

    overlayGradient:
      "linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(242,140,39,0.90) 50%, #F28C27 100%)",

    footerColor: "rgba(0, 0, 0, 0.25)",
    
  },
];