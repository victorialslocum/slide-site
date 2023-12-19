// pages/[slug].js
import { useRouter } from 'next/router';

const SlideDeck = () => {
  const router = useRouter();
  const { slug } = router.query;

  return (
    <div>
      <h1>Slide Deck: {slug}</h1>
    </div>
  );
};

export default SlideDeck;
