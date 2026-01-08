
import { Quote } from "lucide-react"

interface QuoteDisplayProps {
    text: string;
    character: string;
    movie?: string;
}

export function QuoteDisplay({ text, character, movie }: QuoteDisplayProps) {
    return (
        <div className="w-full px-4 py-3 bg-muted/30 rounded-lg border border-border/50 flex gap-3 items-start">
            <Quote className="h-4 w-4 text-muted-foreground shrink-0 mt-1" />
            <div className="space-y-1">
                <p className="text-sm italic text-muted-foreground leading-relaxed">"{text}"</p>
                <div className="flex flex-col">
                    <p className="text-xs font-bold text-muted-foreground/80">— {character}</p>
                    {movie && <p className="text-[10px] text-muted-foreground/60 italic">{movie}</p>}
                </div>
            </div>
        </div>
    )
}
