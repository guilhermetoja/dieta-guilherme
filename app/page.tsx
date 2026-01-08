
import { MealList } from "@/components/diet/MealList";
import { WaterTracker } from "@/components/diet/WaterTracker";
import { Apple } from "lucide-react";

export default function Home() {
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

      <div className="p-4 pt-6">
        <MealList />
        <WaterTracker />
      </div>
    </main>
  );
}
