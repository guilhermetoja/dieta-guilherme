
"use client"

import { Droplets } from "lucide-react"

export function WaterTracker() {
    return (
        <div className="w-full max-w-md mx-auto mt-6 p-6 rounded-2xl border border-border bg-card/50 backdrop-blur-sm">
            <div className="flex items-center gap-4">
                <div className="p-3 bg-blue-500/10 rounded-xl">
                    <Droplets className="h-6 w-6 text-blue-500" />
                </div>
                <div>
                    <h3 className="text-lg font-bold text-foreground">Hidratação</h3>
                    <p className="text-sm text-muted-foreground font-medium">Meta diária: <span className="text-blue-500 font-bold">9 Litros</span></p>
                </div>
            </div>
        </div>
    )
}
