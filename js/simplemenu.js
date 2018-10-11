class Page {
    /**
     * Creates a new page object
     * @param {String} name 
     * @param {String} href 
     */
    constructor(name, href) {
        this.name = name;
        this.href = href;
    }
}

class SimpleMenu {
    /** 
     * Creates a new simple menu
     * @param {Element} element
     * @param {String} logoPath
     * @param {Array<Page>} pageList
     * @param {String} type
     */
    constructor(element, logoPath, pageList, type) {
        this.element = element;
        this.logoPath = logoPath;
        this.pageList = pageList;
        this.type = type;

        //collapsed or not
        this.collapseStatus = true;

        this.init();
    }

    buildLogo() {
        this.logo = document.createElement("img");
        this.logo.classList += "menu-logo";
        this.logo.src = this.logoPath;
        this.element.appendChild(this.logo);
    }

    buildPages() {
        this.pages = document.createElement("ul")
        this.pages.classList += "menu-pages";
        //Add pages
        this.pageList.forEach((p) => {
            let page = document.createElement("li");
            page.classList += "menu-page";
            let link = document.createElement("a");
            link.classList += "menu-link";
            link.href = p.href;
            link.text = p.name;
            page.appendChild(link);
            this.pages.appendChild(page);
        });
        this.element.appendChild(this.pages);
    }

    buildCollapse() {
        this.collapse = document.createElement("div");
        this.collapse.classList += "menu-collapse";

        this.collapsePages = document.createElement('ul');
        this.collapsePages.classList += "menu-collapse-pages";
        //Add page panels
        this.pageList.forEach((p) => {
            let page = document.createElement("li");
            page.classList += "menu-collapse-page";
            let link = document.createElement("a");
            link.classList += "menu-link";
            link.href = p.href;
            link.text = p.name;
            page.appendChild(link);
            this.collapsePages.appendChild(page);
        });
        this.collapse.appendChild(this.collapsePages);
        this.element.appendChild(this.collapse);

        //Menu Toggler
        this.collapseToggle = document.createElement("div");
        this.collapseToggle.classList += "menu-collapse-toggle";

        this.bar1 = document.createElement('div');
        this.bar1.classList += "bar1";
        this.collapseToggle.appendChild(this.bar1)

        this.bar2 = document.createElement('div');
        this.bar2.classList += "bar2";
        this.collapseToggle.appendChild(this.bar2)

        this.bar3 = document.createElement('div');
        this.bar3.classList += "bar3";
        this.collapseToggle.appendChild(this.bar3)

        //append listener
        this.collapseToggle.addEventListener('click', this.toggleCollapse.bind(this));
        this.element.appendChild(this.collapseToggle);
    }

    buildMenu() {
        this.element.classList += "simple-menu menu-container";
        this.buildLogo();
        this.buildPages();
        this.buildCollapse();
    }

    toggleCollapse() {
        if (this.collapseToggle.visibility != "collapse") {
            //toggle true or not
            if (!this.collapseStatus) {
                //bar1
                anime({
                    targets: this.bar1,
                    rotate: {
                        value: 45,
                        duration: 500,
                        easing: 'easeInElastic'
                    },
                    translateX: {
                        value: 0,
                        duration: 500,
                        easing: 'easeInElastic'
                    },
                    translateY: {
                        value: 0,
                        duration: 500,
                        easing: 'easeInElastic'
                    }
                })
                //bar2
                anime({
                    targets: this.bar2,
                    opacity: {
                        value: 0,
                        duration: 500,
                        easing: 'easeInElastic'
                    }
                })
                //bar3
                anime({
                    targets: this.bar3,
                    rotate: {
                        value: -45,
                        duration: 500,
                        easing: 'easeInElastic'
                    },
                    translateX: {
                        value: -1,
                        duration: 500,
                        easing: 'easeInElastic'
                    },
                    translateY: {
                        value: -4,
                        duration: 500,
                        easing: 'easeInElastic'
                    }
                })
                //collapse panel
                anime({
                    targets: this.collapse,
                    translateX: {
                        value: 0,
                        duration: 500,
                        easing: 'easeInElastic'
                    }
                })
            } else {
                //bar1
                anime({
                    targets: this.bar1,
                    rotate: {
                        value: 0,
                        duration: 500,
                        easing: 'easeInElastic'
                    },
                    translateX: {
                        value: 0,
                        duration: 500,
                        easing: 'easeInElastic'
                    },
                    translateY: {
                        value: 0,
                        duration: 500,
                        easing: 'easeInElastic'
                    }
                })
                //bar2
                anime({
                    targets: this.bar2,
                    opacity: {
                        value: 1,
                        duration: 500,
                        easing: 'easeInElastic'
                    }
                })
                //bar3
                anime({
                    targets: this.bar3,
                    rotate: {
                        value: 0,
                        duration: 500,
                        easing: 'easeInElastic'
                    },
                    translateX: {
                        value: 0,
                        duration: 500,
                        easing: 'easeInElastic'
                    },
                    translateY: {
                        value: 0,
                        duration: 500,
                        easing: 'easeInElastic'
                    }
                })
                //collapse panel
                anime({
                    targets: this.collapse,
                    translateX: {
                        value: this.collapse.getBoundingClientRect().width,
                        duration: 500,
                        easing: 'easeInElastic'
                    }
                })
            }
        }
        //invert collapseStatus
        this.collapseStatus = !this.collapseStatus;

    }

    init() {
        this.buildMenu();
    }


}