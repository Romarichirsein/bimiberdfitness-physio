export interface BlogPostData {
  id: number;
  title: {
    fr: string;
    en: string;
  };
  excerpt: {
    fr: string;
    en: string;
  };
  content: {
    fr: string;
    en: string;
  };
  image: string;
  date: string;
  author: string;
  category: string;
}

export const BLOG_POSTS: BlogPostData[] = [
  {
    id: 1,
    title: {
      fr: "Les bienfaits de la physiothérapie sportive",
      en: "The benefits of sports physiotherapy"
    },
    excerpt: {
      fr: "Découvrez comment la physiothérapie peut non seulement soigner vos blessures mais aussi améliorer vos performances athlétiques.",
      en: "Discover how physiotherapy can not only heal your injuries but also improve your athletic performance."
    },
    content: {
      fr: "La physiothérapie sportive est bien plus qu'une simple récupération après une blessure. C'est un outil essentiel pour tout athlète, amateur ou professionnel, souhaitant optimiser ses capacités physiques et prévenir les risques. \n\nChez Elite Performance, nos experts analysent votre posture, votre biomécanique et vos mouvements spécifiques pour identifier les zones de faiblesse avant qu'elles ne deviennent problématiques. Grâce à des techniques manuelles avancées et des exercices thérapeutiques ciblés, nous vous aidons à retrouver une mobilité complète et une puissance maximale.",
      en: "Sports physiotherapy is much more than just recovery from injury. It is an essential tool for any athlete, amateur or professional, wishing to optimize their physical capacities and prevent risks. \n\nAt Elite Performance, our experts analyze your posture, your biomechanics and your specific movements to identify areas of weakness before they become problematic. Using advanced manual techniques and targeted therapeutic exercises, we help you regain full mobility and maximum power."
    },
    image: "https://images.unsplash.com/photo-1576091160550-217359f4ecf1?q=80&w=2070&auto=format&fit=crop",
    date: "2024-05-20",
    author: "Dr. Armand B.",
    category: "Health"
  },
  {
    id: 2,
    title: {
      fr: "5 exercices fondamentaux pour la force",
      en: "5 fundamental exercises for strength"
    },
    excerpt: {
      fr: "La force est la base de toute transformation physique. Voici les 5 mouvements que tout le monde devrait maîtriser.",
      en: "Strength is the foundation of any physical transformation. Here are the 5 movements everyone should master."
    },
    content: {
      fr: "Beaucoup de gens se perdent dans des routines complexes, mais les gains les plus importants proviennent souvent des fondamentaux. Le squat, le soulevé de terre (Deadlift), le développé couché, les tractions et le développé militaire forment le 'Big 5'. \n\nMaîtriser ces mouvements permet de recruter un maximum de fibres musculaires et de stimuler une réponse hormonale favorable à la croissance et à la perte de gras. Dans cet article, nous décomposons la technique parfaite pour chacun de ces exercices afin d'éviter les blessures et de maximiser votre potentiel.",
      en: "Many people get lost in complex routines, but the most important gains often come from the fundamentals. The squat, the deadlift, the bench press, pull-ups and the military press form the 'Big 5'. \n\nMastering these movements allows maximum recruitment of muscle fibers and stimulates a hormonal response favorable to growth and fat loss. In this article, we break down the perfect technique for each of these exercises to avoid injury and maximize your potential."
    },
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop",
    date: "2024-05-15",
    author: "Coach Marc",
    category: "Fitness"
  },
  {
    id: 3,
    title: {
      fr: "Nutrition : Manger pour la performance",
      en: "Nutrition: Eating for performance"
    },
    excerpt: {
      fr: "Ce que vous mettez dans votre assiette est aussi important que ce que vous faites à la salle. Guide complet sur la nutrition sportive.",
      en: "What you put on your plate is as important as what you do at the gym. Complete guide to sports nutrition."
    },
    content: {
      fr: "La nutrition n'est pas seulement une question de calories, c'est une question de carburant. Pour performer, votre corps a besoin d'un équilibre précis de macronutriments et de micronutriments. \n\nApprendre à gérer ses apports en protéines pour la réparation musculaire, en glucides pour l'énergie et en lipides pour la santé hormonale est crucial. Nous explorons également l'importance de l'hydratation et du timing des repas autour de l'entraînement pour garantir que vous ayez toujours l'énergie nécessaire pour vos séances les plus intenses.",
      en: "Nutrition is not just about calories, it's about fuel. To perform, your body needs a precise balance of macronutrients and micronutrients. \n\nLearning to manage protein intake for muscle repair, carbohydrates for energy and lipids for hormonal health is crucial. We also explore the importance of hydration and meal timing around training to ensure you always have the energy needed for your most intense sessions."
    },
    image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?q=80&w=2070&auto=format&fit=crop",
    date: "2024-05-10",
    author: "Sarah L.",
    category: "Nutrition"
  },
  {
    id: 4,
    title: {
      fr: "L'importance de la récupération",
      en: "The importance of recovery"
    },
    excerpt: {
      fr: "Pourquoi le repos est la partie la plus sous-estimée de votre programme d'entraînement et comment optimiser votre sommeil.",
      en: "Why rest is the most underrated part of your training program and how to optimize your sleep."
    },
    content: {
      fr: "On ne devient pas plus fort pendant l'entraînement, on devient plus fort pendant la récupération. C'est durant votre sommeil et vos périodes de repos que votre corps répare les tissus endommagés et s'adapte au stress de l'exercice. \n\nNégliger la récupération mène inévitablement au surentraînement, à la fatigue chronique et aux blessures. Découvrez nos protocoles de récupération active, l'usage stratégique de la cryothérapie et pourquoi 8 heures de sommeil de qualité sont le meilleur complément alimentaire au monde.",
      en: "You don't get stronger during training, you get stronger during recovery. It is during your sleep and periods of rest that your body repairs damaged tissue and adapts to the stress of exercise. \n\nNeglecting recovery inevitably leads to overtraining, chronic fatigue and injuries. discover our active recovery protocols, the strategic use of cryotherapy and why 8 hours of quality sleep are the best food supplement in the world."
    },
    image: "https://images.unsplash.com/photo-1544161515-4af6b1d4efcd?q=80&w=2070&auto=format&fit=crop",
    date: "2024-05-05",
    author: "Dr. Armand B.",
    category: "Recovery"
  }
];
