(() => {
  // src/client/samples/inheritance-nav-test.ts
  var NavElement = class {
    caption;
    subItems;
    constructor(caption, subItems = []) {
      this.caption = caption;
      this.subItems = subItems;
    }
  };
  var NavItem = class extends NavElement {
    url = "";
    constructor(caption, url, subItems = []) {
      super(caption, subItems);
      this.url = url;
    }
  };
  var NavParser = class {
    projectName = "";
    nav;
    currentUrl = "";
    constructor(project, currentUrl, nav2 = []) {
      this.projectName = project;
      this.nav = nav2;
      this.currentUrl = currentUrl;
    }
    makeNavigation() {
      if (this.currentUrl == "") this.currentUrl = "/";
      let navString = `<header class="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
    <a href="/" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-light text-decoration-none">
        <svg class="bi me-2" width="40" height="32">
            <use xlink:href="#bootstrap"></use>
        </svg>
        <span class="fs-4">${this.projectName}</span>
    </a>
    <ul class="nav nav-pills">
`;
      this.nav.forEach((i) => {
        if ("url" in i) {
          navString += `            <li class="nav-item"><a href="${i.url}" class="nav-link ${this.currentUrl == i.url ? "active" : ""}" aria-current="page">${i.caption}</a></li>
`;
        } else {
          navString += `            <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  ${i.caption}
                </a><ul class="dropdown-menu">
`;
          let count = 0;
          i.subItems.forEach((j) => {
            count++;
            if ("url" in j) {
              navString += `            <li><a class="dropdown-item ${this.currentUrl == j.url ? "active" : ""}" href="${j.url}">${j.caption}</a></li>
`;
              if (count < i.subItems.length)
                navString += `
            <li><hr class="dropdown-divider"></li>
`;
            }
          });
          navString += `
                </ul>
            </li>
`;
        }
      });
      navString += `
    </ul>
</header>        
`;
      return navString;
    }
  };
  var mySiteNavigation = [
    { caption: "Home", url: "/", subItems: [] },
    {
      caption: "Graph editor",
      subItems: [
        { caption: "Current editor", url: "graph-editor", subItems: [] },
        { caption: "CRUD json", url: "graph-editor-json", subItems: [] }
      ]
    },
    {
      caption: "REST",
      subItems: [
        { caption: "Rest sample", url: "rest-sample", subItems: [] },
        { caption: "Rest/web socket", url: "websockets", subItems: [] }
      ]
    },
    {
      caption: "Other samples",
      subItems: [
        { caption: "Inheritance sample", url: "inheritance-sample", subItems: [] },
        { caption: "Nav generation", url: "inheritance-nav-test", subItems: [] }
      ]
    },
    { caption: "Sitemap", url: "sitemap", subItems: [] }
  ];
  var nav = new NavParser("Documentation project", getCurrentPageUrl(), mySiteNavigation);
  var navPlaceholder = document.getElementById("nav");
  navPlaceholder.innerHTML = nav.makeNavigation();
  function getCurrentPageUrl() {
    const href = window.location.href;
    const pageUrl = href.substring(href.lastIndexOf("/") + 1);
    console.log(pageUrl);
    return pageUrl;
  }
})();
