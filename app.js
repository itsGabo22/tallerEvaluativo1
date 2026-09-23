const projects = [
  {
    title: "App Development",
    team: "Marketing Team",
    timeLeft: "1 Weeks Left",
    progress: 34,
    bgClass: "bg-pink-500",
    colorClass: "text-pink-500",
    
    svgIcon: `<svg class="w-6 r-6 text-white" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"/></svg>`
  },
  {
    title: "Web Design",
    team: "Core UI Team",
    timeLeft: "3 Weeks Left",
    progress: 76,
    bgClass: "bg-emerald-400",
    colorClass: "text-emerald-400",
    
    svgIcon: `<svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>`
  },
  {
    title: "Landing Page",
    team: "Marketing Team",
    timeLeft: "2 Days Left",
    progress: 4,
    bgClass: "bg-blue-500",
    colorClass: "text-blue-500",
    
    svgIcon: `<svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 10h16M4 14h16M4 18h16"/></svg>`
  },
  {
    title: "Business Compare",
    team: "Marketing Team",
    timeLeft: "1 Month Left",
    progress: 90,
    bgClass: "bg-orange-400",
    colorClass: "text-orange-400",
    
    svgIcon: `<svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M11 3.055A9.003 9.003 0 1020.945 13H11V3.055z"/><path stroke-linecap="round" stroke-linejoin="round" d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"/></svg>`
  },
  {
    title: "Comerce Checkout",
    team: "Order Process Team",
    timeLeft: "3 Weeks Left",
    progress: 65,
    bgClass: "bg-purple-400",
    colorClass: "text-purple-400",
    
    svgIcon: `<svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"/></svg>`
  },
  {
    title: "Data Staging",
    team: "Core Data Team",
    timeLeft: "2 Month Left",
    progress: 96,
    bgClass: "bg-orange-500",
    colorClass: "text-orange-500",
    
    svgIcon: `<svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M4 7v10c0 2.21 3.58 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.58 4 8 4s8-1.79 8-4M4 7c0-2.21 3.58-4 8-4s8 1.79 8 4m0 5c0 2.21-3.58 4-8 4s-8-1.79-8-4"/></svg>`
  },
  {
    title: "Campaign Store",
    team: "Internal Communication",
    timeLeft: "11 Days Left",
    progress: 24,
    bgClass: "bg-cyan-400",
    colorClass: "text-cyan-400",
    
    svgIcon: `<svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z"/></svg>`
  },
  {
    title: "Acquisition Mitra",
    team: "Merchant team",
    timeLeft: "1 Weeks Left",
    progress: 70,
    bgClass: "bg-pink-600",
    colorClass: "text-pink-600",
    
    svgIcon: `<svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0 z"/></svg>`
  }
];

function renderCards() {
  const container = document.getElementById('cards-container');
  if (!container) return;
  container.innerHTML = ''; 

  projects.forEach(project => {
  
    const placeholderAvatars = `
      <div class="flex -space-x-1.5 overflow-hidden">
        <div class="h-5 w-5 rounded-full ring-2 ring-white bg-blue-400 flex items-center justify-center text-[8px] text-white font-bold">JD</div>
        <div class="h-5 w-5 rounded-full ring-2 ring-white bg-green-400 flex items-center justify-center text-[8px] text-white font-bold">AM</div>
        <div class="h-5 w-5 rounded-full ring-2 ring-white bg-amber-400 flex items-center justify-center text-[8px] text-white font-bold">+2</div>
      </div>
    `;

    const cardHTML = `
      <div class="bg-white border border-gray-100 rounded-3xl p-6 shadow-xs flex flex-col justify-between min-h-[260px] transition-all hover:shadow-md">
        <div>
          <!-- Icono -->
          <div class="w-12 h-12 rounded-2xl ${project.bgClass} flex items-center justify-center mb-5 shadow-sm">
            ${project.svgIcon}
          </div>

          <h3 class="font-bold text-gray-800 text-base mb-1 tracking-tight">${project.title}</h3>
          <p class="text-[11px] text-gray-400 font-medium flex items-center gap-1 mb-2">
            <span class="ml-1">${project.team}</span>
          </p>
          
          <p class="text-[11px] font-semibold text-gray-400 flex items-center gap-1 mb-6">
            <span class="ml-1">${project.timeLeft}</span>
          </p>
        </div>
        <div class="border-t border-gray-50 pt-4">
          <div class="flex items-center justify-between">
            <div>
              <p class="text-[9px] text-gray-400 font-bold mb-1">Team Member</p>
              ${placeholderAvatars}
            </div>
            <div class="text-right">
              <p class="text-[9px] text-gray-400 font-bold mb-0.5">Progress</p>
              <span class="text-xs font-black text-gray-700">${project.progress}%</span>
              <div class="w-16 bg-gray-100 h-1 rounded-full mt-1 overflow-hidden">
                <div class="${project.bgClass} h-1 rounded-full" style="width: ${project.progress}%"></div>
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
