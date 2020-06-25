if(document.body.clientWidth < 450){
    // document.querySelectorAll('.page-header_nav_list_item').forEach(list_item => {
    //     list_item.style.display = 'none'
    // })
    document.querySelector('.page-header .nav-panel__burger').addEventListener('click', (e) => {
        // e.preventDefault()
        if(document.querySelector('.page-header .nav-panel__list').style.display == 'none' || document.querySelector('.page-header .nav-panel__list').style.display == undefined){
            document.querySelector('.page-header .nav-panel__list').style.display = 'block'
            // document.querySelectorAll('.page-header .nav-panel__list').forEach(list_item => {
            //     list_item.style.display = 'block'
            // })
        }
        else{
            document.querySelector('.page-header .nav-panel__list').style.display = 'none'
            // document.querySelectorAll('.page-header .nav-panel__list').forEach(a => {
            //     a.style.display = 'none'
            // })
        }
    })
}