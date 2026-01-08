
"use client"

import { useState } from "react"
import { DIET_PLAN, FoodItem, Meal, NutrientGroup, MealComponent, getGroupTotalPortions, getDefaultFood } from "@/lib/diet-data"
import { Accordion } from "@/components/ui/accordion"
import { MealCard } from "./MealCard"

export function MealList() {
    // We now manage the entire Meal structure in state to allow adding/removing components
    const [meals, setMeals] = useState<Meal[]>(DIET_PLAN);

    const handleUpdateSelection = (mealId: string, componentId: string, food: FoodItem) => {
        setMeals(prev => prev.map(meal => {
            if (meal.id !== mealId) return meal;

            return {
                ...meal,
                components: meal.components.map(comp => {
                    if (comp.id !== componentId) return comp;
                    return { ...comp, selectedFoodId: food.id };
                })
            };
        }));
    };

    const handleAddScale = (mealIndex: number, group: NutrientGroup) => {
        setMeals(prev => {
            const newMeals = [...prev];
            const meal = { ...newMeals[mealIndex] };

            // 1. Calculate Total Budget for this group (from default plan)
            const totalBudget = getGroupTotalPortions(mealIndex, group);

            // 2. Get existing items of this group
            const existingGroupItems = meal.components.filter(c => c.group === group);

            // 3. Create new count (current + 1)
            const newCount = existingGroupItems.length + 1;
            const newPortion = totalBudget / newCount;

            // 4. Update existing items portions
            meal.components = meal.components.map(c => {
                if (c.group === group) {
                    return { ...c, portions: newPortion };
                }
                return c;
            });

            // 5. Add new item
            const defaultFood = getDefaultFood(group);
            const newComponent: MealComponent = {
                id: `${meal.id}_${group}_${Date.now()}`,
                group: group,
                portions: newPortion,
                defaultFoodId: defaultFood.id,
                selectedFoodId: defaultFood.id
            };

            // Insert it after the last item of this group
            const lastIndex = meal.components.map(c => c.group).lastIndexOf(group);
            if (lastIndex >= 0) {
                meal.components.splice(lastIndex + 1, 0, newComponent);
            } else {
                meal.components.push(newComponent);
            }

            newMeals[mealIndex] = meal;
            return newMeals;
        });
    };

    const handleRemoveScale = (mealIndex: number, componentId: string, group: NutrientGroup) => {
        setMeals(prev => {
            const newMeals = [...prev];
            const meal = { ...newMeals[mealIndex] };

            // 1. Calculate Total Budget
            const totalBudget = getGroupTotalPortions(mealIndex, group);

            // 2. Filter out the removed item
            const remainingGroupItems = meal.components.filter(c => c.group === group && c.id !== componentId);

            // 3. Redistribute portions
            const newCount = remainingGroupItems.length;
            const newPortion = newCount > 0 ? totalBudget / newCount : 0;

            // 4. Reconstruct components list
            // We keep all non-group items, and replace the group-items with the updated list
            // However, to keep order, it's easier to map and filter

            const updatedComponents = meal.components
                .filter(c => c.id !== componentId) // Remove target
                .map(c => {
                    if (c.group === group) {
                        return { ...c, portions: newPortion };
                    }
                    return c;
                });

            meal.components = updatedComponents;
            newMeals[mealIndex] = meal;
            return newMeals;
        });
    };

    return (
        <Accordion type="single" collapsible className="space-y-4 w-full">
            {meals.map((meal, index) => (
                <MealCard
                    key={meal.id}
                    meal={meal}
                    onUpdateSelection={(compId, food) => handleUpdateSelection(meal.id, compId, food)}
                    onAdd={(group) => handleAddScale(index, group)}
                    onRemove={(compId, group) => handleRemoveScale(index, compId, group)}
                />
            ))}
        </Accordion>
    )
}
