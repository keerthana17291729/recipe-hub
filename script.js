const navBar = document.querySelector('.nav-bar');
const hamburger = document.querySelector('.hamburger');
const mealDetail = document.getElementById('meal-detail');
const mealContent = mealDetail.querySelector('.meal-content');
const searchInput = document.getElementById('search');
const foodListContainer = document.getElementById('food-list');
const noneFoundMessage = document.getElementById('none');
const mainTitle = document.getElementById('main-title');
const searchWrapper = document.getElementById('search-wrapper');
const navLinks = document.querySelectorAll('.nav-bar .nav-link');

const recipesData = {
    "Breakfast & Tiffin": {
        "Idli & Dosa Variations": {
            "Idli Sambar": {
                about: "Idli Sambar is a quintessential South Indian breakfast. Soft, steamed rice and lentil cakes (idli) are served with a flavorful, tangy, and mildly spicy lentil stew (sambar) cooked with various vegetables. It's a wholesome and nutritious meal, often accompanied by coconut chutney.",
                ingredients: [
                    "For Idli: Rice, Urad Dal, Fenugreek Seeds, Salt, Water",
                    "For Sambar: Toor Dal (split pigeon peas), Mixed Vegetables (e.g., drumstick, brinjal, pumpkin, carrot, potato, bottle gourd), Sambar Powder, Tamarind Pulp, Turmeric Powder, Asafoetida (Hing), Salt, Jaggery (optional)",
                    "For Tempering: Ghee/Oil, Mustard Seeds, Cumin Seeds, Curry Leaves, Dry Red Chillies, Fenugreek Seeds"
                ],
                instructions: [
                    "Preparation: Soak rice and urad dal separately for 4-6 hours. Grind them into a smooth batter with fenugreek seeds and salt. Ferment overnight (8-12 hours) in a warm place until doubled.",
                    "Steam the fermented idli batter in greased idli molds for 10-12 minutes until cooked and fluffy.",
                    "Sambar Preparation: Cook toor dal until soft and mashed. Set aside.",
                    "In a large pot, sauté mixed vegetables until slightly tender. Add tamarind pulp, turmeric, sambar powder, hing, and salt. Cook until vegetables are tender.",
                    "Add the cooked and mashed toor dal to the vegetable mixture. Add water to adjust consistency. Bring to a simmer and cook for 10-15 minutes.",
                    "Tempering: In a small pan, heat ghee/oil. Add mustard seeds, fenugreek seeds, cumin seeds, dry red chillies, and curry leaves. Once mustard seeds splutter, pour the tempering into the simmering sambar.",
                    "Stir well and serve hot Idli with Sambar and coconut chutney."
                ],
                video: "https://youtu.be/3lWb4qBqrms?si=xu1RZBMVUMLGaqsv",
                image: "./img/idli_sambar.jpg"
            },
            "Podi Idli": {
                about: "Podi Idli is a delightful variation where bite-sized idlis are tossed in a generous coating of 'podi' (a spicy, coarse spice powder) and ghee or oil. It's a quick, flavorful, and popular snack or breakfast.",
                ingredients: [
                    "Mini Idlis (or regular Idlis cut into pieces)",
                    "Idli/Chutney Podi (store-bought or homemade)",
                    "Ghee or Sesame Oil",
                    "Curry Leaves (optional for garnish)"
                ],
                instructions: [
                    "Prepare mini idlis or cut leftover idlis into small pieces.",
                    "In a pan, heat a generous amount of ghee or sesame oil.",
                    "Add the idli pieces and sauté gently until they are slightly crisp on the outside.",
                    "Sprinkle a generous amount of Idli Podi over the idlis. Toss well to ensure all idli pieces are evenly coated with the podi.",
                    "Sauté for another 1-2 minutes on low heat to allow the flavors to meld. Garnish with curry leaves if desired.",
                    "Serve hot, optionally with a side of coconut chutney or just as is."
                ],
                video: "https://youtu.be/b_LPDJQzCpE?si=mRj2XT_PPc2gYFU_",
                image: "./img/podi_idli.jpg"
            },
            "Masala Dosa": {
                about: "Masala Dosa is a popular South Indian crepe made from fermented rice and lentil batter, typically filled with a spiced potato mixture (aloo masala). It's served hot with sambar and various chutneys.",
                ingredients: [
                    "For Dosa: Rice, Urad Dal, Fenugreek Seeds, Salt, Water",
                    "**For Aloo Masala:** Potatoes, Onions, Ginger, Green Chillies, Curry Leaves, Turmeric Powder, Mustard Seeds, Cumin Seeds, Chana Dal, Urad Dal, Asafoetida (Hing), Oil, Salt, Coriander Leaves"
                ],
                instructions: [
                    "Dosa Batter: Prepare dosa batter similar to idli, but grind it to a slightly thinner consistency and ferment.",
                    "Aloo Masala: Boil and mash potatoes. In a pan, temper mustard seeds, cumin, chana dal, urad dal, curry leaves. Add chopped onions, ginger, green chillies, and sauté. Add turmeric, hing, and mashed potatoes. Mix well and cook for a few minutes. Garnish with coriander.",
                    "Heat a non-stick dosa griddle. Pour a ladleful of dosa batter and spread thinly in a circular motion.",
                    "Drizzle oil/ghee around the edges. Cook until golden and crisp. Spread a portion of aloo masala in the center.",
                    "Fold the dosa and serve hot with sambar and coconut/tomato chutney."
                ],
                video: "https://youtu.be/mDqkxZ3UVzc?si=vpjN2f0Hh2DB1762",
                image: "./img/masala_dosa.jpg"
            }
        },
        "Pongal & Upma": {
            "Ven Pongal": {
                about: "Ven Pongal is a savoury South Indian breakfast dish made from rice and moong dal (split yellow lentils) cooked together with ghee, peppercorns, cumin, and ginger. It's a comforting and wholesome meal.",
                ingredients: [
                    "Rice (Ponni or Sona Masuri)",
                    "Moong Dal (split yellow lentils)",
                    "Ghee",
                    "Black Peppercorns (crushed or whole)",
                    "Cumin Seeds",
                    "Ginger (grated or finely chopped)",
                    "Curry Leaves",
                    "Cashew Nuts (optional)",
                    "Asafoetida (Hing)",
                    "Salt",
                    "Water"
                ],
                instructions: [
                    "Wash and combine rice and moong dal. Pressure cook with water until soft and mushy.",
                    "In a separate pan, heat ghee. Add cashew nuts and fry until golden. Remove and set aside.",
                    "In the same ghee, add mustard seeds (optional), cumin seeds, black peppercorns, grated ginger, curry leaves, and asafoetida. Sauté for a minute.",
                    "Add the cooked rice and dal mixture to the tempering. Mix well. Add more hot water if needed to adjust consistency. Add salt.",
                    "Stir continuously until everything is well combined and slightly thick. Garnish with fried cashews.",
                    "Serve hot with sambar and coconut chutney."
                ],
                video: "https://youtu.be/GLSSQn4P8rg?si=4Xh1schtIJjFp5eG",
                image: "./img/ven_pongal.jpg"
            },
            "Sakkarai Pongal": {
                about: "Sakkarai Pongal (Sweet Pongal) is a traditional South Indian sweet dish, especially prepared during festivals. It's made with rice, moong dal, jaggery, ghee, cardamom, and often garnished with fried nuts and raisins.",
                ingredients: [
                    "Raw Rice",
                    "Moong Dal (split yellow lentils)",
                    "Jaggery (or brown sugar)",
                    "Ghee",
                    "Cardamom Powder",
                    "Cashew Nuts",
                    "Raisins",
                    "Water/Milk"
                ],
                instructions: [
                    "Wash rice and moong dal. Pressure cook together with enough water/milk until soft and mushy.",
                    "In another pan, dissolve jaggery with a little water, strain to remove impurities, and boil until it reaches a sticky consistency.",
                    "Add the cooked rice and dal mixture to the jaggery syrup. Mix well.",
                    "In a small pan, heat ghee. Fry cashew nuts and raisins until golden and plump. Add cardamom powder to the ghee.",
                    "Pour the fried nuts, raisins, and aromatic ghee into the pongal. Mix well.",
                    "Serve warm."
                ],
                video: "https://youtu.be/6IgXW_5YlI4?si=8_aONoZFFl2vulsZ",
                image: "./img/sakkarai_pongal.jpg"
            },
            "Rava Upma": {
                about: "Rava Upma is a simple and quick South Indian breakfast or snack made from roasted semolina (rava). It's a savory dish often cooked with vegetables and tempered with spices.",
                ingredients: [
                    "Rava (Semolina)",
                    "Onions (finely chopped)",
                    "Green Chillies",
                    "Ginger (finely chopped)",
                    "Curry Leaves",
                    "Mustard Seeds",
                    "Urad Dal",
                    "Chana Dal",
                    "Asafoetida (Hing)",
                    "Oil/Ghee",
                    "Water",
                    "Salt",
                    "Coriander Leaves (for garnish)",
                    "Lemon Juice (optional)"
                ],
                instructions: [
                    "Dry roast rava in a pan until aromatic and slightly golden. Set aside.",
                    "In the same pan, heat oil/ghee. Add mustard seeds, urad dal, chana dal. Sauté until dals turn golden.",
                    "Add curry leaves, green chillies, ginger, and chopped onions. Sauté until onions are translucent.",
                    "Add water and salt. Bring to a rolling boil. Slowly add the roasted rava in a thin stream while stirring continuously to avoid lumps.",
                    "Reduce heat to low, cover, and cook until all water is absorbed and rava is cooked. Stir occasionally.",
                    "Fluff with a fork. Garnish with coriander leaves and a squeeze of lemon juice if desired. Serve hot."
                ],
                video: "https://youtu.be/h7deqz8OVLU?si=aelbq2XYEZI95Af7",
                image: "./img/rava_upma.jpg"
            },
            "Semiya Upma": {
                about: "Semiya Upma (Vermicelli Upma) is a light and flavorful breakfast or snack made with roasted vermicelli, vegetables, and aromatic spices. It's a quick and easy alternative to traditional rava upma.",
                ingredients: [
                    "Semiya (Vermicelli)",
                    "Onions (finely chopped)",
                    "Mixed Vegetables (carrots, peas, beans, corn)",
                    "Green Chillies",
                    "Ginger (finely chopped)",
                    "Curry Leaves",
                    "Mustard Seeds",
                    "Urad Dal",
                    "Chana Dal",
                    "Asafoetida (Hing)",
                    "Oil/Ghee",
                    "Water",
                    "Salt",
                    "Coriander Leaves (for garnish)",
                    "Lemon Juice (optional)"
                ],
                instructions: [
                    "Dry roast semiya in a pan until golden brown. Set aside.",
                    "In the same pan, heat oil/ghee. Add mustard seeds, urad dal, chana dal. Sauté until dals turn golden.",
                    "Add curry leaves, green chillies, ginger, and chopped onions. Sauté until onions are translucent.",
                    "Add mixed vegetables and sauté for a few minutes.",
                    "Add water and salt. Bring to a rolling boil. Add the roasted semiya.",
                    "Reduce heat to low, cover, and cook until all water is absorbed and semiya is tender. Stir occasionally.",
                    "Fluff with a fork. Garnish with coriander leaves and a squeeze of lemon juice if desired. Serve hot."
                ],
                video: "https://youtu.be/ovJ1lvD1wfM?si=t76OCOO94N0Cu6Tg",
                image: "./img/semiya_upma.jpg"
            }
        },
        "Paniyaram & Vada": {
            "Sweet Kuzhipaniyaram": {
                about: "Sweet Kuzhipaniyaram are fluffy, sweet dumplings made from fermented rice and lentil batter, often with jaggery or sugar, and cooked in a special pan with multiple spherical molds. They are a delightful snack or breakfast.",
                ingredients: [
                    "Idli/Dosa Batter (fermented)",
                    "Jaggery (grated or powdered)",
                    "Cardamom Powder",
                    "Ghee/Oil (for cooking)",
                    "Coconut (grated, optional)"
                ],
                instructions: [
                    "If using jaggery, melt it with a little water to form a syrup, strain, and let it cool. If using sugar, dissolve directly in the batter.",
                    "Add grated jaggery/sugar syrup, cardamom powder, and grated coconut (if using) to the fermented idli/dosa batter. Mix well.",
                    "Heat a kuzhipaniyaram pan and add a few drops of ghee/oil in each mold.",
                    "Pour a spoonful of batter into each mold.",
                    "Cook on medium-low heat until the bottom is golden brown and cooked. Flip and cook the other side until golden brown and cooked through.",
                    "Serve hot as a snack or dessert."
                ],
                video: "https://youtu.be/X5bpjKYEFaE?si=Y597f8zfppEO73pO",
                image: "./img/sweet_kuzhipaniyaram.jpg"
            },
            "Savoury Kuzhipaniyaram": {
                about: "Savoury Kuzhipaniyaram are soft, spiced dumplings made from fermented rice and lentil batter, often incorporating finely chopped vegetables and tempered spices. Cooked in a special pan, they are a delicious and healthy snack or breakfast.",
                ingredients: [
                    "Idli/Dosa Batter (fermented)",
                    "Onions (finely chopped)",
                    "Green Chillies (finely chopped)",
                    "Ginger (finely chopped)",
                    "Curry Leaves",
                    "Mustard Seeds",
                    "Urad Dal",
                    "Chana Dal",
                    "Oil (for tempering and cooking)",
                    "Salt (if needed)"
                ],
                instructions: [
                    "In a small pan, heat oil. Add mustard seeds, urad dal, chana dal. Sauté until dals turn golden.",
                    "Add curry leaves, green chillies, ginger, and chopped onions. Sauté until onions are translucent.",
                    "Add this tempering mixture to the fermented idli/dosa batter. Mix well and adjust salt if necessary.",
                    "Heat a kuzhipaniyaram pan and add a few drops of oil in each mold.",
                    "Pour a spoonful of batter into each mold.",
                    "Cook on medium-low heat until the bottom is golden brown. Flip and cook the other side until golden brown and cooked through.",
                    "Serve hot with coconut chutney or sambar."
                ],
                video: "https://youtu.be/DGrYdQQJ3h0?si=SoCSFOWkVD6PcZqF",
                image: "./img/savoury_kuzhipaniyaram.jpg"
            },
            "Medu Vada": {
                about: "Medu Vada are crispy, savory, doughnut-shaped fritters made from urad dal (black gram). They are a popular South Indian breakfast item, often served with sambar and coconut chutney.",
                ingredients: [
                    "Urad Dal (split black gram, skinned)",
                    "Green Chillies (finely chopped)",
                    "Ginger (finely chopped)",
                    "Curry Leaves (chopped)",
                    "Black Peppercorns (crushed)",
                    "Onions (finely chopped, optional)",
                    "Asafoetida (Hing)",
                    "Salt",
                    "Oil (for deep frying)"
                ],
                instructions: [
                    "Soak urad dal for 2-3 hours. Drain completely and grind into a very thick, smooth, fluffy batter with minimal water. Do not add too much water.",
                    "Add chopped green chillies, ginger, curry leaves, crushed peppercorns, onions (if using), hing, and salt to the batter. Mix well.",
                    "Heat oil for deep frying in a heavy-bottomed pan.",
                    "Wet your hands, take a small portion of the batter, flatten it slightly, and make a hole in the center to form a doughnut shape.",
                    "Gently slide the vada into the hot oil. Fry on medium heat until golden brown and crispy on all sides.",
                    "Drain excess oil on absorbent paper. Serve hot with sambar and coconut chutney."
                ],
                video: "https://youtu.be/Zjm9fQBBHiM?si=srQ0EsP7hENul2qE",
                image: "./img/medu_vada.jpg"
            },
            "Paruppu Vada": {
                about: "Paruppu Vada (Dal Vada) are crispy and spicy fritters made from chana dal (split chickpeas) and spices. They are a popular tea-time snack in South India, known for their unique texture and flavor.",
                ingredients: [
                    "Chana Dal (split chickpeas)",
                    "Onions (finely chopped)",
                    "Green Chillies (finely chopped)",
                    "Ginger (grated/chopped)",
                    "Fennel Seeds",
                    "Cinnamon Stick (small piece, optional)",
                    "Curry Leaves",
                    "Coriander Leaves",
                    "Dry Red Chillies (soaked, optional)",
                    "Salt",
                    "Oil (for deep frying)"
                ],
                instructions: [
                    "Wash chana dal and soak for 2-3 hours. Drain completely. Reserve a spoonful of soaked dal.",
                    "Grind the remaining chana dal coarsely with green chillies, ginger, fennel seeds, cinnamon (if using), and dry red chillies (if using), with minimal to no water. The mixture should be coarse.",
                    "Transfer the ground mixture to a bowl. Add the reserved soaked chana dal, chopped onions, curry leaves, coriander leaves, and salt. Mix well.",
                    "Heat oil for deep frying.",
                    "Take small portions of the mixture, flatten them into vada shapes (round or slightly oval).",
                    "Gently slide the vada into the hot oil. Fry on medium heat until golden brown and crispy on both sides.",
                    "Drain excess oil on absorbent paper. Serve hot with coconut chutney or just as is."
                ],
                video: "https://youtu.be/iW5YUWujQVo?si=6a8U7EjralBrpHfC",
                image: "./img/paruppu_vada.jpg"
            }
        }
    },
    "Rice Varieties": {
        "Biriyani": {
            "Veg Biriyani": {
                about: "Veg Biriyani is an aromatic and flavorful one-pot rice dish made with basmati rice, mixed vegetables, and a blend of whole and ground spices. It's a wholesome and satisfying meal.",
                ingredients: [
                    "Basmati Rice",
                    "Mixed Vegetables (carrots, peas, beans, potatoes, cauliflower)",
                    "Onions (sliced)",
                    "Tomatoes (chopped)",
                    "Ginger-Garlic Paste",
                    "Green Chillies",
                    "Biriyani Masala Powder",
                    "Curd (Yogurt)",
                    "Mint Leaves",
                    "Coriander Leaves",
                    "Ghee/Oil",
                    "Whole Spices (bay leaf, cinnamon, cardamom, cloves, star anise)",
                    "Salt",
                    "Water"
                ],
                instructions: [
                    "Wash and soak basmati rice for 30 minutes. Drain.",
                    "In a heavy-bottomed pot, heat ghee/oil. Add whole spices. Sauté sliced onions until golden brown.",
                    "Add ginger-garlic paste and green chillies. Sauté until raw smell disappears.",
                    "Add chopped tomatoes and cook until soft. Add mixed vegetables and cook for a few minutes.",
                    "Add biriyani masala, curd, mint leaves, coriander leaves, and salt. Mix well and cook until oil separates.",
                    "Add the soaked rice and gently mix. Add water (1.5 cups water for 1 cup rice, adjust based on rice type).",
                    "Bring to a boil, then reduce heat to low, cover, and cook until all water is absorbed and rice is cooked (about 15-20 minutes). Or pressure cook for 1-2 whistles.",
                    "Let it rest for 10 minutes before fluffing with a fork. Serve hot with raita."
                ],
                video: "https://youtu.be/S5Ngh6CFRmc?si=POkHsCJiQoTM6krR",
                image: "./img/veg_biriyani.jpg"
            },
            "Chicken Biriyani": {
                about: "Chicken Biriyani is a classic Indian dish where succulent pieces of chicken are marinated in yogurt and spices, then layered with fragrant basmati rice, herbs, and aromatics, and slow-cooked to perfection.",
                ingredients: [
                    "Chicken (cut into pieces)",
                    "Basmati Rice",
                    "Onions (sliced, fried for garnish - optional)",
                    "Onions (sliced, for gravy)",
                    "Tomatoes (chopped)",
                    "Ginger-Garlic Paste",
                    "Green Chillies",
                    "Biriyani Masala Powder",
                    "Curd (Yogurt)",
                    "Mint Leaves",
                    "Coriander Leaves",
                    "Ghee/Oil",
                    "Whole Spices (bay leaf, cinnamon, cardamom, cloves, star anise)",
                    "Lemon Juice",
                    "Saffron Milk (optional)",
                    "Salt",
                    "Water"
                ],
                instructions: [
                    "Marinate chicken with ginger-garlic paste, curd, turmeric, red chilli powder, biriyani masala, salt, and lemon juice for at least 30 minutes.",
                    "Wash and soak basmati rice for 30 minutes. Partially cook rice (about 70% done) with whole spices and salt.",
                    "In a heavy-bottomed pot, heat ghee/oil. Sauté sliced onions until golden. Add ginger-garlic paste and green chillies.",
                    "Add chopped tomatoes and cook until soft. Add marinated chicken and cook until chicken is partially done and oil separates.",
                    "Layer the partially cooked rice over the chicken gravy. Sprinkle fried onions, mint, coriander, and saffron milk (if using).",
                    "Cover tightly and cook on low heat (dum method) for 20-25 minutes, or use a pressure cooker for 1-2 whistles.",
                    "Let it rest for 10 minutes before gently mixing. Serve hot with raita and salna."
                ],
                video: "https://youtu.be/PmqdA05OXuI?si=wG-8A0lFMbdQMnm1",
                image: "./img/chicken_biriyani.jpg"
            },
            "Mutton Biriyani": {
                about: "Mutton Biriyani is a rich and flavorful Indian rice dish made with tender mutton pieces, fragrant basmati rice, and a complex blend of aromatic spices, slow-cooked to infuse maximum flavor.",
                ingredients: [
                    "Mutton (bone-in pieces)",
                    "Basmati Rice",
                    "Onions (sliced, fried for garnish - optional)",
                    "Onions (sliced, for gravy)",
                    "Tomatoes (chopped)",
                    "Ginger-Garlic Paste",
                    "Green Chillies",
                    "Biriyani Masala Powder",
                    "Curd (Yogurt)",
                    "Mint Leaves",
                    "Coriander Leaves",
                    "Ghee/Oil",
                    "Whole Spices (bay leaf, cinnamon, cardamom, cloves, star anise)",
                    "Lemon Juice",
                    "Saffron Milk (optional)",
                    "Salt",
                    "Water"
                ],
                instructions: [
                    "Marinate mutton with ginger-garlic paste, curd, turmeric, red chilli powder, biriyani masala, salt, and lemon juice for at least 1-2 hours (or overnight).",
                    "Partially cook mutton separately until tender (e.g., pressure cook for 4-5 whistles, then simmer).",
                    "Wash and soak basmati rice for 30 minutes. Partially cook rice (about 70% done) with whole spices and salt.",
                    "In a heavy-bottomed pot, heat ghee/oil. Sauté sliced onions until golden. Add ginger-garlic paste and green chillies.",
                    "Add chopped tomatoes and cook until soft. Add marinated and partially cooked mutton and cook for a few minutes to combine flavors.",
                    "Layer the partially cooked rice over the mutton gravy. Sprinkle fried onions, mint, coriander, and saffron milk (if using).",
                    "Cover tightly and cook on low heat (dum method) for 25-30 minutes, or until rice is fully cooked and flavors are well blended.",
                    "Let it rest for 10-15 minutes before gently mixing. Serve hot with raita and salna."
                ],
                video: "https://youtu.be/HI2-u2zu8Ss?si=UzNPl1MeZn5cSEpr",
                image: "./img/mutton_biriyani.jpg"
            }
        },
        "Mixed Rice": {
            "Lemon Rice": {
                about: "Lemon Rice is a simple, tangy, and flavorful South Indian rice dish. It's a quick meal often prepared with leftover rice, tempered with mustard seeds, curry leaves, and peanuts, and flavored with fresh lemon juice.",
                ingredients: [
                    "Cooked Rice (preferably leftover)",
                    "Lemon Juice",
                    "Oil",
                    "Mustard Seeds",
                    "Chana Dal",
                    "Urad Dal",
                    "Peanuts (optional)",
                    "Curry Leaves",
                    "Green Chillies (slit)",
                    "Turmeric Powder",
                    "Asafoetida (Hing)",
                    "Salt"
                ],
                instructions: [
                    "Heat oil in a pan. Add mustard seeds, chana dal, urad dal, and peanuts (if using). Sauté until dals turn golden and peanuts are roasted.",
                    "Add curry leaves, green chillies, turmeric powder, and asafoetida. Sauté for a few seconds.",
                    "Add the cooked rice and salt. Mix gently but thoroughly, ensuring all rice grains are coated with the tempering.",
                    "Turn off the heat. Add fresh lemon juice and mix well. Taste and adjust seasoning.",
                    "Serve hot or warm, garnished with fresh coriander if desired."
                ],
                video: "https://youtu.be/w0gZ5xvmOAk?si=3qOFIRoRA-DTpc7u",
                image: "./img/lemon_rice.jpg"
            },
            "Tamarind Rice": {
                about: "Tamarind Rice (Puliyodarai or Pulihora) is a traditional South Indian rice dish characterized by its distinct tangy and spicy flavor derived from tamarind, along with a special spice blend and tempering.",
                ingredients: [
                    "Cooked Rice",
                    "Tamarind Pulp",
                    "Puliyodarai Paste/Powder (store-bought or homemade)",
                    "Oil/Gingelly Oil (sesame oil)",
                    "Mustard Seeds",
                    "Chana Dal",
                    "Urad Dal",
                    "Peanuts",
                    "Dry Red Chillies",
                    "Curry Leaves",
                    "Asafoetida (Hing)",
                    "Turmeric Powder",
                    "Salt",
                    "Jaggery (small piece, optional)"
                ],
                instructions: [
                    "Prepare Tamarind Extract: Soak tamarind in warm water, extract thick pulp. (Or use store-bought pulp).",
                    "In a large pan, heat oil. Add mustard seeds, chana dal, urad dal, peanuts, and dry red chillies. Sauté until dals turn golden and peanuts are roasted.",
                    "Add curry leaves, turmeric powder, hing, and cook for a few seconds.",
                    "Add tamarind pulp, salt, and jaggery (if using). Cook until the mixture thickens and raw smell disappears, and oil separates from the sides.",
                    "Add Puliyodarai paste/powder and mix well. Cook for another 2-3 minutes.",
                    "Add the cooked rice to the tamarind mixture. Mix gently but thoroughly, ensuring the rice is evenly coated.",
                    "Serve hot or at room temperature."
                ],
                video: "https://youtu.be/Zml50zZhRJY?si=iAwcyOw1qaBlyX7-",
                image: "./img/tamarind_rice.jpg"
            },
            "Curd Rice": {
                about: "Curd Rice (Thayir Sadam) is a comforting and cooling South Indian dish, especially popular in hot weather. It's made by mixing cooked rice with yogurt (curd) and seasoned with a simple tempering.",
                ingredients: [
                    "Cooked Rice",
                    "Curd (Yogurt)",
                    "Milk (optional, for creaminess and to prevent souring)",
                    "Oil/Ghee",
                    "Mustard Seeds",
                    "Urad Dal",
                    "Chana Dal",
                    "Green Chillies (finely chopped)",
                    "Ginger (finely chopped)",
                    "Curry Leaves",
                    "Asafoetida (Hing)",
                    "Salt",
                    "Pomegranate Arils, Grapes, Grated Carrot (for garnish, optional)"
                ],
                instructions: [
                    "Mash the cooked rice slightly while it's still warm. Let it cool completely.",
                    "Once cooled, add curd, salt, and milk (if using) to the mashed rice. Mix well until smooth and creamy.",
                    "For Tempering: In a small pan, heat oil/ghee. Add mustard seeds, urad dal, and chana dal. Sauté until dals turn golden.",
                    "Add green chillies, ginger, curry leaves, and asafoetida. Sauté for a few seconds until fragrant.",
                    "Pour the tempering over the curd rice mixture and mix well.",
                    "Garnish with pomegranate arils, grapes, or grated carrot if desired. Serve chilled or at room temperature."
                ],
                video: "https://youtu.be/8wm3Hfjvx3E?si=XXptovo328272sGL",
                image: "./img/curd_rice.jpg"
            },
            "Coconut Rice": {
                about: "Coconut Rice (Thengai Sadam) is a simple and fragrant South Indian rice dish made with fresh grated coconut and a light tempering of spices and lentils. It's quick to prepare and often served as part of a meal or for festivals.",
                ingredients: [
                    "Cooked Rice",
                    "Fresh Grated Coconut",
                    "Oil/Ghee",
                    "Mustard Seeds",
                    "Urad Dal",
                    "Chana Dal",
                    "Peanuts (optional)",
                    "Cashew Nuts (optional)",
                    "Dry Red Chillies",
                    "Green Chillies (slit)",
                    "Curry Leaves",
                    "Asafoetida (Hing)",
                    "Salt"
                ],
                instructions: [
                    "Heat oil/ghee in a pan. Add mustard seeds, urad dal, chana dal, peanuts, and cashew nuts (if using). Sauté until dals turn golden and nuts are lightly roasted.",
                    "Add dry red chillies, green chillies, curry leaves, and asafoetida. Sauté for a few seconds until fragrant.",
                    "Add the fresh grated coconut and sauté on low heat for 2-3 minutes until slightly aromatic but not brown.",
                    "Add the cooked rice and salt. Mix gently but thoroughly until the coconut mixture is evenly distributed throughout the rice.",
                    "Serve hot or warm."
                ],
                video: "https://youtu.be/MoDE9R0ZL4c?si=zmR2fhxcURCfdJk-",
                image: "./img/coconut_rice.jpg"
            }
        }
    },
    "Breads & Accompaniments": {
        "Flatbreads": {
            "Chappathi": {
                about: "Chappathi (or Chapati) is an unleavened flatbread, a staple in Indian cuisine. Made from whole wheat flour, water, and salt, it's cooked on a tawa (griddle) and often puffed up directly over flame.",
                ingredients: [
                    "Whole Wheat Flour (Atta)",
                    "Water (warm)",
                    "Salt",
                    "Oil/Ghee (for kneading and cooking)"
                ],
                instructions: [
                    "In a large bowl, combine whole wheat flour and salt. Gradually add warm water, kneading to form a soft, smooth dough. Add a teaspoon of oil and knead again.",
                    "Cover the dough and let it rest for 20-30 minutes.",
                    "Divide the dough into equal small balls. Dust with flour and roll each ball into a thin, even circle using a rolling pin.",
                    "Heat a tawa (flat griddle) on medium-high heat. Place the rolled chappathi on the hot tawa.",
                    "Cook for about 30 seconds until small bubbles appear. Flip and cook the other side for 30-45 seconds until light brown spots appear.",
                    "For puffed chappatis, gently press the edges with a cloth or move it directly over an open flame for a few seconds until it puffs up. Apply a little ghee if desired.",
                    "Serve hot with curries or sabzis."
                ],
                video: "https://youtu.be/ENXQ5lm4_fU?si=Fp8NZas4NC_PofDD",
                image: "./img/chappathi.jpg"
            },
            "Maida Parotta": {
                about: "Maida Parotta is a flaky, layered flatbread made from all-purpose flour (maida), popular in South India. It's often served with rich gravies like kurma or salna, and is known for its soft, chewy texture.",
                ingredients: [
                    "All-Purpose Flour (Maida)",
                    "Salt",
                    "Sugar (a pinch)",
                    "Oil/Ghee",
                    "Water",
                    "Egg (optional, for softness)",
                    "Baking Soda (a pinch, optional)"
                ],
                instructions: [
                    "In a bowl, mix all-purpose flour, salt, sugar, and baking soda (if using). Add water gradually and knead into a soft, elastic dough. Add egg (if using) and a little oil while kneading.",
                    "Knead the dough vigorously for 10-15 minutes until very smooth and pliable. Cover with a damp cloth and let it rest for at least 2 hours (or overnight for best results).",
                    "Divide the rested dough into equal balls. Flatten each ball and thinly roll it into a large rectangle or circle using oil (not flour) to prevent sticking.",
                    "Brush the surface with oil/ghee and pleat it like a fan, then coil it into a tight spiral. Tuck the end underneath.",
                    "Gently flatten the coiled dough and roll it out into a thick disc.",
                    "Heat a tawa or flat griddle. Cook the parotta on medium heat with oil/ghee until golden brown and crispy on both sides.",
                    "Once cooked, gently scrunch the parotta between your palms to separate the layers. Serve hot."
                ],
                video: "https://youtu.be/47fRmufjdQ4?si=FVr4GT02sgLOjaPa",
                image: "./img/maida_parotta.jpg"
            },
            "Wheat Parotta": {
                about: "Wheat Parotta is a healthier version of the traditional layered flatbread, made with whole wheat flour. It's less flaky than maida parotta but still offers a delicious soft, layered texture, making it a good accompaniment to curries.",
                ingredients: [
                    "Whole Wheat Flour (Atta)",
                    "Water",
                    "Salt",
                    "Oil/Ghee (for kneading and cooking)"
                ],
                instructions: [
                    "In a bowl, mix whole wheat flour and salt. Gradually add water and knead to form a soft, smooth dough. Add a teaspoon of oil and knead again for 5-7 minutes.",
                    "Cover the dough and let it rest for at least 30 minutes to 1 hour.",
                    "Divide the rested dough into equal small balls. Flatten each ball and thinly roll it into a large rectangle or circle.",
                    "Brush the surface with oil/ghee and pleat it like a fan, then coil it into a tight spiral. Tuck the end underneath.",
                    "Gently flatten the coiled dough and roll it out into a medium-thick disc.",
                    "Heat a tawa or flat griddle. Cook the parotta on medium heat with a little oil/ghee until golden brown spots appear on both sides.",
                    "Once cooked, gently scrunch the parotta between your palms to separate the layers. Serve hot."
                ],
                video: "https://youtu.be/8sgyMM0vbuM?si=6PyKGPvZEWm0-qKB",
                image: "./img/wheat_parotta.jpg"
            }
        },
        "Curries & Gravies": {
            "Veg Kurma": {
                about: "Veg Kurma is a creamy, flavorful, and mildly spiced mixed vegetable curry from South Indian cuisine. It's made with a coconut-cashew paste base, aromatic whole spices, and various vegetables, perfect with parotta, chapathi, or rice.",
                ingredients: [
                    "Mixed Vegetables (potatoes, carrots, peas, beans, cauliflower)",
                    "Onions (sliced)",
                    "Tomatoes (chopped)",
                    "Ginger-Garlic Paste",
                    "Green Chillies",
                    "Coconut (grated)",
                    "Cashew Nuts",
                    "Poppy Seeds (optional)",
                    "Whole Spices (cinnamon, cardamom, cloves, star anise)",
                    "Curry Leaves",
                    "Turmeric Powder",
                    "Coriander Powder",
                    "Garam Masala",
                    "Oil",
                    "Salt",
                    "Coriander Leaves (for garnish)"
                ],
                instructions: [
                    "Grind grated coconut, cashew nuts, poppy seeds (if using), green chillies, and a small piece of ginger to a smooth paste with a little water. Set aside.",
                    "In a pan, heat oil. Add whole spices and sauté until fragrant. Add sliced onions and cook until golden brown.",
                    "Add ginger-garlic paste and sauté until raw smell disappears. Add chopped tomatoes and cook until soft and mushy.",
                    "Add turmeric powder, coriander powder, and garam masala. Sauté for a minute.",
                    "Add mixed vegetables and cook for 5-7 minutes. Add water, cover, and cook until vegetables are tender.",
                    "Stir in the coconut-cashew paste. Add more water if needed to adjust consistency. Bring to a simmer and cook for 5-7 minutes, allowing the flavors to melt.",
                    "Garnish with fresh coriander leaves. Serve hot."
                ],
                video: "https://youtu.be/s41rReyKA4U?si=S-_t5KSjKfR9P_KX",
                image: "./img/veg_kurma.jpg"
            },
            "Chicken Curry": {
                about: "Chicken Curry is a popular Indian dish featuring chicken pieces cooked in a rich, aromatic, and spicy gravy made from onions, tomatoes, ginger-garlic, and a blend of ground spices. It's a versatile dish perfect with rice or bread.",
                ingredients: [
                    "Chicken (cut into pieces)",
                    "Onions (finely chopped)",
                    "Tomatoes (pureed or finely chopped)",
                    "Ginger-Garlic Paste",
                    "Green Chillies",
                    "Curry Powder/Red Chilli Powder",
                    "Coriander Powder",
                    "Turmeric Powder",
                    "Garam Masala",
                    "Curd (Yogurt, optional)",
                    "Oil/Ghee",
                    "Whole Spices (cinnamon, cardamom, cloves, bay leaf)",
                    "Salt",
                    "Water",
                    "Coriander Leaves (for garnish)"
                ],
                instructions: [
                    "Heat oil/ghee in a heavy-bottomed pan. Add whole spices and sauté until fragrant.",
                    "Add finely chopped onions and cook until golden brown. Add ginger-garlic paste and green chillies; sauté until raw smell disappears.",
                    "Add tomato puree and cook until oil separates. Stir in turmeric, red chilli powder, coriander powder, and garam masala. Cook for a minute.",
                    "Add chicken pieces and salt. Mix well and cook for 5-7 minutes until chicken changes color. Add curd (if using) and mix.",
                    "Add water to achieve desired gravy consistency. Bring to a boil, then reduce heat, cover, and simmer for 20-25 minutes (or until chicken is tender and cooked through), stirring occasionally.",
                    "Garnish with fresh coriander leaves. Serve hot with rice, chapathi, or parotta."
                ],
                video: "https://youtu.be/XmQ8mZFqczw?si=2atVhvle1OCeAYur",
                image: "./img/chicken_curry.jpg"
            },
            "Mutton Gravy": {
                about: "Mutton Gravy is a hearty and intensely flavorful curry made with tender pieces of mutton cooked in a thick, rich gravy of onions, tomatoes, and a robust blend of Indian spices, slow-cooked to infuse maximum flavor.",
                ingredients: [
                    "Mutton (bone-in pieces)",
                    "Onions (finely chopped)",
                    "Tomatoes (pureed or finely chopped)",
                    "Ginger-Garlic Paste",
                    "Green Chillies",
                    "Red Chilli Powder",
                    "Coriander Powder",
                    "Turmeric Powder",
                    "Garam Masala",
                    "Coconut Paste (optional, for richness)",
                    "Oil/Ghee",
                    "Whole Spices (cinnamon, cardamom, cloves, bay leaf)",
                    "Salt",
                    "Water",
                    "Coriander Leaves (for garnish)"
                ],
                instructions: [
                    "Heat oil/ghee in a heavy-bottomed pot or pressure cooker. Add whole spices and sauté until fragrant.",
                    "Add finely chopped onions and cook until golden brown. Add ginger-garlic paste and green chillies; sauté until raw smell disappears.",
                    "Add tomato puree and cook until oil separates. Stir in turmeric, red chilli powder, coriander powder, and garam masala. Cook for a minute.",
                    "Add mutton pieces and salt. Mix well and cook for 10-15 minutes until mutton changes color and browns slightly.",
                    "Add water (and coconut paste if using) to achieve desired gravy consistency. Bring to a boil.",
                    "If using a pressure cooker: close lid and cook for 4-6 whistles on medium heat, then simmer for 5-10 minutes. If using a pot: cover and simmer on low heat for 45-60 minutes, or until mutton is very tender.",
                    "Garnish with fresh coriander leaves. Serve hot with biriyani, rice, or parotta."
                ],
                video: "https://youtu.be/uEl7cLuhWHM?si=TOykIYXWjNH9LR7Y",
                image: "./img/mutton_gravy.jpg"
            }
        }
    },
    "Snacks & Desserts": {
        "Fritters (Bajji & Bonda)": {
            "Chilli Bajji": {
                about: "Chilli Bajji (Mirchi Bajji) are spicy fritters made by coating large green chillies (bajji milagai) in a spiced chickpea flour (besan) batter and deep-frying them until crispy. They are a popular street food snack, especially during monsoons.",
                ingredients: [
                    "Large Green Chillies (Bajji Milagai)",
                    "Besan (Chickpea Flour)",
                    "Rice Flour (for crispiness)",
                    "Red Chilli Powder (optional, for color)",
                    "Turmeric Powder",
                    "Asafoetida (Hing)",
                    "Baking Soda (a pinch, optional)",
                    "Salt",
                    "Water",
                    "Oil (for deep frying)"
                ],
                instructions: [
                    "Wash and slit the green chillies lengthwise, removing seeds if you prefer less spice.",
                    "In a bowl, combine besan, rice flour, red chilli powder, turmeric, asafoetida, baking soda, and salt. Gradually add water and whisk to form a thick, smooth, lump-free batter (coating consistency).",
                    "Heat oil for deep frying in a heavy-bottomed pan.",
                    "Dip each green chilli into the prepared batter, ensuring it's evenly coated.",
                    "Gently slide the coated chillies into the hot oil. Fry on medium heat, flipping occasionally, until golden brown and crispy.",
                    "Drain excess oil on absorbent paper. Serve hot with coconut chutney or tomato ketchup."
                ],
                video: "https://youtu.be/T9POk97X01s?si=9lFxRgNrHlSN2zRn",
                image: "./img/chilli_bajji.jpg"
            },
            "Potato Bajji": {
                about: "Potato Bajji (Aloo Bajji) are crispy fritters made from thinly sliced potatoes dipped in a spiced chickpea flour (besan) batter and deep-fried. They are a simple yet delicious snack, loved by all ages.",
                ingredients: [
                    "Potatoes (medium-sized)",
                    "Besan (Chickpea Flour)",
                    "Rice Flour (for crispiness)",
                    "Red Chilli Powder",
                    "Turmeric Powder",
                    "Asafoetida (Hing)",
                    "Baking Soda (a pinch, optional)",
                    "Salt",
                    "Water",
                    "Oil (for deep frying)"
                ],
                instructions: [
                    "Wash, peel, and thinly slice the potatoes into rounds. Pat them dry completely.",
                    "In a bowl, combine besan, rice flour, red chilli powder, turmeric, asafoetida, baking soda, and salt. Gradually add water and whisk to form a thick, smooth, lump-free batter (coating consistency).",
                    "Heat oil for deep frying in a heavy-bottomed pan.",
                    "Dip each potato slice into the prepared batter, ensuring it's evenly coated.",
                    "Gently slide the coated potato slices into the hot oil. Fry on medium heat, flipping occasionally, until golden brown and crispy.",
                    "Drain excess oil on absorbent paper. Serve hot with coconut chutney or tomato ketchup."
                ],
                video: "https://youtu.be/k-hlIHTQngs?si=OnTFvHsH1ScvIYer",
                image: "./img/potato_bajji.jpg"
            },
            "Onion Bonda": {
                about: "Onion Bonda are savory, deep-fried fritters made with finely chopped onions mixed into a spiced chickpea flour (besan) batter. They are crispy on the outside and soft on the inside, perfect as a tea-time snack.",
                ingredients: [
                    "Onions (finely chopped)",
                    "Besan (Chickpea Flour)",
                    "Rice Flour (for crispiness)",
                    "Green Chillies (finely chopped)",
                    "Ginger (grated/chopped)",
                    "Curry Leaves (chopped)",
                    "Red Chilli Powder",
                    "Turmeric Powder",
                    "Asafoetida (Hing)",
                    "Baking Soda (a pinch, optional)",
                    "Salt",
                    "Water",
                    "Oil (for deep frying)"
                ],
                instructions: [
                    "In a bowl, combine besan, rice flour, red chilli powder, turmeric, asafoetida, baking soda, and salt. Mix well.",
                    "Add finely chopped onions, green chillies, ginger, and curry leaves to the dry mixture. Mix everything thoroughly.",
                    "Gradually add water, mixing until a thick batter is formed. The batter should be thick enough to drop spoonfuls into oil.",
                    "Heat oil for deep frying in a heavy-bottomed pan.",
                    "Drop small spoonfuls of the batter into the hot oil. Fry on medium heat, turning occasionally, until golden brown and cooked through.",
                    "Drain excess oil on absorbent paper. Serve hot with coconut chutney or tomato ketchup."
                ],
                video: "https://youtu.be/V7uqhYJfGsE?si=_Y3bpyAwoBfnakfK",
                image: "./img/onion_bonda.jpg"
            }
        },
        "Sweet Treats": {
            "Semiya Payasam": {
                about: "Semiya Payasam (Vermicelli Kheer) is a creamy and sweet Indian dessert or pudding made with roasted vermicelli, milk, sugar, and flavored with cardamom. It's often garnished with fried nuts and raisins.",
                ingredients: [
                    "Semiya (Vermicelli)",
                    "Milk (full fat recommended)",
                    "Sugar",
                    "Ghee",
                    "Cardamom Powder",
                    "Cashew Nuts",
                    "Raisins",
                    "Water (optional, for cooking semiya initially)"
                ],
                instructions: [
                    "In a heavy-bottomed pan, heat ghee. Add cashew nuts and raisins; fry until golden and plump. Remove and set aside.",
                    "In the same pan, add semiya and roast on low heat until golden brown and aromatic. Be careful not to burn.",
                    "Add milk to the roasted semiya and bring to a boil. Reduce heat and simmer, stirring occasionally, until semiya is cooked and soft.",
                    "Add sugar and cardamom powder. Mix well until sugar dissolves completely. Continue to simmer for 2-3 minutes.",
                    "Stir in the fried cashew nuts and raisins.",
                    "Serve warm or chilled. The consistency will thicken as it cools."
                ],
                video: "https://youtu.be/txnTyiJ7i5s?si=uN-6moRr_o1v4hSn",
                image: "./img/semiya_payasam.jpg"
            },
            "Paruppu Payasam": {
                about: "Paruppu Payasam (Moong Dal Payasam) is a traditional South Indian sweet pudding made with moong dal (split yellow lentils), jaggery, coconut milk, and flavored with cardamom and ghee-fried nuts. It's a rich and festive dessert.",
                ingredients: [
                    "Moong Dal (split yellow lentils)",
                    "Jaggery (grated or powdered)",
                    "Thick Coconut Milk",
                    "Thin Coconut Milk/Water",
                    "Ghee",
                    "Cardamom Powder",
                    "Cashew Nuts",
                    "Raisins",
                    "Dry Ginger Powder (optional)"
                ],
                instructions: [
                    "Dry roast moong dal until aromatic and lightly golden. Wash and pressure cook with thin coconut milk/water until soft and mushy.",
                    "In a separate pan, melt jaggery with a little water. Strain to remove impurities. Boil until it forms a light syrup.",
                    "Add the cooked moong dal to the jaggery syrup. Mix well and cook for 5 minutes.",
                    "Add the thick coconut milk and cardamom powder. Cook on low heat, stirring continuously, until it thickens slightly. Do not boil vigorously after adding thick coconut milk.",
                    "In a small pan, heat ghee. Fry cashew nuts and raisins until golden and plump. Add dry ginger powder (if using).",
                    "Pour the fried nuts, raisins, and aromatic ghee into the payasam. Mix well.",
                    "Serve warm."
                ],
                video: "https://youtu.be/IXKnHk_wtRU?si=Gof2ZjVlqKw72Jjr",
                image: "./img/paruppu_payasam.jpg"
            }
        }
    }
};

