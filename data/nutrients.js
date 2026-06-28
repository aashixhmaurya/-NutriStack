const hierarchicalNutrients = [{
            id: "proteins",
            name: "Proteins",
            icon: "🥩",
            desc: "The building blocks for muscle, tissue repair, and enzymes.",
            hasSubTypes: false,
            details: {
                overview: "Proteins are essential macronutrients made up of amino acids. They play a critical role in building and repairing tissues, making enzymes and hormones, and supporting immune function. Your body requires a continuous supply to maintain cellular health.",
                functions: ["Tissue repair and muscle building", "Hormone and enzyme production", "Immune system support"],
                benefits: ["Provides sustained energy", "Increases satiety and helps with weight management", "Maintains healthy skin, hair, and nails"],
                intake: "The average adult needs approximately 0.8g of protein per kg of body weight daily. Active individuals may require 1.2g to 2.0g per kg.",
                sources: ["Eggs", "Chicken breast", "Fish and seafood", "Lentils and beans", "Tofu", "Greek yogurt"],
                deficiency: ["Muscle wasting and weakness", "Frequent infections", "Hair thinning and brittle nails", "Fatigue"],
                excess: ["Potential kidney strain in pre-existing conditions", "Dehydration if water intake isn't increased"]
            }
        }, {
            id: "carbohydrates",
            name: "Carbohydrates",
            icon: "🍞",
            desc: "Your body's primary energy source for brain and muscle function.",
            hasSubTypes: false,
            details: {
                overview: "Carbohydrates are the main source of energy for the human body. They are broken down into glucose, which fuels your brain, central nervous system, and muscles. Complex carbohydrates are preferred over simple sugars for sustained energy.",
                functions: ["Provides rapid energy for physical activity", "Fuels cognitive and brain functions", "Spares protein from being used for energy"],
                benefits: ["Prevents muscle breakdown", "Dietary fiber (complex carbs) aids digestion", "Supports heart health"],
                intake: "Carbohydrates should make up about 45% to 65% of your total daily calorie intake.",
                sources: ["Oats", "Brown rice", "Quinoa", "Sweet potatoes", "Bananas", "Whole wheat bread"],
                deficiency: ["Fatigue and low energy", "Brain fog and difficulty concentrating", "Muscle cramps"],
                excess: ["Weight gain", "Blood sugar spikes and crashes", "Increased risk of insulin resistance"]
            }
        }, {
            id: "fats",
            name: "Healthy Fats",
            icon: "🥑",
            desc: "Crucial for brain health, hormone production, and nutrient absorption.",
            hasSubTypes: false,
            details: {
                overview: "Fats are a concentrated energy source essential for brain function, hormone production, and the absorption of fat-soluble vitamins (A, D, E, K). Unsaturated fats are beneficial, while trans fats should be avoided.",
                functions: ["Cell membrane construction", "Insulation and organ protection", "Hormone synthesis"],
                benefits: ["Supports brain and cognitive health", "Reduces inflammation (Omega-3s)", "Promotes cardiovascular health"],
                intake: "Fats should constitute about 20% to 35% of daily calories, primarily from unsaturated sources.",
                sources: ["Avocados", "Olive oil", "Salmon and fatty fish", "Walnuts and almonds", "Chia seeds"],
                deficiency: ["Dry, flaky skin", "Hormonal imbalances", "Poor vitamin absorption", "Feeling cold"],
                excess: ["Excessive calorie surplus leading to weight gain", "Elevated cholesterol (if saturated/trans fats)"]
            }
        }, {
            id: "vitamins",
            name: "Vitamins",
            icon: "🍊",
            desc: "Essential micronutrients covering Vitamin A, B-complex, C, D, E, and K.",
            hasSubTypes: true,
            subTypes: [{
                name: "Vitamin A",
                details: {
                    overview: "A fat-soluble vitamin vital for vision, immune system function, and cellular communication.",
                    functions: ["Maintains clear cornea and vision", "Supports white blood cell production", "Regulates cell growth"],
                    benefits: ["Prevents night blindness", "Promotes healthy skin", "Reduces risk of certain infections"],
                    intake: "Men: 900 mcg RAE, Women: 700 mcg RAE daily.",
                    sources: ["Carrots", "Sweet potatoes", "Spinach", "Liver", "Eggs"],
                    deficiency: ["Night blindness", "Dry skin and eyes", "Increased susceptibility to infections"],
                    excess: ["Liver toxicity", "Headaches and dizziness", "Bone pain"]
                }
            }, {
                name: "Vitamin B Complex",
                details: {
                    overview: "A group of 8 water-soluble vitamins (B1, B2, B3, B5, B6, B7, B9, B12) that play vital roles in cellular function, energy metabolism, and brain health.",
                    functions: ["Converts food into energy", "Creates new red blood cells", "Maintains healthy brain and skin cells"],
                    benefits: ["Boosts energy levels", "Supports fetal brain development (Folate/B9)", "Nerve function (B12)"],
                    intake: "Varies by specific B vitamin. A balanced diet usually provides sufficient amounts.",
                    sources: ["Whole grains", "Meat and poultry", "Eggs and dairy", "Leafy greens", "Legumes"],
                    deficiency: ["Fatigue (anemia)", "Numbness or tingling in hands/feet", "Skin rashes", "Brain fog"],
                    excess: ["Nerve damage (excess B6)", "Masking of B12 deficiency (excess Folate)"]
                }
            }, {
                name: "Vitamin C",
                details: {
                    overview: "A water-soluble vitamin and powerful antioxidant necessary for the growth, development, and repair of all body tissues.",
                    functions: ["Collagen formation", "Iron absorption", "Immune system defense"],
                    benefits: ["Protects cells from free radicals", "Speeds up wound healing", "Maintains healthy cartilage and bones"],
                    intake: "Men: 90 mg, Women: 75 mg daily.",
                    sources: ["Citrus fruits (oranges, lemons)", "Bell peppers", "Strawberries", "Broccoli", "Tomatoes"],
                    deficiency: ["Scurvy (bleeding gums)", "Slow wound healing", "Easy bruising"],
                    excess: ["Digestive distress", "Kidney stones in susceptible individuals"]
                }
            }, {
                name: "Vitamin D",
                details: {
                    overview: "The 'sunshine vitamin' is a fat-soluble vitamin unique because the body synthesizes it upon exposure to sunlight. Essential for bone health.",
                    functions: ["Enhances intestinal absorption of calcium and phosphorus", "Modulates cell growth", "Immune function"],
                    benefits: ["Strengthens bones and teeth", "May protect against respiratory infections", "Supports muscle function"],
                    intake: "Adults: 15-20 mcg (600-800 IU) daily.",
                    sources: ["Sunlight exposure", "Fatty fish (salmon, tuna)", "Fortified milk and cereals", "Egg yolks"],
                    deficiency: ["Bone loss and fractures", "Muscle weakness", "Fatigue and mood changes"],
                    excess: ["Hypercalcemia (too much calcium in blood)", "Kidney damage", "Nausea"]
                }
            }, {
                name: "Vitamin E",
                details: {
                    overview: "A fat-soluble antioxidant that protects cellular membranes from oxidative damage.",
                    functions: ["Neutralizes free radicals", "Immune enhancement", "Prevents blood clots in heart vessels"],
                    benefits: ["Promotes skin and eye health", "Slows cellular aging", "Supports cardiovascular health"],
                    intake: "Adults: 15 mg daily.",
                    sources: ["Almonds", "Sunflower seeds", "Spinach", "Avocados", "Wheat germ oil"],
                    deficiency: ["Muscle weakness", "Vision problems", "Immune system decline"],
                    excess: ["Increased risk of bleeding (interferes with blood clotting)"]
                }
            }, {
                name: "Vitamin K",
                details: {
                    overview: "A fat-soluble vitamin essential for blood clotting and bone metabolism.",
                    functions: ["Produces prothrombin for blood clotting", "Regulates bone calcium"],
                    benefits: ["Prevents excessive bleeding", "Supports bone mineralization and strength"],
                    intake: "Men: 120 mcg, Women: 90 mcg daily.",
                    sources: ["Kale", "Spinach", "Broccoli", "Brussels sprouts", "Cabbage"],
                    deficiency: ["Easy bruising", "Excessive bleeding from wounds", "Reduced bone strength"],
                    excess: ["Rare, but can interfere with blood-thinning medications"]
                }
            }]
        }, {
            id: "minerals",
            name: "Minerals",
            icon: "⚒️",
            desc: "Essential elements like Calcium, Iron, Zinc, and Potassium.",
            hasSubTypes: true,
            subTypes: [{
                name: "Calcium",
                details: {
                    overview: "The most abundant mineral in the body, primarily stored in bones and teeth.",
                    functions: ["Bone and teeth structural integrity", "Muscle contraction", "Nerve signaling"],
                    benefits: ["Prevents osteoporosis", "Regulates heart rhythm", "Assists in blood clotting"],
                    intake: "Adults: 1,000 - 1,200 mg daily.",
                    sources: ["Dairy products", "Leafy green vegetables", "Fortified plant milks", "Almonds", "Tofu"],
                    deficiency: ["Weak, brittle bones", "Muscle spasms", "Numbness in fingers"],
                    excess: ["Kidney stones", "Constipation", "Interference with iron/zinc absorption"]
                }
            }, {
                name: "Iron",
                details: {
                    overview: "A vital trace mineral required for creating hemoglobin, which carries oxygen in the blood.",
                    functions: ["Oxygen transport", "Energy production", "DNA synthesis"],
                    benefits: ["Prevents anemia and fatigue", "Supports cognitive function", "Maintains healthy skin and hair"],
                    intake: "Men: 8 mg, Women (pre-menopausal): 18 mg daily.",
                    sources: ["Red meat", "Lentils", "Spinach", "Pumpkin seeds", "Quinoa"],
                    deficiency: ["Anemia (fatigue, pale skin)", "Shortness of breath", "Cold hands and feet"],
                    excess: ["Liver toxicity", "Joint pain", "Stomach distress"]
                }
            }, {
                name: "Zinc",
                details: {
                    overview: "A trace mineral essential for immune function, DNA synthesis, and cell division.",
                    functions: ["Enzyme activation", "Wound healing", "Senses of taste and smell"],
                    benefits: ["Fights off invading bacteria/viruses", "Reduces duration of colds", "Supports healthy skin"],
                    intake: "Men: 11 mg, Women: 8 mg daily.",
                    sources: ["Oysters", "Beef", "Chickpeas", "Cashews", "Pumpkin seeds"],
                    deficiency: ["Impaired immunity", "Hair loss", "Slow wound healing", "Loss of appetite"],
                    excess: ["Nausea and vomiting", "Lowered HDL (good) cholesterol", "Copper deficiency"]
                }
            }, {
                name: "Magnesium",
                details: {
                    overview: "Involved in over 300 biochemical reactions in the body, crucial for nerve and muscle function.",
                    functions: ["Energy creation", "Protein formation", "Gene maintenance and muscle movements"],
                    benefits: ["Relieves muscle cramps", "Lowers blood pressure", "Improves sleep quality"],
                    intake: "Men: 400-420 mg, Women: 310-320 mg daily.",
                    sources: ["Dark chocolate", "Avocados", "Nuts", "Legumes", "Whole grains"],
                    deficiency: ["Muscle twitches and cramps", "Mental disorders (apathy)", "Osteoporosis"],
                    excess: ["Diarrhea", "Lethargy", "Irregular heartbeat (in extreme cases)"]
                }
            }, {
                name: "Potassium",
                details: {
                    overview: "An important electrolyte that helps your body regulate fluid, send nerve signals, and regulate muscle contractions.",
                    functions: ["Fluid balance", "Nerve signal transmission", "Heart muscle contraction"],
                    benefits: ["Reduces blood pressure", "Prevents stroke", "Protects against muscle mass loss"],
                    intake: "Adults: 2,500 - 3,400 mg daily.",
                    sources: ["Bananas", "Sweet potatoes", "Spinach", "White beans", "Avocados"],
                    deficiency: ["Weakness and fatigue", "Muscle cramps", "Heart palpitations"],
                    excess: ["Hyperkalemia (dangerous heart rhythm issues, usually related to kidney problems)"]
                }
            }]
        }, {
            id: "fiber",
            name: "Fiber",
            icon: "🌾",
            desc: "The unsung hero for digestion, gut health, and blood sugar control.",
            hasSubTypes: false,
            details: {
                overview: "Dietary fiber is a type of carbohydrate that the body cannot digest. Instead of being broken down into sugar, it passes through the body undigested, playing a vital role in gut health.",
                functions: ["Adds bulk to stool", "Feeds healthy gut bacteria", "Slows sugar absorption"],
                benefits: ["Prevents constipation", "Helps control blood sugar spikes", "Lowers cholesterol levels"],
                intake: "Adults should aim for 25 to 30 grams of dietary fiber daily.",
                sources: ["Oats", "Lentils and beans", "Apples (with skin)", "Broccoli", "Chia seeds"],
                deficiency: ["Constipation", "Frequent hunger", "Blood sugar fluctuations"],
                excess: ["Bloating and gas", "Abdominal cramping", "Decreased mineral absorption if increased too quickly"]
            }
        }, {
            id: "water",
            name: "Water",
            icon: "💧",
            desc: "The most essential nutrient involved in every bodily function.",
            hasSubTypes: false,
            details: {
                overview: "Water makes up about 60% of your body weight and is involved in virtually every bodily function. You can survive weeks without food, but only days without water.",
                functions: ["Transports nutrients and oxygen", "Regulates body temperature", "Flushes out waste products"],
                benefits: ["Maintains skin elasticity", "Lubricates joints", "Improves physical and cognitive performance"],
                intake: "General recommendation: 2 to 3 liters (8-12 glasses) daily, depending on climate and activity.",
                sources: ["Drinking water", "Herbal teas", "Cucumbers", "Watermelon", "Oranges"],
                deficiency: ["Dehydration", "Headaches", "Dark urine", "Fatigue and dizziness"],
                excess: ["Water intoxication (Hyponatremia - dangerously low sodium levels, very rare)"]
            }
        }];

        
        const foodSourcesData = [{
            name: "Eggs",
            icon: "🥚",
            keyNutrients: ["Protein", "Vitamin D", "B12", "Selenium", "Choline"],
            description: "One of the most nutrient-dense foods available. Provides high-quality protein and healthy fats."
        }, {
            name: "Milk",
            icon: "🥛",
            keyNutrients: ["Calcium", "Protein", "Vitamin D", "B12", "Potassium"],
            description: "A complete food rich in calcium for strong bones and teeth."
        }, {
            name: "Fish",
            icon: "🐟",
            keyNutrients: ["Omega-3 Fats", "Protein", "Vitamin D", "Selenium"],
            description: "Fatty fish like salmon are among the best sources of omega-3 fatty acids."
        }, {
            name: "Chicken",
            icon: "🍗",
            keyNutrients: ["Protein", "B Vitamins", "Phosphorus", "Zinc"],
            description: "Lean chicken breast is one of the best sources of high-quality protein."
        }, {
            name: "Lentils",
            icon: "🫘",
            keyNutrients: ["Protein", "Fiber", "Iron", "Folate", "Potassium"],
            description: "A plant-based protein powerhouse packed with fiber and iron."
        }, {
            name: "Fruits",
            icon: "🍎",
            keyNutrients: ["Vitamin C", "Fiber", "Potassium", "Antioxidants"],
            description: "Fresh fruits provide essential vitamins, minerals, and dietary fiber."
        }, {
            name: "Vegetables",
            icon: "🥦",
            keyNutrients: ["Vitamin A", "Vitamin K", "Fiber", "Iron"],
            description: "Dark leafy greens and colorful vegetables are loaded with vitamins."
        }, {
            name: "Nuts",
            icon: "🥜",
            keyNutrients: ["Healthy Fats", "Protein", "Vitamin E", "Magnesium"],
            description: "Almonds, walnuts, and cashews provide heart-healthy fats."
        }];

        const nutritionTips = [{
            icon: "💧",
            title: "Stay Hydrated",
            description: "Drink at least 8 glasses of water daily. Sip throughout the day."
        }, {
            icon: "🍎",
            title: "Eat Seasonal Fruits",
            description: "Seasonal fruits are fresher, more nutritious, and more affordable."
        }, {
            icon: "🥩",
            title: "Include Protein in Every Meal",
            description: "Distribute your protein intake to support muscle maintenance and satiety."
        }, {
            icon: "🚫",
            title: "Reduce Processed Foods",
            description: "Minimize packaged snacks, sugary drinks, and fast food."
        }];

        const faqData = [{
            question: "How many calories should I eat per day?",
            answer: "Daily calorie needs vary based on age, sex, weight, height, and activity level. On average, adult women need 1,800-2,200 and men need 2,200-2,800 calories."
        }, {
            question: "What is the difference between vitamins and minerals?",
            answer: "Vitamins are organic compounds made by plants and animals, while minerals are inorganic elements from soil and water."
        }, {
            question: "Can I get enough protein from a vegetarian diet?",
            answer: "Yes. Plant-based protein sources like lentils, chickpeas, beans, tofu, and nuts can provide all essential amino acids."
        }, {
            question: "Are carbohydrates bad for you?",
            answer: "No. Carbohydrates are your body's primary energy source. Choose complex carbohydrates like whole grains and vegetables."
        }];

        const quickQuestions = [
            "What is Vitamin D?",
            "Why is Protein important?",
            "Which foods contain Iron?",
            "How much water should I drink?"
        ];
