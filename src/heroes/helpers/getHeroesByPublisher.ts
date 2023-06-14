import { heroes } from '../data/heroes'

// interface Heroes {
//     id: string;
//     superhero: string;
//     publisher: string;
//     alter_ego: string;
//     first_appearance: string;
//     characters: string;
// }
//filtra mediate el publisher y retorna la informacion del heroes. si no se ingresa un publisher correcto retorna error
export const getHeroesByPublisher = (publisher: string): typeof heroes => {

    const validPublishers = ['DC Comics', 'Marvel Comics']
    if(!validPublishers.includes(publisher)){
        throw new Error(`${publisher} is not a valid publisher`)
    }
    // console.log(heroes.filter(heroe => heroe.publisher === publisher));
    
    return heroes.filter(heroe => heroe.publisher === publisher)
}