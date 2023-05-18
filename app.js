const textBox = document.querySelector('.textBox');

let emptyContainer = document.querySelector('.emptyContainer');


let arrayPara =[
    
    " Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque voluptatum maxime, repudiandae molestias quam inventore modi, sequi unde sed beatae deleniti eaque saepe, voluptatibus provident amet hic eligendi vitae porroipsum dolor sit amet consectetur adipisicing elit. Neque voluptatum maxime, repudiandae molestias quam inventore modi, sequi unde sed beatae deleniti eaque saepe, voluptatibus provident amet hic eligendi vita!", 

    " Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque voluptatum maxime, repudiandae molestias quam inventore ipsum dolor sit amet consectetur adipisicing elit. Neque voluptatum maxime, repudiandae molestias quam inventore modi, sequi unde sed beatae deleniti eaque saepe, voluptatibus provident amet hic eligendi vitamodi, sequi unde sed beatae deleniti eaque saepe, voluptatibus provident amet hic eligendi vitae porro!", 

    " Lorem ipsum dolor sit amet ipsum dolor sit amet consectetur adipisicing elit. Neque voluptatum maxime, repudiandae molestias quam inventore modi, sequi unde sed beatae deleniti eaque saepe, voluptatibus provident amet hic eligendi vitaconsectetur adipisicing elit. Neque voluptatum maxime, repudiandae molestias quam inventore modi, sequi unde sed beatae deleniti eaque saepe, voluptatibus provident amet hic eligendi vitae porro!", 

    " Lorem ipsum dolor sit ipsum dolor sit amet consectetur adipisicing elit. Neque voluptatum maxime, repudiandae molestias quam inventore modi, sequi unde sed beatae deleniti eaque saepe, voluptatibus provident amet hic eligendi vitaamet consectetur adipisicing elit. Neque voluptatum maxime, repudiandae molestias quam inventore modi, sequi unde sed beatae deleniti eaque saepe, voluptatibus provident amet hic eligendi vitae porro!", 

    " Lorem ipsum dolor sit amet ipsum dolor sit amet consectetur adipisicing elit. Neque voluptatum maxime, repudiandae molestias quam inventore modi, sequi unde sed beatae deleniti eaque saepe, voluptatibus provident amet hic eligendi vitaconsectetur adipisicing elit. Neque voluptatum maxime, repudiandae molestias quam inventore modi, sequi unde sed beatae deleniti eaque saepe, voluptatibus provident amet hic eligendi vitae porro!"
    
];
// console.log(arrayPara)
 let emptyArr = [];

 const paraGenrate = ()=>{
    console.log(textBox.value)
       
    if(isNaN(textBox.value) || textBox.value <= 0 || textBox.value > 5){
       
    //    let randomPara = Math.floor(Math.random() * arrayPara.length);
    //    console.log(randomPara)
       
         alert ("write any number 1 to 5")
    //    console.log(emptyContainer)
} else{
     const para = arrayPara.slice(0, textBox.value)
     const secondPara = para.map((AllP) => {
        return `<p>${AllP}</p>`
     })

     emptyContainer.innerHTML = secondPara.join("");
   
}
  
}