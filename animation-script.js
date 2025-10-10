let classes_to_animate = [
    ".animatable"
];
const animation_classes = [
    "animate-slideFromLeft",
];

const numberAnimationID = [
    "students",
    "countries",
    "visa-success-rate",
    "year-exp"
]

const final_classes = classes_to_animate.join(", ");


const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            // Require the element to be at least 50% visible
            if (entry.intersectionRatio >= 0.25) {

                numberAnimationID.forEach(element => {
                    if(element === entry.target.id){
                        
                        let elem = (entry.target.children)[0]
                        let targetNumber, timeInterval;
                        switch (elem.id){
                            case "students-num":
                                targetNumber = 2000
                                timeInterval = 20
                                break
                            case "countries-num":
                                targetNumber = 15
                                timeInterval = 100
                                break
                            case "visa-num":
                                console.log(elem)
                                targetNumber = 98
                                timeInterval = 50
                                break
                            case "exp-num":
                                targetNumber = 10
                                timeInterval = 100 
                        }

                        animateNumbers(elem, targetNumber, timeInterval)

                    }
                });

                
                {
                    const selectedAnimation = animation_classes[0]
    
                    entry.target.classList.add(selectedAnimation);
    
                    // stop observing once the animation is applied
                    observer.unobserve(entry.target);
                }
            }
        });
    },
    {
        threshold: 0.25,
        rootMargin: "0px 0px -10% 0px"
    }
);

document.querySelectorAll(final_classes).forEach((el) => observer.observe(el));
