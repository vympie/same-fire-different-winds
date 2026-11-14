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

// Short character histories and motivations, written to avoid treating motives as excuses.
const characterDetails = {
  "Spider-Man": {backstory:"Peter Parker is a teenager from Queens who gains spider-like abilities after being bitten by a radioactive spider. After his Uncle Ben dies, Peter understands that his choices can affect people beyond himself.", reasons:"He protects others because he believes power creates responsibility. His promise to help people is tested by school, family, money, and personal loss."},
  "Batman": {backstory:"As a child, Bruce Wayne witnesses his parents being murdered. He grows up, trains around the world, and returns to Gotham to fight crime using detective skills, technology, and discipline.", reasons:"He wants to stop other families from experiencing the loss he did. His mission is driven by grief and a determination to protect Gotham, though his refusal to let go of control can isolate him."},
  "Wonder Woman": {backstory:"Diana is an Amazon raised on the hidden island of Themyscira. Leaving her home, she enters the outside world and discovers the scale of conflict and suffering beyond it.", reasons:"She believes people deserve dignity and peace. She fights to protect them, while learning that compassion also requires understanding difficult choices."},
  "Superman": {backstory:"Born on Krypton as Kal-El, he is sent to Earth as a baby before his home planet is destroyed. Raised by the Kents in Smallville as Clark, he grows up learning kindness alongside his extraordinary abilities.", reasons:"His adoptive parents teach him to use his gifts to help rather than rule. He chooses to protect people because he sees their lives as valuable, not because they owe him anything."},
  "Iron Man": {backstory:"Tony Stark inherits a weapons company and becomes a famous inventor. After being captured and seeing the consequences of his weapons, he builds the first Iron Man suit and begins changing how he uses his intelligence.", reasons:"At first he is motivated by survival and pride; later, guilt and responsibility push him to protect others. His urge to prevent every possible danger can also make him controlling."},
  "Black Panther": {backstory:"T'Challa is the prince of Wakanda, a technologically advanced nation that has kept itself hidden from much of the world. After his father's death, he becomes king and must decide what kind of leader he will be.", reasons:"He wants to protect Wakanda and honour its people, but also faces the question of whether isolation is still right. His choices are shaped by duty, heritage, and a growing sense of global responsibility."},
  "Aang": {backstory:"Aang is an Air Nomad and the Avatar, the one person able to master all four elements. Awakened after being frozen in an iceberg for a century, he discovers that the Fire Nation has waged war while he was gone.", reasons:"He wants to restore balance without abandoning the Air Nomad belief in avoiding violence. His journey is about accepting responsibility while holding onto his values."},
  "Link": {backstory:"Across the Legend of Zelda stories, Link is often a young hero drawn into Hyrule's struggle against a great threat. Though the details change between games, he is repeatedly called to find courage and help Princess Zelda and the kingdom.", reasons:"Link acts to protect people and restore peace, even when he begins as an ordinary person. His courage is shown through persistence and helping others, not through seeking fame."},
  "Captain America": {backstory:"Steve Rogers is a small, determined young man who wants to serve during World War II. A special experiment transforms him into a super-soldier, and he becomes Captain America.", reasons:"He is guided by fairness and the belief that strength should defend people who cannot defend themselves. He follows his conscience even when that means challenging authority."},
  "Miles Morales": {backstory:"Miles is a Brooklyn teenager who gains spider-powers and becomes Spider-Man in his own right. After Peter Parker's death in his universe, Miles must decide whether he is ready to take on the responsibility.", reasons:"He wants to protect his community while staying true to himself. His story is about accepting help, learning from mistakes, and discovering that being a hero does not mean copying someone else."},
  "Katniss Everdeen": {backstory:"Katniss grows up in District 12 of Panem, where she helps keep her family alive by hunting. She volunteers for the Hunger Games in place of her younger sister Prim, then becomes a symbol of resistance.", reasons:"Her first motivation is protecting her family. As she sees the Capitol's cruelty and the suffering of other districts, her instinct to protect people grows into resistance against an unjust system."},
  "Sailor Moon": {backstory:"Usagi Tsukino begins as an ordinary, sometimes clumsy schoolgirl. After meeting the talking cat Luna, she discovers she is Sailor Moon and has a role in protecting Earth alongside the Sailor Guardians.", reasons:"Usagi fights because she cares deeply about her friends and believes people can change. Her empathy is not a weakness; it is the source of much of her strength."},
  "The Joker": {backstory:"The Joker's past changes across comics and films, and some versions deliberately offer unreliable or conflicting accounts. He emerges as a criminal who turns chaos and fear into a performance.", reasons:"In many versions, he wants to prove that morality is fragile and that anyone can be pushed into chaos. That belief explains his obsession, but does not justify the harm he causes."},
  "Thanos": {backstory:"Thanos is born on Titan, a world that faces catastrophe. He becomes convinced that his own extreme solution was right, and later seeks the Infinity Stones to impose his plan on the universe.", reasons:"He claims to be preventing scarcity, but his certainty makes him dismiss the lives and choices of others. His desire to control everything turns a stated goal into mass cruelty."},
  "Darth Vader": {backstory:"Anakin Skywalker begins as a gifted Jedi with a difficult childhood. Fear of losing the people he loves and manipulation by Palpatine lead him to the dark side, where he becomes Darth Vader.", reasons:"He wants to prevent loss and gain the power to control his future. Fear and anger twist that desire until he serves the very oppression he once could have resisted."},
  "Loki": {backstory:"In the Marvel stories, Loki is adopted by Odin and raised alongside Thor, later learning that he was born a Frost Giant. The discovery deepens his feelings of being different and overlooked.", reasons:"He seeks recognition, belonging, and power, often believing he must outsmart or outshine others to matter. His better choices begin when he stops defining himself only through rivalry."},
  "Magneto": {backstory:"Erik Lehnsherr survives the Holocaust as a child and later discovers his mutant powers. Having experienced persecution, he becomes a powerful advocate for mutant survival.", reasons:"He believes humans will always fear and attack mutants, so he argues they must defend themselves through strength. His fear comes from real trauma, but it can lead him to repeat the oppression he opposes."},
  "Harley Quinn": {backstory:"Harleen Quinzel is a psychiatrist who becomes involved with the Joker and takes on the identity Harley Quinn. In many modern stories, she eventually breaks away and builds an identity beyond that relationship.", reasons:"She initially seeks affection and acceptance, but learns that loyalty should not mean surrendering her independence. Her later motivations often include freedom, friendship, and making her own choices."},
  "Green Goblin": {backstory:"Norman Osborn is a wealthy scientist and businessman who develops an experimental formula. Its effects, combined with his ambition and instability, lead him to become the Green Goblin.", reasons:"He wants power, success, and control, and sees other people as obstacles or tools. His obsession with proving his superiority destroys his relationships and judgement."},
  "Maleficent": {backstory:"In Disney's original Sleeping Beauty, Maleficent is a powerful fairy who curses Princess Aurora after being excluded from a royal celebration. The later film retells her history and portrays betrayal as a major turning point.", reasons:"Her actions grow from wounded pride and, in the retelling, betrayal and a desire to protect the Moors. Her story changes depending on the version, showing how perspective shapes the way a character is understood."},
  "Light Yagami": {backstory:"Light is a highly intelligent Japanese student who finds a supernatural notebook called the Death Note. It gives him the power to kill anyone whose name he writes in it, and he begins using it to punish criminals.", reasons:"He starts by imagining he can create a safer world, but gradually decides that his judgement should be above everyone else's. The desire to be the ultimate authority becomes more important to him than justice."},
  "Ursula": {backstory:"Ursula is a sea witch from The Little Mermaid who lives outside King Triton's court. She offers Ariel a deal that promises a chance to live on land, but the terms are designed to give Ursula an advantage.", reasons:"She wants influence and revenge against the ruler who cast her out. She uses people's hopes and desperation to gain power, turning a wish for freedom into a trap."},
  "Killmonger": {backstory:"Erik Stevens, known as N'Jadaka and later Killmonger, is born in Oakland to a Wakandan father. After his father's death, he grows up separated from Wakanda and shaped by violence and injustice.", reasons:"He wants to challenge the suffering caused by oppression and Wakanda's isolation. His anger has understandable roots, but he chooses domination and revenge as the answers."},
  "Syndrome": {backstory:"Buddy Pine is a child who idolises Mr. Incredible and dreams of becoming his sidekick. After being rejected, he grows up into an inventor who uses technology to imitate superpowers.", reasons:"He wants recognition and revenge for feeling dismissed. Rather than accepting that heroes cannot grant him the identity he wants, he tries to make everyone dependent on him."}
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
  "Katniss Everdeen":"https://commons.wikimedia.org/wiki/Special:FilePath/Katniss_Everdeen,_Hunger_Games.jpg",
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
    ? '<img src="'+image+'" alt="" loading="lazy" decoding="async" referrerpolicy="no-referrer">'
    : '<div class="image-fallback" aria-hidden="true">'+item.name.split(' ').map(x=>x[0]).join('').slice(0,2)+'</div>';
  return '<article class="character-card" tabindex="0" role="button" aria-label="Read the story of '+item.name+'" data-character="'+item.name+'"><div class="character-image">'+visual+'</div><div class="character-copy"><span class="character-tag">'+item.tag+'</span><h3>'+item.name+'</h3><p>'+item.text+'</p><span class="card-read-more">Explore their story <span aria-hidden="true">↗</span></span></div></article>';
}
function renderGrid(id,list){
  const root=document.getElementById(id);
  if(!root)return;
  root.innerHTML=list.map(card).join("");
}
renderGrid('hero-grid',characters.heroes);renderGrid('villain-grid',characters.villains);

