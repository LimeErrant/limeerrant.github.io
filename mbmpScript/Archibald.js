var iFileName = "Archibald.js";
RequiredSheetVersion(13);

// The source (EN5ider 108)
SourceList["Bwld"] = {
	name : "Into the Bellowing Wilds",
	abbreviation : "Bwld",
	group : "Fool's Gold",
	url : "https://foolsgold.fun/",
	date : "2023/09/13"
};

// Paladin
// 2nd Level
// Overpowered Aura
// Sphere of Comfort

// 5th Level
// Chain of Pain
// Invisiblessed

// Add the spells
SpellsList["overpowered aura"] = {
	name : "Overpowered Aura",
	classes : ["paladin"],
	source : ["Bwld", 2],
	level : 2,
	school : "Illus",
	time : "1 a",
	range : "30 ft",
	components : "V,S,M",
    compMaterial : "A silver medal worth at least 15gp",
	duration : "Conc, 1 min",
	save : "Int",
	description : "10 crea save or frightened; bns to continue intimidation vs insight/investigation",
	descriptionFull : "You emanate an aura of confidence, convincing onlookers of your awesome power. Up to ten creatures of your choice within range that can see you must succeed on an Intelligence saving throw or become frightened of you until the end of your next turn. As a bonus action on your turn, you can make a Charisma (Intimidation) check against each affected target’s Wisdom (Insight) or Intelligence (Investigation) to maintain the frightened condition until the end of your next turn. A target that wins this contested check is no longer frightened and becomes immune to this spell for 1 hour. \n The spell ends for a target if it can no longer see you."
};

SpellsList["sphere of comfort"] = {
	name : "Sphere of Comfort",
	classes : ["paladin"],
	source : ["Bwld", 2],
	level : 2,
	school : "Abjur",
	time : "1 a",
	range : "10 ft sphere",
	components : "V,S,M",
    compMaterial : "A folding paper fan",
	duration : "Conc, 1 hr",
	save : "Int",
	description : "Warm sphere. Resistant to cold/fire damage inside.",
	descriptionFull : "You create a sphere of balmy magic that spreads out from you in a 10-foot radius and moves with you, remaining centered on you. The temperature inside the sphere is pleasantly warm, regardless of the temperature outside of it. Any creature entirely within the sphere has resistance to cold and fire damage."
};

SpellsList["instant trap"] = {
	name : "Instant Trap",
	classes : ["ranger", "druid"],
	source : ["Bwld", 2],
	level : 1,
	school : "Conju",
	time : "1 a",
	range : "5ft (10ft sq)",
	components : "V,S,M",
    compMaterial : "A small wooden stake",
	duration : "8 hrs",
	description : "Make trap. Investigation/Perception to notice; 2d10 pierce + 1d6 blud on fall.",
	descriptionFull : "With a swift stab into the ground, you instantly create a spiked pit trap centered on a point you can see. The trap can be created on any horizontal surface that is at least 10 feet wide. The trap is 10 feet wide and 10 feet deep, and it has sharp wooden stakes on the bottom. \n The spiked pit trap is concealed with an illusion that matches the surface the trap is on, and it remains there until triggered. A creature must succeed on an Intelligence (Investigation) or Wisdom (Perception) check against your spell save DC to notice the trap. \n When a creature steps onto the trap, the illusion vanishes and the creature falls into the pit, taking 2d10 piercing damage from the spikes plus 1d6 bludgeoning damage from its fall. Once all creatures caught in the trap leave its area or the spell ends, the trap disappears, and the ground returns to its previous state. Any corpses, objects, or creatures in the trap when the spell ends are moved up onto the surface where the spell was cast. \n" + "At higher levels: When you cast this spell using a spell slot of 4th level or higher, you increase the depth of the trap by 10 feet, and the fall damage increases by 1d6 for each slot level above 3rd."
};

SpellsList["gift spell"] = {
	name : "Gift Spell",
	classes : ["cleric", "sorcerer"],
	source : ["Bwld", 2],
	level : 3,
	school : "Trans",
	time : "1 bns",
	range : "Touch",
	components : "V,S",
	duration : "Instant",
	description : "Give crea 2nd or lower spell slot, +adv/disadv save on next spell",
	descriptionFull : "You touch another willing creature and replenish its magical energy. The creature gains a spell slot of 2nd level or lower that it can use to cast spells as though it were one of its own spell slots. Additionally, the target gains an effect of your choice chosen from the following options. \n The target has advantage on the next spell attack it makes before the end of its next turn. \n One target of a spell cast by the target before the end of its next turn has disadvantage on its saving throw to resist the effect." + "At higher levels: When you cast this spell using a spell slot of 4th level or higher, you increase the level of the spell slot you grant the target by 1 for every level above 3rd. This spell has no effect on creatures that can’t cast spells using spell slots."
};

