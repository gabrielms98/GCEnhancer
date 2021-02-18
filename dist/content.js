
const contentInterval = setInterval(() => {
    const liteMode = document.querySelector('.LobbyLiteMode')

    if (liteMode) {
        const button = liteMode.querySelector('button')

        if (button.getAttribute('aria-checked') === 'false') {
            button.click()
        }
        clearInterval(contentInterval)
    }
}, 500)

