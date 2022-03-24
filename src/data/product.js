import { v4 as uuid} from 'uuid'


const products = [

    {
        id:uuid(),
        modelName: "Galaxy S22 ultra",
        brandName: "Samsung",
        description: "Dynamic AMOLED 2x display with up to 1750 nits in peak brightness.5G Ready powered by Galaxy’s first 4nm processor",
        avatar: "/images/s22-ultra.webp",
        originalPrize: "131999",
        discountedPrize: "109999",
        ratings: 4,
        memoryAndStorage:"8Gb ram & 128 stroage",
        colour:"black",
    },
    {
        id:uuid(),
        modelName: "Galaxy S22",
        brandName: "Samsung",
        description: "Dynamic AMOLED 2x display with up to 1750 nits in peak brightness.5G Ready powered by Galaxy’s first 4nm processor",
        avatar: "/images/S22.webp",
        originalPrize: "85999",
        discountedPrize: "72999",
        ratings: 4,
        memoryAndStorage:"8Gb ram & 128 stroage",
        colour:"black",
    },
    {
        id:uuid(),
        modelName: "Galaxy A52",
        brandName: "Samsung",
        description: "Dynamic AMOLED display.5G Ready powered by Galaxy’s.",
        avatar: "/images/A-52.jpg",
        originalPrize: "40999",
        discountedPrize: "32499",
        ratings: 4,
        memoryAndStorage:"8Gb ram & 128 stroage",
        colour:"lightblue",
    },
    {
        id:uuid(),
        modelName: "Galaxy A22 ",
        brandName: "Samsung",
        description: "Segment Best 16.72 centimeters (6.6-inch) TFT - Infinity V-cut display, FHD+ 1080 x 2408 resolution with 90Hz Refresh rate",
        avatar: "/images/Galaxy-A22-5.jpg",
        originalPrize: "22499",
        discountedPrize: "18999",
        ratings: 4,
        memoryAndStorage:"8Gb ram & 128 stroage",
        colour:"black",
    },
    {
        id:uuid(),
        modelName: "iPhone 13pro max",
        brandName: "Iphone",
        description: "17 cm (6.7-inch) Super Retina XDR display with ProMotion for a faster, more responsive fee",
        avatar: "/images/i-13-pro-max.jpg",
        originalPrize: "129900",
        discountedPrize: "116910",
        ratings: 4,
        memoryAndStorage:"128 stroage",
        colour:"green",
    },
    {
        id:uuid(),
        modelName: "iPhone 13 pro",
        brandName: "Iphone",
        description: "17 cm (6.7-inch) Super Retina XDR display with ProMotion for a faster, more responsive fee",
        avatar: "/images/i-13-pro.jpg",
        originalPrize: "1,19,900",
        discountedPrize: "107910",
        ratings: 4,
        memoryAndStorage:"128 stroage",
        colour:"green",
    },
    {
        id:uuid(),
        modelName: "iPhone 12",
        brandName: "Iphone",
        description: "17 cm (6.7-inch) Super Retina XDR display with ProMotion for a faster, more responsive fee",
        avatar: "/images/i-12.jpg",
        originalPrize: "70900",
        discountedPrize: "59999",
        ratings: 4,
        memoryAndStorage:"128 stroage",
        colour:"purple",
    },
    {
        id:uuid(),
        modelName: "iPhone SE",
        brandName: "Iphone",
        description: "11.94 cm (4.7-inch) Retina HD display. 3rd Generation",
        avatar: "/images/i-se.jpg",
        originalPrize: "43900",
        discountedPrize: "39949",
        ratings: 4,
        memoryAndStorage:"64 stroage",
        colour:"black",
    },
    {
        id:uuid(),
        modelName: "Oppo reno 6 pro",
        brandName: "Oppo",
        description: "16.33 cm (6.43 inch) Full HD+ Display.64MP + 8MP + 2MP | 32MP Front Camera",
        avatar: "/images/oppo-reno6pro.jpg",
        originalPrize: "46990",
        discountedPrize: "37800",
        ratings: 4,
        memoryAndStorage:"8Gb ram & 128 stroage",
        colour:"sky-blue",
    },
    {
        id:uuid(),
        modelName: "Oppo reno 6",
        brandName: "Oppo",
        description: "16.33 cm (6.43 inch) Full HD+ Display.64MP + 8MP + 2MP | 32MP Front Camera",
        avatar: "/images/oppo-reno-6.jpg",
        originalPrize: "35990",
        discountedPrize: "27604",
        ratings: 4,
        memoryAndStorage:"8Gb ram & 128 stroage",
        colour:"black",
    },
    {
        id:uuid(),
        modelName: "OnePlus 9 pro",
        brandName: "OnePlus",
        description: "Rear Quad Camera Co-Developed by Hasselblad.Qualcomm Snapdragon 888 Processor with Adreno 660 GPU",
        avatar: "/images/oneplus-9pro.jpg",
        originalPrize: "69999",
        discountedPrize: "62999",
        ratings: 4,
        memoryAndStorage:"8Gb ram & 128 stroage",
        colour:"grey",
    },
    {
        id:uuid(),
        modelName: "OnePlus 9RT",
        brandName: "OnePlus",
        description: "Rear Quad Camera Co-Developed by Hasselblad.Qualcomm Snapdragon 888 Processor with Adreno 660 GPU",
        avatar: "/images/oneplus-9RT.webp",
        originalPrize: "42900",
        discountedPrize: "39039",
        ratings: 4,
        memoryAndStorage:"8Gb ram & 128 stroage",
        colour:"grey",
    },
    {
        id:uuid(),
        modelName: "OnePlus Nord SE",
        brandName: "OnePlus",
        description: "Rear Quad Camera Co-Developed by Hasselblad.Qualcomm Snapdragon 888 Processor with Adreno 660 GPU",
        avatar: "/images/nord-se-2.jpg",
        originalPrize: "22499",
        discountedPrize: "18999",
        ratings: 4,
        memoryAndStorage:"8Gb ram & 128 stroage",
        colour:"grey",
    },
]

export { products }