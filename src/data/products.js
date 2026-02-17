
const products = [
    {
        id: 1,
        name: "Whey Protein Isolate - Pote 900g",
        brand: "Max Titanium",
        category: "Proteínas",
        price: 149.90,
        originalPrice: 189.90,
        images: ["/whey.png"],
        flavors: ["Chocolate", "Morango", "Baunilha"],
        expirationDate: "2025-10-15",
        description: "O Whey Protein Isolate da Max Titanium é a escolha perfeita para quem busca o máximo de pureza e absorção. Com processo de filtragem avançado, ele entrega alta concentração de proteínas por dose, zero glúten e baixíssimo teor de carboidratos e gorduras. Ideal para o pós-treino, ajudando na rápida recuperação muscular e ganho de massa magra de qualidade."
    },
    {
        id: 2,
        name: "Pré-Treino Psychotic 300g",
        brand: "Insane Labz",
        category: "Performance",
        price: 89.90,
        originalPrice: 89.90,
        images: ["/pre-treino.jpg"],
        flavors: ["Frutas Vermelhas", "Maçã Verde"],
        expirationDate: "2024-11-20",
        description: "Prepare-se para treinos insanos com o Psychotic da Insane Labz. Formulado para proporcionar energia explosiva, foco mental afiado e resistência incomparável. Sua combinação potente de ingredientes ativos garante que você tire o máximo proveito de cada repetição. Não é apenas um pré-treino, é o combustível que faltava para ultrapassar seus limites."
    },
    {
        id: 3,
        name: "Creatina Monohidratada 300g",
        brand: "Dark Lab",
        category: "Aminoácidos",
        price: 64.90,
        originalPrice: 79.90,
        images: ["/creatina.png"],
        flavors: ["Sem Sabor"],
        expirationDate: "2026-05-10",
        description: "A Creatina Monohidratada da Dark Lab é essencial para atletas que buscam aumento de força e potência muscular. Com pureza garantida, ela auxilia na ressíntese de ATP, permitindo treinos mais intensos e volumosos. Perfeita para hipertrofia, melhora de desempenho em exercícios de alta intensidade e curta duração."
    },
    {
        id: 4,
        name: "Camiseta Dry-Fit Pro",
        brand: "FitPro",
        category: "Vestuário",
        price: 49.90,
        originalPrice: 69.90,
        images: ["/camiseta.jpg"],
        flavors: ["P", "M", "G", "GG"], // Usando 'flavors' como tamanhos para facilitar
        expirationDate: "Não se aplica",
        description: "Treine com estilo e conforto com a Camiseta Dry-Fit Pro. Desenvolvida com tecido tecnológico que afasta o suor da pele, mantendo você seco e fresco durante todo o exercício. Seu corte anatômico valoriza o shape e permite total liberdade de movimentos. Durável, leve e perfeita para qualquer atividade física."
    },
    {
        id: 5,
        name: "Whey Protein Isolate - Pote 900g",
        brand: "Max Titanium",
        category: "Proteínas",
        price: 149.90,
        originalPrice: 189.90,
        images: ["/whey.png"],
        flavors: ["Chocolate", "Morango", "Baunilha"],
        expirationDate: "2025-10-15",
        description: "O Whey Protein Isolate da Max Titanium é a escolha perfeita para quem busca o máximo de pureza e absorção. Com processo de filtragem avançado, ele entrega alta concentração de proteínas por dose, zero glúten e baixíssimo teor de carboidratos e gorduras. Ideal para o pós-treino, ajudando na rápida recuperação muscular e ganho de massa magra de qualidade."
    },
    {
        id: 6,
        name: "Pré-Treino Psychotic 300g",
        brand: "Insane Labz",
        category: "Performance",
        price: 89.90,
        originalPrice: 89.90,
        images: ["/pre-treino.jpg"],
        flavors: ["Frutas Vermelhas", "Maçã Verde"],
        expirationDate: "2024-11-20",
        description: "Prepare-se para treinos insanos com o Psychotic da Insane Labz. Formulado para proporcionar energia explosiva, foco mental afiado e resistência incomparável. Sua combinação potente de ingredientes ativos garante que você tire o máximo proveito de cada repetição. Não é apenas um pré-treino, é o combustível que faltava para ultrapassar seus limites."
    },
    {
        id: 7,
        name: "Creatina Monohidratada 300g",
        brand: "Dark Lab",
        category: "Aminoácidos",
        price: 64.90,
        originalPrice: 79.90,
        images: ["/creatina.png"],
        flavors: ["Sem Sabor"],
        expirationDate: "2026-05-10",
        description: "A Creatina Monohidratada da Dark Lab é essencial para atletas que buscam aumento de força e potência muscular. Com pureza garantida, ela auxilia na ressíntese de ATP, permitindo treinos mais intensos e volumosos. Perfeita para hipertrofia, melhora de desempenho em exercícios de alta intensidade e curta duração."
    },
    {
        id: 8,
        name: "Camiseta Dry-Fit Pro",
        brand: "FitPro",
        category: "Vestuário",
        price: 49.90,
        originalPrice: 69.90,
        images: ["/camiseta.jpg"],
        flavors: ["P", "M", "G", "GG"], // Usando 'flavors' como tamanhos para facilitar
        expirationDate: "Não se aplica",
        description: "Treine com estilo e conforto com a Camiseta Dry-Fit Pro. Desenvolvida com tecido tecnológico que afasta o suor da pele, mantendo você seco e fresco durante todo o exercício. Seu corte anatômico valoriza o shape e permite total liberdade de movimentos. Durável, leve e perfeita para qualquer atividade física."
    }
];

export default products;
