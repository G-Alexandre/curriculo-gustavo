// Alternância de tema com persistência em localStorage
(function() {
  const root = document.documentElement;
  const key = "curriculo-theme";
  const btn = document.getElementById("themeToggle");

  function apply(theme) {
    if (theme === "light") root.setAttribute("data-theme", "light");
    else root.removeAttribute("data-theme");
  }

  const saved = localStorage.getItem(key);
  if (saved) apply(saved);

  if (btn) {
    btn.addEventListener("click", () => {
      const isLight = document.documentElement.getAttribute("data-theme") === "light";
      const next = isLight ? "dark" : "light";
      apply(next);
      localStorage.setItem(key, next);
    });
  }

  // Ano dinâmico no rodapé
  const y = document.getElementById("year");
  if (y) y.textContent = new Date().getFullYear();
})();