// Character profile overlay: cards open a focused, accessible story view.
const profile=document.createElement('div');
profile.className='profile-overlay';
profile.id='character-profile';
profile.setAttribute('aria-hidden','true');
profile.innerHTML='<section class="profile-panel" role="dialog" aria-modal="true" aria-labelledby="profile-name"><button class="profile-close" type="button" aria-label="Close profile">×</button><p class="eyebrow" id="profile-tag"></p><h2 id="profile-name"></h2><p class="profile-summary" id="profile-summary"></p><div class="profile-divider"></div><div class="profile-section"><p class="eyebrow">THE BEGINNING</p><h3>Backstory</h3><p id="profile-backstory"></p></div><div class="profile-section"><p class="eyebrow">WHAT DRIVES THEM</p><h3>Motivations</h3><p id="profile-reasons"></p></div><div class="profile-section profile-final"><p class="eyebrow">A CLOSER LOOK</p><h3>What their story tells us</h3><p id="profile-reflection"></p></div></section>';
document.body.appendChild(profile);
const closeProfile=()=>{profile.classList.remove('is-open');profile.setAttribute('aria-hidden','true');document.body.classList.remove('profile-open');};
function openProfile(item){
  const detail=characterDetails[item.name];
  if(!detail)return;
  document.getElementById('profile-tag').textContent=item.tag+' / CHARACTER PROFILE';
  document.getElementById('profile-name').textContent=item.name;
  document.getElementById('profile-summary').textContent=item.text;
  document.getElementById('profile-backstory').textContent=detail.backstory;
  document.getElementById('profile-reasons').textContent=detail.reasons;
  document.getElementById('profile-reflection').textContent='Their story shows how experiences and beliefs can shape a person — while their choices still matter. Understanding a character is not the same as agreeing with everything they do.';
  profile.classList.add('is-open');profile.setAttribute('aria-hidden','false');document.body.classList.add('profile-open');
  profile.querySelector('.profile-close').focus();
}
document.querySelectorAll('.character-card').forEach(card=>{
  const item=[...characters.heroes,...characters.villains].find(x=>x.name===card.dataset.character);
  card.addEventListener('click',()=>openProfile(item));
  card.addEventListener('keydown',event=>{if(event.key==='Enter'||event.key===' '){event.preventDefault();openProfile(item);}});
});
profile.querySelector('.profile-close').addEventListener('click',closeProfile);
profile.addEventListener('click',event=>{if(event.target===profile)closeProfile();});
document.addEventListener('keydown',event=>{if(event.key==='Escape'&&profile.classList.contains('is-open'))closeProfile();});
const toggle=document.querySelector('.menu-toggle');const nav=document.querySelector('.nav');if(toggle&&nav){toggle.addEventListener('click',()=>{const open=nav.classList.toggle('open');toggle.setAttribute('aria-expanded',String(open));});}