SpellsList["sense souls"] = {
	name : "Sense Souls",
	classes : ["paladin"],
	source : ["Bwld", 2],
	level : 1,
	school : "Necr",
	time : "1 a",
	range : "Self (60-foot radius)",
	components : "V,S",
	duration : "Concentration, up to 1 hour",
	description : "Sense souls. Approx distance/direction, not location. Adv on perception. 1/turn, adv on an attack vs sensed creatures.",
	descriptionFull : "You channel divine magic through your senses, allowing you to sense the presence of souls. You can immediately detect the presence of creatures with souls within 60 feet of you. For each creature you can sense, you know its approximate distance and direction from you, but you don’t learn the exact location of the creature. You have advantage on Wisdom (Perception) checks made to detect creatures you can sense in this way that are hiding. This spell can’t detect creatures without souls, such as constructs not powered by soul crystals and undead creatures that do not possess souls, such as zombies and skeletons. \nOnce per turn, you can grant yourself advantage on an attack made against a creature you can sense with this spell."
};

SpellsList["soul bump"] = {
	name : "Soul Bump",
	classes : ["paladin"],
	source : ["Bwld", 2],
	level : 3,
	school : "Necr",
	time : "1 a",
	range : "Touch",
	components : "V,S",
	duration : "Instantaneous",
	description : "Melee spell attack; 5d10 Necro, disadv on all until end of my next turn.",
	descriptionFull : "With a shunt of divine magic, you push the soul of a creature out of its body for a moment. Make a melee spell attack against a creature you can reach. On a hit, the target takes 5d10 necrotic damage and has disadvantage on all attack rolls, saving throws, or ability checks it makes before the end of your next turn. This spell has no effect on constructs not powered by soul crystals or on undead creatures that do not possess souls, such as zombies and skeletons."
};

SpellsList["soulbound oath"] = {
	name : "Soulbound Oath",
	classes : ["paladin"],
	source : ["Bwld", 2],
	level : 5,
	school : "Necr",
	time : "1 minute",
	range : "Touch",
	components : "V,S",
	duration : "30 days",
	description : "Bind 5 crea, 5d10 necro damage when not meeting it. 1Adv/Dawn to meet.",
	descriptionFull : "You make a solemn promise with up to five creatures, including yourself, binding your souls to carry out a specified course of action, for example, seeking revenge against a specific individual or not harming a certain type of creature. The terms of the oath are yours to decide, and you must abide by them as well. If a target is unwilling, it can make a Charisma saving throw to resist the spell. If any target succeeds on its saving throw, the spell fails for all the targets. A creature bound by this spell takes 5d10 necrotic damage each time it willingly acts in a manner that violates the terms of the oath. Once per day, when a creature bound by this spell acts in a way that meets the requirements of the oath, it gains advantage on one ability check, saving throw, or attack it makes before the next dawn. The GM can rule that the spell fails if the terms of the oath can be observed without effort. This spell can be ended with remove curse, greater restoration, or similar magic. When the spell ends, it ends for all targets. This spell has no effect on a creature that doesn’t share a language with you, doesn’t have a soul, such as a construct not powered by a soul crystal, or on an undead creature that does not possess a soul, such as a zombie or skeleton. A creature already affected by this spell is unaffected by a second casting. \nAt Higher Levels. When you cast this spell using a spell slot of 7th or 8th level, the duration is 1 year. When you cast this spell using a spell slot of 9th level, the spell is permanent until it is ended."
};

MagicItemsList["crystal shard"] = {
	name : "Crystal Shard",
	source : ["Bwld", 3],
	type : "wondrous item",
	rarity : "rare",
	attunement : true,
	allowDuplicates : true,
	description : "You may cast any included spell 1/day",
    spellcastingBonus:[
        {name:"Soul Casting",
            spells:["sense souls", "soul bump", "soulbound oath"],
            firstCol:"oncelr"}],
    usages:1,
    recovery:"dawn"
}

