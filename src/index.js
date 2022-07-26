document.addEventListener('DOMContentLoaded', () => {

    const ramenMenu = document.querySelector('#ramen-menu')
    let RamenData = []

    fetch('http://localhost:3000/ramens')
        .then(res => res.json())
        .then(RamenData => console.log(RamenData))
        //ERROR -- ramenData is being logged, but images aren't being rendered
        .then(ramenData =>
            ramenData.forEach((image) => renderImages(image)
            )
        )

    //DISPLAY RAMEN PHOTOS
    function renderImages(image) {

        let ramenPhotoContainer = document.querySelector('#ramen-menu');
        let img = document.createElement('img')
        img.setAttribute('src', ramen.image)

        //ADD EVENT LISTENER TO IMG
        //ERROR -- Incorrectly pulling from object array. Also need to return values
        img.addEventListener('click', function (e) {
            console.log({
                rating: e.target.ramens.rating.value,
                comment: e.target.ramens.rating.value,
            })
        })
        ramenPhotoContainer.append(image)
    }
    //DELIVERABLES -
    //create new ramen
    //I ran out of time
    function newRamen(ramen) {
        const form = form.document.getElementById("#new-ramen");

        form.addEventListener('submit', e => {
            e.preventDefaullt()

            let img = document.createElement('img')
            let p = document.createElement('p')


        })
        ramenMenu.append(newRamen)
    }



    renderImages();
})

//   

