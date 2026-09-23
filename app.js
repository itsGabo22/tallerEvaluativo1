
const projects = [
  {
    title: "App Development",
    team: "Marketing Team",
    timeLeft: "1 Weeks Left",
    progress: 34,
    icon: "fa-solid fa-mobile-screen-button",
    color: "pink", 
    bgClass: "bg-pink-500"
  },
  {
    title: "Web Design",
    team: "Core UI Team",
    timeLeft: "3 Weeks Left",
    progress: 76,
    icon: "fa-solid fa-laptop-code",
    color: "teal", 
    bgClass: "bg-emerald-400"
  },
  {
    title: "Landing Page",
    team: "Marketing Team",
    timeLeft: "2 Days Left",
    progress: 4,
    icon: "fa-solid fa-window-maximize",
    color: "blue", 
    bgClass: "bg-blue-500"
  },
  {
    title: "Business Compare",
    team: "Marketing Team",
    timeLeft: "1 Month Left",
    progress: 90,
    icon: "fa-solid fa-chart-pie",
    color: "orange", 
    bgClass: "bg-orange-400"
  },
  {
    title: "Comerce Checkout",
    team: "Order Process Team",
    timeLeft: "3 Weeks Left",
    progress: 65,
    icon: "fa-solid fa-basket-shopping",
    color: "purple", 
    bgClass: "bg-purple-400"
  },
  {
    title: "Data Staging",
    team: "Core Data Team",
    timeLeft: "2 Month Left",
    progress: 96,
    icon: "fa-solid fa-database",
    color: "orange-dark", 
    bgClass: "bg-orange-500"
  },
  {
    title: "Campaign Store",
    team: "Internal Communication",
    timeLeft: "11 Days Left",
    progress: 24,
    icon: "fa-solid fa-video",
    color: "cyan", 
    bgClass: "bg-cyan-400"
  },
  {
    title: "Acquisition Mitra",
    team: "Merchant team",
    timeLeft: "1 Weeks Left",
    progress: 70,
    icon: "fa-solid fa-bullseye",
    color: "magenta", 
    bgClass: "bg-pink-600"
  }
];


function renderCards() {
  const container = document.getElementById('cards-container');
  container.innerHTML = ''; 
  projects.forEach(project => {
    
    const avatars = [
      'https://unsplash.com',
      'https://unsplash.com',
      'https://unsplash.com'
    ];

    const cardHTML = `
      <div class="bg-white border border-gray-100 rounded-3xl p-6 shadow-xs flex flex-col justify-between min-h-[260px] transition-all hover:shadow-md hover:border-gray-200">
        <div>
          <!-- Icono superior -->
          <div class="w-12 h-12 rounded-2xl ${project.bgClass} flex items-center justify-center text-white mb-5 shadow-inner">
            <i class="${project.icon} text-lg"></i>
          </div>

          <!-- Info del proyecto -->
          <h3 class="font-bold text-gray-800 text-lg mb-1 tracking-tight">${project.title}</h3>
          <p class="text-xs text-gray-400 font-medium flex items-center gap-1.5 mb-3">
            <i class="fa-regular fa-compass"></i> ${project.team}
          </p>
          
          <!-- Tiempo restante -->
          <p class="text-xs font-semibold text-gray-400 flex items-center gap-1.5 mb-6">
            <i class="fa-regular fa-calendar-check"></i> ${project.timeLeft}
          </p>
        </div>

        <!-- Sección inferior: Equipo y Progreso -->
        <div>
          <div class="flex items-center justify-between border-t border-gray-50 pt-4">
            <!-- Avatares -->
            <div>
              <p class="text-[10px] text-gray-400 font-bold mb-1.5">Team Member</p>
              <div class="flex -space-x-2 overflow-hidden">
                ${avatars.map(url => `<img class="inline-block h-6 w-6 rounded-full ring-2 ring-white object-cover" src="\${url}" alt="Team user">`).join('')}
              </div>
            </div>

            <!-- Porcentaje y Barra de progreso -->
            <div class="text-right">
              <p class="text-[10px] text-gray-400 font-bold mb-1">Progress</p>
              <span class="text-sm font-black text-gray-700">${project.progress}%</span>
              <!-- Barra de progreso -->
              <div class="w-16 bg-gray-100 h-1.5 rounded-full mt-1 overflow-hidden">
                <div class="${project.bgClass} h-1.5 rounded-full" style="width: ${project.progress}%"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;

    container.innerHTML += cardHTML;
  });
}
window.onload = function() {
  renderCards(); 
};

