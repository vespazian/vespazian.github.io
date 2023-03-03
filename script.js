import Deck from "./deck.js";

// const computerCardSlot = document.querySelector(".computer-card-slot");
// const playerCardSlot = document.querySelector(".player-card-slot");
// const computerDeckElement = document.querySelector(".computer-deck");
// const playerDeckElement = document.querySelector(".player-deck");
// const text = document.querySelector(".text");

const aOneSlot = document.querySelector(".a-one");
const aTwoSlot = document.querySelector(".a-two");
const aThreeSlot = document.querySelector(".a-three");
const aFourSlot = document.querySelector(".a-four");
const cardsRolled0Slot = document.querySelector(".cards-rolled0");
const cardsRolled1Slot = document.querySelector(".cards-rolled1");
const blankSlot = document.querySelector(".blank");
const kOneSlot = document.querySelector(".k-one");
const kTwoSlot = document.querySelector(".k-two");
const kThreeSlot = document.querySelector(".k-three");
const kFourSlot = document.querySelector(".k-four");
const kFiveSlot = document.querySelector(".k-five");
const kSixSlot = document.querySelector(".k-six");
const kSevenSlot = document.querySelector(".k-seven");

let playerDeck, computerDeck;
let kOne, kTwo, kThree, kFour, kFive, kSix, kSeven;
let kOneDeck, kTwoDeck, kThreeDeck, kFourDeck, kFiveDeck, kSixDeck, kSevenDeck, cardsRolled0Deck
let inRound = false;

// let catName = "Oliver";
// let catSound = "Meow!";

// document.addEventListener("click", () => {
//   if (inRound) {
//     cleanBeforeRound();
//   } else {
//     flipCards();
//   }
// });

startGame();

function startGame() {
  const deck = new Deck();
  deck.shuffle();

  // total: 13x4=52
  // K1-7  1,2,3,4,5,6,7 >> 28
  // rolled01:52-28=24

  //   const deckMidPoint = Math.ceil(deck.numberOfCards / 2)
  //   playerDeck   = new Deck(deck.cards.slice(0, deckMidPoint))
  //   computerDeck = new Deck(deck.cards.slice(deckMidPoint, deck.numberOfCards))

  kOneDeck = new Deck(deck.cards.slice(0, 1));
  kTwoDeck = new Deck(deck.cards.slice(1, 3));
  kThreeDeck = new Deck(deck.cards.slice(3, 6));
  kFourDeck = new Deck(deck.cards.slice(6, 10));
  kFiveDeck = new Deck(deck.cards.slice(10, 15));
  kSixDeck = new Deck(deck.cards.slice(15, 21));
  kSevenDeck = new Deck(deck.cards.slice(21, 28));
  cardsRolled0Deck = new Deck(deck.cards.slice(28, 52));
//   aOneDeck = new Deck()
//   aTwoDeck = new Deck()
//   aThreeDeck = new Deck()
//   aFourDeck = new Deck()
  
  inRound = false;
//   console.log(new Deck(deck.cards))
  console.log(kOneDeck);
//   console.log(kTwoDeck);
//   console.log(kThreeDeck);
//   console.log(kFourDeck);
//   console.log(kFiveDeck);
//   console.log(kSixDeck);
//   console.log(kSevenDeck);
//   console.log(cardsRolled0Deck);

  cleanBeforeRound();
}

function cleanBeforeRound() {
  inRound = false;
//   computerCardSlot.innerHTML = "";
//   playerCardSlot.innerHTML = "";

  aOneSlot.innerHTML = "";
  aTwoSlot.innerHTML = "";
  aThreeSlot.innerHTML = "";
//   aFourSlot.innerHTML = "";
//   cardsRolled0Slot.innerHTML = "";
//   cardsRolled1Slot.innerHTML = "";
//   blankSlot.innerHTML = "";
//   kOneSlot.innerHTML = "";
//   kTwoSlot.innerHTML = "";
//   kThreeSlot.innerHTML = "";
//   kFourSlot.innerHTML = "";
//   kFiveSlot.innerHTML = "";
//   kSixSlot.innerHTML = "";
//   kSevenSlot.innerHTML = "";

  updateDeckCount();
  // console.log(playerDeck.numberOfCards)
}

function clickCard() {
	inRound = true;
	console.log('clickCard has been clicked!!!')
}

function functionToExecute(){

}

function changeColor() {
	return 9;
}

function flipCards() {
  inRound = true;

//   const playerCard = playerDeck.pop();
//   const computerCard = computerDeck.pop();
//   const aOneSlotCard = aOneSlot.pop();

//   const aOneCard = aOneDeck.pop();
//   const aTwoCard = aTwoDeck.pop();
//   const aThreeCard = aThreeDeck.pop();
//   const aFourCard = aFourDeck.pop();
//   const cardsRolled0Card = cardsRolled0Deck.pop();
//   const cardsRolled1Card = cardsRolled1Deck.pop();
//   const blankCard = blankDeck.pop();
let kOneCard;

if (kOneDeck.numberOfCards>0){
	let kOneCard = kOneDeck.pop();
}

//   -----------------------------------------------------------------------
//   --------------------------------pop until you have cards in deck
//   -----------------------------------------------------------------------


//   const kTwoCard = kTwoDeck.pop();
//   const kThreeCard = kThreeDeck.pop();
//   const kFourCard = kFourDeck.pop();
//   const kFiveCard = kFiveDeck.pop();
//   const kSixCard = kSixDeck.pop();
//   const kSevenCard = kSevenDeck.pop();
	
// kOneSlot.appendChild(kOneCard.getHTML())
	console.log(kOneCard)
//   playerCardSlot.appendChild(playerCard.getHTML());
//   computerCardSlot.appendChild(computerCard.getHTML());

//   aOneSlot.appendChild(aOneCard.getHTML());
//   aTwoSlot.appendChild(aTwoCard.getHTML());
//   aThreeSlot.appendChild(aThreeCard.getHTML());
//   aFourSlot.appendChild(aFourCard.getHTML());
//   cardsRolled0Slot.appendChild(cardsRolled0Card.getHTML());
//   cardsRolled1Slot.appendChild(cardsRolled1Card.getHTML());
//   blankSlot.appendChild(blankCard.getHTML());
//   kOneSlot.appendChild(kOneCard.getHTML());
//   kTwoSlot.appendChild(kTwoCard.getHTML());
//   kThreeSlot.appendChild(kThreeCard.getHTML());
//   kFourSlot.appendChild(kFourCard.getHTML());
//   kFiveSlot.appendChild(kFiveCard.getHTML());
//   kSixSlot.appendChild(kSixCard.getHTML());
//   kSevenSlot.appendChild(kSevenCard.getHTML());

  // console.log(computerCard.getHTML())
  // console.log(playerCardSlot)
  updateDeckCount();
}

function updateDeckCount() {
	kOneSlot.innerText=kOneDeck.numberOfCards;

//   computerDeckElement.innerText = computerDeck.numberOfCards;
//   playerDeckElement.innerText = playerDeck.numberOfCards;
}

// computerCardSlot.appendChild(deck.cards[0].getHTML());
// playerCardSlot.appendChild(deck.cards[0].getHTML())
