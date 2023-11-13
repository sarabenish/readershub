import { combineReducers } from "redux";
import image1 from "../../assets/books/49110165.jpg";
import image2 from "../../assets/books/50485649.jpg";
import image3 from "../../assets/books/65211776.jpg";
import image4 from "../../assets/books/65213381.jpg";
import image5 from "../../assets/books/65213595.jpg";
import image6 from "../../assets/books/68054323.jpg";
import image7 from "../../assets/books/75668288.jpg";
import image8 from "../../assets/books/78292421.jpg";
import image9 from "../../assets/books/78299256.jpg";
import image10 from "../../assets/books/88151671.jpg";
import image11 from "../../assets/books/101145836.jpg";
import image12 from "../../assets/books/124943221.jpg";

const bookList = [
  {
    bookId: 111,
    bookTitle: "Sorrow and Bliss",
    bookAuthor: "Meg Mason",
    image: image1,
    bookDetail:
      "This novel is about a woman called Martha. She knows there is something wrong with her but she doesn't know what it is. Her husband Patrick thinks she is fine. He says everyone has something, the thing is just to keep going.",
    collectionF: false,
    collectionN: true,
  },
  {
    bookId: 123,
    bookTitle: "In My Dream I Hold A Knife",
    bookAuthor: "Ashley Winstead",
    image: image2,
    bookDetail:
      "A college reunion turns dark and deadly in this chilling and propulsive suspense novel about six friends, one unsolved murder, and the dark secrets they’ve been hiding from each other—and themselves—for a decade.",
    collectionF: false,
    collectionN: true,
  },
  {
    bookId: 124,
    bookTitle: "Silent City",
    bookAuthor: "Sarah Davis-Goff",
    image: image3,
    bookDetail:
      "Orpen has always been an outlier in Phoenix City - the only outsider ever admitted to the ranks of the banshees, the female warriors who enforce order, and protect it from the skrake - the ravening creatures that have laid waste to the rest of the country, and gather at the city walls.",
    collectionF: false,
    collectionN: true,
  },
  {
    bookId: 125,
    bookTitle: "What The River Knows",
    bookAuthor: "Isabel Ibañez",
    image: image4,
    bookDetail:
      "Bolivian-Argentinian Inez Olivera belongs to the glittering upper society of nineteenth century Buenos Aires, and like the rest of the world, the town is steeped in old world magic that’s been largely left behind or forgotten. Inez has everything a girl might want, except for the one thing she yearns the most: her globetrotting parents—who frequently leave her behind.",
    collectionF: false,
    collectionN: true,
  },
  {
    bookId: 126,
    bookTitle: "Starling House",
    bookAuthor: "Alix E. Harrow",
    image: image5,
    bookDetail:
      "Eden, Kentucky, is just another dying, bad-luck town, known only for the legend of E. Starling, the reclusive nineteenth-century author and illustrator who wrote The Underland--and disappeared. Before she vanished, Starling House appeared. But everyone agrees that it’s best to let the uncanny house―and its last lonely heir, Arthur Starling―go to rot.",
    collectionF: true,
    collectionN: false,
  },
  {
    bookId: 127,
    bookTitle: "Midnight Is The Darkest Hour",
    bookAuthor: "Ashley Winstead",
    image: image6,
    bookDetail:
      "For fans of Verity and A Flicker in the Dark, this is a twisted tale of murder, obsessive love, and the beastly urges that lie dormant within us all...even the God-fearing folk of Bottom Springs, Louisiana. In her small hometown, librarian Ruth Cornier has always felt like an outsider, even as her beloved father rains fire-and-brimstone warnings from the pulpit at Holy Fire Baptist.      ",
    collectionF: true,
    collectionN: false,
  },
  {
    bookId: 128,
    bookTitle: "The Hurricane Wars",
    bookAuthor: "Thea Guanzon",
    image: image7,
    bookDetail:
      "All Talasyn has ever known is the Hurricane Wars. Growing up an orphan in a nation under siege by the ruthless Night Emperor, Talasyn has found her family among the soldiers who fight for freedom. But she is hiding a deadly secret: light magic courses through her veins, a blazing power believed to have been wiped out years ago that can cut through the Night Empire's shadows.",
    collectionF: true,
    collectionN: false,
  },
  {
    bookId: 129,
    bookTitle: "Huda F*** Cares",
    bookAuthor: "Huda Fahmy",
    image: image8,
    bookDetail:
      "Huda and her sisters can’t believe it when her parents announce that they’re actually taking a vacation this summer . . . to DISNEY WORLD! But it’s not quite as perfect as it seems. First Huda has to survive a 24-hour road trip from Michigan to Florida, with her sisters annoying her all the way. And then she can’t help but notice the people staring at her and her family when they pray in public. Back home in Dearborn she and her family blend right in because there are so many other Muslim families, but not so much in Florida and along the way.",
    collectionF: true,
    collectionN: true,
  },
  {
    bookId: 130,
    bookTitle: "Hitchcock's Blonde",
    bookAuthor: "Laurence Leamer",
    image: image9,
    bookDetail:
      "Alfred Hitchcock was fixated—not just on the dark, twisty stories that became his hallmark, but also by the blond actresses who starred in many of his iconic movies. The director of North by Northwest , Rear Window , and other classic films didn’t much care if they wore wigs, got their hair coloring out of a bottle, or were the rarest human specimen—a natural blonde—as long as they shone with a golden veneer on camera. The lengths he went to in order to showcase (and often manipulate) these women would become the stuff of movie legend. But the women themselves have rarely been at the center of the story, until  now.      ",
    collectionF: true,
    collectionN: false,
  },
  {
    bookId: 131,
    bookTitle: "Caught Up",
    bookAuthor: "Liz Tomforde",
    image: image10,
    bookDetail:
      "Each of his previous nannies only lasted a few weeks before I let them go. Now, my coach is putting his foot down by hiring the one person I can’t fire—his daughter. Miller Montgomery is the last woman I should fall for. Too wild, too young, and too unattached.  Chicago is just a quick stop for her. I thought I’d be counting down the days until she left, but summer feels too short when I start thinking about forever.",
    collectionF: true,
    collectionN: false,
  },
  {
    bookId: 132,
    bookTitle: "Wildfire",
    bookAuthor: "Hannah Grace",
    image: image11,
    bookDetail:
      "Maple Hills students Russ Callaghan and Aurora Roberts cross paths at a party celebrating the end of the academic year, where a drinking game results in them having a passionate one-night stand. Never one to overstay her welcome (or expect much from a man), Aurora slips away before Russ even has the chance to ask for her full name.",
    collectionF: true,
    collectionN: true,
  },
  {
    bookId: 133,
    bookTitle: "King of Greed",
    bookAuthor: "Ana Huang",
    image: image12,
    bookDetail:
      "He has everything—a beautiful home, a beautiful wife, and more money than he could spend in a lifetime. But no matter how much he accumulates, he’s never satisfied. In his endless quest for more, he drives away the only person who saw him as enough. It isn’t until she’s gone that he realizes there may be more to life than riches and glory…but by then, it may be too late.",
    collectionF: true,
    collectionN: false,
  },
];

const initialState = bookList;

function books(state = initialState, action) {
  return state;
}

export default books;
