<template>
  <div v-if="currentProject">
    <div class="projectDetails">
      <div class="leftside">
        <div class="button-container">
        <button class="shift" @click="goToPreviousProject">Previous</button>
        <button class="shift" @click="goToNextProject">Next</button>
        </div>
        <h2 class="name">{{ currentProject.name }}</h2>
        <div class="text">
          <div v-for="(paragraph, index) in descriptionParagraphs" :key="index">
            <p class="desc">{{ paragraph }}</p>
          </div>
        </div>
      </div>
      <div class="rightside">
        <div class="project-image">
          <img :src="currentProject.images[currentImageIndex]" alt="Current Project Image">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted, watch, onBeforeUnmount, computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'

export default {
  setup() {
    const projects = ref([
      { id: 'Chess', name: 'Chess', images: [require('@/assets/ChessMove.png'), require('@/assets/ChessGameplay.png'), require('@/assets/ChessPromote.png'), require('@/assets/ChessForfeit.png'), ],
        description: 'I’ve been working on this chess game for around one year, this however has not been continuous work. This was a passion project that I’d have to put on hold from months on end in order to focus on my actual classes. However, over the summer I was able to start making some of the final touches on the game and I would say that it is around 95% complete, with checkmate still needing to be implemented and other quality of life changes to make the game experience nicer. This chess is broken down into 18 classes, each with their own functionality.' 
        + '\nThe game is set up in three separate classes, the draw class that draws the GUI, the pieceSetup class that sets up the board and hashmap, and the pieceFunctionality class, where the game logic is stored. There is another class called pieceUtils where functions and variables are stored, this class is inherited by almost every class. This game uses abstraction. I\'m aware that this level of abstraction is frowned upon as it can become hard to track where every variable is coming from. However, I began this project after only one full coding class in highschool.'
        + '\nHere is a detail of the piece classes and the classes that help them.' 
        + '\nPawns: There are 3 pawn classes, wPawn for white pawn, bPawn for black pawns and Pawn for the promotion of the pawns. Three classes were needed for the pawns because the pawns are the only pieces in chess with moves unique to the color. This means that the code for the wPawn and bPawn class is virtually the same, just the directions of the pawns moves has been modified for each class. En passant is also fully implemented in this game of chess and, like the rest of the moves the pawn makes, is unique to each pawn piece class. The Pawn class is used to generate a new JFrame that shows four options that the pawn can be promoted to. The game is halted until a selection has been made, upon which the game is continued.' 
        + '\nRook, Bishop and Queen: The queen is unique as the queen combines both the rook and the bishop\'s moves. In order to not repeat code between these pieces, I created an abstract class that stores the rook’s moves and the bishop’s moves. Then in the rook, bishop, and queen classes, I can inherit the abstract class and call the required function to display the correct moves.' 
        + '\nKnight: The knight class uses an IntStream to loop through an array of the possible knight moves, making sure that the moves are centered around the knight using an inline function. This is the simplest piece class.' 
        + '\nKing and check: The king follows the same principles as the knight class, using an IntStream and an inline function. The king however also needs to have a check feature to prevent the king from moving into check. There is a check class that will display the king\'s moves if the move isn’t in check, denoted by a yellow square, and a red square will be displayed if that move puts the king into check. There is also a castle function that checks if it is possible for the king to castle, this function modifies booleans to enable and disable castling.'
      },
      { id: 'Tic Tac Toe', name: 'Tic Tac Toe', images: [require('@/assets/ChessMove.png')], 
        description: 'This is a GUI based tic tac toe game that has an AI implemented by the minimax algorithm. This algorithm makes winning this game impossible. The minimax algorithm is a simple, recursive algorithm that will evaluate all possible outcomes of a given move and give that outcome a score, this is done through iterating through a tree holding the possible moves. After completing the evaluations of the many leaf nodes, the algorithm returns the move with the highest score. This process repeats until the game is completed, usually ending in a draw or the AI\'s victory.' 
        + '\nFor this game of tic tac toe, the human player will always take the first move, I believe that this is a big factory as to why the AI only ever wins or draws as with the human player going first, the AI is always reactionary and can implement the best moves based off of what the human does. I haven’t implemented the game to allow for the AI to go first, however if the AI was to go first, I believe that it would be possible to trick the AI and win a game.'
      },
      { id: 'NodeSMS', name: 'Node Student Management System', images: [require('@/assets/ChessGameplay.png')],
        description: 'Detailed discription goes here' 
      },
      { id: 'Hnefatafl', name: 'Hnefatafl', images:[require('@/assets/ChessPromote.png')],
        description: 'Detailed discription goes here' 
      },
      { id: 'Java Games', name: 'Java Games', images: [require('@/assets/ChessForfeit.png')],
        description: 'Detailed discription goes here' 
      },
    ])
    const currentProject = ref(null)
    const currentImageIndex = ref(0)
    const route = useRoute();
    const router = useRouter();

    onMounted(() => {
      let projectId = route.params.id
      currentProject.value = projects.value.find(p => p.id == projectId)
      const intervalID = setInterval(() => {
        currentImageIndex.value = (currentImageIndex.value + 1) % currentProject.value.images.length
        console.log(currentImageIndex.value)
      }, 2000)
      onBeforeUnmount(() => {
        clearInterval(intervalID)
      })
    })
    watch(() => route.params.id, (newId) => {
      currentProject.value = projects.value.find(p => p.id == newId)
    })
   
    const descriptionParagraphs = computed(() => {
      return currentProject.value.description.split('\n')
    })
    const goToPreviousProject = () => {
      let currentIndex = projects.value.findIndex(project => project.id === currentProject.value.id)
      let previousIndex = currentIndex === 0 ? projects.value.length - 1 : currentIndex - 1
      currentImageIndex.value = 0
      router.push(`/projects/${projects.value[previousIndex].id}`)
    }
    const goToNextProject = () => {
      let currentIndex = projects.value.findIndex(project => project.id === currentProject.value.id)
      let nextIndex = (currentIndex === projects.value.length - 1) ? 0 : currentIndex + 1
      currentImageIndex.value = 0
      router.push(`/projects/${projects.value[nextIndex].id}`)
    }
    return {
      currentProject,
      descriptionParagraphs,
      currentImageIndex,
      goToNextProject,
      goToPreviousProject
    }
  }
}
</script>

<style>
div[v-if="currentProject"] {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
.projectDetails {
  display: flex;
  justify-content: space-between;
}
.leftside, .rightside {
  flex: 1;
}
.name, .desc {
  text-align: left;
  margin-left: 20px;
  color: black;
}
.text {
  margin-left: 20px;
  border: 3px solid black;
  border-radius: 5px;
}
.desc {
  color: rgb(48, 0, 0);
  background: #ffcebf;
  padding: 0.5em;
  margin: 0;
  width: 38vw;
  height: auto;
}
.button-container {
  text-align: left;
  margin-left: 20px;
}
.project-image img{
  margin-left: -10px;
  width: 65vw;
  height: auto;
  text-align: right;
  transform: scale(0.71);
}
.shift {
  margin-inline: 3px;
  border-radius: 5px;
  background-color: black;
  color: rgb(204, 0, 0);
}
.shift:hover {
  cursor: pointer;
}
.shift:active {
  background-color: rgb(28, 28, 28);
  color: rgb(255, 0, 0);
}
</style>