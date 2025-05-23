import ImageOne from '../assests/image1.jpg';
import ImageTwo from '../assests/image2.jpg';
import ImageThree from '../assests/shippingimage1.jpg';
import ImageFour from '../assests/shippingimage2.jpg';

export const statusStack = [
    {
        status: "Delivered packages",
        count: 890
    },
    {
        status: "Countries covered",
        count: 137
    },
    {
        status: "Tons of Goods",
        count: 740
    },
    {
        status: "Satified Clients",
        count: 600
    },
];

export const services = [
    {
        image: ImageOne,
        title: 'Air Freight Services',
        description:
            'At our Auto Service garage, we fully appreciate how difficult it is for people to find.',
    },
    {
        image: ImageTwo,
        title: 'Drone Services',
        description:
            'These are unique and often differ from one industry to another. Our logistics expertise.',
    },
    {
        image: ImageThree,
        title: 'Warehouse Solutions Warehouse',
        description:
            'Optimized storage solutions tailored to your inventory needs, ensuring safety and efficiency.  ensuring safety and efficiency',
    },
    {
        image: ImageFour,
        title: 'Ground Transport Transport',
        description:
            'Reliable and timely ground transportation services across multiple regions Transport Transport.',
    },
];

export const reasons = [
    { text: "Dui ac dhejs hfeisjd abdhrhd urdre kvnjdcd", showIcon: true },
    { text: "Dui ac dhejs hfeisjd abdhrhd ehbf vjnre kvnjdcd", showIcon: true },
    { text: "Dui ac dhejs hfeisjd rhd urdehbf vjnre kvnjdcd", showIcon: true },
    { text: "Dui ac dhejs sjd abdhrhd urdehbf vjnre kvnjdcd", showIcon: true },
];

export const testimonialsThoughts = [
    {
        name: "John Deo",
        position: "Managing Director",
        thought: "Integer congue elit non semper laoreet sed lectus orci posuer nisl tempor se felis ac mauris. Pelentesque inyd urna. Integer vitae felis vel magna posu du vestibulum. Nam rutrum congue diam. Aliquam malesuada maurs etug met Curabitur laoreet convallis nisl pellentesque bibendum."
    },
    {
        name: "Deo Seller",
        position: "Managing Officer",
        thought: "Integer mauris. Pelentesque inyd urna. Integer vitae felis vel magna posu du vestibulum. Nam rutrum congue diam. Aliquam malesuada maurs etug met Curabitur laoreet convallis nisl pellentesque bibendum."
    },
    {
        name: "Johny Feris",
        position: "HR Manager",
        thought: "Integer congue elit non semper laoreet sed lectus orci posuer nisl tempor se felis ac mauris. Integer vitae felis vel magna posu du vestibulum. Nam rutrum congue diam. Aliquam malesuada maurs etug met Curabitur laoreet convallis nisl pellentesque bibendum."
    },
]

export const cardsData = [
    {
        image: ImageOne,
        date: '26',
        month: 'MAY',
        title: 'CURABITUR LOREM UISM QUIS',
        admin: 'Admin',
        comments: 15,
        description: 'Pellentesque habitant morbi tristique senectus. Pellentesque morbi tristique senectus.',
    },
    {
        image: ImageOne,
        date: '27',
        month: 'MAY',
        title: 'VESTIBULUM MATTIS NISI',
        admin: 'Editor',
        comments: 10,
        description: 'Donec nec justo eget felis facilisis fermentum. Donec felis facilisis fermentum.',
    },
    {
        image: ImageOne,
        date: '28',
        month: 'MAY',
        title: 'LOREM IPSUM DOLOR',
        admin: 'Guest',
        comments: 5,
        description: 'Aliquam lorem ante, dapibus in, viverra quis. Aliquam lorem ante, viverra quis.',
    },
    {
        image: ImageOne,
        date: '29',
        month: 'MAY',
        title: 'NULLA CONSEQUAT MASSA',
        admin: 'Admin',
        comments: 8,
        description: 'Quisque rutrum. Aenean imperdiet. Etiam ultricies. Quisque rutrum. Etiam ultricies.',
    },
];

export const Seperator = () => {
    return (
        <div>
            <p className='text-yellow-600 mt-2 mb-4 text-left'>----------</p>
        </div>
    )
}

export const latestNewsList = [
  {
    news: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.", 
    time:"5 seconds ago"
  },
  {
    news: "Lorem ipsum, consectetur. Lorem ipsum dolor sit amet.", 
    time:"5 minutes ago"
  },
];

export const customerServices = ["Communications", "FAQ", "Support Forums", "Privacy Policy", "Rules and Conditions", "Contact Us"];

export const menuItems = [
    {
      label: 'Home',
      submenu: ['Logistics', 'Freight', 'Customs'],
    },
    {
      label: 'Pages',
      submenu: ['Logistics', 'Freight', 'Customs'],
    },
    {
      label: 'Traking',
    },
    {
      label: 'Services',
      submenu: ['Logistics', 'Freight', 'Customs'],
    },
    {
      label: 'Blog',
      submenu: ['Logistics', 'Freight', 'Customs'],
    },
  ];
  
