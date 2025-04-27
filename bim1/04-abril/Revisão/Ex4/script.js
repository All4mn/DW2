// classList
document.getElementById("Element").classList.add("newClass");
document.getElementById("Element").classList.remove("oldClass");
document.getElementById("Element").classList.toggle("classOne");

// CSSStyleSheet
document.styleSheets[0].insertRule(
  "p { color: blue; }",
  document.styleSheets[0].cssRules.length
);
document.styleSheets[0].deleteRule(0);
