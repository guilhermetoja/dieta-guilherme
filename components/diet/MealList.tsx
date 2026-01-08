
"use client"

import { useState, useEffect } from "react"
import { DIET_PLAN, FoodItem, Meal, NutrientGroup } from "@/lib/diet-data"
import { Accordion } from "@/components/ui/accordion"
import { MealCard } from "./MealCard"

// Type for global selections state: MealID -> ComponentIndex -> FoodItem
type DietSelections = Record<string, Record<number, FoodItem>>;

export function MealList() {
    const [selections, setSelections] = useState<DietSelections>({});
    // No persistence wanted, just local state for the session
    // const [mounted, setMounted] = useState(false);
    // useEffect(() => { setMounted(true) }, []);

    // We can skip the 'mounted' check since we are not hydrating from localStorage anymore
    // causing a mismatch. It's client component anyway.

    const handleUpdate = (mealId: string, componentIndex: number, food: FoodItem) => {
        setSelections(prev => ({
            ...prev,
            [mealId]: {
                ...(prev[mealId] || {}),
                [componentIndex]: food
            }
        }));
    };

    return (
        <Accordion type="single" collapsible className="space-y-4 max-w-md mx-auto pb-20">
            {DIET_PLAN.map(meal => (
                <MealCard
                    key={meal.id}
                    meal={meal}
                    selections={selections[meal.id] || {}}
                    onUpdateSelection={(idx, food) => handleUpdate(meal.id, idx, food)}
                />
            ))}
        </Accordion>
    )
}
