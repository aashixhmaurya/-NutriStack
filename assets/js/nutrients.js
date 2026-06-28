const nutrientsNav = document.getElementById("nutrientsNav");
                const nutrientDetailContainer = document.getElementById("nutrientDetailContainer");
                const nutrientSidebar = document.getElementById("nutrientSidebar");
                const subnutrientList = document.getElementById("subnutrientList");
                const nutrientContentPane = document.getElementById("nutrientContentPane");
                const detailMainTitle = document.getElementById("detailMainTitle");
                const btnBackToCategories = document.getElementById("btnBackToCategories");

                
                function renderCategories() {
                    if (!nutrientsNav) return;
                    nutrientsNav.innerHTML = hierarchicalNutrients.map((n, idx) => `
          <div class="category-card" data-idx="${idx}" tabindex="0" role="button">
            <span class="category-card__icon">${n.icon}</span>
            <h3 class="category-card__title">${n.name}</h3>
            <p class="category-card__desc">${n.desc}</p>
          </div>
        `).join("");

                    nutrientsNav.querySelectorAll(".category-card").forEach(card => {
                        card.addEventListener("click", () => openCategory(card.getAttribute("data-idx")));
                        card.addEventListener("keydown", (e) => {
                            if (e.key === "Enter" || e.key === " ") {
                                e.preventDefault();
                                openCategory(card.getAttribute("data-idx"));
                            }
                        });
                    });
                }

                
                function openCategory(idx) {
                    const category = hierarchicalNutrients[idx];
                    if (!category) return;

                    nutrientsNav.style.display = "none";
                    nutrientDetailContainer.style.display = "block";
                    detailMainTitle.textContent = category.icon + " " + category.name;

                    if (category.hasSubTypes) {
                        nutrientSidebar.style.display = "block";
                        renderSubNav(category.subTypes);
                        
                        loadDetailContent(category.subTypes[0].details, category.subTypes[0].name);
                    } else {
                        nutrientSidebar.style.display = "none";
                        loadDetailContent(category.details, category.name);
                    }
                }

                
                function renderSubNav(subTypes) {
                    subnutrientList.innerHTML = subTypes.map((sub, idx) => `
          <li class="subnutrient-item ${idx === 0 ? 'active' : ''}" data-idx="${idx}">
            ${sub.name}
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 18l6-6-6-6"/></svg>
          </li>
        `).join("");

                    subnutrientList.querySelectorAll(".subnutrient-item").forEach(item => {
                        item.addEventListener("click", function() {
                            subnutrientList.querySelectorAll(".subnutrient-item").forEach(el => el.classList.remove("active"));
                            this.classList.add("active");
                            loadDetailContent(subTypes[this.getAttribute("data-idx")].details, subTypes[this.getAttribute("data-idx")].name);
                        });
                    });
                }

                
                function loadDetailContent(details, specificName) {
                    nutrientContentPane.scrollTop = 0; 

                    const makeList = (arr, isWarning = false) => `
          <ul class="detail-list ${isWarning ? 'detail-list--warning' : ''}">
            ${arr.map(item => `<li>${item}</li>`).join("")}
          </ul>
        `;

        nutrientContentPane.innerHTML = `
          <div class="detail-section">
            <h4>Overview: ${specificName}</h4>
            <p>${details.overview}</p>
          </div>
          
          <div class="detail-section">
            <h4>Functions in the Body</h4>
            ${makeList(details.functions)}
          </div>
          
          <div class="detail-section">
            <h4>Key Health Benefits</h4>
            ${makeList(details.benefits)}
          </div>

          <div class="detail-section">
            <h4>Natural Food Sources</h4>
            ${makeList(details.sources)}
          </div>
          
          <div class="detail-section">
            <h4>Recommended Daily Intake</h4>
            <p>${details.intake}</p>
          </div>
          
          <div class="detail-section">
            <h4>Signs of Deficiency</h4>
            ${makeList(details.deficiency)}
          </div>
          
          <div class="detail-section">
            <h4>Risks of Excessive Intake</h4>
            ${makeList(details.excess, true)}
          </div>
        `;
      }

      
      if (btnBackToCategories) {
        btnBackToCategories.addEventListener("click", () => {
          nutrientDetailContainer.style.display = "none";
          nutrientsNav.style.display = "grid";
        });
      }
