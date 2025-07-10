const $= document.querySelector.bind(document);
const $$= document.querySelectorAll.bind(document);
const listItem=Array.from($$('.tab-item'));
const tabsElement= $('#tabs');
tabsElement.addEventListener('click', (e) => {
    const tabItem=e.target;
    console.log(tabItem);
    
    if(!tabItem){
        return;
    }
    const activeIndex=tabItem.closest('.tab-item').dataset.index;
    renderActive(activeIndex)
    
})

listItem.forEach((item, index) => {
    item.dataset.index=index;
})
const listPanel=Array.from($$('.tab-panel'));
listPanel.forEach((panel, index) => {
    panel.dataset.index=index;
})
function renderActive(activeIndex){
    listItem.forEach((item, index) => {
        item.classList.remove("active");
    })
    listPanel.forEach((panel, index) => {
        panel.classList.remove("active")
    })
    let activeTab=listItem[activeIndex];
    activeTab.classList.add("active");
    listPanel[activeIndex].classList.add("active")
    localStorage.setItem("activeTabIndex", activeIndex);
}
document.addEventListener('keydown', e => {
    if(e.key>='1' && e.key<='4'){
        renderActive(e.key)
    }
    else{
        return;
    }
})
const saveIndex=localStorage.getItem("activeTabIndex");
renderActive(saveIndex!==null ? saveIndex : 0);
