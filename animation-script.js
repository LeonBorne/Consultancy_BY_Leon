let classes_to_animate = [
    ".animatable"
];
const animation_classes = [
    "animate-slideFromLeft",
];

const final_classes = classes_to_animate.join(", ");

const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            // Require the element to be at least 50% visible
            if (entry.intersectionRatio >= 0.25) {

                const selectedAnimation = animation_classes[0]

                entry.target.classList.add(selectedAnimation);

                // stop observing once the animation is applied
                observer.unobserve(entry.target);
            }
        });
    },
    {
        threshold: 0.25,
        rootMargin: "0px 0px -10% 0px"
    }
);

document.querySelectorAll(final_classes).forEach((el) => observer.observe(el));