hamburger.addEventListener('click', () => {
    navBar.classList.toggle('active');
});

mealDetail.querySelector('#close-btn').addEventListener('click', () => {
    mealDetail.classList.remove('show');
});

function showSection(sectionId) {
    document.querySelectorAll('.content-section').forEach(section => {
        section.style.display = 'none';
    });

    document.getElementById(sectionId).style.display = 'block';

    navLinks.forEach(link => link.classList.remove('active'));
    document.querySelector(`.nav-bar .nav-link[onclick*="${sectionId}"]`).classList.add('active');

    if (sectionId === 'home-section') {
        mainTitle.textContent = 'Discover Delicious Recipes';
        mainTitle.classList.add('section-title');
        searchWrapper.style.display = 'flex';
        renderAllRecipes();
    } else if (sectionId === 'about-section') {
        mainTitle.textContent = 'About Recipe Hub';
        mainTitle.classList.remove('section-title');
        searchWrapper.style.display = 'none';
    } else if (sectionId === 'contact-section') {
        mainTitle.textContent = 'Get in Touch';
        mainTitle.classList.remove('section-title');
        searchWrapper.style.display = 'none';
    }

    if (navBar.classList.contains('active')) {
        navBar.classList.remove('active');
    }

    mealDetail.classList.remove('show');
}

