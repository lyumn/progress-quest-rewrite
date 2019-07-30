window.K = {};

window.K.Traits = ['Name', 'Race', 'Class', 'Level'];

window.K.PrimeStats = ['STR', 'CON', 'DEX', 'INT', 'WIS', 'CHA'];
window.K.Stats = window.K.PrimeStats.slice(0).concat(['HP Max', 'MP Max']);

window.K.Equips = [
  'Weapon',
  'Shield',
  'Helm',
  'Hauberk',
  'Brassairts',
  'Vambraces',
  'Gauntlets',
  'Gambeson',
  'Cuisses',
  'Greaves',
  'Sollerets'
];

window.K.Spells = [
  'Slime Finger',
  'Rabbit Punch',
  'Hastiness',
  'Good Move',
  'Sadness',
  'Seasick',
  'Gyp',
  'Shoelaces',
  'Innoculate',
  'Cone of Annoyance',
  'Magnetic Orb',
  'Invisible Hands',
  'Revolting Cloud',
  'Aqueous Humor',
  'Spectral Miasma',
  'Clever Fellow',
  'Lockjaw',
  'History Lesson',
  'Hydrophobia',
  'Big Sister',
  'Cone of Paste',
  'Mulligan',
  "Nestor's Bright Idea",
  'Holy Batpole',
  'Tumor (Benign)',
  'Braingate',
  'Summon a Bitch',
  'Nonplus',
  'Animate Nightstand',
  'Eye of the Troglodyte',
  'Curse Name',
  'Dropsy',
  'Vitreous Humor',
  "Roger's Grand Illusion",
  'Covet',
  'Black Idaho',
  'Astral Miasma',
  'Spectral Oyster',
  'Acrid Hands',
  'Angioplasty',
  "Grognor's Big Day Off",
  'Tumor (Malignant)',
  'Animate Tunic',
  'Ursine Armor',
  'Holy Roller',
  'Tonsilectomy',
  'Curse Family',
  'Infinite Confusion'
];

window.K.OffenseAttrib = [
  'Polished|+1',
  'Serrated|+1',
  'Heavy|+1',
  'Pronged|+2',
  'Steely|+2',
  'Vicious|+3',
  'Venomed|+4',
  'Stabbity|+4',
  'Dancing|+5',
  'Invisible|+6',
  'Vorpal|+7'
];

window.K.DefenseAttrib = [
  'Studded|+1',
  'Banded|+2',
  'Gilded|+2',
  'Festooned|+3',
  'Holy|+4',
  'Cambric|+1',
  'Fine|+4',
  'Impressive|+5',
  'Custom|+3'
];

window.K.Shields = [
  'Parasol|0',
  'Pie Plate|1',
  'Garbage Can Lid|2',
  'Buckler|3',
  'Plexiglass|4',
  'Fender|4',
  'Round Shield|5',
  'Carapace|5',
  'Scutum|6',
  'Propugner|6',
  'Kite Shield|7',
  'Pavise|8',
  'Tower Shield|9',
  'Baroque Shield|11',
  'Aegis|12',
  'Magnetic Field|18'
];

window.K.Armors = [
  'Lace|1',
  'Macrame|2',
  'Burlap|3',
  'Canvas|4',
  'Flannel|5',
  'Chamois|6',
  'Pleathers|7',
  'Leathers|8',
  'Bearskin|9',
  'Ringmail|10',
  'Scale Mail|12',
  'Chainmail|14',
  'Splint Mail|15',
  'Platemail|16',
  'ABS|17',
  'Kevlar|18',
  'Titanium|19',
  'Mithril Mail|20',
  'Diamond Mail|25',
  'Plasma|30'
];

