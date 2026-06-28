const foodSourcesGrid = document.getElementById("foodSourcesGrid");
      const tipsGrid = document.getElementById("tipsGrid");
      const faqList = document.getElementById("faqList");

      if (foodSourcesGrid) {
        foodSourcesGrid.innerHTML = foodSourcesData.map(food => `
          <div class="food-card">
            <span class="food-card__icon">${food.icon}</span>
            <h3 class="food-card__name">${food.name}</h3>
            <p class="food-card__desc">${food.description}</p>
            <div class="food-card__nutrients">
              ${food.keyNutrients.map(n => `<span class="food-card__tag">${n}</span>`).join("")}
            </div>
          </div>
        `).join("");
      }

      if (tipsGrid) {
        tipsGrid.innerHTML = nutritionTips.map(tip => `
          <div class="tip-card">
            <span class="tip-card__icon">${tip.icon}</span>
            <div class="tip-card__body">
              <h3 class="tip-card__title">${tip.title}</h3>
              <p class="tip-card__desc">${tip.description}</p>
            </div>
          </div>
        `).join("");
      }

      if (faqList) {
        faqList.innerHTML = faqData.map((item, idx) => `
          <div class="faq-item">
            <button class="faq-item__question">
              <span>${item.question}</span>
              <svg class="faq-item__chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"/></svg>
            </button>
            <div class="faq-item__answer">
              <div class="faq-item__answer-inner">${item.answer}</div>
            </div>
          </div>
        `).join("");

        faqList.querySelectorAll(".faq-item__question").forEach(btn => {
          btn.addEventListener("click", function () {
            const parent = this.closest(".faq-item");
            const answer = parent.querySelector(".faq-item__answer");
            const isOpen = parent.classList.contains("faq-item--open");

            faqList.querySelectorAll(".faq-item--open").forEach(openItem => {
              if (openItem !== parent) {
                const openAnswer = openItem.querySelector(".faq-item__answer");
                openAnswer.style.maxHeight = openAnswer.scrollHeight + "px";
                openAnswer.offsetHeight; 
                openItem.classList.remove("faq-item--open");
                openAnswer.style.maxHeight = null;
              }
            });

            if (isOpen) {
              answer.style.maxHeight = answer.scrollHeight + "px";
              answer.offsetHeight; 
              parent.classList.remove("faq-item--open");
              answer.style.maxHeight = null;
            } else {
              parent.classList.add("faq-item--open");
              answer.style.maxHeight = answer.scrollHeight + "px";
              setTimeout(() => { if (parent.classList.contains("faq-item--open")) answer.style.maxHeight = "none"; }, 400);
            }
          });
        });
      }

      renderCategories();

      if (window.NutriStack && window.NutriStack.initScrollReveal) {
        window.NutriStack.initScrollReveal();
      }
