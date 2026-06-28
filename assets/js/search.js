const searchToggle = document.getElementById("searchToggle");
            const searchBar = document.getElementById("searchBar");
            const searchInput = document.getElementById("searchInput");
            const searchClose = document.getElementById("searchClose");
            const searchResults = document.getElementById("searchResults");

            function handleNavbarScroll() {
                if (window.scrollY > 0) navbar.classList.add("navbar--scrolled");
                else navbar.classList.remove("navbar--scrolled");
            }
            window.addEventListener("scroll", handleNavbarScroll, {
                passive: true
            });
            handleNavbarScroll();

            function closeMobileMenu() {
                navMenu.classList.remove("navbar__nav--open");
                hamburgerBtn.classList.remove("navbar__hamburger--active");
                mobileOverlay.classList.remove("mobile-overlay--visible");
                document.body.classList.remove("no-scroll");
            }

            hamburgerBtn.addEventListener("click", function() {
                if (navMenu.classList.contains("navbar__nav--open")) closeMobileMenu();
                else {
                    navMenu.classList.add("navbar__nav--open");
                    hamburgerBtn.classList.add("navbar__hamburger--active");
                    mobileOverlay.classList.add("mobile-overlay--visible");
                    document.body.classList.add("no-scroll");
                }
            });
            mobileOverlay.addEventListener("click", closeMobileMenu);

            navLinks.forEach(link => {
                link.addEventListener("click", function(e) {
                    e.preventDefault();
                    const target = document.querySelector(this.getAttribute("href"));
                    if (target) {
                        closeMobileMenu();
                        target.scrollIntoView({
                            behavior: "smooth",
                            block: "start"
                        });
                    }
                });
            });

            
            function buildSearchIndex() {
                const index = [];
                hierarchicalNutrients.forEach(n => {
                    if (n.hasSubTypes) {
                        n.subTypes.forEach(sub => {
                            index.push({
                                title: sub.name,
                                description: sub.details.overview.substring(0, 80) + "...",
                                icon: n.icon,
                                section: "#nutrients",
                                searchText: (sub.name + " " + sub.details.overview + " " + sub.details.benefits.join(" ")).toLowerCase()
                            });
                        });
                    } else {
                        index.push({
                            title: n.name,
                            description: n.desc,
                            icon: n.icon,
                            section: "#nutrients",
                            searchText: (n.name + " " + n.desc + " " + n.details.overview).toLowerCase()
                        });
                    }
                });
                return index;
            }

            const searchIndex = buildSearchIndex();

            function closeSearch() {
                searchBar.classList.remove("search-bar--open");
                searchInput.value = "";
                searchResults.innerHTML = "";
            }

            searchToggle.addEventListener("click", () => searchBar.classList.toggle("search-bar--open"));
            searchClose.addEventListener("click", closeSearch);

            searchInput.addEventListener("input", function() {
                const query = this.value.trim().toLowerCase();
                if (query.length < 2) {
                    searchResults.innerHTML = "";
                    return;
                }

                const matches = searchIndex.filter(item => item.searchText.includes(query)).slice(0, 6);
                if (matches.length === 0) {
                    searchResults.innerHTML = '<div class="search-bar__no-results">No results found</div>';
                    return;
                }

                searchResults.innerHTML = matches.map(m => `
          <div class="search-result" data-section="${m.section}">
            <span class="search-result__icon">${m.icon}</span>
            <div class="search-result__info">
              <h4>${escapeHtml(m.title)}</h4>
              <p>${escapeHtml(m.description)}</p>
            </div>
          </div>
        `).join("");

                searchResults.querySelectorAll(".search-result").forEach(el => {
                    el.addEventListener("click", function() {
                        const target = document.querySelector(this.getAttribute("data-section"));
                        if (target) {
                            closeSearch();
                            target.scrollIntoView({
                                behavior: "smooth",
                                block: "start"
                            });
                        }
                    });
                });
            });
