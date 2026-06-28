function initScrollReveal() {
                const revealElements = document.querySelectorAll(".section__header, .category-card, .food-card, .tip-card, .faq-item, .about__feature");
                revealElements.forEach(el => el.classList.add("reveal"));
                if (!("IntersectionObserver" in window)) {
                    revealElements.forEach(el => el.classList.add("reveal--visible"));
                    return;
                }
                const observer = new IntersectionObserver(
                    entries => {
                        entries.forEach(entry => {
                            if (entry.isIntersecting) {
                                entry.target.classList.add("reveal--visible");
                                observer.unobserve(entry.target);
                            }
                        });
                    }, {
                        threshold: 0.1,
                        rootMargin: "0px 0px -40px 0px"
                    }
                );
                revealElements.forEach(el => observer.observe(el));
            }

            window.NutriStack = window.NutriStack || {};
            window.NutriStack.initScrollReveal = initScrollReveal;
