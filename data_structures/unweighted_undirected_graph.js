// Example Graph:
//   2 -- 0
//  /  \
// 1 -- 3

// All representations could both be represented
// by Hash Tables (Objects in JS) or Arrays.

//Edge List (Showing connections between nodes/vertices)
const graph2 = [[0,2], [2,3], [2,1], [1,3]];

//Adjacent List (Indices in array represent the nodes, and elements represent the connections of the nodes)
//Nodes:        0     1       2       3
const graph1 = [[2], [2,3], [0,1,3], [1,2]]
const graph11 = {
  0: [2],
  1: [2,3],
  2: [0,1,3],
  3: [1,2]
}

//Adjacent Matrix (Show connections by node)
//Example: node '0' has connections with only one other node which is node '2'. Value 0 for false and 1 for True. Could also be used for Weighted Graphs by replacing 0/1 by the weight.

const graph0 = {
  0: [0, 0, 1, 0],
  1: [0, 0, 1, 1],
  2: [1, 1, 0, 1],
  3: [0, 1, 1, 0]
}

// Class Graph
// Undirected, Unweighted, using Adjacent List (Hash Table/Object)
// Well I prefered using HashSet instead of an Array for a node's connections
// HashSet is like an HashTable with the properties of an Array, it provides item
// uniqueness! So no need to worry about duplicate connections.

class Graph { 
  constructor() { 
    this.numberOfNodes = 0;
    this.adjacentList = {
    };
  }

  addVertex(node)  { 
    if (!node) {
      return false;
    }

    if (!this.adjacentList[node]) {
      this.adjacentList[node] = new Set();
      this.numberOfNodes++;
      return true;
    }

    return false;
  }

  addEdge(node1, node2) { 
    //undirected Graph

    if (!node1 || !node2) {
      return false;
    }

    if (this.adjacentList[node1] && this.adjacentList[node2]) {
      this.adjacentList[node1].add(node2);
      this.adjacentList[node2].add(node1);
      return true;
    }

    return false;
  }

  showConnections() { 
    const allNodes = Object.keys(this.adjacentList); 
    for (let node of allNodes) { 
      let nodeConnections = this.adjacentList[node]; 
      let connections = ""; 
      let vertex;
      for (vertex of nodeConnections) {
        connections += vertex + " ";
      } 
      console.log(node + "-->" + connections); 
    } 
  } 
} 

const myGraph = new Graph();
myGraph.addVertex('0');
myGraph.addVertex('1');
myGraph.addVertex('2');
myGraph.addVertex('3');
myGraph.addVertex('4');
myGraph.addVertex('5');
myGraph.addVertex('6');
myGraph.addEdge('3', '1'); 
myGraph.addEdge('3', '4'); 
myGraph.addEdge('4', '2'); 
myGraph.addEdge('4', '5'); 
myGraph.addEdge('1', '2'); 
myGraph.addEdge('1', '0'); 
myGraph.addEdge('0', '2'); 
myGraph.addEdge('6', '5');

myGraph.showConnections(); 
//Answer:
// 0-->1 2 
// 1-->3 2 0 
// 2-->4 1 0 
// 3-->1 4 
// 4-->3 2 5 
// 5-->4 6 
// 6-->5

// Serkan Sahin
// April 6th, 2020
