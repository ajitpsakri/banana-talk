let textArea = document.querySelector('#text-area');
let tnButton = document.querySelector('#btn-translate')
let output = document.querySelector('#box-output');

const constructURL = (url,engText)=>{
    console.log(url+"?"+"text="+engText)
    return url+"?"+"text="+engText
}
const fetchText = (engText) =>{
    let rawUrl = 'https://api.funtranslations.com/translate/minion.json'
    let url = constructURL(rawUrl,engText)
    fetch(url).then(res=>{
        if(res.ok){
            console.log("Success")
        }else{
            console.log("FAIL")
        }
        return res.json()
     })
     .then(resJson => {
        output.innerText = resJson.contents.translated
    }).catch(error => console.log(error)) 
}

tnButton.addEventListener('click',()=>{
    let input = textArea.value;
    fetchText(input);
})