window.K.Weapons = [
  'Stick|0',
  'Broken Bottle|1',
  'Shiv|1',
  'Sprig|1',
  'Oxgoad|1',
  'Eelspear|2',
  'Bowie Knife|2',
  'Claw Hammer|2',
  'Handpeen|2',
  'Andiron|3',
  'Hatchet|3',
  'Tomahawk|3',
  'Hackbarm|3',
  'Crowbar|4',
  'Mace|4',
  'Battleadze|4',
  'Leafmace|5',
  'Shortsword|5',
  'Longiron|5',
  'Poachard|5',
  'Baselard|5',
  'Whinyard|6',
  'Blunderbuss|6',
  'Longsword|6',
  'Crankbow|6',
  'Blibo|7',
  'Broadsword|7',
  'Kreen|7',
  'Warhammer|7',
  'Morning Star|8',
  'Pole-adze|8',
  'Spontoon|8',
  'Bastard Sword|9',
  'Peen-arm|9',
  'Culverin|10',
  'Lance|10',
  'Halberd|11',
  'Poleax|12',
  'Bandyclef|15'
];

window.K.Specials = [
  'Diadem',
  'Festoon',
  'Gemstone',
  'Phial',
  'Tiara',
  'Scabbard',
  'Arrow',
  'Lens',
  'Lamp',
  'Hymnal',
  'Fleece',
  'Laurel',
  'Brooch',
  'Gimlet',
  'Cobble',
  'Albatross',
  'Brazier',
  'Bandolier',
  'Tome',
  'Garnet',
  'Amethyst',
  'Candelabra',
  'Corset',
  'Sphere',
  'Sceptre',
  'Ankh',
  'Talisman',
  'Orb',
  'Gammel',
  'Ornament',
  'Brocade',
  'Galoon',
  'Bijou',
  'Spangle',
  'Gimcrack',
  'Hood',
  'Vulpeculum'
];

window.K.ItemAttrib = [
  'Golden',
  'Gilded',
  'Spectral',
  'Astral',
  'Garlanded',
  'Precious',
  'Crafted',
  'Dual',
  'Filigreed',
  'Cruciate',
  'Arcane',
  'Blessed',
  'Reverential',
  'Lucky',
  'Enchanted',
  'Gleaming',
  'Grandiose',
  'Sacred',
  'Legendary',
  'Mythic',
  'Crystalline',
  'Austere',
  'Ostentatious',
  'One True',
  'Proverbial',
  'Fearsome',
  'Deadly',
  'Benevolent',
  'Unearthly',
  'Magnificent',
  'Iron',
  'Ormolu',
  'Puissant'
];

window.K.ItemOfs = [
  'Foreboding',
  'Foreshadowing',
  'Nervousness',
  'Happiness',
  'Torpor',
  'Danger',
  'Craft',
  'Silence',
  'Invisibility',
  'Rapidity',
  'Pleasure',
  'Practicality',
  'Hurting',
  'Joy',
  'Petulance',
  'Intrusion',
  'Chaos',
  'Suffering',
  'Extroversion',
  'Frenzy',
  'Sisu',
  'Solitude',
  'Punctuality',
  'Efficiency',
  'Comfort',
  'Patience',
  'Internment',
  'Incarceration',
  'Misapprehension',
  'Loyalty',
  'Envy',
  'Acrimony',
  'Worry',
  'Fear',
  'Awe',
  'Guile',
  'Prurience',
  'Fortune',
  'Perspicacity',
  'Domination',
  'Submission',
  'Fealty',
  'Hunger',
  'Despair',
  'Cruelty',
  'Grob',
  'Dignard',
  'Ra',
  'the Bone',
  'Diamonique',
  'Electrum',
  'Hydragyrum'
];

window.K.BoringItems = [
  'nail',
  'lunchpail',
  'sock',
  'I.O.U.',
  'cookie',
  'pint',
  'toothpick',
  'writ',
  'newspaper',
  'letter',
  'plank',
  'hat',
  'egg',
  'coin',
  'needle',
  'bucket',
  'ladder',
  'chicken',
  'twig',
  'dirtclod',
  'counterpane',
  'vest',
  'teratoma',
  'bunny',
  'rock',
  'pole',
  'carrot',
  'canoe',
  'inkwell',
  'hoe',
  'bandage',
  'trowel',
  'towel',
  'planter box',
  'anvil',
  'axle',
  'tuppence',
  'casket',
  'nosegay',
  'trinket',
  'credenza',
  'writ'
];

