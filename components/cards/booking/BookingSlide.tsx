import BookingCard from "./BookingCard";

interface Props {
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

export default function BookingSlide(props: Props) {
  return <BookingCard {...props} />;
}
