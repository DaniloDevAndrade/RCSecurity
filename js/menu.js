class MobileNavbar{constructor(mobileMenu,navList,navLinks,hamburgerIcon,closeIcon){this.mobileMenu=document.querySelector(mobileMenu);this.navList=document.querySelector(navList);this.navLinks=document.querySelectorAll(navLinks);this.hamburgerIcon=document.querySelector(hamburgerIcon);this.closeIcon=document.querySelector(closeIcon);this.activeClass="active";this.handleClick=this.handleClick.bind(this)}
handleClick(){this.navList.classList.toggle(this.activeClass)
this.mobileMenu.classList.toggle(this.activeClass)
const isActive=this.navList.classList.contains(this.activeClass);this.hamburgerIcon.style.display=isActive?"none":"block";this.closeIcon.style.display=isActive?"block":"none"}
addClickEvent(){this.mobileMenu.addEventListener('click',this.handleClick)}
addLinkEvents(){this.navLinks.forEach((link)=>{link.addEventListener('click',()=>{this.navList.classList.remove(this.activeClass);this.mobileMenu.classList.remove(this.activeClass);this.hamburgerIcon.style.display="block";this.closeIcon.style.display="none"})})}
init(){if(this.mobileMenu){this.addClickEvent()
this.addLinkEvents()}
return this}}
const mobileNavbar=new MobileNavbar(".menu-wrapper",".nav-list",".nav-list li",".hamburger",".hamburger-x")
mobileNavbar.init()