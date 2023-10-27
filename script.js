/*
    Assignment 05
*/

class ContentItem {
    constructor(id, name, description, categoryGenre) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.categoryGenre = categoryGenre;
    }

    updateContentItem(id, name, description, categoryGenre) {
        if (this.id === id) {
            if (name !== null) this.name = name;
            if (description !== null) this.description = description;
            if (categoryGenre !== null) this.categoryGenre = categoryGenre;
        }
    }

    toString() {
        return `
            <div id="content-item-${this.id}" class="content-item-wrapper">
                <h2>${this.name}</h2>
                <p>${this.description}</p>
                <div>${this.categoryGenre}</div>
            </div>
        `;
    }
}
const contentItems = [
    new ContentItem(0,"Jujutsu Kaison","Idly indulging in baseless paranormal activities with the Occult Club, high schooler Yuuji Itadori spends his days at either the clubroom or the hospital, where he visits his bedridden grandfather. However, this leisurely lifestyle soon takes a turn for the strange when he unknowingly encounters a cursed item. Triggering a chain of supernatural occurrences, Yuuji finds himself suddenly thrust into the world of Curses—dreadful beings formed from human malice and negativity—after swallowing the said item, revealed to be a finger belonging to the demon Sukuna Ryoumen, the King of Curses.","Fantasy"),
    new ContentItem(1, "Hunter X Hunter", "Hunters devote themselves to accomplishing hazardous tasks, all from traversing the world's uncharted territories to locating rare items and monsters. Before becoming a Hunter, one must pass the Hunter Examination—a high-risk selection process in which most applicants end up handicapped or worse, deceased.", "Adventure"),
    new ContentItem(2, "Naruto: Shippuuden", "It has been two and a half years since Naruto Uzumaki left Konohagakure, the Hidden Leaf Village, for intense training following events which fueled his desire to be stronger. Now Akatsuki, the mysterious organization of elite rogue ninja, is closing in on their grand plan which may threaten the safety of the entire shinobi world.", "Action"),
    new ContentItem(3, "Death Note", "Brutal murders, petty thefts, and senseless violence pollute the human world. In contrast, the realm of death gods is a humdrum, unchanging gambling den. The ingenious 17-year-old Japanese student Light Yagami and sadistic god of death Ryuk share one belief: their worlds are rotten.", "Suspense"),
    new ContentItem(4, "Demon Slayer", "Ever since the death of his father, the burden of supporting the family has fallen upon Tanjirou Kamado's shoulders. Though living impoverished on a remote mountain, the Kamado family are able to enjoy a relatively peaceful and happy life. One day, Tanjirou decides to go down to the local village to make a little money selling charcoal. On his way back, night falls, forcing Tanjirou to take shelter in the house of a strange man, who warns him of the existence of flesh-eating demons that lurk in the woods at night.", "Adventure"),
];


$(document).ready(function (){
        const $contentItemList = $("#content-item-list");
    
        contentItems.forEach((contentItem) => {
            $contentItemList.append(contentItem.toString());
        });
    
    
        $(".content-item-wrapper").css({
            border: "1px solid #000",
            width: "300px",
            padding: "10px",
            margin: "10px auto",
        });
    });
    