window.K.Monsters = [
  { name: 'Anhkheg', level: 6, loot: 'chitin' },
  { name: 'Ant', level: 0, loot: 'antenna' },
  { name: 'Ape', level: 4, loot: 'ass' },
  { name: 'Baluchitherium', level: 14, loot: 'ear' },
  { name: 'Beholder', level: 10, loot: 'eyestalk' },
  { name: 'Black Pudding', level: 10, loot: 'saliva' },
  { name: 'Blink Dog', level: 4, loot: 'eyelid' },
  { name: 'Cub Scout', level: 1, loot: 'neckerchief' },
  { name: 'Girl Scout', level: 2, loot: 'cookie' },
  { name: 'Boy Scout', level: 3, loot: 'merit badge' },
  { name: 'Eagle Scout', level: 4, loot: 'merit badge' },
  { name: 'Bugbear', level: 3, loot: 'skin' },
  { name: 'Bugboar', level: 3, loot: 'tusk' },
  { name: 'Boogie', level: 3, loot: 'slime' },
  { name: 'Camel', level: 2, loot: 'hump' },
  { name: 'Carrion Crawler', level: 3, loot: 'egg' },
  { name: 'Catoblepas', level: 6, loot: 'neck' },
  { name: 'Centaur', level: 4, loot: 'rib' },
  { name: 'Centipede', level: 0, loot: 'leg' },
  { name: 'Cockatrice', level: 5, loot: 'wattle' },
  { name: 'Couatl', level: 9, loot: 'wing' },
  { name: 'Crayfish', level: 0, loot: 'antenna' },
  { name: 'Demogorgon', level: 53, loot: 'tentacle' },
  { name: 'Jubilex', level: 17, loot: 'gel' },
  { name: 'Manes', level: 1, loot: 'tooth' },
  { name: 'Orcus', level: 27, loot: 'wand' },
  { name: 'Succubus', level: 6, loot: 'bra' },
  { name: 'Vrock', level: 8, loot: 'neck' },
  { name: 'Hezrou', level: 9, loot: 'leg' },
  { name: 'Glabrezu', level: 10, loot: 'collar' },
  { name: 'Nalfeshnee', level: 11, loot: 'tusk' },
  { name: 'Marilith', level: 7, loot: 'arm' },
  { name: 'Balor', level: 8, loot: 'whip' },
  { name: 'Yeenoghu', level: 25, loot: 'flail' },
  { name: 'Asmodeus', level: 52, loot: 'leathers' },
  { name: 'Baalzebul', level: 43, loot: 'pants' },
  { name: 'Barbed Devil', level: 8, loot: 'flame' },
  { name: 'Bone Devil', level: 9, loot: 'hook' },
  { name: 'Dispater', level: 30, loot: 'matches' },
  { name: 'Erinyes', level: 6, loot: 'thong' },
  { name: 'Geryon', level: 30, loot: 'cornucopia' },
  { name: 'Malebranche', level: 5, loot: 'fork' },
  { name: 'Ice Devil', level: 11, loot: 'snow' },
  { name: 'Lemure', level: 3, loot: 'blob' },
  { name: 'Pit Fiend', level: 13, loot: 'seed' },
  { name: 'Anklyosaurus', level: 9, loot: 'tail' },
  { name: 'Brontosaurus', level: 30, loot: 'brain' },
  { name: 'Diplodocus', level: 24, loot: 'fin' },
  { name: 'Elasmosaurus', level: 15, loot: 'neck' },
  { name: 'Gorgosaurus', level: 13, loot: 'arm' },
  { name: 'Iguanadon', level: 6, loot: 'thumb' },
  { name: 'Megalosaurus', level: 12, loot: 'jaw' },
  { name: 'Monoclonius', level: 8, loot: 'horn' },
  { name: 'Pentasaurus', level: 12, loot: 'head' },
  { name: 'Stegosaurus', level: 18, loot: 'plate' },
  { name: 'Triceratops', level: 16, loot: 'horn' },
  { name: 'Tyranosauraus Rex', level: 18, loot: 'forearm' },
  { name: 'Djinn', level: 7, loot: 'lamp' },
  { name: 'Doppleganger', level: 4, loot: 'face' },
  { name: 'Black Dragon', level: 7, loot: '*' },
  { name: 'Plaid Dragon', level: 7, loot: 'sporrin' },
  { name: 'Blue Dragon', level: 9, loot: '*' },
  { name: 'Beige Dragon', level: 9, loot: '*' },
  { name: 'Brass Dragon', level: 7, loot: 'pole' },
  { name: 'Tin Dragon', level: 8, loot: '*' },
  { name: 'Bronze Dragon', level: 9, loot: 'medal' },
  { name: 'Chromatic Dragon', level: 16, loot: 'scale' },
  { name: 'Copper Dragon', level: 8, loot: 'loafer' },
  { name: 'Gold Dragon', level: 8, loot: 'filling' },
  { name: 'Green Dragon', level: 8, loot: '*' },
  { name: 'Platinum Dragon', level: 21, loot: '*' },
  { name: 'Red Dragon', level: 10, loot: 'cocktail' },
  { name: 'Silver Dragon', level: 10, loot: '*' },
  { name: 'White Dragon', level: 6, loot: 'tooth' },
  { name: 'Dragon Turtle', level: 13, loot: 'shell' },
  { name: 'Dryad', level: 2, loot: 'acorn' },
  { name: 'Dwarf', level: 1, loot: 'drawers' },
  { name: 'Eel', level: 2, loot: 'sashimi' },
  { name: 'Efreet', level: 10, loot: 'cinder' },
  { name: 'Sand Elemental', level: 8, loot: 'glass' },
  { name: 'Bacon Elemental', level: 10, loot: 'bit' },
  { name: 'Porn Elemental', level: 12, loot: 'lube' },
  { name: 'Cheese Elemental', level: 14, loot: 'curd' },
  { name: 'Hair Elemental', level: 16, loot: 'follicle' },
  { name: 'Swamp Elf', level: 1, loot: 'lilypad' },
  { name: 'Brown Elf', level: 1, loot: 'tusk' },
  { name: 'Sea Elf', level: 1, loot: 'jerkin' },
  { name: 'Ettin', level: 10, loot: 'fur' },
  { name: 'Frog', level: 0, loot: 'leg' },
  { name: 'Violet Fungi', level: 3, loot: 'spore' },
  { name: 'Gargoyle', level: 4, loot: 'gravel' },
  { name: 'Gelatinous Cube', level: 4, loot: 'jam' },
  { name: 'Ghast', level: 4, loot: 'vomit' },
  { name: 'Ghost', level: 10, loot: '*' },
  { name: 'Ghoul', level: 2, loot: 'muscle' },
  { name: 'Humidity Giant', level: 12, loot: 'drops' },
  { name: 'Beef Giant', level: 11, loot: 'steak' },
  { name: 'Quartz Giant', level: 10, loot: 'crystal' },
  { name: 'Porcelain Giant', level: 9, loot: 'fixture' },
  { name: 'Rice Giant', level: 8, loot: 'grain' },
  { name: 'Cloud Giant', level: 12, loot: 'condensation' },
  { name: 'Fire Giant', level: 11, loot: 'cigarettes' },
  { name: 'Frost Giant', level: 10, loot: 'snowman' },
  { name: 'Hill Giant', level: 8, loot: 'corpse' },
  { name: 'Stone Giant', level: 9, loot: 'hatchling' },
  { name: 'Storm Giant', level: 15, loot: 'barometer' },
  { name: 'Mini Giant', level: 4, loot: 'pompadour' },
  { name: 'Gnoll', level: 2, loot: 'collar' },
  { name: 'Gnome', level: 1, loot: 'hat' },
  { name: 'Goblin', level: 1, loot: 'ear' },
  { name: 'Grid Bug', level: 1, loot: 'carapace' },
  { name: 'Jellyrock', level: 9, loot: 'seedling' },
  { name: 'Beer Golem', level: 15, loot: 'foam' },
  { name: 'Oxygen Golem', level: 17, loot: 'platelet' },
  { name: 'Cardboard Golem', level: 14, loot: 'recycling' },
  { name: 'Rubber Golem', level: 16, loot: 'ball' },
  { name: 'Leather Golem', level: 15, loot: 'fob' },
  { name: 'Gorgon', level: 8, loot: 'testicle' },
  { name: 'Gray Ooze', level: 3, loot: 'gravy' },
  { name: 'Green Slime', level: 2, loot: 'sample' },
  { name: 'Griffon', level: 7, loot: 'nest' },
  { name: 'Banshee', level: 7, loot: 'larynx' },
  { name: 'Harpy', level: 3, loot: 'mascara' },
  { name: 'Hell Hound', level: 5, loot: 'tongue' },
  { name: 'Hippocampus', level: 4, loot: 'mane' },
  { name: 'Hippogriff', level: 3, loot: 'egg' },
  { name: 'Hobgoblin', level: 1, loot: 'patella' },
  { name: 'Homonculus', level: 2, loot: 'fluid' },
  { name: 'Hydra', level: 8, loot: 'gyrum' },
  { name: 'Imp', level: 2, loot: 'tail' },
  { name: 'Invisible Stalker', level: 8, loot: '*' },
  { name: 'Iron Peasant', level: 3, loot: 'chaff' },
  { name: 'Jumpskin', level: 3, loot: 'shin' },
  { name: 'Kobold', level: 1, loot: 'penis' },
  { name: 'Leprechaun', level: 1, loot: 'wallet' },
  { name: 'Leucrotta', level: 6, loot: 'hoof' },
  { name: 'Lich', level: 11, loot: 'crown' },
  { name: 'Lizard Man', level: 2, loot: 'tail' },
  { name: 'Lurker', level: 10, loot: 'sac' },
  { name: 'Manticore', level: 6, loot: 'spike' },
  { name: 'Mastodon', level: 12, loot: 'tusk' },
  { name: 'Medusa', level: 6, loot: 'eye' },
  { name: 'Multicell', level: 2, loot: 'dendrite' },
  { name: 'Pirate', level: 1, loot: 'booty' },
  { name: 'Berserker', level: 1, loot: 'shirt' },
  { name: 'Caveman', level: 2, loot: 'club' },
  { name: 'Dervish', level: 1, loot: 'robe' },
  { name: 'Merman', level: 1, loot: 'trident' },
  { name: 'Mermaid', level: 1, loot: 'gills' },
  { name: 'Mimic', level: 9, loot: 'hinge' },
  { name: 'Mind Flayer', level: 8, loot: 'tentacle' },
  { name: 'Minotaur', level: 6, loot: 'map' },
  { name: 'Yellow Mold', level: 1, loot: 'spore' },
  { name: 'Morkoth', level: 7, loot: 'teeth' },
  { name: 'Mummy', level: 6, loot: 'gauze' },
  { name: 'Naga', level: 9, loot: 'rattle' },
  { name: 'Nebbish', level: 1, loot: 'belly' },
  { name: 'Neo-Otyugh', level: 11, loot: 'organ ' },
  { name: 'Nixie', level: 1, loot: 'webbing' },
  { name: 'Nymph', level: 3, loot: 'hanky' },
  { name: 'Ochre Jelly', level: 6, loot: 'nucleus' },
  { name: 'Octopus', level: 2, loot: 'beak' },
  { name: 'Ogre', level: 4, loot: 'talon' },
  { name: 'Ogre Mage', level: 5, loot: 'apparel' },
  { name: 'Orc', level: 1, loot: 'snout' },
  { name: 'Otyugh', level: 7, loot: 'organ' },
  { name: 'Owlbear', level: 5, loot: 'feather' },
  { name: 'Pegasus', level: 4, loot: 'aileron' },
  { name: 'Peryton', level: 4, loot: 'antler' },
  { name: 'Piercer', level: 3, loot: 'tip' },
  { name: 'Pixie', level: 1, loot: 'dust' },
  { name: 'Man-o-war', level: 3, loot: 'tentacle' },
  { name: 'Purple Worm', level: 15, loot: 'dung' },
  { name: 'Quasit', level: 3, loot: 'tail' },
  { name: 'Rakshasa', level: 7, loot: 'pajamas' },
  { name: 'Rat', level: 0, loot: 'tail' },
  { name: 'Remorhaz', level: 11, loot: 'protrusion' },
  { name: 'Roc', level: 18, loot: 'wing' },
  { name: 'Roper', level: 11, loot: 'twine' },
  { name: 'Rot Grub', level: 1, loot: 'eggsac' },
  { name: 'Rust Monster', level: 5, loot: 'shavings' },
  { name: 'Satyr', level: 5, loot: 'hoof' },
  { name: 'Sea Hag', level: 3, loot: 'wart' },
  { name: 'Silkie', level: 3, loot: 'fur' },
  { name: 'Shadow', level: 3, loot: 'silhouette' },
  { name: 'Shambling Mound', level: 10, loot: 'mulch' },
  { name: 'Shedu', level: 9, loot: 'hoof' },
  { name: 'Shrieker', level: 3, loot: 'stalk' },
  { name: 'Skeleton', level: 1, loot: 'clavicle' },
  { name: 'Spectre', level: 7, loot: 'vestige' },
  { name: 'Sphinx', level: 10, loot: 'paw' },
  { name: 'Spider', level: 0, loot: 'web' },
  { name: 'Sprite', level: 1, loot: 'can' },
  { name: 'Stirge', level: 1, loot: 'proboscis' },
  { name: 'Stun Bear', level: 5, loot: 'tooth' },
  { name: 'Stun Worm', level: 2, loot: 'trode' },
  { name: 'Su-monster', level: 5, loot: 'tail' },
  { name: 'Sylph', level: 3, loot: 'thigh' },
  { name: 'Titan', level: 20, loot: 'sandal' },
  { name: 'Trapper', level: 12, loot: 'shag' },
  { name: 'Treant', level: 10, loot: 'acorn' },
  { name: 'Triton', level: 3, loot: 'scale' },
  { name: 'Troglodyte', level: 2, loot: 'tail' },
  { name: 'Troll', level: 6, loot: 'hide' },
  { name: 'Umber Hulk', level: 8, loot: 'claw' },
  { name: 'Unicorn', level: 4, loot: 'blood' },
  { name: 'Vampire', level: 8, loot: 'pancreas' },
  { name: 'Wight', level: 4, loot: 'lung' },
  { name: "Will-o'-the-Wisp", level: 9, loot: 'wisp' },
  { name: 'Wraith', level: 5, loot: 'finger' },
  { name: 'Wyvern', level: 7, loot: 'wing' },
  { name: 'Xorn', level: 7, loot: 'jaw' },
  { name: 'Yeti', level: 4, loot: 'fur' },
  { name: 'Zombie', level: 2, loot: 'forehead' },
  { name: 'Wasp', level: 0, loot: 'stinger' },
  { name: 'Rat', level: 1, loot: 'tail' },
  { name: 'Bunny', level: 0, loot: 'ear' },
  { name: 'Moth', level: 0, loot: 'dust' },
  { name: 'Beagle', level: 0, loot: 'collar' },
  { name: 'Midge', level: 0, loot: 'corpse' },
  { name: 'Ostrich', level: 1, loot: 'beak' },
  { name: 'Billy Goat', level: 1, loot: 'beard' },
  { name: 'Bat', level: 1, loot: 'wing' },
  { name: 'Koala', level: 2, loot: 'heart' },
  { name: 'Wolf', level: 2, loot: 'paw' },
  { name: 'Whippet', level: 2, loot: 'collar' },
  { name: 'Uruk', level: 2, loot: 'boot' },
  { name: 'Poroid', level: 4, loot: 'node' },
  { name: 'Moakum', level: 8, loot: 'frenum' },
  { name: 'Fly', level: 0, loot: '*' },
  { name: 'Hogbird', level: 3, loot: 'curl' },
  { name: 'Wolog', level: 4, loot: 'lemma' }
];
window.K.MonMods = [
  '-4 fœtal *',
  '-4 dying *',
  '-3 crippled *',
  '-3 baby *',
  '-2 adolescent',
  '-2 very sick *',
  '-1 lesser *',
  '-1 undernourished *',
  '+1 greater *',
  '+1 * Elder',
  '+2 war *',
  '+2 Battle-*',
  '+3 Were-*',
  '+3 undead *',
  '+4 giant *',
  '+4 * Rex'
];

