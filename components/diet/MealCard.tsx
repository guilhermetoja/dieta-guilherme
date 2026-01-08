
"use client"

import { useState } from "react"
import { Meal, FoodItem, calculateQuantity, getDefaultFood, NutrientGroup } from "@/lib/diet-data"
import { AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { SubstitutionDrawer } from "./SubstitutionDrawer"
import { Utensils, RefreshCw, Lock, Plus, Trash2 } from "lucide-react"

interface MealCardProps {
    meal: Meal
    onUpdateSelection: (componentId: string, food: FoodItem) => void
    onAdd: (group: NutrientGroup) => void
    onRemove: (componentId: string, group: NutrientGroup) => void
}

export function MealCard({ meal, onUpdateSelection, onAdd, onRemove }: MealCardProps) {
    const [activeDrawer, setActiveDrawer] = useState<{
        componentId: string;
        baseQty: number;
        group: any;
    } | null>(null);

    // Group components by nutrient group
    const groups: Record<NutrientGroup, typeof meal.components> = {
        carb: [],
        protein: [],
        fat: [],
        vegetable: [],
        fruit: []
    };

    meal.components.forEach(comp => {
        if (groups[comp.group]) {
            groups[comp.group].push(comp);
        }
    });

    const orderedGroups: NutrientGroup[] = ['carb', 'protein', 'vegetable', 'fruit', 'fat'];

    return (
        <AccordionItem value={meal.id} className="border-b-0 mb-4 rounded-lg border border-border bg-card overflow-hidden shadow-sm">
            <AccordionTrigger className="px-4 py-3 hover:bg-muted/50 hover:no-underline [&[data-state=open]]:bg-secondary/50 [&[data-state=open]]:text-foreground transition-colors">
                <div className="flex items-center gap-2 text-base font-semibold text-foreground">
                    <Utensils className="h-4 w-4 text-primary" />
                    {meal.name}
                </div>
            </AccordionTrigger>
            <AccordionContent className="px-4 pb-4 pt-2">
                <div className="space-y-6 pt-2">
                    {orderedGroups.map(group => {
                        const items = groups[group];
                        if (items.length === 0) return null;

                        const groupLabel = {
                            carb: 'Carboidratos',
                            protein: 'Proteínas',
                            fat: 'Gordura',
                            fruit: 'Frutas',
                            vegetable: 'Vegetais'
                        }[group];

                        return (
                            <div key={group} className="space-y-3">
                                <div className="flex items-center justify-between">
                                    <h4 className="text-xs font-bold uppercase tracking-wider text-muted-foreground">{groupLabel}</h4>
                                    {!items[0].isFixed && (
                                        <Button
                                            variant="ghost"
                                            size="icon"
                                            className="h-6 w-6 text-muted-foreground hover:text-foreground"
                                            onClick={() => onAdd(group)}
                                        >
                                            <Plus className="h-3 w-3" />
                                        </Button>
                                    )}
                                </div>

                                <div className="space-y-2">
                                    {items.map((comp) => {
                                        if (comp.isFixed) {
                                            return (
                                                <div
                                                    key={comp.id}
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
                                        const selectedFood = getDefaultFood(comp.group, comp.selectedFoodId || comp.defaultFoodId);
                                        const quantity = calculateQuantity(comp.portions, selectedFood);
                                        const canRemove = items.length > 1;

                                        return (
                                            <div key={comp.id} className="flex gap-2">
                                                <Button
                                                    variant="outline"
                                                    className="flex-1 min-w-0 h-auto flex items-center justify-between p-3 border-border hover:bg-secondary hover:text-secondary-foreground transition-all group bg-card"
                                                    onClick={() => setActiveDrawer({
                                                        componentId: comp.id,
                                                        baseQty: comp.portions,
                                                        group: comp.group
                                                    })}
                                                >
                                                    <div className="flex flex-col items-start text-left mr-2 min-w-0">
                                                        <span className="font-bold text-foreground group-hover:text-primary transition-colors text-wrap break-words leading-tight">
                                                            {selectedFood.name}
                                                        </span>
                                                    </div>

                                                    <div className="flex items-center gap-3 shrink-0">
                                                        <Badge variant="secondary" className="text-sm px-2.5 py-0.5 bg-muted text-foreground group-hover:bg-primary group-hover:text-primary-foreground font-bold border-0 transition-colors whitespace-nowrap">
                                                            {quantity}
                                                            <span className="text-[10px] ml-0.5 opacity-70 font-normal">{selectedFood.unit}</span>
                                                        </Badge>
                                                        <RefreshCw className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                                                    </div>
                                                </Button>

                                                {canRemove && (
                                                    <Button
                                                        variant="ghost"
                                                        size="icon"
                                                        className="h-auto w-10 shrink-0 text-muted-foreground hover:text-destructive hover:bg-destructive/10"
                                                        onClick={() => onRemove(comp.id, comp.group)}
                                                    >
                                                        <Trash2 className="h-4 w-4" />
                                                    </Button>
                                                )}
                                            </div>
                                        )
                                    })}
                                </div>


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
                    currentSelectionId={meal.components.find(c => c.id === activeDrawer.componentId)?.selectedFoodId}
                    onSelect={(food) => {
                        onUpdateSelection(activeDrawer.componentId, food);
                    }}
                />
            )}
        </AccordionItem>
    )
}