document.addEventListener('DOMContentLoaded', () => {
    showSection('home-section');
});

function renderAllRecipes() {
    foodListContainer.innerHTML = '';
    let totalRecipesDisplayed = 0;

    for (const mainCategory in recipesData) {
        const categorySection = document.createElement('div');
        categorySection.classList.add('category-section');
        categorySection.setAttribute('data-category', mainCategory);

        const h2 = document.createElement('h2');
        h2.textContent = mainCategory;
        categorySection.appendChild(h2);

        for (const subCategory in recipesData[mainCategory]) {
            const subcategorySection = document.createElement('div');
            subcategorySection.classList.add('subcategory-section');
            subcategorySection.setAttribute('data-subcategory', subCategory);

            const h3 = document.createElement('h3');
            h3.textContent = subCategory;
            subcategorySection.appendChild(h3);

            const subcategoryCards = document.createElement('div');
            subcategoryCards.classList.add('subcategory-cards');

            for (const recipeName in recipesData[mainCategory][subCategory]) {
                const recipe = recipesData[mainCategory][subCategory][recipeName];
                const card = document.createElement('div');
                card.classList.add('card');
                card.setAttribute('data-recipe', recipeName);
                card.onclick = () => getRecipeDetails(recipeName);

                card.innerHTML = `
                    <img src="${recipe.image}" alt="${recipeName}">
                    <h3>${recipeName}</h3>
                `;
                subcategoryCards.appendChild(card);
                totalRecipesDisplayed++;
            }
            subcategorySection.appendChild(subcategoryCards);
            categorySection.appendChild(subcategorySection);
        }
        foodListContainer.appendChild(categorySection);
    }

    noneFoundMessage.classList.remove('none-found-message');
    noneFoundMessage.textContent = 'No Recipes Found.';
    foodListContainer.appendChild(noneFoundMessage);
    
    if (totalRecipesDisplayed === 0) {
        noneFoundMessage.style.display = 'block';
    } else {
        noneFoundMessage.style.display = 'none';
    }
}

