import { Component } from '@angular/core';
import { IContent } from '../models/icontent';

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.scss']
})
export class ContentListComponent {
  contentList: IContent[];
  //define array of Icontent with 4 items

  constructor() {
    this.contentList = [];
    this.contentList.push({
      id: 1,
      title: "The Legend of Zelda: Breath of the Wild",
      description: "The Legend of Zelda: Breath of the Wild is an action-adventure game developed and published by Nintendo for the Nintendo Switch and Wii U video game consoles. Set in the fantasy land of Hyrule, the game follows Link, who awakens from a hundred-year slumber to a mysterious voice that guides him to defeat Calamity Ganon. The player can explore the open world Hyrule any way they choose, and can climb almost any surface and scale almost any mountain. The game features a physics engine that allows objects to be interacted with in a variety of ways, including being thrown, set on fire, or used as a shield. The player can also cook food, which provides temporary buffs. The game is the first in the series to feature an open world environment, and the first to feature a physics engine. It is also the first game in the series to feature voice acting, and the first to be developed with the Unreal Engine.",
      author: "Nintendo",
      imgSrc: "https://upload.wikimedia.org/wikipedia/en/0/0d/The_Legend_of_Zelda_Breath_of_the_Wild.jpg",
      type: "RPG"    
  });

  this.contentList.push({
    id: 2,
    title: "World of Warcraft",
    description:"World of Warcraft (WoW) is a massively multiplayer online role-playing game (MMORPG) released in 2004 by Blizzard Entertainment. It is the fourth released game set in the fantasy Warcraft universe, which was first introduced by Warcraft: Orcs & Humans in 1994. World of Warcraft takes place within the Warcraft world of Azeroth, approximately four years after the events at the conclusion of Blizzard's previous Warcraft release, Warcraft III: The Frozen Throne. Blizzard Entertainment announced World of Warcraft on September 2, 2001. The game was released for the 10th anniversary of the Warcraft franchise on November 23, 2004. World of Warcraft was the first MMORPG to be made available for the Macintosh platform. The game has since been released for Windows and OS X, and has been announced for the PlayStation 4 and Xbox One. World of Warcraft is the most popular MMORPG in the world by player count, with over 7 million subscribers as of 2015. The game has received 27 expansions, the latest being Legion, released on August 30, 2016.",
    author: "Blizzard Entertainment",
    imgSrc: "https://upload.wikimedia.org/wikipedia/en/5/56/World_of_Warcraft_cover_art.jpg",
    type: "MMORPG",
  });

  this.contentList.push({
    id: 3,
    title: "The Elder Scrolls V: Skyrim",
    description:"The Elder Scrolls V: Skyrim is an action role-playing video game developed by Bethesda Game Studios and published by Bethesda Softworks. It is the fifth main installment in The Elder Scrolls series, following The Elder Scrolls IV: Oblivion, and was released worldwide for Microsoft Windows, PlayStation 3, and Xbox 360 on November 11, 2011. Skyrim's main story revolves around the player character and their quest to defeat Alduin the World-Eater, a dragon who is prophesied to destroy the world. The game is set two hundred years after the events of Oblivion and takes place in the fictional province of Skyrim. Over the course of the game, the player completes quests and develops the character by improving skills. The game continues the open-world tradition of its predecessors by allowing the player to travel anywhere in the game world at any time, and to ignore or postpone the main storyline indefinitely. The player may freely roam over the land of Skyrim which is an open world environment consisting of wilderness expanses, dungeons, cities, towns, fortresses, and villages. Players may navigate the game world more quickly by riding horses or by utilizing a fast-travel system which allows them to warp to previously discovered locations. The game is noted for its well-written main storyline, its detailed open world, and for its well-designed and reactive NPCs. Skyrim also introduces dragons into the series, and allows players to capture and train them as followers. The game's main theme revolves around the civil war between the Empire and the return of the ancient Nordic order known as the Thalmor, who seek to eradicate all Talos worshipers. The game was developed using the Creation Engine, built specifically for the game. It is the first Elder Scrolls game to be released on a seventh-generation console, and the first to be released for the Xbox 360. Skyrim was released to critical acclaim, with reviewers particularly lauding its improved combat and stealth mechanics, its well-written main storyline, and its detailed open world. The game received over 200 Game of the Year awards, and was the best-selling game of 2011. It has since been ported to other platforms and re-released as The Elder Scrolls V: Skyrim Special Edition, which includes all official add-ons and mod support. Skyrim has been ported to the Nintendo Switch, PlayStation 4, Xbox One, and Microsoft Windows. The Nintendo Switch version was released on November 17, 2017, and the PlayStation 4",
    author: "Bethesda Game Studios",
    imgSrc: "https://upload.wikimedia.org/wikipedia/en/1/15/The_Elder_Scrolls_V_Skyrim_cover_art.jpg",
    type: "RPG",
  });

  this.contentList.push({
    id: 4,
    title: "The Witcher 3: Wild Hunt",
    description:"The Witcher 3: Wild Hunt is a 2015 action role-playing video game developed and published by CD Projekt. Based on The Witcher series of fantasy novels by Polish author Andrzej Sapkowski, it is the sequel to the 2011 game The Witcher 2: Assassins of Kings, played in an open world with a third-person perspective. The game was released for Microsoft Windows, PlayStation 4, and Xbox One in May 2015, and for Nintendo Switch in October 2019. The game takes place in a medieval fantasy world and follows the story of Geralt of Rivia, a monster hunter known as a witcher. Geralt is looking for his missing adopted daughter on the run from the Wild Hunt, an otherworldly force determined to capture her and use her powers. The game is played from a third-person perspective and its world is navigated on foot or by riding horses, boats, or the in-game equivalent of cars. Players battle the game's many foes with weapons and magic, and can strengthen Geralt by developing his combat skills and earning new equipment. The game's story is non-linear, and players can choose to complete quests in any order. The game's open world design allows players to roam freely and explore the game's many locations, which include cities, towns, fortresses, and caves. The game's main story is complemented by a variety of side quests, and players can interact with non-player characters to obtain information or perform tasks. The game's main story is divided into three acts, and the game's open world design allows players to freely explore the game's many locations. The game's main story is complemented by a variety of side quests, and players can interact with non-player characters to obtain information or perform tasks. The game's main story is divided into three acts, and the game's open world design allows players to freely explore the game's many locations. The game's main story is complemented by a variety of side quests, and players can interact with non-player characters to obtain information or perform tasks. The game's main story is divided into three acts, and the game's open world design allows players to freely explore the game's many locations. The game's main story is complemented by a variety of side quests, and players can interact with non-player characters to obtain information or perform tasks. The game's main story is divided into three acts, and the game's open world design allows players",
   author: "CD Projekt",
    imgSrc: "https://upload.wikimedia.org/wikipedia/en/0/0c/The_Witcher_3_cover_art.jpg",
    type: "RPG",
  });


  

}
}
