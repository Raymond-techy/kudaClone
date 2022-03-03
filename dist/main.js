const tabItem=document.querySelectorAll('.tab-icon');
const tabContentItems=document.querySelectorAll('.tab-content');
const card1=document.querySelector('.card1');
const card2=document.querySelector('.card2');
const card1button=document.querySelector('.card1Button');
const card2button=document.querySelector('.card2Button');
tabItem.forEach(item=>item.addEventListener('click',selectItem));

function removeBorder(){
	tabItem.forEach(item=> item.classList.remove('active'));
}
function removeShow(){
	tabContentItems.forEach(item=> item.classList.remove('show'));
}
function selectItem(e){
  const panelText=document.querySelector('.panel p');
  const panelBg=document.querySelector('.panel');
  const saveText=document.querySelector('.header-end a');
  removeBorder();
  removeShow();
  this.classList.add('active');
  const tabContentItem=document.querySelector(`#${this.id}-content-item`);
  tabContentItem.classList.add('show'); 
  if(this.id=="save"){
    panelText.textContent='Total Savings';
    saveText.textContent='Save Now';
    panelText.style.fontSize="16px";
    panelBg.style.backgroundColor="rgba(128, 255, 0, 0.781)";
  }else if(this.id=="borrow" && this.id != "spend"){
    panelText.textContent='You Owe';
    saveText.textContent='Borrow';
    panelText.style.fontSize="16px";
    panelBg.style.backgroundColor=" #058ee9";
  }
  else{
    panelText.textContent='ACCOUNT BALANCE';
    saveText.textContent='ADD MONEY';
    panelText.style.fontSize="16px";
    panelBg.style.backgroundColor="#40196d";
  }
};
card1button.addEventListener('click',(e)=>{
  card1.style.display="none";
  card2.style.display="flex";
});
card2button.addEventListener('click',(e)=>{
  card1.style.display="flex";
  card2.style.display="none";
});
function copyCvv(e){
  var cvvText=document.querySelector('.cvvNo');
  var sucMsg=document.querySelector('.msg');
  cvvText.select();
  cvvText.setSelectionRange(0,99999);
  navigator.clipboard.writeText(cvvText.value);
  sucMsg.innerHTML="<p>Expiry Date copied<p>"
  sucMsg.classList.add('msgAlert')
  setTimeout(()=>{
    sucMsg.innerHTML="";
    sucMsg.classList.remove('msgAlert')
  },1000)
  console.log('cvvCopied');
}
function copyExpiryDate(e){
  var expiryDateText=document.querySelector('.expiryNo');
  var sucMsg=document.querySelector('.msg');
  expiryDateText.select();
  expiryDateText.setSelectionRange(0,99999);
  navigator.clipboard.writeText(expiryDateText.value);
  sucMsg.innerHTML="<p>cvv copied<p>"
  sucMsg.classList.add('msgAlert')
  setTimeout(()=>{
    sucMsg.innerHTML="";
    sucMsg.classList.remove('msgAlert')
  },1000)
}
function copyCardNumber(e){
  var cardNoText=document.querySelector('.cardNo');
  var sucMsg=document.querySelector('.msg');
  cardNoText.select();
  cardNoText.setSelectionRange(0,99999);
  navigator.clipboard.writeText(cardNoText.value);
  sucMsg.innerHTML="<p>Card Number copied<p>"
  sucMsg.classList.add('msgAlert')
  setTimeout(()=>{
    sucMsg.innerHTML="";
    sucMsg.classList.remove('msgAlert')
  },1000)
  console.log('cardNumberCopied');
}
