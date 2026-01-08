
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
    defaultFoodId?: string;
}

export interface Meal {
    id: string;
    name: string;
    components: MealComponent[];
}

export const FOOD_DATABASE: Record<NutrientGroup, FoodItem[]> = {
    carb: [
        { id: 'arroz', name: 'Arroz integral ou branco cozido', group: 'carb', onePortionWeight: 100, unit: 'g' },
        { id: 'feijao', name: 'Feijão cozido', group: 'carb', onePortionWeight: 160, unit: 'g' },
        { id: 'pao', name: 'Pão com ou sem glúten', group: 'carb', onePortionWeight: 50, unit: 'g' },
        { id: 'achocolatado', name: 'Achocolatado em pó', group: 'carb', onePortionWeight: 30, unit: 'g' },
        { id: 'abobora', name: 'Abóbora cozida', group: 'carb', onePortionWeight: 260, unit: 'g' },
        { id: 'amaranto', name: 'Amaranto', group: 'carb', onePortionWeight: 120, unit: 'g' },
        { id: 'aveia', name: 'Aveia em flocos', group: 'carb', onePortionWeight: 30, unit: 'g' },
        { id: 'mandioquinha', name: 'Batata baroa/mandioquinha cozida', group: 'carb', onePortionWeight: 150, unit: 'g' },
        { id: 'batata_doce', name: 'Batata doce cozida', group: 'carb', onePortionWeight: 160, unit: 'g' },
        { id: 'batata', name: 'Batata inglesa cozida ou crua', group: 'carb', onePortionWeight: 145, unit: 'g' },
        { id: 'biscoito_arroz', name: 'Biscoito de arroz', group: 'carb', onePortionWeight: 30, unit: 'g' },
        { id: 'biscoito_maizena', name: 'Biscoito de maizena', group: 'carb', onePortionWeight: 25, unit: 'g' },
        { id: 'biscoito_polvilho', name: 'Biscoito de polvilho', group: 'carb', onePortionWeight: 30, unit: 'g' },
        { id: 'bolo', name: 'Bolo ou broa', group: 'carb', onePortionWeight: 50, unit: 'g' },
        { id: 'cara', name: 'Cará cozido', group: 'carb', onePortionWeight: 160, unit: 'g' },
        { id: 'caldo_cana', name: 'Caldo de cana', group: 'carb', onePortionWeight: 160, unit: 'g' },
        { id: 'cereal', name: 'Cereal matinal', group: 'carb', onePortionWeight: 30, unit: 'g' },
        { id: 'chocolate_doce', name: 'Chocolate ao leite ou branco', group: 'carb', onePortionWeight: 20, unit: 'g' },
        { id: 'cuscuz', name: 'Cuscuz cru', group: 'carb', onePortionWeight: 35, unit: 'g' },
        { id: 'doce_leite', name: 'Doce de leite', group: 'carb', onePortionWeight: 35, unit: 'g' },
        { id: 'ervilha', name: 'Ervilha cozida', group: 'carb', onePortionWeight: 150, unit: 'g' },
        { id: 'farinha_mandioca', name: 'Farinha de mandioca ou milho', group: 'carb', onePortionWeight: 35, unit: 'g' },
        { id: 'fuba', name: 'Fubá', group: 'carb', onePortionWeight: 35, unit: 'g' },
        { id: 'grao_bico', name: 'Grão-de-bico cozido', group: 'carb', onePortionWeight: 75, unit: 'g' },
        { id: 'goiabada', name: 'Goiabada', group: 'carb', onePortionWeight: 50, unit: 'g' },
        { id: 'granola', name: 'Granola sem açúcar', group: 'carb', onePortionWeight: 30, unit: 'g' },
        { id: 'inhame', name: 'Inhame cozido', group: 'carb', onePortionWeight: 90, unit: 'g' },
        { id: 'lentilha', name: 'Lentilha cozida', group: 'carb', onePortionWeight: 130, unit: 'g' },
        { id: 'mandioca', name: 'Mandioca cozida', group: 'carb', onePortionWeight: 100, unit: 'g' },
        { id: 'macarrao', name: 'Macarrão cozido (com ou sem glúten)', group: 'carb', onePortionWeight: 80, unit: 'g' },
        { id: 'milho', name: 'Milho cozido', group: 'carb', onePortionWeight: 100, unit: 'g' },
        { id: 'polvilho', name: 'Polvilho azedo ou doce', group: 'carb', onePortionWeight: 35, unit: 'g' },
        { id: 'quinoa', name: 'Quinoa cozida', group: 'carb', onePortionWeight: 100, unit: 'g' },
        { id: 'tapioca', name: 'Tapioca', group: 'carb', onePortionWeight: 45, unit: 'g' },
    ],
    protein: [
        { id: 'patinho', name: 'Filé mignon, patinho ou coxão duro', group: 'protein', onePortionWeight: 70, unit: 'g' },
        { id: 'frango', name: 'Frango peito', group: 'protein', onePortionWeight: 100, unit: 'g' },
        { id: 'iogurte', name: 'Iogurte desnatado 0% gordura', group: 'protein', onePortionWeight: 250, unit: 'g' },
        { id: 'whey', name: 'Proteína em pó (Whey, etc)', group: 'protein', onePortionWeight: 40, unit: 'g' },
        { id: 'atum', name: 'Atum cozido em lata ou grelhado', group: 'protein', onePortionWeight: 110, unit: 'g' },
        { id: 'camarao', name: 'Camarão e outros frutos do mar', group: 'protein', onePortionWeight: 160, unit: 'g' },
        { id: 'clara', name: 'Clara de ovo', group: 'protein', onePortionWeight: 9, unit: 'un' },
        { id: 'claras_past', name: 'Claras pasteurizadas', group: 'protein', onePortionWeight: 330, unit: 'g' },
        { id: 'creme_ricota', name: 'Creme de ricota light', group: 'protein', onePortionWeight: 100, unit: 'g' },
        { id: 'coalhada', name: 'Coalhada desnatada', group: 'protein', onePortionWeight: 250, unit: 'g' },
        { id: 'coracao', name: 'Coração de galinha', group: 'protein', onePortionWeight: 90, unit: 'g' },
        { id: 'figado', name: 'Figado', group: 'protein', onePortionWeight: 75, unit: 'g' },
        { id: 'musculo', name: 'Músculo bovino', group: 'protein', onePortionWeight: 80, unit: 'g' },
        { id: 'peixe', name: 'Peixe branco', group: 'protein', onePortionWeight: 140, unit: 'g' },
        { id: 'picanha', name: 'Picanha', group: 'protein', onePortionWeight: 70, unit: 'g' },
        { id: 'queijo_cottage', name: 'Queijo cottage', group: 'protein', onePortionWeight: 150, unit: 'g' },
        { id: 'queijo_ricota', name: 'Queijo ricota fresca (até 12% gordura)', group: 'protein', onePortionWeight: 100, unit: 'g' },
        { id: 'queijo_minas_light', name: 'Queijo minas frescal light', group: 'protein', onePortionWeight: 85, unit: 'g' },
        { id: 'queijo_parmesao', name: 'Queijo parmêsão light', group: 'protein', onePortionWeight: 50, unit: 'g' },
        { id: 'salmao', name: 'Salmão', group: 'protein', onePortionWeight: 60, unit: 'g' },
        { id: 'sardinha', name: 'Sardinha em lata', group: 'protein', onePortionWeight: 80, unit: 'g' },
        { id: 'lombo', name: 'Suíno lombo', group: 'protein', onePortionWeight: 70, unit: 'g' },
        { id: 'tofu', name: 'Tofu orgânico', group: 'protein', onePortionWeight: 200, unit: 'g' },
    ],
    fat: [
        { id: 'azeite', name: 'Azeite', group: 'fat', onePortionWeight: 10, unit: 'g' },
        { id: 'manteiga', name: 'Manteiga', group: 'fat', onePortionWeight: 10, unit: 'g' },
        { id: 'queijo_mussarela', name: 'Queijo mussarela', group: 'fat', onePortionWeight: 30, unit: 'g' },
        { id: 'abacate', name: 'Abacate/Avocado', group: 'fat', onePortionWeight: 60, unit: 'g' },
        { id: 'amendoas', name: 'Amêndoas ou amendoim', group: 'fat', onePortionWeight: 15, unit: 'g' },
        { id: 'azeitona', name: 'Azeitona', group: 'fat', onePortionWeight: 75, unit: 'g' },
        { id: 'castanhas', name: 'Castanhas', group: 'fat', onePortionWeight: 15, unit: 'g' },
        { id: 'chocolate_amargo', name: 'Chocolate 60% ou mais', group: 'fat', onePortionWeight: 15, unit: 'g' },
        { id: 'coco_lascas', name: 'Coco em lascas', group: 'fat', onePortionWeight: 15, unit: 'g' },
        { id: 'coco_pedacos', name: 'Coco em pedaços', group: 'fat', onePortionWeight: 25, unit: 'g' },
        { id: 'creme_leite', name: 'Creme de leite', group: 'fat', onePortionWeight: 30, unit: 'g' },
        { id: 'cream_cheese', name: 'Cream cheese', group: 'fat', onePortionWeight: 30, unit: 'g' },
        { id: 'ovo', name: 'Gema ou ovo inteiro', group: 'fat', onePortionWeight: 1, unit: 'un' },
        { id: 'iogurte_integral', name: 'Iogurte integral', group: 'fat', onePortionWeight: 140, unit: 'g' },
        { id: 'leite_integral', name: 'Leite integral', group: 'fat', onePortionWeight: 130, unit: 'ml' },
        { id: 'leite_desnatado', name: 'Leite desnatado ou semi', group: 'fat', onePortionWeight: 260, unit: 'ml' },
        { id: 'nozes', name: 'Nozes', group: 'fat', onePortionWeight: 15, unit: 'g' },
        { id: 'pasta_amendoim', name: 'Pasta de amendoim ou avelã', group: 'fat', onePortionWeight: 15, unit: 'g' },
        { id: 'pacoca', name: 'Paçoca', group: 'fat', onePortionWeight: 15, unit: 'g' },
        { id: 'queijo_minas', name: 'Queijo minas frescal', group: 'fat', onePortionWeight: 35, unit: 'g' },
        { id: 'requeijao', name: 'Requeijão light', group: 'fat', onePortionWeight: 50, unit: 'g' },
        { id: 'sementes', name: 'Sementes (chia, etc)', group: 'fat', onePortionWeight: 15, unit: 'g' },
    ],
    fruit: [
        { id: 'banana', name: 'Banana', group: 'fruit', onePortionWeight: 90, unit: 'g' },
        { id: 'maca', name: 'Maçã', group: 'fruit', onePortionWeight: 190, unit: 'g' },
        { id: 'abacaxi', name: 'Abacaxi', group: 'fruit', onePortionWeight: 200, unit: 'g' },
        { id: 'agua_coco', name: 'Água de coco', group: 'fruit', onePortionWeight: 500, unit: 'ml' },
        { id: 'banana_terra', name: 'Banana da terra', group: 'fruit', onePortionWeight: 80, unit: 'g' },
        { id: 'goiaba', name: 'Goiaba', group: 'fruit', onePortionWeight: 150, unit: 'g' },
        { id: 'laranja', name: 'Laranja', group: 'fruit', onePortionWeight: 210, unit: 'g' },
        { id: 'mamao', name: 'Mamão', group: 'fruit', onePortionWeight: 230, unit: 'g' },
        { id: 'manga', name: 'Manga', group: 'fruit', onePortionWeight: 160, unit: 'g' },
        { id: 'melancia', name: 'Melancia', group: 'fruit', onePortionWeight: 330, unit: 'g' },
        { id: 'morango', name: 'Morango', group: 'fruit', onePortionWeight: 300, unit: 'g' },
        { id: 'pera', name: 'Pêra', group: 'fruit', onePortionWeight: 175, unit: 'g' },
        { id: 'uva', name: 'Uva verde ou roxa sem caroço', group: 'fruit', onePortionWeight: 180, unit: 'g' },
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
            { group: 'fruit', portions: 1.0, defaultFoodId: 'maca' }, // 190g Maca
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
