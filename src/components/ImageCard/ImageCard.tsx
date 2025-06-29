import { UnsplashImage } from "../../types";

interface CardProps {
  card: UnsplashImage;
}

export default function ImageCard({ card }: CardProps) {
  
  return (
    <div>
      <img src={card.urls.small} alt={card.alt_description} />
    </div>
  );
}
