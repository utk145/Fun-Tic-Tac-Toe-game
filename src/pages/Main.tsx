import { useEffect, useState } from "react";
import { Grid } from "semantic-ui-react";
import Button from "../components/Button";


type Player = 'X' | 'O' | null;

const Main: React.FunctionComponent = () => {

    const activePlayer = Math.round(Math.random() + 1) === 1 ? 'X' : 'O';
    const [currentPlayer, setCurrentPlayer] = useState<'X' | 'O'>(activePlayer);
    const [winner, setWinner] = useState<string | null>(null);

    useEffect(() => {
        const winningPlayer = calculateWinner(box);
        if (winningPlayer) {
            setWinner(`${winningPlayer} is the winner!! 🎉🎉. Reload For Another Game`)
        } else if (!winningPlayer && !box.filter(box => !box).length) {
            setWinner(`Reload For A New Game`)
        }
    });

    const calculateWinner = (box: Player[]) => {
        const possibleWinningCombinations = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 5, 6],[2,4,6]
        ];
        return possibleWinningCombinations.map(combo => {
            const [a, b, c] = combo;// destructuring
            console.log(a, b, c);

            if (box[a] && box[a] === box[b] && box[a] === box[c]) {
                return box[a];
            }
            return null;
        }).filter(data => data)[0];
    }


    // const [box, setBox] = useState(Array(9).fill(null));
    const [box, setBox] = useState<Player[]>(Array(9).fill(null)); // To define values inside the array we use this syntax 
    const setVal = (index: Number) => {
        const updated = box.map((value, indx) => {
            if (indx === index) {
                return currentPlayer;
            }
            return value;
        });
        setBox(updated);
        setCurrentPlayer(currentPlayer === 'X' ? 'O' : 'X');
    };

    // const Main: React.FC = () => {
    return (
        <div className="board">

            {winner ? <p>{winner}</p> : <p>Hey {currentPlayer}, Its your turn</p>}
            {/* <p>Hey {currentPlayer}, Its your turn</p> */}
            <Grid columns={3} centered>
                {/* This will be the game board  */}
                {
                    Array(9).fill(null).map((value, index) => (

                        // Here there will be the Semantic UI Element
                        <Grid.Column className="column">
                            {/* Sherni */}
                            <Button onClick={() => setVal(index)} value={box[index]} winner={winner} />
                        </Grid.Column>


                    ))
                }
            </Grid>
        </div>
    )
}
export default Main;

