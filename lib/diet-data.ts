
export type NutrientGroup = 'carb' | 'protein' | 'fat' | 'fruit' | 'vegetable';

export interface FoodItem {
    id: string;
    name: string;
    group: NutrientGroup;
    onePortionWeight: number; // The weight/quantity that represents 1.0 portion
    unit: string;
}

export interface MealComponent {
    id: string; // Unique instance ID
    group: NutrientGroup;
    portions: number;
    isFixed?: boolean;
    fixedItemName?: string;
    fixedQuantity?: number;
    defaultFoodId?: string;
    // Runtime only:
    selectedFoodId?: string;
}

export interface Meal {
    id: string;
    name: string;
    components: MealComponent[];
}

export const FOOD_DATABASE: Record<NutrientGroup, FoodItem[]> = {
    carb: [
        { id: 'achocolatado_po', name: 'Achocolatado em Pó', group: 'carb', onePortionWeight: 30, unit: 'g' },
        { id: 'achocolatado_po_light', name: 'Achocolatado em Pó Light ou com maior teor de cacau', group: 'carb', onePortionWeight: 35, unit: 'g' },
        { id: 'abobora_crua', name: 'Abóbora Crua', group: 'carb', onePortionWeight: 320, unit: 'g' },
        { id: 'abobora_cozida', name: 'Abóbora Cozida', group: 'carb', onePortionWeight: 260, unit: 'g' },
        { id: 'amaranto', name: 'Amaranto', group: 'carb', onePortionWeight: 120, unit: 'g' },
        { id: 'arroz_cozido', name: 'Arroz Integral ou Branco Cozido', group: 'carb', onePortionWeight: 100, unit: 'g' },
        { id: 'arroz_cru', name: 'Arroz Integral ou Branco Cru', group: 'carb', onePortionWeight: 35, unit: 'g' },
        { id: 'aveia_flocos', name: 'Aveia em Flocos', group: 'carb', onePortionWeight: 30, unit: 'g' },
        { id: 'aveia_farelo', name: 'Aveia em Farelo ou Farinha', group: 'carb', onePortionWeight: 50, unit: 'g' },
        { id: 'batata_baroa', name: 'Batata Baroa/Mandioquinha Cozida', group: 'carb', onePortionWeight: 150, unit: 'g' },
        { id: 'batata_doce_crua', name: 'Batata Doce Crua', group: 'carb', onePortionWeight: 105, unit: 'g' },
        { id: 'batata_doce_cozida', name: 'Batata Doce Cozida', group: 'carb', onePortionWeight: 160, unit: 'g' },
        { id: 'batata_inglesa', name: 'Batata Inglesa Cozida ou Crua', group: 'carb', onePortionWeight: 145, unit: 'g' },
        { id: 'biscoito_arroz', name: 'Biscoito de Arroz', group: 'carb', onePortionWeight: 30, unit: 'g' },
        { id: 'biscoito_maizena', name: 'Biscoito de Maizena', group: 'carb', onePortionWeight: 25, unit: 'g' },
        { id: 'biscoito_polvilho', name: 'Biscoito de Polvilho', group: 'carb', onePortionWeight: 30, unit: 'g' },
        { id: 'bolo_broa', name: 'Bolo ou Broa', group: 'carb', onePortionWeight: 50, unit: 'g' },
        { id: 'cara_cozido', name: 'Cará Cozido', group: 'carb', onePortionWeight: 160, unit: 'g' },
        { id: 'caldo_cana', name: 'Caldo de Cana', group: 'carb', onePortionWeight: 160, unit: 'g' },
        { id: 'cereal_matinal', name: 'Cereal Matinal', group: 'carb', onePortionWeight: 30, unit: 'g' },
        { id: 'chocolate_leite', name: 'Chocolate ao Leite', group: 'carb', onePortionWeight: 20, unit: 'g' },
        { id: 'chocolate_branco', name: 'Chocolate Branco', group: 'carb', onePortionWeight: 20, unit: 'g' },
        { id: 'creme_arroz_po', name: 'Creme de Arroz em Pó', group: 'carb', onePortionWeight: 30, unit: 'g' },
        { id: 'cuscuz_cru', name: 'Cuscuz Cru', group: 'carb', onePortionWeight: 35, unit: 'g' },
        { id: 'cuscuz_marroquino', name: 'Cuscuz Marroquino', group: 'carb', onePortionWeight: 35, unit: 'g' },
        { id: 'doce_leite', name: 'Doce de Leite', group: 'carb', onePortionWeight: 35, unit: 'g' },
        { id: 'edamame', name: 'Edamame', group: 'carb', onePortionWeight: 100, unit: 'g' },
        { id: 'ervilha_cozida', name: 'Ervilha Cozida', group: 'carb', onePortionWeight: 150, unit: 'g' },
        { id: 'farinha_arroz', name: 'Farinha de Arroz', group: 'carb', onePortionWeight: 30, unit: 'g' },
        { id: 'farinha_batata_doce', name: 'Farinha de Batata Doce', group: 'carb', onePortionWeight: 40, unit: 'g' },
        { id: 'farinha_grao_bico', name: 'Farinha de Grão-de-Bico', group: 'carb', onePortionWeight: 50, unit: 'g' },
        { id: 'farinha_mandioca', name: 'Farinha de Mandioca', group: 'carb', onePortionWeight: 35, unit: 'g' },
        { id: 'farinha_milho', name: 'Farinha de Milho', group: 'carb', onePortionWeight: 35, unit: 'g' },
        { id: 'farinha_panko', name: 'Farinha Panko', group: 'carb', onePortionWeight: 40, unit: 'g' },
        { id: 'farinha_teff', name: 'Farinha de Teff', group: 'carb', onePortionWeight: 35, unit: 'g' },
        { id: 'feijao_cozido', name: 'Feijão Cozido', group: 'carb', onePortionWeight: 160, unit: 'g' },
        { id: 'flocos_arroz', name: 'Flocos de Arroz', group: 'carb', onePortionWeight: 35, unit: 'g' },
        { id: 'folha_arroz', name: 'Folha/Papel de Arroz', group: 'carb', onePortionWeight: 35, unit: 'g' },
        { id: 'fuba', name: 'Fubá', group: 'carb', onePortionWeight: 35, unit: 'g' },
        { id: 'grao_bico_cozido', name: 'Grão-de-Bico Cozido', group: 'carb', onePortionWeight: 75, unit: 'g' },
        { id: 'goiabada', name: 'Goiabada ou qualquer outro doce de fruta', group: 'carb', onePortionWeight: 50, unit: 'g' },
        { id: 'granola_sem_acucar', name: 'Granola Sem Açúcar', group: 'carb', onePortionWeight: 30, unit: 'g' },
        { id: 'inhame_cozido', name: 'Inhame Cozido', group: 'carb', onePortionWeight: 90, unit: 'g' },
        { id: 'lentilha_cozida', name: 'Lentilha Cozida', group: 'carb', onePortionWeight: 130, unit: 'g' },
        { id: 'leite_condensado', name: 'Leite Condensado', group: 'carb', onePortionWeight: 40, unit: 'g' },
        { id: 'leite_condensado_light', name: 'Leite Condensado Light', group: 'carb', onePortionWeight: 45, unit: 'g' },
        { id: 'leite_arroz', name: 'Leite de Arroz', group: 'carb', onePortionWeight: 260, unit: 'g' },
        { id: 'leite_aveia', name: 'Leite de Aveia', group: 'carb', onePortionWeight: 300, unit: 'g' },
        { id: 'leite_soja', name: 'Leite de Soja', group: 'carb', onePortionWeight: 230, unit: 'g' },
        { id: 'mandioca_cozida', name: 'Mandioca Cozida', group: 'carb', onePortionWeight: 100, unit: 'g' },
        { id: 'macarrao_bifun_cru', name: 'Macarrão Bifun cru', group: 'carb', onePortionWeight: 35, unit: 'g' },
        { id: 'macarrao_cozido', name: 'Macarrão com ou sem glúten cozido', group: 'carb', onePortionWeight: 80, unit: 'g' },
        { id: 'mel', name: 'Mel', group: 'carb', onePortionWeight: 30, unit: 'g' },
        { id: 'melado', name: 'Melado', group: 'carb', onePortionWeight: 30, unit: 'g' },
        { id: 'milho_cozido', name: 'Milho Cozido', group: 'carb', onePortionWeight: 100, unit: 'g' },
        { id: 'milho_cru', name: 'Milho Cru', group: 'carb', onePortionWeight: 90, unit: 'g' },
        { id: 'nutella', name: 'Nutella', group: 'carb', onePortionWeight: 20, unit: 'g' },
        { id: 'nescau_60', name: 'Nescau 60% menos açúcar', group: 'carb', onePortionWeight: 40, unit: 'g' },
        { id: 'pao', name: 'Pão com ou sem glúten', group: 'carb', onePortionWeight: 50, unit: 'g' },
        { id: 'pudim', name: 'Pudim', group: 'carb', onePortionWeight: 55, unit: 'g' },
        { id: 'puff_trigo', name: 'Puff de Trigo', group: 'carb', onePortionWeight: 35, unit: 'g' },
        { id: 'polvilho', name: 'Polvilho Azedo ou Doce', group: 'carb', onePortionWeight: 35, unit: 'g' },
        { id: 'wrap', name: 'Wrap com ou sem glúten', group: 'carb', onePortionWeight: 50, unit: 'g' },
        { id: 'suco_integral', name: 'Suco Integral Sem Açúcar', group: 'carb', onePortionWeight: 260, unit: 'g' },
        { id: 'soja_graos', name: 'Soja em Grãos Cozida', group: 'carb', onePortionWeight: 70, unit: 'g' },
        { id: 'quinoa_cozida', name: 'Quinoa Cozida', group: 'carb', onePortionWeight: 100, unit: 'g' },
        { id: 'tapioca', name: 'Tapioca', group: 'carb', onePortionWeight: 45, unit: 'g' },],
    protein: [
        { id: 'acem', name: 'Acém', group: 'protein', onePortionWeight: 70, unit: 'g' },
        { id: 'atum_cozido', name: 'Atum Cozido em lata ou grelhado', group: 'protein', onePortionWeight: 110, unit: 'g' },
        { id: 'atum_cru', name: 'Atum Cru', group: 'protein', onePortionWeight: 100, unit: 'g' },
        { id: 'camarao', name: 'Camarão e outros frutos do mar', group: 'protein', onePortionWeight: 160, unit: 'g' },
        { id: 'clara_ovo', name: 'Clara de Ovo', group: 'protein', onePortionWeight: 9, unit: 'un' },
        { id: 'clara_ovo_codorna', name: 'Clara de Ovo de Codorna', group: 'protein', onePortionWeight: 27, unit: 'un' },
        { id: 'claras_pasteurizadas', name: 'Claras Pasteurizadas', group: 'protein', onePortionWeight: 330, unit: 'g' },
        { id: 'creme_ricota_light', name: 'Creme de Ricota Light', group: 'protein', onePortionWeight: 100, unit: 'g' },
        { id: 'coalhada_desnatada', name: 'Coalhada Desnatada', group: 'protein', onePortionWeight: 250, unit: 'g' },
        { id: 'coracao_galinha', name: 'Coração de Galinha', group: 'protein', onePortionWeight: 90, unit: 'g' },
        { id: 'coxao_duro', name: 'Coxão Duro', group: 'protein', onePortionWeight: 70, unit: 'g' },
        { id: 'cupim', name: 'Cupim', group: 'protein', onePortionWeight: 70, unit: 'g' },
        { id: 'frango_coxa_sobrecoxa', name: 'Frango Coxa e Sobrecoxa Desossada', group: 'protein', onePortionWeight: 60, unit: 'g' },
        { id: 'frango_peito', name: 'Frango Peito', group: 'protein', onePortionWeight: 100, unit: 'g' },
        { id: 'fraldinha', name: 'Fraldinha', group: 'protein', onePortionWeight: 60, unit: 'g' },
        { id: 'figado', name: 'Fígado', group: 'protein', onePortionWeight: 75, unit: 'g' },
        { id: 'file_mignon', name: 'Filé Mignon', group: 'protein', onePortionWeight: 70, unit: 'g' },
        { id: 'iogurte_desnatado', name: 'Iogurte Desnatado de 2 ingredientes ou 0% gordura', group: 'protein', onePortionWeight: 250, unit: 'g' },
        { id: 'kefir_desnatado', name: 'Kefir Desnatado', group: 'protein', onePortionWeight: 430, unit: 'g' },
        { id: 'musculo_bovino', name: 'Músculo Bovino', group: 'protein', onePortionWeight: 80, unit: 'g' },
        { id: 'patinho', name: 'Patinho', group: 'protein', onePortionWeight: 70, unit: 'g' },
        { id: 'peixe_branco', name: 'Peixe Branco', group: 'protein', onePortionWeight: 140, unit: 'g' },
        { id: 'peru', name: 'Peru', group: 'protein', onePortionWeight: 100, unit: 'g' },
        { id: 'picanha', name: 'Picanha', group: 'protein', onePortionWeight: 70, unit: 'g' },
        { id: 'pts', name: 'Proteína Texturizada da Soja (PTS)', group: 'protein', onePortionWeight: 60, unit: 'g' },
        { id: 'proteina_po', name: 'Proteína em Pó (Albumina, Beef, Whey, etc.)', group: 'protein', onePortionWeight: 40, unit: 'g' },
        { id: 'polenghi_light', name: 'Polenghi Light', group: 'protein', onePortionWeight: 90, unit: 'g' },
        { id: 'polenghi_frescatino', name: 'Polenghi Frescatino Ultrafiltrado', group: 'protein', onePortionWeight: 70, unit: 'g' },
        { id: 'polenghi_frescatino_light', name: 'Polenghi Frescatino Ultrafiltrado Light', group: 'protein', onePortionWeight: 100, unit: 'g' },
        { id: 'polenghi_frescal_light', name: 'Polenghi Queijo Frescal Ultrafiltrado Light', group: 'protein', onePortionWeight: 100, unit: 'g' },
        { id: 'queijo_cottage', name: 'Queijo Cottage de Vaca ou Búfala', group: 'protein', onePortionWeight: 150, unit: 'g' },
        { id: 'queijo_ricota_12', name: 'Queijo Ricota Fresca 12% de gordura ou menos', group: 'protein', onePortionWeight: 100, unit: 'g' },
        { id: 'queijo_minas_frescal_light', name: 'Queijo Minas Frescal Light', group: 'protein', onePortionWeight: 85, unit: 'g' },
        { id: 'queijo_parmesao_light', name: 'Queijo Parmesão Light', group: 'protein', onePortionWeight: 50, unit: 'g' },
        { id: 'queijo_soro_leite', name: 'Queijo de Soro de Leite', group: 'protein', onePortionWeight: 75, unit: 'g' },
        { id: 'queijo_quark_light', name: 'Queijo Quark Light', group: 'protein', onePortionWeight: 95, unit: 'g' },
        { id: 'salmao', name: 'Salmão', group: 'protein', onePortionWeight: 60, unit: 'g' },
        { id: 'salmao_cru', name: 'Salmão Cru', group: 'protein', onePortionWeight: 85, unit: 'g' },
        { id: 'sardinha_lata', name: 'Sardinha em Lata', group: 'protein', onePortionWeight: 80, unit: 'g' },
        { id: 'suino_lombo', name: 'Suíno Lombo', group: 'protein', onePortionWeight: 70, unit: 'g' },
        { id: 'suino_file_mignon', name: 'Suíno Filé Mignon', group: 'protein', onePortionWeight: 100, unit: 'g' },
        { id: 'suino_pernil', name: 'Suíno Pernil', group: 'protein', onePortionWeight: 55, unit: 'g' },
        { id: 'tempeh', name: 'Tempeh Orgânico', group: 'protein', onePortionWeight: 75, unit: 'g' },
        { id: 'tofu', name: 'Tofu Orgânico', group: 'protein', onePortionWeight: 200, unit: 'g' },
    ],
    fat: [

        { id: 'abacate', name: 'Abacate/Avocado', group: 'fat', onePortionWeight: 60, unit: 'g' },
        { id: 'amendoas', name: 'Amêndoas', group: 'fat', onePortionWeight: 15, unit: 'g' },
        { id: 'amendoim_cru', name: 'Amendoim Cru', group: 'fat', onePortionWeight: 15, unit: 'g' },
        { id: 'avela', name: 'Avelã', group: 'fat', onePortionWeight: 13, unit: 'g' },
        { id: 'azeite', name: 'Azeite', group: 'fat', onePortionWeight: 10, unit: 'g' },
        { id: 'azeitona', name: 'Azeitona', group: 'fat', onePortionWeight: 75, unit: 'g' },
        { id: 'bebidinha_sono', name: 'Bebidinha do Sono', group: 'fat', onePortionWeight: 20, unit: 'g' },
        { id: 'cafes_termogenicos', name: 'Cafés termogênicos', group: 'fat', onePortionWeight: 20, unit: 'g' },
        { id: 'castanhas', name: 'Castanhas', group: 'fat', onePortionWeight: 15, unit: 'g' },
        { id: 'chocolate_60', name: 'Chocolate 60% ou mais', group: 'fat', onePortionWeight: 15, unit: 'g' },
        { id: 'coalhada', name: 'Coalhada', group: 'fat', onePortionWeight: 90, unit: 'g' },
        { id: 'coco_lascas', name: 'Coco em Lascas/Desidratado', group: 'fat', onePortionWeight: 15, unit: 'g' },
        { id: 'coco_pedacos', name: 'Coco em Pedaços', group: 'fat', onePortionWeight: 25, unit: 'g' },
        { id: 'creme_castanha_caju', name: 'Creme de Castanha de Caju', group: 'fat', onePortionWeight: 30, unit: 'g' },
        { id: 'creme_leite', name: 'Creme de Leite', group: 'fat', onePortionWeight: 30, unit: 'g' },
        { id: 'creme_ricota_original', name: 'Creme de Ricota Original', group: 'fat', onePortionWeight: 45, unit: 'g' },
        { id: 'creme_queijo_minas', name: 'Creme de Queijo Minas Frescal', group: 'fat', onePortionWeight: 30, unit: 'g' },
        { id: 'creme_queijo_minas_light', name: 'Creme de Queijo Minas Frescal Light', group: 'fat', onePortionWeight: 45, unit: 'g' },
        { id: 'cream_cheese', name: 'Cream Cheese', group: 'fat', onePortionWeight: 30, unit: 'g' },
        { id: 'cream_cheese_light', name: 'Cream Cheese Light', group: 'fat', onePortionWeight: 40, unit: 'g' },
        { id: 'farinha_amendoas', name: 'Farinha de Amêndoas', group: 'fat', onePortionWeight: 15, unit: 'g' },
        { id: 'farinha_coco', name: 'Farinha de Coco', group: 'fat', onePortionWeight: 15, unit: 'g' },
        { id: 'farinha_linhaca', name: 'Farinha de Linhaça', group: 'fat', onePortionWeight: 15, unit: 'g' },
        { id: 'gema_ovo', name: 'Gema ou Ovo inteiro', group: 'fat', onePortionWeight: 1, unit: 'un' },
        { id: 'iogurte_2_3_ing', name: 'Iogurte de 2 ou 3 ingredientes', group: 'fat', onePortionWeight: 140, unit: 'g' },
        { id: 'kefir_integral', name: 'Kefir Integral', group: 'fat', onePortionWeight: 135, unit: 'g' },
        { id: 'leite_integral', name: 'Leite Integral', group: 'fat', onePortionWeight: 130, unit: 'ml' },
        { id: 'leite_desnatado', name: 'Leite Desnatado ou Semi Desnatado', group: 'fat', onePortionWeight: 260, unit: 'ml' },
        { id: 'leite_po', name: 'Leite em Pó', group: 'fat', onePortionWeight: 15, unit: 'g' },
        { id: 'leite_po_desnatado', name: 'Leite em Pó Desnatado', group: 'fat', onePortionWeight: 25, unit: 'g' },
        { id: 'leite_vegetal', name: 'Leite Vegetal (Amêndoas, Coco, Caju)', group: 'fat', onePortionWeight: 300, unit: 'ml' },
        { id: 'macadamia', name: 'Macadâmia', group: 'fat', onePortionWeight: 10, unit: 'g' },
        { id: 'manteiga', name: 'Manteiga', group: 'fat', onePortionWeight: 10, unit: 'g' },
        { id: 'manteiga_bufala', name: 'Manteiga de Búfala', group: 'fat', onePortionWeight: 10, unit: 'g' },
        { id: 'manteiga_coco', name: 'Manteiga de Coco', group: 'fat', onePortionWeight: 10, unit: 'g' },
        { id: 'manteiga_ghee', name: 'Manteiga Ghee', group: 'fat', onePortionWeight: 10, unit: 'g' },
        { id: 'manteiga_vegana', name: 'Manteiga Vegana', group: 'fat', onePortionWeight: 10, unit: 'g' },
        { id: 'mct', name: 'MCT ou TCM', group: 'fat', onePortionWeight: 10, unit: 'g' },
        { id: 'nozes', name: 'Nozes', group: 'fat', onePortionWeight: 15, unit: 'g' },
        { id: 'oleo_coco', name: 'Óleo de Coco', group: 'fat', onePortionWeight: 10, unit: 'g' },
        { id: 'ovo_codorna', name: 'Ovo de Codorna Inteiro', group: 'fat', onePortionWeight: 5, unit: 'un' },
        { id: 'pasta_amendoim', name: 'Pasta de Amendoim', group: 'fat', onePortionWeight: 15, unit: 'g' },
        { id: 'pacoca', name: 'Paçoca', group: 'fat', onePortionWeight: 15, unit: 'g' },
        { id: 'pistache', name: 'Pistache Torrado', group: 'fat', onePortionWeight: 15, unit: 'g' },
        { id: 'polenguinho', name: 'Polenguinho', group: 'fat', onePortionWeight: 35, unit: 'g' },
        { id: 'queijo_brie', name: 'Queijo Brie (Queijo de Cabra)', group: 'fat', onePortionWeight: 25, unit: 'g' },
        { id: 'queijo_burrata', name: 'Queijo Burrata', group: 'fat', onePortionWeight: 30, unit: 'g' },
        { id: 'queijo_coalho', name: 'Queijo Coalho ou light', group: 'fat', onePortionWeight: 25, unit: 'g' },
        { id: 'queijo_canastra', name: 'Queijo Canastra', group: 'fat', onePortionWeight: 20, unit: 'g' },
        { id: 'queijo_curado', name: 'Queijo Curado', group: 'fat', onePortionWeight: 20, unit: 'g' },
        { id: 'queijo_gorgonzola', name: 'Queijo Gorgonzola', group: 'fat', onePortionWeight: 25, unit: 'g' },
        { id: 'queijo_meia_cura', name: 'Queijo Meia Cura', group: 'fat', onePortionWeight: 25, unit: 'g' },
        { id: 'queijo_minas_frescal', name: 'Queijo Minas Frescal', group: 'fat', onePortionWeight: 35, unit: 'g' },
        { id: 'queijo_minas_padrao', name: 'Queijo Minas Padrão', group: 'fat', onePortionWeight: 30, unit: 'g' },
        { id: 'queijo_mussarela', name: 'Queijo Mussarela ou Mussarela de Búfala', group: 'fat', onePortionWeight: 30, unit: 'g' },
        { id: 'queijo_parmesao', name: 'Queijo Parmesão', group: 'fat', onePortionWeight: 20, unit: 'g' },
        { id: 'queijo_prato', name: 'Queijo Prato', group: 'fat', onePortionWeight: 20, unit: 'g' },
        { id: 'queijo_ricota_gordura', name: 'Queijo Ricota Fresca com mais de 12% gordura', group: 'fat', onePortionWeight: 60, unit: 'g' },
        { id: 'requeijao', name: 'Requeijão', group: 'fat', onePortionWeight: 35, unit: 'g' },
        { id: 'requeijao_light', name: 'Requeijão Light', group: 'fat', onePortionWeight: 50, unit: 'g' },
        { id: 'requeijao_vegano', name: 'Requeijão Vegano', group: 'fat', onePortionWeight: 30, unit: 'g' },
        { id: 'sementes', name: 'Sementes (chia e todas)', group: 'fat', onePortionWeight: 15, unit: 'g' },
        { id: 'tahine', name: 'Tahine', group: 'fat', onePortionWeight: 10, unit: 'g' },
    ],
    fruit: [
        { id: 'abacaxi', name: 'Abacaxi', group: 'fruit', onePortionWeight: 200, unit: 'g' },
        { id: 'acai', name: 'Açaí Polpa Pura Sem Açúcar', group: 'fruit', onePortionWeight: 175, unit: 'g' },
        { id: 'acerola', name: 'Acerola', group: 'fruit', onePortionWeight: 310, unit: 'g' },
        { id: 'agua_coco', name: 'Água de Coco in natura', group: 'fruit', onePortionWeight: 500, unit: 'ml' },
        { id: 'ameixa', name: 'Ameixa', group: 'fruit', onePortionWeight: 210, unit: 'g' },
        { id: 'ameixa_seca', name: 'Ameixa Seca', group: 'fruit', onePortionWeight: 40, unit: 'g' },
        { id: 'amora', name: 'Amora', group: 'fruit', onePortionWeight: 230, unit: 'g' },
        { id: 'atemoia', name: 'Atemóia', group: 'fruit', onePortionWeight: 100, unit: 'g' },
        { id: 'banana_terra', name: 'Banana da Terra', group: 'fruit', onePortionWeight: 80, unit: 'g' },
        { id: 'banana', name: 'Banana', group: 'fruit', onePortionWeight: 90, unit: 'g' },
        { id: 'banana_chips', name: 'Banana Chips', group: 'fruit', onePortionWeight: 20, unit: 'g' },
        { id: 'blueberry', name: 'Blueberry/Mirtilo', group: 'fruit', onePortionWeight: 175, unit: 'g' },
        { id: 'caja_manga', name: 'Cajá-Manga', group: 'fruit', onePortionWeight: 220, unit: 'g' },
        { id: 'caju', name: 'Caju', group: 'fruit', onePortionWeight: 230, unit: 'g' },
        { id: 'caqui', name: 'Caqui', group: 'fruit', onePortionWeight: 80, unit: 'g' },
        { id: 'carambola', name: 'Carambola', group: 'fruit', onePortionWeight: 320, unit: 'g' },
        { id: 'cereja', name: 'Cereja', group: 'fruit', onePortionWeight: 200, unit: 'g' },
        { id: 'ciriguela', name: 'Ciriguela', group: 'fruit', onePortionWeight: 125, unit: 'g' },
        { id: 'cranberry', name: 'Cranberry', group: 'fruit', onePortionWeight: 30, unit: 'g' },
        { id: 'cupuacu', name: 'Cupuaçu', group: 'fruit', onePortionWeight: 200, unit: 'g' },
        { id: 'damasco_seco', name: 'Damasco Seco', group: 'fruit', onePortionWeight: 40, unit: 'g' },
        { id: 'figo', name: 'Figo', group: 'fruit', onePortionWeight: 135, unit: 'g' },
        { id: 'figo_seco', name: 'Figo Seco', group: 'fruit', onePortionWeight: 40, unit: 'g' },
        { id: 'framboesa', name: 'Framboesa', group: 'fruit', onePortionWeight: 180, unit: 'g' },
        { id: 'geleia_fruta', name: 'Geléia 100% Fruta', group: 'fruit', onePortionWeight: 55, unit: 'g' },
        { id: 'goiaba', name: 'Goiaba', group: 'fruit', onePortionWeight: 150, unit: 'g' },
        { id: 'graviola', name: 'Graviola', group: 'fruit', onePortionWeight: 150, unit: 'g' },
        { id: 'jabuticaba', name: 'Jabuticaba', group: 'fruit', onePortionWeight: 170, unit: 'g' },
        { id: 'jaca', name: 'Jaca', group: 'fruit', onePortionWeight: 105, unit: 'g' },
        { id: 'jambo', name: 'Jambo', group: 'fruit', onePortionWeight: 200, unit: 'g' },
        { id: 'kiwi', name: 'Kiwi', group: 'fruit', onePortionWeight: 160, unit: 'g' },
        { id: 'laranja', name: 'Laranja', group: 'fruit', onePortionWeight: 210, unit: 'g' },
        { id: 'lichia', name: 'Lichia', group: 'fruit', onePortionWeight: 140, unit: 'g' },
        { id: 'limao', name: 'Limão', group: 'fruit', onePortionWeight: 0, unit: 'livre' },
        { id: 'maca', name: 'Maçã', group: 'fruit', onePortionWeight: 190, unit: 'g' },
        { id: 'mamao', name: 'Mamão', group: 'fruit', onePortionWeight: 230, unit: 'g' },
        { id: 'manga', name: 'Manga', group: 'fruit', onePortionWeight: 160, unit: 'g' },
        { id: 'maracuja', name: 'Maracujá', group: 'fruit', onePortionWeight: 140, unit: 'g' },
        { id: 'melancia', name: 'Melancia', group: 'fruit', onePortionWeight: 330, unit: 'g' },
        { id: 'melao', name: 'Melão', group: 'fruit', onePortionWeight: 340, unit: 'g' },
        { id: 'mexerica', name: 'Mexerica/Tangerina', group: 'fruit', onePortionWeight: 200, unit: 'g' },
        { id: 'morango', name: 'Morango', group: 'fruit', onePortionWeight: 300, unit: 'g' },
        { id: 'nespera', name: 'Nêspera', group: 'fruit', onePortionWeight: 210, unit: 'g' },
        { id: 'pera', name: 'Pêra', group: 'fruit', onePortionWeight: 175, unit: 'g' },
        { id: 'pessego', name: 'Pêssego', group: 'fruit', onePortionWeight: 250, unit: 'g' },
        { id: 'pinha', name: 'Pinha/Fruta do Conde', group: 'fruit', onePortionWeight: 125, unit: 'g' },
        { id: 'pitanga', name: 'Pitanga', group: 'fruit', onePortionWeight: 300, unit: 'g' },
        { id: 'pitaya', name: 'Pitaya', group: 'fruit', onePortionWeight: 165, unit: 'g' },
        { id: 'roma', name: 'Romã', group: 'fruit', onePortionWeight: 200, unit: 'g' },
        { id: 'tamarindo', name: 'Tamarindo', group: 'fruit', onePortionWeight: 30, unit: 'g' },
        { id: 'tamara_seca', name: 'Tâmara Seca', group: 'fruit', onePortionWeight: 35, unit: 'g' },
        { id: 'tucuma', name: 'Tucumã', group: 'fruit', onePortionWeight: 35, unit: 'g' },
        { id: 'uva', name: 'Uva Verde ou Roxa Sem Caroço', group: 'fruit', onePortionWeight: 180, unit: 'g' },
        { id: 'uva_passas', name: 'Uva Passas', group: 'fruit', onePortionWeight: 30, unit: 'g' },
    ],
    vegetable: [
        { id: 'abobrinha', name: 'Abobrinha', group: 'vegetable', onePortionWeight: 150, unit: 'g' },
        { id: 'aspargos', name: 'Aspargos', group: 'vegetable', onePortionWeight: 150, unit: 'g' },
        { id: 'alho', name: 'Alho', group: 'vegetable', onePortionWeight: 150, unit: 'g' },
        { id: 'alho_poro', name: 'Alho-poró', group: 'vegetable', onePortionWeight: 150, unit: 'g' },
        { id: 'berinjela', name: 'Berinjela', group: 'vegetable', onePortionWeight: 150, unit: 'g' },
        { id: 'beterraba', name: 'Beterraba', group: 'vegetable', onePortionWeight: 150, unit: 'g' },
        { id: 'brocolis', name: 'Brócolis', group: 'vegetable', onePortionWeight: 150, unit: 'g' },
        { id: 'cebola', name: 'Cebola', group: 'vegetable', onePortionWeight: 150, unit: 'g' },
        { id: 'cenoura', name: 'Cenoura', group: 'vegetable', onePortionWeight: 150, unit: 'g' },
        { id: 'chuchu', name: 'Chuchu', group: 'vegetable', onePortionWeight: 150, unit: 'g' },
        { id: 'cogumelos', name: 'Cogumelos', group: 'vegetable', onePortionWeight: 150, unit: 'g' },
        { id: 'couve_flor', name: 'Couve-flor', group: 'vegetable', onePortionWeight: 150, unit: 'g' },
        { id: 'couve_bruxelas', name: 'Couve-de-bruxelas', group: 'vegetable', onePortionWeight: 150, unit: 'g' },
        { id: 'ervilha_torta', name: 'Ervilha-torta', group: 'vegetable', onePortionWeight: 150, unit: 'g' },
        { id: 'jilo', name: 'Jiló', group: 'vegetable', onePortionWeight: 150, unit: 'g' },
        { id: 'maxixe', name: 'Maxixe', group: 'vegetable', onePortionWeight: 150, unit: 'g' },
        { id: 'nabo', name: 'Nabo', group: 'vegetable', onePortionWeight: 150, unit: 'g' },
        { id: 'palmito', name: 'Palmito', group: 'vegetable', onePortionWeight: 150, unit: 'g' },
        { id: 'pimentao', name: 'Pimentão', group: 'vegetable', onePortionWeight: 150, unit: 'g' },
        { id: 'pepino', name: 'Pepino', group: 'vegetable', onePortionWeight: 150, unit: 'g' },
        { id: 'repolho', name: 'Repolho', group: 'vegetable', onePortionWeight: 150, unit: 'g' },
        { id: 'quiabo', name: 'Quiabo', group: 'vegetable', onePortionWeight: 150, unit: 'g' },
        { id: 'rabanete', name: 'Rabanete', group: 'vegetable', onePortionWeight: 150, unit: 'g' },
        { id: 'tomate', name: 'Tomate', group: 'vegetable', onePortionWeight: 150, unit: 'g' },
        { id: 'tomatinho', name: 'Tomatinho', group: 'vegetable', onePortionWeight: 150, unit: 'g' },
        { id: 'vagem', name: 'Vagem', group: 'vegetable', onePortionWeight: 150, unit: 'g' },
        { id: 'folhas_brotos', name: 'Todas as folhas e brotos', group: 'vegetable', onePortionWeight: 150, unit: 'g' },
    ]
};

