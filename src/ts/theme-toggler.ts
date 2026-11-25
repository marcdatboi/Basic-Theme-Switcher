



// Represents every theme
const allThemeIds = ["dark", "light"];
export function toggleTheme(themeId: string): void
{
    const allElements = document.querySelectorAll("*");

    for (const element of allElements)
    {
        if (! (element instanceof HTMLElement) ) { continue; }

        let hasExistingThemeId = allThemeIds.some((e) => element.classList.contains(e));
        let matchedClass = null;
        if (hasExistingThemeId) { matchedClass = allThemeIds.find(cls => { element.classList.contains(cls); }); }

        (!matchedClass) ? 
        console.error("toggleTheme(themeId: string): void >> matched class is null.") : 
        element.classList.toggle(matchedClass); // Disable the currently active theme

        // Enable the new theme
        if (!element.classList.contains(themeId)) { element.classList.toggle(themeId); }
    }
}