RaceList["weaver"] = {
	regExpSearch : /^(?=.*weaver).*$/i,
	name : "Weaver",
	sortname : "Weaver",
	source : [["Bwld", 0]],
	plural : "Weavers",
	size : 3,
	speed : {
		walk : { spd : 30, enc : 15 },
        climb: { spd: 30, enc: 15 },
	},
	languageProfs : ["Common", "Araknight", 1],
	weaponProfs : [false, false, false],
	age : " reach adulthood in their late teens and live around 100 years",
	height : " range from 5 to over 6 feet tall (4'9\" + 2d10\")",
	weight : " weigh around 165 lb (110 + 2d10 \xD7 2d4 lb)",
	scores : [0, 0, 0, 0, 1, 0],
	trait : "Weaver (+1 Wisdom) Arachnid Arts: I know guidance. At 3rd level, I can cast web 1/LR with wisdom. \nImproved Spider Climb: I can climb difficult surfaces with my spider legs. \nLucky Spider: As an action, a creature rerolls 1s for the next 10 minutes. 1/LR. \nWeb Vision: As a bonus action, make a 10ft sphere of fine web, I have truesight. Adv on checks to locate creatures. Lasts for 1 minute or until burnt. 1/SR. 5th level: 20ft.",
	spellcastingAbility : 5,
	spellcastingBonus : [{
		name : "Guidance (cantrip)",
		spells : ["guidance"],
		selection : ["guidance"],
		firstCol : 'atwill'
	}],
	features : {
		"web" : {
			name : "web",
			limfeaname : "Web (level 2)",
			minlevel : 3,
			usages : 1,
			recovery : "long rest",
			spellcastingBonus : [{
				name : "Web (level 2)",
				spells : ["web"],
				selection : ["web"],
				firstCol : 'oncelr'
			}],
		},
		"lucky spider" : {
			name : "Lucky Spider",
			minlevel : 1,
			usages : 1,
			recovery : "long rest",
			action : [["action", ""]]
		},
        "web vision" : {
			name : "Web Vision",
			minlevel : 1,
			usages : 1,
			recovery : "short rest",
			action : [["bonus action", ""]]
		}
	}
};

AddRacialVariant("weaver", "gladius", {
    regExpSearch : /^(?=.*gladius)(?=.*weaver)/i,
    name : "Gladius Weaver",
    sortname : "Weaver, Gladius",
    source : [["Bwld", 0]],
    plural : "Gladius Weavers",
    scores : [2, 0, 0, 0, 0, 0], // +1 Dex, +1 Con
    trait : "Gladius Weaver (+2 Strength, +1 Wisdom)" +
        "\n \u2022 Reborn Guardian: Reaction to disadv on an attack vs creature, Prof/LR" +
        "\n \u2022 Retribution: When hit, halve and +dmg to next turns attacks. 1/LR."
});

BackgroundList["outback cook"] = {
	regExpSearch : /^(?=.*outback)(?=.*cook).*$/i,
	name : "Outback Cook",
	source : ["Bwld", 11],
	skills : ["Nature", "Survival"],
	gold : 5,
	equipleft : [
	],
	equipright : [
		["Cook's Utensils", "", ""],
		["Butcher's Knife", "", ""],
		["Sickle", "", ""],
		["Herbs and Spices", 11, ""],
		["Flask of Cooking Oil", "", ""],
		["Book of own recipes", "", ""],
		["Inkpen", "", ""],
		["Bottle of Ink", "", ""],
		["Traveller's Clothes", "", ""],
	],
	feature : "Campout Cuisine",
	trait : [
		"I am often lost in thought.",
		"I use big and complicated words.",
		"I always try to help others.",
		"I am a perfectionist and need things to be just so.",
		"I am very awkward in social situations.",
		"I am always trying to learn new recipes, formulas, or techniques by reading or watching others work."
	],
	ideal : [
		["Service",
			"Service: Helping others is the most important thing in the world. (Good)"
		],
		["Power",
			"Power: Knowledge is the key to power and authority. (Evil)"
		],
		["Logic",
			"Logic: There is a systematic way to do and understand everything. (Lawful)"
		],
		["Discovery",
			"Discovery: There are new magics awaiting discovery. (Chaotic)"
		],
		["Knowledge",
			"Knowledge: Understanding the world and its mysteries is its own reward. (Neutral)"
		],
		["Self-Improvement",
			"Self-Improvement: Bettering yourself is essntial in life."
		]
	],
	bond : [
		"I have a mentor I admire and need to impress.",
		"I had a mentor who was cruel and secretly corrupted my home, I must expose him/her.",
		"My family relies on my support.",
		"I am determined to cure the disease that killed my family.",
		"I need to be known for my contributions, discoveries, and skill.",
		"I helped a noble without thought of reward and now that noble family are quiet but loyal patrons."
	],
	flaw : [
		"I avoid others troubles when not actively working as an alchemist or healer.",
		"I treat people like they are stupid.",
		"I resent the people who come to me for help for their weakness.",
		"I wish to be left alone to my work.",
		"I prove my intellect by pointing out others mistakes.",
		"I have difficulty telling people no."
	],
	variant : [],
	toolProfs : ["Cook's Utensils", ["Any", 1]],
	lifestyle : "modest"
};

