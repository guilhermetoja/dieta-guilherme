import { MealList } from "@/components/diet/MealList";
import { WaterTracker } from "@/components/diet/WaterTracker";
import { QuoteDisplay } from "@/components/diet/QuoteDisplay";
import { Apple } from "lucide-react";

export const dynamic = 'force-dynamic';

async function getQuote() {
  const MOVIE_MAP: Record<string, string> = {
    '5cd95395de30eff6ebccde5c': 'The Fellowship of the Ring',
    '5cd95395de30eff6ebccde5d': 'The Return of the King',
    '5cd95395de30eff6ebccde5b': 'The Two Towers'
  };

  const MOVIE_IDS = Object.keys(MOVIE_MAP);

  try {
    const randomMovieId = MOVIE_IDS[Math.floor(Math.random() * MOVIE_IDS.length)];
    const res = await fetch(`https://the-one-api.dev/v2/movie/${randomMovieId}/quote`, {
      headers: {
        'Authorization': `Bearer ${process.env.ONE_TOKEN}`
      },
      next: { revalidate: 0 }
    });

    if (!res.ok) return null;

    const data = await res.json();
    const docs = data.docs;
    if (!docs || docs.length === 0) return null;

    // Pick random
    const randomQuote = docs[Math.floor(Math.random() * docs.length)];

    // Fetch Character Name
    let charName = "Unknown Character";
    if (randomQuote.character) {
      try {
        const charRes = await fetch(`https://the-one-api.dev/v2/character/${randomQuote.character}`, {
          headers: { 'Authorization': `Bearer ${process.env.ONE_TOKEN}` }
        });

        if (charRes.ok) {
          const charData = await charRes.json();
          if (charData.docs && charData.docs.length > 0) {
            charName = charData.docs[0].name;
          }
        }
      } catch (e) {
        console.error("Error fetching character:", e);
      }
    }

    return {
      text: randomQuote.dialog,
      character: charName,
      movie: MOVIE_MAP[randomMovieId]
    };
  } catch (error) {
    return null;
  }
}

export default async function Home() {
  const quoteData = await getQuote();

  return (
    <main className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-10 bg-background/80 backdrop-blur-md border-b border-border shadow-sm">
        <div className="max-w-md mx-auto px-4 h-16 flex items-center gap-3">
          <div className="bg-primary p-2 rounded-lg text-primary-foreground">
            <Apple size={24} fill="currentColor" />
          </div>
          <div>
            <h1 className="text-lg font-bold leading-tight tracking-tight">Dieta do Guilherme</h1>
            <p className="text-xs text-muted-foreground font-medium">Foco no objetivo</p>
          </div>
        </div>
      </header>

      <div className="p-4 pt-6 max-w-md mx-auto flex flex-col gap-8 pb-10">
        <MealList />
        <WaterTracker />
        {quoteData && <QuoteDisplay text={quoteData.text} character={quoteData.character} movie={quoteData.movie} />}
      </div>
    </main>
  );
}