// Helper: Calculate total portions for a specific group in a default meal
export function getGroupTotalPortions(mealIndex: number, group: NutrientGroup): number {
    return DIET_PLAN[mealIndex].components
        .filter(c => c.group === group)
        .reduce((sum, c) => sum + c.portions, 0);
}

export const DIET_PLAN: Meal[] = [
    {
        id: 'cafe_manha',
        name: 'Café da Manhã',
        components: [
            { id: 'cm_carb', group: 'carb', portions: 2.3, defaultFoodId: 'pao' },
            { id: 'cm_prot', group: 'protein', portions: 1.25, defaultFoodId: 'creme_ricota_light' },
            { id: 'cm_fat', group: 'fat', portions: 1.5, defaultFoodId: 'requeijao' },
            { id: 'cm_fruit', group: 'fruit', portions: 1.0, defaultFoodId: 'banana' },
        ]
    },
    {
        id: 'almoco',
        name: 'Almoço',
        components: [
            { id: 'al_carb1', group: 'carb', portions: 1.15, defaultFoodId: 'arroz_cozido' },
            { id: 'al_carb2', group: 'carb', portions: 1.15, defaultFoodId: 'feijao_cozido' },
            { id: 'al_prot', group: 'protein', portions: 1.25, defaultFoodId: 'frango_peito' },
            { id: 'al_fat', group: 'fat', portions: 1.0, defaultFoodId: 'azeite' },
            { id: 'al_veg', group: 'vegetable', portions: 0, isFixed: true, fixedItemName: 'Cenoura', fixedQuantity: 150 },
            { id: 'al_fruit', group: 'fruit', portions: 1.0, defaultFoodId: 'maca' },
        ]
    },
    {
        id: 'lanche_tarde',
        name: 'Lanche da Tarde',
        components: [
            { id: 'lt_carb', group: 'carb', portions: 2.3, defaultFoodId: 'pao' },
            { id: 'lt_prot', group: 'protein', portions: 1.25, defaultFoodId: 'proteina_po' },
            { id: 'lt_fat', group: 'fat', portions: 1.25, defaultFoodId: 'queijo_mussarela' },
            { id: 'lt_fruit', group: 'fruit', portions: 1.0, defaultFoodId: 'banana' },
        ]
    },
    {
        id: 'janta',
        name: 'Janta',
        components: [
            { id: 'jt_carb1', group: 'carb', portions: 1.15, defaultFoodId: 'arroz_cozido' },
            { id: 'jt_carb2', group: 'carb', portions: 1.15, defaultFoodId: 'feijao_cozido' },
            { id: 'jt_prot', group: 'protein', portions: 1.25, defaultFoodId: 'frango_peito' },
            { id: 'jt_fat', group: 'fat', portions: 1.5, defaultFoodId: 'azeite' },
            { id: 'jt_veg', group: 'vegetable', portions: 0, isFixed: true, fixedItemName: 'Cenoura', fixedQuantity: 150 },
            { id: 'jt_fruit', group: 'fruit', portions: 1.0, defaultFoodId: 'maca' },
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
