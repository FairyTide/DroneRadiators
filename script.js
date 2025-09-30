const content = document.getElementById('content');
const links = document.querySelectorAll('nav a');

const tabs = {
   home: { title: "Головна", count: 10, folder: "main", gif: "11.gif" },
  open: {
    title: "Відкриті радіатори",
    count: 4,
    folder: "open"
  },
  covered: {
    title: "Радіатори з кришкою",
    count: 4,
    folder: "covered"
  },
  high: {
    title: "Високоамперні радіатори",
    count: 3,
    folder: "high"
  }
};





function loadTab(tabName) {
  const tab = tabs[tabName];
  content.innerHTML = `<h2>${tab.title}</h2><div class="gallery"></div>`;
  const gallery = document.querySelector('.gallery');
  
   if(tabName === "home" && tab.gif){
    const gif = document.createElement('img');
    gif.src = `images/${tab.folder}/${tab.gif}`;
    gif.alt = "Анімація ProCool";
    gallery.appendChild(gif);
  }

  for (let i = 1; i <= tab.count; i++) {
    const img = document.createElement('img');
    img.src = `images/${tab.folder}/${i}.jpg`; // сюди вставиш свої картинки
    img.alt = `${tab.title} ${i}`;
    gallery.appendChild(img);
  }
}


links.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    links.forEach(l => l.classList.remove('active'));
    link.classList.add('active');
    const tabName = link.dataset.tab;
    loadTab(tabName);
  });
});

loadTab('home');
