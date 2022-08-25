document.querySelector(".cros").style.display='none'
document.querySelector(".hamslider").addEventListener('click',()=>{
    document.querySelector(".sidebar").classList.toggle('sidebargo')
    if(document.querySelector(".sidebar").classList.contains('sidebargo')
    ){
        document.querySelector(".ham").style.display='inline'
        document.querySelector(".cros").style.display='none'
    }
    else{
        setTimeout(() => {
        document.querySelector(".cros").style.display='inline';}, 300)
        
        document.querySelector(".ham").style.display='none'
    }
})