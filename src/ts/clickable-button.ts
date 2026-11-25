



export function setClickable(targetClass: string, func: () => void): void
{
    /**
     * Applies an click type event listener obj to all elements
     * with the 'targetClass' name in its class list
     * 
     * It applies the function that should execute whenever the button is clicked.
     */
    const allButtons = document.querySelectorAll(targetClass);
    for (const button of allButtons) { button.addEventListener('click', func); }
}