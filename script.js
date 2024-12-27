const menus = {
    monday: {
        title: "Monday",
        menu: `
            <p>Breakfast: Poha + Milk + Banana</p>
            <p>Lunch: Udad Chana Dal + Rice + Jeera Raita + Salad</p>
            <p>Dinner: Seasonal Veg + Moong Dal + Salad</p>
        `
    },
    tuesday: {
        title: "Tuesday",
        menu: `
            <p>Breakfast: Macaroni + Milk</p>
            <p>Lunch: Rajma Rice + Mix Raita + Salad/Chutney</p>
            <p>Dinner: Sabut Dal + Veg Halwa + Salad</p>
        `
    },
    wednesday: {
        title: "Wednesday",
        menu: `
            <p>Breakfast: Stuffed Paratha + Tea</p>
            <p>Lunch: White Chole + Fried Rice + Bundi Raita + Salad/Chutney</p>
            <p>Dinner: Masoor Dal + Seasonal Veg + Salad</p>
        `
    },
    thursday: {
        title: "Thursday",
        menu: `
            <p>Breakfast: Aloo Paratha + Tea</p>
            <p>Lunch: Sambhar/Rice + Raita + Salad/Chutney</p>
            <p>Dinner: Seasonal Veg + Yellow Dal + Salad</p>
        `
    },
    friday: {
        title: "Friday",
        menu: `
            <p>Breakfast: Aloo Poori + Tea</p>
            <p>Lunch: Rajma Rice + Boondi Raita + Salad/Chutney</p>
            <p>Dinner: Udad Dal + Moong Dal + Soyabean + Salad</p>
        `
    },
    saturday: {
        title: "Saturday",
        menu: `
            <p>Breakfast: Idli Sambhar + Chutney</p>
            <p>Lunch: Chhole Bhature + Lassi + Salad</p>
            <p>Dinner: Moong Masoor + Soyabean + Salad</p>
        `
    },
    sunday: {
        title: "Sunday",
        menu: `
            <p>Breakfast: Milk + Poha Bhujia</p>
            <p>Lunch: Chhole Bhature + Lassi + Salad</p>
            <p>Dinner: Arhar Dal + Salad</p>
        `
    }
};
const setFavicon = (emoji) => {
    const canvas = document.createElement('canvas');
    canvas.height = 32;
    canvas.width = 32;
  
    const ctx = canvas.getContext('2d');
    ctx.font = '28px serif';
    ctx.fillText(emoji, -2, 24);
  
    const favicon = document.querySelector('link[rel=icon]');
    if (favicon) { favicon.href = canvas.toDataURL(); }
  }
  
  setFavicon('🐓🐓');

function showMenu(day) {
    document.querySelectorAll("nav a").forEach(link => link.classList.remove("active"));
    document.getElementById(`${day}-link`).classList.add("active");

    const menu = menus[day];
    document.getElementById("day-title").textContent = menu.title;
    document.getElementById("menu-details").innerHTML = menu.menu;
}

// Set default menu
showMenu('monday');
