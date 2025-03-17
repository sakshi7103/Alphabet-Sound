let data={
    A:{name:'a',sound:'Sound/A.mp3',image:'Image/A.jpeg',word:'Apple'},
    B:{name:'a',sound:'Sound/B.mp3',image:'Image/B.jpeg',word:'Ball'},
    C:{name:'a',sound:'Sound/C.mp3',image:'Image/C.jpeg',word:'Cat'},
    D:{name:'a',sound:'Sound/D.mp3',image:'Image/D.jpeg',word:'Dog'},
    E:{name:'a',sound:'Sound/E.mp3',image:'Image/E.jpeg',word:'Elephant'},
    F:{name:'a',sound:'Sound/F.mp3',image:'Image/F.jpeg',word:'Fish'},
    G:{name:'a',sound:'Sound/G.mp3',image:'Image/G.jpeg',word:'Grapes'},
    H:{name:'a',sound:'Sound/H.mp3',image:'Image/H.jpeg',word:'House'},
    I:{name:'a',sound:'Sound/I.mp3',image:'Image/I.jpeg',word:'Icecream'},
    J:{name:'a',sound:'Sound/J.mp3',image:'Image/J.jpeg',word:'Jug'},
    K:{name:'a',sound:'Sound/K.mp3',image:'Image/K.jpeg',word:'Kite'},
    L:{name:'a',sound:'Sound/L.mp3',image:'Image/L.jpeg',word:'Lion'},
    M:{name:'a',sound:'Sound/M.mp3',image:'Image/M.jpeg',word:'Monkey'},
    N:{name:'a',sound:'Sound/N.mp3',image:'Image/N.jpeg',word:'Nest'},
    O:{name:'a',sound:'Sound/O.mp3',image:'Image/O.jpeg',word:'Orange'},
    P:{name:'a',sound:'Sound/P.mp3',image:'Image/P.jpeg',word:'Parrot'},
    Q:{name:'a',sound:'Sound/Q.mp3',image:'Image/Q.jpeg',word:'Queen'},
    R:{name:'a',sound:'Sound/R.mp3',image:'Image/R.jpeg',word:'Rose'},
    S:{name:'a',sound:'Sound/S.mp3',image:'Image/S.jpeg',word:'Ship'},
    T:{name:'a',sound:'Sound/T.mp3',image:'Image/T.jpeg',word:'Tiger'},
    U:{name:'a',sound:'Sound/U.mp3',image:'Image/U.jpeg',word:'Umbrella'},
    V:{name:'a',sound:'Sound/V.mp3',image:'Image/V.jpeg',word:'Violin'},
    W:{name:'a',sound:'Sound/W.mp3',image:'Image/W.jpeg',word:'Watch'},
    X:{name:'a',sound:'Sound/X.mp3',image:'Image/X.jpeg',word:'Xmas-Tree'},
    Y:{name:'a',sound:'Sound/Y.mp3',image:'Image/Y.jpeg',word:'Yak'},
    Z:{name:'a',sound:'Sound/Z.mp3',image:'Image/Z.jpeg',word:'Zebra'}
};

let drumkit=document.querySelector('.drumkit');
let activeCard=null;

function generateCard(){
    for(let key in data){
        let card=document.createElement('div');
        card.classList.add('element',data[key].name);
        card.setAttribute('data-key',key);
            let h2=document.createElement('h2');
            h2.innerText=key;
            card.appendChild(h2);
                let img=document.createElement('img');
                img.src=data[key].image;
                img.style.display='none';
                card.appendChild(img);
                    let span=document.createElement('span');
                    span.innerText=data[key].word;
                    span.style.display='none';
                    card.appendChild(span);
                        card.addEventListener('click',function(){
                            flipCard(key,card);
                        });
                        drumkit.appendChild(card);
    }
}

function flipCard(key,card){
    console.log('card:',card);
    if(activeCard && activeCard !== card){
        console.log(`card for ${key}`);
        resetCard(activeCard);
    }
    let h2=card.querySelector('h2');
    let img=card.querySelector('img');
    let span=card.querySelector('span');
        if(h2.style.display !== 'none'){
            h2.style.display='none';
            img.style.display='block';
            span.style.display='block';
                playSound(key);
        }
        else{
            resetCard(card);
        }
        activeCard=card;
}

function resetCard(card){
    let h2=card.querySelector('h2');
    let img=card.querySelector('img');
    let span=card.querySelector('span');
        h2.style.display='block';
        img.style.display='none';
        span.style.display='none';
}

function playSound(key){
    if(data[key]){
        let audio=new Audio(data[key].sound);
        audio.play();
    }
}

document.addEventListener('keydown',function(event){
    let key=event.key.toUpperCase();
    let card=document.querySelector(`.element[data-key='${key}']`);
    if(card){
        flipCard(key,card);
    }
});

generateCard();