window.K.OffenseBad = [
  'Dull|-2',
  'Tarnished|-1',
  'Rusty|-3',
  'Padded|-5',
  'Bent|-4',
  'Mini|-4',
  'Rubber|-6',
  'Nerf|-7',
  'Unbalanced|-2'
];

window.K.DefenseBad = [
  'Holey|-1',
  'Patched|-1',
  'Threadbare|-2',
  'Faded|-1',
  'Rusty|-3',
  'Motheaten|-3',
  'Mildewed|-2',
  'Torn|-3',
  'Dented|-3',
  'Cursed|-5',
  'Plastic|-4',
  'Cracked|-4',
  'Warped|-3',
  'Corroded|-3'
];

window.K.Races = [
  'Half Orc|HP Max',
  'Half Man|CHA',
  'Half Halfling|DEX',
  'Double Hobbit|STR',
  'Hob-Hobbit|DEX,CON',
  'Low Elf|CON',
  'Dung Elf|WIS',
  'Talking Pony|MP Max,INT',
  'Gyrognome|DEX',
  'Lesser Dwarf|CON'
  // 'Crested Dwarf|CHA'
  // 'Eel Man|DEX',
  // 'Panda Man|CON,STR',
  // 'Trans-Kobold|WIS',
  // 'Enchanted Motorcycle|MP Max',
  // "Will o' the Wisp|WIS",
  // 'Battle-Finch|DEX,INT',
  // 'Double Wookiee|STR',
  // 'Skraeling|WIS',
  // 'Demicanadian|CON',
  // 'Land Squid|STR,HP Max'
];

