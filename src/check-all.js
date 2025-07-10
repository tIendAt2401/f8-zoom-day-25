const $= document.querySelector.bind(document);
const $$= document.querySelectorAll.bind(document);
const countSelect=$('.selected-count');
const mainCheckBox=$('#main-checkbox')
const deleteBtn=$('.delete');
const headerElement=$('.selected-header');
console.log(headerElement);

// Lấy ra data-table
const bodyTable=$('tbody');
// Lấy ra danh sách các thẻ input trong data-table
const listInput=bodyTable.querySelectorAll("input");
const table=$('.data-table');

table.addEventListener('change', (e) => {
    handleTableActions(e);
    updateIndeterminate()
    updateSelected();   
});
headerElement.addEventListener('click', (e) => {
    const deleteBtn=e.target.closest('.delete');
    if(deleteBtn){
        listInput.forEach(input => {
            input.checked=false;
        })
    }
    updateIndeterminate()
    updateSelected()
    
})
function handleTableActions(e){
    const mainBox=e.target.closest('#main-checkbox');
    const rowBox =e.target.closest('.js-check-box');
    if(mainBox){
        const isChecked=mainBox.checked;
        listInput.forEach(input => {
            input.checked=isChecked;
        })
    }    
}
function countSelected(){
    let count=0;
    listInput.forEach(input => {
        if(input.checked){
            count++;
        }
    })
    return count;
}

function updateSelected(){
    countSelect.innerHTML=`${countSelected()} selected`;
}
function updateIndeterminate() {
    const checkedCount = countSelected();
    const totalCount = listInput.length;
    const mainCheckMark=mainCheckBox.nextElementSibling;
    if(countSelected()==0){
        mainCheckBox.checked=false;
        mainCheckMark.classList.remove('indeterminate');
    }
    else if(countSelected()==totalCount){
        mainCheckBox.checked=true;
        mainCheckMark.classList.remove('indeterminate');
    }
    else{
        mainCheckBox.checked = false;
        mainCheckMark.classList.add('indeterminate');
    }
    
}
