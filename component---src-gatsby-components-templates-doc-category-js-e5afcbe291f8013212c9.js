(window.webpackJsonp=window.webpackJsonp||[]).push([[59],{f0gI:function(t,e,a){"use strict";a.r(e),a.d(e,"query",(function(){return d}));var r=a("dI71"),n=a("q1tI"),o=a.n(n),i=a("Wbzz"),s=a("ImBX"),l=a("iyGq"),c=a("39lY"),m=function(t){function e(){return t.apply(this,arguments)||this}return Object(r.a)(e,t),e.prototype.render=function(){return o.a.createElement("div",null,"@TODO")},e}(o.a.Component),p=function(t){function e(){return t.apply(this,arguments)||this}return Object(r.a)(e,t),e.prototype.render=function(){var t=this.props.data,e={};return e.title=t.post.frontmatter.title,e.title=e.title.split(/[\s-]+/).map((function(t){return t.charAt(0).toUpperCase()+t.slice(1).toLowerCase()})).join(" "),e.title+=t.post.frontmatter.parent&&t.post.frontmatter.parent!==t.post.frontmatter.title?t.post.frontmatter.parent:"",e.title+=t.post.frontmatter.category&&t.post.frontmatter.category!==t.post.frontmatter.title?t.post.frontmatter.category:"",e.title+=t.post.frontmatter.type&&t.post.frontmatter.type!==t.post.frontmatter.title?t.post.frontmatter.type:"",e.description=t.post.frontmatter.description,e.title="/introduction"===Object(s.a)(t.post)?e.description:e.title,o.a.createElement(c.a,{seo:e,page:t},o.a.createElement(l.a,{title:e.title,description:e.description}),"/introduction"===Object(s.a)(t.post)?o.a.createElement(m,null):o.a.createElement("div",{className:"gatsby_listing"},o.a.createElement("div",{className:"row row-3"},t.categories.category.sort((function(t,e){return"Addons"===t.title||"By Component"===t.title?1:"Core"===t.title||"By Type"===t.title||"Addons"===e.title||"By Component"===e.title?-1:0})).map((function(t,e){return o.a.createElement("div",{className:"gatsby_listing_group",key:e},o.a.createElement("h2",{className:"h5 h-block rounded-md bg-gray-200 text-center"},t.title.split("-").pop()),o.a.createElement("div",{className:"gatsby_listing_items"},o.a.createElement("div",{className:"row row-2 lg:row-4"},t.posts.map((function(t,e){var a=t.post;return a.frontmatter.link?o.a.createElement("div",{className:"gatsby_listing_column",key:e},o.a.createElement("a",{href:a.frontmatter.link,target:"_blank",rel:"noreferrer",className:"card gatsby_listing_item"},o.a.createElement("div",{className:"card-design"}),o.a.createElement("div",{className:"card-block card-block-md"},o.a.createElement("div",{className:"h4"},a.frontmatter.title.split(/[\s-]+/).map((function(t){return t.charAt(0).toUpperCase()+t.slice(1).toLowerCase()})).join(" ")),o.a.createElement("p",null,a.frontmatter.description)))):a.frontmatter.parent===a.frontmatter.title?o.a.createElement("div",{className:"gatsby_listing_column",key:e},o.a.createElement(i.Link,{to:Object(s.a)(a),className:"card gatsby_listing_item"},o.a.createElement("div",{className:"card-design"}),o.a.createElement("div",{className:"card-block card-block-md"},o.a.createElement("div",{className:"h4"},a.frontmatter.title.split(/[\s-]+/).map((function(t){return t.charAt(0).toUpperCase()+t.slice(1).toLowerCase()})).join(" ")),o.a.createElement("p",null,a.frontmatter.description),a.frontmatter.link))):null})))))})))))},e}(o.a.Component),d=(e.default=p,"1082524754")}}]);
//# sourceMappingURL=component---src-gatsby-components-templates-doc-category-js-e5afcbe291f8013212c9.js.map