function search() {
    const filter = searchInput.value.toLowerCase();
    const allCategorySections = foodListContainer.querySelectorAll('.category-section');
    let recipesFoundCount = 0;

    allCategorySections.forEach(categorySection => {
        let categoryHasVisibleRecipes = false;
        const subcategorySections = categorySection.querySelectorAll('.subcategory-section');

        subcategorySections.forEach(subcategorySection => {
            let subcategoryHasVisibleRecipes = false;
            const cardsInSubcategory = subcategorySection.querySelectorAll('.card');

            cardsInSubcategory.forEach(card => {
                const recipeName = card.dataset.recipe.toLowerCase();
                if (recipeName.includes(filter)) {
                    card.style.display = '';
                    subcategoryHasVisibleRecipes = true;
                    recipesFoundCount++;
                } else {
                    card.style.display = 'none';
                }
            });

            if (!subcategoryHasVisibleRecipes) {
                subcategorySection.style.display = 'none';
            } else {
                subcategorySection.style.display = 'block';
                categoryHasVisibleRecipes = true;
            }
        });

        if (!categoryHasVisibleRecipes) {
            categorySection.style.display = 'none';
        } else {
            categorySection.style.display = 'block';
        }
    });

    if (recipesFoundCount === 0 && filter !== '') {
        noneFoundMessage.style.display = 'block';
    } else {
        noneFoundMessage.style.display = 'none';
    }
}

