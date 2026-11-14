const characters = {
  heroes: [
    {name:"Spider-Man",wiki:"Spider-Man",tag:"Marvel",text:"A kid from Queens who learns that having power means having responsibility. He keeps showing up, even when life makes it difficult."},
    {name:"Batman",wiki:"Batman",tag:"DC",text:"No superpowers, just a sharp mind and a promise to protect Gotham. His greatest strength is also his biggest struggle."},
    {name:"Wonder Woman",wiki:"Wonder Woman",tag:"DC",text:"A warrior who believes compassion can be just as powerful as strength. She fights for peace without pretending it comes easily."},
    {name:"Superman",wiki:"Superman",tag:"DC",text:"An outsider with extraordinary power who chooses to use it to help people. His humanity matters more than his abilities."},
    {name:"Iron Man",wiki:"Iron Man",tag:"Marvel",text:"A genius who starts out thinking he can fix everything alone. His story is about responsibility, sacrifice, and learning."},
    {name:"Black Panther",wiki:"Black Panther (character)",tag:"Marvel",text:"A king balancing duty to his people with responsibility to the wider world. Tradition and change are always in conversation."},
    {name:"Aang",wiki:"Aang",tag:"Avatar",text:"A young airbender carrying a responsibility he never asked for. He tries to end a war without losing who he is."},
    {name:"Link",wiki:"Link (The Legend of Zelda)",tag:"Nintendo",text:"A quiet adventurer who keeps stepping forward when the world needs help. Courage isn't about never being afraid."},
    {name:"Captain America",wiki:"Captain America",tag:"Marvel",text:"A soldier whose strongest belief is that doing the right thing matters, even when it puts him against his own side."},
    {name:"Miles Morales",wiki:"Miles Morales",tag:"Marvel",text:"A teenager finding his own way to be Spider-Man. He proves that a hero doesn't have to copy anyone else."},
    {name:"Katniss Everdeen",wiki:"Katniss Everdeen",tag:"The Hunger Games",text:"A survivor pulled into a fight much bigger than herself. Her choices show how courage can grow from protecting others."},
    {name:"Sailor Moon",wiki:"Sailor Moon",tag:"Anime",text:"A hero whose kindness and friendships are as important as her powers. She keeps believing people can change."}
  ],
  villains: [
    {name:"The Joker",wiki:"Joker (character)",tag:"DC",text:"A chaotic criminal who wants to prove that people are not as good as they pretend. His worldview is a warning, not an excuse."},
    {name:"Thanos",wiki:"Thanos",tag:"Marvel",text:"Convinced that only he can solve the universe's problems, he mistakes control for wisdom and cruelty for necessity."},
    {name:"Darth Vader",wiki:"Darth Vader",tag:"Star Wars",text:"A once-promising Jedi who is consumed by fear and the need for control. His story is also one of loss and consequence."},
    {name:"Loki",wiki:"Loki (Marvel Cinematic Universe)",tag:"Marvel",text:"Clever, ambitious, and often driven by feeling overlooked. His story keeps asking whether people can choose to become better."},
    {name:"Magneto",wiki:"Magneto (Marvel Comics)",tag:"Marvel",text:"A survivor who fears history repeating itself. His desire to protect his people becomes dangerous when it turns into domination."},
    {name:"Harley Quinn",wiki:"Harley Quinn",tag:"DC",text:"A complicated character who breaks away from a harmful relationship and starts figuring out who she wants to be."},
    {name:"Green Goblin",wiki:"Green Goblin",tag:"Marvel",text:"A brilliant inventor whose hunger for power and control destroys the people around him, including himself."},
    {name:"Maleficent",wiki:"Maleficent",tag:"Disney",text:"A powerful figure whose story explores betrayal, anger, and the possibility of seeing an old story from another angle."},
    {name:"Light Yagami",wiki:"Light Yagami",tag:"Death Note",text:"He begins with an idea of justice but slowly decides that only his judgement should matter. That is where power turns dangerous."},
    {name:"Ursula",wiki:"Ursula (The Little Mermaid)",tag:"Disney",text:"A persuasive deal-maker who knows exactly how to use people's hopes against them. Not every offer is a fair one."},
    {name:"Killmonger",wiki:"Erik Killmonger",tag:"Marvel",text:"His anger grows from real injustice, but the way he chooses to answer it creates more harm. His story asks hard questions."},
    {name:"Syndrome",wiki:"Syndrome (The Incredibles)",tag:"Pixar",text:"A fan whose resentment turns into obsession. He wants to prove he matters, no matter who gets hurt along the way."}
  ]
};

