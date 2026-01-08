
import {
    Drawer,
    DrawerContent,
    DrawerHeader,
    DrawerTitle,
    DrawerDescription,
    DrawerFooter,
    DrawerClose,
} from "@/components/ui/drawer"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { NutrientGroup, FOOD_DATABASE, FoodItem, calculateQuantity } from "@/lib/diet-data"
import { Check } from "lucide-react"
import { cn } from "@/lib/utils"

interface SubstitutionDrawerProps {
    open: boolean
    onOpenChange: (open: boolean) => void
    group: NutrientGroup
    portions: number
    currentSelectionId?: string
    onSelect: (item: FoodItem) => void
}

export function SubstitutionDrawer({
    open,
    onOpenChange,
    group,
    portions,
    currentSelectionId,
    onSelect,
}: SubstitutionDrawerProps) {
    const options = FOOD_DATABASE[group] || [];

    return (
        <Drawer open={open} onOpenChange={onOpenChange}>
            <DrawerContent className="max-h-[85vh]">
                <DrawerHeader>
                    <DrawerTitle>Substituir Alimento</DrawerTitle>
                    <DrawerDescription>
                        Escolha uma opção para ver a quantidade ajustada.
                    </DrawerDescription>
                </DrawerHeader>

                <div className="p-4 pt-0">
                    <ScrollArea className="h-[50vh] pr-4">
                        <div className="space-y-2">
                            {options.map((item) => {
                                const quantity = calculateQuantity(portions, item);
                                const isSelected = item.id === currentSelectionId;

                                return (
                                    <Button
                                        key={item.id}
                                        variant={isSelected ? "default" : "outline"}
                                        className={cn(
                                            "w-full justify-between h-auto py-4",
                                            isSelected && "bg-secondary hover:bg-secondary/90 text-secondary-foreground border-transparent"
                                        )}
                                        onClick={() => {
                                            onSelect(item);
                                            onOpenChange(false);
                                        }}
                                    >
                                        <div className="flex flex-col items-start gap-1">
                                            <span className="font-semibold text-base">{item.name}</span>
                                            <span className="text-xs opacity-90">
                                                {quantity} {item.unit}
                                            </span>
                                        </div>
                                        {isSelected && <Check className="h-5 w-5" />}
                                    </Button>
                                )
                            })}
                        </div>
                    </ScrollArea>
                </div>

                <DrawerFooter>
                    <DrawerClose asChild>
                        <Button variant="outline">Cancelar</Button>
                    </DrawerClose>
                </DrawerFooter>
            </DrawerContent>
        </Drawer>
    )
}
