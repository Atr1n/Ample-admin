const modals = () => {
    function bindModal(
        triggerSelector,
        modalSelector,
        closeSelector,
        closeClickOverlay = true
    ) {
        const trigger = document.querySelectorAll(triggerSelector),
            modal = document.querySelector(modalSelector),
            close = document.querySelector(closeSelector),
            windows = document.querySelectorAll('[data-modal]');

        trigger.forEach(item => {
            item.addEventListener('click', e => { 
                if (e.target) {
                    e.preventDefault()
                }

                windows.forEach(item => {
                    item.style.display = 'none'
                })

                modal.style.display = 'block'
                document.body.style.overflow = 'hidden'
                document.body.style.marginRight = `${scroll}px`
            })
        })

        close.addEventListener('click', () => {
            windows.forEach(item => {
                item.style.display = 'none'
            })

            modal.style.display = 'none'
            document.body.style.overflowX = 'scroll'
            document.body.style.marginRight = `0px`
        })

        modal.addEventListener('click', e => {
            if (e.target === modal && closeClickOverlay) {
                windows.forEach(item => {
                    item.style.display = 'none'
                })

                modal.style.display = 'none'
                document.body.style.overflow = ''
                document.body.style.marginRight = `0px`
            }
        })
    }

    function showModalByTime(selector, time) {
        setTimeout(function() {
            document.querySelector(selector).style.display = 'block'
            document.body.style.overflow = 'hidden'
        }, time)
    }

    bindModal(
        '.popup-request-btn',
        '.popup-request',
        '.popup-request .popup-close'
    )
}

modals()
