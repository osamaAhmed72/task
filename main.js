let sidenav = document.getElementById('sidenavShow');

function showSideNav(){


    if (sidenav.style.display === 'none') {
        sidenav.style.display = 'block';
    } else {
        sidenav.style.display = 'none';
    }
}

function scrollToElement(elementId, options = {}) {
            const element = document.getElementById(elementId);
            if (!element) return;
            
            const {
                offset = 0,
                duration =1000,
            } = options;
            
            const elementRect = element.getBoundingClientRect();
            let targetPosition;
            targetPosition = elementRect.top + window.pageYOffset - offset;
            
            
            smoothScrollTo(targetPosition, duration);
}

function smoothScrollTo(targetPosition, duration) {
            const startPosition = window.pageYOffset;
            const distance = targetPosition - startPosition;
            let startTime = null;
            
            function animation(currentTime) {
                if (startTime === null) startTime = currentTime;
                const timeElapsed = currentTime - startTime;
                const scrollPosition = easeInOutQuad(timeElapsed, startPosition, distance, duration);
                window.scrollTo(0, scrollPosition);
                if (timeElapsed < duration) {
                    requestAnimationFrame(animation);
                }
            }
            
            function easeInOutQuad(t, b, c, d) {
                t /= d/2;
                if (t < 1) return c/2*t*t + b;
                t--;
                return -c/2 * (t*(t-2) - 1) + b;
            }
            
            requestAnimationFrame(animation);
}
