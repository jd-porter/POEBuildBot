const lines = [
    `At age thirteen, carving knife in hand, I killed beasts for the amusement of the filthy.`,
    `At fifteen, they thought me worthy to fight a fellow man.`,
    `A butcher he was, twice as big and twice as stupid as I.`,
    `I butchered the butcher and many like him,`,
    `earned my way, kill by kill, out of the offal pit and into the Grand Arena.`,
    `I thought I would find wealth and glory in the arena.`,
    `I was wrong.`,
    `I found something far more precious.`,
    `My Lady Merveil.`,
    `With one motion, I cleave a man in twain.`,
    `A kick sends another flying, and the roar of the crowd swells.`,
    `I am their idol!`,
    `I was always meant to be at the top of the pile.`,
    `Nobody else can compare.`,
    `And this tiny man, this new challenger, Daresso, will fall like the rest to the might of Barkhul.`,
    `Welcome to the Grand Arena of Theopolis.`,
    `It is here that I first laid eyes upon my true purpose, my lady Merveil.`,
    `It is our inspiration that defines us.`,
    `What do you fight for, Gladiator? Hundreds of warriors tried to lay claim to the same title as I, but I defeated them all.`,
    `Victory goes not to the able,`,
    `but to the ambitious.`,
    `I knelt in the sand of the Grand Arena, awaiting the killing blow.`,
    `I raised my eyes to look upon my death.`,
    `Instead, I saw her.`,
    `Merveil.`,
    `Her beautiful eyes met mine, and I knew that she saw me too.`,
    `I turned my opponent's strike and killed the man with his own dagger.`,
    `Fighting had always been about survival.`,
    `The primal instinct to kill or be killed.`,
    `Now the fight became about something else.`,
    `Love.`,
    `"To know for what you fight.`,
    `To get up again when you've been stuck down.`,
    `To outmaneuver someone faster, trick someone smarter, crush someone stronger.`,
    `That's what it takes to claim the crown.`,
    `"`,
    `The previous King of Swords was a giant of a man, both faster and stronger than I.`,
    `Yet I needed only look up at my Lady Merveil to know that I had no choice.`,
    `I could not die this day.`,
    `I made him shiver under ever parry, striking with all my might, so that my arms felt they might snap with every impact.`,
    `All the while, I studied his face, watching for that moment when he began to doubt.`,
    `It took an hour, but finally it was there.`,
    `Burning with pain, empty with exhaustion, I stepped inside his faltering swing and I slit the giant's throat.`,
    `I did not take my victory bow.`,
    `I knelt in the sand, looked to Merveil, and cried out for my Lady's hand in marriage.`,
    `From that day forth, I wore the Crown of Swords upon my head and a ring of eternal love upon my finger.`,
    `I offer to you an eternal oath that binds your heart to mine; a bond that not even death will break.`,
    `Will you accept?`,
    `When Merveil and Daresso wed, they held a most elaborate ceremony.`,
    `Merveil was said to be the most beautiful visage ever to walk down the Basilica aisle.`,
    `It took six people to carry the train on her dress.`,
    `Standing behind iron bars, Daresso thought of his adoring fans cheering his name, his wife's warm embrace waiting for him, and of the celebrations that would soon be thrown in his name.`,
    `But when the arena gate lifted, he thought only of the fight.`,
    `If the history books are to be believed, Daresso the Daring presented the necklace to Merveil on bended knee.`,
    `And from the moment he placed that little chunk of Wraeclast at her throat, Merveil began to sing.`,
    `It's told her sweet voice grew to fill even the largest concert halls of Oriath, and brought warmth to even the coldest of hearts.`,
    `But then she began to change.`,
    `Her mind and body twisted, as did her songs.`,
    `The sweetness remained while the sanity fled.`,
    `Knowing what little I do about the powers that lie dormant here in Wraeclast, I'd surmise that if you have Merveil's necklace, you have the Siren's voice.`,
    `Exquisitely beautiful, slim, graceful and kind, fair Merveil was the envy of all the court maidens.`,
    `As the most desired, it was only fitting she attracted the affections of Daresso, a famed swordsman,`,
    `notorious flirt, and renowned treasure hunter.`,
    `Their courtship was a whirlwind, the stuff of gossip and whispers among the courtesans.`,
    `Daresso proposed to Merveil a mere fortnight after their first meeting, bending down upon one knee in the city garden at sunrise, as was the custom.`,
    `For their engagement, he presented his lady with his most prized possession, the Star of Wraeclast.`,
    `It was a dazzling ruby necklace, the gemstone nearly the size of a child's fist, hung from a braid of pure spun gold and inlaid with a twining ribbon of milky pearl.`,
    `Rumor had it that Daresso had found the gemstone on a recent campaign deep into Wraeclast's wild jungle interior, a journey that claimed the lives of several men.`,
    `Regardless of its origin, Merveil accepted the gift with joy, clasping it about her silky neck.`,
    `The brilliant stone seemed to glow at her bosom with its own light.`,
    `This was to be her happiest moment, for things did not unfold so well thereafter.`,
    `In the days that followed the grand wedding, Merveil was seen about the city, appearing to float on a cloud of joy, so difficult to read was her expression of blank contentment.`,
    `She went from home to the market to the theater, always with the precious necklace at her throat, the better for all to see.`,
    `One would think that someone so proud of an object would willingly allow others to handle it, but not so with Merveil.`,
    `The first sign of warning came at a party, when one of the lady's friends decided to reach out to caress the beguiling stone.`,
    `The woman's fingers had only brushed the gem,`,
    `when Merveil screeched and clawed violently at her friend's face.`,
    `Some who attended the party swore that the sound was more of a hiss than a scream, but all could agree on the horror of the injuries inflicted.`,
    `The girl lost an eye but was lucky to keep any sight at all.`,
    `Naturally, Daresso was aghast at his bride's actions, yet Merveil’s rage at the party was only a sign of things to come.`,
    `She began to leave their bed at night, wandering the black streets aimlessly and returning home disheveled and smelling foul.`,
    `On one night, her husband awoke to find her naked in bed with him, as freezing cold as death itself, her skin covered in some sort of vile slime.`,
    `It was even said that she had seaweed tangled in her hair, but of course that was false, wasn't it? After all, the sea was a long walk from the city, down at the bottom of jagged cliffs.`,
    `As Merveil's behavior grew increasingly alarming and strange, her obsession with the necklace grew.`,
    `She never removed it, and took to clutching the gemstone tightly in her hand, polishing it and staring evilly at anyone casting a glance her way.`,
    `Whatever had corrupted her mind began to take hold of her body as well, for the once graceful girl now shuffled about like an aged crone.`,
    `She abandoned the tasteful wardrobe that had once brought her so much attention, choosing instead to dress in stinking, tattered rags.`,
    `People began to whisper that her body appeared to be changing beneath the garments, becoming lumpy, with odd bulges at her back and shoulders.`,
    `Merveil took to hiding her face from view beneath a grimy cowl, but a few who saw her in good light said that her visage had changed as well.`,
    `It was all stretched with blotched skin, her lips pulled back in an agonizing grimace, her exposed teeth long and sharp.`,
    `Through all of this, Daresso remained a dedicated stalwart beside his wife, and few could fault him.`,
    `Merveil now carried his child within her.`,
    `Yet the bonds of marriage were soon not strong enough.`,
    `On a moonless night, with his wife fitfully asleep, Daresso gathered a few light possessions, slipped out into the night, and sailed off [for]`,
    `Wraeclast on the midnight tide.`,
    `Finding him gone in the morning, the last of Merveil's waning sanity appeared to slip away.`,
    `She ran the entire distance to the cliffs barefoot, bloodying her feet on the hard cobbles of the road.`,
    `Then she climbed down the rocks like a thing possessed and stood on the sandy beach, clutching the necklace to her chest while she screamed at the top of her lungs.`,
    `Efforts to bring the girl back to the city were futile.`,
    `She would attack anyone who got close.`,
    `For many days, Merveil remained at the water's edge, filthy and forlorn.`,
    `She sustained herself on fish she pulled from the waters, devouring them alive, bones and all.`,
    `She huddled in a nearby cave during the day, and spent the cold night hours standing knee-deep in the waves, singing out to the ocean for her lost husband.`,
    `Her countenance grew haggard and shriveled, but her belly continued to grow, and when the child was finally born it was a freakish nightmare of scales, slime and tentacles.`,
    `It was also female.`,
    `With the birth of her spawn, Merveil retreated deep into the labyrinth of tidal tunnels beneath Wraeclast's cliff walls, where she grew ever more twisted and corrupt.`,
    `Still the Star remained about her throat, pulsing with some dark energy.`,
    `It seems that in the years since these tragic events, the fair lady has been busy producing more children, though by what mechanism none can say.`,
    `Her daughters, now of untold number, haunt the island's shoreline.`,
    `With lilting sweet voices, they call out at night to passing sailors, bidding their father to return to them.`,
    `Their mother dwells deep in the bowels of the mountain, now fully possessed by the jewel around her neck, imbued by it with powerful, deadly magics.`,
    `It is unlikely she will welcome anyone who blunders into her lair.`,
    `Daresso gave me the gem, kissed me, promised that he would be by my side forever.`,
    `I sang for him.`,
    `I sang for Oriath with his gem at my throat.`,
    `Kalisa's gem.`,
    `Kalisa's voice.`,
    `I sang in her echo, performing arias that had once made the Empire weep.`,
    `I listened to Kalisa's lullabies in my dreams.`,
    `I gave myself to her music.`,
    `Mind.`,
    `and body.`,
    `Daresso left me, for Sarn, with a promise to free me from Kalisa.`,
    `I begged him not to go.`,
    `Tried to show him the wonder of my transformation, the beautiful daughters he would soon meet.`,
    `He couldn't see.`,
    `None of them could see.`,
    `I fled from their hatred.`,
    `When Daresso returns I will cast his cure away.`,
    `I will teach him what true love is.`,
    `It's him! He sails back to me, my Daresso! I shall sing for him.`,
    `I shall show him the way.`,
    `Come, my love.`,
    `Come to me.`,
    `We shall be together at last.`,
    `No, turn away! Don't listen to my singing, you'll die upon the rocks! Turn away.`,
    `! Turn away.`,
    `Turn away.`,
    `If you have to quench your curiosity about Merveil, go look at the corsairs that haunt the grave of ships.`,
    `Like any mother, Merveil's got hungry mouths to feed.`,
    `In my dreams, I still hear them.`,
    `It was late Autumn, nearing Winter, and we were going on three months at sea.`,
    `Our food stores had long been exhausted from damp, rot and thievery, our meager crew reduced to eating whatever moldy scraps we could rummage from the hold.`,
    `Already half had died, and those who remained shuffled about the decks with vacant eyes and hollow chests.`,
    `We had given up completely, resigned to die lost among the waves.`,
    `And then, out of the rising morning mist we spied them, the jagged, towering cliffs of cursed Wraeclast.`,
    `A cheer went up among the men, some rubbing their eyes with disbelief.`,
    `As we drew closer, the pounding roar of the surf drowned out our anxious chatter, and the forbidding, rocky wall drew ever larger.`,
    `To our dismay, we found no port at water's edge, no cove to shelter our beleaguered vessel.`,
    `"We head North, around the peninsula" the captain ordered, so we came about and set course.`,
    `Many hours of sailing brought only more misery and hunger, and by nightfall we were gripped with despair.`,
    `Wraeclast was a fortress, as impenetrable as a stone prison.`,
    `As night fell, we dropped anchor, and sought whatever comfort remained.`,
    `The air grew quiet and still, the only sound the lapping of the waves against the hull.`,
    `But then another sound joined in, soft, enticing, and insistent.`,
    `At first we could not believe our hearing.`,
    `How could there be women's voices out here, in this awful,`,
    `desolate place? The men staggered to the railing, first peering out into the blackness and then calling to it.`,
    `The voices returned our hail, rising as a chorus, beckoning us to them.`,
    `Within minutes, we had dropped rowboats into the water, and all who could summon the strength clambered aboard.`,
    `Then we rowed like men possessed, towards the gentle, sweet voices ahead,`,
    `their song drifting up from a yawning cave in the cliff side.`,
    `We arrived at the entrance shivering and exhausted, yet nearly frenzied with need and desire.`,
    `Oh the voices, the things they promised us!`,
    `Disdaining caution, the whole of us dashed forward into the cave, the dark swallowing us up as readily as a serpent engulfing its prey.`,
    `And the voices ceased.`,
    `There was a pause, a singular moment of clarity when we all knew our great folly.`,
    `Then, a new voice pierced the air, this one sharp and strident, dripping with malevolence.`,
    `It was all around us, hissing with delight, and hunger.`,
    `Then the men began to shriek, their choking wails abruptly silenced by whatever beset us.`,
    `I felt something cold, slimy and terribly strong coil itself around my throat, and I reacted on instinct.`,
    `I pulled my dagger free, cutting wildly at the thing that grasped me, and somehow I was released! Abandoning all thought, I groped for the cavern's exit, and when I found it,`,
    `I plunged headfirst into the surf, my own screams barely audible among those of my doomed crew mates.`,
    `I was the only one who made it out of that hellish place.`,
    `Let my words be a warning to any who dare travel the shores of Wraeclast.`,
    `The Siren's Daughters lie in wait there, ready to lure and devour whoever happens by.`,
    `If you hear their sweet song on the ocean air, cover your ears and flee.`,
    `What follows are the last words of Eirik Hoskuld, captain of a wrecked merchant vessel, found in his waterlogged journal on the beach.`,
    `"I'm awoken by thunder.`,
    `It booms suddenly overhead, shaking the glass of my portal, a deafening echo in the tight confines of my quarters.`,
    `All is pitch dark for a moment and then a brilliant flash fills the cabin, nearly blinding me.`,
    `I'm soaking, perhaps from a dream sweat, but likely from the icy seawater trickling down through the cracks in the deck.`,
    `This cursed storm has tossed us for more than a week now and sleep is rare.`,
    `I open my cabin door, and am immediately struck with the full fury of the gale roaring outside.`,
    `Lightning forks and flickers overhead, for a moment casting our tattered main sail in stark relief against the iron sky.`,
    `A sickening crackle of thunder follows immediately behind, boring into my aching bones.`,
    `I make my way carefully across the pitching deck, past my crew who huddle drenched in the freezing darkness.`,
    `Each of them has long since withdrawn into his own world.`,
    `We've not spoken in days.`,
    `Cold and fear will break the strongest of men.`,
    `I climb to the helm and grip the first mate's shoulder, alerting him to my arrival.`,
    `He shuffles past me like a ghost as I seize the wheel, checking my compass in the gloom to determine if we're still on the right heading.`,
    `But what is this? The needle, normally pointing reliably North, jerks around suddenly as the lightning flashes.`,
    `I tap the glass on the device, even knocking it against the wooden railing,`,
    `but it changes nothing.`,
    `Without navigation, I can only hold the wheel steady, and try to keep the craft upright in the tossing surf.`,
    `I throw myself into this task, as the wind tears into me anew.`,
    `We plunge ahead into the night.`,
    `Strangely, despite the damp and the din, I find myself drifting off to sleep.`,
    `My dreams take me to kinder shores, to warmth and comfort.`,
    `But it's all too brief, for I'm startled awake, swearing that I've heard something.`,
    `Unless I'm mistaken, that's the soft, sweet voice of a girl, out here in the wind and waves.`,
    `I first think that it can only be the delusions of my exhausted mind, for we've been months without the sight of a woman.`,
    `Yet now, I hear it again, and I'm fully awake.`,
    `The song reaches my ears louder now, caressing them with a silky, delicate, invisible hand.`,
    `It is beyond exquisite, the most beautiful thing I've ever heard.`,
    `I stand transfixed, peering out into the darkness,`,
    `blinking back a mixture of tears and seawater.`,
    `I must find her, I must know this maiden, the storm be damned!`,
    `I turn the ship to port and yell a command to sheet out the main sail.`,
    `Our battered craft accelerates,`,
    `plowing through the waves like a thing possessed.`,
    `The sea rises and falls, beating a rhythm on the ship's hull as we speed along.`,
    `All the while, the singing grows in volume, drawing us forward.`,
    `Finally, I see dim light ahead, a faint blue glow, and shimmering lithe figures arrayed on a beach, not far ahead.`,
    `I've reached them, this heavenly choir, who offers salvation to me and my men.`,
    `Alas, I should have known how great my folly before it was too late.`,
    `As we close on the beach, the trap is suddenly apparent.`,
    `I see a ragged spine of sharp rocks dead ahead, just above the waterline, waiting hungrily to crunch our hull to splinters.`,
    `With a cry, I heave the wheel to starboard, and we begin to turn.`,
    `Our bow crosses the wind, and the ship's boom whips across the deck like a scythe, cutting down anyone in its path.`,
    `The violence of the jibe is far too much for the soaked and rotted stays that bind the mast to the hull.`,
    `With a horrible splintering crack, the mast breaks sideways, and comes down on the deck in a torrent of canvas and rope.`,
    `Completely out of control now, we slide sideways towards the rocks and when the impact comes, I am struck inert.`,
    `I awake some time later, lying among a heap of bodies on the deck and somehow, barely alive.`,
    `The blue glow I saw from afar is all around me now, it appears to have crept on board like a living thing.`,
    `It surrounds me, pulsing, slithering, suffusing the very corpses of my crew mates.`,
    `As I watch with unbelieving eyes, a blue, shimmering specter rises from the body of the nearest man.`,
    `It just stands there for a time, and then slowly turns towards me, clutching some sort of ethereal weapon.`,
    `A moment later, more shapes arise, until I am surrounded by a host of iridescent ghosts.`,
    `I know not what these things are, but I am certain they afford me no good will.`,
    `Without another thought, I gain my feet, and scramble across the deck to my captain's quarters, barring myself inside.`,
    `They're all at the door now, they've been there for hours.`,
    `I can see their evil blue glow through the gaps in the boards.`,
    `As I write this, their blows fall heavily on the failing wood, thudding with the steady beat of some hellish metronome.`,
    `How long the barrier will last I cannot say, but they will surely breech it.`,
    `Pray for me.`,
    `"`,
    `It's a bit of an embarrassing affair, truth be told.`,
    `Thought I could return to the golden days, you know? Be a terror of the high seas like in me youth.`,
    `Problem was, they'd all forgotten me.`,
    `Those young blighters sailing about, they had no clue who I even were! Figured if I could complete another great feat, like slaying that sea-bitch Merveil, maybe that'd earn me my respect back.`,
    `Arr, suppose I don't need to tell you; that girlie's stronger than she looks.`,
    `All it took were one slip of the old hands and next I knew, the Black Crest were wrecked against the coast and I'm getting meself eaten alive by that hag.`,
    `Peeled each separate muscle from my bones, she did.`,
    `I'll tell you, it weren't pretty.`,
    `Welcome, husband.`,
    `We knew in our hearts that you would find us.`,
    `Come, Daresso, Ambrosia and Amarissa must meet their father.`,
    `Come, my love.`,
    `Return to your family.`,
    `Daresso? Yes, Petarus has spoken of him.`,
    `The disturbing question is this:`,
    `How does a man who, by all accounts, has been dead for over a hundred years end up as a Nightmare monarch in the bowels of Highgate?`,
    `Unlike Kaom, there is utterly no trace of his passing, and we have scouted every footstep of this mountain and its surrounds.`,
    `There is no other entrance.`,
    `No physical entrance.`,
    `Petarus: Daresso? He's down there, inside the mountain?`,
    `Vanja: Are we talking about the Daresso? The Sword King?`,
    `Petarus: Seems like it.`,
    `But.`,
    `how did he get in there? He left Oriath about a century and a half ago,`,
    `hoping to find a cure for his lady, Merveil.`,
    `He would have had to fight his way through the Maraketh, but.`,
    `Oyun's never mentioned anything of the sort.`,
    `Vanja: Maybe he didn't go in alive.`,
    `Petarus: What do you mean?`,
    `Vanja: We live in a land where the dead walk and things like Dialla live for centuries.`,
    `Petarus: You think he died somewhere else and then the Beast got hold of him?`,
    `Vanja: Could be.`,
    `Petarus: Well, if the Beast can do that, then.`,
    `what bloody good was Deshret's Seal?`,
    `Vanja: Exactly.`,
    `The Beast eats the souls of its prey, devouring their very life force.`,
    `Those consumed become a part of the creature, existing forevermore as a thrall of twisted nightmare.`,
    `This fate befell many of Wraeclast's most legendary figures.`,
    `Daresso the Sword King - A peerless gladiator, the best the world has ever seen.`,
    `Daresso ascended from humble orphaned slave beginnings to the pinnacle of gladiatorial glory.`,
    `Driven by a mad hope to purify his lost love Merveil, he abandoned reason and caution.`,
    `Daresso's living nightmare chronicles the arc of his pitiable legacy, a story of loss, desire and reckless ambition.`,
    `Daresso, King of Swords.`,
    `Damned by Desire.`,
    `Oh, aren't we all? He's down here too, and Desire's curse remains his to bear.`,
];

module.exports={lines};