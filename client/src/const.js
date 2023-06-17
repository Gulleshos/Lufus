export const BASE_API_URL = "https://lufus-api.vercel.app/api/";

export const categoryTitle = {
    easytocare: "Easy To Care Plants",
    indoor: "Indoor Plant",
    outdoor: "Outdoor Plants",
    sales: "Sales",
    small: "Small Plants",
    medium: "Medium Plants",
    large: "Large Plants",
    lowlight: "Low light Plants",
};

export const sortTypes = [
    { sortType: "LTH", text: "Price, Low To High" },
    { sortType: "HTL", text: "Price, High To Low" },
    { sortType: "AZ", text: "Alphabetically, A-Z" },
    { sortType: "ZA", text: "Alphabetically, Z-A" },
];

export const categories = [
    { text: "All plants", link: "/catalog" },
    { text: "Sales", link: "./sales" },
    { text: "Indoor", link: "./indoor" },
    { text: "Outdoor", link: "./outdoor" },
    { text: "Easy To Care", link: "./easytocare" },
    { text: "Small", link: "./small" },
    { text: "Medium", link: "./medium" },
    { text: "Large", link: "./large" },
    { text: "Low Light", link: "./lowlight" },
];

export const formInfo = [
    { name: 'firstName', label: 'First Name', required: true, type: 'text'},
    { name: 'lastName', label: 'Last Name', required: false, type: 'text'},
    { name: 'deliveryAddress', label: 'Delivery Address', required: true, type: 'text'},
    { name: 'email', label: 'Email', required: true, type: 'email'},
]

export const gallery = [
    require("./assets/images/gallery/image1.png"),
    require("./assets/images/gallery/image2.png"),
    require("./assets/images/gallery/image3.png"),
    require("./assets/images/gallery/image4.png"),
    require("./assets/images/gallery/image5.png"),
    require("./assets/images/gallery/image6.png"),
    require("./assets/images/gallery/image7.png"),
    require("./assets/images/gallery/image8.png"),
    require("./assets/images/gallery/image9.png"),
    require("./assets/images/gallery/image10.png"),
    require("./assets/images/gallery/image11.png"),
];

export const advices = {
    general: [
        {
            title: "Soils and repotting",
            text: `Houseplants can be grown in a great variety of soil mixes
                but are easier to care for if planted in soils containing
                high levels of peat moss. These soils retain water and
                fertilizer and provide good aeration if peat moss is mixed
                with perlite. You can find prepackaged soils with these
                ingredients or try doing your own blend. We recommend
                starting with 2 parts peat and 1 part perlite. Repotting is
                necessary when the plant top outgrows the pot and there is
                not enough room for new root growth.`,
        },
        {
            title: "Water",
            text: `The most accurate assessment of a plant’s need for water is 
                accomplished by testing its weight. Pick up the container of 
                the plant and see how much it weighs; the lighter it is, the 
                more it needs a drink. You can also use your finger to feel how 
                dry the first few inches of soil are. Most houseplants would 
                prefer being slightly dry than soaking wet. When it is time to 
                water your plant, slowly poor water onto the soil until water 
                starts escaping from the drainage holes. Containers without 
                drainage should have a layer of lava rocks placed in the 
                bottom to allow a space for excess water.`,
        },
        {
            title: "Light",
            text: `Most house plants do not like full sun and many of them will 
                not survive long when they receive too much direct sunlight. 
                Most houseplants prefer bright indirect sunlight. Do not forget 
                to occasionally rotate your plants for even growth.`,
        },
        {
            title: "Fertilizer",
            text: `The food can be delivered via a granule that breaks down over 
                time, or it can be added more directly via a water-soluble 
                fertilizer. Granules generally need to be applied once every few 
                months, while water soluble fertilizers should be applied every 
                two weeks or so. Read the directions on a specific fertilizer to 
                see what is recommended.`,
        },
        {
            title: "Temperature and air flow",
            text: `Aim to keep the plant in a warm environment with some air 
                circulation. Almost all houseplants need a minimum temperature 
                of 55oF to survive. Keep plants away from areas of cold drafts 
                in the winter.`,
        },
    ],
    repotting: [
        {
            title: "Water",
            text: `Lightly water plant to help the root ball and 
                soil slide out more easily.`,
        },
        {
            title: "Remove",
            text: `Flip the pot on its side and gently pull it away from the 
                plant. Tap the pot on a counter to help release the plant from 
                the pot.`,
        },
        {
            title: "Clean",
            text: `Clean the pot with hot soapy water to get rid of any diseases.`,
        },
        {
            title: "Add",
            text: `Add soil to the bottom of the pot and ensure the root ball is 
                at least 1/2 from the bottom.`,
        },
        {
            title: "Position",
            text: `Place the plant in the pot and make sure it is centered and 
                sitting up straight.`,
        },
        {
            title: "Fill",
            text: `Add potting soil around the plant in layers, pressing it down 
                with your fingers until firm. Do not plant deeper than before.`,
        },
        {
            title: "Water",
            text: `Water your newly potted plant well until the water runs out 
                the bottom.`,
        },
        {
            title: "Trim",
            text: `If plant has damaged leaves, you can trim them off without 
                damaging the plant.`,
        },
    ],
};
