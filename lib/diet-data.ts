
export type NutrientGroup = 'carb' | 'protein' | 'fat' | 'fruit' | 'vegetable';

export interface FoodItem {
    id: string;
    name: string;
    group: NutrientGroup;
    onePortionWeight: number; // The weight/quantity that represents 1.0 portion
    unit: string;
}

export interface MealComponent {
    group: NutrientGroup;
    portions: number;
    isFixed?: boolean;
    fixedItemName?: string;
    fixedQuantity?: number;
    defaultFoodId?: string; // Optional: specify which food is default for this slot
}

export interface Meal {
    id: string;
    name: string;
    components: MealComponent[];
}

export const FOOD_DATABASE: Record<NutrientGroup, FoodItem[]> = {
    carb: [
        { id: 'arroz', name: 'Arroz Branco Cozido', group: 'carb', onePortionWeight: 100, unit: 'g' },
        { id: 'feijao', name: 'Feijão Carioca Cozido', group: 'carb', onePortionWeight: 160, unit: 'g' }, // Adjusted so 1.15 portions = 184g
        { id: 'pao', name: 'Pão de Forma', group: 'carb', onePortionWeight: 50, unit: 'g' },
        { id: 'mandioca', name: 'Mandioca Cozida', group: 'carb', onePortionWeight: 100, unit: 'g' },
        { id: 'batata', name: 'Batata Inglesa Cozida', group: 'carb', onePortionWeight: 140, unit: 'g' },
        { id: 'batata_doce', name: 'Batata Doce Cozida', group: 'carb', onePortionWeight: 80, unit: 'g' },
        { id: 'macarrao', name: 'Macarrão Cozido', group: 'carb', onePortionWeight: 80, unit: 'g' },
        { id: 'aveia', name: 'Aveia', group: 'carb', onePortionWeight: 30, unit: 'g' },
        { id: 'cuscuz', name: 'Cuscuz de Milho', group: 'carb', onePortionWeight: 80, unit: 'g' },
        { id: 'tapioca', name: 'Tapioca (Goma)', group: 'carb', onePortionWeight: 40, unit: 'g' },
    ],
    protein: [
        { id: 'frango', name: 'Peito de Frango Grelhado', group: 'protein', onePortionWeight: 100, unit: 'g' },
        { id: 'patinho', name: 'Patinho Moído', group: 'protein', onePortionWeight: 70, unit: 'g' }, // Adjusted so 1.25 portions = 87.5g
        { id: 'peixe', name: 'Filé de Tilápia', group: 'protein', onePortionWeight: 110, unit: 'g' },
        { id: 'iogurte', name: 'Iogurte Desnatado', group: 'protein', onePortionWeight: 250, unit: 'g' }, // Adjusted so 1.25 portions = 312.5g
        { id: 'whey', name: 'Whey Protein', group: 'protein', onePortionWeight: 40, unit: 'g' }, // Adjusted so 1.25 portions = 50g
        { id: 'ovo', name: 'Ovo Cozido', group: 'protein', onePortionWeight: 2, unit: 'un' },
    ],
    fat: [
        { id: 'azeite', name: 'Azeite de Oliva', group: 'fat', onePortionWeight: 10, unit: 'g' },
        { id: 'manteiga', name: 'Manteiga', group: 'fat', onePortionWeight: 10, unit: 'g' },
        { id: 'queijo_mussarela', name: 'Queijo Mussarela', group: 'fat', onePortionWeight: 30, unit: 'g' }, // Adjusted so 1.25 portions = 37.5g
        { id: 'abacate', name: 'Abacate', group: 'fat', onePortionWeight: 60, unit: 'g' },
        { id: 'castanha', name: 'Castanha de Caju', group: 'fat', onePortionWeight: 20, unit: 'g' },
        { id: 'pasta_amendoim', name: 'Pasta de Amendoim', group: 'fat', onePortionWeight: 15, unit: 'g' },
    ],
    fruit: [
        { id: 'banana', name: 'Banana Prata', group: 'fruit', onePortionWeight: 90, unit: 'g' },
        { id: 'maca', name: 'Maçã', group: 'fruit', onePortionWeight: 190, unit: 'g' },
        { id: 'uva', name: 'Uva', group: 'fruit', onePortionWeight: 100, unit: 'g' },
        { id: 'mamao', name: 'Mamão', group: 'fruit', onePortionWeight: 140, unit: 'g' },
        { id: 'melancia', name: 'Melancia', group: 'fruit', onePortionWeight: 200, unit: 'g' },
    ],
    vegetable: [
        { id: 'cenoura', name: 'Cenoura Cozida', group: 'vegetable', onePortionWeight: 100, unit: 'g' },
        { id: 'brocolis', name: 'Brócolis', group: 'vegetable', onePortionWeight: 100, unit: 'g' },
        { id: 'salada', name: 'Salada de Folhas', group: 'vegetable', onePortionWeight: 1, unit: 'vontade' },
    ]
};

