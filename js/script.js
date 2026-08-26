document.addEventListener('DOMContentLoaded', function() {
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const index = Array.from(entry.target.parentElement?.querySelectorAll('.animation-on-scroll--one') || []).indexOf(entry.target);
                entry.target.style.transitionDelay = `${index * 50}ms`;
                entry.target.classList.add('show');
                observer.unobserve(entry.target);
            }
        });
    });

    document.querySelectorAll('.animation-on-scroll--one').forEach(el => observer.observe(el));
    document.querySelectorAll('.animation-on-scroll--two').forEach(el => observer.observe(el));


    const popularItems = [
        { 
            name: 'White Swan Chair', 
            price: '$40', 
            img: 'img/7.png' 
        },
        { 
            name: 'White Swan Chair', 
            price: '$40', 
            img: 'img/8.png' 
        },
        { 
            name: 'White Swan Chair', 
            price: '$40', 
            img: 'img/9.png' 
        },
        { 
            name: 'White Swan Chair', 
            price: '$40', 
            img: 'img/9.png' 
        },
        { 
            name: 'White Swan Chair', 
            price: '$40', 
            img: 'img/7.png' 
        },
        { 
            name: 'White Swan Chair', 
            price: '$40', 
            img: 'img/8.png' 
        },
        { 
            name: 'White Swan Chair', 
            price: '$40', 
            img: 'img/8.png' 
        },
        { 
            name: 'White Swan Chair', 
            price: '$40', 
            img: 'img/8.png' 
        },
        { 
            name: 'White Swan Chair', 
            price: '$40', 
            img: 'img/8.png' 
        },

    ];


    const productionContainer = document.querySelector('.popular-production');
    const prevBtn = document.querySelector('.slider-button--prev');
    const nextBtn = document.querySelector('.slider-button--next');


    let currentIndex = 0;
    const itemsPerPage = 3;

    function renderCards(startIndex) {
        if (!productionContainer) return;


        productionContainer.innerHTML = '';


        const itemsToRender = popularItems.slice(startIndex, startIndex + itemsPerPage);


        itemsToRender.forEach(el => {
            productionContainer.insertAdjacentHTML('beforeend', `
                <div class="production-container">
                    <img loading="lazy" class="production-image" src="${el.img}" alt="Картинка товара">
                    <div class="production-description">                               
                        <div class="production-name">${el.name}</div>                              
                        <div class="production-buttons">
                            <button class="production-like"><img src="img/14.png" loading="lazy" alt="Иконка лайка"></button>
                            <button class="production-link"><img src="img/13.png" loading="lazy" alt="Иконка поделиться"></button>
                        </div>
                    </div>
                    <div class="production-buy">
                        <div class="production-price">${el.price}</div>
                        <button class="buy-button">Buy Now</button>
                    </div>
                </div>
            `);
        });


        if (prevBtn) prevBtn.disabled = (startIndex === 0);
        if (nextBtn) nextBtn.disabled = (startIndex + itemsPerPage >= popularItems.length);
    }


    if (prevBtn) {
        prevBtn.addEventListener('click', () => {
            const newIndex = currentIndex - itemsPerPage;
            if (newIndex >= 0) {
                currentIndex = newIndex;
                renderCards(currentIndex);
            }
        });
    }

    if (nextBtn) {
        nextBtn.addEventListener('click', () => {
            const newIndex = currentIndex + itemsPerPage;
            if (newIndex < popularItems.length) {
                currentIndex = newIndex;
                renderCards(currentIndex);
            }
        });
    }


    renderCards(0);

    const category = [
        {
            name: 'Living Room',
            dataImage: 'img/livingRoom.png' ,
            image: 'img/livingRoom.png'
        },
        {
            name: 'Kitchen',
            dataImage: 'img/Kitchen.png' ,
            image: 'img/kitchen.png'
        },
        {
            name: 'Dining Room',
            dataImage: 'img/diningRoom.png' ,
            image: 'img/diningRoom.png'
        },
        {
            name: 'Office Room',
            dataImage: 'img/office.png' ,
            image: 'img/office.png'
        },
        {
            name: 'Bed Room',
            dataImage: 'img/bedRoom.png' ,
            image: 'img/bedRoom.png'
        },
        {
            name: 'Hallway',
            dataImage: 'img/hallway.png' ,
            image: 'img/hallway.png'
        },
    ]
    const categoryContainer = document.querySelector('.furniture-category__inner')
    if (categoryContainer) {
    category.forEach(el => {
        categoryContainer.insertAdjacentHTML('beforeend',`
            <div class="category-item animation-on-scroll--two" data-image='${el.dataImage}'>
                <img loading="lazy" src="${el.image}" alt="Иконка зала" class="category-image">
                <div class="category-title">${el.name}</div>
            </div>
        `)

        const newItems = categoryContainer.querySelectorAll('.animation-on-scroll--two:not(.show)');
        newItems.forEach(el => observer.observe(el));
    })}

    let activeCatalog = null
    const furnitureCatalog = document.querySelectorAll('.furniture-catalog')
    furnitureCatalog.forEach(el => {
        el.addEventListener('click', function() {
            if (activeCatalog) {
                activeCatalog.classList.remove('active');
            }
            this.classList.add('active')
            activeCatalog = this;
        })
    })
    let activeCategory = null
    const categoryItem = document.querySelectorAll('.category-item')
    categoryItem.forEach(el => {
        el.addEventListener('click', () => {
            if (activeCategory) {
                activeCategory.classList.remove('active')
            }
            el.classList.add('active')
            activeCategory = el
        })  
    })
    const furnirutePhoto = document.querySelector('.furniture-photo')
    categoryItem.forEach(item => {
        item.addEventListener('click', function() {
            const newSrc = this.dataset.image
            furnirutePhoto.src = newSrc
        } )
    })

    
});
