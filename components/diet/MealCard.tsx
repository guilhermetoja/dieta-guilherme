
"use client"

import { useState } from "react"
import { Meal, FoodItem, calculateQuantity, getDefaultFood } from "@/lib/diet-data"
import { AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { SubstitutionDrawer } from "./SubstitutionDrawer"
import { Utensils, RefreshCw, Lock } from "lucide-react"

interface MealCardProps {
    meal: Meal
    selections: Record<number, FoodItem> // Key is component index
    onUpdateSelection: (index: number, food: FoodItem) => void
}

export function MealCard({ meal, selections, onUpdateSelection }: MealCardProps) {
    const [activeDrawer, setActiveDrawer] = useState<{
        index: number;
        baseQty: number;
        group: any;
    } | null>(null);

    return (
        <AccordionItem value={meal.id} className="border-b-0 mb-4 rounded-lg border border-border bg-card overflow-hidden shadow-sm">
            <AccordionTrigger className="px-4 py-3 hover:bg-muted/50 hover:no-underline [&[data-state=open]]:bg-secondary/50 [&[data-state=open]]:text-foreground transition-colors">
                <div className="flex items-center gap-2 text-base font-semibold text-foreground">
                    <Utensils className="h-4 w-4 text-primary" />
                    {meal.name}
                </div>
            </AccordionTrigger>
            <AccordionContent className="px-4 pb-4 pt-2">
                <div className="grid gap-3 pt-2">
                    {meal.components.map((comp, idx) => {
                        if (comp.isFixed) {
                            return (
                                <div
                                    key={idx}
                                    className="flex items-center justify-between p-3 bg-muted/50 rounded-lg text-muted-foreground border border-border"
                                >
                                    <div className="flex items-center gap-3">
                                        <Lock className="h-4 w-4 text-muted-foreground" />
                                        <span className="font-medium text-sm">{comp.fixedItemName}</span>
                                    </div>
                                    <span className="font-bold text-sm">{comp.fixedQuantity}g</span>
                                </div>
                            )
                        }

                        // Variable item
                        const selectedFood = selections[idx] || getDefaultFood(comp.group, comp.defaultFoodId);
                        const quantity = calculateQuantity(comp.portions, selectedFood);

                        return (
                            <div key={idx}>
                                <Button
                                    variant="outline"
                                    className="w-full h-auto flex items-center justify-between p-3 border-border hover:bg-secondary hover:text-secondary-foreground transition-all group bg-card"
                                    onClick={() => setActiveDrawer({
                                        index: idx,
                                        baseQty: comp.portions, // Here we pass portions
                                        group: comp.group
                                    })}
                                >
                                    <div className="flex flex-col items-start text-left">
                                        <span className="text-[10px] text-muted-foreground/70 uppercase tracking-wider font-bold mb-0.5">
                                            {comp.group === 'carb' ? 'Carboidrato' :
                                                comp.group === 'protein' ? 'Proteína' :
                                                    comp.group === 'fat' ? 'Gordura' :
                                                        comp.group === 'fruit' ? 'Fruta' : 'Vegetal'}
                                        </span>
                                        <span className="font-bold text-foreground group-hover:text-primary transition-colors">
                                            {selectedFood.name}
                                        </span>
                                    </div>

                                    <div className="flex items-center gap-3">
                                        <Badge variant="secondary" className="text-sm px-2.5 py-0.5 bg-muted text-foreground group-hover:bg-primary group-hover:text-primary-foreground font-bold border-0 transition-colors">
                                            {quantity}
                                            <span className="text-[10px] ml-0.5 opacity-70 font-normal">{selectedFood.unit}</span>
                                        </Badge>
                                        <RefreshCw className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                                    </div>
                                </Button>
                            </div>
                        )
                    })}
                </div>
            </AccordionContent>

            {activeDrawer && (
                <SubstitutionDrawer
                    open={!!activeDrawer}
                    onOpenChange={(open) => !open && setActiveDrawer(null)}
                    group={activeDrawer.group}
                    portions={activeDrawer.baseQty}
                    currentSelectionId={selections[activeDrawer.index]?.id}
                    onSelect={(food) => {
                        onUpdateSelection(activeDrawer.index, food);
                    }}
                />
            )}
        </AccordionItem>
    )
}