function clearInput() {
    searchInput.value = '';
    search();
    showMessage('Search cleared.', 'info');
}

function getRecipeDetails(recipeName) {
    let recipe = null;
    for (const mainCategory in recipesData) {
        for (const subCategory in recipesData[mainCategory]) {
            if (recipesData[mainCategory][subCategory][recipeName]) {
                recipe = recipesData[mainCategory][subCategory][recipeName];
                break;
            }
        }
        if (recipe) {
            break;
        }
    }

    if (recipe) {
        mealContent.innerHTML = `
            <h2 class="recipe-title">${recipeName}</h2>
            <h3>About Meal:</h3>
            <p class="recipe-category">${recipe.about}</p>
            <h3>Ingredients:</h3>
            <ul class="recipe-ingredients">
                ${recipe.ingredients.map(item => `<li>${item}</li>`).join('')}
            </ul>
            <h3>Instructions:</h3>
            <ol class="recipe-instructions">
                ${recipe.instructions.map(item => `<li>${item}</li>`).join('')}
            </ol>
            <div class="recipe-link">
                <a href="${recipe.video}" target="_blank">Watch Video</a>
            </div>
        `;
        mealDetail.classList.add('show');
    } else {
        showMessage('Recipe details not found for ' + recipeName, 'error');
    }
}