window.K.Klasses = [
  'Ur-Paladin|WIS,CON',
  'Voodoo Princess|INT,CHA',
  'Robot Monk|STR',
  'Mu-Fu Monk|DEX',
  'Mage Illusioner|INT,MP Max',
  'Shiv-Knight|DEX',
  'Inner Mason|CON',
  'Fighter/Organist|CHA,STR',
  'Puma Burgular|DEX',
  'Runeloremaster|WIS'
  // 'Hunter Strangler|DEX,INT'
  // 'Battle-Felon|STR',
  // 'Tickle-Mimic|WIS,INT',
  // 'Slow Poisoner|CON',
  // 'Bastard Lunatic|CON',
  // 'Lowling|WIS',
  // 'Birdrider|WIS',
  // 'Vermineer|INT'
];

window.K.Titles = ['Mr.', 'Mrs.', 'Sir', 'Sgt.', 'Ms.', 'Captain', 'Chief', 'Admiral', 'Saint'];

window.K.ImpressiveTitles = [
  'King',
  'Queen',
  'Lord',
  'Lady',
  'Viceroy',
  'Mayor',
  'Prince',
  'Princess',
  'Chief',
  'Boss',
  'Archbishop'
];

Number.prototype.div = function(divisor) {
  const dividend = this / divisor;
  return (dividend < 0 ? Math.ceil : Math.floor)(dividend);
}; // where should this belong to?
