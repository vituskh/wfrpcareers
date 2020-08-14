const careers = [
  {
    name: 'Abbot',
    type: 'Advanced',
    mainstats: {
      ws: 10,
      bs: 0,
      s: 10,
      t: 10,
      ag: 10,
      int: 30,
      wp: 25,
      fel: 20
    },
    secondstats: {
      attacks: 0,
      wounds: 6,
      magic: 0
    },
    description: 'The eldest and wisest of monks eventually rise to become the leaders of their monasteries. Worshippers sometimes seek these abbots out to gain their advice on matters of faith or to gain greater understanding about the religious world, while priests and initiates answer to them in all things. Most abbots choose to remain secluded in their monasteries until death takes them, but some venture out into the wider world once again. Few abbots deign to get involved in temple politics, preferring the solitude of their own world or their journeys to the machinations of their cult. For this reason an abbot is rarely the head of a mendicant order, leaving the organisation and politicking to a high priest.',
    skills: [
      'Academic Knowledge (any two)',
      'Academic Knowledge (Theology)',
      'Animal Care',
      'Arcane Language (Magick)',
      'Charm',
      'Common Knowledge (any two)',
      'Gossip',
      'Heal',
      'Perception',
      'Read/Write',
      'Speak Language (any two)',
      'Speak Language (Classical)'
    ],
    talents: [
      'Master Orator',
      'Savvy',
      'Strong-Minded'
    ],
    trappings: [
      'Prayer Book',
      'Religious Relic',
      'Robes',
      'Writing Kit'
    ],
    entries: [
      'Anointed Priest',
      'High Priest',
      'Monk',
      'Scholar'
    ],
    exits: [
      'High Priest',
      'Scholar'
    ],
    notes: '',
    source: 'TOS'
  },
  {
    name: 'Admiral',
    type: 'Advanced',
    mainstats: {
      ws: 25,
      bs: 20,
      s: 15,
      t: 15,
      ag: 15,
      int: 30,
      wp: 30,
      fel: 35
    },
    secondstats: {
      attacks: 1,
      wounds: 6,
      magic: 0
    },
    description: 'Commanding a fleet of ships, Admirals are the true lords of the sea. While most are employed by one of the navies of the Old World, some Admirals are pirates commanding a flotilla of bloodthirsty marauders. Many Sea Captains envy their position, so Admirals must be quick-witted and charismatic to see off attacks; after all, once at sea, almost anything can happen, and only the survivors can tell the tale. Because of this, many Admirals are paranoid individuals who are jealous of their power, and most are quick to end any imagined mutiny with their loyal Marines or Pirates.',
    skills: [
      'Academic Knowledge (any one)',
      'Academic Knowledge (Strategy/Tactics)',
      'Charm or Dodge Blow',
      'Command',
      'Common Knowledge (any three)',
      'Intimidate',
      'Perception',
      'Read/Write',
      'Sail',
      'Speak Language (any three)',
      'Swim'
    ],
    talents: [
      'Etiquette or Seasonsed Traveller',
      'Linguistics',
      'Master Orater',
      'Public Speaking or Savvy'
    ],
    trappings: [
      'Admiral’s Whistle',
      'Bicorn or Tricorn',
      'Squadron of ships',
      'Telescope'
    ],
    entries: [
      'Noble Lord',
      'Sea Captain'
    ],
    exits: [
      'Ambassador',
      'Explorer',
      'Guild Master'
    ],
    notes: '',
    source: 'SoE'
  },
  {
    name: 'Agent of the Shroud',
    type: 'Advanced',
    mainstats: {
      ws: 15,
      bs: 10,
      s: 10,
      t: 10,
      ag: 20,
      int: 20,
      wp: 30,
      fel: 10
    },
    secondstats: {
      attacks: 1,
      wounds: 4,
      magic: 0
    },
    description: 'The splinter order of Morrites, known as the Fellowship of the Shroud, takes a much more active view of their duties to Morr than the mainstream cult. Its members include warriors, priests, and Vampire hunters, but in many situations, a far subtler hand is needed, and such are the abilities of the Agents of the Shroud. These scholarly types are trained in careful observation, medical examination, and logical deduction, so they may identify Vampire or Undead activity without being detected. Some of them turn their results over to more martially skilled members of their cult, but they are quite capable of enacting their own justice and putting an end to those the Fellowship call “the Enemies of Life.”.',
    skills: [
      'Academic Knowledge (Necromancy',
      'Theology',
      'plus any one)',
      'Charm',
      'Common Knowledge (The Empire, Tilea)',
      'Concealment',
      'Disguise',
      'Follow Trail',
      'Gossip',
      'Heal',
      'Intimidate',
      'Perception',
      'Read/Write',
      'Search',
      'Silent Move',
      'Shadowing',
      'Speak Language (any two)'
    ],
    talents: [
      'Coolheaded or Stout-Hearted',
      'Keen Senses or Sixth Sense',
      'Savvy or Suave',
      'Schemer'
    ],
    trappings: [
      'Medium Armour (Leather Jack',
      'Mail Shirt)',
      'Best Hand Weapon',
      '4 Stakes',
      'a braided rope of Garlic',
      'Religious Symbol'
    ],
    entries: [
      'Barber-Surgeon',
      'Fieldwarden',
      'Scholar',
      'Student',
      'Tomb Robber',
      'Vampire Hunter'
    ],
    exits: [
      'Killer of the Dead',
      'Priest (Morr only)',
      'Scholar',
      'Spy',
      'Vampire Hunter',
      'Witch Hunter',
      'Priest'
    ],
    notes: '',
    source: 'NDM'
  },
  {
    name: 'Agitator',
    type: 'Basic',
    mainstats: {
      ws: 5,
      bs: 5,
      s: 0,
      t: 0,
      ag: 5,
      int: 10,
      wp: 0,
      fel: 10
    },
    secondstats: {
      attacks: 0,
      wounds: 2,
      magic: 0
    },
    description: 'For the most part, the people of the Empire have little say in politics. ...',
    skills: [
      'Academic Knowledge (History) or Gossip',
      'Academic Knowledge (Law) or Common Knowledge (the Empire)',
      'Concealment',
      'Charm',
      'Perception',
      'Read/Write',
      'Speak Language (Breton or Tilean)',
      'Speak Language (Reikspiel)'
    ],
    talents: [
      'Coolheaded or Street Fighting',
      'Flee!',
      'Public Speaking'
    ],
    trappings: [
      'Light Armour (Leather Jack)',
      'One set of Good Craftsmenship Clothes',
      '2d10 leaflets for various causes'
    ],
    entries: [
      'Burgher',
      'Captain',
      'Herald',
      'Highwayman',
      'Scribe',
      'Servant',
      'Student',
      'Zealot',
      'Exciseman',
      'Lamplighter',
      'Litigant',
      'Newssheet Vendor',
      'Seer',
      'Skald'
    ],
    exits: [
      'Charlatan',
      'Demagogue',
      'Outlaw',
      'Politician',
      'Rogue',
      'Zealot',
      'Ex-Convict',
      'Herrimault',
      'Pamphleteer',
      'Raconteur'
    ],
    notes: '',
    source: 'WHFR'
  },
  {
    name: 'Ambassador',
    type: 'Advanced',
    mainstats: {
      ws: 10,
      bs: 10,
      s: 5,
      t: 10,
      ag: 10,
      int: 30,
      wp: 30,
      fel: 40
    },
    secondstats: {
      attacks: 0,
      wounds: 6,
      magic: 0
    },
    description: 'Granted the right to speak on behalf of their sovereign, ambassadors can wield much power in the various national and provincial capitals of the Old World. In Kislev, ambassadors work tirelessly from their well-guarded embassies, keen to do whatever is necessary to catch the Ice Queen’s eye. While some ambassadors are chosen for their exquisite tastes and ability to spoil rivals and allies alike with carefully chosen words and gifts, others may be selected for their sharp minds, understanding of intelligence networks, or undeniable charisma. Whatever their individual strengths, all ambassadors are of noble birth, for the Tzarina would never deign to meet a foreign peasant.',
    skills: [
      'Academic Knowledge (Genealogy/Heraldry or History)',
      'Blather or Charm',
      'Command',
      'Common Knowledge (any two)',
      'Gossip',
      'Haggle',
      'Perception',
      'Performer (Actor)',
      'Read/Write',
      'Ride',
      'Speak Language (any three)'
    ],
    talents: [
      'Dealmaker or Schemer',
      'Etiquette',
      'Linguistics or Suave',
      'Master Orator or Savvy',
      'Public Speaking'
    ],
    trappings: [
      'several sets of superior noble’s garb',
      'valuable jewellery',
      'a contingent of guards (no fewer than six)',
      'coin, jewellery, art objects, property, and so on worth no less than 1,000 gc'
    ],
    entries: [
      'Captain',
      'High Priest',
      'Ice Witch',
      'Noble Lord',
      'Wizard Lord',
      'Admiral'
    ],
    exits: [
      'Captain',
      'Merchant',
      'Noble Lord',
      'Politician'
    ],
    notes: 'You must be of noble birth (i.e. complete the Noble Career) and be appointed by a government.',
    source: 'RotIQ'
  },
  {
    name: 'Anchorite',
    type: 'Basic',
    mainstats: {
      ws: 0,
      bs: 5,
      s: 5,
      t: 10,
      ag: 10,
      int: 0,
      wp: 10,
      fel: 0
    },
    secondstats: {
      attacks: 0,
      wounds: 2,
      magic: 0
    },
    description: 'Some people feel that they can only follow their own mystical leanings alone, away from the distractions of civilisation, conversation, and soap. These individuals become Anchorites, staking claim to a cave, or the top of a pillar of rock, somewhere in the Borderlands. They have few or no possessions, so bandits rarely bother them. Greenskins and other monsters are still likely to kill them if they can catch them, so Anchorites learn how to hide and run away.',
    skills: [
      'Concealment',
      'Outdoor Survival',
      'Perception',
      'Scale Sheer Surface',
      'Silent Move'
    ],
    talents: [
      'Flee!',
      'Hardy',
      'Resistance to Poison',
      'Rover',
      'Stout-hearted'
    ],
    trappings: [
      'None'
    ],
    entries: [
      'None'
    ],
    exits: [
      'Badlander',
      'Mystic',
      'Outlaw',
      'Swamp Skimmer',
      'Vagabond'
    ],
    notes: '',
    source: 'RC'
  },
  {
    name: 'Animal Trainer',
    type: 'Advanced',
    mainstats: {
      ws: 10,
      bs: 10,
      s: 10,
      t: 10,
      ag: 15,
      int: 10,
      wp: 10,
      fel: 15
    },
    secondstats: {
      attacks: 0,
      wounds: 4,
      magic: 0
    },
    description: 'Animal trainers breed and train animals for transport, hunting or entertainment. Their most common job is breeding riding horses and destriers for the horse markets, but animal trainers are also skilled dog and bird handlers that accompany nobles’ hunting parties. Carnivals employ animal trainers as ringmasters to delight the masses with dancing bears and prancing ponies. Animal trainers can also serve the role of beast handlers in pit fighting arenas, though little effort is expended training the ornery fighting animals that were originally captured in the wild. Though Kislevite bear tamers are famous for their ability to train wild bears, most trained animals are born in captivity.',
    skills: [
      'Animal Care',
      'Animal Training',
      'Charm Animal',
      'Command',
      'Common Knowledge (any one)',
      'Drive or Swim',
      'Perception',
      'Ride',
      'Speak Language (any one)',
      'Trade (any two: Aviarist',
      'Horse trader',
      'Kennel master or Stableman)'
    ],
    talents: [
      'Etiquette or Wrestling',
      'Specialist Weapon (Entangling)',
      'Strike to Stun'
    ],
    trappings: [
      'Collar with 10 Feet of Rope or Chain',
      'Light Armour (Leather Jack)',
      'Net',
      'Thick Gloves',
      'Whip'
    ],
    entries: [
      'Bear Tamer',
      'Entertainer',
      'Farmer',
      'Hunter',
      'Muleskinner',
      'Peasant',
      'Rat Catcher'
    ],
    exits: [
      'Bear Tamer',
      'Entertainer',
      'Hunter'
    ],
    notes: '',
    source: 'CC'
  },
  {
    name: 'Anointed Priest',
    type: 'Advanced',
    mainstats: {
      ws: 15,
      bs: 15,
      s: 10,
      t: 10,
      ag: 10,
      int: 15,
      wp: 25,
      fel: 20
    },
    secondstats: {
      attacks: 1,
      wounds: 5,
      magic: 2
    },
    description: 'A priest who has consistently upheld the tenets of his church is chosen by his God to take on greater power and responsibility. Anointed Priests are gifted with the Divine Lore of the deity they serve and consequently, they’re expected to take on challenges suitable to their new blessings. They often have all the attributes that their God admires, acting as beacons of faith to others in the Old World. Anointed Priests are greatly trusted by the common folk, who will often listen to them over both Nobles and Politicians, granting them a great deal of temporal power to complement the spiritual.',
    skills: [
      'Academic Knowledge (any two)',
      'Academic Knowledge (Theology)',
      'Channelling',
      'Charm',
      'Common Knowledge (any two)',
      'Gossip',
      'Heal',
      'Magical Sense',
      'Ride or Swim',
      'Speack Arcane Language (Magick)',
      'Speak Language (any two)'
    ],
    talents: [
      'Aethyric Attunement or Meditiation',
      'Armoured Casting or Fast Hands',
      'Divine Lore (ant one)',
      'Lesser Magic (any two)',
      'Seasoned Traveller or Strike Mighty Blow'
    ],
    trappings: [
      'Noble\'s Garb'
    ],
    entries: [
      'Priest',
      'Exorcist'
    ],
    exits: [
      'Demagogue',
      'Exorcist',
      'Flagellant',
      'High Priest',
      'Scholar',
      'Witch Hunter',
      'Abbot',
      'Cantor',
      'Catechist',
      'Cult Attendant',
      'Warrior Priest'
    ],
    notes: '',
    source: 'WHFR'
  },
  {
    name: 'Apothecary',
    type: 'Basic',
    mainstats: {
      ws: 0,
      bs: 0,
      s: 0,
      t: 5,
      ag: 5,
      int: 10,
      wp: 10,
      fel: 5
    },
    secondstats: {
      attacks: 0,
      wounds: 2,
      magic: 0
    },
    description: 'While physicians prescribe cures for their patients’ various ills, it is the apothecary who actually makes the medicine. Specialists in minerals, chemicals, and salts derived from organic matter, the apothecary mixes powders to be taken with wine, unguents to apply to infected areas, and medicinal incenses to drive away unhealthy vapours. Guild law allows them to prescribe for minor ailments, such as a cold or stomach-ache, but few do since many physicians are resentful of the competition. While some apothecaries move on to higher careers in medicine or academia, others turn their knowledge to personal greed or succumb to a desire to harm others. Some apothecaries have been known to feed their clients drugs disguised as medicine, forcing them to come back and pay higher prices to feed their addiction, while others sell their services as poisoners, splitting the profits with an aggrieved widow or heir.',
    skills: [
      'Academic Knowledge (Science)',
      'Gossip',
      'Haggle',
      'Heal or Prepare Poison',
      'Perception',
      'Read/Write',
      'Secret Language (Guild Tongue)',
      'Speak Language (Classical)',
      'Trade (Apothecary)'
    ],
    talents: [
      'Etiquette or Resistance to Poison',
      'Suave or Very Resilient'
    ],
    trappings: [
      '  Healing Draught',
      'Light Armour (Leather Jerkin)',
      'Trade Tools (Apothecary’s Kit)'
    ],
    entries: [
      'Apprentice Wizard',
      'Barber-Surgeon',
      'Hedge Wizard',
      'Student',
      'Hedgecraft Apprentice'
    ],
    exits: [
      'Apprentice Wizard',
      'Artisan',
      'Barber-Surgeon',
      'Embalmer',
      'Grave Robber',
      'Merchant',
      'Physician',
      'Scholar',
      'Astrologer',
      'Hedgecraft Apprentice'
    ],
    notes: '',
    source: 'Sigmar\'s Heir'
  },
  {
    name: 'Apprentice Runesmith',
    type: 'Basic',
    mainstats: {
      ws: 5,
      bs: 0,
      s: 5,
      t: 0,
      ag: 0,
      int: 10,
      wp: 15,
      fel: 0
    },
    secondstats: {
      attacks: 0,
      wounds: 2,
      magic: 1
    },
    description: 'The Runesmiths are effectively a clan containing a few ancient families who have passed down the knowledge and skills of Runesmithing over the generations. Each Master Runesmith teaches the fundamentals of fire and forge to young members of his family, selecting the most talented to become Apprentice Runesmiths. While selection is a great honour, it means long years of study and service to his master in the creation of more complicated runes. Runesmiths rarely write down the secrets of their craft and even when they do, the knowledge is buried beneath riddles and puzzles. Apprentices must be patient, clever, and perceptive to rise in status. During this time Apprentice Runesmiths often leave the service of their mentor to gather ingredients, tools, and supplies for the forging of new runes.',
    skills: [
      'Academic Knowledge (Runes)',
      'Evaluate',
      'Perception',
      'Read/Write',
      'Runecraft',
      'Speak Arcane Language (Arcane Dwarf)',
      'Trade (Smith)',
      'Trade (Armourer or Weaponsmith)'
    ],
    talents: [
      'Rune (any two with an Inscription Number of 10 or less)'
    ],
    trappings: [
      'Medium Armour (Leather Jack',
      'Mail Shirt)',
      'Trade Tools (Runesmith)'
    ],
    entries: [
      'Artisan',
      'Runebearer',
      'Scribe',
      'Student'
    ],
    exits: [
      'Journeyman Runesmith',
      'Runebearer',
      'Scholar',
      'Scribe',
      'Shieldbreaker'
    ],
    notes: 'Only Dwarfs can enter this career.',
    source: 'Realms of Sorcery'
  },
  {
    name: 'Apprentice Witch',
    type: 'Basic',
    mainstats: {
      ws: 0,
      bs: 0,
      s: 0,
      t: 10,
      ag: 5,
      int: 10,
      wp: 10,
      fel: 0
    },
    secondstats: {
      attacks: 0,
      wounds: 2,
      magic: 1
    },
    description: 'Every year, ice witches emerge from the frozen oblast to assess shivering Gospodar girls. The rare girl demonstrating magical talent is taken away and is unlikely to see her family again. Barely old enough to be called women, these apprentices-to-be are led into the depths of Kislev’s cruel winter, and there, they are taught the ways of the Khan-Queens of old. Those who survive (and many do not) are forever changed: they are cold, aloof, mature well beyond their years, and very aware of their insignificance beside the might of the Ancient Widow’s glacial heart. Eventually, these successful apprentices will be released from their mistresses and allowed to venture forth as “maidens of the ice.”.',
    skills: [
      'Academic Knowledge (Magic) or Intimidate',
      'Channelling',
      'Common Knowledge (Kislev)',
      'Magical Sense',
      'Navigation or Perception',
      'Outdoor Survival',
      'Speak Arcane Language (Magick)',
      'Speak Language (Kislevarin)'
    ],
    talents: [
      'Aethyric Attunement or Lesser Magic (any one)',
      'Hardy or Very Resilient',
      'Petty Magic (Ice)'
    ],
    trappings: [
      'sturdy suit of winter clothing',
      'a pack or sling bag',
      'a flask of kvas',
      'few days of rations.'
    ],
    entries: [
      'None'
    ],
    exits: [
      'Ice Maiden',
      'Initiate (of Ulric)',
      'Witch',
      'Initiate'
    ],
    notes: 'You must be female to enter this career.',
    source: 'RotIQ'
  },
  {
    name: 'Apprentice Wizard',
    type: 'Basic',
    mainstats: {
      ws: 0,
      bs: 0,
      s: 0,
      t: 0,
      ag: 5,
      int: 10,
      wp: 15,
      fel: 5
    },
    secondstats: {
      attacks: 0,
      wounds: 2,
      magic: 1
    },
    description: 'Humans born with magical talents are dangerous and feared individuals.',
    skills: [
      'Academic Knowledge (Magic)',
      'Channelling',
      'Magical Sense',
      'Perception',
      'Read/Write',
      'Search',
      'Speak Arcane Languages (Magick)',
      'Speak Language (Classical)'
    ],
    talents: [
      'Aethyric Attunement or Fast Hands',
      'Petty Magic (Arcane)',
      'Savvy or Very Resilient'
    ],
    trappings: [
      'Quarter Staff',
      'Backpack',
      'Printed Book'
    ],
    entries: [
      'Hedge Wizard',
      'Scholar',
      'Scribe',
      'Student',
      'Apothecary',
      'Astrologer',
      'Dilettante',
      'Embalmer',
      'Hedgecraft Apprentice',
      'Warlock',
      'Witch'
    ],
    exits: [
      'Journeyman Wizard',
      'Scholar',
      'Scribe',
      'Apothecary',
      'Astrologer'
    ],
    notes: 'If you want to be able to cast spells right away, you should increase your Magic Characteristic with your free advance during character creation.',
    source: 'WHFR'
  },
  {
    name: 'Artillerist',
    type: 'Advanced',
    mainstats: {
      ws: 15,
      bs: 25,
      s: 10,
      t: 10,
      ag: 15,
      int: 30,
      wp: 15,
      fel: 0
    },
    secondstats: {
      attacks: 0,
      wounds: 5,
      magic: 0
    },
    description: 'The Artillerist is skilled at operating all manner of siege weapons, from the ballista to the trebuchet, and even gunpowder devices like the cannon, mortar and Hellblaster Volley Gun of the Imperial arsenal. Field repairs are often necessary when a wheel breaks or a gun carriage cracks, and a smart Artillerist quickly learns how to make  temporary repairs to ensure minimal interruption in firing rate. Artillerists rely on teamwork and command groups of Engineers to operate their weapons  effectively. They are rarely found outside of a large army.  Part engineer, part soldier, and all target, Artillerists must learn to take care of themselves on the battlefield. Generally they are far enough behind the battle lines to be out of danger, but the effectiveness of their weaponry makes them favourite targets for enemy missile fire, flying creatures, and magical attacks. Also, moving the various engines around is hard work under the best of conditions; over muddy, rutted, rock-strewn battlefields it can be an endurance test with lives hanging in the balance. The career of an Artillerist is not all glory, as is frequently supposed.',
    skills: [
      'Academic Knowledge (Engineering)',
      'Academic Knowledge (Science)',
      'Command',
      'Drive',
      'Perception',
      'Secret Language (Battle Tongue)',
      'Trade (Gunsmith)'
    ],
    talents: [
      'Coolheaded',
      'Marksman',
      'Mighty Shot',
      'Rapid Reload',
      'Sharpshooter',
      'Specialist Weapon Group (Engineering or Gunpowder)',
      'Sure Shot'
    ],
    trappings: [
      'Light Armour (Leather Jack)',
      'Firearm with ammunition and powder for 10 shots',
      'Engineer’s Kit',
      'Telescope'
    ],
    entries: [
      'Engineer',
      'Sergeant'
    ],
    exits: [
      'Artisan',
      'Captain',
      'Guild Master',
      'Mercenary',
      'Veteran'
    ],
    notes: '',
    source: 'Companion'
  },
  {
    name: 'Artisan',
    type: 'Advanced',
    mainstats: {
      ws: 0,
      bs: 0,
      s: 10,
      t: 10,
      ag: 20,
      int: 10,
      wp: 10,
      fel: 10
    },
    secondstats: {
      attacks: 0,
      wounds: 3,
      magic: 0
    },
    description: 'Artisans are skilled craftsmen and masters of their trades. Most commonly found in towns and cities, Artisans are organized into a bewildering variety of guilds. The best craftsmen are attracted to the largest cities, such as Altdorf, Marienburg and Nuln. There they can command high prices from the richest clientele, or work with Merchants who can sell their goods in more distant locales. Some Artisans are so famous that even Nobles must put their names on waiting lists, for to have the work of a renowned master is sign of status. The masterwork of an Artisan is truly something to behold.',
    skills: [
      'Drive',
      'Evaluate',
      'GOssip',
      'Haggle',
      'Perception',
      'Secret Language (Guild Tongue)',
      'Speak Language (Khazalid or Breton or Tilean)',
      'Trade (any three)'
    ],
    talents: [
      'Artistic or Etiquette'
    ],
    trappings: [
      'Trade Tools (according to Trade)',
      '15 gc'
    ],
    entries: [
      'Engineer',
      'Militiaman',
      'Navigator',
      'Tradesman',
      'Apothecary',
      'Artillerist',
      'Cartographer',
      'Forger',
      'Freeholder',
      'Hedgemaster'
    ],
    exits: [
      'Apprentice Runesmith',
      'Demagogue',
      'Engineer',
      'Guild Master',
      'Merchant',
      'Militiaman',
      'Forger',
      'Pamphleteer'
    ],
    notes: '',
    source: 'WHFR'
  },
  {
    name: 'Assassin',
    type: 'Advanced',
    mainstats: {
      ws: 25,
      bs: 25,
      s: 10,
      t: 10,
      ag: 30,
      int: 20,
      wp: 10,
      fel: 20
    },
    secondstats: {
      attacks: 2,
      wounds: 4,
      magic: 0
    },
    description: 'Killing for money is not unusual in the Old World. Soldiers and Mercenaries do it every day. Few sell swords achieve the Assassin’s level of lethality, however. These hired killers are expertly trained and deadly with a variety of weapons. Many also master the poisoner’s art. The best Assassins can dispatch their targets in a matter of seconds, leaving behind no evidence of their presence. Their services are much sought after by political and even religious bodies. Few Assassins care where the commissions come from. They only want a challenging mission and a fat purse for their fee. While most Assassins are loners, a rare few have organized into guilds.',
    skills: [
      'Concealment',
      'Disguise',
      'Gossip',
      'Perception',
      'Prepare Poison',
      'Scale Sheer Surface',
      'Secret Signs (Thief)',
      'Shadowing',
      'Silent Move'
    ],
    talents: [
      'Quick Draw',
      'Lightning Parry',
      'Sharpshooter',
      'Specialist Weapon Group (Entangling)',
      'Specialist Weapon Group (Parrying)',
      'Specialist Weapon Group (Throwing)',
      'Street Fighting',
      'Streetwise',
      'Swashbuckler'
    ],
    trappings: [
      'Net',
      '4 Throwing Knives',
      'Grappling Hook',
      '10 yards of Rope',
      '1 dose on Poison (any)'
    ],
    entries: [
      'Champion',
      'Duellist',
      'Judicial Champion',
      'Outlaw Chief',
      'Spy',
      'Targeteer',
      'Border Courtier',
      'Cloaked Brother'
    ],
    exits: [
      'Champion',
      'Outlaw Chief',
      'Rogue',
      'Sergeant',
      'Witch Hunter',
      'Cloaked Brother'
    ],
    notes: '',
    source: 'WHFR'
  },
  {
    name: 'Astrologer',
    type: 'Advanced',
    mainstats: {
      ws: 5,
      bs: 5,
      s: 0,
      t: 5,
      ag: 10,
      int: 25,
      wp: 20,
      fel: 20
    },
    secondstats: {
      attacks: 0,
      wounds: 4,
      magic: 0
    },
    description: 'The future is a frightening thing for many people: war, the threat of chaos, disease, financial ruin, and betrayal – there is so much to worry about. People have many questions about the future, and the astrologer is there to supply the answers, whether or not she knows what she is talking about. Surrounded by star charts and arcane equipment, the astrologer seeks answers by charting the motions and relative positions of the planets in the heavens. Some are genuinely talented and try to do their best, while others are little better than fakers who tell their clients whatever they want to hear. Nobles and other powerful people are suspicious of those who can tell their future and zealously guard the time of their births. To cast the horoscope of a ruler without permission is considered treason, and many an astrologer has had to make a hasty exit after just trying to satisfy their curiosity.',
    skills: [
      'Academic Knowledge (Astronomy)',
      'Academic Knowledge (Science)',
      'Charm',
      'Common Knowledge (the Empire)',
      'Common Knowledge (Bretonnia',
      'Estalia',
      'Kislev',
      'or Tilea)',
      'Gossip',
      'Navigation',
      'Perception',
      'Performer (Storyteller)',
      'Read/Write',
      'Secret Signs (Astrologer)',
      'Speak Language (Classical)',
      'Speak Language (Breton',
      'Estalian',
      'Kislevian',
      'or Tilean)'
    ],
    talents: [
      'Etiquette or Flee!',
      'Luck or Super Numerate'
    ],
    trappings: [
      'Book of Star Charts',
      'Telescope',
      'Trade Tools (Astrologer’s Kit)',
      'Writing Kit'
    ],
    entries: [
      'Apothecary',
      'Apprentice Wizard',
      'Charlatan',
      'Dilettante',
      'Journeyman Wizard',
      'Master Wizard',
      'Navigator',
      'Noble',
      'Physician',
      'Scholar',
      'Student',
      'Strigany Mystic'
    ],
    exits: [
      'Apprentice Wizard',
      'Charlatan',
      'Explorer',
      'Navigator',
      'Scholar'
    ],
    notes: '',
    source: 'Sigmar\'s Heir'
  },
  {
    name: 'Ataman',
    type: 'Advanced',
    mainstats: {
      ws: 10,
      bs: 10,
      s: 5,
      t: 15,
      ag: 5,
      int: 30,
      wp: 20,
      fel: 25
    },
    secondstats: {
      attacks: 0,
      wounds: 4,
      magic: 0
    },
    description: 'Most oblast communities are led by atamans (female: atamankas). Gospodar atamans are normally druzhina whose families have ruled locally for generations. By comparison, most Ungols elect their atamans or select them according to obscure (often martial) traditions, for most of their noble bloodlines were wiped out by the Gospodars long ago. Atamans bear great responsibilities, for all important local matters are decided by them, especially those concerning security and law. Further, if there are no local priests, atamans also take on the responsibility for the spiritual wellbeing of their people, leading religious rites and ceremonies.',
    skills: [
      'Academic Knowledge (History or Law',
      'Strategy Tactics or Theology)',
      'Charm or Intimidate',
      'Command',
      'Common Knowledge (Kislev or Troll Country)',
      'Gossip or Outdoor Survival',
      'Haggle',
      'Perception',
      'Ride',
      'Speak Language (Kislevarin)'
    ],
    talents: [
      'Coolheaded or Suave',
      'Public Speaking'
    ],
    trappings: [
      'Ceremonial mace (Superior Hand Weapon) recognised as a symbol of authority throughout Kislev.'
    ],
    entries: [
      'Captain',
      'Horse Master',
      'Noble',
      'Veteran',
      'Steppes Nomad'
    ],
    exits: [
      'Politician',
      'Priest',
      'Noble Lord'
    ],
    notes: '',
    source: 'RotIQ'
  },
  {
    name: 'Badlander',
    type: 'Basic',
    mainstats: {
      ws: 5,
      bs: 5,
      s: 10,
      t: 0,
      ag: 10,
      int: 5,
      wp: 0,
      fel: 0
    },
    secondstats: {
      attacks: 0,
      wounds: 2,
      magic: 0
    },
    description: 'Badlanders, as the name suggests, live in the badlands of the Border Princes. These areas are often mazes of broken rock, containing little water and less life, and what life is present is unpalatable at best and hostile at worst. They have to travel constantly around the area to find food and water, which also makes it relatively easy for them to hide. A surprisingly high proportion of Badlanders have previous careers from which they are hiding; those who don’t tend to dream of doing something worth hiding from.',
    skills: [
      'Concealment',
      'Follow Trail',
      'Outdoor Survival',
      'Navigation',
      'Perception',
      'Scale Sheer Surface',
      'Search',
      'Silent Move'
    ],
    talents: [
      'Orientation',
      'Sixth Sense'
    ],
    trappings: [
      'Climbing Equipment'
    ],
    entries: [
      'Anchorite',
      'Peasant',
      'Vagabond'
    ],
    exits: [
      'Cat Burglar',
      'Vagabond'
    ],
    notes: '',
    source: 'RC'
  },
  {
    name: 'Badlands Ranger',
    type: 'Advanced',
    mainstats: {
      ws: 20,
      bs: 20,
      s: 10,
      t: 20,
      ag: 25,
      int: 20,
      wp: 20,
      fel: 5
    },
    secondstats: {
      attacks: 0,
      wounds: 7,
      magic: 0
    },
    description: 'The Badlands Ranger is an experienced individual familiar with the hazards of the area and able to lead others safely through them. A trustworthy Badlands Ranger is worth a great deal of money, and they charge a great deal of money to those who want their services. Threatening them rarely works because they can survive almost any situation in the region. They will simply leave their obnoxious employers to die.',
    skills: [
      'Common Knowledge (Border Princes)',
      'Concealment',
      'Dodge Blow',
      'Follow Trail',
      'Navigation',
      'Outdoor Survival',
      'Perception',
      'Scale Sheer Surface',
      'Secret Language (Ranger Tongue)',
      'Secret Signs (Scout)',
      'Set Trap',
      'Silent Move',
      'Swim'
    ],
    talents: [
      'Flee!',
      'Orientation',
      'Rover',
      'Sixth Sense',
      'Very Resilient'
    ],
    trappings: [
      'Medium Armour (Mail Shirt and Leather Jack)',
      '10 yards of Rope'
    ],
    entries: [
      'Explorer',
      'Outlaw Chief',
      'Scout'
    ],
    exits: [
      'Captain',
      'Explorer',
      'Outlaw Chief'
    ],
    notes: '',
    source: 'RC'
  },
  {
    name: 'Bailiff',
    type: 'Basic',
    mainstats: {
      ws: 5,
      bs: 5,
      s: 5,
      t: 0,
      ag: 0,
      int: 10,
      wp: 5,
      fel: 10
    },
    secondstats: {
      attacks: 0,
      wounds: 2,
      magic: 0
    },
    description: 'Bailiffs are manorial officials in the service of Noble Lord.',
    skills: [
      'Academic Knowledge (Law)',
      'Animal Care or Gossip',
      'Charm',
      'Command or Navigation',
      'Intimidate or Common Knowledge (the Empire)',
      'Perception',
      'Read/Write',
      'Ride'
    ],
    talents: [
      'Etiquette or Super Numerate',
      'Public Speaking'
    ],
    trappings: [
      'Light Armour (Leather Jack and Leather Skullcap)',
      'Riding Horse with Saddle and Harness',
      'One Set of Good Craftmanship Clothing'
    ],
    entries: [
      'Bodyguard',
      'Jailer'
    ],
    exits: [
      'Militiaman',
      'Politician',
      'Protagonist',
      'Racketeer',
      'Smuggler',
      'Toll Keeper'
    ],
    notes: '',
    source: 'WHFR'
  },
  {
    name: 'Barber-Surgeon',
    type: 'Basic',
    mainstats: {
      ws: 5,
      bs: 0,
      s: 0,
      t: 0,
      ag: 10,
      int: 10,
      wp: 10,
      fel: 5
    },
    secondstats: {
      attacks: 0,
      wounds: 2,
      magic: 0
    },
    description: 'Barber-Surgeons provide painful but effective healing to the common folk of the Empire. They are not as learned as Physicians, which is why Physicians maintain a separate guild, but they know quite a lot about anatomy. While they do cut hair and shave, they are more noted for their bleedings, surgeries, and amputations. Barber-Surgeons carry a variety of razor-sharp blades, from small scalpels to enormous bone saws. They have even more sinister looking tools for the most hated of their avocations: dentistry. Many large ships have a dedicated Barber-Surgeon as part of the crew, they are also common in towns and cities.',
    skills: [
      'Charm',
      'Drive or Swim',
      'Haggle',
      'Heal',
      'Perception',
      'Read/Write',
      'Speak Language (Breton, Reikspiel, or Tilean)',
      'Trade (Apothecary)'
    ],
    talents: [
      'Resistance to Disease or Savvy',
      'Suave or Very Resilient',
      'Surgery'
    ],
    trappings: [
      'Trade Tools (Barber-Surgeon)'
    ],
    entries: [
      'Initiate',
      'Student',
      'Apothecary',
      'Dilettante',
      'Hedgecraft Apprentice'
    ],
    exits: [
      'Interrogator',
      'Grave Robber',
      'Physician',
      'Tradesman',
      'Vagabond',
      'Agent of the Shroud',
      'Apothecary',
      'Embalmer'
    ],
    notes: '',
    source: 'WHFR'
  },
  {
    name: 'Battle Pilgrim',
    type: 'Advanced',
    mainstats: {
      ws: 20,
      bs: 10,
      s: 10,
      t: 10,
      ag: 15,
      int: 10,
      wp: 10,
      fel: 10
    },
    secondstats: {
      attacks: 1,
      wounds: 6,
      magic: 0
    },
    description: 'Battle Pilgrims are Grail Pilgrims who have survived following their Grail Knight for some time. As a result, they have become competent fighters. In most cases, they have also become even more fervent admirers of their Grail Knight and worshippers of the Lady of the Lake, having seen what the flower of Bretonnian chivalry is truly capable of. Battle Pilgrims are the effective leaders of groups of Grail Pilgrims, as the Grail Knight never condescends to give orders to peasant rabble. Some Grail Pilgrims resent taking orders from someone no better than they, so Battle Pilgrims often have to impose order by force. Wiser Grail Pilgrims note that their chances of survival are greatly increased by doing as the Battle Pilgrims say.',
    skills: [
      'Charm',
      'Command',
      'Common Knowledge (Bretonnia)',
      'Dodge Blow',
      'Haggle',
      'Intimidate',
      'Outdoor Survival',
      'Perception'
    ],
    talents: [
      'Flee!',
      'Hardy',
      'Public Speaking',
      'Stout-hearted',
      'Strike to Stun',
      'Strong-minded',
      'Very Resilient',
      'Very Strong'
    ],
    trappings: [
      'Halberd',
      'Bow and 20 Arrows',
      'Medium Armour (Full Mail Armour)'
    ],
    entries: [
      'Grail Pilgrim'
    ],
    exits: [
      'Faceless',
      'Sergeant',
      'Vagabond',
      'Veteran'
    ],
    notes: 'Women may only become Battle Pilgrims if they are disguised as men, nobles only if they are disguised as peasants.',
    source: 'KotG'
  },
  {
    name: 'Bear Tamer',
    type: 'Basic',
    mainstats: {
      ws: 5,
      bs: 0,
      s: 10,
      t: 5,
      ag: 5,
      int: 0,
      wp: 10,
      fel: 5
    },
    secondstats: {
      attacks: 0,
      wounds: 2,
      magic: 0
    },
    description: 'The bear is sacred in Kislev. It features in the myths and legends of both tribes and is venerated by the powerful Cult of Ursun. Bears are perceived as living embodiments of the land’s enduring might and strength, and the struggles all Kislevites must endure. Therefore, boyars often recruit bear tamers to support their armed forces, keeping bears as inspiring mascots and sometimes for use in war. As Kislevites gather in great numbers to see bears, bear trainers are also common in Kislev’s famous circuses and on the streets during festival time, where they dance or show-wrestle for coin.',
    skills: [
      'Animal Care',
      'Animal Training',
      'Charm Animal',
      'Consume Alcohol or Gossip',
      'Perception or Performer (any one)',
      'Speak Language (Kislevarin)'
    ],
    talents: [
      'Coolheaded or Very Strong',
      'Lightning Reflexes or Public Speaking',
      'Very Resilient or Wrestling'
    ],
    trappings: [
      'leather jacks',
      'a collar and chain',
      'a whip or goad',
      'a bear'
    ],
    entries: [
      'Entertainer',
      'Animal Trainer'
    ],
    exits: [
      'Animal Trainer',
      'Entertainer',
      'Pit Fighter',
      'Soldier'
    ],
    notes: '',
    source: 'RotIQ'
  },
  {
    name: 'Black Guard',
    type: 'Advanced',
    mainstats: {
      ws: 25,
      bs: 15,
      s: 10,
      t: 15,
      ag: 15,
      int: 5,
      wp: 20,
      fel: 0
    },
    secondstats: {
      attacks: 1,
      wounds: 4,
      magic: 0
    },
    description: 'Whilst the cult of Morr has few, if any, official templars, they do have the Black Guard. These universally dour and serious warriors have an even more serious responsibility: to guard both the living and the dead from the endless malice of the Undead and those who would raise them. For the most part, they are a defensive order, protecting the great temples and graveyards of the Empire and the dignitaries of the cult, only riding to war in exceptional circumstances, such as during a crusade against the Vampire counts. Unlike most knights, they are trained in the use of ranged weapons to prevent their enemies from bringing their strength to bear in close quarters. This, along with their foreboding black obsidian armour and their strict vow of silence when on duty, means they are shunned by most other knightly orders, but such is the price of duty.',
    skills: [
      'Academic Knowledge (Necromancy',
      'Theology)',
      'Dodge Blow',
      'Intimidate',
      'Perception',
      'Ride',
      'Secret Language (Battle Tongue)',
      'Speak Language (any two)'
    ],
    talents: [
      'Menacing',
      'Mighty Shot or Strike Mighty Blow',
      'Sharpshooter or Sure Shot',
      'Specialist Weapon Group (Cavalry, Crossbow or Longbow, Two-handed)',
      'Stout-Hearted'
    ],
    trappings: [
      'Blessed Water',
      'Crossbow or Longbow',
      'Lance',
      'Destrier with Saddle and Harness',
      'Heavy Armour (Full Plate)',
      'Medallion of the Raven'
    ],
    entries: [
      'Knight',
      'Sergeant',
      'Squire',
      'Vampire Hunter',
      'Witch Hunter'
    ],
    exits: [
      'Captain',
      'Champion',
      'Priest (Morr only)',
      'Knight of the Inner Circle',
      'Knight of the Raven',
      'Vampire Hunter',
      'Killer of the Dead',
      'Priest'
    ],
    notes: '',
    source: 'NDM'
  },
  {
    name: 'Boatman',
    type: 'Basic',
    mainstats: {
      ws: 10,
      bs: 5,
      s: 5,
      t: 5,
      ag: 10,
      int: 5,
      wp: 0,
      fel: 0
    },
    secondstats: {
      attacks: 0,
      wounds: 2,
      magic: 0
    },
    description: 'The rivers of the Empire are vital arteries of communication and commerce. They provide speedy transportation and link most of the major cities of the realm. ...',
    skills: [
      'Common Knowledge (The Empire or Kislev)',
      'Consume Alcohol or Gossip',
      'Navigation',
      'Outdoor Survival',
      'Perception',
      'Row',
      'Sail',
      'Secret Language (Ranger) or Speak Language (Kislevian)',
      'Swim'
    ],
    talents: [
      'Orientation',
      'Seasoned Traveller'
    ],
    trappings: [
      'Light Armour (Leather Jack)',
      'Row Boat'
    ],
    entries: [
      'Ferryman',
      'Smuggler',
      'Frogwife',
      'Riverwarden',
      'Stevedore',
      'Wrecker'
    ],
    exits: [
      'Fisherman',
      'Marine',
      'Navigator',
      'Seaman',
      'Smuggler',
      'Riverwarden',
      'Stevedore',
      'Swampaire',
      'Wrecker'
    ],
    notes: '',
    source: 'WHFR'
  },
  {
    name: 'Bodyguard',
    type: 'Basic',
    mainstats: {
      ws: 10,
      bs: 0,
      s: 5,
      t: 5,
      ag: 5,
      int: 0,
      wp: 0,
      fel: 0
    },
    secondstats: {
      attacks: 1,
      wounds: 3,
      magic: 0
    },
    description: 'Old Worlders claim Altdorf merchants are so dishonest they can’t even trust themselves with their own lives – thus they pay Bodyguards to look after their assets. The Old World is, of course, a dangerous place and its cities are no exception. It’s all too easy to end up with a knife in the back on the crowded streets of a major metropolis like Nuln or Middenheim. The rich and powerful use Bodyguards to protect themselves from thieves and common riffraff. While many look like the thugs they are, others are gussied up in the livery of the Noble or Merchant House they serve. Some of the groups are so big that they are practically private armies.',
    skills: [
      'Dodge Blow',
      'Heal',
      'Intimidate',
      'Perception'
    ],
    talents: [
      'Disarm or Quick Draw',
      'Specialist Weapon Group (Parrying)',
      ' Specialist Weapon Group (Throwing)',
      'Street Fighting',
      'Strike to Stun',
      'Very Strong or Very Resilient'
    ],
    trappings: [
      'Buckler',
      'Knuckle-dusters',
      'A Pair of Throwing Axes or Throwing Knives',
      'Light Armour (Leather Jack)'
    ],
    entries: [
      'Estalian Diestro',
      'Jailer',
      'Mercenary',
      'Thug',
      'Bondsman'
    ],
    exits: [
      'Bailiff',
      'Bounty Hunter',
      'Interrogator',
      'Jailer',
      'Mercenary',
      'Protagonist',
      'Racketeer'
    ],
    notes: '',
    source: 'WHFR'
  },
  {
    name: 'Bondsman',
    type: 'Basic',
    mainstats: {
      ws: 10,
      bs: 5,
      s: 5,
      t: 5,
      ag: 5,
      int: 0,
      wp: 5,
      fel: 0
    },
    secondstats: {
      attacks: 1,
      wounds: 2,
      magic: 0
    },
    description: 'The Bondsman is a warrior in service to a particular Jarl. He is expected to live in the Jarl’s Hall, share the Jarl’s food, and be steadfastly loyal. In exchange for his pledge of loyalty, the Jarl rewards service with gifts, such as weapons and armour, and to the very best, land and title. The worth of the gift is never measured in actual value, but rather the prestige it bestows on the Bondsman. It’s important to remember such gifts do not make the Bondsman a mercenary; rather, it is a reward for constant and loyal service.',
    skills: [
      'Consume Alcohol',
      'Gamble',
      'Gossip',
      'Intimidate'
    ],
    talents: [
      'Coolheaded or Savvy',
      'Menacing',
      'Quick Draw or Specialist Weapon Group (Two-handed)',
      'Stout-hearted',
      'Strike Mighty Blow'
    ],
    trappings: [
      'Hand Weapon and Shield or Great Weapon',
      'Medium Armour (Full Leather and Mail Shirt)',
      'Skin of Ale',
      'three Gifts (each worth 1d10/2 gc)'
    ],
    entries: [
      'Mercenary',
      'Pit Fighter'
    ],
    exits: [
      'Bodyguard',
      'Freeholder',
      'Marauder',
      'Mercenary',
      'Reaver',
      'Skald',
      'Veteran',
      'Warleader'
    ],
    notes: '',
    source: 'ToC'
  },
  {
    name: 'Bonepicker',
    type: 'Basic',
    mainstats: {
      ws: 5,
      bs: 0,
      s: 5,
      t: 10,
      ag: 5,
      int: 0,
      wp: 5,
      fel: 5
    },
    secondstats: {
      attacks: 0,
      wounds: 2,
      magic: 0
    },
    description: 'Bone Pickers are scavengers, scraping a living together off the refuse of others. They lead their carts through villages and towns, collecting old bones, rags, and other junk and disposing of it in return for a few pennies or a small item in trade. Sometimes known as rag and bone men or rag pickers, they are a common sight in the Empire’s cities, which generate large amounts of waste. Since many goods pass through their hands, Bone Pickers are also petty traders. What is trash to a wealthy Burgher is treasure to a poor Peasant.',
    skills: [
      'Animal Care',
      'Charm or Gossip',
      'Drive',
      'Common Knowledge (the Empire)',
      'Evaluate',
      'Haggle',
      'Perception',
      'Search '
    ],
    talents: [
      'Coolheaded or Streetwise',
      'Hardy or Resistance to Disease'
    ],
    trappings: [
      'Cart',
      '3 Sacks'
    ],
    entries: [
      'Peasant',
      'Rat Catcher',
      'Vagabond'
    ],
    exits: [
      'Camp Follower',
      'Cat Burglar',
      'Fence',
      'Grave Robber',
      'Smuggler'
    ],
    notes: '',
    source: 'WHFR'
  },
  {
    name: 'Border Courtier',
    type: 'Advanced',
    mainstats: {
      ws: 15,
      bs: 5,
      s: 10,
      t: 15,
      ag: 15,
      int: 20,
      wp: 20,
      fel: 10
    },
    secondstats: {
      attacks: 0,
      wounds: 4,
      magic: 0
    },
    description: 'Life in the courts of the Border Princes tends to be a bit more literal than in more civilised lands. Smearing an opponent involves physical mud, backstabbing involves a knife, and the losers in political contests really are gutted. Courtiers in the area thus tend to be a bit more physical than those in other regions.',
    skills: [
      'Charm',
      'Command',
      'Common Knowledge (Border Princes)',
      'Concealment',
      'Dodge Blow',
      'Gossip',
      'Intimidate',
      'Perception',
      'Prepare Poison',
      'Search',
      'Speak Language (Any)'
    ],
    talents: [
      'Resistance to Poison',
      'Schemer',
      'Street Fighting',
      'Strike to Injure',
      'Suave',
      'Very Resilient'
    ],
    trappings: [
      'Medium Armour (Chain Shirt and Leather Jack)',
      'two Sets of Noble’s Garb',
      'one Dose of Poison (any type)'
    ],
    entries: [
      'Captain',
      'Courtier',
      'Noble',
      'Outlaw Chief',
      'Politician',
      'Sergeant'
    ],
    exits: [
      'Assassin',
      'Captain',
      'Courtier',
      'Noble Lord',
      'Spy'
    ],
    notes: '',
    source: 'RC'
  },
  {
    name: 'Bounty Hunter',
    type: 'Basic',
    mainstats: {
      ws: 5,
      bs: 10,
      s: 5,
      t: 0,
      ag: 10,
      int: 0,
      wp: 5,
      fel: 0
    },
    secondstats: {
      attacks: 0,
      wounds: 2,
      magic: 0
    },
    description: 'Hunters live by tracking down wanted criminals, bandits, and fugitives and bringing them to justice. The lone Bounty Hunter can go places that ungainly military units cannot, which makes such men a useful adjunct to the watch and militia. Local rulers, guilds, and councils pay the bounties. They may find Bounty Hunters distasteful, but they are an effective counter to brigands, Goblin bands, and the like.',
    skills: [
      'Follow Trail',
      'Intimidate',
      'Outdoor Survival',
      'Perception',
      'Search',
      'Shadowing',
      'Silent Move'
    ],
    talents: [
      'Marksman or Strike to Stun',
      'Rover',
      'Specialist Weapon Group (Entangling)',
      'Sharpshooter or Strike Mighty Blow'
    ],
    trappings: [
      'Crossbow with 10 bolts',
      'Net',
      'Light Armour (Leather Jerkin and Leather Skullcap)',
      'Manacles',
      '10 Yards of Rope'
    ],
    entries: [
      'Bodyguard',
      'Fieldwarden',
      'Hunter',
      'Kislevite Kossar',
      'Mercenary',
      'Pit Fighter',
      'Streltsi'
    ],
    exits: [
      'Mercenary',
      'Protagonist',
      'Scout',
      'Targeteer',
      'Vampire Hunter',
      'Enforcer',
      'Verenean Investigator'
    ],
    notes: '',
    source: 'WHFR'
  },
  {
    name: 'Burgher',
    type: 'Basic',
    mainstats: {
      ws: 5,
      bs: 0,
      s: 0,
      t: 0,
      ag: 5,
      int: 10,
      wp: 5,
      fel: 5
    },
    secondstats: {
      attacks: 0,
      wounds: 2,
      magic: 0
    },
    description: 'As cities have become more and more important to the Empire, a new class of citizen has emerged: the Burgher. Burghers – or their ancestors – clawed their way up from the peasantry and made new lives for themselves in the cities. Now they are the glue that holds urban society together. Burghers are shop owners, petty merchants, excisemen, traders, and local officials. They are neither as despised as the peasantry nor as exalted as the nobility. While they suffer the most from plague, living in tightly packed neighbourhoods as they do, they would not leave the city for a life of hard toil in the country. In their minds, cities breed opportunity, not just disease.',
    skills: [
      'Common Knowledge (the Empire) or Consume Alcohol',
      'Drive',
      'Evaluate',
      'Gossip or Read/Write',
      'Haggle',
      'Perception',
      'Search',
      'Speak Language (Breton, Kislevian or Tilean)',
      'Speak Language (Reikspiel)'
    ],
    talents: [
      'Dealmaker',
      'Savvy or Suave'
    ],
    trappings: [
      'Abacus',
      'Lantern',
      'One Set of Good Clothing'
    ],
    entries: [
      'Innkeeper',
      'Servant',
      'Embalmer',
      'Horse Coper',
      'Lamplighter',
      'Muleskinner',
      'Skald'
    ],
    exits: [
      'Agitator',
      'Fence',
      'Innkeeper',
      'Merchant',
      'Militiaman',
      'Tradesman',
      'Valet',
      'Freeholder',
      'Horse Coper',
      'Litigant',
      'Muleskinner',
      'Newssheet Vendor',
      'Pamphleteer'
    ],
    notes: '',
    source: 'WHFR'
  },
  {
    name: 'Cadet',
    type: 'Basic',
    mainstats: {
      ws: 5,
      bs: 5,
      s: 0,
      t: 0,
      ag: 5,
      int: 10,
      wp: 5,
      fel: 10
    },
    secondstats: {
      attacks: 0,
      wounds: 2,
      magic: 0
    },
    description: 'Cadets are officers-in-training. They may attend formal schools like the Aquila Academies or they may receive direct tutelage from officers in the field. Although cadets do learn to fight, the focus of their training is leadership. Some come from noble families, but this is by no means a given. Those who earned a place with battlefield exploits are more respected because they have lived war, not just read about it in books.',
    skills: [
      'Academic Knowledge (Strategy/Tactics)',
      'Command',
      'Common Knowledge (Bretonnia, the Empire, or Tilea)',
      'Perception',
      'Read/Write',
      'Ride',
      'Secret Language (Battle Tongue)',
      'Speak Language (Classical)',
      'Speak Language (Breton, Reikspiel, or Tilean)'
    ],
    talents: [
      'Disarm',
      'Savvy or Warrior Born',
      'Specialist Weapon Group (Fencing)'
    ],
    trappings: [
      'Foil or Rapier',
      'Light Armour (Full Leather Armour)',
      'Shield',
      ' Uniform (Cadet)'
    ],
    entries: [
      'Estalian Diestro',
      'Mercenary',
      'Militiaman',
      'Noble',
      'Roadwarden',
      'Soldier',
      'Squire',
      'Student'
    ],
    exits: [
      'Herald',
      'Mercenary',
      'Pistolier',
      'Sergeant',
      'Squire',
      'Student'
    ],
    notes: 'If you are rolling randomly for your Starting Career, you can substitute Cadet for Soldier or Student with your GM’s permission.',
    source: 'SoE'
  },
  {
    name: 'Camp Follower',
    type: 'Basic',
    mainstats: {
      ws: 0,
      bs: 0,
      s: 0,
      t: 5,
      ag: 10,
      int: 5,
      wp: 5,
      fel: 10
    },
    secondstats: {
      attacks: 0,
      wounds: 2,
      magic: 0
    },
    description: 'In the Empire, armies are always on the move. Forces range from local militia units scouring the forest  for bandits to the full armed might of the Emperor taking the field against greenskins or the forces of Chaos.  No army travels alone. A caravan of Camp Followers always trails behind. They include petty traders looking  to make extra money, war widows trying to make a wage cooking or sewing, and corpse looters hoping to  scavenge battlefields. While scorned by the Noble leaders of many armies, Camp Followers provide key  support for troops in the field. ',
    skills: [
      'Animal Care or Drive',
      'Charm or Evaluate',
      'Gossip',
      'Haggle',
      'Perception',
      'Search',
      'Any one of: Trade (Armourer, Bowyer, Cartographer, Cook, Gunsmith, Herbalist, Merchant, Smith, Tailor, or Weaponsmith)',
      'Speak Language (Breton, Kislevian, or Tilean)',
      'Slight of Hand'
    ],
    talents: [
      'Dealmaker or Street Fighter',
      'Flee!',
      'Hardy or Suave',
      'Resistance to Disease or Seasoned Traveller'
    ],
    trappings: [
      'Lucky Charm or Trade Tools',
      'Pouch',
      'Tent'
    ],
    entries: [
      'Servant',
      'Bonepicker',
      'Frogwife'
    ],
    exits: [
      'Charcoal-Burner',
      'Charlatan',
      'Servant',
      'Smuggler',
      'Spy',
      'Tradesman',
      'Vagabond',
      'Dung Collector',
      'Frogwife',
      'Raconteur'
    ],
    notes: '',
    source: 'WHFR'
  },
  {
    name: 'Cantor',
    type: 'Advanced',
    mainstats: {
      ws: 0,
      bs: 0,
      s: 0,
      t: 5,
      ag: 10,
      int: 5,
      wp: 10,
      fel: 0
    },
    secondstats: {
      attacks: 0,
      wounds: 2,
      magic: 0
    },
    description: 'Cantors are talented singers who have devoted themselves to performing in temple choirs and during rituals. Cantors are responsible for leading choirs during services as well as for instructing individual choristers. Some cantors are also skilled musicians and write new hymns in praise of their Gods. As well as singing hymns, many cantors are skilled at performing incantations and rhythmic chanting that aids priests in performing divine rituals, and for the most potent of rituals a high priest may request the presence of many cantors. The common symbol of office for a cantor is a short staff used to strike the ground (or out of tune choristers, if necessary) to keep tune with the music when leading a choir. A skilful cantor can easily enhance the reputation of a temple and its priests.',
    skills: [
      'Academic Knowledge (Theology)',
      'Charm',
      ' Common Knowledge (any one)',
      'Perception',
      'Performer (Musician)',
      'Performer (Singer)',
      'Read/Write',
      'Speak Language (any two)'
    ],
    talents: [
      'Incantation'
    ],
    trappings: [
      'Chorister’s Robe',
      'Hymn Book',
      'Staf'
    ],
    entries: [
      'Anointed Priest',
      'Entertainer',
      'High Priest',
      'Initiate',
      'Minstrel',
      'Monk',
      'Priest'
    ],
    exits: [
      'Catechist',
      'Entertainer',
      'Initiate',
      'Priest',
      'Minstrel',
      'Zealot'
    ],
    notes: '',
    source: 'ToS'
  },
  {
    name: 'Captain',
    type: 'Advanced',
    mainstats: {
      ws: 30,
      bs: 20,
      s: 20,
      t: 20,
      ag: 20,
      int: 15,
      wp: 15,
      fel: 25
    },
    secondstats: {
      attacks: 2,
      wounds: 7,
      magic: 0
    },
    description: 'Captains are the war leaders of the strife-wracked Old World. They command Soldiers, Militiamen, Mercenaries and even Roadwardens, on bloody battlefields and corpse-strewn streets in the endless military campaigns of the Empire and beyond. Most Captains are tough professional Soldiers who have survived dozens of fierce battles to get where they are. It’s no surprise then that they resent having to serve under inexperienced Nobles, an all too common occurrence. Captains tend to respect experience and ability over birth and social position. They know what counts on the battlefield.',
    skills: [
      'Academic Knowledge (Strategy/Tactics)',
      'Animal Care',
      'Command',
      'Common Knowledge (any three)',
      'Dodge Blow',
      'Gossip',
      'Read/Write',
      'Ride',
      'Secret Language (Battle Tongue)',
      'Speak Language (Kislevian or Tilean)'
    ],
    talents: [
      'Disarm or Quick Draw',
      'Lightning Parry',
      'Specialist Weapon (Cavalry or Two-handed WEapon)',
      'Specialist Weapon (Flail or Parrying)'
    ],
    trappings: [
      'Flail or Sword-breaker',
      'Lance or Great Weapon',
      'Medium Armour (Full Mail Armour)',
      'Shield',
      'Destrier with Saddle and Harness',
      'Unit of Troops'
    ],
    entries: [
      'Explorer',
      'Ghost Strider',
      'Knight',
      'Knight of the Inner Circle',
      'Noble Lord',
      'Outlaw Chief',
      'Witch Hunter',
      'Ambassador',
      'Artillerist',
      'Badlands Ranger',
      'Black Guard',
      'Border Courtier',
      'Crusader',
      'Grail Knight',
      'Grandmaster',
      'Horse Archer',
      'Ice Witch',
      'Knight Panther',
      'Knight of the Blazing Sun',
      'Knight of the Raven',
      'Knight of the Realm',
      'Questing Knight',
      'Runelord',
      'Sergeant',
      'Slaver',
      'Warleader',
      'Winged Lancer'
    ],
    exits: [
      'Agitator',
      'Explorer',
      'Merchant',
      'Outlaw Chief',
      'Politician',
      'Ambassador',
      'Ataman',
      'Border Courtier'
    ],
    notes: '',
    source: 'WHFR'
  },
  {
    name: 'Carcassonne Shepherd',
    type: 'Basic',
    mainstats: {
      ws: 5,
      bs: 10,
      s: 0,
      t: 0,
      ag: 10,
      int: 5,
      wp: 0,
      fel: 0
    },
    secondstats: {
      attacks: 1,
      wounds: 2,
      magic: 0
    },
    description: 'The shepherds of Carcassonne are the dukedom’s first line of defence against the Orc raiders who infest the mountains. They often work alone, though a new recruit may be paired with an older individual. Obviously, a single Human, no matter how well trained, cannot expect to take on an entire Orc war-band, so the Shepherds are trained to gather information, slow the band down, and report its location to the local nobility.',
    skills: [
      'Animal Care',
      'Concealment',
      'Dodge Blow',
      'Perception',
      'Scale Sheer Surface',
      'Secret Signs (Scout)',
      'Set Trap',
      'Silent Move'
    ],
    talents: [
      'Flee!',
      'Fleet-footed',
      'Rover',
      'Sharpshooter'
    ],
    trappings: [
      'Bow with 10 Arrows',
      'Bretonnian Blue Sheepdog (optional)',
      'Light Armour (Leather Jerkin)',
      'Shepherd’s Crook (treat as Quarter staff)',
      'Herd of Sheep or Cute Little Lamb'
    ],
    entries: [
      'Grail Pilgrim',
      'Hunter',
      'Outlaw',
      'Outrider',
      'Peasant',
      'Woodsman',
      'Vagabond',
      'Man-at-Arms'
    ],
    exits: [
      'Grail Pilgrim',
      'Herrimault',
      'Outlaw',
      'Scout',
      'Vagabond',
      'Veteran',
      'Man-at-Arms',
      'Yeoman'
    ],
    notes: '',
    source: 'KotG'
  },
  {
    name: 'Cartographer',
    type: 'Basic',
    mainstats: {
      ws: 5,
      bs: 0,
      s: 0,
      t: 5,
      ag: 5,
      int: 10,
      wp: 5,
      fel: 5
    },
    secondstats: {
      attacks: 0,
      wounds: 2,
      magic: 0
    },
    description: 'Cartographers chart the lay of the land for rich patrons, hardy explorers, and collectors. They accompany expeditions into the wild but also transpose the shoddy work of others into a more readable form. Maps in the Old World are notoriously unreliable – whether they are surveys of local trails, ambitious region wide guides, or the mainly fictional representations of the Old World itself. Yet the services of Cartographers are still in great demand.',
    skills: [
      'Academic Knowledge (geography)',
      'Navigation',
      'Outdoor Survival or Ride',
      'Perception',
      'Read/Write',
      'Speak Language (any 2)',
      'Trade (cartography)'
    ],
    talents: [
      'Excellent Vision',
      'Orientation',
      'Seasoned Traveller or Super Numerate'
    ],
    trappings: [
      'Writing Kit',
      'Pony with saddle & harness',
      '1d10 map cases'
    ],
    entries: [
      'Coachman',
      'Messenger',
      'Navigator',
      'Scout',
      'Scribe',
      'Student',
      'Tradesman'
    ],
    exits: [
      'Artisan',
      'Explorer',
      'Forger',
      'Navigator',
      'Scholar',
      'Scribe',
      'Vagabond'
    ],
    notes: '',
    source: 'CC'
  },
  {
    name: 'Cat Burglar',
    type: 'Advanced',
    mainstats: {
      ws: 10,
      bs: 10,
      s: 5,
      t: 5,
      ag: 25,
      int: 10,
      wp: 10,
      fel: 0
    },
    secondstats: {
      attacks: 0,
      wounds: 4,
      magic: 0
    },
    description: 'Cat Burglars see themselves as a cut above the common thieves and footpads. They leave the slitting of both purses and throats to the gutter scum, preferring to steal with more finesse. The Cat Burglar’s art requires observation, planning, and impeccable timing. A well-executed theft may not even be detected for months, by which time the Cat Burglar is far away. Most Cat Burglars are members of a Thieves’ Guild, though some defy the odds and go it alone. Such lone wolves must elude both the law and the guild; a dangerous game to be sure.',
    skills: [
      'Concealment',
      'Evaluate',
      'Gossip',
      'Haggle',
      'Perception',
      'Pcik Lock',
      'Scale Sheer Surface',
      'Search',
      'Secret Language (Thieve\'s Tongue)',
      'Secret Signs (Thief)',
      'Silent Move'
    ],
    talents: [
      'Alley Cat',
      'Street Fighting',
      'Streetwise',
      'Trapfinder'
    ],
    trappings: [
      'Grappling Hook',
      'Lock Picks',
      '10 Yards of Rope'
    ],
    entries: [
      'Charlatan',
      'Rat Catcher',
      'Thief',
      'Badlander',
      'Bonepicker',
      'Chimneysweep',
      'Ex-Convict',
      'Grave Robber'
    ],
    exits: [
      'Crime Lord',
      'Fence',
      'Master Thief',
      'Racketeer',
      'Vagabond',
      'Verenean Investigator'
    ],
    notes: '',
    source: 'WHFR'
  },
  {
    name: 'Catechist',
    type: 'Advanced',
    mainstats: {
      ws: 0,
      bs: 0,
      s: 5,
      t: 5,
      ag: 10,
      int: 20,
      wp: 15,
      fel: 10
    },
    secondstats: {
      attacks: 0,
      wounds: 4,
      magic: 0
    },
    description: 'The Catechist is a religious teacher versed in the study of holy scripture and stricture who teaches the finer points of both to any who wish to listen (or are forced to listen). They are rarely as open-minded or clever as scholars, favouring tradition over progress and learning by rote over true understanding. A Catechist is usually responsible for the religious education of a temple’s initiates, even if they themselves are merely lay members. Not all Catechists are religious in nature – some concentrate on studying the arcane but lack the talents to become a wizard, instead teaching theory to apprentices at one of the Colleges of Magic.',
    skills: [
      'Academic Knowledge (any one)',
      'Academic Knowledge (Theology)',
      'Common Knowledge (any two)',
      'Read/Write',
      'Speak Language (any one)',
      'Speak Language (Classical)'
    ],
    talents: [
      'Public Speaking'
    ],
    trappings: [
      'Prayer Book',
      'Writing Kit'
    ],
    entries: [
      'Anointed Priest',
      'Dilettante',
      'Friar',
      'Priest',
      'Scholar',
      'Scribe',
      'Student',
      'Zealot',
      'Cantor'
    ],
    exits: [
      'Demagogue',
      'Friar',
      'Initiate',
      'Scholar',
      'Zealot'
    ],
    notes: '',
    source: 'ToS'
  },
  {
    name: 'Cenobite',
    type: 'Basic',
    mainstats: {
      ws: 5,
      bs: 0,
      s: 5,
      t: 10,
      ag: 0,
      int: 5,
      wp: 10,
      fel: 5
    },
    secondstats: {
      attacks: 0,
      wounds: 2,
      magic: 0
    },
    description: 'Cenobites live in communities, generally called monasteries, and follow the advice of a leader. The leader is often charismatic but often equally insane. At the very least, they are fanatical followers of a very personal vision of the truth (the con-artists do not set up in the Borderlands). Most Cenobites are Human; members of other races rarely show much interest, though most monasteries would admit them if they asked. Unwanted children are sometimes left on the doorsteps of monasteries. These children are taken in; those who do not run away are accepted as Cenobites. Most run away.',
    skills: [
      'Academic Knowledge (Theology)',
      'Blather',
      'Common Knowledge (Border Princes)',
      'Heal',
      'Perception',
      'Torture'
    ],
    talents: [
      'Hardy',
      'Resistance to Poison',
      'Stout-hearted',
      'Strong-minded'
    ],
    trappings: [
      'Filthy Loincloth and Tunic'
    ],
    entries: [
      'None',
      'Penitent'
    ],
    exits: [
      'Mystic',
      'Outlaw',
      'Servant',
      'Vagabond'
    ],
    notes: 'It is possible for those who seek to purify mind and body to volunteer to become cenobites, even though most are raised in the role. With GM approval, the cenobite career may be entered from apprentice wizard, initiate, grave robber, or zealot.',
    source: 'RC'
  },
  {
    name: 'Champion',
    type: 'Advanced',
    mainstats: {
      ws: 40,
      bs: 40,
      s: 25,
      t: 25,
      ag: 30,
      int: 0,
      wp: 20,
      fel: 0
    },
    secondstats: {
      attacks: 2,
      wounds: 8,
      magic: 0
    },
    description: 'Champions are warriors who dedicate their lives to martial combat, excelling as no others on the field of battle. They are not leaders of men, bu as individual combatants they are peerless. They live for the moment when their skills are tested to the utmost, for only then do they truly know just how good they are.',
    skills: [
      'Dodge Blow',
      'Evaluate',
      'Initimidate',
      'Perception'
    ],
    talents: [
      'Fleet Footed or Lightning Reflexes',
      'Lightning Parry',
      'Master Gunner',
      'Might Shot',
      'Quick Draw',
      'Rapid Reload',
      'Specialist Weapon Group (any three)',
      'Wrestling'
    ],
    trappings: [
      'Any Six Weapon (all of Best Craftmanship)',
      'Medium Armour (Mail Shirt and Leather Jack)'
    ],
    entries: [
      'Assassin',
      'Duellist',
      'Judicial Champion',
      'Knight of the Inner Circle',
      'Targeteer',
      'Veteran',
      'Witch Hunter',
      'Black Guard',
      'Grandmaster',
      'Knight Panther',
      'Knight of the Blazing Sun',
      'Knight of the Raven',
      'Scourge of God',
      'Warleader'
    ],
    exits: [
      'Assassin',
      'Scout',
      'Sergeant',
      'Witch Hunter'
    ],
    notes: '',
    source: 'WHFR'
  },
  {
    name: 'Charcoal-Burner',
    type: 'Basic',
    mainstats: {
      ws: 5,
      bs: 0,
      s: 5,
      t: 5,
      ag: 5,
      int: 5,
      wp: 5,
      fel: 5
    },
    secondstats: {
      attacks: 0,
      wounds: 2,
      magic: 0
    },
    description: 'Charcoal-Burners can be found in every village in the Empire. They burn wood to create charcoal, an important fuel for the winter months. Since their work is both dirty and potentially dangerous, they work outside their villages. The outskirts of the forest are best, as wood is easily accessible. This proximity to the forest also makes charcoal-burning dangerous work, since isolated parties of such men are easy prey for the malign creatures of the wood. A CharcoalBurner camp always has weapons handy, even if they are nothing more than clubs cut from the nearby trees.',
    skills: [
      'Common Knowledge (the Empire) or Concealment',
      'Drive or Gossip',
      'Haggle',
      'Outdoor Survival',
      'Perception',
      'Scale Sheer Surface',
      'Search',
      'Secret Signs (Ranger)'
    ],
    talents: [
      'Flee!',
      'Savvy or Very Strong'
    ],
    trappings: [
      '3 Torches',
      'Tinderbox',
      'Hand Weapon (Hatchet)'
    ],
    entries: [
      'Camp Follower',
      'Hunter',
      'Miner',
      'Peasant'
    ],
    exits: [
      'Hunter',
      'Miner',
      'Scout',
      'Vagabond',
      'Woodsman',
      'Lamplighter'
    ],
    notes: '',
    source: 'WHFR'
  },
  {
    name: 'Charlatan',
    type: 'Advanced',
    mainstats: {
      ws: 10,
      bs: 10,
      s: 5,
      t: 10,
      ag: 15,
      int: 15,
      wp: 15,
      fel: 25
    },
    secondstats: {
      attacks: 0,
      wounds: 4,
      magic: 0
    },
    description: 'Charlatans are tricksters extraordinaire, cunning liars who can convince people of almost anything. With their glib tongues and ready wits they bilk the gullible out of their fortunes and escape with both the money and their lives. For a Charlatan, lying is like breathing. Common Charlatans are content to sell worthless miracle cures and trinkets that will supposedly ward off black magic whereas more skilled ones fake being other professions to collect consultation fees and sell off property that they don’t own. Legendary Charlatans run con schemes that try to take Nobles and rich Merchants for all they’re worth.',
    skills: [
      'Blather',
      'Charm',
      'Common Knowledge (Bretonniaor Tilea)',
      'Disguise',
      'Evaluate',
      'Gamble',
      'Gossip',
      'Haggle',
      'Perception',
      'Secret Language (Thieves Tongue)',
      'Sleight of Hand',
      'Speak Language (Breton or Tilean)',
      'Speak Language (Reikspiel)'
    ],
    talents: [
      'Flee!',
      'Mimic',
      'Public Speaking',
      'Schemer or Streetwise',
      'Seasoned Traveller'
    ],
    trappings: [
      '6 sets of Common Clothes',
      '4 sets of Best Craftsmenship Clothes',
      'Forged Documents',
      '4 bottles of various coloured water',
      '4 bottles of variously coloured powder'
    ],
    entries: [
      'Agitator',
      'Camp Follower',
      'Courtier',
      'Entertainer',
      'Envoy',
      'Fence',
      'Hedge Wizard',
      'Journeyman Wizard',
      'Minstrel',
      'Rogue',
      'Smuggler',
      'Thief',
      'Astrologer',
      'Cloaked Brother',
      'Dilettante',
      'Ex-Convict',
      'Forger',
      'Gambler',
      'Hedgecraft Apprentice',
      'Horse Coper',
      'Mystic',
      'Penitent',
      'Raconteur',
      'Rapscallion',
      'Seer',
      'Strigany Mystic',
      'Warlock',
      'Witch'
    ],
    exits: [
      'Astrologer',
      'Cat Burglar',
      'Demagogue',
      'Outlaw',
      'Politician',
      'Spy',
      'Herrimault'
    ],
    notes: '',
    source: 'WHFR'
  },
  {
    name: 'Chekist',
    type: 'Basic',
    mainstats: {
      ws: 10,
      bs: 5,
      s: 5,
      t: 5,
      ag: 5,
      int: 5,
      wp: 5,
      fel: 0
    },
    secondstats: {
      attacks: 0,
      wounds: 2,
      magic: 0
    },
    description: 'The principal goal of the chekist – the Ice Queen’s secret police – is to ensure the personal and political security of the Tzarina and her family. This task is performed by any means possible, regardless of local laws; after all, in Kislev, what the chekist deems as law, is law. Their techniques employed to investigate the various Chaos cults, revolutionaries, criminals, hostile organisations, spies, and manifold other “threats” are often brutal, leaving the chekist with an ugly reputation. Their headquarters squat in Kislev city, but rumours suggest they have offices throughout the Ancient Widow’s land, all siphoning information back to the capital. Some suggest the chekist even have agents in the Empire and beyond, each monitoring the activities of foreign threats to the Ice Queen and her rule; but this, of course, is denied.',
    skills: [
      'Academic Knowledge (Law or Intimidate)',
      'Command',
      'Common Knowledge (Kislev)',
      'Dodge Blow or Shadowing',
      'Follow Trail',
      'Perception',
      'Ride',
      'Search'
    ],
    talents: [
      'Disarm or Specialist Weapon Group (Gunpowder)',
      'Menacing',
      'Strike Mighty Blow or Strike to Stun'
    ],
    trappings: [
      'leather jacks and leggings',
      'helmet',
      'Hand Weapon',
      'Kislevite horse',
      'saddle',
      'harness',
      'and saddlebags'
    ],
    entries: [
      'Protagonist',
      'Streltsi',
      'Thug',
      'Watchman'
    ],
    exits: [
      'Jailer',
      'Interrogator',
      'Mercenary',
      'Racketeer',
      'Sergeant',
      'Soldier',
      'Spy',
      'Veteran',
      'Watchman'
    ],
    notes: '',
    source: 'RotIQ'
  },
  {
    name: 'Chimneysweep',
    type: 'Basic',
    mainstats: {
      ws: 5,
      bs: 0,
      s: 5,
      t: 5,
      ag: 5,
      int: 0,
      wp: 5,
      fel: 5
    },
    secondstats: {
      attacks: 0,
      wounds: 2,
      magic: 0
    },
    description: 'In towns and cities throughout the Empire, households that can afford to do so burn charcoal to ward off the chill of winter. Many industries also make extensive use of charcoal, in particular the forges of Nuln. Heavy use clogs chimneys with soot, resulting in an increased demand for chimney sweeps. A good many of these workers are children, but many are halflings and particularly thin men. Working on the rooftops, they scrub out the chimneys to clear blockages – usually soot, but sometimes, far stranger things.',
    skills: [
      'Common Knowledge (the Empire)',
      'Consume Alcohol',
      'Gossip',
      'Haggle',
      'Perception',
      'Scale Sheer Surface',
      'Search',
      'Silent Move'
    ],
    talents: [
      'Contortionist or Very Strong',
      'Streetwise'
    ],
    trappings: [
      'Brush',
      'Grappling Hook',
      '10 Yards of Rope'
    ],
    entries: [
      'Miner',
      'Peasant',
      'Rogue',
      'Thief'
    ],
    exits: [
      'Cat Burglar',
      'Mercenary',
      'Militiaman',
      'Protagonist',
      'Rat Catcher'
    ],
    notes: '',
    source: 'FoN'
  },
  {
    name: 'Cloaked Brother',
    type: 'Advanced',
    mainstats: {
      ws: 15,
      bs: 10,
      s: 15,
      t: 15,
      ag: 25,
      int: 30,
      wp: 25,
      fel: 30
    },
    secondstats: {
      attacks: 1,
      wounds: 6,
      magic: 0
    },
    description: 'Cloaked Brothers are hidden agents loosely affiliated with Sigmar’s Witch Hunters. Though not a true branch of the Templars, they often have cause to join forces with their, sometimes overzealous, brethren. However, they are just as likely to double cross them as they are with any organisation they deal with. Cloaked Brothers are masters of information. They infiltrate organisations to learn what they can, reporting their findings to their superiors – though who exactly “they” are is unknown. This organisation draws from a vast array of talent, from ex-Witch Hunters to Mutants.',
    skills: [
      'Charm',
      'Common Knowledge (any three)',
      'Concealment',
      'Disguise',
      'Gossip',
      'Perception',
      'Read/Write',
      'Search',
      'Secret Language (any two)',
      'Secret Signs (any two)',
      'Silent Move',
      'Speak Language (any four)',
      'Trade (any one)'
    ],
    talents: [
      'Acute Hearing',
      'Alley Cat',
      'Coolheaded',
      'Linguistics or Mimic',
      'Savvy or Suave',
      'Schemer',
      'Streetwise'
    ],
    trappings: [
      'Light Armour (Leather Jack)',
      'Hand Weapon',
      'Garrotte',
      'Cloak',
      'Good Craftsmanship Disguise Kit',
      'three sets of Good Clothing',
      'one Dose of Poison'
    ],
    entries: [
      'Assassin',
      'Courtier',
      'Crime Lord',
      'Demagogue',
      'Friar',
      'Master Thief',
      'Politician',
      'Scout',
      'Spy',
      'Veteran',
      'Witch Hunter'
    ],
    exits: [
      'Assassin',
      'Charlatan',
      'Crime Lord',
      'Demagogue',
      'Master Thief',
      'Politician',
      'Scout',
      'Spy',
      'Veteran',
      'Witch Hunter'
    ],
    notes: 'See Old World Armoury page 31 for details on Garotte.',
    source: 'ToC'
  },
  {
    name: 'Coachman',
    type: 'Basic',
    mainstats: {
      ws: 5,
      bs: 10,
      s: 0,
      t: 0,
      ag: 10,
      int: 0,
      wp: 5,
      fel: 5
    },
    secondstats: {
      attacks: 0,
      wounds: 2,
      magic: 0
    },
    description: 'While the Empire is a mighty nation, its lands are far from safe. Large stretches of it have never been pacified or cultivated. A precarious system of roads connects the villages, towns, and cities, and it is here that the Coachmen earn their pay, working for one of the many Imperially chartered coaching companies. The roads are frequently in ill repair or plagued by Goblins, Beastmen, and brigands. Nonetheless, the Coachmen risk life and limb to bring passengers and cargo safely through the hazards of the Imperial roadways. Each day is a race to reach the next settlement or coaching inn before sunset. No one wants to be on the road in the dark of the night, especially when the Chaos moon is in the sky.',
    skills: [
      'Animal Care',
      'Drive',
      'Gossip or Haggle',
      'Heal or Ride',
      'Navigation',
      'Perception',
      'Secret Signs (Ranger)',
      'Speak Language (Breton, Kislevian, or Tilean)'
    ],
    talents: [
      'Quick Draw or Seasoned Traveller',
      'Specialist Weapon Group (Gunpowder)'
    ],
    trappings: [
      'Blunderbuss with powder/ammunition enough for 10 shots',
      'Medium Armour (Mail Shirt and Leather Jack)',
      'Instruments (Coach Horn)'
    ],
    entries: [
      'Outrider',
      'Messenger'
    ],
    exits: [
      'Highwayman',
      'Outlaw',
      'Roadwarden',
      'Scout',
      'Smuggler',
      'Toll Keeper',
      'Cartographer',
      'Drover',
      'Ferryman',
      'Herrimault'
    ],
    notes: '',
    source: 'WHFR'
  },
  {
    name: 'Courtier',
    type: 'Advanced',
    mainstats: {
      ws: 5,
      bs: 5,
      s: 0,
      t: 0,
      ag: 10,
      int: 20,
      wp: 20,
      fel: 20
    },
    secondstats: {
      attacks: 0,
      wounds: 4,
      magic: 0
    },
    description: 'Courtiers surround the nobility at court, fawning over lieges and ladies in the hopes of getting ahead. They range from sycophants who desperately wish to please, to cunning schemers who seek the keys to wealth and prestige. Courtiers are frequently well-read and skilled public speakers, as they are often called upon to offer erudite opinions on a variety of subjects to their Noble patrons. No Courtier, no matter how clever, is ever fully secure in his position, as there is always another who desperately wants it and is willing to do nearly anything to get it. Female Courtiers are usually known as ladies-in-waiting.',
    skills: [
      'Academic Knowledge (the Arts or History) or Gamble',
      'Blather',
      'Charm',
      'Command or Performer (any one)',
      'Common Knowledge (Bretonnia or Tilea)',
      'Evaluate',
      'Gossip',
      'Perception',
      'Read/Write',
      'Ride',
      'Speak Language (Breton or Tilean)',
      'Speak Language (Reikspiel)'
    ],
    talents: [
      'Dealmaker or Etiquette',
      'Public Speaking',
      'Savvy or Suave',
      'Schemer or Specialist  Weapon Group (Fencing)'
    ],
    trappings: [
      '4 Sets of Noble’s Garb',
      '100 gc',
      'Valet'
    ],
    entries: [
      'Dilettante',
      'Noble',
      'Herald',
      'Pistolier',
      'Politician',
      'Border Courtier',
      'Grail Knight',
      'Ice Maiden',
      'Knight of the Realm',
      'Questing Knight',
      'Raconteur'
    ],
    exits: [
      'Charlatan',
      'Duellist',
      'Noble Lord',
      'Politician',
      'Steward',
      'Spy',
      'Border Courtier',
      'Cloaked Brother',
      'Cult Attendant'
    ],
    notes: '',
    source: 'WHFR'
  },
  {
    name: 'Crime Lord',
    type: 'Advanced',
    mainstats: {
      ws: 20,
      bs: 20,
      s: 15,
      t: 15,
      ag: 20,
      int: 25,
      wp: 20,
      fel: 30
    },
    secondstats: {
      attacks: 1,
      wounds: 6,
      magic: 0
    },
    description: 'Most cities of the Old World have one or more organized criminal organisations, such as Thieves’ or Assassins’ Guilds. Crime Lords are the leaders of these groups and they are powerful and dangerous folk. To be counted among their ranks one must be clever, ambitious and completely ruthless. Most claw their way up from the bottom, learning every dirty trick in the book as they ascend to power. Crime Lords can seldom afford the luxury of trust. They are experts at evaluating both people and situations to seek whatever advantage they can. Many Crime Lords become involved in local politics to further their power.',
    skills: [
      'Charm',
      'Command',
      'Common Knowledge (the Empire)',
      'Dodge Blow',
      'Evaluate',
      'Gossip',
      'Haggle',
      'Intimidate',
      'Perception',
      'Secret Language (Thieves’ Tongue)',
      'Secret Signs (Thief)',
      'Torture'
    ],
    talents: [
      'Dealmaker or Schemer',
      'Menacing',
      'Public Speaking',
      'Resistance to Poison',
      'Sixth Sense',
      'Specialist Weapon Group (Crossbow or Parrying)',
      'Streetwise'
    ],
    trappings: [
      'Crossbow pistol with 10 bolts or Sword-breaker',
      'One set of Best Craftsmenship Clothing',
      'Antitoxin Kit',
      '100 gc',
      'Criminal Organisation'
    ],
    entries: [
      'Cat Burglar',
      'Demagogue',
      'Fence',
      'Guild Master',
      'Master Thief',
      'Outlaw Chief',
      'Politician',
      'Steward',
      'Cloaked Brother',
      'Faceless'
    ],
    exits: [
      'Demagogue',
      'Master Thief',
      'Outlaw Chief',
      'Politician',
      'Cloaked Brother',
      'Faceless'
    ],
    notes: '',
    source: 'WHFR'
  },
  {
    name: 'Crusader',
    type: 'Advanced',
    mainstats: {
      ws: 30,
      bs: 10,
      s: 20,
      t: 20,
      ag: 20,
      int: 20,
      wp: 25,
      fel: 15
    },
    secondstats: {
      attacks: 2,
      wounds: 8,
      magic: 0
    },
    description: 'It is perhaps the greatest deed a templar can perform to go to war in the name of the Gods. In ages past, especially during the crusades against Araby, it was unusual for a knight to not go on crusade with his order. But in more recent times crusades are far less common, especially on such a scale.',
    skills: [
      'Academic Knowledge (History)',
      'Academic Knowledge (Strategy/Tactics)',
      'Common Knowledge (any three)',
      'Navigation',
      'Outdoor Survival',
      'Perception',
      'Ride',
      'Secret Language (Battle Tongue)',
      'Speak Language (Arabyan, Breton, Estalian, or Tilean).'
    ],
    talents: [
      'Orientation or Linguistics',
      'Seasoned Traveller',
      'Specialist Weapon Group (Parrying)',
      'Stout-hearted',
      'Strike to Injure',
      'Strike to Stun'
    ],
    trappings: [
      'Heavy Armour (Best Craftsmanship Full Plate Armour)',
      'Maps (depicting the route of either a pilgrimage or crusade)',
      'Religious Symbol'
    ],
    entries: [
      'Knight',
      'Noble Lord',
      'Sergeant',
      'Veteran'
    ],
    exits: [
      'Captain',
      'Judicial Champion',
      'Explorer',
      'Initiate',
      'Knight of the Inner Circle',
      'Noble Lord',
      'Veteran'
    ],
    notes: '',
    source: 'ToS'
  },
  {
    name: 'Cult Attendant',
    type: 'Advanced',
    mainstats: {
      ws: 10,
      bs: 10,
      s: 5,
      t: 5,
      ag: 0,
      int: 20,
      wp: 15,
      fel: 10
    },
    secondstats: {
      attacks: 0,
      wounds: 4,
      magic: 0
    },
    description: 'A cult attendant is an assistant to a cult’s priests, entrusted with organising all of the mundane details involved in the running of a temple. Cult attendants are concerned with the logistical side of a cult, organising orders of service, coordinating the activities of the clergy and the laity, and ensuring that rituals and prayers proceed as smoothly as possible. A cult attendant rules behind the scenes of a temple, and many pride themselves on remaining as inconspicuous as possible.',
    skills: [
      'Academic Knowledge (Theology)',
      'Charm',
      'Common Knowledge (any one)',
      'Gossip',
      'Perception',
      'Read/Write',
      'Speak Language (any one)',
      'Speak Language (Classical)'
    ],
    talents: [
      'Dealmaker',
      'Public Speaking'
    ],
    trappings: [
      'Robes'
    ],
    entries: [
      'Anointed Priest',
      'Courtier',
      'Initiate',
      'Messenger',
      'Priest',
      'Valet'
    ],
    exits: [
      'Politician',
      'Priest',
      'Squire',
      'Steward'
    ],
    notes: '',
    source: 'ToS'
  },
  {
    name: 'Daemon Slayer',
    type: 'Advanced',
    mainstats: {
      ws: 40,
      bs: 0,
      s: 30,
      t: 30,
      ag: 20,
      int: 0,
      wp: 30,
      fel: 0
    },
    secondstats: {
      attacks: 2,
      wounds: 8,
      magic: 0
    },
    description: 'In every generation there are one or two Slayers who cannot seem to find the death they crave. At every turn, destiny cheats them or perhaps, drives them forward, and as the long years pass, they grow more and more fierce, determined to find the mighty doom that awaits them. When neither Trolls nor Giants can fell a Slayer, he takes on the mightiest foes of all: the Daemons of Chaos. Daemon Slayers are frightening individuals. They are barely sane at best, the shame of their continuing survival weighing ever on their thoughts, yet they’re also among the greatest warriors that the Old World has ever known.',
    skills: [
      'Common Knowledge (any two)',
      'Consume Alcohol',
      'Dodge Blow',
      'Intimidate',
      'Scale Sheer Surface'
    ],
    talents: [
      ' Lightning Parry',
      'Unsettling'
    ],
    trappings: [
      'Great Weapon'
    ],
    entries: [
      'Giant Slayer'
    ],
    exits: [
      'None'
    ],
    notes: 'Only Dwarfs can enter this career. You must have slain a Daemon of note to enter this career. ',
    source: 'WHFR'
  },
  {
    name: 'Deepwatcher',
    type: 'Basic',
    mainstats: {
      ws: 10,
      bs: 0,
      s: 5,
      t: 5,
      ag: 5,
      int: 0,
      wp: 5,
      fel: 0
    },
    secondstats: {
      attacks: 1,
      wounds: 2,
      magic: 0
    },
    description: 'The Deepwatch is made up of those too caught-up in the tales of adventure and glory to pay heed to the inherent dangers, or those too desperate to care. The Deepwatch are in essence a guild of professional adventurers, with groups dispatched into the tunnels beneath the city to keep them clear from monsters and stop any creatures from reaching the city. It’s a dangerous job, all right, but somebody has to do it.',
    skills: [
      'Dodge Blow',
      'Navigate',
      'Perception',
      'Scale Sheer Surface',
      'Search',
      'Silent Move'
    ],
    talents: [
      'Evaluate',
      'Orientation',
      'Resistance to Disease',
      'Resistance to Poison',
      'Tunnel Rat'
    ],
    trappings: [
      'Light Armour (Leather Jack)',
      'Lantern',
      'Lamp Oil',
      '10 Yards of Rope'
    ],
    entries: [
      'Rat Catcher',
      'Shieldbreaker',
      'Soldier',
      'Watchman'
    ],
    exits: [
      'Engineer',
      'Explorer',
      'Mercenary',
      'Sergeant',
      'Smuggler',
      'Veteran'
    ],
    notes: '',
    source: 'Companion'
  },
  {
    name: 'Demagogue',
    type: 'Advanced',
    mainstats: {
      ws: 10,
      bs: 10,
      s: 0,
      t: 10,
      ag: 15,
      int: 20,
      wp: 15,
      fel: 30
    },
    secondstats: {
      attacks: 1,
      wounds: 4,
      magic: 0
    },
    description: 'Demagogues are the most popular Agitators, public speakers so gifted that they can move countries with their persuasive words. They are always counted among the leaders of whatever cause they choose to champion. Those in power view Demagogues with a great deal of suspicion, as they are far too capable of stirring up dissent or sowing mistrust against the government or the church. If they can be properly directed however, they’re also very useful for rallying the people against Chaos and other threats. Thus the authorities treat popular Demagogues with caution and sometimes even favour.',
    skills: [
      'Academic Knowledge (History)',
      'Academic Knowledge (Law)',
      'Blather',
      'Charm',
      'Command',
      'Common Knowledge (the Empire)',
      'Concealment',
      'Disguise',
      'Dodge Blow',
      'Gossip',
      'Intimidate',
      'Perception',
      'Speak Language (Reikspiel)'
    ],
    talents: [
      'Etiquette or Streetwise',
      'Master Orator',
      'Public Speaking',
      'Street Fighting'
    ],
    trappings: [
      'Light Armour (Leather Jack and Leather Skullcap)'
    ],
    entries: [
      'Agitator',
      'Anointed Priest',
      'Artisan',
      'Charlatan',
      'Crime Lord',
      'Flagellant',
      'Friar',
      'Initiate',
      'Minstrel',
      'Outlaw',
      'Outlaw Chief',
      'Politician',
      'Rogue',
      'Vampire Hunter',
      'Witch Hunter',
      'Catechist',
      'Cloaked Brother',
      'Faceless',
      'Foreman',
      'Gambler',
      'Hag Witch',
      'Herrimault',
      'Litigant',
      'Mediator',
      'Monk',
      'Mystic',
      'Newssheet Vendor',
      'Pamphleteer',
      'Pilgrim',
      'Prelate',
      'Raconteur',
      'Village Elder',
      'Wise Woman'
    ],
    exits: [
      'Crime Lord',
      'Friar',
      'Mercenary',
      'Outlaw Chief',
      'Politician',
      'Cloaked Brother',
      'Faceless',
      'Pamphleteer'
    ],
    notes: '',
    source: 'WHFR'
  },
  {
    name: 'Dilettante',
    type: 'Basic',
    mainstats: {
      ws: 5,
      bs: 5,
      s: 5,
      t: 5,
      ag: 5,
      int: 5,
      wp: 5,
      fel: 5
    },
    secondstats: {
      attacks: 0,
      wounds: 2,
      magic: 0
    },
    description: 'Dilettantes like to think of themselves as scholars, and, indeed, they may pass as scholars among most folk; they read and write, for a start. However, they often lack the discipline or passion that leads true scholars to focus on one task and become truly skilled at that, rather spreading their efforts across many. Most dilettantes are from wealthy backgrounds; the poor find that imminent starvation focuses the mind wonderfully.',
    skills: [
      'Knowledge (any one)',
      'Blather',
      'Common Knowledge (any)',
      'Common Knowledge (any)',
      'Evaluate or Gossip',
      'Navigation',
      'Perception',
      'Read/Write',
      'Secret Language (any one) or Secret Signs (any one)',
      'Speak Language (any)',
      'Speak Language (any)',
      'Trade (Artist or Calligrapher or Cartographer) (See special rule, below)'
    ],
    talents: [
      'Etiquette'
    ],
    trappings: [
      '3 books',
      'craft tools',
      'writing kit'
    ],
    entries: [
      'None',
      'Noble'
    ],
    exits: [
      'Apprentice Wizard',
      'Astrologer',
      'Barber-Surgeon',
      'Catechist',
      'Charlatan',
      'Courtier',
      'Initiate',
      'Navigator',
      'Raconteur',
      'Student',
      'Tomb Robber',
      'Tradesman',
      'Verenean Investigator',
      'Rapscallion'
    ],
    notes: 'A Dilettante may not, in this career, buy a skill he already possesses, and thus may not gain any Skill Mastery bonuses. He does not lose any he already has.',
    source: 'CC'
  },
  {
    name: 'Drover',
    type: 'Basic',
    mainstats: {
      ws: 5,
      bs: 10,
      s: 10,
      t: 5,
      ag: 10,
      int: 0,
      wp: 5,
      fel: 0
    },
    secondstats: {
      attacks: 0,
      wounds: 2,
      magic: 0
    },
    description: 'Great herds of domesticated animals endlessly cross the wind-swept oblast, escorted from pasture to market, from market to customer. The tireless drovers overseeing these transfers can travel many hundred of miles with their herds, and some even visit distant markets in Ostermark or Ostland. Most drovers employ vicious dogs to help direct and guard the herds, and the distinctive barks and whistles used to control these hounds are a familiar sound on the oblast. In the civilised south there are regular competitions between drovers to see who can best herd animals with their dogs, and the winner is guaranteed the most lucrative contracts.',
    skills: [
      'Animal Care',
      'Animal Training or Charm Animal',
      'Common Knowledge (Kislev or Troll Country)',
      'Follow Trail',
      'Navigation',
      'Outdoor Survival',
      'Perception',
      'Ride',
      'Speak Language (Kislevarin or Ungol)'
    ],
    talents: [
      'Orientation',
      'Rover or Seasoned Traveller',
      'Specialist Weapon Group (Entangling)'
    ],
    trappings: [
      'herd dog',
      'Kislevite horse',
      'saddle and harness',
      'lasso',
      'several days of rations',
      'skins for water or kvas',
      'yurta for shelter',
      'leather jack and leggings'
    ],
    entries: [
      'Coachman',
      'Messenger',
      'Outrider',
      'Steppes Nomad',
      'Horse Master'
    ],
    exits: [
      'Highwayman',
      'Horse Coper',
      'Horse Master',
      'Messenger',
      'Outlaw',
      'Outrider',
      'Roadwarden',
      'Scout'
    ],
    notes: '',
    source: 'RotIQ'
  },
  {
    name: 'Duellist',
    type: 'Advanced',
    mainstats: {
      ws: 20,
      bs: 20,
      s: 10,
      t: 20,
      ag: 20,
      int: 15,
      wp: 15,
      fel: 10
    },
    secondstats: {
      attacks: 1,
      wounds: 4,
      magic: 0
    },
    description: 'A complex legal system of formal duels was established throughout the Empire ages ago. Duellists are specialists in the lethal application of sword and pistol, hiring themselves out to safeguard the honour of others, though many of their kind come from the ranks of younger Nobles who duel for their own purposes. Duellists come in two varieties: happy-go-lucky devil-may-care swashbucklers who regard their exploits as a continuous adventure, and deadly serious fighters who wear their honour on their sleeves and are very quick to take offence at slights, imagined or otherwise.',
    skills: [
      'Charm',
      'Dodge Blow',
      'Gamble',
      'Gossip',
      'Intimidate',
      'Perception',
      'Sleight of Hand'
    ],
    talents: [
      'Ambidextrous or Disarm',
      'Etiquette',
      'Master Gunner',
      'Mighty Shot',
      'Quick Draw',
      'Sharpshooter',
      'Specialist Weapon Group (Fencing)',
      'Specialist Weapon Group (Gunpowder)',
      'Specialist Weapon Group (Parrying)',
      'Strike Mighty Blow',
      'Strike to Injure',
      'Swashbuckler'
    ],
    trappings: [
      'Main Gauche',
      'Pistol with Powder and Ammunition for 10 Shots',
      'Rapier'
    ],
    entries: [
      'Courtier',
      'Estalian Diestro',
      'Highwayman',
      'Pistolier',
      'Protagonist',
      'Sergeant',
      'Targeteer',
      'Rapscallion'
    ],
    exits: [
      'Assassin',
      'Champion',
      'Highwayman',
      'Rogue',
      'Sergeant'
    ],
    notes: '',
    source: 'WHFR'
  },
  {
    name: 'Dung Collector',
    type: 'Basic',
    mainstats: {
      ws: 5,
      bs: 0,
      s: 5,
      t: 10,
      ag: 5,
      int: 0,
      wp: 5,
      fel: 0
    },
    secondstats: {
      attacks: 0,
      wounds: 2,
      magic: 0
    },
    description: 'Ensuring the streets are clean, these brave workers walk the alleys and thoroughfares with shovel and sturdy fortitude, pushing the worst of the offal out of the way to allow people to walk. Some are enterprising businessmen working the districts who can afford them, whilst others work for the city, patrolling the districts of those who pay them. While certainly not glorious, dung collectors often make do by selling dried dung as cheap fuel through the winters.',
    skills: [
      'Animal Care',
      'Common Knowledge (Empire)',
      'Consume Alcohol',
      'Drive',
      'Haggle',
      'Perception',
      'Search'
    ],
    talents: [
      'Coolheaded',
      'Fearless or Resistance to Disease'
    ],
    trappings: [
      'Cart',
      'Shovel',
      'Bag of Maggots',
      'Dung'
    ],
    entries: [
      'Camp Follower',
      'Peasant',
      'Rat Catcher',
      'Vagabond'
    ],
    exits: [
      'Grave Robber',
      'Rat Catcher',
      'Sewer Jack',
      'Thug'
    ],
    notes: '',
    source: 'FoN'
  },
  {
    name: 'Embalmer',
    type: 'Basic',
    mainstats: {
      ws: 0,
      bs: 0,
      s: 5,
      t: 5,
      ag: 0,
      int: 15,
      wp: 10,
      fel: 5
    },
    secondstats: {
      attacks: 0,
      wounds: 2,
      magic: 0
    },
    description: 'Not everyone wishes to be interred in Morr’s Gardens. Some prefer a more preserving process after their death, for themselves or their animal companions, and they turn to the embalmers. These masters of pickling, preservation, and taxidermy are not just a fad of the wealthy. The individuals increasingly have a hand in the growing field of medicine, and money can be made hand over fist in selling their curios to customers with a particular purpose in mind. Many priests of Morr (and much of the general population) consider cutting bits off people and putting them in jars to be an assault on both the body and spirit of the deceased, and Witch Hunters are well aware of how easily such merchants turn to the dark arts. As such, many embalmers choose to hide their Human exhibits behind their animal displays or their surgery services until the day scientists of their calibre are finally given the respect and recognition they deserve.',
    skills: [
      'Academic Knowledge (Necromancy',
      'Science)',
      'Evaluate',
      'Haggle',
      'Heal',
      'Perception',
      'Read/Write',
      'Sleight of Hand',
      'Speak Language (Classical)',
      'Trade (Apothecary)'
    ],
    talents: [
      'Dealmaker or Streetwise',
      'Resistance to Disease',
      'Surgery'
    ],
    trappings: [
      'Abacus',
      'Ether-Soaked Apron',
      'Spare Hand',
      'Trade Tools (Barber-Surgeon)',
      'Writing Kit'
    ],
    entries: [
      'Apothecary',
      'Barber-Surgeon',
      'Student',
      'Tradesman'
    ],
    exits: [
      'Apprentice Wizard',
      'Burgher',
      'Grave Robber',
      'Physician',
      'Scholar'
    ],
    notes: '',
    source: 'NDM'
  },
  {
    name: 'Enforcer',
    type: 'Advanced',
    mainstats: {
      ws: 20,
      bs: 20,
      s: 10,
      t: 10,
      ag: 10,
      int: 20,
      wp: 10,
      fel: 5
    },
    secondstats: {
      attacks: 1,
      wounds: 4,
      magic: 0
    },
    description: 'Enforcers wander the Border Princes, providing justice or, failing that, vengeance. Or sometimes they just provide random violence, because anyone can make a mistake. On the whole, however, Enforcers have a code of right and wrong that they uphold. They pay no attention to the legal authority of princes or, indeed, to law, relying entirely on their own sense of ethics and ability to uncover true villains. Most Enforcers regard rogue Enforcers as the blackest of villains because their actions mean that any Enforcer is at risk of being run out of an area.',
    skills: [
      'Charm',
      'Command',
      'Common Knowledge (Border Princes)',
      'Concealment',
      'Disguise',
      'Follow Trail',
      'Gossip',
      'Intimidate',
      'Perception',
      'Search',
      'Shadowing',
      'Torture'
    ],
    talents: [
      'Menacing',
      'Quick Draw',
      'Schemer',
      'Specialist Weapon Group (Entangling)',
      'Street Fighting'
    ],
    trappings: [
      'Medium Armour (Chain Shirt and Leather Jack)',
      'Net'
    ],
    entries: [
      'Bounty Hunter',
      'Hunter',
      'Watchman'
    ],
    exits: [
      'Spy',
      'Witch Hunter'
    ],
    notes: '',
    source: 'RC'
  },
  {
    name: 'Engineer',
    type: 'Advanced',
    mainstats: {
      ws: 10,
      bs: 15,
      s: 5,
      t: 5,
      ag: 10,
      int: 20,
      wp: 10,
      fel: 0
    },
    secondstats: {
      attacks: 0,
      wounds: 4,
      magic: 0
    },
    description: 'It was the Dwarfs who first introduced the science of engineering to the Old World. Among them, the Engineers’ Guild is deeply respected and its works are held in high esteem, so long as it upholds traditional methods and values. Humanity took what the Dwarfs had to offer and ran with it, especially in regards to gunpowder and other devices suitable for use as weapons. The Imperial School of Engineers in Altdorf is famed for its bizarre inventions, which can be most useful if they manage to function correctly. Outside the Empire, Tileans are particularly famed for their bold engineering ideas.',
    skills: [
      'Academic Knowledge (Engineering)',
      'Academic Knowledge (Science)',
      'Common Knowledge (Dwarfs or Tilea)',
      'Drive or Ride',
      'Perception',
      'Read/Write',
      'Speak Language (Khazalid or Tilean)',
      'Trade (Gunsmith)'
    ],
    talents: [
      'Master Gunner',
      'Specialist Weapon Group (Engineer or Gunpowder)'
    ],
    trappings: [
      'Light Armour (Leather Jack)',
      'Engineer’s Kit',
      '6 Spikes'
    ],
    entries: [
      'Artisan',
      'Miner',
      'Student',
      'Tradesman',
      'Deepwatcher'
    ],
    exits: [
      'Artisan',
      'Explorer',
      'Guild Master',
      'Pistolier',
      'Smuggler',
      'Artillerist',
      'Pamphleteer'
    ],
    notes: '',
    source: 'WHFR'
  },
  {
    name: 'Entertainer',
    type: 'Basic',
    mainstats: {
      ws: 5,
      bs: 10,
      s: 0,
      t: 0,
      ag: 10,
      int: 0,
      wp: 5,
      fel: 10
    },
    secondstats: {
      attacks: 0,
      wounds: 2,
      magic: 0
    },
    description: 'From acrobats to strongmen, from knife throwers to hypnotists, from dancers to ventriloquists, the Empire is full of Entertainers. Some do it for the roar of the crowd and others for the money. Many become Entertainers just to escape the hard life of the Imperial villager. Entertainers travel frequently, sometimes alone but more often in troupes that perform in villages, towns, and cities. Lucky troupes get continuous bookings, sometimes spending months in the same city. The less fortunate scrape by as they can, always looking for a more appreciative crowd (or a less suspicious watch) over the next hill. The very best Entertainers gain Noble sponsorship and earn undreamed of sums of money performing for the upper crust.',
    skills: [
      'Animal Care or Swim',
      'Charm',
      'Common Knowledge (the Empire)',
      'Evaluate or Gossip',
      'Perception',
      'Performer (any two)',
      'Speak Language (Reikspiel)',
      'Any one of: Animal Training, Blather, Charm Animal, Hypnotism, Ride, Scale Sheer Surface, Sleight of Hand, Ventriloquism'
    ],
    talents: [
      'Any two of: Lightning Reflexes',
      'Mimic',
      'Public Speaking',
      'Quick Draw',
      'Sharpshooter',
      'Specialist Weapon Group (Throwing)',
      'Trick Riding',
      'Very Strong',
      'Wrestling'
    ],
    trappings: [
      'Light Armour (Leather Jerkin)',
      'Any one of: Instrument (any onee), Trade Tools (Performer), 3 Throwing Knives, 2 Throwing Axes',
      'Any one of: Costume',
      'One Set of Good Craftmanship Clothes'
    ],
    entries: [
      'Herald',
      'Rogue',
      'Thief',
      'Vagabond',
      'Animal Trainer',
      'Bear Tamer',
      'Cantor',
      'Gambler',
      'Lamplighter',
      'Newssheet Vendor',
      'Raconteur',
      'Strigany Mystic'
    ],
    exits: [
      'Charlatan',
      'Minstrel',
      'Rogue',
      'Thief',
      'Vagabond',
      'Animal Trainer',
      'Bear Tamer',
      'Cantor',
      'Gambler',
      'Pamphleteer',
      'Raconteur',
      'Skald'
    ],
    notes: '',
    source: 'WHFR'
  },
  {
    name: 'Envoy',
    type: 'Basic',
    mainstats: {
      ws: 5,
      bs: 5,
      s: 0,
      t: 0,
      ag: 5,
      int: 10,
      wp: 5,
      fel: 10
    },
    secondstats: {
      attacks: 0,
      wounds: 2,
      magic: 0
    },
    description: 'The elder members of the great Elven mercantile families are far removed from the everyday life of the Empire. To them, Humans live and die so quickly that it’s hard to keep up with current trends and politics in the Old World. When they need such knowledge, they turn to their Envoys. These young Elves are the public face of the Merchant Houses. They negotiate the contracts, make the deals, and keep the peace with the Humans of trading hubs such as Altdorf, Nuln, and Marienburg. Even Elves have a limit to their patience, so it is unsurprising that many Envoys take leave of their families for the adventurer’s life.',
    skills: [
      'Charm',
      'Common Knowledge (the Empire or the Wasteland)',
      'Evaluate',
      'GOssip',
      'Haggle',
      'Perception',
      'Read/Write',
      'Secret Language (Guild Tongue)',
      'Swim',
      'Trade (Merchant)'
    ],
    talents: [
      'Dealmaker or Seasoned Traveller'
    ],
    trappings: [
      'Light Armour (Leather Jack)',
      '2 sets of Good Workmanship Clothes',
      'Writing Kit'
    ],
    entries: [
      'Student',
      'Tradesman'
    ],
    exits: [
      'Charlatan',
      'Merchant',
      'Rogue',
      'Seaman',
      'Student',
      'Vagabond',
      'Litigant'
    ],
    notes: 'Only Elves can enter this career.',
    source: 'WHFR'
  },
  {
    name: 'Estalian Diestro',
    type: 'Basic',
    mainstats: {
      ws: 15,
      bs: 0,
      s: 5,
      t: 5,
      ag: 10,
      int: 5,
      wp: 0,
      fel: 0
    },
    secondstats: {
      attacks: 1,
      wounds: 2,
      magic: 0
    },
    description: 'The Estalian Kingdoms are southwest of the Empire. There the threat of Chaos seems remote. The Chaos Wastes are quite distant from this sunny land, which has never witnessed the wrath of bloodthirsty hordes the way the Empire and Kislev have. Its people engage in other pursuits, from science and scholarship to crime and vendetta. One thing Estalians dearly love is swordplay. Its cities sport many fencing schools, each with its own style. Many of these styles are descended from the teachings of Master Figueroa, a legendary swordsman who applied the latest scientific theories to his swordplay with spectacular results. Followers of the Figueroa style, known as Diestro, fight and duel across Estalia. Some, bored with their homeland, seek excitement elsewhere, favouring Tilea and Bretonnia. The bravest travel northeast to the Empire to test their rapiers against worthy opponents, and to see a land in the front line of the struggle against Chaos.',
    skills: [
      'Academic Knowledge (Science)',
      'Common Knowledge (Estalia)',
      'Dodge Blow',
      'Read/Write',
      'Speak Language (Estalian)'
    ],
    talents: [
      'Lightning Reflexes or Swashbuckler',
      'Quick Draw or Strike to Injure',
      'Specialist Weapon Group (Fencing)',
      'Strike Mighty Blow'
    ],
    trappings: [
      'Foil or Rapier',
      'One set of Best Craftmanship Clothes',
      'Perfume or Cologne',
      'Healing Draught'
    ],
    entries: [
      'None'
    ],
    exits: [
      'Bodyguard',
      'Duellist',
      'Highwayman',
      'Protagonist',
      'Rogue',
      'Cadet'
    ],
    notes: 'If this is your Starting Career, you are from Estalia, but have come to the Empire to seek adventure.',
    source: 'WHFR'
  },
  {
    name: 'Ex-Convict',
    type: 'Basic',
    mainstats: {
      ws: 10,
      bs: 0,
      s: 5,
      t: 10,
      ag: 5,
      int: 0,
      wp: 10,
      fel: 0
    },
    secondstats: {
      attacks: 0,
      wounds: 2,
      magic: 0
    },
    description: 'The prisons of the Old World are brutal sub-realms unto themselves where only the strong and ruthless survive. Of the few convicts who do live through their sentences, most return to society as harder criminals than before they entered prison. The Shallyan might preach about forgiveness and secondchances, but the truth is that the rare ex-convict who does manage to reform is met with the same suspicion and resentment as those who do not. In the end, most ex-convicts are released into an unreceptive world with few opportunities other than to commit new crimes, return to prison and begin the cycle anew.',
    skills: [
      'Concealment',
      'Dodge Blow',
      'Secret Language (Prison Cant)',
      'Sleight of Hand'
    ],
    talents: [
      'Flee!',
      'Resistance to Disease or Contortionist',
      'Street Fighter or Wrestling'
    ],
    trappings: [
      'Good Craftsmanship Improvised Weapon',
      'Bone Dice',
      'Lice',
      'Poor Clothes'
    ],
    entries: [
      'Agitator',
      'Grave Robber',
      'Outlaw',
      'Protagonist',
      'Rogue',
      'Smuggler',
      'Thief',
      'Thug',
      'Tomb Robber'
    ],
    exits: [
      'Cat Burglar',
      'Charlatan',
      'Fence',
      'Grave Robber',
      'Highwayman',
      'Outlaw',
      'Protagonist',
      'Racketeer',
      'Thug',
      'Vagabond'
    ],
    notes: '',
    source: 'Career Compendium'
  },
  {
    name: 'Exciseman',
    type: 'Basic',
    mainstats: {
      ws: 10,
      bs: 0,
      s: 0,
      t: 0,
      ag: 10,
      int: 10,
      wp: 5,
      fel: 5
    },
    secondstats: {
      attacks: 0,
      wounds: 2,
      magic: 0
    },
    description: 'All cities require taxes and tariffs to function. The constant flow of money ensures public works and servants receive the funding they need, whilst also lining the pockets of the politicians. But no matter how good the cause or how noble the deed, no one likes to pay taxes. Since this is unpopular reality, most lawmakers distance themselves from the collection of monies, relying on specially hired Excisemen to do their work instead. Of all the people in the city, the Exciseman is likely the most unpopular, right alongside the dyers, beggars, and the rest of the rabble. Though they face hostility at every turn, most Excisemen know their duty is a necessary one. Still, these individuals are rarely well paid for their thankless job. As a result, few of them enjoy what they do and look for the fastest route to improve their lot, either through skimming the coffers and double-dealing or working extra hard in the faint hope of securing a better position in the government.',
    skills: [
      'Academic Knowledge (Law)',
      'Blather',
      'Charm',
      'Evaluate',
      'Gossip',
      'Haggle',
      'Read/Write'
    ],
    talents: [
      'Dealmaker',
      'Savvy or Suave',
      'Schemer',
      'Super Numerate'
    ],
    trappings: [
      'Abacus',
      'Hand Weapon',
      'Light Armour',
      'Writing Kit',
      '1d10/2 gc'
    ],
    entries: [
      'Messenger',
      'Scribe'
    ],
    exits: [
      'Agitator',
      'Litigant',
      'Merchant',
      'Militiaman',
      'Outlaw',
      'Roadwarden',
      'Thief'
    ],
    notes: '',
    source: 'TiT'
  },
  {
    name: 'Exorcist',
    type: 'Advanced',
    mainstats: {
      ws: 0,
      bs: 0,
      s: 10,
      t: 15,
      ag: 15,
      int: 20,
      wp: 35,
      fel: 20
    },
    secondstats: {
      attacks: 1,
      wounds: 6,
      magic: 2
    },
    description: 'Among the many dangers (natural and unnatural) facing the people of the Old World is possession by malefic spirits. Seeking to do harm in the land of the living, these spirits take over the bodies of their victims with the goal of wreaking as much havoc as possible. Some are nearly mindless, sending their hosts on violent rampages ending most often in the death of all concerned. Others are subtler in their activities, using the victim’s unwitting friends, family, and associates to help it carry out horrifying deeds. Among the Undead, possession commonly reflects a desire to resume the life the spirit once led, to be close again to a loved one, or to have revenge.',
    skills: [
      'Academic Knowledge (Theology)',
      'Academic Knowledge (Daemonology or Necromancy)',
      'Channelling',
      'Command',
      'Hypnotism',
      'Intimidate',
      'Magical Sense',
      'Perception',
      'Speak Arcane Language (Magick)',
      'Speak Arcane Language (Daemonic)',
      'Speak Language (any one)'
    ],
    talents: [
      'Coolheaded or Savvy',
      'Divine Lore (any one)',
      'Lesser Magic (Exorcism)',
      'Lesser Magic (any one)',
      'Menacing or Sixth Sense',
      'Strong-minded or Stout-hearted'
    ],
    trappings: [
      'Cult Robes',
      'License',
      'Prayer Book',
      'Religious Symbol'
    ],
    entries: [
      'Anointed Priest',
      'Priest'
    ],
    exits: [
      'Anointed Priest',
      'Lay Priest',
      'Scholar',
      'Witch Hunter'
    ],
    notes: '',
    source: 'Sigmar\'s Heir'
  },
  {
    name: 'Explorer',
    type: 'Advanced',
    mainstats: {
      ws: 20,
      bs: 20,
      s: 10,
      t: 15,
      ag: 15,
      int: 25,
      wp: 20,
      fel: 15
    },
    secondstats: {
      attacks: 1,
      wounds: 6,
      magic: 0
    },
    description: 'Explorers are afflicted by wanderlust and travel extensively across the Old World and beyond. They channel their great need to know what lies beyond the next horizon into finding new lands and new opportunities for trade. Explorers regularly delve into the unknown, which either turns them into canny fighters and diplomats or makes them very short-lived. They are skilled in travelling by both land and sea. Explorers tend to be highly capable individuals. The variety of roles they are called upon to assume forces them to become very flexible, able to command troops or negotiate in tongues they barely understand.',
    skills: [
      'Academic Knowledge (History or Law)',
      'Command',
      'Common Knowledge (any three)',
      'Drive',
      ' Evaluate',
      'Follow Trail',
      'Navigation',
      'Outdoor Survival',
      'Perception',
      'Read/Write',
      'Ride',
      'Scale Sheer Surface',
      'Secret Language (Ranger Tongue)',
      'Secret Signs (Scout)',
      'Speak Language (any three)',
      'Swim',
      'Trade Cartographer)'
    ],
    talents: [
      'Orientation or Linguistics',
      'Seasoned Traveller'
    ],
    trappings: [
      'Bow or Crossbow with 10 arrows or bolts',
      'Hand Weapon',
      'Medium Armour (Mail Shirt and Leather Jack)',
      'Shield',
      '6 Maps',
      '1',
      '000 gc in coin and trade goods',
      'Riding Horse with saddle and harness'
    ],
    entries: [
      'Captain',
      'Engineer',
      'Herald',
      'Master Thief',
      'Master Wizard',
      'Mate',
      'Navigator',
      'Scholar',
      'Scout',
      'Sea Captain',
      'Spy',
      'Wizard Lord',
      'Admiral',
      'Astrologer',
      'Badlands Ranger',
      'Cartographer',
      'Crusader',
      'Deepwatcher',
      'Faceless',
      'Grail Knight',
      'Knight of the Blazing Sun',
      'Knight of the Realm',
      'Questing Knight'
    ],
    exits: [
      'Captain',
      'Merchant',
      'Sea Captain',
      'Spy',
      'Badlands Ranger'
    ],
    notes: '',
    source: 'WHFR'
  },
  {
    name: 'Faceless',
    type: 'Advanced',
    mainstats: {
      ws: 10,
      bs: 30,
      s: 10,
      t: 20,
      ag: 10,
      int: 10,
      wp: 10,
      fel: 35
    },
    secondstats: {
      attacks: 2,
      wounds: 6,
      magic: 0
    },
    description: 'All bands of Herrimaults have a leader; if a group gathers by chance, either a leader arises or the group fragments once more. Successful bands of Herrimaults are almost always led by a Faceless, an individual highly experienced in the pursuit of right and justice by unconventional means. Faceless, unlike conventional Outlaw Chiefs, rarely have to worry about being stabbed in the back by their own followers. Similarly, most encourage potential Faceless in their band to develop and then establish their own group. Ethics have their advantages. On the other hand, they have to keep their band fed, find shelter, and right wrongs, all without stepping over the ethical lines that they set for themselves. Eventually, some find the pressure too great.',
    skills: [
      'Academic Knowledge (Strategy/Tactics)',
      'Charm',
      'Command',
      'Common Knowledge (Bretonnia)',
      'Concealment',
      'Follow Trail',
      'Gossip',
      'Outdoor Survival',
      'Perception',
      'Scale Sheer Surface',
      'Secret Language (Battle Tongue)',
      'Secret Signs (Ranger or Scout)',
      'Silent Move'
    ],
    talents: [
      'Mighty Shot',
      'Public Speaking',
      'Rapid Reload',
      'Sure Shot',
      'Unsettling'
    ],
    trappings: [
      'Bow with 10 Arrows',
      'Medium Armour (Sleeved Mail Shirt and Leather Jack)',
      'Band of Herrimaults',
      'Deep Hood or Mask'
    ],
    entries: [
      'Battle Pilgrim',
      'Crime Lord',
      'Demagogue',
      'Knight of the Realm',
      'Noble Lord',
      'Outlaw Chief',
      'Politician',
      'Questing Knight',
      'Steward',
      'Veteran',
      'Grail Knight',
      'Village Elder',
      'Yeoman'
    ],
    exits: [
      'Crime Lord',
      'Demagogue',
      'Explorer',
      'Highwayman',
      'Outlaw Chief',
      'Village Elder'
    ],
    notes: 'Women can only become Faceless if disguised as men',
    source: 'KotG'
  },
  {
    name: 'Farmer',
    type: 'Basic',
    mainstats: {
      ws: 5,
      bs: 5,
      s: 10,
      t: 10,
      ag: 5,
      int: 0,
      wp: 5,
      fel: 0
    },
    secondstats: {
      attacks: 0,
      wounds: 2,
      magic: 0
    },
    description: 'The old feudal order of the Empire is no longer what it once was, and a new enterprising class is bridging the gap between peasant and noble. In cities, burghers have begun to appear. Their equivalent in the countryside is an emerging class of landed gentry. Land is often parcelled out to commoners as a reward for military service, or merchants invest their wealth by purchasing the estates of impoverished nobles. Rarely, tenant peasants save enough to buy the fields they till from their lord. Land is inherited, but no farmer’s claim yet spans more than a couple of generations. A farmer employs many hands to work the land, but he toils as hard as any peasant, for the wealth that hard work brings provides a significant social standing in the rural community.',
    skills: [
      'Animal Care',
      'Charm Animal',
      'Drive',
      'Evaluate',
      'Haggle',
      'Intimidate or Charm',
      'Ride',
      'Set Trap',
      'Trade (Farmer)'
    ],
    talents: [
      'Dealmaker',
      'Hardy',
      'Specialist Weapon (Scythe or Flail)'
    ],
    trappings: [
      'Cart pulled by a horse or ox',
      'scythe (two-handed weapon) or threshing flail (flail)',
      'sheep dog.'
    ],
    entries: [
      'Innkeeper',
      'Merchant',
      'Peasant',
      'Tradesman',
      'Veteran'
    ],
    exits: [
      'Innkeeper',
      'Merchant',
      'Militiaman',
      'Politician',
      'Steward',
      'Animal Trainer'
    ],
    notes: '',
    source: 'Career Compendium'
  },
  {
    name: 'Fence',
    type: 'Advanced',
    mainstats: {
      ws: 15,
      bs: 10,
      s: 10,
      t: 5,
      ag: 10,
      int: 5,
      wp: 10,
      fel: 10
    },
    secondstats: {
      attacks: 1,
      wounds: 4,
      magic: 0
    },
    description: 'The majority of Burghers and Tradesmen are willing to deal in goods of questionable legality. Such merchandise is the stock and trade of the Fence. They are experts at liquidating stolen goods. For a percentage of the profit, they take a thief’s bounty and move it to another town, city, or even country where it can be more safely disposed of. Fences are experts at evaluating the worth of any given item and therefore exactly how hot it is likely to be. The greater the risk, the greater the cut they demand.',
    skills: [
      'Evaluate',
      'Gamble',
      'Gossip',
      'Haggle',
      'Intimidate',
      'Perception',
      'Sleight of Hand'
    ],
    talents: [
      'Dealmaker or Streetwise',
      'Strike to Stun',
      'Super Numerate'
    ],
    trappings: [
      'Trade Tools (Engraver’s Kit)',
      'Writing Kit'
    ],
    entries: [
      'Burgher',
      'Cat Burglar',
      'Ex-Convict',
      'Grave Robber',
      'Innkeeper',
      'Racketeer',
      'Rapscallion',
      'Smuggler',
      'Steward',
      'Thief',
      'Tomb Robber',
      'Bonepicker',
      'Foreman',
      'Forger'
    ],
    exits: [
      'Charlatan',
      'Crime Lord',
      'Master Thief',
      'Racketeer'
    ],
    notes: '',
    source: 'WHFR'
  },
  {
    name: 'Ferryman',
    type: 'Basic',
    mainstats: {
      ws: 5,
      bs: 5,
      s: 10,
      t: 5,
      ag: 5,
      int: 5,
      wp: 0,
      fel: 0
    },
    secondstats: {
      attacks: 0,
      wounds: 2,
      magic: 0
    },
    description: 'Rivers both large and small cut through the Empire. While a few are shallow enough to ford easily, most require transport to cross safely. Ferrymen make their living moving people and goods across the Empire’s rivers, for a fee of course. They favour flat-bottomed barges because they have a shallow draft and plenty of deckspace. Ferrymen in more remote areas also favour the blunderbuss. Bandits are a constant danger and the blunderbuss provides not-so-subtle encouragement to move along. Many Ferrymen are also extortionists of the highest order, arbitrarily changing their prices based on the apparent wealth and desperateness of their passengers.',
    skills: [
      'Charm',
      'Common Knowledge (the Empire)',
      'Evaluate or Secret Language (Ranger)',
      'Gossip or Intimidate',
      'Haggle',
      'Perception',
      'Row',
      'Swim'
    ],
    talents: [
      'Marksman or Suave',
      'Specialist Weapon Group (Gunpowder) or Street Fighting'
    ],
    trappings: [
      'Crossbow with 10 bolts or Blunderbuss with powder/ammunition enough for 10 shots',
      'Light Armour (Leather Jack)'
    ],
    entries: [
      'Coachman',
      'Smuggler',
      'Toll Keeper'
    ],
    exits: [
      'Boatman',
      'Highwayman',
      'Roadwarden',
      'Seaman',
      'Smuggler',
      'Riverwarden',
      'Swampaire',
      'Wrecker'
    ],
    notes: '',
    source: 'WHFR'
  },
  {
    name: 'Fieldwarden',
    type: 'Basic',
    mainstats: {
      ws: 5,
      bs: 10,
      s: 0,
      t: 5,
      ag: 10,
      int: 0,
      wp: 10,
      fel: 0
    },
    secondstats: {
      attacks: 0,
      wounds: 2,
      magic: 0
    },
    description: 'To outsiders the Moot looks like a safe and happy land. The extent to which that’s true is due to the Fieldwardens. These Halflings patrol the borders of the Moot, keeping away threats and unwanted outsiders. They are skilled skirmishers who use their intimate knowledge of the Moot to maximum advantage. They prefer to attack from ambush, using their superior skill with missile weapons to neutralize the size advantage of their foes. Since the Moot shares a border with Sylvania, the Fieldwardens have particular expertise in dealing with the living dead. More than one band of zombies has been brought down by a fusillade of slingstones from determined Fieldwardens.',
    skills: [
      'Academic Knowledge (Necromancy) or Common Knowledge (the Empire)',
      'Concealment',
      'Follow Trail',
      'Outdoor Survival',
      'Perception',
      'Search',
      'Silent Move'
    ],
    talents: [
      'Fleet Footed or Savvy',
      'Mighty Shot or Rapid Reload',
      'Rover or Quick Draw'
    ],
    trappings: [
      'Sling with Ammunition',
      'Lantern',
      'Lamp Oil',
      'Spade',
      'Pony with Saddle and Harness'
    ],
    entries: [
      'Hunter',
      'Militiaman',
      'Toll Keeper'
    ],
    exits: [
      'Bounty Hunter',
      'Vagabond',
      'Vampire Hunter',
      'Agent of the Shroud',
      'Mercenary',
      'Scout'
    ],
    notes: 'Only Halflings can enter this career.',
    source: 'WHFR'
  },
  {
    name: 'Fisherman',
    type: 'Basic',
    mainstats: {
      ws: 0,
      bs: 5,
      s: 10,
      t: 5,
      ag: 10,
      int: 5,
      wp: 0,
      fel: 0
    },
    secondstats: {
      attacks: 0,
      wounds: 2,
      magic: 0
    },
    description: 'Fishermen seek the bounty of the sea. The many villages on Nordland’s coastline are home to countless Fishermen. These hearty souls brave the Sea of Claws in small craft, despite the constant threat of pirates and raiders from Norsca. There are also some fishing communities inland, by lakes and rivers, though these villages also pursue agriculture. Fishermen are an independent lot as a matter of course. They work in small crews, and when on the water every decision is their own. This spirited nature is one reason why dockside taverns are always unruly.',
    skills: [
      'Common Knowledge (the Empire or the Wasteland)',
      'Consume Alcohol or Haggle',
      'Navigation or Trade (Merchant)',
      'Outdoor Survival',
      'Perception',
      'Row',
      'Sail',
      'Speak Language (Reikspiel or Norse)',
      'Swim'
    ],
    talents: [
      'Hardy or Savvy',
      'Orientation or Street Fighting'
    ],
    trappings: [
      'Fish Hook and Line',
      'Spear'
    ],
    entries: [
      'Boatman',
      'Peasant'
    ],
    exits: [
      'Marine',
      'Merchant',
      'Militiaman',
      'Navigator',
      'Seaman',
      'Freeholder',
      'Whaler'
    ],
    notes: 'During character creation, if you take Common Knowledge (the Wasteland), your character can be from the great port of Marienburg at your option.',
    source: 'WHFR'
  },
  {
    name: 'Flagellant',
    type: 'Advanced',
    mainstats: {
      ws: 15,
      bs: 0,
      s: 10,
      t: 15,
      ag: 5,
      int: 0,
      wp: 20,
      fel: 10
    },
    secondstats: {
      attacks: 1,
      wounds: 6,
      magic: 0
    },
    description: 'Flagellants are crazed religious fanatics who barely care if they live or die, so long as they can strike a blow against Chaos and all that they perceive as vile before they go. They are often remarkablly charismatic individuals who lead other broken souls, as the force of their personality and their strong religious convictions draw others to them. Flagellants always wield massive weapons, the better to smite their enemies, and eschew the use of armour, feeling that their Gods will protect them until the proper time to die has come. Saner folk tend to actively avoid their company.',
    skills: [
      'Academic Knowledge (Theology)',
      'Charm',
      ' Heal',
      'Intimidate',
      'Speak Language (Classical)'
    ],
    talents: [
      'Fearless',
      'Specialist Weapon Group (Flail or Twohanded Weapon)',
      'Strike Mighty Blow'
    ],
    trappings: [
      'Flail or Great Weapon',
      'Bottle of Good Craftsmenship Spirits',
      'Religious Symbol',
      'Religious Relic'
    ],
    entries: [
      'Anointed Priest',
      'Friar',
      'Priest',
      'Zealot',
      'Penitent'
    ],
    exits: [
      'Demagogue',
      'Interrogator',
      'Priest',
      'Soldier',
      'Veteran',
      'Killer of the Dead',
      'Penitent',
      'Scourge of God'
    ],
    notes: 'You must have at least one insanity to enter this career.',
    source: 'WHFR'
  },
  {
    name: 'Foreman',
    type: 'Advanced',
    mainstats: {
      ws: 10,
      bs: 5,
      s: 10,
      t: 10,
      ag: 5,
      int: 5,
      wp: 15,
      fel: 15
    },
    secondstats: {
      attacks: 0,
      wounds: 4,
      magic: 0
    },
    description: 'Deep-throated voices echo through the crowded cities of the Old World as Foremen lead their sweating gangs with harsh words and bawdy song. In the bustling docks, the screech of a Foreman’s whistle sends the unemployed running from their smoky taverns, all desperate to shift backbreaking, heavy cargo from quay to warehouse in exchange for some coin. As Foremen are often paid according to the speed of their men’s work, they can be pitiless taskmasters, “motivating” their temporary workers by any means possible. In contrast, Stevedore Foremen lead their long-term gangs with tangible pride, confidently negotiating with dock owners and traders for extra work and wages as well as actively taking part in guild matters and turf disputes. Because of this, they typically look down upon their labourer-leading contemporaries with undisguised scorn.',
    skills: [
      'Charm or Consume Alcohol',
      'Command',
      'Common Knowledge (Kislev or the Empire or the Wasteland)',
      'Gamble or Gossip',
      'Haggle',
      'Perception',
      'Performer (Singer)',
      'Secret Language (Guild Tongue)'
    ],
    talents: [
      'Public Speaking',
      'Streetwise'
    ],
    trappings: [
      'Light Armour (Leather Jack)',
      'Whistle'
    ],
    entries: [
      'Peasant',
      'Stevedore',
      'Tradesman'
    ],
    exits: [
      'Demagogue',
      'Fence',
      'Guild Master',
      'Politician',
      'Racketeer'
    ],
    notes: '',
    source: 'WC'
  },
  {
    name: 'Forger',
    type: 'Advanced',
    mainstats: {
      ws: 5,
      bs: 5,
      s: 10,
      t: 10,
      ag: 20,
      int: 20,
      wp: 10,
      fel: 10
    },
    secondstats: {
      attacks: 0,
      wounds: 3,
      magic: 0
    },
    description: 'Forgers are the artists of the criminal world, but theirs is a calling of imitation, not original creation. Forgers make their living by copying a work by another and passing it off as an original, whether it is a painting of an emperor, the seal on an “official” document, or a signature on an incriminating letter. Forgers prefer to work in relative anonymity; not only is their work a crime often punished by mutilation, but revealing one of their creations as a fake spoils some of the triumph felt in a successful job.',
    skills: [
      'Academic Knowledge (the Arts)',
      'Charm',
      'Common Knowledge (any two)',
      'Evaluate',
      'Haggle',
      'Perception',
      'Read/Write',
      'Secret Signs (Thief)',
      'Speak Language (any one)',
      'Trade (Artist)',
      'Trade (Calligrapher)',
      'Trade (Smith)'
    ],
    talents: [
      'Artistic',
      'Coolheaded or Dealmaker',
      'Flee! or Suave'
    ],
    trappings: [
      'Trade Tools (Forger)',
      'Writing Kit'
    ],
    entries: [
      'Artisan',
      'Cartographer',
      'Messenger',
      'Smuggler',
      'Student',
      'Tradesman'
    ],
    exits: [
      'Artisan',
      'Charlatan',
      'Fence',
      'Scribe',
      'Tradesman',
      'Student',
      'Scholar'
    ],
    notes: 'The Old World Armoury includes rules for coin forgery',
    source: 'Sigmar\'s Heir'
  },
  {
    name: 'Freeholder',
    type: 'Basic',
    mainstats: {
      ws: 5,
      bs: 10,
      s: 0,
      t: 0,
      ag: 10,
      int: 5,
      wp: 10,
      fel: 10
    },
    secondstats: {
      attacks: 0,
      wounds: 3,
      magic: 0
    },
    description: 'One of the greatest rewards a Jarl may grant to his Bondsmen and loyal Peasants is land. Upon gaining property, these men and women are accorded a special status. For those who were not warriors, they have the same status as Bondsmen. For those who were once warriors, land is usually a gift given in exchange for lengthy and valued service. Many Freeholders eventually become Jarls if selected by their King. Otherwise, they gain a piece of land and a number of Thralls to work it.',
    skills: [
      'Animal Care',
      'Command',
      'Common Knowledge (Norsca)',
      'Drive',
      'Evaluate',
      'Gossip',
      'Haggle',
      'Speak Language (any one)',
      'Trade (any one)'
    ],
    talents: [
      'Dealmaker',
      'Public Speaking',
      'Savvy',
      'Schemer',
      'Suave'
    ],
    trappings: [
      'Longhouse and at least 1 Acre of Land',
      '1d10 Thralls',
      'Livestock'
    ],
    entries: [
      'Bondsman',
      'Burgher',
      'Fisherman',
      'Skald',
      'Whaler',
      'Tradesman'
    ],
    exits: [
      'Artisan',
      'Innkeeper',
      'Marauder',
      'Merchant'
    ],
    notes: '',
    source: 'ToC'
  },
  {
    name: 'Friar',
    type: 'Advanced',
    mainstats: {
      ws: 10,
      bs: 0,
      s: 5,
      t: 10,
      ag: 0,
      int: 15,
      wp: 15,
      fel: 15
    },
    secondstats: {
      attacks: 0,
      wounds: 4,
      magic: 0
    },
    description: 'Friars are mendicants who wander the Empire teaching religious virtue by example. Their orders date back to the time of Magnus the Pious. A Witch Hunter, Berndt of Wurtbad, was a particular foe of the cults of Slaanesh, the Chaos God of Sensuality and Pleasure. Berndt saw how decadence and lust lead inexorably to the embrace of Slaanesh. After years of blood and fire, Berndt laid aside his sword and torch, gave away his possessions, and began to walk the roads of the Empire preaching a message of poverty, chastity, and obedience. He wore nothing but a hair shirt and lived off the charity of the common folk. His fervent belief was that a humble life of poverty was the surest way to fight the insidious seduction of Chaos. The Order of St. Berndt was the first mendicant order of the Empire, though several others have sprung up since.',
    skills: [
      'Academic Knowledge (Theology)',
      'Animal Care',
      'Common Knowledge (any two)',
      'Heal',
      'Outdoor Survival',
      'Perception',
      'Speak Language (Breton, Estalian, Kislevian, or Tilean)',
      'Speak Language (Classical)',
      'Speak Language (Reikspiel)'
    ],
    talents: [
      'Seasoned Traveller'
    ],
    trappings: [
      'Healing Draught',
      'Religious Symbol',
      'Religious Relic',
      'Robes'
    ],
    entries: [
      'Demagogue',
      'Initiate',
      'Lay Priest',
      'Physician',
      'Prelate',
      'Scholar',
      'Vagabond',
      'Zealot',
      'Catechist',
      'Monk',
      'Pilgrim'
    ],
    exits: [
      'Demagogue',
      'Flagellant',
      'Lay Priest',
      'Prelate',
      'Priest',
      'Scholar',
      'Catechist',
      'Cloaked Brother',
      'Monk'
    ],
    notes: '',
    source: 'WHFR'
  },
  {
    name: 'Frogwife',
    type: 'Basic',
    mainstats: {
      ws: 0,
      bs: 0,
      s: 0,
      t: 5,
      ag: 10,
      int: 5,
      wp: 10,
      fel: 5
    },
    secondstats: {
      attacks: 0,
      wounds: 2,
      magic: 0
    },
    description: 'Frogwives are a common sight in Mousillon’s villages. They take the buckets of snails and frogs caught by the village Swampaires (often their husbands, sons, or fathers) and gut them  long into the evening. A Frogwife is not only an expert at the gutting and cleaning of frogs and snails, but also forms a crucial part of a village’s social structure. Frogwives tend to be relatively knowledgeable about the surrounding world, sometimes being permitted to leave the village for short periods of time to find useful herbs or other essentials from neighbouring villages. Some Frogwives are experts in the use of herbs, folk medicine, or some other esoteric but useful pursuit. It is a rare Frogwife who does not know the majority of what is going on in her village, and Frogwives have a deserved reputation as gossips, storytellers, and the originators of many strange superstitions. A Frogwife is almost always a woman, and it is a great shame for a man to labour at the swamp bucket.',
    skills: [
      'Common Knowledge (any one)',
      'Evaluate',
      'Gossip',
      'Haggle',
      'Perception',
      'Search',
      'Trade (Cook)'
    ],
    talents: [
      'Dealmaker',
      'Hardy or Rover',
      'Stout-hearted',
      'Streetwise'
    ],
    trappings: [
      'Entrails bucket',
      'frog guts',
      'snail shells',
      'sharp knife'
    ],
    entries: [
      'Camp Follower',
      'Peasant'
    ],
    exits: [
      'Boatman',
      'Camp Follower',
      'Swampaire',
      'Grail Pilgrim',
      'Herrimault',
      'Servant',
      'Tradesman',
      'Vagabond',
      'Village Elder'
    ],
    notes: '',
    source: 'BotD'
  },
  {
    name: 'Gambler',
    type: 'Basic',
    mainstats: {
      ws: 5,
      bs: 5,
      s: 0,
      t: 0,
      ag: 10,
      int: 10,
      wp: 0,
      fel: 10
    },
    secondstats: {
      attacks: 0,
      wounds: 2,
      magic: 0
    },
    description: 'Gamblers eschew the hard work of the lower and middle classes. After all, why toil for such small rewards when a month’s income can be made with one well-played hand? Gamblers use their skill at games of chance to make money from the wealthy and the slow-witted. They haunt coaching inns and game houses, ready to part the gullible from their coins. Sometimes things go wrong and gamblers lose large sums of money. In these cases, a swift escape is in order, before the creditors discover that the debts can’t be paid. Gamblers tend to be drifters by nature, always moving on to avoid old debts and sore losers.',
    skills: [
      'Charm',
      'Evaluate',
      'Gamble',
      'Gossip or Secret Language (Thieves’ Tongue)',
      'Perception',
      'Sleight of Hand',
      'Read/Write or Secret Signs (Thief)'
    ],
    talents: [
      'Etiquette or Streetwise',
      'Flee! or Luck'
    ],
    trappings: [
      'Dice',
      'Deck of Cards',
      'Leather Jerkin'
    ],
    entries: [
      'Entertainer',
      'Noble',
      'Rogue',
      'Mercenary',
      'Student',
      'Thief',
      'Vagabond'
    ],
    exits: [
      'Charlatan',
      'Demagogue',
      'Entertainer',
      'Highwayman',
      'Rapscallion',
      'Rogue'
    ],
    notes: '',
    source: 'Sigmar\'s Heir'
  },
  {
    name: 'Ghost Strider',
    type: 'Advanced',
    mainstats: {
      ws: 20,
      bs: 30,
      s: 15,
      t: 15,
      ag: 25,
      int: 20,
      wp: 20,
      fel: 0
    },
    secondstats: {
      attacks: 2,
      wounds: 6,
      magic: 0
    },
    description: 'Nearly supernaturally silent and fleet of foot, Ghost Striders roam over the Old World seeking out the forces of Chaos and various other threats to the natural world. They are most at home in the forest, though they can readily pass unseen over mountains and other terrain if need be. Ghost Striders are deadly archers, famed for never missing their targets. They are usually either softspoken or taciturn and considered to be both odd and intimidating, even by their own people. They are often more comfortable with the natural world than they are around other sentient beings.',
    skills: [
      'Concealment',
      'Dodge Blow',
      'Follow Trail',
      'Intimidate',
      'Lip Reading',
      'Navigation',
      'Outdoor Survival',
      'Perception',
      'Secret Language (Ranger Tongue)',
      'Secret Signs (Ranger)',
      'Set Trap',
      'Shadowing',
      'Silent Move'
    ],
    talents: [
      'Hardy or Fleet Footed',
      'Lightning Parry',
      'Mighty Shot',
      'Quick Draw',
      'Rapid Reload',
      'Sure Shot'
    ],
    trappings: [
      'Elfbow with 10 Arrows',
      'Light Armour (Best Craftsmenship Full Leather Armour)'
    ],
    entries: [
      'Scout'
    ],
    exits: [
      'Captain',
      'Outlaw Chief',
      'Targeteer',
      'Vampire Hunter'
    ],
    notes: 'Only Elves can enter this career',
    source: 'WHFR'
  },
  {
    name: 'Giant Slayer',
    type: 'Advanced',
    mainstats: {
      ws: 25,
      bs: 0,
      s: 15,
      t: 15,
      ag: 10,
      int: 0,
      wp: 20,
      fel: 0
    },
    secondstats: {
      attacks: 1,
      wounds: 6,
      magic: 0
    },
    description: 'There are many Troll Slayers who wish to find death, but secretly fear it. There are others, however, who are just too ferocious to readily die. These rare few become Giant Slayers: obsessed Dwarfs who have found that not even Trolls could offer a sufficient enough challenge to give them the glorious ending they crave. They continue to seek out combat and a proper death wherever they go, many of them becoming morose drinkers when they aren’t in the midst of battle. Giant Slayers continue to sport the spiky orange Slayer crest, but they tend to be covered with far more tattoos.',
    skills: [
      'Common Knowledge (any one)',
      'Consume Alcohol',
      'Dodge Blow',
      'Intimidate',
      'Perception'
    ],
    talents: [
      'Fearless',
      'Resistance to Poison',
      'Specialist Weapon Group (Flail)',
      'Strike to Injure'
    ],
    trappings: [
      'Great Weapon'
    ],
    entries: [
      'Troll Slayer'
    ],
    exits: [
      'Daemon Slayer'
    ],
    notes: 'Only Dwarfs can enter this career. You must have slain a Giant to enter this career.',
    source: 'WHFR'
  },
  {
    name: 'Grail Knight',
    type: 'Advanced',
    mainstats: {
      ws: 40,
      bs: 0,
      s: 30,
      t: 30,
      ag: 25,
      int: 10,
      wp: 25,
      fel: 25
    },
    secondstats: {
      attacks: 2,
      wounds: 8,
      magic: 0
    },
    description: 'Grail Knights are the flower of Bretonnian chivalry, the ideal to which all other knights aspire, at least in theory. The King of Bretonnia is always a Grail Knight, as are a number of the Dukes. There are also, however, many Grail Knights of lesser rank, including the hermit knights who spend their lives tending Grail Chapels. Those who have drunk from the Grail are transformed. Their dedication to the ideals of chivalry becomes absolute, and most shine with a Fay light. This light fades over a few days after the knight drinks from the grail, but it may brighten once more when he is fighting particularly bravely for the Lady of the Lake.',
    skills: [
      'Academic Knowledge (Genealogy/Heraldry)',
      'Academic Knowledge (Religion)',
      'Academic Knowledge (Strategy/Tactics)',
      'Charm',
      'Command',
      'Common Knowledge (Bretonnia)',
      'Dodge Blow',
      'Perception',
      'Ride',
      'Secret Language (Battle Tongue)'
    ],
    talents: [
      'Grail Virtue (the one that matches the character’s Virtue of Knighthood)',
      'Luck',
      'Public Speaking',
      'Resistance to Chaos',
      'Sixth Sense',
      'Specialist Weapon Group (Two-handed)',
      'Stout-hearted',
      'Strike Mighty Blow',
      'Strike to Injure',
      'Sturdy',
      'Very Resilient',
      'Very Strong',
      'Warrior Born'
    ],
    trappings: [
      'Heavy Armour (Full Plate Armour)',
      'Shield',
      'Icon of the Lady of the Lake',
      'Destrier with Saddle and Harness',
      'Sip from the Grail'
    ],
    entries: [
      'Questing Knight'
    ],
    exits: [
      'Captain',
      'Courtier',
      'Explorer',
      'Faceless',
      'Noble Lord',
      'Politician'
    ],
    notes: 'Only male Bretonnian nobles can become Grail Knights. The Lady of the Lake is not fooled by disguises.',
    source: 'KotG'
  },
  {
    name: 'Grail Pilgrim',
    type: 'Basic',
    mainstats: {
      ws: 10,
      bs: 5,
      s: 5,
      t: 5,
      ag: 5,
      int: 0,
      wp: 0,
      fel: 5
    },
    secondstats: {
      attacks: 0,
      wounds: 2,
      magic: 0
    },
    description: 'Grail Pilgrims are peasants devoted to the Lady of the Lake, as represented by her Grail Knights. They believe that Grail Knights are paragons of courage, justice, and courtesy, and that the best way they, as lowly peasants, can serve the Lady is to serve a Grail Knight. To this end, they choose a Grail Knight and follow him around. If the knight drops anything (broken spoons, old buttons, and so on), they seize them and treasure them as relics, a means of contact with the holy. If the Grail Knight needs anything, they get it for him. And if the Grail Knight is in danger, they try to fight for him. Most Grail Pilgrims do not have long lives.',
    skills: [
      'Charm',
      'Common Knowledge (Bretonnia)',
      'Dodge Blow',
      'Intimidate',
      'Outdoor Survival',
      'Perception'
    ],
    talents: [
      'Etiquette',
      'Hardy or Very Resilient',
      'Specialist Weapon Group (Two-handed)',
      'Stout-hearted or Strong-minded'
    ],
    trappings: [
      'Halberd',
      'Light Armour (Leather Jack)',
      'Bits That Fell Off the Back of A Grail Knight'
    ],
    entries: [
      'Carcassonne Shepherd',
      'Hunter',
      'Herrimault',
      'Outlaw',
      'Peasant',
      'Tradesman',
      'Vagabond',
      'Frogwife',
      'Swampaire'
    ],
    exits: [
      'Battle Pilgrim',
      'Carcassonne Shepherd',
      'Mercenary',
      'Herrimault',
      'Vagabond'
    ],
    notes: 'Women may only become Grail Pilgrims if they are pretending to be men, nobles may only do so if they are pretending to be peasants.',
    source: 'KotG'
  },
  {
    name: 'Grandmaster',
    type: 'Advanced',
    mainstats: {
      ws: 40,
      bs: 15,
      s: 25,
      t: 25,
      ag: 25,
      int: 15,
      wp: 30,
      fel: 20
    },
    secondstats: {
      attacks: 2,
      wounds: 8,
      magic: 0
    },
    description: 'A grandmaster is a paragon of knightly virtues and the leader of one of the knightly orders. A grandmaster is not only one of the most fearsome warriors in the Old World, but also a legendary commander and leader of men. There are very few grandmasters in the Old World, for even amongst those dedicated individuals who have the skill and strength of mind to become a Knight of the Inner Circle, few have what it takes to reach the pinnacle of knighthood. A grandmaster is always at the forefront of an army when it marches to war, leading his fellow knights, and often the entire army, into battle. He is usually amongst the most trusted of military advisors and generals, and when not engaged in warfare is often charged with planning for it. A grandmaster of a templar order is often a leading personality within a religious cult as well, commanding total loyalty from its warriors.',
    skills: [
      'Academic Knowledge (Genealogy/Heraldry or Religion)',
      'Academic Knowledge (Strategy/Tactics)',
      'Animal Training',
      'Charm',
      'Command',
      'Common Knowledge (any three)',
      'Dodge Blow',
      'Intimidate',
      'Perception',
      'Read/Write',
      'Ride',
      'Secret Language (Battle Tongue)',
      'Secret Signs (Templar)',
      'Speak Language (Breton, Estalian, Kislevian, or Tilean)'
    ],
    talents: [
      'Fearless',
      'Fleet Footed',
      'Menacing',
      'Seasoned Traveller',
      'Specialist Weapon Group (any two)',
      'Strong Minded'
    ],
    trappings: [
      'Magic Weapon',
      'Heavy Armour (Magical Full Plate Armour)',
      'Religious Relic or Blessing of the Emperor'
    ],
    entries: [
      'Knight of the Inner Circle'
    ],
    exits: [
      'Captain',
      'Champion',
      'Noble Lord',
      'Witch Hunter'
    ],
    notes: '',
    source: 'ToS'
  },
  {
    name: 'Grave Robber',
    type: 'Basic',
    mainstats: {
      ws: 5,
      bs: 5,
      s: 5,
      t: 0,
      ag: 10,
      int: 0,
      wp: 10,
      fel: 0
    },
    secondstats: {
      attacks: 0,
      wounds: 2,
      magic: 0
    },
    description: 'Grave Robbers make their living among the dead. Both medical and magical professions create a constant demand for fresh corpses, some for study, others for more sinister purposes. Obtaining such corpses legally is quite difficult, so Physicians and Wizards both have come to rely on Grave Robbers. It is a loathsome profession, but a profitable one. The freshest corpses can command exorbitant prices. The risks of this line of work are substantial. Watchmen, Priests of Morr (the God of Death), and Witch Hunters all keep careful watch of graveyards and punish interlopers harshly.',
    skills: [
      'Drive',
      'Gossip or Haggle',
      'Perception',
      'Scale Sheer Surface',
      'Search',
      'Secret Signs (Thief)',
      'Silent Move'
    ],
    talents: [
      'Flee!',
      'Resistance to Disease',
      'Streetwise or Strongminded'
    ],
    trappings: [
      'Lantern',
      'Lamp Oil',
      'Pick',
      'Sack',
      'Spade'
    ],
    entries: [
      'Barber-Surgeon',
      'Ex-Convict',
      'Rat Catcher',
      'Apothecary',
      'Bonepicker',
      'Dung Collector',
      'Embalmer',
      'Grave Warden',
      'Thief'
    ],
    exits: [
      'Cat Burglar',
      'Ex-Convict',
      'Fence',
      'Rat Catcher',
      'Student',
      'Thief'
    ],
    notes: '',
    source: 'WHFR'
  },
  {
    name: 'Grave Warden',
    type: 'Basic',
    mainstats: {
      ws: 5,
      bs: 5,
      s: 10,
      t: 10,
      ag: 0,
      int: 0,
      wp: 10,
      fel: 0
    },
    secondstats: {
      attacks: 0,
      wounds: 2,
      magic: 0
    },
    description: 'In the Old World, the grave warden’s responsibilities are heavy. He not only has to bury the dead six feet deep in the cold, hard ground but also guard against those who would disturb their rest, be they rats, bone pickers, grave robbers, or worse. In small towns and rural areas, a grave warden cannot rely on the town militia or Morr’s Black Guard to keep away the restless dead and hungry Ghouls. Meanwhile, few value his company, for he carries the stench of death and sodden mud wherever he goes. It is a lonely life, but many grave wardens come to prefer the company of the dead to that of the living.',
    skills: [
      'Academic Knowledge (Theology)',
      'Common Knowledge (the Empire)',
      'Dodge Blow',
      'Drive',
      'Evaluate',
      'Perception',
      'Outdoor Survival',
      'Search'
    ],
    talents: [
      'Resistance to Disease',
      'Stout-Hearted or Very Strong'
    ],
    trappings: [
      'Shovel',
      'Stench',
      'Wheelbarrow'
    ],
    entries: [
      'Rat Catcher',
      'Peasant'
    ],
    exits: [
      'Grave Robber',
      'Initiate (Morr only)',
      'Militiaman',
      'Temple Guardian',
      'Vampire Hunter',
      'Watchman',
      'Initiate'
    ],
    notes: '',
    source: 'NDM'
  },
  {
    name: 'Guild Master',
    type: 'Advanced',
    mainstats: {
      ws: 10,
      bs: 10,
      s: 0,
      t: 10,
      ag: 15,
      int: 30,
      wp: 20,
      fel: 35
    },
    secondstats: {
      attacks: 1,
      wounds: 5,
      magic: 0
    },
    description: 'Guild Masters are some of the most influential people in the Old World, quietly dictating how commerce is to work in various areas and facilitating the flow of trade. Among their ranks are master Merchants and calculating thieves, all of whom play a subtle game with the Nobles for power and control. Guild Masters are seldom great warriors, as they have many others at their beck and call to handle such things for them. Rather they are quasi-statesmen who deal with the Politicians of the Empire on their own terms. Depending on what guild they control, Guild Masters may be treated with the utmost respect or grudging civility.',
    skills: [
      'Academic Knowledge (History)',
      'Charm',
      'Command',
      'Common Knowledge (the Empire)',
      'Evaluate',
      'Gossip',
      'Haggle',
      'Perception',
      'Secret Language (Guild Tongue)',
      'Speak Language (Breton, Estalian, Kislevian, or Norse)',
      'Speak Language (Reikspiel)',
      'Trade (any two)'
    ],
    talents: [
      'Dealmaker',
      'Etiquette',
      'Linguistics'
    ],
    trappings: [
      'Writing Kit',
      '100 gc',
      'Guild'
    ],
    entries: [
      'Artisan',
      'Engineer',
      'Merchant',
      'Physician',
      'Wizard Lord',
      'Admiral',
      'Artillerist',
      'Foreman',
      'Litigant',
      'Runelord'
    ],
    exits: [
      'Crime Lord',
      'Politician',
      'Racketeer'
    ],
    notes: '',
    source: 'WHFR'
  },
  {
    name: 'Hag Mother',
    type: 'Advanced',
    mainstats: {
      ws: 0,
      bs: 0,
      s: 5,
      t: 20,
      ag: 10,
      int: 40,
      wp: 30,
      fel: 15
    },
    secondstats: {
      attacks: 0,
      wounds: 6,
      magic: 3
    },
    description: 'The legendary hag mothers are very powerful hag witches, known for their powers of divination, healing, and their influence over the Ancient Widow’s spirits. Most eke out simple lives in rustic huts far from the communities they watch over. These hag mothers rarely leave their haunted homes, forcing those seeking their aid to undertake arduous journeys to reach them. However, a few hag mothers do wander Kislev, following wherever the spirits lead them and sharing their knowledge. Although most appear impossibly old and bent – their twisted spines creaking alarmingly at the smallest movement – many retain their youthful vigour and can be unexpectedly spry.',
    skills: [
      'Academic Knowledge (Daemonology or Spirits',
      'History or Necromancy',
      'plus any one)',
      'Animal Care',
      'Charm Animal',
      'Command',
      'Common Knowledge (Kislev or Troll Country, plus any one)',
      'Heal or Prepare Poison',
      'Intimidate',
      'Magical Sense',
      'Perception',
      'Speak Arcane Language (Magick, plus any one)',
      'Speak Language (Ungol)',
      'Trade (Apothecary or Herbalist)'
    ],
    talents: [
      'Aethyric Attunement',
      'Excellent Vision or Luck',
      'Lesser Magic (any three)',
      'Rover or Sixth Sense',
      'Witch Lore (Hag)'
    ],
    trappings: [
      'antitoxin kit',
      'apothecary kit',
      'at least three healing draughts and healing poultices',
      'three or more potions (RoS',
      'page 192)',
      'skin of koumiss',
      'distinctive shawl',
      'walking stick'
    ],
    entries: [
      'Hag Witch'
    ],
    exits: [
      'None'
    ],
    notes: 'You must be an Ungol female to enter this career',
    source: 'RotIQ'
  },
  {
    name: 'Hag Witch',
    type: 'Advanced',
    mainstats: {
      ws: 0,
      bs: 0,
      s: 5,
      t: 10,
      ag: 5,
      int: 25,
      wp: 20,
      fel: 10
    },
    secondstats: {
      attacks: 0,
      wounds: 4,
      magic: 1
    },
    description: 'Few Ungol women develop magical powers without first demonstrating “the sight.” Thus, most hag witches – women who can invoke the spirits of Kislev – were wise women first. Their powers are said to be a blessing and a curse, for although the hags can undoubtedly aid their local communities, the spirits demand a high price for their compliance: premature aging. Because of this consequence, most wise women dread the possibility of the spirits answering their call. As well as the wise women, those who suffer a great loss – such as the death of a husband or child – may also be chosen by the Ancient Widow and gain an intimate understanding of Kislev’s tormented spirits. Hag witches who come to power in this way often live alone, grieving for their lost loved ones and fading youth.',
    skills: [
      'Academic Knowledge (History or Spirits)',
      'Command',
      'Common Knowledge (Kislev or Troll Country)',
      'Consume Alcohol or Perception',
      'Heal',
      'Intimidate',
      'Magical Sense',
      'Prepare Poison or Trade (Apothecary or Herbalist)',
      'Speak Arcane Language (Magick)',
      'Speak Language (Ungol)'
    ],
    talents: [
      'Fast Hands',
      'Hardy or Strong-minded',
      'Lesser Magic (any three)',
      'Meditation',
      'Petty Magic (Hag)'
    ],
    trappings: [
      'antitoxin kit',
      'healing draught',
      'healing poultice',
      'skin of koumiss',
      'a number of small charms that include bits of bone, locks of hair, unusual stones, and so on',
      'shawl'
    ],
    entries: [
      'Wise Woman'
    ],
    exits: [
      'Demagogue',
      'Hag Mother',
      'Politician',
      'Witch'
    ],
    notes: 'You must be an Ungol female to enter this career',
    source: 'RotIQ'
  },
  {
    name: 'Hedge Wizard',
    type: 'Basic',
    mainstats: {
      ws: 0,
      bs: 0,
      s: 0,
      t: 5,
      ag: 5,
      int: 5,
      wp: 10,
      fel: 10
    },
    secondstats: {
      attacks: 0,
      wounds: 2,
      magic: 0
    },
    description: 'Hedge Wizards are magically talented people with no formal magical training. Using instinct, luck, and superstitious trappings, they can perform minor, specialized spells. Though they may not always be aware of it, Hedge Wizards dally with danger every time they use their charms and cantrips. For this reason the Witch Hunters eagerly track and execute these unfortunate folk who all too often unconsciously invite daemons and disaster into the world. Some Hedge Wizards take the sensible route and join the Orders of Magic, whilst others hide their shameful secret.',
    skills: [
      'Animal Care or Haggle',
      'Charm or Intimidate',
      'Channelling',
      'Charm Animal or Trade (Apothecary)',
      'Heal or Hypnotism',
      'Magical Sense',
      'Perception',
      'Search'
    ],
    talents: [
      'Hedge Magic',
      'Petty Magic (Hedge)'
    ],
    trappings: [
      'Healing Draught',
      'Hood'
    ],
    entries: [
      'None',
      'Hedgecraft Apprentice',
      'Mystic',
      'Strigany Mystic'
    ],
    exits: [
      'Apprentice Wizard',
      'Charlatan',
      'Initiate',
      'Outlaw',
      'Seer',
      'Vagabond',
      'Witch',
      'Apothecary'
    ],
    notes: 'If you want to be able to cast spells right away you should increase your Magic Characteristic with your free advance during character creation.  Halflings and Dwarfs may not enter this career. Hedge Wizardry is dangerous and highly illegal in the Empire. If caught, you could well be executed.  Think carefully before entering this career.',
    source: 'WHFR'
  },
  {
    name: 'Hedgecraft Apprentice',
    type: 'Basic',
    mainstats: {
      ws: 0,
      bs: 0,
      s: 5,
      t: 0,
      ag: 0,
      int: 10,
      wp: 5,
      fel: 10
    },
    secondstats: {
      attacks: 0,
      wounds: 2,
      magic: 1
    },
    description: 'A hedgecraft apprentice endures a harsh existence from dawn to dusk. They perform gruelling tasks for the hedge masters who train them. Although much of what they learn is invaluable to their journeys in becoming a hedge master, the hedge apprentices are often treated little better than servants, and perform many arduous, mundane tasks for their teachers.',
    skills: [
      'Animal Care or Channelling',
      'Charm Animal or Concealment',
      'Consume Alcohol or Gossip',
      'Haggle or Outdoor Survival',
      'Heal',
      'Magical Sense or Prepare Poisons',
      'Perception',
      'Read/Write or Speak Arcane Language (Magick)',
      'Set Trap or Silent Move',
      'Trade (Apothecary or Herbalist)'
    ],
    talents: [
      'Coolheaded or Fast Hands',
      ' Petty Magic (Hedge) or Rover'
    ],
    trappings: [
      'Antitoxin Kit',
      'Healing Draught',
      'Healing Poultice',
      'Lucky Charm'
    ],
    entries: [
      'Apothecary',
      'Peasant'
    ],
    exits: [
      'Apothecary',
      'Apprentice Wizard',
      'Barber-Surgeon',
      'Charlatan',
      'Hedge Wizard',
      'Initiate (Ranald, Taal & Rhya)',
      'Outlaw',
      'Scribe',
      'Zealot',
      'Hedgemaster',
      'Initiate'
    ],
    notes: 'If you want to be able to cast spells right away you should increase your Magic Characteristic with your free advance during character creation. Halflings and Dwarfs may not enter this career. Hedge Wizardry is dangerous and highly illegal in the Empire. If caught, you could well be executed. Think carefully before entering this career.',
    source: 'SoE'
  },
  {
    name: 'Hedgemaster',
    type: 'Advanced',
    mainstats: {
      ws: 0,
      bs: 0,
      s: 5,
      t: 5,
      ag: 5,
      int: 20,
      wp: 20,
      fel: 20
    },
    secondstats: {
      attacks: 0,
      wounds: 3,
      magic: 2
    },
    description: 'Those fully initiated into the ancient mysteries of Hedgecraft are called Hedge Masters, although outsiders often know them as Wise Ones or Cunning Folk. Most live on the periphery of the communities they serve, and are known for their healing skills and the potions, tonics, and charms they sell. They lead private lives, keen to avoid those who may take offense at their trade and beliefs, and are generally welcomed by locals for the services they provide. A select few Hedge Masters work directly for their Hedgewise, seeking out and neutralising threats to the Hedgefolk. This is dangerous work, for it often involves direct contact with Witch Hunters and Imperial Magisters to better learn their movements and understand their motivations.',
    skills: [
      'Animal Care or Channelling',
      'Charm Animal or Concealment',
      'Command',
      'Evaluate or Navigation',
      'Follow Trail or Consume Alcohol',
      'Gossip or Intimidate',
      'Haggle or Outdoor Survival',
      'Heal',
      'Magical Sense or Prepare Poison',
      'Perception',
      'Read/Write or Speak Arcane Language (Magick)',
      'Set Trap or Silent Move',
      'Trade (Apothecary or Herbalist)'
    ],
    talents: [
      'Dealmaker or Fast Hands',
      'Lesser Magic (any one) or Orientation',
      'Lesser Magic (any one) or Fleet Footed',
      'Luck or Witch Lore (Hedge)',
      'Meditation or Strong-minded'
    ],
    trappings: [
      'Antitoxin Kit',
      'Healing Poultice',
      'Staff',
      'Trade Tools (Apothecary or Herbalist)',
      '1d5 Amulets and Charms',
      '1d5 Healing Draughts',
      '1d5 Potions'
    ],
    entries: [
      'Hedgecraft Apprentice'
    ],
    exits: [
      'Artisan',
      'Hedgewise',
      'Scholar',
      'Spy',
      'Witch'
    ],
    notes: '',
    source: 'SoE'
  },
  {
    name: 'Hedgewise',
    type: 'Advanced',
    mainstats: {
      ws: 0,
      bs: 0,
      s: 5,
      t: 10,
      ag: 15,
      int: 35,
      wp: 35,
      fel: 35
    },
    secondstats: {
      attacks: 0,
      wounds: 5,
      magic: 3
    },
    description: 'The Hedgewise are the oldest, most experienced Hedgefolk. They lead their brethren and are responsible for protecting them from all ills. A Hedgewise may need to tackle a multitude of different threats, ranging from itinerant Warrior-Priests keen to spread Sigmar’s Word at the end of a hammer, to secretive Cults who could bring the wrath of the Witch Hunters down upon the local community. Indeed, many Hedgewise soon learn a deep hatred of the servants of the Ruinous Powers, for they bring unwanted attention to the Hedgefolk, and are anathema to their way of life. Because of this, it is not uncommon to find some Hedgewise crossing the Hedge to hunt real Witches with as much fervour, if not more, as the Magisters and the Cult of Sigmar.',
    skills: [
      'Academic Knowledge (any two)',
      'Animal Care or Channelling',
      'Charm Animal or Concealment',
      'Command',
      'Common Knowledge (the Empire)',
      'Evaluate',
      'Follow Trail or Consume Alcohol',
      'Gossip',
      'Haggle or Outdoor Survival',
      'Heal',
      'Intimidate',
      'Magical Sense or Prepare Poison',
      'Navigation',
      'Perception',
      'Read/Write or Speak Arcane Language (Magick)',
      'Set Trap or Silent Move',
      'Trade (Apothecary or Herbalist)'
    ],
    talents: [
      'Aethyric Attunement or Savvy',
      'Excellent Vision or Hardy',
      'Lesser Magic (any one) or Night Vision',
      'Lesser Magic (any one) or Sixth Sense',
      'Lesser Magic (any one) or Stout-hearted'
    ],
    trappings: [
      'Antitoxin Kit',
      'Staff',
      'Trade Tools (Apothecary or Herbalist)',
      '1d10 Amulets and Charms',
      '1d5 Healing Draughts',
      '1d5 Healing Poultices',
      '1d10 Potions'
    ],
    entries: [
      'Hedgemaster'
    ],
    exits: [
      'Physician',
      'Scout',
      'Warlock'
    ],
    notes: 'If you want to be able to cast spells right away you should increase your Magic Characteristic with your free advance during character creation. Halflings and Dwarfs may not enter this career. Hedge Wizardry is dangerous and highly illegal in the Empire. If caught, you could well be executed. Think carefully before entering this career.',
    source: 'SoE'
  },
  {
    name: 'Herald',
    type: 'Advanced',
    mainstats: {
      ws: 10,
      bs: 10,
      s: 5,
      t: 5,
      ag: 15,
      int: 15,
      wp: 10,
      fel: 20
    },
    secondstats: {
      attacks: 0,
      wounds: 4,
      magic: 0
    },
    description: 'Heralds are the voices of the nobility, dutybound to announce the arrival of their lords and patrons, or who occasionally carry news of important events from afar. They are inevitably skilled speakers, swift wits, and greatly educated for the times. Heralds are expected to recognize the heraldry of hundreds of Nobles on sight, hence their namesake. They are seldom Nobles themselves, but their position is regarded as one of the few that acts as a stepping-stone into the ranks of the lesser nobility. Heralds pride themselves on their personal appearance, as it is a reflection upon whichever lord they serve.',
    skills: [
      'Academic Knowledge (Genealogy/Heraldry)',
      'Academic Knowledge (History)',
      'Blather',
      'Charm',
      'Common Knowledge (Bretonnia, Kislev or Tilea)',
      'Common Knowledge (the Empire)',
      'Evaluate',
      'Gossip',
      'Haggle',
      'Perception',
      'Read/Write',
      'Ride',
      'Speak Language (Breton, Kislevian or Tilean)',
      'Speak Language (Reikspiel)'
    ],
    talents: [
      'Etiquette',
      'Master Orator',
      'Public Speaking'
    ],
    trappings: [
      'Cologne',
      'Purse',
      'Two sets of Best Craftsmenship Clothing',
      'Uniform'
    ],
    entries: [
      'Cadet',
      'Messenger',
      'Raconteur',
      'Valet'
    ],
    exits: [
      'Agitator',
      'Courtier',
      'Entertainer',
      'Explorer',
      'Politician',
      'Squire'
    ],
    notes: '',
    source: 'WHFR'
  },
  {
    name: 'Herrimault',
    type: 'Basic',
    mainstats: {
      ws: 5,
      bs: 10,
      s: 0,
      t: 0,
      ag: 10,
      int: 0,
      wp: 0,
      fel: 10
    },
    secondstats: {
      attacks: 1,
      wounds: 2,
      magic: 0
    },
    description: 'The harsh laws of Bretonnia turn many Peasants into Outlaws. The acts that many nobles commit with impunity turn many Outlaws into avengers. The Herrimaults hold themselves above both groups by keeping to a strict code of morality. Whilst they operate outside the laws of Bretonnia, they do so because the laws are unjust. A Herrimault always acts rightly.',
    skills: [
      'Animal Care or Charm',
      'Concealment',
      'Dodge Blow',
      'Gossip or Secret Signs (Ranger)',
      'Outdoor Survival',
      'Perception',
      'Scale Sheer Surface',
      'Silent Move'
    ],
    talents: [
      'Marksman or Specialist Weapon Group (Longbow)',
      'Rover',
      'Seasoned Traveller'
    ],
    trappings: [
      'Bow with 10 Arrows (Longbow if you have Specialist Weapon Group (Longbow)',
      'otherwise a Bow)',
      'Light Armour (Leather Jerkin)',
      'Shield'
    ],
    entries: [
      'Agitator',
      'Carcassonne Shepherd',
      'Charlatan',
      'Coachman',
      'Grail Pilgrim',
      'Hunter',
      'Innkeeper',
      'Knight Errant',
      'Man-at-Arms',
      'Noble',
      'Peasant',
      'Rogue',
      'Woodsman',
      'Frogwife',
      'Mediator',
      'Swampaire'
    ],
    exits: [
      'Demagogue',
      'Grail Pilgrim',
      'Scout',
      'Thief',
      'Vagabond',
      'Veteran',
      'Mediator'
    ],
    notes: 'Women can only become Herrimaults if disguised as men.',
    source: 'KotG'
  },
  {
    name: 'High Priest',
    type: 'Advanced',
    mainstats: {
      ws: 20,
      bs: 20,
      s: 15,
      t: 15,
      ag: 15,
      int: 20,
      wp: 30,
      fel: 25
    },
    secondstats: {
      attacks: 1,
      wounds: 6,
      magic: 3
    },
    description: 'A High Priest is the living embodiment of his God’s will in the Old World. They are fairly rare, as few individuals have both the strength of character and the boundless faith it takes to reach such a lofty post. High Priests, with very few exceptions, will operate out of one of the primary centres of their faith. Pilgrims will travel the breadth of the Empire just to speak for a few moments with such a being. High Priests tend to either reject the physical world, retiring to a monastery or embrace the temporal, becoming powerful secular leaders.',
    skills: [
      'Academic Knowledge (any three)',
      'Academic Knowledge (Theology)',
      'Channelling',
      'Charm',
      'Common Knowledge (any two)',
      'Gossip',
      'Heal',
      'Intimidate',
      'Magical Sense',
      'Ride or Swim',
      'Speak Arcane Language (Magick)',
      'Speak Language (any three)'
    ],
    talents: [
      'Aethyric Attunement or Meditation',
      'Armoured Casting or Mighty Missile',
      'Etiquette',
      'Fast Hands or Strong-minded',
      'Lesser Magic (any two)'
    ],
    trappings: [
      'Religious Relic'
    ],
    entries: [
      'Anointed Priest',
      'Abbot',
      'Warrior Priest'
    ],
    exits: [
      'Politician',
      'Scholar',
      'Witch Hunter',
      'Abbot',
      'Ambassador',
      'Cantor'
    ],
    notes: '',
    source: 'WHFR'
  },
  {
    name: 'Highwayman',
    type: 'Advanced',
    mainstats: {
      ws: 20,
      bs: 20,
      s: 10,
      t: 10,
      ag: 30,
      int: 20,
      wp: 15,
      fel: 25
    },
    secondstats: {
      attacks: 1,
      wounds: 4,
      magic: 0
    },
    description: 'Highwaymen prey on the coaches that roam over the roads of the Old World, relieving lockboxes of their goods and passengers of their valuables. They affect the styles of the upper nobility, wearing elaborate masks and showing every point of etiquette to their victims, as they prefer to regard themselves as daring rogues rather than high-class Thieves. Highwaymen, by necessity, are skilled horsemen, adept at convincing their horses to race over uneven and treacherous ground at high speeds. They are also excellent shots, as they have to contend not only with swiftly moving targets, but a large number of dangerous forest denizens as well.',
    skills: [
      'Animal Care',
      'Animal Training',
      'Charm',
      'Common Knowledge (the Empire)',
      'Evaluate',
      'Gossip',
      'Ride',
      'Silent Move'
    ],
    talents: [
      'Ambidextrous',
      'Etiquette',
      'Master Gunner',
      'Mighty Shot',
      'Sharpshooter',
      'Specialist Weapon Group (Fencing)',
      'Specialist Weapon Group (Gunpowder)',
      'Swashbuckler',
      'Trick Riding'
    ],
    trappings: [
      'Pair of Pistols with Powder and Ammunition for 20 Shots',
      'Noble’s Garb',
      'Hood or Mask',
      'Riding Horse with Saddle and Harness'
    ],
    entries: [
      'Coachman',
      'Duellist',
      'Ex-Convict',
      'Estalian Diestro',
      'Ferryman',
      'Minstrel',
      'Outlaw',
      'Outrider',
      'Rapscallion',
      'Roadwarden',
      'Toll Keeper',
      'Drover',
      'Faceless',
      'Gambler',
      'Muleskinner'
    ],
    exits: [
      'Agitator',
      'Duellist',
      'Master Thief',
      'Outlaw Chief',
      'Sergeant'
    ],
    notes: '',
    source: 'WHFR'
  },
  {
    name: 'Horned Hunter',
    type: 'Basic',
    mainstats: {
      ws: 5,
      bs: 5,
      s: 10,
      t: 0,
      ag: 5,
      int: 0,
      wp: 10,
      fel: 0
    },
    secondstats: {
      attacks: 0,
      wounds: 3,
      magic: 0
    },
    description: 'The rites of Taal demand great physical, emotional, and mental fortitude for its practitioners. Some see the trappings of civilization – cities, courts, and the like – as a failing in the interpretation of Taal’s will. The Horned Hunters are deeply zealous and shun the city. Unlike Taal’s Chosen, the Horned Hunters give up much in the way of a material life. They shun normal clothing and armour and wear animal skins, loincloths, or less. Part of their initiation into this group is to undergo extensive tattooing, covering their chest and face. Horned Hunters prowl the woods both within the Taalbaston and throughout Talabecland and claim allegiance only to Taal. While they lack the fiery rhetoric of most zealots, they are still fervent in their beliefs and believe that conversion comes from actions, rather than words.',
    skills: [
      'Concealment',
      'Follow Trail or Set Trap',
      'Perception',
      'Scale Sheer Surface',
      'Secret Language (Ranger Tongue)',
      'Secret Signs (Ranger)',
      'Silent Move'
    ],
    talents: [
      'Frenzy',
      'Hardy',
      'Fleet Footed or Very Resilient'
    ],
    trappings: [
      'Anti-toxin kit',
      'Great weapon (two-handed axe)',
      'Light Armour (leather jack)'
    ],
    entries: [
      'Scribe'
    ],
    exits: [
      'Hunter',
      'Militiaman',
      'Outlaw',
      'Scout',
      'Vagabond'
    ],
    notes: '',
    source: 'TiT'
  },
  {
    name: 'Horse Archer',
    type: 'Advanced',
    mainstats: {
      ws: 15,
      bs: 25,
      s: 15,
      t: 15,
      ag: 15,
      int: 0,
      wp: 15,
      fel: 5
    },
    secondstats: {
      attacks: 1,
      wounds: 4,
      magic: 0
    },
    description: 'Ungol horse archers are expert marksmen and are celebrated as some of the finest light cavalry in the Old World. Their skills with scimitar, spear, and horse bow are expertly honed hunting kyazak on the Endless Steppe, a land they constantly patrol at the order of the Tzarina. Their most common tactic is to circle their enemy and pour arrow after arrow into them. Amongst the embattled Ungols of the Troll Country, all able-bodied individuals are required to fight, especially when Chaos marauders attack. Thus, it is common to find women amongst rotas of northern horse archers, a tradition southern Kislevites sometimes find difficult to accept.',
    skills: [
      'Academic Knowledge (Strategy/Tactics)',
      'Command or Navigation',
      'Common Knowledge (Kislev or Troll Country)',
      'Consume Alcohol',
      'Dodge Blow',
      'Outdoor Survival',
      'Perception',
      'Ride',
      'Speak Language (Kislevarin or Ungol)'
    ],
    talents: [
      'Coolheaded or Hardy',
      'Mighty Shot or Sure Shot',
      'Rapid Reload or Quick Draw',
      'Specialist Weapon Group (Cavalry)'
    ],
    trappings: [
      'leather jacks and leggings',
      'good luck charm',
      'cavalry spears (as demilance)',
      'Kislevite horse bow with quivers containing 20 arrows, 20 armour-piercing arrows, and at least 5 screamer and 5 incendiary arrows',
      'Kislevite warhorse',
      'saddle and harnesse',
      'saddle bags',
      'rations',
      'water skins',
      'a yurta'
    ],
    entries: [
      'Horse Master',
      'Noble',
      'Peasant',
      'Steppes Nomad'
    ],
    exits: [
      'Captain',
      'Horse Master',
      'Mercenary',
      'Scout',
      'Steppes Nomad',
      'Targeteer',
      'Veteran'
    ],
    notes: '',
    source: 'RotIQ'
  },
  {
    name: 'Horse Coper',
    type: 'Basic',
    mainstats: {
      ws: 0,
      bs: 5,
      s: 5,
      t: 0,
      ag: 5,
      int: 5,
      wp: 5,
      fel: 15
    },
    secondstats: {
      attacks: 0,
      wounds: 2,
      magic: 0
    },
    description: 'Horse copers (horse salesman) are notorious for being smarmy and dishonest. It seems every stable has a  grinning coper offering “the very best horse flesh on the market, sire,” descended from “the strongest bloodlines  of the Ostermarker Veldt, sire.” As horses are central to Kislevite life, the market is incredibly competitive,  and buyers have a hard time finding a reliable dealer, especially as most will try any underhanded trick to  ensure a sale. Some disreputable copers happily paint rotten teeth white, pass off diseased nags as “shy,” and  proudly boast infertile stallions will “sire a line o’ beauties, sire.” Indeed, the only place horse copers never  sell to is the knacker’s yards, though it is a good source for stock.',
    skills: [
      'Animal Care',
      'Charm or Consume Alcohol',
      'Charm Animal',
      'Evaluate',
      'Gossip',
      'Haggle',
      'Perception',
      'Ride',
      'Speak Language (Kislevarin)'
    ],
    talents: [
      'Dealmaker or Flee!',
      'Specialist Weapon Group (Entangling)',
      'Suave'
    ],
    trappings: [
      'set of superior clothing',
      'lasso or whip',
      '1d5 horses of varying quality',
      '1d10 gc'
    ],
    entries: [
      'Burgher',
      'Drover',
      'Horse Master',
      'Messenger',
      'Steppes Nomad'
    ],
    exits: [
      'Burgher',
      'Charlatan',
      'Horse Master',
      'Merchant',
      'Rogue'
    ],
    notes: '',
    source: 'RotIQ'
  },
  {
    name: 'Horse Master',
    type: 'Advanced',
    mainstats: {
      ws: 5,
      bs: 15,
      s: 15,
      t: 10,
      ag: 15,
      int: 20,
      wp: 15,
      fel: 25
    },
    secondstats: {
      attacks: 0,
      wounds: 5,
      magic: 0
    },
    description: 'Horse masters are responsible for the well-being, training, and breeding of horses, and they hold positions of importance in all levels of Kislevite society. Amongst the steppes nomads, the horsemaster is often second only to the ataman, as his skills guarantee the continued survival of his community. No horse master holds more power in Kislev than the koniushy, the Ice Queen’s own Master of the Horse. This influential boyar maintains not only the Tzarina’s stables but her kennels as well. Thus, his office has access to a sizeable portion of the Ice Queen’s treasury, all to train and equip her animals to the best possible standard.',
    skills: [
      'Animal Care',
      'Animal Training',
      'Charm',
      'Charm Animal',
      'Consume Alcohol or Dodge Blow',
      'Drive',
      'Perception',
      'Ride'
    ],
    talents: [
      'Coolheaded or Hardy',
      'Specialist Weapon Group (Entangling)',
      'Very Strong'
    ],
    trappings: [
      'Kislevite horse or warhorse',
      'saddle',
      'harness',
      'saddlebag',
      'grooming kit',
      'feed',
      'lasso or whip',
      'leather jacks and leggings'
    ],
    entries: [
      'Drover',
      'Horse Archer',
      'Horse Coper',
      'Mercenary',
      'Noble',
      'Outlaw',
      'Outrider',
      'Pistolier',
      'Roadwarden',
      'Scout',
      'Soldier',
      'Squire',
      'Steppes Nomad',
      'Winged Lancer'
    ],
    exits: [
      'Ataman',
      'Drover',
      'Horse Archer',
      'Horse Coper',
      'Merchant',
      'Sergeant',
      'Winged Lancer'
    ],
    notes: '',
    source: 'RotIQ'
  },
  {
    name: 'Hunter',
    type: 'Basic',
    mainstats: {
      ws: 0,
      bs: 15,
      s: 0,
      t: 5,
      ag: 10,
      int: 5,
      wp: 0,
      fel: 0
    },
    secondstats: {
      attacks: 0,
      wounds: 3,
      magic: 0
    },
    description: 'While the Empire has come far from the tribes that founded it 2500 years ago, some things haven’t changed at all. Although Peasants till parts of the land, huge expanses of the Empire are still covered with forest or are hostile to agriculture. These are the lands where Hunters and trappers thrive. They use the same techniques as their ancestors to take down game, be it a trap or a well-placed shot. It takes skill to stalk wild animals while avoiding the dark creatures of the woods. Hunters in their animal skin clothes and fur hats may appear uncouth to city folks, but they don’t much care what others think of them.',
    skills: [
      'Concealment',
      'Follow Trail',
      'Outdoor Survival',
      'Perception',
      'Search or Swim',
      'Secret Signs (Ranger)',
      'Silent Move or Set Trap'
    ],
    talents: [
      'Hardy or Specialist Weapon Group (Longbow)',
      'Lightning Reflexes or Very Resilient',
      'Marksman or Rover',
      'Rapid Reload'
    ],
    trappings: [
      'Longbow with 10 Arrows',
      '2 Animal Traps',
      'Antitoxin Kit'
    ],
    entries: [
      'Animal Trainer',
      'Charcoal-Burner',
      'Kithband Warrior',
      'Woodsman',
      'Horned Hunter'
    ],
    exits: [
      'Animal Trainer',
      'Bounty Hunter',
      'Charcoal-Burner',
      'Fieldwarden',
      'Kithband Warrior',
      'Miner',
      'Scout',
      'Soldier',
      'Targeteer',
      'Carcassonne Shepherd',
      'Enforcer',
      'Grail Pilgrim',
      'Herrimault',
      'Knight of the Verdant Field',
      'Man-at-Arms',
      'Mediator',
      'Muleskinner',
      'Swampaire'
    ],
    notes: '',
    source: 'WHFR'
  },
  {
    name: 'Ice Maiden',
    type: 'Advanced',
    mainstats: {
      ws: 5,
      bs: 0,
      s: 0,
      t: 10,
      ag: 5,
      int: 20,
      wp: 25,
      fel: 10
    },
    secondstats: {
      attacks: 0,
      wounds: 4,
      magic: 2
    },
    description: 'When apprentice witches finish their training, they are released from their mistresses to seek a deeper understanding of Ice Magic. To do this, they must mirror the Ancient Widow as closely as possible, so they swear vows of chastity (to represent being widowed) before forging forth with cold determination in their hearts. Maidens of the ice can be found in the most unlikely places as they quest for understanding, but most commonly, they wander the frozen oblast, facing kyazak, the land’s spirits, and ferocious Greenskins with equal resolve. An ice maiden’s vow of chastity ends when she gains insight into her wintry magic and becomes a full ice witch; however, for some, this understanding never comes, and they remain forever alone.',
    skills: [
      'Academic Knowledge (Magic)',
      'Channelling',
      'Command or Intimidate',
      'Common Knowledge (Kislev)',
      'Magical Sense',
      'Navigation or Read/Write',
      'Outdoor Survival or Ride',
      'Perception',
      'Speak Arcane Language (Magick)',
      'Speak Language (Kislevarin)'
    ],
    talents: [
      'Coolheaded',
      'Lesser Magic (any three)',
      'Meditation or Mighty Missile',
      'Stout-hearted or Strong-minded',
      'Witch Lore (Ice)'
    ],
    trappings: [
      'sturdy winter clothing',
      'flask of kvas'
    ],
    entries: [
      'Apprentice Witch'
    ],
    exits: [
      'Courtier',
      'Ice Witch',
      'Scout',
      'Sergeant',
      'Veteran',
      'Witch'
    ],
    notes: 'You must be female to enter this career',
    source: 'RotIQ'
  },
  {
    name: 'Ice Witch',
    type: 'Advanced',
    mainstats: {
      ws: 15,
      bs: 0,
      s: 5,
      t: 20,
      ag: 15,
      int: 30,
      wp: 40,
      fel: 15
    },
    secondstats: {
      attacks: 0,
      wounds: 6,
      magic: 4
    },
    description: 'The ice witches of Kislev are feared and respected throughout the Old World. They are the darkest winter, the coldest ice, and the cruellest blizzard, and few can bear their presence for long. But being an ice witch is more than simply practicing Ice Magic and defending Kislev from its foes. Ice witches are part of an ancient sisterhood that has long influenced and often ruled the Gospodar tribe – and still does to this day. They are in touch with the wintry spirits of the land and the frozen flows of magic surging through it; thus, they work hard to preserve the old ways and ancient places, keen to ensure their pristine magic remains unsullied and pure.',
    skills: [
      'Academic Knowledge (Magic',
      'plus any one)',
      'Channelling',
      'Command or Intimidate',
      'Common Knowledge (Kislev, plus any one)',
      'Magical Sense',
      'Outdoor Survival or Ride',
      'Perception',
      'Read/Write',
      'Speak Arcane Language (Magick)',
      'Speak Language (Kislevarin, plus any two)'
    ],
    talents: [
      'Fast Hands',
      'Lesser Magic (any three)',
      'Menacing or Unsettling'
    ],
    trappings: [
      'superior winter clothing',
      'a few bits of jewellery studded with diamonds or sapphires',
      'at least one magic item found during their wanderings as ice maidens'
    ],
    entries: [
      'Ice Maiden'
    ],
    exits: [
      'Ambassador',
      'Captain'
    ],
    notes: 'You must be female to enter this career',
    source: 'RotIQ'
  },
  {
    name: 'Initiate',
    type: 'Basic',
    mainstats: {
      ws: 5,
      bs: 5,
      s: 0,
      t: 5,
      ag: 0,
      int: 10,
      wp: 10,
      fel: 10
    },
    secondstats: {
      attacks: 0,
      wounds: 2,
      magic: 0
    },
    description: 'Religion has taken second place to money in the affections of many Old Worlders, but there are still many young men and women willing to devote their lives to the Gods. It takes great dedication and training to become a Priest. Initiates are Priests-in-training. They undergo harsh instruction under strict teachers, and until they are finished they are not allowed to preach or conduct services. Their training includes literacy and calligraphy, the study of scriptures, and the art of the sermon. They also learn the basics of weapon use so the temple can be defended in times of need.',
    skills: [
      'Academic Knowledge (Astronomy or History)',
      'Academic Knowledge (Theology)',
      'Charm',
      'Heal',
      'Perception',
      'Read/Write',
      'Speak Language (Classical)',
      'Speak Language (Reikspiel)'
    ],
    talents: [
      'Lightning Reflexes or Very Strong',
      'Public Speaking',
      'Suave or Warrior Born'
    ],
    trappings: [
      'Religious Symbol',
      'Robes'
    ],
    entries: [
      'Dilettante',
      'Hedge Wizard',
      'Knight',
      'Scribe',
      'Student',
      'Vampire Hunter',
      'Witch Hunter',
      'Zealot',
      'Apprentice Witch',
      'Cantor',
      'Catechist',
      'Crusader',
      'Grave Warden',
      'Hedgecraft Apprentice',
      'Knight of the Blazing Sun',
      'Lamplighter',
      'Penitent',
      'Pilgrim',
      'Raconteur',
      'Scourge of God',
      'Temple Guardian',
      'Verenean Investigator'
    ],
    exits: [
      'Barber-Surgeon',
      'Demagogue',
      'Friar',
      'Lay Priest',
      'Priest',
      'Scribe',
      'Zealot',
      'Cantor',
      'Cult Attendant',
      'Monk',
      'Penitent',
      'Temple Guardian'
    ],
    notes: 'As an Initiate you must decide who your patron God is and what church you serve. You can learn more about the faiths of the Old World in Chapter 8: Religion and Belief of the Core Rulebook. Your choice gives you another skill or talent, as detailed in Church Skills and Talents entry of your God’s description.',
    source: 'WHFR'
  },
  {
    name: 'Innkeeper',
    type: 'Advanced',
    mainstats: {
      ws: 10,
      bs: 5,
      s: 5,
      t: 10,
      ag: 20,
      int: 10,
      wp: 10,
      fel: 20
    },
    secondstats: {
      attacks: 0,
      wounds: 4,
      magic: 0
    },
    description: 'Innkeepers own and run the establishments that allow the economy of the Old World to flourish. Many innkeeping families have owned their establishment for generations. They cater to all customers, regardless of social class, so long as they can pay. In a time when the majority of folk are insular, Innkeepers have learned information is valuable and they’re usually good for news from afar. A number of Innkeepers supplement their incomes by making introductions between customers. This varies from finding agreeable companionship for their guests to putting interested parties in contact with those who can permanently remove troublemakers with no questions asked.',
    skills: [
      'Blather or Lip Reading',
      'Charm',
      'Common Knowledge (the Empire)',
      'Consume Alcohol',
      'Evaluate',
      'Gossip',
      'Haggle',
      'Perception',
      'Read/Write or Sleight of Hand',
      'Speak Language (Breton, Kislevian, Reikspiel or Tilean)',
      'Trade (Cook)'
    ],
    talents: [
      'Etiquette or Streetwise',
      'Dealmaker or Street Fighting',
      'Strike to Stun'
    ],
    trappings: [
      'Inn',
      'one or more Servants'
    ],
    entries: [
      'Burgher',
      'Farmer',
      'Servant',
      'Freeholder'
    ],
    exits: [
      'Burgher',
      'Fence',
      'Merchant',
      'Outlaw',
      'Smuggler',
      'Farmer',
      'Herrimault'
    ],
    notes: '',
    source: 'WHFR'
  },
  {
    name: 'Interrogator',
    type: 'Advanced',
    mainstats: {
      ws: 15,
      bs: 0,
      s: 20,
      t: 10,
      ag: 10,
      int: 10,
      wp: 20,
      fel: 15
    },
    secondstats: {
      attacks: 0,
      wounds: 4,
      magic: 0
    },
    description: 'Interrogators know how to make people talk. They use both psychological and physical methods to extract information from their charges and neither is very pleasant. Interrogators work for Witch Hunters and Nobles and sometimes for the more zealous churches. They pride themselves on their efficiency, though many achieve it with excessive brutality. The best Interrogators know that discovering the truth is an art form. People lie and obfuscate and will say nearly anything to make the pain stop. Getting a confession is easy; getting to the truth is altogether more difficult.',
    skills: [
      'Charm',
      'Heal',
      'Intimidate',
      'Perception',
      'Torture'
    ],
    talents: [
      'Menacing',
      'Specialist Weapon Group (Flail)',
      'Wrestling'
    ],
    trappings: [
      '5 knives',
      'Flail',
      '3 sets of manacles'
    ],
    entries: [
      'Barber-Surgeon',
      'Bodyguard',
      'Flagellant',
      'Jailer',
      'Thug',
      'Chekist',
      'Scourge of God',
      'Thief'
    ],
    exits: [
      'Physician',
      'Racketeer',
      'Thief'
    ],
    notes: '',
    source: 'WHFR'
  },
  {
    name: 'Jailer',
    type: 'Basic',
    mainstats: {
      ws: 10,
      bs: 0,
      s: 10,
      t: 10,
      ag: 0,
      int: 0,
      wp: 5,
      fel: 0
    },
    secondstats: {
      attacks: 0,
      wounds: 3,
      magic: 0
    },
    description: 'The Empire is a nation of laws, which means it’s also a nation of jails. Despite the best efforts of the clergy of Verena, the Goddess of Justice, the innocent are just as likely as the guilty to end up in jail. Better too harsh than too lax is the opinion of the law. Imperial jails are foul dungeons that smell equally of fear and excrement. Jailers preside over these institutions, using a combination of brutality and humiliation to keep order. Jailers generally have no sense of justice or pity, and are seldom swayed by pleas or speeches (though bribes are gladly accepted). The worst are outright sadists, delighting in the power they hold over their charges.',
    skills: [
      'Command',
      'Consume Alcohol',
      'Dodge Blow',
      'Heal or Sleight of Hand',
      'Intimidate',
      'Perception',
      'Search'
    ],
    talents: [
      'Resistance to Disease',
      'Resistance to Poison',
      'Specialist Weapon Group (Entangling)',
      'Wrestling'
    ],
    trappings: [
      'Bottle of Common Wine',
      'Tankard',
      'Any one of Bola or Lasso or Net'
    ],
    entries: [
      'Bodyguard',
      'Rat Catcher',
      'Chekist'
    ],
    exits: [
      'Bailiff',
      'Bodyguard',
      'Interrogator',
      'Rat Catcher',
      'Watchman',
      'Sewer Jack'
    ],
    notes: '',
    source: 'WHFR'
  },
  {
    name: 'Journeyman Runesmith',
    type: 'Advanced',
    mainstats: {
      ws: 10,
      bs: 5,
      s: 10,
      t: 5,
      ag: 5,
      int: 20,
      wp: 25,
      fel: 5
    },
    secondstats: {
      attacks: 0,
      wounds: 3,
      magic: 2
    },
    description: 'Journeyman Runesmiths complete the fundamentals of their training and are elevated by their master to learn the deeper secrets of their craft. Instead of instruction, though, these Runesmiths are expected to venture out into the world in search of ancient magical treasures to bring back for study. Furthermore, these Dwarfs must take their accumulated knowledge and learn additional Runes from their independent study and experimentation. At the end of the Journeyman period, the Runesmith may return to his master to demonstrate his skill. If found worthy, the master might elevate the student to the full status of Master Runesmith and teach him the secrets of the Master Runes.',
    skills: [
      'Academic Knowledge (History',
      'Runes)',
      'Common Knowledge (any two)',
      'Dodge Blow',
      'Evaluate',
      'Gossip',
      'Intimidate',
      'Perception',
      'Read/Write',
      'Runecraft',
      'Speak Arcane Language (Arcane Dwarf)',
      'Speak Language (any two)',
      'Trade (any two)  '
    ],
    talents: [
      'Artistic or Hardy',
      'Rune (any six)'
    ],
    trappings: [
      'One runic item'
    ],
    entries: [
      'Apprentice Runesmith'
    ],
    exits: [
      'Master Runesmith',
      'Scholar',
      'Shieldbreaker',
      'Runelord'
    ],
    notes: 'Only Dwarfs can enter this career.',
    source: 'Realms of Sorcery'
  },
  {
    name: 'Journeyman Wizard',
    type: 'Advanced',
    mainstats: {
      ws: 5,
      bs: 5,
      s: 0,
      t: 5,
      ag: 10,
      int: 20,
      wp: 25,
      fel: 10
    },
    secondstats: {
      attacks: 0,
      wounds: 3,
      magic: 2
    },
    description: 'Human Journeymen Wizards have completed their apprenticeship and joined an Order of Wizardry. They now have access to all the spells of their chosen lore, but they must balance their newfound powers with their faltering ability to control them. The majority of Journeymen owe considerable teaching fees to their College, and must adventure to repay their debt. Journeymen Wizards hire out their services, often at their Orders’ request, for gold, knowledge and political betterment of their College. Elves, of course, are exempt from the College system, and owe nothing.',
    skills: [
      'Academic Knowledge (Magic)',
      'Academic Knowledge (any one)',
      'Channelling',
      'Charm or Intimidate',
      'Common Knowledge (any two)',
      'Gossip',
      'Magical Sense',
      'Read/Write',
      'Ride or Swim',
      'Speak Arcane Language (Magick)',
      'Speak Language (any two)'
    ],
    talents: [
      'Arcane Lore (any one) or Dark Lore (any one)',
      'Aethyric Attunement or Dark Magic',
      'Fast Hands or Very Resilient',
      'Lesser Magic (any two)',
      'Meditation or Mighty Missile'
    ],
    trappings: [
      'Grimoire',
      'Writing Kit'
    ],
    entries: [
      'Apprentice Wizard'
    ],
    exits: [
      'Charlatan',
      'Master Wizard',
      'Scholar',
      'Astrologer',
      'Master Vigilant'
    ],
    notes: 'If you are human you must pay a 40 gc fee upon entry to this career to obtain your Licence. Unless you come from a moneyed background, you must also pay one crown in every ten you earn back to your College for the duration of this career. You may attempt to avoid this, but few succeed in defrauding the Orders for long.',
    source: 'WHFR'
  },
  {
    name: 'Judicial Champion',
    type: 'Advanced',
    mainstats: {
      ws: 35,
      bs: 0,
      s: 15,
      t: 15,
      ag: 20,
      int: 10,
      wp: 15,
      fel: 0
    },
    secondstats: {
      attacks: 2,
      wounds: 6,
      magic: 0
    },
    description: 'A number of Old World countries legally allow a defendant to proof his innocence via trial by combat. The accused are usually pitted against the local Judicial Champion, a professional fighter who specializes in defeating a single opponent swiftly and efficiently. Many of the laws that allow such combats state that specific weapons must be used; meaning Judicial Champions are well versed with a wide variety of arms. Correspondingly, Judicial Champions are both respected and feared warriors, whose prowess often precedes them. Noble defendants and the wealthy may sometimes be capable of hiring a Judicial Champion to fight in their place.',
    skills: [
      'Dodge Blow',
      'Perception'
    ],
    talents: [
      'Lightning Parry',
      'Specialist Weapon Group (Fencing)',
      'Specialist Weapon Group (Flail)',
      'Specialist Weapon Group (Parrying)',
      'Specialist Weapon Group (Two-handed)'
    ],
    trappings: [
      'Great Weapon',
      'Flail or Morning Star',
      'Rapier or Foil',
      'Buckler or Main Gauche',
      '10 Yards of Rope'
    ],
    entries: [
      'Sergeant',
      'Veteran',
      'Crusader'
    ],
    exits: [
      'Assassin',
      'Champion',
      'Sergeant',
      'Witch Hunter',
      'Zealot'
    ],
    notes: '',
    source: 'WHFR'
  },
  {
    name: 'Killer of the Dead',
    type: 'Advanced',
    mainstats: {
      ws: 35,
      bs: 35,
      s: 15,
      t: 20,
      ag: 20,
      int: 15,
      wp: 30,
      fel: 5
    },
    secondstats: {
      attacks: 2,
      wounds: 6,
      magic: 0
    },
    description: 'Few survive the life of a Vampire hunter. Of those who do, many quickly turn to other careers, such as the legitimacy of Witch Hunter or the better provisions of knighthood. Those who do not become Killers of the Dead. Having seen the true horror of the Vampires and the infinite legions of the restless dead, they can never look away, and they devote their every waking moment to destroying this unrelenting enemy. Even more shunned and mistrusted than Vampire hunters, these fanatics typically become hermits or outlaws, stealing what they need to survive, so they have no distractions from their cause. Their devotion to their mission means these killers often get good enough to earn notoriety amongst the Vampires – and knowing this, every killer sleeps restlessly, stake in hand, waiting to feel fangs upon his neck and hear the sound of vengeful laughter in his ear.',
    skills: [
      'Academic Knowledge (Necromancy)',
      'Concealment',
      'Follow Trail',
      'Intimidate',
      'Outdoor Survival',
      'Shadowing',
      'Silent Move',
      'Torture'
    ],
    talents: [
      'Alley Cat or Rover',
      'Fearless',
      'Focussed Strike',
      'Frenzy',
      'Lightning Reflexes',
      'Menacing',
      'Mighty Shot or Rapid Reload',
      'Sixth Sense',
      'Specialist Weapon Group (Throwing or Crossbow)',
      'Specialist Weapon Group (Two-handed)',
      'Stout-hearted',
      'Strike Mighty Blow',
      'Strike to Injure',
      'Unsettling',
      'Very Resilient or Very Strong'
    ],
    trappings: [
      'Blessed Water',
      '6 Stakes',
      'Silvered Weapon'
    ],
    entries: [
      'Agent of the Shroud',
      'Black Guard',
      'Flagellant',
      'Knight of the Raven',
      'Vampire Hunter',
      'Witch Hunter'
    ],
    exits: [
      'None'
    ],
    notes: 'You must have at least 5 Insanity Points to enter this career.',
    source: 'NDM'
  },
  {
    name: 'Kislevite Kossar',
    type: 'Basic',
    mainstats: {
      ws: 10,
      bs: 10,
      s: 0,
      t: 10,
      ag: 0,
      int: 0,
      wp: 10,
      fel: 0
    },
    secondstats: {
      attacks: 0,
      wounds: 2,
      magic: 0
    },
    description: 'Originally, the Kossars were an Ungol tribe that lived northeast of the Empire. An eastern people known as the Gospodars invaded this region, subjugated the Ungols, and founded the nation of Kislev. During this conflict, the Kossars sold their skills to the Gospodars as Mercenaries, fighting against other Ungol tribes. Their unique style of fighting impressed the Gospodar nobility, and since that time Kossar regiments have served the Tzars of Kislev. These days the Kossars are no longer a tribe, but a tough military unit drawn from all over Kislev. They are armed with bows and great axes, making them quite flexible on the battlefield. Many Kossars, tired of the ceaseless warfare of their native land, travel to the Empire to become Mercenaries or adventurers.',
    skills: [
      'Common Knowledge (Kislev)',
      'Consume Alcohol',
      'Dodge Blow',
      'Gamble or Gossip',
      'Outdoor Survival',
      'Perception',
      'Search',
      'Speak Language (Kislevian)'
    ],
    talents: [
      'Specialist Weapon Group (Two-handed)',
      'Strike to Injure'
    ],
    trappings: [
      'Bow with 10 arrows',
      'Great Weapon (Two-handed Axe)',
      'Medium Armour (Mail Coat, Leather Jack, and Leather Leggings)'
    ],
    entries: [
      'None'
    ],
    exits: [
      'Bounty Hunter',
      'Mercenary',
      'Sergeant',
      'Shieldbreaker',
      'Veteran'
    ],
    notes: 'If this is your Starting Career, you are from Kislev',
    source: 'WHFR'
  },
  {
    name: 'Kithband Warrior',
    type: 'Basic',
    mainstats: {
      ws: 5,
      bs: 5,
      s: 0,
      t: 0,
      ag: 10,
      int: 10,
      wp: 5,
      fel: 0
    },
    secondstats: {
      attacks: 0,
      wounds: 2,
      magic: 0
    },
    description: 'Some Elves live in secluded glades deep inside the great forests. As the taint of Chaos has become worse, these Elven lands have declined. Within the Empire few Elven communities are left, the largest being in Laurelorn. Beneath the boughs of the forest the Elves fight a hidden battle with Beastmen and other foul creatures. Small units of warriors, known as Kithbands, take the fight to the enemy. As their name indicates, Kithbands are made up of Elves from related family groups and they fight under their clan emblems. These skilled bowmen protect the Elf settlements from the dark things of the wood. Every bow is needed to stave off the destruction of the remaining Elf lands of the Empire.',
    skills: [
      'Concealment',
      'Dodge Blow',
      'Follow Trail',
      'Heal or Search',
      'Outdoor Survival',
      'Perception',
      'Scale Sheer Surface',
      'Silent Move'
    ],
    talents: [
      'Marksman or Rover',
      'Rapid Reload or Warrior Born'
    ],
    trappings: [
      'Elfbow with 10 arrows',
      'Light Armour (Leather Jack)'
    ],
    entries: [
      'Hunter',
      'Messenger'
    ],
    exits: [
      'Hunter',
      'Outrider',
      'Scout',
      'Vagabond',
      'Veteran'
    ],
    notes: 'Only Elves of woodland origin can enter this career.',
    source: 'WHFR'
  },
  {
    name: 'Knight Errant',
    type: 'Basic',
    mainstats: {
      ws: 15,
      bs: 0,
      s: 5,
      t: 5,
      ag: 5,
      int: 0,
      wp: 5,
      fel: 5
    },
    secondstats: {
      attacks: 1,
      wounds: 2,
      magic: 0
    },
    description: 'Knights of the Empire start their careers following after some other knight, acting as nothing more than a servant. What else would you expect from a nation who has forgotten the true meaning of chivalry, the true meaning of honour, and the true meaning of courage? In Bretonnia, knights start off riding their own trail, as they set off on their errantry tour. Bretonnian knights learn from the best school there is: genuine experience. At the start of their tour, they don’t have any genuine experience, but most make up the deficit with their enthusiasm. Knights Errant are expected to travel widely, often alone, seeking out perilous situations in which to prove their worth. As a result, they can be found anywhere in the Old World, sometimes to the regret of the natives.',
    skills: [
      'Academic Knowledge (Genealogy/Heraldry)',
      'Animal Care',
      'Animal Training',
      'Common Knowledge (any one)',
      'Dodge Blow',
      'Outdoor Survival',
      'Ride',
      'Speak Language (any one)'
    ],
    talents: [
      'Etiquette',
      'Seasoned Traveller',
      'Specialist Weapon Group (Cavalry)',
      'Strike Mighty Blow',
      'Virtue of Chivalry'
    ],
    trappings: [
      'Medium Armour (Mail Shirt',
      'Mail Coif',
      'Leather Jack',
      'Helmet)',
      'Lance',
      'Shield',
      'Light Warhorse with saddle and harness'
    ],
    entries: [
      'Knight',
      'Noble',
      'Squire'
    ],
    exits: [
      'Knight of the Realm',
      'Herrimault'
    ],
    notes: 'Characters who are not male Bretonnian nobles must pretend to be so in order to become Knights Errant.',
    source: 'KotG'
  },
  {
    name: 'Knight Panther',
    type: 'Advanced',
    mainstats: {
      ws: 30,
      bs: 0,
      s: 15,
      t: 15,
      ag: 15,
      int: 10,
      wp: 10,
      fel: 15
    },
    secondstats: {
      attacks: 1,
      wounds: 6,
      magic: 0
    },
    description: 'Knights Panther are distinguished from other knights by their tall helmet crests topped by the image of a Beastman head. This is a change from the spotted great cat of their past, though they retain the distinctive pattern in their saddlecloths. To be accepted into this order, a squire must hunt down and kill a great forest cat single-handedly, placing its skin beneath his saddle when knighted. Thereafter, the Knight Panther divides his time between serving the Graf and going on private quests to destroy the minions of Chaos wherever they are found.',
    skills: [
      'Academic Knowledge (Genealogy/Heraldry)',
      'Academic Knowledge (Strategy/Tactics)',
      'Animal Training',
      'Command',
      'Common Knowledge (the Empire)',
      'Dodge Blow',
      'Perception',
      'Ride',
      'Secret Language (Battle Tongue)',
      'Speak Language (any two)'
    ],
    talents: [
      'Coolheaded',
      'Dealmaker',
      'Etiquette',
      'Specialist Weapon Group (Cavalry)',
      'Specialist Weapon Group (any one)',
      'Strike to Injure',
      'Sturdy',
      'Warrior Born'
    ],
    trappings: [
      'Hand Weapon (Sword)',
      'Lance',
      'Heavy Armour (Full Plate Armour)',
      'Shield',
      'Destrier with Full Plate Barding',
      'Saddle',
      'and Harness',
      '50 gc'
    ],
    entries: [
      'Knight',
      'Noble Lord',
      'Sergeant',
      'Squire',
      'Witch Hunter'
    ],
    exits: [
      'Captain',
      'Champion',
      'Knight of the Inner Circle',
      'Veteran',
      'Witch Hunter'
    ],
    notes: '',
    source: 'ToC'
  },
  {
    name: 'Knight of the Blazing Sun',
    type: 'Advanced',
    mainstats: {
      ws: 25,
      bs: 0,
      s: 10,
      t: 20,
      ag: 20,
      int: 10,
      wp: 15,
      fel: 10
    },
    secondstats: {
      attacks: 1,
      wounds: 5,
      magic: 0
    },
    description: 'The Knights of the Blazing Sun are an order of templars dedicated to Myrmidia, Goddess of Soldiers and Strategy. Their order has spread from Tilea and Estalia in recent centuries, championing their cult’s values in battles across the Old World. Gathering as a large force only rarely, they instead travel in small groups or individually, acting as advisors to nobles and their generals on the art of war. Sometimes they command units or whole armies in the field, using their skills and reputation to keep militia troops from breaking and mercenaries loyal. More and more in the south of the Empire, the Knights of the Blazing Sun and the Cult of Myrmidia are seen as a challenge to the martial primacy of the Cult of Ulric and the Knights of the White Wolf. At some point in his career, a Knight of the Blazing Sun will be sent out on his own for one to two years, to test what he has learned and forge his skills in the crucible of combat. Many an isolated village, farmstead, or coaching inn has been saved by a young Knight taking charge of the defence.',
    skills: [
      'Academic Knowledge (History)',
      'Academic Knowledge (Strategy/Tactics)',
      'Academic Knowledge (Theology)',
      'Command',
      'Common Knowledge (Estalia or Tilea)',
      'Dodge Blow',
      'Perception',
      'Read/Write',
      'Ride',
      'Secret Language (Battle Tongue)',
      'Secret Signs (Templar)',
      'Speak Language (Estalian or Tilean)'
    ],
    talents: [
      'Disarm',
      'Etiquette',
      'Seasoned Traveller',
      'Specialist Weapon Group (Cavalry)',
      'Specialist Weapon Group (Fencing)',
      'Specialist Weapon Group (Parrying)',
      'Stout-hearted',
      'Strike to Injure'
    ],
    trappings: [
      'Buckler or Shield',
      'Destrier with Saddle and Harness',
      'Hand Weapon (Sword) or Rapier',
      'Heavy Armour (Full Plate Armour)',
      'Lance or Spear',
      'Religious Symbol (Myrmidia)'
    ],
    entries: [
      'Knight',
      'Noble Lord',
      'Sergeant',
      'Squire'
    ],
    exits: [
      'Captain',
      'Champion',
      'Explorer',
      'Initiate',
      'Knight of the Inner Circle'
    ],
    notes: '',
    source: 'Sigmar\'s Heir'
  },
  {
    name: 'Knight of the Inner Circle',
    type: 'Advanced',
    mainstats: {
      ws: 35,
      bs: 10,
      s: 20,
      t: 20,
      ag: 20,
      int: 15,
      wp: 25,
      fel: 15
    },
    secondstats: {
      attacks: 2,
      wounds: 8,
      magic: 0
    },
    description: 'Within each knightly order there are those who rise to the top, the best of the best. They have proven themselves valiant and loyal time and time again and for that they are brought into the inner circle of the order. They command Knights in the field, represent the order at court, and make the important decisions. They are some of the greatest warriors the Old World has to offer and many of them have been entrusted with dangerous secrets about the foundations of their group. Each one of them aspires to become the Grand Master of his order. That is the pinnacle of knighthood.',
    skills: [
      'Academic Knowledge (Genealogy/Heraldry or Religion)',
      'Academic Knowledge (Strategy/Tactics)',
      'Animal Training',
      'Charm',
      'Command',
      'Common Knowledge (any three)',
      'Dodge Blow',
      'Perception',
      'Read/Write',
      'Ride',
      'Secret Language (Battle Tongue)',
      'Secret Signs (Scout or Templar)',
      'Speak Language (Breton, Estalian, Kislevian, or Tilean)'
    ],
    talents: [
      'Etiquette',
      'Lightning Parry',
      'Seasoned Traveller',
      'Specialist Weapon Group (Fencing)',
      'Specialist Weapon Group (Parrying)',
      'Stout-hearted',
      'Strike to Injure',
      'Strike to Stun'
    ],
    trappings: [
      'Buckler or Main Gauche',
      'Rapier or Foil',
      'Heavy Armour (Best Craftsmenship Full Plate Armour)',
      'Religious Symbol',
      '50 gc'
    ],
    entries: [
      'Knight',
      'Witch Hunter',
      'Black Guard',
      'Crusader',
      'Knight Panther',
      'Knight of the Blazing Sun',
      'Knight of the Raven'
    ],
    exits: [
      'Captain',
      'Champion',
      'Noble Lord',
      'Witch Hunter',
      'Grandmaster',
      'Knight of the Raven'
    ],
    notes: '',
    source: 'WHFR'
  },
  {
    name: 'Knight of the Raven',
    type: 'Advanced',
    mainstats: {
      ws: 35,
      bs: 15,
      s: 20,
      t: 20,
      ag: 20,
      int: 15,
      wp: 30,
      fel: 10
    },
    secondstats: {
      attacks: 2,
      wounds: 8,
      magic: 0
    },
    description: 'The Fellowship of the Shroud believes in taking the battle to the enemy. Their very best warriors form an order known as the Knights of the Raven, and their mandate is very clear: destroy every Skeleton, Zombie, and Shade upon the earth and exterminate the necromancers and Vampires who summon them. Unlike their sister order the Black Guard, the Knights of the Raven are ruthless and aggressive, seeking out their enemy rather than waiting for Undead to come to them. At the moment, a great many of the knights are stationed in the town of Siegfriedhof of Stirland on the border of Sylvania. So far, they have only conducted raids, but as their numbers and intelligence grows, and the truth about Mannfred’s return becomes undeniable, they will begin a crusade to take that bleak land away from its dark lords once again.',
    skills: [
      'Academic Knowledge (History',
      'Necromancy',
      'Strategy/Tactics',
      'Theology)',
      'Animal Training',
      'Common Knowledge (any)',
      'Dodge Blow',
      'Follow Trail',
      'Perception',
      'Read/Write',
      'Ride',
      'Secret Language (Battle Tongue)',
      'Speak Language (Breton or Kislevian)'
    ],
    talents: [
      'Cool-headed or Sixth Sense',
      'Focussed Strike or Sharpshooter',
      'Lightning Parry',
      'Marksman',
      'Master Gunner or Quick Draw',
      'Rapid Reload',
      'Seasoned Traveller',
      'Specialist Weapon Group (Crossbow or Longbow, Parrying or Two-handed)',
      'Stout-hearted',
      'Strike to Injure',
      'Strong-minded'
    ],
    trappings: [
      'Full Plate Armour (Heavy)',
      'Lance',
      'Longbow or Crossbow or Two Pistols',
      'Shield or Sword-Breaker or Greatweapon',
      '1 Silvered or Blessed Weapon',
      '4 Hawthorn Stakes',
      'Blessed Water',
      'Symbol of the Raven'
    ],
    entries: [
      'Black Guard',
      'Knight',
      'Knight of the Inner Circle'
    ],
    exits: [
      'Captain',
      'Champion',
      'Killer of the Dead',
      'Knight of the Inner Circle',
      'Witch Hunter'
    ],
    notes: '',
    source: 'NDM'
  },
  {
    name: 'Knight of the Realm',
    type: 'Advanced',
    mainstats: {
      ws: 25,
      bs: 0,
      s: 15,
      t: 15,
      ag: 15,
      int: 0,
      wp: 10,
      fel: 15
    },
    secondstats: {
      attacks: 1,
      wounds: 4,
      magic: 0
    },
    description: 'Knights of the Realm are the backbone of the Bretonnian army and the most common members of its ruling elite. They have distinguished themselves in errantry and received a fief or a position in some other noble’s household. They are expected to honor and defend their lord, as well as the Realm. The knights described in Chapter Eight of Knights of the Grail are primarily Knights of the Realm.',
    skills: [
      'Academic Knowledge (Genealogy/Heraldry or Religion)',
      'Academic Knowledge (Strategy/Tactics)',
      'Command',
      'Dodge Blow',
      'Perception',
      'Ride',
      'Secret Language (Battle Tongue)',
      'Speak Language (any two)'
    ],
    talents: [
      'Specialist Weapon Group (Cavalry)',
      'Specialist Weapon Group (Two-handed)',
      'Strike Mighty Blow',
      'Virtue of Knighthood (any one)'
    ],
    trappings: [
      'Lance',
      'Heavy Armour (Full Plate Armour)',
      'Shield',
      'icon of the Lady of the Lake',
      'Destrier with Saddle and Harness',
      'Household Position with a Bretonnian Noble or Bretonnian Fief'
    ],
    entries: [
      'Knight Errant'
    ],
    exits: [
      'Captain',
      'Courtier',
      'Explorer',
      'Faceless',
      'Noble Lord',
      'Politician',
      'Questing Knight'
    ],
    notes: 'Characters who are not male Bretonnian nobles must pretend to be so in order to become Knights of the Realm.',
    source: 'KotG'
  },
  {
    name: 'Knight of the Verdant Field',
    type: 'Advanced',
    mainstats: {
      ws: 20,
      bs: 20,
      s: 15,
      t: 15,
      ag: 10,
      int: 5,
      wp: 10,
      fel: 5
    },
    secondstats: {
      attacks: 1,
      wounds: 4,
      magic: 0
    },
    description: 'The Knights of the Verdant Field are an order of Templars dedicated to the protection of Talabheim in the name of their militaristic Goddess, Myrmidia. They are warriors in the true sense of the word, trained to wage war in the forests and wild areas of their homeland. Though they rarely leave the confines of Talabheim, their skills serve them equally well from the Great Forest to the Drakwald. Although the Knights of the Verdant Field come from all walks of life, they share a single motivation: to serve their Goddess and protect their people.',
    skills: [
      'Academic Knowledge (Strategy/Tactics)',
      'Charm Animal',
      'Command or Intimidate',
      'Dodge Blow',
      'Follow Trail',
      'Outdoor Survival or Scale Sheer Surface',
      'Perception',
      'Ride',
      'Search',
      'Secret Language (Ranger Tongue) or Secret Signs (Ranger)'
    ],
    talents: [
      'Fleet Footed or Keen Senses',
      'Orientation',
      'Rover',
      'Specialist Weapon Group (Longbow)',
      'Strike Mighty Blow or Sure Shot'
    ],
    trappings: [
      'Hand Weapon (sword)',
      'Light Armour (Leather Jack, Leather Leggings)',
      'Longbow with 10 arrows.'
    ],
    entries: [
      'Hunter',
      'Mercenary',
      'Militiaman',
      'Outrider',
      'Soldier',
      'Woodsman'
    ],
    exits: [
      'Priest',
      'Scout',
      'Veteran'
    ],
    notes: '',
    source: 'TiT'
  },
  {
    name: 'Knight',
    type: 'Advanced',
    mainstats: {
      ws: 25,
      bs: 0,
      s: 15,
      t: 15,
      ag: 15,
      int: 5,
      wp: 15,
      fel: 5
    },
    secondstats: {
      attacks: 1,
      wounds: 4,
      magic: 0
    },
    description: 'Knights are professional Soldiers, generally, but not always of Noble blood. They specialize in fighting in heavy armour while using large weapons, often from horseback, and comprise a general’s most elite shock troops. Many Knights have a duty to protect the lower classes, though not all of them acknowledge it. There are a large number of knightly orders hailing from both the Empire and Bretonnia, such as the Knights of the White Wolf, the Knights Panther, the Reiksgard Knights, and the Grail Knights. Religious orders of Knights are known as templars.',
    skills: [
      'Academic Knowledge (Genealogy/Heraldry or Religion)',
      'Academic Knowledge (Strategy/Tactics)',
      'Dodge Blow',
      'Perception',
      'Ride',
      'Secret Language (Battle Tongue)',
      'Speak Language (any two)'
    ],
    talents: [
      'Specialist Weapon Group (Cavalry)',
      'Specialist Weapon Group (Flail)',
      'Specialist Weapon Group (Two-handed)',
      'Strike Mighty Blow'
    ],
    trappings: [
      'Flail or Morning Star',
      'Lance',
      'Heavy Armour (Full Plate Armour)',
      'Shield',
      'Religious Symbol',
      '25 gc',
      'Destrier with Saddle and Harness'
    ],
    entries: [
      'Noble Lord',
      'Pistolier',
      'Sergeant',
      'Squire',
      'Vampire Hunter',
      'Warrior Priest'
    ],
    exits: [
      'Captain',
      'Initiate',
      'Knight of the Inner Circle',
      'Noble Lord',
      'Vampire Hunter',
      'Black Guard',
      'Crusader',
      'Knight Errant',
      'Knight Panther',
      'Knight of the Blazing Sun',
      'Knight of the Raven'
    ],
    notes: '',
    source: 'WHFR'
  },
  {
    name: 'Lamplighter',
    type: 'Basic',
    mainstats: {
      ws: 5,
      bs: 0,
      s: 5,
      t: 0,
      ag: 10,
      int: 5,
      wp: 5,
      fel: 5
    },
    secondstats: {
      attacks: 0,
      wounds: 2,
      magic: 0
    },
    description: 'The Empire’s largest cities have a wonder seen nowhere else in the Old World: the streetlamp. They are used to illuminate the major streets and thoroughfares, particularly in wealthy neighbourhoods. Altdorf was the first city to install streetlamps and those surrounding the Emperor’s Palace are particularly ornate. Lamplighters are responsible for maintaining the streetlamps and lighting them each night as dusk falls. They carry a variety of candles and matches and some even use the slow burning matches common to firearms. City dwellers are proud of their streetlamps, seeing them as symbols of sophistication and civilisation. Such is the threat of fire in the closely packed buildings that interfering with the lamplighters is punishable by death.',
    skills: [
      'Common Knowledge (the Empire)',
      'Consume Alcohol or Drive',
      'Gossip',
      'Haggle',
      'Outdoor Survival',
      'Perception',
      'Scale Sheer Surface'
    ],
    talents: [
      'Excellent Vision or Savvy',
      'Flee!',
      'Street Fighting'
    ],
    trappings: [
      'Lamp Oil',
      '20 Matches',
      'Storm Lantern',
      'Tinderbox',
      '8 Wax Candles',
      '10’ Lamplighter’s Pole'
    ],
    entries: [
      'Charcoal-Burner',
      'Peasant',
      'Rat Catcher',
      'Servant'
    ],
    exits: [
      'Agitator',
      'Burgher',
      'Entertainer',
      'Initiate',
      'Servant',
      'Smuggler',
      'Toll Keeper',
      'Watchman'
    ],
    notes: 'If you are rolling randomly for your Starting Career, you can substitute Lamplighter for Burgher with your GM’s permission.',
    source: 'SoA'
  },
  {
    name: 'Lay Priest',
    type: 'Advanced',
    mainstats: {
      ws: 15,
      bs: 10,
      s: 5,
      t: 10,
      ag: 10,
      int: 15,
      wp: 20,
      fel: 20
    },
    secondstats: {
      attacks: 0,
      wounds: 6,
      magic: 0
    },
    description: 'Priests who serve their god’s will through worldly deeds are known as lay priests. Unlike their magical counterparts, lay priests do not labour day and night studying esoteric scriptures to achieve communion with the divine. Instead, lay priests deliver sermons to common folk, for ultimately the faith of the masses is what elevates gods above daemons and spirits. Lay priests are not just preachers, however; they are also tradesmen, scholars and administrators. A god’s sphere of influence is manifested by the lay priest’s expertise in his field, and the divine ideal is exemplified by his public conduct.',
    skills: [
      'Academic Knowledge (any two)',
      'Academic Knowledge (Theology)',
      'Charm',
      'Common Knowledge (any two)',
      'Gossip',
      'Haggle',
      'Heal',
      'Magical Sense',
      'Perception',
      'Read/Write',
      'Ride or Swim',
      'Speak Arcane Language (Magick)',
      'Speak Language (any two)'
    ],
    talents: [
      'Etiquette',
      'Public Speaking',
      'Resistance to Magic'
    ],
    trappings: [
      'Prayer Book',
      'Good Quality Vestments',
      'Writing Kit'
    ],
    entries: [
      'Friar',
      'Initiate',
      'Priest',
      'Exorcist'
    ],
    exits: [
      'Friar',
      'Prelate',
      'Priest'
    ],
    notes: 'Lay Priests have access to the Skills and Talents of their cult (See Appendix V page 244)',
    source: 'CC'
  },
  {
    name: 'Litigant',
    type: 'Basic',
    mainstats: {
      ws: 0,
      bs: 0,
      s: 0,
      t: 0,
      ag: 5,
      int: 10,
      wp: 10,
      fel: 10
    },
    secondstats: {
      attacks: 0,
      wounds: 2,
      magic: 0
    },
    description: 'Litigants are common sights both in Talabheim and all the major cities of the Old World. They write up legal documents, interpret the law, and represent individuals in court who are able to afford their fees. Litigants are almost universally reviled, except when someone is in legal trouble and needs assistance. Litigants need to be well versed in both the laws of the Empire and the region they plan to practice law, plus have a great deal of knowledge about day-to-day affairs. Even the lowest-born litigant is considered a “person of letters” to the general populace and may be asked to do things far beyond their training.',
    skills: [
      'Academic Knowledge (Genealogy/Heraldry or History)',
      'Academic Knowledge (Law)',
      'Blather or Charm',
      'Common Knowledge (the Empire)',
      'Gossip or Haggle',
      'Perception',
      'Read/Write',
      'Secret Language (Guild Tongue)',
      'Speak Language (Reikspiel)'
    ],
    talents: [
      'Dealmaker or Etiquette',
      'Public Speaking',
      'Savvy or Suave'
    ],
    trappings: [
      'Book of Empire Laws',
      'Writing Kit',
      'Hand weapon'
    ],
    entries: [
      'Burgher',
      'Envoy',
      'Exciseman',
      'Scribe',
      'Student',
      'Watchman',
      'Scholar'
    ],
    exits: [
      'Agitator',
      'Demagogue',
      'Guild Master',
      'Merchant',
      'Politician',
      'Scholar'
    ],
    notes: 'If you are rolling randomly for your Starting Career, you can substitute Litigant for Scribe with your GM’s permission.',
    source: 'TiT'
  },
  {
    name: 'Man-at-Arms',
    type: 'Basic',
    mainstats: {
      ws: 10,
      bs: 0,
      s: 5,
      t: 10,
      ag: 10,
      int: 0,
      wp: 0,
      fel: 0
    },
    secondstats: {
      attacks: 0,
      wounds: 2,
      magic: 0
    },
    description: 'Whilst knights are the backbone of Bretonnian armies, peasants form the bulk. Some receive no training at all and are simply rounded up and pointed at the enemy. Men-at-Arms are the lucky ones. When they were paraded before their lord, he decided they had the potential to fight back and ordered that they be trained. Still, the training and equipment that Men-at-Arms receive are not very good, and whilst they do receive some pay, it is far less than you might expect for risking your life. Most important, they are given no choice in the matter. As a result, it is not uncommon for Men-at-Arms to seize any chance to desert, and many deserters take up a life of adventure.',
    skills: [
      'Consume Alcohol',
      'Dodge Blow',
      'Gamble',
      'Gossip',
      'Intimidate',
      'Perception'
    ],
    talents: [
      'Specialist Weapon Group (Two-handed)',
      'Street Fighting',
      'Strike Mighty Blow',
      'Strike to Injure'
    ],
    trappings: [
      'Halberd',
      'Light Armour (Leather Jack and Leather Skullcap)',
      'Uniform bearing Lord’s Heraldry'
    ],
    entries: [
      'Carcassonne Shepherd',
      'Hunter',
      'Peasant',
      'Vagabond',
      'Woodsman',
      'Swampaire'
    ],
    exits: [
      'Carcassonne Shepherd',
      'Herrimault',
      'Outlaw',
      'Outrider',
      'Veteran',
      'Yeoman',
      'Mediator',
      'Wall Warden'
    ],
    notes: 'Women can only enter this career if they are pretending to be men.',
    source: 'KotG'
  },
  {
    name: 'Marauder',
    type: 'Basic',
    mainstats: {
      ws: 10,
      bs: 0,
      s: 5,
      t: 5,
      ag: 10,
      int: 0,
      wp: 10,
      fel: 0
    },
    secondstats: {
      attacks: 1,
      wounds: 2,
      magic: 0
    },
    description: 'Most Norsemen are great warriors, blessed with strength at arms and fierce demeanours, but it is the dream of nearly every Norsemen to join the ranks of the greatest warriors, to become Champions of Chaos and bear the marks of their Gods’ favour. Until they can prove their value to the Dark Gods, they are simply Marauders. Most Marauders are the core of the Chaos Hordes. They flock to the banners of their Champions, throwing their weight behind any cause, whether it’s the bidding of their Gods or the call to battle. When not part of a great army, they spend their time raiding villages of the Empire (Cathay, for Hung Marauders). Natural fighters, they are hardened by the bleak land and bred for battle. They hold all others in contempt.',
    skills: [
      'Animal Care',
      'Consume Alcohol',
      'Follow Trail',
      'Navigation',
      'Perception',
      'Ride or Sail',
      'Search'
    ],
    talents: [
      'Orientation',
      'Specialist Weapon Group (Cavalry, Flail or Two-handed)',
      'Strike to Injure'
    ],
    trappings: [
      'Dagger or two Javelins',
      'Flail',
      'Great Weapon or Demilance',
      'Hand Weapon',
      'Light Armour (Helmet and Leather Leggings)',
      'Shield',
      'Tattoos'
    ],
    entries: [
      'Bondsman',
      'Freeholder',
      'Reaver',
      'Skald',
      'Whaler'
    ],
    exits: [
      'Mercenary',
      'Reaver',
      'Slaver',
      'Warleader'
    ],
    notes: 'The Marauder career is open to Norsemen, Kurgan, and Hung. The latter two are generally horsemen, hence this career allows for Marauders that serve as horsemen. For details on these peoples, see Chapter XII: Hordes of Chaos in Tome of Corruption. (Special: Any character with at least one mutation and the GM’s permission may become a Marauder).',
    source: 'ToC'
  },
  {
    name: 'Marine',
    type: 'Basic',
    mainstats: {
      ws: 10,
      bs: 10,
      s: 10,
      t: 0,
      ag: 5,
      int: 0,
      wp: 5,
      fel: 0
    },
    secondstats: {
      attacks: 1,
      wounds: 3,
      magic: 0
    },
    description: 'Marines are ship-borne soldiers who can be found in the Imperial fleet and onboard the larger private vessels. They protect their ships from pirates, Norse marauders, and other raiders. Unlike seamen, whose primary duty is sailing the ship, Marines are onboard only to fight. When in port, Marines frequently form press gangs to fill out the ship’s crew. More than one unsuspecting citizen has awoken at sea after taking a belaying pin to the head from an overzealous press ganger. Due to these activities, and their own drunken brawling, Marines are resented in many seaside communities. When raiders attack, however, these same citizens are quick to accept the aid of battle-hardened Marines.',
    skills: [
      'Common Knowledge (the Wasteland) or Gamble',
      'Consume Alcohol',
      'Dodge Blow',
      'Gossip or Secret Language (Battle Tongue)',
      'Intimidate',
      'Row',
      'Swim'
    ],
    talents: [
      'Disarm or Quick Draw',
      'Strike Mighty Blow',
      'Strike to Stun'
    ],
    trappings: [
      'Bow or Crossbow with 10 Arrows or Bolts',
      'Light Armour (Leather Jack)',
      'Shield',
      'Grappling Hook',
      '10 Yards of Rope'
    ],
    entries: [
      'Boatman',
      'Fisherman',
      'Seaman',
      'Reaver',
      'Riverwarden',
      'Stevedore',
      'Wrecker'
    ],
    exits: [
      'Mate',
      'Outlaw',
      'Sergeant',
      'Smuggler',
      'Thief',
      'Riverwarden',
      'Thug',
      'Wrecker'
    ],
    notes: 'During character creation, if you take Common Knowledge (the Wasteland), your character can be from the great port of Marienburg at your option.',
    source: 'WHFR'
  },
  {
    name: 'Master Runesmith',
    type: 'Advanced',
    mainstats: {
      ws: 15,
      bs: 10,
      s: 15,
      t: 10,
      ag: 10,
      int: 25,
      wp: 35,
      fel: 10
    },
    secondstats: {
      attacks: 1,
      wounds: 5,
      magic: 3
    },
    description: 'Master Runesmiths are the teachers and keepers Rune knowledge. Very few Runesmiths ever rise to this status and of those who do, many stay within their holds, passing on what they have learned to the young and talented Dwarfs in their families. Other Master Runesmiths devote years of their lives to the search for ancient secrets, exploring the world to uncover ancient weapons and artefacts of great age, hoping to recover lost Runes of ancient and fabled Runesmiths. Such quests take Master Runesmiths into dangerous places, such as ruined holds, dragon lairs, the depths of Elven forests, and worse, for much of the Dwarfs territory has, over the centuries, fallen into the hands of their enemies.  ',
    skills: [
      'Academic Knowledge (any three)',
      'Command',
      'Common Knowledge (any three)',
      'Dodge Blow',
      'Evaluate',
      'Gossip',
      'Intimidate',
      'Perception',
      'Read/Write',
      'Runecraft',
      'Speak Arcane Language (Arcane Dwarf)',
      'Speak Language (any three)',
      'Trade (any two)'
    ],
    talents: [
      'Disarm or Strike Mighty Blow',
      'Master Rune (any two)',
      'Rune (any ten)',
      'Specialist Weapon Group (Flail or Two-handed)'
    ],
    trappings: [
      'Two runic items'
    ],
    entries: [
      'Journeyman Runesmith'
    ],
    exits: [
      'Runelord',
      'Scholar',
      'Veteran'
    ],
    notes: 'Only Dwarfs can enter this career.',
    source: 'Realms of Sorcery'
  },
  {
    name: 'Master Thief',
    type: 'Advanced',
    mainstats: {
      ws: 20,
      bs: 20,
      s: 10,
      t: 10,
      ag: 40,
      int: 25,
      wp: 20,
      fel: 25
    },
    secondstats: {
      attacks: 1,
      wounds: 6,
      magic: 0
    },
    description: 'In every profession there are those who rise to the top. Master Thieves are the grand artistes of the criminal world. They are the best Thieves there are, proficient in all the skills that it takes to illegally acquire the goods of others. Master Thieves are usually a part of the local Thieves’ Guild structure, but as bravos who regularly flout the law, many of them are content to operate, ironically enough, “illegally”, e.g. without the approval of the local Crime Lord. The Empire has a long tradition of secretly admiring bold Thieves, though they will still be punished if caught.',
    skills: [
      'Charm',
      'Concealment',
      'Disguise',
      'Dodge Blow',
      'Evaluate',
      'Gamble or Lip Reading',
      'Gossip',
      'Perception',
      'Pick Lock',
      'Read/Write',
      'Scale Sheer Surface',
      'Secret Language (Thieves’ Tongue)',
      'Secret Signs (Thief)',
      'Search',
      'Silent Move',
      'Sleight of Hand',
      'Swim'
    ],
    talents: [
      'Specialist Weapon Group (Crossbow)',
      'Specialist Weapon Group (Throwing)',
      'Street Fighting or Swashbuckler',
      'Streetwise',
      'Trapfinder'
    ],
    trappings: [
      'Crossbow Pistol with 10 Bolts',
      '2 Throwing Axes/Hammer or 3 Throwing Daggers/Stars',
      'Best Craftsmenship Lock Picks',
      'Cloak',
      'Sack',
      'Best Craftsmenship Rope (10 yards)'
    ],
    entries: [
      'Cat Burglar',
      'Crime Lord',
      'Fence',
      'Highwayman',
      'Racketeer',
      'Spy',
      'Cloaked Brother'
    ],
    exits: [
      'Crime Lord',
      'Explorer',
      'Outlaw Chief',
      'Targeteer',
      'Cloaked Brother'
    ],
    notes: '',
    source: 'WHFR'
  },
  {
    name: 'Master Vigilant',
    type: 'Advanced',
    mainstats: {
      ws: 15,
      bs: 10,
      s: 5,
      t: 10,
      ag: 20,
      int: 25,
      wp: 30,
      fel: 15
    },
    secondstats: {
      attacks: 0,
      wounds: 5,
      magic: 3
    },
    description: 'The Colleges of Magic are loath to leave their dirty laundry to be washed in public by the Witch Hunters or other authorities. Consequently, each Order employs its own watchdogs and investigators, devoted to discretely exposing those who break their oaths and practice dark magic, necromancy, or diabolism. Since Vampires are so often students of these black arts, these observers also take pride in hunting and destroying the princes of darkness. Magisters vigilant still pay their dues to their College, as per a magister lord, but they are not expected to take apprentices. Their duties across the Empire prevent them from attaining the control of magic that many of their colleagues possess, but they have many other skills and talents useful in other sorts of situations, and they command great respect and fear amongst their own kind.',
    skills: [
      'Academic Knowledge (Daemonology',
      'Magic',
      'Necromancy)',
      'Channelling',
      'Common Knowledge (the Empire and any one)',
      'Gossip',
      'Intimidate',
      'Magical Sense',
      'Perception',
      'Read/Write',
      'Ride',
      'Search',
      'Speak Arcane Language (Daemonic',
      'Magick)',
      'Speak Language (any two)',
      'Torture'
    ],
    talents: [
      'Fast Hands',
      'Lesser Magic (any four)',
      'Menacing',
      'Mighty Missile',
      'Schemer',
      'Stout-Hearted',
      'Strong-minded'
    ],
    trappings: [
      'Trade Tools (Apothecary)',
      'two Magic Items',
      'Silvered or Magical Blade'
    ],
    entries: [
      'Journeyman Wizard',
      'Master Wizard'
    ],
    exits: [
      'Master Wizard',
      'Spy',
      'Vampire Hunter',
      'Witch Hunter',
      'Wizard Lord'
    ],
    notes: 'Characters with the Dark Magic Talent or any Dark Lore cannot enter this career; the magisters will not allow it and can usually tell. Usually.',
    source: 'NDM'
  },
  {
    name: 'Master Wizard',
    type: 'Advanced',
    mainstats: {
      ws: 10,
      bs: 10,
      s: 0,
      t: 10,
      ag: 15,
      int: 30,
      wp: 35,
      fel: 15
    },
    secondstats: {
      attacks: 0,
      wounds: 4,
      magic: 3
    },
    description: 'A Master Wizard is one who wields magic with surety and finesse. Elf Wizards find this level of spell casting easy to attain, but for a Human, it is a life’s work. By the time they reach this level of mastery, most Wizards begin to exhibit eccentricities and physical changes wrought by close association with magic. Master Wizards usually prefer to spend their time researching or politicking with fellow magisters. However, their Order usually requires them to adventure in the world at large, furthering the cause of their art, and seeking out young folk to apprentice.',
    skills: [
      'Academic Knowledge (Magic)',
      'Academic Knowledge (any two)',
      'Channelling',
      'Charm or Intimidate',
      'Common Knowledge (any two)',
      'Gossip or Ride',
      'Magical Sense',
      'Read/Write',
      'Speak Arcane Language (Magick)',
      'Speak Arcane Language (Daemonic or Arcane Elf)',
      'Speak Language (any three'
    ],
    talents: [
      'Aethyric Attunement or Meditation',
      'Dark Magic or Strong-minded',
      'Fast Hands or Mighty Missile',
      'Lesser Magic (any two)'
    ],
    trappings: [
      'Trade Tools (Apothecary)',
      'Two magic items'
    ],
    entries: [
      'Journeyman Wizard',
      'Master Vigilant'
    ],
    exits: [
      'Astrologer',
      'Explorer',
      'Scholar',
      'Wizard Lord',
      'Master Vigilant'
    ],
    notes: 'If you are Human you must continue to pay dues to your Order for the duration of this career. Most colleges charge Master Wizards a reduced rate of one crown in every twenty. Elves do not belong to the Orders of Magic, and thus owe nothing.',
    source: 'WHFR'
  },
  {
    name: 'Mate',
    type: 'Advanced',
    mainstats: {
      ws: 15,
      bs: 15,
      s: 10,
      t: 15,
      ag: 10,
      int: 10,
      wp: 10,
      fel: 10
    },
    secondstats: {
      attacks: 1,
      wounds: 4,
      magic: 0
    },
    description: 'Mates serve on ships as the second in command, answering directly to the Captain of the vessel. They are responsible for ensuring that the Captain’s orders are carried out, which can be a trying task with even the most professional of crews. Mates have to be stern but fair, earning the respect of their crew or they will swiftly find themselves the butt of many practical jokes and far worse if a mutiny should occur. Mates are always experienced sailors, often with several voyages under their belt and there are few ports they haven’t drank, fought, or caroused in.',
    skills: [
      'Command',
      'Common Knowledge (any two)',
      'Consume Alcohol',
      'Dodge Blow',
      'Gamble',
      'Gossip',
      'Intimidate',
      'Row',
      'Sail',
      'Speak Language (Breton, Kislevian, or Norse)',
      'Swim',
      'Trade (Shipwright)'
    ],
    talents: [
      'Resistance to Disease',
      'Seasoned Traveller',
      'Street Fighting'
    ],
    trappings: [
      'Light Armour (Leather Jack)'
    ],
    entries: [
      'Marine',
      'Seaman',
      'Reaver'
    ],
    exits: [
      'Explorer',
      'Merchant',
      'Navigator',
      'Sea Captain'
    ],
    notes: '',
    source: 'WHFR'
  },
  {
    name: 'Mediator',
    type: 'Basic',
    mainstats: {
      ws: 0,
      bs: 0,
      s: 0,
      t: 0,
      ag: 0,
      int: 10,
      wp: 10,
      fel: 10
    },
    secondstats: {
      attacks: 0,
      wounds: 2,
      magic: 0
    },
    description: 'The peasants of Bretonnia try to live their lives without noble interference. When the nobility get involved, people are beaten or hanged and food is taken, only making matters worse. However, the peasantry are far from living in a cooperative idyll, and disputes do arise between villages. Mediators are the peasants chosen to resolve those disputes. They live in one village and deal with the representatives, normally other Mediators, of villages with which they have a dispute. Mediators do not normally have the authority to make decisions, so they must try for a solution they can sell to their neighbours. Most Mediators are officially herders, as this gives them an excuse to be in odd places if the nobility find them. Whilst the overwhelming majority are men, a few female Mediators do exist.',
    skills: [
      'Animal Care',
      'Charm',
      'Common Knowledge (Bretonnia)',
      'Evaluate',
      'Gossip',
      'Haggle',
      'Intimidate',
      'Perception'
    ],
    talents: [
      'Dealmaker',
      'Public Speaking',
      'Seasoned Traveller',
      'Suave'
    ],
    trappings: [
      'A Wandering Lamb or a Wilful Pig'
    ],
    entries: [
      'Hunter',
      'Man-at-Arms',
      'Herrimault',
      'Peasant',
      'Rogue'
    ],
    exits: [
      'Demagogue',
      'Herrimault',
      'Rogue',
      'Village Elder'
    ],
    notes: 'Only peasants may enter this career.',
    source: 'KotG'
  },
  {
    name: 'Mercenary',
    type: 'Basic',
    mainstats: {
      ws: 10,
      bs: 10,
      s: 5,
      t: 5,
      ag: 5,
      int: 0,
      wp: 5,
      fel: 0
    },
    secondstats: {
      attacks: 1,
      wounds: 2,
      magic: 0
    },
    description: 'War never ends in the Old World and that means there is always need for fighting men. While the Empire does maintain a standing army, its strength is bolstered with Mercenaries. Nobles and rich Merchants also hire such fighters to protect their interests, many having what amounts to private armies. Mercenaries range from wild youths with a taste for adventure to grizzled professional soldiers who’ve seen a dozen battles or more. These sell-swords come from all over, though Tilea is particular famed for its regiments. All Mercenaries dream of untold riches; for most of them, the reality is an early death and an unmarked grave.',
    skills: [
      'Animal Care or Gamble',
      'Common Knowledge (Bretonnia, Kislev, or Tilea)',
      'Dodge Blow',
      'Drive or Ride',
      'Gossip or Haggle',
      'Perception or Search',
      'Secret Language (Battle Tongue)',
      'Speak Language (Tilean) or Swim'
    ],
    talents: [
      'Disarm or Quick Draw',
      'Rapid Reload or Strike Mighty Blow',
      'Sharpshooter or Strike to Stun'
    ],
    trappings: [
      'Crossbow with 10 Bolts',
      'Shield',
      'Medium Armour (Mail Shirt and Leather Jack)',
      'Healing Draught'
    ],
    entries: [
      'Bodyguard',
      'Bounty Hunter',
      'Demagogue',
      'Fieldwarden',
      'Kislevite Kossar',
      'Militiaman',
      'Miner',
      'Norse Berserker',
      'Outrider',
      'Pit Fighter',
      'Soldier',
      'Thug',
      'Watchman',
      'Artillerist',
      'Bondsman',
      'Cadet',
      'Chekist',
      'Chimneysweep',
      'Deepwatcher',
      'Grail Pilgrim',
      'Horse Archer',
      'Marauder',
      'Reaver',
      'Sewer Jack',
      'Skald',
      'Streltsi',
      'Swamp Skimmer',
      'Temple Guardian',
      'Yeoman'
    ],
    exits: [
      'Bodyguard',
      'Bounty Hunter',
      'Outlaw',
      'Sergeant',
      'Sewer Jack',
      'Shieldbreaker',
      'Veteran',
      'Bondsman',
      'Cadet',
      'Gambler',
      'Horse Master',
      'Knight of the Verdant Field',
      'Yeoman'
    ],
    notes: 'During character creation, if you take Common Knowledge (Tilea) and Speak Language (Tilean), your character can be from Tilea at your option.',
    source: 'WHFR'
  },
  {
    name: 'Merchant',
    type: 'Advanced',
    mainstats: {
      ws: 10,
      bs: 10,
      s: 5,
      t: 5,
      ag: 10,
      int: 25,
      wp: 20,
      fel: 20
    },
    secondstats: {
      attacks: 0,
      wounds: 4,
      magic: 0
    },
    description: 'Merchants are speculators who arrange to move large amounts of goods from city to city, seeking the market that they will make the most handsome profit in. They seldom interact with the populace as they deal in bulk, generally selling their goods to Burghers and Tradesmen. Merchant Guilds are extremely influential in the Empire and they are slowly usurping the position once held by Nobles in the Old World. Even the poorest Merchant tends to be very wealthy, indeed, many use their wealth to buy legitimacy, purchasing titles or marrying their children into Noble families.',
    skills: [
      ' Charm',
      'Common Knowledge (any two)',
      'Drive',
      'Evaluate',
      'Gossip',
      'Haggle',
      'Read/Write',
      'Ride',
      'Secret Language (Guild Tongue)',
      'Speak Language (Breton, Estalian, Kislevian, or Norse)',
      'Speak Language (Reikspiel)',
      'Trade (Merchant)'
    ],
    talents: [
      'Dealmaker or Streetwise',
      'Super Numerate'
    ],
    trappings: [
      'Town House',
      'Warehouse',
      '1,000 gc in coin or trade goods'
    ],
    entries: [
      'Artisan',
      'Burgher',
      'Captain',
      'Envoy',
      'Explorer',
      'Farmer',
      'Fisherman',
      'Innkeeper',
      'Mate',
      'Scholar',
      'Steward',
      'Tradesman',
      'Ambassador',
      'Apothecary',
      'Exciseman',
      'Freeholder',
      'Horse Coper',
      'Horse Master',
      'Litigant',
      'Muleskinner',
      'Pamphleteer',
      'Stevedore'
    ],
    exits: [
      'Farmer',
      'Guild Master',
      'Militiaman',
      'Politician',
      'Racketeer',
      'Spy',
      'Slaver'
    ],
    notes: '',
    source: 'WHFR'
  },
  {
    name: 'Messenger',
    type: 'Basic',
    mainstats: {
      ws: 5,
      bs: 5,
      s: 0,
      t: 5,
      ag: 10,
      int: 5,
      wp: 5,
      fel: 0
    },
    secondstats: {
      attacks: 0,
      wounds: 2,
      magic: 0
    },
    description: 'With great distances separating the important cities and castles of the Empire, Messengers are an indispensable means of communication. Nobles, Merchants, and military commanders all make extensive use of Messengers, mounted if possible. These brave riders dare to ride the roads of the Empire alone, trusting in their speed to avoid danger. Roadwardens assist official Messengers as much as possible, but there are long, lonely stretches where no help is available. While they are supposed to be immune from harassment, many a Messenger has met a bloody end after delivering a particularly unpleasant missive.',
    skills: [
      'Animal Care',
      'Common Knowledge (the Empire or the Wasteland) or Gossip',
      'Navigation',
      'Outdoor Survival',
      'Secret Signs (Scout)',
      'Perception',
      'Ride',
      'Speak Language (Reikspiel)',
      'Swim'
    ],
    talents: [
      'Orientation',
      'Seasoned Traveller'
    ],
    trappings: [
      'Light Armour (Leather Jack)',
      'Map Case',
      'Riding Horse with Saddle and Harness or Pony (for Halflings)',
      'Shield'
    ],
    entries: [
      'Militiaman',
      'Roadwarden',
      'Servant',
      'Drover',
      'Muleskinner',
      'Newssheet Vendor'
    ],
    exits: [
      'Cartographer',
      'Coachman',
      'Herald',
      'Kithband Warrior',
      'Outrider',
      'Roadwarden',
      'Scout',
      'Soldier',
      'Cult Attendant',
      'Drover',
      'Exciseman',
      'Forger',
      'Horse Coper',
      'Muleskinner',
      'Newssheet Vendor',
      'Pamphleteer'
    ],
    notes: '',
    source: 'WHFR'
  },
  {
    name: 'Militiaman',
    type: 'Basic',
    mainstats: {
      ws: 10,
      bs: 5,
      s: 5,
      t: 5,
      ag: 10,
      int: 0,
      wp: 0,
      fel: 0
    },
    secondstats: {
      attacks: 0,
      wounds: 2,
      magic: 0
    },
    description: 'Militias are part-time local defence forces, formed largely from the rural peasantry. Members agree to spend a certain amount of time each year – usually seven days – practicing together on common land. Even this small amount of training can be the difference between life and death on the blood-soaked battlefields of the Old World. Militia Captains are either civil leaders or retired military types. Some militias must provide their own equipment, while the local nobility equips others. This means that while some militia units appear for duty in smart uniforms with well-maintained equipment, others have little more than their patchwork clothes and hunting bows.',
    skills: [
      'Animal Care',
      'Dodge Blow',
      'Drive or Swim',
      'Gamble or Gossip',
      'Outdoor Survival',
      'Perception',
      'Search',
      'Trade (any one)'
    ],
    talents: [
      'Specialist Weapon Group (Two-handed) or Rapid Reload',
      'Strike Mighty Blow'
    ],
    trappings: [
      'Halberd or Bow with 10 Arrows',
      'Light Armour (Leather Jack and Leather Skullcap)',
      'Uniform'
    ],
    entries: [
      'Artisan',
      'Bailiff',
      'Burgher',
      'Farmer',
      'Fisherman',
      'Merchant',
      'Peasant',
      'Tradesman',
      'Woodsman',
      'Chimneysweep',
      'Exciseman',
      'Grave Warden',
      'Horned Hunter',
      'Thief'
    ],
    exits: [
      'Artisan',
      'Fieldwarden',
      'Mercenary',
      'Messenger',
      'Outlaw',
      'Sergeant',
      'Thief',
      'Cadet',
      'Knight of the Verdant Field',
      'Sewer Jack',
      'Swampaire',
      'Temple Guardian'
    ],
    notes: '',
    source: 'WHFR'
  },
  {
    name: 'Miner',
    type: 'Basic',
    mainstats: {
      ws: 5,
      bs: 5,
      s: 10,
      t: 5,
      ag: 0,
      int: 5,
      wp: 5,
      fel: 0
    },
    secondstats: {
      attacks: 0,
      wounds: 2,
      magic: 0
    },
    description: 'Mountains surround the Empire. To the east are the World’s Edge Mountains, to the south the Black Mountains, and to the west the Grey Mountains. Dwarfs and Humans have mined these mountains from time immemorial, despite constant attacks from Goblins and other subterranean horrors. Miners brave these conditions in search of iron, silver, gold, gems, and other valuables. Others prefer to prospect on the surface, particularly in the Middle Mountains, which straddle the provinces of Ostland and Hochland. Although these forest-shrouded mountains are fully within the Empire’s borders, they are a haven for Trolls, Beastmen, and other foul creatures. Surviving in such an environment takes skill and toughness.',
    skills: [
      'Animal Care',
      'Concealment or Drive',
      'Evaluate or Outdoor Survival',
      'Navigation',
      'Perception',
      'Scale Sheer Surface',
      'Trade (Miner or Prospector)'
    ],
    talents: [
      'Orientation',
      'Specialist Weapon Group (Two-handed)',
      'Very Resilient or Warrior Born'
    ],
    trappings: [
      'Great Weapon (Two-handed Pick)',
      'Light Armour (Leather Jack)',
      'Pick',
      'Spade',
      'Storm Lantern',
      'Lamp Oil'
    ],
    entries: [
      'Charcoal-Burner',
      'Hunter'
    ],
    exits: [
      'Charcoal-Burner',
      'Engineer',
      'Mercenary',
      'Scout',
      'Shieldbreaker',
      'Smuggler',
      'Chimneysweep'
    ],
    notes: '',
    source: 'WHFR'
  },
  {
    name: 'Minstrel',
    type: 'Advanced',
    mainstats: {
      ws: 10,
      bs: 10,
      s: 0,
      t: 0,
      ag: 15,
      int: 10,
      wp: 5,
      fel: 25
    },
    secondstats: {
      attacks: 0,
      wounds: 4,
      magic: 0
    },
    description: 'Minstrels are wandering musicians who travel the roads of the Old World bringing their songs and entertainment to those who desperately need it. The original and most renowned Minstrels were Elves but now many Humans follow in their footsteps. Minstrels are close to sacred in the Old World. They can walk into some of the most dangerous dens of cutthroats and come out unscathed (as long as they’re willing to provide free entertainment, of course). Occasionally, a Minstrel will accept patronage from a Noble or Merchant and settle down for a time, composing songs at his patron’s request. Eventually, though, the open road calls and the Minstrel moves on again. ',
    skills: [
      'Charm',
      'Common Knowledge (any two)',
      'Gossip',
      'Perception',
      'Performer (Musician)',
      'Performer (Singer)',
      'Read/Write',
      'Speak Language (Breton, Eltharin or Tilean)'
    ],
    talents: [
      'Etiquette',
      'Pubic Speaking'
    ],
    trappings: [
      'Entertainer’s Garb',
      'Musical Instrument (Lute or Mandolin)'
    ],
    entries: [
      'Entertainer',
      'Cantor'
    ],
    exits: [
      'Charlatan',
      'Demagogue',
      'Highwayman',
      'Spy',
      'Student',
      'Cantor'
    ],
    notes: '',
    source: 'WHFR'
  },
  {
    name: 'Monk',
    type: 'Advanced',
    mainstats: {
      ws: 5,
      bs: 0,
      s: 5,
      t: 5,
      ag: 10,
      int: 25,
      wp: 15,
      fel: 15
    },
    secondstats: {
      attacks: 0,
      wounds: 4,
      magic: 0
    },
    description: 'Monks are members of the mendicant orders who seek seclusion to better devote themselves to their faith. Some monks live completely alone as hermits, whereas others congregate with other monks and live in monasteries, which are usually located in remote areas of the Old World. Most religions have their own mendicant orders, although the strictures of Verena and Shallya tend to lend themselves more towards monasticism more than most. Monks spend their lives in study and prayer, debating the finer points of theology and illuminating religious scriptures.',
    skills: [
      'Academic Knowledge (any two)',
      'Academic Knowledge (Theology)',
      'Animal Care',
      'Arcane Language (Magick)',
      'Common Knowledge (any two)',
      'Heal',
      'Perception',
      'Read/Write',
      'Speak Language (any two)',
      'and Speak Language (Classical).'
    ],
    talents: [
      'Linguistics'
    ],
    trappings: [
      'Prayer Book',
      'Religious Symbol',
      'Robes',
      'Writing Kit'
    ],
    entries: [
      'Friar',
      'Initiate',
      'Physician',
      'Scholar',
      'Scribe',
      'Student'
    ],
    exits: [
      'Abbot',
      'Demagogue',
      'Friar',
      'Physician',
      'Priest',
      'Scholar',
      'Steward',
      'Zealot',
      'Cantor'
    ],
    notes: '',
    source: 'ToS'
  },
  {
    name: 'Muleskinner',
    type: 'Basic',
    mainstats: {
      ws: 5,
      bs: 10,
      s: 0,
      t: 5,
      ag: 10,
      int: 10,
      wp: 5,
      fel: 0
    },
    secondstats: {
      attacks: 0,
      wounds: 2,
      magic: 0
    },
    description: 'Muleskinners guide trains of pack animals, normally mules, across the Border Princes, carrying vital supplies from one settlement to another. Vital but cheap supplies might be transported by a single Muleskinner, while more valuable goods merit at least a few men, and possibly mercenary guards as well. Sometimes, the Muleskinners just don’t let on that they are carrying anything valuable and just hope the bandits ignore them. With all their travel, Muleskinners often know the Borderlands better than just about anyone else, and some choose to put that knowledge to use earning a living in other ways. Muleskinners also hold mule skinning contests. The dead mule record is under a minute; the live mule record, held unchallenged by Alberic “Flat Face” Schilp, is five and a half minutes.',
    skills: [
      'Animal Care',
      'Common Knowledge (Border Princes)',
      'Evaluate',
      'Gossip',
      'Haggle',
      'Navigate',
      'Outdoor Survival',
      'Perception',
      'Speak Language (any one)'
    ],
    talents: [
      'Orientation',
      'Seasoned Traveller'
    ],
    trappings: [
      'Light Armour (Leather Jack)',
      'three Mules',
      'Bow'
    ],
    entries: [
      'Burgher',
      'Hunter',
      'Messenger',
      'Peasant'
    ],
    exits: [
      'Animal Trainer',
      'Burgher',
      'Highwayman',
      'Merchant',
      'Messenger',
      'Outlaw',
      'Scout'
    ],
    notes: '',
    source: 'RC'
  },
  {
    name: 'Mystic',
    type: 'Advanced',
    mainstats: {
      ws: 0,
      bs: 0,
      s: 0,
      t: 10,
      ag: 10,
      int: 10,
      wp: 15,
      fel: 15
    },
    secondstats: {
      attacks: 0,
      wounds: 4,
      magic: 0
    },
    description: 'Some Anchorites and Cenobites become so full of wisdom (or full of something, anyway) that they progress to being Mystics. No longer content to seek wisdom by themselves, they insist on telling others of their discoveries, seeking to lead them to enlightenment also. Many leaders of monasteries are Mystics, as most sensible communities drive them out as soon as they realise what they are like. A few Mystics actually discover the secrets of supernatural power. They tout this as proof of the value of their “insights.” ',
    skills: [
      'Academic Knowledge (Theology)',
      'Blather',
      'Charm',
      'Command',
      'Intimidation',
      'Speak Language (any one)',
      'Torture'
    ],
    talents: [
      'Menacing',
      'Public Speaking'
    ],
    trappings: [
      'Filthy Loincloth and Tunic'
    ],
    entries: [
      'Anchorite',
      'Cenobite'
    ],
    exits: [
      'Charlatan',
      'Demagogue',
      'Hedge Wizard',
      'Rogue'
    ],
    notes: '',
    source: 'RC'
  },
  {
    name: 'Navigator',
    type: 'Advanced',
    mainstats: {
      ws: 10,
      bs: 10,
      s: 5,
      t: 5,
      ag: 10,
      int: 25,
      wp: 10,
      fel: 5
    },
    secondstats: {
      attacks: 0,
      wounds: 4,
      magic: 0
    },
    description: 'Navigators have the critically important task of getting a ship where it is supposed to go. Old World Navigators typically use charts to set their course, though they are often also capable of navigating by sun and stars. Navigators know the secrets of wind and tide, which makes them seem somewhat mystical to their sailor brethren and they are often regarded as a breed apart. Navigators are, by necessity, cartographers, charting the course of their voyages so that they may retrace them or that others may follow their route. As there are no compasses in the world, all ships employ a skilled Navigator, as do some overland expeditions.',
    skills: [
      'Academic Knowledge (Astronomy)',
      'Common Knowledge (any two)',
      'Navigation',
      'Perception',
      'Read/Write',
      'Speak Language (Classical)',
      'Swim',
      'Trade (Cartographer)'
    ],
    talents: [
      'Orientation'
    ],
    trappings: [
      '6 Maps and Charts',
      'Trade Tools (Navigator’s Instruments)'
    ],
    entries: [
      'Boatman',
      'Dilettante',
      'Fisherman',
      'Mate',
      'Scribe',
      'Seaman',
      'Astrologer',
      'Cartographer',
      'Reaver',
      'Whaler'
    ],
    exits: [
      'Artisan',
      'Cartographer',
      'Explorer',
      'Scholar',
      'Sea Captain',
      'Astrologer'
    ],
    notes: '',
    source: 'WHFR'
  },
  {
    name: 'Newssheet Vendor',
    type: 'Basic',
    mainstats: {
      ws: 5,
      bs: 5,
      s: 0,
      t: 0,
      ag: 10,
      int: 5,
      wp: 0,
      fel: 10
    },
    secondstats: {
      attacks: 0,
      wounds: 2,
      magic: 0
    },
    description: 'It used to be that scribes had a monopoly on the written word but that changed with the invention of the printing press. Now newssheets have become common in the towns and cities of the Empire. They are usually published once a day and are filled with local news and sensational tales. A big story may merit a special edition. Newssheet vendors walk the streets, calling out the top headlines and trying to outdo each other with their theatrics. There are many newssheet publishers in each city and the competition amongst them is savage. It is not unknown for rival vendors to fight each other in the streets. Ironically, big brawls of this type often become tomorrow’s top news item.',
    skills: [
      'Blather or Sleight of Hand',
      'Charm',
      'Common Knowledge (the Empire)',
      'Gossip',
      'Haggle',
      'Perception',
      'Performer (Storyteller)',
      'Read/Write'
    ],
    talents: [
      'Public Speaking',
      'Street Fighting or Streetwise'
    ],
    trappings: [
      'Backpack',
      '1d10 Newssheets',
      'Scroll Case'
    ],
    entries: [
      'Burgher',
      'Messenger',
      'Peasant',
      'Servant',
      'Student'
    ],
    exits: [
      'Agitator',
      'Demagogue',
      'Entertainer',
      'Messenger',
      'Pamphleteer',
      'Rogue',
      'Scribe',
      'Zealot'
    ],
    notes: 'If you are rolling randomly for your Starting Career, you can substitute Newssheet Vendor for Agitator with your GM’s permission.',
    source: 'SoA'
  },
  {
    name: 'Noble Lord',
    type: 'Advanced',
    mainstats: {
      ws: 25,
      bs: 15,
      s: 10,
      t: 10,
      ag: 10,
      int: 20,
      wp: 20,
      fel: 30
    },
    secondstats: {
      attacks: 1,
      wounds: 6,
      magic: 0
    },
    description: 'Noble Lords are members of the nobility with actual power and responsibility, unlike the many dilettantes who fill the courts of the Old World. Some inherit their positions, whereas others forcefully claw their way to them. All of them tend to be strong-willed, adroit public speakers, and skilled fighters. They must be adept at resolving local disputes, negotiating court politics, and leading troops in the field. Some of the most powerful Noble Lords in the Empire are the Elector Counts who choose from among their number who will be the next Emperor.',
    skills: [
      'Academic Knowledge (History or Strategy/Tactics)',
      'Academic Knowledge (Genealogy/Heraldry)',
      'Charm',
      'Command',
      'Common Knowledge (the mpire)',
      'Evaluate',
      'Gossip',
      'Perception',
      'Read/Write',
      'Ride',
      'Speak Language (Classical)',
      'Speak Language (Reikspiel)'
    ],
    talents: [
      'Master Orator',
      'Public Speaking',
      'Specialist Weapon Group (Fencing)'
    ],
    trappings: [
      'Best Craftsmenship Rapier or Foil',
      'Best Craftsmenship Noble’s Garb',
      '500 gc',
      'Jewellery worth 500 gc',
      'Destrier with Saddle and Harness'
    ],
    entries: [
      'Courtier',
      'Knight',
      'Knight of the Inner Circle',
      'Politician',
      'Sea Captain',
      'Ambassador',
      'Ataman',
      'Border Courtier',
      'Crusader',
      'Grail Knight',
      'Grandmaster',
      'Knight of the Realm',
      'Questing Knight'
    ],
    exits: [
      'Captain',
      'Knight',
      'Scholar',
      'Sea Captain',
      'Admiral',
      'Ambassador',
      'Crusader',
      'Faceless',
      'Knight Panther',
      'Knight of the Blazing Sun'
    ],
    notes: '',
    source: 'WHFR'
  },
  {
    name: 'Noble',
    type: 'Basic',
    mainstats: {
      ws: 10,
      bs: 5,
      s: 0,
      t: 0,
      ag: 5,
      int: 5,
      wp: 5,
      fel: 10
    },
    secondstats: {
      attacks: 0,
      wounds: 2,
      magic: 0
    },
    description: 'The Nobles are the ruling class of the Empire. They wield the power, they control the land, and they make the laws. The most important Noble families are those of Imperial Electors and of course the Emperor himself. There are hundreds of others though, and they all vie for more money and more power. Some seek their fortunes in war, others in business or politics. None would sully themselves by practicing a common trade. The most contemptible Nobles do nothing at all, merely live off their family wealth and attend an endless array of parties, dances, and gala events. The younger children of Noble houses, however, do not have it so easy. Since inheritance goes to the eldest, they must often make their own way in the world, even if it means slumming amongst the lower classes and falling in with adventurers and ne’er-do-wells.',
    skills: [
      'Blather or Command',
      'Common Knowledge (the Empire)',
      'Consume Alcohol or Performer (Musician)',
      'Charm',
      'Gamble or Gossip',
      'Read/Write',
      'Ride',
      'Speak Language (Reikspiel)'
    ],
    talents: [
      'Etiquette',
      'Luck or Public Speaking',
      'Savvy or Specialist Weapon (Fencing)',
      'Schemer or Specialist Weapon (Parrying)'
    ],
    trappings: [
      'Foil',
      'Main Gauche',
      'Noble\'s Garb',
      'Riding Horse with Saddle and Harness',
      '1d10 gc',
      'Jewellery worth 6d10 gc'
    ],
    entries: [
      'Steward',
      'Squire'
    ],
    exits: [
      'Courtier',
      'Dilettante',
      'Pistolier',
      'Politician',
      'Rogue',
      'Squire',
      'Student',
      'Astrologer',
      'Ataman',
      'Border Courtier',
      'Cadet',
      'Gambler',
      'Herrimault',
      'Horse Archer',
      'Horse Master',
      'Knight Errant',
      'Winged Lancer'
    ],
    notes: '',
    source: 'WHFR'
  },
  {
    name: 'Norse Berserker',
    type: 'Basic',
    mainstats: {
      ws: 15,
      bs: 0,
      s: 10,
      t: 10,
      ag: 0,
      int: 0,
      wp: 10,
      fel: 0
    },
    secondstats: {
      attacks: 0,
      wounds: 2,
      magic: 0
    },
    description: 'Norsca is a grim northern land, full of fell beasts such as Ice Trolls and Chaos Spawn, and it breeds tough fighters. The berserkers are a rightly feared warrior cult. Its members go into battle without armour to prove they have no fear. They work themselves into an incredible rage, often biting on their own shields. Their feats fill the sagas and loom large in the stories of those Imperial soldiers that have faced them. Some few berserkers make their way to the Empire because they’ve been exiled or simply have a desire to see more of the world. They rarely stay in one place for long, since no Watchman wants a frothing lunatic disturbing the peace. Berserkers are highly prized Mercenaries, however, due to their rarity and effectiveness. ',
    skills: [
      'Common Knowledge (Norsca)',
      'Consume Alcohol',
      'Intimidate',
      'Performer (Storyteller)',
      'Speak Language (Norse)',
      'Swim'
    ],
    talents: [
      'Frenzy',
      'Menacing',
      'Quick Draw',
      'Specialist Weapon Group (Two-handed)'
    ],
    trappings: [
      'Light Armour (Leather Jerkin)',
      'Bottle og Spirits',
      'Great Weapon or Shield'
    ],
    entries: [
      'None'
    ],
    exits: [
      'Mercenary',
      'Pit Fighter',
      'Seaman',
      'Sergeant',
      'Veteran'
    ],
    notes: 'If this is your Starting Career, you are from Norsca.',
    source: 'WHFR'
  },
  {
    name: 'Outlaw Chief',
    type: 'Advanced',
    mainstats: {
      ws: 20,
      bs: 30,
      s: 10,
      t: 20,
      ag: 10,
      int: 10,
      wp: 10,
      fel: 20
    },
    secondstats: {
      attacks: 2,
      wounds: 6,
      magic: 0
    },
    description: 'Every band of brigands needs a leader. An Outlaw who shows he is both cunning and bold can rise to the level of Outlaw Chief. Commanding a lawless group of dangerous men is no easy task and the perilous forests of the Old World don’t make the job any easier. Outlaw Chiefs get their pick of the loot their band acquires, but they are also held responsible for every failure and their grasp on leadership is tenuous. Outlaw bands are notorious for not allowing any of their members to simply retire, which may make leaving the Chief’s post a difficult task.',
    skills: [
      'Academic Knowledge (Strategy/Tactics)',
      'Command',
      'Common Knowledge (the Empire)',
      'Concealment',
      'Follow Trail',
      'Perception',
      'Ride',
      'Scale Sheer Surface',
      'Secret Language (Battle Tongue)',
      'Secret Language (Thieves’Tongue)',
      'Secret Signs (Scout or Thief)',
      'Silent Move'
    ],
    talents: [
      'Lightning Parry',
      'Mighty Shot',
      'Quick Draw',
      'Rapid Reload',
      'Sure Shot'
    ],
    trappings: [
      'Bow or Crossbow with 10 Arrows or Bolts',
      'Medium Armour (Sleeved Mail Shirt and Leather Jack)',
      'Horse with Saddle and Harness',
      'Band of Outlaws'
    ],
    entries: [
      'Crime Lord',
      'Demagogue',
      'Ghost Strider',
      'Highwayman',
      'Master Thief',
      'Racketeer',
      'Scout',
      'Veteran',
      'Assassin',
      'Badlands Ranger',
      'Captain',
      'Faceless',
      'Slaver',
      'Village Elder',
      'Yeoman'
    ],
    exits: [
      'Assassin',
      'Captain',
      'Crime Lord',
      'Demagogue',
      'Badlands Ranger',
      'Border Courtier',
      'Faceless'
    ],
    notes: '',
    source: 'WHFR'
  },
  {
    name: 'Outlaw',
    type: 'Basic',
    mainstats: {
      ws: 10,
      bs: 10,
      s: 0,
      t: 0,
      ag: 10,
      int: 5,
      wp: 0,
      fel: 0
    },
    secondstats: {
      attacks: 1,
      wounds: 2,
      magic: 0
    },
    description: 'Imperial justice is swift and merciless. It is no wonder then that so many flee the watch and take on the life of the Outlaw. The hills and forests are full of Outlaw bands. It is a precarious existence, as they must deal not only with Roadwardens, Soldiers, and other agents of law, but also the dark denizens of the wilds. While many Outlaws are nothing more than common thieves, robbing coaches and caravans, others claim to champion the peasantry and fight for “justice not law.” As long as the Outlaws confine their attacks to the rich, the Peasants aid them with food, information, and places to hide. This support, and the rough terrain Outlaws use for their bases, makes them difficult for the state to deal with. Local Nobles often resort to the use of Bounty Hunters to end their bandit troubles.',
    skills: [
      'Animal Care or Common Knowledge (the Empire)',
      'Concealment',
      'Dodge Blows',
      'Drive or Ride',
      'Gossip or Secret Signs (Thief)',
      'Perception',
      'Scale Sheer Surface',
      'Set Traps or Swim',
      'Silent Move'
    ],
    talents: [
      'Rover or Streetwise',
      'Sharpshooter or Strike to Stun'
    ],
    trappings: [
      'Bow with 10 Arrows',
      'Light Armour (Leather Jerkin)',
      'Shield'
    ],
    entries: [
      'Agitator',
      'Charlatan',
      'Coachman',
      'Ex-Convict',
      'Hedge Wizard',
      'Innkeeper',
      'Marine',
      'Mercenary',
      'Militiaman',
      'Peasant',
      'Roadwarden',
      'Rogue',
      'Squire',
      'Toll Keeper',
      'Woodsman',
      'Zealot',
      'Anchorite',
      'Carcassonne Shepherd',
      'Cenobite',
      'Drover',
      'Exciseman',
      'Hedgecraft Apprentice',
      'Horned Hunter',
      'Man-at-Arms',
      'Muleskinner',
      'Pilgrim',
      'Steppes Nomad',
      'Swampaire',
      'Thief',
      'Warlock',
      'Witch',
      'Wrecker'
    ],
    exits: [
      'Demagogue',
      'Ex-Convict',
      'Highwayman',
      'Thief',
      'Vagabond',
      'Veteran',
      'Carcassonne Shepherd',
      'Grail Pilgrim',
      'Horse Master',
      'Penitent',
      'Wrecker'
    ],
    notes: '',
    source: 'WHFR'
  },
  {
    name: 'Outrider',
    type: 'Basic',
    mainstats: {
      ws: 5,
      bs: 10,
      s: 0,
      t: 0,
      ag: 10,
      int: 10,
      wp: 5,
      fel: 0
    },
    secondstats: {
      attacks: 0,
      wounds: 2,
      magic: 0
    },
    description: 'Outriders are experienced outdoorsmen who reconnoitre for armies, caravans, and other travelling parties. They are the eyes and ears, constantly on the lookout for ambushes and other hazards. Because they operate in advance of the main party, they must be self-sufficient and level-headed. Outriders must trust their instincts and make their own decisions, because they have no one else to turn to when they are alone in the wild. Most Outriders operate in home area and use their intimate knowledge of the locale to their advantage. A few specialize in trailblazing, riding ahead into unknown and hostile territory. These Outriders earn more money for their services, but their life expectancy is short. ',
    skills: [
      'Animal Care',
      'Follow Trail',
      'Navigation',
      'Outdoor Survival',
      'Perception',
      'Ride',
      'Search',
      'Silent Move'
    ],
    talents: [
      'Coolheaded or Very Strong',
      'Orientation',
      'Specialist Weapon Group (Entangling)'
    ],
    trappings: [
      'Bow or Crossbow with 10 Arrows or BOlts',
      'Net',
      'Whip',
      'Lasso',
      'Light Armour (Leather Jack)',
      'Shield',
      '10 Yards or Rope',
      'Riding Horse with Saddle and Harness'
    ],
    entries: [
      'Kithband Warrior',
      'Messenger',
      'Roadwarden',
      'Soldier',
      'Drover',
      'Man-at-Arms'
    ],
    exits: [
      'Coachman',
      'Highwayman',
      'Mercenary',
      'Carcassonne Shepherd',
      'Drover',
      'Horse Master',
      'Knight of the Verdant Field',
      'Roadwarden',
      'Scout',
      'Winged Lancer'
    ],
    notes: '',
    source: 'WHFR'
  },
  {
    name: 'Pamphleteer',
    type: 'Advanced',
    mainstats: {
      ws: 5,
      bs: 5,
      s: 5,
      t: 10,
      ag: 15,
      int: 25,
      wp: 20,
      fel: 20
    },
    secondstats: {
      attacks: 0,
      wounds: 4,
      magic: 0
    },
    description: 'The printing press is a new invention in the Empire, and as yet its presence has not changed much of society. Its presence is however keenly felt among agitators, demagogues, and street politicians who now have a whole new way to reach their public. Pamphleteers are more than just tradesmen with a paper-press: They are passionate individuals who research, write, sketch and print political or religious works in order to spread their message, then disseminate their materials across whole cities and provinces. Although printing itself is perfectly legal and increasingly respectable, many pamphleteers print material that is neither, and those who wish to stay in business have to be skillful at escaping the attention of the Watch or more powerful enemies.',
    skills: [
      'Academic Knowledge (any one)',
      'Blather',
      'Common Knowledge (Bretonnia, Kislev or Tilea)',
      'Common Knowledge (the Empire)',
      'Concealment',
      'Gossip',
      'Perception',
      'Performer (Storyteller) or Trade (Artist)',
      'Read/Write',
      'Speak Language (any one)',
      'Trade (Calligrapher or Merchant)'
    ],
    talents: [
      'Artistic or Public Speaking',
      ' Streetwise'
    ],
    trappings: [
      'Writing Kit',
      'Printing Press'
    ],
    entries: [
      'Agitator',
      'Artisan',
      'Burgher',
      'Demagogue',
      'Entertainer',
      'Engineer',
      'Messenger',
      'Newssheet Vendor',
      'Scholar',
      'Scribe',
      'Student'
    ],
    exits: [
      'Demagogue',
      'Merchant',
      'Politician',
      'Scholar'
    ],
    notes: '',
    source: 'SoE'
  },
  {
    name: 'Peasant',
    type: 'Basic',
    mainstats: {
      ws: 5,
      bs: 5,
      s: 5,
      t: 10,
      ag: 5,
      int: 0,
      wp: 5,
      fel: 0
    },
    secondstats: {
      attacks: 0,
      wounds: 2,
      magic: 0
    },
    description: 'The peasantry makes up the preponderance of the Empire’s population. While the Nobles rule and the Burghers trade, the Peasants toil. They are farmers, labourers, and herdsman. In times of war, they fight and die for the Empire. Many Peasants seek a better life in the city, only to join the legion of beggars on the verge of starvation. The majority spends their whole lives in the village they were born in, surrounded by hostile country and only occasionally getting news of the outside world. While they are provincial and superstitious, the Peasants are the heart of the Empire.',
    skills: [
      'Animal Care or Charm',
      'Animal Training or Swim',
      'Charm Animal or Trade (Cook)',
      'Concelament',
      'Drive or Trade (Bowyer)',
      'Gamble or Performer (Dancer or Singer)',
      'Outdoor Survival or Trade (Farmer)',
      'Row or Set Trap',
      'Scale Sheer Surface or Silent Move'
    ],
    talents: [
      'Hardy or Rover',
      'Flee! or Specialist Weapon Group (Sling)'
    ],
    trappings: [
      'Sling or Quarterstaff',
      'Leather Flask'
    ],
    entries: [
      'None',
      'Swamp Skimmer'
    ],
    exits: [
      'Charcoal-Burner',
      'Farmer',
      'Fisherman',
      'Militiaman',
      'Outlaw',
      'Politician',
      'Servant',
      'Tradesman',
      'Zealot',
      'Animal Trainer',
      'Badlander',
      'Bonepicker',
      'Carcassonne Shepherd',
      'Chimneysweep',
      'Dung Collector',
      'Foreman',
      'Frogwife',
      'Grail Pilgrim',
      'Grave Warden',
      'Hedgecraft Apprentice',
      'Herrimault',
      'Horse Archer',
      'Lamplighter',
      'Man-at-Arms',
      'Mediator',
      'Muleskinner',
      'Newssheet Vendor',
      'Sewer Jack',
      'Stevedore',
      'Swamp Skimmer',
      'Swampaire',
      'Wall Warden',
      'Winged Lancer',
      'Wrecker'
    ],
    notes: '',
    source: 'WHFR'
  },
  {
    name: 'Penitent',
    type: 'Basic',
    mainstats: {
      ws: 10,
      bs: 0,
      s: 10,
      t: 10,
      ag: 0,
      int: 0,
      wp: 5,
      fel: 0
    },
    secondstats: {
      attacks: 0,
      wounds: 3,
      magic: 0
    },
    description: 'Penitents wander the streets of the Old World, crying out that they are heretics and unworthy while beating themselves, or each other, to purge their wickedness. Groups of penitents practise the Torture Skill on each other, which gives members of this career a particularly good understanding of how it works. As noted above, penitents are particularly common among followers of Sigmar, but they are found among the more committed of the followers of all Gods.',
    skills: [
      'Academic Knowledge (Theology)',
      'Blather',
      'Gossip',
      'Heal',
      'Intimidate',
      'Torture'
    ],
    talents: [
      'Hardy',
      'Strike to Stun',
      'Very Resilient'
    ],
    trappings: [
      'Religious Symbol',
      'Scourge'
    ],
    entries: [
      'Flagellant',
      'Initiate',
      'Outlaw',
      'Student',
      'Zealot'
    ],
    exits: [
      'Cenobite',
      'Charlatan',
      'Flagellant',
      'Initiate',
      'Vagabond'
    ],
    notes: '',
    source: 'ToS'
  },
  {
    name: 'Physician',
    type: 'Advanced',
    mainstats: {
      ws: 0,
      bs: 0,
      s: 10,
      t: 10,
      ag: 15,
      int: 30,
      wp: 20,
      fel: 15
    },
    secondstats: {
      attacks: 0,
      wounds: 4,
      magic: 0
    },
    description: 'Physicians are practitioners of the healing arts who study the mysteries of illness and anatomy. The science of medicine is relatively new and still distrusted by the majority of Old World citizens. Many regard unknown Physicians as either trumped up apothecaries or dangerous quacks until they’ve proven themselves. Skilled Physicians, however, are often well-respected members of their communities. They are capable of dealing with most minor ailments and a number of more straightforward injuries, such as major cuts or crushing wounds. Physicians are often eager to seek out new medicines and learn about more effective treatments.',
    skills: [
      'Academic Knowledge (Science)',
      'Heal',
      'Gossip',
      'Perception',
      'Prepare Poison',
      'Read/Write',
      'Speak Language (Classical)',
      'Trade (Apothecary)'
    ],
    talents: [
      'Resistance to Disease',
      'Strike to Stun',
      'Surgery'
    ],
    trappings: [
      '4 Healing Draughts',
      'Trade Tools (Medical Instruments)'
    ],
    entries: [
      'Barber-Surgeon',
      'Interrogator',
      'Scholar',
      'Student',
      'Apothecary',
      'Embalmer',
      'Hedgewise',
      'Monk'
    ],
    exits: [
      'Astrologer',
      'Friar',
      'Guild Master',
      'Scholar',
      'Spy',
      'Monk'
    ],
    notes: '',
    source: 'WHFR'
  },
  {
    name: 'Pilgrim',
    type: 'Basic',
    mainstats: {
      ws: 5,
      bs: 5,
      s: 5,
      t: 5,
      ag: 5,
      int: 10,
      wp: 10,
      fel: 10
    },
    secondstats: {
      attacks: 0,
      wounds: 4,
      magic: 0
    },
    description: 'The Shrine of Sire Severich of Verena. The Sigmarite Temple of the Holy Three. The Rise of Taal’s Deep. Distant Heiligerburg, the Holy Mount of Shallya. Paths to all these places, and many more, are clogged with the trudging feet of the faithful. No matter how expensive, laborious, or incredibly dangerous the journeys may be, folk from all walks of life can be found forging forward to these holy sites, each with his own reasons for facing the horror of Old World travel. The most popular pilgrimages attract many thousands of penitents every year, and the routes are lined with souvenir sellers, way shrines, elaborate temples, heavy tolls, and desperate bandits keen to make an easy profit from the poorly defended. The few pilgrims who survive the ordeals can forever after wear the unique symbol of their particular pilgrimage, typically a brooch or necklace with a specific design alluding to the patron God of the worship and the journey’s destination.',
    skills: [
      'Academic Knowledge (Theology) or Consume Alcohol',
      'Animal Care',
      'Common Knowledge (any one – as dictated by the route of the pilgrimage)',
      'Haggle',
      'Gossip or Navigation',
      'Outdoor Survival',
      'Perception',
      'Performer (Storyteller)',
      'Speak Language (any one – as dictated by the route of the pilgrimage)'
    ],
    talents: [
      'Seasoned Traveller',
      'Very Resilient'
    ],
    trappings: [
      'Religious Symbol'
    ],
    entries: [
      'None'
    ],
    exits: [
      'Demagogue',
      'Friar',
      'Initiate',
      'Outlaw',
      'Vagabond',
      'Zealot'
    ],
    notes: 'The character must be on a pilgrimage to enter this career.',
    source: 'Tos'
  },
  {
    name: 'Pistolier',
    type: 'Advanced',
    mainstats: {
      ws: 20,
      bs: 20,
      s: 10,
      t: 10,
      ag: 15,
      int: 0,
      wp: 15,
      fel: 15
    },
    secondstats: {
      attacks: 1,
      wounds: 4,
      magic: 0
    },
    description: 'Pistoliers are the elite light cavalry of the Imperial Army. They specialize in wielding firearms, specifically pistols. Pistoliers have only come into their own recently, as gunpowder weapons have been relatively unstable until now in the Old World. Because of the expense of their weapons and the constant upkeep that pistols and warhorses require, Noblemen dominate the ranks of the Pistoliers. Many young Nobles volunteer for the Pistoliers in search of glory or in the hopes of making a name.',
    skills: [
      'Animal Care',
      'Dodge Blow',
      'Evaluate or Gossip',
      'Perception',
      'Ride',
      'Secret Signs (Scout)'
    ],
    talents: [
      'Master Gunner',
      'Quick Draw',
      'Rapid Reload',
      'Sharpshooter',
      'Specialist Weapon Group (Gunpowder)',
      'Mighty Shot',
      'Sure Shot'
    ],
    trappings: [
      'Pair of Pistols with Ammunition and Gunpowder for 20 Shots',
      'Best Craftsmenship Clothing',
      'Light Warhorse'
    ],
    entries: [
      'Engineer',
      'Noble',
      'Cadet'
    ],
    exits: [
      'Courtier',
      'Duellist',
      'Knight',
      'Sergeant',
      'Veteran',
      'Horse Master'
    ],
    notes: '',
    source: 'WHFR'
  },
  {
    name: 'Pit Fighter',
    type: 'Basic',
    mainstats: {
      ws: 15,
      bs: 0,
      s: 0,
      t: 10,
      ag: 10,
      int: 0,
      wp: 10,
      fel: 0
    },
    secondstats: {
      attacks: 0,
      wounds: 2,
      magic: 0
    },
    description: 'It is said that the sport of pit fighting has its origins amongst the Ogres. It is easy enough to believe that a race as dim-witted as the Ogres would contribute fights to the death to the culture of the Old World. In years past most Pit Fighters were criminals or prisoners of war. They’d be thrown in a ring or a pit with a few weapons and only the winner would leave alive. These days there is a class of professional Pit Fighters in addition to the condemned. They seek excitement and glory in the pit, though most fight naught but a brutal death as the crowd howls for their blood. Successful Pit Fighters can become wealthy (from prize money and the rampant gambling that surrounds the sport), allowing slave fighters to buy their freedom.',
    skills: [
      'Dodge Blow',
      'Intimidate'
    ],
    talents: [
      'Disarm or Wrestling',
      'Quick Draw or Strike to Injure',
      'Specialist Weapon Group (Flail)',
      'Specialist Weapon Group (Parrying)',
      'Specialist Weapon Group (Two-handed)',
      'Strike Mighty Blow',
      'Very Strong or Strong-minded'
    ],
    trappings: [
      'Flail or Great Weapon',
      'Knuckle-duster',
      'Shield or Buckler',
      'Medium Armour (Mail Shirt and Leather Jack)'
    ],
    entries: [
      'Norse Berserker',
      'Protagonist',
      'Shieldbreaker',
      'Thug',
      'Bear Tamer'
    ],
    exits: [
      'Bounty Hunter',
      'Mercenary',
      'Protagonist',
      'Troll Slayer',
      'Veteran',
      'Bondsman'
    ],
    notes: '',
    source: 'WHFR'
  },
  {
    name: 'Politician',
    type: 'Advanced',
    mainstats: {
      ws: 5,
      bs: 5,
      s: 5,
      t: 10,
      ag: 0,
      int: 20,
      wp: 10,
      fel: 20
    },
    secondstats: {
      attacks: 0,
      wounds: 4,
      magic: 0
    },
    description: 'While the Nobles are nominally “in charge” of most of the Old World’s countries, it is the Politicians who actually run the villages, towns, and cities of the Empire. They are an often reviled and frequently corruptible lot whose ranks include burgomeisters, mayors, and other civil servants. Some are elected to their positions, while others are appointed. Politicians frequently find themselves between various dangerous factions and have to swiftly become skilled at the fine art of compromise. They are experts at saying exactly what people want to hear, though if they actually follow through on their promises, it’s a minor miracle.',
    skills: [
      'Academic Knowledge (History or Genealogy/Heraldry)',
      'Academic Knowledge (Law)',
      'Blather',
      'Charm',
      'Command',
      'Common Knowledge (the Empire)',
      'Evaluate',
      'Gossip',
      'Haggle',
      'Perception',
      'Performer (Actor)',
      'Read/Write',
      'Speak Language (Reikspiel)'
    ],
    talents: [
      'Dealmaker or Schemer',
      'Etiquette or Streetwise',
      'Master Orator',
      'Public Speaking'
    ],
    trappings: [
      'Best Craftsmenship Hand Weapon',
      'Best Craftsmenship Leather Jack',
      'Pamphlets '
    ],
    entries: [
      'Agitator',
      'Bailiff',
      'Captain',
      'Charlatan',
      'Courtier',
      'Crime Lord',
      'Demagogue',
      'Farmer',
      'Guild Master',
      'Herald',
      'High Priest',
      'Merchant',
      'Noble',
      'Peasant',
      'Prelate',
      'Racketeer',
      'Toll Keeper',
      'Ambassador',
      'Ataman',
      'Cloaked Brother',
      'Cult Attendant',
      'Foreman',
      'Grail Knight',
      'Hag Witch',
      'Knight of the Realm',
      'Litigant',
      'Pamphleteer',
      'Questing Knight',
      'Village Elder',
      'Wise Woman'
    ],
    exits: [
      'Courtier',
      'Crime Lord',
      'Demagogue',
      'Noble Lord',
      'Racketeer',
      'Steward',
      'Border Courtier',
      'Cloaked Brother',
      'Faceless'
    ],
    notes: '',
    source: 'WHFR'
  },
  {
    name: 'Prelate',
    type: 'Advanced',
    mainstats: {
      ws: 10,
      bs: 10,
      s: 10,
      t: 15,
      ag: 15,
      int: 20,
      wp: 30,
      fel: 30
    },
    secondstats: {
      attacks: 0,
      wounds: 6,
      magic: 0
    },
    description: 'Every popular religious cult wields at least some degree of political influence. Priests who represent their temples on town councils can – given enough ambition – attain special titles in the court of the ruling noble, or become administrators of temple-owned lands. A prelate’s skill at delivering sermons and debating legal statutes with equal proficiency makes him highly respected in both civic and religious circles. However, the lure of temporal wealth and power has led many prelates down the path of corruption. Prelates may also be known as vicars, curates or arch lectors, depending upon the cult.',
    skills: [
      'Academic Knowledge (any two)',
      'Academic Knowledge (Theology)',
      'Blather',
      'Charm',
      'Common Knowledge (any two)',
      'Gossip',
      'Heal',
      'Intimidate',
      'Perception',
      'Performer (Storyteller)',
      'Ride or Swim',
      'Secret Language (Guilder)',
      'Speak Arcane Language (Magick)',
      'Speak Language (any two)'
    ],
    talents: [
      'Master Orator',
      'Etiquette',
      'Linguistics',
      'Seasoned Traveller',
      'Schemer',
      'Stout Hearted',
      'Strong Minded'
    ],
    trappings: [
      'Prayer Book',
      'Best Quality Vestments',
      'Relic of Faith'
    ],
    entries: [
      'Friar',
      'Lay Priest',
      'Priest',
      'Warrior Priest'
    ],
    exits: [
      'Demagogue',
      'Friar',
      'Politician',
      'Priest',
      'Warrior Priest'
    ],
    notes: 'Prelates have access to the Skills and Talents of their cult (See Appendix V page 244)',
    source: 'CC'
  },
  {
    name: 'Priest',
    type: 'Advanced',
    mainstats: {
      ws: 10,
      bs: 10,
      s: 5,
      t: 10,
      ag: 5,
      int: 10,
      wp: 20,
      fel: 15
    },
    secondstats: {
      attacks: 0,
      wounds: 4,
      magic: 1
    },
    description: 'Priests are ordained men and women who administer to the needs of the faithful throughout the Old World. Their Gods gift them with the ability to channel small amounts of divine energy, to aid in their works. Many Priests will be assigned to a specific region or church, others are wanderers who go where they feel they can do the most good. The receptions they get are directly linked to their deity. A Priestess of Shallya is likely to be received warmly no matter where she goes, whereas a Priest of Ulric is likely to only be heartily welcomed when a great battle is in the offing.',
    skills: [
      'Academic Knowledge (any one)',
      'Academic Knowledge (Theology)',
      'Channelling',
      'Charm',
      'Common Knowledge (any two)',
      'Gossip',
      'Heal',
      'Magical Sense',
      'Perception',
      'Read/Write',
      'Ride or Swim',
      'Speak Arcane Language (Magick)',
      'Speak Language (any two)'
    ],
    talents: [
      'Armoured Caster or Master Orator',
      'Petty Magic (Divine)',
      'Strike to Injure or Strike to Stun'
    ],
    trappings: [
      'Prayer Book',
      'Writing Kit'
    ],
    entries: [
      'Flagellant',
      'Friar',
      'Initiate',
      'Lay Priest',
      'Prelate',
      'Agent of the Shroud',
      'Ataman',
      'Black Guard',
      'Cantor',
      'Cult Attendant',
      'Knight of the Verdant Field',
      'Monk'
    ],
    exits: [
      'Anointed Priest',
      'Flagellant',
      'Lay Priest',
      'Prelate',
      'Scholar',
      'Steward',
      'Cantor',
      'Catechist',
      'Cult Attendant',
      'Exorcist',
      'Warrior Priest'
    ],
    notes: '',
    source: 'WHFR'
  },
  {
    name: 'Protagonist',
    type: 'Basic',
    mainstats: {
      ws: 10,
      bs: 0,
      s: 10,
      t: 0,
      ag: 10,
      int: 0,
      wp: 10,
      fel: 0
    },
    secondstats: {
      attacks: 1,
      wounds: 2,
      magic: 0
    },
    description: 'Protagonists are professional bullies. Their fighting skills are for hire and they will beat up just about anyone for the right price. In many cases, Protagonists hide the fact that they are hired help, making up ridiculous excuses to start a brawl with the chosen target. The moneyman watches the humiliation of his foe, for enjoyment or profit of both. Roughing up a few locals is comparatively cheap, while more formidable opponents and more grievous injuries are proportionally more expensive. Most leave outright murder to the Assassins, but exceptions to this rule can be purchased. Jobless Protagonists simply pick their own fights and rob their victims. Needless to say, Watchmen keep a close eye on known Protagonists, so they tend to move quickly from place to place.',
    skills: [
      'Dodge Blow',
      'Gossip or Haggle',
      'Intimidate',
      'Ride'
    ],
    talents: [
      'Disarm or Quick Draw',
      'Menacing or Suave',
      'Street Fighting',
      'Strike Mighty Blow',
      'Strike to Injure',
      'Strike to Stun'
    ],
    trappings: [
      'Medium Armour (Mail Shirt and Leather Jack)',
      'Shield',
      'Riding Horse with Saddle and Harness'
    ],
    entries: [
      'Bailiff',
      'Bodyguard',
      'Bounty Hunter',
      'Estalian Diestro',
      'Ex-Convict',
      'Pit Fighter',
      'Chimneysweep',
      'Thief'
    ],
    exits: [
      'Duellist',
      'Ex-Convict',
      'Pit Fighter',
      'Racketeer',
      'Thief',
      'Thug',
      'Chekist'
    ],
    notes: '',
    source: 'WHFR'
  },
  {
    name: 'Questing Knight',
    type: 'Advanced',
    mainstats: {
      ws: 35,
      bs: 0,
      s: 20,
      t: 20,
      ag: 25,
      int: 10,
      wp: 25,
      fel: 25
    },
    secondstats: {
      attacks: 2,
      wounds: 6,
      magic: 0
    },
    description: 'Questing Knights seek the Grail. Following in the footsteps of Louis the Rash, they cross Bretonnia and the rest of the world, seeking the blessing of the Lady of the Lake. Those knights who have succeeded in their quest have met the Lady in a variety of places, so the quest is not a search for a place. Rather, it is an effort to prove oneself worthy of the Grail. Thus, Questing Knights strive to show themselves to be paragons of knighthood, seeking out dangerous situations in which to uphold the honour of Bretonnia and the Lady of the Lake. Questing Knights renounce the use of the lance because it is the weapon of loyal service, and a Questing Knight stands apart from the feudal hierarchy until his quest is complete.',
    skills: [
      'Academic Knowledge (Genealogy/Heraldry)',
      'Academic Knowledge (Religion)',
      'Academic Knowledge (Strategy/Tactics)',
      'Charm',
      'Command',
      'Common Knowledge (any two)',
      'Dodge Blow',
      'Outdoor Survival',
      'Perception',
      'Ride',
      'Secret Language (Battle Tongue)',
      'Speak Language (any two)'
    ],
    talents: [
      'Luck',
      'Seasoned Traveller',
      'Specialist Weapon Group (Two-handed)',
      'Strike Mighty Blow',
      'Strike to Injure',
      'Sturdy',
      'Very Resilient',
      'Very Strong',
      'Virtue of the Quest',
      'Warrior Born'
    ],
    trappings: [
      'Heavy Armour (Full Plate Armour)',
      'Shield',
      'Icon of the Lady of the Lake',
      'Destrier with Saddle and Harness'
    ],
    entries: [
      'Knight of the Realm'
    ],
    exits: [
      'Captain',
      'Courtier',
      'Explorer',
      'Grail Knight',
      'Faceless',
      'Noble Lord',
      'Politician'
    ],
    notes: 'Characters who are not male Bretonnian nobles must pretend to be so in order to become Questing Knights.',
    source: 'KotG'
  },
  {
    name: 'Racketeer',
    type: 'Advanced',
    mainstats: {
      ws: 20,
      bs: 15,
      s: 15,
      t: 10,
      ag: 10,
      int: 0,
      wp: 15,
      fel: 10
    },
    secondstats: {
      attacks: 1,
      wounds: 5,
      magic: 0
    },
    description: 'Racketeers make up the general ranks of most criminal organisations. They are experts at extorting protection money from small businesses, which tends to be their most lucrative operation. Successful Racketeers move into such activities as loan sharking, drug pedalling, prostitution and illegal gambling dens. They are seldom very imaginative, insofar as criminals go, but they are generally ruthless and used to having their own way. Racketeers are sometimes even a part of the local government, which makes rooting them out a very tricky business for law enforcement. In some areas, they are the local law enforcement.',
    skills: [
      'Command',
      'Common Knowledge (the Empire)',
      'Dodge Blow',
      'Evaluate',
      'Gossip',
      'Haggle',
      'Intimidate',
      'Perception',
      'Shadowing'
    ],
    talents: [
      'Menacing',
      'Street Fighting',
      'Streetwise',
      'Strike Mighty Blow',
      'Strike to Stun'
    ],
    trappings: [
      'Knuckle-dusters',
      'Good Quality Clothing',
      'Hat'
    ],
    entries: [
      'Bailiff',
      'Bodyguard',
      'Cat Burglar',
      'Ex-Convict',
      'Fence',
      'Guild Master',
      'Interrogator',
      'Merchant',
      'Politician',
      'Protagonist',
      'Spy',
      'Thug',
      'Chekist',
      'Foreman',
      'Watchman'
    ],
    exits: [
      'Fence',
      'Master Thief',
      'Politician',
      'Outlaw Chief'
    ],
    notes: '',
    source: 'WHFR'
  },
  {
    name: 'Raconteur',
    type: 'Basic',
    mainstats: {
      ws: 5,
      bs: 0,
      s: 0,
      t: 0,
      ag: 5,
      int: 10,
      wp: 10,
      fel: 10
    },
    secondstats: {
      attacks: 0,
      wounds: 2,
      magic: 0
    },
    description: 'Born with a gift of gab and a desire to use it, Raconteurs are natural storytellers who can be found in taverns, inns, and salons anywhere in the Empire. No matter what the occasion – or even if it’s no occasion at all – the Raconteur has a ready story. He travels from place to place, witnessing marvellous things and weaving a thrilling tale about it all. In a society in which most people cannot read, the Raconteur is both a source of news and entertainment, mixing witty repartee and cutting wit into his stories. To gain his news, a Raconteur might find himself travelling with armies and adventuring bands in the hope of seeing (and surviving) something new and exciting, something that will earn him a few rounds of drinks and a healthy audience at the local inn. Not all Raconteurs enjoy the adventurous life, however. Some stay comfortably where they are and make it all up.',
    skills: [
      'Blather',
      'Charm',
      'Common Knowledge (any one)',
      'Gossip',
      'Performer (Comedian)',
      'Performer (Storytelling)',
      'Read/Write',
      'Speak Language (any one)'
    ],
    talents: [
      'Etiquette or Hardy',
      'Public Speaking',
      'Seasoned Traveller'
    ],
    trappings: [
      'Best Clothing',
      'Outrageous Hat'
    ],
    entries: [
      'Agitator',
      'Camp Follower',
      'Entertainer',
      'Rogue',
      'Seaman',
      'Soldier',
      'Student',
      'Vagabond',
      'Dilettante'
    ],
    exits: [
      'Charlatan',
      'Courtier',
      'Demagogue',
      'Entertainer',
      'Herald',
      'Initiate',
      'Rapscallion',
      'Rogue'
    ],
    notes: '',
    source: 'Sigmar\'s Heir'
  },
  {
    name: 'Rapscallion',
    type: 'Advanced',
    mainstats: {
      ws: 10,
      bs: 5,
      s: 5,
      t: 15,
      ag: 25,
      int: 10,
      wp: 10,
      fel: 30
    },
    secondstats: {
      attacks: 1,
      wounds: 4,
      magic: 0
    },
    description: 'Some young men have a certain charm to them. They aren’t necessarily wealthy but they know how to wear clothes well, to make themselves look good in a dashing and slightly unconventional way. They’re clever, quick, and a little dangerous, like a young cat just come into its full growth and proud of its own speed and claws. Rapscallions are not thieves, though they may steal. They are not duellists, though they may fight duels. They are not scholars, though they may be well-read. What they are is young men with style and grace and flair who like to be in the thick of things. A Rapscallion lives for action, for excitement, and his presence tends to energize others. He can be an excellent ally, a dangerous enemy, or merely a short distraction, but one thing is certain—a Rapscallion is always memorable.',
    skills: [
      'Charm',
      'Common Knowledge (any two)',
      'Consume Alcohol',
      'Dodge Blow',
      'Evaluate',
      'Gamble',
      'Gossip',
      'Lip Reading',
      'Perception',
      'Search',
      'Sleight of Hand',
      'Swim'
    ],
    talents: [
      'Ambidextrous or Fleet Footed',
      'Dealmaker or Streetwise',
      'Public Speaking or Sixth Sense',
      'Swashbuckler or Quick Draw'
    ],
    trappings: [
      'Light Armour (Leather Jack)',
      'Dashing clothes',
      'Cloak',
      'Sword or Pistol with Powder and Ammunition for 10 Shots',
      'Dagger'
    ],
    entries: [
      'Dilettante',
      'Gambler',
      'Raconteur',
      'Vagabond'
    ],
    exits: [
      'Charlatan',
      'Duellist',
      'Fence',
      'Highwayman',
      'Spy'
    ],
    notes: '',
    source: 'CC'
  },
  {
    name: 'Rat Catcher',
    type: 'Basic',
    mainstats: {
      ws: 5,
      bs: 10,
      s: 0,
      t: 5,
      ag: 10,
      int: 0,
      wp: 10,
      fel: 0
    },
    secondstats: {
      attacks: 0,
      wounds: 2,
      magic: 0
    },
    description: ' The Rat Catcher is a common sight throughout the Empire. They can be found in villages, towns, and cities, making a living by disposing of the vermin that infest all dwellings in this unsanitary age. Rat Catchers are often travelling folk, although larger towns and cities have permanent contingents of “vermin soldiers.” Rats are their chief enemy, but they can also dispose of moles, mice, and even fouler pests. City-dwelling Rat Catchers spend a great deal of time in the sewers, wading through rivers of filth in search of their prey. It’s a dirty job but it helps keep the plague away.',
    skills: [
      'Animal Care',
      'Animal Trainier',
      'Concealment',
      'Perception',
      'Search',
      'Set Trap',
      'Silent Move'
    ],
    talents: [
      'Resistance to Disease',
      'Resistance to Poison',
      'Specialist Weapon Group (Sling)',
      'Tunnel Rat'
    ],
    trappings: [
      'Sling with Ammunition',
      '4 Animal Traps',
      'Pole with 1d10 dead rats',
      'Small but Vicious Dog'
    ],
    entries: [
      'Grave Robber',
      'Jailer',
      'Runebearer',
      'Tomb Robber',
      'Chimneysweep',
      'Dung Collector',
      'Sewer Jack',
      'Thief'
    ],
    exits: [
      'Animal Trainer',
      'Cat Burglar',
      'Grave Robber',
      'Jailer',
      'Shieldbreaker',
      'Thief',
      'Bonepicker',
      'Deepwatcher',
      'Dung Collector',
      'Grave Warden',
      'Lamplighter',
      'Sewer Jack'
    ],
    notes: '',
    source: 'WHFR'
  },
  {
    name: 'Reaver',
    type: 'Basic',
    mainstats: {
      ws: 10,
      bs: 0,
      s: 10,
      t: 5,
      ag: 10,
      int: 0,
      wp: 0,
      fel: 0
    },
    secondstats: {
      attacks: 1,
      wounds: 2,
      magic: 0
    },
    description: 'The seas of the Old World are full of terrors, some Human, others subhuman. Among the most feared mariners are the Norse Reavers, brutal warriors who plunder the coastlines in search of foodstuffs, gold, and slaves. They are a merciless lot, hardened from their frequent battles with Imperial sailors and the feeble militias that stand against them. Reavers sail the seas to bring booty back to their settlements in their frozen lands. Others sell their souls to the Ruinous Powers, hoping to attract the attention of their uncaring Gods, and gain the power they so crave.',
    skills: [
      'Common Knowledge (Bretonnia',
      'the Empire',
      'Lustria',
      'Norsca',
      'Southlands',
      'Tilea',
      'or the Wasteland)',
      'Consume Alcohol',
      'Dodge Blow',
      'Row',
      'Sail',
      'Scale Sheer Surface',
      'Speak Language (Breton, Estalian, Reikspiel, or Tilean)',
      'Swim'
    ],
    talents: [
      'Hardy or Street Fighting',
      'Menacing or Strike Mighty Blow',
      'Seasoned Traveller'
    ],
    trappings: [
      'Hand Weapon',
      'Medium Armour (Mail Shirt, Leather Jack, Leather Leggings, Leather Skullcap, and Helmet)',
      'Shield',
      'Tattoos'
    ],
    entries: [
      'Bondsman',
      'Marauder',
      'Seaman',
      'Skald',
      'Warleader',
      'Whaler'
    ],
    exits: [
      'Marine',
      'Mate',
      'Mercenary',
      'Navigator',
      'Slaver',
      'Veteran',
      'Warleader',
      'Marauder',
      'Whaler'
    ],
    notes: '',
    source: 'ToC'
  },
  {
    name: 'Riverwarden',
    type: 'Basic',
    mainstats: {
      ws: 0,
      bs: 10,
      s: 10,
      t: 5,
      ag: 10,
      int: 5,
      wp: 5,
      fel: 0
    },
    secondstats: {
      attacks: 0,
      wounds: 2,
      magic: 0
    },
    description: 'A clarion call across the murky waters of the Reik can only mean one thing: Riverwardens. These strong-backed lawmen are commonly perceived by river goers as little better than thugs, as they must harass even innocent vessels when checking for smuggled goods and have learned that politeness and trust do not pay off. The over-worked patrols, which toil through month-long shifts at a time, are responsible for waters too large to be effectively controlled. They spend most of their time concentrating on the worst law-breakers, including pirates, murderers, and barge thieves, and allow most petty misdemeanours to slip by with spot-fines. They are a common sight on the rivers, and their patrols extend as far as Kislev.',
    skills: [
      'Common Knowledge (The Empire or Kislev)',
      'Gossip or Speak Language (Kislevite)',
      'Navigation',
      'Outdoor Survival or Sail',
      'Perception',
      'Row',
      'Search',
      'Secret Signs (Scout)'
    ],
    talents: [
      'Orientation or Very Strong',
      'Specialist Weapon (Gunpowder)'
    ],
    trappings: [
      'Pistol with Powder and Ammunition for 10 Shots',
      'Light Armour (Leather Jack)',
      'Row Boat',
      'Shield',
      'Uniform',
      '10 Yards of Rope'
    ],
    entries: [
      'Boatman',
      'Ferryman',
      'Marine',
      'Roadwarden'
    ],
    exits: [
      'Boatman',
      'Marine',
      'Roadwarden',
      'Seaman',
      'Sergeant',
      'Smuggler',
      'Toll Keeper',
      'Verenean Investigator',
      'Wrecker'
    ],
    notes: 'If you are rolling randomly for your Starting Career, you can substitute Riverwarden for Roadwarden with your GM’s approval.',
    source: 'Companion'
  },
  {
    name: 'Roadwarden',
    type: 'Basic',
    mainstats: {
      ws: 10,
      bs: 10,
      s: 5,
      t: 0,
      ag: 10,
      int: 5,
      wp: 5,
      fel: 0
    },
    secondstats: {
      attacks: 0,
      wounds: 2,
      magic: 0
    },
    description: 'The Empire consists of pockets of civilisation tenuously connected to each other by roads and rivers. Much of the land is heavily forested, and such terrain is home to bandits, Mutants, Beastmen, and Goblins. Merely travelling from one city to another is an adventure, despite the constant vigilance of the Roadwardens. These lawmen patrol the roads and tracks of the Empire, protecting travellers and their goods. Since their numbers are small, they work with local militia and Soldiers to deal with larger threats. Most of the time though, it is up to small groups of Roadwardens to deal with all but the worst hazards. ',
    skills: [
      'Animal Care',
      'Common Knowledge (the Empire) or Gossip',
      'Drive',
      'Follow Trail or Secret Signs (Scout)',
      'Navigation',
      'Outdoor Survival',
      'Perception',
      'Ride',
      'Search'
    ],
    talents: [
      'Quick Draw or Rapid Reload',
      'Specialist Weapon Group (Gunpowdwer)'
    ],
    trappings: [
      'Pistol with 10 Firearm Balls and Gunpowder',
      'Medium Armour (Mail Shirt and Leather Jack)',
      'Shield',
      '10 Yards of Rope',
      'Light Warhorse with Saddle and Harness (or Pony for Halfling)'
    ],
    entries: [
      'Coachman',
      'Ferryman',
      'Messenger',
      'Outrider',
      'Watchman',
      'Drover',
      'Exciseman',
      'Riverwarden'
    ],
    exits: [
      'Highwayman',
      'Messenger',
      'Outlaw',
      'Outrider',
      'Scout',
      'Sergeant',
      'Toll Keeper',
      'Cadet',
      'Horse Master',
      'Riverwarden',
      'Verenean Investigator'
    ],
    notes: '',
    source: 'WHFR'
  },
  {
    name: 'Rogue',
    type: 'Basic',
    mainstats: {
      ws: 5,
      bs: 5,
      s: 0,
      t: 0,
      ag: 10,
      int: 5,
      wp: 5,
      fel: 10
    },
    secondstats: {
      attacks: 0,
      wounds: 2,
      magic: 0
    },
    description: 'If Rogues have a creed, it is this: never do an honest day’s work if you can avoid it. These fast-talking con men use their charm and luck to make their way in the world. Some work as bawds, professional guides to the dens of vice and inequity to be found in any city. Others are professional gamblers or raconteurs. All Rogues favour their wits over their swords, and they always have a ready story on their lips. While Rogues often have one city as home turf, some travel from place to place, profiting from elaborate schemes and then moving on. The most skilled Rogues go undetected. Their lies are so convincing that even those they have swindled never realize it was a con.',
    skills: [
      'Blather',
      'Charm',
      'Evaluate',
      'Gamble or Secret Signs (Thief)',
      'Gossip or Haggle',
      'Perception',
      'Performer (Actor or Storyteller)',
      'Search or Secret Language (Thieves\' Tongue)',
      'Speak Language (Reikspiel)'
    ],
    talents: [
      'Flee! or Streetwise',
      'Luck or Sixth Sense',
      'Public Speaking'
    ],
    trappings: [
      'One set of Best Craftsmenship Clothing or Dice or Deck of Cards',
      '1d10 gc'
    ],
    entries: [
      'Agitator',
      'Assassin',
      'Entertainer',
      'Envoy',
      'Estalian Diestro',
      'Noble',
      'Seaman',
      'Thief',
      'Valet',
      'Duellist',
      'Gambler',
      'Horse Coper',
      'Mediator',
      'Mystic',
      'Newssheet Vendor',
      'Raconteur',
      'Skald',
      'Strigany Mystic'
    ],
    exits: [
      'Charlatan',
      'Demagogue',
      'Entertainer',
      'Ex-Convict',
      'Outlaw',
      'Servant',
      'Thief',
      'Chimneysweep',
      'Gambler',
      'Herrimault',
      'Mediator',
      'Raconteur'
    ],
    notes: '',
    source: 'WHFR'
  },
  {
    name: 'Runebearer',
    type: 'Basic',
    mainstats: {
      ws: 10,
      bs: 0,
      s: 5,
      t: 5,
      ag: 10,
      int: 5,
      wp: 5,
      fel: 0
    },
    secondstats: {
      attacks: 0,
      wounds: 2,
      magic: 0
    },
    description: 'The Undgrin Ankor, a network of elaborate tunnels that once ran the length of the World’s Edge Mountains, connects the Dwarfholds east of the Empire. Communication between holds is carried out by means of Runebearers – specially trained young Dwarfs who risk life and limb to carry messages (written in the runic script of the Dwarfs) from one hold to another. Over recent centuries, as more Dwarfholds have fallen to the Goblinoids and more tunnels have become ruined, the Runebearers’ lot has become increasingly difcult. Tey are forced to take more circuitous routes, and even these are fraught with danger as the enemies discover the routes. Often, Runebearers must leave the tunnels altogether and cross mountains and valleys on the surface. Runebearers who specialize in long distances are sometimes used to carry messages between the Dwarf communities of the Empire and those of mountains.',
    skills: [
      'Dodge Blow',
      'Navigator',
      'Outdoor Survival',
      'Secret Signs (Scout)',
      'Perception',
      'Swim'
    ],
    talents: [
      'Flee!',
      'Fleet Footed or Sixth Sense',
      'Orientation',
      'Rapid Reload',
      'Very Resilient or Very Strong'
    ],
    trappings: [
      'Crossbow and 10 Bolts',
      'Light Armour (Leather Jerkin)',
      'Healing Draught',
      'Lucky Charm'
    ],
    entries: [
      'Shieldbreaker',
      'Apprentice Runesmith'
    ],
    exits: [
      'Apprentice Runesmith',
      'Rat Catcher',
      'Scout',
      'Sewer Jack',
      'Shieldbreaker',
      'Tomb Robber',
      'Veteran'
    ],
    notes: 'Only Dwarfs can enter this career.',
    source: 'WHFR'
  },
  {
    name: 'Runelord',
    type: 'Advanced',
    mainstats: {
      ws: 20,
      bs: 15,
      s: 20,
      t: 15,
      ag: 15,
      int: 30,
      wp: 40,
      fel: 15
    },
    secondstats: {
      attacks: 1,
      wounds: 6,
      magic: 4
    },
    description: 'The Runelords are the greatest of the Runesmiths. A Runelord candidate may only be promoted with the death of an existing Runelord, so this position is highly coveted and contested. Among the Dwarfs, Runelords are equal to kings, and so they move through Dwarf society as some of its most esteemed members. A few Runelords withdraw from the world, sequestering themselves away to learn the deeper secrets of the Master Runes and perhaps create a few of their own, further diminishing their numbers as their names become legend.',
    skills: [
      'Academic Knowledge (any four)',
      'Charm',
      'Command',
      'Common Knowledge (any three)',
      'Dodge Blow',
      'Evaluate',
      'Gossip',
      'Intimidate',
      'Perception',
      'Read/Write',
      'Runecraft',
      'Speak Arcane Language (Arcane Dwarf)',
      'Speak Language (any three)',
      'Trade (any two)'
    ],
    talents: [
      'Master Rune (any two)',
      'Rune (any ten)',
      'Specialist Weapon Group (any one)',
      'Strike to Injure or Strike to Stun'
    ],
    trappings: [
      'Three runic items'
    ],
    entries: [
      'Journeyman Runesmith',
      'Master Runesmith'
    ],
    exits: [
      'Captain',
      'Guild Master'
    ],
    notes: 'Only Dwarfs can enter this career.',
    source: 'Realms of Sorcery'
  },
  {
    name: 'Scholar',
    type: 'Advanced',
    mainstats: {
      ws: 5,
      bs: 5,
      s: 5,
      t: 5,
      ag: 10,
      int: 30,
      wp: 15,
      fel: 15
    },
    secondstats: {
      attacks: 0,
      wounds: 4,
      magic: 0
    },
    description: ' Scholars are academicians who have dedicated their lives to the pursuit of knowledge. Scholars include sages who delve into philosophy and scientific theory, monks who specialize in religious lore, and tutors who strive to educate the children of wealthy Merchants and Nobles. Some Scholars are driven to pursue esoteric or forbidden knowledge. Such a path requires great mental fortitude and a willingness to risk discovery by Witch Hunters and other Zealots. Those that actively study and pursue the law, such as clerks and lawyers, are considered to be a specialized form of Scholar in the Old World.',
    skills: [
      'Academic Knowledge (any three)',
      'Common Knowledge (any three)',
      'Evaluate or Trade (Cartographer)',
      'Perception',
      'Read/Write',
      'Speak Language (any three)',
      'Speak Language (Classical)'
    ],
    talents: [
      'Linguistics '
    ],
    trappings: [
      'Writing Kit'
    ],
    entries: [
      'Anointed Priest',
      'Apprentice Wizard',
      'Cartographer',
      'Friar',
      'High Priest',
      'Journeyman Wizard',
      'Master Wizard',
      'Navigator',
      'Noble Lord',
      'Physician',
      'Priest',
      'Scribe',
      'Sea Captain',
      'Student',
      'Abbot',
      'Agent of the Shroud',
      'Apothecary',
      'Apprentice Runesmith',
      'Astrologer',
      'Catechist',
      'Embalmer',
      'Exorcist',
      'Forger',
      'Hedgemaster',
      'Journeyman Runesmith',
      'Litigant',
      'Master Runesmith',
      'Monk',
      'Pamphleteer',
      'Verenean Investigator'
    ],
    exits: [
      'Apprentice Wizard',
      'Explorer',
      'Friar',
      'Litigant',
      'Merchant',
      'Physician',
      'Steward',
      'Abbot',
      'Agent of the Shroud',
      'Astrologer',
      'Catechist',
      'Monk',
      'Pamphleteer',
      'Verenean Investigator'
    ],
    notes: '',
    source: 'WHFR'
  },
  {
    name: 'Scourge of God',
    type: 'Advanced',
    mainstats: {
      ws: 25,
      bs: 0,
      s: 25,
      t: 25,
      ag: 10,
      int: 0,
      wp: 30,
      fel: 20
    },
    secondstats: {
      attacks: 2,
      wounds: 8,
      magic: 0
    },
    description: 'Those who serve their Gods as flagellants sometimes survive throwing themselves into danger to smite the forces of Chaos and darkness. Those who survive long enough become scourges of God, mighty warriors for their deity, blessed with a degree of divine protection. Scourges of God are often highly charismatic, and gather other fanatics around them. In times of war, they are highly praised by the cult hierarchy, but when peace comes the priests prefer to move them along as quickly as possible, lest they find too many “enemies of God” within the towns of cities. Most scourges of God die bravely in battle, but some do move on, often to other ways of discovering and punishing the corrupt. Scourges of God almost always substitute the name of their God when describing themselves: scourge of Sigmar, scourge of Ulric, and so on.',
    skills: [
      'Academic Knowledge (Theology)',
      'Charm',
      'Heal',
      'Intimidate'
    ],
    talents: [
      'Luck',
      'Menacing',
      'Public Speaking',
      'Resistance to Chaos',
      'Sixth Sense',
      'Very Resilient',
      'Very Strong'
    ],
    trappings: [
      'Flail or Great Weapon',
      'Religious Symbol',
      'Religious Relic',
      'Remains of a Heretic'
    ],
    entries: [
      'Flagellant'
    ],
    exits: [
      'Champion',
      'Initiate',
      'Interrogator',
      'Witch Hunter'
    ],
    notes: 'You may enter this career even if the insanity you had as a Flagellant has been cured.',
    source: 'ToS'
  },
  {
    name: 'Scout',
    type: 'Advanced',
    mainstats: {
      ws: 20,
      bs: 20,
      s: 10,
      t: 10,
      ag: 15,
      int: 20,
      wp: 15,
      fel: 0
    },
    secondstats: {
      attacks: 1,
      wounds: 6,
      magic: 0
    },
    description: 'Scouts are rare individuals who are more at home in the wild than in the teeming cities of the Old World. They roam through the wilderness, following trails that few other eyes can discern, while keeping an eye out for dangerous beasts and unnatural occurrences. Scouts are often more comfortable with animals than other people. They frequently hire their expertise out to armies, Merchants, and travellers who need to go far off the known roads. They usually roam ahead of their clients, seeking out ambushes and other troubles that may beset a large group on the move.',
    skills: [
      'Animal Care',
      'Common Knowledge (any two)',
      'Concealment',
      'Dodge Blow',
      'Follow Trail',
      'Navigation',
      'Perception',
      'Ride',
      'Secret Language (Ranger Tongue)',
      'Secret Signs (Scout)',
      'Silent Move',
      'Speak Language (any two)'
    ],
    talents: [
      'Charm Animal',
      'Mighty Shot or Sure Shot',
      'Orientation',
      'Rapid Reload',
      'Specialist Weapon (Crossbow or Longbow)'
    ],
    trappings: [
      'Medium Armour (Mail Shirt and Leather Jack)',
      'Shield',
      ' 10 Yards of Rope',
      'Horse with Saddle and Harness'
    ],
    entries: [
      'Bounty Hunter',
      'Champion',
      'Charcoal-Burner',
      'Coachman',
      'Fieldwarden',
      'Hunter',
      'Kithband Warrior',
      'Messenger',
      'Miner',
      'Outrider',
      'Roadwarden',
      'Runebearer',
      'Vagabond',
      'Woodsman',
      'Carcassonne Shepherd',
      'Cloaked Brother',
      'Drover',
      'Hedgewise',
      'Herrimault',
      'Horned Hunter',
      'Horse Archer',
      'Ice Maiden',
      'Knight of the Verdant Field',
      'Muleskinner',
      'Steppes Nomad',
      'Winged Lancer',
      'Yeoman'
    ],
    exits: [
      'Explorer',
      'Outlaw Chief',
      'Sergeant',
      'Vampire Hunter',
      'Ghost Strider',
      'Badlands Ranger',
      'Cartographer',
      'Cloaked Brother',
      'Horse Master'
    ],
    notes: '',
    source: 'WHFR'
  },
  {
    name: 'Scribe',
    type: 'Basic',
    mainstats: {
      ws: 0,
      bs: 0,
      s: 0,
      t: 0,
      ag: 10,
      int: 10,
      wp: 10,
      fel: 5
    },
    secondstats: {
      attacks: 0,
      wounds: 2,
      magic: 0
    },
    description: 'Since most citizens of the Empire are illiterate, Scribes are very much in demand. Virtually every government, civil, military, or religious institution requires a large number of Scribes for record keeping. There are also public Scribes, who make a living writing and reading letters for the common folk. Scribes are well educated and many go on to become Scholars or lawyers. A few tire of reading about the adventures of others and resolve to have some of their own. With their extensive knowledge of other languages, they make excellent translators for foreign expeditions.',
    skills: [
      'Academic Knowledge (any one)',
      'Common Knowledge (the Empire) or Gossip',
      'Perception',
      'Read(Write',
      'Secret Language (Guild Tongue)',
      'Speak Language (Breton)',
      'Speak Language (Classical)',
      'Speak Language (Reikspiel or Tilean)',
      'Trade (Calligrapher)'
    ],
    talents: [
      'Linguistics'
    ],
    trappings: [
      'Knife',
      'A Pair of Candles',
      'Wax',
      '5 matches',
      'Illuminated Book',
      'Writing Kit'
    ],
    entries: [
      'Apprentice Wizard',
      'Cartographer',
      'Initiate',
      'Apprentice Runesmith',
      'Forger',
      'Hedgecraft Apprentice',
      'Newssheet Vendor',
      'Warlock'
    ],
    exits: [
      'Apprentice Runesmith',
      'Agitator',
      'Apprentice Wizard',
      'Initiate',
      'Navigator',
      'Scholar',
      'Cartographer',
      'Catechist',
      'Exciseman',
      'Horned Hunter',
      'Litigant',
      'Monk',
      'Pamphleteer'
    ],
    notes: '',
    source: 'WHFR'
  },
  {
    name: 'Sea Captain',
    type: 'Advanced',
    mainstats: {
      ws: 25,
      bs: 20,
      s: 15,
      t: 20,
      ag: 20,
      int: 20,
      wp: 25,
      fel: 30
    },
    secondstats: {
      attacks: 2,
      wounds: 6,
      magic: 0
    },
    description: 'Sea Captains roam the oceans of the Old World seeking profit and adventure over the next horizon. Strictly honourable Sea Captains are far-travelling traders who only sail in search of the most profitable markets for their goods. The most dangerous are bloodthirsty pirates, attacking other ships for plunder and leaving no survivors. Most Sea Captains fall somewhere in between. On a sea-going vessel a Captain’s word is law. Sailors, however, are a fractious lot; a Sea Captain must be clever, strong-willed and a bit ruthless to stay in command. The most famous Sea Captains come from Marienburg, Tilea, and the Elven island of Ulthuan.',
    skills: [
      'Academic Knowledge (Strategy/Tactics)',
      'Animal Training',
      'Command',
      'Common Knowledge (any three)',
      'Dodge Blow',
      'Perception',
      'Sail',
      'Speak Language (any three)',
      'Swim',
      'Trade (Cartographer or Shipwright)'
    ],
    talents: [
      'Disarm',
      'Lightning Parry or Swashbuckler',
      'Seasoned Traveller',
      'Specialist Weapon Group (Fencing)',
      'Strike Mighty Blow'
    ],
    trappings: [
      'Rapier',
      'Light Armour (Leather Jack)',
      'Telescope',
      'Ship'
    ],
    entries: [
      'Explorer',
      'Mate',
      'Navigator',
      'Noble Lord'
    ],
    exits: [
      'Explorer',
      'Noble Lord',
      'Scholar',
      'Spy',
      'Admiral'
    ],
    notes: '',
    source: 'WHFR'
  },
  {
    name: 'Seaman',
    type: 'Basic',
    mainstats: {
      ws: 10,
      bs: 5,
      s: 10,
      t: 0,
      ag: 10,
      int: 0,
      wp: 0,
      fel: 0
    },
    secondstats: {
      attacks: 1,
      wounds: 2,
      magic: 0
    },
    description: 'Most Imperial seamen come from the province of Nordland, which has a long stretch of coast on the Sea of Claws. The Greatships, Wolfships, and Wargalleys of the Imperial Fleet patrol these waters, protecting the Empire from Norse longships, Bretonnian buccaneers, and the dreaded fleets of Chaos. Hardened Seaman crew these ships, while their compatriots sail merchantmen, pirate vessels, and other privately owned craft. Elven sailors can be found on the Sea of Claws as well, particularly those engaged by their great Merchant Houses. The activity of the region revolves around Marienburg, the greatest port in the Old World. This city and its surrounding area (known as the Wasteland) used to be the Imperial province of Westerland but it bought its independence years ago. While Marienburg itself is neutral territory, the Sea of Claws is the site of daily clashes. On blood-soaked decks, Seamen earn their rum ration and their booty.',
    skills: [
      'Common Knowledge (Bretonnia',
      'Norsca',
      'Tilea or the Wasteland)',
      'Consume Alcohol or Perception',
      'Dodge Blow',
      'Row',
      'Sail',
      'Scale Sheer Surface',
      'Speak Language (Breton, Norse or Tilean)',
      'Swim'
    ],
    talents: [
      'Hardy or Street Fighting',
      'Seasoned Traveller',
      'Strike Mighty Blow or Swashbuckler'
    ],
    trappings: [
      'Leather Jerkin',
      'Bottle of Poor Craftsmenship Spirits'
    ],
    entries: [
      'Boatman',
      'Envoy',
      'Ferryman',
      'Fisherman',
      'Norse Berserker',
      'Smuggler',
      'Riverwarden',
      'Slaver'
    ],
    exits: [
      'Marine',
      'Mate',
      'Navigator',
      'Rogue',
      'Smuggler',
      'Raconteur',
      'Reaver',
      'Whaler',
      'Wrecker'
    ],
    notes: 'During character creation, if you take Common Knowledge (the Wasteland), your character can be from the great port of Marienburg at your option.',
    source: 'WHFR'
  },
  {
    name: 'Seer',
    type: 'Basic',
    mainstats: {
      ws: 5,
      bs: 0,
      s: 5,
      t: 0,
      ag: 5,
      int: 10,
      wp: 5,
      fel: 10
    },
    secondstats: {
      attacks: 0,
      wounds: 2,
      magic: 0
    },
    description: 'Seers are self-appointed authorities on all matters involving the spiritual world. They can be found in marketplaces of any town, proclaiming their latest revelation to anyone who will listen. Since Seers operate outside the bounds of sanctioned religious laws, and purport to understand the will of the Gods, they are easy targets for persecutions by Witch Hunters, who don’t draw a line of distinction between the authentic seers and the charlatans. In Norsca, however, Seers are valued members of a Jarl’s entourage, reading the signs and portents in the entrails of their sacrifice or translating the flickers of fire to divine some glimpse of future events.',
    skills: [
      'Blather or Speak Arcane Language (Daemonic or Magick)',
      'Channelling or Performer (Palm Reader)',
      'Charm Animal or Public Speaking',
      'Magical Sense or Perception'
    ],
    talents: [
      'Hedge Magic or Keen Senses',
      'Luck or Petty Magic (Hedge)',
      'Public Speaking'
    ],
    trappings: [
      'Instruments of Divination (dice',
      'cards',
      'a chicken',
      'etc.)'
    ],
    entries: [
      'Hedge Wizard',
      'Skald',
      'Strigany Mystic'
    ],
    exits: [
      'Agitator',
      'Charlatan',
      'Vagabond',
      'Witch'
    ],
    notes: '',
    source: 'ToC'
  },
  {
    name: 'Sergeant',
    type: 'Advanced',
    mainstats: {
      ws: 20,
      bs: 15,
      s: 10,
      t: 10,
      ag: 10,
      int: 10,
      wp: 10,
      fel: 20
    },
    secondstats: {
      attacks: 1,
      wounds: 4,
      magic: 0
    },
    description: 'Sergeants are professional warriors who’ve managed to impress either a Captain or a Noble with their ability to command men in battle. They lead small units of Soldiers, Militiamen, Mercenaries and Roadwardens, ensuring that orders are carried out to the letter. Some lead by setting a sterling example, others by terrifying their troops into quick obedience. Those who make their troopers lives a priority tend to be the most popular. The best Sergeants earn the respect of their Soldiers with their own blood and courage. They are often called upon to lead their men into danger and they swiftly become experts at assessing the capabilities of others.',
    skills: [
      'Academic Knowledge (Strategy/Tactics)',
      'Command',
      'Common Knowledge (any two)',
      'Dodge Blow',
      'Gossip',
      'Intimidate',
      'Perception',
      'Ride or Swim',
      'Secret Language (Battle Tongue)',
      'Speak Language (Tilean)'
    ],
    talents: [
      'Menacing or Seasoned Traveller',
      'Street Fighting or Wrestling',
      'Strike Mighty Blow',
      'Strike to Stun'
    ],
    trappings: [
      'Medium Armour (Full Mail Armour)',
      'Shield'
    ],
    entries: [
      'Assassin',
      'Champion',
      'Duellist',
      'Highwayman',
      'Judicial Champion',
      'Kislevite Kossar',
      'Marine',
      'Mercenary',
      'Militiaman',
      'Norse Berserker',
      'Pistolier',
      'Roadwarden',
      'Scout',
      'Shieldbreaker',
      'Soldier',
      'Squire',
      'Targeteer',
      'Veteran',
      'Watchman',
      'Battle Pilgrim',
      'Cadet',
      'Chekist',
      'Deepwatcher',
      'Horse Master',
      'Ice Maiden',
      'Riverwarden',
      'Sewer Jack',
      'Streltsi',
      'Yeoman'
    ],
    exits: [
      'Captain',
      'Duellist',
      'Judicial Champion',
      'Knight',
      'Artillerist',
      'Black Guard',
      'Border Courtier',
      'Crusader',
      'Knight Panther',
      'Knight of the Blazing Sun'
    ],
    notes: '',
    source: 'WHFR'
  },
  {
    name: 'Servant',
    type: 'Basic',
    mainstats: {
      ws: 5,
      bs: 0,
      s: 5,
      t: 0,
      ag: 10,
      int: 5,
      wp: 10,
      fel: 5
    },
    secondstats: {
      attacks: 0,
      wounds: 2,
      magic: 0
    },
    description: 'There are few lower on the social ladder than Servants. While their work is necessary, they are usually despised by their social superiors. For the scullion, the stable boy, and the serving wench, escape from their hard lives often seems impossible. These unfortunates must perform an unending number of menial tasks for their employers, be they Nobles, Guild Masters, or Innkeepers. It is possible for a Servant to work up to a better position, but the path is difficult. No one wants to listen to the lad that was cleaning the privy last week. Thus many Servants leave their masters behind and become adventurers instead.',
    skills: [
      'Animal Care or Trade (Cook)',
      'Blather',
      'Dodge Blow',
      'Drive or Search',
      'Evaluate or Haggle',
      'Gossip',
      'Perception',
      'Read/Write or Sleight of Hand'
    ],
    talents: [
      'Acute Hearing or Flee!',
      'Etiquette or Hardy',
      'Lightning Reflexes or Very Resilient'
    ],
    trappings: [
      'One Set of Good Craftsmenship Clothing',
      'Pewter Tankard',
      'Tinderbox',
      'Storm Lantern',
      'Lamp Oil'
    ],
    entries: [
      'Camp Follower',
      'Peasant',
      'Rogue',
      'Cenobite',
      'Frogwife',
      'Lamplighter',
      'Thief'
    ],
    exits: [
      'Agitator',
      'Burgher',
      'Camp Follower',
      'Innkeeper',
      'Messenger',
      'Spy',
      'Thief',
      'Valet',
      'Lamplighter',
      'Newssheet Vendor'
    ],
    notes: '',
    source: 'WHFR'
  },
  {
    name: 'Sewer Jack',
    type: 'Basic',
    mainstats: {
      ws: 10,
      bs: 5,
      s: 0,
      t: 10,
      ag: 5,
      int: 0,
      wp: 10,
      fel: 0
    },
    secondstats: {
      attacks: 0,
      wounds: 2,
      magic: 0
    },
    description: 'The Sewer Jacks are a specialised force, under the command of the City Watch, whose purpose is to keep the sewer system and the Undercity (see AoM p. 28) secure. A certain amount of courage is required to police the fetid tunnels beneath Middenheim, but the Sewer Jacks are less choosy in their recruiting policy than the other armed forces – partly because there is nearly always a shortage of volunteers for this dangerous and unpleasant duty. A typical patrol of Sewer Jacks is 6-8 strong.',
    skills: [
      'Concealment',
      'Dodge Blow',
      'Follow Trail or Secret Signs (Scout)',
      'Perception',
      'Scale Sheer Surface',
      'Search or Swim',
      'Silent Move'
    ],
    talents: [
      'Quick Draw or Resistance to Disease',
      'Tunnel Rat'
    ],
    trappings: [
      'Crossbow with 10 bolts',
      'Lantern',
      'Light Armour (Leather Jack)'
    ],
    entries: [
      'Jailer',
      'Militiaman',
      'Peasant',
      'Rat Catcher',
      'Shieldbreaker',
      'Watchman',
      'Dung Collector',
      'Mercenary',
      'Runebearer'
    ],
    exits: [
      'Mercenary',
      'Rat Catcher',
      'Sergeant',
      'Shieldbreaker',
      'Smuggler',
      'Veteran',
      'Watchman'
    ],
    notes: 'If you are rolling randomly for your Starting Career, you can substitute Sewer Jack for Watchman with your GM’s permission.',
    source: 'AoM'
  },
  {
    name: 'Shieldbreaker',
    type: 'Basic',
    mainstats: {
      ws: 10,
      bs: 0,
      s: 5,
      t: 5,
      ag: 10,
      int: 0,
      wp: 5,
      fel: 0
    },
    secondstats: {
      attacks: 1,
      wounds: 2,
      magic: 0
    },
    description: 'Chaos and greenskin incursions have overrun many Dwarfholds in the World’s Edge Mountains over the centuries. To protect their remaining fortress cities, the Dwarfs have trained elite Soldiers who specialize in fighting deep underground. They are the Shieldbreakers, doughty warriors that seek to stem the tide of evil and safeguard their people. While most Shieldbreakers are Dwarfs, members of other races join their ranks from time to time in exchange for Dwarfen gold. Young Dwarfs from the Empire often become Shieldbreakers to prove their mettle and show solidarity with their mountain kin.',
    skills: [
      'Dodge Blow',
      'Navigation',
      'Perception',
      'Scale Sheer Surface',
      'Shadowing'
    ],
    talents: [
      'Acute Hearing or Coolheaded',
      'Orientation',
      'Strike Mighty Blow',
      'Strike to Injure',
      'Strike to Stun'
    ],
    trappings: [
      'Crossbow with 10 bolts',
      'Medium Armour (Mail Coat, Leather Jack and Leather Leggings)',
      'Shield',
      'Grappling Hook',
      '10 Yards of Rope',
      'Water Skin'
    ],
    entries: [
      'Kislevite Kossar',
      'Mercenary',
      'Miner',
      'Rat Catcher',
      'Runebearer',
      'Smuggler',
      'Tomb Robber',
      'Apprentice Runesmith',
      'Journeyman Runesmith',
      'Sewer Jack'
    ],
    exits: [
      'Pit Fighter',
      'Runebearer',
      'Sergeant',
      'Sewer Jack',
      'Smuggler',
      'Tomb Robber',
      'Veteran',
      'Deepwatcher'
    ],
    notes: 'Only Dwarfs can have Shieldbreaker as a Starting Career.',
    source: 'WHFR'
  },
  {
    name: 'Skald',
    type: 'Basic',
    mainstats: {
      ws: 5,
      bs: 0,
      s: 5,
      t: 0,
      ag: 5,
      int: 10,
      wp: 5,
      fel: 10
    },
    secondstats: {
      attacks: 0,
      wounds: 2,
      magic: 0
    },
    description: 'Skalds are the keepers of lore, the chroniclers of the histories of the Norse. Part entertainer, part warrior, these individuals are held in high esteem for their wisdom and knowledge. All Kings keep Skalds in their retinues, as do most Jarls. When the call for war is sounded, the Skald bears the banner and marches to battle with his comrades.',
    skills: [
      'Academic Knowledge (History)',
      'Blather',
      'Charm',
      'Common Knowledge (Norsca)',
      'Common Knowledge (Chaos Wastes)',
      'Gossip',
      'Perception',
      'Performer (any two)',
      'Speak Language (Norse)',
      'Speak Language (any two) or Ventriloquism'
    ],
    talents: [
      'Mimic',
      'Public Speaking',
      'Savvy',
      'Suave'
    ],
    trappings: [
      'Hand Weapon',
      'Shield',
      'Light Armour (Leather Jack and Leather Skullcap)',
      'Banner',
      'Several Scrolls Recounting the Histories of the Character’s Tribe'
    ],
    entries: [
      'Bondsman',
      'Entertainer'
    ],
    exits: [
      'Agitator',
      'Burgher',
      'Freeholder',
      'Marauder',
      'Mercenary',
      'Reaver',
      'Rogue',
      'Seer'
    ],
    notes: '',
    source: 'ToC'
  },
  {
    name: 'Slave',
    type: 'Basic',
    mainstats: {
      ws: 5,
      bs: 0,
      s: 5,
      t: 5,
      ag: 10,
      int: 0,
      wp: 5,
      fel: 0
    },
    secondstats: {
      attacks: 0,
      wounds: 4,
      magic: 0
    },
    description: 'Without Slaves, Skaven society would collapse. These miserable wretches are bought and sold for Warpstone Tokens on the slave blocks in the major communities of the Under-Empire. When they arrive at their new homes they find endless toil and pain: clearing new tunnels, feeding the Rat Ogres, becoming food for their masters, and serving as test subjects for some new Clan Skryre or Clan Moulder enterprise are only a few of the many possible fates that await Skaven Slaves.',
    skills: [
      'Blather',
      'Common Knowledge (Skaven)',
      'Concealment',
      'Perception',
      'Search',
      'Speak Language (Queekish)'
    ],
    talents: [
      'Acute Hearing or Excellent Vision',
      'Flee! or Hardy',
      'Natural Weapons'
    ],
    trappings: [
      'None'
    ],
    entries: [
      'All'
    ],
    exits: [
      'None'
    ],
    notes: '',
    source: 'CotHR'
  },
  {
    name: 'Slaver',
    type: 'Advanced',
    mainstats: {
      ws: 20,
      bs: 20,
      s: 20,
      t: 0,
      ag: 10,
      int: 0,
      wp: 10,
      fel: 0
    },
    secondstats: {
      attacks: 0,
      wounds: 4,
      magic: 0
    },
    description: 'In the past, slavery was quite common in the Old World. The practice is as old as Humanity, originating in the ancient empire of Khemri, and continued through the various civilisations that rose and fell in the intervening years, leading to the present day. In an evolving economy, slavery is simply impractical. In places like Bretonnia, serfs perform all the work and live lives little better than slaves, but in the Empire, men and women, whilst Peasants, are in charge of their own destinies. Of course, in some remote corners of the Old World, the practice flourishes. Araby is famed for its flesh markets as is Sartosa and even some dark corners in Marienburg. The Norsemen take slaves as well, either from surrendered adversaries or as plunder from one of their raids. Occasionally, they have reason to traffic with unsavoury flesh dealers, and some enterprising Norsemen take up the profession.',
    skills: [
      'Common Knowledge (Bretonnia',
      'the Empire',
      'or Tilea)',
      'Drive',
      'Evaluate',
      'Follow Trail',
      'Haggle',
      'Intimidate',
      'Ride',
      'Speak Language (any three)',
      'Torture'
    ],
    talents: [
      'Dealmaker',
      'Menacing',
      'Public Speaking',
      'Seasoned Traveller or Streetwise',
      'Specialist Weapon Group (Entangling) or Strike to Stun'
    ],
    trappings: [
      'Hand Weapon',
      'Horse and Cart',
      'Horse with Saddle and Harness',
      'three Pairs of Manacles',
      '10 Yards of Rope',
      '1d10 Thralls'
    ],
    entries: [
      'Marauder',
      'Merchant',
      'Reaver'
    ],
    exits: [
      'Captain',
      'Outlaw Chief',
      'Seaman'
    ],
    notes: '',
    source: 'ToC'
  },
  {
    name: 'Smuggler',
    type: 'Basic',
    mainstats: {
      ws: 5,
      bs: 5,
      s: 0,
      t: 0,
      ag: 10,
      int: 10,
      wp: 0,
      fel: 10
    },
    secondstats: {
      attacks: 0,
      wounds: 2,
      magic: 0
    },
    description: 'Most of the sea and road trade of the Old World is subject to duties and taxes. Imperial tax collectors, local excisemen, petty lords, and anyone with enough muscle can place a duty on the movement of goods. Legal taxes are bad enough, but many pirates and Outlaw Chiefs also demand a cut to allow safe passage. In large ports like Marienburg, nearly everything moving in or out is taxed in some way. Given this state of affairs, the Smugglers’ trade continues to thrive. While smuggling is, of course, illegal, most folks in the Empire don’t think much of cutting a few corners. In their minds, the taxmen and bureaucrats are the real thieves.',
    skills: [
      'Drive',
      'Evaluate',
      'Gossip or Secret Language (Thieves\' Tongue)',
      'Haggle',
      'Perception',
      'Row',
      'Search',
      'Silent Move',
      'Speak Language (Breton or Kislevian) or Secret Signs (Thief)',
      'Swim'
    ],
    talents: [
      'Dealmaker or Streetwise'
    ],
    trappings: [
      'Light Armour (Leather Jack)',
      '2 Torches',
      'Draft Horse and Cart or Rowing Boat'
    ],
    entries: [
      'Bailiff',
      'Boatman',
      'Camp Follower',
      'Coachman',
      'Engineer',
      'Ferryman',
      'Innkeeper',
      'Marine',
      'Miner',
      'Seaman',
      'Shieldbreaker',
      'Bonepicker',
      'Deepwatcher',
      'Lamplighter',
      'Riverwarden',
      'Sewer Jack',
      'Stevedore',
      'Thief'
    ],
    exits: [
      'Boatman',
      'Charlatan',
      'Ex-Convict',
      'Fence',
      'Ferryman',
      'Seaman',
      'Shieldbreaker',
      'Thief',
      'Forger',
      'Wrecker'
    ],
    notes: '',
    source: 'WHFR'
  },
  {
    name: 'Soldier',
    type: 'Basic',
    mainstats: {
      ws: 10,
      bs: 10,
      s: 0,
      t: 0,
      ag: 10,
      int: 0,
      wp: 5,
      fel: 0
    },
    secondstats: {
      attacks: 1,
      wounds: 2,
      magic: 0
    },
    description: 'Every province and city-state in the Empire maintains its own army, trained and equipped at its own expense. Together these regional forces make up the Imperial Army, though they are often supplemented with militia troops and Mercenaries. These Soldiers are full-time, paid professionals, usually drawn from the Peasant or Burgher classes. They man the Empire’s fortresses, patrol the borders, and repel invaders. Most Soldiers of the infantry train with either the halberd or the firearm. Although dominated by the nobility, the Imperial Army also promotes based on ability and it is possible to rise through the ranks to a command position (though the bigotry of the ruling class makes this difficult). Imperial Dwarfs and Halflings are usually formed into their own units. ',
    skills: [
      'Animal Care or Heal',
      'Common Knowledge (the Empire) or Perception',
      'Dodge Blow',
      'Drive or Ride',
      'Gamble or Gossip',
      'Intimidate'
    ],
    talents: [
      'Disarm or Quick Draw',
      'Sharpshooter or Strike Might Blow',
      'Specialist Weapon Group (Gunpowder or Two-handed)',
      'Strike to Injure or Rapid Reload',
      'Strike to Stun or Mighty Shot'
    ],
    trappings: [
      'Great Weapon (halberd) or Firearm with Ammunition for 10 shots',
      'Shield',
      'Light Armour (Full Leather Armour)',
      'Uniform'
    ],
    entries: [
      'Flagellant',
      'Hunter',
      'Messenger',
      'Toll Keeper',
      'Watchman',
      'Bear Tamer',
      'Chekist',
      'Temple Guardian'
    ],
    exits: [
      'Mercenary',
      'Outrider',
      'Sergeant',
      'Vagabond',
      'Veteran',
      'Watchman',
      'Cadet',
      'Deepwatcher',
      'Horse Master',
      'Knight of the Verdant Field',
      'Raconteur'
    ],
    notes: '',
    source: 'WHFR'
  },
  {
    name: 'Spy',
    type: 'Advanced',
    mainstats: {
      ws: 15,
      bs: 15,
      s: 5,
      t: 10,
      ag: 20,
      int: 20,
      wp: 35,
      fel: 20
    },
    secondstats: {
      attacks: 1,
      wounds: 4,
      magic: 0
    },
    description: 'Spies are secret agents who gather information for their patrons or the highest bidder. Spies are masters of disguise who often risk their lives to work undercover in enemy territory. Some will even join subversive groups and study them for months from the inside. A Spy who dares to infiltrate a Chaos coven risks far worse than death, but there are many groups in the Old World who desperately need the information such a stout soul can provide. All the nations of the Old World employ Spies, usually to monitor the military and political moves of their rivals.',
    skills: [
      'Charm',
      'Common Knowledge (any two)',
      'Concealment',
      'Disguise',
      'Gossip',
      'Lip Reading',
      'Performer (Actor)',
      'Pick Lock',
      'Shadowing',
      'Sleight of Hand',
      'Secret Language (any one)',
      'Silent Move',
      'Speak Language (any three)'
    ],
    talents: [
      'Flee!',
      'Linguistics',
      'Schemer',
      'Suave or Sixth Sense'
    ],
    trappings: [
      'Disguise Kit',
      '4 Homing Pigeons'
    ],
    entries: [
      'Camp Follower',
      'Charlatan',
      'Courtier',
      'Explorer',
      'Merchant',
      'Minstrel',
      'Physician',
      'Rapscallion',
      'Sea Captain',
      'Servant',
      'Agent of the Shroud',
      'Border Courtier',
      'Chekist',
      'Cloaked Brother',
      'Enforcer',
      'Hedgemaster',
      'Master Vigilant',
      'Verenean Investigator',
      'Wall Warden'
    ],
    exits: [
      'Assassin',
      'Explorer',
      'Master Thief',
      'Racketeer',
      'Cloaked Brother',
      'Verenean Investigator'
    ],
    notes: '',
    source: 'WHFR'
  },
  {
    name: 'Squire',
    type: 'Basic',
    mainstats: {
      ws: 10,
      bs: 5,
      s: 5,
      t: 5,
      ag: 5,
      int: 0,
      wp: 0,
      fel: 5
    },
    secondstats: {
      attacks: 1,
      wounds: 2,
      magic: 0
    },
    description: 'Squires are Knights in training. Often of Noble blood, they assist Knights on and off the field of battle. Though they can appear to be nothing more than glorified Servants, fetching food and wine for their lord or tending to his horses and panoply, the gruelling work is meant to toughen up the Squires and ready them for knighthood. Their lords are also supposed to provide them with martial training, though some are lax in this duty. Favoured Noble sons serve as Squires for a few months at best, while those less fortunate spend years trying to earn their spurs.  ',
    skills: [
      'Academic Knowledge (Genealogy/Heraldry) or Common Knowledge (Bretonnia)',
      'Animal Care',
      'Animal Training',
      'Charm or Gossip',
      'Dodge Blow',
      'Ride',
      'Speak Language (Breton or Reikspiel)'
    ],
    talents: [
      'Etiquette',
      'Specialist Weapon Group (Cavalry)',
      'Strike Mighty Blow'
    ],
    trappings: [
      'Demilance',
      'Medium Armour (Mail Shirt, Mail Coif, Leather Jack)',
      'Shield',
      'Horse with Saddle and Harness'
    ],
    entries: [
      'Herald',
      'Noble',
      'Valet',
      'Cadet',
      'Cult Attendant',
      'Temple Guardian'
    ],
    exits: [
      'Knight',
      'Noble',
      'Outlaw',
      'Sergeant',
      'Veteran',
      'Black Guard',
      'Cadet',
      'Horse Master',
      'Knight Errant',
      'Knight Panther',
      'Knight of the Blazing Sun'
    ],
    notes: 'If, during character creation, you take Common Knowledge (Bretonnia) and Speak Language (Breton), your character can be from Bretonnia at your option.',
    source: 'WHFR'
  },
  {
    name: 'Steppes Nomad',
    type: 'Basic',
    mainstats: {
      ws: 10,
      bs: 10,
      s: 0,
      t: 5,
      ag: 5,
      int: 0,
      wp: 10,
      fel: 0
    },
    secondstats: {
      attacks: 0,
      wounds: 2,
      magic: 0
    },
    description: 'Uncounted krugs of Ungol nomads wander the frozen steppes of the Troll Country. These tribesmen were pushed north when the Gospodars invaded and have roamed the dangerous province ever since. There, they follow their domesticated herds from pasture to pasture, chasing the warmth of Dazh, their patron, and settling briefly in portable huts called kibitkas. They are a passionate and fierce folk, tempered by harsh surroundings and endless conflicts with marauding kyazaks. By Kislevite law, every nomadic krug is expected to annually form a rota of Kislev’s famed horse archers, which then patrols the northern oblast every Spring Driving, ruthlessly slaughtering any invaders they encounter.',
    skills: [
      'Animal Care',
      'Animal Training or Trade (Cook)',
      'Charm Animal or Consume Alcohol',
      'Common Knowledge (Troll Country)',
      'Concealment or Heal',
      'Follow Trail or Trade (Bowyer)',
      'Navigation or Secret Signs (Scout)',
      'Outdoor Survival',
      'Perception or Performer (Dancer)',
      'Ride'
    ],
    talents: [
      'Hardy or Rover'
    ],
    trappings: [
      'Kislevite horse with saddle and harness',
      'week of rations',
      'skins of water and koumiss',
      'a yurta',
      'leather jacks and leggings',
      'Kislevite horse bow with a quiver of 10 arrows.'
    ],
    entries: [
      'Horse Archer',
      'Wise Woman'
    ],
    exits: [
      'Ataman',
      'Horse Archer',
      'Horse Master',
      'Outlaw',
      'Scout',
      'Vagabond',
      'Drover',
      'Horse Coper'
    ],
    notes: 'You must be Ungol and you must be a member of a nomadic krug',
    source: 'RotIQ'
  },
  {
    name: 'Stevedore',
    type: 'Basic',
    mainstats: {
      ws: 0,
      bs: 5,
      s: 10,
      t: 10,
      ag: 5,
      int: 0,
      wp: 5,
      fel: 0
    },
    secondstats: {
      attacks: 0,
      wounds: 2,
      magic: 0
    },
    description: 'Stevedores are specialist dockers, trained to properly pack and unpack cargo holds. Loading a ship is skillintensive and dangerous work, for vessels can overbalance and capsize if packed incorrectly, and unsecured cargoes can crush the unwary. Within the claustrophobic ship interiors, Stevedores wind “stevedore lashings” (special knots) with wedges of wood to secure and protect the heavy freight. Many Stevedors specialise in “porting” one type of cargo, as each good requires different skills to manipulate, stack and pack correctly. Thus, most larger wharfs have gangs of “porters” that identify themselves according to the goods they import or export, including fish porters, meat porters and deal porters (for timber). None are more famous than the black-liveried coal porters of Nuln, known for their anything-goes attitude and love of bawdy docker songs. Stevedores wear distinctive cloth watch caps dyed with their gang colours, both to identify their allegiances and to protect themselves from the elements. Stevedore gangs jealously guard their wharfs from rivals, and it takes little provocation for them to dish out “lashings” of a different kind.',
    skills: [
      'Consume Alcohol or Gamble',
      'Dodge Blow or Scale Sheer Surface',
      'Gossip',
      'Perception or Search',
      'Performer (Singer)',
      'Secret Language (Guild Tongue)',
      'Swim'
    ],
    talents: [
      'Lightning Reflexes or Sturdy',
      'Very Strong'
    ],
    trappings: [
      'Light Armour (Leather Jack)',
      'Watch Cap in Gang Colours',
      '10 Yards of Rope',
      '1d10 Wooden Spikes'
    ],
    entries: [
      'Boatman',
      'Peasant'
    ],
    exits: [
      'Boatman',
      'Foreman',
      'Marine',
      'Merchant',
      'Smuggler',
      'Thief',
      'Thug',
      'Tradesman'
    ],
    notes: 'If you are rolling randomly for your Starting Career, you can substitute Stevedore for Boatman with your GM’s approval.',
    source: 'Companion'
  },
  {
    name: 'Steward',
    type: 'Advanced',
    mainstats: {
      ws: 10,
      bs: 10,
      s: 10,
      t: 10,
      ag: 0,
      int: 30,
      wp: 20,
      fel: 25
    },
    secondstats: {
      attacks: 0,
      wounds: 4,
      magic: 0
    },
    description: 'A Steward is a household manager, entrusted with arranging all the bothersome everyday details that Nobles and the very rich, such as successful Merchants or powerful clergy, cannot be bothered to deal with. While a Noble Lord will often have no idea what he is worth or how much it takes to upkeep his affairs and various holdings, his Steward will know down to the last shilling. As wealthy Nobles tend to have far flung estates, some Stewards may be put in charge of a property and left to their own devices for years at a time.',
    skills: [
      'Academic Knowledge (Law)',
      'Charm',
      'Command',
      'Common Knowledge (the Empire)',
      'Evaluate',
      'Gossip',
      'Haggle',
      'Intimidate',
      'Perception',
      'Read/Write',
      'Ride',
      'Search',
      'Speak Language (Reikspiel)',
      'Trade (Merchant)'
    ],
    talents: [
      'Public Speaking',
      'Super Numerate'
    ],
    trappings: [
      '2 Sets of Best Craftsmenship Noble’s Garb',
      'Writing Kit'
    ],
    entries: [
      'Courtier',
      'Farmer',
      'Politician',
      'Priest',
      'Scholar',
      'Valet',
      'Cult Attendant',
      'Monk',
      'Village Elder',
      'Wall Warden'
    ],
    exits: [
      'Crime Lord',
      'Fence',
      'Merchant',
      'Noble',
      'Faceless'
    ],
    notes: '',
    source: 'WHFR'
  },
  {
    name: 'Streltsi',
    type: 'Basic',
    mainstats: {
      ws: 10,
      bs: 10,
      s: 5,
      t: 5,
      ag: 5,
      int: 0,
      wp: 5,
      fel: 0
    },
    secondstats: {
      attacks: 0,
      wounds: 2,
      magic: 0
    },
    description: 'The streltsi were originally a rota of kossars from Erengrad. Led by Boyar Boydinov – an eccentric noble obsessed with the Empire – they wielded pole-axes rather than axes, mirroring the halberds favoured by the State Regiments of Ostland. In 2345 IC, whilst driving back a Chaos horde alongside Empire allies, the wide-eyed boyar witnessed Imperial black powder for the first time. His kossars were changed forever. Now, many years after the death of Boydinov, the streltsi are the foremost masters of firearms in Kislev, weapons once viewed with fear and superstition. Soldiers from across Kislev travel to Erengrad to earn the crossed “berdysh and handgun” badge, which is awarded to any who train with the streltsi for more than two seasons.',
    skills: [
      'Common Knowledge (Kislev) or Perception',
      'Consume Alcohol',
      'Dodge Blow',
      'Gamble or Gossip',
      'Speak Language (Kislevarin)'
    ],
    talents: [
      'Marksman or Sharpshooter',
      'Master Gunner or Quick Draw',
      'Mighty Shot or Rapid Reload',
      'Specialist Weapon Group (Gunpowder, Two-handed)'
    ],
    trappings: [
      'uniform',
      'leather jerkin',
      'leggings and helmet',
      'berdysh pole-arm',
      'firearm',
      'powder and 10 shots'
    ],
    entries: [
      'Watchman'
    ],
    exits: [
      'Bounty Hunter',
      'Chekist',
      'Mercenary',
      'Sergeant',
      'Veteran',
      'Watchman',
      'Winged Lancer'
    ],
    notes: '',
    source: 'RotIQ'
  },
  {
    name: 'Strigany Mystic',
    type: 'Basic',
    mainstats: {
      ws: 5,
      bs: 5,
      s: 0,
      t: 0,
      ag: 5,
      int: 5,
      wp: 10,
      fel: 10
    },
    secondstats: {
      attacks: 0,
      wounds: 2,
      magic: 0
    },
    description: 'The people of Strigos were scattered to the winds when their lands were destroyed and have since taken up a nomadic life. They roam the Empire in caravan trains or river barges, making money where they can and stealing when they can’t. Their history under the Vampires ensures they maintain their travelling lifestyle, marking them not just as thieves and cutthroats but also necromancers and servants of darkness. In truth, most of them are simple woodsmen, entertainers, or vagabonds, but a few do know something of witchcraft, a little of fortune telling, and a large amount of Vampire lore. These mystics were taught the true and complete history of their people, and they carry the secret knowledge from those ancient days, as well as the promise of their Strigos lords to one day return and lead them back to glory.',
    skills: [
      'Academic Knowledge (Necromancy)',
      'Charm',
      'Drive or Ride',
      'Evaluate',
      'Gossip',
      'Haggle',
      'Hypnotism or Trade (Apothecary)',
      'Performer (any)',
      'Secret Signs (Astrologer or Ranger)',
      'Sleight of Hand',
      'Speak Language (Strigany)'
    ],
    talents: [
      'Sixth Sense',
      'Rover or Seasoned Traveller'
    ],
    trappings: [
      'Deck of Cards',
      'Eldritch Jewellery'
    ],
    entries: [
      'None'
    ],
    exits: [
      'Astrologer',
      'Charlatan',
      'Entertainer',
      'Hedge Wizard',
      'Rogue',
      'Seer',
      'Thief'
    ],
    notes: 'Strigany mystic is only available to those of Strigany blood. Being of that blood imposes a –10% penalty to all Fellowship Tests when dealing with a person of the Empire. With your GM’s permission, you may substitute Strigany mystic for vagabond when rolling for your Starting Career. If you have the WFRP Companion, you may apply the River Strigany Traits to your Strigany mystic.',
    source: 'NDM'
  },
  {
    name: 'Student',
    type: 'Basic',
    mainstats: {
      ws: 0,
      bs: 0,
      s: 0,
      t: 0,
      ag: 10,
      int: 10,
      wp: 5,
      fel: 10
    },
    secondstats: {
      attacks: 0,
      wounds: 2,
      magic: 0
    },
    description: 'The great cities of the Empire have many universities. Most, like the Imperial School of Engineers in Altdorf, are funded by the state. The first college in the Empire was established in Nuln and that city is still famous for its learning institutions (and, ironically, its Imperial Gunnery School). Students across the Empire can choose from a wide variety of courses, from history to anatomy to science. Of course, many study nothing more than the bottom of a bottle and wash out of school in less than a year. Elven Students don’t go to Imperial universities, but learn from their own loremasters instead. Halfling students are admitted to Universities on sufferance, due to an obscure piece of Imperial Ordinance demanded by the Elder of the Moot.',
    skills: [
      'Academic Knowledge (any one)',
      'Academic Knowledge (any one) or Gossip',
      'Charm or Consume Alcohol',
      'Heal or Search',
      'Perception',
      'Read/Write',
      'Speak Language (Classical)',
      'Speak Language (Reikspiel)'
    ],
    talents: [
      'Etiquette or Linguistic',
      'Savvy or Suave',
      'Seasoned Traveller or Super Numerate'
    ],
    trappings: [
      'Two Textbooks corresponding to Knowledge Skills',
      'Writing Kit'
    ],
    entries: [
      'Dilettante',
      'Envoy',
      'Grave Robber',
      'Minstrel',
      'Noble',
      'Valet',
      'Cadet',
      'Forger'
    ],
    exits: [
      'Agitator',
      'Apprentice Wizard',
      'Barber-Surgeon',
      'Cartographer',
      'Engineer',
      'Envoy',
      'Initiate',
      'Physician',
      'Scholar',
      'Agent of the Shroud',
      'Apothecary',
      'Apprentice Runesmith',
      'Astrologer',
      'Cadet',
      'Catechist',
      'Embalmer',
      'Forger',
      'Gambler',
      'Litigant',
      'Monk',
      'Newssheet Vendor',
      'Pamphleteer',
      'Penitent',
      'Raconteur'
    ],
    notes: '',
    source: 'WHFR'
  },
  {
    name: 'Swamp Skimmer',
    type: 'Basic',
    mainstats: {
      ws: 5,
      bs: 5,
      s: 0,
      t: 10,
      ag: 10,
      int: 10,
      wp: 0,
      fel: 0
    },
    secondstats: {
      attacks: 0,
      wounds: 2,
      magic: 0
    },
    description: 'Of all the terrain found in the Borderlands, few are as nasty and inhospitable as its swamps and fens. Polluted stretches of land, filled with bloodsucking mosquitoes and ravenous leeches, they are breeding grounds for disease. Since these places are generally left alone, there are all sorts of treasures and oddities lurking beneath the vines and brackish water, and those with the mettle and constitution to resist the disease and vermin that infest these places find they can make a good living. Collectively known as Swamp Skimmers, these men and women brave the hostile environment in the hopes of bettering themselves and perhaps buying passage out of this dangerous land.',
    skills: [
      'Concealment',
      'Follow Trail',
      'Outdoor Survival',
      'Navigation',
      'Perception',
      'Search',
      'Silent Move',
      'Swim'
    ],
    talents: [
      'Resistance to Disease',
      'Sixth Sense'
    ],
    trappings: [
      'Large Sack',
      'Thigh-high Waterproof Boots'
    ],
    entries: [
      'Anchorite',
      'Peasant',
      'Vagabond'
    ],
    exits: [
      'Mercenary',
      'Peasant',
      'Vagabond'
    ],
    notes: '',
    source: 'RC'
  },
  {
    name: 'Swampaire',
    type: 'Basic',
    mainstats: {
      ws: 5,
      bs: 10,
      s: 0,
      t: 5,
      ag: 10,
      int: 5,
      wp: 0,
      fel: 0
    },
    secondstats: {
      attacks: 0,
      wounds: 3,
      magic: 0
    },
    description: 'Swampaires are hunters and gatherers of snails and frogs. They take their name from an obscure dialect that essentially means man of the swamps or, more commonly, chaser of frogs. Snails and frogs are the only resource in which Mousillon is rich, and swamping is a prestigious occupation among its peasants. Since all creatures in a swamp are technically owned by the local lord, a Swampaire needs at least the implicit approval of the local noble. Some nobles require lengthy apprenticeships and the swearing of oaths before a man can call himself a Swampaire and be permitted to hunt his lord’s swamps. Swampaires tend to be hardy folk adept at tracking snails and frogs, which is a tricky and time-consuming business at the best of times. Swampaires are normally men, but some nobles have been known to permit a particularly sharpeyed and quick-fingered lass to hunt in the absence of suitably skilled menfolk.',
    skills: [
      'Concealment',
      'Outdoor Survival',
      'Perception',
      'Search',
      'Set Trap',
      'Swim'
    ],
    talents: [
      'Hardy',
      'Lightning Reflexes or Very Resilient',
      'Marksman',
      'Rover',
      'Specialist Weapon Group (entangling)'
    ],
    trappings: [
      'Net',
      'spear',
      'sack',
      '1d10 warts',
      'swamping rights granted by local lord'
    ],
    entries: [
      'Boatman',
      'Ferryman',
      'Frogwife',
      'Hunter',
      'Militiaman',
      'Peasant'
    ],
    exits: [
      'Grail Pilgrim',
      'Herrimault',
      'Man-at-Arms',
      'Outlaw',
      'Thug',
      'Vagabond',
      'Village Elder',
      'Yeoman'
    ],
    notes: 'With your GM’s permission, when rolling your starting career you can substitute Swampaire for Hunter',
    source: 'BotD'
  },
  {
    name: 'Targeteer',
    type: 'Advanced',
    mainstats: {
      ws: 0,
      bs: 40,
      s: 10,
      t: 10,
      ag: 25,
      int: 10,
      wp: 20,
      fel: 15
    },
    secondstats: {
      attacks: 1,
      wounds: 4,
      magic: 0
    },
    description: 'Targeteers dedicate themselves to perfecting their skill with missile weapons, most often the mighty longbow, though a rare few prefer the crossbow. They regularly travel to different fairs, delighting crowds with their trick shooting and pitting their skills against all-comers in impromptu contests. Many Nobles regularly hold archery tourneys with a fair purse to the winner and a professional Targeteer can make a decent living if he is skilled enough to regularly claim a prize or two. In these grim times, a Targeteer’s uncanny skill with a bow is in high demand among armies and Mercenary companies.',
    skills: [
      'Common Knowledge (the Empire)',
      'Gossip',
      'Outdoor Survival',
      'Perception',
      'Search',
      'Sleight of Hand'
    ],
    talents: [
      'Mighty Shot',
      'Rapid Reload',
      'Sharpshooter',
      'Specialist Weapon Group (Longbow)',
      'Specialist Weapon Group (Crossbow or Throwing)',
      'Sure Shot'
    ],
    trappings: [
      'Longbow or Crossbow with 10 Arrows or Bolts',
      'Light Armour (Leather Jack)'
    ],
    entries: [
      'Bounty Hunter',
      'Hunter',
      'Ghost Strider',
      'Master Thief',
      'Vampire Hunter',
      'Veteran',
      'Horse Archer'
    ],
    exits: [
      'Assassin',
      'Champion',
      'Duellist',
      'Sergeant'
    ],
    notes: '',
    source: 'WHFR'
  },
  {
    name: 'Temple Guardian',
    type: 'Basic',
    mainstats: {
      ws: 10,
      bs: 5,
      s: 5,
      t: 5,
      ag: 5,
      int: 0,
      wp: 5,
      fel: 0
    },
    secondstats: {
      attacks: 0,
      wounds: 2,
      magic: 0
    },
    description: 'Temple Guardians are chosen, not from amongst the brightest members of a congregation, who would be far better put to use elsewhere, but rather from among those whose skills lie in a more physical area. They are expected to be above reproach, and to resist the temptation to steal from their own temples. Some cults ensure this behaviour by telling particularly horrid tales of the fate that awaits such traitors in the afterlife, while others simply encourage temple guardians to keep a close eye on one another, rewarding with great wealth any accusation of theft or disloyalty that proves to be true..',
    skills: [
      'Common Knowledge (any one)',
      'Dodge Blow',
      'Gossip',
      'Intimidate',
      'Perception',
      'Search'
    ],
    talents: [
      'Cool Headed or Stout Hearted',
      'Strike Mighty Blow',
      'Strike to Stun'
    ],
    trappings: [
      'Light Armour (Leather Jack)',
      'Robes or Uniform'
    ],
    entries: [
      'Grave Warden',
      'Initiate',
      'Militiaman',
      'Watchman',
      'Zealot'
    ],
    exits: [
      'Initiate',
      'Mercenary',
      'Soldier',
      'Squire',
      'Watchman'
    ],
    notes: '',
    source: 'ToS'
  },
  {
    name: 'Thief',
    type: 'Basic',
    mainstats: {
      ws: 5,
      bs: 5,
      s: 0,
      t: 0,
      ag: 15,
      int: 5,
      wp: 0,
      fel: 10
    },
    secondstats: {
      attacks: 0,
      wounds: 2,
      magic: 0
    },
    description: 'The Empire is home to many honest, hard working citizens and Thieves are dedicated to taking as much of their money as possible. They tend to be jacks-of-all-trades, willing and able to take advantage of any moneymaking opportunity that comes along. Specialist Thieves include blackmailers, embezzlers, kidnappers, pickpockets, and cattle thieves. Towns and cities of any size have Thieves’ Guilds, which control and organize criminal activity. A few towns have more than one guild, which leads to vicious fighting until one guild eliminates its rival. The most successful Thieves’ Guilds own so many legitimate businesses that over time they turn into Merchant Guilds. It is a rare guild that leaves its larcenous ways behind, however. ',
    skills: [
      'Charm or Scale Sheer Surface',
      'Concealment',
      'Evaluate or Disguise',
      'Gamble or Pick Lock',
      'Perception',
      'Read/Write or Sleight of Hand',
      'Search',
      'Secret Language (Thieves\' Tongue) or Secret Signs (Thief)',
      'Silent Move'
    ],
    talents: [
      'Alley Cat or Streetwise',
      'Super Numerate or Trapfinder'
    ],
    trappings: [
      'Light Armour (Leather Jerkin)',
      'Sack',
      'Lockpicks',
      '10 Yards of Rope'
    ],
    entries: [
      'Entertainer',
      'Grave Robber',
      'Interrogator',
      'Militiaman',
      'Outlaw',
      'Protagonist',
      'Rat Catcher',
      'Rogue',
      'Servant',
      'Smuggler',
      'Toll Keeper',
      'Tomb Robber',
      'Vagabond',
      'Exciseman',
      'Herrimault',
      'Marine',
      'Stevedore',
      'Strigany Mystic'
    ],
    exits: [
      'Entertainer',
      'Ex-Convict',
      'Grave Robber',
      'Interrogator',
      'Militiaman',
      'Outlaw',
      'Protagonist',
      'Rat Catcher',
      'Rogue',
      'Servant',
      'Smuggler',
      'Toll Keeper',
      'Tomb Robber',
      'Vagabond',
      'Cat Burglar',
      'Charlatan',
      'Chimneysweep',
      'Fence',
      'Gambler',
      'Verenean Investigator'
    ],
    notes: '',
    source: 'WHFR'
  },
  {
    name: 'Thug',
    type: 'Basic',
    mainstats: {
      ws: 10,
      bs: 0,
      s: 5,
      t: 5,
      ag: 0,
      int: 0,
      wp: 5,
      fel: 5
    },
    secondstats: {
      attacks: 1,
      wounds: 2,
      magic: 0
    },
    description: ' In the criminal underworld, strength and viciousness are highly prized virtues and no profession illustrates this more clearly than the Thug. When protection money is owed, when Agitators threaten to expose corruption, or when rivals overstep themselves, the Thug is there. A few thwacks with a club is usually enough to send the right message, but harder cases get the full treatment. It’s wisest to flee in such circumstances, but the graveyards are full of those that thought quick wits would be enough to save them. Every Thieves’ Guild and criminal organisation has Thugs in its ranks.',
    skills: [
      'Consume Alcohol',
      'Dodge Blow',
      'Gamble',
      'Intimidate',
      'Secret Language (Thieves\' Tongue)'
    ],
    talents: [
      'Coolheaded or Lightning Reflexes',
      'Disarm',
      'Resistance to Posion or Quick Draw',
      'Strike to Injure or Wrestling',
      'Strike to Stun'
    ],
    trappings: [
      'Knuckle-dusters',
      'Medium Armour (Mail Shirt and Leather Jack)'
    ],
    entries: [
      'Ex-Convict',
      'Marine',
      'Protagonist',
      'Dung Collector',
      'Stevedore',
      'Swampaire'
    ],
    exits: [
      'Bodyguard',
      'Ex-Convict',
      'Interrogator',
      'Mercenary',
      'Pit Fighter',
      'Racketeer',
      'Chekist'
    ],
    notes: '',
    source: 'WHFR'
  },
  {
    name: 'Toll Keeper',
    type: 'Basic',
    mainstats: {
      ws: 10,
      bs: 5,
      s: 5,
      t: 10,
      ag: 5,
      int: 0,
      wp: 5,
      fel: 0
    },
    secondstats: {
      attacks: 0,
      wounds: 2,
      magic: 0
    },
    description: 'Collecting money for the government is a thankless job. Doing so in the midst of the wilderness is practically a death sentence. Toll Keepers live in isolated roadside houses, collecting money from passing travellers. The monies collected go towards the upkeep of the roads, but that doesn’t stop travellers from berating, beating, and even killing Toll Keepers trying to do their jobs. If that weren’t bad enough, tollhouses are prime targets for bandits. A Toll Keeper’s life is so fraught with peril and few do it for very long, despite the high wages the position pays. ',
    skills: [
      'Dodge Blow',
      'Evaluate',
      'Gossip or Haggle',
      'Perception',
      'Read/Write',
      'Search',
      'Speak Language (Breton, Kislevian or Tilean)'
    ],
    talents: [
      'Lightning Reflexes or Marksman'
    ],
    trappings: [
      'Cheat',
      'Crossbow with 10 Bolts',
      'Medium Armour (Mail Shirt and Leather Jerkin)',
      'Shield',
      '1d10 gc'
    ],
    entries: [
      'Bailiff',
      'Coachman',
      'Roadwarden',
      'Lamplighter',
      'Riverwarden',
      'Thief'
    ],
    exits: [
      'Ferryman',
      'Fieldwarden',
      'Highwayman',
      'Outlaw',
      'Soldier',
      'Politician',
      'Thief'
    ],
    notes: '',
    source: 'WHFR'
  },
  {
    name: 'Tomb Robber',
    type: 'Basic',
    mainstats: {
      ws: 10,
      bs: 0,
      s: 0,
      t: 0,
      ag: 10,
      int: 10,
      wp: 10,
      fel: 5
    },
    secondstats: {
      attacks: 0,
      wounds: 2,
      magic: 0
    },
    description: 'Tomb Robbers differ from Grave Robbers in that they are interested in the valuables to be found in burial sites rather than the bodies themselves. Although very few graves in the Old World include valuable goods these days, there are many ancient burial sites that contain priceless treasures. Tomb Robbers are experts in locating such sites and plundering their riches. Secret tombs are usually in dangerous and inaccessible areas. Those within the Empire’s borders are revered and protected by local inhabitants, so accessing these sites can be just as dangerous. Clever traps and deceptions protect the richest tombs and skilled Tomb Robbers must learn to disarm or bypass them. Few survive long enough to raid more than one tomb. ',
    skills: [
      'Common Knowledge (the Empire) or Secret Signs (Thief)',
      'Concealment or Outdoor Survival',
      'Evaluate',
      'Perception',
      'Pick Lock or Silent Move',
      'Read/Write',
      'Scale Sheer Surface',
      'Search',
      'Speak Language (Classical or Khazalid or Eltharin)'
    ],
    talents: [
      'Luck or Sixth Sense',
      'Trapfinder or Tunnel Rat'
    ],
    trappings: [
      'Light Armour (Leather Jack)',
      'Crowbar',
      'Lantern',
      'Lamp Oil',
      '10 Yards of Rope',
      '2 Sacks'
    ],
    entries: [
      'Runebearer',
      'Shieldbreaker',
      'Thief',
      'Dilettante'
    ],
    exits: [
      'Fence',
      'Rat Catcher',
      'Shieldbreaker',
      'Thief',
      'Vampire Hunter',
      'Agent of the Shroud',
      'Ex-Convict'
    ],
    notes: '',
    source: 'WHFR'
  },
  {
    name: 'Tradesman',
    type: 'Basic',
    mainstats: {
      ws: 0,
      bs: 0,
      s: 5,
      t: 5,
      ag: 10,
      int: 5,
      wp: 10,
      fel: 0
    },
    secondstats: {
      attacks: 0,
      wounds: 2,
      magic: 0
    },
    description: 'Tradesmen are skilled labourers and craftsmen. Although they tend to cluster together in cities, they can also be found in villages across the Empire. They provide many of the goods used by Merchants when trading abroad, and are valued as an important part of the Empire’s economy. Tradesmen include apothecaries, armourers, bowyers, brewers, calligraphers, carpenters, cartographers, gem cutters, gunsmiths, herbalists, peddlers, shipwrights, smiths, stoneworkers, tailors, and weaponsmiths. Each trade has its own guild, though not all guilds have local chapters.',
    skills: [
      'Animal Care or Gossip',
      'Drive',
      'Haggle',
      'Evaluate',
      'Perception',
      'Read/Write',
      'Secret Language (Guild Tongue)',
      'Trade (any)',
      'Trade (any)'
    ],
    talents: [
      'Dealmaker or Savvy'
    ],
    trappings: [
      'Light Armour (Leather Jerkin)',
      '1d10 gc'
    ],
    entries: [
      'Barber-Surgeon',
      'Burgher',
      'Camp Follower',
      'Dilettante',
      'Peasant',
      'Watchman',
      'Forger',
      'Frogwife',
      'Stevedore'
    ],
    exits: [
      'Artisan',
      'Cartographer',
      'Engineer',
      'Envoy',
      'Farmer',
      'Merchant',
      'Militiaman',
      'Zealot',
      'Embalmer',
      'Foreman',
      'Forger',
      'Freeholder',
      'Grail Pilgrim',
      'Wall Warden'
    ],
    notes: '',
    source: 'WHFR'
  },
  {
    name: 'Troll Slayer',
    type: 'Basic',
    mainstats: {
      ws: 10,
      bs: 0,
      s: 5,
      t: 5,
      ag: 5,
      int: 0,
      wp: 10,
      fel: 0
    },
    secondstats: {
      attacks: 1,
      wounds: 3,
      magic: 0
    },
    description: 'Dwarfs who have been disgraced, crossed in love, or otherwise humiliated abandon traditional society and seek the sweet release of death. They hunt the most dangerous of monsters in the hopes of finding a glorious end. Most of them die fairly quickly, but those few who survive become members of the strange cult of Troll Slayers. They exist only to die, and by doing so redeem whatever disgrace they suffered in the past. They seek the fiercest foes, and Trolls are considered ideal because the Dwarfs’ deaths are almost a certainty. Troll Slayers are instantly recognizable, with their spiky orange hair, outlandish tattoos, and gaudy jewellery. They spend a great deal of time boasting of their exploits and show off their many scars, and often indulge in bouts of overeating, drunkenness, and sleep deprivation.',
    skills: [
      'Consume Alcohol',
      'Dodge Blow',
      'Intimidate'
    ],
    talents: [
      'Disarm or Quick Draw',
      'Hardy',
      'Lightning Reflexes or Very Resilient',
      'Specialist Weapon Group (Two-handed)',
      'Street Fighter',
      'Strike Mighty Blow'
    ],
    trappings: [
      'Great Weapon',
      'Light Armour (Leather Jerkin)',
      'One Bottle of Poor Craftsmenship Spirits'
    ],
    entries: [
      'Pit Fighter'
    ],
    exits: [
      'Giant Slayer'
    ],
    notes: 'Only Dwarfs can join this career. Taking the Slayer’s path is a sure route to death. Think carefully before entering this career.',
    source: 'WHFR'
  },
  {
    name: 'Vagabond',
    type: 'Basic',
    mainstats: {
      ws: 5,
      bs: 10,
      s: 0,
      t: 0,
      ag: 10,
      int: 5,
      wp: 0,
      fel: 5
    },
    secondstats: {
      attacks: 0,
      wounds: 2,
      magic: 0
    },
    description: 'Vagabonds love life on the road. The traditional Peasant or Burgher existence seems like prison to them. Who wants to wake up in the same village or city every day, doing the same thing as yesterday? Vagabonds are footloose wanderers who look on each day as a new adventure. They may take on odd jobs here and there to earn some brass, but they never stay in one place for long. The road beckons, with the promise of something better always over the next hill. While they do love to travel, they are not ignorant of the dangers of the road. Vagabonds can thus often be found in travelling companies, formed for mutual protection. The law has little love for these groups and in many places Vagabonds are viewed as common criminals.',
    skills: [
      'Common Knowledge (Bretonnia',
      'Estalia',
      'Kislev',
      'or Tilea)',
      'Gossip or Secret Language (Ranger Tongue or Thieves’ Tongue)',
      'Haggle or Swim',
      'Heal or Perception',
      'Navigation',
      'Outdoor Survival',
      'Performer (Dancer',
      'Singer',
      'or Storyteller) or Secret Signs (Ranger or Thief)',
      'Silent Move'
    ],
    talents: [
      'Fleet Footed or Rover',
      'Marksman or Orientation',
      'Seasoned Traveller'
    ],
    trappings: [
      'Trappings: Back Pack',
      'Rations (1 week)',
      'Tent',
      'Water Skin'
    ],
    entries: [
      'Barber-Surgeon',
      'Camp Follower',
      'Cartographer',
      'Cat Burglar',
      'Charcoal-Burner',
      'Entertainer',
      'Envoy',
      'Ex-Convict',
      'Fieldwarden',
      'Hedge Wizard',
      'Kithband Warrior',
      'Outlaw',
      'Soldier',
      'Woodsman',
      'Anchorite',
      'Badlander',
      'Battle Pilgrim',
      'Carcassonne Shepherd',
      'Cenobite',
      'Frogwife',
      'Grail Pilgrim',
      'Herrimault',
      'Horned Hunter',
      'Penitent',
      'Pilgrim',
      'Seer',
      'Steppes Nomad',
      'Swamp Skimmer',
      'Swampaire',
      'Thief',
      'Warlock',
      'Witch'
    ],
    exits: [
      'Entertainer',
      'Friar',
      'Rapscallion',
      'Scout',
      'Thief',
      'Woodsman',
      'Badlander',
      'Bonepicker',
      'Carcassonne Shepherd',
      'Dung Collector',
      'Gambler',
      'Grail Pilgrim',
      'Man-at-Arms',
      'Raconteur',
      'Swamp Skimmer'
    ],
    notes: '',
    source: 'WHFR'
  },
  {
    name: 'Valet',
    type: 'Basic',
    mainstats: {
      ws: 0,
      bs: 0,
      s: 0,
      t: 0,
      ag: 10,
      int: 10,
      wp: 5,
      fel: 10
    },
    secondstats: {
      attacks: 0,
      wounds: 2,
      magic: 0
    },
    description: 'A Valet is a personal manservant for a Nobleman, high-ranking military commander, or wealthy Burgher. He is responsible for the comfort and appearance of his charge, including grooming, wardrobe, and presentation. A Valet is ready with a hat and cloak when it’s raining, a walking stick for outdoor jaunts, and a dress coat for formal occasions. A well-trained Valet is indispensable for the style-conscious Noble. Though they enjoy a lifestyle most Servants would kill for, Valets often resent the vacuous Nobles they are forced to attend. Women who perform these services for Noblewomen are known as handmaidens.',
    skills: [
      'Academic Knowledge (Genealogy/Heraldry)',
      'Blather',
      'Evaluate',
      'Gossip or Speak Language (Breton or Reikspiel)',
      'Haggle',
      'Perception',
      'Read/Write',
      'Search'
    ],
    talents: [
      'Coolheaded or Suave',
      'Dealmaker or Seasoned Traveller',
      'Etiquette'
    ],
    trappings: [
      'Cologne',
      'Purse',
      'Two sets of Best Craftsmenship Clothing',
      'Uniform'
    ],
    entries: [
      'Burgher',
      'Servant'
    ],
    exits: [
      'Herald',
      'Rogue',
      'Squire',
      'Steward',
      'Student',
      'Cult Attendant'
    ],
    notes: '',
    source: 'WHFR'
  },
  {
    name: 'Vampire Hunter',
    type: 'Advanced',
    mainstats: {
      ws: 20,
      bs: 20,
      s: 10,
      t: 20,
      ag: 15,
      int: 15,
      wp: 20,
      fel: 0
    },
    secondstats: {
      attacks: 1,
      wounds: 4,
      magic: 0
    },
    description: 'Vampire Hunters are driven souls who seek to destroy the Undead by any means necessary. Many of them have lost friends and family members to the Restless Dead, most often to their namesake. Since any but the most cursory knowledge of the Undead is a forbidden subject in the Empire, Vampire Hunters are a self-made lot. They congregate quietly with others of their ilk; sharing what little knowledge they’ve gleaned from their more successful encounters with the forces of the Restless Dead in hopes of one day finding a sure method of killing vampires.',
    skills: [
      'Academic Knowledge (History or Necromancy)',
      'Common Knowledge (the Empire)',
      'Concealment',
      'Dodge Blow',
      'Follow Trail',
      'Perception',
      'Scale Sheer Surface',
      'Shadowing',
      'Search',
      'Silent Move',
      'Speak Language (Classical)'
    ],
    talents: [
      'Mighty Shot or Rapid Reload',
      'Specialist Weapon Group (Crossbow)',
      'Stout-hearted',
      'Strike Mighty Blow',
      'Strike to Injure',
      'Tunnel Rat'
    ],
    trappings: [
      'Repeater Crossbow with 10 Bolts',
      'Medium Armour (Full Mail Armour)',
      'Blessed Water',
      '4 Stakes'
    ],
    entries: [
      'Bounty Hunter',
      'Ghost Strider',
      'Knight',
      'Scout',
      'Tomb Robber',
      'Agent of the Shroud',
      'Black Guard',
      'Fieldwarden',
      'Grave Warden',
      'Master Vigilant'
    ],
    exits: [
      'Demagogue',
      'Initiate',
      'Knight',
      'Targeteer',
      'Witch Hunter',
      'Agent of the Shroud',
      'Black Guard',
      'Killer of the Dead'
    ],
    notes: '',
    source: 'WHFR'
  },
  {
    name: 'Verenean Investigator',
    type: 'Advanced',
    mainstats: {
      ws: 10,
      bs: 10,
      s: 10,
      t: 10,
      ag: 20,
      int: 30,
      wp: 20,
      fel: 20
    },
    secondstats: {
      attacks: 1,
      wounds: 5,
      magic: 0
    },
    description: 'Verenan Investigators are agents who look into matters the cult would rather not come to the regular authorities, such as the roadwardens or the witch hunters. They are adept at quiet investigation, looking for clues and observing the scene, rather than extracting possibly unreliable information through torture. Though they usually turn their results over to the cult for further action, they are also ready to take matters into their own hands, if need be. Investigators often come from within the cult itself, although the Verenan hierarchy does not scruple at hiring talented people with questionable pasts, so long as they repent their ways and swear loyalty to the goddess. Verenan Investigators have a wide range of knowledge, and often astound others with their ability to bring obscure information together to throw light on a case.',
    skills: [
      'Academic Knowledge (Law)',
      'Academic Knowledge (any two)',
      'Command',
      'Common Knowledge (Empire)',
      'Common Knowledge (any one)',
      'Concealment',
      'Disguise',
      'Follow Trail',
      'Gossip',
      'Perception',
      'Pick Lock',
      'Read/Write',
      'Search',
      'Shadowing',
      'Silent Move',
      'Sleight of Hand',
      'Secret Signs (any one)',
      'Speak Language (Classical)',
      'Speak Language (Reikspiel)',
      'Speak Language (any one)'
    ],
    talents: [
      'Alley Cat or Coolheaded',
      'Keen Senses or Savvy',
      'Street Fighting or Strong-minded',
      'Streetwise'
    ],
    trappings: [
      'Lock Picks',
      'Magnifying Glass',
      'Manacles',
      '2 Homing Pigeons and Cages'
    ],
    entries: [
      'Bounty Hunter',
      'Cat Burglar',
      'Dilettante',
      'Roadwarden',
      'Thief',
      'Watchman',
      'Scholar',
      'Spy',
      'Witch Hunter',
      'Riverwarden'
    ],
    exits: [
      'Initiate (Verena)',
      'Scholar',
      'Spy',
      'Witch Hunter'
    ],
    notes: '',
    source: 'Sigmar\'s Heir'
  },
  {
    name: 'Veteran',
    type: 'Advanced',
    mainstats: {
      ws: 20,
      bs: 20,
      s: 10,
      t: 10,
      ag: 15,
      int: 0,
      wp: 15,
      fel: 0
    },
    secondstats: {
      attacks: 1,
      wounds: 6,
      magic: 0
    },
    description: 'A professional Soldier or Mercenary who survives a great many battles, but cares not in the slightest for rising up the ranks, eventually finds himself a Veteran. Veterans are, first and foremost, survivors. They don’t volunteer for suicide missions and they don’t take unnecessary risks, but when the time comes to get stuck in, they’re some of the toughest troops on the field. Off-duty Veterans are always good for old war tales. They carouse with a will, knowing that their time may be short and there’s no sense in dying with gold still in your pockets.',
    skills: [
      'Common Knowledge (the Empire)',
      'Consume Alcohol',
      'Dodge Blow',
      'Gamble',
      'Gossip',
      'Intimidate',
      'Perception',
      'Secret Language (Battle Tongue)'
    ],
    talents: [
      'Mighty Shot or Strike Mighty Blow',
      'Rapid Reload or Strike to Injure',
      'Specialist Weapon Group (any two)',
      'Very Resilient or Very Strong'
    ],
    trappings: [
      'Any two weapons',
      'Medium Armour (Full Mail Armour)',
      'Bottle of Good Craftsmenship Spirits'
    ],
    entries: [
      'Flagellant',
      'Kislevite Kossar',
      'Kithband Warrior',
      'Mercenary',
      'Norse Berserker',
      'Outlaw',
      'Pistolier',
      'Pit Fighter',
      'Runebearer',
      'Shieldbreaker',
      'Soldier',
      'Squire',
      'Artillerist',
      'Battle Pilgrim',
      'Bondsman',
      'Carcassonne Shepherd',
      'Chekist',
      'Cloaked Brother',
      'Crusader',
      'Deepwatcher',
      'Herrimault',
      'Horse Archer',
      'Ice Maiden',
      'Knight Panther',
      'Knight of the Verdant Field',
      'Man-at-Arms',
      'Master Runesmith',
      'Reaver',
      'Sewer Jack',
      'Streltsi',
      'Warleader',
      'Whaler',
      'Winged Lancer',
      'Wrecker'
    ],
    exits: [
      'Champion',
      'Farmer',
      'Judicial Champion',
      'Outlaw Chief',
      'Sergeant',
      'Targeteer',
      'Ataman',
      'Cloaked Brother',
      'Crusader',
      'Faceless'
    ],
    notes: '',
    source: 'WHFR'
  },
  {
    name: 'Village Elder',
    type: 'Advanced',
    mainstats: {
      ws: 0,
      bs: 0,
      s: 0,
      t: 0,
      ag: 0,
      int: 20,
      wp: 20,
      fel: 30
    },
    secondstats: {
      attacks: 0,
      wounds: 4,
      magic: 0
    },
    description: 'Bretonnian nobles are responsible for bringing justice to the peasants. If they hear of a crime, they make sure that someone is punished. As long as it’s a peasant, they do not worry about which peasant. In some cases, the lord has hanged the victim. Most peasants would prefer to avoid such “justice.” Instead, they turn to their Village Elders, respected residents of the village. These old men listen to the details of the case and then hand out punishments. Often these involve paying reparations to the victim, normally in labour, but sometimes the Village Elders arrange “accidents” for the criminal. The quality of this justice depends entirely on the quality of the Village Elder, as there are no checks on his decisions. A senile elder is still capable of handing down something less than justice. However, it is still almost invariably better than appealing to the local lord.',
    skills: [
      'Charm',
      'Common Knowledge (Bretonnia)',
      'Evaluate',
      'Gossip',
      'Haggle',
      'Intimidate',
      'Perception',
      'Torture'
    ],
    talents: [
      'Master Orator',
      'Menacing',
      'Public Speaking',
      'Suave'
    ],
    trappings: [
      'Peasant Village'
    ],
    entries: [
      'Faceless',
      'Mediator',
      'Yeoman',
      'Frogwife',
      'Swampaire'
    ],
    exits: [
      'Demagogue',
      'Faceless',
      'Outlaw Chief',
      'Politician',
      'Steward'
    ],
    notes: 'Only peasants may become Village Elders. Women may only become Village Elders if disguised as men.',
    source: 'KotG'
  },
  {
    name: 'Wall Warden',
    type: 'Advanced',
    mainstats: {
      ws: 0,
      bs: 10,
      s: 10,
      t: 10,
      ag: 25,
      int: 20,
      wp: 10,
      fel: 10
    },
    secondstats: {
      attacks: 0,
      wounds: 4,
      magic: 0
    },
    description: 'Wall Wardens are the peasant craftsmen who care for and design the fortifications of Bretonnian nobles, the massive castles that protect their power. They are also responsible for the construction and care of siege engines. Most nobles know nothing about building or engineering and thus need to place a great deal of trust in their Wall Wardens. As a result, a peasant is only given such a post after proving himself. As Wall Wardens often have both the ear and the trust of their lords, such a post is often a stepping stone to a more important position in the lord’s administration. On the other hand, Wall Wardens are sometimes approached by outside forces to report on the state of the lord’s defences. The loyal ones naturally refuse.',
    skills: [
      'Academic Knowledge (Engineering)',
      'Academic Knowledge (Strategy/Tactics)',
      'Common Knowledge (Bretonnia)',
      'Evaluate',
      'Gossip',
      'Haggle',
      'Perception',
      'Trade (Carpenter)',
      'Trade (Stoneworker)'
    ],
    talents: [
      'Lightning Reflexes',
      'Specialist Weapon Group (Engineer)'
    ],
    trappings: [
      'Fortifications to look after',
      'trade tools'
    ],
    entries: [
      'Man-at-Arms',
      'Peasant',
      'Tradesman'
    ],
    exits: [
      'Spy',
      'Steward',
      'Yeoman'
    ],
    notes: 'Only peasants may become Wall Wardens. Women may only become Wall Wardens if disguised as men.',
    source: 'WHFR'
  },
  {
    name: 'Warleader',
    type: 'Advanced',
    mainstats: {
      ws: 20,
      bs: 0,
      s: 20,
      t: 20,
      ag: 10,
      int: 5,
      wp: 10,
      fel: 10
    },
    secondstats: {
      attacks: 2,
      wounds: 5,
      magic: 0
    },
    description: 'Warleaders are proven Norsemen warriors who’ve seen countless battles and are entrusted by their Jarls and Kings to lead detachments of other warriors and Marauders against their enemies. Typically, Warleaders bear many strange tattoos, ritual scars, and most, if not all, have one or more mutations, showing they have the favour of the Gods.',
    skills: [
      'Command',
      'Consume Alcohol',
      'Dodge Blow',
      'Intimidate',
      'Perception'
    ],
    talents: [
      'Fearless',
      'Strike Mighty Blow',
      'Strike to Injure',
      'Specialist Weapon Group (Twohanded)',
      'Unsettling',
      'Very Resilient or Very Strong'
    ],
    trappings: [
      'Hand Weapon and Shield or Great Weapon',
      'Medium Armour (Sleeved Mail Shirt',
      'Mail Coif',
      'and Full Leather Armour)',
      'Warband of 2d10 Marauders'
    ],
    entries: [
      'Bondsman',
      'Marauder',
      'Reaver'
    ],
    exits: [
      'Captain',
      'Champion',
      'Veteran',
      'Reaver'
    ],
    notes: 'Chaos Warrior is described in Chapter XIII: Slaves to Darkness of Tome of Corruption. ',
    source: 'Tome of Corruption'
  },
  {
    name: 'Warlock',
    type: 'Advanced',
    mainstats: {
      ws: 10,
      bs: 10,
      s: 10,
      t: 10,
      ag: 15,
      int: 15,
      wp: 20,
      fel: 20
    },
    secondstats: {
      attacks: 0,
      wounds: 4,
      magic: 2
    },
    description: 'Witches that use Dark Magic and embrace its power can become Warlocks if they survive its perils long enough to gain the required knowledge. They may not realize it at first, but this is a dangerous path that leads almost inevitably to corruption. They are the bogeymen of the witch hunters, the spellcasters that are a danger to themselves and to others. Warlocks tend to be either Daemonologists or Necromancers. Since they are selftaught and so much of their magic is based on experimentation, however, most Warlocks have unique views of magic and the world. It is this individuality that makes it so hard for the witch hunters to root them out.',
    skills: [
      'cademic Knowledge (Daemonology or Necromancy)',
      'Channelling',
      'Charm',
      'Common Knowledge (any three)',
      'Concealment',
      'Disguise',
      'Gossip',
      'Haggle',
      'Heal',
      'Hypnotism or Read/Write',
      'Magical Sense',
      'Perception',
      'Ride or Swim',
      'Search',
      'Trade (Apothecary or Herbalist)'
    ],
    talents: [
      'Dark Lore (any one)',
      'Dark Magic',
      'Hardy or Very Resilient'
    ],
    trappings: [
      'Lucky Charm'
    ],
    entries: [
      'Witch',
      'Hedgewise'
    ],
    exits: [
      'Apprentice Wizard',
      'Charlatan',
      'Outlaw',
      'Scribe',
      'Vagabond'
    ],
    notes: 'You must have at least one insanity point and learned at least two spells through your Witchcraft talent before you can enter this career.',
    source: 'Realms of Sorcery'
  },
  {
    name: 'Warrior Priest',
    type: 'Advanced',
    mainstats: {
      ws: 20,
      bs: 15,
      s: 10,
      t: 10,
      ag: 15,
      int: 15,
      wp: 25,
      fel: 15
    },
    secondstats: {
      attacks: 1,
      wounds: 5,
      magic: 2
    },
    description: 'Whilst all priests are expected to bear arms in the defence of their temple and faith, and most are at least profcient in combat, only a few march to battle alongside their templars and the Imperial army. These warrior priests have a threefold responsibility: ministering to the faithful amongst the army, offering spiritual and tactical advice to the army’s leadership, and smiting the unfaithful in battle. When war comes to the temple, a cult’s warrior priests take charge of its defence, marshalling the rest of the cult to repel attackers. Warrior priests are usually members of holy orders, such as the Sigmarites of the Order of the Silver Hammer. Most warrior priests come from the cults of Sigmar, Ulric, and Myrmidia, although other cults are not without a few token militant brethren.',
    skills: [
      'Academic Knowledge (Strategy/Tactics)',
      'Academic Knowledge (Teology)',
      'Channelling',
      'Common Knowledge (any two)',
      'Dodge Blow',
      'Heal',
      'Magical Sense',
      'Ride',
      'Secret Language (Battle Tongue)',
      'Speak Arcane Language (Magick)',
      'Speak Language (any one)'
    ],
    talents: [
      'Armoured Casting',
      'Divine Lore (any one)',
      'Lesser Magic (any two)',
      'Meditation or Fast',
      'Hands Specialist Weapon Group (Two-handed*) or Strike Mighty Blow'
    ],
    trappings: [
      'Great Weapon*',
      'Medium Armour (Full Mail Armour)',
      'Religious Symbol'
    ],
    entries: [
      'Anointed Priest',
      'Prelate',
      'Priest'
    ],
    exits: [
      'High Priest',
      'Knight',
      'Prelate',
      'Witch Hunter'
    ],
    notes: 'Followers of Shallya may not become Warrior Priests.  *Warrior Priests tend to wield weapons sacred to their faith;typically a greathammer;greatsword or polearm. Warrior Priests of Taal and Rhya may substitute a longbow.',
    source: 'Tome of Salvation'
  },
  {
    name: 'Watchman',
    type: 'Basic',
    mainstats: {
      ws: 10,
      bs: 5,
      s: 5,
      t: 0,
      ag: 5,
      int: 10,
      wp: 0,
      fel: 5
    },
    secondstats: {
      attacks: 0,
      wounds: 2,
      magic: 0
    },
    description: 'Originally, cities and towns were responsible for recruiting and maintaining their own watch organisations. Corruption was so widespread that the Emperor gave the job to the army instead. Now, certain regiments on garrison duty must serve as the town watch. This has cut down dramatically on corruption, though the army itself is not immune. Watchmen are responsible for maintaining law and order and are empowered to make arrests. They also double as fire fghters in smaller towns. For some Soldiers, watch duty is a temporary assignment. For others, it becomes a lifelong career.',
    skills: [
      'Academic Knowledge (Law)',
      'Dodge Blow',
      'Follow Trail',
      'Gossip',
      'Intimidate',
      'Perception',
      'Search'
    ],
    talents: [
      'Coolheaded or Savvy',
      'Disarm or Street Fighting',
      'Strike Mightly Blow',
      'Strike to Stun'
    ],
    trappings: [
      'Light Armour (Leather Jack)',
      'Lantern and Pole',
      'Lamp Oil',
      'Uniform'
    ],
    entries: [
      'Jailer',
      'Soldier',
      'Chekist',
      'Grave Warden',
      'Lamplighter',
      'Sewer Jack',
      'Streltsi',
      'Temple Guardian'
    ],
    exits: [
      'Mercenary',
      'Racketeer',
      'Roadwarden',
      'Sergeant',
      'Sewer Jack',
      'Soldier',
      'Tradesman',
      'Chekist',
      'Deepwatcher',
      'Enforcer',
      'Litigant',
      'Streltsi',
      'Temple Guardian',
      'Verenean Investigator'
    ],
    notes: '',
    source: 'WHFR'
  },
  {
    name: 'Whaler',
    type: 'Basic',
    mainstats: {
      ws: 5,
      bs: 10,
      s: 10,
      t: 10,
      ag: 10,
      int: 0,
      wp: 0,
      fel: 0
    },
    secondstats: {
      attacks: 0,
      wounds: 2,
      magic: 0
    },
    description: 'Whaling is an important trade for Norsca, and Whalers are respected even among the warriors. Swimming through the dark currents of the Sea of Chaos are massive whales, many of which bear strange markings, and odd colouration, twisted and warped as they are by the power of Chaos. These monsters can capsize ships and swallow hundreds of men in a single gulp. Thus, Whalers must be made of sterner stuff than ordinary fshermen.',
    skills: [
      'Consume Alcohol',
      'Navigation',
      'Perception',
      'Row',
      'Sail',
      'Swim'
    ],
    talents: [
      'Coolheaded',
      'Excellent Vision',
      'Hardy',
      'Seasoned Traveller',
      'Very Strong'
    ],
    trappings: [
      'Dagger',
      'Lantern with four pints of Whale Oil',
      'Light Armour (Leather Jack)',
      'Pipe',
      'Spear',
      'Bottle of Good Spirits',
      'Lucky Charm (Scrimshaw Talisman or Tattoos',
      'see WFRP page 123)'
    ],
    entries: [
      'Fisherman',
      'Reaver',
      'Seaman'
    ],
    exits: [
      'Freeholder',
      'Marauder',
      'Navigator',
      'Reaver',
      'Veteran'
    ],
    notes: '',
    source: 'Tome of Corruption'
  },
  {
    name: 'Winged Lancer',
    type: 'Advanced',
    mainstats: {
      ws: 25,
      bs: 15,
      s: 15,
      t: 15,
      ag: 15,
      int: 0,
      wp: 15,
      fel: 15
    },
    secondstats: {
      attacks: 1,
      wounds: 4,
      magic: 0
    },
    description: 'Every Gospodar settlement annually raises a rota of winged lancers. Each spring, eager young men muster alongside veterans and don armour at their rotamaster\'s command. To the sound of weeping womenfolk, they ride, their winged banners ﬂuttering behind them. Until their return, they are known as the "Riders of the Dead," for they are mourned as if already deceased. Every rota of lancers has a diﬀerent character. Where some southern examples are like Imperial knights, sporting colourful pennants, intricately decorated armour, and great animal pelts, lancers from beyond the Lynsk are more akin to Ungol nomads, having heavy moustaches, top-knots, and fur-lined charms to ward against evil.',
    skills: [
      'Academic Knowledge (Strategy/Tactics)',
      'Animal Care or Dodge Blow',
      'Command or Navigation',
      'Common Knowledge (Kislev or Troll Country)',
      'Consume Alcohol',
      'Outdoor Survival',
      'Perception',
      'Ride',
      'Secret Language (Battle Tongue)',
      'Speak Language (Kislevarin)'
    ],
    talents: [
      'Hardy or Very Resilient',
      'Specialist Weapon Group (Cavalry)',
      'Strike Mighty Blow or Strike to Injure'
    ],
    trappings: [
      'At least full suits of mail',
      'though some accent their armour with bits of plate',
      'From their backs ﬂy winged banners',
      'Kislevite warhorse equipped with saddles and harnesses',
      'lances',
      'scimitars (Hand Weapons)',
      'shields',
      'at least two javelins',
      'a bottle of kvas'
    ],
    entries: [
      'Horse Master',
      'Noble',
      'Outrider',
      'Peasant',
      'Streltsi'
    ],
    exits: [
      'Captain',
      'Horse Master',
      'Scout',
      'Veteran'
    ],
    notes: '',
    source: 'Realm of the Ice Queen'
  },
  {
    name: 'Wise Woman',
    type: 'Basic',
    mainstats: {
      ws: 0,
      bs: 0,
      s: 0,
      t: 5,
      ag: 0,
      int: 15,
      wp: 10,
      fel: 5
    },
    secondstats: {
      attacks: 0,
      wounds: 2,
      magic: 0
    },
    description: 'Most Ungol communities are tended by a krug of dark-shawled wise women. These no-nonsense matriarchs guard uncounted generations of oral traditions and tribal secrets. This knowledge is put to good use tending the sick, aiding childbirth, advising local leaders, placating the spirits of the land, and warding their folk against the taint of Chaos. Wise women krugs gather in specially decorated kibitkas that men are forbidden to enter; there, they share lore and discuss matters of importance. Girls who demonstrate "the sight" are interviewed in these tents to determine their suitability to join the wise women, an experience that can terrify even the strong of mind.',
    skills: [
      'Academic Knowledge (History or Spirits)',
      'Charm or Intimidate',
      'Command',
      'Common Knowledge (Kislev or Troll Country)',
      'Consume Alcohol or Gossip',
      'Heal',
      'Magical Sense',
      'Perception',
      'Performer (Storyteller)',
      'Prepare Poison or Trade (Apothecary or Herbalist)',
      'Speak Language (Ungol)'
    ],
    talents: [
      'Coolheaded or Savvy'
    ],
    trappings: [
      'Antitoxin kit',
      'healing draught',
      'healing poultice',
      'a skin of koumiss to ease other sorts of hurts, a number of small charms that include bits of bone, locks of hair, unusual stones, and so on',
      'They mark their station with the tell-tale shawl, a beautifully woven length of cloth they wear draped from their heads or around their necks.  '
    ],
    entries: [
      'None'
    ],
    exits: [
      'Demagogue',
      'Hag Witch',
      'Politician',
      'Steppes Nomad'
    ],
    notes: 'You must be an Ungol female to enter this career.',
    source: 'Realm of the Ice Queen'
  },
  {
    name: 'Witch Hunter',
    type: 'Advanced',
    mainstats: {
      ws: 30,
      bs: 30,
      s: 15,
      t: 15,
      ag: 15,
      int: 15,
      wp: 35,
      fel: 20
    },
    secondstats: {
      attacks: 2,
      wounds: 6,
      magic: 0
    },
    description: 'Witch Hunters are grim individuals who have dedicated their lives to eradicating the forces of Chaos, either in the service of the state or the Church of Sigmar. They prefer to seek out Chaos cultists, Mutants, and heretics that have insidiously hidden amidst the cities of the Empire. However, they will travel far indeed if they think they can strike a meaningful blow against the forces of evil. Witch Hunters tend to be a surly and suspicious lot with no qualms about killing innocents, so long as they also manage to slay the guilty, which means their appearance is often regarded with dread by other folk.',
    skills: [
      'Academic Knowledge (Magic)',
      'Academic Knowledge (Necromancy)',
      'Academic Knowledge (Teology)',
      'Charm',
      'Command',
      'Common Knowledge (the Empire)',
      'Gossip',
      'Intimidate',
      'Perception',
      'Ride',
      'Search',
      'Silent Move',
      'Speak Language (any one)'
    ],
    talents: [
      'Lightning Parry',
      'Lightning Reﬂexes or Marksman',
      'Menacing',
      'Public Speaking',
      'Sixth Sense',
      'Specialist Weapon Group (Crossbow)',
      'Specialist Weapon Group (Entangling)',
      'Specialist Weapon Group (Trowing)',
      'Stout-hearted',
      'Strike Mighty Blow'
    ],
    trappings: [
      'Crossbow Pistol with 10 bolts',
      'Best Craftsmenship Hand Weapon',
      '4 Trowing Knives/Stars',
      'Heavy Armour (Full Plate Armour)',
      '10 Yards of Rope'
    ],
    entries: [
      'Anointed Priest',
      'Assassin',
      'Champion',
      'High Priest',
      'Judicial Champion',
      'Knight of the Inner Circle',
      'Vampire Hunter',
      'Agent of the Shroud',
      'Cloaked Brother',
      'Enforcer',
      'Exorcist',
      'Grandmaster',
      'Knight Panther',
      'Knight of the Raven',
      'Master Vigilant',
      'Scourge of God',
      'Verenean Investigator',
      'Warrior Priest'
    ],
    exits: [
      'Captain',
      'Champion',
      'Demagogue',
      'Initiate',
      'Knight of the Inner Circle',
      'Black Guard',
      'Cloaked Brother',
      'Killer of the Dead',
      'Knight Panther',
      'Verenean Investigator'
    ],
    notes: '',
    source: 'WHFR'
  },
  {
    name: 'Witch',
    type: 'Advanced',
    mainstats: {
      ws: 5,
      bs: 5,
      s: 5,
      t: 10,
      ag: 10,
      int: 10,
      wp: 15,
      fel: 15
    },
    secondstats: {
      attacks: 0,
      wounds: 4,
      magic: 2
    },
    description: 'Witches are Hedge Wizards who survived practicing their fumbling arts without going completely insane or dying. They have a broader repertoire of homegrown spells to work with and many dabble in areas best left alone. In other words, by merit of their ignorance as to the occult workings of the Winds of Magic, many Witches begin to use Dark Magic without even realising it. As a result of trial and error, Witches spells are more diverse and more powerful than the petty spells of other Hedge Wizards, possessing elements of many of the Winds of Magic. However, Witches that use the power of Dark Magic inevitably take a terrible toll upon their minds and souls.',
    skills: [
      'Animal Care or Intimidate',
      'Channelling',
      'Charm',
      'Common Knowledge (any two)',
      'Gossip',
      'Haggle',
      'Heal',
      'Magical Sense',
      'Perception',
      'Ride or Swim',
      'Search',
      'Trade (Apothecary or Herbalist)'
    ],
    talents: [
      'Dark Magic or Mighty Missile',
      'Witchcraft'
    ],
    trappings: [
      'Healing Draught',
      'Healing Poultice',
      'Trade Tools (Apothecary or Herbalist)'
    ],
    entries: [
      'Hedge Wizard',
      'Apprentice Witch',
      'Hag Witch',
      'Hedgemaster',
      'Ice Maiden',
      'Seer'
    ],
    exits: [
      'Apprentice Wizard',
      'Charlatan',
      'Outlaw',
      'Vagabond',
      'Warlock'
    ],
    notes: 'If you have been trained in the Colleges of Magic (i.e. you have ever been in the Apprentice Wizard career), you cannot enter this career.',
    source: 'Realms of Sorcery'
  },
  {
    name: 'Wizard Lord',
    type: 'Advanced',
    mainstats: {
      ws: 15,
      bs: 15,
      s: 5,
      t: 15,
      ag: 20,
      int: 35,
      wp: 40,
      fel: 20
    },
    secondstats: {
      attacks: 0,
      wounds: 5,
      magic: 4
    },
    description: 'Within the Empire, the Lords of the Magical Orders are powerful individuals indeed. They no longer see the world as others do, however, having dedicated their very souls to magic. They now embody their chosen Lore in word, deed and physical form. Should an Elf attain this level of magical skill, he is considered to have completed his minor magic apprenticeship, and is ready to travel to the towers of Hoeth to become a High Mage.',
    skills: [
      'Academic Knowledge (Magic)',
      'Academic Knowledge (any three)',
      'Channelling',
      'Charm or Intimidate',
      'Common Knowledge (any three)',
      'Magical Sense',
      'Read/Write',
      'Speak Arcane Language (Magick)',
      'Speak Arcane Language (Daemonic or Arcane Elf)',
      'Speak Language (any four)'
    ],
    talents: [
      'Aethyric Attunement or Mighty Missile',
      'Dark Magic or Meditation',
      'Fast Hands or Hardy',
      'Lesser Magic (any two)'
    ],
    trappings: [
      'Three magic items',
      '12 Grimoires'
    ],
    entries: [
      'Master Wizard',
      'Master Vigilant'
    ],
    exits: [
      'Explorer',
      'Guild Master',
      'Ambassador'
    ],
    notes: 'Wizard Lords no longer pay dues to their Order. They are, however, charged with preserving the purity of their order, rooting out Chaos worshippers, and ensuring the Orders receive the respect (and monies) due to them.',
    source: 'WHFR'
  },
  {
    name: 'Woodsman',
    type: 'Basic',
    mainstats: {
      ws: 10,
      bs: 0,
      s: 10,
      t: 0,
      ag: 5,
      int: 0,
      wp: 10,
      fel: 0
    },
    secondstats: {
      attacks: 0,
      wounds: 3,
      magic: 0
    },
    description: 'Woodsmen live among the mighty forests of the Empire, looking after trees they will fell for timber. The more fortunate Woodsmen work for Noble families on large estates. The braver souls work on the edges of civilisation, helping to expand the settled lands. These Woodsmen must deal with all the dangers of the forest, from pitfalls and bandits to wild animals and Beastmen. They always keep their axes handy and not just for chopping wood. Woodsmen have been known to clash with Elves, since the Elves do not take kindly to the clearing of their precious forests.',
    skills: [
      'Concealment',
      'Follow Trail or Set Trap',
      'Perception',
      'Scale Sheer Surface',
      'Secret Language (Ranger Tongue)',
      'Secret Signs (Ranger)',
      'Silent Move'
    ],
    talents: [
      'Fleet Footed or Very Resilient',
      'Rover',
      'Specialist Weapon Gorup (Two-handed)'
    ],
    trappings: [
      'Great Weapon (Two-handed)',
      'Light Armour (Leather Jack)',
      'Antitoxin Kit'
    ],
    entries: [
      'Charcoal-Burner',
      'Vagabond'
    ],
    exits: [
      'Hunter',
      'Militiaman',
      'Outlaw',
      'Scout',
      'Vagabond',
      'Carcassonne Shepherd',
      'Herrimault',
      'Knight of the Verdant Field',
      'Man-at-Arms'
    ],
    notes: '',
    source: 'WHFR'
  },
  {
    name: 'Wrecker',
    type: 'Basic',
    mainstats: {
      ws: 5,
      bs: 10,
      s: 0,
      t: 5,
      ag: 5,
      int: 0,
      wp: 5,
      fel: 5
    },
    secondstats: {
      attacks: 0,
      wounds: 2,
      magic: 0
    },
    description: 'The long rivers of the Old World are dangerous places, made all the more so by Wreckers. These river pirates seek to sink vessels and then raid the wrecks. Their techniques for doing this vary, although most lure the unwary into rocky shallows to hole their hulls. Although only interested in cargo, some Wreckers make a habit of killing, wary of escapees that may inform Riverwardens of their identities or locations. In lean times, it is not unknown for entire communities to turn to wrecking to feed their starving families. Whilst most are of these are desperate and only "short-term" sorts, some Wrecker crews are very experienced, targeting even well guarded traders. Such crews rarely stay in one place for any length of time, for their activities soon draw attention from Riverwardens, Bounty Hunters and local Militiamen.',
    skills: [
      'Common Knowledge (The Empire or Kislev)',
      'Consume Alcohol or Dodge Blow',
      'Gamble or Navigation',
      'Outdoor Survival or Sail',
      'Perception or Search',
      'Row',
      'Secret Signs (Ranger) or Speak Language (Kislevite)',
      'Swim'
    ],
    talents: [
      'Orientation or Rover',
      'Sharpshooter or Strike to Stun'
    ],
    trappings: [
      'Bow with 10 Arrows',
      'Light Armour (Leather Jack)',
      'Row Boat'
    ],
    entries: [
      'Boatman',
      'Ferryman',
      'Marine',
      'Outlaw',
      'Peasant',
      'Riverwarden',
      'Seaman',
      'Smuggler'
    ],
    exits: [
      'Boatman',
      'Marine',
      'Outlaw',
      'Veteran'
    ],
    notes: '',
    source: 'Warhammer Companion'
  },
  {
    name: 'Yeoman',
    type: 'Advanced',
    mainstats: {
      ws: 25,
      bs: 10,
      s: 10,
      t: 10,
      ag: 10,
      int: 10,
      wp: 10,
      fel: 0
    },
    secondstats: {
      attacks: 1,
      wounds: 6,
      magic: 0
    },
    description: 'Yeomen are the elite peasant warriors of Bretonnia. Many knights are dismissive of their achievements, arguing that “elite peasant warrior” has a similar meaning to "large mouse." However, whilst it is true that the nobility are far better equipped, the Yeomen are as skilled as most Knights of the Realm, and they take justifed pride in their martial abilities.  Indeed, the overwhelming majority of Yeomen are dedicated professionals because it is their dedication that has distinguished them from the mass of Men-at-Arms around them. Yeomen, in return, receive mounts and are used for scouting missions that are unsuited to knights (too little glory, too much risk). Eventually, some Yeomen grow tired of making things easy for "social superiors" and strike out on their own.  Most lords allow their Yeomen to retire honourably after a few years of service or after a spectacular act on the battlefeld. Others, however, simply desert, usually whilst on a scouting mission so that their lord assumes they were killed and doesn’t go after them.',
    skills: [
      'Animal Care',
      'Common Knowledge (Bretonnia)',
      'Concealment',
      'Consume Alcohol',
      'Dodge Blow',
      'Gamble',
      'Gossip',
      'Intimidate',
      'Outdoor Survival',
      'Perception',
      'Ride',
      'Secret Language (Battle Tongue)',
      'Silent Move'
    ],
    talents: [
      'Rover',
      'Specialist Weapon Group (any one)',
      'Specialist Weapon Group (Two-handed)',
      'Strike to Stun',
      'Very Resilient or Very Strong'
    ],
    trappings: [
      'Halberd',
      'any one weapon',
      'Medium Armour (Full Mail Armour)',
      'Riding Horse with Tack and Harness.'
    ],
    entries: [
      'Carcassonne Shepherd',
      'Man-at-Arms',
      'Mercenary',
      'Swampaire',
      'Wall Warden'
    ],
    exits: [
      'Faceless',
      'Mercenary',
      'Outlaw Chief',
      'Scout',
      'Sergeant',
      'Village Elder'
    ],
    notes: 'Women can only become Yeomen if disguised as men.',
    source: 'WHFR'
  },
  {
    name: 'Zealot',
    type: 'Basic',
    mainstats: {
      ws: 10,
      bs: 0,
      s: 5,
      t: 10,
      ag: 0,
      int: 0,
      wp: 10,
      fel: 5
    },
    secondstats: {
      attacks: 0,
      wounds: 2,
      magic: 0
    },
    description: 'Zealots have lost it all. Maybe their families were murdered by Beastmen or their villages sacked by Orcs. Or conniving Merchants destroyed their businesses or powerful Nobles carried of their daughters. Whatever the case, nothing was left for these men and women but religion. They found solace in the angry sermons of the warrior Priests of Sigmar or Ulric. Now they wander the Empire in tattered clothes, looking to smite the minions of evil and Chaos. They want redemption through blood – be it their own or that of their enemies. They may not have the training of Soldiers but they do have the fire of faith and that is a strong weapon indeed.',
    skills: [
      'Academic Knowledge (Theology)',
      'Charm',
      'Common Knowledge (the Empire)',
      'Intimidate',
      'Read/Write'
    ],
    talents: [
      'Coolheaded or Very Strong',
      'Hardy or Suave',
      'Public Speaking',
      'Specialist Weapon Group (Flail)'
    ],
    trappings: [
      'Flail or Morning Star',
      'Light Armour (Leather Jack)',
      'Bottle of Good Craftsmenship Spirit'
    ],
    entries: [
      'Agitator',
      'Initiate',
      'Judicial Champion',
      'Peasant',
      'Cantor',
      'Catechist',
      'Hedgecraft Apprentice',
      'Monk',
      'Newssheet Vendor',
      'Pilgrim',
      'Tradesman'
    ],
    exits: [
      'Agitator',
      'Initiate',
      'Flagellant',
      'Friar',
      'Outlaw',
      'Catechist',
      'Penitent',
      'Temple Guardian'
    ],
    notes: '',
    source: 'WHFR'
  }
]