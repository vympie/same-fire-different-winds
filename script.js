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
function fallbackArt(name){return '<div class="image-fallback" aria-label="'+name+'">'+name.split(' ').map(x=>x[0]).join('').slice(0,2)+'</div>'}
function card(item,index,offset){const n=index+offset,col=n%6,row=Math.floor(n/6);const posX=(col/5)*100,posY=(row/3)*100;return '<article class="character-card"><div class="character-image" role="img" aria-label="'+item.name+' original stylized portrait" style="background-position:'+posX+'% '+posY+'%"></div><div class="character-copy"><span class="character-tag">'+item.tag+'</span><h3>'+item.name+'</h3><p>'+item.text+'</p></div></article>'}
function renderGrid(id,list,offset){
  const root=document.getElementById(id);
  if(!root)return;
  root.innerHTML=list.map((item,index)=>card(item,index,offset)).join("");
}
renderGrid('hero-grid',characters.heroes,0);renderGrid('villain-grid',characters.villains,12);
const toggle=document.querySelector('.menu-toggle');const nav=document.querySelector('.nav');if(toggle&&nav){toggle.addEventListener('click',()=>{const open=nav.classList.toggle('open');toggle.setAttribute('aria-expanded',String(open));});}
