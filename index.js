var notify = document.querySelector('.notify')
var albums = document.querySelectorAll('.album')
var itemsTotal = document.querySelector('.items-total')
var saveBtn = document.querySelector('.button')

var albumsSelected = []
var i = 0

while (i < albums.length) {
    albums[i].onclick = function (e) {
        var albumTitle = this.querySelector('.title').textContent
        /*Looped everything above, we created a function is added to every element in the page that has a the class "album" 
        
        */
        if (this.classList.contains('selected') !== true) {
            this.classList.add('selected')
            albumsSelected.push(albumTitle)
            //If has selected it'll run, if not it'll push the title to the array "albumsSelected". If not it'll add Selected into it.
        } else {
            this.classList.remove('selected')
            albumsSelected = albumsSelected.filter(function (item) {
                return item !== albumTitle
                //If it DOES have Seleted, it'll remove selected from it, and the albumsSelected array will be filtered. New value = albumSelected.filter (Give me every item inside the albumsSelected array EXCEPT for the one clicked. i.e. Remove "Blueprint" if clicked.)
            })
        }
        console.log(albumsSelected)
    }
    i++
}

saveBtn.onclick = function () {
    itemsTotal.textContent = albumsSelected.length + ' items saved'
    notify.classList.add('active')

    setTimeout(function () {
        notify.classList.remove('active')
    }, 2000)

    console.log('saved')
}


















// click album 
// show user he selected album so we add a class selected to the album div
// create an array and then add the albums title we selected to that array
// find out the total of the albums selected
// save button is clicked then  when its clicked show notification with saved items total 