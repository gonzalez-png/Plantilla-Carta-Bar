const menuData = {

  config: {
    languages: ['es', 'en', 'ca'],
    footerText: {
      es: 'Carta digital · Todos los precios incluyen IVA',
      en: 'Digital menu · All prices include VAT',
      ca: 'Carta digital · Tots els preus inclouen IVA'
    }
  },

  restaurant: {
    name: {
      es: 'El Rincón de la Abuela',
      en: "Grandma's Corner",
      ca: "El Racó de l'Àvia"
    },
    tagline: {
      es: 'Cocina tradicional desde 1985',
      en: 'Traditional cuisine since 1985',
      ca: 'Cuina tradicional des de 1985'
    }
  },

  categories: [
    {
      id: 'entrantes',
      icon: '🥗',
      name: { es: 'Entrantes', en: 'Starters', ca: 'Entrants' },
      items: [
        {
          name: { es: 'Croquetas caseras (6 uds)', en: 'Homemade croquettes (6 pcs)', ca: 'Croquetes casolanes (6 u)' },
          description: { es: 'Con jamón ibérico y bechamel artesana', en: 'With Iberian ham and artisan béchamel', ca: 'Amb pernil ibèric i beixamel artesana' },
          price: 7.50,
          allergens: ['gluten', 'lacteo', 'huevo'],
          badge: 'popular',
          image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=200&h=200&fit=crop&auto=format&q=80'
        },
        {
          name: { es: 'Pan con tomate', en: 'Bread with tomato', ca: 'Pa amb tomàquet' },
          description: { es: 'Pan de cristal con tomate natural y aceite virgen extra', en: 'Crystal bread with fresh tomato and extra virgin olive oil', ca: "Pa de vidre amb tomàquet natural i oli d'oliva verge extra" },
          price: 3.50,
          allergens: ['gluten'],
          image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=200&h=200&fit=crop&auto=format&q=80'
        },
        {
          name: { es: 'Tabla de ibéricos', en: 'Iberian cold cuts board', ca: "Taula d'ibèrics" },
          description: { es: 'Jamón, lomo y chorizo ibérico con pan', en: 'Iberian ham, loin and chorizo with bread', ca: 'Pernil, llom i xoriç ibèric amb pa' },
          price: 14.50,
          allergens: ['gluten'],
          image: 'https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?w=200&h=200&fit=crop&auto=format&q=80'
        },
        {
          name: { es: 'Patatas bravas', en: 'Spicy potatoes', ca: 'Patates braves' },
          description: { es: 'Con salsa brava casera y alioli', en: 'With homemade spicy sauce and alioli', ca: 'Amb salsa brava casolana i allioli' },
          price: 5.50,
          allergens: ['huevo'],
          badge: 'popular',
          image: 'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=200&h=200&fit=crop&auto=format&q=80'
        }
      ]
    },
    {
      id: 'ensaladas',
      icon: '🥙',
      name: { es: 'Ensaladas', en: 'Salads', ca: 'Amanides' },
      items: [
        {
          name: { es: 'Ensalada mixta', en: 'Mixed salad', ca: 'Amanida mixta' },
          description: { es: 'Lechuga, tomate, cebolla, aceitunas, atún y huevo', en: 'Lettuce, tomato, onion, olives, tuna and egg', ca: 'Enciam, tomàquet, ceba, olives, tonyina i ou' },
          price: 8.50,
          allergens: ['huevo', 'pescado'],
          image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=200&h=200&fit=crop&auto=format&q=80'
        },
        {
          name: { es: 'Ensalada César', en: 'Caesar salad', ca: 'Amanida Cèsar' },
          description: { es: 'Romana, pollo a la plancha, parmesano y crutones', en: 'Romaine, grilled chicken, parmesan and croutons', ca: 'Romana, pollastre a la planxa, parmesà i crostons' },
          price: 10.50,
          allergens: ['gluten', 'lacteo', 'pescado', 'huevo'],
          badge: 'new',
          image: 'https://images.unsplash.com/photo-1550304943-4f24f54ddde9?w=200&h=200&fit=crop&auto=format&q=80'
        }
      ]
    },
    {
      id: 'principales',
      icon: '🍽️',
      name: { es: 'Principales', en: 'Main Courses', ca: 'Principals' },
      items: [
        {
          name: { es: 'Secreto ibérico a la brasa', en: 'Grilled Iberian pork', ca: 'Secret ibèric a la brasa' },
          description: { es: 'Con patatas asadas y pimientos del padrón', en: 'With roasted potatoes and Padrón peppers', ca: 'Amb patates rostides i pebrots del padrón' },
          price: 18.50,
          allergens: [],
          image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=200&h=200&fit=crop&auto=format&q=80'
        },
        {
          name: { es: 'Bacalao al pil-pil', en: 'Cod in pil-pil sauce', ca: 'Bacallà al pil-pil' },
          description: { es: 'Con su salsa tradicional vasca y pimientos asados', en: 'With traditional Basque sauce and roasted peppers', ca: 'Amb la seva salsa tradicional basca i pebrots rostits' },
          price: 16.50,
          allergens: ['pescado'],
          badge: 'popular',
          image: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=200&h=200&fit=crop&auto=format&q=80'
        },
        {
          name: { es: 'Arròs del senyoret', en: 'Peeled seafood rice', ca: 'Arròs del senyoret' },
          description: { es: 'Arroz con mariscos pelados, para no mancharse', en: 'Rice with peeled seafood, perfect to enjoy without mess', ca: 'Arròs amb marisc pelat, per no embrutar-se' },
          price: 19.50,
          allergens: ['marisco', 'pescado'],
          badge: 'new',
          image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=200&h=200&fit=crop&auto=format&q=80'
        },
        {
          name: { es: 'Pollo asado al horno', en: 'Oven-roasted chicken', ca: 'Pollastre rostit al forn' },
          description: { es: 'Con patatas panadera y ensalada de temporada', en: "With baker's potatoes and seasonal salad", ca: 'Amb patates panadera i amanida de temporada' },
          price: 13.50,
          allergens: [],
          image: 'https://images.unsplash.com/photo-1598103442097-8b74394b95c6?w=200&h=200&fit=crop&auto=format&q=80'
        }
      ]
    },
    {
      id: 'postres',
      icon: '🍮',
      name: { es: 'Postres', en: 'Desserts', ca: 'Postres' },
      items: [
        {
          name: { es: 'Crema catalana', en: 'Catalan cream', ca: 'Crema catalana' },
          description: { es: 'Receta tradicional con azúcar quemado', en: 'Traditional recipe with burnt sugar crust', ca: 'Recepta tradicional amb sucre cremat' },
          price: 5.00,
          allergens: ['lacteo', 'huevo'],
          badge: 'popular',
          image: 'https://images.unsplash.com/photo-1470124182917-cc6e71b22ecc?w=200&h=200&fit=crop&auto=format&q=80'
        },
        {
          name: { es: 'Tarta de queso', en: 'Cheesecake', ca: 'Pastís de formatge' },
          description: { es: 'Con coulis de frutos rojos', en: 'With red berry coulis', ca: 'Amb coulis de fruits vermells' },
          price: 5.50,
          allergens: ['lacteo', 'huevo', 'gluten'],
          image: 'https://images.unsplash.com/photo-1533134242443-d4fd215305ad?w=200&h=200&fit=crop&auto=format&q=80'
        },
        {
          name: { es: 'Tiramisú', en: 'Tiramisu', ca: 'Tiramisú' },
          description: { es: 'Clásico italiano con mascarpone y café', en: 'Italian classic with mascarpone and coffee', ca: 'Clàssic italià amb mascarpone i cafè' },
          price: 5.50,
          allergens: ['lacteo', 'huevo', 'gluten'],
          image: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=200&h=200&fit=crop&auto=format&q=80'
        }
      ]
    },
    {
      id: 'vinos',
      icon: '🍷',
      name: { es: 'Vinos', en: 'Wines', ca: 'Vins' },
      items: [
        {
          name: { es: 'Copa vino tinto', en: 'Glass of red wine', ca: 'Copa de vi negre' },
          description: { es: 'Selección de la casa', en: 'House selection', ca: 'Selecció de la casa' },
          price: 2.50,
          allergens: ['sulfitos'],
          image: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=200&h=200&fit=crop&auto=format&q=80'
        },
        {
          name: { es: 'Botella vino tinto', en: 'Bottle of red wine', ca: 'Ampolla de vi negre' },
          description: { es: 'Selección de la casa', en: 'House selection', ca: 'Selecció de la casa' },
          price: 9.50,
          allergens: ['sulfitos'],
          image: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=200&h=200&fit=crop&auto=format&q=80'
        },
        {
          name: { es: 'Copa vino blanco', en: 'Glass of white wine', ca: 'Copa de vi blanc' },
          description: { es: 'Selección de la casa', en: 'House selection', ca: 'Selecció de la casa' },
          price: 2.50,
          allergens: ['sulfitos'],
          image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=200&h=200&fit=crop&auto=format&q=80'
        },
        {
          name: { es: 'Botella vino blanco', en: 'Bottle of white wine', ca: 'Ampolla de vi blanc' },
          description: { es: 'Selección de la casa', en: 'House selection', ca: 'Selecció de la casa' },
          price: 9.50,
          allergens: ['sulfitos'],
          image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=200&h=200&fit=crop&auto=format&q=80'
        },
        {
          name: { es: 'Cava (copa)', en: 'Cava (glass)', ca: 'Cava (copa)' },
          description: { es: 'Brut Nature, D.O. Cava', en: 'Brut Nature, D.O. Cava', ca: 'Brut Nature, D.O. Cava' },
          price: 3.50,
          allergens: ['sulfitos'],
          image: 'https://images.unsplash.com/photo-1560508180-03f285f67ded?w=200&h=200&fit=crop&auto=format&q=80'
        }
      ]
    },
    {
      id: 'cervezas',
      icon: '🍺',
      name: { es: 'Cervezas', en: 'Beers', ca: 'Cerveses' },
      items: [
        {
          name: { es: 'Caña', en: 'Small draft beer', ca: 'Caneta' },
          description: null,
          price: 1.80,
          allergens: ['gluten'],
          image: 'https://images.unsplash.com/photo-1530519729491-aea5b51d1ee1?w=200&h=200&fit=crop&auto=format&q=80'
        },
        {
          name: { es: 'Jarra', en: 'Pint', ca: 'Gerra' },
          description: null,
          price: 3.00,
          allergens: ['gluten'],
          image: 'https://images.unsplash.com/photo-1530519729491-aea5b51d1ee1?w=200&h=200&fit=crop&auto=format&q=80'
        },
        {
          name: { es: 'Botellín', en: 'Bottle beer', ca: 'Botellí' },
          description: { es: 'Estrella Damm, Moritz, sin gluten', en: 'Estrella Damm, Moritz, gluten-free', ca: 'Estrella Damm, Moritz, sense gluten' },
          price: 2.50,
          allergens: ['gluten'],
          image: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?w=200&h=200&fit=crop&auto=format&q=80'
        },
        {
          name: { es: 'Sin alcohol', en: 'Non-alcoholic beer', ca: 'Sense alcohol' },
          description: null,
          price: 2.50,
          allergens: [],
          image: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?w=200&h=200&fit=crop&auto=format&q=80'
        }
      ]
    },
    {
      id: 'bebidas',
      icon: '☕',
      name: { es: 'Bebidas y cafés', en: 'Drinks & coffee', ca: 'Begudes i cafès' },
      items: [
        {
          name: { es: 'Agua mineral', en: 'Mineral water', ca: 'Aigua mineral' },
          description: { es: 'Con o sin gas', en: 'Still or sparkling', ca: 'Amb o sense gas' },
          price: 1.50,
          allergens: [],
          image: 'https://images.unsplash.com/photo-1547592180-85f173990554?w=200&h=200&fit=crop&auto=format&q=80'
        },
        {
          name: { es: 'Refresco', en: 'Soft drink', ca: 'Refresc' },
          description: { es: 'Coca-Cola, Fanta, Sprite, agua con gas', en: 'Coca-Cola, Fanta, Sprite, sparkling water', ca: 'Coca-Cola, Fanta, Sprite, aigua amb gas' },
          price: 2.50,
          allergens: [],
          image: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=200&h=200&fit=crop&auto=format&q=80'
        },
        {
          name: { es: 'Zumo natural', en: 'Fresh juice', ca: 'Suc natural' },
          description: { es: 'Naranja, limón o piña', en: 'Orange, lemon or pineapple', ca: 'Taronja, llimona o pinya' },
          price: 3.00,
          allergens: [],
          image: 'https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=200&h=200&fit=crop&auto=format&q=80'
        },
        {
          name: { es: 'Café solo', en: 'Espresso', ca: 'Cafè sol' },
          description: null,
          price: 1.50,
          allergens: [],
          image: 'https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?w=200&h=200&fit=crop&auto=format&q=80'
        },
        {
          name: { es: 'Café con leche', en: 'Coffee with milk', ca: 'Cafè amb llet' },
          description: null,
          price: 1.80,
          allergens: ['lacteo'],
          image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=200&h=200&fit=crop&auto=format&q=80'
        },
        {
          name: { es: 'Cortado', en: 'Cortado', ca: 'Tallat' },
          description: null,
          price: 1.60,
          allergens: ['lacteo'],
          image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=200&h=200&fit=crop&auto=format&q=80'
        },
        {
          name: { es: 'Infusiones', en: 'Herbal teas', ca: 'Infusions' },
          description: { es: 'Menta, manzanilla, tila, rooibos', en: 'Mint, chamomile, linden, rooibos', ca: 'Menta, camamilla, til·la, rooibos' },
          price: 2.00,
          allergens: [],
          image: 'https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=200&h=200&fit=crop&auto=format&q=80'
        }
      ]
    }
  ]
};
