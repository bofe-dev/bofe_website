const prefersDark = window.matchMedia("(prefers-color-scheme: dark)");

function setTheme(mode) {
    if (mode == 'system') {
        document.documentElement.setAttribute('data-theme', prefersDark.matches ? 'dark' : 'light');
    } else {
        document.documentElement.setAttribute('data-theme', mode);
    }

    document.querySelectorAll('[id^=set-theme-]').forEach(function (button) {
        button.classList.remove('btn-active');
    });

    document.getElementById(`set-theme-${mode}`).classList.add('btn-active');

    localStorage.setItem('theme', mode);
}

prefersDark.addEventListener('change', function()  {
    const mode = localStorage.getItem('theme') || 'system';
    setTheme(mode);
});

window.addEventListener('load', function() {
    const mode = localStorage.getItem('theme') || 'system';
    setTheme(mode);
});