// Verified real character-image sources. Images load directly from their hosting sites.
const characterImages = {
  "Light Yagami":"https://abrakadabra.fun/uploads/posts/2022-02/1646062306_2-abrakadabra-fun-p-kto-takoi-kira-iz-tetradi-smerti-2.jpg",
  "Green Goblin":"https://elcomercio.pe/resizer/v2/BCX24KKRKFCLXOV46X3SMKTRIM.jpg?auth=27973bc15f3d8442a59cdc5916c43ad447826b8b43b54026a19d50f4773fc0e7&height=1200&quality=75&smart=true&width=1200",
  "Superman":"https://s.hdnux.com/photos/01/53/50/32/28214966/3/rawImage.jpg",
  "Wonder Woman":"https://i.pinimg.com/736x/ce/92/f3/ce92f38b0c53bb6df320540782f3aa11.jpg",
  "Batman":"https://media.canalnet.tv/2018/08/Batman.jpg",
  "Spider-Man":"https://images.mentoday.ru/upload/img_cache/cac/cacf647edc7bcf1eaa251bfcd8335e97_cropped_666x524.jpg",
  "Iron Man":"https://media.vandalsports.com/i/1200x1200/4-2024/2024499183_1.jpg",
  "Black Panther":"https://filmtoday.ru/uploads/posts/2023-08/1724087505-1chernaya-pantera-supergeroj-ptq5ov52.jpg",
  "Aang":"https://cdn.mobygames.com/covers/15545206-avatar-generations-iphone-front-cover.jpg",
  "Link":"https://cdn.wikimg.net/en/zeldawiki/images/e/e4/SS_Link_Artwork.png",
  "Captain America":"https://cdn.marvel.com/u/prod/marvel/i/mg/f/40/4bc5e29c24ccf/standard_incredible.jpg",
  "Miles Morales":"https://ami.animecharactersdatabase.com/uploads/chars/38889-1759251507.jpg",
  "Katniss Everdeen":"https://upload.wikimedia.org/wikipedia/commons/8/8f/Katniss_Everdeen%2C_Hunger_Games.jpg",
  "Sailor Moon":"https://knect365.imgix.net/uploads/LINDA-BALLANTYNE-de328f65b43b800f150ac3c3feac9d4c.jpg?auto=format&fit=max&h=462&w=462",
  "The Joker":"https://s3.amazonaws.com/comicgeeks/characters/avatars/137558.jpg",
  "Loki":"https://bostonglobe-prod.cdn.arcpublishing.com/resizer/v2/K5S5THETTQI6DHEM4JEJZF7VSQ.jpg?auth=c55c7d2431b7ea91f58dd4e53b7c235826f9f07b8ca9d914ad099b223d12cb10&width=1440",
  "Magneto":"https://vignette1.wikia.nocookie.net/p__/images/0/04/Magneto_%28Erik_Lenscherr%29_in_DOFP.png/revision/latest?cb=20160112152423&path-prefix=protagonist",
  "Harley Quinn":"https://blog.pensanddolls.com.br/wp-content/uploads/2023/09/arlequina-traje-original.jpg",
  "Maleficent":"https://cloudfront-ap-northeast-1.images.arcpublishing.com/chosun/MK73S5KWHXUJ5ZJH3CKWF2DLTY.jpg",
  "Ursula":"https://media.vogue.co.jp/photos/6477344e5e6d677926814b16/master/w_1024%2Cc_limit/MSDLIME_WD007.jpg",
  "Syndrome":"https://cdn.drukarnia.com.ua/64c78210280f442102147f38/images/articles/666acfbbbef6938bc3d81d57/ieVR548086.5280580022.jpeg",
  "Thanos":"https://cdn.marvel.com/content/2x/019tha_ons_cut_mob_01_1.webp",
  "Darth Vader":"https://cdn.polyspeak.ai/speakmaster/3160f59597ae65dee39df80b7ac72ede.webp",
  "Killmonger":"https://www.algoafm.co.za/images/cmsimages/big/or_2018221121159.png"
};

function fallbackArt(name){return '<div class="image-fallback" aria-label="'+name+'">'+name.split(' ').map(x=>x[0]).join('').slice(0,2)+'</div>'}
function card(item){
  const image=characterImages[item.name];
  const visual=image
    ? '<img src="'+image+'" alt="'+item.name+'" loading="lazy" decoding="async" referrerpolicy="no-referrer">'
    : '<div class="image-fallback" aria-label="'+item.name+' image unavailable">'+item.name.split(' ').map(x=>x[0]).join('').slice(0,2)+'</div>';
  return '<article class="character-card"><div class="character-image">'+visual+'</div><div class="character-copy"><span class="character-tag">'+item.tag+'</span><h3>'+item.name+'</h3><p>'+item.text+'</p></div></article>';
}
function renderGrid(id,list){
  const root=document.getElementById(id);
  if(!root)return;
  root.innerHTML=list.map(card).join("");
}
renderGrid('hero-grid',characters.heroes);renderGrid('villain-grid',characters.villains);
const toggle=document.querySelector('.menu-toggle');const nav=document.querySelector('.nav');if(toggle&&nav){toggle.addEventListener('click',()=>{const open=nav.classList.toggle('open');toggle.setAttribute('aria-expanded',String(open));});}
