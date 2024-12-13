const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const dummyProducts = [
    { id: 1, name: 'Smartphone X', price: 599.99, image: 'https://radarutara.disway.id/upload/4021d1fa4d6bce2b029363f97102fc8a.jpeg' },
    { id: 2, name: 'Laptop Pro', price: 1299.99, image: 'https://i5.walmartimages.com/seo/Apple-MacBook-Pro-15-Inch-Retina-Laptop-i7-2-5GHz-3-7GHz-16GB-DDR3-Ram-2TB-SSD-Radeon-R9-M370X-2GB-Video-OS-X-Mojave-Thunderbolt-HDMI-MJLT2LL-A-Grade_504e16f2-b29b-4978-b6ff-be389f3b2887_1.ded2f448229eeac679f0c97e491570bc.jpeg' },
    { id: 3, name: 'Wireless Earbuds', price: 129.99, image: 'https://edge.rode.com/images/page/2123/modules/7843/rode-wireless-me-rx-tx-3-quater-4000x4000-rgb.png' },
    { id: 4, name: 'Smart Watch', price: 249.99, image: 'https://www.indabaa.com/wp-content/uploads/2020/06/feat-1920x1080.jpg' },
    { id: 5, name: 'Tablet Ultra', price: 449.99, image: 'https://www.reviews-tablet.com/wp-content/uploads/2016/04/tablet456.jpg' },
  ];
  

export const fetchProducts = async () => {
  await delay(1000); // Simulate network delay
  return dummyProducts;
};