export const DIET_PLAN: Meal[] = [
    {
        id: 'cafe_manha',
        name: 'Café da Manhã',
        components: [
            { group: 'carb', portions: 2.3, defaultFoodId: 'pao' }, // 115g Pao
            { group: 'protein', portions: 1.25, defaultFoodId: 'iogurte' }, // 312.5g Iogurte
            { group: 'fat', portions: 1.5, defaultFoodId: 'manteiga' }, // 15g Manteiga
            { group: 'fruit', portions: 1.0, defaultFoodId: 'banana' }, // 90g Banana
        ]
    },
    {
        id: 'almoco',
        name: 'Almoço',
        components: [
            { group: 'carb', portions: 1.15, defaultFoodId: 'arroz' }, // 115g Arroz
            { group: 'carb', portions: 1.15, defaultFoodId: 'feijao' }, // 184g Feijao
            { group: 'protein', portions: 1.25, defaultFoodId: 'patinho' }, // 87.5g Patinho
            { group: 'fat', portions: 1.0, defaultFoodId: 'azeite' }, // 10g Azeite
            { group: 'vegetable', portions: 0, isFixed: true, fixedItemName: 'Cenoura', fixedQuantity: 150 },
            { group: 'fruit', portions: 1.0, defaultFoodId: 'maca' }, // 190g Maca (Example, user said Banana too)
        ]
    },
    {
        id: 'lanche_tarde',
        name: 'Lanche da Tarde',
        components: [
            { group: 'carb', portions: 2.3, defaultFoodId: 'pao' }, // 115g Pao
            { group: 'protein', portions: 1.25, defaultFoodId: 'whey' }, // 50g Whey
            { group: 'fat', portions: 1.25, defaultFoodId: 'queijo_mussarela' }, // 37.5g Queijo
            { group: 'fruit', portions: 1.0, defaultFoodId: 'banana' },
        ]
    },
    {
        id: 'janta',
        name: 'Janta',
        components: [
            { group: 'carb', portions: 1.15, defaultFoodId: 'arroz' }, // 115g Arroz
            { group: 'carb', portions: 1.15, defaultFoodId: 'feijao' }, // 184g Feijao
            { group: 'protein', portions: 1.25, defaultFoodId: 'frango' }, // 125g Frango
            { group: 'fat', portions: 1.5, defaultFoodId: 'azeite' }, // 15g Azeite
            { group: 'vegetable', portions: 0, isFixed: true, fixedItemName: 'Cenoura', fixedQuantity: 150 },
            { group: 'fruit', portions: 1.0, defaultFoodId: 'maca' },
        ]
    }
];

export function getDefaultFood(group: NutrientGroup, preferredId?: string): FoodItem {
    if (preferredId) {
        const found = FOOD_DATABASE[group].find(f => f.id === preferredId);
        if (found) return found;
    }
    return FOOD_DATABASE[group][0];
}

export function calculateQuantity(portions: number, foodItem: FoodItem): number {
    return Math.round(portions * foodItem.onePortionWeight);
}