BackgroundFeatureList["campout cuisine"] = {
	description : "Always tell edibility, can make meals out of most things, creatures that spend 1hr eating +thp = character level. 1/day. Additionally, people are inclined to eat and enjoy your food.",
	source : ["Bwld", 11]
};

AddSubClass("paladin", "survival", {
	regExpSearch : /^(?=.*survival)(((?=.*paladin)|((?=.*(exalted|sacred|holy|divine))(?=.*(knight|fighter|warrior|warlord|trooper))))).*$/i,
	subname : "Oath of Survival",
	source : ["Bwld", 14],
	spellcastingExtra : ["hunter's mark", "instant trap", "barkskin", "warding bond", "gift spell", "protection from energy", "dominate beast", "freedom of movement", "greater restoration", "hold monster"],
	features : {
		"subclassfeature3" : {
			name : "Channel Divinity: Never Surrender",
			source : ["Bwld", 14],
			minlevel : 3,
			description : desc([
				"As an reaction, I can share my hp with a creature that just dropped to 0hp",
				"Lasts for 1 minute or I become incapacitated or fall unconscious"
			]),
			action : [["reaction", ""]]
		},
		"subclassfeature3.1" : {
			name : "Channel Divinity: Strike Together",
			source : ["Bwld", 14],
			minlevel : 3,
			description : desc([
				"As an action, Cha mod within 60ft have adv on attack rolls if an ally is within 5ft of them",
				"Lasts for 1 minute",
			]),
			action : [["action", ""]]
		},
        "subclassfeature3.2" : {
			name : "Survival Specialist",
			source : ["Bwld", 14],
			minlevel : 3,
			description : desc([
				"Gain prof in Survival, add Cha to them. When rolling initiative, roll twice and choose.",
			]),
			action : [["action", ""]]
		},
		"subclassfeature7" : {
			name : "Aura of Adaptability",
			source : ["Bwld", 14],
			minlevel : 7,
			description : desc([
				"Choose one aura with 10ft, update 1/day as bns",
				"Raptor's Cunning: adv on opportunity attacks and int saves",
				"Triceratop's Toughness: adv on con saves and death saves",
				"Tyrannosaurus Rex's Might: adv on saves vs frightened, +CHA mod radiant damage on crit",
			]),
			action : [["bonus action", ""]]
		},
		"subclassfeature15" : {
			name : "Don’t Be a Party Pooper",
			source : ["Bwld", 14],
			minlevel : 15,
			description : desc([
				"As a reaction when one affected by Whoa, Everybody Chill! makes an attack, I attack it",
				"If I'm within range of that creature, I can make a melee weapon attack against it"
			]),
			action : [["reaction", ""]]
		},
		"subclassfeature18" : {
			name : "Stubborn with a Capital U",
			source : ["Bwld", 14],
			minlevel : 18,
			description : "\n   As a reaction when an ally I can see is being pushed or pulled, I can negate the push/pull",
			action : [["reaction", ""]]
		},
		"subclassfeature20" : {
			name : "Avatar of Apathy",
			source : ["Bwld", 14],
			minlevel : 20,
			description : desc([
				"As an action, I can stop caring about everything and the rules no longer apply to me",
				'This lasts for 1 minute; See the 3rd page "Notes" section for the benefits this gives me'
			]),
			recovery : "long rest",
			usages : 1,
			action : [["action", ""]],
			"avatar of apathy benefits" : {
				name : "Avatar of Apathy Benefits",
				extraname : "Oath of Apathy 20",
				source : ["DDAL00-09", 14],
				description : desc([
					"While I'm transformed into an Avatar of Apathy, I gain the following benefits:",
					" \u2022 I gain a climb, fly, and swim speed equal to my walking speed",
					" \u2022 I can move through other creatures and object as if they are difficult terrain",
					"   If I end my turn inside a creature or object, I take 1d10 force damage",
					" \u2022 As a reaction when I'm hit by an attack or fail a save, I can cause it to miss/succeed",
					" \u2022 When I use Lay on Hands on myself, I also remove one condition affecting me"
				])
			},
			autoSelectExtrachoices : [{ extrachoice : "avatar of apathy benefits" }]
		}
	}
});