function showMessage(message, type = 'info', duration = 3000) {
    const messageArea = document.getElementById('app-message');
    if (messageArea) {
        messageArea.textContent = message;
        
        if (type === 'success') {
            messageArea.style.backgroundColor = '#28a745';
        } else if (type === 'error') {
            messageArea.style.backgroundColor = '#dc3545';
        } else {
            messageArea.style.backgroundColor = 'var(--primary-color)';
        }
        
        messageArea.style.color = 'var(--background-color)';
        messageArea.style.display = 'block';
        messageArea.style.opacity = '1';

        setTimeout(() => {
            messageArea.style.opacity = '0';
            setTimeout(() => {
                messageArea.style.display = 'none';
            }, 300);
        }, duration);
    } else {
        alert(message);
    }
}


contactForm.addEventListener('submit', async (event) => {
    event.preventDefault(); // Prevent default form submission

    const form = event.target;
    const formData = new FormData(form);

    try {
        const response = await fetch(form.action, {
            method: form.method,
            body: formData,
            headers: {
                'Accept': 'application/json'
            }
        });

        if (response.ok) {
            showMessage('Message sent successfully!', 'success');
            form.reset(); // Clear the form fields
        } else {
            const errorData = await response.json();
            console.error('Form submission error:', errorData);
            showMessage('Failed to send message. Please try again.', 'error');
        }
    } catch (error) {
        console.error('Network or submission error:', error);
        showMessage('An error occurred. Please check your internet connection and try again.', 'error');
    }
});